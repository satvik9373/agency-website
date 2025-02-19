/*@cc_on;document.querySelectorAll||(document.querySelectorAll=function(e){var i,t=document.createElement('style'),c=[];for(document.documentElement.firstChild.appendChild(t),document._qsa=[],t.styleSheet.cssText=e+'{x-qsa:expression(document._qsa && document._qsa.push(this))}',window.scrollBy(0,0),t.parentNode.removeChild(t);document._qsa.length;)(i=document._qsa.shift()).style.removeAttribute('x-qsa'),c.push(i);return document._qsa=null,c}),document.querySelector||(document.querySelector=function(e){var t=document.querySelectorAll(e);return t.length?t[0]:null});@*/ ! function() {
    var t = function(e) {
            return e.replace(/^\s+|\s+$/g, '')
        },
        i = function(e) {
            return new RegExp('(^|\\s+)' + e + '(\\s+|$)')
        },
        c = function(e, t, i) {
            for (var c = 0; c < e.length; c++) t.call(i, e[c])
        };

    function e(e) {
        this.element = e
    };
    e.prototype = {
        add: function() {
            c(arguments, function(e) {
                this.contains(e) || (this.element.className = t(this.element.className + ' ' + e))
            }, this)
        },
        remove: function() {
            c(arguments, function(e) {
                this.element.className = t(this.element.className.replace(i(e), ' '))
            }, this)
        },
        toggle: function(e) {
            return this.contains(e) ? (this.remove(e), !1) : (this.add(e), !0)
        },
        contains: function(e) {
            return i(e).test(this.element.className)
        },
        item: function(e) {
            return this.element.className.split(/\s+/)[e] || null
        },
        replace: function(e, t) {
            this.remove(e), this.add(t)
        }
    }, 'classList' in Element.prototype || Object.defineProperty(Element.prototype, 'classList', {
        get: function() {
            return new e(this)
        }
    }), window.DOMTokenList && !DOMTokenList.prototype.replace && (DOMTokenList.prototype.replace = e.prototype.replace)
}();
Array.prototype.indexOf || (Array.prototype.indexOf = function(e, t) {
    'use strict';
    var i;
    if (null == this) throw new TypeError('"this" is null or not defined');
    var n = Object(this),
        o = n.length >>> 0;
    if (0 === o) return -1;
    var c = 0 | t;
    if (c >= o) return -1;
    for (i = Math.max(c >= 0 ? c : o - Math.abs(c), 0); i < o; i++)
        if (i in n && n[i] === e) return i;
    return -1
});
if (!window.CookieScriptData) {
    window.CookieScriptData = {
        useGoogleTemplate: !1,
        isVerifyGoogleConsentMode: !1,
    }
};
if (!(!!window.CookieScript && !!window.CookieScript.instance)) {
    window.CookieScript = function() {
        this.version = 20240422;
        this.initTime = null;
        this.saveTime = '2024-09-19 15:02:44';
        this.consentTime = 1720426390;
        this.onAcceptAll = function() {};
        this.onAccept = function() {};
        this.onReject = function() {};
        this.onClose = function() {};
        var f = {
            core: null,
            other: null
        };

        function Zt(e) {
            if (typeof e === 'function') {
                f.other = e
            } else if (typeof e === 'object') {
                if (e.core) {
                    f.core = e.fn
                }
            }
        };
        Object.defineProperties(this, {
            onChangeIABCategoryMap: {
                set: Zt,
                enumerable: !1,
                configurable: !1
            },
        });

        function wi(e) {
            if (f.core && typeof f.core === 'function') {
                f.core(e)
            };
            if (f.other && typeof f.other === 'function') {
                f.other(e)
            }
        };
        this.currentState = function() {
            var e = {
                action: d('action')
            };
            var t = d('key');
            if (t) {
                e.key = t
            };
            e.categories = P();
            return e
        };
        this.expireDays = function() {
            return Be
        };
        this.hash = function() {
            return Wt
        };
        this.show = function() {
            L()
        };
        this.hide = function() {
            q();
            S()
        };
        this.categories = function() {
            return o
        };
        this.getCookieValueForQueryArg = function() {
            var e = x(),
                t = c.get(e);
            if (t) {
                return e + '=' + encodeURIComponent(t)
            };
            return ''
        };
        this.dispatchEventNames = [];
        this.currentLang = null;
        this.iabCMP = null;
        this.tcString = undefined;
        this.googleAcString = undefined;
        this.getCMPId = function() {
            return Number(Ie)
        };
        this.getIABSdkUrl = function() {
            return Ne
        };
        this.getIABVendorsIds = function() {
            return Pe
        };
        this.getGoogleVendorsIds = function() {
            return Me
        };
        this.getIABLegIntPurposes = function() {
            return Ge
        };
        this.isCheckedIABCategoryMap = function() {
            return !1
        };
        this.IABEnableAdvertiserConsentMode = function() {
            return !1
        };
        this.getIABText = function() {
            return Fe
        };
        this.getIABTextTranslations = function() {
            return He
        };
        this.showIABSpecificTab = function(e) {
            return !1
        };
        this.setCMPCookie = function(e) {
            this.tcString = e;
            n('CMP', e)
        };
        this.getCMPCookie = function() {
            var e = d('CMP');
            this.tcString = e;
            return e
        };
        this.setGoogleACStringCookie = function(e) {
            this.googleAcString = e;
            n('GoogleACString', e)
        };
        this.getGoogleACStringCookie = function() {
            var e = d('GoogleACString');
            this.googleAcString = e;
            return e
        };
        this.forceDispatchCSLoadEvent = function() {
            h('CookieScriptLoaded')
        };
        this.applyTranslation = function(e) {
            z(e)
        };
        this.applyCurrentCookiesState = function() {
            J()
        };
        this.applyTranslationByCode = function(e, t) {
            if (t === undefined) {
                t = {
                    rebuildIab: !!document.querySelector('div[data-cs-maintab-content="setting_advertising"]')
                }
            };
            Re(e, t)
        };
        this.acceptAllAction = function() {
            ke(!0);
            var e = 'acceptall',
                t = O(o),
                i = k();
            q();
            n('action', 'accept');
            m();
            U(o);
            W(o);
            Y(o);
            y(!0, o);
            n('categories', JSON.stringify(t));
            b(!0);
            u(!0);
            M('accept', t.join(','));
            if (i) {
                a(e, '')
            } else {
                a('first' + e, '')
            };
            E(!0);
            S();
            dt();
            K();
            V();
            Z('selectAll')
        };
        this.acceptAction = function(e, t) {
            var r = k(),
                i;
            if (typeof e === 'undefined') {
                i = be();
                U(i)
            } else {
                if (Q) {
                    e.push('strict')
                };
                i = v(e);
                if (t === 'undefined') {
                    R(i)
                }
            };
            var c = O(i);
            if (i.length === o.length) {
                m();
                b(!0);
                u(!0)
            } else {
                m(i);
                b(!0, i);
                u(!0, i)
            };
            y(!0, i);
            W(i);
            Y(i);
            I(i);
            N(i);
            if (c.length > 0) {
                n('action', 'accept');
                n('categories', JSON.stringify(c));
                M('accept', c.join(','));
                if (r) {
                    a('accept', c.join(','))
                } else {
                    a('firstaccept', c.join(','))
                }
            } else {
                n('action', 'reject');
                n('categories', []);
                M('reject', '');
                if (r) {
                    a('reject', '')
                } else {
                    a('firstreject', '')
                }
            };
            if (t !== 'undefined' && t === !0) {
                return
            };
            Z('setOnlyChecked');
            q();
            E(i.length === o.length);
            S();
            pt(i);
            K();
            V()
        };
        this.rejectAllAction = function() {
            ke(!1);
            U([]);
            var e = k();
            if (e) {
                a('reject', '')
            } else {
                a('firstreject', '')
            };
            n('action', 'reject');
            n('categories', JSON.stringify([]));
            M('reject', '');
            I();
            N();
            q();
            E(!1);
            S();
            lt();
            K();
            y(!1);
            V();
            b(!1);
            u(!1);
            Z('rejectAll')
        };
        this.demoLoadView = function() {
            l('Warning is real site script')
        };
        var t = this,
            Ut = '\n    <style data-type="cookiescriptstyles">\n      #cookiescript_injected {\r\n    background-color: #ffffff;\r\n    z-index: 999997;\r\n    opacity: 1;\r\n    font-size: 14px;\r\n    font-weight: normal;\r\n    font-family: \'Open Sans\', Arial, \'Trebuchet MS\', \'Segoe UI\', \'Helvetica\', sans-serif;\r\n    box-shadow: 1px 2px 8px 0 rgba(0, 0, 0, 0.35);\r\n    color: #000000;\r\n    box-sizing: border-box;\r\n}\r\n.cookiescript_checkbox_label {\r\n    cursor: pointer;\r\n    display: flex;\r\n    align-items: center;\r\n    padding:0 4px;\r\n    line-height: 1.5;\r\n    margin:0;\r\n\ttext-align: left;\r\n}\r\n.cookiescript_pre_header {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n    position: absolute;\r\n    top: 15px;\r\n    right: 15px;\r\n}\r\n#cookiescript_close {\r\n    font-size: 29px;\r\n    line-height: 13px;\r\n    cursor: pointer;\r\n    color: #000000;\r\n    height: 15px;\r\n    width: 15px;\r\n    margin: 0 0 0 10px;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    letter-spacing: 0;\r\n    font-family: \'Trebuchet MS\', \'Arial\', sans-serif;\r\n    font-weight: 100;\r\n    opacity: 0.85;\r\n    z-index: 999999;\r\n    position: relative;\r\n    top: -1px;\r\n}\r\n\r\n#cookiescript_buttons {\r\n    display: flex;\r\n    flex-direction: row;\r\n    font-weight: 700;\r\n}\r\n#cookiescript_manage_wrap {\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n    font-size: 12px;\r\n    letter-spacing: 0.4px;\r\n    font-weight: 700;\r\n}\r\n#cookiescript_manage {\r\n    display: inline;\r\n    cursor: pointer;\r\n    color: #000000;\r\n    opacity:0.85;\r\n    margin-left:-15px;\r\n}\r\n#cookiescript_manage #cookiescript_manageicon .cookiescript_gear {\r\n    fill: #000000;\r\n}\r\n#cookiescript_manage:hover #cookiescript_manageicon .cookiescript_gear {\r\n    fill: #000000;;\r\n}\r\n\r\nsvg#cookiescript_manageicon {\r\n    width: 15px;\r\n    height: 15px;\r\n    display: inline;\r\n    margin: 0 5px 0 0;\r\n    padding: 0;\r\n    position: relative;\r\n    top: 3px;\r\n    vertical-align: baseline;\r\n}\r\n#cookiescript_header {\r\n    background-color: transparent;\r\n    z-index: 999998;\r\n    color: #000000;\r\n    font-size: 18px;\r\n    line-height: 1.3;\r\n    font-weight: 600;\r\n    letter-spacing: 0.4px;\r\n    opacity:1;\r\n}\r\n.cookiescript_checkbox {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\ninput.cookiescript_checkbox_input {\r\n}\r\nspan.cookiescript_checkbox_text {\r\n    display: inline-block;\r\n    font-size: 12px;\r\n    margin: 0;\r\n    text-transform: uppercase;\r\n    font-weight: 600;\r\n    color: #000000;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n#cookiescript_save {\r\n    border: 0;\r\n    transition: all 0.25s ease 0s;\r\n    background-color: #000000;\r\n    color: #ffffff;\r\n    text-transform: uppercase;\r\n    font-size: 12px;\r\n    text-align: center;\r\n    line-height: 3.2;\r\n    letter-spacing: 0.4px;\r\n}\r\n\/*IE 9 fixes*\/\r\n@media screen and (min-width:0\\0) and (min-resolution: .001dpcm) {\r\n    .cookiescript_checkbox_label {\r\n        position: relative;\r\n        top:-10px;\r\n    }\r\n    #cookiescript_accept, #cookiescript_reject, #cookiescript_save{\r\n    \tdisplay: inline-block;\r\n    }\r\n    #cookiescript_buttons{\r\n    \ttext-align:center;\r\n    }\r\n}\r\n#cookiescript_save{\r\n    display: none;\r\n}\r\n#cookiescript_reject {\r\n    border: 1px solid #5b5b5b;\r\n    text-align: center;\r\n    line-height: 3;\r\n    font-size: 12px;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.4px;\r\n    color: #5b5b5b;\r\n    background: #ffffff;\r\n}\r\n#cookiescript_accept {\r\n\ttransition: all 0.25s ease 0s;\r\n\ttext-transform: uppercase;\r\n\tfont-size: 12px;\r\n\ttext-align: center;\r\n\tletter-spacing: 0.4px;\r\n\tborder: 0;\r\n\tbackground-color: #000000;\r\n\tcolor: #ffffff;\r\n\tline-height: 3.2;\r\n}\r\n\r\n#cookiescript_accept, #cookiescript_reject, #cookiescript_save {\r\n    font-weight: 700;\r\n    cursor: pointer;\r\n    white-space: nowrap;\r\n    transition-duration: 100ms;\r\n    transition-timing-function: ease-in-out;\r\n    min-width: 103px;\r\n}\r\n.cookiescript_bigger {\r\n    transform: scale(1.1);\r\n}\r\n#cookiescript_link {\r\n    text-decoration: none;\r\n    color: #000000;\r\n    font-size: 11px;\r\n    text-align: center;\r\n    font-weight: 400;\r\n    text-transform: uppercase;\r\n    opacity: 0.8;\r\n\tdisplay:inline !important;\r\n}\r\n\r\n#cookiescript_readmore,\r\n#cookiescript_reportlink,\r\n#cookiescript_cookiescriptlink {\r\n    border: 0;\r\n    padding: 0;\r\n    cursor: pointer;\r\n    margin: 0;\r\n    transition: all 100ms ease 0s;\r\n    background-color: transparent;\r\n    display: inline;\r\n    font-size: 12px;\r\n    text-decoration: none;\r\n}\r\n\r\n#cookiescript_readmore{\r\n    color: #000000;\r\n}\r\n#cookiescript_reportlink,\r\n#cookiescript_cookiescriptlink {\r\n    color: #000000;\r\n}\r\n\r\n\r\n#cookiescript_readmore:hover,\r\n#cookiescript_reportlink:hover,\r\n#cookiescript_cookiescriptlink:hover {\r\n    text-decoration: underline;\r\n    color: #000000;\r\n\r\n}\r\n\r\n#cookiescript_description {\r\n    color: #000000;\r\n    font-size: 12px;\r\n    letter-spacing: 0.3px;\r\n    line-height: 1.65;\r\n    font-weight: 400;\r\n}\r\n#cookiescript_checkboxs {\r\n}\r\n#cookiescript_close:hover,\r\n#cookiescript_manage:hover,\r\n#cookiescript_link:hover\r\n{\r\n    opacity: 1;\r\n}\r\n\r\n#cookiescript_reject:hover {\r\n    background-color: #ebebeb;\r\n}\r\n\r\n#cookiescript_accept:hover{\r\n\tbackground-color: #151515;\r\n}\r\n#cookiescript_save:hover {\r\n    background-color: #151515;\r\n}\r\n\r\n#cookiescript_readmore:hover,\r\n#cookiescript_reportlink:hover,\r\n#cookiescript_cookiescriptlink:hover\r\n{\r\n    color: #151515;\r\n}\r\n\r\n@media print{\r\n    #cookiescript_injected{\r\n        display:none;\r\n    }\r\n}\r\n\r\n\r\n\r\n\n#cookiescript_injected_fsd {\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(17, 17, 17, 0.5) !important;\n    z-index: 999996;\n\toverflow-y: auto;\n}\n\n#cookiescript_fsd_wrapper {\n    \/*animation: expandBox 2s forwards;*\/\n    max-width: 950px;\n\twidth: 95%;\n    margin: 0 auto 3% auto;\n\ttop: 5%;\n    line-height: 18px;\n    letter-spacing: normal;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n\tbackground-color: #f3f3f3;\n    z-index: 999997;\n    opacity: 1;\n    font-size: 14px;\n    font-weight: normal;\n    font-family: \'Open Sans\', Arial, \'Trebuchet MS\', \'Segoe UI\', \'Helvetica\', sans-serif;\n    box-shadow: 1px 2px 8px 0 rgba(0, 0, 0, 0.35);\n    color: #000000;\n    align-items: center;\n    overflow: visible;\n    outline: none;\n    max-height: 90%;\n    box-sizing: border-box;\n\tcursor: default;\n\tmin-height: 500px;\n}\n@keyframes expandBox {\n    from {\n        width: 10%;\n        margin-left:0;\n        overflow: hidden;\n        top:90%;\n        height: 5%;\n    }\n    to {\n        width: 95%;\n        margin-left:auto;\n        overflow: hidden;\n        top:5%;\n        height: 90%;\n    }\n}\n\n.cookiescript_fsd_header {\n\tmin-height: 57px;\n\tborder-bottom: 1px solid #e2e2e2;\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tbackground-color: #ffffff;\n}\n.cookiescript_fsd_logo_a{\n\tmargin-left: 23px;\n    text-decoration: none;\n}\n.cookiescript_fsd_logo{\n\theight: 27px;\n\twidth: auto;\n\tdisplay: block;\n\tmax-width: 100%;\n}\n.cookiescript_fsd_powered {\n    color: #666666;\n    font-size: 11px;\n    position: relative;\n    left: 31px;\n    top: 0;\n    line-height: 1;\n    text-decoration: none;\n    display: block;\n    height: 8px;\n}\n.cookiescript_fsd_language_drop_down {\n    position: absolute;\n    right: 67px;\n\ttop: 19px;\n}\n\n.cookiescript_fsd_main {\n    width: 100%;\n\tbackground-color: #ffffff;\n}\n\n.cookiescript_fsd_main_info {\n    padding: 20px 53px 30px 53px;\n    }\n\n.cookiescript_fsd_title {\n    background-color: transparent;\n    z-index: 999998;\n    color: #000000;\n    font-size: 24px;\n    line-height: 1.3;\n    font-weight: 700;\n    opacity:1;\n}\n\n.cookiescript_fsd_description {\n    color: #000000;\n    font-size: 14px;\n    line-height: 1.6;\n    font-weight: 400;\n    opacity: 0.85;\n\tmargin-top: 9px;\n}\n\n\n#cookiescript_fsd_wrapper #cookiescript_readmore{\n\tfont-size: 13px;\n\tcolor: #999999;\n\ttext-decoration: none;\n}\n#cookiescript_fsd_wrapper #cookiescript_readmore:hover{\n\ttext-decoration: underline;\n}\n\n.cookiescript_fsd_tabs {\n    display: flex;\n    justify-content: space-around;\n    align-items: stretch;\n\tflex-direction: row;\n    width: 100%;\n}\n\n.cookiescript_fsd_tabs > div {\n\tcursor: pointer;\n\twidth: 50%;\n\ttext-transform: uppercase;\n\tfont-size: 16px;\n\ttext-align: center;\n\tline-height: 1.6;\n\tfont-weight: bold;\n\tborder-top: 2px solid transparent;\n\ttransition: all 300ms ease 0s;\n\tpadding: 10px 20px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tbackground-color: #ffffff;\n}\n\n.cookiescript_fsd_tabs > .cookiescript_active {\n    border-top: 2px solid #999999;\n    background-color: #f3f3f3;\n    color: #999999;\n}\n\n.cookiescript_fsd_tabs_content {\n    background-color: #f3f3f3;\n    padding: 5px 50px 10px 50px;\n    width: 100%;\n    overflow-y: auto;\n    box-sizing: border-box;\n    flex-grow: 1;\n\t--scrollbar-width: 8px;\n\t--mask-height: 35px;\n\t--mask-image-content: linear-gradient( to bottom, transparent, black var(--mask-height), black calc(100% - var(--mask-height)), transparent );\n\t--mask-size-content: calc(100% - var(--scrollbar-width)) 100%;\n\t--mask-image-scrollbar: linear-gradient(black, black);\n\t--mask-size-scrollbar: var(--scrollbar-width) 100%;\n\tmask-image: var(--mask-image-content), var(--mask-image-scrollbar);\n\tmask-size: var(--mask-size-content), var(--mask-size-scrollbar);\n\tmask-position: 0 0, 100% 0;\n\tmask-repeat: no-repeat, no-repeat;\n\t-webkit-mask-image: var(--mask-image-content), var(--mask-image-scrollbar);\n\t-webkit-mask-size: var(--mask-size-content), var(--mask-size-scrollbar);\n\t-webkit-mask-position: 0 0, 100% 0;\n\t-webkit-mask-repeat: no-repeat, no-repeat;\n}\n\n.cookiescript_fsd_tabs_content .cookiescript_hidden {\n    opacity: 0;\n    height: 0 !important;\n    overflow: hidden;\n\tpadding: 0 !important;\n\tmin-height: 0 !important;\n}\n\n.cookiescript_fsd_category {\n    border-bottom: 1px solid #e2e2e2;\n    padding-top: 23px;\n    padding-bottom: 17px;\n    display: flex;\n    flex-direction: column;\n}\n\n.cookiescript_fsd_category:last-child {\n    border-bottom: 0;\n}\n\n.cookiescript_fsd_category .cookiescript_hidden {\n    opacity: 0;\n\toverflow-y: auto;\n\toverflow-x: hidden;\n\tpadding: 0 !important;\n\tmax-height: 0;\n\tmargin: 0;\n\theight: auto !important;\n\t\ttransition: max-height 300ms ease 200ms, opacity ease 200ms, margin-top 100ms ease 100ms;\n\t}\n\n.cookiescript_fsd_category_main {\n    align-items: center;\n    display: flex;\n    justify-content: space-between;\n}\n\n.cookiescript_fsd_category_info {\n    flex: 9;\n    padding-right: 10px;\n}\n\n.cookiescript_fsd_category_control {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n}\n\n.cookiescript_fsd__category_name {\n    font-size: 16px;\n    font-weight: 700;\n\tmargin-bottom: 6px;\n}\n\n.cookiescript_category_description {\n\tfont-size: 13px;\n\tpadding-bottom: 5px;\n\tline-height: 1.6;\n}\n\n.cookiescript_fsd_cookies {\n\tborder: 1px solid #e2e2e2;\n\tborder-radius: 10px;\n\toverflow-y: auto;\n\tmargin-top: 15px;\n\tmax-height: 222px;\n\t\ttransition: max-height 300ms ease, opacity 200ms ease 300ms, margin-top 100ms ease 100ms;\n\t}\n\n.cookiescript_fsd_cookies caption {\n    font-weight: 600;\n    padding: 10px;\n    text-align: left;\n    color: #000000;\n    caption-side: top;\n}\n\n\n.cookiescript_fsd_cookies_control {\n    color: #999999;\n    text-transform: uppercase;\n    font-size: 14px;\n    font-weight: 700;\n    position: relative;\n    display: flex;\n    align-items: center;\n    margin-right: auto;\n    margin-top: 10px;\n    cursor: pointer;\n}\n\n.cookiescript_fsd_cookies_control .cookiescript_hidden {\n    display: none;\n}\n\n.cookiescript_fsd_cookies_control  span{\n\tmargin-right: 7px;\n}\n\n.cookiescript_fsd_cookies_control svg {\n    width: 10px;\n    height: 10px;\n    font-size: 10px;\n}\n\n.cookiescript_fsd_cookies_control.active svg {\n    width: 10px;\n    height: 10px;\n    font-size: 10px;\n    transform: rotate(180deg);\n}\n\n.cookiescript_fsd_cookies_table {\n    width: 100%;\n}\n\n.cookiescript_fsd_cookies_table,\n.cookiescript_fsd_cookies_table tbody,\n.cookiescript_fsd_cookies_table thead,\n.cookiescript_fsd_cookies_table tr,\n.cookiescript_fsd_cookies_table th,\n.cookiescript_fsd_cookies_table td {\n    margin: 0;\n    padding: 0;\n    font: inherit;\n    vertical-align: baseline;\n    background-color: #ffffff;\n    border-spacing: 0;\n    border-collapse: collapse;\n}\n\n\n.cookiescript_fsd_cookies_table tr:last-child td{\n    border-bottom: 0;\n}\n\n.cookiescript_fsd_cookies_table td, .cookiescript_fsd_cookies_table th {\n    white-space: normal;\n    font-size: 13px;\n    text-align: left;\n    margin: 0;\n}\n.cookiescript_fsd_cookies_table th {\n\tfont-weight: 600;\n\tpadding: 8px 8px;\n\tline-height: 1.4;\n\tword-break: keep-all;\n\tvertical-align: middle;\n}\n\n.cookiescript_fsd_cookies_table td {\n\tpadding: 7px 8px;\n\tline-height: 1.6;\n\tvertical-align: top;\n\tfont-weight: 400;\n\tborder: 0;\n\tborder-top: 1px solid #e2e2e2;\n\tcolor: #000000;\n}\n\n.cookiescript_fsd_cookies_table th:last-child {\n    padding-right: 10px;\n}\n\n    .cookiescript_fsd_cookies_table td:nth-child(1), .cookiescript_fsd_cookies_table th:nth-child(1) {\n    padding-left: 15px;\n    word-break: normal;\n}\n\n.cookiescript_fsd_cookies_table td:nth-child(2) {\n    color: #999999;\n}\n\n.cookiescript_fsd_cookies_table td:nth-child(3), .cookiescript_fsd_cookies_table th:nth-child(3) {\n    text-align: center;\n}\n\n.cookiescript_fsd_cookies_table.cookiescript_fsd_storage_table td:nth-child(2) {\n     color: #000000;\n}\n\n.cookiescript_vendor_name a{\n\ttext-decoration: underline;\n\tfont-weight: bold;\n\tcolor: #999999;\n\tline-height: normal;\n\tborder: 0;\n\tpadding: 0;\n\tmargin: 0;\n\tbackground: transparent;\n\tfont-size: 13px;\n}\n.cookiescript_vendor_name a:hover {\n\ttext-decoration: underline;\n\tcolor: #999999;\n}\n\n.cookiescript_fsd_footer {\n    border-top: 1px solid #e2e2e2;\n    width: 100%;\n\tbackground-color: #ffffff;\n    position: relative;\n}\n#cookiescript_fsd_wrapper #cookiescript_declarationwrap{\n\t\ttransition: opacity 200ms ease 0ms, height 0ms ease 200ms;\n\t}\n#cookiescript_fsd_wrapper #cookiescript_aboutwrap{\n\tfont-size: 13px;\n\tpadding: 23px 0;\n\tline-height: 1.6;\n\ttext-align: left;\n\tfont-weight: normal;\n\tbox-sizing: border-box;\n\ttransition: opacity 200ms ease 0ms;\n\toverflow: auto;\n\tmin-height: 181px;\n}\n#cookiescript_fsd_wrapper #cookiescript_aboutwrap a,\n#cookiescript_fsd_wrapper #cookiescript_aboutwrap a:hover{\n    color: #999999;\n    text-decoration: underline;\n}\n\n#cookiescript_setting_advertising_wrap {\n    font-size: 12px;\n}\n\n#cookiescript_iab_type {\n    display: flex;\n    justify-content: center;\n    padding: 20px 0;\n    border-bottom: 1px solid #e2e2e2;\n    flex-wrap: wrap;\n}\n\n#cookiescript_iab_type > div {\n    cursor: pointer;\n    padding: 0 9px;\n    font-size: 11px;\n    font-weight: 600;\n    background: #f5f5f5;\n    color: #000000;\n    line-height: 2;\n    margin: 3px 5px;\n    white-space: nowrap;\n}\n\n#cookiescript_iab_type .cookiescript_active {\n    background: #999999;\n    color: #FEFEFE;\n}\n\n\n.cookiescript_fsd_cookies::-webkit-scrollbar-track,\n.cookiescript_fsd_tabs_content::-webkit-scrollbar-track {\n    background-color: #DADADA;\n}\n\n.cookiescript_fsd_cookies::-webkit-scrollbar,\n.cookiescript_fsd_tabs_content::-webkit-scrollbar {\n    width: 8px;\n    height: 8px;\n}\n\n.cookiescript_fsd_cookies::-webkit-scrollbar-thumb,\n.cookiescript_fsd_tabs_content::-webkit-scrollbar-thumb {\n    background-color: #999999;\n}\n\n\n\n@media screen and (min-width:0\\0) and (min-resolution: .001dpcm) {\n    #cookiescript_iab_type > div{\n        display:inline-block;\n    }\n}\n\n\/* --- OVERRIDE ----*\/\n\n#cookiescript_injected_fsd #cookiescript_close {\n\ttop: 20px;\n\tfont-size: 37px;\n\tright: 20px;\n\tcolor: #000000;\n\theight: 18px;\n\twidth: 18px;\n    position: absolute;\n    margin:0;\n}\n\n#cookiescript_injected_fsd #cookiescript_show_all_partners_button {\n    color: #999999;\n    margin-bottom: 0;\n    margin-top: 12px;\n    display: inline-block;\n}\n\n#cookiescript_injected_fsd #cookiescript_buttons {\n    justify-content: flex-start;\n    padding: 5px 15px;\n    margin: 0;\n}\n\n#cookiescript_injected_fsd #cookiescript_accept, #cookiescript_injected_fsd #cookiescript_save, #cookiescript_injected_fsd #cookiescript_reject {\n\t\tflex-grow: unset;\n\t\tpadding: 0px 25px;\n\tmargin: 10px 5px;\n\tfont-size: 13px;\n\tline-height: 3;\n}\n#cookiescript_injected_fsd #cookiescript_buttons{\n\tflex-direction: row;\n}\n#cookiescript_injected_fsd #cookiescript_buttons #cookiescript_reject {\n    margin-right: auto;\n}\n\n#cookiescript_injected_fsd .cookiescript-iab-itemContainer {\n    border: 1px solid #e2e2e2;\n\tbackground-color: #ffffff;\n\tpadding: 10px;\n}\n\n#cookiescript_injected_fsd .cookiescript-iab-header,\n#cookiescript_injected_fsd .cookiescript-iab-itemHeader,\n#cookiescript_injected_fsd .cookiescript-iab-itemHeaderAction {\n    color: #000000;\n}\n\n#cookiescript_injected_fsd .cookiescript-iab-itemHeaderAction {\n    border-color: #000000;\n}\n\n#cookiescript_injected_fsd #cookiescript_accept {\n    background-color: #000000;\n    color: #ffffff;\n    border: 1px solid #000000;\n    order: 1}\n\n#cookiescript_injected_fsd #cookiescript_accept:hover {\n    background-color: #151515;\n}\n\n#cookiescript_injected_fsd #cookiescript_reject {\n    background-color: #ffffff;\n    color: #5b5b5b;\n    border: 1px solid #5b5b5b;\n    order: 2}\n\n#cookiescript_injected_fsd #cookiescript_reject:hover {\n    background-color: #ebebeb;\n}\n\n#cookiescript_injected_fsd #cookiescript_save {\n    display: inline-block;\n    background-color: #000000;\n    color: #ffffff;\n    border: 1px solid #000000;\n    order: 3}\n\n#cookiescript_injected_fsd #cookiescript_save:hover {\n    background-color: #151515;\n}\n.cookiescript_fsd_reportby{\n    position: absolute;\n    bottom: -20px;\n    right: 20px;\n    color: #FFFFFF;\n    display: inline;\n    font-size: 13px;\n}\n#cookiescript_fsd_reportlink, #cookiescript_fsd_cookiescriptlink {\n    border: 0;\n    padding: 0;\n    cursor: pointer;\n    margin: 0;\n    transition: all 100ms ease 0s;\n    background-color: transparent;\n    color: #FFFFFF;\n    display: inline;\n    font-size: 13px;\n    text-decoration: underline;\n}\n\n\n\n\n\n\n\/*Switches color reload*\/\n#cookiescript_injected_fsd .mdc-switch.mdc-switch--selected:enabled .mdc-switch__handle::after {\n    background: #999999;\n}\n\n#cookiescript_injected_fsd .mdc-switch.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {\n    background: #959595;\n}\n\n#cookiescript_injected_fsd .mdc-switch.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after {\n    background: #959595;\n}\n\n#cookiescript_injected_fsd .mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__handle::after {\n    background: #959595;\n}\n\n#cookiescript_injected_fsd .mdc-switch.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::before,\n#cookiescript_injected_fsd .mdc-switch.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after{\n    background: #999999;\n}\n\n#cookiescript_injected_fsd .mdc-switch.mdc-switch--selected:enabled:focus .mdc-switch__ripple::before,\n#cookiescript_injected_fsd .mdc-switch.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after {\n    background: #999999;\n}\n\n#cookiescript_injected_fsd .mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__ripple::before,\n#cookiescript_injected_fsd .mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__ripple::after {\n    background: #999999;\n}\n\n#cookiescript_injected_fsd .mdc-switch:enabled .mdc-switch__track::after {\n    background: #999999;\n    opacity: 0.3;\n}\n\n#cookiescript_injected_fsd .mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {\n    background: #999999;\n    opacity: 0.3;\n}\n\n#cookiescript_injected_fsd .mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {\n    background: #999999;\n    opacity: 0.3;\n}\n\n#cookiescript_injected_fsd .mdc-switch:enabled:active .mdc-switch__track::after {\n    background: #999999;\n    opacity: 0.3;\n}\n\n\n#cookiescript_fsd_wrapper {\n    border-radius: 25px;\n}\n.cookiescript_fsd_header {\n    border-radius: 25px 25px 0 0;\n}\n.cookiescript_fsd_footer {\n    border-radius: 0 0 25px 25px;\n}\n#cookiescript_iab_type > div {\n    border-radius: 25px;\n}\n.cookiescript_fsd_cookies::-webkit-scrollbar-track,\n.cookiescript_fsd_tabs_content::-webkit-scrollbar-track\n#cookiescript_iabwrap::-webkit-scrollbar-thumb,\n#cookiescript_aboutwrap::-webkit-scrollbar-thumb{\n    border-radius: 6px;\n}\n.cookiescript_fsd_cookies::-webkit-scrollbar-thumb,\n.cookiescript_fsd_tabs_content::-webkit-scrollbar-thumb,\n#cookiescript_iabwrap::-webkit-scrollbar-thumb,\n#cookiescript_aboutwrap::-webkit-scrollbar-thumb{\n    border-radius: 5px;\n}\n#cookiescript_injected_fsd #cookiescript_accept,\n#cookiescript_injected_fsd #cookiescript_save,\n#cookiescript_injected_fsd #cookiescript_reject{\n    border-radius: 30px;\n}\n\n@media only screen and (max-width: 414px) {\n    .cookiescript_fsd_header {\n        border-radius: 0;\n    }\n    .cookiescript_fsd_footer {\n        border-radius: 0;\n    }\n}\n@media only screen and (max-width: 414px) {\n\t#cookiescript_fsd_wrapper {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tmax-height: 100%;\n\t\ttop: 0;\n\t\tborder-radius: 0;\n\t\tmargin: 0;\n\t}\n\n\t.cookiescript_fsd_main_info {\n\t\tpadding: 13px 20px;\n\t\toverflow-y: auto;\n\t\tmax-height: 140px;\n\t}\n\t.cookiescript_fsd_description{\n\t\tmargin-top: 8px;\n\t}\n\t.cookiescript_fsd_tabs > div {\n\t\tpadding: 6px;\n\t\tfont-size: 12px;\n\t}\n\n\t.cookiescript_fsd_tabs_content {\n\t\tpadding: 5px 20px 10px 20px;\n\t}\n\n\t.cookiescript_fsd_cookies_table thead {\n\t\tdisplay: none;\n\t}\n\n\t.cookiescript_fsd_cookies_table td {\n\t\tdisplay: flex;\n\t\tborder-bottom: 0px;\n\t}\n\n\t.cookiescript_fsd_cookies_table tr td:last-child {\n\t\tborder-bottom: 0;\n\t}\n\n\t.cookiescript_fsd_cookies_table td {\n\t\tborder-top: 0;\n\t}\n\n\t.cookiescript_fsd_cookies_table td::before {\n\t\tcontent: attr(label);\n\t\tfont-weight: bold;\n\t\twidth: 120px;\n\t\tmin-width: 120px;\n\t\ttext-align: left;\n\t}\n\n\t.cookiescript_fsd_cookies_table td:nth-child(2):before {\n\t\tcolor: #000000;\n\t}\n\n\t.cookiescript_category_description {\n\t\ttext-align: left;\n\t}\n\n\t.cookiescript_fsd_cookies_table td:nth-child(1),\n\t.cookiescript_fsd_cookies_table th:nth-child(1) {\n\t\tpadding-left: 7px;\n\t\tfont-weight: bold;\n\t\tborder-top: 1px solid #e2e2e2;\n\t}\n\n\t.cookiescript_fsd_cookies_table tr:nth-child(1) td:nth-child(1),\n\t.cookiescript_fsd_cookies_table tr:nth-child(1) th:nth-child(1) {\n\t\tborder-top: 0px;\n\t}\n\n\t.cookiescript_fsd_cookies_table td:last-child {\n\t\tborder-bottom: none;\n\t}\n\n\t.cookiescript_fsd_cookies_table tr:nth-child(even) {\n\t\tbackground: #f5f5f5;\n\t}\n\n\t.cookiescript_fsd_cookies_table tr:nth-child(even) td {\n\t\tborder-bottom: 0px solid #FFF;\n\t}\n\n\t#cookiescript_injected_fsd #cookiescript_buttons {\n\t\tmargin-bottom: 0;\n\t}\n\n\t#cookiescript_injected_fsd #cookiescript_buttons #cookiescript_accept,\n\t#cookiescript_injected_fsd #cookiescript_buttons #cookiescript_save,\n\t#cookiescript_injected_fsd #cookiescript_buttons #cookiescript_reject {\n\t\tflex-grow: 1;\n\t\tmargin-left: 10px;\n\t\tmargin-right: 10px;\n\t\tmargin-top: 5px;\n\t\tmargin-bottom: 5px;\n\t\tpadding: 0 15px;\n\t}\n\n\t.cookiescript_fsd_language_drop_down {\n\t\tright: 40px;\n\t}\n\n\t#cookiescript_injected_fsd #cookiescript_close{\n\t\tright:14px;\n\t}\n    .cookiescript_fsd_reportby {\n        position: relative;\n        bottom: 0;\n        right: auto;\n        color: #000000;\n        font-size: 12px;\n        padding: 0 20px 10px 21px;\n        max-width: 100%;\n        opacity: 0.8;\n        display: none;\n    }\n    #cookiescript_fsd_reportlink, #cookiescript_fsd_cookiescriptlink{\n        color: #000000;\n        font-size: 12px;\n    }\n\n}\n\n\n\r\n\r\n\r\n.cookiescript_rtl {\r\n    direction:rtl;\r\n}\r\n\r\n\/*Start Checkboxes*\/\r\n#cookiescript_injected_fsd .mdc-checkbox,\r\n#cookiescript_injected .mdc-checkbox {\r\n    box-sizing: content-box !important;\r\n}\r\n#cookiescript_injected_fsd .mdc-checkbox__native-control,\r\n#cookiescript_injected .mdc-checkbox__native-control {\r\n    display: block;\r\n    z-index: 1;\r\n}\r\n#cookiescript_injected_fsd .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background::before, \r\n#cookiescript_injected .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background::before, \r\n#cookiescript_injected_fsd .mdc-checkbox .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background::before,\r\n#cookiescript_injected .mdc-checkbox .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background::before {\r\n    background-color: #FFFFFF;\r\n}\r\n#cookiescript_injected .mdc-checkbox,#cookiescript_injected_fsd .mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;padding:11px}#cookiescript_injected .mdc-checkbox .mdc-checkbox__native-control:checked~.mdc-checkbox__background::before,#cookiescript_injected .mdc-checkbox .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background::before,#cookiescript_injected_fsd .mdc-checkbox .mdc-checkbox__native-control:checked~.mdc-checkbox__background::before,#cookiescript_injected_fsd .mdc-checkbox .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background::before{background-color:#000000}@supports not (-ms-ime-align:auto){#cookiescript_injected .mdc-checkbox .mdc-checkbox__native-control:checked~.mdc-checkbox__background::before,#cookiescript_injected .mdc-checkbox .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background::before,#cookiescript_injected_fsd .mdc-checkbox .mdc-checkbox__native-control:checked~.mdc-checkbox__background::before,#cookiescript_injected_fsd .mdc-checkbox .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background::before{background-color:var(--mdc-theme-secondary, #000000)}}#cookiescript_injected .mdc-checkbox .mdc-checkbox__background,#cookiescript_injected_fsd .mdc-checkbox .mdc-checkbox__background{top:11px;left:11px}#cookiescript_injected .mdc-checkbox .mdc-checkbox__background::before,#cookiescript_injected_fsd .mdc-checkbox .mdc-checkbox__background::before{top:-13px;left:-13px;width:40px;height:40px}#cookiescript_injected .mdc-checkbox .mdc-checkbox__native-control,#cookiescript_injected_fsd .mdc-checkbox .mdc-checkbox__native-control{top:0;right:0;left:0;width:40px;height:40px}#cookiescript_injected .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate)~.mdc-checkbox__background,#cookiescript_injected_fsd .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate)~.mdc-checkbox__background{border-color:#000000;background-color:transparent}#cookiescript_injected .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,#cookiescript_injected .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,#cookiescript_injected_fsd .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,#cookiescript_injected_fsd .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:#000000;background-color:#000000}#cookiescript_injected .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate)~.mdc-checkbox__background,#cookiescript_injected_fsd .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate)~.mdc-checkbox__background{border-color:rgba(0,0,0,0.26);background-color:transparent}#cookiescript_injected .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,#cookiescript_injected .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,#cookiescript_injected_fsd .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,#cookiescript_injected_fsd .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0,0,0,0.26)}#cookiescript_injected .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark,#cookiescript_injected_fsd .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#ffffff}#cookiescript_injected .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark,#cookiescript_injected_fsd .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#ffffff}#cookiescript_injected .mdc-checkbox__background,#cookiescript_injected_fsd .mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid #000000;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0s cubic-bezier(.4,0,.6,1),border-color 90ms 0s cubic-bezier(.4,0,.6,1)}#cookiescript_injected .mdc-checkbox__background .mdc-checkbox__background::before,#cookiescript_injected_fsd .mdc-checkbox__background .mdc-checkbox__background::before{background-color:#000}@supports not (-ms-ime-align:auto){#cookiescript_injected .mdc-checkbox__checkmark,#cookiescript_injected_fsd .mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0s cubic-bezier(.4,0,.6,1)}#cookiescript_injected .mdc-checkbox__checkmark-path,#cookiescript_injected_fsd .mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0s cubic-bezier(.4,0,.6,1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}#cookiescript_injected .mdc-checkbox__native-control:checked~.mdc-checkbox__background,#cookiescript_injected .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,#cookiescript_injected_fsd .mdc-checkbox__native-control:checked~.mdc-checkbox__background,#cookiescript_injected_fsd .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{transition:border-color 90ms 0s cubic-bezier(0,0,.2,1),background-color 90ms 0s cubic-bezier(0,0,.2,1)}#cookiescript_injected .mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,#cookiescript_injected .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,#cookiescript_injected_fsd .mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,#cookiescript_injected_fsd .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}#cookiescript_injected .mdc-checkbox__background::before,#cookiescript_injected_fsd .mdc-checkbox__background::before{position:absolute;-webkit-transform:scale(0,0);transform:scale(0,0);border-radius:50%;opacity:0;pointer-events:none;content:"";will-change:opacity,transform;transition:opacity 90ms 0s cubic-bezier(.4,0,.6,1),-webkit-transform 90ms 0s cubic-bezier(.4,0,.6,1);transition:opacity 90ms 0s cubic-bezier(.4,0,.6,1),transform 90ms 0s cubic-bezier(.4,0,.6,1);transition:opacity 90ms 0s cubic-bezier(.4,0,.6,1),transform 90ms 0s cubic-bezier(.4,0,.6,1),-webkit-transform 90ms 0s cubic-bezier(.4,0,.6,1)}#cookiescript_injected .mdc-checkbox__native-control:focus~.mdc-checkbox__background::before,#cookiescript_injected_fsd .mdc-checkbox__native-control:focus~.mdc-checkbox__background::before{-webkit-transform:scale(1);transform:scale(1);opacity:.12;transition:opacity 80ms 0s cubic-bezier(0,0,.2,1),-webkit-transform 80ms 0s cubic-bezier(0,0,.2,1);transition:opacity 80ms 0s cubic-bezier(0,0,.2,1),transform 80ms 0s cubic-bezier(0,0,.2,1);transition:opacity 80ms 0s cubic-bezier(0,0,.2,1),transform 80ms 0s cubic-bezier(0,0,.2,1),-webkit-transform 80ms 0s cubic-bezier(0,0,.2,1)}#cookiescript_injected .mdc-checkbox__native-control,#cookiescript_injected_fsd .mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}#cookiescript_injected .mdc-checkbox__native-control:disabled,#cookiescript_injected_fsd .mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}#cookiescript_injected .mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark,#cookiescript_injected_fsd .mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0s cubic-bezier(0,0,.2,1),-webkit-transform 180ms 0s cubic-bezier(0,0,.2,1);transition:opacity 180ms 0s cubic-bezier(0,0,.2,1),transform 180ms 0s cubic-bezier(0,0,.2,1);transition:opacity 180ms 0s cubic-bezier(0,0,.2,1),transform 180ms 0s cubic-bezier(0,0,.2,1),-webkit-transform 180ms 0s cubic-bezier(0,0,.2,1);opacity:1}#cookiescript_injected .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,#cookiescript_injected_fsd .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark{-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0;transition:opacity 90ms 0s cubic-bezier(.4,0,.6,1),-webkit-transform 90ms 0s cubic-bezier(.4,0,.6,1);transition:opacity 90ms 0s cubic-bezier(.4,0,.6,1),transform 90ms 0s cubic-bezier(.4,0,.6,1);transition:opacity 90ms 0s cubic-bezier(.4,0,.6,1),transform 90ms 0s cubic-bezier(.4,0,.6,1),-webkit-transform 90ms 0s cubic-bezier(.4,0,.6,1)}#cookiescript_injected .mdc-checkbox,#cookiescript_injected_fsd .mdc-checkbox{-webkit-tap-highlight-color:transparent}}\r\n\/*End Checkboxes*\/\r\n\r\n\r\n\/*Start Toggle*\/\r\n\r\n#cookiescript_injected .mdc-elevation-overlay,#cookiescript_injected_fsd .mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;transition:opacity 280ms cubic-bezier(.4,0,.2,1);background-color:#fff}#cookiescript_injected .mdc-switch,#cookiescript_injected_fsd .mdc-switch{align-items:center;background:0 0;border:none;cursor:pointer;display:inline-flex;flex-shrink:0;margin:0;outline:0;overflow:visible;padding:0;position:relative}#cookiescript_injected .mdc-switch:disabled,#cookiescript_injected_fsd .mdc-switch:disabled{cursor:default;pointer-events:none}#cookiescript_injected .mdc-switch input[type=checkbox],#cookiescript_injected_fsd .mdc-switch input[type=checkbox]{display:none;visibility:hidden}#cookiescript_injected .mdc-switch__track,#cookiescript_injected_fsd .mdc-switch__track{overflow:hidden;position:relative;width:100%}#cookiescript_injected .mdc-switch__track::after,#cookiescript_injected .mdc-switch__track::before,#cookiescript_injected_fsd .mdc-switch__track::after,#cookiescript_injected_fsd .mdc-switch__track::before{border:1px solid transparent;border-radius:inherit;box-sizing:border-box;content:"";height:100%;left:0;position:absolute;width:100%}#cookiescript_injected .mdc-switch__track::before,#cookiescript_injected_fsd .mdc-switch__track::before{transition:-webkit-transform 75ms 0s cubic-bezier(0,0,.2,1);transition:transform 75ms 0s cubic-bezier(0,0,.2,1);-webkit-transform:translateX(0);transform:translateX(0)}#cookiescript_injected .mdc-switch__track::after,#cookiescript_injected_fsd .mdc-switch__track::after{transition:-webkit-transform 75ms 0s cubic-bezier(.4,0,.6,1);transition:transform 75ms 0s cubic-bezier(.4,0,.6,1);-webkit-transform:translateX(-100%);transform:translateX(-100%)}#cookiescript_injected .mdc-switch__track[dir=rtl]::after,#cookiescript_injected [dir=rtl] .mdc-switch__track::after,#cookiescript_injected_fsd .mdc-switch__track[dir=rtl]::after,#cookiescript_injected_fsd [dir=rtl] .mdc-switch__track::after{-webkit-transform:translateX(100%);transform:translateX(100%)}#cookiescript_injected .mdc-switch--selected .mdc-switch__track::before,#cookiescript_injected_fsd .mdc-switch--selected .mdc-switch__track::before{transition:-webkit-transform 75ms 0s cubic-bezier(.4,0,.6,1);transition:transform 75ms 0s cubic-bezier(.4,0,.6,1);-webkit-transform:translateX(100%);transform:translateX(100%)}#cookiescript_injected .mdc-switch--selected .mdc-switch__track[dir=rtl]::before,#cookiescript_injected [dir=rtl] .mdc-switch--selected .mdc-switch__track::before,#cookiescript_injected_fsd .mdc-switch--selected .mdc-switch__track[dir=rtl]::before,#cookiescript_injected_fsd [dir=rtl] .mdc-switch--selected .mdc-switch__track::before{-webkit-transform:translateX(-100%);transform:translateX(-100%)}#cookiescript_injected .mdc-switch--selected .mdc-switch__track::after,#cookiescript_injected_fsd .mdc-switch--selected .mdc-switch__track::after{transition:-webkit-transform 75ms 0s cubic-bezier(0,0,.2,1);transition:transform 75ms 0s cubic-bezier(0,0,.2,1);-webkit-transform:translateX(0);transform:translateX(0)}#cookiescript_injected .mdc-switch__handle-track,#cookiescript_injected_fsd .mdc-switch__handle-track{height:100%;pointer-events:none;position:absolute;top:0;transition:-webkit-transform 75ms 0s cubic-bezier(.4,0,.2,1);transition:transform 75ms 0s cubic-bezier(.4,0,.2,1);left:0;right:auto;-webkit-transform:translateX(0);transform:translateX(0)}#cookiescript_injected .mdc-switch__handle-track[dir=rtl],#cookiescript_injected [dir=rtl] .mdc-switch__handle-track,#cookiescript_injected_fsd .mdc-switch__handle-track[dir=rtl],#cookiescript_injected_fsd [dir=rtl] .mdc-switch__handle-track{left:auto;right:0}#cookiescript_injected .mdc-switch--selected .mdc-switch__handle-track,#cookiescript_injected_fsd .mdc-switch--selected .mdc-switch__handle-track{-webkit-transform:translateX(100%);transform:translateX(100%)}#cookiescript_injected .mdc-switch--selected .mdc-switch__handle-track[dir=rtl],#cookiescript_injected [dir=rtl] .mdc-switch--selected .mdc-switch__handle-track,#cookiescript_injected_fsd .mdc-switch--selected .mdc-switch__handle-track[dir=rtl],#cookiescript_injected_fsd [dir=rtl] .mdc-switch--selected .mdc-switch__handle-track{-webkit-transform:translateX(-100%);transform:translateX(-100%)}#cookiescript_injected .mdc-switch__handle,#cookiescript_injected_fsd .mdc-switch__handle{display:flex;pointer-events:auto;position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);left:0;right:auto}#cookiescript_injected .mdc-switch__handle[dir=rtl],#cookiescript_injected [dir=rtl] .mdc-switch__handle,#cookiescript_injected_fsd .mdc-switch__handle[dir=rtl],#cookiescript_injected_fsd [dir=rtl] .mdc-switch__handle{left:auto;right:0}#cookiescript_injected .mdc-switch__handle::after,#cookiescript_injected .mdc-switch__handle::before,#cookiescript_injected_fsd .mdc-switch__handle::after,#cookiescript_injected_fsd .mdc-switch__handle::before{border:1px solid transparent;border-radius:inherit;box-sizing:border-box;content:"";width:100%;height:100%;left:0;position:absolute;top:0;transition:background-color 75ms 0s cubic-bezier(.4,0,.2,1),border-color 75ms 0s cubic-bezier(.4,0,.2,1);z-index:-1}#cookiescript_injected .mdc-switch__shadow,#cookiescript_injected_fsd .mdc-switch__shadow{border-radius:inherit;bottom:0;left:0;position:absolute;right:0;top:0}#cookiescript_injected .mdc-elevation-overlay,#cookiescript_injected_fsd .mdc-elevation-overlay{bottom:0;left:0;right:0;top:0}#cookiescript_injected .mdc-switch__ripple,#cookiescript_injected_fsd .mdc-switch__ripple{left:50%;position:absolute;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);z-index:-1}#cookiescript_injected .mdc-switch:disabled .mdc-switch__ripple,#cookiescript_injected_fsd .mdc-switch:disabled .mdc-switch__ripple{display:none}#cookiescript_injected .mdc-switch__icons,#cookiescript_injected_fsd .mdc-switch__icons{height:100%;position:relative;width:100%;z-index:1}#cookiescript_injected .mdc-switch__icon,#cookiescript_injected_fsd .mdc-switch__icon{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;opacity:0;transition:opacity 30ms 0s cubic-bezier(.4,0,1,1)}#cookiescript_injected .mdc-switch--selected .mdc-switch__icon--on,#cookiescript_injected .mdc-switch--unselected .mdc-switch__icon--off,#cookiescript_injected_fsd .mdc-switch--selected .mdc-switch__icon--on,#cookiescript_injected_fsd .mdc-switch--unselected .mdc-switch__icon--off{opacity:1;transition:opacity 45ms 30ms cubic-bezier(0,0,.2,1)}#cookiescript_injected .mdc-switch,#cookiescript_injected_fsd .mdc-switch{will-change:transform,opacity}@-webkit-keyframes mdc-ripple-fg-radius-in{from{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:translate(0) scale(1);transform:translate(0) scale(1)}to{-webkit-transform:translate(0) scale(1);transform:translate(0) scale(1)}}@keyframes mdc-ripple-fg-radius-in{from{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:translate(0) scale(1);transform:translate(0) scale(1)}to{-webkit-transform:translate(0) scale(1);transform:translate(0) scale(1)}}@-webkit-keyframes mdc-ripple-fg-opacity-in{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:.1}}@keyframes mdc-ripple-fg-opacity-in{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:.1}}@-webkit-keyframes mdc-ripple-fg-opacity-out{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:.1}to{opacity:0}}@keyframes mdc-ripple-fg-opacity-out{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:.1}to{opacity:0}}#cookiescript_injected .mdc-switch .mdc-switch__ripple::after,#cookiescript_injected .mdc-switch .mdc-switch__ripple::before,#cookiescript_injected_fsd .mdc-switch .mdc-switch__ripple::after,#cookiescript_injected_fsd .mdc-switch .mdc-switch__ripple::before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}#cookiescript_injected .mdc-switch .mdc-switch__ripple::before,#cookiescript_injected_fsd .mdc-switch .mdc-switch__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}#cookiescript_injected .mdc-switch .mdc-switch__ripple::after,#cookiescript_injected_fsd .mdc-switch .mdc-switch__ripple::after{z-index:0}#cookiescript_injected .mdc-switch.mdc-ripple-upgraded .mdc-switch__ripple::before,#cookiescript_injected_fsd .mdc-switch.mdc-ripple-upgraded .mdc-switch__ripple::before{-webkit-transform:scale(1);transform:scale(1)}#cookiescript_injected .mdc-switch.mdc-ripple-upgraded .mdc-switch__ripple::after,#cookiescript_injected_fsd .mdc-switch.mdc-ripple-upgraded .mdc-switch__ripple::after{top:0;left:0;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:center center;transform-origin:center center}#cookiescript_injected .mdc-switch.mdc-ripple-upgraded--unbounded .mdc-switch__ripple::after,#cookiescript_injected_fsd .mdc-switch.mdc-ripple-upgraded--unbounded .mdc-switch__ripple::after{top:0;left:0}#cookiescript_injected .mdc-switch.mdc-ripple-upgraded--foreground-activation .mdc-switch__ripple::after,#cookiescript_injected_fsd .mdc-switch.mdc-ripple-upgraded--foreground-activation .mdc-switch__ripple::after{-webkit-animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards;animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}#cookiescript_injected .mdc-switch.mdc-ripple-upgraded--foreground-deactivation .mdc-switch__ripple::after,#cookiescript_injected_fsd .mdc-switch.mdc-ripple-upgraded--foreground-deactivation .mdc-switch__ripple::after{-webkit-animation:mdc-ripple-fg-opacity-out 150ms;animation:mdc-ripple-fg-opacity-out 150ms;-webkit-transform:translate(0) scale(1);transform:translate(0) scale(1)}#cookiescript_injected .mdc-switch .mdc-switch__ripple::after,#cookiescript_injected .mdc-switch .mdc-switch__ripple::before,#cookiescript_injected_fsd .mdc-switch .mdc-switch__ripple::after,#cookiescript_injected_fsd .mdc-switch .mdc-switch__ripple::before{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}#cookiescript_injected .mdc-switch.mdc-ripple-upgraded .mdc-switch__ripple::after,#cookiescript_injected .mdc-switch.mdc-ripple-upgraded .mdc-switch__ripple::before,#cookiescript_injected_fsd .mdc-switch.mdc-ripple-upgraded .mdc-switch__ripple::after,#cookiescript_injected_fsd .mdc-switch.mdc-ripple-upgraded .mdc-switch__ripple::before{top:0;left:0;width:0;height:0}#cookiescript_injected .mdc-switch.mdc-ripple-upgraded .mdc-switch__ripple::after,#cookiescript_injected_fsd .mdc-switch.mdc-ripple-upgraded .mdc-switch__ripple::after{width:0;height:0}#cookiescript_injected .mdc-switch,#cookiescript_injected_fsd .mdc-switch{width:36px}#cookiescript_injected .mdc-switch.mdc-switch--selected:enabled .mdc-switch__handle::after{background:}#cookiescript_injected .mdc-switch.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:}#cookiescript_injected .mdc-switch.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after{background:}#cookiescript_injected .mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__handle::after{background:}#cookiescript_injected .mdc-switch.mdc-switch--selected:disabled .mdc-switch__handle::after,#cookiescript_injected_fsd .mdc-switch.mdc-switch--selected:disabled .mdc-switch__handle::after{background:#424242}#cookiescript_injected .mdc-switch.mdc-switch--unselected:enabled .mdc-switch__handle::after,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:enabled .mdc-switch__handle::after{background:#616161}#cookiescript_injected .mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:#212121}#cookiescript_injected .mdc-switch.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after{background:#212121}#cookiescript_injected .mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__handle::after,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__handle::after{background:#212121}#cookiescript_injected .mdc-switch.mdc-switch--unselected:disabled .mdc-switch__handle::after,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:disabled .mdc-switch__handle::after{background:#424242}#cookiescript_injected .mdc-switch .mdc-switch__handle::before,#cookiescript_injected_fsd .mdc-switch .mdc-switch__handle::before{background:#fff}#cookiescript_injected .mdc-switch:enabled .mdc-switch__shadow,#cookiescript_injected_fsd .mdc-switch:enabled .mdc-switch__shadow{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);--mdc-elevation-box-shadow-for-gss:0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 1px 3px 0px rgba(0, 0, 0, 0.12)}#cookiescript_injected .mdc-switch:disabled .mdc-switch__shadow,#cookiescript_injected_fsd .mdc-switch:disabled .mdc-switch__shadow{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12);--mdc-elevation-box-shadow-for-gss:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0, 0, 0, 0.12)}#cookiescript_injected .mdc-switch .mdc-switch__handle,#cookiescript_injected_fsd .mdc-switch .mdc-switch__handle{height:20px}#cookiescript_injected .mdc-switch:disabled .mdc-switch__handle::after,#cookiescript_injected_fsd .mdc-switch:disabled .mdc-switch__handle::after{opacity:.38}#cookiescript_injected .mdc-switch .mdc-switch__handle,#cookiescript_injected_fsd .mdc-switch .mdc-switch__handle{border-radius:10px}#cookiescript_injected .mdc-switch .mdc-switch__handle,#cookiescript_injected_fsd .mdc-switch .mdc-switch__handle{width:20px}#cookiescript_injected .mdc-switch .mdc-switch__handle-track,#cookiescript_injected_fsd .mdc-switch .mdc-switch__handle-track{width:calc(100% - 20px)}#cookiescript_injected .mdc-switch.mdc-switch--selected:enabled .mdc-switch__icon,#cookiescript_injected_fsd .mdc-switch.mdc-switch--selected:enabled .mdc-switch__icon{fill:#fff}#cookiescript_injected .mdc-switch.mdc-switch--selected:disabled .mdc-switch__icon,#cookiescript_injected_fsd .mdc-switch.mdc-switch--selected:disabled .mdc-switch__icon{fill:#fff}#cookiescript_injected .mdc-switch.mdc-switch--unselected:enabled .mdc-switch__icon,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:enabled .mdc-switch__icon{fill:#fff}#cookiescript_injected .mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icon,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icon{fill:#fff}#cookiescript_injected .mdc-switch.mdc-switch--selected:disabled .mdc-switch__icons,#cookiescript_injected_fsd .mdc-switch.mdc-switch--selected:disabled .mdc-switch__icons{opacity:.38}#cookiescript_injected .mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icons,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icons{opacity:.38}#cookiescript_injected .mdc-switch.mdc-switch--selected .mdc-switch__icon,#cookiescript_injected_fsd .mdc-switch.mdc-switch--selected .mdc-switch__icon{width:18px;height:18px}#cookiescript_injected .mdc-switch.mdc-switch--unselected .mdc-switch__icon,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected .mdc-switch__icon{width:18px;height:18px}#cookiescript_injected .mdc-switch.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after,#cookiescript_injected .mdc-switch.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::before{background-color:}#cookiescript_injected .mdc-switch.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after,#cookiescript_injected .mdc-switch.mdc-switch--selected:enabled:focus .mdc-switch__ripple::before{background-color:}#cookiescript_injected .mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__ripple::after,#cookiescript_injected .mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__ripple::before{background-color:}#cookiescript_injected .mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after,#cookiescript_injected .mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::before,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::before{background-color:#424242}#cookiescript_injected .mdc-switch.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after,#cookiescript_injected .mdc-switch.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::before,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::before{background-color:#424242}#cookiescript_injected .mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after,#cookiescript_injected .mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__ripple::before,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__ripple::before{background-color:#424242}#cookiescript_injected .mdc-switch.mdc-switch--selected:enabled:hover:not(:focus).mdc-ripple-surface--hover .mdc-switch__ripple::before,#cookiescript_injected .mdc-switch.mdc-switch--selected:enabled:hover:not(:focus):hover .mdc-switch__ripple::before,#cookiescript_injected_fsd .mdc-switch.mdc-switch--selected:enabled:hover:not(:focus).mdc-ripple-surface--hover .mdc-switch__ripple::before,#cookiescript_injected_fsd .mdc-switch.mdc-switch--selected:enabled:hover:not(:focus):hover .mdc-switch__ripple::before{opacity:.04}#cookiescript_injected .mdc-switch.mdc-switch--selected:enabled:focus.mdc-ripple-upgraded--background-focused .mdc-switch__ripple::before,#cookiescript_injected .mdc-switch.mdc-switch--selected:enabled:focus:not(.mdc-ripple-upgraded):focus .mdc-switch__ripple::before,#cookiescript_injected_fsd .mdc-switch.mdc-switch--selected:enabled:focus.mdc-ripple-upgraded--background-focused .mdc-switch__ripple::before,#cookiescript_injected_fsd .mdc-switch.mdc-switch--selected:enabled:focus:not(.mdc-ripple-upgraded):focus .mdc-switch__ripple::before{transition-duration:75ms;opacity:.12}#cookiescript_injected .mdc-switch.mdc-switch--selected:enabled:active:not(.mdc-ripple-upgraded) .mdc-switch__ripple::after,#cookiescript_injected_fsd .mdc-switch.mdc-switch--selected:enabled:active:not(.mdc-ripple-upgraded) .mdc-switch__ripple::after{transition:opacity 150ms linear}#cookiescript_injected .mdc-switch.mdc-switch--selected:enabled:active:not(.mdc-ripple-upgraded):active .mdc-switch__ripple::after,#cookiescript_injected_fsd .mdc-switch.mdc-switch--selected:enabled:active:not(.mdc-ripple-upgraded):active .mdc-switch__ripple::after{transition-duration:75ms;opacity:.1}#cookiescript_injected .mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus).mdc-ripple-surface--hover .mdc-switch__ripple::before,#cookiescript_injected .mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus):hover .mdc-switch__ripple::before,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus).mdc-ripple-surface--hover .mdc-switch__ripple::before,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus):hover .mdc-switch__ripple::before{opacity:.04}#cookiescript_injected .mdc-switch.mdc-switch--unselected:enabled:focus.mdc-ripple-upgraded--background-focused .mdc-switch__ripple::before,#cookiescript_injected .mdc-switch.mdc-switch--unselected:enabled:focus:not(.mdc-ripple-upgraded):focus .mdc-switch__ripple::before,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:enabled:focus.mdc-ripple-upgraded--background-focused .mdc-switch__ripple::before,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:enabled:focus:not(.mdc-ripple-upgraded):focus .mdc-switch__ripple::before{transition-duration:75ms;opacity:.12}#cookiescript_injected .mdc-switch.mdc-switch--unselected:enabled:active:not(.mdc-ripple-upgraded) .mdc-switch__ripple::after,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:enabled:active:not(.mdc-ripple-upgraded) .mdc-switch__ripple::after{transition:opacity 150ms linear}#cookiescript_injected .mdc-switch.mdc-switch--unselected:enabled:active:not(.mdc-ripple-upgraded):active .mdc-switch__ripple::after,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:enabled:active:not(.mdc-ripple-upgraded):active .mdc-switch__ripple::after{transition-duration:75ms;opacity:.1}#cookiescript_injected .mdc-switch .mdc-switch__ripple,#cookiescript_injected_fsd .mdc-switch .mdc-switch__ripple{height:48px;width:48px}#cookiescript_injected .mdc-switch .mdc-switch__track,#cookiescript_injected_fsd .mdc-switch .mdc-switch__track{height:14px}#cookiescript_injected .mdc-switch:disabled .mdc-switch__track,#cookiescript_injected_fsd .mdc-switch:disabled .mdc-switch__track{opacity:.12}#cookiescript_injected .mdc-switch:enabled .mdc-switch__track::after{background:;opacity:0.3}#cookiescript_injected .mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after{background:;opacity:0.3}#cookiescript_injected .mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after{background:;opacity:0.3}#cookiescript_injected .mdc-switch:enabled:active .mdc-switch__track::after{background:;opacity:0.3}#cookiescript_injected .mdc-switch:disabled .mdc-switch__track::after,#cookiescript_injected_fsd .mdc-switch:disabled .mdc-switch__track::after{background:#424242}#cookiescript_injected .mdc-switch:enabled .mdc-switch__track::before,#cookiescript_injected_fsd .mdc-switch:enabled .mdc-switch__track::before{background:#e0e0e0}#cookiescript_injected .mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before,#cookiescript_injected_fsd .mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before{background:#e0e0e0}#cookiescript_injected .mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before,#cookiescript_injected_fsd .mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before{background:#e0e0e0}#cookiescript_injected .mdc-switch:enabled:active .mdc-switch__track::before,#cookiescript_injected_fsd .mdc-switch:enabled:active .mdc-switch__track::before{background:#e0e0e0}#cookiescript_injected .mdc-switch:disabled .mdc-switch__track::before,#cookiescript_injected_fsd .mdc-switch:disabled .mdc-switch__track::before{background:#424242}#cookiescript_injected .mdc-switch .mdc-switch__track,#cookiescript_injected_fsd .mdc-switch .mdc-switch__track{border-radius:7px}@media screen and (forced-colors:active),(-ms-high-contrast:active){#cookiescript_injected .mdc-switch:disabled .mdc-switch__handle::after,#cookiescript_injected_fsd .mdc-switch:disabled .mdc-switch__handle::after{opacity:1}#cookiescript_injected .mdc-switch.mdc-switch--selected:disabled .mdc-switch__icons,#cookiescript_injected_fsd .mdc-switch.mdc-switch--selected:disabled .mdc-switch__icons{opacity:1}#cookiescript_injected .mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icons,#cookiescript_injected_fsd .mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icons{opacity:1}#cookiescript_injected .mdc-switch:disabled .mdc-switch__track,#cookiescript_injected_fsd .mdc-switch:disabled .mdc-switch__track{opacity:1}}\r\n\/*End Toggle*\/\r\n\r\n#cookiescript_injected {\r\nbottom: 20px;\r\nright: 20px;\r\n    position: fixed;\r\n    padding: 15px 20px 15px 20px;\r\n    width: 300px;\r\n    text-align: left;\r\n    max-height: 85%;\r\n    overflow-y: auto;\r\n    max-width: calc(100% - 40px);\r\n}\r\n#cookiescript_copyright {\r\n    line-height: 1;\r\n    text-align: center;\r\n}\r\n#cookiescript_buttons {\r\n    justify-content: space-between;\r\n    margin: 0 -5px 0 -5px;\r\n    flex-wrap: wrap;\r\n}\r\n#cookiescript_manage_wrap {\r\n    margin: 0 0 5px 0;\r\n}\r\n#cookiescript_header {\r\n    padding: 10px 0 10px;\r\n    text-align: left;\r\n    margin: 0;\r\n    margin-right: 13px;\r\n}\r\n#cookiescript_checkboxs {\r\n    margin: 0 0 18px -11px;\r\n}\r\n.cookiescript_checkbox {\r\n    margin: 0 0 -10px 0;\r\n}\r\n#cookiescript_accept,\r\n#cookiescript_save,\r\n#cookiescript_reject {\r\n    flex-grow: 1;\r\n    padding: 0 7px;\r\n    margin: 0 5px 13px 5px;\r\n}\r\n#cookiescript_description {\r\n    margin: 0 0 10px;\r\n}\r\n\r\n.cookiescript_checkbox_label{\r\n    padding: 0;\r\n    margin: 0 10px 0 0;\r\n}\r\n\r\n#cookiescript_injected{\r\n    transition: width 200ms 600ms;\r\n}\r\n\r\n#cookiescript_injected.hascookiereport{\r\n    width:600px;\r\n    transition: width 200ms 0ms;\r\n}\r\n#cookiescript_cookietablewrap {\r\n    transition: height 300ms 200ms, min-height 300ms 200ms, max-height 300ms 200ms, opacity 200ms 300ms;\r\n}\r\n#cookiescript_cookietablewrap.cookiescript_hidden {\r\n    transition: height 300ms 200ms, min-height 300ms 200ms, max-height 300ms 200ms, opacity 200ms 0ms;\r\n}\r\n\r\n#cookiescript_accept, #cookiescript_reject, #cookiescript_save {\r\n\tborder-radius: 20px;\r\n}\r\n\r\n#cookiescript_injected {\r\n\tborder-radius: 20px;\r\n}\r\n\r\n\r\n@media only screen and (max-width: 414px) {\r\n    #cookiescript_injected{\r\n    bottom: 0;\r\n    right: 0;\r\n        width: 100%;\r\n        padding: 15px;\r\n        border-radius:0;\r\n\t\tmax-width: 100%;\r\n    }\r\n    #cookiescript_description,\r\n    #cookiescript_buttons,\r\n    #cookiescript_manage_wrap,\r\n    #cookiescript_checkboxs\r\n    {\r\n        margin-bottom: 8px;\r\n    }\r\n    #cookiescript_header{\r\n        padding-top:5px;\r\n    }\r\n    #cookiescript_checkboxs {\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n    }\r\n    #cookiescript_injected {\r\n\t\tmax-height: 100%;\r\n\t}\r\n}\r\n\r\n\n    <\/style>\n  ',
            ki = '',
            Xt = '<div id="cookiescript_injected_wrapper" tabindex="0" role="alert" aria-live="assertive" data-cs-id="cookiescript_injected">\n\t<div id="cookiescript_injected" tabindex="0" role="alert" aria-live="assertive" data-nosnippet class="">\n\t\t<div class="cookiescript_pre_header">\n              <div id="cookiescript_close" tabindex="0" role="button" aria-label="Close">\u00d7<\/div>\n    <\/div>\n      <div id="cookiescript_header" data-cs-i18n-text="{&quot;en&quot;:&quot;This website uses \\ud83c\\udf6a&amp;#39;s&quot;}">\n    This website uses \ud83c\udf6a\&#39;s  <\/div>\n  <div id="cookiescript_description">\n\t    <span data-cs-desc-box="true" data-cs-i18n-text="{&quot;en&quot;:&quot;This website uses cookies to improve user experience. By using our website you consent to all cookies in accordance with our Cookie Policy.&quot;}" data-cs-i18n-read="This website uses cookies to improve user experience. By using our website you consent to all cookies in accordance with our Cookie Policy.">\n      This website uses cookies to improve user experience. By using our website you consent to all cookies in accordance with our Cookie Policy.    <\/span>\n\n    \n      \n      <a\n        id="cookiescript_readmore"\n        data-cs-i18n-text="{&quot;en&quot;:&quot;Share the \\u2764\\ufe0f here&quot;}"\n        data-cs-i18n-url="{&quot;en&quot;:&quot;\\\/privacy-policy\\\/&quot;}"\n        target="_blank"\n        aria-label="Share the \u2764\ufe0f here, opens a new window"\n        href=\'\/privacy-policy\/\'      >\n        Share the \u2764\ufe0f here      <\/a>\n\n          <\/div>\n  <div id="cookiescript_buttons">\n          <div id="cookiescript_save" tabindex="0" role="button" data-cs-i18n-text="{&quot;en&quot;:&quot;Save \\ud83d\\udc96 Close&quot;}">\n        Save \ud83d\udc96 Close      <\/div>\n              <div id="cookiescript_accept" tabindex="0" role="button" data-cs-i18n-text="{&quot;en&quot;:&quot;Accept \\ud83d\\udc8b&quot;}">\n        Accept \ud83d\udc8b      <\/div>\n          <\/div>\n\n  <div id="cookiescript_manage_wrap" tabindex="0" role="button">\n    <div id="cookiescript_manage">\n      <svg role="none" id="cookiescript_manageicon" viewBox="0 0 9.62 9.57">\n        <g id="cs-manage-btn">\n          <g id="cs-manage-btn-1-2">\n            <path class="cookiescript_gear" d="M9.46,6.06l-1.1-.78c0-.16.06-.31.06-.47a1.27,1.27,0,0,0-.06-.47L9.57,3.4l-1.15-2L7,1.93a2.74,2.74,0,0,0-.83-.47L6,0H3.61L3.35,1.46a7.14,7.14,0,0,0-.79.47L1.15,1.36,0,3.4l1.15.94c0,.16,0,.31,0,.47a1.51,1.51,0,0,0,0,.47l-1,.78A.75.75,0,0,0,0,6.17l1.15,2,1.41-.58a2.49,2.49,0,0,0,.84.47l.21,1.47H6a.53.53,0,0,1,0-.21L6.22,8.1a4,4,0,0,0,.84-.47l1.41.58,1.15-2A.75.75,0,0,0,9.46,6.06Zm-4.65.19A1.47,1.47,0,1,1,6.28,4.78,1.47,1.47,0,0,1,4.81,6.25Z"><\/path>\n          <\/g>\n        <\/g>\n      <\/svg>\n      <span data-cs-show-title="cookie-script" data-cs-i18n-text="{&quot;en&quot;:&quot;Show details&quot;}">\n        Show details      <\/span>\n      <span style="display: none" data-cs-hide-title="cookie-script" data-cs-i18n-text="{&quot;en&quot;:&quot;Hide details&quot;}">\n        Hide details      <\/span>\n    <\/div>\n  <\/div>\n\t\t<div class="cookiescript_hidden" id="cookiescript_cookietablewrap">\n\t\t\t\t\t<\/div>\n\t\t\n\t<\/div>\n<\/div>\n',
            De = '',
            Jt = '\n<div id="cookiescript_injected_fsd" data-nosnippet class="">\n  <div id="cookiescript_fsd_wrapper" tabindex="0" role="button">\n    <div class="cookiescript_fsd_header">\n\t                      <div id="cookiescript_close" tabindex="0" role="button" aria-label="Close">\u00d7<\/div>\n          <\/div>\n    <div class="cookiescript_fsd_main">\n      <div class="cookiescript_fsd_main_info">\n        <!-- TITLE -->\n                  <div class="cookiescript_fsd_title" data-cs-i18n-text="{&quot;en&quot;:&quot;This website uses \\ud83c\\udf6a&amp;#39;s&quot;}">\n            This website uses \ud83c\udf6a\&#39;s          <\/div>\n                <!-- END TITLE -->\n\n        <!-- DESCRIPTION -->\n                  <div class="cookiescript_fsd_description">\n            <span data-cs-desc-box="true" data-cs-i18n-text="{&quot;en&quot;:&quot;This website uses cookies to improve user experience. By using our website you consent to all cookies in accordance with our Cookie Policy.&quot;}" data-cs-i18n-read="This website uses cookies to improve user experience. By using our website you consent to all cookies in accordance with our Cookie Policy.">\n              This website uses cookies to improve user experience. By using our website you consent to all cookies in accordance with our Cookie Policy.            <\/span>\n\n            \n              \n              <a\n                id="cookiescript_readmore"\n                data-cs-i18n-text="{&quot;en&quot;:&quot;Share the \\u2764\\ufe0f here&quot;}"\n                data-cs-i18n-url="{&quot;en&quot;:&quot;\\\/privacy-policy\\\/&quot;}"\n                target="_blank"\n                aria-label="Share the \u2764\ufe0f here, opens a new window"\n                href=\'\/privacy-policy\/\'              >\n                Share the \u2764\ufe0f here              <\/a>\n                      <\/div>\n                \n        <!-- END DESCRIPTION -->\n        \n      <\/div>\n    <\/div>\n    <div class="cookiescript_fsd_tabs" data-cs-maintabs="cookiescript">\n      <div tabindex="0" role="button" id="cookiescript_declaration" class="cookiescript_active" data-cs-maintab="declaration" data-cs-i18n-text="{&quot;en&quot;:&quot;Cookie declaration&quot;}">\n        Cookie declaration      <\/div>\n      <div tabindex="0" role="button" id="cookiescript_aboutcookies" data-cs-maintab="aboutcookies" data-cs-i18n-text="{&quot;en&quot;:&quot;About cookies&quot;}">\n        About cookies      <\/div>\n          <\/div>\n    <div class="cookiescript_fsd_tabs_content">\n      <div id="cookiescript_declarationwrap" data-cs-maintab-content="declaration">\n                            <div class="cookiescript_fsd_category" data-fsd-category="strict">\n            <div class="cookiescript_fsd_category_main">\n              <div class="cookiescript_fsd_category_info">\n                <div class="cookiescript_fsd__category_name" data-cs-i18n-text="{&quot;en&quot;:&quot;Strictly necessary&quot;}">\n                  Strictly necessary                <\/div>\n                <div class="cookiescript_category_description" data-cs-i18n-text="{&quot;en&quot;:&quot;Strictly necessary cookies allow core website functionality such as user login and account management. The website cannot be used properly without strictly necessary cookies.&quot;}">\n                  Strictly necessary cookies allow core website functionality such as user login and account management. The website cannot be used properly without strictly necessary cookies.                <\/div>\n              <\/div>\n              <div class="cookiescript_fsd_category_control">\n                <button\n                  data-cs-switch="strict"\n                  class="mdc-switch mdc-switch--selected"\n                  disabled                  type="button"\n                  role="switch"\n                  aria-checked="false"\n                >\n                  <input\n                    data-cookiescript="checkbox-input"\n                    type="checkbox"\n                    value="strict"\n                  \/>\n                  <div class="mdc-switch__track"><\/div>\n                  <div class="mdc-switch__handle-track">\n                    <div class="mdc-switch__handle">\n                      <div class="mdc-switch__shadow">\n                        <div class="mdc-elevation-overlay"><\/div>\n                      <\/div>\n                      <div class="mdc-switch__ripple"><\/div>\n                      <div class="mdc-switch__icons">\n                        <svg role="presentation" class="mdc-switch__icon mdc-switch__icon--on" viewBox="0 0 24 24">\n                          <path d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z" \/>\n                        <\/svg>\n                        <svg role="presentation" class="mdc-switch__icon mdc-switch__icon--off" viewBox="0 0 24 24">\n                          <path d="M20 13H4v-2h16v2z" \/>\n                        <\/svg>\n                      <\/div>\n                    <\/div>\n                  <\/div>\n                <\/button>\n              <\/div>\n            <\/div>\n            <div class="cookiescript_fsd_cookies cookiescript_hidden" data-cs-cookies-info="strict">\n                            <table class="cookiescript_fsd_cookies_table" data-cs-table-report="cookiescript">\n                <caption style="display: none;">Cookie report<\/caption>\n                <thead>\n                <tr>\n                  <th data-cs-report-name="true" scope = "col" data-cs-i18n-text="{&quot;en&quot;:&quot;Name&quot;}">\n                    Name                  <\/th>\n                  <th scope = "col" data-cs-i18n-text="{&quot;en&quot;:&quot;Provider \\\/ Domain&quot;}">\n                    <span data-cs-report-vendor="true">Provider<\/span> \/ <span data-cs-report-domain="true">Domain<\/span>\n                  <\/th>\n                  <th data-cs-report-expiration="true" scope = "col" data-cs-i18n-text="{&quot;en&quot;:&quot;Expiration&quot;}">\n                    Expiration                  <\/th>\n                  <th data-cs-report-description="true" scope = "col" data-cs-i18n-text="{&quot;en&quot;:&quot;Description&quot;}">\n                    Description                  <\/th>\n                <\/tr>\n                <\/thead>\n                <tbody>\n                                  <tr>\n                    <td>_GRECAPTCHA<\/td>\n                    <td>\n                                              <div class="cookiescript_vendor_name">\n                          <a target=\'_blank\' rel=\'nofollow\' href=\'https:\/\/policies.google.com\/privacy\'>Google LLC<\/a>                        <\/div>\n                                            www.google.com                    <\/td>\n                    <td data-cs-i18n-text="{&quot;en&quot;:&quot;6 months&quot;}">\n                      6 months                    <\/td>\n                    <td data-cs-i18n-text="{&quot;en&quot;:&quot;Google reCAPTCHA sets a necessary cookie (_GRECAPTCHA) when executed for the purpose of providing its risk analysis.&quot;}">\n                      Google reCAPTCHA sets a necessary cookie (_GRECAPTCHA) when executed for the purpose of providing its risk analysis.                    <\/td>\n                  <\/tr>\n                                  <tr>\n                    <td>CookieScriptConsent<\/td>\n                    <td>\n                                              <div class="cookiescript_vendor_name">\n                          <a target=\'_blank\' rel=\'nofollow\' href=\'https:\/\/cookie-script.com\/privacy-policy.html\'>CookieScript<\/a>                        <\/div>\n                                            www.netdreams.co.uk                    <\/td>\n                    <td data-cs-i18n-text="{&quot;en&quot;:&quot;29 days 23 hours&quot;}">\n                      29 days 23 hours                    <\/td>\n                    <td data-cs-i18n-text="{&quot;en&quot;:&quot;This cookie is used by Cookie-Script.com service to remember visitor cookie consent preferences. It is necessary for Cookie-Script.com cookie banner to work properly.&quot;}">\n                      This cookie is used by Cookie-Script.com service to remember visitor cookie consent preferences. It is necessary for Cookie-Script.com cookie banner to work properly.                    <\/td>\n                  <\/tr>\n                                <\/tbody>\n              <\/table>\n              \n              \n            <\/div>\n                        <div tabindex="0" role="button" class="cookiescript_fsd_cookies_control" data-cs-cookies-info-control="strict">\n              <span data-cs-cookies-open-text class="" data-cs-i18n-text="{&quot;en&quot;:&quot;Show cookies&quot;}">Show cookies<\/span>\n              <span data-cs-cookies-close-text class="cookiescript_hidden" data-cs-i18n-text="{&quot;en&quot;:&quot;Hide cookies&quot;}">Hide cookies<\/span>\n              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" role="img" xmlns="http:\/\/www.w3.org\/2000\/svg" viewBox="0 0 448 512">\n                <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" class=""><\/path>\n              <\/svg>\n            <\/div>\n                      <\/div>\n                            <div class="cookiescript_fsd_category" data-fsd-category="performance">\n            <div class="cookiescript_fsd_category_main">\n              <div class="cookiescript_fsd_category_info">\n                <div class="cookiescript_fsd__category_name" data-cs-i18n-text="{&quot;en&quot;:&quot;Performance&quot;}">\n                  Performance                <\/div>\n                <div class="cookiescript_category_description" data-cs-i18n-text="{&quot;en&quot;:&quot;Performance cookies are used to see how visitors use the website, eg. analytics cookies. Those cookies cannot be used to directly identify a certain visitor.&quot;}">\n                  Performance cookies are used to see how visitors use the website, eg. analytics cookies. Those cookies cannot be used to directly identify a certain visitor.                <\/div>\n              <\/div>\n              <div class="cookiescript_fsd_category_control">\n                <button\n                  data-cs-switch="performance"\n                  class="mdc-switch mdc-switch--unselected"\n                                    type="button"\n                  role="switch"\n                  aria-checked="false"\n                >\n                  <input\n                    data-cookiescript="checkbox-input"\n                    type="checkbox"\n                    value="performance"\n                  \/>\n                  <div class="mdc-switch__track"><\/div>\n                  <div class="mdc-switch__handle-track">\n                    <div class="mdc-switch__handle">\n                      <div class="mdc-switch__shadow">\n                        <div class="mdc-elevation-overlay"><\/div>\n                      <\/div>\n                      <div class="mdc-switch__ripple"><\/div>\n                      <div class="mdc-switch__icons">\n                        <svg role="presentation" class="mdc-switch__icon mdc-switch__icon--on" viewBox="0 0 24 24">\n                          <path d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z" \/>\n                        <\/svg>\n                        <svg role="presentation" class="mdc-switch__icon mdc-switch__icon--off" viewBox="0 0 24 24">\n                          <path d="M20 13H4v-2h16v2z" \/>\n                        <\/svg>\n                      <\/div>\n                    <\/div>\n                  <\/div>\n                <\/button>\n              <\/div>\n            <\/div>\n            <div class="cookiescript_fsd_cookies cookiescript_hidden" data-cs-cookies-info="performance">\n                            <table class="cookiescript_fsd_cookies_table" data-cs-table-report="cookiescript">\n                <caption style="display: none;">Cookie report<\/caption>\n                <thead>\n                <tr>\n                  <th data-cs-report-name="true" scope = "col" data-cs-i18n-text="{&quot;en&quot;:&quot;Name&quot;}">\n                    Name                  <\/th>\n                  <th scope = "col" data-cs-i18n-text="{&quot;en&quot;:&quot;Provider \\\/ Domain&quot;}">\n                    <span data-cs-report-vendor="true">Provider<\/span> \/ <span data-cs-report-domain="true">Domain<\/span>\n                  <\/th>\n                  <th data-cs-report-expiration="true" scope = "col" data-cs-i18n-text="{&quot;en&quot;:&quot;Expiration&quot;}">\n                    Expiration                  <\/th>\n                  <th data-cs-report-description="true" scope = "col" data-cs-i18n-text="{&quot;en&quot;:&quot;Description&quot;}">\n                    Description                  <\/th>\n                <\/tr>\n                <\/thead>\n                <tbody>\n                                  <tr>\n                    <td>_ga<\/td>\n                    <td>\n                                              <div class="cookiescript_vendor_name">\n                          <a target=\'_blank\' rel=\'nofollow\' href=\'https:\/\/policies.google.com\/privacy\'>Google LLC<\/a>                        <\/div>\n                                            .netdreams.co.uk                    <\/td>\n                    <td data-cs-i18n-text="{&quot;en&quot;:&quot;2 years&quot;}">\n                      2 years                    <\/td>\n                    <td data-cs-i18n-text="{&quot;en&quot;:&quot;This cookie name is associated with Google Universal Analytics - which is a significant update to Google\'s more commonly used analytics service. This cookie is used to distinguish unique users by assigning a randomly generated number as a client identifier. It is included in each page request in a site and used to calculate visitor, session and campaign data for the sites analytics reports. &quot;}">\n                      This cookie name is associated with Google Universal Analytics - which is a significant update to Google\'s more commonly used analytics service. This cookie is used to distinguish unique users by assigning a randomly generated number as a client identifier. It is included in each page request in a site and used to calculate visitor, session and campaign data for the sites analytics reports.                     <\/td>\n                  <\/tr>\n                                  <tr>\n                    <td>_gid<\/td>\n                    <td>\n                                              <div class="cookiescript_vendor_name">\n                          <a target=\'_blank\' rel=\'nofollow\' href=\'https:\/\/policies.google.com\/privacy\'>Google LLC<\/a>                        <\/div>\n                                            .netdreams.co.uk                    <\/td>\n                    <td data-cs-i18n-text="{&quot;en&quot;:&quot;1 day&quot;}">\n                      1 day                    <\/td>\n                    <td data-cs-i18n-text="{&quot;en&quot;:&quot;This cookie is set by Google Analytics. It stores and update a unique value for each page visited and is used to count and track pageviews.\\r\\n&quot;}">\n                      This cookie is set by Google Analytics. It stores and update a unique value for each page visited and is used to count and track pageviews.\r\n                    <\/td>\n                  <\/tr>\n                                <\/tbody>\n              <\/table>\n              \n              \n            <\/div>\n                        <div tabindex="0" role="button" class="cookiescript_fsd_cookies_control" data-cs-cookies-info-control="performance">\n              <span data-cs-cookies-open-text class="" data-cs-i18n-text="{&quot;en&quot;:&quot;Show cookies&quot;}">Show cookies<\/span>\n              <span data-cs-cookies-close-text class="cookiescript_hidden" data-cs-i18n-text="{&quot;en&quot;:&quot;Hide cookies&quot;}">Hide cookies<\/span>\n              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" role="img" xmlns="http:\/\/www.w3.org\/2000\/svg" viewBox="0 0 448 512">\n                <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" class=""><\/path>\n              <\/svg>\n            <\/div>\n                      <\/div>\n                            <div class="cookiescript_fsd_category" data-fsd-category="targeting">\n            <div class="cookiescript_fsd_category_main">\n              <div class="cookiescript_fsd_category_info">\n                <div class="cookiescript_fsd__category_name" data-cs-i18n-text="{&quot;en&quot;:&quot;Targeting&quot;}">\n                  Targeting                <\/div>\n                <div class="cookiescript_category_description" data-cs-i18n-text="{&quot;en&quot;:&quot;Targeting cookies are used to identify visitors between different websites, eg. content partners, banner networks. Those cookies may be used by companies to build a profile of visitor interests or show relevant ads on other websites.&quot;}">\n                  Targeting cookies are used to identify visitors between different websites, eg. content partners, banner networks. Those cookies may be used by companies to build a profile of visitor interests or show relevant ads on other websites.                <\/div>\n              <\/div>\n              <div class="cookiescript_fsd_category_control">\n                <button\n                  data-cs-switch="targeting"\n                  class="mdc-switch mdc-switch--unselected"\n                                    type="button"\n                  role="switch"\n                  aria-checked="false"\n                >\n                  <input\n                    data-cookiescript="checkbox-input"\n                    type="checkbox"\n                    value="targeting"\n                  \/>\n                  <div class="mdc-switch__track"><\/div>\n                  <div class="mdc-switch__handle-track">\n                    <div class="mdc-switch__handle">\n                      <div class="mdc-switch__shadow">\n                        <div class="mdc-elevation-overlay"><\/div>\n                      <\/div>\n                      <div class="mdc-switch__ripple"><\/div>\n                      <div class="mdc-switch__icons">\n                        <svg role="presentation" class="mdc-switch__icon mdc-switch__icon--on" viewBox="0 0 24 24">\n                          <path d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z" \/>\n                        <\/svg>\n                        <svg role="presentation" class="mdc-switch__icon mdc-switch__icon--off" viewBox="0 0 24 24">\n                          <path d="M20 13H4v-2h16v2z" \/>\n                        <\/svg>\n                      <\/div>\n                    <\/div>\n                  <\/div>\n                <\/button>\n              <\/div>\n            <\/div>\n            <div class="cookiescript_fsd_cookies cookiescript_hidden" data-cs-cookies-info="targeting">\n                            <table class="cookiescript_fsd_cookies_table" data-cs-table-report="cookiescript">\n                <caption style="display: none;">Cookie report<\/caption>\n                <thead>\n                <tr>\n                  <th data-cs-report-name="true" scope = "col" data-cs-i18n-text="{&quot;en&quot;:&quot;Name&quot;}">\n                    Name                  <\/th>\n                  <th scope = "col" data-cs-i18n-text="{&quot;en&quot;:&quot;Provider \\\/ Domain&quot;}">\n                    <span data-cs-report-vendor="true">Provider<\/span> \/ <span data-cs-report-domain="true">Domain<\/span>\n                  <\/th>\n                  <th data-cs-report-expiration="true" scope = "col" data-cs-i18n-text="{&quot;en&quot;:&quot;Expiration&quot;}">\n                    Expiration                  <\/th>\n                  <th data-cs-report-description="true" scope = "col" data-cs-i18n-text="{&quot;en&quot;:&quot;Description&quot;}">\n                    Description                  <\/th>\n                <\/tr>\n                <\/thead>\n                <tbody>\n                                  <tr>\n                    <td>_gat_gtag_UA_2645710_1<\/td>\n                    <td>\n                                            .netdreams.co.uk                    <\/td>\n                    <td data-cs-i18n-text="{&quot;en&quot;:&quot;51 seconds&quot;}">\n                      51 seconds                    <\/td>\n                    <td data-cs-i18n-text="{&quot;en&quot;:&quot;This cookie is part of Google Analytics and is used to limit requests (throttle request rate).&quot;}">\n                      This cookie is part of Google Analytics and is used to limit requests (throttle request rate).                    <\/td>\n                  <\/tr>\n                                <\/tbody>\n              <\/table>\n              \n              \n            <\/div>\n                        <div tabindex="0" role="button" class="cookiescript_fsd_cookies_control" data-cs-cookies-info-control="targeting">\n              <span data-cs-cookies-open-text class="" data-cs-i18n-text="{&quot;en&quot;:&quot;Show cookies&quot;}">Show cookies<\/span>\n              <span data-cs-cookies-close-text class="cookiescript_hidden" data-cs-i18n-text="{&quot;en&quot;:&quot;Hide cookies&quot;}">Hide cookies<\/span>\n              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" role="img" xmlns="http:\/\/www.w3.org\/2000\/svg" viewBox="0 0 448 512">\n                <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" class=""><\/path>\n              <\/svg>\n            <\/div>\n                      <\/div>\n                            <div class="cookiescript_fsd_category" data-fsd-category="functionality">\n            <div class="cookiescript_fsd_category_main">\n              <div class="cookiescript_fsd_category_info">\n                <div class="cookiescript_fsd__category_name" data-cs-i18n-text="{&quot;en&quot;:&quot;Functionality&quot;}">\n                  Functionality                <\/div>\n                <div class="cookiescript_category_description" data-cs-i18n-text="{&quot;en&quot;:&quot;Functionality cookies are used to remember visitor information on the website, eg. language, timezone, enhanced content.&quot;}">\n                  Functionality cookies are used to remember visitor information on the website, eg. language, timezone, enhanced content.                <\/div>\n              <\/div>\n              <div class="cookiescript_fsd_category_control">\n                <button\n                  data-cs-switch="functionality"\n                  class="mdc-switch mdc-switch--unselected"\n                                    type="button"\n                  role="switch"\n                  aria-checked="false"\n                >\n                  <input\n                    data-cookiescript="checkbox-input"\n                    type="checkbox"\n                    value="functionality"\n                  \/>\n                  <div class="mdc-switch__track"><\/div>\n                  <div class="mdc-switch__handle-track">\n                    <div class="mdc-switch__handle">\n                      <div class="mdc-switch__shadow">\n                        <div class="mdc-elevation-overlay"><\/div>\n                      <\/div>\n                      <div class="mdc-switch__ripple"><\/div>\n                      <div class="mdc-switch__icons">\n                        <svg role="presentation" class="mdc-switch__icon mdc-switch__icon--on" viewBox="0 0 24 24">\n                          <path d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z" \/>\n                        <\/svg>\n                        <svg role="presentation" class="mdc-switch__icon mdc-switch__icon--off" viewBox="0 0 24 24">\n                          <path d="M20 13H4v-2h16v2z" \/>\n                        <\/svg>\n                      <\/div>\n                    <\/div>\n                  <\/div>\n                <\/button>\n              <\/div>\n            <\/div>\n            <div class="cookiescript_fsd_cookies cookiescript_hidden" data-cs-cookies-info="functionality">\n              \n              \n            <\/div>\n                      <\/div>\n                            <div class="cookiescript_fsd_category" data-fsd-category="unclassified">\n            <div class="cookiescript_fsd_category_main">\n              <div class="cookiescript_fsd_category_info">\n                <div class="cookiescript_fsd__category_name" data-cs-i18n-text="{&quot;en&quot;:&quot;Unclassified&quot;}">\n                  Unclassified                <\/div>\n                <div class="cookiescript_category_description" data-cs-i18n-text="{&quot;en&quot;:&quot;Unclassified cookies are cookies that do not belong to any other category or are in the process of categorization.&quot;}">\n                  Unclassified cookies are cookies that do not belong to any other category or are in the process of categorization.                <\/div>\n              <\/div>\n              <div class="cookiescript_fsd_category_control">\n                <button\n                  data-cs-switch="unclassified"\n                  class="mdc-switch mdc-switch--unselected"\n                                    type="button"\n                  role="switch"\n                  aria-checked="false"\n                >\n                  <input\n                    data-cookiescript="checkbox-input"\n                    type="checkbox"\n                    value="unclassified"\n                  \/>\n                  <div class="mdc-switch__track"><\/div>\n                  <div class="mdc-switch__handle-track">\n                    <div class="mdc-switch__handle">\n                      <div class="mdc-switch__shadow">\n                        <div class="mdc-elevation-overlay"><\/div>\n                      <\/div>\n                      <div class="mdc-switch__ripple"><\/div>\n                      <div class="mdc-switch__icons">\n                        <svg role="presentation" class="mdc-switch__icon mdc-switch__icon--on" viewBox="0 0 24 24">\n                          <path d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z" \/>\n                        <\/svg>\n                        <svg role="presentation" class="mdc-switch__icon mdc-switch__icon--off" viewBox="0 0 24 24">\n                          <path d="M20 13H4v-2h16v2z" \/>\n                        <\/svg>\n                      <\/div>\n                    <\/div>\n                  <\/div>\n                <\/button>\n              <\/div>\n            <\/div>\n            <div class="cookiescript_fsd_cookies cookiescript_hidden" data-cs-cookies-info="unclassified">\n                            <table class="cookiescript_fsd_cookies_table" data-cs-table-report="cookiescript">\n                <caption style="display: none;">Cookie report<\/caption>\n                <thead>\n                <tr>\n                  <th data-cs-report-name="true" scope = "col" data-cs-i18n-text="{&quot;en&quot;:&quot;Name&quot;}">\n                    Name                  <\/th>\n                  <th scope = "col" data-cs-i18n-text="{&quot;en&quot;:&quot;Provider \\\/ Domain&quot;}">\n                    <span data-cs-report-vendor="true">Provider<\/span> \/ <span data-cs-report-domain="true">Domain<\/span>\n                  <\/th>\n                  <th data-cs-report-expiration="true" scope = "col" data-cs-i18n-text="{&quot;en&quot;:&quot;Expiration&quot;}">\n                    Expiration                  <\/th>\n                  <th data-cs-report-description="true" scope = "col" data-cs-i18n-text="{&quot;en&quot;:&quot;Description&quot;}">\n                    Description                  <\/th>\n                <\/tr>\n                <\/thead>\n                <tbody>\n                                  <tr>\n                    <td>wires<\/td>\n                    <td>\n                                            www.netdreams.co.uk                    <\/td>\n                    <td data-cs-i18n-text="{&quot;en&quot;:&quot;Session&quot;}">\n                      Session                    <\/td>\n                    <td data-cs-i18n-text="{&quot;en&quot;:null}">\n                                          <\/td>\n                  <\/tr>\n                                <\/tbody>\n              <\/table>\n              \n              \n            <\/div>\n                        <div tabindex="0" role="button" class="cookiescript_fsd_cookies_control" data-cs-cookies-info-control="unclassified">\n              <span data-cs-cookies-open-text class="" data-cs-i18n-text="{&quot;en&quot;:&quot;Show cookies&quot;}">Show cookies<\/span>\n              <span data-cs-cookies-close-text class="cookiescript_hidden" data-cs-i18n-text="{&quot;en&quot;:&quot;Hide cookies&quot;}">Hide cookies<\/span>\n              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" role="img" xmlns="http:\/\/www.w3.org\/2000\/svg" viewBox="0 0 448 512">\n                <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" class=""><\/path>\n              <\/svg>\n            <\/div>\n                      <\/div>\n              <\/div>\n      <div id="cookiescript_aboutwrap" class="cookiescript_hidden" data-cs-maintab-content="aboutcookies">\n        <span data-cs-i18n-text="{&quot;en&quot;:&quot;Cookies are small text files that are placed on your computer by websites that you visit. Websites use cookies to help users navigate efficiently and perform certain functions. Cookies that are required for the website to operate properly are allowed to be set without your permission. All other cookies need to be approved before they can be set in the browser. &lt;br \\\/&gt;\\r\\n&lt;br \\\/&gt;\\r\\nYou can change your consent to cookie usage at any time on our Privacy Policy page.&quot;}">\n          Cookies are small text files that are placed on your computer by websites that you visit. Websites use cookies to help users navigate efficiently and perform certain functions. Cookies that are required for the website to operate properly are allowed to be set without your permission. All other cookies need to be approved before they can be set in the browser. <br \/>\r\n<br \/>\r\nYou can change your consent to cookie usage at any time on our Privacy Policy page.        <\/span>\n                  <div>\n            <span data-cs-i18n-text="{&quot;en&quot;:&quot;We also use cookies to collect data for the purpose of personalizing and measuring the effectiveness of our advertising. For more details, visit the &lt;a href=\\&quot;https:\\\/\\\/business.safety.google\\\/privacy\\\/\\&quot; target=\\&quot;_blank\\&quot;&gt;Google Privacy Policy&lt;\\\/a&gt;.&quot;}">\n              We also use cookies to collect data for the purpose of personalizing and measuring the effectiveness of our advertising. For more details, visit the <a href="https:\/\/business.safety.google\/privacy\/" target="_blank">Google Privacy Policy<\/a>.            <\/span>\n          <\/div>\n                <div style="display: none;" data-cs-consent-key-box="cookie-script">\n          <span data-cs-i18n-text="{&quot;en&quot;:&quot;Cookies consent ID&quot;}">\n            Cookies consent ID          <\/span>:\n          <span data-cs-consent-key="cookie-script"><\/span>\n        <\/div>\n      <\/div>\n          <\/div>\n    <div class="cookiescript_fsd_footer">\n      <div id="cookiescript_buttons">\n        <div id="cookiescript_accept" tabindex="0" role="button" data-cs-i18n-text="{&quot;en&quot;:&quot;Accept \\ud83d\\udc8b&quot;}">\n          Accept \ud83d\udc8b        <\/div>\n        <div id="cookiescript_reject" tabindex="0" role="button" data-cs-i18n-text="{&quot;en&quot;:&quot;Decline \\u2620\\ufe0f&quot;}">\n          Decline \u2620\ufe0f        <\/div>\n        <div id="cookiescript_save" tabindex="0" role="button" data-cs-i18n-text="{&quot;en&quot;:&quot;Save \\ud83d\\udc96 Close&quot;}">\n          Save \ud83d\udc96 Close        <\/div>\n      <\/div>\n      \n      <div class="cookiescript_fsd_reportby"  role="contentinfo">\n          Cookie <a id="cookiescript_fsd_reportlink"  href="https:\/\/cookie-script.com\/cookie-report?identifier=5c71994647be018d1802a498c66b89f3" target="_blank" aria-label="report, opens a new window">report<\/a> created by <a href="https:\/\/cookie-script.com" id="cookiescript_fsd_cookiescriptlink" title="CookieScript Consent Management Platform" target="_blank" aria-label="CookieScript Consent Management Platform, opens a new window">CookieScript<\/a>\n      <\/div>\n    <\/div>\n  <\/div>\n  \n<\/div>\n',
            Vt = 'CookieScriptConsent',
            Be = 30,
            bi = window.location.href,
            Wt = '6b2dea4952e7fd860a3fe27058d5f028',
            gi = !1,
            Yt = {
                'strict': ['_GRECAPTCHA', 'CookieScriptConsent'],
                'unclassified': ['wires'],
                'performance': ['_ga', '_gid'],
                'targeting': ['_gat_gtag_UA_2645710_1']
            };
        var mi = {
            'performance': [{
                'name': '_ga',
                'domain': '.netdreams.co.uk',
                'path': '\/',
                'expire': '63071991',
                'same_site': null,
                'session': '0',
                'secure': '0',
                'value': 'GA1.3.557854394.1666015399'
            }, {
                'name': '_gid',
                'domain': '.netdreams.co.uk',
                'path': '\/',
                'expire': '86391',
                'same_site': null,
                'session': '0',
                'secure': '0',
                'value': 'GA1.3.2134877825.1666015399'
            }],
            'targeting': [{
                'name': '_gat_gtag_UA_2645710_1',
                'domain': '.netdreams.co.uk',
                'path': '\/',
                'expire': '51',
                'same_site': null,
                'session': '0',
                'secure': '0',
                'value': '1'
            }]
        };
        var ui = [],
            fi = ['_GRECAPTCHA', 'CookieScriptConsent', 'wires', '_ga', '_gid', '_gat_gtag_UA_2645710_1'],
            o = ['strict', 'unclassified', 'performance', 'targeting', 'functionality'],
            Q = 1,
            Ht = 'netdreams.co.uk',
            hi = '',
            Ot = [],
            Rt = {};
        var Kt = [],
            G = !1,
            ee = !1,
            Ie = '0',
            Ne = '',
            Pe = [],
            Me = null,
            Ge = [],
            Fe = null,
            He = null,
            Qt = !1,
            te = ['_ga', '_gid', '_ga_', '_gac_gb_', '_gat', 'AMP_TOKEN', '_gac_', '__utma', '__utmt', '__utmb', '__utmc', '__utmz', '__utmv'],
            ei = !1,
            ie = !1,
            r = 'en',
            ti = !1,
            C = Number(0),
            ce = !1,
            oe = !1,
            j = null,
            F = '',
            g = Boolean('1'),
            ne = function(e) {
                if (typeof e !== 'undefined') {
                    R(e);
                    return
                };
                if (Se()) {
                    var t = P();
                    R(t)
                }
            },
            Oe = function(e) {
                return !1
            },
            Re = function(e, i) {
                if (i === undefined) {
                    i = {}
                };
                var c = e;
                if (e === 'def_cookie_lang') {
                    c = r
                };
                var g = i['nodeScope'] ? i['nodeScope'].querySelectorAll('[data-cs-i18n-text]') : document.querySelectorAll('[data-cs-i18n-text]'),
                    w = i['nodeScope'] ? i['nodeScope'].querySelectorAll('[data-cs-i18n-url]') : document.querySelectorAll('[data-cs-i18n-url]'),
                    v = i['nodeScope'] ? i['nodeScope'].querySelectorAll('[data-cs-i18n-table-label]') : document.querySelectorAll('[data-cs-i18n-table-label]'),
                    m, k, b;
                if (typeof g !== 'undefined') {
                    m = Array.prototype.slice.call(g);
                    for (var h = 0; h < m.length; h++) {
                        var d = m[h];
                        try {
                            var n = JSON.parse(d.getAttribute('data-cs-i18n-text'));
                            if (n && n[c] && n[c].length > 0) {
                                d.innerHTML = n[c];
                                if (d.getAttribute('data-cs-i18n-read')) {
                                    d.setAttribute('data-cs-i18n-read', n[c])
                                }
                            } else if (n && n[r] && n[r].length > 0) {
                                d.innerHTML = n[r];
                                if (d.getAttribute('data-cs-i18n-read')) {
                                    d.setAttribute('data-cs-i18n-read', n[r])
                                }
                            }
                        } catch (o) {}
                    }
                };
                if (typeof w !== 'undefined') {
                    k = Array.prototype.slice.call(w);
                    for (var f = 0; f < k.length; f++) {
                        var u = k[f];
                        try {
                            var a = JSON.parse(u.getAttribute('data-cs-i18n-url'));
                            if (a && a[c] && a[c].length > 0) {
                                u.setAttribute('href', a[c])
                            } else if (a && a[r] && a[r].length > 0) {
                                u.setAttribute('href', a[r])
                            }
                        } catch (o) {}
                    }
                };
                if (typeof v !== 'undefined') {
                    b = Array.prototype.slice.call(v);
                    for (var l = 0; l < b.length; l++) {
                        var p = b[l];
                        try {
                            var s = JSON.parse(p.getAttribute('data-cs-i18n-table-label'));
                            if (s && s[c] && s[c].length > 0) {
                                p.setAttribute('label', s[c])
                            } else if (s && s[r] && s[r].length > 0) {
                                p.setAttribute('label', s[r])
                            }
                        } catch (o) {}
                    }
                };
                if (i['rebuildIab'] && i['rebuildIab'] === !0) {
                    me()
                };
                t.currentLang = c
            },
            z = function(e) {
                t.currentLang = 'en';
                return !1
            },
            re = function() {
                var e = document.querySelectorAll('table[data-cs-table-report="cookiescript"]');
                Array.prototype.slice.call(e).forEach(function(e) {
                    var o = e.querySelectorAll('thead th'),
                        t = [],
                        i = [];
                    Array.prototype.slice.call(o).forEach(function(e) {
                        t.push(e.innerText);
                        i.push(e.getAttribute('data-cs-i18n-text'))
                    });
                    var c = e.querySelectorAll('tbody tr');
                    Array.prototype.slice.call(c).forEach(function(e) {
                        Array.prototype.slice.call(e.children).forEach(function(e, c) {
                            e.setAttribute('label', t[c]);
                            e.setAttribute('data-cs-i18n-table-label', i[c])
                        })
                    })
                })
            },
            se = function() {
                document.addEventListener('keydown', function(e) {
                    if (e.key === 'Tab') {
                        var t = document.getElementById('cookiescript_injected');
                        if (t) {
                            e.preventDefault();
                            e.stopPropagation();
                            t.focus()
                        }
                    }
                }, {
                    once: !0
                })
            },
            ii = function(e) {
                return !1
            },
            ae = function() {
                return !1
            },
            de = function() {
                return !1
            },
            L = function() {
                Ue();
                var e = document.querySelector('[data-cs-id="cookiescript_injected"]');
                if (e) {
                    setTimeout(function() {
                        w(e, 200, se)
                    }, 200);
                    ae()
                } else {
                    setTimeout(function() {
                        he()
                    }, 150)
                }
            },
            q = function(e) {
                var i = document.querySelector('[data-cs-id="cookiescript_injected"]'),
                    t = document.getElementById('cookiescript_injected_fsd');
                if (i) {
                    T(i, e || 200);
                    Xe()
                };
                if (t) {
                    T(t, 200, function() {
                        t.parentNode.removeChild(t)
                    })
                };
                de()
            },
            S = function() {
                return !1
            },
            Ue = function(e) {
                return !1
            },
            ci = function() {
                var e = document.getElementById('cookiescript_cookietablewrap');
                if (e && e.classList.contains('cookiescript_hidden')) {
                    e.classList.remove('cookiescript_hidden')
                };
                var t = document.getElementById('cookiescript_injected');
                if (t) {
                    t.classList.add('hascookiereport')
                };
                pe(!0)
            },
            Xe = function() {
                var e = document.getElementById('cookiescript_cookietablewrap');
                if (e && !e.classList.contains('cookiescript_hidden')) {
                    e.classList.add('cookiescript_hidden')
                };
                var t = document.getElementById('cookiescript_injected');
                if (t) {
                    t.classList.remove('hascookiereport')
                };
                pe(!1)
            },
            pe = function(e) {
                var t = document.querySelector('#cookiescript_manage_wrap span[data-cs-show-title="cookie-script"]'),
                    i = document.querySelector('#cookiescript_manage_wrap span[data-cs-hide-title="cookie-script"]');
                if (t && i) {
                    if (e) {
                        T(t, 1);
                        w(i, 1)
                    } else {
                        T(i, 1);
                        w(t, 1)
                    }
                }
            },
            H = function(t) {
                e(t, 'keydown', function(e) {
                    if (e.key === ' ' || e.key === 'Enter' || e.key === 'Spacebar') {
                        e.preventDefault();
                        e.currentTarget.click()
                    }
                }, !0)
            },
            le = function(e, t, i) {
                var p = e.target || e.srcElement,
                    a = p.getAttribute(t);
                if (a && a.length > 0) {
                    var s = document.querySelectorAll('div[' + i + ']');
                    if (s) {
                        for (var r = 0; r < s.length; r++) {
                            var c = s[r],
                                o = c.getAttribute(i),
                                d = o && o === a,
                                n = document.querySelector('div[' + t + '="' + o + '"]');
                            if (n) {
                                n.classList.remove('cookiescript_active');
                                d && n.classList.add('cookiescript_active')
                            };
                            c.classList.add('cookiescript_hidden');
                            d && c.classList.remove('cookiescript_hidden')
                        }
                    }
                }
            },
            ue = function() {
                var t = document.querySelector('[data-cs-consent-key-box="cookie-script"]'),
                    i = document.querySelector('[data-cs-consent-key="cookie-script"]');
                if (t && i) {
                    var e = d('key');
                    if (e && typeof e === 'string' && e.length > 0) {
                        i.innerText = e;
                        t.style.display = ''
                    }
                }
            },
            Je = function() {
                var e = document.querySelector('[data-cs-id="cookiescript_injected"]'),
                    t;
                if (st()) {
                    t = be()
                };
                if (e) {
                    e.parentNode.removeChild(e)
                };
                Ze(t)
            },
            Ve = function() {
                var t = rt(),
                    i = function(e) {
                        e.classList.remove('mdc-switch--unselected');
                        e.classList.add('mdc-switch--selected')
                    },
                    c = function(e) {
                        e.classList.remove('mdc-switch--selected');
                        e.classList.add('mdc-switch--unselected')
                    };
                e(t, 'click', function(e) {
                    var t = e.currentTarget,
                        o, r = t.getAttribute('data-cs-switch');
                    if (t.classList.contains('mdc-switch--selected')) {
                        c(t);
                        o = !1
                    } else {
                        i(t);
                        o = !0
                    };
                    var n = document.querySelector('input[data-cookiescript="checkbox-input"][value="' + r + '"]');
                    if (r === 'strict') {
                        n.checked = !0
                    } else {
                        n.checked = o
                    }
                }, !0);
                var o = A();
                e(o, 'change', function(e) {
                    var o = e.currentTarget;
                    t.forEach(function(e) {
                        if (o.value === e.getAttribute('data-cs-switch')) {
                            if (o.checked) {
                                i(e)
                            } else {
                                c(e)
                            }
                        }
                    })
                }, !0)
            },
            fe = function() {
                var i = document.getElementById('cookiescript_save'),
                    c = document.getElementById('cookiescript_accept'),
                    o = document.getElementById('cookiescript_reject'),
                    n = document.getElementById('cookiescript_close');
                e(i, 'click', function() {
                    t.acceptAction()
                });
                e(i, 'keydown', function(e) {
                    if (e.key === ' ' || e.key === 'Enter' || e.key === 'Spacebar') {
                        e.preventDefault();
                        i.click()
                    }
                });
                e(c, 'click', function() {
                    t.acceptAllAction()
                });
                e(c, 'keydown', function(e) {
                    if (e.key === ' ' || e.key === 'Enter' || e.key === 'Spacebar') {
                        e.preventDefault();
                        c.click()
                    }
                });
                e(o, 'click', function() {
                    t.rejectAllAction()
                });
                e(o, 'keydown', function(e) {
                    if (e.key === ' ' || e.key === 'Enter' || e.key === 'Spacebar') {
                        e.preventDefault();
                        o.click()
                    }
                });
                e(document.getElementById('cookiescript_readmore'), 'click', function() {
                    a('readmore', '')
                });
                e(n, 'click', function() {
                    q();
                    S();
                    a('close', '');
                    ut()
                });
                e(n, 'keydown', function(e) {
                    if (e.key === ' ' || e.key === 'Enter' || e.key === 'Spacebar') {
                        e.preventDefault();
                        n.click()
                    }
                });
                var r = document.querySelectorAll('div[data-cs-maintabs="cookiescript"] > div');
                e(r, 'click', function(e) {
                    le(e, 'data-cs-maintab', 'data-cs-maintab-content')
                }, !0);
                H(r);
                ue();
                window.addEventListener('CookieScriptConsentKeyUpdate', ue)
            },
            We = function() {
                var o = A(),
                    r = function() {
                        var e = document.getElementById('cookiescript_accept'),
                            t = document.getElementById('cookiescript_save');
                        if (!e.classList.contains('cookiescript_hidden')) {
                            e.classList.add('cookiescript_hidden');
                            e.classList.add('cookiescript_bigger');
                            t.classList.add('cookiescript_bigger');
                            setTimeout(function() {
                                e.style.display = 'none';
                                t.style.display = 'inline-block';
                                t.classList.remove('cookiescript_bigger')
                            }, 100)
                        }
                    };
                for (var i = 0; i < o.length; i++) {
                    var n = o[i];
                    e(n, 'click', function(e) {
                        r()
                    })
                };
                var t = document.getElementById('cookiescript_manage_wrap');
                e(t, 'click', function() {
                    Je()
                });
                e(t, 'keydown', function(e) {
                    if (e.key === ' ' || e.key === 'Enter' || e.key === 'Spacebar') {
                        e.preventDefault();
                        t.click()
                    }
                });
                var c = document.querySelectorAll('div[data-cs-tabs="cookiescript"] > div');
                e(c, 'click', function(e) {
                    le(e, 'data-cs-tab', 'data-cs-tab-content')
                }, !0);
                H(c);
                ae()
            },
            Ye = function() {
                Ve();
                var t = document.querySelectorAll('[data-cs-cookies-info-control]');
                e(t, 'click', function(e) {
                    var t = e.currentTarget,
                        c = t.getAttribute('data-cs-cookies-info-control'),
                        i = document.querySelector('[data-cs-cookies-info="' + c + '"]');
                    if (t.classList.contains('active')) {
                        i.classList.add('cookiescript_hidden');
                        t.querySelector('[data-cs-cookies-open-text]').classList.remove('cookiescript_hidden');
                        t.querySelector('[data-cs-cookies-close-text]').classList.add('cookiescript_hidden');
                        t.classList.remove('active')
                    } else {
                        i.classList.remove('cookiescript_hidden');
                        t.querySelector('[data-cs-cookies-open-text]').classList.add('cookiescript_hidden');
                        t.querySelector('[data-cs-cookies-close-text]').classList.remove('cookiescript_hidden');
                        t.classList.add('active')
                    }
                }, !0);
                H(t);
                if (!ie) {
                    me();
                    ie = !0
                }
            },
            Ze = function(e) {
                D(document.body, Jt);
                z();
                re();
                var i = document.getElementById('cookiescript_injected_fsd');
                w(i, 200);
                fe();
                Ye();
                ne(e);
                Oe(t.currentLang)
            },
            he = function(e) {
                D(e ? e : document.body, Xt);
                z();
                re();
                var t = document.getElementById('cookiescript_injected');
                w(t, 200, se);
                fe();
                We();
                ne()
            },
            Ke = function() {
                if (De.length > 0) {
                    D(document.body, De);
                    var t = document.getElementById('cookiescript_badge');
                    setTimeout(function() {
                        z(t);
                        w(t, 200)
                    }, 200);
                    e(t, 'click', function() {
                        L()
                    });
                    e(t, 'keydown', function(e) {
                        if (e.key === ' ' || e.key === 'Enter' || e.key === 'Spacebar') {
                            e.preventDefault();
                            t.click()
                        }
                    })
                }
            },
            me = function() {
                return !1
            },
            Qe = function() {
                var e = document.querySelector('style[data-type="cookiescriptstyles"]'),
                    t = document.querySelector('[data-cs-id="cookiescript_injected"]'),
                    i = document.getElementById('cookiescript_badge'),
                    c = document.getElementById('cookiescript_injected_fsd');
                if (t) {
                    t.parentNode.removeChild(t)
                };
                if (c) {
                    c.parentNode.removeChild(c)
                };
                if (i) {
                    i.parentNode.removeChild(i)
                };
                if (e) {
                    e.parentNode.removeChild(e)
                };
                de()
            },
            et = function() {
                var s = document.querySelectorAll('iframe[data-cookiescript="accepted"]'),
                    c = Array.prototype.slice.call(s);
                if (c.length > 0) {
                    for (var i = 0; i < c.length; i++) {
                        var e = c[i];
                        if (!e.getAttribute('src')) {
                            var o = e.getAttribute('alt') || '',
                                n = e.getAttribute('data-alt-img'),
                                r = o;
                            if (n) {
                                r = '<img alt="' + o + '" src="' + n + '" />'
                            };
                            var t = (e.contentWindow) ? e.contentWindow : (e.contentDocument.document) ? e.contentDocument.document : e.contentDocument;
                            t.document.open();
                            t.document.write(r);
                            t.document.close()
                        }
                    }
                }
            },
            E = function(e) {
                var t = document.getElementById('csconsentcheckbox');
                if (t) {
                    t.checked = e
                }
            },
            tt = function() {
                var o = document.getElementById('csconsentcheckbox');
                e(o, 'change', function(e) {
                    var i = e.target || e.srcElement;
                    if (i.checked) {
                        t.acceptAllAction()
                    } else {
                        t.rejectAllAction()
                    }
                });
                var c = document.getElementById('csconsentlink');
                e(c, 'click', function() {
                    L()
                });
                var i = document.getElementsByClassName('csconsentlink');
                e(i, 'click', function() {
                    L()
                }, !0)
            },
            it = function() {
                return !1
            },
            ct = function() {
                return !1
            },
            ot = function() {
                return !1
            },
            nt = function() {
                return !1
            },
            rt = function() {
                var e = document.querySelectorAll('[data-cs-switch]');
                if (typeof e !== 'undefined') {
                    return Array.prototype.slice.call(e)
                };
                return []
            },
            A = function() {
                var e = document.querySelectorAll('input[data-cookiescript="checkbox-input"]');
                if (typeof e !== 'undefined') {
                    return Array.prototype.slice.call(e)
                };
                return []
            },
            st = function() {
                var e = document.querySelectorAll('input[data-cookiescript="checkbox-input"]');
                if (typeof e !== 'undefined' && e.length > 0) {
                    return !0
                };
                return !1
            },
            O = function(e) {
                var i = [];
                for (var t = 0; t < e.length; t++) {
                    if (e[t] !== 'strict') {
                        i.push(e[t])
                    }
                };
                return i
            },
            ke = function(e) {
                var c = A();
                for (var i = 0; i < c.length; i++) {
                    var t = c[i];
                    if (t.value === 'strict') {
                        t.checked = !0
                    } else {
                        t.checked = e
                    };
                    X('change', t)
                }
            },
            R = function(e) {
                var c = A();
                for (var i = 0; i < c.length; i++) {
                    var t = c[i];
                    if (t.value === 'strict' || s(e, t.value)) {
                        t.checked = !0
                    } else {
                        t.checked = !1
                    };
                    X('change', t)
                }
            },
            U = function(e) {
                if (typeof CookieScriptReport !== 'undefined' && CookieScriptReport.instance) {
                    CookieScriptReport.instance.setStateCheckboxes(e)
                }
            },
            be = function() {
                var i = [],
                    c = A();
                for (var t = 0; t < c.length; t++) {
                    var e = c[t];
                    if (e.checked || e.value === 'strict') {
                        i.push(e.value)
                    }
                };
                return v(i)
            },
            at = function() {
                X('DOMContentLoaded', window.document)
            },
            dt = function() {
                t.onAcceptAll();
                h('CookieScriptAcceptAll');
                if (typeof o !== 'undefined' && o.length > 0) {
                    for (var e = 0; e < o.length; e++) {
                        p(o[e])
                    }
                } else {
                    p('all')
                }
            },
            pt = function(e) {
                var c = {
                    categories: v(e)
                };
                t.onAccept(c);
                h('CookieScriptAccept', c);
                for (var i = 0; i < e.length; i++) {
                    p(e[i])
                }
            },
            lt = function() {
                t.onReject();
                h('CookieScriptReject');
                p('strict')
            },
            ut = function() {
                t.onClose();
                h('CookieScriptClose')
            },
            p = function(e) {
                var i = 'CookieScriptCategory-' + e;
                if (s(t.dispatchEventNames, i)) return;
                t.dispatchEventNames.push(i);
                t.dispatchEventNames = v(t.dispatchEventNames);
                h(i);
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    'event': i
                })
            },
            h = function(e, t) {
                try {
                    var c;
                    if (typeof(Event) === 'function') {
                        c = new CustomEvent(e, {
                            bubbles: !0,
                            cancelable: !0,
                            detail: t
                        })
                    } else {
                        c = document.createEvent('CustomEvent');
                        c.initCustomEvent(e, !0, !0, t)
                    };
                    window.document.dispatchEvent(c)
                } catch (i) {
                    l('Warning: You browser not support dispatch event')
                }
            },
            X = function(e, t) {
                try {
                    var c;
                    if (typeof(Event) === 'function') {
                        c = new Event(e, {
                            bubbles: !0,
                            cancelable: !0
                        })
                    } else {
                        c = document.createEvent('Event');
                        c.initEvent(e, !0, !0)
                    };
                    t.dispatchEvent(c)
                } catch (i) {
                    l('Warning: You browser not support dispatch event')
                }
            },
            w = function(e, t, i) {
                var n = we(e, 'opacity'),
                    r = n ? n : 1;
                e.style.opacity = 0;
                e.style.display = '';
                var o = +new Date(),
                    c = function() {
                        e.style.opacity = +e.style.opacity + (new Date() - o) / t;
                        o = +new Date();
                        if (+e.style.opacity < r) {
                            (window.requestAnimationFrame && requestAnimationFrame(c)) || setTimeout(c, 16)
                        } else {
                            e.style.opacity = '';
                            if (i !== undefined) {
                                i()
                            }
                        }
                    };
                c()
            },
            T = function(e, t, i) {
                var n = we(e, 'opacity');
                e.style.opacity = n ? n : 1;
                var o = +new Date(),
                    c = function() {
                        e.style.opacity = +e.style.opacity - (new Date() - o) / t;
                        o = +new Date();
                        if (+e.style.opacity > 0) {
                            (window.requestAnimationFrame && requestAnimationFrame(c)) || setTimeout(c, 16)
                        } else {
                            e.style.display = 'none';
                            e.style.opacity = '';
                            if (i !== undefined) {
                                i()
                            }
                        }
                    };
                c()
            },
            s = function(e, t) {
                var i = !1,
                    c = e.indexOf(t);
                if (c >= 0) {
                    i = !0
                };
                return i
            },
            ft = function(e, t) {
                if (e) {
                    e.insertAdjacentElement('afterend', t);
                    e.parentNode.removeChild(e)
                }
            },
            ge = function(e, t) {
                if (e) {
                    e.insertAdjacentHTML('afterend', t);
                    e.parentNode.removeChild(e)
                }
            },
            D = function(e, t) {
                if (e) {
                    e.insertAdjacentHTML('beforeend', t)
                }
            },
            v = function(e) {
                var i = [];
                for (var t = 0; t < e.length; t++) {
                    if (i.indexOf(e[t]) === -1 && e[t] !== '') {
                        i.push(e[t])
                    }
                };
                return i
            },
            l = function(e) {
                console && ('function' == typeof console.warn ? console.warn(e) : console.log && console.log(e))
            },
            e = function(e, t, i, o) {
                var n = function(e, t, i) {
                    if (!e) return;
                    try {
                        if (e.attachEvent) {
                            e['e' + t + i] = i;
                            e[t + i] = function() {
                                e['e' + t + i](window.event)
                            };
                            e.attachEvent('on' + t, e[t + i])
                        } else {
                            e.addEventListener(t, i, !1)
                        }
                    } catch (c) {}
                };
                if (o && e && e.length > 0) {
                    for (var c = 0; c < e.length; c++) {
                        n(e[c], t, i)
                    }
                } else {
                    n(e, t, i)
                }
            },
            oi = function(e, t, i, o) {
                var n = function(e, t, i) {
                    if (!e) return;
                    if (e.detachEvent) {
                        e.detachEvent('on' + t, e[t + i]);
                        e[t + i] = null
                    } else {
                        e.removeEventListener(t, i, !1)
                    }
                };
                if (o && e && e.length > 0) {
                    for (var c = 0; c < e.length; c++) {
                        n(e[c], t, i)
                    }
                } else {
                    n(e, t, i)
                }
            },
            we = function(e, t) {
                if (typeof getComputedStyle !== 'undefined') {
                    return getComputedStyle(e, null).getPropertyValue(t)
                } else {
                    return e.currentStyle[t]
                }
            },
            a = function(e, t) {},
            x = function() {
                var e = document.querySelector('script[data-cs-cookiename]');
                if (e) {
                    return e.getAttribute('data-cs-cookiename')
                };
                return Vt
            },
            ve = function() {
                window.dataLayer = window.dataLayer || [];
                window.gtag = window.gtag || function() {
                    dataLayer.push(arguments)
                }
            },
            ht = function() {
                return !1
            },
            B = function(e, t) {
                if (!G) {
                    if (e) {
                        if (t) {
                            u(!0, t)
                        } else {
                            u(!0)
                        }
                    } else {
                        u(!1)
                    };
                    if (window.gtag) {
                        G = !0
                    }
                };
                if (!ee && document.readyState === 'complete') {
                    if (e) {
                        if (t) {
                            b(!0, t)
                        } else {
                            b(!0)
                        }
                    } else {
                        b(!1)
                    };
                    if (window.fbq) {
                        ee = !0
                    }
                }
            },
            xe = function(e) {
                if (g || window.CookieScriptData.useGoogleTemplate) {
                    if (!ce) {
                        var t = !1,
                            c = !1;
                        if (window.google_tag_data && window.google_tag_data.ics) {
                            t = window.google_tag_data.ics.usedDefault === !0
                        };
                        if (window.dataLayer) {
                            for (let i = 0; i < window.dataLayer.length; i++) {
                                if (window.dataLayer[i]) {
                                    if (window.dataLayer[i][0] === 'consent' && window.dataLayer[i][1] === 'default') {
                                        c = !0
                                    }
                                }
                            }
                        };
                        if (t || c) {
                            return
                        };
                        u(e, undefined, 'default');
                        ce = !0
                    }
                }
            },
            ye = function() {
                if (g || window.CookieScriptData.useGoogleTemplate) {
                    if (window.google_tag_data && window.google_tag_data.ics && window.google_tag_data.ics.entries) {
                        var e = Object.keys(window.google_tag_data.ics.entries);
                        if (e.length > 0) {
                            return e
                        };
                        return !1
                    };
                    return !1
                };
                return !1
            },
            mt = function() {
                if (g || window.CookieScriptData.useGoogleTemplate) {
                    ve();
                    if (window.gtag) {
                        gtag('set', 'developer_id.dMmY1Mm', !0)
                    }
                }
            },
            kt = function() {
                if (j && j === 'shopify') {
                    if (window.Shopify && window.Shopify.loadFeatures) {
                        window.Shopify.loadFeatures([{
                            name: 'consent-tracking-api',
                            version: '0.1'
                        }], function(e) {}, )
                    }
                }
            },
            y = function(e, t) {
                if (j && j === 'shopify') {
                    if (window.Shopify && window.Shopify.customerPrivacy && window.Shopify.customerPrivacy.setTrackingConsent) {
                        var i = {
                            'analytics': !1,
                            'marketing': !1,
                            'preferences': !1,
                            'sale_of_data': !1
                        };
                        if (e) {
                            if (t) {
                                i = {
                                    'analytics': s(t, 'performance'),
                                    'marketing': s(t, 'targeting'),
                                    'preferences': s(t, 'functionality'),
                                    'sale_of_data': s(t, 'targeting')
                                }
                            } else {
                                i = {
                                    'analytics': !0,
                                    'marketing': !0,
                                    'preferences': !0,
                                    'sale_of_data': !0
                                }
                            }
                        };
                        window.Shopify.customerPrivacy.setTrackingConsent(i, function() {})
                    }
                }
            },
            je = function(e) {
                xe(!1);
                J(e);
                var t = C === 0 || C > 500 ? 500 : C;
                setTimeout(function() {
                    J(e)
                }, t)
            },
            J = function(e) {
                if (window.CookieScriptData.useGoogleTemplate) {
                    G = !0
                };
                var c = function(t) {
                        var i = typeof t === 'undefined' ? o : t;
                        if (i.length === o.length) {
                            m();
                            B(!0)
                        } else {
                            m(i);
                            B(!0, i)
                        };
                        y(!0, i);
                        if (!e) {
                            for (var c = 0; c < i.length; c++) {
                                p(i[c])
                            }
                        };
                        I(i);
                        N(i)
                    },
                    t = function() {
                        I();
                        N();
                        y(!1);
                        if (k()) {
                            B(!1)
                        };
                        m(['strict'])
                    };
                ht();
                if (Ae()) {
                    qe();
                    return !0
                };
                if (k()) {
                    if (Se()) {
                        var i = P();
                        c(i);
                        return !0
                    } else {
                        t();
                        if (!e) {
                            p('strict')
                        };
                        return !0
                    }
                } else {
                    t();
                    return !0
                }
            },
            V = function() {
                return !1
            },
            m = function(e) {
                var t = e && e.length > 0 ? '[data-cookiescript="accepted"][data-cookiecategory]' : '[data-cookiescript="accepted"]';
                gt(t, e);
                wt(t, e);
                vt(t, e);
                xt(t, e);
                yt(t, e);
                jt(t, e);
                bt(e)
            },
            I = function(e) {
                var s = c.get();
                for (var t in s) {
                    if (t === x() || qt(t) || St(t, e) || At(t)) {
                        continue
                    };
                    Ot.push(t);
                    Rt[t] = s[t];
                    c.remove(t);
                    if (c.get(t) !== 'undefined') {
                        var r = window.location.hostname.split('.');
                        while (r.length > 0 && c.get(t) !== 'undefined') {
                            var o = r.join('.'),
                                n = location.pathname.split('/'),
                                i = '/';
                            c.remove(t, {
                                path: i,
                                domain: ''
                            });
                            c.remove(t, {
                                path: i,
                                domain: o
                            });
                            c.remove(t, {
                                path: i,
                                domain: '.' + o
                            });
                            while (n.length > 0 && c.get(t) !== 'undefined') {
                                i = n.join('/');
                                c.remove(t, {
                                    path: i,
                                    domain: ''
                                });
                                c.remove(t, {
                                    path: i,
                                    domain: o
                                });
                                c.remove(t, {
                                    path: i,
                                    domain: '.' + o
                                });
                                n.pop()
                            };
                            r.shift()
                        }
                    }
                }
            },
            W = function(e) {
                return !1
            },
            N = function(e) {
                return !1
            },
            Y = function(e) {
                return !1
            },
            qe = function(e) {
                if (e === undefined) {
                    e = {
                        console: !0
                    }
                };
                var i = ['strict', 'performance', 'targeting', 'functionality', 'unclassified'];
                n('action', 'accept');
                var c = O(o);
                n('categories', JSON.stringify(c));
                m();
                W();
                Y();
                B(!0);
                y(!0, i);
                for (var t = 0; t < i.length; t++) {
                    p(i[t])
                };
                p('all');
                if (e.console) {
                    l('_forceAllow - TRUE')
                }
            },
            bt = function(e) {
                var o = document.querySelectorAll('[data-cookienotice]');
                for (var i = 0; i < o.length; i++) {
                    var c = o[i];
                    if (e && e.length > 0) {
                        var t = c.getAttribute('data-cookienotice');
                        if (t) {
                            e.forEach(function(e) {
                                t = t.replace(e, '').trim()
                            });
                            if (t.length > 0) {
                                continue
                            }
                        }
                    };
                    c.style.display = 'none'
                }
            },
            gt = function(e, t) {
                var n = document.querySelectorAll('img' + e);
                if (n) {
                    for (var o = 0; o < n.length; o++) {
                        var c = n[o];
                        if (t && t.length > 0) {
                            var i = c.getAttribute('data-cookiecategory');
                            if (i) {
                                t.forEach(function(e) {
                                    i = i.replace(e, '').trim()
                                });
                                if (i.length > 0) {
                                    continue
                                }
                            }
                        };
                        c.setAttribute('src', c.getAttribute('data-src'));
                        c.removeAttribute('data-cookiescript')
                    }
                }
            },
            wt = function(e, t) {
                var s = !1,
                    r = document.querySelectorAll('script[type="text/plain"]' + e);
                if (r) {
                    for (var n = 0; n < r.length; n++) {
                        var c = r[n];
                        if (t && t.length > 0) {
                            var o = c.getAttribute('data-cookiecategory');
                            if (o) {
                                t.forEach(function(e) {
                                    o = o.replace(e, '').trim()
                                });
                                if (o.length > 0) {
                                    continue
                                }
                            }
                        };
                        if (c.getAttribute('data-reload') === 'true') {
                            s = !0
                        };
                        var i = document.createElement('script');
                        i.innerHTML = c.innerHTML;
                        var a = Array.prototype.slice.call(c.attributes);
                        a.forEach(function(e) {
                            i.setAttribute(e.name, e.value)
                        });
                        i.setAttribute('type', 'text/javascript');
                        i.removeAttribute('data-cookiescript');
                        ft(c, i)
                    }
                };
                if (s) {
                    at()
                }
            },
            vt = function(e, t) {
                var n = document.querySelectorAll('iframe' + e);
                if (n) {
                    for (var o = 0; o < n.length; o++) {
                        var c = n[o];
                        if (t && t.length > 0) {
                            var i = c.getAttribute('data-cookiecategory');
                            if (i) {
                                t.forEach(function(e) {
                                    i = i.replace(e, '').trim()
                                });
                                if (i.length > 0) {
                                    continue
                                }
                            }
                        };
                        c.setAttribute('src', c.getAttribute('data-src'));
                        c.removeAttribute('data-cookiescript')
                    }
                }
            },
            xt = function(e, t) {
                var n = document.querySelectorAll('embed' + e);
                if (n) {
                    for (var o = 0; o < n.length; o++) {
                        var i = n[o];
                        if (t && t.length > 0) {
                            var c = i.getAttribute('data-cookiecategory');
                            if (c) {
                                t.forEach(function(e) {
                                    c = c.replace(e, '').trim()
                                });
                                if (c.length > 0) {
                                    continue
                                }
                            }
                        };
                        i.setAttribute('src', i.getAttribute('data-src'));
                        i.removeAttribute('data-cookiescript');
                        var r = i.outerHTML;
                        ge(i, r)
                    }
                }
            },
            yt = function(e, t) {
                var n = document.querySelectorAll('object' + e);
                if (n) {
                    for (var o = 0; o < n.length; o++) {
                        var i = n[o];
                        if (t && t.length > 0) {
                            var c = i.getAttribute('data-cookiecategory');
                            if (c) {
                                t.forEach(function(e) {
                                    c = c.replace(e, '').trim()
                                });
                                if (c.length > 0) {
                                    continue
                                }
                            }
                        };
                        i.setAttribute('data', i.getAttribute('data-data'));
                        i.removeAttribute('data-cookiescript');
                        var r = i.outerHTML;
                        ge(i, r)
                    }
                }
            },
            jt = function(e, t) {
                var n = document.querySelectorAll('link' + e);
                if (n) {
                    for (var o = 0; o < n.length; o++) {
                        var c = n[o];
                        if (t && t.length > 0) {
                            var i = c.getAttribute('data-cookiecategory');
                            if (i) {
                                t.forEach(function(e) {
                                    i = i.replace(e, '').trim()
                                });
                                if (i.length > 0) {
                                    continue
                                }
                            }
                        };
                        c.setAttribute('href', c.getAttribute('data-href'));
                        c.removeAttribute('data-cookiescript')
                    }
                }
            },
            qt = function(e) {
                var c = [];
                for (var i = 0; i < c.length; i++) {
                    var t = c[i];
                    if (t.regexp) {
                        var o = Et(t.name);
                        if (e.match(o)) {
                            return !0
                        }
                    } else {
                        if (e === t.name) {
                            return !0
                        }
                    }
                };
                return !1
            },
            St = function(e, t) {
                var i = ['strict'];
                if (typeof t !== 'undefined') {
                    i = t.slice();
                    i.push('strict');
                    i = v(i)
                };
                for (var o = 0; o < i.length; o++) {
                    var c = Yt[i[o]];
                    if (c) {
                        if (s(c, e) || Ct({
                                cNames: c,
                                cookieName: e
                            })) {
                            return !0
                        }
                    }
                };
                return !1
            },
            At = function(e) {
                for (var t = 0; t < te.length; t++) {
                    var i = te[t];
                    if (e.indexOf(i) === 0) {
                        return !0
                    }
                };
                return !1
            },
            Ct = function(e) {
                var n = e.cNames,
                    r = e.cookieName,
                    a = !!e.onlyCheckPattern,
                    i = [{
                        'pattern': '^[a-f0-9]{32}$',
                        'name': '[abcdef0123456789]{32}'
                    }, {
                        'pattern': '^PrestaShop-[a-f0-9]{32}$',
                        'name': 'PrestaShop-[abcdef0123456789]{32}'
                    }, {
                        'pattern': '^LF_session_[a-f0-9]{32}$',
                        'name': 'LF_session_[abcdef0123456789]{32}'
                    }, {
                        'pattern': '^cid_[a-f0-9]{32}$',
                        'name': 'cid_[abcdef0123456789]{32}'
                    }, {
                        'pattern': '^wp_woocommerce_session_[a-f0-9]{32}$',
                        'name': 'wp_woocommerce_session_[abcdef0123456789]{32}'
                    }, {
                        'pattern': '^visa_1_[a-f0-9]{32}$',
                        'name': 'visa_1_[abcdef0123456789]{32}'
                    }, {
                        'pattern': '^yith_wcwl_session_[a-f0-9]{32}$',
                        'name': 'yith_wcwl_session_[abcdef0123456789]{32}'
                    }, {
                        'pattern': '^mp_[a-f0-9]{32}_mixpanel$',
                        'name': 'mp_[abcdef0123456789]{32}_mixpanel'
                    }, {
                        'pattern': '^ps[a-f0-9]{24}$',
                        'name': 'ps[abcdef0123456789]{24}'
                    }];
                for (var t = 0; t < i.length; t++) {
                    var c = i[t]['pattern'],
                        o = new RegExp(c, 'i');
                    if (o.test(r)) {
                        if (a) {
                            return !0
                        } else {
                            if (s(n, i[t]['name'])) {
                                return !0
                            }
                        }
                    }
                };
                return !1
            },
            Se = function() {
                var e = d('action');
                return Boolean(e && e === 'accept')
            },
            zt = function() {
                var e = d('action'),
                    t = P();
                return Boolean(e && e === 'accept' && t.length === o.length)
            },
            k = function() {
                var e = d('action');
                return Boolean(e && (e === 'accept' || e === 'reject'))
            },
            Ae = function() {
                return c.get('CookieScriptScanner')
            },
            P = function() {
                var c = d('categories'),
                    t = [];
                if (Q) {
                    t = ['strict']
                };
                if (c) {
                    try {
                        var i = JSON.parse(c);
                        if (Q) {
                            i.push('strict')
                        };
                        return v(i)
                    } catch (e) {
                        return t
                    }
                };
                return t
            },
            ni = function() {
                var e = document.querySelector('span[data-cs-desc-box="true"]');
                if (e) {
                    return e.getAttribute('data-cs-i18n-read')
                };
                return ''
            },
            ri = function(e) {
                try {
                    var i = new XMLHttpRequest();
                    i.open('GET', e.url);
                    i.onload = function() {
                        if (i.status === 200) {
                            try {
                                var c = JSON.parse(i.responseText);
                                e.done(c)
                            } catch (t) {
                                e.done(i.responseText)
                            }
                        } else {
                            l('ERROR: Request failed.  Returned status for ' + url + ' of ' + i.status)
                        }
                    };
                    i.send()
                } catch (t) {
                    l('ERROR: Yor browser not support request')
                }
            },
            Lt = function() {
                var e = null;
                if (F && F.length > 0) {
                    e = F
                };
                var i = document.querySelector('script[data-cs-samesite]');
                if (i) {
                    var t = i.getAttribute('data-cs-samesite');
                    if (t) {
                        e = t
                    }
                };
                return e ? e.toLowerCase() : e
            },
            n = function(e, i) {
                var o = ze();
                o[e] = i;
                if (e === 'action' && t.consentTime !== 0) {
                    o['consenttime'] = t.consentTime
                };
                try {
                    var n = Le(JSON.stringify(o));
                    Ce(n)
                } catch (c) {
                    l('Error: Write ' + cookieName + 'value =>' + c)
                }
            },
            Ce = function(e) {
                var i = {
                    expires: Number(Be),
                    domain: Ee
                };
                var t = Lt();
                if (t) {
                    i.sameSite = t;
                    if (t === 'none') {
                        i.secure = !0
                    }
                };
                c.set(x(), e, i)
            },
            d = function(e) {
                var t = ze();
                return t[e]
            },
            ze = function() {
                var t = c.get(x(), {
                    domain: Ee
                });
                try {
                    return JSON.parse(t)
                } catch (e) {
                    return {}
                }
            },
            Le = function(e) {
                return e
            },
            Ee = function() {
                return null
            }(),
            c = function() {
                /*! js-cookie v3.0.0-rc.0 | MIT */
                ;

                function e(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var c = arguments[t];
                        for (var i in c) {
                            e[i] = c[i]
                        }
                    };
                    return e
                };
                var t = {
                    read: function(e) {
                        return e.replace(/%3B/g, ';')
                    },
                    write: function(e) {
                        return e.replace(/;/g, '%3B')
                    }
                };

                function i(c, o) {
                    function n(i, n, r) {
                        if (typeof document === 'undefined') {
                            return
                        };
                        r = e({}, o, r);
                        if (typeof r.expires === 'number') {
                            var d = new Date();
                            d.setTime(d.getTime() + r.expires * 864e5);
                            r.expires = d
                        };
                        if (r.expires) {
                            r.expires = r.expires.toUTCString()
                        };
                        i = t.write(i).replace(/=/g, '%3D');
                        n = c.write(String(n), i);
                        var a = '';
                        for (var s in r) {
                            if (!r[s]) {
                                continue
                            };
                            a += '; ' + s;
                            if (r[s] === !0) {
                                continue
                            };
                            a += '=' + r[s].split(';')[0]
                        };
                        return (document.cookie = i + '=' + n + a)
                    };

                    function r(e) {
                        if (typeof document === 'undefined' || (arguments.length && !e)) {
                            return
                        };
                        var s = document.cookie ? document.cookie.split('; ') : [],
                            n = {};
                        for (var o = 0; o < s.length; o++) {
                            var r = s[o].split('='),
                                a = r.slice(1).join('='),
                                i = t.read(r[0]).replace(/%3D/g, '=');
                            n[i] = c.read(a, i);
                            if (e === i) {
                                break
                            }
                        };
                        return e ? n[e] : n
                    };
                    return Object.create({
                        set: n,
                        get: r,
                        remove: function(t, i) {
                            n(t, '', e({}, i, {
                                expires: -1
                            }))
                        },
                        withAttributes: function(t) {
                            return i(this.converter, e({}, this.attributes, t))
                        },
                        withConverter: function(t) {
                            return i(e({}, this.converter, t), this.attributes)
                        }
                    }, {
                        attributes: {
                            value: Object.freeze(o)
                        },
                        converter: {
                            value: Object.freeze(c)
                        }
                    })
                };
                var c = window.location.protocol === 'https:';
                return i(t, {
                    path: '/',
                    secure: c
                })
            }(),
            Et = function(e) {
                if (typeof e !== 'string') {
                    return e
                };
                var t = e.match(/(\/?)(.+)\1([a-z]*)/i);
                if (t[3] && !/^(?!.*?(.).*?\1)[gmixXsuUAJ]+$/.test(t[3])) {
                    return RegExp(e)
                };
                return new RegExp(t[2], t[3])
            },
            Tt = function(e, t) {
                e = e.replace(/[\[\]]/g, '\\$&');
                var c = new RegExp('[?&]' + e + '(=([^&#]*)|&|#|$)'),
                    i = c.exec(t);
                if (!i) return null;
                if (!i[2]) return '';
                return decodeURIComponent(i[2].replace(/\+/g, ' '))
            },
            Dt = function() {
                var i = x(),
                    t = Tt(i, window.location.href);
                if (t) {
                    try {
                        t = Le(t);
                        Ce(t)
                    } catch (e) {
                        l('Error: Write(_loadCookieValueFromUrlArgs) ' + i + 'value =>' + e)
                    }
                }
            },
            si = function() {
                var t = document.querySelectorAll('script'),
                    o = /gtag\(\s*['"]config['"]\s*,\s*['"]G-[A-Z0-9-]+['"]\s*\)/i,
                    i = !1;
                for (var e = 0; e < t.length; e++) {
                    var c = t[e];
                    if (o.test(c.innerHTML)) {
                        i = !0;
                        break
                    }
                };
                return i
            },
            ai = function() {
                var e = /bot|googlebot|crawler|spider|robot|crawling/i;
                if (e.test(navigator.userAgent)) {
                    return !0
                };
                if (navigator.webdriver) {
                    return !0
                };
                if (navigator.languages.length === 0) {
                    return !0
                };
                return !1
            },
            di = function(e) {
                throw e
            },
            pi = function() {
                return !0
            },
            M = function(e, t) {
                return !1
            },
            u = function(e, t, i) {
                if (g || window.CookieScriptData.useGoogleTemplate) {
                    ve();
                    if (typeof i === 'undefined') {
                        i = 'update'
                    };
                    if (window.gtag) {
                        var u = 'targeting',
                            f = 'performance',
                            r = 'targeting',
                            a = 'targeting',
                            d = 'functionality',
                            p = 'functionality',
                            l = 'functionality',
                            n = ye(),
                            c = function(e) {
                                if (typeof t !== 'undefined') {
                                    return s(t, e)
                                } else {
                                    return !0
                                }
                            },
                            o = {
                                'ad_storage': e && c(u) ? 'granted' : 'denied',
                                'analytics_storage': e && c(f) ? 'granted' : 'denied',
                            };
                        if (n) {
                            if (s(n, 'ad_personalization')) {
                                o.ad_personalization = e && c(r) ? 'granted' : 'denied'
                            };
                            if (s(n, 'ad_user_data')) {
                                o.ad_user_data = e && c(a) ? 'granted' : 'denied'
                            }
                        } else {
                            o.ad_personalization = e && c(r) ? 'granted' : 'denied';
                            o.ad_user_data = e && c(a) ? 'granted' : 'denied'
                        };
                        if (d !== 'ignore') {
                            o.functionality_storage = e && c(d) ? 'granted' : 'denied'
                        };
                        if (p !== 'ignore') {
                            o.personalization_storage = e && c(p) ? 'granted' : 'denied'
                        };
                        if (l !== 'ignore') {
                            o.security_storage = e && c(l) ? 'granted' : 'denied'
                        };
                        gtag('consent', i, o)
                    }
                }
            },
            b = function(e, t) {
                return !1
            },
            Bt = function(e) {},
            Z = function(e) {
                return !1
            },
            It = function() {
                if (g || window.CookieScriptData.useGoogleTemplate) {
                    var c = 'targeting',
                        o = 'performance',
                        r = 'targeting',
                        s = 'targeting',
                        a = 'functionality',
                        d = 'functionality',
                        p = 'functionality',
                        e = {};
                    var i = ye();
                    if (i) {
                        for (var t = 0; t < i.length; t++) {
                            var l = i[t];
                            switch (l) {
                                case 'ad_storage':
                                    e.ad_storage = c;
                                    break;
                                case 'analytics_storage':
                                    e.analytics_storage = o;
                                    break;
                                case 'ad_personalization':
                                    e.ad_personalization = r;
                                    break;
                                case 'ad_user_data':
                                    e.ad_user_data = s;
                                    break;
                                case 'functionality_storage':
                                    e.functionality_storage = a;
                                    break;
                                case 'personalization_storage':
                                    e.personalization_storage = d;
                                    break;
                                case 'security_storage':
                                    e.security_storage = p;
                                    break
                            }
                        }
                    } else {
                        e = {
                            ad_storage: c,
                            analytics_storage: o,
                            ad_personalization: r,
                            ad_user_data: s,
                            functionality_storage: a,
                            personalization_storage: d,
                            security_storage: p
                        }
                    };
                    n('googleconsentmap', e)
                }
            },
            Nt = function() {
                var e = Number(d('consenttime'));
                if (e) {
                    if (Number(t.consentTime) > e) {
                        c.remove(x())
                    }
                }
            },
            K = function() {
                return !1
            },
            Pt = function() {
                if (g || window.CookieScriptData.useGoogleTemplate) {
                    if (!window.CookieScriptData.isVerifyGoogleConsentMode) {
                        var e = null,
                            t = null,
                            c = null;
                        if (window.dataLayer) {
                            for (let i = 0; i < window.dataLayer.length; i++) {
                                if (window.dataLayer[i]) {
                                    if (window.dataLayer[i][0] === 'consent' && window.dataLayer[i][1] === 'default') {
                                        e = i
                                    } else if (window.dataLayer[i][0] === 'config') {
                                        t = i
                                    } else if (window.dataLayer[i]['event'] && window.dataLayer[i]['event'] === 'gtm.js') {
                                        c = i
                                    }
                                }
                            }
                        };
                        if (e !== null) {
                            if (t !== null) {
                                if (e < t) {
                                    window.CookieScriptData.isVerifyGoogleConsentMode = !0
                                }
                            } else if (c !== null) {
                                if (e < c) {
                                    window.CookieScriptData.isVerifyGoogleConsentMode = !0
                                }
                            }
                        }
                    }
                }
            },
            Te = function() {
                Mt()
            },
            Mt = function() {
                if (oe) {
                    return
                };
                Pt();
                kt();
                t.initTime = new Date().toString();
                var i = document.querySelector('script[data-cs-restrict-domain="true"]');
                if (i) {
                    var e = window.location.host.replace(/^www\./, '');
                    if (e !== Ht) {
                        qe({
                            console: !1
                        });
                        return
                    }
                };
                if (!Ae()) {
                    je()
                };
                setTimeout(function() {
                    Dt();
                    Qe();
                    D(document.body, Ut);
                    if (zt()) {
                        E(!0)
                    };
                    if (k()) {
                        Ke()
                    } else {
                        if (!nt()) {
                            if (d('bannershown') !== 1) {
                                a('firstshown', '')
                            };
                            he();
                            ct();
                            ot()
                        }
                    };
                    et();
                    tt();
                    it();
                    h('CookieScriptLoaded')
                }, C);
                oe = !0
            },
            Gt = function() {},
            Ft = function() {
                var e = document.querySelector('script[data-cs-plugin]');
                if (e) {
                    j = e.getAttribute('data-cs-plugin')
                }
            },
            li = function() {
                return !1
            }(function() {
                if (window.CookieScript.instance) return;
                Gt();
                Nt();
                It();
                mt();
                xe(!1);
                Bt(k());
                Ft();
                je(!0);
                if (document.readyState === 'complete') {
                    Te()
                } else {
                    window.addEventListener('load', Te)
                }
            }())
    };
    window.CookieScript.init = function() {
        if (window.CookieScript.instance) {
            return CookieScript.instance
        };
        window.CookieScript.instance = new CookieScript();
        return CookieScript.instance
    };
    window.CookieScript.init()
};