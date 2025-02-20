var cPubgJNt = '{"campaigns":{},"events":{"157025262":{"name":"Webflow Engagement: Click","type":"wf_engagement_click","state":"live"}},"pages":{},"audiences":{},"model":{},"id":"117972859","webflowSiteId":"644b71135990d7ae012e6894","name":"Deduxer Agency","encrypt":false,"iint":{"firmographic":{"enabled":false}},"ictp":0.0,"ipcc":false,"plugins":[],"schemaVersion":"2","origins":[{"domain":"deduxer.studio","includeSubdomains":false},{"domain":"deduxer-dev.webflow.io","includeSubdomains":false}],"classicAccess":false}';
var iOverride = {};
(function() {
    "use strict";
    try {
        if (typeof document != "undefined") {
            var e = document.createElement("style");
            e.appendChild(document.createTextNode("")), document.head.appendChild(e)
        }
    } catch (t) {
        console.error("vite-plugin-css-injected-by-js", t)
    }
})();
var __defProp = Object.defineProperty,
    __defProps = Object.defineProperties,
    __getOwnPropDescs = Object.getOwnPropertyDescriptors,
    __getOwnPropSymbols = Object.getOwnPropertySymbols,
    __hasOwnProp = Object.prototype.hasOwnProperty,
    __propIsEnum = Object.prototype.propertyIsEnumerable,
    __pow = Math.pow,
    __defNormalProp = (e, t, i) => t in e ? __defProp(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: i
    }) : e[t] = i,
    __spreadValues = (e, t) => {
        for (var i in t || (t = {})) __hasOwnProp.call(t, i) && __defNormalProp(e, i, t[i]);
        if (__getOwnPropSymbols)
            for (var i of __getOwnPropSymbols(t)) __propIsEnum.call(t, i) && __defNormalProp(e, i, t[i]);
        return e
    },
    __spreadProps = (e, t) => __defProps(e, __getOwnPropDescs(t)),
    __objRest = (e, t) => {
        var i = {};
        for (var s in e) __hasOwnProp.call(e, s) && t.indexOf(s) < 0 && (i[s] = e[s]);
        if (null != e && __getOwnPropSymbols)
            for (var s of __getOwnPropSymbols(e)) t.indexOf(s) < 0 && __propIsEnum.call(e, s) && (i[s] = e[s]);
        return i
    },
    __publicField = (e, t, i) => (__defNormalProp(e, "symbol" != typeof t ? t + "" : t, i), i),
    __async = (e, t, i) => new Promise(((s, n) => {
        var r = e => {
                try {
                    a(i.next(e))
                } catch (t) {
                    n(t)
                }
            },
            o = e => {
                try {
                    a(i.throw(e))
                } catch (t) {
                    n(t)
                }
            },
            a = e => e.done ? s(e.value) : Promise.resolve(e.value).then(r, o);
        a((i = i.apply(e, t)).next())
    }));
! function() {
    "use strict";
    var e, t, i = {},
        s = {},
        n = {};
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.LogLevel = void 0, (t = e || (n.LogLevel = e = {}))[t.OFF = 5] = "OFF", t[t.ERROR = 4] = "ERROR", t[t.WARN = 3] = "WARN", t[t.INFO = 2] = "INFO", t[t.DEBUG = 1] = "DEBUG", t[t.TRACE = 0] = "TRACE", Object.defineProperty(s, "__esModule", {
        value: !0
    }), s.BasicConsoleLogger = void 0;
    var r = n,
        o = function() {
            function e(e, t) {
                this.prefix = "", this.theConsole = e, this.minimumLogLevel = t
            }
            return e.prototype.getLevel = function() {
                return this.minimumLogLevel
            }, e.prototype.error = function(e, t) {
                this.minimumLogLevel <= r.LogLevel.ERROR && this.theConsole.error("[".concat(t, "] ").concat(this.format(e)))
            }, e.prototype.warn = function(e, t) {
                this.minimumLogLevel <= r.LogLevel.WARN && this.theConsole.warn("[".concat(t, "] ").concat(this.format(e)))
            }, e.prototype.info = function(e, t) {
                if (this.minimumLogLevel <= r.LogLevel.INFO) {
                    var i = void 0 !== t ? "[".concat(t, "] ") : "";
                    this.theConsole.info("".concat(i).concat(this.format(e)))
                }
            }, e.prototype.debug = function(e, t) {
                if (this.minimumLogLevel <= r.LogLevel.DEBUG) {
                    var i = void 0 !== t ? "[".concat(t, "] ") : "";
                    (this.theConsole.debug ? this.theConsole.debug : this.theConsole.log)("".concat(i).concat(this.format(e)))
                }
            }, e.prototype.group = function(e) {
                this.minimumLogLevel <= r.LogLevel.DEBUG && (this.prefix += "⎢ ", this.theConsole.log("[1m" + this.format(e) + "[22m"))
            }, e.prototype.groupEnd = function() {
                this.minimumLogLevel <= r.LogLevel.DEBUG && (this.prefix = this.prefix.slice(0, -2))
            }, e.prototype.time = function(e) {
                this.minimumLogLevel <= r.LogLevel.DEBUG && this.theConsole.time(this.format(e))
            }, e.prototype.timeEnd = function(e) {
                this.minimumLogLevel <= r.LogLevel.DEBUG && this.theConsole.timeEnd(this.format(e))
            }, e.prototype.format = function(e) {
                return e.toString().replace(/^/gm, this.prefix)
            }, e
        }();
    s.BasicConsoleLogger = o;
    var a = {};
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), a.NO_OP_LOGGER = void 0;
    var l = n;
    a.NO_OP_LOGGER = function() {
        return {
            getLevel: function() {
                return l.LogLevel.OFF
            },
            error: function() {},
            warn: function() {},
            info: function() {},
            debug: function() {},
            group: function() {},
            groupEnd: function() {},
            time: function() {},
            timeEnd: function() {}
        }
    }();
    var c = {};
    Object.defineProperty(c, "__esModule", {
        value: !0
    }), c.GroupConsoleLogger = void 0;
    var u = n,
        d = function() {
            function e(e, t) {
                this.theConsole = e, this.minimumLogLevel = t
            }
            return e.prototype.getLevel = function() {
                return this.minimumLogLevel
            }, e.prototype.error = function(e, t) {
                this.minimumLogLevel <= u.LogLevel.ERROR && this.theConsole.error("[".concat(t, "] ").concat(e))
            }, e.prototype.warn = function(e, t) {
                this.minimumLogLevel <= u.LogLevel.WARN && this.theConsole.warn("[".concat(t, "] ").concat(e))
            }, e.prototype.info = function(e, t) {
                if (this.minimumLogLevel <= u.LogLevel.INFO) {
                    var i = void 0 !== t ? "[".concat(t, "] ") : "";
                    this.theConsole.info("".concat(i).concat(e))
                }
            }, e.prototype.debug = function(e, t) {
                if (this.minimumLogLevel <= u.LogLevel.DEBUG) {
                    var i = void 0 !== t ? "[".concat(t, "] ") : "";
                    (this.theConsole.debug ? this.theConsole.debug : this.theConsole.log)("".concat(i).concat(e))
                }
            }, e.prototype.group = function(e) {
                this.minimumLogLevel <= u.LogLevel.DEBUG && this.theConsole.group(e)
            }, e.prototype.groupEnd = function() {
                this.minimumLogLevel <= u.LogLevel.DEBUG && this.theConsole.groupEnd()
            }, e.prototype.time = function(e) {
                this.minimumLogLevel <= u.LogLevel.DEBUG && this.theConsole.time(e)
            }, e.prototype.timeEnd = function(e) {
                this.minimumLogLevel <= u.LogLevel.DEBUG && this.theConsole.timeEnd(e)
            }, e
        }();
    c.GroupConsoleLogger = d,
        function(e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.GroupConsoleLogger = e.NO_OP_LOGGER = e.LogLevel = e.BasicConsoleLogger = void 0;
            var t = s;
            Object.defineProperty(e, "BasicConsoleLogger", {
                enumerable: !0,
                get: function() {
                    return t.BasicConsoleLogger
                }
            });
            var i = n;
            Object.defineProperty(e, "LogLevel", {
                enumerable: !0,
                get: function() {
                    return i.LogLevel
                }
            });
            var r = a;
            Object.defineProperty(e, "NO_OP_LOGGER", {
                enumerable: !0,
                get: function() {
                    return r.NO_OP_LOGGER
                }
            });
            var o = c;
            Object.defineProperty(e, "GroupConsoleLogger", {
                enumerable: !0,
                get: function() {
                    return o.GroupConsoleLogger
                }
            })
        }(i);
    const h = e => "[object Array]" === Object.prototype.toString.call(e),
        g = e => "boolean" == typeof e,
        p = e => "number" == typeof e,
        m = e => "[object Object]" === Object.prototype.toString.call(e),
        v = e => "[object String]" === Object.prototype.toString.call(e),
        b = e => v(e) && e.length > 0,
        f = e => void 0 === e,
        E = e => v(e) && /^[\da-f]{8}-[\da-f]{4}-4[\da-f]{3}-[89ab][\da-f]{3}-[\da-f]{12}$/.test(e),
        _ = e => {
            try {
                return b(e) && /^[\u0020-\u007E]+$/.test(e)
            } catch (t) {
                return !1
            }
        },
        y = (e, t) => !!m(e) && Object.keys(e).every((e => t.includes(e))),
        S = "imize-extension",
        I = "imize-field-name";
    var w = (e => (e.backgroundColor = "backgroundColor", e.backgroundImage = "backgroundImage", e.backgroundPosition = "backgroundPosition", e.backgroundRepeat = "backgroundRepeat", e.backgroundSize = "backgroundSize", e.borderColor = "borderColor", e.borderStyle = "borderStyle", e.borderWidth = "borderWidth", e.borderRadius = "borderRadius", e.bottom = "bottom", e.boxShadow = "boxShadow", e.clear = "clear", e.color = "color", e.cursor = "cursor", e.direction = "direction", e.float = "float", e.fontFamily = "fontFamily", e.fontSize = "fontSize", e.fontWeight = "fontWeight", e.left = "left", e.letterSpacing = "letterSpacing", e.lineHeight = "lineHeight", e.listStyleType = "listStyleType", e.listStylePosition = "listStylePosition", e.height = "height", e.minHeight = "minHeight", e.maxHeight = "maxHeight", e.width = "width", e.minWidth = "minWidth", e.maxWidth = "maxWidth", e.visibility = "visibility", e.display = "display", e.position = "position", e.margin = "margin", e.marginLeft = "marginLeft", e.marginRight = "marginRight", e.marginTop = "marginTop", e.marginBottom = "marginBottom", e.opacity = "opacity", e.overflow = "overflow", e.padding = "padding", e.paddingLeft = "paddingLeft", e.paddingRight = "paddingRight", e.paddingTop = "paddingTop", e.paddingBottom = "paddingBottom", e.right = "right", e.textAlign = "textAlign", e.textShadow = "textShadow", e.textTransform = "textTransform", e.top = "top", e.wordSpacing = "wordSpacing", e.zIndex = "zIndex", e))(w || {});
    const C = new Set(["beforebegin", "afterbegin", "beforeend", "afterend"]),
        T = e => v(e) && C.has(e),
        x = e => m(e) && T(e.insertPosition) && A(e.selector) && y(e, ["insertPosition", "selector"]),
        A = _;
    var F = (e => (e.UNAPPLIED = "UNAPPLIED", e.APPLIED = "APPLIED", e.ERROR = "ERROR", e))(F || {});
    const k = e => !!m(e) && Object.keys(e).every((t => t in w && "string" == typeof e[t])),
        P = new Set(["rich-text", "html-block", "video", "image", "heading"]),
        M = e => v(e) && P.has(e);
    let D = class extends Error {
        constructor(e) {
            super(e), this.name = "UnexpectedNullException"
        }
    };

    function N(e, t) {
        if (null == e || "string" == typeof e && 0 === e.length) throw new D(t);
        return e
    }
    let O = class extends Error {
        constructor(e) {
            super(e), this.name = "IllegalArgumentException"
        }
    };

    function R(e, t) {
        if (N(e), !e) throw new O(t)
    }
    let L = class extends Error {
        constructor(e) {
            super(e), this.name = "IllegalStateException"
        }
    };

    function $(e, t) {
        if (N(e), !e) throw new L(t)
    }
    let V = class extends Error {
        constructor(e) {
            super(e), this.name = "NoSuchElementException"
        }
    };
    var U = Object.defineProperty,
        W = (e, t, i) => t in e ? U(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: i
        }) : e[t] = i,
        z = (e, t, i) => (W(e, "symbol" != typeof t ? t + "" : t, i), i);
    let j = class {
        static empty() {
            return H.INSTANCE
        }
        static of (e) {
            return new B(N(e))
        }
        static ofNullable(e) {
            return null == e || "string" == typeof e && 0 === e.length ? H.INSTANCE : new B(e)
        }
    };
    class B extends j {
        constructor(e) {
            super(), z(this, "value"), this.value = e
        }
        isPresent() {
            return !0
        }
        ifPresent(e) {
            return e(this.value), this
        }
        ifAbsent(e) {
            return this
        }
        get() {
            return this.value
        }
        orElse(e) {
            return this.value
        }
        orElseRun(e) {
            return this.value
        }
        toArray() {
            return [this.value]
        }
        map(e) {
            return j.ofNullable(e(this.value))
        }
        flatMap(e) {
            return e(this.value)
        }
        toString() {
            return `Optional[${this.value.toString()}]`
        }
    }
    const G = class extends j {
        isPresent() {
            return !1
        }
        ifPresent(e) {
            return this
        }
        ifAbsent(e) {
            return e(), this
        }
        get() {
            throw new V("No value present")
        }
        orElse(e) {
            return e
        }
        orElseRun(e) {
            return e()
        }
        toArray() {
            return []
        }
        map(e) {
            return j.empty()
        }
        flatMap(e) {
            return j.empty()
        }
        toString() {
            return "Optional.empty"
        }
    };
    let H = G;
    z(H, "INSTANCE", new G);
    const Q = j.ofNullable("v5.9bd4bcec").orElse("NA"),
        q = 1e3,
        K = 50,
        NO_PROGRESS_TOLERANCE_TIME_MS = 48e4,
        Y = 1800,
        J = 86400,
        X = 3600,
        Z = 500,
        ee = 1e3,
        te = 1,
        ie = "api.intellimize.co",
        se = "log.intellimize.co",
        ne = "intellimize_api_",
        re = "intellimize_attributes_",
        oe = "intellimize_integrations_",
        ae = "intellimize_",
        le = "intellimize_policy_",
        ce = "intellimize_server_context_",
        ue = "intellimize_activity_",
        de = "intellimize_user_",
        he = "intellimize_opt_out_",
        ge = "intellimize_shopify_",
        pe = "intellimize_status_module_",
        me = "_mkto_trk",
        ve = "hubspotutk",
        be = "wf",
        fe = i.LogLevel.WARN,
        Ee = i.LogLevel.OFF,
        _e = ["utt", "utm", "uts", "utcn", "utcm"],
        ye = "mkt_tok",
        Se = "_hsenc";

    function Ie(e, t, i) {
        try {
            return we(e, t, i)
        } catch (s) {
            return "CAN_NOT_SERIALIZE"
        }
    }

    function we(e, t, i) {
        let s;
        if (void 0 !== Array.prototype.toJSON && "[3]" !== JSON.stringify([3])) {
            const n = Array.prototype.toJSON;
            delete Array.prototype.toJSON, s = JSON.stringify(e, t, i), Array.prototype.toJSON = n
        } else s = JSON.stringify(e, t, i);
        return s
    }

    function Ce(e) {
        return JSON.parse(e)
    }

    function Te(e) {
        const t = {
            type: e.type,
            target: Ae(e.target)
        };
        return e.addedNodes && e.addedNodes.length > 0 && (t.addedNodes = Array.prototype.map.call(e.addedNodes, Ae)), e.removedNodes && e.removedNodes.length > 0 && (t.removedNodes = Array.prototype.map.call(e.removedNodes, Ae)), e.attributeName && (t.attributeName = e.attributeName), e.oldValue && (t.oldValue = e.oldValue), we(t)
    }

    function xe(e) {
        return we(Ae(e))
    }

    function Ae(e) {
        const t = {
            nodeName: e.nodeName
        };
        return null !== e.textContent && e.textContent.length < 500 && (t.textContent = e.textContent), e instanceof Element && (e.id && (t.id = e.id), e.classList && e.classList.length > 0 && (t.classList = e.classList), e.attributes && e.attributes.length > 0 && (t.attributes = Fe(e.attributes))), t
    }

    function Fe(e) {
        const t = e.length,
            i = [];
        for (let s = 0; s < t; s += 1) {
            const t = e.item(s);
            null !== t && i.push({
                name: t.name,
                value: t.value
            })
        }
        return i
    }

    function ke(e, t) {
        const i = e.getWindow().atob(t),
            s = Me(e, i);
        return decodeURIComponent(s)
    }

    function Pe(e, t) {
        return Ce(ke(e, t))
    }

    function Me(e, t) {
        const i = [...e.getWindow().atob("YmdKTnQ=")],
            s = [];
        for (let n = 0; n < t.length; n++) {
            const e = t.codePointAt(n) ^ i[n % i.length].codePointAt(0);
            s.push(String.fromCodePoint(e))
        }
        return s.join("")
    }

    function De(e) {
        return e.getWindow().atob("Y1B1YmdKTnQ=")
    }

    function Ne(e) {
        let t;
        if (void 0 !== e) t = e;
        else {
            if ("undefined" == typeof window) return i.NO_OP_LOGGER;
            t = window
        }
        const s = $e(t);
        return s === i.LogLevel.OFF ? i.NO_OP_LOGGER : "group" in t.console ? new Oe(t, s) : new Re(t, s)
    }
    class Oe extends i.GroupConsoleLogger {
        constructor(e, t) {
            super(e.console, t), __publicField(this, "idebFilters"), this.idebFilters = ze(e)
        }
        debug(e, t, i, s) {
            Le(this.idebFilters, s) && super.debug(e, t, i)
        }
        info(e, t, i, s) {
            Le(this.idebFilters, s) && super.info(e, t, i)
        }
        warn(e, t, i, s) {
            Le(this.idebFilters, s) && super.warn(e, t, i)
        }
        error(e, t, i, s) {
            Le(this.idebFilters, s) && super.error(e, t, i)
        }
        group(e, t) {
            Le(this.idebFilters, t) && super.group(e)
        }
        groupEnd(e) {
            Le(this.idebFilters, e) && super.groupEnd()
        }
        time(e, t) {
            Le(this.idebFilters, t) && super.time(e)
        }
        timeEnd(e, t) {
            Le(this.idebFilters, t) && super.timeEnd(e)
        }
    }
    class Re extends i.BasicConsoleLogger {
        constructor(e, t) {
            super(e.console, t), __publicField(this, "idebFilters"), this.idebFilters = ze(e)
        }
        debug(e, t, i, s) {
            Le(this.idebFilters, s) && super.debug(e, t, i)
        }
        info(e, t, i, s) {
            Le(this.idebFilters, s) && super.info(e, t, i)
        }
        warn(e, t, i, s) {
            Le(this.idebFilters, s) && super.warn(e, t, i)
        }
        error(e, t, i, s) {
            Le(this.idebFilters, s) && super.error(e, t, i)
        }
        group(e, t) {
            Le(this.idebFilters, t) && super.group(e)
        }
        groupEnd(e) {
            Le(this.idebFilters, e) && super.groupEnd()
        }
        time(e, t) {
            Le(this.idebFilters, t) && super.time(e)
        }
        timeEnd(e, t) {
            Le(this.idebFilters, t) && super.timeEnd(e)
        }
    }

    function Le(e, t) {
        const i = [],
            s = [];
        for (const n of e) n.startsWith("!") ? s.push(n.slice(1)) : i.push(n);
        return void 0 === t && 0 === i.length || (!0 === (null == t ? void 0 : t.some((e => i.includes(e)))) || !0 !== (null == t ? void 0 : t.some((e => s.includes(e)))) && (!(i.length > 0) || void 0 !== t && !t.every((e => !i.includes(e)))))
    }

    function $e(e) {
        let t = Ve(e);
        return t.isPresent() ? t.get() : (t = Ue(e), t.isPresent() ? t.get() : (t = We(e), t.isPresent() ? t.get() : Ee))
    }

    function Ve(e) {
        var t, i;
        return j.ofNullable(null == (i = null == (t = null == e ? void 0 : e.location) ? void 0 : t.search) ? void 0 : i.slice(1)).flatMap((e => j.ofNullable(/(?:^|\?|&)ideb=([0-5])(?:$|&|#)/.exec(e)).map((e => Number.parseInt(e[1], 10)))))
    }

    function Ue(e) {
        var t;
        return j.ofNullable(null == (t = null == e ? void 0 : e.localStorage) ? void 0 : t.getItem("ideb")).flatMap((e => j.ofNullable(/^([0-5])$/.exec(e)).map((e => Number.parseInt(e[1], 10)))))
    }

    function We(e) {
        var t;
        return j.ofNullable(null == (t = null == e ? void 0 : e.iOverride) ? void 0 : t.logLevel)
    }

    function ze(e) {
        var t;
        return j.ofNullable(null == (t = null == e ? void 0 : e.localStorage) ? void 0 : t.getItem("ideb_filters")).map((e => e.split(","))).orElse([])
    }
    class je {
        constructor({
            name: e,
            namespace: t
        }) {
            __publicField(this, "name"), __publicField(this, "namespace"), this.name = e, this.namespace = t
        }
        getId() {
            return {
                name: this.name,
                namespace: this.namespace
            }
        }
        getName() {
            return this.name
        }
        getNamespace() {
            return this.namespace
        }
        getValue(e) {
            return e.getAttributeValue(this)
        }
    }
    class Be {
        constructor(e) {
            __publicField(this, "audience"), this.audience = e
        }
        getId() {
            return this.audience.getId()
        }
        getName() {
            return this.audience.getName()
        }
        getState() {
            return this.audience.getState()
        }
        getCondition() {
            return this.audience.getCondition()
        }
        addExperience(e) {
            this.audience.addExperience(e)
        }
        addVariation(e) {
            this.audience.addVariation(e)
        }
        getCode() {
            return this.audience.getCode()
        }
        getExperiences() {
            return this.audience.getExperiences()
        }
        getVariations() {
            return this.audience.getVariations()
        }
        isInclude() {
            return !1
        }
    }
    class Ge {
        constructor(e, t, i, s, n) {
            __publicField(this, "logger"), __publicField(this, "json"), __publicField(this, "filter"), __publicField(this, "newAggregator"), __publicField(this, "operation"), this.json = e, this.filter = t, this.newAggregator = i, this.logger = n, this.operation = s
        }
        evaluate(e) {
            this.logger.group("ActivityCondition.evaluate()"), this.logger.debug(`activity condition config: ${JSON.stringify(this.json)}`);
            const t = e.getActivities();
            this.logger.debug(`activities: ${JSON.stringify(t)}`), this.logger.info(`activity count: ${t.length}`);
            const i = t.filter((e => this.filter.evaluate(e)));
            this.logger.debug(`filtered activities: ${JSON.stringify(i)}`), this.logger.info(`filtered activities count: ${i.length}`);
            const s = this.newAggregator();
            i.forEach((e => {
                s.accept(e)
            }));
            const n = s.result();
            this.logger.info(`aggregator result: ${n}`);
            const r = this.operation(j.of(n));
            return this.logger.info(`condition result: ${r}`), this.logger.groupEnd(), r
        }
        toJSON() {
            return JSON.parse(JSON.stringify(this.json))
        }
    }
    class He {
        constructor(e, t) {
            __publicField(this, "conditions"), this.conditions = e.conditions.map((e => t.buildCondition(e)))
        }
        getConditions() {
            return this.conditions
        }
        evaluate(e) {
            return this.conditions.every((t => t.evaluate(e)))
        }
        toJSON() {
            return {
                conditions: this.conditions.map((e => e.toJSON())),
                type: "logic-and"
            }
        }
    }
    class Qe {
        constructor(e, t, i) {
            __publicField(this, "audience");
            const s = t.getAudience(e.audienceId);
            this.audience = !0 === i ? new Be(s) : s
        }
        getAudience() {
            return this.audience
        }
        evaluate(e) {
            return this.audience.getCondition().evaluate(e)
        }
        toJSON() {
            return {
                audienceId: this.audience.getId(),
                type: "audience"
            }
        }
    }
    class qe {
        constructor(e) {
            __publicField(this, "code"), this.code = e.code
        }
        getCode() {
            return this.code
        }
        evaluate(e) {
            return e.evalBoolean(this.code)
        }
        toJSON() {
            return {
                code: this.code,
                type: "code"
            }
        }
    }
    class Ke {
        constructor(e, t, i) {
            __publicField(this, "json"), __publicField(this, "attributeDefinition"), __publicField(this, "operation"), this.json = e, this.attributeDefinition = t, this.operation = i
        }
        getAttributeDefinition() {
            return this.attributeDefinition
        }
        getComparisonOperation() {
            return this.operation
        }
        evaluate(e) {
            return this.operation(this.attributeDefinition.getValue(e))
        }
        toJSON() {
            return JSON.parse(JSON.stringify(this.json))
        }
    }
    class Ye {
        constructor(e, t) {
            __publicField(this, "condition");
            const i = "audience" === e.condition.type;
            this.condition = t.buildCondition(e.condition, i)
        }
        getCondition() {
            return this.condition
        }
        evaluate(e) {
            return !this.condition.evaluate(e)
        }
        toJSON() {
            return {
                condition: this.condition.toJSON(),
                type: "logic-not"
            }
        }
    }
    class Je {
        constructor(e, t) {
            __publicField(this, "conditions"), this.conditions = e.conditions.map((e => t.buildCondition(e)))
        }
        getConditions() {
            return this.conditions
        }
        evaluate(e) {
            return this.conditions.some((t => t.evaluate(e)))
        }
        toJSON() {
            return {
                conditions: this.conditions.map((e => e.toJSON())),
                type: "logic-or"
            }
        }
    }
    class Xe {
        constructor(e, t, i) {
            var s;
            if (__publicField(this, "id"), __publicField(this, "name"), __publicField(this, "state"), __publicField(this, "condition"), __publicField(this, "experiences", []), __publicField(this, "variations", []), this.id = e, this.name = t.name, this.state = null != (s = t.state) ? s : "live", void 0 !== t.code && void 0 !== t.condition) this.condition = i.buildCondition({
                conditions: [{
                    code: t.code,
                    type: "code"
                }, t.condition],
                type: "logic-and"
            });
            else if (void 0 !== t.code) this.condition = i.buildCondition({
                code: t.code,
                type: "code"
            });
            else {
                if (void 0 === t.condition) throw new D('Unable to build condition for audience. No "code" or "condition" property.');
                this.condition = i.buildCondition(t.condition)
            }
        }
        getId() {
            return this.id
        }
        getName() {
            return this.name
        }
        getState() {
            return this.state
        }
        getCondition() {
            return this.condition
        }
        addExperience(e) {
            this.experiences.push(e)
        }
        addVariation(e) {
            this.variations.push(e)
        }
        getCode() {
            return this.condition instanceof qe ? j.of(this.condition.getCode()) : j.empty()
        }
        getExperiences() {
            return [...this.experiences]
        }
        getVariations() {
            return [...this.variations]
        }
        isInclude() {
            return !0
        }
    }
    const Ze = ["standard", "custom", "url_param", "marketo", "salesforce", "firmographic", "6sense", "googleAds", "demandbase", "hubspot"];
    var et = (e => (e.ATTRIBUTE = "ATTRIBUTE", e.CUSTOM_CODE = "CUSTOM_CODE", e.INSERT_ELEMENT = "INSERT_ELEMENT", e.EXTENSION = "EXTENSION", e.EXTENSION_ATTRIBUTE = "EXTENSION_ATTRIBUTE", e.MOVE_ELEMENT = "MOVE_ELEMENT", e.WEBFLOW = "WEBFLOW", e))(et || {});
    const tt = ["checkout_completed", "checkout_started", "collection_viewed", "product_added_to_cart", "product_viewed", "search_submitted"],
        it = "118",
        st = "exists",
        nt = "notExists";
    class rt {
        constructor() {
            __publicField(this, "count", 0)
        }
        accept(e) {
            this.count++
        }
        result() {
            return this.count
        }
    }
    class ot {
        constructor(e) {
            __publicField(this, "activityFieldFunction"), __publicField(this, "set", new Set), this.activityFieldFunction = e
        }
        accept(e) {
            const t = this.activityFieldFunction(e);
            t.isPresent() && this.set.add(t.get())
        }
        result() {
            return this.set.size
        }
    }
    class at {
        constructor(e) {
            __publicField(this, "activityFieldFunction"), __publicField(this, "sum", 0), __publicField(this, "count", 0), this.activityFieldFunction = e
        }
        accept(e) {
            const t = this.activityFieldFunction(e);
            t.isPresent() && (this.count++, this.sum += t.get())
        }
        result() {
            return this.count > 0 ? this.sum / this.count : 0
        }
    }
    class lt {
        constructor(e) {
            __publicField(this, "activityFieldFunction"), __publicField(this, "sum", 0), this.activityFieldFunction = e
        }
        accept(e) {
            const t = this.activityFieldFunction(e);
            this.sum += t.orElse(0)
        }
        result() {
            return this.sum
        }
    }
    class ct {
        constructor(e, t) {
            __publicField(this, "filters"), this.filters = e.filters.map((e => t.buildActivityFilter(e)))
        }
        evaluate(e) {
            return this.filters.every((t => t.evaluate(e)))
        }
    }
    class ut {
        constructor(e, t) {
            __publicField(this, "activityFieldFunction"), __publicField(this, "operation"), this.activityFieldFunction = e, this.operation = t
        }
        evaluate(e) {
            return this.operation(this.activityFieldFunction(e))
        }
    }
    class dt {
        constructor(e, t) {
            __publicField(this, "filter"), this.filter = t.buildActivityFilter(e.filter)
        }
        evaluate(e) {
            return !this.filter.evaluate(e)
        }
    }
    class ht {
        constructor(e, t) {
            __publicField(this, "filters"), this.filters = e.filters.map((e => t.buildActivityFilter(e)))
        }
        evaluate(e) {
            return this.filters.some((t => t.evaluate(e)))
        }
    }
    class gt {
        constructor(e, t, i, s) {
            __publicField(this, "id"), __publicField(this, "name"), __publicField(this, "controlTrafficPercentage"), __publicField(this, "code"), __publicField(this, "css"), __publicField(this, "metrics"), __publicField(this, "experiences"), __publicField(this, "customer"), __publicField(this, "intervals"), __publicField(this, "intervalModifications"), __publicField(this, "important"), __publicField(this, "primaryMetrics"), this.id = e, this.customer = s, this.name = t.name, this.intervals = [], this.intervalModifications = [], void 0 !== t.ictp && (this.controlTrafficPercentage = t.ictp), void 0 !== t.code && (this.code = t.code), void 0 !== t.css && (this.css = t.css);
            const n = [];
            for (const [r, o] of Object.entries(t.experiences)) {
                const e = i.buildExperience(r, o, this);
                n.push(e)
            }
            this.experiences = n, this.important = Boolean(t.important), void 0 !== t.modifiedIntervals && (this.intervals = t.modifiedIntervals), void 0 !== t.intervalModifications && (this.intervalModifications = t.intervalModifications), this.metrics = t.metrics.map((e => i.buildMetric(e, this))), this.primaryMetrics = t.primaryMetrics
        }
        getId() {
            return this.id
        }
        getName() {
            return this.name
        }
        getControlTrafficPercentage() {
            return j.ofNullable(this.controlTrafficPercentage)
        }
        getCode() {
            return j.ofNullable(this.code)
        }
        getCss() {
            return j.ofNullable(this.css)
        }
        getExperiences() {
            return this.experiences
        }
        getMetrics() {
            return this.metrics
        }
        getMetric(e) {
            const t = this.metrics.filter((t => t.getId() === e));
            return 0 === t.length ? j.empty() : j.ofNullable(t[0])
        }
        getCustomer() {
            return this.customer
        }
        getExperience(e) {
            const t = this.experiences.filter((t => t.getId() === e));
            return 0 === t.length ? j.empty() : j.ofNullable(t[0])
        }
        getIntervals() {
            return this.intervals
        }
        getIntervalModifications() {
            return this.intervalModifications
        }
        isImportant() {
            return this.important
        }
        getPrimaryMetrics() {
            const {
                primaryMetrics: e
            } = this, t = "customer" === e.level ? this.customer.getMetrics() : this.metrics;
            return 0 === e.metricIds.length ? t : t.filter((t => e.metricIds.includes(t.getId())))
        }
        getPrimaryMetricLevel() {
            return this.primaryMetrics.level
        }
    }
    class pt {
        constructor(e) {
            __publicField(this, "username"), __publicField(this, "role"), this.username = e.username, this.role = e.role
        }
        getUsername() {
            return this.username
        }
        getRole() {
            return this.role
        }
    }
    class mt {
        constructor(e) {
            var t, i;
            __publicField(this, "enabled"), __publicField(this, "originWhitelist"), __publicField(this, "originBlacklist"), void 0 === e ? (this.enabled = !1, this.originWhitelist = [], this.originBlacklist = []) : (this.enabled = e.enabled || !1, this.originWhitelist = null != (t = e.originWhitelist) ? t : [], this.originBlacklist = null != (i = e.originBlacklist) ? i : [])
        }
        static isMatchingOrigin(e, t) {
            return new RegExp(`^${e}$`).test(t)
        }
        isEnabled() {
            return this.enabled
        }
        getOriginWhitelist() {
            return this.originWhitelist
        }
        getOriginBlacklist() {
            return this.originBlacklist
        }
        isOriginAllowed(e) {
            let t = !1;
            for (const i of this.originWhitelist)
                if (mt.isMatchingOrigin(i, e)) {
                    t = !0;
                    break
                }
            if (t)
                for (const i of this.originBlacklist)
                    if (mt.isMatchingOrigin(i, e)) {
                        t = !1;
                        break
                    }
            return t
        }
    }

    function vt(e) {
        return e instanceof Error ? e : new Error(e)
    }
    class bt extends Error {
        constructor(e, t) {
            super(e), __publicField(this, "cause"), this.name = "ProxyError", this.cause = vt(t), this.message = this.getAggregateMessage(), void 0 !== this.cause.stack && (this.stack = this.cause.stack)
        }
        getCause() {
            return this.cause instanceof bt ? this.cause.getCause() : this.cause
        }
        getAggregateMessage() {
            let e = `${this.message}. `;
            return e += this.cause instanceof bt ? this.cause.getAggregateMessage() : `${this.cause.name}: ${this.cause.message}`, e
        }
    }
    class ft {
        constructor(e, t, i) {
            var s;
            __publicField(this, "logger"), __publicField(this, "id"), __publicField(this, "name"), __publicField(this, "type"), __publicField(this, "state"), __publicField(this, "metrics", []), this.logger = i.getLogger(), this.id = e, this.name = t.name, this.type = t.type, R(void 0 !== this.type, "invalid event type: " + t.type), this.state = null != (s = t.state) ? s : "live"
        }
        addMetric(e) {
            this.metrics.push(e)
        }
        getId() {
            return this.id
        }
        getName() {
            return this.name
        }
        getType() {
            return this.type
        }
        getState() {
            return this.state
        }
        getMetrics() {
            const e = [];
            return this.metrics.forEach((t => {
                e.push(t)
            })), e
        }
    }
    class Et extends ft {}
    class _t extends Et {
        constructor(e, t, i) {
            super(e, t, i), __publicField(this, "pages"), __publicField(this, "code"), __publicField(this, "selector"), this.pages = t.pageIds.flatMap((e => i.getPage(e).toArray())), this.pages.forEach((e => {
                e.addEvent(this)
            })), void 0 !== t.code && (this.code = t.code), this.selector = t.selector
        }
        static filterEvents(e) {
            return e.filter((e => "click" === e.getType()))
        }
        getPages() {
            return this.pages
        }
        getCode() {
            return j.ofNullable(this.code)
        }
        getSelector() {
            return this.selector
        }
        executeCode(e) {
            this.logger.debug("executeCode() if present");
            let t = !0;
            if (this.getCode().isPresent()) {
                const s = this.getCode().get();
                try {
                    this.logger.info(`Event ${this.id} code running`), t = e(s), this.logger.info(`Event ${this.id} code result => ${t}`)
                } catch (i) {
                    const e = new bt(`Click event (${this.id}) code execution failed `, i);
                    t = !1, this.logger.error(e, 1007, {
                        eventId: this.id
                    })
                }
            }
            return t
        }
    }
    class yt extends ft {
        constructor(e, t, i) {
            super(e, t, i), __publicField(this, "apiName"), this.apiName = t.apiName
        }
        static filterEvents(e) {
            return e.filter((e => "custom" === e.getType()))
        }
        getApiName() {
            return this.apiName
        }
    }
    class St extends ft {
        constructor(e, t, i) {
            super(e, t, i), __publicField(this, "formId"), this.formId = t.formId
        }
        static filterEvents(e) {
            return e.filter((e => "hubspot" === e.getType()))
        }
        getFormId() {
            return this.formId
        }
    }
    class It extends ft {
        constructor(e, t, i) {
            super(e, t, i), __publicField(this, "formId"), this.formId = t.formId
        }
        static filterEvents(e) {
            return e.filter((e => "marketo" === e.getType()))
        }
        getFormId() {
            return this.formId
        }
    }
    class wt extends ft {
        constructor(e, t, i) {
            super(e, t, i), __publicField(this, "customerEventName"), this.customerEventName = t.customerEventName
        }
        static filterEvents(e) {
            return e.filter((e => "shopify" === e.getType()))
        }
        getCustomerEventName() {
            return this.customerEventName
        }
    }
    class Ct extends ft {
        constructor(e, t, i) {
            super(e, t, i)
        }
    }
    class Tt extends ft {
        constructor(e, t, i) {
            super(e, t, i), __publicField(this, "pages"), __publicField(this, "code"), this.pages = t.pageIds.flatMap((e => i.getPage(e).toArray())), this.pages.forEach((e => {
                e.addEvent(this)
            })), void 0 !== t.code && (this.code = t.code)
        }
        static filterEvents(e) {
            return e.filter((e => "view" === e.getType()))
        }
        getPages() {
            return this.pages
        }
        getCode() {
            return j.ofNullable(this.code)
        }
        executeCode(e) {
            this.logger.debug("executeCode() if present");
            let t = !0;
            if (this.getCode().isPresent()) {
                const s = this.getCode().get();
                try {
                    this.logger.info(`Event ${this.id} code running`), t = e(s), this.logger.info(`Event ${this.id} code result => ${t}`)
                } catch (i) {
                    const e = new bt(`View event (${this.id}) code execution failed `, i);
                    t = !1, this.logger.error(e, 1011, {
                        eventId: this.id
                    })
                }
            }
            return t
        }
    }
    class xt extends Et {
        static filterEvents(e) {
            return e.filter((e => "wf_engagement_click" === e.getType()))
        }
        constructor(e, t, i) {
            super(e, t, i)
        }
        getSelector() {
            return "[data-wf-native-id-path]"
        }
    }
    class At {
        constructor(e, t) {
            var i, s, n, r, o, a, l;
            __publicField(this, "data"), __publicField(this, "active"), __publicField(this, "encrypt"), __publicField(this, "schemaVersion"), __publicField(this, "id"), __publicField(this, "version"), __publicField(this, "name"), __publicField(this, "controlStickyConfig"), __publicField(this, "campaignControl"), __publicField(this, "controlTrafficPercentage"), __publicField(this, "collaborators"), __publicField(this, "excludeIps"), __publicField(this, "plugins"), __publicField(this, "metrics"), __publicField(this, "campaigns"), __publicField(this, "pages"), __publicField(this, "audiences"), __publicField(this, "experiences"), __publicField(this, "iEvents"), __publicField(this, "code"), __publicField(this, "css"), __publicField(this, "snippetDomain"), __publicField(this, "urlParamFilters"), __publicField(this, "customAttributeFilters"), __publicField(this, "googleAnalytics4Integration"), __publicField(this, "segmentAnalyticsIntegration"), __publicField(this, "mixpanelIntegration"), __publicField(this, "marketoIntegration"), __publicField(this, "salesforceIntegration"), __publicField(this, "shopifyIntegration"), __publicField(this, "firmographicIntegration"), __publicField(this, "sixsenseIntegration"), __publicField(this, "googleAdsIntegration"), __publicField(this, "demandbaseIntegration"), __publicField(this, "hubspotIntegration"), __publicField(this, "mfa"), __publicField(this, "changelogInternal"), __publicField(this, "changelogExternal"), __publicField(this, "crossOrigin"), __publicField(this, "origins"), __publicField(this, "vertical"), __publicField(this, "currentContract"), __publicField(this, "timeZone"), __publicField(this, "classicAccess"), __publicField(this, "salesforceAccountId"), __publicField(this, "autoUpdateOrigins"), __publicField(this, "roiScenario"), __publicField(this, "webflowSiteId"), __publicField(this, "limitedModeCondition"), this.data = e, this.active = e.active, this.encrypt = e.encrypt, this.schemaVersion = null != (i = e.schemaVersion) ? i : "1", this.id = e.id, this.version = e.__v, this.name = e.name, this.controlStickyConfig = t.buildControlStickyConfig(e.scon), this.campaignControl = e.ipcc, this.campaignControl || void 0 === e.ictp || (this.controlTrafficPercentage = e.ictp), void 0 !== e.code && (this.code = e.code), void 0 !== e.css && (this.css = e.css), void 0 !== e.snippetDomain && (this.snippetDomain = e.snippetDomain);
            const c = [];
            void 0 !== e.collaborators && e.collaborators.forEach((e => {
                c.push(t.buildCollaborator(e))
            })), this.collaborators = c, this.excludeIps = null != (s = e.excludeIps) ? s : [], this.plugins = null != (n = e.plugins) ? n : [], this.urlParamFilters = null != (r = e.urlParamFilters) ? r : [], this.customAttributeFilters = null != (o = e.customAttributeFilters) ? o : [], this.changelogInternal = null != (a = e.changelogInternal) ? a : [], this.changelogExternal = null != (l = e.changelogExternal) ? l : [], this.crossOrigin = t.buildCrossOrigin(e.crossOrigin), this.origins = void 0 !== e.origins && e.origins.length > 0 ? e.origins.map((e => t.buildOrigin(e))) : [];
            const u = [];
            for (const [v, b] of Object.entries(e.audiences)) {
                const e = t.buildAudience(v, b);
                u.push(e)
            }
            this.audiences = u;
            const d = [];
            for (const [v, b] of Object.entries(e.pages)) {
                const e = t.buildPage(v, b);
                d.push(e)
            }
            this.pages = d;
            const h = [];
            for (const [v, b] of Object.entries(e.events)) {
                const e = t.buildEvent(v, b);
                h.push(e)
            }
            this.iEvents = h;
            for (const [v, b] of Object.entries(e.pages)) "metrics" in b && b.metrics.forEach((e => {
                t.getPage(v).ifPresent((i => {
                    i.addMetric(t.buildMetric(e, void 0, i))
                }))
            }));
            let g = [];
            void 0 !== e.metrics && (g = e.metrics.map((e => t.buildMetric(e, void 0, void 0, this)))), this.metrics = g;
            const p = [];
            for (const [v, b] of Object.entries(e.campaigns)) {
                const e = t.buildCampaign(v, b, this);
                p.push(e)
            }
            this.campaigns = p;
            const m = new Map;
            this.campaigns.forEach((e => {
                e.getExperiences().forEach((e => {
                    m.set(e.getId(), e)
                }))
            })), this.experiences = m, void 0 !== e.iint && (void 0 !== e.iint.ga4 && (this.googleAnalytics4Integration = t.buildGoogleAnalytics4Integration(e.iint.ga4)), void 0 !== e.iint.sg && (this.segmentAnalyticsIntegration = t.buildSegmentIntegration(e.iint.sg)), void 0 !== e.iint.mp && (this.mixpanelIntegration = t.buildMixpanelIntegration(e.iint.mp)), void 0 !== e.iint.marketo && (this.marketoIntegration = t.buildMarketoIntegration(e.iint.marketo)), void 0 !== e.iint.salesforce && (this.salesforceIntegration = t.buildSalesforceIntegration(e.iint.salesforce)), void 0 !== e.iint.shopify && (this.shopifyIntegration = t.buildShopifyIntegration(e.iint.shopify, this.metrics, this.pages, this.iEvents)), void 0 !== e.iint.firmographic && (this.firmographicIntegration = t.buildFirmographicIntegration(e.iint.firmographic)), void 0 !== e.iint.sixsense && (this.sixsenseIntegration = t.buildSixsenseIntegration(e.iint.sixsense)), void 0 !== e.iint.googleAds && (this.googleAdsIntegration = t.buildGoogleAdsIntegration(e.iint.googleAds)), void 0 !== e.iint.demandbase && (this.demandbaseIntegration = t.buildDemandbaseIntegration(e.iint.demandbase)), void 0 !== e.iint.hubspot && (this.hubspotIntegration = t.buildHubspotIntegration(e.iint.hubspot))), this.mfa = Boolean(e.mfa), void 0 !== e.vertical && (this.vertical = e.vertical), void 0 !== e.currentContract && (this.currentContract = e.currentContract), void 0 !== e.timeZone && (this.timeZone = e.timeZone), void 0 !== e.classicAccess && (this.classicAccess = e.classicAccess), void 0 !== e.salesforceAccountId && (this.salesforceAccountId = e.salesforceAccountId), this.autoUpdateOrigins = e.autoUpdateOrigins, void 0 !== e.roiScenario && (this.roiScenario = e.roiScenario), this.webflowSiteId = e.webflowSiteId, void 0 !== e.limitedModeCondition && (this.limitedModeCondition = t.buildCondition(e.limitedModeCondition))
        }
        getData() {
            return this.data
        }
        isActive() {
            return this.active
        }
        shouldEncrypt() {
            return this.encrypt
        }
        getSchemaVersion() {
            return this.schemaVersion
        }
        getId() {
            return this.id
        }
        getVersion() {
            return this.version
        }
        getName() {
            return this.name
        }
        getCollaborators() {
            return this.collaborators
        }
        getExcludeIps() {
            return this.excludeIps
        }
        getPlugins() {
            return this.plugins
        }
        getMetrics() {
            return this.metrics
        }
        getControlStickyConfig() {
            return this.controlStickyConfig
        }
        isCampaignControl() {
            return this.campaignControl
        }
        getControlTrafficPercentage() {
            return j.ofNullable(this.controlTrafficPercentage)
        }
        getCode() {
            return j.ofNullable(this.code)
        }
        getCss() {
            return j.ofNullable(this.css)
        }
        getSnippetDomain() {
            return j.ofNullable(this.snippetDomain)
        }
        getCampaigns() {
            return this.campaigns
        }
        getPages() {
            return this.pages
        }
        getAudiences() {
            return this.audiences
        }
        getEvents() {
            return this.iEvents
        }
        getCampaign(e) {
            const t = this.campaigns.filter((t => t.getId() === e));
            return 0 === t.length ? j.empty() : j.ofNullable(t[0])
        }
        getExperience(e) {
            return j.ofNullable(this.experiences.get(e))
        }
        getPage(e) {
            const t = this.pages.filter((t => t.getId() === e));
            return 0 === t.length ? j.empty() : j.ofNullable(t[0])
        }
        getEvent(e) {
            const t = this.iEvents.filter((t => t.getId() === e));
            return 0 === t.length ? j.empty() : j.ofNullable(t[0])
        }
        getCustomEvent(e) {
            const t = this.iEvents.filter((t => t instanceof yt && t.getApiName() === e));
            return 0 === t.length ? j.empty() : j.ofNullable(t[0])
        }
        getShopifyEvent(e) {
            const t = this.iEvents.filter((t => t instanceof wt && t.getCustomerEventName() === e));
            return 0 === t.length ? j.empty() : j.ofNullable(t[0])
        }
        getShopifyServerSideEvent() {
            return j.ofNullable(this.iEvents.find((e => e instanceof Ct)))
        }
        getAudience(e) {
            const t = this.audiences.filter((t => t.getId() === e));
            return 0 === t.length ? j.empty() : j.ofNullable(t[0])
        }
        getIntegrationGoogle4Analytics() {
            return j.ofNullable(this.googleAnalytics4Integration)
        }
        getIntegrationSegmentAnalytics() {
            return j.ofNullable(this.segmentAnalyticsIntegration)
        }
        getIntegrationMixpanel() {
            return j.ofNullable(this.mixpanelIntegration)
        }
        getIntegrationMarketo() {
            return j.ofNullable(this.marketoIntegration)
        }
        getIntegrationSalesforce() {
            return j.ofNullable(this.salesforceIntegration)
        }
        getIntegrationShopify() {
            return j.ofNullable(this.shopifyIntegration)
        }
        getIntegrationFirmographic() {
            return j.ofNullable(this.firmographicIntegration)
        }
        getIntegrationSixsense() {
            return j.ofNullable(this.sixsenseIntegration)
        }
        getIntegrationGoogleAds() {
            return j.ofNullable(this.googleAdsIntegration)
        }
        getIntegrationDemandbase() {
            return j.ofNullable(this.demandbaseIntegration)
        }
        getIntegrationHubspot() {
            return j.ofNullable(this.hubspotIntegration)
        }
        getUrlParamFilters() {
            return this.urlParamFilters
        }
        getCustomAttributeFilters() {
            return this.customAttributeFilters
        }
        getChangelogInternal() {
            return this.changelogInternal
        }
        getChangelogExternal() {
            return this.changelogExternal
        }
        getCrossOrigin() {
            return this.crossOrigin
        }
        getOrigins() {
            return this.origins
        }
        isMfa() {
            return this.mfa
        }
        getVertical() {
            return j.ofNullable(this.vertical)
        }
        getCurrentContract() {
            return j.ofNullable(this.currentContract)
        }
        getTimeZone() {
            return j.ofNullable(this.timeZone)
        }
        hasClassicAccess() {
            return j.ofNullable(this.classicAccess).orElse(!1)
        }
        getSalesforceAccountId() {
            return j.ofNullable(this.salesforceAccountId)
        }
        shouldAutoUpdateOrigins() {
            return j.ofNullable(this.autoUpdateOrigins).orElse(!1)
        }
        getRoiScenario() {
            return j.ofNullable(this.roiScenario)
        }
        getWebflowSiteId() {
            return j.ofNullable(this.webflowSiteId)
        }
        getLimitedModeCondition() {
            return j.ofNullable(this.limitedModeCondition)
        }
    }
    class Ft {
        constructor(e) {
            __publicField(this, "type"), __publicField(this, "id"), this.type = e.type, this.id = e.id
        }
        getType() {
            return this.type
        }
        getId() {
            return j.ofNullable(this.id)
        }
    }
    class kt extends Ft {
        constructor(e) {
            super(e), __publicField(this, "attributes");
            const t = __spreadValues({}, e.attributes.css);
            this.attributes = __spreadProps(__spreadValues({}, e.attributes), {
                css: t
            })
        }
        getAttributes() {
            return this.attributes
        }
        isReadyToApply(e) {
            return this.getSelectorElements(e).length > 0
        }
        getSelectorElements(e) {
            return e.querySelectorAll(this.getSelector())
        }
    }
    class Pt extends kt {
        constructor(e) {
            super(e), __publicField(this, "selector"), this.selector = e.selector
        }
        getSelector() {
            return this.selector
        }
    }
    class Mt extends Ft {
        constructor(e) {
            super(e), __publicField(this, "code"), __publicField(this, "css"), R(Boolean(e.code) || Boolean(e.css), 'Either "code" or "css" must be specified'), this.code = e.code, this.css = e.css
        }
        getCode() {
            return j.ofNullable(this.code)
        }
        getCss() {
            return j.ofNullable(this.css)
        }
        isReadyToApply(e) {
            return !0
        }
    }
    class Dt extends kt {
        constructor(e) {
            super(e), __publicField(this, "refId"), __publicField(this, "extensionName"), __publicField(this, "fieldName"), this.refId = e.refId, this.fieldName = e.fieldName, this.extensionName = e.extensionName
        }
        getSelector() {
            const e = `[data-${S}="${this.refId}"]`,
                t = `[data-${I}="${this.fieldName}"]`;
            return `${e}${t}, ${e} ${t}`
        }
        getRefId() {
            return this.refId
        }
        getExtensionName() {
            return this.extensionName
        }
        getFieldName() {
            return this.fieldName
        }
    }
    class Nt extends Ft {
        constructor(e) {
            super(e), __publicField(this, "name"), __publicField(this, "executorJson"), this.name = e.name, this.executorJson = e.executorJson
        }
        getName() {
            return this.name
        }
        getExecutorJson() {
            return this.executorJson
        }
    }

    function Ot(e) {
        return e.replace(/['\\]/g, (e => "\\" + e))
    }

    function Rt(e, t = !0) {
        return `document.querySelectorAll('${Ot(e)}').length ${t?"> 0":"=== 1"}`
    }

    function Lt(e, t) {
        const i = e.querySelectorAll(t),
            s = null == i ? void 0 : i[0];
        return 1 === i.length && void 0 !== s ? j.of(s) : j.empty()
    }
    class $t extends Ft {
        constructor(e) {
            super(e), __publicField(this, "elementType"), __publicField(this, "targetPosition"), __publicField(this, "idAttribute"), this.targetPosition = e.targetPosition, this.elementType = e.elementType, this.idAttribute = e.idAttribute
        }
        getElementType() {
            return this.elementType
        }
        getTargetPosition() {
            return this.targetPosition
        }
        getIdAttribute() {
            return this.idAttribute
        }
        getTargetElement(e) {
            return Lt(e, this.targetPosition.selector)
        }
        isReadyToApply(e) {
            return this.getTargetElement(e).isPresent()
        }
    }
    class Vt extends $t {
        constructor(e) {
            super(e), __publicField(this, "size"), this.size = e.size
        }
        getSize() {
            return this.size
        }
    }
    class Ut extends Ft {
        constructor(e) {
            super(e), __publicField(this, "targetPosition"), __publicField(this, "selector"), __publicField(this, "moveId"), this.targetPosition = e.targetPosition, this.selector = e.selector, this.moveId = e.moveId
        }
        getTargetPosition() {
            return this.targetPosition
        }
        getSelector() {
            return this.selector
        }
        getMoveId() {
            return this.moveId
        }
        getSelectorElement(e) {
            return Lt(e, this.selector)
        }
        getTargetElement(e) {
            return Lt(e, this.targetPosition.selector)
        }
        isReadyToApply(e) {
            return this.getTargetElement(e).isPresent() && this.getSelectorElement(e).isPresent()
        }
    }
    class Wt extends Ft {
        constructor(e) {
            super(e)
        }
    }
    const zt = e => {
            if (!li(e)) return !1;
            const t = e;
            return "ATTRIBUTE" === t.type && A(t.selector) && yi(t.attributes)
        },
        jt = e => zt(e) && y(e, ["type", "selector", "attributes", "id"]),
        Bt = new Set(["1", "2", "3", "4", "5", "6"]),
        Gt = e => Bt.has(e),
        Ht = e => {
            if (!li(e)) return !1;
            const t = e;
            return "INSERT_ELEMENT" === t.type && M(t.elementType) && x(t.targetPosition) && b(t.idAttribute)
        },
        Qt = e => !!Ht(e) && ("heading" !== e.elementType || Gt(e.size)),
        qt = ["id", "type", "targetPosition", "elementType", "size", "idAttribute"],
        Kt = e => Qt(e) && y(e, qt),
        Yt = e => m(e) && Object.values(e).every((e => v(e) || p(e) || g(e) || f(e))),
        Jt = e => m(e) && (f(e.targetPosition) || x(e.targetPosition)) && Yt(e.fieldData) && y(e, ["targetPosition", "fieldData"]),
        Xt = ["id", "type", "name", "executorJson"],
        Zt = e => {
            if (!li(e)) return !1;
            const t = e;
            return t.type === et.EXTENSION && b(t.name) && Jt(t.executorJson)
        },
        ei = e => Zt(e) && y(e, Xt),
        ti = e => {
            if (!li(e)) return !1;
            const t = e;
            return "EXTENSION_ATTRIBUTE" === t.type && E(t.refId) && b(t.extensionName) && b(t.fieldName) && yi(t.attributes)
        },
        ii = e => ti(e) && y(e, ["type", "attributes", "id", "refId", "extensionName", "fieldName"]),
        si = e => m(e) && e.type === et.MOVE_ELEMENT && E(e.moveId) && A(e.selector) && x(e.targetPosition),
        ni = ["id", "type", "targetPosition", "selector", "moveId"],
        ri = e => si(e) && y(e, ni),
        oi = e => ai(e) && y(e, ["type"]),
        ai = e => m(e) && e.type === et.WEBFLOW,
        li = e => m(e) && hi(e.type) && (f(e.id) || b(e.id)),
        ci = e => {
            if (!li(e)) return !1;
            const t = e,
                {
                    code: i,
                    css: s
                } = t;
            return "CUSTOM_CODE" === t.type && (void 0 !== i || void 0 !== s) && (f(i) || b(i)) && (f(s) || b(s))
        },
        ui = e => ci(e) && y(e, ["type", "id", "code", "css"]),
        di = (() => new Set([et.ATTRIBUTE, et.CUSTOM_CODE, et.INSERT_ELEMENT, et.MOVE_ELEMENT, et.EXTENSION, et.EXTENSION_ATTRIBUTE, et.WEBFLOW]))(),
        hi = e => di.has(e),
        gi = new Set(Ze),
        pi = e => v(e) && gi.has(e),
        mi = e => m(e) && b(e.name) && pi(e.namespace) && y(e, ["name", "namespace"]),
        vi = e => m(e) && mi(e.attrDefId) && v(e.defaultString) && y(e, ["defaultString", "attrDefId"]),
        bi = e => m(e) && "attribute" === e.type && vi(e.value) && y(e, ["type", "value"]),
        fi = e => m(e) && "string" === e.type && b(e.value) && y(e, ["type", "value"]),
        Ei = e => fi(e) || bi(e),
        _i = e => v(e) || h(e) && e.every((e => Ei(e))),
        yi = e => !!m(e) && (!(!f(e.html) && !_i(e.html) || !f(e.style) && !v(e.style) || !f(e.className) && !v(e.className) || !f(e.src) && !v(e.src) || !f(e.alt) && !v(e.alt) || !f(e.srcset) && !v(e.srcset) || !f(e.sizes) && !v(e.sizes) || !f(e.href) && !v(e.href) || !f(e.value) && !v(e.value) || !f(e.placeholder) && !v(e.placeholder) || !f(e.maxlength) && !p(e.maxlength) || !f(e.required) && !g(e.required) || !f(e.poster) && !v(e.poster) || !f(e.loop) && !g(e.loop) || !f(e.autoplay) && !g(e.autoplay) || !f(e.muted) && !g(e.muted) || !f(e.controls) && !g(e.controls)) && (!(!f(e.css) && !k(e.css)) && y(e, ["html", "style", "className", "src", "alt", "srcset", "sizes", "href", "css", "value", "placeholder", "maxlength", "required", "poster", "loop", "autoplay", "muted", "controls"])));

    function Si(e) {
        if (jt(e)) return new Pt(e);
        if (ui(e)) return new Mt(e);
        if (ri(e)) return new Ut(e);
        if (Kt(e)) return "heading" === e.elementType ? new Vt(e) : new $t(e);
        if (ei(e)) return new Nt(e);
        if (ii(e)) return new Dt(e);
        if (oi(e)) return new Wt(e);
        throw new D(`Invalid dom change type ${e.type}`)
    }
    class Ii extends Et {
        constructor(e, t, i) {
            super(e, t, i), __publicField(this, "selector"), this.selector = `[data-wf-event-ids*="${e}"]`
        }
        static filterEvents(e) {
            return e.filter((e => "wf_click" === e.getType()))
        }
        getSelector() {
            return this.selector
        }
    }
    class wi {
        constructor(e, t, i, s) {
            var n, r, o, a;
            __publicField(this, "allVariationsMap", {}), __publicField(this, "id"), __publicField(this, "name"), __publicField(this, "type"), __publicField(this, "state"), __publicField(this, "pages"), __publicField(this, "condition"), __publicField(this, "audiences"), __publicField(this, "realPreconditions"), __publicField(this, "preconditions"), __publicField(this, "dependsOnExperienceIds"), __publicField(this, "dependsOnExperiences", []), __publicField(this, "realVariations"), __publicField(this, "campaign"), __publicField(this, "ignore"), __publicField(this, "inclusionStickyConfig"), __publicField(this, "variationStickyConfig"), __publicField(this, "boundingSelectors"), __publicField(this, "playbookId"), __publicField(this, "note"), this.id = e, this.name = t.name, this.type = null != (n = t.type) ? n : "cc", this.state = t.state, this.inclusionStickyConfig = i.buildExperienceIncludeStickyConfig(t.sinc), this.variationStickyConfig = i.buildVariationStickyConfig(t.svar), this.ignore = t.ignore, this.playbookId = t.playbookId, this.note = t.note, this.pages = t.pageIds.flatMap((e => i.getPage(e).toArray())), this.pages.forEach((e => {
                e.addExperience(this)
            })), this.condition = i.buildConditionFromVariationOrExperience(t), this.audiences = as.addExperienceToAudiences(this), this.dependsOnExperienceIds = null != (r = t.dependsOnExperienceIds) ? r : [], this.dependsOnExperiences = [];
            const l = [];
            for (const [c, u] of Object.entries(t.variations)) {
                const e = i.buildVariation(c, u, this);
                l.push(e), this.allVariationsMap[c] = e
            }
            this.realVariations = l, this.boundingSelectors = null != (o = t.boundingSelectors) ? o : [], this.realPreconditions = null != (a = t.preconditions) ? a : [], this.preconditions = [...this.realPreconditions, ...this.generatePreconditionsForBoundingSelectors()], this.campaign = s
        }
        inflateDependsOnExperiences(e) {
            this.dependsOnExperienceIds.forEach((t => {
                const i = e[t];
                void 0 !== i && this.dependsOnExperiences.push(i)
            }))
        }
        getId() {
            return this.id
        }
        getName() {
            return this.name
        }
        getType() {
            return this.type
        }
        isEnabled() {
            return "live" === this.state
        }
        getState() {
            return this.state
        }
        getPages() {
            return this.pages
        }
        getCondition() {
            return j.ofNullable(this.condition)
        }
        getAudiences() {
            return this.audiences
        }
        getPreconditions() {
            return this.preconditions
        }
        getBoundingSelectors() {
            return this.boundingSelectors
        }
        getRealPreconditions() {
            return this.realPreconditions
        }
        getDependsOnExperiences() {
            return this.dependsOnExperiences
        }
        getRealVariations() {
            return this.realVariations
        }
        getVariation(e) {
            return j.ofNullable(this.allVariationsMap[e])
        }
        getCampaign() {
            return this.campaign
        }
        getInclusionStickyConfig() {
            return this.inclusionStickyConfig
        }
        getVariationStickyConfig() {
            return this.variationStickyConfig
        }
        getIgnore() {
            return this.ignore
        }
        getPlaybookId() {
            return j.ofNullable(this.playbookId)
        }
        getNote() {
            return j.ofNullable(this.note)
        }
        generatePreconditionsForBoundingSelectors() {
            const e = [];
            return this.boundingSelectors.forEach((t => {
                e.push(Rt(t))
            })), e
        }
    }
    class Ci extends wi {
        constructor(e, t, i, s) {
            super(e, t, i, s), __publicField(this, "logger"), __publicField(this, "trafficAllocation"), this.logger = i.getLogger(), this.trafficAllocation = t.trafficAllocation
        }
        static filterExperiences(e) {
            return e.filter((e => "ab" === e.getType()))
        }
        selectVariation(e) {
            let t;
            for (const [i, s] of Object.entries(this.trafficAllocation))
                if (e >= s.lowerEndpoint && e < s.upperEndpoint) {
                    t = i;
                    break
                }
            return void 0 !== t ? this.getVariation(t) : (this.logger.error(`Could not determine A/B variation for ${e}`, 1012, {
                experienceId: this.getId()
            }), j.empty())
        }
        getTrafficAllocation() {
            const e = {};
            for (const [t, i] of Object.entries(this.trafficAllocation)) e[t] = __spreadValues({}, i);
            return e
        }
    }
    class Ti extends wi {
        constructor(e, t, i, s) {
            super(e, t, i, s), __publicField(this, "controlVariation");
            const n = i.buildControlVariation(this);
            this.controlVariation = n, this.allVariationsMap[n.getId()] = n
        }
        static filterExperiences(e) {
            return e.filter((e => "cc" === e.getType()))
        }
        getControlVariation() {
            return this.controlVariation
        }
    }
    class xi extends wi {
        constructor(e, t, i, s) {
            super(e, t, i, s), __publicField(this, "logger"), __publicField(this, "variationPriority"), this.logger = i.getLogger(), this.variationPriority = t.variationPriority
        }
        static filterExperiences(e) {
            return e.filter((e => "rbp" === e.getType()))
        }
        getPrioritizedVariations() {
            const e = [];
            if (void 0 !== this.variationPriority)
                for (const t of this.variationPriority) this.getVariation(t).ifPresent((t => {
                    e.push(t)
                })).ifAbsent((() => {
                    this.logger.debug("Could not find prioritized variation for RBP", 1013, {
                        experienceId: this.getId(),
                        variationId: t
                    })
                }));
            return e
        }
    }
    class Ai {
        constructor(e) {
            __publicField(this, "enabled"), this.enabled = e.enabled
        }
        isEnabled() {
            return this.enabled
        }
    }
    class Fi {
        constructor(e) {
            __publicField(this, "enabled"), this.enabled = e.enabled
        }
        isEnabled() {
            return this.enabled
        }
    }
    class ki {
        constructor(e) {
            __publicField(this, "enabled"), __publicField(this, "managedAccounts"), this.enabled = e.enabled, this.managedAccounts = e.managedAccounts
        }
        isEnabled() {
            return this.enabled
        }
        getManagedAccounts() {
            return this.managedAccounts
        }
    }
    class Pi {
        constructor(e) {
            __publicField(this, "enabled"), __publicField(this, "autoConfig"), __publicField(this, "measurementIds"), this.enabled = e.enabled, this.autoConfig = e.autoConfig, this.measurementIds = e.measurementIds
        }
        isEnabled() {
            return this.enabled
        }
        isAutoConfig() {
            return this.autoConfig
        }
        getMeasurementIds() {
            return this.measurementIds
        }
    }
    class Mi {
        constructor(e) {
            __publicField(this, "enabled"), __publicField(this, "hubId"), __publicField(this, "objectsToIngest"), this.enabled = e.enabled, this.hubId = e.hubId, this.objectsToIngest = e.objectsToIngest
        }
        isEnabled() {
            return this.enabled
        }
        getHubId() {
            return this.hubId
        }
        getObjectsToIngest() {
            return this.objectsToIngest
        }
    }
    class Di {
        constructor(e) {
            __publicField(this, "enabled"), __publicField(this, "munchkinId"), __publicField(this, "fieldsToIngest"), __publicField(this, "listsToIngest"), this.enabled = e.enabled, this.munchkinId = e.munchkinId, this.fieldsToIngest = e.fieldsToIngest, this.listsToIngest = e.listsToIngest
        }
        isEnabled() {
            return this.enabled
        }
        getMunchkinId() {
            return this.munchkinId
        }
        getFieldsToIngest() {
            return this.fieldsToIngest
        }
        getListsToIngest() {
            return this.listsToIngest
        }
    }
    const Ni = "Optimization Viewed";
    class Oi {
        constructor(e) {
            __publicField(this, "enabled"), __publicField(this, "eventName"), this.enabled = e.enabled, this.eventName = e.name
        }
        isEnabled() {
            return this.enabled
        }
        getEventName() {
            var e;
            return null != (e = this.eventName) ? e : Ni
        }
    }
    class Ri {
        constructor(e) {
            __publicField(this, "enabled"), __publicField(this, "objectsToIngest"), __publicField(this, "outboundReport"), this.enabled = e.enabled, this.objectsToIngest = e.objectsToIngest, this.outboundReport = e.outboundReport
        }
        isEnabled() {
            return this.enabled
        }
        getObjectsToIngest() {
            return this.objectsToIngest
        }
        getOutboundReport() {
            return j.ofNullable(this.outboundReport)
        }
    }
    class Li {
        constructor(e) {
            __publicField(this, "enabled"), __publicField(this, "eventName"), this.enabled = e.enabled, this.eventName = e.dim
        }
        isEnabled() {
            return this.enabled
        }
        getEventName() {
            return this.eventName
        }
    }
    class $i {
        constructor(e, t, i) {
            var s, n;
            __publicField(this, "logger"), __publicField(this, "id"), __publicField(this, "name"), __publicField(this, "type"), __publicField(this, "state"), __publicField(this, "iEvents", []), __publicField(this, "experiences", []), __publicField(this, "metrics", []), __publicField(this, "code"), __publicField(this, "timeBudget"), __publicField(this, "changes"), this.logger = i.getLogger(), this.id = e, this.name = t.name, this.type = null != (s = t.type) ? s : "matching", void 0 !== t.code && (this.code = t.code), void 0 !== t.timeBudget && (this.timeBudget = t.timeBudget);
            const r = [];
            void 0 !== t.changes && t.changes.forEach((e => {
                r.push(i.buildDomChange(e))
            })), this.changes = r, this.state = null != (n = t.state) ? n : "live"
        }
        addEvent(e) {
            this.iEvents.push(e)
        }
        addMetric(e) {
            this.metrics.push(e)
        }
        addExperience(e) {
            this.experiences.push(e)
        }
        getId() {
            return this.id
        }
        getName() {
            return this.name
        }
        getType() {
            return this.type
        }
        getState() {
            return this.state
        }
        getCode() {
            return j.ofNullable(this.code)
        }
        getChanges() {
            return [...this.changes]
        }
        getExperiences() {
            return [...this.experiences]
        }
        getEvents() {
            return [...this.iEvents]
        }
        getTimeBudgetMs() {
            return j.ofNullable(this.timeBudget)
        }
        getMetrics() {
            return [...this.metrics]
        }
        getMetric(e) {
            const t = this.metrics.filter((t => t.getId() === e));
            return 0 === t.length ? j.empty() : j.ofNullable(t[0])
        }
        executeCode(e) {
            this.logger.debug("executeCode() if present");
            let t = !0;
            if (this.getCode().isPresent()) {
                const s = this.getCode().get();
                try {
                    this.logger.info(`Page ${this.id} code running`), t = e(s), this.logger.info(`Page ${this.id} code result => ${t}`)
                } catch (i) {
                    const e = new bt(`Page (${this.id}) code execution failed`, i);
                    t = !1, this.logger.error(e, 1009, {
                        pageId: this.id
                    })
                }
            }
            return t
        }
    }
    class Vi extends $i {
        constructor(e, t, i) {
            var s, n;
            super(e, t, i), __publicField(this, "templateUrl"), __publicField(this, "paramName"), __publicField(this, "paramValue"), this.templateUrl = t.templateUrl, this.paramName = null != (s = t.paramName) ? s : Vi.defaultParamName, this.paramValue = null != (n = t.paramValue) ? n : Vi.landingPageNameToParamValue(t.name)
        }
        static filterPages(e) {
            return e.filter((e => "landing" === e.getType()))
        }
        static removeWWW(e) {
            return e.replace(/^www\./i, "")
        }
        static get defaultParamName() {
            return "page"
        }
        static landingPageNameToParamValue(e) {
            return e.trim().replace(/[^\w\-._~!'()*]+/g, "-")
        }
        getTemplateUrl() {
            return this.templateUrl
        }
        getParamName() {
            return this.paramName
        }
        getParamValue() {
            return this.paramValue
        }
        getPreviewUrl() {
            const {
                name: e,
                value: t
            } = this.determineLandingParam(), i = `${encodeURIComponent(e)}=${encodeURIComponent(t)}`, s = this.templateUrl.indexOf("?");
            if (-1 !== s) return this.templateUrl.slice(0, s + 1) + i + "&" + this.templateUrl.slice(s + 1);
            const n = this.templateUrl.indexOf("#");
            return -1 !== n ? this.templateUrl.slice(0, n) + "?" + i + this.templateUrl.slice(n) : this.templateUrl + "?" + i
        }
        matches(e, t) {
            this.logger.group("check page matches");
            try {
                const i = new URL(e),
                    s = new URL(this.templateUrl);
                let n = !0;
                s.searchParams.forEach(((e, t) => {
                    i.searchParams.getAll(t).includes(e) || (n = !1)
                }));
                const r = j.ofNullable(s.hash).map((e => e === i.hash)).orElse(!0),
                    {
                        name: o,
                        value: a
                    } = this.determineLandingParam(),
                    l = i.searchParams.getAll(o).includes(a),
                    c = Vi.removeWWW(i.host) === Vi.removeWWW(s.host),
                    u = i.protocol === s.protocol && i.port === s.port && i.pathname === s.pathname && c && n && l && r,
                    d = this.executeCode(t);
                return this.logger.debug(`didMatch: ${u.toString()}, didPassCode: ${d.toString()}`), this.logger.groupEnd(), u && d
            } catch (i) {
                const e = new bt("Could not parse URL", i);
                return this.logger.warn(e, 1018, {
                    pageId: this.getId()
                }), !1
            }
        }
        determineLandingParam() {
            return {
                name: this.getParamName(),
                value: this.getParamValue()
            }
        }
    }
    const Ui = (e, t, i, s) => {
        e.group("check page matches");
        const n = i.some((i => {
                e.group("check url");
                const s = i.matches(t);
                return e.groupEnd(), s
            })),
            r = s();
        return e.debug(`didMatch: ${n.toString()}, didPassCode: ${r.toString()}`), e.groupEnd(), n && r
    };
    class Wi extends $i {
        constructor(e, t, i) {
            super(e, t, i), __publicField(this, "urls"), __publicField(this, "previewUrl");
            const s = [];
            t.urls.forEach((e => {
                s.push(i.buildUrl(e))
            })), this.urls = s, this.previewUrl = t.previewUrl
        }
        static filterPages(e) {
            return e.filter((e => "matching" === e.getType()))
        }
        getPreviewUrl() {
            return this.previewUrl
        }
        getUrls() {
            return this.urls
        }
        matches(e, t) {
            return Ui(this.logger, e, this.urls, (() => this.executeCode(t)))
        }
    }
    class zi extends $i {
        constructor(e, t, i) {
            super(e, t, i), __publicField(this, "urls"), __publicField(this, "previewUrl");
            const s = [];
            t.urls.forEach((e => {
                s.push(i.buildUrl(e))
            })), this.urls = s, this.previewUrl = t.previewUrl
        }
        static filterPages(e) {
            return e.filter((e => "shopify" === e.getType()))
        }
        getPreviewUrl() {
            return this.previewUrl
        }
        getUrls() {
            return this.urls
        }
        matches(e, t) {
            return Ui(this.logger, e, this.urls, (() => this.executeCode(t)))
        }
    }
    class ji {
        constructor(e, t, i, s) {
            let n;
            if (__publicField(this, "legacy"), __publicField(this, "shopifyMetric"), __publicField(this, "shopifyPages"), __publicField(this, "shopifyEvents"), __publicField(this, "shopifyCheckoutCompletedEvent"), __publicField(this, "shop"), __publicField(this, "snippet"), __publicField(this, "plus"), ji.isLegacyShopifyIntegrationJson(e)) {
                this.legacy = !0;
                const t = e;
                n = {
                    shop: `${t.shop}.myshopify.com`,
                    snippet: t.theme,
                    plus: !0
                };
                const s = [];
                i.forEach((e => {
                    t.pages.includes(e.getId()) && s.push(e)
                })), this.shopifyPages = s
            } else this.legacy = !1, n = e, this.shopifyPages = zi.filterPages(i);
            this.shop = n.shop, this.snippet = n.snippet, this.plus = n.plus, this.shopifyEvents = wt.filterEvents(s);
            const r = this.shopifyEvents.find((e => "checkout_completed" === e.getCustomerEventName()));
            N(r, 'The shopify "checkout_completed" event must be present'), this.shopifyCheckoutCompletedEvent = r, this.shopifyMetric = t.find((e => e.getIEvents().find((e => e.getId() === this.shopifyCheckoutCompletedEvent.getId()))))
        }
        static isLegacyShopifyIntegrationJson(e) {
            return void 0 !== e.pixel
        }
        isPixelEnabled() {
            return !0
        }
        isLegacy() {
            return this.legacy
        }
        getShop() {
            return this.shop
        }
        getMetric() {
            return j.ofNullable(this.shopifyMetric)
        }
        getPages() {
            return this.shopifyPages
        }
        getEvents() {
            return this.shopifyEvents
        }
        getCheckoutCompletedEvent() {
            return this.shopifyCheckoutCompletedEvent
        }
        doesInjectSnippet() {
            return this.snippet
        }
        isShopifyPlus() {
            return this.plus
        }
    }
    class Bi {
        constructor(e) {
            __publicField(this, "enabled"), __publicField(this, "oemEnabled"), this.enabled = e.enabled, this.oemEnabled = e.oemEnabled
        }
        isEnabled() {
            return this.enabled
        }
        isOemEnabled() {
            return this.oemEnabled
        }
    }
    class Gi {
        constructor(e, t, i, s, n) {
            __publicField(this, "id"), __publicField(this, "name"), __publicField(this, "iEvents"), __publicField(this, "scope"), __publicField(this, "type"), __publicField(this, "countingMethod"), __publicField(this, "goal"), __publicField(this, "page"), __publicField(this, "campaign"), __publicField(this, "customer"), R(void 0 === i || void 0 === n), this.id = e.id, this.name = e.name, this.scope = e.scope, this.type = e.type, this.countingMethod = e.countingMethod, this.goal = e.isGoal, this.iEvents = e.eventIds.flatMap((e => t.getEvent(e).toArray())), this.iEvents.forEach((e => {
                e.addMetric(this)
            })), this.campaign = i, this.page = s, this.customer = n
        }
        getId() {
            return this.id
        }
        getName() {
            return this.name
        }
        getIEvents() {
            return this.iEvents
        }
        getScope() {
            return this.scope
        }
        getType() {
            return this.type
        }
        getCountingMethod() {
            return this.countingMethod
        }
        isGoal() {
            return this.goal
        }
        getCampaign() {
            return j.ofNullable(this.campaign)
        }
        getPage() {
            return j.ofNullable(this.page)
        }
        getCustomer() {
            return j.ofNullable(this.customer)
        }
    }
    class Hi extends Gi {
        constructor(e, t, i, s, n) {
            super(e, t, i, s, n), __publicField(this, "valueType"), this.valueType = e.valueType
        }
        getValueType() {
            return this.valueType
        }
    }
    class Qi extends Hi {
        constructor(e, t, i, s, n) {
            super(e, t, i, s, n), __publicField(this, "value"), this.value = e.value
        }
        getValue() {
            return this.value
        }
    }

    function qi(e, t = !1) {
        return i => i.map((t => e(t))).orElse(t)
    }

    function Ki(e) {
        switch (e.operator) {
            case "includesAny":
                return qi((t => t.some((t => e.argument.includes(t)))));
            case "excludesAll":
                return qi((t => !t.some((t => e.argument.includes(t)))), !0);
            case st:
                return e => e.isPresent();
            case nt:
                return e => !e.isPresent();
            default:
                throw new Error(`Unknown array enum operator: ${e.operator}`)
        }
    }

    function Yi(e) {
        switch (e.operator) {
            case "includesAny":
                return qi((t => t.some((t => e.argument.includes(t)))));
            case st:
                return e => e.isPresent();
            case nt:
                return e => !e.isPresent();
            default:
                throw new Error(`Unknown array string operator: ${e.operator}`)
        }
    }

    function Ji(e) {
        switch (e.operator) {
            case "isTrue":
                return qi((e => e));
            case "isFalse":
                return qi((e => !e), !0);
            case st:
                return e => e.isPresent();
            case nt:
                return e => !e.isPresent();
            default:
                throw new Error(`Unknown boolean operator: ${e.operator}`)
        }
    }

    function Xi(e) {
        switch (e.operator) {
            case "eq":
                return qi((t => t === e.argument));
            case "ne":
                return qi((t => t !== e.argument), !0);
            case st:
                return e => e.isPresent();
            case nt:
                return e => !e.isPresent();
            default:
                throw new Error(`Unknown enum operator: ${e.operator}`)
        }
    }

    function Zi(e) {
        switch (e.operator) {
            case "==":
                return qi((t => t === e.argument));
            case "!=":
                return qi((t => t !== e.argument), !0);
            case ">":
                return qi((t => t > e.argument));
            case "<":
                return qi((t => t < e.argument));
            case ">=":
                return qi((t => t >= e.argument));
            case "<=":
                return qi((t => t <= e.argument));
            case st:
                return e => e.isPresent();
            case nt:
                return e => !e.isPresent();
            default:
                throw new Error(`Unknown number operator: ${e.operator}`)
        }
    }

    function es(e) {
        switch (e.operator) {
            case "eq":
                return qi((t => t === e.argument));
            case "ne":
                return qi((t => t !== e.argument), !0);
            case "substr":
                return qi((t => t.includes(e.argument)));
            case "startsWith":
                return qi((t => t.startsWith(e.argument)));
            case "endsWith":
                return qi((t => t.endsWith(e.argument)));
            case "regex":
                return qi((t => new RegExp(e.argument).test(t)));
            case st:
                return e => e.isPresent();
            case nt:
                return e => !e.isPresent();
            default:
                throw new Error(`Unknown string operator: ${e.operator}`)
        }
    }

    function ts(e) {
        switch (e.operator) {
            case "withinPastDuration":
                return qi((t => {
                    const i = /^P(\d+)D$/.exec(e.argument);
                    if (void 0 === (null == i ? void 0 : i[1])) throw new Error(`Invalid unix time operator duration: ${e.argument}`);
                    const s = 24 * Number(i[1]) * 60 * 60 * 1e3;
                    return t >= Date.now() - s
                }));
            case "inBetween":
                return qi((t => {
                    const [i, s] = e.argument;
                    return t >= i && t < s
                }));
            case st:
                return e => e.isPresent();
            case nt:
                return e => !e.isPresent();
            default:
                throw new Error(`Unknown unix time operator: ${e.operator}`)
        }
    }
    const is = e => {
        const t = /[|\\{}()[\]^$+*?.-]/g;
        return e.replace(t, "\\$&")
    };
    class ss {
        constructor(e) {
            __publicField(this, "includeSubdomains"), __publicField(this, "domain"), __publicField(this, "port"), this.includeSubdomains = e.includeSubdomains, this.domain = e.domain, this.port = e.port
        }
        static isMatchingAllowedDomain(e, t) {
            return new RegExp(`^${e}$`).test(t)
        }
        getIncludeSubdomains() {
            return this.includeSubdomains
        }
        getDomain() {
            return this.domain
        }
        getPort() {
            return j.ofNullable(this.port)
        }
        getDomainAndPort() {
            return void 0 === this.port ? this.domain : `${this.domain}:${this.port}`
        }
        isOriginAllowed(e) {
            const t = this.getDomainAndPort();
            let i = "https?://";
            return i += this.includeSubdomains ? "([^.]+\\.)?" : "(www\\.)?", i += is(t), ss.isMatchingAllowedDomain(i, e)
        }
    }
    class ns {
        constructor(e, t, i) {
            this.sticky = e, this.relativeExpirationTimeSec = t, this.absoluteExpirationTimeSec = i
        }
        isSticky() {
            return this.sticky
        }
        getRelativeExpirationTimeSec() {
            return j.ofNullable(this.relativeExpirationTimeSec)
        }
        getAbsoluteExpirationTimeSec() {
            return j.ofNullable(this.absoluteExpirationTimeSec)
        }
        isExpired(e, t) {
            return void 0 !== this.absoluteExpirationTimeSec && t < this.absoluteExpirationTimeSec || void 0 !== this.relativeExpirationTimeSec && t + this.relativeExpirationTimeSec < e
        }
    }
    class rs {
        constructor(e, t) {
            __publicField(this, "logger"), __publicField(this, "value"), __publicField(this, "match"), this.logger = t.getLogger(), this.value = e.value, this.match = e.match, R(void 0 !== this.match, "invalid match type: " + e.match)
        }
        static simplifyUrl(e) {
            let t = e;
            const i = t.indexOf("?");
            i > 0 && (t = t.slice(0, Math.max(0, i)));
            const s = t.indexOf("#");
            s > 0 && (t = t.slice(0, Math.max(0, s))), t.endsWith("/") && (t = t.slice(0, Math.max(0, t.length - 1)));
            const n = /^(?:https?:\/\/)?(?:www\.)?(.+)$/.exec(t);
            return void 0 !== (null == n ? void 0 : n[1]) && (t = n[1]), t
        }
        getMatch() {
            return this.match
        }
        getValue() {
            return this.value
        }
        matches(e) {
            let t = !1;
            switch (this.logger.debug("checking match: " + this.match + ", value: " + this.value), this.match) {
                case "simple":
                    t = rs.simplifyUrl(this.value) === rs.simplifyUrl(e);
                    break;
                case "regex":
                    {
                        const i = new RegExp(this.value);t = Boolean(i.test(e));
                        break
                    }
                case "exact":
                    t = e === this.value;
                    break;
                case "substring":
                    t = e.includes(this.value);
                    break;
                default:
                    this.logger.error(`Unknown url match type: ${this.match}`, 1010)
            }
            return this.logger.debug(t.toString()), t
        }
    }
    class os {
        constructor(e, t, i, s) {
            __publicField(this, "id"), __publicField(this, "name"), __publicField(this, "state"), __publicField(this, "condition"), __publicField(this, "audiences"), __publicField(this, "preconditions"), __publicField(this, "code"), __publicField(this, "redirect"), __publicField(this, "css"), __publicField(this, "changes"), __publicField(this, "experience"), __publicField(this, "playbookTemplateId"), this.id = e, this.name = t.name, this.state = t.state, this.preconditions = t.preconditions, void 0 !== t.code && (this.code = t.code), void 0 !== t.redirect && (this.redirect = t.redirect), void 0 !== t.css && (this.css = t.css), this.condition = i.buildConditionFromVariationOrExperience(t), this.audiences = as.addVariationToAudiences(this);
            const n = [];
            void 0 !== t.changes && t.changes.forEach((e => {
                n.push(i.buildDomChange(e))
            })), this.changes = n, this.experience = s, this.playbookTemplateId = t.playbookTemplateId
        }
        getId() {
            return this.id
        }
        getName() {
            return this.name
        }
        isEnabled() {
            return "live" === this.state
        }
        getState() {
            return this.state
        }
        getCode() {
            return j.ofNullable(this.code)
        }
        getCss() {
            return j.ofNullable(this.css)
        }
        getRedirect() {
            return j.ofNullable(this.redirect)
        }
        getPreconditions() {
            return this.preconditions
        }
        getCondition() {
            return j.ofNullable(this.condition)
        }
        getAudiences() {
            return this.audiences
        }
        getChanges() {
            return this.changes
        }
        isTypeChange() {
            return this.getChanges().length > 0
        }
        isRedirect() {
            return this.getRedirect().isPresent()
        }
        getExperience() {
            return this.experience
        }
        getTrafficAllocation() {
            if (this.experience instanceof Ci) {
                const e = this.experience.getTrafficAllocation()[this.id];
                if (void 0 !== e) return j.of(__spreadValues({}, e))
            }
            return j.empty()
        }
        getPlaybookTemplateId() {
            return j.ofNullable(this.playbookTemplateId)
        }
    }
    class as {
        constructor(e) {
            __publicField(this, "logger"), __publicField(this, "experienceMap", {}), __publicField(this, "pageMap", {}), __publicField(this, "audienceMap", {}), __publicField(this, "eventMap", {}), this.logger = e
        }
        static buildStickyConfiguration(e, t) {
            let i, s, n;
            return void 0 !== e && (void 0 !== e.s && (i = e.s), void 0 !== e.r && (s = e.r), void 0 !== e.a && (n = e.a)), void 0 === i && (i = t.s), void 0 === s && void 0 !== t.r && (s = t.r), void 0 === n && void 0 !== t.a && (n = t.a), new ns(i, s, n)
        }
        static addExperienceToAudiences(e) {
            const t = [];
            return e.getCondition().ifPresent((i => {
                if (i instanceof Qe) t.push(as.addExperienceToAudience(e, i));
                else if (i instanceof He || i instanceof Je) i.getConditions().forEach((i => {
                    if (i instanceof Qe) t.push(as.addExperienceToAudience(e, i));
                    else if (i instanceof Ye) {
                        const s = i.getCondition();
                        s instanceof Qe && (s.getAudience().addExperience(e), t.push(s.getAudience()))
                    }
                }));
                else if (i instanceof Ye) {
                    const s = i.getCondition();
                    s instanceof Qe && (s.getAudience().addExperience(e), t.push(s.getAudience()))
                }
            })), t
        }
        static addVariationToAudiences(e) {
            const t = [];
            return e.getCondition().ifPresent((i => {
                if (i instanceof Qe) t.push(as.addVariationToAudience(e, i));
                else if (i instanceof He || i instanceof Je) i.getConditions().forEach((i => {
                    if (i instanceof Qe) t.push(as.addVariationToAudience(e, i));
                    else if (i instanceof Ye) {
                        const s = i.getCondition();
                        s instanceof Qe && (s.getAudience().addVariation(e), t.push(s.getAudience()))
                    }
                }));
                else if (i instanceof Ye) {
                    const s = i.getCondition();
                    s instanceof Qe && (s.getAudience().addVariation(e), t.push(s.getAudience()))
                }
            })), t
        }
        static addExperienceToAudience(e, t) {
            const i = t.getAudience();
            return t.getAudience().addExperience(e), i
        }
        static addVariationToAudience(e, t) {
            const i = t.getAudience();
            return t.getAudience().addVariation(e), i
        }
        static audienceIdToConditionJson(e) {
            let t = !1,
                i = e;
            e.startsWith("!") && (t = !0, i = e.slice(1));
            const s = {
                audienceId: i,
                type: "audience"
            };
            let n = s;
            return t && (n = {
                type: "logic-not",
                condition: s
            }), n
        }
        getLogger() {
            return this.logger
        }
        buildCustomer(e) {
            const t = new At(e, this);
            return t.getCampaigns().forEach((e => {
                e.getExperiences().forEach((e => {
                    e.inflateDependsOnExperiences(this.experienceMap)
                }))
            })), t
        }
        buildCollaborator(e) {
            return new pt(e)
        }
        buildCrossOrigin(e) {
            return new mt(e)
        }
        buildOrigin(e) {
            return new ss(e)
        }
        buildPage(e, t) {
            const i = this.pageMap[e];
            if (void 0 !== i) return this.logger.warn(`Trying to build page twice ${e}`, 1e3, {
                pageId: e
            }), i;
            const s = this.buildTypedPage(e, t);
            return this.pageMap[e] = s, s
        }
        buildTypedPage(e, t) {
            return "matching" === t.type ? new Wi(e, t, this) : "landing" === t.type ? new Vi(e, t, this) : "shopify" === t.type ? new zi(e, t, this) : new Wi(e, t, this)
        }
        getPage(e) {
            return j.ofNullable(this.pageMap[e]).ifAbsent((() => {
                this.logger.error(`Could not find page in builder map ${e}`, 1001, {
                    pageId: e
                })
            }))
        }
        buildAudience(e, t) {
            const i = this.audienceMap[e];
            if (void 0 !== i) return this.logger.warn(`Trying to build audience twice ${e}`, 1002, {
                audienceId: e
            }), i;
            const s = new Xe(e, t, this);
            return this.audienceMap[e] = s, s
        }
        buildConditionFromVariationOrExperience({
            audienceIds: e,
            condition: t
        }) {
            const i = [];
            if (void 0 !== e && e.length > 0 && e.forEach((e => {
                    i.push(as.audienceIdToConditionJson(e))
                })), void 0 !== t && ("logic-and" === t.type ? i.push(...t.conditions) : i.push(t)), 0 === i.length) return;
            const [s] = i;
            return 1 === i.length && void 0 !== s ? this.buildCondition(s) : this.buildCondition({
                conditions: i,
                type: "logic-and"
            })
        }
        buildCondition(e, t) {
            switch (e.type) {
                case "logic-not":
                    return new Ye(e, this);
                case "logic-and":
                    return new He(e, this);
                case "logic-or":
                    return new Je(e, this);
                case "comparison-number":
                    return new Ke(e, new je(e.attrDefId), Zi({
                        operator: e.operator,
                        argument: e.value
                    }));
                case "comparison-string":
                    return new Ke(e, new je(e.attrDefId), es({
                        operator: e.operator,
                        argument: e.value
                    }));
                case "comparison-enum":
                    return new Ke(e, new je(e.attrDefId), Xi({
                        operator: e.operator,
                        argument: e.value
                    }));
                case "comparison-boolean":
                    return new Ke(e, new je(e.attrDefId), Ji({
                        operator: e.operator,
                        argument: void 0
                    }));
                case "comparison-array-string":
                    return new Ke(e, new je(e.attrDefId), Yi({
                        operator: e.operator,
                        argument: e.value
                    }));
                case "comparison-array-enum":
                    return new Ke(e, new je(e.attrDefId), Ki({
                        operator: e.operator,
                        argument: e.value
                    }));
                case "audience":
                    return new Qe(e, this, t);
                case "code":
                    return new qe(e);
                case "activity":
                    return new Ge(e, this.buildActivityFilter(e.filter), (() => this.buildAggregator(e.aggregation)), Zi(e.operation), this.getLogger());
                default:
                    throw new Error(`Unknown ConditionType: ${e.type}`)
            }
        }
        buildActivityFilter(e) {
            switch (e.type) {
                case "logic-not":
                    return new dt(e, this);
                case "logic-and":
                    return new ct(e, this);
                case "logic-or":
                    return new ht(e, this);
                case "comparison-number":
                    return new ut(this.getActivityPathValue(e.fieldName, ["number"]), Zi(e.operation));
                case "comparison-string":
                    return new ut(this.getActivityPathValue(e.fieldName, ["string"]), es(e.operation));
                case "comparison-enum":
                    return new ut(this.getActivityPathValue(e.fieldName, ["string"]), Xi(e.operation));
                case "comparison-array-enum":
                    return new ut(this.getActivityPathValue(e.fieldName, ["array-enum"]), Ki(e.operation));
                case "comparison-unix-time":
                    return new ut(this.getActivityPathValue(e.fieldName, ["number"]), ts(e.operation));
                default:
                    throw new Error(`Unknown activity filter type: ${e.type}`)
            }
        }
        buildAggregator(e) {
            switch (e.type) {
                case "count":
                    return new rt;
                case "sum":
                    return new lt(this.getActivityPathValue(e.fieldName, ["number"]));
                case "mean":
                    return new at(this.getActivityPathValue(e.fieldName, ["number"]));
                case "countDistinct":
                    return new ot(this.getActivityPathValue(e.fieldName, ["string", "number"]));
                default:
                    throw new Error(`Unknown aggregator type: ${e.type}`)
            }
        }
        getAudience(e) {
            return j.ofNullable(this.audienceMap[e]).orElseRun((() => (this.logger.error(`Could not find audience in builder map ${e}`, 1003, {
                audienceId: e
            }), new Xe(e, {
                name: `Missing Audience ${e}`,
                code: 'throw new Error("Missing audience");'
            }, this))))
        }
        buildEvent(e, t) {
            const i = this.eventMap[e];
            if (void 0 !== i) return this.logger.warn(`Trying to build event twice ${e}`, 1004, {
                eventId: e
            }), i;
            const s = this.buildTypedEvent(e, t);
            return this.eventMap[e] = s, s
        }
        buildTypedEvent(e, t) {
            if ("click" === t.type) return new _t(e, t, this);
            if ("view" === t.type) return new Tt(e, t, this);
            if ("custom" === t.type) return new yt(e, t, this);
            if ("shopify" === t.type) return new wt(e, t, this);
            if ("shopify_server_side" === t.type) return new Ct(e, t, this);
            if ("marketo" === t.type) return new It(e, t, this);
            if ("hubspot" === t.type) return new St(e, t, this);
            if ("wf_engagement_click" === t.type) return new xt(e, t, this);
            if ("wf_click" === t.type) return new Ii(e, t, this);
            throw new D(`Invalid event type ${t.type}`)
        }
        getEvent(e) {
            return j.ofNullable(this.eventMap[e]).ifAbsent((() => {
                this.logger.error(`Could not find event in builder map ${e}`, 1005, {
                    eventId: e
                })
            }))
        }
        buildCampaign(e, t, i) {
            return new gt(e, t, this, i)
        }
        buildExperience(e, t, i) {
            const s = this.experienceMap[e];
            if (void 0 !== s) return this.logger.warn(`Trying to build experience twice ${e}`, 1006, {
                experienceId: e
            }), s;
            const n = this.buildTypedExperience(e, t, i);
            return this.experienceMap[e] = n, n
        }
        buildTypedExperience(e, t, i) {
            return "ab" === t.type ? new Ci(e, t, this, i) : "rbp" === t.type ? new xi(e, t, this, i) : new Ti(e, t, this, i)
        }
        buildMetric(e, t, i, s) {
            return R(Boolean(t) && void 0 === s && void 0 === i || Boolean(s) && void 0 === t && void 0 === i || Boolean(i) && void 0 === s && void 0 === t), "value" === e.type ? "static" === e.valueType ? new Qi(e, this, t, i, s) : new Hi(e, this, t, i, s) : new Gi(e, this, t, i, s)
        }
        buildUrl(e) {
            return new rs(e, this)
        }
        buildVariation(e, t, i) {
            return new os(e, t, this, i)
        }
        buildControlVariation(e) {
            const t = {
                name: "Intellimize Control",
                state: "live",
                preconditions: []
            };
            return this.buildVariation(it, t, e)
        }
        buildControlStickyConfig(e) {
            return as.buildStickyConfiguration(e, {
                s: !0
            })
        }
        buildExperienceIncludeStickyConfig(e) {
            return as.buildStickyConfiguration(e, {
                s: !0
            })
        }
        buildVariationStickyConfig(e) {
            return as.buildStickyConfiguration(e, {
                s: !0,
                r: 302400
            })
        }
        buildGoogleAnalytics4Integration(e) {
            return new Pi(e)
        }
        buildSegmentIntegration(e) {
            return new Li(e)
        }
        buildMixpanelIntegration(e) {
            return new Oi(e)
        }
        buildMarketoIntegration(e) {
            return new Di(e)
        }
        buildSalesforceIntegration(e) {
            return new Ri(e)
        }
        buildShopifyIntegration(e, t, i, s) {
            return new ji(e, t, i, s)
        }
        buildFirmographicIntegration(e) {
            return new Fi(e)
        }
        buildSixsenseIntegration(e) {
            return new Bi(e)
        }
        buildGoogleAdsIntegration(e) {
            return new ki(e)
        }
        buildDemandbaseIntegration(e) {
            return new Ai(e)
        }
        buildHubspotIntegration(e) {
            return new Mi(e)
        }
        buildDomChange(e) {
            return Si(e)
        }
        getActivityPathValue(e, t) {
            return i => {
                let s = e,
                    n = i;
                for (; void 0 !== n && void 0 !== s;) {
                    const i = s.split(".");
                    if (!(i.length > 1 && void 0 !== i[0])) {
                        const i = n[s];
                        let r = typeof i;
                        return h(i) && i.every((e => "string" == typeof e)) && (r = "array-enum"), t.includes(r) ? j.ofNullable(i) : (void 0 !== i && this.logger.warn(`Field "${e}" is not an allowed type (wanted ${t.join(", ")}; found ${r})`, 1017), j.empty())
                    }
                    n = n[i[0]], s = i.slice(1).join(".")
                }
                return j.empty()
            }
        }
    }
    const ls = "imize-move-id";

    function cs(e, t) {
        const i = e.getReferrerUrl();
        if (!i.isPresent()) return j.of(!1);
        const s = i.get(),
            n = e.getHostingPageUrl();
        return s.getOrigin() === n.getOrigin() ? j.of(!0) : us(t, s.getOrigin())
    }

    function us(e, t) {
        const i = e.getCrossOrigin().isEnabled(),
            s = e.getOrigins().length > 0;
        if (!i && !s) return j.empty();
        const n = e.getCrossOrigin().isOriginAllowed(t),
            r = e.getOrigins().some((e => e.isOriginAllowed(t)));
        return i && s && n !== r && fs.error(`Customer crossOrigin ${n} does not match origins ${r} for origin ${t}`, 251), j.of(n || r)
    }

    function ds(e, t) {
        return new URL(`https://${e}${t}`)
    }

    function hs(e) {
        return new vs(e)
    }
    const gs = {
            [i.LogLevel.OFF]: "o",
            [i.LogLevel.ERROR]: "e",
            [i.LogLevel.WARN]: "w",
            [i.LogLevel.INFO]: "i",
            [i.LogLevel.DEBUG]: "d",
            [i.LogLevel.TRACE]: "t"
        },
        ps = ["audienceId", "campaignId", "experienceId", "variationId", "eventId", "pageId", "changeId"],
        ms = {
            audienceId: "aid",
            campaignId: "cmid",
            experienceId: "eid",
            variationId: "vid",
            eventId: "ei",
            pageId: "pid",
            changeId: "chid"
        };
    class vs {
        constructor(e) {
            __publicField(this, "minimumLogLevel"), __publicField(this, "customer"), __publicField(this, "environment"), __publicField(this, "serverContext"), __publicField(this, "user"), this.minimumLogLevel = e
        }
        static get LOGGING_APP_STRING() {
            return "client"
        }
        static get PATH() {
            return "/clientlogger"
        }
        configureCustomer(e) {
            this.customer = e
        }
        configureEnvironment(e) {
            this.environment = e
        }
        configureServerContext(e) {
            this.serverContext = e
        }
        configureUser(e) {
            this.user = e
        }
        getLevel() {
            return this.minimumLogLevel
        }
        error(e, t, s) {
            this.log(i.LogLevel.ERROR, e, t, s)
        }
        warn(e, t, s) {
            this.log(i.LogLevel.WARN, e, t, s)
        }
        info(e, t, s) {
            this.log(i.LogLevel.INFO, e, t, s)
        }
        debug(e, t, s) {
            this.log(i.LogLevel.DEBUG, e, t, s)
        }
        group(e) {}
        groupEnd() {}
        time(e) {}
        timeEnd(e) {}
        log(e, t, i, s) {
            this.minimumLogLevel <= e && this.send(__spreadProps(__spreadValues(__spreadValues(__spreadValues({}, this.buildCommonPayload()), this.entityIdsToPayload(s)), this.messageToPayload(t)), {
                app: vs.LOGGING_APP_STRING,
                mc: i,
                ll: gs[e]
            }))
        }
        buildCommonPayload() {
            const e = {
                v: Q
            };
            return void 0 !== this.customer && (e.cid = this.customer.getId()), void 0 !== this.serverContext && (e.rid = this.serverContext.requestId), void 0 !== this.environment && (e.pvid = this.environment.getPageviewId(), e.hpurl = this.environment.getHostingPageUrl().getRawUrl(), e.lut = this.environment.getNowUnixTimeMs(), e.ltz = this.environment.getTimeZone()), void 0 !== this.user && (e.uid = this.user.getId()), e
        }
        messageToPayload(e) {
            return e instanceof bt ? {
                m: e.message,
                en: e.getCause().name,
                es: e.getCause().stack
            } : e instanceof Error ? {
                m: e.message,
                en: e.name,
                es: e.stack
            } : {
                m: e
            }
        }
        entityIdsToPayload(e) {
            const t = {};
            return void 0 !== e && ps.forEach((i => {
                void 0 !== e[i] && (t[ms[i]] = e[i])
            })), t
        }
        convertToStringValues(e) {
            return Object.assign({}, ...Object.entries(e).map((([e, t]) => ({
                [e]: String(t)
            }))))
        }
        send(e) {
            const t = ds(se, vs.PATH),
                i = we(this.convertToStringValues(e));
            void 0 === this.environment ? navigator.sendBeacon(t, i) : this.environment.sendBeacon(t, i)
        }
    }
    class bs {
        constructor() {
            __publicField(this, "consoleLogger"), __publicField(this, "serverLogger"), __publicField(this, "isLogging", !1), this.consoleLogger = Ne(), this.serverLogger = hs(fe)
        }
        configureCustomer(e) {
            this.serverLogger.configureCustomer(e)
        }
        configureEnvironment(e) {
            this.serverLogger.configureEnvironment(e)
        }
        configureServerContext(e) {
            this.serverLogger.configureServerContext(e)
        }
        configureUser(e) {
            this.serverLogger.configureUser(e)
        }
        getLevel() {
            return this.consoleLogger.getLevel()
        }
        error(e, t, i, s) {
            this.isLogging || (this.isLogging = !0, this.consoleLogger.error(e, t, i, s), this.serverLogger.error(e, t, i), this.isLogging = !1)
        }
        warn(e, t, i, s) {
            this.isLogging || (this.isLogging = !0, this.consoleLogger.warn(e, t, i, s), this.serverLogger.warn(e, t, i), this.isLogging = !1)
        }
        info(e, t, i, s) {
            this.isLogging || (this.isLogging = !0, this.consoleLogger.info(e, t, i, s), this.serverLogger.info(e, t, i), this.isLogging = !1)
        }
        debug(e, t, i, s) {
            this.isLogging || (this.isLogging = !0, this.consoleLogger.debug(e, t, i, s), this.serverLogger.debug(e, t, i), this.isLogging = !1)
        }
        group(e, t) {
            this.isLogging || (this.isLogging = !0, this.consoleLogger.group(e, t), this.isLogging = !1)
        }
        groupEnd(e) {
            this.isLogging || (this.isLogging = !0, this.consoleLogger.groupEnd(e), this.isLogging = !1)
        }
        time(e, t) {
            this.isLogging || (this.isLogging = !0, this.consoleLogger.time(e, t), this.isLogging = !1)
        }
        timeEnd(e, t) {
            this.isLogging || (this.isLogging = !0, this.consoleLogger.timeEnd(e, t), this.isLogging = !1)
        }
    }
    const fs = new bs,
        Es = "Other";
    class _s {
        constructor(e, t, i, s, n, r, o) {
            __publicField(this, "environment"), __publicField(this, "attributeStorage"), __publicField(this, "override"), __publicField(this, "customerStorage"), __publicField(this, "integrationDataStorage"), __publicField(this, "user"), __publicField(this, "data"), __publicField(this, "serverContext"), this.environment = e, this.serverContext = t, this.attributeStorage = i, this.override = s, this.customerStorage = n, this.integrationDataStorage = r, this.user = o, this.reinitialize()
        }
        reinitialize() {
            this.data = this.withAttributeDataOverrides({
                location: this.initializeLocationData(),
                utmParams: this.initializeUtmParamData(),
                userAgent: this.initializeUserAgentData(),
                dayPart: this.environment.getDayPart(),
                weekPart: this.environment.getWeekPart(),
                trafficSource: this.initializeTrafficSourceData(),
                custom: this.initializeCustomData(),
                urlParam: this.initializeUrlParamData(),
                userVisitStatus: this.initializeUserVisitStatusData(),
                userBucket: this.initializeUserBucketData(),
                marketo: this.initializeMarketoData(),
                salesforce: this.initializeSalesforceData(),
                firmographic: this.initializeFirmographicData(),
                "6sense": this.initializeSixsenseData(),
                googleAds: this.initializeGoogleAdsData(),
                demandbase: this.initializeDemandbaseData(),
                hubspot: this.initializeHubspotData()
            }), fs.debug(`[AttributeData] Initialized: ${Ie(this.data)}`)
        }
        getLocationData() {
            return this.data.location
        }
        getUtmParamsData() {
            return this.data.utmParams
        }
        getUserAgentData() {
            return this.data.userAgent
        }
        getDayPartData() {
            return this.data.dayPart
        }
        getWeekPartData() {
            return this.data.weekPart
        }
        getTrafficSourceData() {
            return this.data.trafficSource
        }
        getCustomData() {
            return this.data.custom
        }
        getUrlParamData() {
            return this.data.urlParam
        }
        getUserVisitStatusData() {
            return this.data.userVisitStatus
        }
        getUserBucketData() {
            return this.data.userBucket
        }
        getMarketoData() {
            return this.data.marketo
        }
        getSalesforceData() {
            return this.data.salesforce
        }
        getFirmographicData() {
            return this.data.firmographic
        }
        getSixsenseData() {
            return this.data["6sense"]
        }
        getGoogleAdsData() {
            return this.data.googleAds
        }
        getDemandbaseData() {
            return this.data.demandbase
        }
        getHubspotData() {
            return this.data.hubspot
        }
        getAttributeValue(e) {
            switch (e.getNamespace()) {
                case "standard":
                    switch (e.getName()) {
                        case "utm_source":
                            return j.ofNullable(this.getUtmParamsData().utmSource);
                        case "utm_medium":
                            return j.ofNullable(this.getUtmParamsData().utmMedium);
                        case "utm_campaign":
                            return j.ofNullable(this.getUtmParamsData().utmCampaign);
                        case "utm_content":
                            return j.ofNullable(this.getUtmParamsData().utmContent);
                        case "utm_term":
                            return j.ofNullable(this.getUtmParamsData().utmTerm);
                        case "country":
                            return j.ofNullable(this.getLocationData().country);
                        case "state":
                            return j.ofNullable(this.getLocationData().state);
                        case "subdivision":
                            return j.ofNullable(this.getLocationData().subdivision);
                        case "city":
                            return j.ofNullable(this.getLocationData().city);
                        case "postal":
                            return j.ofNullable(this.getLocationData().postal);
                        case "dma":
                            return j.ofNullable(this.getLocationData().dma);
                        case "timezone":
                            return j.ofNullable(this.getLocationData().tz);
                        case "device_type":
                            return j.ofNullable(this.getUserAgentData().deviceType);
                        case "day_part":
                            return j.ofNullable(this.getDayPartData());
                        case "week_part":
                            return j.ofNullable(this.getWeekPartData());
                        case "traffic_source":
                            return j.ofNullable(this.getTrafficSourceData());
                        case "user_visit_status":
                            return j.ofNullable(this.getUserVisitStatusData());
                        case "user_bucket":
                            return j.ofNullable(this.getUserBucketData());
                        default:
                            return fs.error(`Standard attribute name (${e.getName()}) not supported`, 214), j.empty()
                    }
                case "url_param":
                    return j.ofNullable(this.getUrlParamData()[e.getName()]);
                case "custom":
                    return j.ofNullable(this.getCustomData()[e.getName()]);
                case "marketo":
                    return j.ofNullable(this.getMarketoData()[e.getName()]);
                case "salesforce":
                    return j.ofNullable(this.getSalesforceData()[e.getName()]);
                case "firmographic":
                    return j.ofNullable(this.getFirmographicData()[e.getName()]);
                case "6sense":
                    return j.ofNullable(this.getSixsenseData()[e.getName()]);
                case "googleAds":
                    return j.ofNullable(this.getGoogleAdsData()[e.getName()]);
                case "demandbase":
                    return j.ofNullable(this.getDemandbaseData()[e.getName()]);
                case "hubspot":
                    return j.ofNullable(this.getHubspotData()[e.getName()]);
                default:
                    return fs.error(`Attribute namespace (${e.getNamespace()}) not supported`, 215), j.empty()
            }
        }
        setServerContext(e) {
            this.serverContext = e, this.reinitialize()
        }
        initializeCustomData() {
            return this.attributeStorage.getFlattenedCustomAttributes()
        }
        initializeUrlParamData() {
            return this.environment.getHostingPageUrl().getAllQueryParamsUnsafe()
        }
        initializeUserVisitStatusData() {
            return this.customerStorage.getUserVisitStatus(this.user)
        }
        initializeUserBucketData() {
            return this.user.getUserBucket()
        }
        initializeLocationData() {
            var e, t, i, s, n, r;
            const o = null != (t = null == (e = this.serverContext) ? void 0 : e.location) ? t : {},
                a = null != (s = null != (i = o.subdivision2Iso) ? i : o.subdivision1Iso) ? s : Es,
                l = [];
            void 0 !== o.countryIso && (void 0 !== o.subdivision1Iso && l.push(`${o.countryIso}-${o.subdivision1Iso}`), void 0 !== o.subdivision2Iso && l.push(`${o.countryIso}-${o.subdivision2Iso}`));
            let c = Es;
            return void 0 !== o.countryIso && void 0 !== o.postalCode && (c = `${o.countryIso}-${o.postalCode}`), {
                country: null != (n = o.countryIso) ? n : Es,
                state: a,
                subdivision: l,
                city: null != (r = o.geonameId) ? r : Es,
                dma: void 0 === o.dmaCode ? Es : o.dmaCode.toString(),
                postal: c,
                tz: this.environment.getTimeZone()
            }
        }
        initializeUserAgentData() {
            var e, t, i, s, n, r, o, a, l, c, u;
            const d = null != (t = null == (e = this.serverContext) ? void 0 : e.userAgent) ? t : {};
            let h, g, p;
            switch (d.deviceClass) {
                case "Desktop":
                case "Set-top box":
                case "TV":
                case "Game Console":
                default:
                    h = "D";
                    break;
                case "Mobile":
                case "Phone":
                case "Handheld Game Console":
                    h = "P";
                    break;
                case "Tablet":
                case "eReader":
                    h = "T"
            }
            switch (d.agentName) {
                case "Firefox":
                case "Gecko":
                case "Camino":
                case "SeaMonkey":
                    g = "Firefox";
                    break;
                case "Chrome":
                case "Chrome Webview":
                case "Chromium":
                case "Epiphany":
                    g = "Chrome";
                    break;
                case "Edge":
                case "Edge Webview":
                    g = "Edge";
                    break;
                case "Safari":
                case "Mobile Safari":
                    g = "Safari";
                    break;
                case "Internet Explorer":
                case "IE Mobile":
                case "Internet Explorer Webview":
                    g = "IE";
                    break;
                default:
                    g = Es
            }
            switch (d.osName) {
                case "Mac OS X":
                    p = "Macintosh";
                    break;
                case "Windows Phone":
                    p = "WindowsPhone";
                    break;
                case "Windows NT":
                case "Windows 9x":
                case "Windows CE":
                    p = "Windows";
                    break;
                case "Android":
                    p = "Android";
                    break;
                case "Linux":
                case "Fedora":
                    p = "Linux";
                    break;
                case "iOS":
                    p = "iOS";
                    break;
                default:
                    p = Es
            }
            return {
                deviceType: h,
                browser: g,
                os: p,
                deviceClass: null != (i = d.deviceClass) ? i : Es,
                deviceName: null != (s = d.deviceName) ? s : Es,
                deviceBrand: null != (n = d.deviceBrand) ? n : Es,
                osClass: null != (r = d.osClass) ? r : Es,
                osName: null != (o = d.osName) ? o : Es,
                osVersion: null != (a = d.osVersion) ? a : Es,
                agentClass: null != (l = d.agentClass) ? l : Es,
                agentName: null != (c = d.agentName) ? c : Es,
                agentVersionMajor: null != (u = d.agentVersionMajor) ? u : Es
            }
        }
        initializeUtmParamData() {
            const e = this.attributeStorage.getInternalAttributes("user", _e);
            return {
                utmSource: e.uts,
                utmMedium: e.utm,
                utmCampaign: e.utcm,
                utmContent: e.utcn,
                utmTerm: e.utt
            }
        }
        initializeTrafficSourceData() {
            const {
                ts: e
            } = this.attributeStorage.getInternalAttributes("user", ["ts"]);
            return null != e ? e : "OT"
        }
        initializeMarketoData() {
            return this.integrationDataStorage.getData("marketo").map((e => null != e ? e : {})).orElse({})
        }
        initializeSalesforceData() {
            return this.integrationDataStorage.getData("salesforce").map((e => {
                const t = {};
                return void 0 !== e && Object.entries(e).forEach((([e, i]) => {
                    Object.entries(i).forEach((([i, s]) => {
                        t[`${e}.${i}`] = s
                    }))
                })), t
            })).orElse({})
        }
        initializeFirmographicData() {
            return this.integrationDataStorage.getData("firmographic").map((e => null != e ? e : {})).orElse({})
        }
        initializeSixsenseData() {
            return this.integrationDataStorage.getData("6sense").map((e => null != e ? e : {})).orElse({})
        }
        initializeGoogleAdsData() {
            return this.integrationDataStorage.getData("googleAds").map((e => null != e ? e : {})).orElse({})
        }
        initializeDemandbaseData() {
            return this.integrationDataStorage.getData("demandbase").map((e => {
                const t = {};
                return void 0 !== e && Object.entries(e).forEach((([e, i]) => {
                    "custom" === e ? Object.entries(i).forEach((([e, i]) => {
                        t[`custom.${e}`] = i
                    })) : t[e] = i
                })), t
            })).map((e => null != e ? e : {})).orElse({})
        }
        initializeHubspotData() {
            return this.integrationDataStorage.getData("hubspot").map((e => {
                const t = {};
                return void 0 !== e && Object.entries(e).forEach((([e, i]) => {
                    Object.entries(i).forEach((([i, s]) => {
                        t[`${e}.${i}`] = s
                    }))
                })), t
            })).orElse({})
        }
        withAttributeDataOverrides(e) {
            const t = this.override.getAttributeDataOverrides();
            return this.overrideObject(e.location, t.location), this.overrideObject(e.utmParams, t.utmParams), this.overrideObject(e.userAgent, t.userAgent), void 0 !== t.dayPart && (e.dayPart = t.dayPart), void 0 !== t.weekPart && (e.weekPart = t.weekPart), void 0 !== t.trafficSource && (e.trafficSource = t.trafficSource), this.overrideObject(e.custom, t.custom), this.overrideObject(e.urlParam, t.urlParam), void 0 !== t.userVisitStatus && (e.userVisitStatus = t.userVisitStatus), void 0 !== t.userBucket && (e.userBucket = t.userBucket), e
        }
        overrideObject(e, t) {
            Object.entries(t).forEach((([t, i]) => {
                void 0 !== i && (e[t] = i)
            }))
        }
    }
    class ys {
        constructor(e) {
            __publicField(this, "timestamp"), this.timestamp = e.getNowUnixTime()
        }
        get id() {
            return "missing-policy"
        }
        getId() {
            return this.id
        }
        getTimestamp() {
            return this.timestamp
        }
        toJson() {
            return we({
                id: this.id,
                timestamp: this.timestamp
            })
        }
    }

    function Ss(e) {
        const t = [...e];
        let i, s = t.length;
        for (; s > 0;) i = Math.floor(Math.random() * s), s--, [t[s], t[i]] = [t[i], t[s]];
        return t
    }
    class Is {
        constructor(e) {
            __publicField(this, "id"), __publicField(this, "timestamp"), __publicField(this, "experiences", {}), this.id = N(e.id), this.timestamp = N(e.timestamp), N(e.experiences), Object.keys(e.experiences).forEach((t => {
                this.experiences[t] = {
                    modelVersion: N(e.experiences[t].modelVersion),
                    variationId: N(e.experiences[t].variationId)
                }
            }))
        }
        static buildDefaultPolicy(e, t) {
            const i = {};
            return Object.keys(t.candidates).forEach((e => {
                const s = t.candidates[e];
                void 0 !== s && Ss(s).forEach((t => {
                    (t.isSticky || void 0 === i[e]) && (i[e] = {
                        modelVersion: "default-model-version",
                        variationId: t.variationId
                    })
                }))
            })), new Is({
                id: "default-policy",
                timestamp: e.getNowUnixTime(),
                experiences: i
            })
        }
        static buildControlPolicy(e) {
            return new ws(e)
        }
        getId() {
            return this.id
        }
        getTimestamp() {
            return this.timestamp
        }
        getExperienceModelVersion(e) {
            return void 0 === this.experiences[e] ? (fs.info(`PolicyV5 could not find experience ${e}`), "NA") : this.experiences[e].modelVersion
        }
        getExperienceVariationId(e) {
            return void 0 === this.experiences[e] ? (fs.info(`PolicyV5 could not find experience ${e}`), "NA") : this.experiences[e].variationId
        }
        toJson() {
            return we({
                id: this.id,
                timestamp: this.timestamp,
                experiences: this.experiences
            })
        }
    }
    class ws extends Is {
        constructor(e) {
            super({
                id: "control-policy",
                timestamp: e.getNowUnixTime(),
                experiences: {}
            })
        }
        getExperienceModelVersion(e) {
            return "control-experience"
        }
        getExperienceVariationId(e) {
            return it
        }
    }
    var Cs = function e(t) {
        return Object.freeze(t), Object.getOwnPropertyNames(t).forEach((function(i) {
            !t.hasOwnProperty(i) || null === t[i] || "object" != typeof t[i] && "function" != typeof t[i] || Object.isFrozen(t[i]) || e(t[i])
        })), t
    };
    class Ts {
        constructor(e) {
            __publicField(this, "optionalUrl"), __publicField(this, "optionalOrigin"), __publicField(this, "urlParamsUnsafe"), this.optionalUrl = Ts.sanitizeUrl(e);
            const t = !0 === (null == e ? void 0 : e.includes("?")) ? e.slice(e.indexOf("?")) : void 0;
            if (this.urlParamsUnsafe = Cs(Ts.parseQueryStringUnsafe(t)), this.optionalOrigin = j.empty(), this.optionalUrl.isPresent()) {
                const e = this.optionalUrl.get();
                try {
                    const {
                        origin: t
                    } = new URL(e);
                    this.optionalOrigin = j.ofNullable(t)
                } catch (i) {
                    const e = new bt("Could not construct URL to determine origin", i);
                    fs.warn(e, 135)
                }
            } else fs.debug("cannot determine url origin")
        }
        static parseQueryStringUnsafe(e) {
            const t = {};
            return void 0 !== e && e.length > 0 && e.slice(1).split("&").forEach((e => {
                try {
                    if (void 0 !== e && e.length > 0) {
                        const i = e.split("=", 2),
                            s = decodeURIComponent(i[0]);
                        if (!Object.prototype.hasOwnProperty.call(t, s)) {
                            let e = "";
                            void 0 !== i[1] && (e = decodeURIComponent(i[1].replace(/\+/g, " "))), t[s] = e
                        }
                    }
                } catch (i) {
                    const e = vt(i);
                    fs.warn(e, 29)
                }
            })), t
        }
        static sanitizeUrl(e) {
            try {
                if (void 0 !== e) return j.ofNullable(decodeURI(e))
            } catch (t) {
                fs.error(`Url could not be decoded: '${e}'`, 44)
            }
            return j.ofNullable(e)
        }
        getAllUrlParamsUnsafe() {
            return this.urlParamsUnsafe
        }
        getUrl() {
            return this.optionalUrl
        }
        getOrigin() {
            return this.optionalOrigin
        }
    }
    const xs = `${be}NativeIdPath`;
    class As {
        constructor(e, t, i, s, n, r, o, a, l) {
            __publicField(this, "customer"), __publicField(this, "environment"), __publicField(this, "user"), __publicField(this, "attributeStorage"), __publicField(this, "pageContext"), __publicField(this, "serverContext"), __publicField(this, "customerStorage"), __publicField(this, "policy"), __publicField(this, "override"), this.customer = N(e), this.environment = N(t), this.user = N(i), this.attributeStorage = N(s), this.pageContext = N(n), this.serverContext = N(r), this.customerStorage = N(o), this.policy = null != a ? a : new ys(t), this.override = N(l)
        }
        setPolicy(e) {
            this.policy = e
        }
        sendPageview() {
            return __async(this, null, (function*() {
                fs.debug("sendPageview()");
                const e = this.buildPageviewEvent();
                return this.send(e, !0)
            }))
        }
        sendContext(e) {
            return __async(this, null, (function*() {
                fs.debug("sendContext()");
                const t = this.buildContextEvent(e);
                return this.send(t, !0)
            }))
        }
        sendConversion(e) {
            return __async(this, null, (function*() {
                fs.debug("sendConversion()");
                const t = this.buildConversionEvent(e);
                return this.send(t, !0)
            }))
        }
        sendView(e, t) {
            return __async(this, null, (function*() {
                fs.debug("sendView()");
                const i = this.buildViewEvent(e, t);
                return this.send(i, !0)
            }))
        }
        sendGoal(e, t, i, s) {
            return __async(this, null, (function*() {
                fs.debug("sendGoal()");
                const n = this.buildGoalEvent(e, t, i);
                return this.send(n, s)
            }))
        }
        static get PATH() {
            return "/logger"
        }
        buildPageviewEvent() {
            fs.debug("buildPageviewEvent()");
            const e = {
                eventType: "pv"
            };
            return this.buildCommonEvent(e), e.pageviewId = this.environment.getPageviewId(), e.sessionId = this.customerStorage.updateAndGetSessionId(), e.policyId = this.policy.getId(), e.policyTimestamp = this.policy.getTimestamp(), this.customerStorage.getCustomerControlStatus(this.customer).ifPresent((t => {
                e.controlStatus = t
            })), e
        }
        buildContextEvent(e) {
            fs.debug("buildContextEvent()");
            const t = {
                    eventType: "ctx",
                    pageviewId: this.environment.getPageviewId(),
                    customerId: this.customer.getId(),
                    userId: this.user.getId()
                },
                i = e.getAllData();
            return Object.keys(i).length > 0 && (t.integrationData = i), t
        }
        buildConversionEvent(e) {
            fs.debug("buildConversionEvent()");
            const t = {
                eventType: "c"
            };
            return this.buildCommonEvent(t), this.populateConversionInfo(t, e), t.pageviewId = this.environment.getPageviewId(), t.sessionId = this.customerStorage.updateAndGetSessionId(), t.policyId = this.policy.getId(), t.policyTimestamp = this.policy.getTimestamp(), this.customerStorage.getCustomerControlStatus(this.customer).ifPresent((e => {
                t.controlStatus = e
            })), t
        }
        buildViewEvent(e, t) {
            fs.debug("buildViewEvent()");
            const i = {
                eventType: "v"
            };
            this.buildBaseEvent(i, e);
            const s = e.getExperience(),
                n = s.getCampaign(),
                r = n.getCustomer();
            return t.isStickyVariation(e) ? this.customerStorage.getVariationPredictionModelVersion(e).ifPresent((e => {
                i.modelVersion = e
            })) : i.modelVersion = t.getModelVersion(s.getId()), i.isPrediction = !t.isStickyVariation(e) && e.getId() !== it, i.isVariationSticky = t.isStickyVariation(e), i.isCampaignFirstTime = this.customerStorage.updateAndGetIsCampaignFirstTimeView(n, this.environment.getInitializeUnixTime()), i.isVariationFirstTime = this.customerStorage.updateAndGetIsVariationFirstTimeView(e, this.environment.getInitializeUnixTime()), i.pageviewId = this.environment.getPageviewId(), i.sessionId = this.customerStorage.updateAndGetSessionId(), i.policyId = this.policy.getId(), i.policyTimestamp = this.policy.getTimestamp(), this.customerStorage.getCustomerControlStatus(r).ifPresent((e => {
                i.controlStatus = e
            })), i
        }
        buildGoalEvent(e, t, i) {
            fs.debug("buildGoalEvent()");
            const s = {
                eventType: "ocg"
            };
            this.buildBaseEvent(s, e);
            const n = e.getExperience().getCampaign();
            return s.isCampaignFirstTime = this.customerStorage.updateAndGetIsCampaignFirstTimeGoal(n, t, this.environment.getInitializeUnixTime()), s.isVariationFirstTime = this.customerStorage.updateAndGetIsVariationFirstTimeGoal(e, t, this.environment.getInitializeUnixTime()), this.customerStorage.getVariationPredictionModelVersion(e).ifPresent((e => {
                s.modelVersion = e
            })), s.metricId = t.getId(), s.isGoal = t.isGoal(), s.goalPageviewId = this.environment.getPageviewId(), s.goalSessionId = this.customerStorage.updateAndGetSessionId(), this.populateConversionInfo(s, i), this.customerStorage.getVariationPredictionPageviewId(e).ifPresent((e => {
                s.pageviewId = e
            })), this.customerStorage.getVariationPredictionSessionId(e).ifPresent((e => {
                s.sessionId = e
            })), s.policyId = this.policy.getId(), s.policyTimestamp = this.policy.getTimestamp(), this.customerStorage.getCustomerControlStatus(n.getCustomer()).ifPresent((e => {
                s.controlStatus = e
            })), s
        }
        populateConversionInfo(e, t) {
            e.actionId = t.getActionId();
            const i = t.getEvent();
            i instanceof Et && t.getNativeMouseEvent().ifPresent((t => {
                this.getNearestAnchorHref(t).ifPresent((t => {
                    e.clickTargetUrl = t
                })), this.getWebflowNativeIdPathElement(i, t).ifPresent((t => {
                    e.webflowNativeIdPath = t.dataset[xs], this.getWebflowEventLabel(t).ifPresent((t => {
                        e.webflowEventLabel = t
                    }))
                }))
            })), e.eventId = t.getEventId(), e.eventInstanceId = t.getEventInstanceId(), t.getEventValue().ifPresent((t => {
                e.eventValue = t
            }))
        }
        getNearestAnchorHref(e) {
            var t, i;
            let s, n = e.target;
            for (; void 0 !== n;) {
                if (n instanceof HTMLAnchorElement) {
                    s = null != (t = n.getAttribute("href")) ? t : void 0;
                    break
                }
                n = null != (i = n.parentNode) ? i : void 0
            }
            return j.ofNullable(s)
        }
        getWebflowEventLabel(e) {
            let t;
            return this.getInnerText(e).ifPresent((e => {
                const i = e.slice(0, 100).trim().replace(/\s+/g, " ");
                i.length > 0 && (t = i)
            })), void 0 === t && this.getAriaLabel(e).ifPresent((e => {
                t = e
            })), void 0 === t && this.getElementId(e).ifPresent((e => {
                t = e
            })), void 0 === t && this.getChildImgElement(e).ifPresent((i => {
                this.getAriaLabel(i).ifPresent((e => {
                    t = e
                })), void 0 === t && this.getImgAlt(i).ifPresent((e => {
                    t = e
                })), void 0 === t && this.getElementId(i).ifPresent((e => {
                    t = e
                })), void 0 === t && e instanceof HTMLAnchorElement && this.getAnchorHrefAttr(e).ifPresent((e => {
                    t = e
                })), void 0 === t && this.getImgSrcAttr(i).ifPresent((e => {
                    t = e
                }))
            })).ifAbsent((() => {
                e instanceof HTMLAnchorElement && this.getAnchorHrefAttr(e).ifPresent((e => {
                    t = e
                }))
            })), j.ofNullable(t)
        }
        getChildImgElement(e) {
            return 1 === e.children.length && e.children[0] instanceof HTMLImageElement ? j.of(e.children[0]) : j.empty()
        }
        getInnerText(e) {
            return j.ofNullable(e.innerText)
        }
        getAriaLabel(e) {
            return j.ofNullable(e.ariaLabel)
        }
        getElementId(e) {
            return j.ofNullable(e.id)
        }
        getImgAlt(e) {
            return j.ofNullable(e.alt)
        }
        getImgSrcAttr(e) {
            return j.ofNullable(e.getAttribute("src"))
        }
        getAnchorHrefAttr(e) {
            const t = e.getAttribute("href");
            return "#" === t ? j.empty() : j.ofNullable(t)
        }
        getWebflowNativeIdPathElement(e, t) {
            if (void 0 !== t.target.dataset[xs]) return j.of(t.target);
            const i = t.target.closest(e.getSelector());
            return i instanceof HTMLElement && void 0 !== i.dataset[xs] ? j.of(i) : j.empty()
        }
        buildBaseEvent(e, t) {
            const i = t.getExperience(),
                s = i.getCampaign();
            this.buildCommonEvent(e), e.campaignId = s.getId(), e.experienceId = i.getId(), e.variationId = t.getId()
        }
        buildCommonEvent(e) {
            e.userId = this.user.getId(), e.isFirstTimeUser = this.user.isNewVisitor(), e.userVisitStatus = this.customerStorage.getUserVisitStatus(this.user), e.userBucket = this.user.getUserBucket(), e.intellimizeClientIp = this.serverContext.clientIp, e.customerId = this.customer.getId(), this.environment.getNowVisibilityState().ifPresent((t => {
                e.visibilityState = t
            })), e.clientVersion = Q, e.requestId = this.serverContext.requestId, this.environment.getReferrerUrl().ifPresent((t => {
                Ts.sanitizeUrl(t.getRawUrl()).ifPresent((t => {
                    e.referrerUrl = t
                })), e.referrerUrlEnc = t.getRawUrl()
            })), Ts.sanitizeUrl(this.environment.getHostingPageUrl().getRawUrl()).ifPresent((t => {
                e.hostingPageUrl = t
            })), e.hostingPageUrlEnc = this.environment.getHostingPageUrl().getRawUrl(), e.intellimizeUserAgentDigest = this.serverContext.userAgentDigest, e.time = this.environment.getNowUnixTimeMs(), e.timeZone = this.environment.getTimeZone(), this.environment.getWidowWidth().ifPresent((t => {
                e.windowWidth = t
            })), this.environment.getWidowHeight().ifPresent((t => {
                e.windowHeight = t
            })), this.environment.getScreenOrientation().ifPresent((t => {
                e.screenOrientation = t
            }));
            const t = this.attributeStorage.getFlattenedInternalAttributes();
            Object.keys(t).length > 0 && (e.internalAttributes = t);
            const i = this.attributeStorage.getFlattenedCustomAttributes();
            Object.keys(i).length > 0 && (e.customAttributes = i);
            const s = this.pageContext.getPages().map((e => e.getId()));
            s.length > 0 && (e.pageIds = s);
            const n = this.pageContext.getAudiences().map((e => e.getId()));
            n.length > 0 && (e.audienceIds = n);
            const r = this.environment.getWebflowPageMetadata();
            void 0 !== r.domain && (e.webflowDomain = r.domain), void 0 !== r.siteId && (e.webflowSiteId = r.siteId), void 0 !== r.pageId && (e.webflowPageId = r.pageId), void 0 !== r.collectionId && (e.webflowCollectionId = r.collectionId), void 0 !== r.itemSlug && (e.webflowItemSlug = r.itemSlug)
        }
        send(e, t) {
            return __async(this, null, (function*() {
                const i = Date.now();
                fs.debug(`send(async: ${t}) ${i}`);
                if (("pv" === e.eventType ? this.override.sendPageviewBrowserEvents() : this.override.sendNonPageviewBrowserEvents()).orElse(!0)) {
                    if (t) {
                        const t = ds(se, As.PATH),
                            i = we(e);
                        yield this.sendBeacon(t, i)
                    } else yield this.environment.legacySynchronousXhr(se, As.PATH, {
                        method: "POST",
                        body: we(e)
                    });
                    fs.debug("BrowserEvent sent")
                } else fs.debug("BrowserEvent send skipped")
            }))
        }
        sendBeacon(e, t) {
            return __async(this, null, (function*() {
                return new Promise(((i, s) => {
                    this.environment.sendBeacon(e, t) ? i() : s()
                }))
            }))
        }
    }
    class Fs {
        constructor() {
            __publicField(this, "onVariationRecordedCallbackTuples", [])
        }
        getVariationRecordedCallbackTuples() {
            return this.onVariationRecordedCallbackTuples
        }
        addVariationRecordedCallbackTuple(e) {
            this.onVariationRecordedCallbackTuples.push(e)
        }
    }
    class ks {
        static evalBoolean(e) {
            const t = ks.eval(e);
            if ("boolean" == typeof t) return t;
            throw new TypeError("Expected boolean response, but got " + typeof t + ": " + t)
        }
        static evalString(e) {
            const t = ks.eval(e);
            if ("string" == typeof t) return t;
            throw new TypeError("Expected string response, but got " + typeof t + ": " + t)
        }
        static eval(e) {
            return fs.info(`eval code: ${e}`), (0, eval)('"use strict";\n' + ks.reformatJqueryCode(e))
        }
        static injectCss(e, t, i) {
            fs.info(`inject css: ${e}`);
            const s = `intellimize-${t}`,
                n = i.querySelectorAll(`head #${s}`),
                [r] = n;
            if (void 0 === r) {
                const t = i.createElement("style");
                t.id = s, t.className = "iStyleBlock", t.append(e), i.head.append(t)
            } else r.innerHTML = e
        }
        static removeCss(e, t) {
            var i;
            fs.info(`Remove css: ${e}`);
            const s = `intellimize-${e}`;
            null == (i = t.querySelector(`head #${s}`)) || i.remove()
        }
        static executeFunction(e, t) {
            try {
                e.call(void 0)
            } catch (i) {
                const e = new bt("Caught exception in function callback", i);
                fs.error(e, t)
            }
        }
        static reformatJqueryCode(e) {
            return `var $ = (window.intellimize && window.intellimize.plugins && window.intellimize.plugins.jquery) ? window.intellimize.plugins.jquery : window.$;\n${e}`
        }
    }
    class Ps {
        constructor(e, t) {
            __publicField(this, "attributeData"), __publicField(this, "activityStorage"), this.attributeData = e, this.activityStorage = t
        }
        evalBoolean(e) {
            fs.info(`ConditionEvaluationRuntime.evalBoolean(${e.slice(0,10)})`);
            const t = ks.evalBoolean(e);
            return fs.info(`ConditionEvaluationRuntime.evalBoolean() => ${t}`), t
        }
        getAttributeValue(e) {
            return this.attributeData.getAttributeValue(e)
        }
        getActivities() {
            return this.activityStorage.getAll()
        }
    }
    const Ms = ["mutations"],
        Ds = {
            debug(e, t, i) {
                fs.debug(e, t, i, Ms)
            },
            group(e) {
                fs.group(e, Ms)
            },
            groupEnd() {
                fs.groupEnd(Ms)
            },
            time(e) {
                fs.time(e, Ms)
            },
            timeEnd(e) {
                fs.timeEnd(e, Ms)
            }
        };
    class Ns {
        attachObserver() {}
        detachObserver() {}
        registerSelectorAndExecute(e, t, i, s) {
            const n = document.querySelectorAll(e);
            Ds.debug(`Found ${n.length} matching elements`), n.length > 0 ? n.forEach((e => {
                Ds.debug(`Processing element: ${xe(e)}`), t(e)
            })) : Ds.debug(`No matching elements for selector: ${e}`)
        }
        reset() {}
    }

    function Os(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }

    function Rs(e) {
        return "[object Arguments]" === Object.prototype.toString.call(e)
    }

    function Ls(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
    }

    function $s(e) {
        return "[object Function]" === Object.prototype.toString.call(e)
    }

    function Vs(e) {
        return "[object HTMLImageElement]" === Object.prototype.toString.call(e)
    }

    function Us(e, t) {
        const i = [];
        for (const s of e) t.includes(s) || i.push(s);
        for (const s of t) e.includes(s) || i.push(s);
        return i
    }

    function Ws(e) {
        return e.replace(/([a-z\d])([A-Z])/g, "$1-$2").toLowerCase()
    }

    function zs(e, t) {
        const i = e.indexOf(t);
        i > -1 && e.splice(i, 1)
    }

    function js(e) {
        return Object.fromEntries(Object.entries(e).map((([e, t]) => [t, e])))
    }
    const Bs = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;",
            "`": "&#x60;",
            "=": "&#x3D;"
        },
        Gs = e => String(e).replace(/[&<>"'`=/]/g, (e => {
            var t;
            return null != (t = Bs[e]) ? t : e
        })),
        Hs = (e, t, i = !0) => {
            let s = "";
            return t.forEach((t => {
                s += Qs(e, t, i)
            })), s
        },
        Qs = (e, t, i = !0) => {
            switch (t.type) {
                case "string":
                    return t.value;
                case "attribute":
                    return qs(e, t.value, i);
                default:
                    throw new Error(`Unsupported TemplateFragment type: ${t.type}`)
            }
        },
        qs = (e, {
            attrDefId: t,
            defaultString: i
        }, s) => {
            const n = new je(t);
            let r = e.getAttributeValue(n).orElse(i);
            return Os(r) && (r = Ks(e, n, i)), s ? Gs(String(r)) : String(r)
        },
        Ks = (e, t, i) => e.getAttributeValue(t).flatMap((([e]) => j.ofNullable(e))).orElse(i);
    class Ys {
        constructor(e, t, i, s) {
            __publicField(this, "attributeData"), __publicField(this, "environment"), __publicField(this, "localDocument"), __publicField(this, "parent"), __publicField(this, "changeIndex"), this.parent = e, this.changeIndex = t, this.attributeData = i, this.environment = s, this.localDocument = s.getWindow().document
        }
        getGuid() {
            return `${this.parent.getGuid()}-c${this.changeIndex}}`
        }
        getEntityIds() {
            return __spreadProps(__spreadValues({}, this.parent.getEntityIds()), {
                changeId: String(this.changeIndex)
            })
        }
    }
    const Js = "data-imize";

    function Xs(e, t, i) {
        var s;
        const n = e;
        n.imizeChangeData = null != (s = n.imizeChangeData) ? s : {}, m(n.imizeChangeData) ? n.imizeChangeData[t] = i : fs.error("Invalid imizeChangeData value: must be an object", 118)
    }

    function Zs(e, t) {
        return j.ofNullable(an(e)[t])
    }

    function en(e, t) {
        delete an(e)[t], 0 === Object.keys(an(e)).length && ln(e)
    }

    function tn(e) {
        const t = e;
        return void 0 !== t.imizeChangeData && Object.keys(t.imizeChangeData).length > 0
    }

    function sn(e) {
        return `${Js}-${e}`
    }

    function nn(e) {
        return document.querySelectorAll(`[${sn(e)}]`)
    }

    function rn(e, t) {
        e.setAttribute(sn(t), t)
    }

    function on(e, t) {
        e.removeAttribute(sn(t))
    }

    function an(e) {
        var t;
        const i = e;
        return m(i.imizeChangeData) || f(i.imizeChangeData) ? null != (t = i.imizeChangeData) ? t : {} : (fs.error("Invalid imizeChangeData value: must be undefined or an object", 119), {})
    }

    function ln(e) {
        delete e.imizeChangeData
    }

    function cn(e, t) {
        const i = {};
        for (const [s, n] of Object.entries(an(e))) n.type === t && (i[s] = n.value);
        return i
    }

    function un(e) {
        return {
            getGuid: () => `e${e.getExperience().getId()}-v${e.getId()}`,
            getEntityIds: () => ({
                variationId: e.getId(),
                experienceId: e.getExperience().getId()
            })
        }
    }

    function dn(e) {
        return {
            getGuid: () => `p${e.getId()}`,
            getEntityIds: () => ({
                pageId: e.getId()
            })
        }
    }

    function hn(e) {
        return {
            getGuid: () => `ve${e.id}`,
            getEntityIds: () => ({})
        }
    }
    const gn = class extends Ys {
        constructor(e, t, i, s, n) {
            super(t, i, s, n), __publicField(this, "attributeChange"), this.attributeChange = e
        }
        static getIsValidAttribute(e, t) {
            const i = e.tagName.toLowerCase();
            return gn.VALID_TAGS_BY_NON_STANDARD_ATTRIBUTE[t].includes(i)
        }
        isReadyToApply() {
            return this.attributeChange.isReadyToApply(this.localDocument)
        }
        apply(e, t) {
            fs.group("EnhancedAttributeChange.apply()"), fs.debug(`Applying change: ${Ie(this.attributeChange)}`), t.registerSelectorAndExecute(this.attributeChange.getSelector(), (t => {
                this.applyChanges(t, e)
            }), {
                shouldReapply: e => this.shouldReapply(e)
            }, this.getEntityIds()), fs.groupEnd()
        }
        undo() {
            fs.debug(`[EnhancedAttributeChange]: Undoing change: ${Ie(this.attributeChange)}`), this.attributeChange.getId().ifPresent((e => {
                const t = nn(e);
                Array.prototype.forEach.call(t, (t => {
                    if (t instanceof HTMLElement) {
                        const i = Zs(t, e);
                        if (i.isPresent()) {
                            const e = i.get().value;
                            Object.keys(this.attributeChange.getAttributes()).forEach((i => {
                                switch (i) {
                                    case "html":
                                        void 0 !== e.html && (t.innerHTML = this.renderContent(e.html));
                                        break;
                                    case "className":
                                        void 0 !== e.className && (t.className = e.className);
                                        break;
                                    case "alt":
                                    case "src":
                                    case "srcset":
                                    case "sizes":
                                    case "href":
                                        {
                                            const s = e[i];void 0 === s ? t.removeAttribute(i) : t.setAttribute(i, s);
                                            break
                                        }
                                    case "css":
                                    case "style":
                                        void 0 !== e.style && (t.style.cssText = e.style);
                                        break;
                                    default:
                                        fs.error(`[EnhancedAttributeChange]: Cannot undo unknown attribute: ${i}`, 121, this.getEntityIds())
                                }
                            }))
                        } else fs.error(`[EnhancedAttributeChange]: Expected change data, but there was none: ${Ie(this.attributeChange)}`, 122, this.getEntityIds())
                    } else fs.error(new Error("[EnhancedAttributeChange]: Found matching element that is not an HTMLElement"), 123, this.getEntityIds());
                    on(t, e), en(t, e)
                }))
            }))
        }
        getSelector() {
            return j.of(this.attributeChange.getSelector())
        }
        applyChanges(e, t) {
            let i = !1;
            fs.group(`EnhancedAttributeChange.applyChanges(${Ie(this.attributeChange)})`), this.attributeChange.getId().ifPresent((t => {
                rn(e, t)
            }));
            const s = {};
            Object.keys(this.attributeChange.getAttributes()).forEach((n => {
                switch (n) {
                    case "html":
                        {
                            const {
                                html: t
                            } = this.attributeChange.getAttributes();void 0 !== t && (s.html = e.innerHTML, e.innerHTML = this.renderContent(t)),
                            fs.debug("Applied html");
                            break
                        }
                    case "css":
                    case "style":
                        break;
                    case "className":
                        {
                            const {
                                className: t
                            } = this.attributeChange.getAttributes();void 0 !== t && (s.className = e.className, e.className = t),
                            fs.debug("Applied className");
                            break
                        }
                    case "src":
                        this.applyNonStandardAttribute(n, e, s), Vs(e) && !e.complete && (fs.debug("attaching listener for img src loading"), i = !0, e.addEventListener("load", (() => {
                            try {
                                fs.debug("EnhancedAttributeChange() image loaded! calling onReadyToRender()"), t()
                            } catch (e) {
                                const t = new bt("Exception in image onload handler", e);
                                fs.error(t, 236, this.getEntityIds())
                            }
                        }), {
                            once: !0
                        }));
                        break;
                    case "alt":
                    case "srcset":
                    case "sizes":
                    case "href":
                        this.applyNonStandardAttribute(n, e, s);
                        break;
                    default:
                        fs.error(`[EnhancedAttributeChange]: Cannot apply unknown attribute: ${n}`, 120, this.getEntityIds())
                }
            }));
            const n = this.createCssText(e);
            void 0 !== n && (s.style = e.style.cssText, e.style.cssText = n, fs.debug("Applied css")), this.attributeChange.getId().ifPresent((t => {
                Xs(e, t, {
                    value: s,
                    type: et.ATTRIBUTE
                })
            })), i || (fs.debug("EnhancedAttributeChange() not waiting; calling onReadyToRender()"), t()), fs.debug("DOM modifications successfully applied for this change."), fs.groupEnd()
        }
        applyNonStandardAttribute(e, t, i) {
            const s = gn.getIsValidAttribute(t, e),
                n = this.attributeChange.getAttributes()[e];
            if (s && void 0 !== n) {
                const s = t.getAttribute(e);
                null !== s && (i[e] = s), t.setAttribute(e, n)
            } else fs.error(`This ${t.tagName} does not support this attribute: ${e}`, 131, this.getEntityIds());
            fs.debug(`Applied ${n}`)
        }
        createCssText(e) {
            const {
                css: t,
                style: i
            } = this.attributeChange.getAttributes();
            if (f(t)) return i;
            const s = null != i ? i : "";
            let n = "";
            return Object.entries(t).forEach((([e, t]) => {
                const i = Ws(e);
                if (!new RegExp(i + "\\s*:").test(s)) {
                    const i = t.includes("!important") ? t : `${t} !important`;
                    n += `${Ws(e)}:${i};`
                }
            })), f(i) ? e.style.cssText + n : n + s
        }
        shouldReapply(e) {
            for (const t in this.attributeChange.getAttributes())
                if (Object.prototype.hasOwnProperty.call(this.attributeChange.getAttributes(), t)) switch (fs.debug(`shouldReapply(): CHECKING "${t}"`), t) {
                    case "css":
                    case "className":
                    case "style":
                    case "alt":
                        fs.debug(`shouldReapply(): SKIP (attribute "${t}" not checked)`);
                        break;
                    case "src":
                    case "srcset":
                    case "sizes":
                    case "href":
                        {
                            const i = this.attributeChange.getAttributes()[t];
                            if (void 0 !== i) {
                                const s = e.getAttribute(t);
                                if ("" === i && null === s) {
                                    fs.debug(`shouldReapply(): SKIP (value of "${t}" is null; configured value is empty string)`);
                                    break
                                }
                                if (i !== s) return fs.debug(`shouldReapply(): YES (value of "${t}" changed from "${i}" to "${s}")`), !0;
                                fs.debug(`shouldReapply(): SKIP (value of "${t}" did not change)`);
                                break
                            }
                            fs.debug(`shouldReapply(): SKIP (configured value of "${t}" is undefined)`);
                            break
                        }
                    case "html":
                        {
                            const i = this.attributeChange.getAttributes()[t],
                                s = document.createElement("div");
                            if (void 0 !== i && (s.innerHTML = this.renderContent(i)), e.textContent !== s.textContent) return fs.debug(`shouldReapply(): YES (The visible text of the element has changed from "${s.textContent}" to "${e.textContent}")`), !0;fs.debug(`shouldReapply(): SKIP (The text of the element has not changed; comparing configured "${s.textContent}" to current "${e.textContent}")`);
                            break
                        }
                    default:
                        fs.error(`[EnhancedAttributeChange]: shouldReapply() found unknown attribute: ${t}`, 201, this.getEntityIds())
                }
            return fs.debug("shouldReapply(): NO (all attributes skipped)"), !1
        }
        renderContent(e) {
            return "string" == typeof e ? e : Hs(this.attributeData, e, !0)
        }
    };
    let pn = gn;

    function mn() {
        return fn("xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx")
    }

    function vn() {
        return fn("xxxx-yxxx-xxxxxxxxxxxx")
    }

    function bn() {
        return fn("xxxxxxxxxx")
    }

    function fn(e) {
        let t = Date.now();
        return e.replace(/[xy]/g, (e => {
            const i = Math.trunc((t + 16 * Math.random()) % 16);
            return t = Math.floor(t / 16), ("x" === e ? i : 3 & i | 8).toString(16)
        }))
    }
    __publicField(pn, "VALID_TAGS_BY_NON_STANDARD_ATTRIBUTE", {
        alt: ["img"],
        src: ["img"],
        srcset: ["img"],
        sizes: ["img"],
        href: ["a"]
    });
    class En extends Ys {
        constructor(e, t, i, s, n) {
            super(t, i, s, n), __publicField(this, "customCodeChange"), this.customCodeChange = e
        }
        isReadyToApply() {
            return this.customCodeChange.isReadyToApply(this.localDocument)
        }
        apply(e, t) {
            fs.group("EnhancedCustomCodeChange.apply()"), fs.debug(`Applying change: ${Ie(this.customCodeChange)}`);
            try {
                this.customCodeChange.getCss().ifPresent((e => {
                    this.injectCss(e)
                })), t.detachObserver(), this.customCodeChange.getCode().ifPresent((e => {
                    this.runCode(e)
                }))
            } finally {
                t.attachObserver(), e(), fs.groupEnd()
            }
        }
        undo() {}
        getSelector() {
            return j.empty()
        }
        runCode(e) {
            try {
                fs.info("Running code for CUSTOM_CODE change"), ks.eval(e)
            } catch (t) {
                throw new bt("Code execution failed", t)
            }
        }
        injectCss(e) {
            try {
                const t = this.customCodeChange.getId().orElseRun(mn);
                fs.info("Injecting css for CUSTOM_CODE change"), ks.injectCss(e, `dom-change-${t}`, document)
            } catch (t) {
                throw new bt("Css injection failed", t)
            }
        }
    }
    var _n = {};
    ! function(e) {
        var t = Object.defineProperty,
            i = Object.getOwnPropertySymbols,
            s = Object.prototype.hasOwnProperty,
            n = Object.prototype.propertyIsEnumerable,
            r = (e, i, s) => i in e ? t(e, i, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: s
            }) : e[i] = s,
            o = (e, t, i) => (r(e, "symbol" != typeof t ? t + "" : t, i), i);
        Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        });
        let a = class extends Error {
            constructor(e) {
                super(e), this.name = "UnexpectedNullException"
            }
        };

        function l(e, t) {
            if (null == e || "string" == typeof e && 0 === e.length) throw new a(t);
            return e
        }
        class c extends Error {
            constructor(e) {
                super(e), this.name = "IllegalArgumentException"
            }
        }
        let u = class extends Error {
            constructor(e) {
                super(e), this.name = "NoSuchElementException"
            }
        };
        var d = Object.defineProperty,
            h = (e, t, i) => {
                return r = i, (n = "symbol" != typeof t ? t + "" : t) in (s = e) ? d(s, n, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : s[n] = r, i;
                var s, n, r
            };
        class g {
            static empty() {
                return v.INSTANCE
            }
            static of (e) {
                return new p(l(e))
            }
            static ofNullable(e) {
                return null == e || "string" == typeof e && 0 === e.length ? v.INSTANCE : new p(e)
            }
        }
        class p extends g {
            constructor(e) {
                super(), h(this, "value"), this.value = e
            }
            isPresent() {
                return !0
            }
            ifPresent(e) {
                return e(this.value), this
            }
            ifAbsent(e) {
                return this
            }
            get() {
                return this.value
            }
            orElse(e) {
                return this.value
            }
            orElseRun(e) {
                return this.value
            }
            toArray() {
                return [this.value]
            }
            map(e) {
                return g.ofNullable(e(this.value))
            }
            flatMap(e) {
                return e(this.value)
            }
            toString() {
                return `Optional[${this.value.toString()}]`
            }
        }
        const m = class extends g {
            isPresent() {
                return !1
            }
            ifPresent(e) {
                return this
            }
            ifAbsent(e) {
                return e(), this
            }
            get() {
                throw new u("No value present")
            }
            orElse(e) {
                return e
            }
            orElseRun(e) {
                return e()
            }
            toArray() {
                return []
            }
            map(e) {
                return g.empty()
            }
            flatMap(e) {
                return g.empty()
            }
            toString() {
                return "Optional.empty"
            }
        };
        let v = m;
        h(v, "INSTANCE", new m);
        const b = "imize-extension";
        var f = Object.prototype.toString,
            E = Array.isArray || function(e) {
                return "[object Array]" === f.call(e)
            };

        function _(e) {
            return "function" == typeof e
        }

        function y(e) {
            return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        }

        function S(e, t) {
            return null != e && "object" == typeof e && t in e
        }
        var I = RegExp.prototype.test,
            w = /\S/;

        function C(e) {
            return t = w, i = e, !I.call(t, i);
            var t, i
        }
        var T = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;",
                "`": "&#x60;",
                "=": "&#x3D;"
            },
            x = /\s*/,
            A = /\s+/,
            F = /\s*=/,
            k = /\s*\}/,
            P = /#|\^|\/|>|\{|&|=|!/;

        function M(e) {
            this.string = e, this.tail = e, this.pos = 0
        }

        function D(e, t) {
            this.view = e, this.cache = {
                ".": this.view
            }, this.parent = t
        }

        function N() {
            this.templateCache = {
                _cache: {},
                set: function(e, t) {
                    this._cache[e] = t
                },
                get: function(e) {
                    return this._cache[e]
                },
                clear: function() {
                    this._cache = {}
                }
            }
        }
        M.prototype.eos = function() {
            return "" === this.tail
        }, M.prototype.scan = function(e) {
            var t = this.tail.match(e);
            if (!t || 0 !== t.index) return "";
            var i = t[0];
            return this.tail = this.tail.substring(i.length), this.pos += i.length, i
        }, M.prototype.scanUntil = function(e) {
            var t, i = this.tail.search(e);
            switch (i) {
                case -1:
                    t = this.tail, this.tail = "";
                    break;
                case 0:
                    t = "";
                    break;
                default:
                    t = this.tail.substring(0, i), this.tail = this.tail.substring(i)
            }
            return this.pos += t.length, t
        }, D.prototype.push = function(e) {
            return new D(e, this)
        }, D.prototype.lookup = function(e) {
            var t, i, s, n = this.cache;
            if (n.hasOwnProperty(e)) t = n[e];
            else {
                for (var r, o, a, l = this, c = !1; l;) {
                    if (e.indexOf(".") > 0)
                        for (r = l.view, o = e.split("."), a = 0; null != r && a < o.length;) a === o.length - 1 && (c = S(r, o[a]) || (i = r, s = o[a], null != i && "object" != typeof i && i.hasOwnProperty && i.hasOwnProperty(s))), r = r[o[a++]];
                    else r = l.view[e], c = S(l.view, e);
                    if (c) {
                        t = r;
                        break
                    }
                    l = l.parent
                }
                n[e] = t
            }
            return _(t) && (t = t.call(this.view)), t
        }, N.prototype.clearCache = function() {
            void 0 !== this.templateCache && this.templateCache.clear()
        }, N.prototype.parse = function(e, t) {
            var i = this.templateCache,
                s = e + ":" + (t || O.tags).join(":"),
                n = void 0 !== i,
                r = n ? i.get(s) : void 0;
            return null == r && (r = function(e, t) {
                if (!e) return [];
                var i, s, n, r = !1,
                    o = [],
                    a = [],
                    l = [],
                    c = !1,
                    u = !1,
                    d = "",
                    h = 0;

                function g() {
                    if (c && !u)
                        for (; l.length;) delete a[l.pop()];
                    else l = [];
                    c = !1, u = !1
                }

                function p(e) {
                    if ("string" == typeof e && (e = e.split(A, 2)), !E(e) || 2 !== e.length) throw new Error("Invalid tags: " + e);
                    i = new RegExp(y(e[0]) + "\\s*"), s = new RegExp("\\s*" + y(e[1])), n = new RegExp("\\s*" + y("}" + e[1]))
                }
                p(t || O.tags);
                for (var m, v, b, f, _, S, I = new M(e); !I.eos();) {
                    if (m = I.pos, b = I.scanUntil(i))
                        for (var w = 0, T = b.length; w < T; ++w) C(f = b.charAt(w)) ? (l.push(a.length), d += f) : (u = !0, r = !0, d += " "), a.push(["text", f, m, m + 1]), m += 1, "\n" === f && (g(), d = "", h = 0, r = !1);
                    if (!I.scan(i)) break;
                    if (c = !0, v = I.scan(P) || "name", I.scan(x), "=" === v ? (b = I.scanUntil(F), I.scan(F), I.scanUntil(s)) : "{" === v ? (b = I.scanUntil(n), I.scan(k), I.scanUntil(s), v = "&") : b = I.scanUntil(s), !I.scan(s)) throw new Error("Unclosed tag at " + I.pos);
                    if (_ = ">" == v ? [v, b, m, I.pos, d, h, r] : [v, b, m, I.pos], h++, a.push(_), "#" === v || "^" === v) o.push(_);
                    else if ("/" === v) {
                        if (!(S = o.pop())) throw new Error('Unopened section "' + b + '" at ' + m);
                        if (S[1] !== b) throw new Error('Unclosed section "' + S[1] + '" at ' + m)
                    } else "name" === v || "{" === v || "&" === v ? u = !0 : "=" === v && p(b)
                }
                if (g(), S = o.pop()) throw new Error('Unclosed section "' + S[1] + '" at ' + I.pos);
                return function(e) {
                    for (var t, i = [], s = i, n = [], r = 0, o = e.length; r < o; ++r) switch ((t = e[r])[0]) {
                        case "#":
                        case "^":
                            s.push(t), n.push(t), s = t[4] = [];
                            break;
                        case "/":
                            n.pop()[5] = t[2], s = n.length > 0 ? n[n.length - 1][4] : i;
                            break;
                        default:
                            s.push(t)
                    }
                    return i
                }(function(e) {
                    for (var t, i, s = [], n = 0, r = e.length; n < r; ++n)(t = e[n]) && ("text" === t[0] && i && "text" === i[0] ? (i[1] += t[1], i[3] = t[3]) : (s.push(t), i = t));
                    return s
                }(a))
            }(e, t), n && i.set(s, r)), r
        }, N.prototype.render = function(e, t, i, s) {
            var n = this.getConfigTags(s),
                r = this.parse(e, n),
                o = t instanceof D ? t : new D(t, void 0);
            return this.renderTokens(r, o, i, e, s)
        }, N.prototype.renderTokens = function(e, t, i, s, n) {
            for (var r, o, a, l = "", c = 0, u = e.length; c < u; ++c) a = void 0, "#" === (o = (r = e[c])[0]) ? a = this.renderSection(r, t, i, s, n) : "^" === o ? a = this.renderInverted(r, t, i, s, n) : ">" === o ? a = this.renderPartial(r, t, i, n) : "&" === o ? a = this.unescapedValue(r, t) : "name" === o ? a = this.escapedValue(r, t, n) : "text" === o && (a = this.rawValue(r)), void 0 !== a && (l += a);
            return l
        }, N.prototype.renderSection = function(e, t, i, s, n) {
            var r = this,
                o = "",
                a = t.lookup(e[1]);
            if (a) {
                if (E(a))
                    for (var l = 0, c = a.length; l < c; ++l) o += this.renderTokens(e[4], t.push(a[l]), i, s, n);
                else if ("object" == typeof a || "string" == typeof a || "number" == typeof a) o += this.renderTokens(e[4], t.push(a), i, s, n);
                else if (_(a)) {
                    if ("string" != typeof s) throw new Error("Cannot use higher-order sections without the original template");
                    null != (a = a.call(t.view, s.slice(e[3], e[5]), (function(e) {
                        return r.render(e, t, i, n)
                    }))) && (o += a)
                } else o += this.renderTokens(e[4], t, i, s, n);
                return o
            }
        }, N.prototype.renderInverted = function(e, t, i, s, n) {
            var r = t.lookup(e[1]);
            if (!r || E(r) && 0 === r.length) return this.renderTokens(e[4], t, i, s, n)
        }, N.prototype.indentPartial = function(e, t, i) {
            for (var s = t.replace(/[^ \t]/g, ""), n = e.split("\n"), r = 0; r < n.length; r++) n[r].length && (r > 0 || !i) && (n[r] = s + n[r]);
            return n.join("\n")
        }, N.prototype.renderPartial = function(e, t, i, s) {
            if (i) {
                var n = this.getConfigTags(s),
                    r = _(i) ? i(e[1]) : i[e[1]];
                if (null != r) {
                    var o = e[6],
                        a = e[5],
                        l = e[4],
                        c = r;
                    0 == a && l && (c = this.indentPartial(r, l, o));
                    var u = this.parse(c, n);
                    return this.renderTokens(u, t, i, c, s)
                }
            }
        }, N.prototype.unescapedValue = function(e, t) {
            var i = t.lookup(e[1]);
            if (null != i) return i
        }, N.prototype.escapedValue = function(e, t, i) {
            var s = this.getConfigEscape(i) || O.escape,
                n = t.lookup(e[1]);
            if (null != n) return "number" == typeof n && s === O.escape ? String(n) : s(n)
        }, N.prototype.rawValue = function(e) {
            return e[1]
        }, N.prototype.getConfigTags = function(e) {
            return E(e) ? e : e && "object" == typeof e ? e.tags : void 0
        }, N.prototype.getConfigEscape = function(e) {
            return e && "object" == typeof e && !E(e) ? e.escape : void 0
        };
        var O = {
                name: "mustache.js",
                version: "4.2.0",
                tags: ["{{", "}}"],
                clearCache: void 0,
                escape: void 0,
                parse: void 0,
                render: void 0,
                Scanner: void 0,
                Context: void 0,
                Writer: void 0,
                set templateCache(e) {
                    R.templateCache = e
                },
                get templateCache() {
                    return R.templateCache
                }
            },
            R = new N;
        O.clearCache = function() {
            return R.clearCache()
        }, O.parse = function(e, t) {
            return R.parse(e, t)
        }, O.render = function(e, t, i, s) {
            if ("string" != typeof e) throw new TypeError('Invalid template! Template should be a "string" but "' + (E(n = e) ? "array" : typeof n) + '" was given as the first argument for mustache#render(template, view, partials)');
            var n;
            return R.render(e, t, i, s)
        }, O.escape = function(e) {
            return String(e).replace(/[&<>"'`=\/]/g, (function(e) {
                return T[e]
            }))
        }, O.Scanner = M, O.Context = D, O.Writer = N;
        const L = "standard",
            $ = "custom",
            V = "url_param",
            U = "marketo",
            W = "salesforce",
            z = "firmographic",
            j = "6sense",
            B = "googleAds",
            G = "demandbase",
            H = [L, $, V, U, W, z, j, B, G];

        function Q(e) {
            return "object" == typeof e && e instanceof Error ? e : new Error(e)
        }

        function q() {
            return function(e) {
                let t = Date.now();
                return e.replace(/[xy]/g, (e => {
                    const i = Math.trunc((t + 16 * Math.random()) % 16);
                    return t = Math.floor(t / 16), ("x" === e ? i : 3 & i | 8).toString(16)
                }))
            }("xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx")
        }
        class K {
            constructor(e, t) {
                o(this, "storage"), o(this, "namespace"), this.storage = e, this.namespace = t
            }
            static get delimiter() {
                return "."
            }
            write(e, t) {
                this.storage.write(this.getFullKey(e), t)
            }
            read(e) {
                return this.storage.read(this.getFullKey(e))
            }
            delete(e) {
                this.storage.delete(this.getFullKey(e))
            }
            getFullKey(e) {
                return `${this.namespace}${K.delimiter}${e}`
            }
        }
        class Y {
            constructor(e, t) {
                o(this, "logger"), o(this, "namespace"), this.logger = e, this.namespace = t
            }
            getLevel() {
                return this.logger.getLevel()
            }
            error(e, t, i) {
                this.logger.error(this.getFullMessage(e), t, i)
            }
            warn(e, t, i) {
                this.logger.warn(this.getFullMessage(e), t, i)
            }
            info(e, t, i) {
                this.logger.info(this.getFullMessage(e), t, i)
            }
            debug(e, t, i) {
                this.logger.debug(this.getFullMessage(e), t, i)
            }
            group(e) {
                this.logger.group(this.getFullMessage(e))
            }
            groupEnd() {
                this.logger.groupEnd()
            }
            time(e) {
                this.logger.time(this.getFullMessage(e))
            }
            timeEnd(e) {
                this.logger.timeEnd(this.getFullMessage(e))
            }
            getFullMessage(e) {
                return `[${this.namespace}]: ${e}`
            }
        }
        e.ATTRIBUTE_NAMESPACES = H, e.ATTRIBUTE_NAMESPACE_CUSTOM = $, e.ATTRIBUTE_NAMESPACE_DEMANDBASE = G, e.ATTRIBUTE_NAMESPACE_FIRMOGRAPHIC = z, e.ATTRIBUTE_NAMESPACE_GOOGLE_ADS = B, e.ATTRIBUTE_NAMESPACE_MARKETO = U, e.ATTRIBUTE_NAMESPACE_SALESFORCE = W, e.ATTRIBUTE_NAMESPACE_SIXSENSE = j, e.ATTRIBUTE_NAMESPACE_STANDARD = L, e.ATTRIBUTE_NAMESPACE_URL_PARAM = V, e.Extension = class {
            constructor(e) {
                o(this, "config"), this.config = e
            }
            getName() {
                return this.config.name
            }
            getDescription() {
                return this.config.description
            }
            getLabel() {
                return this.config.label
            }
            getIconImgSrc() {
                return g.ofNullable(this.config.iconImageSrc)
            }
            getCss() {
                return g.ofNullable(this.config.css)
            }
            getDom() {
                return void 0 === this.config.dom ? g.empty() : g.of({
                    html: this.config.dom.html,
                    targetPosition: g.ofNullable(this.config.dom.targetPosition)
                })
            }
            getFields() {
                return this.config.fields
            }
            getViewData(e, t) {
                var i, s;
                return null == (s = (i = this.config).viewDataFn) ? void 0 : s.call(i, e, t)
            }
            getRunFn() {
                var e;
                return g.ofNullable(null == (e = this.config.code) ? void 0 : e.run)
            }
            getResetFn() {
                var e;
                return g.ofNullable(null == (e = this.config.code) ? void 0 : e.reset)
            }
        }, e.ExtensionExecutor = class {
            constructor(e, t, i, s = q()) {
                let n;
                o(this, "extension"), o(this, "runtime"), o(this, "extensionStorage"), o(this, "extensionLogger"), o(this, "config"), o(this, "styleElementId"), o(this, "instanceId"), o(this, "targetPositionTuple"), o(this, "viewData"), e.getDom().ifPresent((e => {
                    ! function(e, t) {
                        if (l(e), !e) throw new c(t)
                    }(e.targetPosition.isPresent() || void 0 !== i.targetPosition, "ExtensionExecutor expects a TargetPosition for extensions that use HTML"), void 0 === i.targetPosition ? (t.logger.debug("Using TargetPosition from Extension config"), n = [e.html, e.targetPosition.get()]) : (t.logger.debug("Using TargetPosition from Executor config"), n = [e.html, i.targetPosition])
                })), this.targetPositionTuple = n, this.extension = e, this.runtime = t, this.extensionStorage = new K(t.storage, e.getName()), this.extensionLogger = new Y(t.logger, `Extension: ${e.getName()}`), this.config = i, this.instanceId = s, this.styleElementId = `extension-${e.getName()}`, this.viewData = this.extension.getViewData(this.fieldData, this.runtime)
            }
            get fieldData() {
                const e = ((e, t) => {
                    for (var o in t || (t = {})) s.call(t, o) && r(e, o, t[o]);
                    if (i)
                        for (var o of i(t)) n.call(t, o) && r(e, o, t[o]);
                    return e
                })({}, this.config.fieldData);
                return this.extension.getFields().forEach((t => {
                    "defaultValue" in t && void 0 === e[t.name] && (e[t.name] = t.defaultValue)
                })), e
            }
            run(e) {
                this.runtime.logger.debug(`ExtensionExecutor(${this.extension.getName()}): Calling run()`), this.injectCss(), this.insertElement((() => {
                    this.runCode(), void 0 !== e && e()
                }))
            }
            reset() {
                this.runtime.logger.debug(`ExtensionExecutor(${this.extension.getName()}): Calling reset()`), this.resetCode(), this.removeElement(), this.removeCss()
            }
            getTargetPosition() {
                return this.getTargetPositionTuple().isPresent() ? g.of(this.getTargetPositionTuple().get()[1]) : g.empty()
            }
            getTargetElement() {
                if (this.getTargetPosition().isPresent()) {
                    const {
                        selector: e
                    } = this.getTargetPosition().get(), t = this.runtime.localWindow.document.querySelectorAll(e);
                    return t.length > 1 && this.runtime.logger.error(`Expected exactly one target element; found ${t.length} elements matching selector "${e}"`, 7e3), g.ofNullable(t[0])
                }
                return g.empty()
            }
            injectCss() {
                this.extension.getCss().ifPresent((e => {
                    this.runtime.logger.debug(`ExtensionExecutor(${this.extension.getName()}): Injecting CSS`), this.runtime.injectCss(e, this.styleElementId)
                }))
            }
            insertElement(e) {
                this.getTargetPositionTuple().ifPresent((t => {
                    const [, {
                        selector: i
                    }] = t;
                    this.getTargetElement().ifPresent((s => {
                        this.runtime.logger.debug(`ExtensionExecutor(${this.extension.getName()}): Inserting Extension HTML at "${i}" ${JSON.stringify(this.fieldData,void 0,2)}`);
                        try {
                            this.insertElementAtTarget(t, s)
                        } catch (n) {
                            const e = Q(n);
                            this.runtime.logger.error(e, 7001)
                        }
                        e()
                    })).ifAbsent((() => {
                        this.runtime.logger.error(`ExtensionExecutor(${this.extension.getName()}): Could not find a TargetElement for selector ${i}`, 7002), e()
                    }))
                })).ifAbsent((() => {
                    e()
                }))
            }
            insertElementAtTarget(e, t) {
                const [i, {
                    insertPosition: s
                }] = e, n = O.render(i, {
                    extension: {
                        fieldData: this.fieldData,
                        viewData: this.viewData
                    }
                }), r = this.createElement(n);
                t.insertAdjacentElement(s, r)
            }
            runCode() {
                this.extension.getRunFn().ifPresent((e => {
                    e(this.getContext())
                }))
            }
            resetCode() {
                this.extension.getResetFn().ifPresent((e => {
                    e(this.getContext())
                }))
            }
            removeElement() {
                this.getTargetPositionTuple().isPresent() && Array.prototype.forEach.call(this.getElements(), (e => {
                    e.remove()
                }))
            }
            removeCss() {
                this.extension.getCss().isPresent() && this.runtime.removeCss(this.styleElementId)
            }
            getTargetPositionTuple() {
                return g.ofNullable(this.targetPositionTuple)
            }
            getElements() {
                return this.getTargetPositionTuple().isPresent() ? [...this.runtime.localWindow.document.querySelectorAll(`[data-${b}="${this.instanceId}"]`)] : []
            }
            getContext() {
                return {
                    fieldData: this.fieldData,
                    localWindow: this.runtime.localWindow,
                    logger: this.extensionLogger,
                    storage: this.extensionStorage
                }
            }
            createElement(e) {
                const t = function(e, t) {
                    const i = t.createElement("template");
                    return i.innerHTML = e.trim(), [...i.content.childNodes]
                }(e, this.runtime.localWindow.document);
                if (1 !== t.length) throw new Error(`Unable to create a single DOM Node from the extension HTML for "${this.extension.getName()}"`);
                const [i] = t;
                if (!(i instanceof HTMLElement)) throw new TypeError(`The root Node of the tree constructed from the extension HTML for "${this.extension.getName()}" is not an instance of an Element`);
                return i.setAttribute(`data-${b}`, this.instanceId), i
            }
        }, e.exceptionToError = Q
    }(_n);
    class yn extends Ys {
        constructor(e, t, i, s, n, r, o) {
            super(t, i, s, n), __publicField(this, "insertExtensionChange"), __publicField(this, "extensionManager"), __publicField(this, "runtime"), __publicField(this, "_executor"), this.insertExtensionChange = e, this.extensionManager = o;
            const a = n.getWindow();
            this.runtime = {
                localWindow: a,
                logger: fs,
                storage: r,
                injectCss(e, t) {
                    ks.injectCss(e, t, a.document)
                },
                removeCss(e) {
                    ks.removeCss(e, a.document)
                }
            }
        }
        isReadyToApply() {
            return !this.getExecutor().getTargetPosition().isPresent() || this.getExecutor().getTargetElement().isPresent()
        }
        apply(e, t) {
            fs.group("EnhancedExtensionChange.apply()"), fs.debug(`Applying change: ${Ie(this.insertExtensionChange)}`), this.getExecutor().getTargetPosition().ifPresent((({
                selector: i
            }) => {
                t.registerSelectorAndExecute(i, (() => {
                    this.getExecutor().run(e)
                }), {
                    shouldReapply: this.shouldReapply.bind(this)
                }, this.getEntityIds())
            })), fs.groupEnd()
        }
        undo() {
            fs.group("EnhancedExtensionChange.undo()"), fs.debug(`Undoing change: ${Ie(this.insertExtensionChange)}`), this.getExecutor().reset(), fs.groupEnd()
        }
        getSelector() {
            return j.empty()
        }
        shouldReapply() {
            return !this.getExecutor().getTargetPosition().isPresent() || !this.getExecutor().getTargetElement().isPresent()
        }
        getExecutor() {
            if (void 0 === this._executor) {
                const e = this.extensionManager.getExtension(this.insertExtensionChange.getName());
                if (!e.isPresent()) throw new Error(`Could not find extension: ${this.insertExtensionChange.getName()}`);
                this._executor = new _n.ExtensionExecutor(e.get(), this.runtime, this.insertExtensionChange.getExecutorJson(), this.insertExtensionChange.getId().map((e => e)).orElse(void 0))
            }
            return this._executor
        }
    }
    class Sn extends Ys {
        constructor(e, t, i, s, n) {
            super(t, i, s, n), __publicField(this, "insertElementChange"), this.insertElementChange = e
        }
        isReadyToApply() {
            return this.insertElementChange.isReadyToApply(this.localDocument)
        }
        apply(e, t) {
            fs.group("EnhancedInsertElementChange.apply()"), fs.debug(`Applying change: ${Ie(this.insertElementChange)}`);
            const i = this.createInsertionElement();
            t.registerSelectorAndExecute(this.insertElementChange.getTargetPosition().selector, (() => {
                this.insertElement(i, e)
            }), {
                shouldReapply: this.shouldReapply.bind(this)
            }, this.getEntityIds()), fs.groupEnd()
        }
        undo() {
            fs.group("EnhancedInsertElementChange.undo()"), fs.debug(`Undoing change: ${Ie(this.insertElementChange)}`), this.insertElementChange.getId().ifPresent((e => {
                const t = nn(e);
                1 === t.length ? t[0].remove() : fs.warn(`Unexpected error when undoing insertElementChange. Auto-generated attribute\n        selector expected 1 element match but found ${t.length}`, 191, this.getEntityIds())
            })), fs.groupEnd()
        }
        getSelector() {
            return j.empty()
        }
        insertElement(e, t) {
            this.removeExistingElements(), this.insertElementChange.getTargetElement(this.localDocument).ifPresent((i => {
                i.insertAdjacentElement(this.insertElementChange.getTargetPosition().insertPosition, e), t()
            })).ifAbsent((() => {
                throw new Error("Unexpected error: targetElement not found")
            })), this.insertElementChange.getId().ifPresent((t => {
                Xs(e, t, {
                    value: this.insertElementChange.getElementType(),
                    type: et.INSERT_ELEMENT
                }), rn(e, t)
            }))
        }
        getInsertedElements() {
            return document.querySelectorAll(`#${this.insertElementChange.getIdAttribute()}`)
        }
        removeExistingElements() {
            const e = this.getInsertedElements();
            Array.prototype.forEach.call(e, (e => {
                e.remove()
            }))
        }
        createInsertionElement() {
            let e;
            if (this.insertElementChange instanceof Vt) e = `h${this.insertElementChange.getSize()}`;
            else switch (this.insertElementChange.getElementType()) {
                case "image":
                    e = "img";
                    break;
                case "video":
                    e = "video";
                    break;
                default:
                    e = "div"
            }
            const t = document.createElement(e);
            return t.id = this.insertElementChange.getIdAttribute(), t
        }
        shouldReapply() {
            return 0 === this.getInsertedElements().length
        }
    }
    const In = class extends Ys {
        constructor(e, t, i, s, n) {
            super(t, i, s, n), __publicField(this, "moveElementChange"), __publicField(this, "hasLoggedMutationWarning", !1), this.moveElementChange = e
        }
        static createAndInsertPlaceholderElement(e) {
            const t = document.createElement("imizeplaceholder");
            return t.style.display = "none", t.hidden = !0, e.after(t), t
        }
        isReadyToApply() {
            return this.moveElementChange.isReadyToApply(this.localDocument)
        }
        apply(e, t) {
            fs.group("EnhancedMoveElementChange.apply()"), fs.debug(`Applying change: ${Ie(this.moveElementChange)}`), t.registerSelectorAndExecute(this.moveElementChange.getSelector(), (() => {}), {
                shouldReapply: this.shouldReapply.bind(this)
            }, this.getEntityIds()), this.moveElement(e), fs.groupEnd()
        }
        undo() {
            fs.group("EnhancedMoveElementChange.undo()"), fs.debug(`Undoing change: ${Ie(this.moveElementChange)}`), this.moveElementChange.getId().ifPresent((e => {
                const t = nn(e);
                if (1 === t.length) {
                    const i = t[0];
                    Zs(i, e).ifPresent((({
                        value: e
                    }) => {
                        null !== e.parentElement && e.parentElement.replaceChild(i, e)
                    })).ifAbsent((() => {
                        fs.warn(`Unexpected error when undoing moveElementChange. getChangeData(${e}): could not find data`, 195, this.getEntityIds())
                    })), on(i, e), en(i, e), i.removeAttribute(In.MOVE_ELEMENT_DATA_ATTRIBUTE_NAME)
                } else fs.warn(`Unexpected error when undoing moveElementChange. Auto-generated attribute\n        selector expected 1 element match but found ${t.length}`, 196, this.getEntityIds())
            })), fs.groupEnd()
        }
        getSelector() {
            return j.of(this.moveElementChange.getSelector())
        }
        getMovedElement() {
            const e = document.querySelectorAll(`[${In.MOVE_ELEMENT_DATA_ATTRIBUTE_NAME}="${this.moveElementChange.getMoveId()}"]`);
            return 1 === e.length ? j.ofNullable(e[0]) : j.empty()
        }
        shouldReapply() {
            return this.hasLoggedMutationWarning || (this.getMovedElement().ifPresent((() => {
                fs.warn("[EnhancedMoveElementChange]: A mutation was observed for a move element change, however the moved element appears to still exists on the page", 225, this.getEntityIds())
            })).ifAbsent((() => {
                fs.warn("[EnhancedMoveElementChange]: A mutation was observed for a move element change and the moved element could not be found on the page.", 226, this.getEntityIds())
            })), this.hasLoggedMutationWarning = !0), !1
        }
        moveElement(e) {
            try {
                this.moveElementChange.getSelectorElement(this.localDocument).ifPresent((e => {
                    this.moveElementChange.getTargetElement(this.localDocument).ifPresent((t => {
                        if (e.contains(t)) throw new Error("The target element cannot be a child of the selector element");
                        this.moveElementChange.getId().ifPresent((t => {
                            rn(e, t);
                            const i = In.createAndInsertPlaceholderElement(e);
                            Xs(e, t, {
                                value: i,
                                type: et.MOVE_ELEMENT
                            })
                        })), t.insertAdjacentElement(this.moveElementChange.getTargetPosition().insertPosition, e), e.setAttribute(In.MOVE_ELEMENT_DATA_ATTRIBUTE_NAME, this.moveElementChange.getMoveId())
                    })).ifAbsent((() => {
                        throw new Error("Unexpected error: target element could not be found)")
                    }))
                })).ifAbsent((() => {
                    throw new Error("Unexpected error: selector element could not be found)")
                }))
            } finally {
                e()
            }
        }
    };
    let wn = In;
    __publicField(wn, "MOVE_ELEMENT_DATA_ATTRIBUTE_NAME", `data-${ls}`);
    const Cn = "data-wf-",
        Tn = `${Cn}experience-`,
        xn = `${Cn}variation-`,
        An = `${Cn}hidden-variation`,
        Fn = "data-intellimize-var-";
    class kn extends Ys {
        constructor(e, t, i, s, n) {
            super(t, i, s, n), __publicField(this, "webflowChange"), __publicField(this, "experienceId"), __publicField(this, "variationId"), __publicField(this, "selector"), this.webflowChange = e;
            const r = t.getEntityIds();
            this.experienceId = N(r.experienceId, "experienceId must be defined"), this.variationId = N(r.variationId, "variationId must be defined"), R(this.getSelector().isPresent(), "getSelector should always return a selector"), this.selector = this.getSelector().get()
        }
        isReadyToApply() {
            return this.localDocument.querySelectorAll("body").length > 0
        }
        apply(e, t) {
            fs.group("EnhancedWebflowChange.apply()"), fs.debug(`Applying change: ${Ie(this.webflowChange)} - ${this.selector}`), t.registerSelectorAndExecute("body", (() => {
                this.localDocument.querySelectorAll(`[${this.getWebflowExperienceAttribute()}]`).forEach((e => {
                    e.setAttribute(An, "")
                })), this.localDocument.querySelectorAll(`[${this.getWebflowVariationAttribute()}]`).forEach((e => {
                    e.removeAttribute(An)
                })), this.environment.getWindow().document.body.setAttribute(this.getIntellimizeVisibleVariationAttribute(), ""), e()
            }), {
                shouldReapply: () => this.shouldReapply()
            }, this.getEntityIds()), fs.groupEnd()
        }
        undo() {}
        getSelector() {
            return j.of(`[${Tn}${this.experienceId}]`)
        }
        getWebflowExperienceAttribute() {
            return `${Tn}${this.experienceId}`
        }
        getWebflowVariationAttribute() {
            return `${xn}${this.variationId}`
        }
        getIntellimizeVisibleVariationAttribute() {
            return `${Fn}${this.variationId}`
        }
        shouldReapply() {
            const {
                body: e
            } = this.environment.getWindow().document;
            for (const t of this.localDocument.querySelectorAll(`[${this.getWebflowExperienceAttribute()}]`)) {
                const i = t.hasAttribute(this.getWebflowVariationAttribute());
                if (fs.debug(`CHECKING SHOULDREAPPLY: ${i}, ${t.hasAttribute(An)}, ${e.hasAttribute(this.getIntellimizeVisibleVariationAttribute())}, ${t.outerHTML}`), !i && !t.hasAttribute(An)) return fs.debug(`shouldReapply(): YES (The [${An}] attribute is missing from a non-selected variation)`), !0;
                if (i && t.hasAttribute(An)) return fs.debug(`shouldReapply(): YES (The [${An}] attribute is present on the selected variation)`), !0
            }
            return e.hasAttribute(this.getIntellimizeVisibleVariationAttribute()) ? (fs.debug("shouldReapply(): NO (All data attributes are as expected)"), !1) : (fs.debug(`shouldReapply(): YES (The [${Fn}${this.variationId}] attribute is missing from the body)`), !0)
        }
    }

    function Pn(e, t, i, s, n, r, o) {
        switch (e.getType()) {
            case et.ATTRIBUTE:
            case et.EXTENSION_ATTRIBUTE:
                return new pn(e, t, i, s, n);
            case et.CUSTOM_CODE:
                return new En(e, t, i, s, n);
            case et.INSERT_ELEMENT:
                return new Sn(e, t, i, s, n);
            case et.EXTENSION:
                return new yn(e, t, i, s, n, r, o);
            case et.MOVE_ELEMENT:
                return new wn(e, t, i, s, n);
            case et.WEBFLOW:
                return new kn(e, t, i, s, n);
            default:
                throw new Error(`Unknown DomChangeType: ${e.getType()}`)
        }
    }
    class Mn {
        constructor() {
            __publicField(this, "state", 0), this.state = 0
        }
        markHiddenIfUnknown() {
            0 === this.state && (this.state = 1)
        }
        markRevealed() {
            this.state = 2
        }
        isHidden() {
            return 1 === this.state
        }
        isRevealed() {
            return 2 === this.state
        }
    }
    class Dn extends Mn {
        constructor(e, t, i, s, n) {
            super(), __publicField(this, "experience"), __publicField(this, "environment"), __publicField(this, "extensionManager"), __publicField(this, "browserStorage"), __publicField(this, "attributeData"), this.experience = e, this.environment = t, this.extensionManager = i, this.browserStorage = s, this.attributeData = n
        }
        static getId(e) {
            return `exp-${e.getId()}`
        }
        getId() {
            return Dn.getId(this.experience)
        }
        getSelectors() {
            let e = !1;
            const t = {},
                i = this.experience.getBoundingSelectors();
            return this.experience.getRealVariations().forEach((i => {
                i.isTypeChange() ? i.getChanges().forEach(((s, n) => {
                    Pn(s, un(i), n, this.attributeData, this.environment, this.browserStorage, this.extensionManager).getSelector().ifPresent((e => {
                        t[e] = !0
                    })), s.getType() === et.CUSTOM_CODE && (e = !0)
                })) : i.isRedirect() ? t.body = !0 : e = !0
            })), e && i.forEach((e => {
                t[e] = !0
            })), Object.keys(t)
        }
        getEntityIds() {
            return {
                experienceId: this.experience.getId()
            }
        }
    }
    class Nn extends Mn {
        constructor(e, t, i, s, n) {
            super(), __publicField(this, "page"), __publicField(this, "environment"), __publicField(this, "extensionManager"), __publicField(this, "browserStorage"), __publicField(this, "attributeData"), this.page = e, this.environment = t, this.extensionManager = i, this.browserStorage = s, this.attributeData = n
        }
        static getId(e) {
            return `page-${e.getId()}`
        }
        getId() {
            return Nn.getId(this.page)
        }
        getSelectors() {
            const e = {};
            return this.page.getChanges().forEach(((t, i) => {
                Pn(t, dn(this.page), i, this.attributeData, this.environment, this.browserStorage, this.extensionManager).getSelector().ifPresent((t => {
                    e[t] = !0
                }))
            })), Object.keys(e)
        }
        getEntityIds() {
            return {
                pageId: this.page.getId()
            }
        }
    }
    class On {
        constructor(e, t) {
            __publicField(this, "environment"), __publicField(this, "extensionManager"), __publicField(this, "regions", {}), this.environment = e, this.extensionManager = t
        }
        registerExperience(e, t, i) {
            const s = Dn.getId(e);
            return void 0 === this.regions[s] && (this.regions[s] = new Dn(e, this.environment, this.extensionManager, t, i)), this.regions[s]
        }
        registerPage(e, t, i) {
            const s = Nn.getId(e);
            return void 0 === this.regions[s] && (this.regions[s] = new Nn(e, this.environment, this.extensionManager, t, i)), this.regions[s]
        }
        getAll() {
            return Object.values(this.regions)
        }
    }
    const Rn = class {
        constructor(e, t, i = !1) {
            __publicField(this, "localWindow"), __publicField(this, "skipRegionHiding"), __publicField(this, "regionRegistry"), __publicField(this, "experienceRegionsHidden", !1), __publicField(this, "pageRegionsHidden", !1), this.localWindow = e.getWindow(), this.skipRegionHiding = i, this.regionRegistry = new On(e, t)
        }
        static revealAll(e) {
            Rn._revealDocument(e), Rn._revealAllRegions(e)
        }
        static get ANTI_FLICKER_CLASS_NAME() {
            return "anti-flicker"
        }
        static get REGION_TIMEOUT_MS() {
            return 3e3
        }
        static get RENDERING_ATTRIBUTE_NAME() {
            return `${Rn.ATTRIBUTE_NAME_PREFIX}rendering`
        }
        static getRegionAttribute(e) {
            return `${Rn.ATTRIBUTE_NAME_PREFIX}${e.getId()}`
        }
        static _revealDocument(e) {
            fs.debug(`Hider.revealDocument() - before:${e.documentElement.className}`), e.documentElement.className = e.documentElement.className.replace(new RegExp(` ?${Rn.ANTI_FLICKER_CLASS_NAME}`, "g"), ""), fs.debug(`Hider.revealDocument() - after:${e.documentElement.className}`)
        }
        static _revealAllRegions(e) {
            fs.info(`Removing ${Rn.RENDERING_ATTRIBUTE_NAME} attribute`), e.documentElement.removeAttribute(Rn.RENDERING_ATTRIBUTE_NAME)
        }
        revealDocument() {
            Rn._revealDocument(this.localWindow.document)
        }
        revealDocumentIfAllRegionsHidden() {
            this.experienceRegionsHidden && this.pageRegionsHidden && this.revealDocument()
        }
        startTimedRegionHider() {
            fs.debug("Hider.startTimedRegionHider()"), this.localWindow.document.documentElement.setAttribute(Rn.RENDERING_ATTRIBUTE_NAME, "true"), this.localWindow.setTimeout((() => {
                Rn._revealAllRegions(this.localWindow.document), this.regionRegistry.getAll().forEach((e => {
                    e.isHidden() && fs.warn(`Region (${e.getId()}) was hidden at timeout`, 209, e.getEntityIds())
                }))
            }), Rn.REGION_TIMEOUT_MS)
        }
        hideExperiences(e, t, i) {
            for (const s of e) fs.debug(`Hider - hide experience ${s.getId()}`), this.regionRegistry.registerExperience(s, t, i);
            this.setRegionHidingCss(), this.experienceRegionsHidden = !0
        }
        hidePages(e, t, i) {
            for (const s of e) fs.debug(`Hider - hide page ${s.getId()}`), this.regionRegistry.registerPage(s, t, i);
            this.setRegionHidingCss(), this.pageRegionsHidden = !0
        }
        revealExperience(e, t, i) {
            fs.debug(`Hider - reveal experience ${e.getId()}`), this.revealRegion(this.regionRegistry.registerExperience(e, t, i)), this.revealAllIfExperienceRegionsVisible()
        }
        revealPage(e, t, i) {
            fs.debug(`Hider - reveal page ${e.getId()}`), this.revealRegion(this.regionRegistry.registerPage(e, t, i))
        }
        revealAllIfExperienceRegionsVisible() {
            this.regionRegistry.getAll().every((e => e.isRevealed())) && Rn.revealAll(this.localWindow.document)
        }
        revealRegion(e) {
            const t = e.getSelectors();
            if (t.length > 0) {
                const i = this.localWindow.document.querySelectorAll(t.join(", "));
                Array.prototype.forEach.call(i, (t => {
                    t.setAttribute(`${Rn.getRegionAttribute(e)}`, "true")
                }))
            }
            e.markRevealed()
        }
        setRegionHidingCss() {
            if (this.skipRegionHiding) return;
            const e = [];
            this.regionRegistry.getAll().forEach((t => {
                t.getSelectors().forEach((i => {
                    const s = `html[${Rn.RENDERING_ATTRIBUTE_NAME}] ${i}:not([${Rn.getRegionAttribute(t)}])`;
                    e.push(s, `${s} *`)
                }))
            }));
            const t = e.length > 0 ? `${e.join(", ")} { visibility: hidden !important; opacity: 0 !important; }` : "";
            ks.injectCss(t, "anti-flicker-regions", this.localWindow.document), this.regionRegistry.getAll().forEach((e => {
                e.markHiddenIfUnknown()
            }))
        }
    };
    let Ln = Rn;
    __publicField(Ln, "ATTRIBUTE_NAME_PREFIX", "data-intellimize-anti-flicker-");
    const $n = 2,
        Vn = 1,
        Un = Vn,
        Wn = class {
            constructor() {
                __publicField(this, "mutationObserver"), __publicField(this, "mutationHandlers", {}), __publicField(this, "currentUrl"), this.mutationObserver = new MutationObserver((e => {
                    if (Object.keys(this.mutationHandlers).length > 0) {
                        if (Ds.group("MutationObserver.observe() - window.location.href: " + window.location.href), this.currentUrl || (this.currentUrl = window.location.href), this.currentUrl !== window.location.href) return Ds.debug("MutationObserver skip processing since URL changed"), void Ds.groupEnd();
                        Wn.containsValidMutations(e) ? (Ds.debug("mutationList contains at least one valid mutation; processing store"), this.processStore()) : Ds.debug("mutationList contains no valid mutations; skipping store processing"), Ds.groupEnd()
                    }
                })), this.reset()
            }
            static get CALLBACK_MAX_COUNT() {
                return 25
            }
            static get MISSING_ELEMENT_MAX_COUNT() {
                return 5
            }
            static get CALLBACK_THROTTLE_MS() {
                return 50
            }
            static selectorExists(e) {
                try {
                    return Boolean(document.querySelector(e))
                } catch (t) {
                    return !1
                }
            }
            static isProcessed(e, t) {
                var i, s, n, r;
                switch (Un) {
                    case Vn:
                        return "string" == typeof(null == (i = e.imizeObserverProcessed) ? void 0 : i[t]) || !0 === (null == (s = e.imizeObserverProcessed) ? void 0 : s[t]) ? (Ds.debug('isProcessed (OPT_CHECK_BOOL): imizeObserverProcessed is "true"'), !0) : (Ds.debug('isProcessed (OPT_CHECK_BOOL): imizeObserverProcessed is NOT "true"'), !1);
                    case $n:
                        return "string" == typeof(null == (n = e.imizeObserverProcessed) ? void 0 : n[t]) || !0 === (null == (r = e.imizeObserverProcessed) ? void 0 : r[t]) ? e.imizeObserverProcessed[t] === e.outerHTML ? (Ds.debug("isProcessed (OPT_COMPARE_HTML): imizeObserverProcessed outerHTML matches"), !0) : (Ds.debug("isProcessed (OPT_COMPARE_HTML): imizeObserverProcessed outerHTML DOES NOT match"), Ds.debug(`outerHTML: ${e.outerHTML}`), Ds.debug(`imizeObserverProcessed: ${e.imizeObserverProcessed[t]}`), e.imizeObserverProcessed[t] = !1, !1) : (Ds.debug("isProcessed (OPT_COMPARE_HTML): imizeObserverProcessed does not exist on the element"), !1);
                    default:
                        return Ds.debug("isProcessed (OPT_ALWAYS_CALLBACK): skipping check"), !1
                }
            }
            static setIsProcessed(e, t) {
                switch (void 0 === e.imizeObserverProcessed && (e.imizeObserverProcessed = {}), Un) {
                    case Vn:
                        e.imizeObserverProcessed[t] = !0;
                        break;
                    case $n:
                        e.imizeObserverProcessed[t] = e.outerHTML
                }
            }
            static isValidNodeNameMutation(e) {
                var t;
                if (Wn.INVALID_NODE_NAMES.includes(e.target.nodeName)) return Ds.debug(`Invalid mutation - Node is one of ${Ie(Wn.INVALID_NODE_NAMES)}`), !1;
                if (!0 === (null == (t = e.attributeName) ? void 0 : t.startsWith(Ln.ATTRIBUTE_NAME_PREFIX))) return !1;
                if ("childList" === e.type) {
                    if (Array.prototype.every.call([...Array.prototype.slice.call(e.addedNodes), ...Array.prototype.slice.call(e.removedNodes)], (e => Wn.INVALID_NODE_NAMES.includes(e.nodeName)))) return Ds.debug("Invalid mutation - All nodes in child list contain one of " + Ie(Wn.INVALID_NODE_NAMES)), !1
                }
                return !0
            }
            static isUnchangedAttributeMutation(e) {
                const {
                    target: t,
                    type: i,
                    attributeName: s,
                    oldValue: n
                } = e;
                if (t instanceof HTMLElement && "attributes" === i && s) {
                    const e = t.attributes.getNamedItem(s);
                    if (null !== e && e.value === n) return Ds.debug(`Invalid mutation - value for attribute "${s}" hasn't changed (value: "${n}")`), !0
                }
                return !1
            }
            static isStatusModuleNode(e) {
                const t = "intellimize____status-module-root";
                return e instanceof HTMLElement && (e.id === t ? (Ds.debug("Invalid mutation - Node is part of the status module"), !0) : null !== e.parentNode && Wn.isStatusModuleNode(e.parentNode))
            }
            static containsValidMutations(e) {
                Ds.group("containsValidMutations()");
                const t = e.every((e => (Ds.debug(`Mutation: ${Te(e)}`), !(Wn.isValidNodeNameMutation(e) && !Wn.isUnchangedAttributeMutation(e) && !Wn.isStatusModuleNode(e.target)) || (Ds.debug("Found valid mutation"), !1))));
                return Ds.groupEnd(), !t
            }
            registerSelectorAndExecute(e, t, i, s) {
                if (!Wn.selectorExists(e)) throw new Error(`Selector "${e}" does not exist in the DOM`);
                const n = mn();
                this.mutationHandlers[n] = {
                    selector: e,
                    callback: t,
                    options: i,
                    startTime: new Date,
                    mutationCnt: 0,
                    missingElementCnt: 0,
                    entityIds: s
                }, Ds.group(`registerSelectorAndExecute(${n})`), Ds.debug("Manually calling handleObservation()"), this.detachObserver(), this.handleObservation(n, !1), this.attachObserver(), Ds.groupEnd()
            }
            attachObserver() {
                Ds.debug("Attaching observer to document"), this.mutationObserver.observe(document.documentElement, Wn.observerOpts)
            }
            detachObserver() {
                Ds.debug("Detaching observer from document"), this.mutationObserver.disconnect()
            }
            reset() {
                Ds.debug("Resetting ElementObserver state"), this.mutationHandlers = {}, this.currentUrl = void 0, this.detachObserver()
            }
            processStore() {
                Ds.group("ReapplyElementObserver.processStore()"), Ds.debug(`mutationHandlers: ${Ie(this.mutationHandlers)}`), this.detachObserver(), Object.keys(this.mutationHandlers).forEach((e => {
                    this.handleObservation(e, !0)
                })), this.attachObserver(), Ds.groupEnd()
            }
            handleObservation(e, t) {
                const i = this.mutationHandlers[e];
                if (Ds.group(`handleObservation(${e})`), t && i.options.observationTimeMs && Date.now() - i.startTime.getTime() > i.options.observationTimeMs) return 0 === i.mutationCnt ? void 0 !== i.options.onTimeout && (fs.error(`MutationHandler timed out for ${i.selector}. observationTimeMs (${i.options.observationTimeMs}) has passed.`, 140, i.entityIds), i.options.onTimeout()) : fs.warn(`Observation cancelled for ${i.selector}. observationTimeMs (${i.options.observationTimeMs}) has passed.`, 141, i.entityIds), this.cancelObservation(e), void Ds.groupEnd();
                if (i.mutationCnt >= Wn.CALLBACK_MAX_COUNT) return Ds.debug(`Reached CALLBACK_MAX_COUNT (${Wn.CALLBACK_MAX_COUNT})`), this.cancelObservation(e), void Ds.groupEnd();
                if (void 0 !== i.lastCallbackTime) {
                    const e = Date.now() - i.lastCallbackTime.getTime();
                    if (e < Wn.CALLBACK_THROTTLE_MS) return Ds.debug(`Throttling callback (${Wn.CALLBACK_THROTTLE_MS}ms). Only (${e})ms have elapsed`), void Ds.groupEnd()
                }
                const s = document.querySelectorAll(i.selector);
                if (Ds.debug(`Found ${s.length} matching elements`), s.length > 0) {
                    const n = t => !Wn.isProcessed(t, e) || void 0 !== i.options.shouldReapply && i.options.shouldReapply(t);
                    Array.prototype.forEach.call(s, (s => {
                        if (Ds.debug(`Processing element: ${xe(s)}`), !t || n(s)) {
                            Ds.debug("isProcessed: false");
                            let n = "Triggering callback for element";
                            t && (i.mutationCnt += 1, i.lastCallbackTime = new Date, n += ` (mutationCnt: ${i.mutationCnt})`), Ds.debug(n), i.callback(s), Wn.setIsProcessed(s, e), i.options.once && this.cancelObservation(e)
                        } else Ds.debug("isProcessed: true (skipping)")
                    }))
                } else fs.warn(`Could not find any matching elements for ${i.selector}`, 139, i.entityIds), i.missingElementCnt += 1, i.missingElementCnt >= Wn.MISSING_ELEMENT_MAX_COUNT && (Ds.debug(`Reached MISSING_ELEMENT_MAX_COUNT (${Wn.MISSING_ELEMENT_MAX_COUNT})`), this.cancelObservation(e));
                Ds.groupEnd()
            }
            cancelObservation(e) {
                delete this.mutationHandlers[e]
            }
        };
    let zn = Wn;
    __publicField(zn, "INVALID_NODE_NAMES", ["HTML", "SCRIPT", "LINK", "STYLE", "HEAD", "IFRAME", "TITLE", "META"]), __publicField(zn, "observerOpts", {
        subtree: !0,
        childList: !0,
        attributes: !0,
        characterData: !0,
        attributeOldValue: !0,
        characterDataOldValue: !0
    });
    class jn {
        constructor(e) {
            __publicField(this, "rawUrl"), __publicField(this, "urlObject"), this.rawUrl = N(e), this.urlObject = new URL(e)
        }
        getRawUrl() {
            return this.rawUrl
        }
        getOrigin() {
            return this.urlObject.origin
        }
        getQueryParam(e, t) {
            let i = j.ofNullable(this.urlObject.searchParams.get(e));
            return i.isPresent() && !t(i.get()) && (fs.error(`Validator failed for ${e}`, 28), i = j.empty()), i
        }
        getAllQueryParamsUnsafe() {
            const e = {};
            for (const [t, i] of this.urlObject.searchParams.entries()) t.length > 0 && i.length > 0 && !Object.prototype.hasOwnProperty.call(e, t) && (e[t] = i);
            return e
        }
    }
    var Bn = (e => (e[e.LN = 0] = "LN", e[e.EA = 1] = "EA", e[e.DT = 2] = "DT", e[e.EE = 3] = "EE", e[e.NT = 4] = "NT", e))(Bn || {}),
        Gn = (e => (e[e.WD = 0] = "WD", e[e.WE = 1] = "WE", e))(Gn || {});
    const Hn = `${be}Domain`,
        Qn = `${be}Site`,
        qn = `${be}Page`,
        Kn = `${be}Collection`,
        Yn = `${be}ItemSlug`,
        Jn = `${be}Experiences`;
    class Xn {
        constructor(e, t) {
            __publicField(this, "localWindow"), __publicField(this, "nativeFetch"), __publicField(this, "nativeSendBeacon"), __publicField(this, "timeZone"), __publicField(this, "date"), __publicField(this, "windowWidth"), __publicField(this, "windowHeight"), __publicField(this, "webflowPageMetadata"), __publicField(this, "pageviewId"), __publicField(this, "visibilityChangeName"), __publicField(this, "isHidden"), __publicField(this, "hostingPageUrl"), __publicField(this, "referrerUrl"), this.nativeFetch = e.fetch.bind(e), this.nativeSendBeacon = e.navigator.sendBeacon.bind(e.navigator), this.timeZone = t, this.localWindow = e, this.visibilityChangeName = "visibilitychange", this.isHidden = () => !1, this.reinitialize()
        }
        reinitialize() {
            fs.debug("Environment.reinitialize()"), this.hostingPageUrl = new jn(this.localWindow.location.href), this.referrerUrl = b(this.localWindow.document.referrer) ? new jn(this.localWindow.document.referrer) : void 0, void 0 !== this.localWindow.document.hidden ? (this.isHidden = () => this.localWindow.document.hidden, this.visibilityChangeName = "visibilitychange") : void 0 !== this.localWindow.document.msHidden ? (this.isHidden = () => this.localWindow.document.msHidden, this.visibilityChangeName = "msvisibilitychange") : void 0 !== this.localWindow.document.webkitHidden && (this.isHidden = () => this.localWindow.document.webkitHidden, this.visibilityChangeName = "webkitvisibilitychange"), this.windowWidth = this.localWindow.innerWidth, this.windowHeight = this.localWindow.innerHeight, this.date = this.getNowDate(), this.pageviewId = mn(), this.reinitializeWebflowPageMetadata()
        }
        getHostingPageUrl() {
            return this.hostingPageUrl
        }
        getReferrerUrl() {
            return j.ofNullable(this.referrerUrl)
        }
        hasHostingPageUrlChanged() {
            const e = new jn(this.localWindow.location.href);
            return this.hostingPageUrl.getRawUrl() !== e.getRawUrl()
        }
        getTimeZone() {
            return this.timeZone
        }
        getDayPart() {
            const e = this.getInitializeDate().getHours();
            let t;
            return t = e >= 0 && e < 7 ? 0 : e >= 7 && e < 10 ? 1 : e >= 10 && e < 17 ? 2 : e >= 17 && e < 20 ? 3 : 4, Bn[t]
        }
        getWeekPart() {
            const e = this.getInitializeDate().getDay();
            return Gn[0 === e || 6 === e ? 1 : 0]
        }
        getInitializeDate() {
            return new Date(this.date.getTime())
        }
        getInitializeUnixTime() {
            return Math.round(this.date.getTime() / q)
        }
        getNowDate() {
            return new Date
        }
        getNowUnixTime() {
            return Math.round(this.getNowUnixTimeMs() / q)
        }
        getNowUnixTimeMs() {
            return this.getNowDate().getTime()
        }
        getWidowWidth() {
            return j.ofNullable(this.windowWidth)
        }
        getWidowHeight() {
            return j.ofNullable(this.windowHeight)
        }
        getScreenOrientation() {
            return void 0 !== this.windowHeight && void 0 !== this.windowWidth ? this.windowWidth > this.windowHeight ? j.of("landscape") : j.of("portrait") : j.empty()
        }
        getPageviewId() {
            return this.pageviewId
        }
        writeCookie(e) {
            fs.debug("Environment.writeCookie(" + e + ")"), this.localWindow.document.cookie = e
        }
        readAllCookies() {
            return j.ofNullable(this.localWindow.document.cookie)
        }
        readCookie(e) {
            const t = e + "=";
            let i = j.empty();
            return this.readAllCookies().ifPresent((e => {
                const s = e.split(";");
                for (let n of s) {
                    for (; n.startsWith(" ");) n = n.slice(1);
                    n.startsWith(t) && (i = j.of(n.slice(t.length)))
                }
            })), i
        }
        writeLocalStorage(e, t) {
            this.localWindow.localStorage.setItem(e, t)
        }
        readLocalStorage(e) {
            return j.ofNullable(this.localWindow.localStorage.getItem(e))
        }
        deleteLocalStorage(e) {
            this.localWindow.localStorage.removeItem(e)
        }
        writeSessionStorage(e, t) {
            this.localWindow.sessionStorage.setItem(e, t)
        }
        readSessionStorage(e) {
            return j.ofNullable(this.localWindow.sessionStorage.getItem(e))
        }
        deleteSessionStorage(e) {
            this.localWindow.sessionStorage.removeItem(e)
        }
        readLocalStorageMatching(e) {
            const t = {};
            return Object.keys(this.localWindow.localStorage).forEach((i => {
                e.test(i) && (t[i] = this.readLocalStorage(i).get())
            })), t
        }
        getWindow() {
            return this.localWindow
        }
        getNowVisibilityState() {
            return "document" in this.localWindow && "visibilityState" in this.localWindow.document ? j.ofNullable(this.localWindow.document.visibilityState) : j.empty()
        }
        isNowDocumentHidden() {
            return "document" in this.localWindow ? j.ofNullable(this.isHidden()) : j.empty()
        }
        addListener(e, t) {
            this.localWindow.addEventListener(e, t)
        }
        addListenerVisibilityChange(e) {
            this.localWindow.document.addEventListener(this.visibilityChangeName, e, {
                once: !0,
                capture: !1
            })
        }
        addUnloadHandler(e) {
            this.localWindow.addEventListener("beforeunload", e, !1)
        }
        redirect(e) {
            this.localWindow.document.location.replace(e)
        }
        generateActionId() {
            return this.getNowUnixTime() + "-" + bn()
        }
        injectScript(e, t = !1) {
            const i = this.localWindow.document.createElement("script");
            i.async = t, i.src = e;
            const s = this.localWindow.document.querySelectorAll("script")[0];
            s.parentNode.insertBefore(i, s)
        }
        sendBeacon(e, t) {
            return this.nativeSendBeacon(e, t)
        }
        fetch(e, t) {
            return __async(this, arguments, (function*(e, t, i = {}) {
                const s = ds(e, t);
                return this.nativeFetch(s, i).then((e => {
                    if (!e.ok) throw new Zn(s, e.status);
                    if (204 !== e.status) return e.json()
                }))
            }))
        }
        legacySynchronousXhr(e, t) {
            return __async(this, arguments, (function*(e, t, i = {}) {
                return new Promise(((s, n) => {
                    var r;
                    const o = ds(e, t),
                        a = new XMLHttpRequest;
                    a.open(null != (r = i.method) ? r : "GET", o, !1), a.addEventListener("load", (() => {
                        a.status >= 200 && a.status <= 299 ? s() : n(new Zn(o, a.status))
                    })), a.addEventListener("error", (() => {
                        n(new Zn(o, a.status))
                    })), a.send(i.body)
                }))
            }))
        }
        getWebflowPageMetadata() {
            return this.webflowPageMetadata
        }
        reinitializeWebflowPageMetadata() {
            var e;
            const t = this.localWindow.document.documentElement.dataset[Hn],
                i = this.localWindow.document.documentElement.dataset[Qn],
                s = this.localWindow.document.documentElement.dataset[qn],
                n = this.localWindow.document.documentElement.dataset[Kn],
                r = this.localWindow.document.documentElement.dataset[Yn],
                o = (null != (e = this.localWindow.document.documentElement.dataset[Jn]) ? e : "").split(",");
            this.webflowPageMetadata = {
                domain: t,
                pageId: s,
                siteId: i,
                collectionId: n,
                itemSlug: r,
                experienceIds: o
            }
        }
    }
    class Zn extends Error {
        constructor(e, t) {
            super(`(${t}) ${e.toString()}`), this.name = "JsonFetchError"
        }
    }
    const er = () => {
        const e = {};
        return {
            getExtension: t => j.ofNullable(e[t]),
            registerExtension(t) {
                e[t.getName()] = t
            }
        }
    };
    class tr {
        constructor(e, t, i, s) {
            __publicField(this, "iEvent"), __publicField(this, "actionId"), __publicField(this, "eventInstanceId"), __publicField(this, "eventValue"), __publicField(this, "nativeClickEvent"), this.iEvent = e, this.actionId = t, this.eventInstanceId = `${e.getId()}:${t}`, this.eventValue = i, this.nativeClickEvent = s
        }
        getEvent() {
            return this.iEvent
        }
        getEventId() {
            return this.iEvent.getId()
        }
        getActionId() {
            return this.actionId
        }
        getEventInstanceId() {
            return this.eventInstanceId
        }
        getEventValue() {
            return j.ofNullable(this.eventValue)
        }
        getNativeMouseEvent() {
            return j.ofNullable(this.nativeClickEvent)
        }
        toString() {
            return `ConversionEventContext(${this.getEventId()}, ${this.getEventInstanceId()})`
        }
    }

    function ir(e) {
        return e.getIntegrationDemandbase().map((e => e.isEnabled())).orElse(!1)
    }

    function sr(e) {
        return e.getIntegrationFirmographic().map((e => e.isEnabled())).orElse(!1)
    }
    const nr = ["marketo", "salesforce", "firmographic", "6sense", "googleAds", "demandbase", "hubspot"],
        rr = (e, t) => `i${e}${t}`,
        or = {
            adGroup: rr("ga", "ag"),
            campaign: rr("ga", "cm"),
            network: rr("ga", "nt"),
            adType: rr("ga", "at"),
            keyword: rr("ga", "kw"),
            creative: rr("ga", "cr"),
            matchType: rr("ga", "mt")
        };

    function ar(e) {
        return e.getIntegrationGoogleAds().map((e => e.isEnabled())).orElse(!1)
    }

    function lr(e, t, i) {
        if (!cs(e, i).orElse(!1)) {
            const i = cr(e);
            t.setDataAndMetadata("googleAds", i, void 0)
        }
    }

    function cr(e) {
        const t = {};
        return Object.entries(or).forEach((([i, s]) => {
            e.getHostingPageUrl().getQueryParam(s, b).ifPresent((e => {
                t[i] = e
            }))
        })), t
    }

    function ur(e) {
        return e.getIntegrationHubspot().map((e => e.isEnabled())).orElse(!1)
    }

    function dr(e) {
        return e.readCookie(ve)
    }

    function hr(e) {
        return "hsFormCallback" === e.data.type && "onFormSubmitted" === e.data.eventName
    }

    function gr(e) {
        return e.getIntegrationMarketo().map((e => e.isEnabled())).orElse(!1)
    }

    function pr(e) {
        return e.readCookie(me)
    }

    function mr(e) {
        var t, i;
        return void 0 !== (null == (t = null == e ? void 0 : e.lead) ? void 0 : t.fields) || void 0 !== (null == (i = null == e ? void 0 : e.lead) ? void 0 : i.lists)
    }

    function vr(e) {
        var t, i;
        return void 0 === (null == (t = null == e ? void 0 : e.lead) ? void 0 : t.fields) && void 0 === (null == (i = null == e ? void 0 : e.lead) ? void 0 : i.lists)
    }

    function br(e) {
        if (void 0 === e) return j.empty();
        if (mr(e)) return j.of(e);
        if (vr(e)) {
            const t = e,
                {
                    smartLists: i,
                    staticLists: s
                } = t,
                n = __objRest(t, ["smartLists", "staticLists"]),
                r = (null != i ? i : []).map((e => ({
                    type: "smart",
                    id: Number(e)
                }))),
                o = (null != s ? s : []).map((e => ({
                    type: "static",
                    id: Number(e)
                })));
            return j.of({
                lead: {
                    fields: n,
                    lists: [...r, ...o]
                }
            })
        }
        return j.empty()
    }
    const fr = rr("sf", "lh"),
        Er = rr("sf", "ch");

    function _r(e) {
        return e.getIntegrationSalesforce().map((e => e.isEnabled())).orElse(!1)
    }

    function yr(e) {
        const t = e.getHostingPageUrl().getQueryParam(fr, b),
            i = e.getHostingPageUrl().getQueryParam(Er, b);
        if (t.isPresent() || i.isPresent()) {
            const e = {};
            return t.ifPresent((t => {
                e.leadIdHash = t
            })), i.ifPresent((t => {
                e.contactIdHash = t
            })), j.of(e)
        }
        return j.empty()
    }

    function Sr(e) {
        return e.getIntegrationSixsense().map((e => e.isEnabled())).orElse(!1)
    }
    const Ir = {
        "6sense": e => Sr(e),
        demandbase: e => ir(e),
        firmographic: e => sr(e),
        googleAds: e => ar(e),
        marketo: e => gr(e),
        salesforce: e => _r(e),
        hubspot: e => ur(e)
    };
    var wr = (e => (e[e.NOT_STARTED = 0] = "NOT_STARTED", e[e.TRY_LATER = 1] = "TRY_LATER", e[e.WAITING = 2] = "WAITING", e[e.SUCCEEDED = 3] = "SUCCEEDED", e[e.FAILED = 4] = "FAILED", e[e.CANCELED = 5] = "CANCELED", e))(wr || {});
    const Cr = new Set([0, 1, 2]),
        Tr = class {
            constructor() {
                __publicField(this, "manager"), __publicField(this, "id"), __publicField(this, "doneFunctions", []), __publicField(this, "currentStatus", 0), this.id = ++Tr.lastId
            }
            static isDone(e) {
                return !Cr.has(e)
            }
            getId() {
                return this.id
            }
            setManager(e) {
                this.manager = e
            }
            cancel() {
                this.currentStatus = 5, this.cleanup()
            }
            cleanup() {}
            runWrapper() {
                fs.group(this.toString() + ".run()");
                const e = this.currentStatus;
                try {
                    this.currentStatus = this.run()
                } catch (i) {
                    const e = new bt("Task exception", i);
                    fs.error(e, 179, this.getEntityIds()), this.currentStatus = 4
                }
                const t = this.currentStatus;
                return !Tr.isDone(e) && Tr.isDone(t) && this.executeDoneFunctions(), fs.groupEnd(), this.currentStatus
            }
            onDone(e) {
                this.isDone() ? ks.executeFunction(e, 153) : this.doneFunctions.push(e)
            }
            getStatus() {
                return this.currentStatus
            }
            isDone() {
                return !Cr.has(this.currentStatus)
            }
            getNotDoneDependencies() {
                return []
            }
            isBlocked() {
                if (2 === this.currentStatus) return !0;
                return this.getNotDoneDependencies().filter((e => e.isBlocked())).length > 0
            }
            toString() {
                return `Task(${this.id})`
            }
            getEntityIds() {
                return {}
            }
            setStatusTryLater() {
                this.currentStatus = 1
            }
            executeDoneFunctions() {
                for (let e = this.doneFunctions.shift(); void 0 !== e; e = this.doneFunctions.shift()) ks.executeFunction(e, 154)
            }
        };
    let xr = Tr;
    __publicField(xr, "lastId", 0);
    class Ar extends xr {
        constructor(e, t, i) {
            super(), __publicField(this, "conversionEventContext"), __publicField(this, "browserEventLogger"), __publicField(this, "customerStorage"), __publicField(this, "trackBrowserEvents", {}), __publicField(this, "hasSentGoals", !1), this.conversionEventContext = N(e), this.browserEventLogger = N(t), this.customerStorage = N(i)
        }
        toString() {
            return "GoalTask(" + this.conversionEventContext.toString() + ")"
        }
        getEntityIds() {
            return {
                eventId: this.conversionEventContext.getEventId()
            }
        }
        inTransaction() {
            return !0
        }
        isUnloading() {
            return !1
        }
        run() {
            this.hasSentGoals || this.sendGoalsOnce();
            if (Object.keys(this.trackBrowserEvents).map((e => this.trackBrowserEvents[e])).some((e => void 0 === e || !xr.isDone(e)))) return fs.debug("Waiting for goal event delivery confirmation"), wr.TRY_LATER;
            return Object.keys(this.trackBrowserEvents).map((e => this.trackBrowserEvents[e])).every((e => void 0 !== e && e === wr.SUCCEEDED)) ? wr.SUCCEEDED : wr.FAILED
        }
        sendGoalsOnce() {
            fs.debug("sendGoalsOnce()"), this.hasSentGoals = !0;
            const e = "click" !== this.conversionEventContext.getEvent().getType();
            let t = 0;
            this.conversionEventContext.getEvent().getMetrics().forEach((i => {
                i.getCampaign().ifPresent((s => {
                    s.getExperiences().forEach((s => {
                        this.customerStorage.getVariation(s).ifPresent((n => {
                            const r = i.getId() + ":" + n.getId();
                            this.trackBrowserEvents[r] = wr.TRY_LATER, fs.info(`Sending goal ${i.getId()} event`), t++, this.browserEventLogger.sendGoal(n, i, this.conversionEventContext, e).then((() => {
                                fs.info(`Goal ${i.getId()} event delivery success`), this.trackBrowserEvents[r] = wr.SUCCEEDED
                            })).catch((e => {
                                const t = new bt(`Goal ${i.getId()} event delivery failed`, e);
                                fs.error(t, 78, {
                                    eventId: this.conversionEventContext.getEventId(),
                                    experienceId: s.getId(),
                                    variationId: n.getId()
                                }), this.trackBrowserEvents[r] = wr.FAILED
                            }))
                        }))
                    }))
                }))
            })), fs.debug(`Sent ${t} goal events`)
        }
    }
    class Fr extends xr {
        constructor(e, t, i, s, n) {
            super(), __publicField(this, "conversionEventContext"), __publicField(this, "browserEventLogger"), __publicField(this, "customer"), __publicField(this, "customerStorage"), __publicField(this, "statusModel"), __publicField(this, "conversionSent", !1), __publicField(this, "conversionStatus", wr.NOT_STARTED), __publicField(this, "goalTask"), this.conversionEventContext = N(e), this.browserEventLogger = N(t), this.customer = N(i), this.customerStorage = N(s), this.statusModel = N(n)
        }
        toString() {
            return `ConversionEventTask(${this.conversionEventContext.toString()})`
        }
        getEntityIds() {
            return {
                eventId: this.conversionEventContext.getEventId()
            }
        }
        inTransaction() {
            return !this.conversionSent
        }
        isUnloading() {
            return !1
        }
        run() {
            return this.sendOnce(), this.scheduleGoalTaskOnce(), xr.isDone(this.conversionStatus) ? !this.customer.hasClassicAccess() || void 0 !== this.goalTask && xr.isDone(this.goalTask.getStatus()) ? this.conversionStatus === wr.SUCCEEDED ? wr.SUCCEEDED : wr.FAILED : (fs.debug("Waiting for goal task event confirmation"), wr.TRY_LATER) : (fs.debug("Waiting for conversion event delivery confirmation"), wr.TRY_LATER)
        }
        sendOnce() {
            if (!this.conversionSent) {
                fs.info(`Sending conversion event ${this.conversionEventContext.toString()}`);
                const e = this.conversionEventContext.getEvent(),
                    t = [],
                    i = e.getMetrics().map((i => {
                        const s = bn();
                        return t.push({
                            metric: i,
                            modelEventId: s
                        }), {
                            metric: i,
                            event: e,
                            status: wr.WAITING,
                            id: s
                        }
                    }));
                this.statusModel.setMetricEventData(i), this.browserEventLogger.sendConversion(this.conversionEventContext).then((() => {
                    fs.info(`Conversion event ${this.conversionEventContext.toString()} delivery success`), this.conversionStatus = wr.SUCCEEDED, this.statusModel.setMetricEventData(t.map((({
                        modelEventId: t,
                        metric: i
                    }) => ({
                        metric: i,
                        event: e,
                        status: wr.SUCCEEDED,
                        id: t
                    }))))
                })).catch((i => {
                    const s = new bt(`Conversion event ${this.conversionEventContext.toString()} delivery failed`, i);
                    fs.warn(s, 76, {
                        eventId: this.conversionEventContext.getEventId()
                    }), this.conversionStatus = wr.FAILED, this.statusModel.setMetricEventData(t.map((({
                        modelEventId: t,
                        metric: i
                    }) => ({
                        metric: i,
                        event: e,
                        status: wr.FAILED,
                        id: t
                    }))))
                })), this.conversionSent = !0
            }
        }
        scheduleGoalTaskOnce() {
            this.customer.hasClassicAccess() && void 0 === this.goalTask && (this.goalTask = new Ar(this.conversionEventContext, this.browserEventLogger, this.customerStorage), this.manager.addTask(this.goalTask))
        }
    }
    class kr extends xr {
        constructor(e, t, i, s, n, r) {
            super(), __publicField(this, "sent", !1), __publicField(this, "deliveryStatus", wr.NOT_STARTED), __publicField(this, "environment"), __publicField(this, "customer"), __publicField(this, "userDomain1"), __publicField(this, "userId1"), __publicField(this, "userDomain2"), __publicField(this, "userId2"), this.environment = e, this.customer = t, this.userDomain1 = i, this.userId1 = s, this.userDomain2 = n, this.userId2 = r
        }
        static get ENDPOINT() {
            return "/user-alias"
        }
        toString() {
            return `UserAliasTask(userDomain1: ${this.userDomain1}, userId1: ${this.userId1}, userDomain2: ${this.userDomain2}, userId2: ${this.userId2})`
        }
        inTransaction() {
            return !0
        }
        isUnloading() {
            return !1
        }
        run() {
            return this.sendOnce(), this.deliveryStatus === wr.SUCCEEDED ? wr.SUCCEEDED : this.deliveryStatus === wr.FAILED ? wr.FAILED : (fs.debug("Waiting for user alias delivery confirmation"), wr.TRY_LATER)
        }
        sendOnce() {
            this.sent || (fs.info(`Sending request to set up user alias for userDomain1: ${this.userDomain1}, userId1: ${this.userId1}, userDomain2: ${this.userDomain2}, userId2: ${this.userId2}`), this.environment.fetch(se, kr.ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "text/plain;charset=UTF-8"
                },
                body: we({
                    customerId: this.customer.getId(),
                    userDomain1: this.userDomain1,
                    userId1: this.userId1,
                    userDomain2: this.userDomain2,
                    userId2: this.userId2
                })
            }).then((() => {
                this.deliveryStatus = wr.SUCCEEDED, fs.info(`Successfully set up user alias for userDomain1: ${this.userDomain1}, userId1: ${this.userId1}, userDomain2: ${this.userDomain2}, userId2: ${this.userId2}`)
            })).catch((e => {
                const t = vt(e);
                fs.error(t, 92), this.deliveryStatus = wr.FAILED
            })), this.sent = !0)
        }
    }

    function Pr(e) {
        if ("string" == typeof e) {
            const t = e.search(/[.\-\d]/g);
            if (-1 === t) return !1;
            const i = e.slice(Math.max(0, t));
            if (!/^-?\d*\.?\d{0,2}$/.test(i)) return !1
        } else {
            if ("number" != typeof e) return !1; {
                const t = String(e);
                if (!/^-?\d*\.?\d{0,2}$/.test(t)) return !1
            }
        }
        return !0
    }

    function Mr(e) {
        return "string" == typeof e && /^[\u0021-\u007E]{1,300}$/.test(e)
    }

    function Dr(e) {
        return Ls(e) && ("number" == typeof e.amount || "string" == typeof e.amount) && "string" == typeof e.currencyCode
    }

    function Nr(e, t, i, s, n, r, o, a, l, c, u) {
        Rr(e, t).ifPresent((({
            eventName: d,
            eventActionId: h,
            eventValue: g
        }) => {
            var p;
            if (i.getShopifyEvent(d).ifPresent((d => {
                    const p = new tr(d, h, g, void 0);
                    try {
                        o.add(eo.buildShopifyActivity(e, t, p, i, s, a, r, n))
                    } catch (v) {
                        const e = new bt("Failed to build Shopify Activity", v);
                        fs.error(e, 234)
                    }
                    const m = new Fr(p, u, i, n, l);
                    c.addTask(m)
                })).ifAbsent((() => {
                    fs.error(`Shopify pixel event not configured for customer: "${e.name}"`, 252)
                })), "checkout_completed" === d) {
                const t = null == (p = e.data.checkout.order) ? void 0 : p.id;
                void 0 === t ? fs.error("Received a checkout_completed event without an order id", 250) : i.getShopifyServerSideEvent().ifPresent((() => {
                    const e = new kr(s, i, "__shopifyOrder", t, "intellimize", a.getId());
                    c.addTask(e)
                })).ifAbsent((() => {
                    fs.error("Shopify server-side event not configured for customer", 253)
                }))
            }
        }))
    }

    function Or(e, t, i) {
        let s;
        switch (e.name) {
            case "collection_viewed":
                {
                    const t = e;s = __spreadProps(__spreadValues({}, i), {
                        eventType: "s",
                        customerEventName: "collection_viewed",
                        data: jr(t.data.collection)
                    });
                    break
                }
            case "product_viewed":
                {
                    const n = e;s = __spreadProps(__spreadValues({}, i), {
                        eventType: "s",
                        customerEventName: "product_viewed",
                        data: zr(n.data.productVariant, $r("product_viewed"), t)
                    });
                    break
                }
            case "checkout_started":
                {
                    const n = e;s = __spreadProps(__spreadValues({}, i), {
                        eventType: "s",
                        customerEventName: "checkout_started",
                        data: Br(n.data.checkout, $r("checkout_started"), t)
                    });
                    break
                }
            case "checkout_completed":
                {
                    const n = e;s = __spreadProps(__spreadValues({}, i), {
                        eventType: "s",
                        customerEventName: "checkout_completed",
                        data: Br(n.data.checkout, $r("checkout_completed"), t)
                    });
                    break
                }
            case "product_added_to_cart":
                {
                    const n = e;s = __spreadProps(__spreadValues({}, i), {
                        eventType: "s",
                        customerEventName: "product_added_to_cart",
                        data: Gr(n.data.cartLine, $r("product_added_to_cart"), t)
                    });
                    break
                }
            case "search_submitted":
                {
                    const t = e;s = __spreadProps(__spreadValues({}, i), {
                        eventType: "s",
                        customerEventName: "search_submitted",
                        data: Hr(t.data.searchResult)
                    });
                    break
                }
            default:
                throw new Error(`Unsupported customer event: ${e.name}`)
        }
        return fs.debug(`Shopify activity (${e.name}): ${Ie(s.data)}`), s
    }

    function Rr(e, t) {
        var i, s;
        let n;
        if (!Ls(e)) return Wr("Not an object"), j.empty();
        if (!b(e.name)) return Wr(`Event name is not a valid event name: "${e.name}"`), j.empty();
        if (!Lr(e.name)) return j.empty();
        if (!Mr(e.id)) return Wr(`Event ID is not a valid action id: "${e.id}"`), j.empty();
        if (!f(e.data)) {
            if (!Ls(e.data)) return Wr(`Event data is defined, and is not an object: "${Ie(e.data)}"`), j.empty();
            Vr(e.name, e.data, t).ifPresent((e => {
                n = e
            }))
        }
        let r = e.id;
        if ("checkout_completed" === e.name) {
            const t = e;
            (null == (s = null == (i = t.data) ? void 0 : i.checkout) ? void 0 : s.order) ? r = t.data.checkout.order.id: fs.error("Received a checkout_completed event without an order id", 249)
        }
        return j.of({
            eventName: e.name,
            eventActionId: r,
            eventValue: n
        })
    }

    function Lr(e) {
        return tt.includes(e)
    }

    function $r(e) {
        switch (e) {
            case "product_viewed":
                return "productVariant.price.amount";
            case "product_added_to_cart":
                return "cartLine.merchandise.price.amount";
            case "checkout_started":
            case "checkout_completed":
                return "checkout.subtotalPrice.amount";
            default:
                throw new Error(`Cannot get event value path for ${e}`)
        }
    }

    function Vr(e, t, i) {
        let s, n;

        function r(e) {
            return Ls(e) ? !!Dr(e.subtotalPrice) || (Wr(`Checkout data exists, but subtotal price is not valid: "${Ie(e.subtotalPrice)}"`), !1) : (Wr("Checkout data is not an object"), !1)
        }
        switch (e) {
            case "checkout_started":
                if (!r(t.checkout)) return j.empty();
                s = t.checkout.subtotalPrice.amount, n = $r("checkout_started");
                break;
            case "checkout_completed":
                if (!r(t.checkout)) return j.empty();
                s = t.checkout.subtotalPrice.amount, n = $r("checkout_completed");
                break;
            case "product_added_to_cart":
                if (!Ls(t.cartLine)) return Wr("CartLine data is not an object"), j.empty();
                if (!Ls(t.cartLine.merchandise)) return Wr("CartLine data exists, but does not include a product variant"), j.empty();
                if (!Dr(t.cartLine.merchandise.price)) return Wr(`CartLine ProductVariant data exists, but price is not valid: "${Ie(t.cartLine.merchandise.price)}"`), j.empty();
                s = t.cartLine.merchandise.price.amount, n = $r("product_added_to_cart");
                break;
            case "product_viewed":
                if (!Ls(t.productVariant)) return Wr("ProductVariant data is not an object"), j.empty();
                if (!Dr(t.productVariant.price)) return Wr(`ProductVariant data exists, but price is not valid: "${Ie(t.productVariant.price)}"`), j.empty();
                s = t.productVariant.price.amount, n = $r("product_viewed");
                break;
            default:
                return j.empty()
        }
        const o = Ur(s, n, i);
        return Pr(o) ? j.of(o) : (Wr(`Event value is not valid: "${s}"`), j.empty())
    }

    function Ur(e, t, i) {
        let s = Number(e) / i;
        return /^-?\d*\.\d{3,}$/.test(String(s)) && (fs.debug(`Found currency with > 2 decimal places: "${t}" = "${s}"`), s = Math.round(100 * (Number(s) + Number.EPSILON)) / 100), s
    }

    function Wr(e) {
        fs.error(`Invalid Shopify Pixel Event: ${e}`, 233)
    }

    function zr(e, t, i) {
        var s, n;
        return {
            productVariantPriceAdjusted: Ur(e.price.amount, t, i),
            productVariantPrice: e.price.amount,
            productVariantPriceCode: e.price.currencyCode,
            productVariantSku: null != (s = e.sku) ? s : void 0,
            productVariantId: e.id,
            productVariantTitle: e.title,
            productId: e.product.id,
            productTitle: e.product.title,
            productType: null != (n = e.product.type) ? n : void 0
        }
    }

    function jr(e) {
        return {
            collectionId: e.id
        }
    }

    function Br(e, t, i) {
        const s = [],
            n = [];
        return e.lineItems.forEach((({
            variant: e
        }) => {
            null !== e && (s.push(e.id), n.push(e.product.id))
        })), {
            checkoutSubtotalAdjusted: Ur(e.subtotalPrice.amount, t, i),
            checkoutSubtotal: e.subtotalPrice.amount,
            checkoutSubtotalCode: e.subtotalPrice.currencyCode,
            productVariantIds: s,
            productIds: n
        }
    }

    function Gr(e, t, i) {
        return __spreadValues({
            cartTotalAdjusted: Ur(e.cost.totalAmount.amount, t, i),
            cartTotal: e.cost.totalAmount.amount,
            cartTotalCode: e.cost.totalAmount.currencyCode
        }, zr(e.merchandise, t, i))
    }

    function Hr(e) {
        return {
            searchQuery: e.query
        }
    }

    function Qr() {
        return {
            "data.productVariantPriceAdjusted": "spvpa",
            "data.productVariantPrice": "spvp",
            "data.productVariantPriceCode": "spvpc",
            "data.productVariantSku": "spvsku",
            "data.productVariantId": "spvid",
            "data.productVariantTitle": "spvt",
            "data.productId": "spid",
            "data.productTitle": "spt",
            "data.productType": "spty",
            "data.collectionId": "scid",
            "data.checkoutSubtotalAdjusted": "scosta",
            "data.checkoutSubtotal": "scost",
            "data.checkoutSubtotalCode": "scostc",
            "data.productVariantIds": "spvids",
            "data.productIds": "spids",
            "data.cartTotalAdjusted": "scata",
            "data.cartTotal": "scat",
            "data.cartTotalCode": "scatc",
            "data.searchQuery": "ssq"
        }
    }

    function qr() {
        return [ae, re, le, ne, oe, de, ce, he, ue, pe]
    }

    function Kr(e) {
        return qr().map((t => `${t}${e.getId()}`))
    }

    function Yr(e) {
        return qr().some((t => e.startsWith(t)))
    }

    function Jr(e) {
        return e instanceof DOMException && ("QuotaExceededError" === e.name || "QUOTA_EXCEEDED_ERROR" === e.name || "NS_ERROR_DOM_QUOTA_REACHED" === e.name)
    }

    function Xr(e, t) {
        let i = !1;
        try {
            const s = e.getWindow();
            if (t in s) {
                const e = "_test_",
                    n = "_test_val_";
                s[t].setItem(e, n);
                const r = s[t].getItem(e);
                s[t].removeItem(e), null !== r && r === n && (i = !0)
            }
        } catch (s) {}
        return i
    }
    const Zr = class {
        constructor(e, t, i, s) {
            __publicField(this, "storageKey"), __publicField(this, "browserStorage"), __publicField(this, "environment"), __publicField(this, "override"), this.storageKey = ue + e.getId(), this.browserStorage = t, this.environment = i, this.override = s
        }
        static buildPageviewActivity(e, t, i, s, n) {
            return __spreadValues({
                eventType: "pv"
            }, Zr.setCommonActivityFields(e, t, i, s, n))
        }
        static buildViewActivity(e, t, i, s, n) {
            const r = e.getExperience(),
                o = r.getCampaign(),
                a = o.getCustomer();
            return __spreadValues({
                eventType: "v",
                campaignId: o.getId(),
                experienceId: r.getId(),
                variationId: e.getId()
            }, Zr.setCommonActivityFields(a, t, i, s, n))
        }
        static buildConversionActivity(e, t, i, s, n, r) {
            const o = __spreadValues({
                eventType: "c",
                actionId: e.getActionId(),
                eventId: e.getEventId(),
                eventInstanceId: e.getEventInstanceId()
            }, Zr.setCommonActivityFields(t, i, s, n, r));
            return e.getEventValue().ifPresent((e => {
                o.eventValue = Zr.transformEventValue(e)
            })), o
        }
        static buildShopifyActivity(e, t, i, s, n, r, o, a) {
            return Or(e, t, Zr.buildConversionActivity(i, s, n, r, o, a))
        }
        static setCommonActivityFields(e, t, i, s, n) {
            const r = {
                userVisitStatus: n.getUserVisitStatus(i),
                userBucket: i.getUserBucket(),
                pageviewId: t.getPageviewId(),
                sessionId: n.updateAndGetSessionId(),
                time: t.getNowUnixTimeMs(),
                timeZone: t.getTimeZone()
            };
            n.getCustomerControlStatus(e).ifPresent((e => {
                r.controlStatus = e
            })), t.getReferrerUrl().ifPresent((e => {
                r.referrerUrl = e.getRawUrl()
            })), r.hostingPageUrl = t.getHostingPageUrl().getRawUrl();
            const o = s.getFlattenedInternalAttributes();
            Object.keys(o).length > 0 && (r.trafficSource = o.ts, r.utmTerm = o.utt, r.utmMedium = o.utm, r.utmSource = o.uts, r.utmContent = o.utcn, r.utmCampaign = o.utcm);
            const a = s.getFlattenedCustomAttributes();
            Object.keys(a).length > 0 && (r.customAttributes = a);
            const l = t.getWebflowPageMetadata();
            return void 0 !== l.domain && (r.webflowDomain = l.domain), void 0 !== l.siteId && (r.webflowSiteId = l.siteId), void 0 !== l.pageId && (r.webflowPageId = l.pageId), void 0 !== l.collectionId && (r.webflowCollectionId = l.collectionId), void 0 !== l.itemSlug && (r.webflowItemSlug = l.itemSlug), r
        }
        static transformEventValue(e) {
            if ("string" == typeof e) return Number.parseFloat(e)
        }
        add(e) {
            if (this.override.saveActivity().orElse(!0)) {
                const t = this.compressActivity(e),
                    i = this.getAllCompressed();
                i.push(t), this.save(i)
            }
        }
        getAll() {
            return this.getAllCompressed().map((e => this.decompressActivity(e)))
        }
        backoffAndSave(e) {
            e.shift(), this.save(e)
        }
        save(e) {
            const t = we(e);
            if (t.length > Zr.CHARACTER_LIMIT && e.length > 0) this.backoffAndSave(e);
            else try {
                this.browserStorage.write(this.storageKey, t)
            } catch (i) {
                if (!(Jr(i) && e.length > 0)) throw i;
                fs.warn("localStorage quota exceeded. Removing old activity", 220), this.backoffAndSave(e)
            }
        }
        getAllCompressed() {
            let e = [];
            try {
                e = this.browserStorage.read(this.storageKey).map((e => {
                    const t = Ce(e);
                    if (!Array.isArray(t)) throw new TypeError("Expected an array");
                    return t
                })).orElse([])
            } catch (i) {
                e = [];
                const t = new bt("Could not read Activities from localStorage", i);
                fs.error(t, 221)
            }
            const t = this.environment.getNowUnixTimeMs() - Zr.TIME_LIMIT_MS;
            return e.filter((e => e.t >= t))
        }
        compressActivity(e) {
            const t = {};
            for (const [i, s] of Object.entries(e))
                if ("data" === i && m(s))
                    for (const [e, n] of Object.entries(s)) {
                        const i = `data.${e}`;
                        void 0 === Zr.KEY_MAP[i] ? (fs.error(`Unknown key ${i} in Activity`, 222), t[i] = n) : t[Zr.KEY_MAP[i]] = n
                    } else void 0 === Zr.KEY_MAP[i] ? (fs.error(`Unknown key ${i} in Activity`, 222), t[i] = s) : t[Zr.KEY_MAP[i]] = s;
            return t
        }
        decompressActivity(e) {
            const t = {};
            for (const [i, s] of Object.entries(e))
                if (void 0 === Zr.REVERSE_KEY_MAP[i]) fs.error(`Unknown key ${i} in CompressedActivity`, 223), t[i] = s;
                else if (Zr.REVERSE_KEY_MAP[i].startsWith("data.")) {
                const e = Zr.REVERSE_KEY_MAP[i].split(".");
                2 === e.length && (void 0 === t.data && (t.data = {}), t.data[e[1]] = s)
            } else t[Zr.REVERSE_KEY_MAP[i]] = s;
            return t
        }
    };
    let eo = Zr;
    __publicField(eo, "TIME_LIMIT_MS", 15552e6), __publicField(eo, "CHARACTER_LIMIT", 1048576), __publicField(eo, "KEY_MAP", __spreadValues({
        eventType: "et",
        customerEventName: "en",
        campaignId: "cmid",
        experienceId: "eid",
        variationId: "vid",
        actionId: "acid",
        eventId: "evid",
        eventInstanceId: "eii",
        eventValue: "ev",
        userVisitStatus: "uvs",
        userBucket: "ub",
        pageviewId: "pvid",
        sessionId: "sid",
        controlStatus: "cs",
        referrerUrl: "rurl",
        hostingPageUrl: "hpurl",
        time: "t",
        timeZone: "tz",
        trafficSource: "ts",
        utmTerm: "utt",
        utmMedium: "utm",
        utmSource: "uts",
        utmContent: "utcn",
        utmCampaign: "utcm",
        customAttributes: "ca",
        webflowDomain: "wfd",
        webflowSiteId: "wfsid",
        webflowPageId: "wfpid",
        webflowCollectionId: "wfcid",
        webflowItemSlug: "wfis"
    }, Qr())), __publicField(eo, "REVERSE_KEY_MAP", js(Zr.KEY_MAP));
    class to extends xr {
        constructor(e) {
            super(), __publicField(this, "callbacks", []), this.callbacks = e
        }
        toString() {
            return "ActivateTask()"
        }
        inTransaction() {
            return !1
        }
        isUnloading() {
            return !0
        }
        addCallback(e) {
            this.callbacks.push(e)
        }
        run() {
            return this.manager.getClient().reRun(this.callbacks), wr.SUCCEEDED
        }
    }
    class io extends xr {
        constructor(e, t, i) {
            super(), __publicField(this, "environment"), __publicField(this, "callbacks", []), __publicField(this, "startTimeMs"), this.environment = e, this.callbacks = i, this.resetExpiration(), t.requestAnimationFrame().orElse(!0) && this.environment.getWindow().requestAnimationFrame((() => {
                this.handleRaf()
            })), this.environment.getWindow().requestAnimationFrame((() => {
                this.handleRaf()
            }))
        }
        handleRaf() {
            this.manager && this.manager.runNow(), xr.isDone(this.getStatus()) || this.environment.getWindow().requestAnimationFrame((() => {
                this.handleRaf()
            }))
        }
        toString() {
            return "RequestActivateTask()"
        }
        inTransaction() {
            return !1
        }
        isUnloading() {
            return !1
        }
        resetExpiration() {
            fs.debug("RequestActivateTask.resetExpiration()"), this.startTimeMs = this.environment.getNowUnixTimeMs()
        }
        addCallback(e) {
            this.callbacks.push(e)
        }
        run() {
            if (!this.environment.hasHostingPageUrlChanged()) return fs.debug("URL has not changed yet"), this.hasExceededTimeBudget() ? (fs.info(`activate() timeout due to URL not changing after ${Z}ms`), wr.SUCCEEDED) : wr.TRY_LATER;
            if (0 === this.manager.findTasks((e => e instanceof to && !e.isDone())).length) {
                const e = new to(this.callbacks);
                this.manager.addTask(e)
            } else fs.debug("Not scheduling new ActivateTask since one is already running");
            return wr.SUCCEEDED
        }
        hasExceededTimeBudget() {
            const e = this.environment.getNowUnixTimeMs(),
                t = e - this.startTimeMs,
                i = t > Z;
            return fs.debug("hasExceededTimeBudget: " + e + " - " + this.startTimeMs + " (" + t + ") > " + Z + "? => " + i), i
        }
    }
    class so extends xr {
        constructor(e, t, i, s) {
            super(), __publicField(this, "elementObserver"), __publicField(this, "entityIds"), __publicField(this, "workQueue", []), __publicField(this, "readyToRender"), __publicField(this, "isTaskDone", !1), this.elementObserver = s, this.readyToRender = t, this.entityIds = i, this.workQueue = e.map((e => ({
                enhancedChange: e,
                applied: !1,
                rendered: !1
            })))
        }
        toString() {
            return `ChangelistTask(count:${this.workQueue.length}, ${Ie(this.entityIds)})`
        }
        cleanup() {
            this.isTaskDone = !0, this.readyToRenderCallbackIfDone()
        }
        inTransaction() {
            return !0
        }
        isUnloading() {
            return !1
        }
        getEntityIds() {
            return this.entityIds
        }
        run() {
            for (const t of this.workQueue)
                if (!t.applied) try {
                    if (!t.enhancedChange.isReadyToApply()) return wr.TRY_LATER;
                    t.enhancedChange.apply((() => {
                        t.rendered = !0, this.readyToRenderCallbackIfDone()
                    }), this.elementObserver), t.applied = !0
                } catch (e) {
                    const i = new bt(`Failed to apply change: ${Ie(t.enhancedChange.getEntityIds())}`, e);
                    return fs.error(i, 125, t.enhancedChange.getEntityIds()), this.isTaskDone = !0, this.readyToRenderCallbackIfDone(), wr.FAILED
                }
            return this.isTaskDone = !0, this.readyToRenderCallbackIfDone(), wr.SUCCEEDED
        }
        readyToRenderCallbackIfDone() {
            if (!this.isTaskDone) return;
            this.workQueue.filter((e => e.applied)).every((e => __async(this, null, (function*() {
                return e.rendered
            })))) && this.readyToRender()
        }
    }
    class no extends xr {
        constructor(e, t, i, s, n, r, o, a, l, c, u, d, h, g, p, m, v, b) {
            super(), __publicField(this, "variation"), __publicField(this, "environment"), __publicField(this, "browserStorage"), __publicField(this, "extensionManager"), __publicField(this, "browserEventLogger"), __publicField(this, "customerStorage"), __publicField(this, "attributeStorage"), __publicField(this, "activityStorage"), __publicField(this, "pageContext"), __publicField(this, "attributeData"), __publicField(this, "user"), __publicField(this, "decisionContext"), __publicField(this, "startPageviewId"), __publicField(this, "override"), __publicField(this, "statusModel"), __publicField(this, "getVariationRecordedCallbackTuples"), __publicField(this, "elementObserver"), __publicField(this, "hider"), this.environment = N(e), this.browserStorage = N(t), this.extensionManager = N(i), this.browserEventLogger = N(s), this.customerStorage = N(n), this.attributeStorage = N(r), this.activityStorage = N(o), this.pageContext = N(a), this.attributeData = N(l), this.decisionContext = N(c), this.user = N(u), this.override = N(d), this.statusModel = N(h), this.startPageviewId = N(g), this.hider = N(p), this.variation = N(m), this.getVariationRecordedCallbackTuples = N(v), this.elementObserver = N(b)
        }
        toString() {
            return `ExecuteVariationTask(${this.variation.getId()})`
        }
        getEntityIds() {
            return {
                variationId: this.variation.getId(),
                experienceId: this.variation.getExperience().getId()
            }
        }
        inTransaction() {
            return this.isReadyToExecute()
        }
        isUnloading() {
            return !1
        }
        getNotDoneDependencies() {
            return this.findDependentPageChangelistTasks().filter((e => !e.isDone()))
        }
        run() {
            let e = wr.TRY_LATER;
            return this.isReadyToExecute() && (e = this.executeVariation()), e
        }
        injectVariationCss(e) {
            if (e.getCss().isPresent()) {
                const i = e.getCss().get();
                try {
                    fs.info(`Variation ${e.getExperience().getId()}/${e.getId()} injecting css`), ks.injectCss(i, `variation-${e.getId()}`, this.environment.getWindow().document)
                } catch (t) {
                    const i = new bt(`Variation (${e.getId()}) css injection failed`, t);
                    return fs.error(i, 91, {
                        variationId: e.getId(),
                        experienceId: e.getExperience().getId()
                    }), !1
                }
            }
            return !0
        }
        onReadyToRender() {
            this.hider.revealExperience(this.variation.getExperience(), this.browserStorage, this.attributeData)
        }
        isReadyToExecute() {
            const e = this.passDependencies(),
                t = this.passExperiencePreconditions(),
                i = this.passVariationPreconditions(),
                s = this.hasAppliedPageChanges();
            return e && t && i && s
        }
        passDependencies() {
            const e = this.variation.getExperience();
            fs.group("check experience dependsOnExperiences " + e.getId());
            const t = e.getDependsOnExperiences().every((e => !this.decisionContext.isDecidingExperience(e)));
            return fs.debug(t.toString()), fs.groupEnd(), this.statusModel.setExperience(e, "dependsOnExperiences", t), t
        }
        passExperiencePreconditions() {
            const e = this.variation.getExperience();
            fs.group("check experience preconditions " + e.getId());
            const t = e.getPreconditions().every((t => {
                let i = !1;
                try {
                    i = ks.evalBoolean(t), fs.info(`Experience ${e.getId()} precondition => ${i}`)
                } catch (s) {
                    const t = new bt(`Experience (${e.getId()}) precondition code execution failed`, s);
                    i = !1, fs.error(t, 15, {
                        experienceId: e.getId()
                    })
                }
                return i
            }));
            return fs.debug(t.toString()), fs.groupEnd(), this.statusModel.setExperience(e, "preconditions", t), t
        }
        passVariationPreconditions() {
            const e = this.variation.getExperience();
            fs.group("check variations preconditions " + this.variation.getId());
            const t = this.variation.getPreconditions().every((t => {
                let i = !1;
                try {
                    i = ks.evalBoolean(t), fs.info(`Variation ${e.getId()}/${this.variation.getId()} precondition => ${i}`)
                } catch (s) {
                    const t = new bt(`Variation (${this.variation.getId()}) precondition code execution failed`, s);
                    i = !1, fs.error(t, 16, {
                        experienceId: e.getId(),
                        variationId: this.variation.getId()
                    })
                }
                return i
            }));
            return fs.debug(t.toString()), fs.groupEnd(), this.statusModel.setVariation(this.variation, "preconditions", t), t
        }
        hasAppliedPageChanges() {
            return this.findDependentPageChangelistTasks().every((e => e.isDone()))
        }
        findDependentPageChangelistTasks() {
            return this.variation.getExperience().getPages().map((e => this.pageContext.getPageChangelistTask(e))).filter((e => e.isPresent())).map((e => e.get()))
        }
    }
    const ro = /^G-[\dA-Z]+$/,
        oo = e => "string" == typeof e && ro.test(e),
        ao = e => {
            const t = [],
                i = e => {
                    oo(e) && !t.includes(e) && (fs.debug(`Found GA4 Measurement ID: ${e}`), t.push(e))
                },
                s = e.google_tag_data;
            m(s) && Object.values(s).forEach((e => {
                m(e) && Object.keys(e).forEach((e => {
                    i(e)
                }))
            }));
            const n = e.google_tag_manager;
            m(n) && Object.values(n).forEach((e => {
                m(e) && Object.values(e).forEach((e => {
                    h(e) && e.forEach((({
                        message: e
                    }) => {
                        Rs(e) && "config" === e[0] && i(e[1])
                    }))
                }))
            }));
            const {
                dataLayer: r
            } = e;
            return h(r) && r.forEach((e => {
                m(e) ? Object.values(e).forEach((e => {
                    Rs(e) && "config" === e[0] && i(e[1])
                })) : Rs(e) && "config" === e[0] && i(e[1])
            })), {
                ga4: t
            }
        };
    class lo extends xr {
        constructor(e, t, i) {
            super(), __publicField(this, "targetUrl"), __publicField(this, "environment"), __publicField(this, "variation"), this.targetUrl = e, this.environment = t, this.variation = i
        }
        toString() {
            return "RedirectTask(" + this.targetUrl + ")"
        }
        inTransaction() {
            return !1
        }
        isUnloading() {
            return !0
        }
        getRedirectVariation() {
            return this.variation
        }
        run() {
            return fs.info("Executing redirect to " + this.targetUrl), this.environment.redirect(this.targetUrl), wr.SUCCEEDED
        }
    }
    class co extends xr {
        constructor(e, t, i, s) {
            super(), __publicField(this, "environment"), __publicField(this, "ga4Integration"), __publicField(this, "variation"), __publicField(this, "override"), __publicField(this, "states", {
                ga4State: "notStarted"
            }), __publicField(this, "ga4MeasurementIdQueue", []), __publicField(this, "taskStartTime"), this.environment = e, this.ga4Integration = t, this.variation = i, this.override = s, R(!t.isPresent() || t.get().isEnabled())
        }
        static get GA4_EVENT_NAME() {
            return "variation_viewed"
        }
        static get WAIT_FOR_GA_TIMEOUT_MS() {
            return 3e3
        }
        static get WAIT_FOR_PROPERTY_IDS_MS() {
            return 5e3
        }
        static isSent(e) {
            return "sent" === e || co.isCompleted(e)
        }
        static isCompleted(e) {
            return co.isSuccessful(e) || "failed" === e
        }
        static isSuccessful(e) {
            return "delivered" === e || "skipped" === e
        }
        cleanup() {
            fs.group("GoogleAnalyticsTask.cleanup()");
            const e = this.ga4Integration.map((e => e.isEnabled())).orElse(!1),
                t = this.manager.findTasks((e => e instanceof lo)).map((e => e.getRedirectVariation().getId())),
                i = `GoogleAnalyticsTask did not complete. Enabled: { ga4: ${e} }, GaStates: ${Ie(this.states)}, ga4MeasurementIdQueue: ${Ie(this.ga4MeasurementIdQueue)}, redirectVariationId(s): ${Ie(t)}, Task ran for: ${this.getTimePassedMs()}ms`;
            fs.error(i, 258), fs.groupEnd()
        }
        toString() {
            return "GoogleAnalyticsTask(" + this.variation.getId() + ")"
        }
        inTransaction() {
            return !0
        }
        isUnloading() {
            return !1
        }
        run() {
            return this.sendOnce(), this.isAllCompleted() ? this.isAllSuccessful() ? wr.SUCCEEDED : wr.FAILED : (fs.debug("Waiting for GA delivery confirmation"), wr.TRY_LATER)
        }
        isAllSent() {
            return co.isSent(this.states.ga4State)
        }
        isAllCompleted() {
            return co.isCompleted(this.states.ga4State)
        }
        isAllSuccessful() {
            return co.isSuccessful(this.states.ga4State)
        }
        setState(e, t) {
            this.states[e] !== t && (fs.debug(`Transitioning ${e} from ${this.states[e]} to ${t}`), this.states[e] = this.isValidStateTransition(this.states[e], t) ? t : "failed")
        }
        isValidStateTransition(e, t) {
            switch (e) {
                case "notStarted":
                    if ("polling" === t || "skipped" === t) return !0;
                    break;
                case "polling":
                    if ("sent" === t || "failed" === t) return !0;
                    break;
                case "sent":
                    if ("delivered" === t) return !0
            }
            return this.sendError(`Invalid state transition. Cannot transition from "${e}" to "${t}".`, 189), !1
        }
        sendOnce() {
            if (!this.isAllSent()) {
                void 0 === this.taskStartTime && (this.taskStartTime = this.environment.getNowDate(), fs.debug(`GoogleAnalyticsTask start time: ${this.taskStartTime.getTime()}`));
                const e = this.getTimePassedMs();
                if (this.override.sendGoogleAnalytics().orElse(!0)) {
                    this.ga4Integration.ifPresent((() => {
                        fs.debug("GoogleAnalytics4 - integration is enabled")
                    })).ifAbsent((() => {
                        fs.debug("Google Analytics 4 - integration is not enabled"), this.setState("ga4State", "skipped")
                    }));
                    this.waitForDataLayer(e).ifPresent((t => {
                        this.ga4Integration.ifPresent((i => {
                            if (i.isAutoConfig()) {
                                fs.debug("GoogleAnalytics4 - AutoConfig is enabled");
                                const s = this.waitForMeasurementId(e);
                                s.length > 0 && this.sendToGa4Once(i, t, s)
                            } else fs.debug("GoogleAnalytics4 - AutoConfig is disabled"), this.sendToGa4Once(i, t)
                        }))
                    }))
                } else fs.debug("Google Analytics - Override behavior has prevented all events from being sent"), this.setState("ga4State", "skipped")
            }
        }
        sendError(e, t) {
            fs.error(e, t, {
                variationId: this.variation.getId(),
                experienceId: this.variation.getExperience().getId()
            })
        }
        shimGtag(e) {
            return function() {
                e.push(arguments)
            }
        }
        waitForDataLayer(e) {
            const t = this.environment.getWindow();
            if (co.isSent(this.states.ga4State) || co.isCompleted(this.states.ga4State) || this.setState("ga4State", "polling"), void 0 === t.dataLayer) fs.debug(`window.dataLayer not defined after ${e} ms`);
            else {
                if (Os(t.dataLayer)) return j.of(t.dataLayer);
                fs.debug("window.dataLayer is not an array")
            }
            return e >= co.WAIT_FOR_GA_TIMEOUT_MS && (co.isCompleted(this.states.ga4State) || this.setState("ga4State", "failed"), this.sendError(`window.dataLayer not present within ${co.WAIT_FOR_GA_TIMEOUT_MS} ms`, 185)), j.empty()
        }
        waitForMeasurementId(e) {
            const t = ao(this.environment.getWindow());
            return 0 === t.ga4.length ? (fs.debug(`Auto-configured Measurement ID not present after ${e} ms`), this.setState("ga4State", "polling"), e >= co.WAIT_FOR_PROPERTY_IDS_MS && (this.setState("ga4State", "failed"), this.sendError(`GoogleAnalytics4 - Auto-configured Measurement ID is not present within ${co.WAIT_FOR_PROPERTY_IDS_MS} ms`, 187)), []) : t.ga4
        }
        sendToGa4Once(e, t, i) {
            if (!co.isSent(this.states.ga4State)) {
                const s = this.shimGtag(t),
                    n = null != i ? i : e.getMeasurementIds(),
                    r = {
                        experienceId: this.variation.getExperience().getId(),
                        experienceName: this.variation.getExperience().getName(),
                        experienceType: this.variation.getExperience().getType(),
                        variationId: this.variation.getId(),
                        variationName: this.variation.getName(),
                        ccStatus: this.variation.getId() === it ? "holdout" : "optimized",
                        send_to: n,
                        event_callback: e => {
                            oo(e) && (this.handleGaEventSuccess(`GA4 configuration (iint.ga4) + gtag.js. Measurement ID: ${e}`), this.checkDelivered("ga4State", e))
                        }
                    };
                fs.debug(`Sending GA4 event using gtag.js: ${Ie(r)}`), this.ga4MeasurementIdQueue.push(...n), fs.debug("Google Analytics 4 payload sent"), this.setState("ga4State", "sent"), s("event", co.GA4_EVENT_NAME, r)
            }
        }
        handleGaEventSuccess(e) {
            fs.debug(`Google Analytics payload delivery complete - using ${e}`)
        }
        checkDelivered(e, t) {
            const i = this.ga4MeasurementIdQueue;
            zs(i, t), 0 === i.length && this.setState(e, "delivered")
        }
        getTimePassedMs() {
            if (void 0 === this.taskStartTime) return 0;
            return this.environment.getNowDate().getTime() - this.taskStartTime.getTime()
        }
    }
    class uo extends xr {
        constructor(e, t, i, s) {
            super(), __publicField(this, "environment"), __publicField(this, "mixpanelIntegration"), __publicField(this, "variation"), __publicField(this, "override"), __publicField(this, "sent", !1), __publicField(this, "delivered", !1), __publicField(this, "timedOut", !1), __publicField(this, "taskStartTime"), this.environment = e, this.mixpanelIntegration = t, this.variation = i, this.override = s
        }
        static get WAIT_FOR_MIXPANEL_TIMEOUT_MS() {
            return 3e3
        }
        toString() {
            return "MixpanelTask(" + this.variation.getId() + ")"
        }
        inTransaction() {
            return !0
        }
        isUnloading() {
            return !1
        }
        run() {
            return this.sendOnce(), this.timedOut ? wr.FAILED : this.sent ? this.delivered ? wr.SUCCEEDED : (fs.debug("Waiting for Mixpanel delivery confirmation"), wr.TRY_LATER) : wr.TRY_LATER
        }
        sendOnce() {
            if (!this.sent) {
                void 0 === this.taskStartTime && (this.taskStartTime = this.environment.getNowDate(), fs.debug(`MixpanelTask start time: ${this.taskStartTime.getTime()}`));
                if (this.environment.getNowDate().getTime() - this.taskStartTime.getTime() >= uo.WAIT_FOR_MIXPANEL_TIMEOUT_MS) return fs.error(`MixpanelTask - window.mixpanel.track not present within ${uo.WAIT_FOR_MIXPANEL_TIMEOUT_MS} ms`, 199), void(this.timedOut = !0);
                if (this.override.sendMixpanel().orElse(!0)) {
                    const e = this.environment.getWindow();
                    if (void 0 === e.mixpanel) return void fs.debug("window.mixpanel not defined");
                    if (void 0 === e.mixpanel.track) return void fs.debug("window.mixpanel.track not defined");
                    const t = this.mixpanelIntegration.getEventName(),
                        i = {
                            [`${this.variation.getExperience().getName()} (${this.variation.getExperience().getId()})`]: `${this.variation.getName()} (${this.variation.getId()})`
                        };
                    e.mixpanel.track(t, i, {
                        send_immediately: !0
                    }, (() => {
                        fs.debug("Mixpanel payload delivery complete"), this.delivered = !0
                    })), fs.debug("Mixpanel payload sent")
                } else this.delivered = !0, fs.debug("Skipping Mixpanel");
                this.sent = !0
            }
        }
    }
    class ho extends xr {
        constructor(e, t, i, s) {
            super(), __publicField(this, "environment"), __publicField(this, "segmentIntegration"), __publicField(this, "variation"), __publicField(this, "override"), __publicField(this, "sent", !1), __publicField(this, "delivered", !1), __publicField(this, "timedOut", !1), __publicField(this, "onTrack", !1), __publicField(this, "onReady", !1), __publicField(this, "trackCallback", !1), __publicField(this, "taskStartTime"), this.environment = e, this.segmentIntegration = t, this.variation = i, this.override = s
        }
        static get WAIT_FOR_SEGMENT_TIMEOUT_MS() {
            return 3e3
        }
        toString() {
            return "SegmentAnalyticsTask(" + this.variation.getId() + ")"
        }
        inTransaction() {
            return !0
        }
        isUnloading() {
            return !1
        }
        run() {
            return this.sendOnce(), this.timedOut ? wr.FAILED : this.sent ? this.delivered || this.onReady && this.onTrack && this.trackCallback ? wr.SUCCEEDED : (fs.debug("Waiting for Segment delivery confirmation"), wr.TRY_LATER) : wr.TRY_LATER
        }
        sendOnce() {
            if (!this.sent) {
                void 0 === this.taskStartTime && (this.taskStartTime = this.environment.getNowDate(), fs.debug(`SegmentAnalyticsTask start time: ${this.taskStartTime.getTime()}`));
                if (this.environment.getNowDate().getTime() - this.taskStartTime.getTime() >= ho.WAIT_FOR_SEGMENT_TIMEOUT_MS) return fs.error(`SegmentAnalyticsTask - window.analytics.track not present within ${ho.WAIT_FOR_SEGMENT_TIMEOUT_MS} ms`, 200), void(this.timedOut = !0);
                if (this.override.sendSegmentAnalytics().orElse(!0)) {
                    const e = this.environment.getWindow();
                    if (void 0 === e.analytics) return void fs.debug("window.analytics not defined");
                    if (void 0 === e.analytics.track) return void fs.debug("window.analytics.track not defined");
                    const t = this.segmentIntegration.getEventName();
                    e.analytics.on("track", ((e, i) => {
                        e === t && void 0 !== i.variationId && i.variationId === this.variation.getId() && (fs.debug("Segment on track event received"), this.onTrack = !0)
                    }));
                    const i = {
                        campaignId: this.variation.getExperience().getCampaign().getId(),
                        campaignName: this.variation.getExperience().getCampaign().getName(),
                        experimentId: this.variation.getExperience().getId(),
                        experimentName: this.variation.getExperience().getName(),
                        variationName: this.variation.getName(),
                        variationId: this.variation.getId(),
                        nonInteraction: 1
                    };
                    e.analytics.track(t, i, (() => {
                        fs.debug("Segment track() callback called"), this.trackCallback = !0
                    })), e.analytics.ready((() => {
                        fs.debug("Segment ready() callback called"), this.onReady = !0
                    }))
                } else this.delivered = !0;
                fs.debug("Segment payload sent"), this.sent = !0
            }
        }
    }
    class go extends xr {
        constructor(e, t, i) {
            super(), __publicField(this, "variation"), __publicField(this, "browserEventLogger"), __publicField(this, "decisionContext"), __publicField(this, "sent", !1), __publicField(this, "deliveryStatus", wr.NOT_STARTED), this.variation = N(e), this.browserEventLogger = N(t), this.decisionContext = N(i)
        }
        toString() {
            return "ViewEventTask(" + this.variation.getId() + ")"
        }
        getEntityIds() {
            return {
                variationId: this.variation.getId(),
                experienceId: this.variation.getExperience().getId()
            }
        }
        inTransaction() {
            return !0
        }
        isUnloading() {
            return !1
        }
        run() {
            return this.sendOnce(), this.deliveryStatus === wr.SUCCEEDED ? wr.SUCCEEDED : this.deliveryStatus === wr.FAILED ? wr.FAILED : (fs.debug("Waiting for view event delivery confirmation"), wr.TRY_LATER)
        }
        sendOnce() {
            this.sent || (fs.info(`Variation ${this.variation.getExperience().getId()}/${this.variation.getId()} sending view event`), this.browserEventLogger.sendView(this.variation, this.decisionContext).then((() => {
                fs.info(`Variation ${this.variation.getExperience().getId()}/${this.variation.getId()} view event delivery success`), this.deliveryStatus = wr.SUCCEEDED
            })).catch((e => {
                const t = new bt(`Variation ${this.variation.getExperience().getId()}/${this.variation.getId()} view event delivery failed`, e);
                fs.warn(t, 93, {
                    experienceId: this.variation.getExperience().getId(),
                    variationId: this.variation.getId()
                }), this.deliveryStatus = wr.FAILED
            })), this.sent = !0)
        }
    }
    class po extends xr {
        constructor(e, t) {
            super(), __publicField(this, "environment"), __publicField(this, "viewabilityTimeMs"), __publicField(this, "startViewableTimeMs"), __publicField(this, "ignoreCallback", !1), __publicField(this, "activeEventListener", !1), this.environment = e, this.viewabilityTimeMs = t
        }
        toString() {
            return "ViewabilityTask()"
        }
        inTransaction() {
            return !1
        }
        isUnloading() {
            return !1
        }
        cleanup() {
            this.ignoreCallback = !0
        }
        run() {
            const e = this.environment.getNowUnixTimeMs();
            if (!this.environment.isNowDocumentHidden().orElse(!0)) {
                void 0 === this.startViewableTimeMs && (this.startViewableTimeMs = e);
                const t = e - this.startViewableTimeMs;
                return t >= this.viewabilityTimeMs ? (fs.debug(`page viewable for ${t}ms > threshold ${this.viewabilityTimeMs}ms`), wr.SUCCEEDED) : (fs.debug(`page viewable for ${t}ms < threshold ${this.viewabilityTimeMs}ms`), wr.TRY_LATER)
            }
            return this.startViewableTimeMs = void 0, this.activeEventListener || (fs.debug("page not viewable, scheduling visibility change listener"), this.environment.addListenerVisibilityChange((() => {
                try {
                    this.ignoreCallback ? fs.debug("visibility change event - ignoring") : (fs.debug("visibility change event - ask TM for polling"), this.setStatusTryLater(), this.manager.runNow())
                } catch (e) {
                    const t = new bt("Exception in ViewabilityTask visibilitychange handler", e);
                    fs.error(t, 238)
                }
            })), this.activeEventListener = !0), wr.WAITING
        }
    }
    class mo extends xr {
        constructor(e, t, i, s, n, r, o, a, l, c, u) {
            super(), __publicField(this, "variation"), __publicField(this, "environment"), __publicField(this, "browserEventLogger"), __publicField(this, "customerStorage"), __publicField(this, "attributeStorage"), __publicField(this, "activityStorage"), __publicField(this, "user"), __publicField(this, "decisionContext"), __publicField(this, "startPageviewId"), __publicField(this, "override"), __publicField(this, "viewabilityTask"), __publicField(this, "getVariationRecordedCallbackTuples"), __publicField(this, "haveUpdatedCustomerStorage", !1), __publicField(this, "haveUpdatedActivityStorage", !1), __publicField(this, "haveScheduledGoogleAnalytics", !1), __publicField(this, "googleAnalyticsTask"), __publicField(this, "haveScheduledSegmentAnalytics", !1), __publicField(this, "segmentAnalyticsTask"), __publicField(this, "haveScheduledMixpanel", !1), __publicField(this, "mixpanelTask"), __publicField(this, "viewEventTask"), __publicField(this, "haveRunSuccessCallbacks", !1), this.variation = N(e), this.environment = N(t), this.browserEventLogger = N(i), this.customerStorage = N(s), this.attributeStorage = N(n), this.activityStorage = N(r), this.user = N(o), this.decisionContext = N(a), this.startPageviewId = N(l), this.override = N(c), this.getVariationRecordedCallbackTuples = N(u)
        }
        toString() {
            return "RecordVariationTask(" + this.variation.getId() + ")"
        }
        getEntityIds() {
            return {
                variationId: this.variation.getId(),
                experienceId: this.variation.getExperience().getId()
            }
        }
        inTransaction() {
            return !1
        }
        isUnloading() {
            return !1
        }
        getNotDoneDependencies() {
            const e = [];
            return void 0 === this.googleAnalyticsTask || this.googleAnalyticsTask.isDone() || e.push(this.googleAnalyticsTask), void 0 === this.segmentAnalyticsTask || this.segmentAnalyticsTask.isDone() || e.push(this.segmentAnalyticsTask), void 0 === this.mixpanelTask || this.mixpanelTask.isDone() || e.push(this.mixpanelTask), void 0 === this.viewEventTask || this.viewEventTask.isDone() || e.push(this.viewEventTask), void 0 === this.viewabilityTask || this.viewabilityTask.isDone() || e.push(this.viewabilityTask), e
        }
        updateCustomerStorageOnce() {
            this.haveUpdatedCustomerStorage || (fs.debug("RecordVariationTask.updateCustomerStorageOnce() " + this.variation.getId()), this.decisionContext.isStickyVariation(this.variation) ? this.customerStorage.saveVariationStickySelection(this.variation, this.environment.getPageviewId()) : this.customerStorage.saveVariationPredictionSelection(this.variation, this.decisionContext.getModelVersion(this.variation.getExperience().getId()), this.environment.getPageviewId()), this.haveUpdatedCustomerStorage = !0)
        }
        updateActivityStorageOnce() {
            if (!this.haveUpdatedActivityStorage) {
                fs.debug(`RecordVariationTask.haveUpdatedActivityStorage() ${this.variation.getId()}`);
                const e = eo.buildViewActivity(this.variation, this.environment, this.user, this.attributeStorage, this.customerStorage);
                this.activityStorage.add(e), this.haveUpdatedActivityStorage = !0
            }
        }
        sendGoogleAnalyticsOnce() {
            if (!this.haveScheduledGoogleAnalytics) {
                const e = this.variation.getExperience().getCampaign().getCustomer().getIntegrationGoogle4Analytics(),
                    t = e.isPresent() && e.get().isEnabled();
                t && (this.googleAnalyticsTask = new co(this.environment, t ? e : j.empty(), this.variation, this.override), this.manager.addTask(this.googleAnalyticsTask)), this.haveScheduledGoogleAnalytics = !0
            }
        }
        sendSegmentAnalyticsOnce() {
            this.haveScheduledSegmentAnalytics || (this.variation.getExperience().getCampaign().getCustomer().getIntegrationSegmentAnalytics().ifPresent((e => {
                e.isEnabled() && (this.segmentAnalyticsTask = new ho(this.environment, e, this.variation, this.override), this.manager.addTask(this.segmentAnalyticsTask))
            })), this.haveScheduledSegmentAnalytics = !0)
        }
        sendMixpanelOnce() {
            this.haveScheduledMixpanel || (this.variation.getExperience().getCampaign().getCustomer().getIntegrationMixpanel().ifPresent((e => {
                e.isEnabled() && (this.mixpanelTask = new uo(this.environment, e, this.variation, this.override), this.manager.addTask(this.mixpanelTask))
            })), this.haveScheduledMixpanel = !0)
        }
        sendViewEventOnce() {
            void 0 === this.viewEventTask && (this.viewEventTask = new go(this.variation, this.browserEventLogger, this.decisionContext), this.manager.addTask(this.viewEventTask))
        }
        checkDependency(e) {
            switch (e.getStatus()) {
                case wr.NOT_STARTED:
                case wr.TRY_LATER:
                case wr.WAITING:
                    return wr.TRY_LATER;
                case wr.FAILED:
                case wr.CANCELED:
                    return wr.FAILED;
                case wr.SUCCEEDED:
                    return wr.SUCCEEDED;
                default:
                    return fs.error(`Unrecognized status from dependency ${e.getStatus()}`, 88, {
                        variationId: this.variation.getId(),
                        experienceId: this.variation.getExperience().getId()
                    }), wr.FAILED
            }
        }
        getRecordViewStatus() {
            if (!this.haveUpdatedCustomerStorage) return fs.debug("Waiting for CustomerStorage to be updated"), wr.TRY_LATER;
            if (!this.haveScheduledGoogleAnalytics) return fs.debug("Waiting for GoogleAnalytics to be scheduled"), wr.TRY_LATER;
            if (void 0 !== this.googleAnalyticsTask) {
                const e = this.checkDependency(this.googleAnalyticsTask);
                if (e !== wr.SUCCEEDED) return fs.debug(`GoogleAnalytics returned ${wr[e]}`), e
            }
            if (!this.haveScheduledSegmentAnalytics) return fs.debug("Waiting for SegmentAnalytics to be scheduled"), wr.TRY_LATER;
            if (void 0 !== this.segmentAnalyticsTask) {
                const e = this.checkDependency(this.segmentAnalyticsTask);
                if (e !== wr.SUCCEEDED) return fs.debug(`SegmentAnalytics returned ${wr[e]}`), e
            }
            if (!this.haveScheduledMixpanel) return fs.debug("Waiting for Mixpanel to be scheduled"), wr.TRY_LATER;
            if (void 0 !== this.mixpanelTask) {
                const e = this.checkDependency(this.mixpanelTask);
                if (e !== wr.SUCCEEDED) return fs.debug(`Mixpanel returned ${wr[e]}`), e
            }
            if (void 0 === this.viewEventTask) return fs.debug("Waiting for ViewEvent to be scheduled"), wr.TRY_LATER;
            const e = this.checkDependency(this.viewEventTask);
            return e !== wr.SUCCEEDED ? (fs.debug(`ViewEvent returned ${wr[e]}`), e) : wr.SUCCEEDED
        }
        doSuccessCallbacksOnce() {
            this.haveRunSuccessCallbacks || (this.getVariationRecordedCallbackTuples().forEach((e => {
                const t = e[0];
                try {
                    t({
                        experienceId: this.variation.getExperience().getId(),
                        experienceName: this.variation.getExperience().getName(),
                        experienceType: this.variation.getExperience().getType(),
                        variationId: this.variation.getId(),
                        variationName: this.variation.getName(),
                        ccStatus: this.variation.getId() === it ? "holdout" : "optimized"
                    })
                } catch (i) {
                    const e = new bt("Caught exception in onVariationRecorded success callback", i);
                    xo.consoleError(e.message, 165)
                }
            })), this.haveRunSuccessCallbacks = !0)
        }
        scheduleViewabilityOnce(e) {
            void 0 === this.viewabilityTask && (this.viewabilityTask = new po(this.environment, e), this.manager.addTask(this.viewabilityTask))
        }
    }
    class vo extends mo {
        toString() {
            return "RecordCodeVariationTask(" + this.variation.getId() + ")"
        }
        run() {
            this.startPageviewId !== this.environment.getPageviewId() && fs.error(`RecordCodeVariationTask executing, but pageviewId has changed from ${this.startPageviewId} to ${this.environment.getPageviewId()}`, 85, {
                variationId: this.variation.getId(),
                experienceId: this.variation.getExperience().getId()
            }), this.scheduleViewabilityOnce(ee);
            const e = j.ofNullable(this.viewabilityTask).map((e => e.getStatus())).orElse(wr.NOT_STARTED);
            return xr.isDone(e) ? e !== wr.SUCCEEDED ? (fs.info(`Variation ${this.variation.getExperience().getId()}/${this.variation.getId()} aborting record view event since viewability did not succeed`), wr.CANCELED) : (this.updateCustomerStorageOnce(), this.updateActivityStorageOnce(), this.sendGoogleAnalyticsOnce(), this.sendSegmentAnalyticsOnce(), this.sendMixpanelOnce(), this.sendViewEventOnce(), this.doSuccessCallbacksOnce(), this.getRecordViewStatus()) : (fs.debug("RecordCodeVariationTask waiting for viewability"), wr.TRY_LATER)
        }
    }
    class bo extends no {
        constructor() {
            super(...arguments), __publicField(this, "changelistTask")
        }
        toString() {
            return `ExecuteChangelistVariationTask(${this.variation.getId()})`
        }
        getNotDoneDependencies() {
            return void 0 === this.changelistTask || this.changelistTask.isDone() ? [] : [this.changelistTask]
        }
        isReadyToExecute() {
            if (void 0 === this.changelistTask) {
                const e = this.passDependencies(),
                    t = this.passExperiencePreconditions(),
                    i = this.passVariationPreconditions(),
                    s = this.hasAppliedPageChanges();
                return e && t && i && s
            }
            return !0
        }
        executeVariation() {
            if (void 0 === this.changelistTask) {
                const e = this.variation.getChanges().map(((e, t) => Pn(e, un(this.variation), t, this.attributeData, this.environment, this.browserStorage, this.extensionManager)));
                this.changelistTask = new so(e, (() => {
                    this.onReadyToRender()
                }), {
                    variationId: this.variation.getId(),
                    experienceId: this.variation.getExperience().getId()
                }, this.elementObserver), this.manager.addTask(this.changelistTask)
            }
            if (this.changelistTask.isDone()) {
                if (this.changelistTask.getStatus() === wr.FAILED || this.changelistTask.getStatus() === wr.CANCELED) return this.statusModel.setVariation(this.variation, "failChange", !0), wr.FAILED;
                if (this.changelistTask.getStatus() === wr.SUCCEEDED) return this.manager.addTask(new vo(this.variation, this.environment, this.browserEventLogger, this.customerStorage, this.attributeStorage, this.activityStorage, this.user, this.decisionContext, this.startPageviewId, this.override, this.getVariationRecordedCallbackTuples)), this.statusModel.setVariation(this.variation, "apply", !0), wr.SUCCEEDED
            }
            return wr.TRY_LATER
        }
    }
    class fo extends no {
        toString() {
            return `ExecuteCodeVariationTask(${this.variation.getId()})`
        }
        executeVariation() {
            if (!this.injectVariationCss(this.variation)) return this.statusModel.setVariation(this.variation, "failCSS", !0), this.onReadyToRender(), wr.FAILED;
            this.elementObserver.detachObserver();
            const e = this.runVariationCode(this.variation);
            return this.elementObserver.attachObserver(), e ? (this.onReadyToRender(), this.manager.addTask(new vo(this.variation, this.environment, this.browserEventLogger, this.customerStorage, this.attributeStorage, this.activityStorage, this.user, this.decisionContext, this.startPageviewId, this.override, this.getVariationRecordedCallbackTuples)), this.statusModel.setVariation(this.variation, "apply", !0), wr.SUCCEEDED) : (this.statusModel.setVariation(this.variation, "failCode", !0), this.onReadyToRender(), wr.FAILED)
        }
        runVariationCode(e) {
            if (e.getCode().isPresent()) {
                const i = e.getCode().get();
                try {
                    fs.info(`Variation ${e.getExperience().getId()}/${e.getId()} running code`), ks.eval(i)
                } catch (t) {
                    const i = new bt(`Variation (${e.getId()}) code execution failed`, t);
                    return fs.error(i, 17, {
                        variationId: e.getId(),
                        experienceId: e.getExperience().getId()
                    }), !1
                }
            }
            return !0
        }
    }
    class Eo extends mo {
        constructor(e, t, i, s, n, r, o, a, l, c, u, d, h) {
            super(e, t, i, s, n, r, o, a, l, c, u), __publicField(this, "redirectUrl"), __publicField(this, "onReadyToRender"), __publicField(this, "startTimeMs"), __publicField(this, "redirectScheduled", !1), this.redirectUrl = N(d), this.onReadyToRender = N(h)
        }
        static get REDIRECT_TIME_BUDGET_MS() {
            return 3e3
        }
        toString() {
            return "RecordRedirectVariationTask(" + this.variation.getId() + ")"
        }
        cleanup() {
            this.onReadyToRender()
        }
        run() {
            this.startPageviewId !== this.environment.getPageviewId() && fs.error(`RecordRedirectVariationTask executing, but pageviewId has changed from ${this.startPageviewId} to ${this.environment.getPageviewId()}`, 87, {
                variationId: this.variation.getId(),
                experienceId: this.variation.getExperience().getId()
            }), this.scheduleViewabilityOnce(te);
            const e = j.ofNullable(this.viewabilityTask).map((e => e.getStatus())).orElse(wr.NOT_STARTED);
            if (!xr.isDone(e)) return fs.debug("RecordCodeVariationTask waiting for viewability"), wr.TRY_LATER;
            if (e !== wr.SUCCEEDED) return fs.info(`Variation ${this.variation.getExperience().getId()}/${this.variation.getId()} aborting record view event since viewability did not succeed`), wr.CANCELED;
            this.startTimeMs || (this.startTimeMs = this.environment.getNowUnixTimeMs());
            let t = this.runSteps();
            return !xr.isDone(t) && this.hasExceededTimeBudget() && (this.scheduleRedirectOnce(), t = wr.FAILED), this.doSuccessCallbacksOnce(), t
        }
        runSteps() {
            this.updateCustomerStorageOnce(), this.updateActivityStorageOnce(), this.sendGoogleAnalyticsOnce(), this.sendSegmentAnalyticsOnce(), this.sendMixpanelOnce(), this.sendViewEventOnce();
            const e = this.getRecordViewStatus();
            return xr.isDone(e) ? (this.scheduleRedirectOnce(), wr.SUCCEEDED) : e
        }
        scheduleRedirectOnce() {
            if (!this.redirectScheduled) {
                const e = new lo(this.redirectUrl, this.environment, this.variation);
                this.manager.addTask(e), this.redirectScheduled = !0, this.environment.getWindow().setTimeout((() => {
                    this.onReadyToRender()
                }), this.getTimeRemainingMs() + q)
            }
        }
        getTimeRemainingMs() {
            const e = this.environment.getNowUnixTimeMs() - this.startTimeMs,
                t = Eo.REDIRECT_TIME_BUDGET_MS;
            return fs.debug("getTimeRemainingMs elapsed: " + e + ", budget: " + t), t - e
        }
        hasExceededTimeBudget() {
            return this.getTimeRemainingMs() < 0
        }
    }
    class _o extends no {
        toString() {
            return `ExecuteRedirectVariationTask(${this.variation.getId()})`
        }
        executeVariation() {
            const e = this.runVariationRedirectCode(this.variation);
            if (void 0 === e) return this.onReadyToRender(), wr.FAILED;
            return this.injectVariationCss(this.variation) ? (this.manager.addTask(new Eo(this.variation, this.environment, this.browserEventLogger, this.customerStorage, this.attributeStorage, this.activityStorage, this.user, this.decisionContext, this.startPageviewId, this.override, this.getVariationRecordedCallbackTuples.bind(this), e, this.onReadyToRender.bind(this))), this.statusModel.setVariation(this.variation, "apply", !0), wr.SUCCEEDED) : (this.onReadyToRender(), wr.FAILED)
        }
        runVariationRedirectCode(e) {
            let t;
            if (e.getRedirect().isPresent()) {
                const s = e.getRedirect().get();
                try {
                    fs.info(`Variation ${e.getExperience().getId()}/${e.getId()} running redirect code`), t = ks.evalString(s), fs.info(`Redirect URL is ${t}`)
                } catch (i) {
                    const s = new bt(`Variation (${e.getId()}) redirect code execution failed`, i);
                    fs.error(s, 18, {
                        variationId: e.getId(),
                        experienceId: e.getExperience().getId()
                    }), t = void 0
                }
            }
            return t
        }
    }

    function yo(e, t, i, s, n, r, o, a, l, c, u, d, h, g, p, m, v, b) {
        let f;
        return f = m.isTypeChange() ? bo : m.isRedirect() ? _o : fo, new f(e, t, i, s, n, r, o, a, l, c, u, d, h, g, p, m, v, b)
    }
    class So extends xr {
        constructor(e, t, i, s, n, r, o, a, l, c, u, d, h, g, p, m, v) {
            super(), __publicField(this, "environment"), __publicField(this, "browserStorage"), __publicField(this, "extensionManager"), __publicField(this, "browserEventLogger"), __publicField(this, "attributeStorage"), __publicField(this, "activityStorage"), __publicField(this, "customerStorage"), __publicField(this, "decisionContext"), __publicField(this, "pageContext"), __publicField(this, "attributeData"), __publicField(this, "user"), __publicField(this, "override"), __publicField(this, "statusModel"), __publicField(this, "hider"), __publicField(this, "getVariationRecordedCallbackTuples"), __publicField(this, "elementObserver"), __publicField(this, "startPageviewId"), __publicField(this, "startTimeMs"), __publicField(this, "executeVariationTasks", {}), __publicField(this, "didHide", !1), this.environment = N(e), this.browserStorage = N(t), this.extensionManager = N(i), this.environment = N(e), this.browserEventLogger = N(s), this.attributeStorage = N(n), this.activityStorage = N(r), this.customerStorage = N(o), this.decisionContext = N(a), this.pageContext = N(l), this.attributeData = N(c), this.user = N(u), this.override = N(d), this.statusModel = N(h), this.hider = N(g), this.getVariationRecordedCallbackTuples = N(m), this.elementObserver = N(v), this.startTimeMs = this.environment.getNowUnixTimeMs(), this.startPageviewId = e.getPageviewId(), this.override.requestAnimationFrame().orElse(p) && this.environment.getWindow().requestAnimationFrame((() => {
                this.handleRaf()
            }))
        }
        static get RAF_RUNTIME_MS() {
            return 3e4
        }
        toString() {
            return `ExecuteExperiencesTask(${this.startPageviewId})`
        }
        inTransaction() {
            return !1
        }
        isUnloading() {
            return !1
        }
        getStartPageviewId() {
            return this.startPageviewId
        }
        hideExperiencesOnce() {
            this.didHide || (this.hider.hideExperiences(this.decisionContext.getExperiences(), this.browserStorage, this.attributeData), this.hider.revealDocumentIfAllRegionsHidden(), this.didHide = !0)
        }
        run() {
            return this.decisionContext.getExperiences().forEach((e => {
                if (this.decisionContext.hasNext(e.getId())) {
                    const t = this.decisionContext.getFirst(e.getId());
                    void 0 === this.executeVariationTasks[e.getId()] && (fs.debug(`Queueing ExecuteVariationTask for ExperienceID: ${e.getId()}, Variation ID: ${t.getId()}`), this.executeVariationTasks[e.getId()] = yo(this.environment, this.browserStorage, this.extensionManager, this.browserEventLogger, this.customerStorage, this.attributeStorage, this.activityStorage, this.pageContext, this.attributeData, this.decisionContext, this.user, this.override, this.statusModel, this.startPageviewId, this.hider, t, this.getVariationRecordedCallbackTuples, this.elementObserver), this.manager.addTask(this.executeVariationTasks[e.getId()]));
                    const i = this.executeVariationTasks[e.getId()];
                    i.getStatus() === wr.FAILED || i.getStatus() === wr.CANCELED ? this.handleOnExperienceError(e) : i.getStatus() === wr.SUCCEEDED && this.handleOnExperienceSuccess(e)
                }
            })), this.decisionContext.isEmpty() ? wr.SUCCEEDED : wr.TRY_LATER
        }
        handleOnExperienceSuccess(e) {
            this.decisionContext.removeExperience(e.getId())
        }
        handleOnExperienceError(e) {
            this.decisionContext.removeExperience(e.getId()), this.hider.revealExperience(e, this.browserStorage, this.attributeData)
        }
        handleRaf() {
            this.manager && this.manager.runNow(), this.environment.getNowUnixTimeMs() - this.startTimeMs < So.RAF_RUNTIME_MS && !xr.isDone(this.getStatus()) && this.environment.getWindow().requestAnimationFrame((() => {
                this.handleRaf()
            }))
        }
    }
    const Io = class extends xr {
        constructor(e, t, i, s, n) {
            super(), __publicField(this, "instanceNumber"), __publicField(this, "pageviewId"), __publicField(this, "customer"), __publicField(this, "environment"), __publicField(this, "customerStorage"), __publicField(this, "success"), __publicField(this, "startTimeMs"), this.instanceNumber = ++Io.instanceCount, this.environment = e, this.pageviewId = t, this.customerStorage = i, this.customer = s, this.success = n
        }
        static get DEPENDENCIES_TIME_BUDGET_MS() {
            return 3e3
        }
        toString() {
            return `SelectedVariationsCallbackTask(${this.pageviewId}, ${this.instanceNumber})`
        }
        inTransaction() {
            return !0
        }
        isUnloading() {
            return !1
        }
        getNotDoneDependencies() {
            const e = [],
                t = this.getRunningDependentRecordTasks();
            Array.prototype.push.apply(e, t);
            const i = this.getDependentExecuteExperiencesTask();
            return i.length > 0 && !i[0].isDone() && Array.prototype.push.apply(e, i), e
        }
        run() {
            this.startTimeMs || (this.startTimeMs = this.environment.getNowUnixTimeMs());
            const e = this.getRunningDependentRecordTasks();
            if (e.length > 0) return fs.debug("Waiting for " + e[0].toString() + ", " + wr[e[0].getStatus()]), wr.TRY_LATER;
            const t = this.getDependentExecuteExperiencesTask();
            if (t.length > 1) return fs.error(`Found multiple ExecuteExperiencesTasks for pageviewId ${this.pageviewId}`, 89), wr.FAILED;
            if (0 === t.length) return wr.TRY_LATER;
            const i = t[0];
            return xr.isDone(i.getStatus()) ? (this.doCallback(), wr.SUCCEEDED) : this.hasExceededTimeBudget() ? (fs.debug(`Time budget of ${Io.DEPENDENCIES_TIME_BUDGET_MS} ms exceeded while waiting for ExecuteVariationTasks to complete; triggering success callbacks now`), this.doCallback(), wr.SUCCEEDED) : (fs.debug("Waiting for " + i.toString() + ", " + wr[i.getStatus()]), wr.TRY_LATER)
        }
        getRunningDependentRecordTasks() {
            return this.manager.findTasks((e => e instanceof mo && !e.isDone()))
        }
        getDependentExecuteExperiencesTask() {
            return this.manager.findTasks((e => e instanceof So && this.pageviewId === e.getStartPageviewId()))
        }
        doCallback() {
            const e = this.customerStorage.getPageviewSelections(this.pageviewId),
                t = this.generateResponse(e);
            fs.debug("Callback data: " + Ie(t));
            try {
                this.success.call(void 0, t)
            } catch (i) {
                const e = new bt("Caught exception in customer callback", i);
                fs.error(e, 8)
            }
        }
        getTimeRemainingMs() {
            const e = this.environment.getNowUnixTimeMs() - this.startTimeMs,
                t = Io.DEPENDENCIES_TIME_BUDGET_MS;
            return fs.debug("getTimeRemainingMs elapsed: " + e + ", budget: " + t), t - e
        }
        hasExceededTimeBudget() {
            return this.getTimeRemainingMs() < 0
        }
    };
    let wo = Io;
    __publicField(wo, "instanceCount", 0);
    class Co extends wo {
        toString() {
            return "SelectedVariationIdsCallbackTask(" + this.pageviewId + "," + this.instanceNumber + ")"
        }
        generateResponse(e) {
            const t = {};
            return e.forEach((e => {
                t[e.experienceId] = e.variationId
            })), t
        }
    }
    class To extends wo {
        toString() {
            return "SelectedVariationNamesCallbackTask(" + this.pageviewId + "," + this.instanceNumber + ")"
        }
        generateResponse(e) {
            const t = {};
            return e.forEach((e => {
                e.campaignId in t || (t[e.campaignId] = {});
                const i = {};
                i.varId = e.variationId, this.customer.getCampaign(e.campaignId).ifPresent((s => {
                    t[e.campaignId].campaignName = s.getName(), s.getExperience(e.experienceId).ifPresent((t => {
                        i.expName = t.getName(), t.getVariation(e.variationId).ifPresent((e => {
                            i.varName = e.getName()
                        }))
                    }))
                })), t[e.campaignId][e.experienceId] = i
            })), t
        }
    }
    class xo {
        constructor(e, t, i, s, n, r, o, a, l, c, u, d, h, g, p) {
            __publicField(this, "environment"), __publicField(this, "extensionManager"), __publicField(this, "browserEventLogger"), __publicField(this, "taskManager"), __publicField(this, "customerStorage"), __publicField(this, "attributeStorage"), __publicField(this, "activityStorage"), __publicField(this, "integrationDataStorage"), __publicField(this, "customer"), __publicField(this, "user"), __publicField(this, "override"), __publicField(this, "statusModel"), __publicField(this, "callQueue"), __publicField(this, "readyCallbackQueue"), __publicField(this, "addVariationRecordedCallbackTuple"), __publicField(this, "initialized"), this.environment = N(e), this.extensionManager = t, this.browserEventLogger = N(i), this.taskManager = N(s), this.customerStorage = N(n), this.attributeStorage = N(r), this.activityStorage = N(o), this.integrationDataStorage = N(a), this.customer = N(l), this.user = N(c), this.override = N(u), this.statusModel = N(d), this.callQueue = N(h), this.readyCallbackQueue = N(g), this.addVariationRecordedCallbackTuple = N(p), this.initialized = !1
        }
        static validatePushCommand(e) {
            return e && "object" == typeof e && e.constructor === Array ? !(!e[0] || "string" != typeof e[0]) || (xo.consoleError(`intellimize.push(): First parameter must be a string: ${Ie(e)}`, 114), !1) : (xo.consoleError(`intellimize.push(): Parameter must be an array: ${Ie(e)}`, 113), !1)
        }
        static validateReadyCallback(e) {
            return !!$s(e) || (xo.consoleError("ready() was called with a non-function argument", 115), !1)
        }
        static consoleError(e, t) {
            console.error(e), fs.error(e, t)
        }
        static validateAttributeScope(e) {
            return "user" === e || "pageview" === e
        }
        static validateAttributes(e) {
            return null != e && Ls(e)
        }
        static filterAttributePairs(e) {
            for (const t in e) {
                if (!Object.prototype.hasOwnProperty.call(e, t)) continue;
                if (!xo.validateAttributeName(t)) {
                    xo.consoleError(`setAttributes() invalid attribute ${t}`, 96), delete e[t];
                    continue
                }
                const i = xo.transformAttributeValue(e[t]);
                xo.validateAttributeValue(i) ? e[t] = i : (xo.consoleError(`setAttributes() invalid attribute ${t}: ${e[t]}`, 97), delete e[t])
            }
        }
        static validateAttributeName(e) {
            return /^[\u0020-\u003C\u003E-\u007E]{1,40}$/.test(e)
        }
        static transformAttributeValue(e) {
            let t = e;
            return "boolean" == typeof t && (t = t.toString()), "number" == typeof t && (t = t.toString()), null === t && (t = ""), void 0 === t && (t = ""), "string" == typeof t && t.length > 255 && (t = t.slice(0, 255)), t
        }
        static validateAttributeValue(e) {
            return void 0 !== e && "string" == typeof e && e.length >= 0 && e.length < 256
        }
        static validateAttributeNames(e) {
            if (void 0 === e || !Array.isArray(e)) return !1;
            for (const t of e)
                if (!xo.validateAttributeName(t)) return !1;
            return !0
        }
        static validateCustomEventApiName(e) {
            return /^[\u0021-\u007E]{1,40}$/.test(e)
        }
        static validateCustomEventProperties(e) {
            const t = new Set(["value", "actionId"]);
            return !!Object.keys(e).every((e => t.has(e))) && (!(void 0 !== e.value && !Pr(e.value)) && !(void 0 !== e.actionId && !Mr(e.actionId)))
        }
        static validateCustomerUserId(e) {
            return /^[\u0021-\u007E]{1,300}$/.test(e)
        }
        static validateCustomerUserDomain(e) {
            return "intellimize" !== e && !e.startsWith("__") && /^[\u0021-\u007E]{1,50}$/.test(e)
        }
        static doCallback(e) {
            void 0 !== e && ks.executeFunction(e, 5)
        }
        get isInitialized() {
            return this.initialized
        }
        initialize() {
            const e = this,
                t = this.environment.getWindow(),
                {
                    intellimize: i,
                    wf: s
                } = t;
            if (void 0 === i) return void fs.error("window.intellimize is undefined: Cannot initialize ExternalApi", 218);
            void 0 === s && fs.debug("window.wf is undefined: Can only initialize External API on the window.intellimize namespace"), i.getSelectedVariationIds = (e, t) => {
                "function" == typeof e ? void 0 === t || "function" == typeof t ? this.getSelectedVariationIds(e, t) : xo.consoleError("intellimize.getSelectedVariationIds() second parameter must be an error function", 103) : xo.consoleError("intellimize.getSelectedVariationIds() first parameter must be a success function", 102)
            }, i.getSelectedVariationNames = (e, t) => {
                "function" == typeof e ? void 0 === t || "function" == typeof t ? this.getSelectedVariationNames(e, t) : xo.consoleError("intellimize.getSelectedVariationNames() second parameter must be an error function", 105) : xo.consoleError("intellimize.getSelectedVariationNames() First parameter must be a success function", 104)
            }, i.onVariationRecorded = function(t, i) {
                e.onVariationRecorded(t.bind(this), void 0 === i ? void 0 : i.bind(this))
            }, void 0 !== s && (s.onVariationRecorded = function(t, i) {
                e.onVariationRecorded(t.bind(this), void 0 === i ? void 0 : i.bind(this))
            });
            const n = (e, t) => {
                this.setAttributes(e, t)
            };
            i.setAttributes = n, void 0 !== s && (s.setAttributes = n);
            const r = (e, t) => this.getAttributes(e, t);
            i.getAttributes = r, void 0 !== s && (s.getAttributes = r);
            const o = e => this.getAllAttributes(e);
            i.getAllAttributes = o, void 0 !== s && (s.getAllAttributes = o);
            const a = (e, t) => {
                this.deleteAttributes(e, t)
            };
            i.deleteAttributes = a, void 0 !== s && (s.deleteAttributes = a);
            const l = e => {
                this.deleteAllAttributes(e)
            };
            i.deleteAllAttributes = l, void 0 !== s && (s.deleteAllAttributes = l), i.getIntegrationData = e => this.getIntegrationData(e), i.sendEvent = (e, t, i) => {
                this.sendEvent(e, t, i)
            }, i.activate = e => {
                this.activate(e)
            }, i.setUserId = (e, t) => {
                this.setCustomerUserId(e, t)
            }, i.getActivities = () => this.getActivities(), i.registerExtension = e => {
                fs.debug(`intellimize.registerExtension(${e.getName()})`), this.extensionManager.registerExtension(e)
            }, i.push = e => {
                xo.validatePushCommand(e) && this.push(e)
            };
            const c = e => {
                xo.validateReadyCallback(e) && this.ready(e)
            };
            i.ready = c, void 0 !== s && (s.ready = c), this.callQueue.forEach((e => {
                e && "object" == typeof e && e.constructor === Array ? "push" !== e[0] ? this.push(e) : xo.consoleError('intellimize.push() Refusing to process command "push", to prevent infinite recursion.', 10) : xo.consoleError("intellimize.push() Parameter must be an array: " + Ie(e), 9)
            })), this.readyCallbackQueue.forEach(((e, t) => {
                fs.debug(`ready() executing registered callback #${t+1}`), this.ready(e)
            })), this.initialized = !0
        }
        getSelectedVariationIds(e, t) {
            fs.debug("getSelectedVariationIds()"), fs.warn("getSelectedVariationIds", 160);
            const i = this.environment.getPageviewId(),
                s = new Co(this.environment, i, this.customerStorage, this.customer, e);
            this.taskManager.addTask(s)
        }
        getSelectedVariationNames(e, t) {
            fs.debug("getSelectedVariationNames()"), fs.warn("getSelectedVariationNames", 161);
            const i = this.environment.getPageviewId(),
                s = new To(this.environment, i, this.customerStorage, this.customer, e);
            this.taskManager.addTask(s)
        }
        onVariationRecorded(e, t) {
            fs.debug("onVariationRecorded()"), fs.warn("onVariationRecorded", 203), "function" == typeof e ? void 0 === t || "function" == typeof t ? this.addVariationRecordedCallbackTuple([e, j.ofNullable(t)]) : xo.consoleError("onVariationRecorded() second parameter must be an error function", 164) : xo.consoleError("onVariationRecorded() first parameter must be a success function", 163)
        }
        setAttributes(e, t) {
            fs.debug(`setAttributes(${e}, ${Ie(t)})`), xo.validateAttributeScope(e) ? xo.validateAttributes(t) ? (xo.filterAttributePairs(t), this.attributeStorage.setCustomAttributes(e, t)) : xo.consoleError("setAttributes() invalid attributes parameter", 110) : xo.consoleError("setAttributes() invalid scope parameter", 109)
        }
        getAttributes(e, t) {
            return fs.debug(`getAttributes(${e}, ${t})`), xo.validateAttributeScope(e) ? xo.validateAttributeNames(t) ? this.attributeStorage.getCustomAttributes(e, t) : (xo.consoleError("getAttributes() invalid names parameter", 100), {}) : (xo.consoleError("getAttributes() invalid scope parameter", 99), {})
        }
        getAllAttributes(e) {
            return fs.debug(`getAllAttributes(${e}`), xo.validateAttributeScope(e) ? this.attributeStorage.getCustomAttributes(e) : (xo.consoleError("getAllAttributes() invalid scope parameter", 98), {})
        }
        deleteAttributes(e, t) {
            fs.debug(`deleteAttributes(${e}, ${t})`), xo.validateAttributeScope(e) ? xo.validateAttributeNames(t) ? this.attributeStorage.deleteCustomAttributes(e, t) : xo.consoleError("deleteAttributes() invalid names parameter", 95) : xo.consoleError("deleteAttributes() invalid scope parameter", 94)
        }
        deleteAllAttributes(e) {
            fs.debug(`deleteAllAttributes(${e})`), xo.validateAttributeScope(e) ? this.attributeStorage.deleteCustomAttributes(e) : xo.consoleError("deleteAllAttributes() invalid scope parameter", 20)
        }
        getIntegrationData(e) {
            var t;
            if (fs.debug(`getIntegrationData(${e})`), "marketoLead" === e) {
                return null != (t = this.integrationDataStorage.getData("marketo").flatMap((e => br(e))).orElse({
                    lead: {
                        fields: {},
                        lists: []
                    }
                }).lead) ? t : {}
            }
            return nr.includes(e) ? this.integrationDataStorage.getData(e).flatMap((e => j.ofNullable(e))).orElse({}) : (xo.consoleError("intellimize.getData() invalid integration name parameter", 101), {})
        }
        sendEvent(e, t, i) {
            return fs.debug(`sendEvent(${e}, ${Ie(t)} )`), xo.validateCustomEventApiName(e) ? void 0 === t || xo.validateCustomEventProperties(t) ? void this.customer.getCustomEvent(e).flatMap((t => this.override.isEventLive(t).orElse("live" === t.getState()) ? j.ofNullable(t) : (fs.debug(`sendEvent(${e}) event is not live`), j.empty()))).ifPresent((e => {
                const s = void 0 === t ? void 0 : t.value;
                let n = void 0 === t ? void 0 : t.actionId;
                void 0 === n && (n = this.environment.generateActionId());
                const r = new tr(e, n, s, void 0);
                this.activityStorage.add(eo.buildConversionActivity(r, this.customer, this.environment, this.user, this.attributeStorage, this.customerStorage));
                const o = new Fr(r, this.browserEventLogger, this.customer, this.customerStorage, this.statusModel);
                void 0 !== i && o.onDone(i), this.taskManager.addTask(o)
            })).ifAbsent((() => {
                xo.consoleError(`intellimize.sendEvent() apiName not found "${e}"`, 19), xo.doCallback(i)
            })) : (xo.consoleError(`intellimize.sendEvent() invalid properties "${Ie(t)}"`, 108), void xo.doCallback(i)) : (xo.consoleError(`intellimize.sendEvent() invalid apiName "${e}"`, 107), void xo.doCallback(i))
        }
        activate(e) {
            fs.debug("activate()");
            const t = this.taskManager.findTasks((e => e instanceof to && !e.isDone()));
            if (t.length > 0) {
                fs.debug("Ignoring activate() since there is an outstanding ActivateTask");
                const i = t[0];
                return void(void 0 !== e && i.addCallback(e))
            }
            const i = this.taskManager.findTasks((e => e instanceof io && !e.isDone()));
            if (i.length > 0) {
                fs.debug("Extending activate() expiration time");
                const t = i[0];
                return void 0 !== e && t.addCallback(e), void t.resetExpiration()
            }
            const s = void 0 === e ? [] : [e],
                n = new io(this.environment, this.override, s);
            this.taskManager.addTask(n)
        }
        setCustomerUserId(e, t) {
            if (fs.debug(`setCustomerUserId(${e}, ${t})`), !xo.validateCustomerUserDomain(e)) return void xo.consoleError("intellimize.setCustomerUserId() invalid user domain", 111);
            if (!xo.validateCustomerUserId(t)) return void xo.consoleError("intellimize.setCustomerUserId() invalid user id", 112);
            const i = new kr(this.environment, this.customer, "intellimize", this.user.getId(), e, t);
            this.taskManager.addTask(i)
        }
        getActivities() {
            return fs.debug("getActivities()"), this.activityStorage.getAll()
        }
        push(e) {
            fs.debug("push(" + e[0] + ")");
            const t = this.environment.getWindow();
            try {
                if (void 0 === t.intellimize) return void fs.error("push() called, but window.intellimize undefined", 30);
                const i = e.shift();
                if (void 0 === t.intellimize[i]) return void xo.consoleError(`intellimize.${i}() is not a valid function`, 106);
                t.intellimize[i].apply(void 0, e)
            } catch (i) {
                const e = new bt("Error executing push()", i);
                fs.error(e, 3)
            }
        }
        ready(e) {
            xo.doCallback(e)
        }
    }
    const Ao = e => {
            if (Ls(e)) {
                const t = Object.keys(e);
                if (4 === t.length) {
                    if (0 === Us(["p", "r", "push", "ready"], t).length && Os(e.p) && Os(e.r) && $s(e.push) && $s(e.ready)) return !0
                }
            }
            return !1
        },
        Fo = e => {
            if (Ls(e)) {
                const t = Object.keys(e);
                if (2 === t.length) {
                    if (0 === Us(["r", "ready"], t).length && Os(e.r) && $s(e.ready)) return !0
                }
            }
            return !1
        };
    class ko {
        constructor(e) {
            __publicField(this, "environment"), __publicField(this, "callQueue"), __publicField(this, "readyCallbackQueue"), this.environment = e, this.callQueue = [], this.readyCallbackQueue = []
        }
        initialize() {
            const e = this.environment.getWindow();
            if (void 0 !== e.intellimize)
                if (Os(e.intellimize)) this.setCallQueue(e.intellimize);
                else if (Ls(e.intellimize))
                if (Ao(e.intellimize)) {
                    const t = e.intellimize;
                    this.setCallQueue(t.p), this.addToReadyCallbackQueue(t.r)
                } else xo.consoleError("window.intellimize is an object that does not match the expected definition", 116);
            else xo.consoleError("window.intellimize is not an object or an array", 117);
            if (void 0 !== e.wf)
                if (Ls(e.wf))
                    if (Fo(e.wf)) {
                        const t = e.wf;
                        this.addToReadyCallbackQueue(t.r)
                    } else xo.consoleError("window.wf is an object that does not match the expected definition", 264);
            else xo.consoleError("window.wf is not an object", 263);
            e.intellimize = {
                ready: this.ready.bind(this),
                push: this.push.bind(this)
            }, e.wf = {
                ready: this.ready.bind(this)
            }
        }
        extractCallQueue() {
            const {
                callQueue: e
            } = this;
            return this.callQueue = [], e
        }
        extractReadyCallbackQueue() {
            const {
                readyCallbackQueue: e
            } = this;
            return this.readyCallbackQueue = [], e
        }
        ready(e) {
            xo.validateReadyCallback(e) && (fs.debug("Registering ready() callback"), this.readyCallbackQueue.push(e))
        }
        push(e) {
            xo.validatePushCommand(e) && (fs.debug("Adding command to call queue"), this.callQueue.push([...e]))
        }
        setCallQueue(e) {
            fs.debug("Storing callQueue"), this.callQueue = [], e.forEach((e => {
                xo.validatePushCommand(e) && this.callQueue.push([...e])
            }))
        }
        addToReadyCallbackQueue(e) {
            fs.debug("Appending to readyCallbackQueue"), e.forEach((e => {
                xo.validateReadyCallback(e) && this.readyCallbackQueue.push(e)
            }))
        }
    }
    class Po {
        constructor(e, t, i, s, n, r, o, a, l, c, u) {
            __publicField(this, "customer"), __publicField(this, "user"), __publicField(this, "environment"), __publicField(this, "extensionManager"), __publicField(this, "serverContext"), __publicField(this, "taskManager"), __publicField(this, "browserStorage"), __publicField(this, "customerStorage"), __publicField(this, "externalApi"), __publicField(this, "attributeData"), __publicField(this, "elementObserver"), __publicField(this, "storageKey"), this.customer = e, this.user = t, this.environment = i, this.extensionManager = s, this.serverContext = n, this.taskManager = r, this.browserStorage = o, this.customerStorage = a, this.externalApi = l, this.attributeData = c, this.elementObserver = u, this.storageKey = ne + e.getId()
        }
        initialize() {
            if (!this.externalApi.isInitialized) throw new Error("ExternalApi needs to be initialized before calling InternalApi.initialize()");
            const e = this.environment.getWindow(),
                {
                    intellimize: t
                } = e;
            void 0 !== t ? (t.plugins = {}, t.setLocalState = (e, t) => {
                fs.info(`intellimize.setLocalState(${e}, ${t})`), this.setLocalState(e, t)
            }, t.getLocalState = e => {
                const t = this.getLocalState(e);
                return fs.info(`intellimize.getLocalState(${e}) => ${t}`), t
            }, t.deleteLocalState = e => {
                fs.info(`intellimize.deleteLocalState(${e})`), this.deleteLocalState(e)
            }, t.getSessionId = () => (fs.info("intellimize.getSessionId()"), this.getSessionId()), t.getUserId = () => (fs.info("intellimize.getUserId()"), this.getUserId()), t.getPageviewId = () => (fs.info("intellimize.getPageviewId()"), this.getPageviewId()), t.logErr = e => {
                fs.error(`Customer error: ${e}`, 1)
            }, t.log = (e, t, s) => {
                const n = 1e4;
                s && (!/^\d{5}$/.test(`${s}`) || s < 10001 || s > 10999) && (fs.error(`Called intellimize.log with an invalid message code. (Wanted: 10001 < code < 10999. Found: ${s})`, 998), s = n);
                const r = null != s ? s : n;
                switch (t) {
                    case i.LogLevel.TRACE:
                    case i.LogLevel.DEBUG:
                        return void fs.debug(e, r);
                    case i.LogLevel.INFO:
                        return void fs.info(e, r);
                    case i.LogLevel.WARN:
                        return void fs.warn(e, r);
                    case i.LogLevel.ERROR:
                        return void fs.error(e, r);
                    default:
                        fs.error(`Called intellimize.log with an invalid LogLevel (${t}). Treating as "debug".`, 999), fs.debug(e, r)
                }
            }, t.applyChange = e => {
                const t = Pn(Si(e), hn(e), 0, this.attributeData, this.environment, this.browserStorage, this.extensionManager);
                return t.isReadyToApply() ? (t.apply((() => {}), this.elementObserver), F.APPLIED) : F.UNAPPLIED
            }, t.undoChange = e => (Pn(Si(e), hn(e), 0, this.attributeData, this.environment, this.browserStorage, this.extensionManager).undo(), F.UNAPPLIED), t.hasChangeData = e => tn(e), t.getChangeTypeData = (e, t) => cn(e, t), t.hasStarted = () => {
                const e = this.taskManager.hasStarted();
                return fs.debug(`intellimize.hasStarted() => ${e}`), e
            }, t.isDone = () => {
                const e = this.taskManager.isDone();
                return fs.debug(`intellimize.isDone() => ${e}`), e
            }, t.onDone = e => {
                fs.debug("intellimize.onDone(callbackFunction)"), this.taskManager.onDone(e)
            }, t.isRestarting = () => {
                const e = this.taskManager.getClient().isRestarting();
                return fs.debug(`intellimize.isRestarting() => ${e}`), e
            }, fs.getLevel() <= i.LogLevel.INFO && (e[e.atob("aWNqc24=")] = this.customer.getData(), e[e.atob("aXBqc24=")] = () => this.browserStorage.read(le + this.customer.getId()).map((e => Ce(ke(this.environment, e)))).orElse({})), this.reinitialize()) : fs.error("window.intellimize is undefined: Cannot initialize InternalApi", 219)
        }
        reinitialize() {
            this.exposeAttributeData()
        }
        setLocalState(e, t) {
            const i = this.readState();
            i[e] = t, this.writeState(i)
        }
        getLocalState(e) {
            return this.readState()[e]
        }
        deleteLocalState(e) {
            const t = this.readState();
            delete t[e], this.writeState(t)
        }
        getSessionId() {
            return this.customerStorage.updateAndGetSessionId()
        }
        getUserId() {
            return this.user.getId()
        }
        getPageviewId() {
            return this.environment.getPageviewId()
        }
        readState() {
            let e = {};
            return this.browserStorage.read(this.storageKey).ifPresent((t => {
                try {
                    e = Ce(t)
                } catch (i) {
                    const e = new bt("Could not parse internal api storage", i);
                    fs.error(e, 33)
                }
            })), e
        }
        writeState(e) {
            const t = we(e);
            this.browserStorage.write(this.storageKey, t)
        }
        exposeAttributeData() {
            var e;
            const t = this.environment.getWindow(),
                i = e => {
                    if (void 0 !== e.cityName) return e.cityName.replace(/\s/g, "").toUpperCase()
                };
            t.iiloc = {
                country: this.serverContext.location.countryIso,
                region: null != (e = this.serverContext.location.subdivision2Iso) ? e : this.serverContext.location.subdivision1Iso,
                city: i(this.serverContext.location),
                dma: this.serverContext.location.dmaCode,
                postal: this.serverContext.location.postalCode,
                tz: this.environment.getTimeZone()
            };
            const s = this.attributeData.getUserAgentData(),
                n = this.attributeData.getTrafficSourceData();
            t.icntxtlftrs = {
                IP: this.serverContext.clientIp,
                D: s.deviceType,
                B: s.browser,
                OS: s.os,
                DC: s.deviceClass,
                DN: s.deviceName,
                DB: s.deviceBrand,
                OC: s.osClass,
                ON: s.osName,
                OV: s.osVersion,
                AC: s.agentClass,
                AN: s.agentName,
                AV: s.agentVersionMajor,
                TS: n
            };
            const r = this.attributeData.getUtmParamsData();
            t.iutmprms = {
                uts: r.utmSource,
                utm: r.utmMedium,
                utcm: r.utmCampaign,
                utcn: r.utmContent,
                utt: r.utmTerm
            }
        }
    }
    const Mo = "UTC";
    let Do, No = !0;

    function Oo(e) {
        var t;
        if (void 0 !== Do) return Do;
        if (No) {
            if ("undefined" === (null == (t = e.Intl) ? void 0 : t.DateTimeFormat)) return void Ro();
            const i = e.Intl.DateTimeFormat();
            return void 0 === i || void 0 === i.resolvedOptions ? void Ro() : (Do = e.Intl, Do)
        }
    }

    function Ro() {
        No = !1, fs.error("Intl.DateTimeFormat().resolvedOptions() is not supported by the browser", 1014)
    }

    function Lo(e) {
        const t = Oo(e);
        let i = "";
        return void 0 !== t && (i = t.DateTimeFormat().resolvedOptions().timeZone), void 0 === i || "" === i ? Mo : i
    }
    const $o = e => "0" === e || "1" === e;

    function Vo(e) {
        return t => new RegExp("^" + e + "$").test(t)
    }
    const Uo = e => "true" === e || "false" === e;
    class Wo {
        constructor(e, t) {
            __publicField(this, "isEditorMode"), __publicField(this, "_shouldRun"), __publicField(this, "_originAllowed"), __publicField(this, "experienceVariations", {}), __publicField(this, "_allPagesLive"), __publicField(this, "_allAudiencesLive"), __publicField(this, "_allEventsLive"), __publicField(this, "_passExperienceAudience"), __publicField(this, "_passVariationAudience"), __publicField(this, "_isControl"), __publicField(this, "_saveCustomerStorage"), __publicField(this, "_sendBrowserEvents"), __publicField(this, "_sendGoogleAnalytics"), __publicField(this, "_sendSegmentAnalytics"), __publicField(this, "_sendMixpanel"), __publicField(this, "_showStatusModule"), __publicField(this, "_showBasesite"), __publicField(this, "_expires"), __publicField(this, "attributeData", {
                location: {},
                utmParams: {},
                userAgent: {},
                dayPart: void 0,
                weekPart: void 0,
                trafficSource: void 0,
                custom: {},
                urlParam: {},
                userVisitStatus: void 0,
                userBucket: void 0
            }), __publicField(this, "_requestAnimationFrame");
            const i = us(t, e.getHostingPageUrl().getOrigin());
            i.isPresent() && !i.get() && (this._originAllowed = !1);
            const s = e.getHostingPageUrl().getQueryParam("intellimize_no_run", Vo("true")).isPresent(),
                n = e.getHostingPageUrl().getQueryParam("imize_editor", Vo("true")).isPresent();
            if (n) return void(this.isEditorMode = !0);
            s && !n && (this._shouldRun = !1);
            const r = e.getWindow().iOverride;
            if (void 0 !== r) {
                if (void 0 !== r.experienceVariations) {
                    const {
                        experienceVariations: e
                    } = r;
                    Object.keys(e).forEach((t => {
                        var i;
                        null == (i = e[t]) || i.forEach((e => {
                            t in this.experienceVariations || (this.experienceVariations[t] = {}), this.experienceVariations[t][e] = !0
                        }))
                    }))
                }
                this._allPagesLive = r.allPagesLive, this._allAudiencesLive = r.allAudiencesLive, this._allEventsLive = r.allEventsLive, this._passExperienceAudience = r.passExperienceAudience, this._passVariationAudience = r.passVariationAudience, this._isControl = r.isControl, this._saveCustomerStorage = r.saveCustomerStorage, this._sendBrowserEvents = r.sendBrowserEvents, this._sendGoogleAnalytics = r.sendGoogleAnalytics, this._sendSegmentAnalytics = r.sendSegmentAnalytics, this._sendMixpanel = r.sendMixpanel, this._showStatusModule = r.showStatusModule, this._expires = r.expires
            }
            e.readLocalStorage("intellimize_override").ifPresent((e => {
                let t = {};
                try {
                    t = Ce(e)
                } catch (i) {
                    const e = new bt("Could not parse override", i);
                    fs.error(e, 192)
                }
                void 0 !== t.raf && (this._requestAnimationFrame = t.raf)
            })), e.getHostingPageUrl().getQueryParam("iev", Vo("[0-9;:]+")).ifPresent((e => {
                this.experienceVariations = {}, e.split(";").forEach((t => {
                    const i = t.split(":");
                    if (2 === i.length) {
                        const e = i[0],
                            t = i[1];
                        e in this.experienceVariations || (this.experienceVariations[e] = {}), this.experienceVariations[e][t] = !0
                    } else fs.error(`Override could not parse iev ${e}`, 34)
                })), void 0 !== r && 0 !== Object.keys(r).length || (this._passExperienceAudience = !0, this._passVariationAudience = !0, this._saveCustomerStorage = !1, this._sendBrowserEvents = !1), this._isControl = !1, this._sendGoogleAnalytics = !1, this._sendSegmentAnalytics = !1, this._sendMixpanel = !1, this._showStatusModule = !0
            })), e.getHostingPageUrl().getQueryParam("showBasesite", Vo("1")).ifPresent((() => {
                this._showBasesite = !0, this._showStatusModule = !0
            })), e.getHostingPageUrl().getQueryParam("iea", $o).ifPresent((e => {
                "1" === e && (this._passExperienceAudience = void 0)
            })), e.getHostingPageUrl().getQueryParam("iva", $o).ifPresent((e => {
                "1" === e && (this._passVariationAudience = void 0)
            })), e.getHostingPageUrl().getQueryParam("is", $o).ifPresent((e => {
                "1" === e ? this._showStatusModule = !0 : "0" === e && (this._showStatusModule = !1)
            }));
            let o = !1;
            [
                ["ictxt_city", "city", "([A-Z0-9]){1,40}"],
                ["ictxt_region", "state", "([a-zA-Z0-9]){1,40}"],
                ["ictxt_country", "country", "[A-Z]{2}"],
                ["ictxt.city", "city", "([A-Z0-9]){1,40}"],
                ["ictxt.region", "state", "([a-zA-Z0-9]){1,40}"],
                ["ictxt.country", "country", "[A-Z]{2}"]
            ].forEach((t => {
                e.getHostingPageUrl().getQueryParam(t[0], Vo(t[2])).ifPresent((e => {
                    this.attributeData.location[t[1]] = e, o = !0
                }))
            }));
            [
                ["ictxt_d", "deviceType", "[DPT]"]
            ].forEach((t => {
                e.getHostingPageUrl().getQueryParam(t[0], Vo(t[2])).ifPresent((e => {
                    this.attributeData.userAgent[t[1]] = e, o = !0
                }))
            })), e.getHostingPageUrl().getQueryParam("ictxt_ts", Vo("[A-Z]{2}")).ifPresent((e => {
                this.attributeData.trafficSource = e, o = !0
            })), e.getHostingPageUrl().getQueryParam("raf", Uo).ifPresent((e => {
                "true" === e ? this._requestAnimationFrame = !0 : "false" === e && (this._requestAnimationFrame = !1)
            })), o && (this._isControl = !1, this._saveCustomerStorage = !1, this._sendBrowserEvents = !1, this._sendGoogleAnalytics = !1, this._sendSegmentAnalytics = !1, this._sendMixpanel = !1)
        }
        getExpirationMs() {
            return j.ofNullable(this._expires)
        }
        setExpiration(e) {
            this._expires = e
        }
        getOverrideJson() {
            const e = {
                    allPagesLive: this._allPagesLive,
                    allAudiencesLive: this._allAudiencesLive,
                    allEventsLive: this._allEventsLive,
                    isControl: this._isControl,
                    passExperienceAudience: this._passExperienceAudience,
                    passVariationAudience: this._passVariationAudience,
                    saveCustomerStorage: this._saveCustomerStorage,
                    sendBrowserEvents: this._sendBrowserEvents,
                    sendGoogleAnalytics: this._sendGoogleAnalytics,
                    sendMixpanel: this._sendMixpanel,
                    showStatusModule: this._showStatusModule
                },
                t = {};
            return Object.keys(this.experienceVariations).forEach((e => {
                t[e] = Object.keys(this.experienceVariations[e])
            })), t && Object.keys(t).length > 0 && (e.experienceVariations = t), Object.keys(e).forEach((t => {
                void 0 === e[t] && delete e[t]
            })), e
        }
        isPageLive(e) {
            return j.ofNullable(this._allPagesLive)
        }
        isAudienceLive(e) {
            return j.ofNullable(this._allAudiencesLive)
        }
        isEventLive(e) {
            return j.ofNullable(this._allEventsLive)
        }
        isExperienceEnabled(e) {
            return this.hasExperienceVariationsSet() ? j.of(this.isExperienceSet(e)) : j.empty()
        }
        passExperienceCondition() {
            return j.ofNullable(this._passExperienceAudience)
        }
        isExperienceIncluded(e) {
            return this.hasExperienceVariationsSet() ? j.of(this.isExperienceSet(e)) : j.empty()
        }
        hasExperienceIds() {
            if (this.hasExperienceVariationsSet()) {
                const e = Object.keys(this.experienceVariations);
                return fs.debug("hasExperienceIds => " + e + " (override)"), j.of(e)
            }
            return j.empty()
        }
        hasVariationIds(e) {
            const t = e.getId();
            if (this.hasExperienceVariationsSet() && t in this.experienceVariations) {
                const e = Object.keys(this.experienceVariations[t]);
                return fs.debug("hasVariationIds => " + e + " (override)"), j.of(e)
            }
            return j.empty()
        }
        isVariationEnabled(e) {
            return this.hasExperienceVariationsSet() ? j.of(this.isVariationSet(e)) : j.empty()
        }
        passVariationCondition() {
            return j.ofNullable(this._passVariationAudience)
        }
        isControl() {
            return j.ofNullable(this._isControl)
        }
        saveCustomerStorage() {
            const e = j.ofNullable(this._saveCustomerStorage);
            return e.ifPresent((e => {
                fs.debug(`save CustomerStorage => ${e} (override)`)
            })), e
        }
        sendGoogleAnalytics() {
            const e = j.ofNullable(this._sendGoogleAnalytics);
            return e.ifPresent((e => {
                fs.debug(`send GoogleAnalytics => ${e} (override)`)
            })), e
        }
        sendSegmentAnalytics() {
            const e = j.ofNullable(this._sendSegmentAnalytics);
            return e.ifPresent((e => {
                fs.debug(`send SegmentAnalytics => ${e} (override)`)
            })), e
        }
        sendMixpanel() {
            const e = j.ofNullable(this._sendMixpanel);
            return e.ifPresent((e => {
                fs.debug(`send Mixpanel => ${e} (override)`)
            })), e
        }
        getAttributeDataOverrides() {
            return __spreadValues({}, this.attributeData)
        }
        showStatusModule() {
            return j.ofNullable(this._showStatusModule)
        }
        isExperienceSet(e) {
            return !0 !== this._showBasesite && e.getId() in this.experienceVariations
        }
        isVariationSet(e) {
            var t;
            const i = e.getExperience().getId(),
                s = e.getId();
            return Boolean(null == (t = this.experienceVariations[i]) ? void 0 : t[s])
        }
        showBasesite() {
            return j.ofNullable(this._showBasesite)
        }
        requestAnimationFrame() {
            return j.ofNullable(this._requestAnimationFrame)
        }
        hasExperienceVariationsSet() {
            return !0 === this._showBasesite || Object.keys(this.experienceVariations).length > 0
        }
        shouldRun() {
            return j.ofNullable(this._shouldRun)
        }
        shouldHide() {
            return !0 === this.isEditorMode || !1 === this._originAllowed ? j.of(!1) : j.empty()
        }
        useStorageType() {
            return !0 === this.isEditorMode || !1 === this._originAllowed || this.hasExperienceVariationsSet() ? j.of("SessionStorage") : j.empty()
        }
        useElementObserver() {
            return !0 === this.isEditorMode || !1 === this._originAllowed ? j.of(!1) : j.empty()
        }
        injectVisualEditor() {
            return !0 === this.isEditorMode ? j.of(!0) : j.empty()
        }
        shouldRunTasks() {
            let e;
            return !0 !== this.isEditorMode && !1 !== this._originAllowed || (e = !1), void 0 !== e && fs.debug(`send BrowserEvent => ${e} (override)`), j.ofNullable(e)
        }
        sendNonPageviewBrowserEvents() {
            let e;
            return !1 !== this._sendBrowserEvents && !1 !== this._originAllowed && !0 !== this.isEditorMode || (e = !1), void 0 !== e && fs.debug(`send BrowserEvent => ${e} (override)`), j.ofNullable(e)
        }
        sendPageviewBrowserEvents() {
            let e;
            return !1 === this._sendBrowserEvents && (e = !1), !0 === this.isEditorMode && (e = !1), void 0 !== e && fs.debug(`send BrowserEvent => ${e} (override)`), j.ofNullable(e)
        }
        shouldCheckOptOut() {
            return !0 === this.isEditorMode || !1 === this._originAllowed ? j.of(!1) : j.empty()
        }
        saveActivity() {
            let e;
            return !1 !== this._sendBrowserEvents && !1 !== this._originAllowed && !0 !== this.isEditorMode || (e = !1), void 0 !== e && fs.debug(`save activity => ${e} (override)`), j.ofNullable(e)
        }
    }
    class zo {
        constructor(e, t, i, s, n, r, o, a, l, c, u) {
            __publicField(this, "environment"), __publicField(this, "browserStorage"), __publicField(this, "extensionManager"), __publicField(this, "customer"), __publicField(this, "conditionEvaluationRuntime"), __publicField(this, "attributeData"), __publicField(this, "override"), __publicField(this, "taskManager"), __publicField(this, "elementObserver"), __publicField(this, "hider"), __publicField(this, "statusModel"), __publicField(this, "pages", []), __publicField(this, "audiences", []), __publicField(this, "pageviewId"), __publicField(this, "pageChangelistTasks", {}), this.environment = e, this.browserStorage = t, this.extensionManager = i, this.customer = s, this.conditionEvaluationRuntime = n, this.attributeData = r, this.override = o, this.taskManager = a, this.hider = l, this.elementObserver = c, this.statusModel = u
        }
        reinitialize() {
            const e = this.environment.getPageviewId();
            this.pageviewId === e && fs.error("PageContext.reinitialize() called more than once per pageview", 244), this.pages = this.determineMatchingPages(), this.hider.hidePages(this.pages, this.browserStorage, this.attributeData), this.hider.revealDocumentIfAllRegionsHidden(), this.pageChangelistTasks = this.schedulePageChangeListTasks(), this.audiences = this.determineMatchingAudiences(), this.pageviewId = e
        }
        getPages() {
            return this.pageviewId !== this.environment.getPageviewId() && fs.error("PageContext.getPages() called before initialization", 151), this.pages
        }
        getPageChangelistTask(e) {
            return this.pageviewId !== this.environment.getPageviewId() && fs.error("PageContext.getPageChangeListTask() called before initialization", 243, {
                pageId: e.getId()
            }), j.ofNullable(this.pageChangelistTasks[e.getId()])
        }
        getAudiences() {
            return this.pageviewId !== this.environment.getPageviewId() && fs.error("PageContext.getAudiences() called before initialization", 152), this.audiences
        }
        determineMatchingPages() {
            const e = this.customer.getPages().filter((e => this.override.isPageLive(e).orElse("live" === e.getState()))),
                t = this.environment.getHostingPageUrl().getRawUrl(),
                i = e.filter((e => e.matches(t, ks.evalBoolean))),
                s = Vi.filterPages(i);
            return s.length > 0 ? s : i
        }
        schedulePageChangeListTasks() {
            const e = {};
            return this.override.shouldRunTasks().orElse(!0) && this.pages.forEach((t => {
                const i = t.getChanges().map(((e, i) => Pn(e, dn(t), i, this.attributeData, this.environment, this.browserStorage, this.extensionManager)));
                if (i.length > 0) {
                    const s = new so(i, (() => {
                        this.hider.revealPage(t, this.browserStorage, this.attributeData)
                    }), {
                        pageId: t.getId()
                    }, this.elementObserver);
                    e[t.getId()] = s, this.taskManager.addTask(s), this.statusModel.setPage(t, "status", s.getStatus()), s.onDone((() => {
                        this.statusModel.setPage(t, "status", s.getStatus())
                    }))
                } else this.hider.revealPage(t, this.browserStorage, this.attributeData)
            })), e
        }
        determineMatchingAudiences() {
            return this.customer.getAudiences().filter((e => this.override.isAudienceLive(e).orElse("live" === e.getState()))).filter((e => {
                let t = !1;
                try {
                    t = e.getCondition().evaluate(this.conditionEvaluationRuntime)
                } catch (i) {
                    t = !1;
                    const s = new bt("Audience condition evaluation failed ", i);
                    fs.error(s, 205, {
                        audienceId: e.getId()
                    })
                }
                return fs.debug(`check audience: ${e.getName()} (${e.getId()}) => ${t}`), t
            }))
        }
    }
    class jo {
        update() {}
    }
    class Bo {
        constructor(e, t, i, s) {
            __publicField(this, "environment"), __publicField(this, "localStorage"), __publicField(this, "customer"), __publicField(this, "override"), __publicField(this, "overrideModule"), __publicField(this, "eventLogStorageKey"), __publicField(this, "expVarModel", {
                campaigns: {}
            }), __publicField(this, "pageModel", {}), __publicField(this, "eventModel", {
                count: 0,
                campaigns: {}
            }), this.customer = t, this.environment = e, this.localStorage = s, this.override = i, this.eventLogStorageKey = `${pe}event_log_${t.getId()}`, this.overrideModule = new jo(this.environment, i, this.customer, this.reinitializeGoalEvents.bind(this)), this.initializeGoalEvents()
        }
        reinitializeExperienceVariations() {
            this.expVarModel = {
                campaigns: {}
            }, this.overrideModule.update({
                experienceVariations: this.expVarModel
            })
        }
        reinitializeGoalEvents() {
            this.eventModel = {
                count: 0,
                campaigns: {}
            }, this.writeEventModelToLocalStorage(), this.initializeGoalEvents(), this.overrideModule.update({
                goalEvents: this.eventModel
            })
        }
        initializeGoalEvents() {
            this.eventModel = this.readEventModelFromLocalStorage();
            const e = this.environment.getHostingPageUrl().getRawUrl();
            this.customer.getEvents().forEach((t => {
                let i = "custom" === t.getType();
                (t instanceof _t || t instanceof Tt) && (i = t.getPages().some((t => t.matches(e, (() => !0))))), i && t.getMetrics().forEach((e => {
                    e.getCampaign().ifPresent((t => {
                        this.getCampaignEventData(t).metrics[e.getId()] = this.getMetricEventData(e)
                    }))
                }))
            })), this.overrideModule.update({
                goalEvents: this.eventModel
            })
        }
        setCustomer(e, t) {
            this.expVarModel[e] = t, this.overrideModule.update({
                experienceVariations: this.expVarModel
            })
        }
        setCampaign(e, t, i) {
            const s = this.getCampaignData(e),
                n = s[t];
            s[t] = i, n !== i && this.overrideModule.update({
                experienceVariations: this.expVarModel
            })
        }
        setExperience(e, t, i) {
            const s = this.getExperienceData(e),
                n = s[t];
            s[t] = i, n !== i && !0 === (null == s ? void 0 : s.enabled) && this.overrideModule.update({
                experienceVariations: this.expVarModel
            })
        }
        setVariation(e, t, i) {
            const s = this.getVariationData(e),
                n = s[t];
            s[t] = i, n !== i && this.overrideModule.update({
                experienceVariations: this.expVarModel
            })
        }
        setPage(e, t, i) {
            this.getPageData(e)[t] = i, this.overrideModule.update({
                pagesChanges: this.pageModel
            })
        }
        setExperienceSortedVariations(e, t) {
            this.getExperienceData(e).variationsSorted = t, this.overrideModule.update({
                experienceVariations: this.expVarModel
            })
        }
        setMetricEventData(e) {
            this.eventModel = this.readEventModelFromLocalStorage(), e.forEach((({
                metric: e,
                event: t,
                status: i,
                id: s
            }) => {
                if (!e.getCampaign().isPresent()) return;
                const n = this.getCampaignEventData(e.getCampaign().get()),
                    r = this.getMetricEventData(e);
                void 0 === r.events[s] ? (r.events[s] = {
                    name: t.getName(),
                    type: t.getType(),
                    status: i,
                    instanceId: s
                }, this.eventModel.count += 1, n.count += 1, r.count += 1) : (r.events[s].status = i, r.events[s].timestamp = i === wr.SUCCEEDED ? (new Date).toISOString() : void 0, r.count = Object.keys(r.events).length)
            })), this.overrideModule.update({
                goalEvents: this.eventModel
            }), this.writeEventModelToLocalStorage()
        }
        getCampaignData(e) {
            return void 0 === this.expVarModel.campaigns[e.getId()] && (this.expVarModel.campaigns[e.getId()] = {
                campaign: e,
                experiences: {}
            }), this.expVarModel.campaigns[e.getId()]
        }
        getExperienceData(e) {
            const t = this.getCampaignData(e.getCampaign());
            return void 0 === t.experiences && (t.experiences = {}), void 0 === t.experiences[e.getId()] && (t.experiences[e.getId()] = {
                experience: e,
                variations: {},
                variationsSorted: []
            }), t.experiences[e.getId()]
        }
        getVariationData(e) {
            const t = this.getExperienceData(e.getExperience());
            return void 0 === t.variations && (t.variations = {}), void 0 === t.variations[e.getId()] && (t.variations[e.getId()] = {
                variation: e
            }), t.variations[e.getId()]
        }
        getPageData(e) {
            var t;
            const i = null != (t = this.pageModel[e.getId()]) ? t : {
                page: e,
                status: wr.NOT_STARTED
            };
            return this.pageModel[e.getId()] = i, i
        }
        getMetricEventData(e) {
            if (!e.getCampaign().isPresent()) throw new V("Metric not in campaign");
            const t = this.getCampaignEventData(e.getCampaign().get());
            return void 0 === t.metrics[e.getId()] && (t.metrics[e.getId()] = this.getInitialMetricEventData(e)), t.metrics[e.getId()]
        }
        getCampaignEventData(e) {
            return void 0 === this.eventModel.campaigns[e.getId()] && (this.eventModel.campaigns[e.getId()] = {
                name: e.getName(),
                count: 0,
                metrics: {}
            }), this.eventModel.campaigns[e.getId()]
        }
        getMetricMeasurement(e) {
            const t = e.getCountingMethod(),
                i = e.getScope();
            let s, n;
            return e instanceof Qi ? (n = `$${(e.getValue()/100).toFixed(2)}`, s = `${t} static value per ${i}`) : s = e instanceof Hi ? `${t} dynamic value per ${i}` : `${t} conversion per ${i}`, {
                measurement: s,
                value: n
            }
        }
        getInitialMetricEventData(e) {
            return __spreadValues({
                name: e.getName(),
                isGoal: e.isGoal(),
                events: {},
                count: 0
            }, this.getMetricMeasurement(e))
        }
        shouldUseLocalStorage() {
            let e = !1;
            return this.override.getExpirationMs().ifPresent((t => {
                e = t > Date.now()
            })), e
        }
        deleteEventModelFromLocalStorage() {
            this.localStorage.delete(this.eventLogStorageKey)
        }
        writeEventModelToLocalStorage() {
            this.shouldUseLocalStorage() && this.localStorage.write(this.eventLogStorageKey, we(this.eventModel))
        }
        readEventModelFromLocalStorage() {
            let e = this.eventModel;
            return this.shouldUseLocalStorage() ? this.localStorage.read(this.eventLogStorageKey).ifPresent((t => {
                try {
                    e = Ce(t)
                } catch (i) {}
            })) : this.deleteEventModelFromLocalStorage(), e
        }
    }
    class Go {
        reinitializeExperienceVariations() {}
        reinitializeGoalEvents() {}
        setCustomer(e, t) {}
        setCampaign(e, t, i) {}
        setExperience(e, t, i) {}
        setVariation(e, t, i) {}
        setPage(e, t, i) {}
        setExperienceSortedVariations(e, t) {}
        setMetricEventData(e) {}
    }
    class Ho {
        constructor(e, t, i, s) {
            __publicField(this, "storageKey"), __publicField(this, "environment"), __publicField(this, "browserStorage"), __publicField(this, "user"), __publicField(this, "pageviewAttributes", {
                id: void 0,
                custom: {},
                internal: {}
            }), this.storageKey = re + e.getId(), this.browserStorage = i, this.environment = t, this.user = s
        }
        setCustomAttributes(e, t) {
            const i = this.getAttributeData(e);
            Object.keys(t).forEach((e => {
                i.custom[e] = t[e]
            })), this.saveAttributeData(e, i)
        }
        setInternalAttributes(e, t) {
            const i = this.getAttributeData(e);
            Object.keys(t).forEach((e => {
                i.internal[e] = t[e]
            })), this.saveAttributeData(e, i)
        }
        getCustomAttributes(e, t) {
            const i = this.getAttributeData(e),
                s = {};
            return Object.keys(i.custom).forEach((e => {
                (void 0 === t || t.includes(e)) && (s[e] = i.custom[e])
            })), s
        }
        getInternalAttributes(e, t) {
            const i = this.getAttributeData(e),
                s = {};
            return Object.keys(i.internal).forEach((e => {
                (void 0 === t || t.includes(e)) && (s[e] = "object" == typeof i.internal[e] ? Ce(we(i.internal[e])) : i.internal[e])
            })), s
        }
        getFlattenedCustomAttributes() {
            const e = this.getCustomAttributes("user"),
                t = this.getCustomAttributes("pageview");
            return Object.keys(t).forEach((i => {
                e[i] = t[i]
            })), e
        }
        getFlattenedInternalAttributes() {
            const e = this.getInternalAttributes("user"),
                t = this.getInternalAttributes("pageview");
            return Object.keys(t).forEach((i => {
                e[i] = t[i]
            })), e
        }
        deleteCustomAttributes(e, t) {
            const i = this.getAttributeData(e);
            for (const s in i.custom) Object.prototype.hasOwnProperty.call(i.custom, s) && (void 0 === t || t.includes(s)) && delete i.custom[s];
            this.saveAttributeData(e, i)
        }
        deleteInternalAttributes(e, t) {
            const i = this.getAttributeData(e);
            void 0 === t ? i.internal = {} : t.forEach((e => {
                delete i.internal[e]
            })), this.saveAttributeData(e, i)
        }
        getAttributeData(e) {
            let t, i = {
                id: void 0,
                custom: {},
                internal: {}
            };
            return "pageview" === e ? (i = this.pageviewAttributes, t = this.environment.getPageviewId()) : "user" === e ? (i = this.readBrowserStorage(), t = this.user.getId()) : fs.error(`Tried to get attribute data for invalid scope ${e}`, 49), t !== i.id && (fs.debug(`Mismatching IDs ("${t}" != "${i.id}"). Resetting AttributeData`), i.id = t, i.internal = {}, i.custom = {}), i
        }
        saveAttributeData(e, t) {
            "pageview" === e || ("user" === e ? this.saveBrowserStorage(t) : fs.error(`Tried to save attribute data for invalid scope ${e}`, 50))
        }
        readBrowserStorage() {
            let e = {
                id: void 0,
                custom: {},
                internal: {}
            };
            return this.browserStorage.read(this.storageKey).ifPresent((t => {
                try {
                    e = Ce(t)
                } catch (i) {
                    const e = new bt("Could not parse attribute storage", i);
                    fs.error(e, 51)
                }
            })), e
        }
        saveBrowserStorage(e) {
            const t = we(e);
            this.browserStorage.write(this.storageKey, t)
        }
    }
    class Qo {
        constructor(e, t, i, s) {
            __publicField(this, "storageKey"), __publicField(this, "browserStorage"), __publicField(this, "environment"), __publicField(this, "override"), this.storageKey = ae + e.getId(), this.browserStorage = i, this.environment = t, this.override = s
        }
        static get VERSION() {
            return 2
        }
        static getPath(e, t) {
            if (0 === t.length) return e;
            const i = t[0];
            return i in e || (e[i] = {}), t.splice(0, 1), Qo.getPath(e[i], t)
        }
        getCustomerControlStatus(e) {
            if (!e.isCampaignControl()) {
                const e = this.readState();
                if (!0 === e.c) return j.of("c");
                if (!1 === e.c) return j.of("i");
                this.override.saveCustomerStorage().orElse(!0) && fs.warn("Attempting to retrieve control value, but not set", 52)
            }
            return j.empty()
        }
        updateAndGetControl(e) {
            fs.debug("updateAndGetControl(campaign)");
            const t = e.getCustomer();
            return t.isCampaignControl() ? this.setAndGetCampaignControl(e) : this.setAndGetCustomerControl(t)
        }
        setAndGetCustomerControl(e) {
            R(!e.isCampaignControl());
            const t = this.readState(),
                i = t,
                s = e.getControlTrafficPercentage().get();
            return void 0 !== t.cpg && Object.keys(t.cpg).forEach((e => {
                void 0 !== t.cpg && (delete t.cpg[e].c, delete t.cpg[e].ct)
            })), this.setAndGetControl(e, i, t, s)
        }
        updateAndGetExperienceInclusion(e) {
            const t = this.environment.getInitializeUnixTime(),
                i = this.readState(),
                s = e.getId(),
                n = e.getCampaign().getId(),
                r = Qo.getPath(i, ["cpg", n, "exp", s]);
            if (e.getInclusionStickyConfig().isSticky() && void 0 !== r.i && void 0 !== r.it) {
                const i = r.it;
                if (!e.getInclusionStickyConfig().isExpired(t, i)) {
                    const t = r.i;
                    return fs.info(`Experience ${e.getId()} sticky inclusion decision => ${t}`), t
                }
            }
            const o = Math.random() < 1 - e.getIgnore() / 1e4;
            return r.i = o, r.it = t, this.writeState(i), fs.info(`Experience ${e.getId()} new inclusion decision => ${o}`), o
        }
        getStickyVariation(e) {
            fs.group("getStickyVariation(experience:" + e.getId() + ")");
            const t = this.environment.getInitializeUnixTime(),
                i = this.readState(),
                s = e.getId(),
                n = e.getCampaign().getId(),
                r = Qo.getPath(i, ["cpg", n, "exp", s]);
            if (e.getVariationStickyConfig().isSticky() && void 0 !== r.v && void 0 !== r.vt) {
                const i = r.vt;
                if (!e.getVariationStickyConfig().isExpired(t, i)) return fs.debug("found sticky, non-expired variation: " + r.v), fs.groupEnd(), e.getVariation(r.v)
            }
            return fs.groupEnd(), j.empty()
        }
        getVariation(e) {
            fs.group("getVariation(experience:" + e.getId() + ")");
            const t = this.readState(),
                i = e.getId(),
                s = e.getCampaign().getId(),
                n = Qo.getPath(t, ["cpg", s, "exp", i]);
            return void 0 !== n.v ? (fs.groupEnd(), e.getVariation(n.v)) : (fs.groupEnd(), j.empty())
        }
        saveVariationStickySelection(e, t) {
            const i = e.getExperience().getId(),
                s = e.getExperience().getCampaign().getId(),
                n = this.readState(),
                r = Qo.getPath(n, ["s"]),
                o = Qo.getPath(n, ["cpg", s, "exp", i]);
            e.getId() !== o.v && fs.error(`Updating variation page view id in local storage, but variation changed from ${o.v} to ${e.getId()}`, 53, {
                campaignId: s,
                experienceId: i,
                variationId: e.getId()
            }), o.v = e.getId(), o.gpvid = t, o.gsid = r.id, this.writeState(n)
        }
        saveVariationPredictionSelection(e, t, i) {
            const s = e.getExperience().getId(),
                n = e.getExperience().getCampaign().getId(),
                r = this.readState(),
                o = Qo.getPath(r, ["s"]),
                a = Qo.getPath(r, ["cpg", n, "exp", s]);
            a.v = e.getId(), a.vt = this.environment.getNowUnixTime(), a.mv = t, a.gpvid = i, a.gsid = o.id, this.writeState(r)
        }
        deleteExperiencePredictionSelection(e) {
            const t = e.getId(),
                i = e.getCampaign().getId(),
                s = this.readState(),
                n = Qo.getPath(s, ["cpg", i, "exp", t]);
            0 !== Object.keys(n).length && (delete n.v, delete n.vt, delete n.mv, delete n.gpvid, delete n.gsid, this.writeState(s))
        }
        updateAndGetIsCampaignFirstTimeView(e, t) {
            return this.updateAndGetIsFirstTime([e.getId(), "v"], t)
        }
        updateAndGetIsCampaignFirstTimeGoal(e, t, i) {
            return this.updateAndGetIsFirstTime([e.getId(), t.getId(), "g"], i)
        }
        updateAndGetIsVariationFirstTimeView(e, t) {
            return this.updateAndGetIsFirstTime([e.getExperience().getCampaign().getId(), e.getExperience().getId(), e.getId(), "v"], t)
        }
        updateAndGetIsVariationFirstTimeGoal(e, t, i) {
            return this.updateAndGetIsFirstTime([e.getExperience().getCampaign().getId(), t.getId(), e.getExperience().getId(), e.getId(), "g"], i)
        }
        getVariationPredictionModelVersion(e) {
            const t = this.readState(),
                i = Qo.getPath(t, ["cpg", e.getExperience().getCampaign().getId(), "exp", e.getExperience().getId()]);
            return j.ofNullable(i.mv)
        }
        getVariationPredictionPageviewId(e) {
            const t = this.readState(),
                i = Qo.getPath(t, ["cpg", e.getExperience().getCampaign().getId(), "exp", e.getExperience().getId()]);
            return j.ofNullable(i.gpvid)
        }
        getVariationPredictionSessionId(e) {
            const t = this.readState(),
                i = Qo.getPath(t, ["cpg", e.getExperience().getCampaign().getId(), "exp", e.getExperience().getId()]);
            return j.ofNullable(i.gsid)
        }
        getPageviewSelections(e) {
            const t = [],
                i = this.readState();
            return void 0 !== i.cpg && Object.keys(i.cpg).forEach((s => {
                if (void 0 !== i.cpg) {
                    const n = i.cpg[s];
                    "exp" in n && Object.keys(n.exp).forEach((i => {
                        const r = n.exp[i];
                        void 0 !== r.v && "gpvid" in r && r.gpvid === e && t.push({
                            campaignId: s,
                            experienceId: i,
                            variationId: r.v
                        })
                    }))
                }
            })), t
        }
        getSessionId() {
            const e = this.readState(),
                t = Qo.getPath(e, ["s"]);
            return j.ofNullable(t.id)
        }
        updateAndGetSessionId() {
            const e = this.environment.getNowUnixTime(),
                t = this.readState(),
                i = Qo.getPath(t, ["s"]);
            return void 0 === i.st && (i.st = e), (void 0 === i.id || void 0 === i.t || e - i.t > Y || e - i.st > J) && (fs.debug("Starting a new session"), i.id = this.generateSessionId(), i.st = e), fs.debug("Extending current session"), i.t = e, this.writeState(t), i.id
        }
        getUserVisitStatus(e) {
            return this.isFirstSession(e) ? "N" : "R"
        }
        isFirstSession(e) {
            const t = e.getFirstVisitTimeSec();
            this.updateAndGetSessionId();
            const i = this.readState(),
                s = Qo.getPath(i, ["s"]).st;
            return fs.info(`user.getId(): ${e.getId()}`), fs.info(`userCreationTimeSec: ${t}`), fs.info(`currentSessionStartTimeSec: ${s}`), Math.abs(t - s) < Y / 2
        }
        setAndGetCampaignControl(e) {
            const t = e.getCustomer();
            R(t.isCampaignControl());
            const i = this.readState(),
                s = Qo.getPath(i, ["cpg", e.getId()]),
                n = e.getControlTrafficPercentage().get();
            return delete i.c, delete i.ct, this.setAndGetControl(t, s, i, n)
        }
        setAndGetControl(e, t, i, s) {
            const n = this.environment.getInitializeUnixTime();
            if (e.getControlStickyConfig().isSticky() || fs.error("Control is not sticky, but should be", 54), e.getControlStickyConfig().isSticky() && void 0 !== t.c && void 0 !== t.ct) {
                const i = t.ct;
                if (!e.getControlStickyConfig().isExpired(n, i)) return fs.debug("control: " + t.c + " (sticky decision)"), t.c;
                fs.error(`Control sticky decision expired. now:${n}, last:${i}`, 55)
            }
            void 0 !== t.c && fs.error(`Making new control decision, but c is present: ${t.c}`, 56), void 0 !== t.ct && fs.error(`Making new control decision, but ct is present: ${t.ct}`, 57);
            const r = Math.random() < s;
            return t.c = r, t.ct = n, this.writeState(i), fs.debug("control: " + t.c), r
        }
        generateSessionId() {
            return this.environment.getNowUnixTime() + "-" + vn()
        }
        updateAndGetIsFirstTime(e, t) {
            let i = !1;
            const s = this.readState(),
                n = Qo.getPath(s, ["uu"]),
                r = e.join(":");
            return r in n ? n[r] === t && (i = !0) : (n[r] = t, this.writeState(s), i = !0), i
        }
        readState() {
            let e = {};
            return this.browserStorage.read(this.storageKey).ifPresent((t => {
                try {
                    e = Ce(t)
                } catch (i) {
                    const e = new bt("Could not parse customer storage", i);
                    fs.error(e, 58)
                }
            })), $(!Object.prototype.hasOwnProperty.call(e, "vr") || e.vr === Qo.VERSION), e
        }
        writeState(e) {
            e.vr = Qo.VERSION;
            const t = we(e);
            this.override.saveCustomerStorage().orElse(!0) && this.browserStorage.write(this.storageKey, t)
        }
    }
    class qo {
        constructor(e, t) {
            __publicField(this, "customer"), __publicField(this, "storageKey"), __publicField(this, "browserStorage"), this.customer = e, this.storageKey = `${oe}${e.getId()}`, this.browserStorage = t, this.initialize()
        }
        setDataAndMetadata(e, t, i) {
            const s = this.getAllDataAndMetadata();
            s.data[e] = t, s.meta[e] = i, this.setAll(s)
        }
        getData(e) {
            const t = this.getAllData()[e];
            return void 0 === t || 0 === Object.keys(t).length ? j.empty() : j.ofNullable(t)
        }
        getAllData() {
            return this.getAllDataAndMetadata().data
        }
        getMetadata(e) {
            const t = this.getAllMetdata()[e];
            return void 0 === t || 0 === Object.keys(t).length ? j.empty() : j.ofNullable(t)
        }
        getAllMetdata() {
            return this.getAllDataAndMetadata().meta
        }
        setAllDataAndMetadata(e, t) {
            const i = {
                data: e,
                meta: t
            };
            this.setAll(i)
        }
        deleteAll() {
            this.browserStorage.delete(this.storageKey)
        }
        getAllDataAndMetadata() {
            const e = this.browserStorage.read(this.storageKey);
            let t = this.emptyStorage();
            if (e.ifPresent((e => {
                    try {
                        t = Ce(e)
                    } catch (i) {
                        const e = new bt("Could not parse integration data storage", i);
                        fs.error(e, 59), this.deleteAll()
                    }
                })), null == t || 0 === Object.keys(t).length) t = this.emptyStorage();
            else {
                const e = t;
                Ls(e) && void 0 === e.__marketoLead || (t = this.emptyStorage())
            }
            return void 0 === t.meta && (t.meta = {}), mr(t.data.marketo) && (t.data.marketo = {}), t
        }
        setAll(e) {
            const t = this.emptyStorage();
            nr.forEach((i => {
                Ir[i](this.customer) && (t.data[i] = e.data[i], t.meta[i] = e.meta[i])
            })), this.browserStorage.write(this.storageKey, we(t))
        }
        emptyStorage() {
            return {
                data: {},
                meta: {}
            }
        }
        initialize() {
            const e = this.getAllDataAndMetadata();
            nr.forEach((t => {
                Ir[t](this.customer) || (delete e.data[t], delete e.meta[t])
            })), this.setAll(e)
        }
    }
    class Ko {
        constructor(e) {
            if (__publicField(this, "environment"), !Xr(e, "localStorage")) throw new Error("LocalStorage is not available");
            this.environment = e
        }
        write(e, t) {
            Yr(e) || fs.error(`Writing an unknown key to LocalStorage: ${e}`, 180), this.environment.writeLocalStorage(e, t)
        }
        read(e) {
            return this.environment.readLocalStorage(e)
        }
        delete(e) {
            this.environment.deleteLocalStorage(e)
        }
    }
    class Yo {
        constructor(e, t) {
            __publicField(this, "storageKey"), __publicField(this, "browserStorage"), this.storageKey = ce + e.getId(), this.browserStorage = t
        }
        static fromJson(e) {
            try {
                const t = Ce(e);
                return j.of(t)
            } catch (t) {
                const e = new bt("Could not build server context from localStorage", t);
                fs.error(e, 157)
            }
            return j.empty()
        }
        set(e) {
            this.browserStorage.write(this.storageKey, we(e))
        }
        get() {
            return this.browserStorage.read(this.storageKey).flatMap((e => Yo.fromJson(e)))
        }
        clear() {
            this.browserStorage.delete(this.storageKey)
        }
    }
    var Jo = {},
        Xo = {
            get exports() {
                return Jo
            },
            set exports(e) {
                Jo = e
            }
        },
        Zo = {};
    ! function(e) {
        function t(e, t) {
            var i, s, n, r, o, a, l, c;
            for (i = 3 & e.length, s = e.length - i, n = t, o = 3432918353, a = 461845907, c = 0; c < s;) l = 255 & e.charCodeAt(c) | (255 & e.charCodeAt(++c)) << 8 | (255 & e.charCodeAt(++c)) << 16 | (255 & e.charCodeAt(++c)) << 24, ++c, n = 27492 + (65535 & (r = 5 * (65535 & (n = (n ^= l = (65535 & (l = (l = (65535 & l) * o + (((l >>> 16) * o & 65535) << 16) & 4294967295) << 15 | l >>> 17)) * a + (((l >>> 16) * a & 65535) << 16) & 4294967295) << 13 | n >>> 19)) + ((5 * (n >>> 16) & 65535) << 16) & 4294967295)) + ((58964 + (r >>> 16) & 65535) << 16);
            switch (l = 0, i) {
                case 3:
                    l ^= (255 & e.charCodeAt(c + 2)) << 16;
                case 2:
                    l ^= (255 & e.charCodeAt(c + 1)) << 8;
                case 1:
                    n ^= l = (65535 & (l = (l = (65535 & (l ^= 255 & e.charCodeAt(c))) * o + (((l >>> 16) * o & 65535) << 16) & 4294967295) << 15 | l >>> 17)) * a + (((l >>> 16) * a & 65535) << 16) & 4294967295
            }
            return n ^= e.length, n = 2246822507 * (65535 & (n ^= n >>> 16)) + ((2246822507 * (n >>> 16) & 65535) << 16) & 4294967295, n = 3266489909 * (65535 & (n ^= n >>> 13)) + ((3266489909 * (n >>> 16) & 65535) << 16) & 4294967295, (n ^= n >>> 16) >>> 0
        }
        e.exports = t
    }({
        get exports() {
            return Zo
        },
        set exports(e) {
            Zo = e
        }
    });
    var ea = {};
    ! function(e) {
        function t(e, t) {
            for (var i, s = e.length, n = t ^ s, r = 0; s >= 4;) i = 1540483477 * (65535 & (i = 255 & e.charCodeAt(r) | (255 & e.charCodeAt(++r)) << 8 | (255 & e.charCodeAt(++r)) << 16 | (255 & e.charCodeAt(++r)) << 24)) + ((1540483477 * (i >>> 16) & 65535) << 16), n = 1540483477 * (65535 & n) + ((1540483477 * (n >>> 16) & 65535) << 16) ^ (i = 1540483477 * (65535 & (i ^= i >>> 24)) + ((1540483477 * (i >>> 16) & 65535) << 16)), s -= 4, ++r;
            switch (s) {
                case 3:
                    n ^= (255 & e.charCodeAt(r + 2)) << 16;
                case 2:
                    n ^= (255 & e.charCodeAt(r + 1)) << 8;
                case 1:
                    n = 1540483477 * (65535 & (n ^= 255 & e.charCodeAt(r))) + ((1540483477 * (n >>> 16) & 65535) << 16)
            }
            return n = 1540483477 * (65535 & (n ^= n >>> 13)) + ((1540483477 * (n >>> 16) & 65535) << 16), (n ^= n >>> 15) >>> 0
        }
        e.exports = t
    }({
        get exports() {
            return ea
        },
        set exports(e) {
            ea = e
        }
    });
    var ta = Zo,
        ia = ea;
    Xo.exports = ta;
    var sa = Jo.murmur3 = ta;

    function na(e, t) {
        return sa(e, t)
    }
    Jo.murmur2 = ia;
    const ra = __pow(2, 32);

    function oa(e, t) {
        const i = (e >>> 0) / ra;
        return Math.floor(i * t)
    }
    class aa {
        constructor(e, t, i) {
            let s;
            __publicField(this, "browserStorage"), __publicField(this, "environment"), __publicField(this, "id"), __publicField(this, "storageKey"), this.browserStorage = e, this.environment = t, this.storageKey = `${de}${i.getId()}`, this.browserStorage.read(this.storageKey).ifPresent((e => {
                s = e, fs.debug(`User: Found existing User ID: ${s}`)
            })), void 0 === s && (s = this.generateId(), fs.debug(`User: No existing User ID; generated new ID: ${s}`), this.browserStorage.write(this.storageKey, s)), this.id = s
        }
        getId() {
            if (void 0 === this.id) throw new L("user id not defined");
            const e = this.browserStorage.read(this.storageKey);
            return e.isPresent() ? e.get() !== this.id && fs.error(`User id in memory (${this.id}) not the same as user id in localStorage (${e.get()})`, 62) : fs.error("User id is missing from localStorage", 61), this.id
        }
        isNewVisitor() {
            const e = this.getFirstVisitTimeSec();
            return this.environment.getNowUnixTime() - e < X
        }
        isReturningVisitor() {
            return !this.isNewVisitor()
        }
        getFirstVisitTimeSec() {
            const e = this.getId().split(".", 2);
            return Number(e[1])
        }
        getUserBucket() {
            const e = 100,
                t = oa(na(this.getId(), 1), e);
            return Math.floor(t + 1)
        }
        generateId() {
            const e = this.environment.getNowUnixTime();
            return `${bn()}.${e}`
        }
    }
    class la {
        constructor(e, t) {
            __publicField(this, "client"), __publicField(this, "environment"), __publicField(this, "taskQueue", []), __publicField(this, "completedTasks", []), __publicField(this, "isRunning", !1), __publicField(this, "isStopping", !1), __publicField(this, "timeoutId"), __publicField(this, "queueChecksum"), __publicField(this, "doneCallbacks", []), __publicField(this, "latestQueueChecksum"), __publicField(this, "latestQueueTimeMs"), this.client = e, this.environment = t
        }
        onDone(e) {
            this.doneCallbacks.push(e)
        }
        isDone() {
            return 0 === this.taskQueue.length
        }
        hasStarted() {
            return this.taskQueue.length > 0 || this.completedTasks.length > 0
        }
        getClient() {
            return this.client
        }
        addTask(e) {
            fs.debug("TaskManager.addTask(" + e.toString() + ")"), this.isStopping ? fs.warn(`Rejecting addTask(${e.toString()}) request since TaskManager is stopping`, 35, e.getEntityIds()) : (e.setManager(this), this.handleNotDone(e), this.queueChecksum = void 0, this.runAfter(0))
        }
        runNow() {
            fs.debug("TaskManager run now - synchronously"), this.eventLoop()
        }
        findTasks(e) {
            return [...this.taskQueue, ...this.completedTasks].filter((t => e(t)))
        }
        stop() {
            fs.debug("TaskManager.stop()"), this.isStopping = !0, this.runAfter(0)
        }
        eventLoop() {
            if (fs.group("TaskManager.eventLoop()"), fs.time("TaskManager.eventLoop()"), this.isRunning) return fs.debug("TaskManager called again when already running. Back to work..."), void fs.groupEnd();
            if (this.isRunning = !0, this.clearTimeout(), this.taskQueue.length > 0 && void 0 !== this.latestQueueChecksum && void 0 !== this.latestQueueTimeMs && this.environment.getNowUnixTimeMs() - this.latestQueueTimeMs > NO_PROGRESS_TOLERANCE_TIME_MS && !this.isQueueBlocked()) {
                const e = this.extractVictim();
                void 0 === e ? fs.error("Unable to extract latest task when trying to make progress", 37) : (fs.error(`Unable to make progress. Canceling task ${e.toString()}. Queue: ${this.queueToString()}`, 36, e.getEntityIds()), this.cancelTask(e))
            }
            if (this.isStopping ? this.stopTasks() : this.runTasks(), this.taskQueue.length > 0) {
                const e = this.computeChecksum();
                e !== this.latestQueueChecksum && (this.latestQueueChecksum = e, this.latestQueueTimeMs = this.environment.getNowUnixTimeMs())
            } else this.latestQueueChecksum = void 0, this.latestQueueTimeMs = void 0;
            if (this.taskQueue.length > 0) this.isQueueBlocked() ? (fs.debug("TaskManager queue is blocked on WAITING tasks. Sleeping."), this.clearTimeout(), this.latestQueueChecksum = void 0, this.latestQueueTimeMs = void 0) : (fs.debug("TaskManager schedule callback for later"), this.runAfter(K));
            else if (this.isStopping) fs.debug("TaskManager schedule callback for now"), this.runAfter(0);
            else {
                for (fs.group("TaskManager done"), this.clearTimeout(), this.latestQueueChecksum = void 0, this.latestQueueTimeMs = void 0; this.doneCallbacks.length > 0;) {
                    const e = this.doneCallbacks.shift();
                    void 0 !== e && (fs.group("executing done callback"), ks.executeFunction(e, 155), fs.groupEnd())
                }
                fs.groupEnd()
            }
            this.isRunning = !1, fs.timeEnd("TaskManager.eventLoop()"), fs.groupEnd()
        }
        extractVictim() {
            let e;
            for (let t = 0; t < this.taskQueue.length; t++) this.taskQueue[t].isBlocked() || (void 0 === e || this.taskQueue[t].getId() > this.taskQueue[e].getId()) && (e = t);
            if (void 0 !== e) return this.taskQueue.splice(e, 1)[0]
        }
        stopTasks() {
            fs.group("TaskManager.stopTasks()");
            for (const e of this.completedTasks) e.cleanup();
            for (; this.taskQueue.length > 0;) {
                const e = this.taskQueue.shift();
                void 0 !== e && (fs.error(`Stopping and had to cancel task ${e.toString()}`, 38, e.getEntityIds()), this.cancelTask(e))
            }
            for (; this.completedTasks.length > 0;) this.completedTasks.shift();
            fs.debug("Cleanup of all Tasks complete. taskQueue and completedTasks are now empty"), fs.groupEnd(), this.isStopping = !1
        }
        cancelTask(e) {
            void 0 !== e && (fs.debug("Canceling task " + e.toString()), e.cancel(), this.handleDone(e))
        }
        handleNotDone(e) {
            this.taskQueue.push(e)
        }
        handleDone(e) {
            this.completedTasks.push(e), this.queueChecksum = void 0
        }
        runTasks() {
            fs.group("TaskManager.runTasks()"), this.queueChecksum = this.computeChecksum();
            let e = !0;
            for (; 0 !== this.taskQueue.length;) {
                const t = this.getUnloadingTasks();
                if (!e && 0 === t.length) break;
                fs.debug(`task queue: ${this.queueToString()}`);
                const i = this.taskQueue.shift();
                if (void 0 === i) continue;
                let s = !1,
                    n = !1;
                t.length > 0 && (i.isUnloading() && e ? s = !0 : 0 === i.getNotDoneDependencies().length && (n = !0));
                const r = this.computeChecksum();
                let o;
                s ? (fs.debug(`Skipping unloading task ${i.toString()}. TM in unloading state and still making progress`), o = wr.TRY_LATER) : i.getStatus() === wr.WAITING ? (fs.debug(`Skipping waiting task ${i.toString()}`), o = wr.WAITING) : (fs.debug(`TaskManager running ${i.toString()}`), fs.time(`Task running ${i.toString()}`), o = i.runWrapper(), fs.timeEnd(`Task running ${i.toString()}`), fs.debug("TaskManager " + i.toString() + " returned " + wr[o]));
                const a = this.computeChecksum();
                if (n && r !== a && (n = !1), n && !i.isDone()) i.inTransaction() && fs.warn(`Unloading ${t[0].toString()} and transaction task is not done. Canceling ${i.toString()}`, 39, i.getEntityIds()), this.cancelTask(i);
                else switch (o) {
                    case wr.TRY_LATER:
                        this.handleNotDone(i);
                        break;
                    case wr.FAILED:
                    case wr.SUCCEEDED:
                        this.handleDone(i);
                        break;
                    case wr.CANCELED:
                        this.handleDone(i), fs.debug("Task self-canceled " + i.toString());
                        break;
                    case wr.WAITING:
                        this.handleNotDone(i);
                        break;
                    default:
                        this.handleDone(i), fs.error(`Invalid task status ${o} for ${i.toString()}`, 40, i.getEntityIds())
                }
                const l = this.computeChecksum();
                if (l !== this.queueChecksum) {
                    if (this.isStopping) break;
                    void 0 === this.queueChecksum && (this.queueChecksum = l)
                } else e = !1
            }
            fs.debug("No more work to do now."), fs.groupEnd()
        }
        getUnloadingTasks() {
            return this.taskQueue.filter((e => e.isUnloading()))
        }
        clearTimeout() {
            void 0 !== this.timeoutId && (fs.debug("TaskManager clearing timeoutId: " + this.timeoutId), this.environment.getWindow().clearTimeout(this.timeoutId), this.timeoutId = void 0)
        }
        runAfter(e) {
            fs.debug("TaskManager runAfter(" + e + "ms)"), this.clearTimeout(), this.timeoutId = this.environment.getWindow().setTimeout((() => {
                try {
                    fs.debug("TaskManager callback triggered"), this.eventLoop()
                } catch (e) {
                    const t = new bt("TaskManager exception", e);
                    fs.error(t, 41)
                }
            }), e), fs.debug("TaskManager set new timer: " + this.timeoutId)
        }
        computeChecksum() {
            return this.taskQueue.map((e => e.getId().toString())).join("-")
        }
        queueToString() {
            return this.taskQueue.map((e => e.toString())).join(", ")
        }
        isQueueBlocked() {
            return this.taskQueue.every((e => e.isBlocked()))
        }
    }
    class ca extends xr {
        constructor(e, t, i) {
            super(), __publicField(this, "environment"), __publicField(this, "browserEventLogger"), __publicField(this, "integrationDataStorage"), __publicField(this, "sent", !1), __publicField(this, "deliveryStatus", wr.NOT_STARTED), this.environment = N(e), this.browserEventLogger = N(t), this.integrationDataStorage = N(i)
        }
        toString() {
            return `ContextEventTask(${this.environment.getPageviewId()})`
        }
        inTransaction() {
            return !0
        }
        isUnloading() {
            return !1
        }
        run() {
            return this.sendOnce(), this.deliveryStatus === wr.SUCCEEDED ? wr.SUCCEEDED : this.deliveryStatus === wr.FAILED ? wr.FAILED : (fs.debug("Waiting for context event delivery confirmation"), wr.TRY_LATER)
        }
        sendOnce() {
            this.sent || (fs.info("Sending context event"), this.browserEventLogger.sendContext(this.integrationDataStorage).then((() => {
                fs.info(`Context ${this.environment.getPageviewId()} event delivery success`), this.deliveryStatus = wr.SUCCEEDED
            })).catch((e => {
                const t = new bt(`Context ${this.environment.getPageviewId()} event delivery failed`, e);
                fs.warn(t, 224), this.deliveryStatus = wr.FAILED
            })), this.sent = !0)
        }
    }

    function ua(e, t) {
        return t.filter((t => ha(e, t)))
    }

    function da(e, t) {
        return t.some((t => ha(e, t)))
    }

    function ha(e, t) {
        return e.getPages().some((e => e.getId() === t.getId()))
    }
    class ga {
        constructor({
            environment: e,
            browserEventLogger: t,
            customer: i,
            customerStorage: s,
            attributeStorage: n,
            activityStorage: r,
            user: o,
            override: a,
            pageContext: l,
            statusModel: c,
            taskManager: u
        }) {
            __publicField(this, "override"), __publicField(this, "pageContext"), __publicField(this, "environment"), __publicField(this, "customer"), __publicField(this, "taskManager"), __publicField(this, "browserEventLogger"), __publicField(this, "customerStorage"), __publicField(this, "attributeStorage"), __publicField(this, "activityStorage"), __publicField(this, "user"), __publicField(this, "statusModel"), this.environment = N(e), this.browserEventLogger = N(t), this.customer = N(i), this.customerStorage = N(s), this.attributeStorage = N(n), this.activityStorage = N(r), this.user = N(o), this.override = N(a), this.pageContext = N(l), this.statusModel = N(c), this.taskManager = N(u)
        }
        cleanup() {}
        sendConversionEvent(e, t, i) {
            fs.group(`sendConversionEvent(${e.getName()}, ${t})`);
            const s = new tr(e, t, void 0, i);
            this.activityStorage.add(eo.buildConversionActivity(s, this.customer, this.environment, this.user, this.attributeStorage, this.customerStorage));
            const n = new Fr(s, this.browserEventLogger, this.customer, this.customerStorage, this.statusModel);
            this.taskManager.addTask(n), fs.groupEnd()
        }
    }
    class pa extends ga {
        constructor() {
            super(...arguments), __publicField(this, "registeredClickEvents", [])
        }
        cleanup() {
            fs.group("InstrumentClickEvent.cleanup()"), this.registeredClickEvents.forEach((([e, t]) => {
                fs.debug('removing handler: events="' + this.getEventName() + '", selector="' + e.getSelector() + '"');
                try {
                    this.environment.getWindow().document.removeEventListener("click", t, !0)
                } catch (i) {
                    const t = new bt("Failed to unregister click event", i);
                    fs.error(t, 194, {
                        eventId: e.getId()
                    })
                }
            })), fs.groupEnd()
        }
        instrumentClickEvent(e) {
            fs.group("instrumentClickEvent(" + e.getName() + ")"), fs.info(`Instrument click event ${e.getId()}, selector ${e.getSelector()}`), fs.debug('adding handler: events="' + this.getEventName() + '", selector="' + e.getSelector() + '"');
            const t = t => {
                try {
                    if (t.target instanceof Element && t.target.closest(e.getSelector()) instanceof Element) {
                        if (!(t.target instanceof HTMLElement || t.target instanceof SVGElement)) return void fs.warn(`Click event triggered for event ID ${e.getId()} (selector: "${e.getSelector()}"), but target is neither an HTMLElement or SVGElement`, 259);
                        const i = this.environment.generateActionId();
                        this.handleClickEvent(e, i, t)
                    }
                } catch (i) {
                    const t = new bt("Failed to handle click event", i);
                    fs.error(t, 167, {
                        eventId: e.getId()
                    })
                }
            };
            try {
                this.environment.getWindow().document.addEventListener("click", t, !0)
            } catch (i) {
                const t = new bt("Failed to register click event", i);
                fs.error(t, 193, {
                    eventId: e.getId()
                })
            }
            this.registeredClickEvents.push([e, t]), fs.groupEnd()
        }
        getEventName() {
            return "click." + this.environment.getPageviewId()
        }
    }
    class ma extends pa {
        initialize(e) {
            fs.group("InstrumentStandardClickEvents.initialize()"), _t.filterEvents(e).filter((e => da(this.pageContext, e.getPages()))).forEach((e => {
                this.instrumentClickEvent(e)
            })), fs.groupEnd()
        }
        handleClickEvent(e, t, i) {
            fs.group(`handleClickEvent(${e.getName()}, ${t})`), fs.debug("handleClickEvent run code");
            e.executeCode(ks.evalBoolean) ? (this.sendConversionEvent(e, t, i), fs.groupEnd(), this.taskManager.runNow()) : fs.groupEnd()
        }
    }
    class va extends ga {
        initialize(e) {
            fs.group("InstrumentViewEvents.initialize()");
            const t = this.environment.getPageviewId();
            Tt.filterEvents(e).filter((e => da(this.pageContext, e.getPages()))).forEach((e => {
                this.handleViewEvent(e, t)
            }))
        }
        handleViewEvent(e, t) {
            fs.group(`handleViewEvent(${e.getName()}, ${t})`), fs.debug("handleViewEvent run code");
            e.executeCode(ks.evalBoolean) ? (this.sendConversionEvent(e, t), fs.groupEnd()) : fs.groupEnd()
        }
    }
    class ba extends pa {
        initialize(e) {
            fs.group("InstrumentWebflowClickEngagementEvents.initialize()");
            const t = xt.filterEvents(e);
            if (t.length > 0) {
                const e = t[0];
                t.length > 1 && fs.error(`Expected exactly one WebflowClickEngagementEvent, but found ${t.length}`, 256), this.instrumentClickEvent(e)
            }
            fs.groupEnd()
        }
        handleClickEvent(e, t, i) {
            fs.group(`handleWebflowClickEngagementEvent(${e.getName()}, ${t})`), this.sendConversionEvent(e, t, i), fs.groupEnd(), this.taskManager.runNow()
        }
    }
    class fa extends pa {
        initialize(e) {
            fs.group("InstrumentWebflowClickEvents.initialize()"), Ii.filterEvents(e).forEach((e => {
                this.instrumentClickEvent(e)
            })), fs.groupEnd()
        }
        handleClickEvent(e, t, i) {
            fs.group(`handleWebflowClickEvent(${e.getName()}, ${t})`), this.sendConversionEvent(e, t, i), fs.groupEnd(), this.taskManager.runNow()
        }
    }
    class Ea extends xr {
        constructor(e, t, i, s, n, r, o, a, l, c) {
            super(), __publicField(this, "environment"), __publicField(this, "browserEventLogger"), __publicField(this, "customer"), __publicField(this, "customerStorage"), __publicField(this, "attributeStorage"), __publicField(this, "activityStorage"), __publicField(this, "user"), __publicField(this, "override"), __publicField(this, "pageContext"), __publicField(this, "instrumentations", []), __publicField(this, "statusModel"), this.environment = N(e), this.browserEventLogger = N(t), this.customer = N(i), this.customerStorage = N(s), this.attributeStorage = N(n), this.activityStorage = N(r), this.user = N(o), this.override = N(a), this.pageContext = N(l), this.statusModel = N(c)
        }
        toString() {
            return "ConversionEventInstrumentationTask()"
        }
        inTransaction() {
            return !0
        }
        isUnloading() {
            return !1
        }
        cleanup() {
            this.instrumentations.forEach((e => {
                e.cleanup()
            }))
        }
        run() {
            return this.instrumentEvents(), wr.SUCCEEDED
        }
        instrumentEvents() {
            fs.group("instrumentEvents()");
            const e = this.customer.getEvents().filter((e => this.override.isEventLive(e).orElse("live" === e.getState()))),
                t = {
                    environment: this.environment,
                    browserEventLogger: this.browserEventLogger,
                    customer: this.customer,
                    customerStorage: this.customerStorage,
                    attributeStorage: this.attributeStorage,
                    activityStorage: this.activityStorage,
                    user: this.user,
                    override: this.override,
                    pageContext: this.pageContext,
                    statusModel: this.statusModel,
                    taskManager: this.manager
                },
                i = new ma(t);
            i.initialize(e), this.instrumentations.push(i);
            const s = new fa(t);
            s.initialize(e), this.instrumentations.push(s);
            const n = new va(t);
            n.initialize(e), this.instrumentations.push(n);
            const r = new ba(t);
            r.initialize(e), this.instrumentations.push(r), fs.groupEnd()
        }
    }
    const _a = class extends xr {
        constructor(e, t, i, s) {
            super(), __publicField(this, "environment"), __publicField(this, "customer"), __publicField(this, "endpoint"), __publicField(this, "getCookie"), __publicField(this, "startTimeMs"), __publicField(this, "sent", !1), __publicField(this, "deliveryStatus", wr.NOT_STARTED), this.environment = e, this.customer = t, this.endpoint = i, this.getCookie = s, this.startTimeMs = this.environment.getNowUnixTimeMs()
        }
        toString() {
            return `CookieAssociatorTask(${this.endpoint})`
        }
        inTransaction() {
            return !0
        }
        isUnloading() {
            return !1
        }
        run() {
            if (this.sendOnce(), this.deliveryStatus === wr.SUCCEEDED) return wr.SUCCEEDED;
            if (this.deliveryStatus === wr.FAILED) return wr.FAILED;
            return this.environment.getNowUnixTimeMs() - this.startTimeMs >= _a.WAIT_FOR_COOKIE_MS ? (fs.warn(`Cookie not present on the page within ${_a.WAIT_FOR_COOKIE_MS}ms (${this.endpoint} )`, 81), wr.SUCCEEDED) : wr.TRY_LATER
        }
        sendOnce() {
            if (this.sent) return;
            const e = this.getCookie();
            if (!e.isPresent()) return;
            const t = e.get(),
                i = this.customer.getId();
            fs.info(`Sending id association request. Customer: ${i}`), this.environment.fetch(se, this.endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "text/plain;charset=UTF-8"
                },
                body: we({
                    customerId: this.customer.getId(),
                    cookie: t
                })
            }).then((() => {
                fs.info("Successfully sent id association request"), this.deliveryStatus = wr.SUCCEEDED
            })).catch((e => {
                const t = new bt(`Error calling ${this.endpoint} `, e);
                fs.error(t, 82), this.deliveryStatus = wr.FAILED
            })), this.sent = !0
        }
    };
    let ya = _a;
    __publicField(ya, "WAIT_FOR_COOKIE_MS", 5e3);
    class Sa extends xr {
        constructor(e) {
            super(), __publicField(this, "elementObserver"), this.elementObserver = e
        }
        toString() {
            return "ElementObserverTask()"
        }
        inTransaction() {
            return !1
        }
        isUnloading() {
            return !1
        }
        cleanup() {
            fs.group("ElementObserverTask.cleanup()"), this.elementObserver.reset(), fs.groupEnd()
        }
        run() {
            return fs.debug("ElementObserverTask no-op done"), wr.SUCCEEDED
        }
    }
    class Ia extends xr {
        constructor(e, t, i, s, n, r, o, a, l) {
            if (super(), __publicField(this, "environment"), __publicField(this, "browserEventLogger"), __publicField(this, "customer"), __publicField(this, "user"), __publicField(this, "override"), __publicField(this, "activityStorage"), __publicField(this, "attributeStorage"), __publicField(this, "customerStorage"), __publicField(this, "statusModel"), !ur(i)) throw new Error("Hubspot integration must be enabled for the customer to use the HubspotFormsTask");
            this.environment = N(e), this.browserEventLogger = N(t), this.customer = N(i), this.user = N(s), this.override = N(n), this.activityStorage = N(r), this.attributeStorage = N(o), this.customerStorage = N(a), this.statusModel = N(l)
        }
        toString() {
            return "HubspotFormsTask()"
        }
        inTransaction() {
            return !1
        }
        isUnloading() {
            return !1
        }
        run() {
            return this.attachFormHandler(), wr.SUCCEEDED
        }
        attachFormHandler() {
            window.addEventListener("message", (e => {
                if (hr(e)) {
                    const t = e.data.id;
                    fs.debug(`handler fired for hubspot form; triggering lead association request (Form ID: ${t})`);
                    const i = this.environment.generateActionId();
                    this.findEvents(t).forEach((e => {
                        this.sendConversionEvent(e, i)
                    }));
                    const s = new ya(this.environment, this.customer, "/hubspot-id-associator", (() => dr(this.environment)));
                    this.manager.addTask(s)
                }
            }))
        }
        findEvents(e) {
            return St.filterEvents(this.customer.getEvents()).filter((e => this.override.isEventLive(e).orElse("live" === e.getState()))).filter((t => t.getFormId() === e))
        }
        sendConversionEvent(e, t) {
            fs.debug("Hubspot form submission send conversion event");
            const i = new tr(e, t, void 0, void 0);
            this.activityStorage.add(eo.buildConversionActivity(i, this.customer, this.environment, this.user, this.attributeStorage, this.customerStorage));
            const s = new Fr(i, this.browserEventLogger, this.customer, this.customerStorage, this.statusModel);
            this.manager.addTask(s)
        }
    }
    const wa = class extends xr {
        constructor(e, t, i, s, n, r, o, a, l) {
            if (super(), __publicField(this, "environment"), __publicField(this, "browserEventLogger"), __publicField(this, "customer"), __publicField(this, "user"), __publicField(this, "override"), __publicField(this, "activityStorage"), __publicField(this, "attributeStorage"), __publicField(this, "customerStorage"), __publicField(this, "statusModel"), __publicField(this, "startTimeMs"), __publicField(this, "trackedForms", []), !gr(i)) throw new Error("Marketo integration must be enabled for the customer to use the MarketoFormsTask");
            this.environment = N(e), this.browserEventLogger = N(t), this.customer = N(i), this.user = N(s), this.override = N(n), this.activityStorage = N(r), this.attributeStorage = N(o), this.customerStorage = N(a), this.statusModel = N(l), this.startTimeMs = this.environment.getNowUnixTimeMs()
        }
        toString() {
            return "MarketoFormsTask()"
        }
        inTransaction() {
            return !1
        }
        isUnloading() {
            return !1
        }
        run() {
            const e = this.environment.getNowUnixTimeMs(),
                t = this.environment.getWindow();
            if (void 0 !== t.MktoForms2) return fs.debug("marketo forms library ready"), this.attachFormHandlers(t.MktoForms2), wr.SUCCEEDED;
            return e - this.startTimeMs >= wa.WAIT_FOR_MKTOFORMS2_MS ? (fs.debug(`marketo forms library not present on the page within ${wa.WAIT_FOR_MKTOFORMS2_MS}ms`), wr.SUCCEEDED) : (fs.debug("marketo forms library not present; Will try again later."), wr.TRY_LATER)
        }
        attachFormHandlers(e) {
            e.whenReady((e => {
                const t = String(e.getId());
                this.trackedForms.includes(t) ? fs.debug(`marketo form already tracked (Form ID: ${t})`) : (this.trackedForms.push(t), fs.debug(`attaching success handler to marketo (Form ID: ${t})`), e.onSuccess((() => {
                    fs.debug(`success handler fired for marketo form; triggering lead association request (Form ID: ${t})`);
                    const e = this.environment.generateActionId();
                    this.findEvents(t).forEach((t => {
                        this.sendConversionEvent(t, e)
                    }));
                    const i = new ya(this.environment, this.customer, "/marketo-id-associator", (() => pr(this.environment)));
                    this.manager.addTask(i)
                })))
            }))
        }
        findEvents(e) {
            return It.filterEvents(this.customer.getEvents()).filter((e => this.override.isEventLive(e).orElse("live" === e.getState()))).filter((t => t.getFormId() === e))
        }
        sendConversionEvent(e, t) {
            fs.debug("Marketo form submission send conversion event");
            const i = new tr(e, t, void 0, void 0);
            this.activityStorage.add(eo.buildConversionActivity(i, this.customer, this.environment, this.user, this.attributeStorage, this.customerStorage));
            const s = new Fr(i, this.browserEventLogger, this.customer, this.customerStorage, this.statusModel);
            this.manager.addTask(s)
        }
    };
    let Ca = wa;
    __publicField(Ca, "WAIT_FOR_MKTOFORMS2_MS", 5e3);
    class Ta extends xr {
        toString() {
            return "PageUnloadingTask()"
        }
        inTransaction() {
            return !1
        }
        isUnloading() {
            return !0
        }
        run() {
            return fs.debug("page unload no-op done"), wr.SUCCEEDED
        }
    }
    class xa extends xr {
        constructor(e, t) {
            super(), __publicField(this, "environment"), __publicField(this, "browserEventLogger"), __publicField(this, "sent", !1), __publicField(this, "deliveryStatus", wr.NOT_STARTED), this.environment = N(e), this.browserEventLogger = N(t)
        }
        toString() {
            return `PageviewEventTask(${this.environment.getPageviewId()})`
        }
        inTransaction() {
            return !0
        }
        isUnloading() {
            return !1
        }
        run() {
            return this.sendOnce(), this.deliveryStatus === wr.SUCCEEDED ? wr.SUCCEEDED : this.deliveryStatus === wr.FAILED ? wr.FAILED : (fs.debug("Waiting for pageview event delivery confirmation"), wr.TRY_LATER)
        }
        sendOnce() {
            this.sent || (fs.info("Sending pageview event"), this.browserEventLogger.sendPageview().then((() => {
                fs.info(`Pageview ${this.environment.getPageviewId()} event delivery success`), this.deliveryStatus = wr.SUCCEEDED
            })).catch((e => {
                const t = new bt(`Pageview ${this.environment.getPageviewId()} event delivery failed`, e);
                fs.warn(t, 83), this.deliveryStatus = wr.FAILED
            })), this.sent = !0)
        }
    }
    var Aa = (e => (e[e.TS = 0] = "TS", e[e.TZ = 1] = "TZ", e[e.DP = 2] = "DP", e[e.WP = 3] = "WP", e[e.US = 4] = "US", e[e.UM = 5] = "UM", e[e.UCM = 6] = "UCM", e[e.UT = 7] = "UT", e[e.UCN = 8] = "UCN", e[e.UPN = 9] = "UPN", e[e.UPNV = 10] = "UPNV", e[e.CAN = 11] = "CAN", e[e.CANV = 12] = "CANV", e[e.PID = 13] = "PID", e[e.IFTU = 14] = "IFTU", e[e.AID = 15] = "AID", e))(Aa || {});
    const Fa = "=",
        ka = "-";
    class Pa {
        static buildBrowserContext(e, t, i, s, n) {
            const r = t.getInternalAttributes("user"),
                o = [];
            n.getExperiences().forEach((e => {
                if ("cc" !== e.getType()) {
                    const t = n.getVariationIds(e.getId());
                    1 === t.length ? o.push(t[0]) : fs.error("Non-cc experience does not have exactly one variation selected", 181, {
                        experienceId: e.getId()
                    })
                }
            }));
            const a = {
                isFirstTimeUser: i.isNewVisitor(),
                timestamp: e.getNowUnixTime(),
                customAttributes: t.getFlattenedCustomAttributes(),
                pageIds: s.getPages().map((e => e.getId())),
                audienceIds: s.getAudiences().map((e => e.getId())),
                selectedVariationIds: o
            };
            return void 0 !== r.ts && (a.trafficSource = r.ts), a.timeZone = e.getTimeZone(), void 0 !== r.uts && (a.utmSource = r.uts), void 0 !== r.utm && (a.utmMedium = r.utm), void 0 !== r.utcm && (a.utmCampaign = r.utcm), void 0 !== r.utt && (a.utmTerm = r.utt), void 0 !== r.utcn && (a.utmContent = r.utcn), a.hostingPageUrl = e.getHostingPageUrl().getRawUrl(), a
        }
        static buildFeatures(e, t, i, s) {
            const n = {},
                r = t.getInternalAttributes("user");
            return Pa.addFeature(n, 0, Pa.getFeatureFromAttribute(r.ts)), Pa.addFeature(n, 4, Pa.getFeatureFromAttribute(r.uts)), Pa.addFeature(n, 5, Pa.getFeatureFromAttribute(r.utm)), Pa.addFeature(n, 6, Pa.getFeatureFromAttribute(r.utcm)), Pa.addFeature(n, 7, Pa.getFeatureFromAttribute(r.utt)), Pa.addFeature(n, 8, Pa.getFeatureFromAttribute(r.utcn)), Pa.addFeature(n, 9, Pa.getUrlParameterName(e)), Pa.addFeature(n, 10, Pa.getUrlParameterNameValue(e)), Pa.addFeature(n, 1, Pa.getTimeZoneValue(e)), Pa.addFeature(n, 2, Pa.getDayPartValue(e)), Pa.addFeature(n, 3, Pa.getWeekPartValue(e)), Pa.addFeature(n, 11, Pa.getCustomAttributeName(t)), Pa.addFeature(n, 12, Pa.getCustomAttributeNameValue(t)), Pa.addFeature(n, 13, Pa.getPageId(s)), Pa.addFeature(n, 14, Pa.getIsFirstTimeUser(i)), Pa.addFeature(n, 15, Pa.getAudienceId(s)), n
        }
        static getFeatureFromAttribute(e) {
            return j.ofNullable(e).toArray()
        }
        static getTimeZoneValue(e) {
            return [e.getTimeZone()]
        }
        static getDayPartValue(e) {
            return [e.getDayPart()]
        }
        static getWeekPartValue(e) {
            return [e.getWeekPart()]
        }
        static getUrlParameterName(e) {
            return Object.keys(e.getHostingPageUrl().getAllQueryParamsUnsafe()).filter((e => "" !== e))
        }
        static getUrlParameterNameValue(e) {
            const t = e.getHostingPageUrl().getAllQueryParamsUnsafe(),
                i = [];
            return Object.keys(t).forEach((e => {
                i.push(e + ka + t[e])
            })), i
        }
        static getCustomAttributeName(e) {
            const t = e.getFlattenedCustomAttributes();
            return Object.keys(t)
        }
        static getCustomAttributeNameValue(e) {
            const t = e.getFlattenedCustomAttributes();
            return Object.keys(t).map((e => e + ka + t[e]))
        }
        static getPageId(e) {
            return e.getPages().map((e => e.getId()))
        }
        static getIsFirstTimeUser(e) {
            return [e.isNewVisitor().toString()]
        }
        static getAudienceId(e) {
            return e.getAudiences().map((e => e.getId()))
        }
        static buildUnaryFeature(e, t) {
            return Aa[e] + Fa + t
        }
        static addFeature(e, t, i) {
            i.forEach((i => {
                e[Pa.buildUnaryFeature(t, i)] = !0
            }))
        }
    }
    class Ma extends Ts {
        constructor(e) {
            super(e), __publicField(this, "urlParamsEncoded"), __publicField(this, "utmMedium"), __publicField(this, "utmSource"), this.urlParamsEncoded = Cs(Ma.standardUrlParameterParser(e)), this.utmSource = this.urlParamsUnsafe.utm_source, this.utmMedium = this.urlParamsUnsafe.utm_medium
        }
        static standardUrlParameterParser(e) {
            const t = {};
            if (void 0 === e) return t;
            const i = e.indexOf("#");
            let s = e.length - 1; - 1 !== i && (s = i - 1);
            const n = e.indexOf("?"),
                r = n + 1;
            return -1 === n || r >= s || e.slice(r, s + 1).split("&").filter((e => void 0 !== e && e.length > 0)).forEach((e => {
                let i = e,
                    s = "";
                const n = e.indexOf("="); - 1 !== n && (i = e.slice(0, Math.max(0, n)), s = e.slice(n + 1)), void 0 === t[i] ? t[i] = [s] : t[i].push(s)
            })), t
        }
        get emailTagRegExp() {
            return /email|^send|hs_em|[\W_^]mail[\W_$]|sms|newsletter|^em[\W_$]|^attentive$/
        }
        get searchTagRegExp() {
            return /(search|bing|google|googlepla|sem|adwords)/i
        }
        get socialTagRegExp() {
            return /facebook|[\W_^]fb[\W_$]|youtube|[\W_^]ig[\W_$]|twitter|igstories|^tw$|twtr|profile|pinterest|instagram|socialmedia|quora|newsfeed|reddit|social|influencer|yelp|snapchat|linkedin|googleplus|g\+|gplus|google\+/i
        }
        get paidSocialRegExp() {
            return /influencer|ctc|ocpm|smm|socialp|cbo|bid|paidsocial/i
        }
        get organicSocialRegExp() {
            return /organic|socialo|stories|story|profile/i
        }
        get paidRegExp1() {
            return /(placement|attentive|taboola|gdn|criteo|googlepla|mrkt_adwords|outbrain|shareasale|klaviyo|inboxdollars|liveintent|adwords|ads|listrak|gsp|bluecore)/i
        }
        get paidRegExp2() {
            return /(cpc|affiliate|paid|smm|sem|ocpm|adroll|reengagement|remarketing|retargeting|cpa|paids|native|ppc|leads|display|[\W_^]ad[\W_$]|cpm|advertising|channel_partner|sponsored)/i
        }
        get searchIdRegExp() {
            return /([?&])(gclid|msclkid)=/i
        }
        get socialIdRegEx() {
            return /([?&])fbclid=/i
        }
        getAllUrlParamsEncoded() {
            return this.urlParamsEncoded
        }
        getSourceFromAllParams(e) {
            let t = !1;
            for (const i of Object.keys(this.urlParamsUnsafe))
                if (Object.prototype.hasOwnProperty.call(this.urlParamsUnsafe, i)) {
                    const s = this.urlParamsUnsafe[i];
                    if (t = t || this.isParamPaid(s), this.isParamSocialTagged(s)) return e || t || this.isParamSocialPaid(s) ? "CP" : "CO";
                    if (this.isParamSearchTagged(s)) return e || t || this.isSearchPaid() ? "SP" : "SO";
                    if (this.getUrl().isPresent() && this.isParamEmailTagged(s)) return "EM"
                }
            return t ? "OP" : "OT"
        }
        isSocialTagged() {
            return !(!this.optionalUrl.isPresent() || !this.socialIdRegEx.test(this.optionalUrl.get())) || (this.isParamSocialTagged(this.utmMedium) || this.isParamSocialTagged(this.utmSource))
        }
        isSocialPaid() {
            return this.isParamSocialPaid(this.utmMedium) || this.isParamSocialPaid(this.utmSource)
        }
        isSearchTagged(e) {
            return !(!this.optionalUrl.isPresent() || !this.searchIdRegExp.test(this.optionalUrl.get())) || (!(!this.isParamSearchTagged(this.utmSource) && !this.isParamSearchTagged(this.utmMedium)) || e.getUrl().isPresent() && e.isFromSearchEngine() && (Boolean(this.utmMedium) || Boolean(this.utmSource)))
        }
        isSearchPaid() {
            return !(!this.optionalUrl.isPresent() || !this.searchIdRegExp.test(this.optionalUrl.get())) || (this.isParamSearchPaid(this.utmMedium) || this.isParamSearchPaid(this.utmSource))
        }
        isPaidTraffic() {
            return this.isParamPaid(this.utmSource) || this.isParamPaid(this.utmMedium)
        }
        isEmailTagged() {
            return this.isParamEmailTagged(this.utmSource) || this.isParamEmailTagged(this.utmMedium)
        }
        isParamPaid(e) {
            return void 0 !== e && (this.paidRegExp1.test(e) || this.paidRegExp2.test(e))
        }
        isParamEmailTagged(e) {
            return void 0 !== e && this.emailTagRegExp.test(e)
        }
        isParamSearchTagged(e) {
            return void 0 !== e && this.searchTagRegExp.test(e)
        }
        isParamSearchPaid(e) {
            return void 0 !== e && /googlep|adwords/.test(e)
        }
        isParamSocialPaid(e) {
            return (void 0 === e || !this.organicSocialRegExp.test(e)) && (void 0 !== e && this.paidSocialRegExp.test(e))
        }
        isParamSocialTagged(e) {
            return void 0 !== e && this.socialTagRegExp.test(e)
        }
    }
    class Da extends Ts {
        get emailDomainRegExp() {
            return /([/.])(webmail|live|mail|inbox|zimbra|email|em)\d{0,2}\.|google.android.gm/i
        }
        get socialDomainRegExp() {
            return /([/.])(t\.co|(plus\.google|facebook|twitter|linkedin|youtube|instagram|pinterest|quora|reddit|github|medium|producthunt|yelp|ycombinator|messenger)\.)/i
        }
        get paidDomainRegExp() {
            return /([/.])(taboola|aimtell|attentive|googlesyndication|shareasale|outbrain|shareasale-analytics|doubleclick)\./i
        }
        get invalidSearchRegExp() {
            return /([/.])((plus|mail|myactivity|chrome|classroom|accounts|news|docs|keep|sites)\.google|googlesyndication|google\.android\.(?!googlequicksearchbox))/i
        }
        get paidSearchRegExp() {
            return /([/.])(google|googleadservices)\..*?\/aclk\?/i
        }
        get validSearchRegExp() {
            return /([/.])(google|bing|baidu|duckduckgo|ask|search\.(yahoo|xfinity|aol|naver))\./i
        }
        isFromSearchEngine() {
            return this.optionalUrl.isPresent() && !this.invalidSearchRegExp.test(this.optionalUrl.get()) && this.validSearchRegExp.test(this.optionalUrl.get())
        }
        isFromEmail() {
            return this.optionalUrl.isPresent() && this.emailDomainRegExp.test(this.optionalUrl.get())
        }
        isFromSocialNetwork() {
            return this.optionalUrl.isPresent() && this.socialDomainRegExp.test(this.optionalUrl.get())
        }
        isPaidTraffic() {
            return this.optionalUrl.isPresent() && this.paidDomainRegExp.test(this.optionalUrl.get())
        }
        isSearchPaid() {
            return this.optionalUrl.isPresent() && !this.invalidSearchRegExp.test(this.optionalUrl.get()) && this.paidSearchRegExp.test(this.optionalUrl.get())
        }
    }

    function Na(e, t) {
        const i = e.getReferrerUrl(),
            s = e.getHostingPageUrl(),
            n = new Da(i.map((e => e.getRawUrl())).orElse(void 0)),
            r = new Ma(s.getRawUrl()),
            o = n.isPaidTraffic() || r.isPaidTraffic();
        let a = Oa(n, r, o);
        return "OT" === a && (a = Ra(n, r, o)), "OT" === a && (a = r.getSourceFromAllParams(o)), "OT" === a && (a = o ? "OP" : n.getUrl().isPresent() ? cs(e, t).orElse(!1) ? "RC" : "OT" : "DN"), a
    }

    function Oa(e, t, i) {
        return e.isFromEmail() ? "EM" : e.isFromSocialNetwork() ? i || t.isSocialPaid() ? "CP" : "CO" : e.isFromSearchEngine() ? i || t.isSearchTagged(e) || e.isSearchPaid() || t.isSearchPaid() ? "SP" : "SO" : "OT"
    }

    function Ra(e, t, i) {
        return t.isSocialTagged() ? i || t.isSocialPaid() ? "CP" : "CO" : t.isSearchTagged(e) ? i || t.isSearchPaid() ? "SP" : "SO" : t.getUrl().isPresent() && t.isEmailTagged() ? "EM" : "OT"
    }
    const La = ["xo"],
        $a = {
            debug(e, t, i) {
                fs.debug(e, t, i, La)
            }
        };
    class Va extends xr {
        constructor(e, t, i) {
            super(), __publicField(this, "localStorage"), __publicField(this, "storageKey"), __publicField(this, "storageDatum"), this.localStorage = e, this.storageKey = t, this.storageDatum = i
        }
        toString() {
            return `StorageCleanupTask(${this.storageKey})`
        }
        inTransaction() {
            return !1
        }
        isUnloading() {
            return !1
        }
        getStorageKey() {
            return this.storageKey
        }
        setStorageDatum(e) {
            this.storageDatum = void 0 === e ? void 0 : __spreadValues({}, e)
        }
        getNotDoneDependencies() {
            return this.manager.findTasks((e => !(e instanceof Va || e.isUnloading() || e.isDone())))
        }
        run() {
            return $a.debug(`Running storage cleanup task for "${this.storageKey}".`), this.getNotDoneDependencies().length > 0 ? ($a.debug("Deferring storage cleanup; other tasks still running"), wr.TRY_LATER) : (void 0 === this.storageDatum ? ($a.debug("Deleting data locally because the common origin is empty for this storageKey"), this.localStorage.delete(this.storageKey)) : ($a.debug(`Writing latest data from the common origin to the customer origin. ${Ie(this.storageDatum,void 0,2)}`), this.localStorage.write(this.storageKey, we(this.storageDatum))), wr.SUCCEEDED)
        }
    }
    class Ua {
        constructor(e, t) {
            __publicField(this, "localStorage"), __publicField(this, "taskManager"), this.localStorage = e, this.taskManager = t
        }
        run() {
            return __async(this, null, (function*() {
                return new Promise((e => {
                    this.taskManager.isDone() ? ($a.debug("[CleanupTaskManager]: no tasks to run"), e()) : ($a.debug("[CleanupTaskManager]: waiting for all tasks to complete"), this.taskManager.onDone((() => {
                        e()
                    })))
                }))
            }))
        }
        queueCleanupTask(e, t) {
            this.findNotDoneCleanupTask(e).ifPresent((i => {
                $a.debug(`Cleanup task already exists for ${e}; updating storageDatum`), i.setStorageDatum(t)
            })).ifAbsent((() => {
                $a.debug(`Creating cleanup task for ${e} with ${Ie(t,void 0,2)}`), this.taskManager.addTask(new Va(this.localStorage, e, t))
            }))
        }
        findNotDoneCleanupTask(e) {
            const [t] = this.taskManager.findTasks((t => t instanceof Va && t.getStorageKey() === e && !t.isDone()));
            return j.ofNullable(t)
        }
    }
    class Wa {
        constructor(e, t, i) {
            __publicField(this, "localStorage"), __publicField(this, "requestId"), __publicField(this, "storageOrigin"), __publicField(this, "message"), __publicField(this, "iframe"), __publicField(this, "resolver"), __publicField(this, "isDone", !1), __publicField(this, "timeStart"), this.localStorage = e, this.requestId = mn(), this.storageOrigin = t, void 0 !== i && this.setMessage(i)
        }
        static get MESSAGE_EVENT_TIMEOUT_MS() {
            return 1e3
        }
        getRequestId() {
            return this.requestId
        }
        getStorageKey() {
            var e;
            return null == (e = this.message) ? void 0 : e.storageKey
        }
        setMessage(e) {
            let t;
            this.getExpectedVersion(e.storageKey).ifPresent((e => {
                t = e
            })), this.message = __spreadProps(__spreadValues({}, e), {
                requestId: this.requestId,
                expectedVersion: t
            })
        }
        setIframe(e) {
            this.iframe = e
        }
        send() {
            return __async(this, null, (function*() {
                if (void 0 === this.iframe) throw new Error("Cannot call send() without setting the iframe");
                if (void 0 === this.message) throw new Error("Cannot call send() without setting the message");
                const {
                    iframe: e,
                    message: t
                } = this;
                yield new Promise(((i, s) => {
                    var n;
                    try {
                        const r = {
                            resolve: i,
                            reject: s
                        };
                        this.resolver = r, null === e.contentWindow ? r.resolve() : ($a.debug(`send(): Sending message to storage domain (${this.storageOrigin}) ${Ie(t,void 0,2)}`), this.timeStart = new Date, null == (n = e.contentWindow) || n.postMessage(t, this.storageOrigin), setTimeout((() => {
                            try {
                                this.isDone || s(new Error(`Did not receive response within ${Wa.MESSAGE_EVENT_TIMEOUT_MS}ms`))
                            } catch (e) {
                                const t = vt(e);
                                fs.error(t, 174)
                            }
                        }), Wa.MESSAGE_EVENT_TIMEOUT_MS))
                    } catch (r) {
                        s(r)
                    }
                }))
            }))
        }
        reply(e) {
            if (void 0 === this.resolver) throw new Error("Cannot reply to message request if the message has no resolver");
            if (void 0 !== this.timeStart) {
                const e = (new Date).getTime() - this.timeStart.getTime();
                this.timeStart = void 0, $a.debug(`XO message round-trip time - ${e}ms`)
            }
            e.success ? this.resolver.resolve() : void 0 === e.error ? this.resolver.reject(new Error("Message request failed, but there is no error data (unexpected)")) : this.resolver.reject(e), this.isDone = !0
        }
        getExpectedVersion(e) {
            return this.localStorage.read(e).flatMap((e => Ba.validateStorageDatumString(e))).flatMap((e => j.ofNullable(e.version)))
        }
    }
    var za = (e => (e.UNEXPECTED = "UNEXPECTED", e.LOCALSTORAGE_ACCESS = "LOCALSTORAGE_ACCESS", e.INVALID_OP = "INVALID_OP", e.INVALID_MESSAGE_FORMAT = "INVALID_MESSAGE_FORMAT", e.INVALID_MESSAGE_META_FORMAT = "INVALID_MESSAGE_META_FORMAT", e.INVALID_DATUM_FORMAT = "INVALID_DATUM_FORMAT", e.UNEXPECTED_VERSION = "UNEXPECTED_VERSION", e))(za || {});

    function ja(e) {
        return e
    }
    class Ba {
        constructor(e, t, i, s) {
            __publicField(this, "taskManager"), __publicField(this, "localStorage"), __publicField(this, "environment"), __publicField(this, "customer"), __publicField(this, "messageRequests"), __publicField(this, "storageKeys"), __publicField(this, "storageOrigin"), __publicField(this, "cleanupTaskManager"), __publicField(this, "isFeatureMissing"), __publicField(this, "iframeLoadPromise"), __publicField(this, "iframe"), this.localStorage = e, this.taskManager = i, this.environment = t, this.messageRequests = {}, this.customer = s, this.isFeatureMissing = !1;
            const n = "intellimizeio.com";
            this.storageOrigin = `https://${s.getId()}.${n}`, this.storageKeys = Kr(s), this.cleanupTaskManager = new Ua(this.localStorage, this.taskManager), this.loadIframe().catch((() => {
                this.isFeatureMissing = !0
            }))
        }
        static validateStorageDatumString(e) {
            let t;
            try {
                if (t = Ce(e), "object" == typeof t && null !== t && ("string" == typeof t.version || void 0 === t.version) && "string" == typeof t.data) return j.of(t)
            } catch (i) {
                $a.debug(`validateStorageDatumString(): Not a StorageDatum (got ${Ie(t)})`)
            }
            return j.empty()
        }
        static getNormalizedStorageValue(e) {
            return Ba.validateStorageDatumString(e).map((e => e.data)).orElse(e)
        }
        static get READY_MESSAGE_TIMEOUT_MS() {
            return 3e3
        }
        static get WAIT_FOR_DATA_MS() {
            return 500
        }
        static isMessageReply(e) {
            return "object" == typeof e && null !== e && "reply" === e.type
        }
        get isCrossOriginEnabled() {
            return !this.isFeatureMissing && (this.customer.getCrossOrigin().isEnabled() || this.customer.getOrigins().length > 0)
        }
        get shouldWaitForData() {
            if (this.environment.getReferrerUrl().isPresent()) {
                const e = this.environment.getReferrerUrl().get(),
                    t = this.environment.getHostingPageUrl();
                if (us(this.customer, e.getOrigin()).orElse(!1)) {
                    if (e.getOrigin() !== t.getOrigin()) return $a.debug("shouldWaitForData(): Detected a switch to a different origin."), !0;
                    let i = !1;
                    for (const e of this.storageKeys)
                        if (this.localStorage.read(e).isPresent()) {
                            i = !0;
                            break
                        }
                    if (!i) return fs.warn("shouldWaitForData(): Detected an origin with no data.", 63), !0;
                    $a.debug("shouldWaitForData(): not waiting (user didn't cross origins, and there is existing data in LocalStorage)")
                } else $a.debug(`shouldWaitForData(): not waiting (referrer origin not allowed - ${e.getOrigin()})`)
            } else $a.debug("shouldWaitForData(): not waiting (no referrer - can't determine if user has crossed origins");
            return !1
        }
        initialize() {
            return __async(this, null, (function*() {
                if (this.isCrossOriginEnabled) {
                    $a.debug("Cross-Origin storage enabled by customer configuration. Persisting LocalStorage operations to the common origin.");
                    const e = this.syncWithCommonOrigin().catch((e => {
                        const t = new bt("Error syncing with common origin", e);
                        fs.error(t, 130), this.isFeatureMissing = !0
                    }));
                    this.shouldWaitForData ? ($a.debug("initialize(): Blocking client execution until xd storage is ready (shouldWaitForData is true)"), yield this.waitForData(e)) : $a.debug("initialize(): Not waiting until xd storage is ready (shouldWaitForData is false)")
                } else $a.debug("Cross-Origin storage disabled by customer configuration. Using LocalStorage only.");
                $a.debug("crossOriginStorage.initialize() has finished")
            }))
        }
        read(e) {
            const t = this.readFromLocalStorage(e);
            return this.readAsync(e).catch((() => {
                this.isFeatureMissing = !0
            })), t.flatMap((e => j.ofNullable(e.data)))
        }
        write(e, t) {
            this.writeAsync(e, t).catch((() => {
                this.isFeatureMissing = !0
            }))
        }
        delete(e) {
            this.deleteAsync(e).catch((() => {
                this.isFeatureMissing = !0
            }))
        }
        loadIframe() {
            return __async(this, null, (function*() {
                if (void 0 === this.iframeLoadPromise) {
                    const {
                        document: e
                    } = this.environment.getWindow();
                    let t;
                    this.iframe = e.createElement("iframe"), this.iframeLoadPromise = new Promise(((s, n) => {
                        let r = !1,
                            o = !1;
                        this.iframe.setAttribute("hidden", ""), this.iframe.setAttribute("tabIndex", "-1"), this.iframe.setAttribute("width", "0"), this.iframe.setAttribute("height", "0"), this.iframe.setAttribute("style", "display:none");
                        let a = `${this.storageOrigin}/storage.html`;
                        fs.getLevel() < i.LogLevel.OFF && (a += `?ideb=${fs.getLevel()}`), this.iframe.setAttribute("src", a), this.iframe.setAttribute("referrerpolicy", "strict-origin-when-cross-origin"), this.iframe.onerror = e => {
                            $a.debug("XO iframe onerror callback triggered"), r || o || setTimeout((() => {
                                try {
                                    o = !0;
                                    const t = new bt("Iframe load error", e);
                                    fs.error(t, 66), n()
                                } catch (t) {
                                    const e = vt(t);
                                    fs.error(e, 170)
                                }
                            }), 0)
                        };
                        const l = () => {
                            $a.debug("XO iframe ready resolver triggered"), o || setTimeout((() => {
                                var e;
                                try {
                                    if ($a.debug("loadIframe(): iframe is ready"), r = !0, void 0 === (null == (e = this.iframe.contentWindow) ? void 0 : e.postMessage)) fs.error("postMessage() API not supported", 65), n(), this.iframe.remove();
                                    else {
                                        if (void 0 !== t) {
                                            const e = (new Date).getTime() - t.getTime();
                                            $a.debug(`iframe load + ready message time - ${e}ms`)
                                        }
                                        s(void 0)
                                    }
                                } catch (i) {
                                    const e = vt(i);
                                    fs.error(e, 171)
                                }
                            }), 0)
                        };
                        this.environment.addListener("message", (e => {
                            try {
                                this.handleResponse(e, l)
                            } catch (t) {
                                const e = new bt("Exception in XO message response handler", t);
                                fs.error(e, 237)
                            }
                        })), t = new Date, e.querySelectorAll("head")[0].insertAdjacentElement("afterbegin", this.iframe), setTimeout((() => {
                            try {
                                r || (o = !0, fs.error(`iframe did not load & receive "ready" message within ${Ba.READY_MESSAGE_TIMEOUT_MS} ms`, 67), n())
                            } catch (e) {
                                const t = vt(e);
                                fs.error(t, 172)
                            }
                        }), Ba.READY_MESSAGE_TIMEOUT_MS)
                    }))
                }
                return this.iframeLoadPromise
            }))
        }
        readFromLocalStorage(e) {
            return this.localStorage.read(e).flatMap((e => {
                try {
                    return j.of(Ce(e))
                } catch (t) {
                    return fs.error(`readFromLocalStorage(): Unable to parse as JSON (${e})`, 68), j.empty()
                }
            }))
        }
        writeToLocalStorage(e, t) {
            this.localStorage.write(e, we(t)), $a.debug(`writeToLocalStorage(): Wrote "${e}" to LocalStorage (${Ie(t,void 0,2)})`)
        }
        deleteFromLocalStorage(e) {
            this.localStorage.delete(e), $a.debug(`deleteFromLocalStorage(): Deleted "${e}" from LocalStorage`)
        }
        readAsync(e) {
            return __async(this, null, (function*() {
                if ($a.debug(`readAsync(): Called with storageKey: "${e}"`), this.isCrossOriginEnabled) {
                    const t = new Wa(this.localStorage, this.storageOrigin, {
                        requestId: "",
                        op: "read",
                        storageKey: e
                    });
                    yield this.sendMessageRequest(t)
                }
            }))
        }
        writeAsync(e, t) {
            return __async(this, null, (function*() {
                let i;
                if ($a.debug(`writeAsync(): Called with storageKey: "${e}", data ${t}`), this.isCrossOriginEnabled) {
                    const s = new Wa(this.localStorage, this.storageOrigin);
                    i = {
                        version: s.getRequestId(),
                        data: t
                    }, s.setMessage({
                        requestId: "",
                        op: "write",
                        storageKey: e,
                        storageDatum: i
                    }), this.writeToLocalStorage(e, i), yield this.sendMessageRequest(s)
                } else this.writeToLocalStorage(e, {
                    data: t
                })
            }))
        }
        deleteAsync(e) {
            return __async(this, null, (function*() {
                if ($a.debug(`delete(): Called with storageKey: "${e}"`), this.isCrossOriginEnabled) {
                    const t = new Wa(this.localStorage, this.storageOrigin, {
                        requestId: "",
                        op: "delete",
                        storageKey: e
                    });
                    this.deleteFromLocalStorage(e), yield this.sendMessageRequest(t)
                } else this.deleteFromLocalStorage(e)
            }))
        }
        syncWithCommonOrigin() {
            return __async(this, null, (function*() {
                const e = [];
                this.storageKeys.forEach((t => {
                    this.readFromLocalStorage(t).ifPresent((({
                        data: i,
                        version: s
                    }) => {
                        s ? ($a.debug(`syncWithCommonOrigin(): Existing storageDatum found with a version (storageKey: ${t}). Sending "read" message to the common origin.`), e.push(this.readAsync(t))) : ($a.debug(`syncWithCommonOrigin(): Existing storageDatum found without a version (storageKey: ${t}). Sending "write" message to the common origin.`), e.push(this.writeAsync(t, i)))
                    })).ifAbsent((() => {
                        $a.debug(`syncWithCommonOrigin(): No existing storageDatum found (storageKey: ${t}). Sending "read" message to the common origin.`), e.push(this.readAsync(t))
                    }))
                })), yield Promise.all(e)
            }))
        }
        sendMessageRequest(e) {
            return __async(this, null, (function*() {
                try {
                    yield this.loadIframe()
                } catch (i) {
                    return void(this.isFeatureMissing = !0)
                }
                const t = e.getRequestId();
                e.setIframe(this.iframe), this.messageRequests[t] = e;
                try {
                    yield e.send(), delete this.messageRequests[t]
                } catch (s) {
                    if (delete this.messageRequests[t], Ba.isMessageReply(s)) this.handleMessageReplyErrors(e, s);
                    else {
                        const e = new bt("Could not send message request", s);
                        fs.error(e, 129), this.isFeatureMissing = !0
                    }
                }
            }))
        }
        handleResponse(e, t) {
            const {
                data: i,
                origin: s
            } = e;
            if (s !== this.storageOrigin) return;
            if ($a.debug(`handleResponse(): Received message event from storage domain (${this.storageOrigin})`), void 0 !== i && $a.debug(Ie(i)), "object" != typeof i || null === i) return void fs.debug("handleResponse(): Refusing to handle message with invalid response format", 69);
            if ("ready" === i.type) return $a.debug('handleResponse(): Received "ready" message'), void t();
            if ("sync" === i.type) return void this.handleSyncResponse(ja(i));
            if ("reply" !== i.type) return void fs.debug(`handleResponse(): Refusing to handle message with unknown type (${i.type})`, 70);
            const {
                correlationId: n
            } = i, r = this.messageRequests[n];
            void 0 !== r ? r.reply(i) : fs.error("handleResponse(): Could not find matching message in memory", 71)
        }
        handleSyncResponse({
            storageKey: e,
            storageDatum: t
        }) {
            this.cleanupTaskManager.queueCleanupTask(e, t)
        }
        handleMessageReplyErrors(e, t) {
            const {
                code: i,
                msg: s
            } = t.error;
            if ($a.debug(s), i === za.UNEXPECTED_VERSION) this.handleUnexpectedVersion(e, t);
            else {
                if (i !== za.LOCALSTORAGE_ACCESS) throw new Error(s);
                $a.debug("LocalStorage is not accessible on the common origin (i.e. browser security setting)")
            }
        }
        handleUnexpectedVersion(e, t) {
            const i = e.getStorageKey(),
                {
                    storageDatum: s
                } = t;
            if (void 0 === s) {
                const e = `handleUnexpectedVersion(): Common origin has no data for storageKey: "${i}"`;
                $a.debug(e)
            } else {
                const e = `handleUnexpectedVersion(): Common origin for storageKey: "${i}"`;
                $a.debug(`${e} ${Ie(s,void 0,2)}`)
            }
            this.cleanupTaskManager.queueCleanupTask(i, s)
        }
        waitForData(e) {
            return __async(this, null, (function*() {
                return new Promise(((t, i) => __async(this, null, (function*() {
                    let s = !1;
                    const n = this.environment.getWindow().setTimeout((() => __async(this, null, (function*() {
                            s = !0;
                            try {
                                t()
                            } catch (e) {
                                const t = vt(e);
                                fs.error(t, 173)
                            }
                        }))), Ba.WAIT_FOR_DATA_MS),
                        r = Date.now();
                    try {
                        const i = yield e, o = Date.now();
                        $a.debug(`waitForData(): iframe load + data sync time - ${o-r}ms`);
                        const a = yield this.cleanupTaskManager.run(), l = Date.now();
                        $a.debug(`waitForData(): Cleanup task time - ${l-o}ms`), s ? fs.warn(`waitForData(): Synchronization did not complete within ${Ba.WAIT_FOR_DATA_MS}ms. (Took ${l-r}ms)`, 72) : ($a.debug(`waitForData(): Sync completed; finished in under ${Ba.WAIT_FOR_DATA_MS}ms (Took ${l-r}ms)`), this.environment.getWindow().clearTimeout(n), t([i, a]))
                    } catch (o) {
                        s || (this.environment.getWindow().clearTimeout(n), i(o))
                    }
                }))))
            }))
        }
    }
    class Ga {
        constructor() {
            __publicField(this, "storage"), this.storage = {}
        }
        write(e, t) {
            Yr(e) || fs.error(`Writing an unknown key to MemoryStorage: ${e}`, 180), this.storage[e] = t
        }
        read(e) {
            return j.ofNullable(this.storage[e])
        }
        delete(e) {
            delete this.storage[e]
        }
    }
    class Ha {
        constructor(e) {
            if (__publicField(this, "environment"), !Xr(e, "sessionStorage")) throw new Error("sessionStorage is not available");
            this.environment = e
        }
        write(e, t) {
            Yr(e) || fs.error(`Writing an unknown key to SessionStorage: ${e}`, 180), this.environment.writeSessionStorage(e, t)
        }
        read(e) {
            return this.environment.readSessionStorage(e)
        }
        delete(e) {
            this.environment.deleteSessionStorage(e)
        }
    }

    function Qa(e) {
        return void 0 !== e.error
    }

    function qa(e, t, i) {
        if (!cs(e, i).orElse(!1)) {
            const s = {
                    utcm: "utm_campaign",
                    utcn: "utm_content",
                    utm: "utm_medium",
                    uts: "utm_source",
                    utt: "utm_term"
                },
                n = Na(e, i);
            t.setInternalAttributes("user", {
                ts: n
            }), t.deleteInternalAttributes("user", _e);
            const r = {};
            _e.forEach((t => {
                const i = s[t],
                    n = e.getHostingPageUrl().getQueryParam(i, (() => !0));
                n.isPresent() && (r[t] = n.get())
            })), Object.keys(r).length > 0 && t.setInternalAttributes("user", r)
        }
    }

    function Ka(e, t, i) {
        e.getCss().ifPresent((s => {
            try {
                fs.info(`Injecting customer ${e.getId()} css`), ks.injectCss(s, `customer-${e.getId()}`, i), t.setCustomer("css", !0)
            } catch (n) {
                const i = new bt(`Customer (${e.getId()}) css injection failed`, n);
                fs.error(i, 26), t.setCustomer("css", !1)
            }
        })), e.getCode().ifPresent((i => {
            try {
                fs.info(`Running customer ${e.getId()} code`), ks.eval(i), t.setCustomer("code", !0)
            } catch (s) {
                const i = new bt(`Customer (${e.getId()}) code execution failed`, s);
                fs.error(i, 13), t.setCustomer("code", !1)
            }
        }))
    }

    function Ya(e) {
        return !e.startsWith('{"')
    }

    function Ja(e) {
        const t = e.getWindow()[De(e)];
        if (void 0 === t) return fs.error("Missing customer JSON. Aborting.", 145), j.empty();
        let i;
        if (fs.time("load json"), Ya(t)) try {
            i = Pe(e, t)
        } catch (n) {
            const e = new bt("Could not decrypt CustomerJson", n);
            return fs.error(e, 213), j.empty()
        } else try {
            i = Ce(t)
        } catch (n) {
            const e = new bt("Could not parse CustomerJson", n);
            return fs.error(e, 210), j.empty()
        }
        const s = Cs(i);
        return fs.timeEnd("load json"), j.of(s)
    }

    function Xa(e) {
        fs.time("Build customer object time");
        const t = new as(fs).buildCustomer(e);
        return fs.timeEnd("Build customer object time"), j.ofNullable(t)
    }

    function Za(e, t, i) {
        const s = `${he}${e.getId()}`;
        let n = "true" === t.read(s).orElse("false");
        return n || i.getHostingPageUrl().getQueryParam("intellimize_opt_out", Vo("true")).ifPresent((() => {
            n = i.getWindow().confirm("Are you sure you want to opt out of Intellimize for this domain?"), n && (t.write(s, "true"), i.getWindow().alert("You have successfully opted out of Intellimize for this domain."))
        })), !!n && (fs.debug("User opt-out; cleanup and exit early"), Kr(e).forEach((e => {
            e !== s && t.delete(e)
        })), i.getWindow().inrsgew = !0, !0)
    }

    function el(e, t, i, s, n) {
        return __async(this, null, (function*() {
            const r = n.useStorageType().orElse("CrossOriginStorage");
            switch (r) {
                case "CrossOriginStorage":
                    {
                        const n = new Ba(e, t, i, s);
                        return yield n.initialize(), n
                    }
                case "MemoryStorage":
                    return new Ga;
                case "SessionStorage":
                    return new Ha(t);
                case "LocalStorage":
                    return e;
                default:
                    throw new Error(`Unknown storage type: ${r}`)
            }
        }))
    }
    class tl {
        constructor() {
            __publicField(this, "variationLists", {}), __publicField(this, "experiences", {}), __publicField(this, "stickyVariations", {}), __publicField(this, "modelVersions", {})
        }
        unshift(e) {
            const t = e.getExperience(),
                i = t.getId();
            void 0 === this.variationLists[i] && (this.variationLists[i] = []), this.variationLists[i].unshift(e), this.experiences[i] = t
        }
        isEmpty() {
            return !Object.keys(this.variationLists).some((e => this.variationLists[e].length > 0))
        }
        getExperience(e) {
            return this.experiences[e]
        }
        getExperiences() {
            return Object.keys(this.variationLists).map((e => this.experiences[e]))
        }
        setModelVersion(e, t) {
            this.modelVersions[e] = t
        }
        getModelVersion(e) {
            return this.modelVersions[e]
        }
        sortVariations(e, t) {
            var i;
            null == (i = this.variationLists[e]) || i.sort(t)
        }
        prioritizeStickyVariation(e, t) {
            if (fs.group("prioritizeVariation(experience:" + e + ", variation:" + t + ")"), e in this.variationLists) {
                let i = -1;
                this.variationLists[e].forEach(((e, s) => {
                    e.getId() === t && (i = s)
                })), fs.debug("found variation index? => " + i), -1 !== i && (this.variationLists[e] = [this.variationLists[e][i]], e in this.stickyVariations || (this.stickyVariations[e] = {}), this.stickyVariations[e][t] = !0)
            }
            fs.groupEnd()
        }
        getVariationIds(e) {
            var t, i;
            return null != (i = null == (t = this.variationLists[e]) ? void 0 : t.map((e => e.getId()))) ? i : []
        }
        hasNext(e) {
            const t = this.variationLists[e];
            return void 0 !== t && t.length > 0
        }
        shift(e) {
            var t;
            if (!(e in this.variationLists)) throw new V("No value present");
            const i = null == (t = this.variationLists[e]) ? void 0 : t.shift();
            if (this.removeIfEmpty(e), void 0 !== i) return i;
            throw new V("No value present")
        }
        getFirst(e) {
            var t;
            const i = this.variationLists[e];
            if (void 0 === i) throw new V("No experience present");
            if (0 === i.length) throw new V("No variations present");
            const s = null == (t = this.variationLists[e]) ? void 0 : t[0];
            if (void 0 !== s) return s;
            throw new V("No value present")
        }
        removeVariation(e, t) {
            t.getId();
            const i = this.variationLists[e];
            if (void 0 !== i) {
                let s = -1;
                i.forEach(((e, i) => {
                    e.getId() === t.getId() && (s = i)
                })), -1 !== s && (i.splice(s, 1), this.removeIfEmpty(e))
            }
        }
        removeExperience(e) {
            e in this.experiences && delete this.experiences[e], e in this.variationLists && delete this.variationLists[e]
        }
        isDecidingExperience(e) {
            return e.getId() in this.experiences
        }
        isStickyVariation(e) {
            var t;
            const i = e.getId(),
                s = e.getExperience().getId();
            return Boolean(null == (t = this.stickyVariations[s]) ? void 0 : t[i])
        }
        toString() {
            let e = "{\n";
            return Object.keys(this.variationLists).forEach((t => {
                e += "  " + t + ": ", e += "[" + this.variationLists[t].map((e => e.getId())).join(", ") + "]", e += "\n"
            })), e += "}\n", e
        }
        removeIfEmpty(e) {
            const t = this.variationLists[e];
            void 0 !== t && 0 === t.length && this.removeExperience(e)
        }
    }
    class il extends xr {
        constructor(e, t, i, s, n, r, o, a, l, c, u, d, h, g, p, m, v) {
            super(), __publicField(this, "environment"), __publicField(this, "browserStorage"), __publicField(this, "extensionManager"), __publicField(this, "browserEventLogger"), __publicField(this, "customer"), __publicField(this, "customerStorage"), __publicField(this, "attributeStorage"), __publicField(this, "activityStorage"), __publicField(this, "user"), __publicField(this, "override"), __publicField(this, "pageContext"), __publicField(this, "attributeData"), __publicField(this, "statusModel"), __publicField(this, "elementObserver"), __publicField(this, "runtime"), __publicField(this, "hider"), __publicField(this, "decisionContext"), __publicField(this, "getVariationRecordedCallbackTuples"), __publicField(this, "getEligibleCc", !1), __publicField(this, "selectAb", !1), __publicField(this, "selectRbp", !1), __publicField(this, "haveRunCampaignCode", {}), this.environment = N(e), this.browserStorage = N(t), this.extensionManager = N(i), this.browserEventLogger = N(s), this.customer = N(n), this.customerStorage = N(r), this.attributeStorage = N(o), this.activityStorage = N(a), this.user = N(l), this.override = N(c), this.pageContext = N(u), this.attributeData = N(d), this.statusModel = N(h), this.runtime = N(g), this.hider = N(p), this.getVariationRecordedCallbackTuples = N(m), this.elementObserver = N(v), this.decisionContext = new tl
        }
        toString() {
            return "SelectVariationsTask()"
        }
        inTransaction() {
            return !1
        }
        isUnloading() {
            return !1
        }
        selectAbExperienceVariationsOnce() {
            this.selectAb || (fs.time("selectAbExperienceVariationsOnce"), fs.group("selectAbExperienceVariationsOnce()"), this.customer.getCampaigns().forEach((e => {
                Ci.filterExperiences(e.getExperiences()).filter((e => this.isExperienceEligible(e))).forEach((t => {
                    let i;
                    if (this.runCampaignCodeOnce(e), this.override.hasVariationIds(t).isPresent()) {
                        const e = this.override.hasVariationIds(t).get();
                        i = t.getVariation(e[0])
                    } else {
                        const e = 1e3,
                            s = oa(na(t.getId() + this.user.getId(), 1), e);
                        i = t.selectVariation(s)
                    }
                    i.ifPresent((e => {
                        this.isVariationEligible(e) ? (this.decisionContext.unshift(e), this.decisionContext.setModelVersion(t.getId(), "ab")) : fs.error("Selected A/B variation is not eligible", 182, {
                            experienceId: t.getId(),
                            variationId: e.getId()
                        })
                    })).ifAbsent((() => {
                        fs.error("Failed to select variation for A/B experience", 183, {
                            experienceId: t.getId()
                        })
                    }))
                }))
            })), fs.groupEnd(), fs.timeEnd("selectAbExperienceVariationsOnce"), this.selectAb = !0)
        }
        selectRbpExperienceVariationsOnce() {
            this.selectRbp || (fs.time("selectRbpExperienceVariationsOnce"), fs.group("selectRbpExperienceVariationsOnce()"), this.customer.getCampaigns().forEach((e => {
                xi.filterExperiences(e.getExperiences()).filter((e => this.isExperienceEligible(e))).forEach((t => {
                    this.runCampaignCodeOnce(e);
                    for (const e of t.getPrioritizedVariations())
                        if (this.isVariationEligible(e)) {
                            this.decisionContext.unshift(e), this.decisionContext.setModelVersion(t.getId(), "rbp");
                            break
                        }
                    void 0 === this.decisionContext.getExperience(t.getId()) && fs.info("Failed to select variation for RBP", 184, {
                        experienceId: t.getId()
                    })
                }))
            })), fs.groupEnd(), fs.timeEnd("selectRbpExperienceVariationsOnce"), this.selectRbp = !0)
        }
        getCcEligibleVariationsOnce() {
            this.getEligibleCc || (fs.time("getCcEligibleVariationsOnce"), fs.group("getCcEligibleVariationsOnce()"), this.customer.getCampaigns().forEach((e => {
                Ti.filterExperiences(e.getExperiences()).filter((e => this.isExperienceEligible(e))).forEach((t => {
                    this.runCampaignCodeOnce(e);
                    const i = this.override.isControl().orElseRun((() => this.customerStorage.updateAndGetControl(e)));
                    if (this.statusModel.setCampaign(e, "control", i), i) {
                        const e = t.getControlVariation();
                        this.decisionContext.unshift(e)
                    } else t.getRealVariations().forEach((e => {
                        this.isVariationEligible(e) && this.decisionContext.unshift(e)
                    }))
                }))
            })), fs.groupEnd(), fs.timeEnd("getCcEligibleVariationsOnce"), this.getEligibleCc = !0)
        }
        isExperienceEligible(e) {
            fs.group("isExperienceEligible(experience:" + e.getId() + ")"), fs.debug("check experience enabled");
            let t = " (override)";
            const i = this.override.isExperienceEnabled(e).orElseRun((() => (t = "", e.isEnabled())));
            if (fs.info(`Experience ${e.getId()} enabled => ${i}${t}`), this.statusModel.setExperience(e, "enabled", i), !i) return this.customerStorage.deleteExperiencePredictionSelection(e), fs.groupEnd(), !1;
            let s = !1;
            fs.debug(`Experience URL match (at least one match), URL: ${this.environment.getHostingPageUrl().getRawUrl()}`);
            const n = ua(this.pageContext, e.getPages());
            if (fs.debug("url match => " + (n.length > 0)), this.statusModel.setExperience(e, "urlMatch", n.length > 0), n.length > 0 && (fs.info(`Experience ${e.getId()} URL check, URL:${this.environment.getHostingPageUrl().getRawUrl()} Page:${n[0].getName()} => true`), s = !0), !s) {
                const {
                    experienceIds: t
                } = this.environment.getWebflowPageMetadata();
                t.length > 0 && (fs.debug("Webflow Page Metadata Experience ID check"), t.includes(e.getId()) && (fs.debug("Webflow experience => true"), s = !0))
            }
            if (!s) return fs.groupEnd(), !1;
            fs.debug("check experience condition");
            let r = " (override)";
            const o = this.override.passExperienceCondition().orElseRun((() => (r = "", fs.debug("evaluating experience condition"), e.getCondition().map((t => {
                let i = !1;
                try {
                    i = t.evaluate(this.runtime)
                } catch (s) {
                    const t = new bt("Experience condition evaluation failed", s);
                    i = !1, fs.error(t, 206, {
                        experienceId: e.getId()
                    })
                }
                return i
            })).orElse(!0))));
            if (fs.info(`Experience ${e.getId()} condition passed => ${o}${r}`), this.statusModel.setExperience(e, "passCondition", o), !o) return fs.groupEnd(), this.customerStorage.deleteExperiencePredictionSelection(e), !1;
            fs.debug("check experience inclusion");
            let a = " (override)";
            const l = this.override.isExperienceIncluded(e).orElseRun((() => (a = "", this.customerStorage.updateAndGetExperienceInclusion(e))));
            return fs.info(`Experience ${e.getId()} inclusion => ${l}${a}`), this.statusModel.setExperience(e, "inclusion", l), l ? (fs.debug("isExperienceEligible => true"), fs.groupEnd(), !0) : (fs.groupEnd(), this.customerStorage.deleteExperiencePredictionSelection(e), !1)
        }
        isVariationEligible(e) {
            fs.group("isVariationEligible(variation:" + e.getId() + ")"), fs.debug("check variation enabled");
            let t = " (override)";
            const i = this.override.isVariationEnabled(e).orElseRun((() => (t = "", e.isEnabled())));
            if (fs.info(`Variation ${e.getExperience().getId()}/${e.getId()} enabled => ${i}${t}`), this.statusModel.setVariation(e, "enabled", i), !i) return fs.groupEnd(), !1;
            fs.debug("check variation condition");
            let s = " (override)";
            const n = this.override.passVariationCondition().orElseRun((() => (s = "", e.getCondition().map((t => {
                let i = !1;
                try {
                    i = t.evaluate(this.runtime)
                } catch (s) {
                    const t = new bt("Variation condition evaluation failed ", s);
                    i = !1, fs.error(t, 207, {
                        experienceId: e.getExperience().getId(),
                        variationId: e.getId()
                    })
                }
                return i
            })).orElse(!0))));
            return fs.info(`Variation ${e.getExperience().getId()}/${e.getId()} condition passed => ${n}${s}`), this.statusModel.setVariation(e, "passCondition", n), n ? (fs.debug("isVariationEligible => true"), fs.groupEnd(), !0) : (fs.groupEnd(), !1)
        }
        runCampaignCodeOnce(e) {
            const t = e.getId();
            this.haveRunCampaignCode[t] || (this.haveRunCampaignCode[t] = !0, e.getCss().ifPresent((i => {
                try {
                    fs.info(`Injecting campaign ${e.getId()} css`), ks.injectCss(i, `campaign-${t}`, this.environment.getWindow().document), this.statusModel.setCampaign(e, "css", !0)
                } catch (s) {
                    const t = new bt(`Campaign (${e.getId()}) css injection failed`, s);
                    fs.error(t, 90, {
                        campaignId: e.getId()
                    }), this.statusModel.setCampaign(e, "css", !1)
                }
            })), e.getCode().ifPresent((t => {
                try {
                    fs.info(`Running campaign ${e.getId()} code`), ks.eval(t), this.statusModel.setCampaign(e, "code", !0)
                } catch (i) {
                    const t = new bt(`Campaign (${e.getId()}) code execution failed`, i);
                    fs.error(t, 14, {
                        campaignId: e.getId()
                    }), this.statusModel.setCampaign(e, "code", !1)
                }
            })))
        }
    }
    class sl extends il {
        constructor() {
            super(...arguments), __publicField(this, "policyCallbackFunctions", []), __publicField(this, "executeExperiencesTask"), __publicField(this, "policy"), __publicField(this, "sent", !1), __publicField(this, "apiStatus", wr.WAITING)
        }
        static get PREDICTION_ENDPOINT() {
            return "/prediction"
        }
        toString() {
            return "SelectVariationsTaskV5()"
        }
        onPolicyReady(e) {
            void 0 === this.policy ? this.policyCallbackFunctions.push(e) : e(this.policy)
        }
        run() {
            return this.selectAbExperienceVariationsOnce(), this.selectRbpExperienceVariationsOnce(), this.getCcEligibleVariationsOnce(), fs.debug("decisionContext: " + this.decisionContext), void 0 === this.executeExperiencesTask && (this.executeExperiencesTask = new So(this.environment, this.browserStorage, this.extensionManager, this.browserEventLogger, this.attributeStorage, this.activityStorage, this.customerStorage, this.decisionContext, this.pageContext, this.attributeData, this.user, this.override, this.statusModel, this.hider, !0, this.getVariationRecordedCallbackTuples, this.elementObserver)), this.executeExperiencesTask.hideExperiencesOnce(), this.sendOnce(), this.apiStatus === wr.FAILED ? wr.FAILED : this.apiStatus === wr.SUCCEEDED ? wr.SUCCEEDED : wr.TRY_LATER
        }
        buildRequest() {
            const e = this.user.getId(),
                t = this.customerStorage.updateAndGetSessionId(),
                i = this.override.isControl().orElseRun((() => this.customerStorage.setAndGetCustomerControl(this.customer))),
                s = {};
            Ti.filterExperiences(this.decisionContext.getExperiences()).forEach((e => {
                const t = e.getId(),
                    i = this.customerStorage.getStickyVariation(e).map((e => e.getId())).orElse("NEVER_MATCH");
                s[t] = this.decisionContext.getVariationIds(t).map((e => ({
                    variationId: e,
                    isSticky: i === e
                })))
            }));
            const n = Pa.buildBrowserContext(this.environment, this.attributeStorage, this.user, this.pageContext, this.decisionContext);
            return {
                userId: e,
                sessionId: t,
                isControl: i,
                candidates: s,
                context: n
            }
        }
        sendOnce() {
            if (this.sent) return;
            fs.debug("SelectVariationsTaskV5.sendOnce()");
            const e = this.buildRequest();
            this.environment.fetch(ie, `${sl.PREDICTION_ENDPOINT}/${this.customer.getId()}`, {
                method: "POST",
                headers: {
                    "Content-Type": "text/plain;charset=UTF-8"
                },
                body: we(e)
            }).then((t => {
                if (Qa(t)) {
                    const e = this.environment.getHostingPageUrl().getOrigin();
                    console.warn(`${e} is not allowed to receive this data. If you’re expecting data to work here, check the Allowed Domains list at https://app.intellimize.com`)
                }
                fs.debug("SelectVariationsTaskV5.sendOnce() => got reply");
                const i = this.override.isControl().orElseRun((() => this.customerStorage.setAndGetCustomerControl(this.customer)));
                this.policy = i ? Is.buildControlPolicy(this.environment) : Qa(t) ? Is.buildDefaultPolicy(this.environment, e) : new Is(t.policy), this.prioritizeCcVariations(this.policy), this.apiStatus = wr.SUCCEEDED, this.executePolicyReadyFunctions(this.policy), this.manager.addTask(this.executeExperiencesTask), this.manager.runNow()
            })).catch((e => {
                const t = new bt("Caught exception in prediction call", e);
                fs.error(t, 148), this.apiStatus = wr.FAILED
            })), this.sent = !0
        }
        prioritizeCcVariations(e) {
            fs.debug("SelectVariationsTaskV5.prioritizeCcVariations()"), Ti.filterExperiences(this.decisionContext.getExperiences()).forEach((t => {
                const i = t.getId(),
                    s = e.getExperienceVariationId(i);
                let n;
                for (; this.decisionContext.hasNext(i);) {
                    const e = this.decisionContext.shift(i);
                    e.getId() === s && (n = e)
                }
                void 0 === n ? fs.error("Prediction API did not select an eligible variation", 149) : (this.decisionContext.unshift(n), this.customerStorage.getStickyVariation(this.decisionContext.getExperience(i)).ifPresent((e => {
                    fs.info(`Variation ${i}/${e.getId()} selection was sticky`), this.decisionContext.prioritizeStickyVariation(i, e.getId())
                })), this.decisionContext.setModelVersion(i, e.getExperienceModelVersion(i))), this.statusModel.setExperienceSortedVariations(this.decisionContext.getExperience(i), this.decisionContext.getVariationIds(i))
            })), fs.debug(`decisionContext: ${this.decisionContext}`)
        }
        executePolicyReadyFunctions(e) {
            fs.debug("SelectVariationsTaskV5.executePolicyReadyFunctions()");
            for (let t = this.policyCallbackFunctions.shift(); void 0 !== t; t = this.policyCallbackFunctions.shift()) t(e)
        }
    }
    class nl extends xr {
        constructor(e, t, i, s) {
            super(), __publicField(this, "environment"), __publicField(this, "customer"), __publicField(this, "integrationDataStorage"), __publicField(this, "user"), __publicField(this, "apiStatus", wr.NOT_STARTED), __publicField(this, "sent", !1), this.environment = e, this.customer = t, this.user = i, this.integrationDataStorage = s
        }
        static get ENDPOINT() {
            return "/context-v2"
        }
        toString() {
            return "ServerContextTask()"
        }
        inTransaction() {
            return !1
        }
        isUnloading() {
            return !1
        }
        run() {
            return this.sendOnce(), this.apiStatus === wr.SUCCEEDED ? wr.SUCCEEDED : this.apiStatus === wr.FAILED ? wr.FAILED : (fs.debug("Waiting for server response"), wr.TRY_LATER)
        }
        buildRequestBody() {
            return this.getCommonRequestBody()
        }
        handleResponse(e, t) {
            this.integrationDataStorage.setDataAndMetadata("marketo", t.integrationData.marketo, void 0 === e.marketo ? void 0 : {})
        }
        getCommonRequestBody() {
            const e = {
                clientVersion: Q,
                userId: this.user.getId()
            };
            return gr(this.customer) && pr(this.environment).ifPresent((t => {
                e.marketo = {
                    cookie: t
                }
            })), e
        }
        sendOnce() {
            if (!this.sent) {
                const e = this.buildRequestBody();
                this.environment.fetch(ie, `${nl.ENDPOINT}/${this.customer.getId()}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "text/plain;charset=UTF-8"
                    },
                    body: we(e)
                }).then((t => {
                    if (Qa(t)) {
                        const t = this.environment.getHostingPageUrl().getOrigin();
                        console.warn(`${t} is not allowed to receive this data. If you’re expecting data to work here, check the Allowed Domains list at https://app.intellimize.com`), this.handleResponse(e, {
                            requestId: "00000000-0000-1000-a000-000000000000",
                            clientIp: "0.0.0.0",
                            userAgentDigest: "00000000000000000000000000000000",
                            userAgent: {},
                            location: {},
                            integrationData: {}
                        })
                    } else fs.info("Successfully retrieved ServerContext"), this.handleResponse(e, t);
                    this.apiStatus = wr.SUCCEEDED, this.manager.runNow()
                })).catch((e => {
                    const t = new bt("Caught exception in server context task", e);
                    fs.error(t, 156), this.apiStatus = wr.FAILED
                }))
            }
            this.sent = !0
        }
    }
    class rl extends nl {
        constructor(e, t, i, s, n, r) {
            super(e, t, i, s), __publicField(this, "serverContextStorage"), __publicField(this, "isNewSession"), this.serverContextStorage = n, this.isNewSession = r
        }
        static get DOMAIN_NOT_AVAILABLE() {
            return "NA"
        }
        static shouldWaitForServerContext(e, t, i, s, n) {
            var r, o, a;
            let l = !1;
            _r(e) && yr(t).ifPresent((e => {
                const t = i.getMetadata("salesforce").orElse({});
                void 0 !== (null == e ? void 0 : e.leadIdHash) && (null == t ? void 0 : t.leadIdHash) !== e.leadIdHash && (l = !0), void 0 !== (null == e ? void 0 : e.contactIdHash) && (null == t ? void 0 : t.contactIdHash) !== e.contactIdHash && (l = !0)
            }));
            const c = i.getAllMetdata(),
                u = sr(e) && void 0 === (null == (r = c.firmographic) ? void 0 : r.domain) || Sr(e) && void 0 === (null == (o = c["6sense"]) ? void 0 : o.domain) || ir(e) && void 0 === (null == (a = c.demandbase) ? void 0 : a.website),
                d = !s.get().map((e => Object.keys(null == e ? void 0 : e.location).length > 0 && Object.keys(null == e ? void 0 : e.userAgent).length > 0)).orElse(!1);
            return l || u || d || n
        }
        toString() {
            return "ServerContextTaskV5()"
        }
        buildRequestBody() {
            const e = this.getCommonRequestBody();
            if (this.serverContextStorage.get().map((e => e.clientIp)).ifPresent((t => {
                    e.clientIp = t
                })), _r(this.customer)) {
                const t = this.integrationDataStorage.getMetadata("salesforce").orElse({}),
                    i = yr(this.environment),
                    s = null == t ? void 0 : t.leadIdHash,
                    n = i.map((e => null == e ? void 0 : e.leadIdHash)).orElse(void 0),
                    r = null != n ? n : s,
                    o = null == t ? void 0 : t.contactIdHash,
                    a = i.map((e => null == e ? void 0 : e.contactIdHash)).orElse(void 0),
                    l = null != a ? a : o;
                if (void 0 !== r || void 0 !== l) {
                    const t = {};
                    void 0 !== r && (t.leadIdHash = r), void 0 !== l && (t.contactIdHash = l), e.salesforce = t
                }
            }
            return this.isNewSession || (this.integrationDataStorage.getMetadata("firmographic").flatMap((e => j.ofNullable(null == e ? void 0 : e.domain))).ifPresent((t => {
                e.firmographic = {
                    domain: t
                }
            })), this.integrationDataStorage.getMetadata("6sense").flatMap((e => j.ofNullable(null == e ? void 0 : e.domain))).ifPresent((t => {
                e["6sense"] = {
                    domain: t
                }
            })), this.integrationDataStorage.getMetadata("demandbase").flatMap((e => j.ofNullable(null == e ? void 0 : e.website))).ifPresent((t => {
                e.demandbase = {
                    website: t
                }
            }))), ur(this.customer) && dr(this.environment).ifPresent((t => {
                e.hubspot = {
                    cookie: t
                }
            })), e
        }
        handleResponse(e, t) {
            var i, s, n, r, o, a, l, c, u, d, h, g, p;
            const m = t,
                {
                    integrationData: v
                } = m,
                b = __objRest(m, ["integrationData"]);
            this.integrationDataStorage.setDataAndMetadata("marketo", v.marketo, void 0 === e.marketo ? void 0 : {}), this.integrationDataStorage.setDataAndMetadata("salesforce", v.salesforce, null != (i = e.salesforce) ? i : void 0), this.integrationDataStorage.setDataAndMetadata("hubspot", v.hubspot, void 0 === e.hubspot ? void 0 : {}), (null == (s = e.firmographic) ? void 0 : s.domain) !== (null == (n = v.firmographic) ? void 0 : n.domain) && ((null == (r = v.firmographic) ? void 0 : r.domain) === rl.DOMAIN_NOT_AVAILABLE ? this.integrationDataStorage.setDataAndMetadata("firmographic", {}, {
                domain: rl.DOMAIN_NOT_AVAILABLE
            }) : this.integrationDataStorage.setDataAndMetadata("firmographic", v.firmographic, {
                domain: null == (o = v.firmographic) ? void 0 : o.domain
            })), (null == (a = e["6sense"]) ? void 0 : a.domain) !== (null == (l = v["6sense"]) ? void 0 : l.domain) && ((null == (c = v["6sense"]) ? void 0 : c.domain) === rl.DOMAIN_NOT_AVAILABLE ? this.integrationDataStorage.setDataAndMetadata("6sense", {}, {
                domain: rl.DOMAIN_NOT_AVAILABLE
            }) : this.integrationDataStorage.setDataAndMetadata("6sense", v["6sense"], {
                domain: null == (u = v["6sense"]) ? void 0 : u.domain
            })), (null == (d = e.demandbase) ? void 0 : d.website) !== (null == (h = v.demandbase) ? void 0 : h.website) && ((null == (g = v.demandbase) ? void 0 : g.website) === rl.DOMAIN_NOT_AVAILABLE ? this.integrationDataStorage.setDataAndMetadata("demandbase", {}, {
                website: rl.DOMAIN_NOT_AVAILABLE
            }) : this.integrationDataStorage.setDataAndMetadata("demandbase", v.demandbase, {
                website: null == (p = v.demandbase) ? void 0 : p.website
            })), this.serverContextStorage.set(b)
        }
    }
    class ol {
        constructor(e, t, i) {
            __publicField(this, "environment"), __publicField(this, "storageKeyPrefix"), __publicField(this, "eventProcessor"), __publicField(this, "isObserving", !1), __publicField(this, "pollTimer"), this.environment = e, this.storageKeyPrefix = t, this.eventProcessor = i
        }
        static get POLLING_INTERVAL_MS() {
            return 1e3
        }
        start() {
            this.isObserving || (fs.debug("StorageQueueConsumer starting to poll"), this.isObserving = !0, this.poll())
        }
        stop() {
            fs.debug("StorageQueueConsumer stopping polling"), this.environment.getWindow().clearTimeout(this.pollTimer), this.isObserving = !1
        }
        handlePageUnload() {
            this.poll(), this.stop()
        }
        readSessionStorage(e) {
            try {
                return this.environment.readSessionStorage(e)
            } catch (t) {
                const i = new bt(`StorageQueueConsumer: Storage failed for getItem("${e}")`, t);
                throw fs.warn(i, 227), i
            }
        }
        writeSessionStorage(e, t) {
            try {
                this.environment.writeSessionStorage(e, t)
            } catch (i) {
                const t = new bt(`StorageQueueConsumer: Storage failed for setItem("${e}")`, i);
                throw fs.warn(t, 228), t
            }
        }
        removeSessionStorage(e) {
            try {
                this.environment.deleteSessionStorage(e)
            } catch (t) {
                const i = new bt(`StorageQueueConsumer: Storage failed for removeItem("${e}")`, t);
                throw fs.warn(i, 229), i
            }
        }
        poll() {
            const e = `${this.storageKeyPrefix}lastWrittenId`,
                t = `${this.storageKeyPrefix}lastReadId`;
            let i = j.empty(),
                s = 0;
            try {
                i = this.readSessionStorage(e).map((e => Number.parseInt(e, 10))), s = this.readSessionStorage(t).map((e => Number.parseInt(e, 10))).orElse(0)
            } catch (n) {
                return void this.stop()
            }
            if (i.isPresent() && s < i.get()) {
                const e = s + 1,
                    i = `${this.storageKeyPrefix}event-${e}`;
                let o = j.empty();
                try {
                    o = this.readSessionStorage(i)
                } catch (n) {
                    return void this.stop()
                }
                try {
                    this.writeSessionStorage(t, e.toString()), this.removeSessionStorage(i)
                } catch (n) {
                    return void this.stop()
                }
                if (o.isPresent()) {
                    let e;
                    try {
                        e = JSON.parse(o.get())
                    } catch (r) {
                        const e = new bt(`StorageQueueConsumer: Event in queue is not valid JSON: "${o.get()}"`, r);
                        fs.error(e, 230)
                    }
                    if (void 0 !== e) try {
                        fs.debug(`StorageQueueConsumer processing event ${Ie(e)}`), this.eventProcessor(e)
                    } catch (r) {
                        const e = new bt("StorageQueueConsumer: Could not process event", r);
                        fs.error(e, 231)
                    }
                    this.poll()
                } else fs.error(new Error(`StorageQueueConsumer: event-${e} not found in session storage`), 232), this.pollAfterDelay()
            } else this.pollAfterDelay()
        }
        pollAfterDelay() {
            this.environment.getWindow().clearTimeout(this.pollTimer), this.pollTimer = this.environment.getWindow().setTimeout((() => {
                this.poll()
            }), ol.POLLING_INTERVAL_MS)
        }
    }
    const al = 3e3,
        ll = 1;
    class cl extends xr {
        constructor(e, t, i, s, n, r, o, a, l) {
            super(), __publicField(this, "environment"), __publicField(this, "browserEventLogger"), __publicField(this, "customer"), __publicField(this, "customerStorage"), __publicField(this, "attributeStorage"), __publicField(this, "activityStorage"), __publicField(this, "user"), __publicField(this, "statusModel"), __publicField(this, "taskManager"), __publicField(this, "taskStartTime"), __publicField(this, "storageQueueConsumer"), this.environment = N(e), this.browserEventLogger = N(t), this.customer = N(i), this.customerStorage = N(s), this.attributeStorage = N(n), this.activityStorage = N(r), this.user = N(o), this.statusModel = N(a), this.taskManager = N(l), R(this.customer.getIntegrationShopify().isPresent())
        }
        inTransaction() {
            return !0
        }
        isUnloading() {
            return !1
        }
        getStorageQueueConsumer() {
            return j.ofNullable(this.storageQueueConsumer)
        }
        run() {
            void 0 === this.taskStartTime && (this.taskStartTime = this.environment.getNowDate(), fs.debug(`ShopifyStorageQueueTask start time: ${this.taskStartTime.getTime()}`));
            const e = this.environment.getNowDate().getTime() - this.taskStartTime.getTime(),
                t = this.waitForCurrencyRate(e);
            return t.isPresent() ? (this.storageQueueConsumer = new ol(this.environment, `${ge}${this.customer.getId()}_`, (e => {
                Nr(e, t.get(), this.customer, this.environment, this.customerStorage, this.attributeStorage, this.activityStorage, this.user, this.statusModel, this.taskManager, this.browserEventLogger)
            })), this.storageQueueConsumer.start(), wr.SUCCEEDED) : wr.TRY_LATER
        }
        waitForCurrencyRate(e) {
            const t = this.environment.getWindow();
            if (void 0 === t.Shopify) fs.debug(`window.Shopify not defined after ${e} ms`);
            else {
                if (!Ls(t.Shopify)) return fs.error("window.Shopify is not an object", 245), j.of(ll);
                if (void 0 === t.Shopify.currency) fs.debug(`window.Shopify.currency not defined after ${e} ms`);
                else {
                    if (!Ls(t.Shopify.currency)) return fs.error("window.Shopify.currency is not an object", 246), j.of(ll);
                    if (void 0 !== t.Shopify.currency.rate) return b(t.Shopify.currency.rate) ? (fs.debug(`window.Shopify.currency defined after ${e} ms (${t.Shopify.currency.rate})`), j.of(Number(t.Shopify.currency.rate))) : (fs.error("window.Shopify.currency.rate is not a non-empty string", 247), j.of(ll));
                    fs.debug(`window.Shopify.currency.rate not defined after ${e} ms`)
                }
            }
            return e >= al ? (fs.error(`Timed out waiting for window.Shopify.currency (waited ${e}ms)`, 248), j.of(ll)) : j.empty()
        }
    }
    class ul extends Fs {
        constructor() {
            super(...arguments), __publicField(this, "hasRun", !1), __publicField(this, "isRestartingStatus", !1), __publicField(this, "taskManager"), __publicField(this, "environment"), __publicField(this, "override"), __publicField(this, "customer"), __publicField(this, "conditionEvaluationRuntime"), __publicField(this, "elementObserver"), __publicField(this, "pageContext"), __publicField(this, "customerStorage"), __publicField(this, "attributeStorage"), __publicField(this, "integrationDataStorage"), __publicField(this, "serverContextStorage"), __publicField(this, "intellimizeApi"), __publicField(this, "user"), __publicField(this, "browserStorage"), __publicField(this, "localStorage"), __publicField(this, "statusModel"), __publicField(this, "attributeData"), __publicField(this, "activityStorage"), __publicField(this, "internalApi"), __publicField(this, "hider"), __publicField(this, "browserEventLogger"), __publicField(this, "shopifyStorageQueueTask", j.empty()), __publicField(this, "extensionManager")
        }
        run() {
            return __async(this, null, (function*() {
                if (fs.info("Starting client"), fs.time("Client run time"), this.hasRun) return void fs.error("Tried to run client again", 143);
                fs.time("new Environment");
                const e = Lo(window);
                this.environment = new Xn(window, e), fs.configureEnvironment(this.environment), fs.timeEnd("new Environment");
                if (void 0 !== this.environment.getWindow().ipgvidtfr) return void fs.error("Intellimize duplicate code detected on page.", 144);
                this.environment.getWindow().ipgvidtfr = this.environment.getPageviewId(), this.extensionManager = er(), this.hider = new Ln(this.environment, this.extensionManager), this.hider.startTimedRegionHider();
                const t = Ja(this.environment);
                if (!t.isPresent()) return void Ln.revealAll(this.environment.getWindow().document);
                const i = Xa(t.get());
                if (!i.isPresent()) return void Ln.revealAll(this.environment.getWindow().document);
                if (this.customer = i.get(), fs.configureCustomer(this.customer), fs.time("load json"), this.override = new Wo(this.environment, this.customer), !this.override.shouldRun().orElse(!0)) return fs.info("Client not running"), this.environment.getWindow().inrsgew = !0, void Ln.revealAll(this.environment.getWindow().document);
                if (this.override.shouldHide().orElse(!0) || Ln.revealAll(this.environment.getWindow().document), this.localStorage = new Ko(this.environment), this.intellimizeApi = new ko(this.environment), this.intellimizeApi.initialize(), this.taskManager = new la(this, this.environment), this.override.shouldCheckOptOut().orElse(!0) && Za(this.customer, this.localStorage, this.environment)) return void Ln.revealAll(this.environment.getWindow().document);
                fs.time("Setup storage"), this.browserStorage = yield el(this.localStorage, this.environment, this.taskManager, this.customer, this.override), this.user = new aa(this.browserStorage, this.environment, this.customer), fs.configureUser(this.user), this.statusModel = this.override.showStatusModule().orElse(!1) ? new Bo(this.environment, this.customer, this.override, this.browserStorage) : new Go, this.customerStorage = new Qo(this.customer, this.environment, this.browserStorage, this.override);
                const s = this.customerStorage.getSessionId(),
                    n = this.customerStorage.updateAndGetSessionId(),
                    r = !s.map((e => e === n)).orElse(!1);
                if (this.customer.isCampaignControl() || this.customerStorage.setAndGetCustomerControl(this.customer), this.attributeStorage = new Ho(this.customer, this.environment, this.browserStorage, this.user), this.activityStorage = new eo(this.customer, this.browserStorage, this.environment, this.override), qa(this.environment, this.attributeStorage, this.customer), this.integrationDataStorage = new qo(this.customer, this.browserStorage), ar(this.customer) && lr(this.environment, this.integrationDataStorage, this.customer), this.serverContextStorage = new Yo(this.customer, this.browserStorage), fs.timeEnd("Setup storage"), this.environment.addUnloadHandler((() => {
                        try {
                            this.handlePageUnload()
                        } catch (e) {
                            const t = new bt("Exception in ClientV5 unload handler", e);
                            fs.error(t, 240)
                        }
                    })), this.attributeData = new _s(this.environment, void 0, this.attributeStorage, this.override, this.customerStorage, this.integrationDataStorage, this.user), this.conditionEvaluationRuntime = new Ps(this.attributeData, this.activityStorage), this.customer.getLimitedModeCondition().isPresent()) {
                    const e = this.customer.getLimitedModeCondition().get();
                    let t = !1;
                    try {
                        t = e.evaluate(this.conditionEvaluationRuntime)
                    } catch (a) {
                        t = !1;
                        const e = new bt('"Limited mode" condition evaluation failed', a);
                        fs.error(e, 261)
                    }
                    if (fs.debug(`check "limited mode" => ${t}`), t) return this.environment.getWindow().inrsgew = !0, void Ln.revealAll(this.environment.getWindow().document)
                }
                const o = new rl(this.environment, this.customer, this.user, this.integrationDataStorage, this.serverContextStorage, r);
                rl.shouldWaitForServerContext(this.customer, this.environment, this.integrationDataStorage, this.serverContextStorage, r) ? o.onDone((() => {
                    this.postServerContextWork()
                })) : this.postServerContextWork(), this.taskManager.addTask(o), this.hasRun = !0, fs.timeEnd("Client run time"), this.taskManager.runNow()
            }))
        }
        reRun(e) {
            fs.info("Client.reRun()"), this.isRestartingStatus = !0, this.handlePageUnload(), this.environment.getWindow().setTimeout((() => {
                this.taskManager.stop(), this.taskManager.onDone((() => {
                    this.statusModel.reinitializeExperienceVariations(), this.environment.reinitialize(), this.taskManager.addTask(new Sa(this.elementObserver)), this.customerStorage.updateAndGetSessionId(), qa(this.environment, this.attributeStorage, this.customer), ar(this.customer) && lr(this.environment, this.integrationDataStorage, this.customer), this.attributeData.reinitialize(), this.internalApi.reinitialize(), e.forEach((e => {
                        ks.executeFunction(e, 150)
                    })), this.activityStorage.add(eo.buildPageviewActivity(this.customer, this.environment, this.user, this.attributeStorage, this.customerStorage)), this.pageContext.reinitialize(), Ka(this.customer, this.statusModel, this.environment.getWindow().document), this.scheduleTasks(), this.isRestartingStatus = !1
                }))
            }), 0)
        }
        isRestarting() {
            return fs.debug(`Client.isRestarting() => ${this.isRestartingStatus}`), this.isRestartingStatus
        }
        postServerContextWork() {
            fs.time("postServerContextWork");
            const e = this.serverContextStorage.get();
            if (!e.isPresent()) return void fs.error("Expected ServerContext is missing", 146);
            const t = e.get();
            fs.debug(`postServerContextWork() serverContext: ${Ie(t)}`), fs.configureServerContext(t), this.attributeData.setServerContext(t), this.elementObserver = this.override.useElementObserver().orElse(!0) ? new zn : new Ns, this.taskManager.addTask(new Sa(this.elementObserver)), this.pageContext = new zo(this.environment, this.browserStorage, this.extensionManager, this.customer, this.conditionEvaluationRuntime, this.attributeData, this.override, this.taskManager, this.hider, this.elementObserver, this.statusModel), this.browserEventLogger = new As(this.customer, this.environment, this.user, this.attributeStorage, this.pageContext, t, this.customerStorage, void 0, this.override);
            const i = new xo(this.environment, this.extensionManager, this.browserEventLogger, this.taskManager, this.customerStorage, this.attributeStorage, this.activityStorage, this.integrationDataStorage, this.customer, this.user, this.override, this.statusModel, this.intellimizeApi.extractCallQueue(), this.intellimizeApi.extractReadyCallbackQueue(), (e => {
                this.addVariationRecordedCallbackTuple(e)
            }));
            i.initialize(), this.internalApi = new Po(this.customer, this.user, this.environment, this.extensionManager, t, this.taskManager, this.browserStorage, this.customerStorage, i, this.attributeData, this.elementObserver), this.internalApi.initialize(), this.activityStorage.add(eo.buildPageviewActivity(this.customer, this.environment, this.user, this.attributeStorage, this.customerStorage)), Ka(this.customer, this.statusModel, this.environment.getWindow().document), this.pageContext.reinitialize(), this.scheduleTasks(this.browserEventLogger), this.override.injectVisualEditor().orElse(!1) && this.environment.injectScript("https://intellimizeditor.com/common.js"), fs.timeEnd("postServerContextWork")
        }
        scheduleTasks(e) {
            if (fs.debug("scheduleTasks()"), this.override.shouldRunTasks().orElse(!0)) {
                const t = new sl(this.environment, this.browserStorage, this.extensionManager, this.browserEventLogger, this.customer, this.customerStorage, this.attributeStorage, this.activityStorage, this.user, this.override, this.pageContext, this.attributeData, this.statusModel, this.conditionEvaluationRuntime, this.hider, this.getVariationRecordedCallbackTuples.bind(this), this.elementObserver);
                t.onPolicyReady((t => {
                    void 0 !== e && e.setPolicy(t), fs.debug("scheduleTasks() onPolicyReady()"), this.override.sendPageviewBrowserEvents().orElse(!0) && this.taskManager.addTask(new xa(this.environment, this.browserEventLogger));
                    const i = new Ea(this.environment, this.browserEventLogger, this.customer, this.customerStorage, this.attributeStorage, this.activityStorage, this.user, this.override, this.pageContext, this.statusModel),
                        s = new ca(this.environment, this.browserEventLogger, this.integrationDataStorage);
                    if (this.taskManager.addTask(s), this.taskManager.addTask(i), this.customer.getIntegrationShopify().isPresent()) {
                        fs.debug("Shopify Pixel enabled for customer");
                        const e = new cl(this.environment, this.browserEventLogger, this.customer, this.customerStorage, this.attributeStorage, this.activityStorage, this.user, this.statusModel, this.taskManager);
                        this.shopifyStorageQueueTask = j.of(e), this.taskManager.addTask(e)
                    }
                    if (gr(this.customer)) {
                        if (this.environment.getHostingPageUrl().getQueryParam(ye, b).isPresent()) {
                            const e = new ya(this.environment, this.customer, "/marketo-id-associator", (() => pr(this.environment)));
                            this.taskManager.addTask(e)
                        }
                        const e = new Ca(this.environment, this.browserEventLogger, this.customer, this.user, this.override, this.activityStorage, this.attributeStorage, this.customerStorage, this.statusModel);
                        this.taskManager.addTask(e)
                    }
                    if (ur(this.customer)) {
                        if (this.environment.getHostingPageUrl().getQueryParam(Se, b).isPresent()) {
                            const e = new ya(this.environment, this.customer, "/hubspot-id-associator", (() => dr(this.environment)));
                            this.taskManager.addTask(e)
                        }
                        const e = new Ia(this.environment, this.browserEventLogger, this.customer, this.user, this.override, this.activityStorage, this.attributeStorage, this.customerStorage, this.statusModel);
                        this.taskManager.addTask(e)
                    }
                })), this.taskManager.addTask(t)
            } else this.override.sendPageviewBrowserEvents().orElse(!0) && this.taskManager.addTask(new xa(this.environment, this.browserEventLogger))
        }
        handlePageUnload() {
            fs.debug("(Prepare for Shutdown): handlePageUnload() giving the client one more chance to run tasks..."), this.shopifyStorageQueueTask.ifPresent((e => {
                e.getStorageQueueConsumer().ifPresent((e => {
                    e.handlePageUnload()
                }))
            }));
            this.taskManager.findTasks((e => !e.isDone())).length > 0 && (this.taskManager.addTask(new Ta), this.taskManager.runNow())
        }
    }

    function dl(e, t) {
        return i => {
            fs.time("frameTick", ["raf"]);
            const s = null != t ? t : i;
            i - s < e && window.requestAnimationFrame(dl(e, s)), fs.timeEnd("frameTick", ["raf"])
        }
    }

    function hl() {
        new MutationObserver((e => {
            Ds.time(`mutations: ${e.length}`), e.forEach((e => {
                Ds.debug(`Doc mutation: ${Te(e)}`)
            })), Ds.timeEnd(`mutations: ${e.length}`)
        })).observe(document.documentElement, {
            subtree: !0,
            childList: !0,
            attributes: !0,
            characterData: !0,
            attributeOldValue: !0,
            characterDataOldValue: !0
        })
    }(() => {
        __async(this, null, (function*() {
            try {
                fs.time("client startup time"), fs.getLevel() <= i.LogLevel.DEBUG && (window.requestAnimationFrame(dl(2e3)), hl());
                const e = new ul;
                yield e.run(), fs.timeEnd("client startup time")
            } catch (e) {
                Ln.revealAll(document);
                const t = vt(e);
                fs.error(t, 142)
            }
        }))
    })()
}();