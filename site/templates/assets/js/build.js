var helper = {
        init: function() {},
        headerScroll: function(e, t, i) {
            var o = $(window),
                s = $(e);
            o.scrollTop() >= i ? s.addClass(t) : s.removeClass(t), o.on("scroll", (function() {
                o.scrollTop() > i ? s.addClass(t) : s.removeClass(t)
            }))
        },
        open: function(e, t, i, o, s) {
            $(document).mouseup((function(n) {
                if ($(n.target).is(e) || $(n.target).is(o)) $(t).hasClass(i) ? ($(t).removeClass(i), s && $(s).removeClass("opened")) : ($(t).addClass(i), s && $(s).addClass("opened"));
                else {
                    var r = $(t);
                    r.is(n.target) || 0 !== r.has(n.target).length || (r.removeClass("opened"), s && $(s).removeClass("opened"))
                }
            }))
        },
        openFrom: function(e, t, i, o, s) {
            $(document).mouseup((function(n) {
                if ($(n.target).is(e) || $(n.target).is(o)) $(t).hasClass(i) ? ($(t).removeClass(i), s && $(s).removeClass("opened")) : ($(t).addClass(i), s && $(s).addClass("opened"));
                else {
                    var r = $(t);
                    r.is(n.target) || 0 !== r.has(n.target).length || (r.removeClass("opened"), s && $(s).removeClass("opened"))
                }
            }))
        }
    },
    app = {
        init: function() {
            helper.open(".menu-trigger, .menu-trigger span", "html, header, .menu-trigger, .nav-col", "opened"), helper.openFrom(".quote-trigger, .quote-trigger span", ".quote-form", "opened"), helper.headerScroll("header", "scroll", 80), app.slider(), app.filters(".filter", ".filter, .filters-nav", "show"), app.maps(), app.video(), app.showcaseFiters(), app.links(), app.faq(), app.spy(), app.readingBar(), app.social(), app.scrollingText(), app.parralax(), app.headerScroll(), app.closeFrom()
        },
        closeFrom: function() {
            $(".close-form").on("click", (function() {
                $(".quote-form").removeClass("opened")
            }))
        },
        headerScroll: function() {
            var e, t = document.documentElement,
                i = window,
                o = i.scrollY || t.scrollTop,
                s = 0,
                n = $("header, .logo-fixed, .contact-btn-fixed"),
                r = function(e, t) {
                    2 === e && t > 2 ? n.addClass("hide-elem") : 1 === e && n.removeClass("hide-elem")
                };
            window.addEventListener("scroll", (function() {
                (e = i.scrollY || t.scrollTop) > o ? s = 2 : e < o && (s = 1), 0 !== s && r(s, e), o = e
            })), $(".logo-fixed").on("mouseenter", (function() {
                $("header, .logo-fixed").removeClass("hide-elem")
            }))
        },
        parralax: function() {
            var e = $(document).find(".parallax");

            function t() {
                var t = document.documentElement.scrollTop || document.body.scrollTop;
                window.innerHeight;
                for (i = 0; i < e.length; i++) ActiveLayer = e[i], ActiveParent = $(ActiveLayer).parent(), Distance = ActiveParent.offset().top, HeightParent = ActiveParent.height(), HeightLayer = $(ActiveLayer).height(), $(ActiveLayer).hasClass("reverse") ? Scroll = Math.round((t - Distance) / -5) : Scroll = Math.round((t - Distance) / 3), $(ActiveLayer).css({
                    transform: "translateY(" + Scroll + "px)",
                    "-moz-transform": "translateY(" + Scroll + "px)",
                    "-ms-transform": "translateY(" + Scroll + "px)"
                })
            }
            t(), $(window).scroll((function() {
                t()
            }))
        },
        scrollingText: function() {
            $(".tape-text").each((function(e, t) {
                var i = "tape-text-" + e;
                this.id = i, nodeMarquee({
                    parent: "#" + i,
                    speed: .7
                })
            }))
        },
        social: function() {
            $("#share").length && $("#share").jsSocials({
                shares: [{
                    share: "facebook",
                    logo: "/site/templates/assets/images/facebook.svg"
                }, {
                    share: "linkedin",
                    logo: "/site/templates/assets/images/linkedin.svg"
                }, {
                    share: "twitter",
                    logo: "/site/templates/assets/images/x-twitter.svg"
                }],
                showLabel: !1,
                showCount: !1
            })
        },
        readingBar: function() {
            if ($(".article-progress").length) {
                ! function(e, t, i = 0) {
                    const o = window.innerHeight,
                        s = e.offsetHeight - o,
                        n = e.offsetTop + i,
                        r = n + s;
                    window.addEventListener("scroll", () => {
                        const e = window.scrollY;
                        let i = 0;
                        e < n ? i = 0 : e >= n && e <= r ? (i = (e - n) / s * 100 + "%", $(".progress-wrapper").addClass("show")) : (i = "100%", $(".progress-wrapper").removeClass("show")), t.style.width = i
                    })
                }(document.querySelector(".article-progress"), document.querySelector(".progress"), -5)
            }
        },
        spy: function() {
            if ($(".spy-navigation").length) {
                var e = $(".spy-navigation ul a");
                $(document).on("scroll", (function() {
                    e.each((function() {
                        var e = $(this).attr("href"),
                            t = $(e).offset().top,
                            i = t + $(e).outerHeight(),
                            o = $(document).scrollTop();
                        o < i - 250 && o >= t - 250 ? $(this).addClass("active") : $(this).removeClass("active")
                    }))
                })), $(".spy-navigation a").on("click", (function() {
                    var e = $(this).attr("href");
                    $("html,body").animate({
                        scrollTop: $(e).offset().top - 150
                    }, 100)
                }))
            }
        },
        faq: function() {
            $(".accordion").accordionjs({
                activeIndex: 999,
                animation: !0,
                closeOther: !0,
                slideSpeed: 200
            }), $(".accordion_in .acc_head").on("click", (function() {
                $(this);
                $("html,body").animate({
                    scrollTop: $(".acc_active").offset().top - 300
                }, 50)
            })), $(".accordion_in .acc_head").on("click", (function(e) {
                $(".faq .slider").slick("refresh")
            }))
        },
        links: function() {
            $(".extend-links .content-title p").on("click", (function(e) {
                e.preventDefault(), $(".extend-links .content-title p").removeClass("active"), $(this).addClass("active"), $(".extend-links .content-box .box").siblings().addClass("hide");
                var t = $(this).attr("data-id");
                $('[data-content="' + t + '"]').removeClass("hide")
            })), $(".extend-links .content-title p").on("click", (function(e) {
                $(".content-box .slick-slider").slick("refresh")
            }))
        },
        slider: function() {
            $(".hero .slider").slick({
                dots: !0,
                appendDots: ".arrow-box",
                arrows: !1,
                infinite: !0,
                slidesToShow: 1,
                speed: 2e3,
                fade: !0,
                cssEase: "cubic-bezier(.84, 0, .08, .99)",
                autoplaySpeed: 5e3
            }), $(".content-slider").slick({
                dots: !0,
                arrows: !1,
                infinite: !0,
                slidesToShow: 1,
                speed: 1e3,
                fade: !0,
                adaptiveHeight: !0
            }), $(".faq .slider").slick({
                dots: !0,
                arrows: !1,
                infinite: !0,
                slidesToShow: 1,
                speed: 1e3,
                fade: !0,
                adaptiveHeight: !0
            }), $(".slider-links .slider").each((function(e, t) {
                var i = "content-slider-" + e;
                this.id = i, $(this).slick({
                    dots: !0,
                    arrows: !1,
                    infinite: !0,
                    slidesToShow: 1,
                    speed: 1e3,
                    fade: !0,
                    adaptiveHeight: !0
                })
            })), $(".testimonials .content").slick({
                dots: !1,
                arrows: !0,
                infinite: !0,
                speed: 750,
                cssEase: "cubic-bezier(.84, 0, .08, .99)",
                slidesToShow: 3,
                responsive: [{
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2
                    }
                }, {
                    breakpoint: 568,
                    settings: {
                        slidesToShow: 1
                    }
                }]
            }), $(".stats-slider .slider-col").slick({
                dots: !1,
                arrows: !0,
                infinite: !0,
                speed: 750,
                cssEase: "cubic-bezier(.84, 0, .08, .99)",
                slidesToShow: 2,
                responsive: [{
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1
                    }
                }]
            }), $(".project-slider").slick({
                arrows: !1,
                infinite: !0,
                slidesToShow: 1,
                speed: 1500,
                fade: !0,
                cssEase: "cubic-bezier(.84, 0, .08, .99)",
                autoplay: !0,
                autoplaySpeed: 7e3,
                pauseOnHover: !1
            }), $(window).mousemove((function(e) {
                e.clientX <= $(window).innerWidth() / 2 ? ($(".project-slider").removeClass("curNext"), $(".project-slider").addClass("curPrev")) : ($(".project-slider").removeClass("curPrev"), $(".project-slider").addClass("curNext"))
            })), $(document).on("click", ".curNext", (function(e) {
                $(".slider").slick("slickNext"), $(".project-slider").slick("slickNext")
            })), $(document).on("click", ".curPrev", (function(e) {
                $(".slider").slick("slickPrev"), $(".project-slider").slick("slickPrev"), "A" == e.target.nodeName && $(".project-slider").slick("slickCurrentSlide")
            }))
        },
        filters: function(e, t, i, o, s) {
            $(document).mouseup((function(n) {
                if ($(n.target).is(e) || $(n.target).is(o)) $(t).hasClass(i) ? ($(t).removeClass(i), s && $(s).removeClass("show")) : ($(t).addClass(i), s && $(s).addClass("show"));
                else {
                    var r = $(t);
                    r.is(n.target) || 0 !== r.has(n.target).length || (r.removeClass("show"), s && $(s).removeClass("show"))
                }
            }))
        },
        maps: function() {
            $(".map-trigger").on("click", (function() {
                $(".map-trigger").removeClass("active"), $(this).addClass("active");
                var e = $(this).attr("data-map");
                $(".map-box").siblings().addClass("hide"), $('[data-mapbox="' + e + '"]').removeClass("hide")
            }))
        },
        video: function() {
            $(".video-module .video-container").on("click", (function() {
                if ($(this).attr("data-type").includes("youtube")) {
                    var e = $(this).find("iframe");
                    $(this).find("iframe").css("z-index", "6"), $(this).find(".iframe-container").show(), e.attr("src", $(this).attr("data-video"))
                } else {
                    var t = $(this).find("video");
                    $(this).find("video").css("z-index", "6").attr("controls", "true"), $(".iframe-container").hide();
                    var i = $(this).attr("data-video");
                    t.attr("src", i), t.get(0).play()
                }
            }))
        },
        showcaseFiters: function() {
            $(".filters-nav label").on("click", (function() {
                $(".filters-nav label").removeClass("active"), $(this).addClass("active"), $(".filters-nav, .filter").removeClass("show")
            })), $(".filters-nav label input").on("click", (function() {
                var e = $(this).val(),
                    t = $(this).parent().text();
                "0" == e ? ($(".showcase-content .col-lg-4").removeClass("hide"), $(".filter-result").addClass("hide"), $(".filter-result span").text("")) : ($(".filter-result").removeClass("hide"), $(".filter-result span").text(t), $(".showcase-content .col-lg-4").removeClass("hide").filter(':not([data-content*="' + e + '"])').addClass("hide"))
            })), $(".filter-result").on("click", (function() {
                $(".showcase-content .col-lg-4").removeClass("hide"), $(this).addClass("hide")
            }))
        }
    };
$(document).ready(app.init), $(document).ready((function() {
        AOS.init({
            once: !0,
            offset: 50,
            duration: 500
        }), $(".filters-nav label input").on("click", (function() {
            AOS.refresh()
        }))
    })),
    function(e) {
        "use strict";
        e.fn.accordionjs = function(t) {
            if (this.length > 1) return this.each((function() {
                e(this).accordionjs(t)
            })), this;
            var i = this,
                o = function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                },
                s = function(e) {
                    return e.hasClass("acc_active")
                },
                n = function() {
                    return !!window.location.hash && window.location.hash.substring(1)
                },
                r = e.extend({
                    closeAble: !1,
                    closeOther: !0,
                    slideSpeed: 150,
                    activeIndex: 1,
                    openSection: !1,
                    beforeOpenSection: !1
                }, t);
            e.each(r, (function(e) {
                var t = e.replace(/([A-Z])/g, "-$1").toLowerCase().toString(),
                    o = i.data(t);
                (o || !1 === o) && (r[e] = o)
            })), (!1 === r.activeIndex || !1 === r.closeOther) && (r.closeAble = !0);
            return this.openSection = function(t, i) {
                e(document).trigger("accjs_before_open_section", [t]), "function" == typeof r.beforeOpenSection && r.beforeOpenSection.call(this, t), i = i >= 0 ? i : r.slideSpeed, t.children().eq(1).slideDown(i, (function() {
                    e(document).trigger("accjs_open_section", [t]), "function" == typeof r.openSection && r.openSection.call(this, t)
                })), t.addClass("acc_active")
            }, this.closeSection = function(t, i) {
                e(document).trigger("accjs_before_close_section", [t]), "function" == typeof r.beforeCloseSection && r.beforeCloseSection.call(this, t), i = i >= 0 ? i : r.slideSpeed, t.children().eq(1).slideUp(i, (function() {
                    e(document).trigger("accjs_close_section", [t]), "function" == typeof r.closeSection && r.closeSection.call(this, t)
                })), t.removeClass("acc_active")
            }, this.closeOtherSections = function(t, o) {
                var s = t.closest(".accordionjs").children();
                e(s).each((function() {
                    i.closeSection(e(this).not(t), o)
                }))
            }, this.create = function() {
                i.addClass("accordionjs");
                var t = i.children();
                if (e.each(t, (function(t, o) {
                        i.createSingleSection(e(o))
                    })), o(r.activeIndex))
                    for (var s = r.activeIndex, n = 0; n < s.length; n++) i.openSection(t.eq(s[n] - 1), 0);
                else r.activeIndex > 1 ? i.openSection(t.eq(r.activeIndex - 1), 0) : !1 !== r.activeIndex && i.openSection(t.eq(0), 0)
            }, this.createSingleSection = function(t) {
                var i = t.children();
                t.addClass("acc_section"), e(i[0]).addClass("acc_head"), e(i[1]).addClass("acc_content"), t.hasClass("acc_active") || t.children(".acc_content").hide()
            }, this.openOnClick = function() {
                i.on("click", ".acc_head", (function(t) {
                    t.stopImmediatePropagation();
                    var o = e(this).closest(".acc_section");
                    s(o) ? (r.closeAble || 1 === i.children().length) && i.closeSection(o) : r.closeOther ? (i.closeOtherSections(o), i.openSection(o)) : i.openSection(o)
                }))
            }, this.openOnHash = function() {
                if (n()) {
                    var t = e("#" + n());
                    t.hasClass("acc_section") && (i.openSection(t), r.closeOther && i.closeOtherSections(t), e("html, body").animate({
                        scrollTop: parseInt(t.offset().top) - 50
                    }, 150))
                }
            }, i.create(), i.openOnClick(), e(window).on("load", (function() {
                i.openOnHash()
            })), e(window).on("hashchange", (function() {
                i.openOnHash()
            })), this
        }
    }(jQuery),
    function() {
        "use strict";

        function e() {}

        function t(e) {
            for (var t = {}, i = 0; i < d.length; i++) t[d[i]] = +e.getAttribute("data-speed-" + d[i]) || 0;
            return t
        }

        function i(e, t) {
            var i = {};
            return i.x = e.x * t.x + "px", i.y = e.y * t.y + "px", i.scale = 1 + e.r * t.scale, i.opacity = 1 - e.r * Math.abs(t.opacity), i.rotate = 100 * -e.s * e.r * t.rotate + "deg", i
        }

        function o(e, t) {
            if (a) e.style.marginLeft = t.x, e.style.marginTop = t.y;
            else {
                for (var i in c) c.hasOwnProperty(i) && (e.style[i] = [c[i], "(", t.x + "," + t.y, "translate" === c[i] ? "" : ",0", ") scale(", t.scale, ") rotate(", t.rotate, ")"].join(""));
                e.style.opacity = t.opacity, e.style.MozOpacity = t.opacity
            }
        }

        function s(e) {
            if (!r)
                for (var s, n = function(e) {
                        var t = {};
                        return t.x = e.clientX - window.innerWidth / 2 || 0, t.y = e.clientY - window.innerHeight / 2 || 0, t.fi = Math.atan(0 === t.x ? 1 / 0 : -t.y / t.x) + (t.x < 0 ? Math.PI : -t.y < 0 ? 2 * Math.PI : 0), t.s = 45 * Math.sin(2 * t.fi) / 100, t.x /= 100, t.y /= 100, t.r = Math.sqrt(Math.pow(t.x, 2) + Math.pow(t.y, 2)) / Math.sqrt(Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2)) * 2, t
                    }(e = "touchmove" === e.type ? e.changedTouches[0] : e), a = 0; a < p.length; a++) o(s = p[a], i(n, t(s)))
        }
        var n = document.body.getAttribute("data-anm");
        if (n) {
            var r, a = /MSIE.\d+\./gi.test(navigator.userAgent) && +navigator.userAgent.replace(/.*MSIE.(\d+)\..*/gi, "$1") < 9,
                l = "ontouchstart" in window || "onmsgesturechange" in window ? "touchmove" : "mousemove",
                d = ["x", "y", "scale", "rotate"],
                c = {
                    webkitTransform: "translate3d",
                    MozTransform: "translate3d",
                    msTransform: "translate3d",
                    OTransform: "translate",
                    transform: "translate3d"
                },
                p = e.elements = document.querySelectorAll(n);
            e.on = function() {
                r = !1
            }, e.off = function() {
                r = !0
            }, e.toggle = function() {
                r = !r
            }, s({}), window.addEventListener ? window.addEventListener(l, s, !1) : window.attachEvent("onmousemove", (function() {
                s.call(window, window.event)
            })), "function" == typeof define && define.amd ? define([], (function() {
                return e
            })) : "undefined" != typeof module && module.exports ? module.exports = e : this.anm = e
        }
    }.call(this),
    function(e, t) {
        "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.AOS = t() : e.AOS = t()
    }(this, (function() {
        return function(e) {
            function t(o) {
                if (i[o]) return i[o].exports;
                var s = i[o] = {
                    exports: {},
                    id: o,
                    loaded: !1
                };
                return e[o].call(s.exports, s, s.exports, t), s.loaded = !0, s.exports
            }
            var i = {};
            return t.m = e, t.c = i, t.p = "dist/", t(0)
        }([function(e, t, i) {
            "use strict";

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var s = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (e[o] = i[o])
                    }
                    return e
                },
                n = (o(i(1)), i(6)),
                r = o(n),
                a = o(i(7)),
                l = o(i(8)),
                d = o(i(9)),
                c = o(i(10)),
                p = o(i(11)),
                u = o(i(14)),
                f = [],
                h = !1,
                v = {
                    offset: 120,
                    delay: 0,
                    easing: "ease",
                    duration: 400,
                    disable: !1,
                    once: !1,
                    startEvent: "DOMContentLoaded",
                    throttleDelay: 99,
                    debounceDelay: 50,
                    disableMutationObserver: !1
                },
                m = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (e && (h = !0), h) return f = (0, p.default)(f, v), (0, c.default)(f, v.once), f
                },
                g = function() {
                    f = (0, u.default)(), m()
                };
            e.exports = {
                init: function(e) {
                    v = s(v, e), f = (0, u.default)();
                    var t = document.all && !window.atob;
                    return function(e) {
                        return !0 === e || "mobile" === e && d.default.mobile() || "phone" === e && d.default.phone() || "tablet" === e && d.default.tablet() || "function" == typeof e && !0 === e()
                    }(v.disable) || t ? void f.forEach((function(e, t) {
                        e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay")
                    })) : (v.disableMutationObserver || l.default.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), v.disableMutationObserver = !0), document.querySelector("body").setAttribute("data-aos-easing", v.easing), document.querySelector("body").setAttribute("data-aos-duration", v.duration), document.querySelector("body").setAttribute("data-aos-delay", v.delay), "DOMContentLoaded" === v.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? m(!0) : "load" === v.startEvent ? window.addEventListener(v.startEvent, (function() {
                        m(!0)
                    })) : document.addEventListener(v.startEvent, (function() {
                        m(!0)
                    })), window.addEventListener("resize", (0, a.default)(m, v.debounceDelay, !0)), window.addEventListener("orientationchange", (0, a.default)(m, v.debounceDelay, !0)), window.addEventListener("scroll", (0, r.default)((function() {
                        (0, c.default)(f, v.once)
                    }), v.throttleDelay)), v.disableMutationObserver || l.default.ready("[data-aos]", g), f)
                },
                refresh: m,
                refreshHard: g
            }
        }, function(e, t) {}, , , , , function(e, t) {
            (function(t) {
                "use strict";

                function i(e, t, i) {
                    function s(t) {
                        var i = u,
                            o = f;
                        return u = f = void 0, w = t, v = e.apply(o, i)
                    }

                    function r(e) {
                        return w = e, m = setTimeout(d, t), $ ? s(e) : v
                    }

                    function l(e) {
                        var i = e - g;
                        return void 0 === g || i >= t || i < 0 || S && e - w >= h
                    }

                    function d() {
                        var e = b();
                        return l(e) ? c(e) : void(m = setTimeout(d, function(e) {
                            var i = t - (e - g);
                            return S ? k(i, h - (e - w)) : i
                        }(e)))
                    }

                    function c(e) {
                        return m = void 0, T && u ? s(e) : (u = f = void 0, v)
                    }

                    function p() {
                        var e = b(),
                            i = l(e);
                        if (u = arguments, f = this, g = e, i) {
                            if (void 0 === m) return r(g);
                            if (S) return m = setTimeout(d, t), s(g)
                        }
                        return void 0 === m && (m = setTimeout(d, t)), v
                    }
                    var u, f, h, v, m, g, w = 0,
                        $ = !1,
                        S = !1,
                        T = !0;
                    if ("function" != typeof e) throw new TypeError(a);
                    return t = n(t) || 0, o(i) && ($ = !!i.leading, h = (S = "maxWait" in i) ? y(n(i.maxWait) || 0, t) : h, T = "trailing" in i ? !!i.trailing : T), p.cancel = function() {
                        void 0 !== m && clearTimeout(m), w = 0, u = g = f = m = void 0
                    }, p.flush = function() {
                        return void 0 === m ? v : c(b())
                    }, p
                }

                function o(e) {
                    var t = void 0 === e ? "undefined" : r(e);
                    return !!e && ("object" == t || "function" == t)
                }

                function s(e) {
                    return "symbol" == (void 0 === e ? "undefined" : r(e)) || function(e) {
                        return !!e && "object" == (void 0 === e ? "undefined" : r(e))
                    }(e) && w.call(e) == d
                }

                function n(e) {
                    if ("number" == typeof e) return e;
                    if (s(e)) return l;
                    if (o(e)) {
                        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                        e = o(t) ? t + "" : t
                    }
                    if ("string" != typeof e) return 0 === e ? e : +e;
                    e = e.replace(c, "");
                    var i = u.test(e);
                    return i || f.test(e) ? h(e.slice(2), i ? 2 : 8) : p.test(e) ? l : +e
                }
                var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    },
                    a = "Expected a function",
                    l = NaN,
                    d = "[object Symbol]",
                    c = /^\s+|\s+$/g,
                    p = /^[-+]0x[0-9a-f]+$/i,
                    u = /^0b[01]+$/i,
                    f = /^0o[0-7]+$/i,
                    h = parseInt,
                    v = "object" == (void 0 === t ? "undefined" : r(t)) && t && t.Object === Object && t,
                    m = "object" == ("undefined" == typeof self ? "undefined" : r(self)) && self && self.Object === Object && self,
                    g = v || m || Function("return this")(),
                    w = Object.prototype.toString,
                    y = Math.max,
                    k = Math.min,
                    b = function() {
                        return g.Date.now()
                    };
                e.exports = function(e, t, s) {
                    var n = !0,
                        r = !0;
                    if ("function" != typeof e) throw new TypeError(a);
                    return o(s) && (n = "leading" in s ? !!s.leading : n, r = "trailing" in s ? !!s.trailing : r), i(e, t, {
                        leading: n,
                        maxWait: t,
                        trailing: r
                    })
                }
            }).call(t, function() {
                return this
            }())
        }, function(e, t) {
            (function(t) {
                "use strict";

                function i(e) {
                    var t = void 0 === e ? "undefined" : n(e);
                    return !!e && ("object" == t || "function" == t)
                }

                function o(e) {
                    return "symbol" == (void 0 === e ? "undefined" : n(e)) || function(e) {
                        return !!e && "object" == (void 0 === e ? "undefined" : n(e))
                    }(e) && g.call(e) == l
                }

                function s(e) {
                    if ("number" == typeof e) return e;
                    if (o(e)) return a;
                    if (i(e)) {
                        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                        e = i(t) ? t + "" : t
                    }
                    if ("string" != typeof e) return 0 === e ? e : +e;
                    e = e.replace(d, "");
                    var s = p.test(e);
                    return s || u.test(e) ? f(e.slice(2), s ? 2 : 8) : c.test(e) ? a : +e
                }
                var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    },
                    r = "Expected a function",
                    a = NaN,
                    l = "[object Symbol]",
                    d = /^\s+|\s+$/g,
                    c = /^[-+]0x[0-9a-f]+$/i,
                    p = /^0b[01]+$/i,
                    u = /^0o[0-7]+$/i,
                    f = parseInt,
                    h = "object" == (void 0 === t ? "undefined" : n(t)) && t && t.Object === Object && t,
                    v = "object" == ("undefined" == typeof self ? "undefined" : n(self)) && self && self.Object === Object && self,
                    m = h || v || Function("return this")(),
                    g = Object.prototype.toString,
                    w = Math.max,
                    y = Math.min,
                    k = function() {
                        return m.Date.now()
                    };
                e.exports = function(e, t, o) {
                    function n(t) {
                        var i = u,
                            o = f;
                        return u = f = void 0, b = t, v = e.apply(o, i)
                    }

                    function a(e) {
                        return b = e, m = setTimeout(d, t), $ ? n(e) : v
                    }

                    function l(e) {
                        var i = e - g;
                        return void 0 === g || i >= t || i < 0 || S && e - b >= h
                    }

                    function d() {
                        var e = k();
                        return l(e) ? c(e) : void(m = setTimeout(d, function(e) {
                            var i = t - (e - g);
                            return S ? y(i, h - (e - b)) : i
                        }(e)))
                    }

                    function c(e) {
                        return m = void 0, T && u ? n(e) : (u = f = void 0, v)
                    }

                    function p() {
                        var e = k(),
                            i = l(e);
                        if (u = arguments, f = this, g = e, i) {
                            if (void 0 === m) return a(g);
                            if (S) return m = setTimeout(d, t), n(g)
                        }
                        return void 0 === m && (m = setTimeout(d, t)), v
                    }
                    var u, f, h, v, m, g, b = 0,
                        $ = !1,
                        S = !1,
                        T = !0;
                    if ("function" != typeof e) throw new TypeError(r);
                    return t = s(t) || 0, i(o) && ($ = !!o.leading, h = (S = "maxWait" in o) ? w(s(o.maxWait) || 0, t) : h, T = "trailing" in o ? !!o.trailing : T), p.cancel = function() {
                        void 0 !== m && clearTimeout(m), b = 0, u = g = f = m = void 0
                    }, p.flush = function() {
                        return void 0 === m ? v : c(k())
                    }, p
                }
            }).call(t, function() {
                return this
            }())
        }, function(e, t) {
            "use strict";

            function i() {
                return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
            }

            function o(e) {
                e && e.forEach((function(e) {
                    var t = Array.prototype.slice.call(e.addedNodes),
                        i = Array.prototype.slice.call(e.removedNodes);
                    if (function e(t) {
                            var i = void 0,
                                o = void 0;
                            for (i = 0; i < t.length; i += 1) {
                                if ((o = t[i]).dataset && o.dataset.aos) return !0;
                                if (o.children && e(o.children)) return !0
                            }
                            return !1
                        }(t.concat(i))) return s()
                }))
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = function() {};
            t.default = {
                isSupported: function() {
                    return !!i()
                },
                ready: function(e, t) {
                    var n = window.document,
                        r = new(i())(o);
                    s = t, r.observe(n.documentElement, {
                        childList: !0,
                        subtree: !0,
                        removedNodes: !0
                    })
                }
            }
        }, function(e, t) {
            "use strict";

            function i() {
                return navigator.userAgent || navigator.vendor || window.opera || ""
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = function() {
                    function e(e, t) {
                        for (var i = 0; i < t.length; i++) {
                            var o = t[i];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                        }
                    }
                    return function(t, i, o) {
                        return i && e(t.prototype, i), o && e(t, o), t
                    }
                }(),
                s = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                n = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
                a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                l = function() {
                    function e() {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e)
                    }
                    return o(e, [{
                        key: "phone",
                        value: function() {
                            var e = i();
                            return !(!s.test(e) && !n.test(e.substr(0, 4)))
                        }
                    }, {
                        key: "mobile",
                        value: function() {
                            var e = i();
                            return !(!r.test(e) && !a.test(e.substr(0, 4)))
                        }
                    }, {
                        key: "tablet",
                        value: function() {
                            return this.mobile() && !this.phone()
                        }
                    }]), e
                }();
            t.default = new l
        }, function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = function(e, t) {
                var i = window.pageYOffset,
                    o = window.innerHeight;
                e.forEach((function(e, s) {
                    ! function(e, t, i) {
                        var o = e.node.getAttribute("data-aos-once");
                        t > e.position ? e.node.classList.add("aos-animate") : void 0 !== o && ("false" === o || !i && "true" !== o) && e.node.classList.remove("aos-animate")
                    }(e, o + i, t)
                }))
            }
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(i(12));
            t.default = function(e, t) {
                return e.forEach((function(e, i) {
                    e.node.classList.add("aos-init"), e.position = (0, o.default)(e.node, t.offset)
                })), e
            }
        }, function(e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(i(13));
            t.default = function(e, t) {
                var i = 0,
                    s = 0,
                    n = window.innerHeight,
                    r = {
                        offset: e.getAttribute("data-aos-offset"),
                        anchor: e.getAttribute("data-aos-anchor"),
                        anchorPlacement: e.getAttribute("data-aos-anchor-placement")
                    };
                switch (r.offset && !isNaN(r.offset) && (s = parseInt(r.offset)), r.anchor && document.querySelectorAll(r.anchor) && (e = document.querySelectorAll(r.anchor)[0]), i = (0, o.default)(e).top, r.anchorPlacement) {
                    case "top-bottom":
                        break;
                    case "center-bottom":
                        i += e.offsetHeight / 2;
                        break;
                    case "bottom-bottom":
                        i += e.offsetHeight;
                        break;
                    case "top-center":
                        i += n / 2;
                        break;
                    case "bottom-center":
                        i += n / 2 + e.offsetHeight;
                        break;
                    case "center-center":
                        i += n / 2 + e.offsetHeight / 2;
                        break;
                    case "top-top":
                        i += n;
                        break;
                    case "bottom-top":
                        i += e.offsetHeight + n;
                        break;
                    case "center-top":
                        i += e.offsetHeight / 2 + n
                }
                return r.anchorPlacement || r.offset || isNaN(t) || (s = t), i + s
            }
        }, function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = function(e) {
                for (var t = 0, i = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), i += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
                return {
                    top: i,
                    left: t
                }
            }
        }, function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.default = function(e) {
                return e = e || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e, (function(e) {
                    return {
                        node: e
                    }
                }))
            }
        }])
    })),
    function(e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["js/jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("js/jquery")) : e(jQuery)
    }((function(e) {
        "use strict";
        var t = window.Slick || {};
        (t = function() {
            var t = 0;
            return function(i, o) {
                var s, n = this;
                n.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: e(i),
                    appendDots: e(i),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                    nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function(t, i) {
                        return e('<button type="button" />').text(i + 1)
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    focusOnChange: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3
                }, n.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    scrolling: !1,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    swiping: !1,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                }, e.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = e(i), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = e(i).data("slick") || {}, n.options = e.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = e.proxy(n.autoPlay, n), n.autoPlayClear = e.proxy(n.autoPlayClear, n), n.autoPlayIterator = e.proxy(n.autoPlayIterator, n), n.changeSlide = e.proxy(n.changeSlide, n), n.clickHandler = e.proxy(n.clickHandler, n), n.selectHandler = e.proxy(n.selectHandler, n), n.setPosition = e.proxy(n.setPosition, n), n.swipeHandler = e.proxy(n.swipeHandler, n), n.dragHandler = e.proxy(n.dragHandler, n), n.keyHandler = e.proxy(n.keyHandler, n), n.instanceUid = t++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0)
            }
        }()).prototype.activateADA = function() {
            this.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            })
        }, t.prototype.addSlide = t.prototype.slickAdd = function(t, i, o) {
            var s = this;
            if ("boolean" == typeof i) o = i, i = null;
            else if (i < 0 || i >= s.slideCount) return !1;
            s.unload(), "number" == typeof i ? 0 === i && 0 === s.$slides.length ? e(t).appendTo(s.$slideTrack) : o ? e(t).insertBefore(s.$slides.eq(i)) : e(t).insertAfter(s.$slides.eq(i)) : !0 === o ? e(t).prependTo(s.$slideTrack) : e(t).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each((function(t, i) {
                e(i).attr("data-slick-index", t)
            })), s.$slidesCache = s.$slides, s.reinit()
        }, t.prototype.animateHeight = function() {
            var e = this;
            if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.animate({
                    height: t
                }, e.options.speed)
            }
        }, t.prototype.animateSlide = function(t, i) {
            var o = {},
                s = this;
            s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (t = -t), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
                left: t
            }, s.options.speed, s.options.easing, i) : s.$slideTrack.animate({
                top: t
            }, s.options.speed, s.options.easing, i) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), e({
                animStart: s.currentLeft
            }).animate({
                animStart: t
            }, {
                duration: s.options.speed,
                easing: s.options.easing,
                step: function(e) {
                    e = Math.ceil(e), !1 === s.options.vertical ? (o[s.animType] = "translate(" + e + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + e + "px)", s.$slideTrack.css(o))
                },
                complete: function() {
                    i && i.call()
                }
            })) : (s.applyTransition(), t = Math.ceil(t), !1 === s.options.vertical ? o[s.animType] = "translate3d(" + t + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + t + "px, 0px)", s.$slideTrack.css(o), i && setTimeout((function() {
                s.disableTransition(), i.call()
            }), s.options.speed))
        }, t.prototype.getNavTarget = function() {
            var t = this.options.asNavFor;
            return t && null !== t && (t = e(t).not(this.$slider)), t
        }, t.prototype.asNavFor = function(t) {
            var i = this.getNavTarget();
            null !== i && "object" == typeof i && i.each((function() {
                var i = e(this).slick("getSlick");
                i.unslicked || i.slideHandler(t, !0)
            }))
        }, t.prototype.applyTransition = function(e) {
            var t = this,
                i = {};
            !1 === t.options.fade ? i[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : i[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
        }, t.prototype.autoPlay = function() {
            var e = this;
            e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
        }, t.prototype.autoPlayClear = function() {
            this.autoPlayTimer && clearInterval(this.autoPlayTimer)
        }, t.prototype.autoPlayIterator = function() {
            var e = this,
                t = e.currentSlide + e.options.slidesToScroll;
            e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
        }, t.prototype.buildArrows = function() {
            var t = this;
            !0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, t.prototype.buildDots = function() {
            var t, i, o = this;
            if (!0 === o.options.dots) {
                for (o.$slider.addClass("slick-dotted"), i = e("<ul />").addClass(o.options.dotsClass), t = 0; t <= o.getDotCount(); t += 1) i.append(e("<li />").append(o.options.customPaging.call(this, o, t)));
                o.$dots = i.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active")
            }
        }, t.prototype.buildOut = function() {
            var t = this;
            t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each((function(t, i) {
                e(i).attr("data-slick-index", t).data("originalStyling", e(i).attr("style") || "")
            })), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable")
        }, t.prototype.buildRows = function() {
            var e, t, i, o, s, n, r, a = this;
            if (o = document.createDocumentFragment(), n = a.$slider.children(), a.options.rows > 1) {
                for (r = a.options.slidesPerRow * a.options.rows, s = Math.ceil(n.length / r), e = 0; e < s; e++) {
                    var l = document.createElement("div");
                    for (t = 0; t < a.options.rows; t++) {
                        var d = document.createElement("div");
                        for (i = 0; i < a.options.slidesPerRow; i++) {
                            var c = e * r + (t * a.options.slidesPerRow + i);
                            n.get(c) && d.appendChild(n.get(c))
                        }
                        l.appendChild(d)
                    }
                    o.appendChild(l)
                }
                a.$slider.empty().append(o), a.$slider.children().children().children().css({
                    width: 100 / a.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, t.prototype.checkResponsive = function(t, i) {
            var o, s, n, r = this,
                a = !1,
                l = r.$slider.width(),
                d = window.innerWidth || e(window).width();
            if ("window" === r.respondTo ? n = d : "slider" === r.respondTo ? n = l : "min" === r.respondTo && (n = Math.min(d, l)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
                for (o in s = null, r.breakpoints) r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
                null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || i) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t)), a = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t)), a = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t), a = s), t || !1 === a || r.$slider.trigger("breakpoint", [r, a])
            }
        }, t.prototype.changeSlide = function(t, i) {
            var o, s, n = this,
                r = e(t.currentTarget);
            switch (r.is("a") && t.preventDefault(), r.is("li") || (r = r.closest("li")), o = n.slideCount % n.options.slidesToScroll != 0 ? 0 : (n.slideCount - n.currentSlide) % n.options.slidesToScroll, t.data.message) {
                case "previous":
                    s = 0 === o ? n.options.slidesToScroll : n.options.slidesToShow - o, n.slideCount > n.options.slidesToShow && n.slideHandler(n.currentSlide - s, !1, i);
                    break;
                case "next":
                    s = 0 === o ? n.options.slidesToScroll : o, n.slideCount > n.options.slidesToShow && n.slideHandler(n.currentSlide + s, !1, i);
                    break;
                case "index":
                    var a = 0 === t.data.index ? 0 : t.data.index || r.index() * n.options.slidesToScroll;
                    n.slideHandler(n.checkNavigable(a), !1, i), r.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, t.prototype.checkNavigable = function(e) {
            var t, i;
            if (i = 0, e > (t = this.getNavigableIndexes())[t.length - 1]) e = t[t.length - 1];
            else
                for (var o in t) {
                    if (e < t[o]) {
                        e = i;
                        break
                    }
                    i = t[o]
                }
            return e
        }, t.prototype.cleanUpEvents = function() {
            var t = this;
            t.options.dots && null !== t.$dots && (e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler)), t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler), t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition)
        }, t.prototype.cleanUpSlideEvents = function() {
            var t = this;
            t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
        }, t.prototype.cleanUpRows = function() {
            var e, t = this;
            t.options.rows > 1 && ((e = t.$slides.children().children()).removeAttr("style"), t.$slider.empty().append(e))
        }, t.prototype.clickHandler = function(e) {
            !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
        }, t.prototype.destroy = function(t) {
            var i = this;
            i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), e(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each((function() {
                e(this).attr("style", e(this).data("originalStyling"))
            })), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, t || i.$slider.trigger("destroy", [i])
        }, t.prototype.disableTransition = function(e) {
            var t = this,
                i = {};
            i[t.transitionType] = "", !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
        }, t.prototype.fadeSlide = function(e, t) {
            var i = this;
            !1 === i.cssTransitions ? (i.$slides.eq(e).css({
                zIndex: i.options.zIndex
            }), i.$slides.eq(e).animate({
                opacity: 1
            }, i.options.speed, i.options.easing, t)) : (i.applyTransition(e), i.$slides.eq(e).css({
                opacity: 1,
                zIndex: i.options.zIndex
            }), t && setTimeout((function() {
                i.disableTransition(e), t.call()
            }), i.options.speed))
        }, t.prototype.fadeSlideOut = function(e) {
            var t = this;
            !1 === t.cssTransitions ? t.$slides.eq(e).animate({
                opacity: 0,
                zIndex: t.options.zIndex - 2
            }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
                opacity: 0,
                zIndex: t.options.zIndex - 2
            }))
        }, t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
            var t = this;
            null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
        }, t.prototype.focusHandler = function() {
            var t = this;
            t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", (function(i) {
                i.stopImmediatePropagation();
                var o = e(this);
                setTimeout((function() {
                    t.options.pauseOnFocus && (t.focussed = o.is(":focus"), t.autoPlay())
                }), 0)
            }))
        }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
            return this.currentSlide
        }, t.prototype.getDotCount = function() {
            var e = this,
                t = 0,
                i = 0,
                o = 0;
            if (!0 === e.options.infinite)
                if (e.slideCount <= e.options.slidesToShow) ++o;
                else
                    for (; t < e.slideCount;) ++o, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            else if (!0 === e.options.centerMode) o = e.slideCount;
            else if (e.options.asNavFor)
                for (; t < e.slideCount;) ++o, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            else o = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
            return o - 1
        }, t.prototype.getLeft = function(e) {
            var t, i, o, s, n = this,
                r = 0;
            return n.slideOffset = 0, i = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = i * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll != 0 && e + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (e > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (e - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (e - n.slideCount)) * i * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * i * -1))) : e + n.options.slidesToShow > n.slideCount && (n.slideOffset = (e + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (e + n.options.slidesToShow - n.slideCount) * i), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), t = !1 === n.options.vertical ? e * n.slideWidth * -1 + n.slideOffset : e * i * -1 + r, !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(e) : n.$slideTrack.children(".slick-slide").eq(e + n.options.slidesToShow), t = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(e) : n.$slideTrack.children(".slick-slide").eq(e + n.options.slidesToShow + 1), t = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, t += (n.$list.width() - o.outerWidth()) / 2)), t
        }, t.prototype.getOption = t.prototype.slickGetOption = function(e) {
            return this.options[e]
        }, t.prototype.getNavigableIndexes = function() {
            var e, t = this,
                i = 0,
                o = 0,
                s = [];
            for (!1 === t.options.infinite ? e = t.slideCount : (i = -1 * t.options.slidesToScroll, o = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); i < e;) s.push(i), i = o + t.options.slidesToScroll, o += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            return s
        }, t.prototype.getSlick = function() {
            return this
        }, t.prototype.getSlideCount = function() {
            var t, i, o = this;
            return i = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each((function(s, n) {
                if (n.offsetLeft - i + e(n).outerWidth() / 2 > -1 * o.swipeLeft) return t = n, !1
            })), Math.abs(e(t).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
        }, t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
            this.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(e)
                }
            }, t)
        }, t.prototype.init = function(t) {
            var i = this;
            e(i.$slider).hasClass("slick-initialized") || (e(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), t && i.$slider.trigger("init", [i]), !0 === i.options.accessibility && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
        }, t.prototype.initADA = function() {
            var t = this,
                i = Math.ceil(t.slideCount / t.options.slidesToShow),
                o = t.getNavigableIndexes().filter((function(e) {
                    return e >= 0 && e < t.slideCount
                }));
            t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), null !== t.$dots && (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each((function(i) {
                var s = o.indexOf(i);
                e(this).attr({
                    role: "tabpanel",
                    id: "slick-slide" + t.instanceUid + i,
                    tabindex: -1
                }), -1 !== s && e(this).attr({
                    "aria-describedby": "slick-slide-control" + t.instanceUid + s
                })
            })), t.$dots.attr("role", "tablist").find("li").each((function(s) {
                var n = o[s];
                e(this).attr({
                    role: "presentation"
                }), e(this).find("button").first().attr({
                    role: "tab",
                    id: "slick-slide-control" + t.instanceUid + s,
                    "aria-controls": "slick-slide" + t.instanceUid + n,
                    "aria-label": s + 1 + " of " + i,
                    "aria-selected": null,
                    tabindex: "-1"
                })
            })).eq(t.currentSlide).find("button").attr({
                "aria-selected": "true",
                tabindex: "0"
            }).end());
            for (var s = t.currentSlide, n = s + t.options.slidesToShow; s < n; s++) t.$slides.eq(s).attr("tabindex", 0);
            t.activateADA()
        }, t.prototype.initArrowEvents = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
                message: "previous"
            }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
                message: "next"
            }, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)))
        }, t.prototype.initDotEvents = function() {
            var t = this;
            !0 === t.options.dots && (e("li", t.$dots).on("click.slick", {
                message: "index"
            }, t.changeSlide), !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler)), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
        }, t.prototype.initSlideEvents = function() {
            var t = this;
            t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
        }, t.prototype.initializeEvents = function() {
            var t = this;
            t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(t.setPosition)
        }, t.prototype.initUI = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
        }, t.prototype.keyHandler = function(e) {
            var t = this;
            e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
                data: {
                    message: !0 === t.options.rtl ? "next" : "previous"
                }
            }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
                data: {
                    message: !0 === t.options.rtl ? "previous" : "next"
                }
            }))
        }, t.prototype.lazyLoad = function() {
            function t(t) {
                e("img[data-lazy]", t).each((function() {
                    var t = e(this),
                        i = e(this).attr("data-lazy"),
                        o = e(this).attr("data-srcset"),
                        s = e(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
                        r = document.createElement("img");
                    r.onload = function() {
                        t.animate({
                            opacity: 0
                        }, 100, (function() {
                            o && (t.attr("srcset", o), s && t.attr("sizes", s)), t.attr("src", i).animate({
                                opacity: 1
                            }, 200, (function() {
                                t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                            })), n.$slider.trigger("lazyLoaded", [n, t, i])
                        }))
                    }, r.onerror = function() {
                        t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, t, i])
                    }, r.src = i
                }))
            }
            var i, o, s, n = this;
            if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, s = Math.ceil(o + n.options.slidesToShow), !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)), i = n.$slider.find(".slick-slide").slice(o, s), "anticipated" === n.options.lazyLoad)
                for (var r = o - 1, a = s, l = n.$slider.find(".slick-slide"), d = 0; d < n.options.slidesToScroll; d++) r < 0 && (r = n.slideCount - 1), i = (i = i.add(l.eq(r))).add(l.eq(a)), r--, a++;
            t(i), n.slideCount <= n.options.slidesToShow ? t(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? t(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && t(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
        }, t.prototype.loadSlider = function() {
            var e = this;
            e.setPosition(), e.$slideTrack.css({
                opacity: 1
            }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
        }, t.prototype.next = t.prototype.slickNext = function() {
            this.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, t.prototype.orientationChange = function() {
            this.checkResponsive(), this.setPosition()
        }, t.prototype.pause = t.prototype.slickPause = function() {
            this.autoPlayClear(), this.paused = !0
        }, t.prototype.play = t.prototype.slickPlay = function() {
            var e = this;
            e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
        }, t.prototype.postSlide = function(t) {
            var i = this;
            i.unslicked || (i.$slider.trigger("afterChange", [i, t]), i.animating = !1, i.slideCount > i.options.slidesToShow && i.setPosition(), i.swipeLeft = null, i.options.autoplay && i.autoPlay(), !0 === i.options.accessibility && (i.initADA(), i.options.focusOnChange && e(i.$slides.get(i.currentSlide)).attr("tabindex", 0).focus()))
        }, t.prototype.prev = t.prototype.slickPrev = function() {
            this.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, t.prototype.preventDefault = function(e) {
            e.preventDefault()
        }, t.prototype.progressiveLazyLoad = function(t) {
            t = t || 1;
            var i, o, s, n, r, a = this,
                l = e("img[data-lazy]", a.$slider);
            l.length ? (i = l.first(), o = i.attr("data-lazy"), s = i.attr("data-srcset"), n = i.attr("data-sizes") || a.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function() {
                s && (i.attr("srcset", s), n && i.attr("sizes", n)), i.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === a.options.adaptiveHeight && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, i, o]), a.progressiveLazyLoad()
            }, r.onerror = function() {
                t < 3 ? setTimeout((function() {
                    a.progressiveLazyLoad(t + 1)
                }), 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, i, o]), a.progressiveLazyLoad())
            }, r.src = o) : a.$slider.trigger("allImagesLoaded", [a])
        }, t.prototype.refresh = function(t) {
            var i, o, s = this;
            o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), i = s.currentSlide, s.destroy(!0), e.extend(s, s.initials, {
                currentSlide: i
            }), s.init(), t || s.changeSlide({
                data: {
                    message: "index",
                    index: i
                }
            }, !1)
        }, t.prototype.registerBreakpoints = function() {
            var t, i, o, s = this,
                n = s.options.responsive || null;
            if ("array" === e.type(n) && n.length) {
                for (t in s.respondTo = s.options.respondTo || "window", n)
                    if (o = s.breakpoints.length - 1, n.hasOwnProperty(t)) {
                        for (i = n[t].breakpoint; o >= 0;) s.breakpoints[o] && s.breakpoints[o] === i && s.breakpoints.splice(o, 1), o--;
                        s.breakpoints.push(i), s.breakpointSettings[i] = n[t].settings
                    }
                s.breakpoints.sort((function(e, t) {
                    return s.options.mobileFirst ? e - t : t - e
                }))
            }
        }, t.prototype.reinit = function() {
            var t = this;
            t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
        }, t.prototype.resize = function() {
            var t = this;
            e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout((function() {
                t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
            }), 50))
        }, t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, i) {
            var o = this;
            if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : o.slideCount - 1 : !0 === t ? --e : e, o.slideCount < 1 || e < 0 || e > o.slideCount - 1) return !1;
            o.unload(), !0 === i ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(e).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit()
        }, t.prototype.setCSS = function(e) {
            var t, i, o = this,
                s = {};
            !0 === o.options.rtl && (e = -e), t = "left" == o.positionProp ? Math.ceil(e) + "px" : "0px", i = "top" == o.positionProp ? Math.ceil(e) + "px" : "0px", s[o.positionProp] = e, !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {}, !1 === o.cssTransitions ? (s[o.animType] = "translate(" + t + ", " + i + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + t + ", " + i + ", 0px)", o.$slideTrack.css(s)))
        }, t.prototype.setDimensions = function() {
            var e = this;
            !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
                padding: "0px " + e.options.centerPadding
            }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
                padding: e.options.centerPadding + " 0px"
            })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
            var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
            !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
        }, t.prototype.setFade = function() {
            var t, i = this;
            i.$slides.each((function(o, s) {
                t = i.slideWidth * o * -1, !0 === i.options.rtl ? e(s).css({
                    position: "relative",
                    right: t,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0
                }) : e(s).css({
                    position: "relative",
                    left: t,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0
                })
            })), i.$slides.eq(i.currentSlide).css({
                zIndex: i.options.zIndex - 1,
                opacity: 1
            })
        }, t.prototype.setHeight = function() {
            var e = this;
            if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                e.$list.css("height", t)
            }
        }, t.prototype.setOption = t.prototype.slickSetOption = function() {
            var t, i, o, s, n, r = this,
                a = !1;
            if ("object" === e.type(arguments[0]) ? (o = arguments[0], a = arguments[1], n = "multiple") : "string" === e.type(arguments[0]) && (o = arguments[0], s = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), "single" === n) r.options[o] = s;
            else if ("multiple" === n) e.each(o, (function(e, t) {
                r.options[e] = t
            }));
            else if ("responsive" === n)
                for (i in s)
                    if ("array" !== e.type(r.options.responsive)) r.options.responsive = [s[i]];
                    else {
                        for (t = r.options.responsive.length - 1; t >= 0;) r.options.responsive[t].breakpoint === s[i].breakpoint && r.options.responsive.splice(t, 1), t--;
                        r.options.responsive.push(s[i])
                    }
            a && (r.unload(), r.reinit())
        }, t.prototype.setPosition = function() {
            var e = this;
            e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
        }, t.prototype.setProps = function() {
            var e = this,
                t = document.body.style;
            e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
        }, t.prototype.setSlideClasses = function(e) {
            var t, i, o, s, n = this;
            if (i = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(e).addClass("slick-current"), !0 === n.options.centerMode) {
                var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
                t = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (e >= t && e <= n.slideCount - 1 - t ? n.$slides.slice(e - t + r, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + e, i.slice(o - t + 1 + r, o + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? i.eq(i.length - 1 - n.options.slidesToShow).addClass("slick-center") : e === n.slideCount - 1 && i.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(e).addClass("slick-center")
            } else e >= 0 && e <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(e, e + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= n.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = !0 === n.options.infinite ? n.options.slidesToShow + e : e, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - e < n.options.slidesToShow ? i.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : i.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
            "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad()
        }, t.prototype.setupInfinite = function() {
            var t, i, o, s = this;
            if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (i = null, s.slideCount > s.options.slidesToShow)) {
                for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, t = s.slideCount; t > s.slideCount - o; t -= 1) i = t - 1, e(s.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
                for (t = 0; t < o + s.slideCount; t += 1) i = t, e(s.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
                s.$slideTrack.find(".slick-cloned").find("[id]").each((function() {
                    e(this).attr("id", "")
                }))
            }
        }, t.prototype.interrupt = function(e) {
            e || this.autoPlay(), this.interrupted = e
        }, t.prototype.selectHandler = function(t) {
            var i = this,
                o = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
                s = parseInt(o.attr("data-slick-index"));
            s || (s = 0), i.slideCount <= i.options.slidesToShow ? i.slideHandler(s, !1, !0) : i.slideHandler(s)
        }, t.prototype.slideHandler = function(e, t, i) {
            var o, s, n, r, a, l = null,
                d = this;
            if (t = t || !1, !(!0 === d.animating && !0 === d.options.waitForAnimate || !0 === d.options.fade && d.currentSlide === e))
                if (!1 === t && d.asNavFor(e), o = e, l = d.getLeft(o), r = d.getLeft(d.currentSlide), d.currentLeft = null === d.swipeLeft ? r : d.swipeLeft, !1 === d.options.infinite && !1 === d.options.centerMode && (e < 0 || e > d.getDotCount() * d.options.slidesToScroll)) !1 === d.options.fade && (o = d.currentSlide, !0 !== i ? d.animateSlide(r, (function() {
                    d.postSlide(o)
                })) : d.postSlide(o));
                else if (!1 === d.options.infinite && !0 === d.options.centerMode && (e < 0 || e > d.slideCount - d.options.slidesToScroll)) !1 === d.options.fade && (o = d.currentSlide, !0 !== i ? d.animateSlide(r, (function() {
                d.postSlide(o)
            })) : d.postSlide(o));
            else {
                if (d.options.autoplay && clearInterval(d.autoPlayTimer), s = o < 0 ? d.slideCount % d.options.slidesToScroll != 0 ? d.slideCount - d.slideCount % d.options.slidesToScroll : d.slideCount + o : o >= d.slideCount ? d.slideCount % d.options.slidesToScroll != 0 ? 0 : o - d.slideCount : o, d.animating = !0, d.$slider.trigger("beforeChange", [d, d.currentSlide, s]), n = d.currentSlide, d.currentSlide = s, d.setSlideClasses(d.currentSlide), d.options.asNavFor && (a = (a = d.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(d.currentSlide), d.updateDots(), d.updateArrows(), !0 === d.options.fade) return !0 !== i ? (d.fadeSlideOut(n), d.fadeSlide(s, (function() {
                    d.postSlide(s)
                }))) : d.postSlide(s), void d.animateHeight();
                !0 !== i ? d.animateSlide(l, (function() {
                    d.postSlide(s)
                })) : d.postSlide(s)
            }
        }, t.prototype.startLoad = function() {
            var e = this;
            !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
        }, t.prototype.swipeDirection = function() {
            var e, t, i, o, s = this;
            return e = s.touchObject.startX - s.touchObject.curX, t = s.touchObject.startY - s.touchObject.curY, i = Math.atan2(t, e), (o = Math.round(180 * i / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 || o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical"
        }, t.prototype.swipeEnd = function(e) {
            var t, i, o = this;
            if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;
            if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;
            if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
                switch (i = o.swipeDirection()) {
                    case "left":
                    case "down":
                        t = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
                        break;
                    case "right":
                    case "up":
                        t = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1
                }
                "vertical" != i && (o.slideHandler(t), o.touchObject = {}, o.$slider.trigger("swipe", [o, i]))
            } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {})
        }, t.prototype.swipeHandler = function(e) {
            var t = this;
            if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
                case "start":
                    t.swipeStart(e);
                    break;
                case "move":
                    t.swipeMove(e);
                    break;
                case "end":
                    t.swipeEnd(e)
            }
        }, t.prototype.swipeMove = function(e) {
            var t, i, o, s, n, r, a = this;
            return n = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!a.dragging || a.scrolling || n && 1 !== n.length) && (t = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== n ? n[0].pageX : e.clientX, a.touchObject.curY = void 0 !== n ? n[0].pageY : e.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && r > 4 ? (a.scrolling = !0, !1) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = r), i = a.swipeDirection(), void 0 !== e.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0, e.preventDefault()), s = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (s = a.touchObject.curY > a.touchObject.startY ? 1 : -1), o = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, !1 === a.options.infinite && (0 === a.currentSlide && "right" === i || a.currentSlide >= a.getDotCount() && "left" === i) && (o = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = t + o * s : a.swipeLeft = t + o * (a.$list.height() / a.listWidth) * s, !0 === a.options.verticalSwiping && (a.swipeLeft = t + o * s), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))))
        }, t.prototype.swipeStart = function(e) {
            var t, i = this;
            if (i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow) return i.touchObject = {}, !1;
            void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, i.dragging = !0
        }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
            var e = this;
            null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
        }, t.prototype.unload = function() {
            var t = this;
            e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, t.prototype.unslick = function(e) {
            var t = this;
            t.$slider.trigger("unslick", [t, e]), t.destroy()
        }, t.prototype.updateArrows = function() {
            var e = this;
            Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode || e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode) && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, t.prototype.updateDots = function() {
            var e = this;
            null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
        }, t.prototype.visibility = function() {
            var e = this;
            e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
        }, e.fn.slick = function() {
            var e, i, o = this,
                s = arguments[0],
                n = Array.prototype.slice.call(arguments, 1),
                r = o.length;
            for (e = 0; e < r; e++)
                if ("object" == typeof s || void 0 === s ? o[e].slick = new t(o[e], s) : i = o[e].slick[s].apply(o[e].slick, n), void 0 !== i) return i;
            return o
        }
    }));