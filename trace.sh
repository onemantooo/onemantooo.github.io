sh <<'SH'
set -eu
export LC_ALL=C

TARGET_HOST=as.tbank.ru
URL="https://$TARGET_HOST/"
N=30
PAUSE=1
CONNECT_TIMEOUT=15
MAX_TIME=120

probe_uid=$(id -u)

as_root() {
    if [ "$probe_uid" -eq 0 ]; then
        "$@"
    else
        sudo -n "$@"
    fi
}

# Проверяем только необходимые инструменты.
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
        if plan=$(as_root env LC_ALL=C \
            apk add --simulate --no-upgrade "$@" 2>&1); then
            :
        else
            printf '%s\n' "$plan" >&2
            exit 1
        fi
    elif command -v apt-get >/dev/null 2>&1; then
        manager=apt
        as_root apt-get update
        if plan=$(as_root env LC_ALL=C \
            apt-get -s --no-install-recommends --no-upgrade \
            install "$@" 2>&1); then
            :
        else
            printf '%s\n' "$plan" >&2
            exit 1
        fi
    else
        echo '[SETUP] Не найден apk или apt-get.' >&2
        exit 1
    fi

    # Запрещаем изменение пакетов сертификатов, включая зависимости.
    case "$plan" in
        *"Inst ca-"*|*"Conf ca-"*|*"Remv ca-"*|*"Installing ca-"*|*"Upgrading ca-"*|*"Reinstalling ca-"*|*"Purging ca-"*|*"Removing ca-"*|*"Downgrading ca-"*)
            printf '%s\n' "$plan" >&2
            echo '[SETUP] Установка остановлена: в плане есть пакет сертификатов.' >&2
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

for tool in curl tcpdump; do
    command -v "$tool" >/dev/null 2>&1 || {
        printf '[SETUP] Инструмент недоступен: %s\n' "$tool" >&2
        exit 1
    }
done

# Завершаем собственный tcpdump при окончании теста или Ctrl+C.
dump_pid=''
cleanup() {
    if [ -n "$dump_pid" ]; then
        kill "$dump_pid" 2>/dev/null || :
        wait "$dump_pid" 2>/dev/null || :
    fi
}
trap cleanup 0
trap 'exit 130' INT
trap 'exit 143' TERM
trap 'exit 129' HUP

capture() {
    if [ "$probe_uid" -ne 0 ] \
        && command -v sudo >/dev/null 2>&1 \
        && sudo -n true 2>/dev/null; then
        exec sudo -n tcpdump -p -i any -nn -tttt -l \
            "host $TARGET_HOST and tcp port 443"
    fi
    exec tcpdump -p -i any -nn -tttt -l \
        "host $TARGET_HOST and tcp port 443"
}

printf '[TCP] Захват пакетов для %s:443\n' "$TARGET_HOST"
capture &
dump_pid=$!

sleep 1
if ! kill -0 "$dump_pid" 2>/dev/null; then
    wait "$dump_pid" 2>/dev/null || :
    dump_pid=''
    echo '[TCP] Захват не запустился — причина выше. Запросы всё равно выполнятся.' >&2
fi

curl -V

i=1
while [ "$i" -le "$N" ]; do
    printf '\n========== REQUEST %s/%s | %s ==========\n' \
        "$i" "$N" "$(date -u '+%Y-%m-%dT%H:%M:%SZ')"

    if curl -q --noproxy '*' -sS -v --trace-time \
        --connect-timeout "$CONNECT_TIMEOUT" \
        --max-time "$MAX_TIME" \
        --output /dev/null \
        --write-out '\n[RESULT] http=%{http_code} remote=%{remote_ip}:%{remote_port} local=%{local_ip}:%{local_port} dns=%{time_namelookup}s tcp_ready=%{time_connect}s tls_ready=%{time_appconnect}s total=%{time_total}s\n' \
        --url "$URL" 2>&1; then
        curl_exit=0
    else
        curl_exit=$?
    fi

    printf '[END %s/%s] curl_exit=%s\n' "$i" "$N" "$curl_exit"
    i=$((i + 1))
    if [ "$i" -le "$N" ]; then sleep "$PAUSE"; fi
done

sleep 1
echo '[DONE]'
SH
