#!/bin/sh
set -eu
export LC_ALL=C

TARGET_HOST=as.tbank.ru
URL="https://$TARGET_HOST/"
N=${N:-150}
PAUSE=${PAUSE:-1}
CONNECT_TIMEOUT=${CONNECT_TIMEOUT:-15}
MAX_TIME=${MAX_TIME:-120}
probe_uid=$(id -u)

case "$N" in ''|*[!0-9]*) echo '[SETUP] N должно быть положительным числом.' >&2; exit 2 ;; esac
[ "$N" -gt 0 ] || exit 2

as_root() {
    if [ "$probe_uid" -eq 0 ]; then "$@"; else sudo -n "$@"; fi
}

# Проверяем и при необходимости устанавливаем только curl и tcpdump.
set --
for tool in curl tcpdump; do
    if ! command -v "$tool" >/dev/null 2>&1; then
        set -- "$@" "$tool"
    fi
done

if [ "$#" -gt 0 ]; then
    printf '[SETUP] Нужно установить: %s\n' "$*"
    if [ "$probe_uid" -ne 0 ]; then
        if ! command -v sudo >/dev/null 2>&1 || ! sudo -n true; then
            echo '[SETUP] Для установки нужны root-права или доступный sudo.' >&2
            exit 1
        fi
    fi

    if command -v apk >/dev/null 2>&1; then
        manager=apk
        as_root apk update
        if plan=$(as_root env LC_ALL=C apk add --simulate --no-upgrade "$@" 2>&1); then :; else
            printf '%s\n' "$plan" >&2
            exit 1
        fi
    elif command -v apt-get >/dev/null 2>&1; then
        manager=apt
        as_root apt-get update
        if plan=$(as_root env LC_ALL=C apt-get -s --no-install-recommends --no-upgrade install "$@" 2>&1); then :; else
            printf '%s\n' "$plan" >&2
            exit 1
        fi
    else
        echo '[SETUP] Не найден apk или apt-get.' >&2
        exit 1
    fi

    # Если план затрагивает пакеты сертификатов, ничего не устанавливаем.
    case "$plan" in
        *"Inst ca-"*|*"Conf ca-"*|*"Remv ca-"*|*"Installing ca-"*|*"Upgrading ca-"*|*"Reinstalling ca-"*|*"Purging ca-"*|*"Removing ca-"*|*"Downgrading ca-"*)
            printf '%s\n' "$plan" >&2
            echo '[SETUP] Остановлено: установка затронет пакеты сертификатов.' >&2
            exit 1
            ;;
    esac

    if [ "$manager" = apk ]; then
        as_root apk add --no-upgrade "$@"
    else
        as_root env DEBIAN_FRONTEND=noninteractive \
            apt-get install -y --no-install-recommends --no-upgrade "$@"
    fi
fi

for tool in curl tcpdump mktemp cat rm sleep date id; do
    command -v "$tool" >/dev/null 2>&1 || {
        printf '[SETUP] Не хватает инструмента: %s\n' "$tool" >&2
        exit 1
    }
done

probe_dir=$(mktemp -d "${TMPDIR:-/tmp}/tbank-tls.XXXXXX") || exit 1
dump_pid=''
capture_ok=yes

cleanup() {
    if [ -n "$dump_pid" ]; then
        kill "$dump_pid" 2>/dev/null || :
        wait "$dump_pid" 2>/dev/null || :
        dump_pid=''
    fi
    rm -rf -- "$probe_dir"
}
trap cleanup 0
trap 'exit 130' INT
trap 'exit 143' TERM
trap 'exit 129' HUP

capture() {
    # Фильтруем все TCP/443: DNS может вернуть новый IP между запросами.
    # В конце покажем только пакеты с локальным портом неудачного curl.
    if [ "$probe_uid" -ne 0 ] && command -v sudo >/dev/null 2>&1 && sudo -n true 2>/dev/null; then
        exec sudo -n tcpdump -p -i any -nn -tttt -l 'tcp port 443'
    fi
    exec tcpdump -p -i any -nn -tttt -l 'tcp port 443'
}

capture > "$probe_dir/tcp.log" 2>&1 &
dump_pid=$!
sleep 1
if ! kill -0 "$dump_pid" 2>/dev/null; then
    wait "$dump_pid" 2>/dev/null || :
    dump_pid=''
    capture_ok=no
fi

ok=0
failed=0
http_4xx=0
http_5xx=0
printf '[START] %s — %s запросов. Прогресс: ' "$URL" "$N"

i=1
while [ "$i" -le "$N" ]; do
    # Сохраняем подробный вывод, но успешные запросы не печатаем.
    if curl -q --noproxy '*' -sS -v --trace-time \
        --connect-timeout "$CONNECT_TIMEOUT" --max-time "$MAX_TIME" \
        --output /dev/null \
        --write-out '\n[RESULT] http=%{http_code} remote=%{remote_ip}:%{remote_port} local=%{local_ip}:%{local_port} dns=%{time_namelookup}s tcp_ready=%{time_connect}s tls_ready=%{time_appconnect}s total=%{time_total}s\n' \
        --url "$URL" > "$probe_dir/curl-$i.log" 2>&1; then
        curl_exit=0
        ok=$((ok + 1))
    else
        curl_exit=$?
        failed=$((failed + 1))
    fi

    http=000
    local_port=''
    remote=''
    while IFS= read -r line; do
        case "$line" in
            '[RESULT] '*)
                for field in $line; do
                    case "$field" in
                        http=*) http=${field#http=} ;;
                        remote=*) remote=${field#remote=} ;;
                        local=*) endpoint=${field#local=}; local_port=${endpoint##*:} ;;
                    esac
                done
                ;;
        esac
    done < "$probe_dir/curl-$i.log"

    case "$http" in 4??) http_4xx=$((http_4xx + 1)) ;; esac
    case "$http" in 5??) http_5xx=$((http_5xx + 1)) ;; esac

    if [ "$curl_exit" -ne 0 ]; then
        printf '%s|%s|%s|%s|%s\n' "$i" "$curl_exit" "$http" "$local_port" "$remote" \
            >> "$probe_dir/failures"
    fi

    printf '.'
    i=$((i + 1))
    if [ "$i" -le "$N" ]; then sleep "$PAUSE"; fi
done
printf '\n'

# Дожидаемся последних пакетов и останавливаем свой tcpdump.
sleep 1
if [ -n "$dump_pid" ]; then
    kill "$dump_pid" 2>/dev/null || :
    wait "$dump_pid" 2>/dev/null || :
    dump_pid=''
fi

printf '\n========== ИТОГ ==========' 
printf '\nВсего запросов:       %s' "$N"
printf '\nБез ошибок curl:      %s' "$ok"
printf '\nС ошибками curl:      %s' "$failed"
printf '\nHTTP 4xx:             %s' "$http_4xx"
printf '\nHTTP 5xx:             %s\n' "$http_5xx"

if [ "$capture_ok" = no ]; then
    printf '\n[TCP] Не удалось запустить tcpdump:\n'
    cat "$probe_dir/tcp.log"
fi

if [ "$failed" -eq 0 ]; then
    printf '\nОшибок соединения или TLS не зафиксировано.\n[DONE]\n'
    exit 0
fi

printf '\n========== ПОДРОБНОСТИ ВСЕХ ОШИБОК ==========' 
while IFS='|' read -r request_no curl_exit http local_port remote; do
    printf '\n\n========== ОШИБКА %s/%s ==========' "$request_no" "$N"
    printf '\ncurl_exit=%s, http=%s, remote=%s, local_port=%s\n' \
        "$curl_exit" "$http" "$remote" "${local_port:-?}"
    printf '\n[CURL] Подробный TLS/HTTP-вывод:\n'
    cat "$probe_dir/curl-$request_no.log"

    printf '\n[TCP] Пакеты этого соединения:\n'
    if [ "$capture_ok" = no ]; then
        printf 'Захват tcpdump недоступен.\n'
    elif [ -z "$local_port" ] || [ "$local_port" = 0 ]; then
        printf 'curl не сообщил локальный порт (ошибка до TCP-подключения).\n'
    else
        packets=0
        while IFS= read -r packet; do
            case "$packet" in
                *."$local_port":*|*."$local_port "*)
                    printf '%s\n' "$packet"
                    packets=$((packets + 1))
                    ;;
            esac
        done < "$probe_dir/tcp.log"
        if [ "$packets" -eq 0 ]; then
            printf 'Пакеты с локальным портом %s не найдены.\n' "$local_port"
        fi
    fi
done < "$probe_dir/failures"

printf '\n[DONE]\n'
