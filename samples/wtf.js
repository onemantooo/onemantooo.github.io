(self["webpackChunkwidget_next"] = self["webpackChunkwidget_next"] || []).push([
    [2487, 9534], {
        48188: function(e, t, i) {
            "use strict";
            i.d(t, {
                p: function() {
                    return r
                }
            });
            var n = i(95082),
                a = i(47327),
                o = i(42994),
                s = i(2262);
            class r {
                constructor() {
                    (0, a.Z)(this, "paymentProcessor", void 0), (0, a.Z)(this, "parentConnector", void 0), (0, a.Z)(this, "terminalInfo", void 0), (0, a.Z)(this, "paymentOptions", void 0), (0, a.Z)(this, "merchantOptions", void 0), (0, a.Z)(this, "payment", void 0), (0, a.Z)(this, "masterpass", void 0), (0, a.Z)(this, "window", void 0), (0, a.Z)(this, "showWidgetContentResolver", new o.V1), (0, a.Z)(this, "email", (0, s.iH)()), (0, a.Z)(this, "paymentProcess", {
                        paymentMethod: null,
                        cardNumberAutofilled: !1,
                        cardExpirationAutofilled: !1
                    })
                }
                getShowWidgetContent() {
                    return this.showWidgetContentResolver
                }
                updatePaymentProcess(e) {
                    this.paymentProcess = (0, n.Z)((0, n.Z)({}, this.paymentProcess), e)
                }
                getPaymentProcessData() {
                    return this.paymentProcess
                }
            }
        },
        55844: function(e, t, i) {
            "use strict";
            var n;
            i.d(t, {
                    J: function() {
                        return n
                    }
                }),
                function(e) {
                    e["Widget"] = "widget", e["Blocks"] = "blocks"
                }(n || (n = {}))
        },
        32030: function(e, t, i) {
            "use strict";
            i.d(t, {
                k: function() {
                    return o
                }
            });
            var n = i(47327),
                a = (i(76265), i(26050));
            class o {
                constructor(e, t) {
                    var i;
                    (0, n.Z)(this, "Logo", void 0), (0, n.Z)(this, "TerminalUrl", void 0), (0, n.Z)(this, "IsCharity", void 0), (0, n.Z)(this, "IsTest", void 0), (0, n.Z)(this, "ExternalPaymentMethods", void 0), (0, n.Z)(this, "AgreementPath", void 0), (0, n.Z)(this, "IsCvvRequired", void 0), (0, n.Z)(this, "SkipExpiryValidation", void 0), (0, n.Z)(this, "IsAllowedNotSanctionedCards", void 0), (0, n.Z)(this, "IsQiwi", void 0), (0, n.Z)(this, "SupportedCards", void 0), (0, n.Z)(this, "IsSaveCard", void 0), (0, n.Z)(this, "IsPayOrderingEnabled", void 0), (0, n.Z)(this, "TerminalName", void 0), (0, n.Z)(this, "DisplayAdvertiseBannerOnWidget", void 0), (0, n.Z)(this, "BannerAdvertiseUrl", void 0), this.Logo = t, this.TerminalUrl = e.TerminalUrl, this.IsCharity = e.IsCharity, this.IsTest = e.IsTest, this.ExternalPaymentMethods = [...e.ExternalPaymentMethods], this.AgreementPath = e.AgreementPath, this.IsCvvRequired = e.IsCvvRequired, this.SkipExpiryValidation = e.SkipExpiryValidation, this.IsAllowedNotSanctionedCards = e.Features.IsAllowedNotSanctionedCards, this.IsQiwi = e.Features.IsQiwi, this.SupportedCards = null !== (i = e.SupportedCards) && void 0 !== i ? i : [], this.IsSaveCard = e.Features.IsSaveCard, this.IsPayOrderingEnabled = !!e.Features.IsPayOrderingEnabled, this.TerminalName = e.TerminalName, this.DisplayAdvertiseBannerOnWidget = e.DisplayAdvertiseBannerOnWidget, this.BannerAdvertiseUrl = e.BannerAdvertiseUrl
                }
                static async create(e, t, i) {
                    let n = null;
                    if (null !== t && void 0 !== t && t.origin.endsWith(".cloudpayments.ru") && i) {
                        if ((0, a.kG)(i) && await (0, a.Pd)(i)) n = i;
                        else if ((0, a.jv)(i)) try {
                            n = await (0, a.ZJ)(i)
                        } catch (s) {
                            n = i
                        }
                    } else if (null != e.LogoUrl) try {
                        n = await (0, a.ZJ)(e.LogoUrl)
                    } catch (r) {
                        n = e.LogoUrl
                    }
                    return new o(e, n)
                }
            }
        },
        29534: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                configComponents: function() {
                    return s
                },
                configuration: function() {
                    return o
                },
                shouldHide: function() {
                    return r
                }
            });
            var n = i(11204),
                a = i(79198);
            const o = {
                    api: {
                        host: "https://api.cloudpayments.ru"
                    },
                    widget: {
                        baseUrl: "https://widget.cloudpayments.ru",
                        isProd: "true"
                    },
                    defaultLanguage: n.U.Ru,
                    amountSettings: {
                        firstDelimiter: "$& ",
                        secondDelimiter: ","
                    },
                    defaultPaymentMethodsOrder: [a.L5.TinkoffPay, a.L5.YandexPay, a.L5.MirPay, a.L5.SbpPay, a.L5.TcsBnplDolyame, a.L5.TinkoffInstallmentPay, a.L5.ApplePay, a.L5.GooglePay]
                },
                s = [{
                    name: "SecuredIcon",
                    path: "SecuredBy/SecuredByCloud"
                }],
                r = !1
        },
        54852: function(e, t, i) {
            "use strict";
            i.d(t, {
                A: function() {
                    return R
                }
            });
            var n = i(47327);
            i(70560);
            let a, o, s, r, c;
            (function(e) {
                e["Call"] = "call", e["Reply"] = "reply", e["Syn"] = "syn", e["SynAck"] = "synAck", e["Ack"] = "ack"
            })(a || (a = {})),
            function(e) {
                e["Fulfilled"] = "fulfilled", e["Rejected"] = "rejected"
            }(o || (o = {})),
            function(e) {
                e["ConnectionDestroyed"] = "ConnectionDestroyed", e["ConnectionTimeout"] = "ConnectionTimeout", e["NoIframeSrc"] = "NoIframeSrc"
            }(s || (s = {})),
            function(e) {
                e["DataCloneError"] = "DataCloneError"
            }(r || (r = {})),
            function(e) {
                e["Message"] = "message"
            }(c || (c = {}));
            var l = (e, t) => {
                    const i = [];
                    let n = !1;
                    return {
                        destroy(a) {
                            n || (n = !0, t(`${e}: Destroying connection`), i.forEach((e => {
                                e(a)
                            })))
                        },
                        onDestroy(e) {
                            n ? e() : i.push(e)
                        }
                    }
                },
                d = (i(76265), e => (...t) => {
                    e && console.log("[Penpal]", ...t)
                });
            i(64043);
            i(21057);
            const u = ({
                    name: e,
                    message: t,
                    stack: i
                }) => ({
                    name: e,
                    message: t,
                    stack: i
                }),
                p = e => {
                    const t = new Error;
                    return Object.keys(e).forEach((i => t[i] = e[i])), t
                };
            var m = (e, t, i) => {
                const {
                    localName: n,
                    local: s,
                    remote: l,
                    originForSending: d,
                    originForReceiving: p
                } = e;
                let m = !1;
                const h = e => {
                    if (e.source !== l || e.data.penpal !== a.Call) return;
                    if ("*" !== p && e.origin !== p) return void i(`${n} received message from origin ${e.origin} which did not match expected origin ${p}`);
                    const s = e.data,
                        {
                            methodName: c,
                            args: h,
                            id: y
                        } = s;
                    i(`${n}: Received ${c}() call`);
                    const w = e => t => {
                        if (i(`${n}: Sending ${c}() reply`), m) return void i(`${n}: Unable to send ${c}() reply due to destroyed connection`);
                        const s = {
                            penpal: a.Reply,
                            id: y,
                            resolution: e,
                            returnValue: t
                        };
                        e === o.Rejected && t instanceof Error && (s.returnValue = u(t), s.returnValueIsError = !0);
                        try {
                            l.postMessage(s, d)
                        } catch (p) {
                            if (p.name === r.DataCloneError) {
                                const e = {
                                    penpal: a.Reply,
                                    id: y,
                                    resolution: o.Rejected,
                                    returnValue: u(p),
                                    returnValueIsError: !0
                                };
                                l.postMessage(e, d)
                            }
                            throw p
                        }
                    };
                    new Promise((e => e(t[c].apply(t, h)))).then(w(o.Fulfilled), w(o.Rejected))
                };
                return s.addEventListener(c.Message, h), () => {
                    m = !0, s.removeEventListener(c.Message, h)
                }
            };
            i(278);
            let h = 0;
            var y = () => ++h;
            const w = ".",
                b = e => e ? e.split(w) : [],
                g = e => e.join(w),
                f = (e, t) => {
                    const i = b(t || "");
                    return i.push(e), g(i)
                },
                v = (e, t, i) => {
                    const n = b(t);
                    return n.reduce(((e, t, a) => ("undefined" === typeof e[t] && (e[t] = {}), a === n.length - 1 && (e[t] = i), e[t])), e), e
                },
                P = (e, t) => {
                    const i = {};
                    return Object.keys(e).forEach((n => {
                        const a = e[n],
                            o = f(n, t);
                        "object" === typeof a && Object.assign(i, P(a, o)), "function" === typeof a && (i[o] = a)
                    })), i
                },
                C = e => {
                    const t = {};
                    for (const i in e) v(t, i, e[i]);
                    return t
                };
            var k = (e, t, i, n, r) => {
                    const {
                        localName: l,
                        local: d,
                        remote: u,
                        originForSending: m,
                        originForReceiving: h
                    } = t;
                    let w = !1;
                    r(`${l}: Connecting call sender`);
                    const b = e => (...t) => {
                            let i;
                            r(`${l}: Sending ${e}() call`);
                            try {
                                u.closed && (i = !0)
                            } catch (b) {
                                i = !0
                            }
                            if (i && n(), w) {
                                const t = new Error(`Unable to send ${e}() call due to destroyed connection`);
                                throw t.code = s.ConnectionDestroyed, t
                            }
                            return new Promise(((i, n) => {
                                const s = y(),
                                    w = t => {
                                        if (t.source !== u || t.data.penpal !== a.Reply || t.data.id !== s) return;
                                        if ("*" !== h && t.origin !== h) return void r(`${l} received message from origin ${t.origin} which did not match expected origin ${h}`);
                                        const m = t.data;
                                        r(`${l}: Received ${e}() reply`), d.removeEventListener(c.Message, w);
                                        let y = m.returnValue;
                                        m.returnValueIsError && (y = p(y)), (m.resolution === o.Fulfilled ? i : n)(y)
                                    };
                                d.addEventListener(c.Message, w);
                                const b = {
                                    penpal: a.Call,
                                    id: s,
                                    methodName: e,
                                    args: t
                                };
                                u.postMessage(b, m)
                            }))
                        },
                        g = i.reduce(((e, t) => (e[t] = b(t), e)), {});
                    return Object.assign(e, C(g)), () => {
                        w = !0
                    }
                },
                S = (e, t) => {
                    let i;
                    return void 0 !== e && (i = window.setTimeout((() => {
                        const i = new Error(`Connection timed out after ${e}ms`);
                        i.code = s.ConnectionTimeout, t(i)
                    }), e)), () => {
                        clearTimeout(i)
                    }
                },
                A = (i(52003), i(68518), (e, t, i, n) => {
                    const {
                        destroy: o,
                        onDestroy: s
                    } = i;
                    return i => {
                        let r = e instanceof RegExp ? e.test(i.origin) : "*" === e || e === i.origin;
                        if (!r) return void n(`Child: Handshake - Received SYN-ACK from origin ${i.origin} which did not match expected origin ${e}`);
                        n("Child: Handshake - Received SYN-ACK, responding with ACK");
                        const c = "null" === i.origin ? "*" : i.origin,
                            l = {
                                penpal: a.Ack,
                                methodNames: Object.keys(t)
                            };
                        window.parent.postMessage(l, c);
                        const d = {
                                localName: "Child",
                                local: window,
                                remote: window.parent,
                                originForSending: c,
                                originForReceiving: i.origin
                            },
                            u = m(d, t, n);
                        s(u);
                        const p = {},
                            h = k(p, d, i.data.methodNames, o, n);
                        return s(h), p
                    }
                });
            const I = () => {
                try {
                    clearTimeout()
                } catch (e) {
                    return !1
                }
                return !0
            };
            var O = (e = {}) => {
                const {
                    parentOrigin: t = "*",
                    methods: i = {},
                    timeout: n,
                    debug: o = !1
                } = e, s = d(o), r = l("Child", s), {
                    destroy: u,
                    onDestroy: p
                } = r, m = P(i), h = A(t, m, r, s), y = () => {
                    s("Child: Handshake - Sending SYN");
                    const e = {
                            penpal: a.Syn
                        },
                        i = t instanceof RegExp ? "*" : t;
                    window.parent.postMessage(e, i)
                }, w = new Promise(((e, t) => {
                    const i = S(n, u),
                        o = t => {
                            if (I() && t.source === parent && t.data && t.data.penpal === a.SynAck) {
                                const n = h(t);
                                n && (window.removeEventListener(c.Message, o), i(), e(n))
                            }
                        };
                    window.addEventListener(c.Message, o), y(), p((e => {
                        window.removeEventListener(c.Message, o), e && t(e)
                    }))
                }));
                return {
                    promise: w,
                    destroy() {
                        u()
                    }
                }
            };
            class R {
                constructor(e) {
                    (0, n.Z)(this, "connection", null), (0, n.Z)(this, "connectionHandler", void 0), (0, n.Z)(this, "connectionResolvers", []), this.connectionHandler = O({
                        methods: e
                    }), this.connectionHandler.promise.then((e => {
                        this.connection = e, this.connectionResolvers.forEach((t => t(e)))
                    }))
                }
                getConnection() {
                    return new Promise((e => {
                        null != this.connection ? e(this.connection) : this.connectionResolvers.push(e)
                    }))
                }
            }
        },
        32448: function(e, t, i) {
            "use strict";
            i.d(t, {
                f: function() {
                    return a
                }
            });
            var n = i(47327);
            class a {
                constructor(e, t) {
                    var i = this;
                    (0, n.Z)(this, "runtimeConfiguration", void 0), (0, n.Z)(this, "apiClient", void 0), (0, n.Z)(this, "charge", (async function(e) {
                        return i.apiClient.charge(e)
                    })), (0, n.Z)(this, "auth", (async function(e) {
                        return i.apiClient.auth(e)
                    })), (0, n.Z)(this, "chargeByMasterPass", (async function(e) {
                        return i.apiClient.chargeByMasterPass(e)
                    })), (0, n.Z)(this, "authByMasterPass", (async function(e) {
                        return i.apiClient.authByMasterPass(e)
                    })), (0, n.Z)(this, "startApplePaySession", (async function(e) {
                        return i.apiClient.startApplePaySession(e)
                    })), (0, n.Z)(this, "getTerminalInfo", (async function(e, t, n) {
                        return i.apiClient.terminalInfo(e, t, n || i.runtimeConfiguration.defaultLanguage)
                    })), (0, n.Z)(this, "masterPassRequestToken", (async function(e) {
                        return i.apiClient.masterPassRequestToken(e)
                    })), (0, n.Z)(this, "masterPassSaveCard", (async function(e) {
                        return i.apiClient.masterPassSaveCard(e)
                    })), (0, n.Z)(this, "binInfo", (async function(e, t, n, a, o) {
                        return i.apiClient.binInfo(e, t, n, a, o)
                    })), (0, n.Z)(this, "createSBPLink", (async function(e) {
                        return i.apiClient.QRApi.createSBPLink(e)
                    })), (0, n.Z)(this, "createSBPQRImage", (async function(e) {
                        return i.apiClient.QRApi.createSBPQRImage(e)
                    })), (0, n.Z)(this, "createTinkoffPayLink", (async function(e) {
                        return i.apiClient.QRApi.createTinkoffLink(e)
                    })), (0, n.Z)(this, "createTinkoffPayQrImage", (async function(e) {
                        return i.apiClient.QRApi.createTinkoffQRImage(e)
                    })), (0, n.Z)(this, "waitQrPaymentStatus", (async function(e) {
                        return i.apiClient.QRApi.waitStatus(e)
                    })), (0, n.Z)(this, "createMirPayLink", (async function(e) {
                        return i.apiClient.MIRApi.createDeepLink(e)
                    })), (0, n.Z)(this, "waitMirPayCryptogram", (async function(e) {
                        return i.apiClient.MIRApi.getCryptogram(e)
                    })), (0, n.Z)(this, "createAltPayTransaction", (async function(e) {
                        return i.apiClient.AltPayApi.createAltPayTransaction(e)
                    })), this.runtimeConfiguration = t, this.apiClient = e
                }
                sentPaymentDetails(e) {
                    return this.apiClient.AltPayApi.sentPaymentDetails(e)
                }
            }
        },
        57456: function(e, t, i) {
            "use strict";
            i.d(t, {
                t: function() {
                    return m
                }
            });
            var n = i(95082),
                a = i(47327),
                o = (i(86544), i(26050)),
                s = i(79198),
                r = i(50878),
                c = i(42238);
            i(52003), i(68518), i(64043), i(76265), i(78730), i(79307), i(98858), i(61318), i(33228);

            function l(e) {
                if (!e) return;
                const t = new RegExp("^(.*)://(.*)", "mi"),
                    i = t.test(e) ? e : `https://${e}`;
                try {
                    return new URL(i).toString()
                } catch (n) {
                    return
                }
            }
            var d = i(99989),
                u = i(29534),
                p = i(84778);
            class m {
                constructor(e, t, i, n, o, s) {
                    (0, a.Z)(this, "paymentOptions", void 0), (0, a.Z)(this, "widgetOptions", void 0), (0, a.Z)(this, "merchantOptions", void 0), (0, a.Z)(this, "terminalInfo", void 0), (0, a.Z)(this, "scenario", void 0), (0, a.Z)(this, "runtimeConfiguration", void 0), this.paymentOptions = e, this.widgetOptions = t, this.merchantOptions = i, this.terminalInfo = n, this.scenario = o, this.runtimeConfiguration = s
                }
                createBasePayRequest(e) {
                    var t;
                    const i = {
                        PublicId: this.paymentOptions.publicId,
                        Amount: this.paymentOptions.amount,
                        Currency: this.paymentOptions.currency,
                        Description: this.paymentOptions.description,
                        CultureName: null !== (t = this.widgetOptions.language) && void 0 !== t ? t : this.runtimeConfiguration.defaultLanguage,
                        PaymentUrl: o.cQ.getHostnameFromUrl(this.merchantOptions.origin),
                        InvoiceId: this.paymentOptions.invoiceId,
                        AccountId: this.paymentOptions.accountId,
                        JsonData: this.paymentOptions.data,
                        InfoShopData: this.paymentOptions.infoShopData,
                        LocalOrder: this.paymentOptions.localOrder,
                        PayerServiceFee: this.paymentOptions.payerServiceFee,
                        Payer: this.paymentOptions.payer,
                        Email: e,
                        Scenario: this.scenario
                    };
                    return this.paymentOptions.escrow && (i.Escrow = this.paymentOptions.escrow), i
                }
                createPayRequest(e, t) {
                    const i = this.createBasePayRequest(t);
                    return (0, n.Z)((0, n.Z)({}, i), {}, {
                        CardCryptogramPacket: e
                    })
                }
                createMPPayRequest(e, t, i, a) {
                    const o = this.createBasePayRequest(a);
                    return (0, n.Z)((0, n.Z)({}, o), {}, {
                        SessionId: e,
                        CvvCryptogramPacket: t,
                        CardId: i.Token,
                        FirstSix: i.PANMask.substring(0, 6),
                        LastFour: i.PANMask.substring(i.PANMask.length - 4),
                        ExpDateMonth: i.ExpiryDate.substring(0, 2),
                        ExpDateYear: "20" + i.ExpiryDate.substring(3, 5)
                    })
                }
                createSbpRequest(e, t) {
                    return (0, n.Z)((0, n.Z)({}, this.createBasePayRequest(t)), {}, {
                        DeviceId: (0, d.Zw)(),
                        SessionId: (0, d.MQ)(),
                        SaveCard: e
                    })
                }
                createAltPayRequest(e, t) {
                    return {
                        PublicId: this.paymentOptions.publicId,
                        AltPayType: "Spei",
                        Scenario: e,
                        Amount: this.paymentOptions.amount,
                        Currency: this.paymentOptions.currency,
                        Description: this.paymentOptions.description,
                        Email: t,
                        AccountId: this.paymentOptions.accountId,
                        InvoiceId: this.paymentOptions.invoiceId,
                        JsonData: this.paymentOptions.data,
                        IpAddress: "",
                        CultureName: this.widgetOptions.language
                    }
                }
                createSentPaymentDetailsRequest(e, t) {
                    return {
                        email: t,
                        transactionId: e.Model.TransactionId,
                        publicId: this.paymentOptions.publicId
                    }
                }
                createTinkoffRequest(e, t, i) {
                    var a, s;
                    const u = new c.UAParser;
                    return (0, n.Z)((0, n.Z)({}, this.createBasePayRequest(i)), {}, {
                        Webview: (0, o.bR)(),
                        Os: u.getOS().name,
                        Browser: window.navigator.userAgent,
                        Device: (0, o.bR)() ? "MobileApp" : (0, r.tq)() ? "Mobile" : "DesktopWeb",
                        Scheme: e ? "auth" : "charge",
                        SaveCard: t,
                        SuccessRedirectUrl: l((null === (a = this.paymentOptions) || void 0 === a || null === (a = a.configuration) || void 0 === a || null === (a = a.common) || void 0 === a ? void 0 : a.successRedirectUrl) || this.terminalInfo.TerminalUrl),
                        FailRedirectUrl: l((null === (s = this.paymentOptions) || void 0 === s || null === (s = s.configuration) || void 0 === s || null === (s = s.common) || void 0 === s ? void 0 : s.failRedirectUrl) || this.terminalInfo.TerminalUrl),
                        DeviceId: (0, d.Zw)(),
                        SessionId: (0, d.MQ)()
                    })
                }
                createAltPayTransactionRequest(e, t) {
                    return (0, n.Z)((0, n.Z)({}, this.createBasePayRequest(t)), {}, {
                        AltPayType: e
                    })
                }
                createAltPayDolyameRequest(e, t) {
                    return (0, n.Z)((0, n.Z)({}, this.createAltPayTransactionRequest(s.Cr.TcsBnplDolyame, t)), {}, {
                        Scheme: e,
                        SuccessRedirectUrl: `${u.configuration.widget.baseUrl}${p.N.widget.resultPage}?Success=true`,
                        FailRedirectUrl: `${u.configuration.widget.baseUrl}${p.N.widget.resultPage}?Success=false`
                    })
                }
                createAltPaySomRequest(e, t) {
                    var i;
                    const a = (null === (i = this.paymentOptions) || void 0 === i || null === (i = i.configuration) || void 0 === i || null === (i = i.common) || void 0 === i ? void 0 : i.successRedirectUrl) || this.terminalInfo.TerminalUrl;
                    return (0, n.Z)((0, n.Z)({}, this.createAltPayTransactionRequest(s.Cr.Som, t)), {}, {
                        Scheme: e,
                        SuccessRedirectUrl: `${u.configuration.widget.baseUrl}${p.N.widget.resultPage}?Success=true&fallbackRedirect=${a}`,
                        FailRedirectUrl: `${u.configuration.widget.baseUrl}${p.N.widget.resultPage}?Success=false&fallbackRedirect=${a}`
                    })
                }
            }
        },
        49325: function(e, t, i) {
            "use strict";
            i.d(t, {
                t: function() {
                    return S
                }
            });
            var n = i(95082),
                a = i(47327),
                o = (i(76265), i(70560), i(97337), i(13429), i(37462), i(48324), i(76801), i(75514)),
                s = i(79198),
                r = i(32448),
                c = i(90109),
                l = i(84778),
                d = i(57456),
                u = i(34255);
            class p {
                constructor(e) {
                    (0, a.Z)(this, "paymentProcessor", void 0), (0, a.Z)(this, "bins", {}), this.paymentProcessor = e
                }
                async getBinInfo(e, t, i, n, a) {
                    if (this.bins[e]) return Promise.resolve(this.bins[e]);
                    {
                        var o;
                        const s = await (null === (o = this.paymentProcessor) || void 0 === o ? void 0 : o.binInfo(e, t, i, n, a));
                        return this.bins[e] = s, s
                    }
                }
            }
            var m, h = i(22466),
                y = i(47422);
            (function(e) {
                e["CloudPayments"] = "CloudPayments", e["YandexPay"] = "YandexPay", e["GooglePay"] = "GooglePay", e["ApplePay"] = "ApplePay"
            })(m || (m = {}));
            var w = i(26050),
                b = i(50878),
                g = i(2262);

            function f(e, t, i) {
                return t = v(t), t in e ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = i, e
            }

            function v(e) {
                var t = P(e, "string");
                return "symbol" === typeof t ? t : String(t)
            }

            function P(e, t) {
                if ("object" !== typeof e || null === e) return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var n = i.call(e, t || "default");
                    if ("object" !== typeof n) return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }
            class C {
                constructor(e, t, i, n) {
                    f(this, "iframeId", void 0), f(this, "scriptUrl", void 0), f(this, "callBackFnString", void 0), f(this, "validationString", (Math.random() + 1).toString(36).substring(7)), this.iframeId = e, this.scriptUrl = t, this.callBackFnString = i, n && (this.validationString = n)
                }
                createIframe() {
                    const e = document.createElement("iframe");
                    return e.hidden = !0, e.id = this.iframeId, e.setAttribute("sandbox", "allow-scripts"), e
                }
                createScript(e, t) {
                    return `\n            <html lang="en">\n                <head>\n                    <title></title>\n                    <script type="text/javascript">\n                        (() => {\n                            const script = document.createElement('script');\n                            script.type = 'text/javascript';\n                            script.src = '${e}';\n                            script.defer = true;\n                            script.onload = ${t};\n                            document.head.append(script);\n                        })()\n                    <\/script>\n                </head>\n                <body></body>\n            </html>\n        `
                }
                rejectValidator(e) {
                    return !1
                }
                executeScript() {
                    const e = this.createIframe();
                    return e.srcdoc = this.createScript(this.scriptUrl, this.callBackFnString), document.body.appendChild(e), new Promise(((e, t) => {
                        window.addEventListener("message", (async i => {
                            this.rejectValidator(i) && i.data && i.data.isolatedScriptMessage && i.data.validationString === this.validationString && t(i.data.isolatedScriptMessage), i.data && i.data.validationString && i.data.validationString === this.validationString && e(i.data.isolatedScriptMessage)
                        }))
                    }))
                }
            }
            class k extends C {
                constructor(e) {
                    var t, i;
                    const n = (Math.random() + 1).toString(36).substring(7);
                    super(null !== (t = e.iframeName) && void 0 !== t ? t : "cloud-metadata-iframe", null !== (i = e.scriptUrl) && void 0 !== i ? i : "https://cdn.bayonet.io/fingerprinting-2.0.min.js", `() => {\n            _bayonet.init({\n                js_key: '${e.bayonetApiKey}',\n                callback_function: (res) => parent.postMessage({\n                    isolatedScriptMessage: res,\n                    validationString: '${n}'\n                }, '*')\n                });\n            _bayonet.track();\n        };`, n)
                }
                rejectValidator(e) {
                    return !e?.data?.isolatedScriptMessage?.bayonetFingerprintToken
                }
            }
            class S {
                constructor(e, t, i, n, s, c, l, u) {
                    var m = this;
                    (0, a.Z)(this, "parentConnector", void 0), (0, a.Z)(this, "paymentOptions", void 0), (0, a.Z)(this, "merchantOptions", void 0), (0, a.Z)(this, "appOptions", void 0), (0, a.Z)(this, "terminalInfo", void 0), (0, a.Z)(this, "runtimeConfiguration", void 0), (0, a.Z)(this, "scenario", void 0), (0, a.Z)(this, "paymentProcessor", void 0), (0, a.Z)(this, "binInfo", void 0), (0, a.Z)(this, "paymentRequest", void 0), (0, a.Z)(this, "convertedAmount$", new o.V), (0, a.Z)(this, "saveCard", (0, g.iH)()), (0, a.Z)(this, "isTinkoffInstallmentLoading", (0, g.iH)()), (0, a.Z)(this, "getCardCryptogram", (async function(e, t) {
                        const i = await m.getCheckout(t);
                        let n;
                        if (m.runtimeConfiguration.bayonetApiKey) {
                            const e = new k({
                                bayonetApiKey: m.runtimeConfiguration.bayonetApiKey
                            });
                            n = {
                                BayonetFingerprintToken: (await e.executeScript()).bayonetFingerprintToken
                            }
                        }
                        return await i.createPaymentCryptogram({
                            cvv: e.cardSecretCode,
                            cardNumber: e.cardNumber,
                            expDateMonthYear: e.cardExpiration
                        }, n)
                    })), (0, a.Z)(this, "getPayRequest", ((e, t) => this.paymentRequest.createPayRequest(e, t))), this.parentConnector = t, this.paymentOptions = i, this.merchantOptions = n, this.appOptions = s, this.terminalInfo = c, this.runtimeConfiguration = l, this.scenario = u, this.isTinkoffInstallmentLoading.value = !1, this.paymentProcessor = new r.f(e, this.runtimeConfiguration), this.paymentRequest = new d.t(this.paymentOptions, this.appOptions, this.merchantOptions, this.terminalInfo, this.scenario, this.runtimeConfiguration), this.binInfo = new p(this.paymentProcessor)
                }
                updateAppOptions(e) {
                    this.appOptions = e
                }
                get allowedMethods() {
                    var e;
                    return (null === (e = this.terminalInfo) || void 0 === e ? void 0 : e.ExternalPaymentMethods.filter((e => e.Enabled)).map((e => e.Type))) || []
                }
                async useCryptogramMode(e, t, i) {
                    const n = await this.getCardCryptogram(e, i);
                    return Promise.resolve((0, h.If)(n, m.CloudPayments, t))
                }
                getPaymentMethodsOrder() {
                    var e;
                    let t = [...this.runtimeConfiguration.defaultPaymentMethodsOrder || []];
                    const i = null === (e = this.paymentOptions.configuration) || void 0 === e ? void 0 : e.paymentMethodsOrder,
                        n = [];
                    if (i && this.terminalInfo.IsPayOrderingEnabled)
                        for (const a of i)
                            if (a || a === s.L5.ApplePay) {
                                const e = t.filter((e => e !== a));
                                e.length !== t.length && (n.push(a), t = e)
                            } return [...n, ...t]
                }
                async payByCard(e, t, i) {
                    const n = await this.getCardCryptogram(e, i);
                    return this.payByCryptogram(n, t)
                }
                async payByCryptogram(e, t) {
                    if (this.paymentOptions.cryptogramMode) return await (await this.parentConnector.getConnection()).emitCryptogramAndClose((0, h.If)(e, m.CloudPayments, t)), Promise.resolve((0, h.Fi)({}, !0));
                    const i = (0, n.Z)((0, n.Z)({}, this.getPayRequest(e, t)), {}, {
                            SaveCard: this.saveCard.value
                        }),
                        a = await this.pay(i);
                    return (0, h.Fi)(a, a.Success)
                }
                async payByYandexPay(e) {
                    const t = (await i.e(3001).then(i.bind(i, 13001))).YandexPayApi;
                    return new Promise(((i, n) => {
                        t.getYandexPaySession(this.paymentOptions.amount, this.paymentOptions.invoiceId, this.paymentOptions.publicId, this.merchantOptions.origin, this.paymentOptions.currency, void 0, this.paymentOptions.requireEmail).then((a => {
                            a || n(), a.checkout();
                            const o = () => {
                                    a.off(YaPay.PaymentEventType.Process, c), a.off(YaPay.PaymentEventType.Error, r), a.off(YaPay.PaymentEventType.Abort, r)
                                },
                                s = e => {
                                    t.completeSession(e)
                                },
                                r = e => {
                                    o(), s(YaPay.CompleteReason.Error), n(e)
                                },
                                c = t => {
                                    var a;
                                    o(), s(YaPay.CompleteReason.Success), t && null !== t && void 0 !== t && t.token || n();
                                    const r = atob(null === t || void 0 === t ? void 0 : t.token);
                                    this.paymentOptions.cryptogramMode && i((0, h.If)(r, m.YandexPay, e));
                                    const c = this.getPayRequest(JSON.stringify(r), this.paymentOptions.requireEmail ? null !== e && void 0 !== e ? e : null === (a = t.billingContact) || void 0 === a ? void 0 : a.email : null !== e && void 0 !== e ? e : this.paymentOptions.email);
                                    this.pay(c).then((e => {
                                        i((0, h.Fi)(e, e.Success))
                                    }))
                                };
                            a.on(YaPay.PaymentEventType.Process, c), a.on(YaPay.PaymentEventType.Error, r), a.on(YaPay.PaymentEventType.Abort, r)
                        })).catch((() => {
                            n()
                        }))
                    }))
                }
                async payByApplePay() {
                    u.Y.LogInfo("Запуск ApplePay");
                    const e = await this.parentConnector.getConnection();
                    if (this.paymentOptions.cryptogramMode) {
                        u.Y.LogInfo("Возврат cryprogram ApplePay [1]");
                        const t = await e.processApplePaymentWithCryptogram(this.merchantOptions.origin, this.paymentOptions);
                        return u.Y.LogInfo("Возврат cryprogram ApplePay [2]", t), (0, h.If)(t, m.ApplePay)
                    } {
                        const t = await e.processApplePayment(this.merchantOptions.origin, this.paymentOptions);
                        return (0, h.Fi)(t, t.Success)
                    }
                }
                async payByGooglePay(e) {
                    var t, n;
                    const a = (await i.e(2119).then(i.bind(i, 62119))).GooglePayApi;
                    u.Y.LogInfo("Запуск GooglePay");
                    const o = this.terminalInfo.ExternalPaymentMethods.find((e => e.Type == s.L5.GooglePay)).AllowedPaymentMethods,
                        r = a.getGooglePaymentDataRequest(this.paymentOptions.publicId, this.paymentOptions.amount, this.paymentOptions.currency, o, e, this.merchantOptions.origin);
                    u.Y.LogInfo("googlePaymentRequest", r);
                    const c = await a.getPaymentsClient(),
                        l = await c.loadPaymentData(r);
                    if (u.Y.LogInfo("GPay PaymentData", l), this.paymentOptions.cryptogramMode && null !== l && void 0 !== l && null !== (t = l.paymentMethodData) && void 0 !== t && null !== (t = t.tokenizationData) && void 0 !== t && t.token) return u.Y.LogInfo("GPay Token", l.paymentMethodData.tokenizationData.token), (0, h.If)(l.paymentMethodData.tokenizationData.token, m.GooglePay);
                    if (this.paymentOptions.cryptogramMode && (null === l || void 0 === l || null === (n = l.paymentMethodData) || void 0 === n || null === (n = n.tokenizationData) || void 0 === n || !n.token)) return u.Y.LogError("GPay Token Error", l.paymentMethodData.tokenizationData.token), (0, h.i7)(JSON.stringify(l));
                    try {
                        var d, p;
                        const t = this.getPayRequest(JSON.stringify(l.paymentMethodData.tokenizationData.token), e ? null !== (d = l.email) && void 0 !== d ? d : this.paymentOptions.email : null !== (p = this.paymentOptions.email) && void 0 !== p ? p : void 0),
                            i = await this.pay(t);
                        return (0, h.Fi)(i, i.Success)
                    } catch (y) {
                        return new Promise((e => {
                            e((0, h.Fi)({}, !1))
                        }))
                    }
                }
                async payByTinkoffInstallment(e, t) {
                    const a = (await i.e(4958).then(i.bind(i, 94958))).TinkoffInstallmentApi;
                    let o;
                    const r = this.paymentRequest.createAltPayTransactionRequest(s.Cr.Installment, e);
                    try {
                        var c;
                        const e = await this.paymentProcessor.createAltPayTransaction(r);
                        o = (null === e || void 0 === e || null === (c = e.Model) || void 0 === c ? void 0 : c.TransactionId.toString()) || null
                    } catch (l) {
                        return this.isTinkoffInstallmentLoading.value = !1, Promise.reject(l)
                    }
                    return o ? new Promise(((i, s) => {
                        const r = a.createTinkoffInstallmentRequest((0, n.Z)((0, n.Z)({}, this.paymentOptions), {}, {
                            email: e
                        }), this.terminalInfo, o || "", t);
                        r || (this.isTinkoffInstallmentLoading.value = !1, s()), a.getSession().then((e => {
                            this.isTinkoffInstallmentLoading.value = !1, e || s(), !this.terminalInfo.IsTest && r ? e.create(r) : r ? (r.demoFlow = "sms", e.createDemo(r)) : s();
                            const t = n => {
                                var a;
                                switch (n.type) {
                                    case e.constants.SUCCESS:
                                        i((0, h.aT)(n));
                                        break;
                                    case e.constants.APPOINTED:
                                        i((0, h.aT)(n));
                                        break;
                                    case e.constants.REJECT:
                                        s((0, h.aT)(n, !1));
                                        break;
                                    case e.constants.CANCEL:
                                        s((0, h.aT)(n, !1));
                                        break;
                                    case e.constants.ERROR_RESUME:
                                        s((0, h.aT)(n, !1));
                                        break;
                                    default:
                                        return
                                }
                                e.methods.off(e.constants.SUCCESS, t), e.methods.off(e.constants.APPOINTED, t), e.methods.off(e.constants.REJECT, t), e.methods.off(e.constants.CANCEL, t), e.methods.off(e.constants.ERROR_RESUME, t), null !== n && void 0 !== n && null !== (a = n.meta) && void 0 !== a && null !== (a = a.iframe) && void 0 !== a && a.destroyAll && n.meta.iframe.destroyAll()
                            };
                            e.methods.on(e.constants.SUCCESS, t), e.methods.on(e.constants.APPOINTED, t), e.methods.on(e.constants.REJECT, t), e.methods.on(e.constants.CANCEL, t), e.methods.on(e.constants.ERROR_RESUME, t), e.methods.on(e.constants.READY, t), e.methods.on(e.constants.KEEP_ALIVE, t)
                        }))
                    })) : (this.isTinkoffInstallmentLoading.value = !1, Promise.reject())
                }
                async payBySom(e) {
                    const t = this.paymentRequest.createAltPaySomRequest(this.paymentOptions.auth ? s.g1.Auth : s.g1.Сharge, e);
                    return await this.paymentProcessor.createAltPayTransaction(t)
                }
                async payBySbp(e, t) {
                    const i = this.paymentRequest.createSbpRequest(this.saveCard.value, t);
                    return e ? await this.paymentProcessor.createSBPLink(i) : await this.paymentProcessor.createSBPQRImage(i)
                }
                async payByAltPay(e, t) {
                    const i = this.paymentRequest.createAltPayRequest(3, t);
                    return await this.paymentProcessor.createAltPayTransaction(i)
                }
                async sentPaymentDetails(e, t) {
                    if (t) {
                        const i = this.paymentRequest.createSentPaymentDetailsRequest(t, e);
                        return await this.paymentProcessor.sentPaymentDetails(i)
                    }
                }
                async payByTinkoffPay(e, t) {
                    const i = this.paymentRequest.createTinkoffRequest(this.paymentOptions.auth, this.saveCard.value, t);
                    return u.Y.LogInfo("Tinkoff Pay Request", i), e ? await this.paymentProcessor.createTinkoffPayLink(i) : await this.paymentProcessor.createTinkoffPayQrImage(i)
                }
                async payByDolyame(e) {
                    const t = this.paymentRequest.createAltPayDolyameRequest(this.paymentOptions.auth ? s.g1.Auth : s.g1.Сharge, e);
                    return await this.paymentProcessor.createAltPayTransaction(t)
                }
                async createMirPayLink() {
                    return await this.paymentProcessor.createMirPayLink({
                        Amount: this.paymentOptions.amount,
                        Currency: this.paymentOptions.currency,
                        PublicId: this.paymentOptions.publicId
                    })
                }
                async payByMirPay(e, t) {
                    return this.payByCryptogram(c.hZ.packExternalCryptogram("CloudMirPay", e), t)
                }
                async waitMirPayCryptogram(e) {
                    return this.paymentProcessor.waitMirPayCryptogram({
                        PublicId: this.paymentOptions.publicId,
                        Guid: e
                    })
                }
                async waitPaymentStatus(e, t = y.X.Sbp) {
                    const i = await this.paymentProcessor.waitQrPaymentStatus({
                            PublicId: this.paymentOptions.publicId,
                            TransactionId: e
                        }),
                        n = "Транзакция не найдена";
                    if (i && null !== i && void 0 !== i && i.Message && i.Message.includes(n)) return (0, h.KD)(y.$.Fail, t);
                    if (!i.Success) return (0, h.KD)(y.$.Fail, t);
                    switch (i.Model.StatusCode) {
                        case s.Fd.Completed:
                        case s.Fd.Authorized:
                            return (0, h.KD)(y.$.Success, t);
                        case s.Fd.Cancelled:
                        case s.Fd.Declined:
                            return (0, h.KD)(y.$.Fail, t);
                        case s.Fd.Created:
                        case s.Fd.Pending:
                        default:
                            return (0, h.KD)(y.$.Wait, t)
                    }
                }
                get pay() {
                    var e;
                    return null !== (e = this.paymentOptions) && void 0 !== e && e.auth ? this.paymentProcessor.auth : this.paymentProcessor.charge
                }
                async getBinInfo(e) {
                    var t;
                    const i = await (null === (t = this.binInfo) || void 0 === t ? void 0 : t.getBinInfo(e, this.paymentOptions.currency, this.paymentOptions.amount, this.terminalInfo.IsAllowedNotSanctionedCards, this.terminalInfo.IsQiwi));
                    var n, a;
                    this.terminalInfo.IsQiwi && this.terminalInfo.IsAllowedNotSanctionedCards && null != i.Model.ConvertedAmount && null != i.Model.Currency ? this.convertedAmount$.next(`${(0,w.$i)(i.Model.ConvertedAmount,null===(n=this.runtimeConfiguration)||void 0===n||null===(n=n.amountSettings)||void 0===n?void 0:n.firstDelimiter,null===(a=this.runtimeConfiguration)||void 0===a||null===(a=a.amountSettings)||void 0===a?void 0:a.secondDelimiter)} ${(0,w.jK)(i.Model.Currency)}`) : this.convertedAmount$.next(void 0);
                    return i
                }
                async isApplePayAvailiable() {
                    return this.appOptions.applePaySupport && this.allowedMethods.includes(s.L5.ApplePay) && (await this.parentConnector.getConnection()).isApplePayAvailiable()
                }
                async isGooglePayAvailiable() {
                    return this.appOptions.googlePaySupport && this.allowedMethods.includes(s.L5.GooglePay) && await (await i.e(2119).then(i.bind(i, 62119))).GooglePayApi.isGooglePayAvailable()
                }
                async isTinkoffInstallmentAvailable() {
                    return this.appOptions.tinkoffInstallmentSupport && this.paymentOptions.amount >= 3500 && this.paymentOptions.amount <= 5e5 && this.allowedMethods.includes(s.L5.TinkoffInstallmentPay) && await (await i.e(4958).then(i.bind(i, 94958))).TinkoffInstallmentApi.isPayAvailable()
                }
                isTinkoffPayAvailable() {
                    return !this.terminalInfo.IsTest && this.appOptions.tinkoffPaySupport && this.allowedMethods.includes(s.L5.TinkoffPay)
                }
                isMirPayAvailable() {
                    return this.appOptions.mirPaySupport && (0, b.Dt)() && this.allowedMethods.includes(s.L5.MirPay)
                }
                async isYandexPayAvailable() {
                    var e;
                    return Boolean(null === (e = this.appOptions) || void 0 === e ? void 0 : e.yandexPaySupport) && this.allowedMethods.includes(s.L5.YandexPay) && await (await i.e(3001).then(i.bind(i, 13001))).YandexPayApi.isYandexPayAvailable(this.paymentOptions, this.merchantOptions.origin)
                }
                isMasterPassAvailable() {
                    var e;
                    return this.appOptions.masterPassSupport && !(null !== (e = this.paymentOptions) && void 0 !== e && e.cryptogramMode) && this.allowedMethods.includes(s.L5.MasterPass)
                }
                isSomAvailable() {
                    return this.allowedMethods.includes(s.L5.Som) && this.paymentOptions.amount >= 10
                }
                isSbpAvailable() {
                    var e;
                    return !(null !== (e = this.paymentOptions) && void 0 !== e && e.cryptogramMode) && this.appOptions.sbpSupport && this.allowedMethods.includes(s.L5.SbpPay)
                }
                isSpeiAvailable() {
                    return this.allowedMethods.includes(8)
                }
                isDolyameAvailable() {
                    const e = this.terminalInfo.ExternalPaymentMethods.find((e => e.Type === s.L5.TcsBnplDolyame));
                    return (!(null !== e && void 0 !== e && e.MinSum) || this.paymentOptions.amount >= (null === e || void 0 === e ? void 0 : e.MinSum)) && (!(null !== e && void 0 !== e && e.MaxSum) || this.paymentOptions.amount <= (null === e || void 0 === e ? void 0 : e.MaxSum)) && this.allowedMethods.includes(s.L5.TcsBnplDolyame)
                }
                async getCheckout(e) {
                    const t = {
                        publicId: this.paymentOptions.publicId,
                        key: {
                            pem: l.N.publicKey.pem,
                            version: l.N.publicKey.version
                        }
                    };
                    return e && (t.validators = e), new c.hZ(t)
                }
            }
        },
        83236: function(e, t, i) {
            "use strict";
            i.d(t, {
                u: function() {
                    return a
                }
            });
            var n = i(47327);
            i(48324);
            class a {
                constructor(e) {
                    (0, n.Z)(this, "parentConnector", void 0), this.parentConnector = e
                }
                async hide() {
                    return (await this.parentConnector.getConnection()).hideWindow()
                }
                async completeWidgetCallback(e, t) {
                    const i = JSON.parse(JSON.stringify(e));
                    return (await this.parentConnector.getConnection()).completeWidgetCallback(i, t)
                }
                async on3ds(e) {
                    return (await this.parentConnector.getConnection()).on3ds(e)
                }
                async emitCryptogramAndClose(e) {
                    const t = JSON.parse(JSON.stringify(e));
                    return (await this.parentConnector.getConnection()).emitCryptogramAndClose(t)
                }
                async openLink(e) {
                    return (await this.parentConnector.getConnection()).openLink(e)
                }
            }
        },
        42238: function(e, t, i) {
            var n;
            (function(a, o) {
                "use strict";
                var s = "1.0.37",
                    r = "",
                    c = "?",
                    l = "function",
                    d = "undefined",
                    u = "object",
                    p = "string",
                    m = "major",
                    h = "model",
                    y = "name",
                    w = "type",
                    b = "vendor",
                    g = "version",
                    f = "architecture",
                    v = "console",
                    P = "mobile",
                    C = "tablet",
                    k = "smarttv",
                    S = "wearable",
                    A = "embedded",
                    I = 500,
                    O = "Amazon",
                    R = "Apple",
                    x = "ASUS",
                    T = "BlackBerry",
                    E = "Browser",
                    M = "Chrome",
                    Z = "Edge",
                    D = "Firefox",
                    L = "Google",
                    q = "Huawei",
                    N = "LG",
                    B = "Microsoft",
                    U = "Motorola",
                    _ = "Opera",
                    $ = "Samsung",
                    F = "Sharp",
                    j = "Sony",
                    Y = "Xiaomi",
                    z = "Zebra",
                    V = "Facebook",
                    G = "Chromium OS",
                    Q = "Mac OS",
                    K = function(e, t) {
                        var i = {};
                        for (var n in e) t[n] && t[n].length % 2 === 0 ? i[n] = t[n].concat(e[n]) : i[n] = e[n];
                        return i
                    },
                    W = function(e) {
                        for (var t = {}, i = 0; i < e.length; i++) t[e[i].toUpperCase()] = e[i];
                        return t
                    },
                    H = function(e, t) {
                        return typeof e === p && -1 !== J(t).indexOf(J(e))
                    },
                    J = function(e) {
                        return e.toLowerCase()
                    },
                    X = function(e) {
                        return typeof e === p ? e.replace(/[^\d\.]/g, r).split(".")[0] : o
                    },
                    ee = function(e, t) {
                        if (typeof e === p) return e = e.replace(/^\s\s*/, r), typeof t === d ? e : e.substring(0, I)
                    },
                    te = function(e, t) {
                        var i, n, a, s, r, c, d = 0;
                        while (d < t.length && !r) {
                            var p = t[d],
                                m = t[d + 1];
                            i = n = 0;
                            while (i < p.length && !r) {
                                if (!p[i]) break;
                                if (r = p[i++].exec(e), r)
                                    for (a = 0; a < m.length; a++) c = r[++n], s = m[a], typeof s === u && s.length > 0 ? 2 === s.length ? typeof s[1] == l ? this[s[0]] = s[1].call(this, c) : this[s[0]] = s[1] : 3 === s.length ? typeof s[1] !== l || s[1].exec && s[1].test ? this[s[0]] = c ? c.replace(s[1], s[2]) : o : this[s[0]] = c ? s[1].call(this, c, s[2]) : o : 4 === s.length && (this[s[0]] = c ? s[3].call(this, c.replace(s[1], s[2])) : o) : this[s] = c || o
                            }
                            d += 2
                        }
                    },
                    ie = function(e, t) {
                        for (var i in t)
                            if (typeof t[i] === u && t[i].length > 0) {
                                for (var n = 0; n < t[i].length; n++)
                                    if (H(t[i][n], e)) return i === c ? o : i
                            } else if (H(t[i], e)) return i === c ? o : i;
                        return e
                    },
                    ne = {
                        "1.0": "/8",
                        1.2: "/1",
                        1.3: "/3",
                        "2.0": "/412",
                        "2.0.2": "/416",
                        "2.0.3": "/417",
                        "2.0.4": "/419",
                        "?": "/"
                    },
                    ae = {
                        ME: "4.90",
                        "NT 3.11": "NT3.51",
                        "NT 4.0": "NT4.0",
                        2e3: "NT 5.0",
                        XP: ["NT 5.1", "NT 5.2"],
                        Vista: "NT 6.0",
                        7: "NT 6.1",
                        8: "NT 6.2",
                        8.1: "NT 6.3",
                        10: ["NT 6.4", "NT 10.0"],
                        RT: "ARM"
                    },
                    oe = {
                        browser: [
                            [/\b(?:crmo|crios)\/([\w\.]+)/i],
                            [g, [y, "Chrome"]],
                            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                            [g, [y, "Edge"]],
                            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                            [y, g],
                            [/opios[\/ ]+([\w\.]+)/i],
                            [g, [y, _ + " Mini"]],
                            [/\bopr\/([\w\.]+)/i],
                            [g, [y, _]],
                            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
                            [g, [y, "Baidu"]],
                            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
                            [y, g],
                            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                            [g, [y, "UC" + E]],
                            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
                            [g, [y, "WeChat"]],
                            [/konqueror\/([\w\.]+)/i],
                            [g, [y, "Konqueror"]],
                            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                            [g, [y, "IE"]],
                            [/ya(?:search)?browser\/([\w\.]+)/i],
                            [g, [y, "Yandex"]],
                            [/slbrowser\/([\w\.]+)/i],
                            [g, [y, "Smart Lenovo " + E]],
                            [/(avast|avg)\/([\w\.]+)/i],
                            [
                                [y, /(.+)/, "$1 Secure " + E], g
                            ],
                            [/\bfocus\/([\w\.]+)/i],
                            [g, [y, D + " Focus"]],
                            [/\bopt\/([\w\.]+)/i],
                            [g, [y, _ + " Touch"]],
                            [/coc_coc\w+\/([\w\.]+)/i],
                            [g, [y, "Coc Coc"]],
                            [/dolfin\/([\w\.]+)/i],
                            [g, [y, "Dolphin"]],
                            [/coast\/([\w\.]+)/i],
                            [g, [y, _ + " Coast"]],
                            [/miuibrowser\/([\w\.]+)/i],
                            [g, [y, "MIUI " + E]],
                            [/fxios\/([-\w\.]+)/i],
                            [g, [y, D]],
                            [/\bqihu|(qi?ho?o?|360)browser/i],
                            [
                                [y, "360 " + E]
                            ],
                            [/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i],
                            [
                                [y, /(.+)/, "$1 " + E], g
                            ],
                            [/samsungbrowser\/([\w\.]+)/i],
                            [g, [y, $ + " Internet"]],
                            [/(comodo_dragon)\/([\w\.]+)/i],
                            [
                                [y, /_/g, " "], g
                            ],
                            [/metasr[\/ ]?([\d\.]+)/i],
                            [g, [y, "Sogou Explorer"]],
                            [/(sogou)mo\w+\/([\d\.]+)/i],
                            [
                                [y, "Sogou Mobile"], g
                            ],
                            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i],
                            [y, g],
                            [/(lbbrowser)/i, /\[(linkedin)app\]/i],
                            [y],
                            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                            [
                                [y, V], g
                            ],
                            [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
                            [y, g],
                            [/\bgsa\/([\w\.]+) .*safari\//i],
                            [g, [y, "GSA"]],
                            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
                            [g, [y, "TikTok"]],
                            [/headlesschrome(?:\/([\w\.]+)| )/i],
                            [g, [y, M + " Headless"]],
                            [/ wv\).+(chrome)\/([\w\.]+)/i],
                            [
                                [y, M + " WebView"], g
                            ],
                            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                            [g, [y, "Android " + E]],
                            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                            [y, g],
                            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                            [g, [y, "Mobile Safari"]],
                            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                            [g, y],
                            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                            [y, [g, ie, ne]],
                            [/(webkit|khtml)\/([\w\.]+)/i],
                            [y, g],
                            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                            [
                                [y, "Netscape"], g
                            ],
                            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                            [g, [y, D + " Reality"]],
                            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i],
                            [y, g],
                            [/(cobalt)\/([\w\.]+)/i],
                            [y, [g, /master.|lts./, ""]]
                        ],
                        cpu: [
                            [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                            [
                                [f, "amd64"]
                            ],
                            [/(ia32(?=;))/i],
                            [
                                [f, J]
                            ],
                            [/((?:i[346]|x)86)[;\)]/i],
                            [
                                [f, "ia32"]
                            ],
                            [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                            [
                                [f, "arm64"]
                            ],
                            [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                            [
                                [f, "armhf"]
                            ],
                            [/windows (ce|mobile); ppc;/i],
                            [
                                [f, "arm"]
                            ],
                            [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                            [
                                [f, /ower/, r, J]
                            ],
                            [/(sun4\w)[;\)]/i],
                            [
                                [f, "sparc"]
                            ],
                            [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                            [
                                [f, J]
                            ]
                        ],
                        device: [
                            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                            [h, [b, $],
                                [w, C]
                            ],
                            [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
                            [h, [b, $],
                                [w, P]
                            ],
                            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
                            [h, [b, R],
                                [w, P]
                            ],
                            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                            [h, [b, R],
                                [w, C]
                            ],
                            [/(macintosh);/i],
                            [h, [b, R]],
                            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                            [h, [b, F],
                                [w, P]
                            ],
                            [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                            [h, [b, q],
                                [w, C]
                            ],
                            [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
                            [h, [b, q],
                                [w, P]
                            ],
                            [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],
                            [
                                [h, /_/g, " "],
                                [b, Y],
                                [w, P]
                            ],
                            [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                            [
                                [h, /_/g, " "],
                                [b, Y],
                                [w, C]
                            ],
                            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                            [h, [b, "OPPO"],
                                [w, P]
                            ],
                            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                            [h, [b, "Vivo"],
                                [w, P]
                            ],
                            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
                            [h, [b, "Realme"],
                                [w, P]
                            ],
                            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
                            [h, [b, U],
                                [w, P]
                            ],
                            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                            [h, [b, U],
                                [w, C]
                            ],
                            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                            [h, [b, N],
                                [w, C]
                            ],
                            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
                            [h, [b, N],
                                [w, P]
                            ],
                            [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                            [h, [b, "Lenovo"],
                                [w, C]
                            ],
                            [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                            [
                                [h, /_/g, " "],
                                [b, "Nokia"],
                                [w, P]
                            ],
                            [/(pixel c)\b/i],
                            [h, [b, L],
                                [w, C]
                            ],
                            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                            [h, [b, L],
                                [w, P]
                            ],
                            [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                            [h, [b, j],
                                [w, P]
                            ],
                            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                            [
                                [h, "Xperia Tablet"],
                                [b, j],
                                [w, C]
                            ],
                            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                            [h, [b, "OnePlus"],
                                [w, P]
                            ],
                            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                            [h, [b, O],
                                [w, C]
                            ],
                            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                            [
                                [h, /(.+)/g, "Fire Phone $1"],
                                [b, O],
                                [w, P]
                            ],
                            [/(playbook);[-\w\),; ]+(rim)/i],
                            [h, b, [w, C]],
                            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                            [h, [b, T],
                                [w, P]
                            ],
                            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                            [h, [b, x],
                                [w, C]
                            ],
                            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                            [h, [b, x],
                                [w, P]
                            ],
                            [/(nexus 9)/i],
                            [h, [b, "HTC"],
                                [w, C]
                            ],
                            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
                            [b, [h, /_/g, " "],
                                [w, P]
                            ],
                            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                            [h, [b, "Acer"],
                                [w, C]
                            ],
                            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                            [h, [b, "Meizu"],
                                [w, P]
                            ],
                            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
                            [h, [b, "Ulefone"],
                                [w, P]
                            ],
                            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
                            [b, h, [w, P]],
                            [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
                            [b, h, [w, C]],
                            [/(surface duo)/i],
                            [h, [b, B],
                                [w, C]
                            ],
                            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                            [h, [b, "Fairphone"],
                                [w, P]
                            ],
                            [/(u304aa)/i],
                            [h, [b, "AT&T"],
                                [w, P]
                            ],
                            [/\bsie-(\w*)/i],
                            [h, [b, "Siemens"],
                                [w, P]
                            ],
                            [/\b(rct\w+) b/i],
                            [h, [b, "RCA"],
                                [w, C]
                            ],
                            [/\b(venue[\d ]{2,7}) b/i],
                            [h, [b, "Dell"],
                                [w, C]
                            ],
                            [/\b(q(?:mv|ta)\w+) b/i],
                            [h, [b, "Verizon"],
                                [w, C]
                            ],
                            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                            [h, [b, "Barnes & Noble"],
                                [w, C]
                            ],
                            [/\b(tm\d{3}\w+) b/i],
                            [h, [b, "NuVision"],
                                [w, C]
                            ],
                            [/\b(k88) b/i],
                            [h, [b, "ZTE"],
                                [w, C]
                            ],
                            [/\b(nx\d{3}j) b/i],
                            [h, [b, "ZTE"],
                                [w, P]
                            ],
                            [/\b(gen\d{3}) b.+49h/i],
                            [h, [b, "Swiss"],
                                [w, P]
                            ],
                            [/\b(zur\d{3}) b/i],
                            [h, [b, "Swiss"],
                                [w, C]
                            ],
                            [/\b((zeki)?tb.*\b) b/i],
                            [h, [b, "Zeki"],
                                [w, C]
                            ],
                            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                            [
                                [b, "Dragon Touch"], h, [w, C]
                            ],
                            [/\b(ns-?\w{0,9}) b/i],
                            [h, [b, "Insignia"],
                                [w, C]
                            ],
                            [/\b((nxa|next)-?\w{0,9}) b/i],
                            [h, [b, "NextBook"],
                                [w, C]
                            ],
                            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                            [
                                [b, "Voice"], h, [w, P]
                            ],
                            [/\b(lvtel\-)?(v1[12]) b/i],
                            [
                                [b, "LvTel"], h, [w, P]
                            ],
                            [/\b(ph-1) /i],
                            [h, [b, "Essential"],
                                [w, P]
                            ],
                            [/\b(v(100md|700na|7011|917g).*\b) b/i],
                            [h, [b, "Envizen"],
                                [w, C]
                            ],
                            [/\b(trio[-\w\. ]+) b/i],
                            [h, [b, "MachSpeed"],
                                [w, C]
                            ],
                            [/\btu_(1491) b/i],
                            [h, [b, "Rotor"],
                                [w, C]
                            ],
                            [/(shield[\w ]+) b/i],
                            [h, [b, "Nvidia"],
                                [w, C]
                            ],
                            [/(sprint) (\w+)/i],
                            [b, h, [w, P]],
                            [/(kin\.[onetw]{3})/i],
                            [
                                [h, /\./g, " "],
                                [b, B],
                                [w, P]
                            ],
                            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                            [h, [b, z],
                                [w, C]
                            ],
                            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                            [h, [b, z],
                                [w, P]
                            ],
                            [/smart-tv.+(samsung)/i],
                            [b, [w, k]],
                            [/hbbtv.+maple;(\d+)/i],
                            [
                                [h, /^/, "SmartTV"],
                                [b, $],
                                [w, k]
                            ],
                            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                            [
                                [b, N],
                                [w, k]
                            ],
                            [/(apple) ?tv/i],
                            [b, [h, R + " TV"],
                                [w, k]
                            ],
                            [/crkey/i],
                            [
                                [h, M + "cast"],
                                [b, L],
                                [w, k]
                            ],
                            [/droid.+aft(\w+)( bui|\))/i],
                            [h, [b, O],
                                [w, k]
                            ],
                            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                            [h, [b, F],
                                [w, k]
                            ],
                            [/(bravia[\w ]+)( bui|\))/i],
                            [h, [b, j],
                                [w, k]
                            ],
                            [/(mitv-\w{5}) bui/i],
                            [h, [b, Y],
                                [w, k]
                            ],
                            [/Hbbtv.*(technisat) (.*);/i],
                            [b, h, [w, k]],
                            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
                            [
                                [b, ee],
                                [h, ee],
                                [w, k]
                            ],
                            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                            [
                                [w, k]
                            ],
                            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                            [b, h, [w, v]],
                            [/droid.+; (shield) bui/i],
                            [h, [b, "Nvidia"],
                                [w, v]
                            ],
                            [/(playstation [345portablevi]+)/i],
                            [h, [b, j],
                                [w, v]
                            ],
                            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                            [h, [b, B],
                                [w, v]
                            ],
                            [/((pebble))app/i],
                            [b, h, [w, S]],
                            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
                            [h, [b, R],
                                [w, S]
                            ],
                            [/droid.+; (glass) \d/i],
                            [h, [b, L],
                                [w, S]
                            ],
                            [/droid.+; (wt63?0{2,3})\)/i],
                            [h, [b, z],
                                [w, S]
                            ],
                            [/(quest( 2| pro)?)/i],
                            [h, [b, V],
                                [w, S]
                            ],
                            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                            [b, [w, A]],
                            [/(aeobc)\b/i],
                            [h, [b, O],
                                [w, A]
                            ],
                            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
                            [h, [w, P]],
                            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                            [h, [w, C]],
                            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                            [
                                [w, C]
                            ],
                            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
                            [
                                [w, P]
                            ],
                            [/(android[-\w\. ]{0,9});.+buil/i],
                            [h, [b, "Generic"]]
                        ],
                        engine: [
                            [/windows.+ edge\/([\w\.]+)/i],
                            [g, [y, Z + "HTML"]],
                            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                            [g, [y, "Blink"]],
                            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
                            [y, g],
                            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                            [g, y]
                        ],
                        os: [
                            [/microsoft (windows) (vista|xp)/i],
                            [y, g],
                            [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],
                            [y, [g, ie, ae]],
                            [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                            [
                                [g, ie, ae],
                                [y, "Windows"]
                            ],
                            [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
                            [
                                [g, /_/g, "."],
                                [y, "iOS"]
                            ],
                            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                            [
                                [y, Q],
                                [g, /_/g, "."]
                            ],
                            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                            [g, y],
                            [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
                            [y, g],
                            [/\(bb(10);/i],
                            [g, [y, T]],
                            [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                            [g, [y, "Symbian"]],
                            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                            [g, [y, D + " OS"]],
                            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                            [g, [y, "webOS"]],
                            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
                            [g, [y, "watchOS"]],
                            [/crkey\/([\d\.]+)/i],
                            [g, [y, M + "cast"]],
                            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
                            [
                                [y, G], g
                            ],
                            [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
                            [y, g],
                            [/(sunos) ?([\w\.\d]*)/i],
                            [
                                [y, "Solaris"], g
                            ],
                            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
                            [y, g]
                        ]
                    },
                    se = function(e, t) {
                        if (typeof e === u && (t = e, e = o), !(this instanceof se)) return new se(e, t).getResult();
                        var i = typeof a !== d && a.navigator ? a.navigator : o,
                            n = e || (i && i.userAgent ? i.userAgent : r),
                            s = i && i.userAgentData ? i.userAgentData : o,
                            c = t ? K(oe, t) : oe,
                            v = i && i.userAgent == n;
                        return this.getBrowser = function() {
                            var e = {};
                            return e[y] = o, e[g] = o, te.call(e, n, c.browser), e[m] = X(e[g]), v && i && i.brave && typeof i.brave.isBrave == l && (e[y] = "Brave"), e
                        }, this.getCPU = function() {
                            var e = {};
                            return e[f] = o, te.call(e, n, c.cpu), e
                        }, this.getDevice = function() {
                            var e = {};
                            return e[b] = o, e[h] = o, e[w] = o, te.call(e, n, c.device), v && !e[w] && s && s.mobile && (e[w] = P), v && "Macintosh" == e[h] && i && typeof i.standalone !== d && i.maxTouchPoints && i.maxTouchPoints > 2 && (e[h] = "iPad", e[w] = C), e
                        }, this.getEngine = function() {
                            var e = {};
                            return e[y] = o, e[g] = o, te.call(e, n, c.engine), e
                        }, this.getOS = function() {
                            var e = {};
                            return e[y] = o, e[g] = o, te.call(e, n, c.os), v && !e[y] && s && "Unknown" != s.platform && (e[y] = s.platform.replace(/chrome os/i, G).replace(/macos/i, Q)), e
                        }, this.getResult = function() {
                            return {
                                ua: this.getUA(),
                                browser: this.getBrowser(),
                                engine: this.getEngine(),
                                os: this.getOS(),
                                device: this.getDevice(),
                                cpu: this.getCPU()
                            }
                        }, this.getUA = function() {
                            return n
                        }, this.setUA = function(e) {
                            return n = typeof e === p && e.length > I ? ee(e, I) : e, this
                        }, this.setUA(n), this
                    };
                se.VERSION = s, se.BROWSER = W([y, g, m]), se.CPU = W([f]), se.DEVICE = W([h, b, w, v, P, k, C, S, A]), se.ENGINE = se.OS = W([y, g]), typeof t !== d ? ("object" !== d && e.exports && (t = e.exports = se), t.UAParser = se) : "function" === l && i.amdO ? (n = function() {
                    return se
                }.call(t, i, t, e), n === o || (e.exports = n)) : typeof a !== d && (a.UAParser = se);
                var re = typeof a !== d && (a.jQuery || a.Zepto);
                if (re && !re.ua) {
                    var ce = new se;
                    re.ua = ce.getResult(), re.ua.get = function() {
                        return ce.getUA()
                    }, re.ua.set = function(e) {
                        ce.setUA(e);
                        var t = ce.getResult();
                        for (var i in t) re.ua[i] = t[i]
                    }
                }
            })("object" === typeof window ? window : this)
        }
    }
]);