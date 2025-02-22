"use strict";
(() => {
    var a = "fs-attributes";
    var l = "mirrorclick";
    var m = () => {};

    function E(e, t, o, n) {
        return e ? (e.addEventListener(t, o, n), () => e.removeEventListener(t, o, n)) : m
    }
    var f = e => {
        let t = e.split("-"),
            o = parseInt(t[t.length - 1]);
        if (!isNaN(o)) return o
    };

    function R(e, t, o) {
        var r;
        let n = window.fsAttributes[e];
        return n.destroy = o || m, (r = n.resolve) == null || r.call(n, t), t
    }
    var h = `${a}-support`,
        L = "https://cdn.jsdelivr.net/npm/@finsweet/attributes-support@1/support.js",
        _ = async () => {
            let {
                fsAttributes: e,
                location: t
            } = window, {
                host: o,
                searchParams: n
            } = new URL(t.href);
            e.support || (e.support = {});
            let {
                support: r
            } = e;
            if (!o.includes("webflow.io") || !n.has(h)) return !1;
            if (r.import) return r.import;
            try {
                r.import = new Promise((s, i) => {
                    let c = document.createElement("script");
                    c.src = L, c.onload = () => s(!0), c.onerror = i, document.head.append(c)
                })
            } catch (s) {
                return !1
            }
            return r.import
        };
    var S = e => t => `${e}${t?`-${t}`:""}`,
        A = e => {
            let t = (n, r, s) => {
                let i = e[n],
                    {
                        key: c,
                        values: d
                    } = i,
                    u;
                if (!r) return `[${c}]`;
                let b = d == null ? void 0 : d[r];
                typeof b == "string" ? u = b : u = b(s && "instanceIndex" in s ? s.instanceIndex : void 0);
                let T = s && "caseInsensitive" in s && s.caseInsensitive ? "i" : "";
                if (!(s != null && s.operator)) return `[${c}="${u}"${T}]`;
                switch (s.operator) {
                    case "prefixed":
                        return `[${c}^="${u}"${T}]`;
                    case "suffixed":
                        return `[${c}$="${u}"${T}]`;
                    case "contains":
                        return `[${c}*="${u}"${T}]`
                }
            };

            function o(n, r) {
                let s = t("element", n, r),
                    i = (r == null ? void 0 : r.scope) || document;
                return r != null && r.all ? [...i.querySelectorAll(s)] : i.querySelector(s)
            }
            return [t, o]
        };
    var p = {
            preventLoad: {
                key: `${a}-preventload`
            },
            debugMode: {
                key: `${a}-debug`
            },
            src: {
                key: "src",
                values: {
                    finsweet: "@finsweet/attributes"
                }
            },
            dev: {
                key: `${a}-dev`
            }
        },
        [x, nt] = A(p);
    var g = e => {
        let {
            currentScript: t
        } = document, o = {};
        if (!t) return {
            attributes: o,
            preventsLoad: !1
        };
        let r = {
            preventsLoad: typeof t.getAttribute(p.preventLoad.key) == "string",
            attributes: o
        };
        for (let s in e) {
            let i = t.getAttribute(e[s]);
            r.attributes[s] = i
        }
        return r
    };
    var U = ({
            scriptAttributes: e,
            attributeKey: t,
            version: o,
            init: n
        }) => {
            var c;
            P(), (c = window.fsAttributes)[t] || (c[t] = {});
            let {
                preventsLoad: r,
                attributes: s
            } = g(e), i = window.fsAttributes[t];
            i.version = o, i.init = n, r || (window.Webflow || (window.Webflow = []), window.Webflow.push(() => n(s)))
        },
        P = () => {
            let e = k();
            if (window.fsAttributes && !Array.isArray(window.fsAttributes)) {
                w(window.fsAttributes, e);
                return
            }
            let t = {
                cms: {},
                push(...o) {
                    var n, r;
                    for (let [s, i] of o)(r = (n = this[s]) == null ? void 0 : n.loading) == null || r.then(i)
                },
                destroy() {
                    var o, n;
                    for (let r of e)(n = (o = window.fsAttributes[r]) == null ? void 0 : o.destroy) == null || n.call(o)
                }
            };
            w(t, e), M(t), window.fsAttributes = t, window.FsAttributes = window.fsAttributes, _()
        },
        k = () => {
            let e = x("src", "finsweet", {
                    operator: "contains"
                }),
                t = x("dev");
            return [...document.querySelectorAll(`script${e}, script${t}`)].reduce((r, s) => {
                var c;
                let i = s.getAttribute(p.dev.key) || ((c = s.src.match(/[\w-. ]+(?=(\.js)$)/)) == null ? void 0 : c[0]);
                return i && !r.includes(i) && r.push(i), r
            }, [])
        },
        w = (e, t) => {
            for (let o of t) {
                if (e[o]) continue;
                e[o] = {};
                let n = e[o];
                n.loading = new Promise(r => {
                    n.resolve = s => {
                        r(s), delete n.resolve
                    }
                })
            }
        },
        M = e => {
            let t = Array.isArray(window.fsAttributes) ? window.fsAttributes : [];
            e.push(...t)
        };
    var v = "1.5.0";
    var B = (e, t) => {
        let o = e.getAttribute(t);
        return o ? f(o) : void 0
    };
    var C = `fs-${l}`,
        O = "trigger",
        $ = "target",
        D = "delay",
        y = {
            element: {
                key: `${C}-element`,
                values: {
                    trigger: O,
                    target: S($)
                }
            },
            delay: {
                key: `${C}-${D}`
            }
        },
        [I, ft] = A(y);
    var {
        element: {
            key: F
        },
        delay: {
            key: V
        }
    } = y, K = () => {
        let e = E(window, "click", ({
            target: t
        }) => {
            if (!(t instanceof Element)) return;
            let o = t.closest(I("element", "trigger", {
                operator: "prefixed"
            }));
            if (!o) return;
            let n = B(o, F),
                r = document.querySelectorAll(I("element", "target", {
                    instanceIndex: n
                }));
            for (let s of r) {
                if (!(s instanceof HTMLElement)) continue;
                let i = s.getAttribute(V) || o.getAttribute(V),
                    c = i ? parseInt(i) : void 0;
                c ? window.setTimeout(() => s.click(), c) : s.click()
            }
        });
        return R(l, void 0, () => e())
    };
    U({
        init: K,
        version: v,
        attributeKey: l
    });
})();