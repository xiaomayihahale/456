(function (t) {
    function e(e) {
        for (var r, s, a = e[0], c = e[1], u = e[2], l = 0, d = []; l < a.length; l++) s = a[l], Object.prototype.hasOwnProperty.call(o, s) && o[s] && d.push(o[s][0]), o[s] = 0;
        for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (t[r] = c[r]);
        p && p(e);
        while (d.length) d.shift()();
        return i.push.apply(i, u || []), n()
    }

    function n() {
        for (var t, e = 0; e < i.length; e++) {
            for (var n = i[e], r = !0, s = 1; s < n.length; s++) {
                var c = n[s];
                0 !== o[c] && (r = !1)
            }
            r && (i.splice(e--, 1), t = a(a.s = n[0]))
        }
        return t
    }
    var r = {},
        o = {
            app: 0
        },
        i = [];

    function s(t) {
        return a.p + "js/" + ({
            about: "about"
        }[t] || t) + "." + {
            about: "09751c3f"
        }[t] + ".js"
    }

    function a(e) {
        if (r[e]) return r[e].exports;
        var n = r[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(n.exports, n, n.exports, a), n.l = !0, n.exports
    }
    a.e = function (t) {
        var e = [],
            n = o[t];
        if (0 !== n)
            if (n) e.push(n[2]);
            else {
                var r = new Promise((function (e, r) {
                    n = o[t] = [e, r]
                }));
                e.push(n[2] = r);
                var i, c = document.createElement("script");
                c.charset = "utf-8", c.timeout = 120, a.nc && c.setAttribute("nonce", a.nc), c.src = s(t);
                var u = new Error;
                i = function (e) {
                    c.onerror = c.onload = null, clearTimeout(l);
                    var n = o[t];
                    if (0 !== n) {
                        if (n) {
                            var r = e && ("load" === e.type ? "missing" : e.type),
                                i = e && e.target && e.target.src;
                            u.message = "Loading chunk " + t + " failed.\n(" + r + ": " + i + ")", u.name = "ChunkLoadError", u.type = r, u.request = i, n[1](u)
                        }
                        o[t] = void 0
                    }
                };
                var l = setTimeout((function () {
                    i({
                        type: "timeout",
                        target: c
                    })
                }), 12e4);
                c.onerror = c.onload = i, document.head.appendChild(c)
            }
        return Promise.all(e)
    }, a.m = t, a.c = r, a.d = function (t, e, n) {
        a.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, a.r = function (t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, a.t = function (t, e) {
        if (1 & e && (t = a(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (a.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t)
            for (var r in t) a.d(n, r, function (e) {
                return t[e]
            }.bind(null, r));
        return n
    }, a.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t["default"]
        } : function () {
            return t
        };
        return a.d(e, "a", e), e
    }, a.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, a.p = "", a.oe = function (t) {
        throw console.error(t), t
    };
    var c = window["webpackJsonp"] = window["webpackJsonp"] || [],
        u = c.push.bind(c);
    c.push = e, c = c.slice();
    for (var l = 0; l < c.length; l++) e(c[l]);
    var p = u;
    i.push([0, "chunk-vendors"]), n()
})({
    0: function (t, e, n) {
        t.exports = n("56d7")
    }, "04b8": function (t, e, n) {
        "use strict";
        n("2c68")
    }, "06a5": function (t, e, n) {}, "09c1": function (t, e, n) {
        "use strict";
        n("d771")
    }, 1: function (t, e) {}, "10e5": function (t, e, n) {}, 1345: function (t, e, n) {
        "use strict";
        n.r(e);
        var r = function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("Modal", {
                    staticClass: "iv-modal",
                    attrs: {
                        "class-name": "vertical-center-modal",
                        title: "快速登录",
                        closable: !1,
                        "mask-closable": !1
                    },
                    on: {
                        "on-ok": t.ok,
                        "on-cancel": t.cancel,
                        "on-visible-change": t.visibleChange
                    },
                    model: {
                        value: t.showLogin,
                        callback: function (e) {
                            t.showLogin = e
                        }, expression: "showLogin"
                    }
                }, [n("Form", {
                    ref: "formLogin",
                    attrs: {
                        model: t.formLogin,
                        rules: t.ruleLogin,
                        "label-width": 130
                    }
                }, [n("FormItem", {
                    attrs: {
                        label: "Access Key",
                        prop: "accessKey"
                    }
                }, [n("Row", [n("Col", {
                    attrs: {
                        span: "20"
                    }
                }, [n("Input", {
                    ref: "accessKey",
                    attrs: {
                        type: "text"
                    },
                    model: {
                        value: t.formLogin.accessKey,
                        callback: function (e) {
                            t.$set(t.formLogin, "accessKey", e)
                        }, expression: "formLogin.accessKey"
                    }
                })], 1)], 1)], 1), n("FormItem", {
                    attrs: {
                        label: "Secret Key",
                        prop: "secretKey"
                    }
                }, [n("Row", [n("Col", {
                    attrs: {
                        span: "20"
                    }
                }, [n("Input", {
                    attrs: {
                        type: "text"
                    },
                    model: {
                        value: t.formLogin.secretKey,
                        callback: function (e) {
                            t.$set(t.formLogin, "secretKey", e)
                        }, expression: "formLogin.secretKey"
                    }
                })], 1)], 1)], 1), n("FormItem", [n("Button", {
                    attrs: {
                        type: "primary"
                    },
                    on: {
                        click: function (e) {
                            return t.handleSubmit("formLogin")
                        }
                    }
                }, [t._v("登 录")])], 1)], 1), n("div", {
                    attrs: {
                        slot: "footer"
                    },
                    slot: "footer"
                })], 1)
            },
            o = [],
            i = (n("8e6e"), n("ac6a"), n("456d"), n("a481"), n("7f7f"), n("bd86")),
            s = n("e069"),
            a = n("2f62"),
            c = n("41cb");

        function u(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function l(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? u(Object(n), !0).forEach((function (e) {
                    Object(i["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }
        var p = {
                name: "LoginModal",
                components: {
                    Row: s["Row"],
                    Col: s["Col"],
                    Button: s["Button"],
                    Modal: s["Modal"],
                    Form: s["Form"],
                    FormItem: s["FormItem"],
                    Input: s["Input"]
                },
                data: function () {
                    var t = function (t, e, n) {
                            "" === e ? n(new Error("请输入 Access Key")) : n()
                        },
                        e = function (t, e, n) {
                            "" === e ? n(new Error("请输入Secret Key")) : n()
                        };
                    return {
                        countDown: 60,
                        showLogin: !0,
                        formLogin: {
                            accessKey: "ApfrIzxCoK1DwNZO",
                            secretKey: "EJCwlrnv6QZ0PCdvrWGi"
                        },
                        ruleLogin: {
                            accessKey: [{
                                validator: t,
                                trigger: "blur"
                            }],
                            secretKey: [{
                                validator: e,
                                trigger: "blur"
                            }]
                        }
                    }
                }, computed: {}, methods: l(l({}, Object(a["c"])(["login"])), {}, {
                    ok: function () {
                        console.info(">>>: OK")
                    }, cancel: function () {}, visibleChange: function (t) {
                        t && this.$refs.accessKey.focus()
                    }, handleSubmit: function (t) {
                        var e = this,
                            n = this;
                        this.$refs[t].validate((function (t) {
                            t ? n.$http.post("api/login", n.formLogin, {
                                headers: {
                                    "content-type": "application/x-www-form-urlencoded"
                                }
                            }).then((function (t) {
                                var r = t.data;
                                0 === r.code ? (e.$Message.info(r.msg), n.login(r), console.info("关闭登录窗口"), c["a"].replace({
                                    name: "home"
                                }), location.reload()) : alert(r.msg)
                            })) : e.$Message.error("Fail!")
                        }))
                    }
                })
            },
            d = p,
            f = (n("f59e"), n("8f93"), n("2877")),
            m = Object(f["a"])(d, r, o, !1, null, null, null);
        e["default"] = m.exports
    }, "14b8": function (t, e, n) {}, "17c2": function (t, e, n) {
        "use strict";
        n("8b19")
    }, 2420: function (t, e, n) {
        "use strict";
        n("9d03")
    }, "2c68": function (t, e, n) {}, "327d": function (t, e, n) {
        "use strict";
        n("d99e")
    }, "32bd": function (t, e, n) {}, 3566: function (t, e, n) {
        "use strict";
        n("b790")
    }, "37f3": function (t, e, n) {}, "41cb": function (t, e, n) {
        "use strict";
        n("7f7f");
        var r = n("2b0e"),
            o = n("8c4f"),
            i = function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "home"
                }, [n("poster-layout")], 1)
            },
            s = [],
            a = function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "poster-layout"
                }, [n("top-bar-layout"), n("div", {
                    staticClass: "layout-wrapper"
                }, [n("tool-layout"), n("content-wrapper"), n("setting-layout")], 1), n("debug-layout")], 1)
            },
            c = [],
            u = function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "content-warpper",
                    on: {
                        click: t.contentWrapperClick
                    }
                }, [n("div", {
                    staticClass: "canvas-wrapper",
                    class: {
                        "sidebar-extend": t.sidebar.showExtendBar
                    },
                    attrs: {
                        tabindex: "1"
                    },
                    on: {
                        keydown: function (e) {
                            return t.keyupHandler(e)
                        }, click: t.deactiveAllItem
                    }
                }, [n("div", {
                    staticClass: "canvas-content-wrapper canvas-editor-wrapper",
                    style: {
                        width: t.w,
                        height: t.h,
                        "background-color": t.BGC,
                        "background-image": t.bgi,
                        "background-repeat": "none",
                        "background-size": t.bgs
                    }
                }, [n("div", {
                    staticClass: "canvas-content",
                    on: {
                        contextmenu: function (e) {
                            return e.preventDefault(), t.handleContextMenu.apply(null, arguments)
                        }, click: function (e) {
                            return t.switchPanel("canvas")
                        }
                    }
                }, [t._l(t.items, (function (t, e) {
                    return n("poster-item", {
                        key: e,
                        attrs: {
                            item: t
                        }
                    })
                })), n("content-menu")], 2)]), n("div", {
                    staticClass: "canvas-tool-bar"
                }, [n("div", {
                    staticClass: "item scale-area"
                }, [n("i", {
                    staticClass: "icon iconfont icon-minus",
                    attrs: {
                        title: "缩小"
                    },
                    on: {
                        click: t.shrink
                    }
                }), n("p", {
                    staticClass: "scale-num"
                }, [t._v(t._s(t._f("formatPrcent")(t.scale)))]), n("i", {
                    staticClass: "icon iconfont icon-plus",
                    attrs: {
                        title: "放大"
                    },
                    on: {
                        click: t.magnify
                    }
                })]), t._e()])])])
            },
            l = [],
            p = (n("8e6e"), n("ac6a"), n("456d"), n("6762"), n("2fdb"), n("f559"), n("bd86")),
            d = (n("c5f6"), function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "poster-item",
                    attrs: {
                        tabindex: t.item.z,
                        id: t.idKey
                    },
                    on: {
                        click: function (t) {
                            t.stopPropagation()
                        }, keydown: function (e) {
                            return t.keyupHandler(e)
                        }, contextmenu: function (e) {
                            return e.preventDefault(), t.handleContextMenu(t.item.uuid)
                        }
                    }
                }, [n("vue-drag-resize", {
                    staticClass: "poster-item-vue-drag",
                    style: {
                        "z-index": t.item.z
                    },
                    attrs: {
                        parentLimitation: !0,
                        parentW: t.W,
                        parentH: t.H,
                        w: t.w,
                        h: t.h,
                        x: t.x,
                        y: t.y,
                        minw: t.minw,
                        minh: t.minh,
                        isActive: t.active,
                        aspectRatio: t.aspectRatio
                    },
                    on: {
                        click: function (t) {
                            t.stopPropagation()
                        }, clicked: function (e) {
                            return t.activeItemHandler(t.item.uuid)
                        }, resizing: t.resizing,
                        dragging: t.dragging,
                        resizestop: t.resizestop,
                        dragstop: t.dragstop,
                        activated: t.activated,
                        deactivated: t.deactivated
                    }
                }, ["text" === t.item.t ? n("p", {
                    staticStyle: {
                        height: "100%",
                        width: "100%",
                        border: "none",
                        resize: "none",
                        padding: "0",
                        margin: "0",
                        overflow: "hidden",
                        "line-height": "130%"
                    },
                    style: {
                        "background-color": t.item.bgc,
                        color: t.item.c,
                        "font-size": t.fontSize,
                        "text-decoration": t.textDecoration
                    },
                    domProps: {
                        textContent: t._s(t.item.v)
                    }
                }) : t._e(), "image" === t.item.t ? n("item-image", {
                    attrs: {
                        item: t.item
                    }
                }) : t._e(), "qrcode" === t.item.t ? n("item-qrcode", {
                    attrs: {
                        item: t.item
                    }
                }) : t._e(), "avatar" === t.item.t ? n("item-avatar", {
                    attrs: {
                        item: t.item
                    }
                }) : t._e()], 1)], 1)
            }),
            f = [],
            m = (n("d263"), n("3b58")),
            h = n.n(m),
            b = n("2f62"),
            v = function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("img", {
                    staticStyle: {
                        "border-radius": "50%"
                    },
                    style: {
                        width: t.w,
                        height: t.h,
                        border: t.borderStyle
                    },
                    attrs: {
                        src: t.imgUrl,
                        onerror: t.defaultImg
                    }
                })
            },
            y = [];

        function g(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function w(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? g(Object(n), !0).forEach((function (e) {
                    Object(p["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : g(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }
        var O = {
                name: "ItemAvatar",
                props: {
                    item: {}
                },
                data: function () {
                    return {
                        defaultImg: 'this.src="' + n("ba68") + '"; this.style.background="#fff"'
                    }
                }, computed: w(w({}, Object(b["b"])(["scale"])), {}, {
                    bw: function () {
                        return 4
                    }, bw2: function () {
                        return 2 * this.bw
                    }, w: function () {
                        return "calc(100%)"
                    }, h: function () {
                        return "calc(100%)"
                    }, borderStyle: function () {
                        return "1px solid " + this.item.c
                    }, imgUrl: function () {
                        var t = this.item.v;
                        return t.startsWith("http") || (t = API_URL + t), t
                    }
                })
            },
            j = O,
            P = n("2877"),
            C = Object(P["a"])(j, v, y, !1, null, "71c3de24", null),
            _ = C.exports,
            x = function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("img", {
                    ref: "qrcode",
                    staticClass: "poster-item-qrcode"
                })
            },
            I = [],
            S = n("d055"),
            k = n.n(S),
            D = {};

        function E(t, e) {
            D[t] = e
        }

        function $(t, e) {
            var n = D[t];
            n || console.error("元素不存在!"), n[e]()
        }
        var R = {
                name: "ItemQrcode",
                props: {
                    item: {}
                },
                mounted: function () {
                    this.buildQrcode(), E(this.item.uuid, this)
                }, updated: function () {
                    this.buildQrcode()
                }, methods: {
                    buildQrcode: function () {
                        var t = this.item;
                        if (t.v) {
                            var e = {
                                    errorCorrectionLevel: "M",
                                    margin: t.p,
                                    width: t.w,
                                    color: {
                                        dark: t.c,
                                        light: t.bgc
                                    }
                                },
                                n = this.$refs.qrcode,
                                r = t.v + "";
                            k.a.toDataURL(r, e, (function (t, e) {
                                if (t) throw t;
                                n.src = e
                            }))
                        }
                    }
                }
            },
            L = R,
            T = (n("17c2"), Object(P["a"])(L, x, I, !1, null, "aba78f5a", null)),
            K = T.exports,
            M = function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("img", {
                    staticClass: "item-image",
                    attrs: {
                        src: t.imgUrl,
                        onerror: t.defaultImg
                    }
                })
            },
            U = [],
            B = {
                name: "ItemImage",
                props: {
                    item: {}
                },
                data: function () {
                    return {
                        defaultImg: 'this.src="' + n("ba68") + '"; this.style.background="#fff"'
                    }
                }, computed: {
                    imgUrl: function () {
                        var t = this.item.v;
                        return t.startsWith("http") || (t = API_URL + t), t
                    }
                }, methods: {}
            },
            N = B,
            H = (n("85ed"), Object(P["a"])(N, M, U, !1, null, "e03238ea", null)),
            A = H.exports;

        function q(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function z(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? q(Object(n), !0).forEach((function (e) {
                    Object(p["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : q(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }
        var F = {
                name: "PosterItem",
                components: {
                    VueDragResize: h.a,
                    ItemAvatar: _,
                    ItemQrcode: K,
                    ItemImage: A
                },
                props: {
                    item: {}
                },
                data: function () {
                    return {
                        vueDragKey: "111",
                        tmpz: 0
                    }
                }, updated: function () {}, mounted: function () {}, computed: z(z({}, Object(b["b"])(["W", "H", "items", "scale"])), {}, {
                    x: function () {
                        return this.item.x * this.scale
                    }, y: function () {
                        return this.item.y * this.scale
                    }, w: function () {
                        return this.item.w * this.scale
                    }, h: function () {
                        return this.item.h * this.scale
                    }, active: function () {
                        return this.item.active
                    }, idKey: function () {
                        return "pi-" + this.item.uuid
                    }, minw: function () {
                        var t = 60,
                            e = this.item.t;
                        return "image" === e && (t = 50), "qrcode" === e && (t = 50), "avatar" === e && (t = 50), t * this.scale
                    }, minh: function () {
                        var t = 20,
                            e = this.item.t;
                        return "image" === e && (t = 50), "qrcode" === e && (t = 50), "avatar" === e && (t = 50), t * this.scale
                    }, aspectRatio: function () {
                        this.item.t;
                        return !1
                    }, fontSize: function () {
                        return this.item.s * this.scale + "px"
                    }, textDecoration: function () {
                        return this.item.st >= 1 ? "line-through" : "none"
                    }
                }),
                methods: z(z({}, Object(b["c"])(["activeItemAndShowProperty", "removeItem", "itemDown", "itemUp", "copyItem", "pasteItem", "savePoster"])), {}, {
                    fixed: function (t) {
                        return Number(t.toFixed(0))
                    }, scaleAndFixed: function (t) {
                        return this.fixed(t / this.scale)
                    }, resizing: function (t) {
                        this.item.w = this.scaleAndFixed(t.width), this.item.h = this.scaleAndFixed(t.height)
                    }, dragging: function (t) {
                        this.item.x = this.scaleAndFixed(t.left), this.item.y = this.scaleAndFixed(t.top)
                    }, resizestop: function (t) {}, dragstop: function (t) {}, activated: function () {}, deactivated: function () {}, handleContextMenu: function (t) {
                        this.vueDragKey = Math.random().toFixed(6), document.getElementById(this.idKey).focus(), this.activeItemAndShowProperty(t)
                    }, keyupHandler: function (t) {
                        var e = t.altKey ? 5 : t.metaKey ? 10 : 1,
                            n = this.item;
                        switch (t.code) {
                        case "ArrowLeft":
                            n.x -= e;
                            break;
                        case "ArrowRight":
                            n.x += e;
                            break;
                        case "ArrowUp":
                            t.shiftKey ? this.itemUp(n.uuid) : n.y -= e;
                            break;
                        case "ArrowDown":
                            t.shiftKey ? this.itemDown(n.uuid) : n.y += e;
                            break;
                        case "Delete":
                        case "Backspace":
                            this.removeItem(n.uuid);
                            break;
                        case "KeyC":
                            (t.ctrlKey || t.metaKey) && this.copyItem(n.uuid);
                            break;
                        case "KeyV":
                            (t.ctrlKey || t.metaKey) && this.pasteItem(n.uuid);
                            break;
                        case "KeyS":
                            (t.ctrlKey || t.metaKey) && (this.savePoster(), t.preventDefault());
                            break
                        }
                    }, activeItemHandler: function (t) {
                        document.getElementById(this.idKey).focus(), this.activeItemAndShowProperty(t)
                    }
                })
            },
            J = F,
            W = (n("3566"), Object(P["a"])(J, d, f, !1, null, null, null)),
            G = W.exports,
            Q = function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.menuShow,
                        expression: "menuShow"
                    }],
                    staticClass: "contextmenu",
                    style: {
                        top: t.menuTop + "px",
                        left: t.menuLeft + "px"
                    }
                }, [n("ul", [
                    [n("li", {
                        on: {
                            click: t.copyComponent
                        }
                    }, [t._v("复制")]), n("li", {
                        on: {
                            click: t.pasteComponent
                        }
                    }, [t._v("粘贴")]), n("li", {
                        on: {
                            click: t.deleteComponent
                        }
                    }, [t._v("删除")]), n("li", {
                        on: {
                            click: t.upComponent
                        }
                    }, [t._v("上移一层")]), n("li", {
                        on: {
                            click: t.downComponent
                        }
                    }, [t._v("下移一层")])]
                ], 2)])
            },
            V = [];

        function X(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function Y(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? X(Object(n), !0).forEach((function (e) {
                    Object(p["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : X(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }
        var Z = {
                data: function () {
                    return {
                        copyData: null
                    }
                }, computed: Y(Y(Y({}, Object(b["d"])(["menuTop", "menuLeft", "menuShow", "copyItem"])), Object(b["b"])(["currentItem"])), {}, {
                    curItemActive: function () {
                        return this.currentItem && this.currentItem.active
                    }
                }),
                methods: {
                    copyComponent: function () {
                        this.$store.commit("copyItem", this.currentItem.uuid)
                    }, pasteComponent: function () {
                        this.$store.commit("pasteItem", this.currentItem.uuid)
                    }, deleteComponent: function () {
                        this.$store.commit("removeItem", this.currentItem.uuid)
                    }, upComponent: function () {
                        this.$store.commit("itemUp", this.currentItem.uuid)
                    }, downComponent: function () {
                        this.$store.commit("itemDown", this.currentItem.uuid)
                    }
                }
            },
            tt = Z,
            et = (n("49ac"), Object(P["a"])(tt, Q, V, !1, null, "014fdc05", null)),
            nt = et.exports;

        function rt(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function ot(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? rt(Object(n), !0).forEach((function (e) {
                    Object(p["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : rt(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }
        var it = {
                name: "ContentWrapper",
                props: {},
                components: {
                    PosterItem: G,
                    ContentMenu: nt,
                    VueDragResize: h.a
                },
                filters: {
                    formatPrcent: function (t) {
                        return (100 * Number(t)).toFixed(0) + " %"
                    }
                },
                data: function () {
                    return {}
                }, computed: ot(ot({}, Object(b["b"])(["W", "H", "BGC", "BGURL", "items", "scale", "scaleNew", "sidebar", "currentItem"])), {}, {
                    w: function () {
                        return this.W + "px"
                    }, h: function () {
                        return this.H + "px"
                    }, bgs: function () {
                        return this.w + " " + this.h
                    }, bgi: function () {
                        if (this.BGURL) {
                            var t = this.BGURL;
                            return t.startsWith("http") || (t = API_URL + t), "url('" + t + "')"
                        }
                        return "none"
                    }
                }),
                methods: ot(ot({}, Object(b["c"])(["deactiveAllItem", "switchPanel", "adjustScale", "autoScale", "savePoster"])), {}, {
                    contentWrapperClick: function () {
                        this.$store.commit("hideContextMenu")
                    }, handleContextMenu: function (t) {
                        t.stopPropagation(), t.preventDefault(), this.$store.commit("hideContextMenu");
                        var e = t.target,
                            n = t.offsetY,
                            r = t.offsetX;
                        while (e instanceof SVGElement) e = e.parentNode;
                        while (!e.className.includes("canvas-editor-wrapper")) r += e.offsetLeft, n += e.offsetTop, e = e.parentNode;
                        this.$store.commit("showContextMenu", {
                            top: n,
                            left: r
                        })
                    }, magnify: function () {
                        this.adjustScale(.05)
                    }, shrink: function () {
                        this.adjustScale(-.05)
                    }, resizing: function () {}, keyupHandler: function (t) {
                        switch (t.code) {
                        case "KeyS":
                            (t.ctrlKey || t.metaKey) && (this.savePoster(), t.preventDefault());
                            break;
                        case "KeyR":
                            (t.ctrlKey || t.metaKey) && location.reload();
                            break
                        }
                    }
                })
            },
            st = it,
            at = (n("7eee"), Object(P["a"])(st, u, l, !1, null, "30c7b714", null)),
            ct = at.exports,
            ut = function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "tool-layout"
                }, [n("div", {
                    staticClass: "nav-layout"
                }, t._l(t.tools, (function (e, r) {
                    return n("div", {
                        key: r,
                        staticClass: "nav-item",
                        class: {
                            active: t.activeIndex == r
                        },
                        attrs: {
                            title: t.itemTitle(r, e.name)
                        },
                        on: {
                            click: function (n) {
                                return t.choiceItem(e, r)
                            }
                        }
                    }, ["帮助" === e.name ? n("a", {
                        attrs: {
                            href: "https://poster.prodapi.cn/docs/",
                            target: "_blank"
                        }
                    }, [n("span", {
                        staticClass: "icon iconfont",
                        class: [e.icon]
                    }), n("div", {
                        staticClass: "nav-item-text"
                    }, [n("span", [t._v(t._s(e.name))])])]) : [n("span", {
                        staticClass: "icon iconfont",
                        class: [e.icon]
                    }), n("div", {
                        staticClass: "nav-item-text"
                    }, [n("span", [t._v(t._s(e.name))])])]], 2)
                })), 0), n("my-poster-list", {
                    ref: "myPosterList",
                    staticClass: "tool-extend-wrapper",
                    class: {
                        active: t.showExtendBarMyPosters
                    }
                }), n("div", {
                    staticClass: "tool-extend-wrapper",
                    class: {
                        active: t.showExtendBarLevels
                    }
                }, [n("div", {
                    staticClass: "panel panel-layers mt20 "
                }, [n("div", {
                    staticClass: "panel-layers-items"
                }, t._l(t.items, (function (t, e) {
                    return n("setting-layer", {
                        key: e,
                        attrs: {
                            item: t
                        }
                    })
                })), 1)])]), n("div", {
                    staticClass: "preview-picture"
                }, [n("div", {
                    directives: [{
                        name: "viewer",
                        rawName: "v-viewer",
                        value: {
                            movable: !1
                        },
                        expression: "{movable: false}"
                    }],
                    ref: "images",
                    staticClass: "images"
                }, [n("img", {
                    ref: "showImg"
                })]), n("Modal", {
                    attrs: {
                        width: "800"
                    },
                    model: {
                        value: t.showCodeModal,
                        callback: function (e) {
                            t.showCodeModal = e
                        }, expression: "showCodeModal"
                    }
                }, [n("p", {
                    attrs: {
                        slot: "header"
                    },
                    slot: "header"
                }, [n("span", [t._v("示例代码")])]), n("div", {
                    staticStyle: {
                        "text-align": "center"
                    }
                }, [n("Tabs", {
                    attrs: {
                        value: "java"
                    }
                }, [n("TabPane", {
                    attrs: {
                        label: "Java",
                        name: "java"
                    }
                }, [n("java-code")], 1), n("TabPane", {
                    attrs: {
                        label: "Python",
                        name: "python"
                    }
                }, [n("python-code")], 1), n("TabPane", {
                    attrs: {
                        label: "Go",
                        name: "go"
                    }
                }, [n("golang-code")], 1), n("TabPane", {
                    attrs: {
                        label: "PHP",
                        name: "php"
                    }
                }, [n("php-code")], 1), n("TabPane", {
                    attrs: {
                        label: "cURL",
                        name: "curl"
                    }
                }, [n("curl-code")], 1), n("TabPane", {
                    attrs: {
                        label: "JS",
                        name: "JS"
                    }
                }, [n("js-code")], 1)], 1)], 1)])], 1)], 1)
            },
            lt = [],
            pt = n("e069"),
            dt = function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "my-poster-list"
                }, [n("div", {
                    staticClass: "picture-container"
                }, t._l(t.posters, (function (e) {
                    return n("div", {
                        key: e.id,
                        staticClass: "my-poster-item",
                        attrs: {
                            title: "点击切换海报"
                        },
                        on: {
                            click: function (n) {
                                return t.selectPoster(e)
                            }
                        }
                    }, [n("div", {
                        staticClass: "item-title"
                    }, [n("span", {
                        staticClass: "title"
                    }, [t._v(t._s(e.name))]), n("span", {
                        staticClass: "btn-delete icon iconfont icon-delete1",
                        attrs: {
                            title: "删除海报"
                        },
                        on: {
                            click: function (n) {
                                return n.stopPropagation(), t.deletePoster(e)
                            }
                        }
                    }), n("span", {
                        staticClass: "btn-copy icon iconfont icon-copy",
                        attrs: {
                            title: "复制海报"
                        },
                        on: {
                            click: function (n) {
                                return n.stopPropagation(), t.copyPoster(e)
                            }
                        }
                    })]), n("img", {
                        staticClass: "poster-preview-img",
                        class: {
                            selected: e.id === t.cp.id
                        },
                        attrs: {
                            src: e.preview
                        }
                    })])
                })), 0)])
            },
            ft = [];

        function mt(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function ht(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? mt(Object(n), !0).forEach((function (e) {
                    Object(p["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : mt(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }
        var bt = {
                name: "MyPosterList",
                data: function () {
                    return {
                        cp: {
                            id: 0
                        }
                    }
                }, computed: ht({}, Object(b["b"])(["posters", "items"])),
                methods: ht(ht({}, Object(b["c"])(["logout", "changePoster", "newPoster", "reloadMyPoster"])), {}, {
                    selectPoster: function (t) {
                        var e = this;
                        if (this.cp.id !== t.id) {
                            if (0 == this.items.length && 0 == this.cp.id) return this.cp = t, void this.changePoster(t);
                            this.$Modal.confirm({
                                title: "温馨提示",
                                content: "<p>确定要切换海报[".concat(t.name, " ]吗？</p>"),
                                onOk: function () {
                                    e.cp = t, e.changePoster(t)
                                }
                            })
                        }
                    }, deletePoster: function (t) {
                        var e = this;
                        this.$Modal.confirm({
                            title: "温馨提示",
                            content: "<p>确定要删除海报[".concat(t.name, " ]吗？</p>"),
                            onOk: function () {
                                e.$http.delete("api/user/posters/" + t.id, {}, {
                                    headers: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    }
                                }).then((function (t) {
                                    var n = t.data;
                                    e.reloadMyPoster(), e.$Message.info(n.msg)
                                }))
                            }
                        })
                    }, copyPoster: function (t) {
                        var e = this;
                        console.info("复制海报: " + t.name), this.$http.post("api/user/posters/copy/" + t.id, {}, {
                            headers: {
                                "content-type": "application/x-www-form-urlencoded"
                            }
                        }).then((function (t) {
                            var n = t.data;
                            e.reloadMyPoster(), e.$Message.info(n.msg)
                        }))
                    }
                })
            },
            vt = bt,
            yt = (n("f7fe"), Object(P["a"])(vt, dt, ft, !1, null, "f393799a", null)),
            gt = yt.exports,
            wt = n("aeb1"),
            Ot = n.n(wt),
            jt = function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "setting-layer",
                    class: {
                        active: t.item.uuid == t.ciuuid
                    },
                    style: {
                        order: t.item.z
                    },
                    attrs: {
                        tabindex: "1",
                        id: t.idKey,
                        title: "按上下方向键移动元素层次"
                    },
                    on: {
                        click: t.clickHandler,
                        keydown: t.keypressHandler
                    }
                }, [n("span", {
                    staticClass: "mr8 icon iconfont",
                    class: ["icon-" + t.item.t]
                }), n("span", {
                    class: {
                        warn: !t.item.vd
                    }
                }, [t._v(t._s(t._f("fvd")(t.item.vd)))])])
            },
            Pt = [];

        function Ct(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function _t(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Ct(Object(n), !0).forEach((function (e) {
                    Object(p["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ct(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }
        var xt = {
                name: "SettingLayer",
                props: {
                    item: {}
                },
                computed: _t(_t({}, Object(b["b"])(["ciuuid"])), {}, {
                    idKey: function () {
                        return "layer-" + this.item.uuid
                    }
                }),
                filters: {
                    fvd: function (t) {
                        return t || "未设置动态参数"
                    }
                },
                methods: _t(_t({}, Object(b["c"])(["activeItemDontShow", "itemDown", "itemUp"])), {}, {
                    clickHandler: function () {
                        document.getElementById("layer-" + this.item.uuid).focus(), this.activeItemDontShow(this.item.uuid)
                    }, keypressHandler: function (t) {
                        switch (t.code) {
                        case "ArrowDown":
                            this.itemDown(this.item.uuid);
                            break;
                        case "ArrowUp":
                            this.itemUp(this.item.uuid);
                            break
                        }
                    }
                })
            },
            It = xt,
            St = (n("09c1"), Object(P["a"])(It, jt, Pt, !1, null, "b99bac30", null)),
            kt = St.exports,
            Dt = function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticStyle: {
                        "text-align": "left"
                    }
                }, [n("pre", {
                    staticClass: "code language-java line-numbers",
                    domProps: {
                        innerHTML: t._s(t.html)
                    }
                }, [t._v("      "), n("span"), t._v("\n    ")]), n("Button", {
                    attrs: {
                        id: "btnCopyJava",
                        type: "primary"
                    }
                }, [t._v("复制")])], 1)
            },
            Et = [],
            $t = n("c197"),
            Rt = n.n($t),
            Lt = (n("922d"), n("b311")),
            Tt = n.n(Lt);

        function Kt(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function Mt(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Kt(Object(n), !0).forEach((function (e) {
                    Object(p["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Kt(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }
        var Ut = {
                name: "JavaCode",
                components: {
                    Button: pt["Button"]
                },
                computed: Mt(Mt({}, Object(b["b"])(["items", "accessKey", "secretKey", "posterId"])), {}, {
                    html: function () {
                        var t = Rt.a.highlight(this.code(), Rt.a.languages.java, "java");
                        return t
                    }
                }),
                mounted: function () {
                    var t = this,
                        e = new Tt.a("#btnCopyJava", {
                            text: function () {
                                return t.code()
                            }
                        });
                    e.on("success", (function () {
                        t.$Message.info("复制成功")
                    }))
                }, methods: {
                    down: function () {
                        console.info("下载")
                    }, code: function () {
                        var t = "";
                        this.items.forEach((function (e) {
                            e.vd && (t += '        params.put("'.concat(e.vd, '", "').concat(e.v, '");\n'))
                        })), t = t || "        // 暂未指定任何动态参数\n";
                        var e = 'import java.util.HashMap;\nimport com.alibaba.fastjson.JSON;\nimport com.alibaba.fastjson.JSONObject;\nimport okhttp3.*;\nimport org.apache.commons.io.FileUtils;\n\nimport java.io.File;\nimport java.io.IOException;\nimport java.util.Map;\nimport java.util.concurrent.TimeUnit;\n\npublic class PosterClientDemo {\n\n    public static void main(String[] args) {\n\n        // 创建海报客户端对象\n        PosterClient posterClient = new PosterClient("'.concat(window.API_URL, '", "').concat(this.accessKey, '", "').concat(this.secretKey, '");\n\n        // 构造海报参数\n        HashMap<String, String> params = new HashMap<>();\n').concat(t, '\n        // 海报ID\n        String posterId = "').concat(this.posterId, '";\n\n        // 获取下载地址\n        String url = posterClient.getUrl(posterId, params);\n        System.out.println("url=" + url);\n\n        // 保存到本地\n        posterClient.saveToPath(url, "temp.png");\n\n    }\n\n}\n\nclass PosterClient {\n\n    final static OkHttpClient okHttpClient = new OkHttpClient.Builder().connectTimeout(6, TimeUnit.SECONDS).build();\n    private static final String USER_AGENT = "PosterClient-V2.0.0";\n\n    /**\n     * 接入点\n     */\n    private String endpoint;\n    /**\n     * 访问KEY\n     */\n    private String accessKey;\n    /**\n     * 访问密码\n     */\n    private String secretKey;\n\n    public PosterClient(String endpoint, String accessKey, String secretKey) {\n\n        this.accessKey = accessKey;\n        this.secretKey = secretKey;\n\n        endpoint = endpoint.trim();\n        if (endpoint.endsWith("/")) {\n            endpoint = endpoint.substring(0, endpoint.length() - 1);\n        }\n        this.endpoint = endpoint;\n\n    }\n\n    /**\n     * 获取海报访问地址\n     *\n     * @param posterId 海报ID\n     * @param params   参数列表\n     * @return String\n     */\n    public String getUrl(String posterId, Map<String, String> params) {\n        if (params == null) {\n            params = new HashMap<>();\n        }\n        params.put("accessKey", this.accessKey);\n        params.put("secretKey", this.secretKey);\n        params.put("posterId", posterId);\n\n        String url = this.endpoint + "/api/link";\n\n        MediaType mediaType = MediaType.parse("application/json");\n        String json = JSON.toJSONString(params, true);\n        RequestBody body = RequestBody.create(mediaType, json);\n        Request request = new Request.Builder()\n                .url(url)\n                .post(body)\n                .addHeader("User-Agent", USER_AGENT)\n                .addHeader("Content-Type", "application/json")\n                .addHeader("cache-control", "no-cache")\n                .build();\n\n        try {\n            Response response = okHttpClient.newCall(request).execute();\n            String jsonR = response.body().string();\n            JSONObject o = JSONObject.parseObject(jsonR);\n            if (o.getInteger("code") == 0) {\n                url = o.getString("url");\n            } else {\n                throw new RuntimeException("获取海报链接异常: " + o.getString("msg"));\n            }\n\n            return url.startsWith("http") ? url : endpoint + "/" + url;\n        } catch (IOException e) {\n            throw new RuntimeException("获取海报链接异常", e);\n        }\n    }\n\n    /**\n     * 获取海报数据\n     *\n     * @param url\n     * @return\n     */\n    public byte[] getData(String url) {\n        try {\n            Request request = new Request.Builder()\n                    .url(url)\n                    .addHeader("User-Agent", USER_AGENT)\n                    .get()\n                    .build();\n            Response response = okHttpClient.newCall(request).execute();\n            return response.body().bytes();\n        } catch (Exception e) {\n            throw new RuntimeException("获取海报数据异常", e);\n        }\n    }\n\n    /**\n     * 保存海报到文件\n     *\n     * @param url\n     * @param path\n     */\n    public void saveToPath(String url, String path) {\n        try {\n            byte[] data = getData(url);\n            FileUtils.writeByteArrayToFile(new File(path), data);\n        } catch (IOException e) {\n            new RuntimeException("保存海报到文件", e);\n        }\n    }\n\n}\n');
                        return e
                    }
                }
            },
            Bt = Ut,
            Nt = (n("9a24"), Object(P["a"])(Bt, Dt, Et, !1, null, "004513b8", null)),
            Ht = Nt.exports,
            At = function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticStyle: {
                        "text-align": "left"
                    }
                }, [n("pre", {
                    staticClass: "code language-python line-numbers",
                    domProps: {
                        innerHTML: t._s(t.html)
                    }
                }, [t._v("      "), n("span"), t._v("\n    ")]), n("Button", {
                    attrs: {
                        id: "btnCopyPython",
                        type: "primary"
                    }
                }, [t._v("复制")])], 1)
            },
            qt = [];
        n("3d21");

        function zt(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function Ft(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? zt(Object(n), !0).forEach((function (e) {
                    Object(p["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : zt(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }
        var Jt = {
                name: "PythonCode",
                components: {
                    Button: pt["Button"]
                },
                computed: Ft(Ft({}, Object(b["b"])(["items", "accessKey", "secretKey", "posterId"])), {}, {
                    html: function () {
                        var t = Rt.a.highlight(this.code(), Rt.a.languages.python, "python");
                        return t
                    }
                }),
                mounted: function () {
                    var t = this,
                        e = new Tt.a("#btnCopyPython", {
                            text: function () {
                                return t.code()
                            }
                        });
                    e.on("success", (function () {
                        t.$Message.info("复制成功")
                    }))
                }, methods: {
                    down: function () {
                        console.info("下载")
                    }, code: function () {
                        var t = "";
                        this.items.forEach((function (e) {
                            e.vd && (t += '    params["'.concat(e.vd, '"]="').concat(e.v, '"\n'))
                        })), t = t || "    # 暂未指定任何动态参数\n";
                        var e = "import requests\nimport json\n\nclass posterapi():\n\n    def __init__(self, endpoint: str, accessKey: str, secretKey: str):\n        if endpoint.endswith(\"/\"):\n            endpoint = endpoint[0:-1]\n        self.endpoint = endpoint\n        self.accessKey = accessKey\n        self.secretKey = secretKey\n\n    def getUrl(self, posterId: str, params: dict = {}):\n        params = dict(params)\n        params['posterId'] = posterId\n        params['accessKey'] = self.accessKey\n        params['secretKey'] = self.secretKey\n        url = f\"{self.endpoint}/api/link\"\n        headers = {\n            'Content-Type': 'application/json'\n        }\n        payload = json.dumps(params)\n        response = requests.request(\"POST\", url, headers=headers, data=payload)\n        link = response.json()['url']  # type:str\n        if not link.startswith('http'):\n            link = self.endpoint + link\n        self.link = link\n        return link\n\n    def save(self, filename='tmp.jpg'):\n        response = requests.request(\"GET\", self.link)\n        with open(filename, mode='wb') as f:\n            f.write(response.content)\n\nif __name__ == '__main__':\n    api = posterapi('".concat(window.API_URL, "', '").concat(this.accessKey, "', '").concat(this.secretKey, "')\n    params = {}\n").concat(t, "\n    url = api.getUrl('").concat(this.posterId, "', params)\n    print(url)\n    api.save()");
                        return e
                    }
                }
            },
            Wt = Jt,
            Gt = (n("f28d"), Object(P["a"])(Wt, At, qt, !1, null, "0cfd10c0", null)),
            Qt = Gt.exports,
            Vt = function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticStyle: {
                        "text-align": "left"
                    }
                }, [n("pre", {
                    staticClass: "code language-shell line-numbers",
                    domProps: {
                        innerHTML: t._s(t.html)
                    }
                }, [t._v("      "), n("span"), t._v("\n    ")]), n("Button", {
                    attrs: {
                        id: "btnCopyCurl",
                        type: "primary"
                    }
                }, [t._v("复制")])], 1)
            },
            Xt = [];
        n("8009");

        function Yt(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function Zt(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Yt(Object(n), !0).forEach((function (e) {
                    Object(p["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Yt(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }
        var te = {
                name: "CurlCode",
                components: {
                    Button: pt["Button"]
                },
                computed: Zt(Zt({}, Object(b["b"])(["items", "accessKey", "secretKey", "posterId"])), {}, {
                    html: function () {
                        var t = Rt.a.highlight(this.code(), Rt.a.languages.bash, "bash");
                        return t
                    }
                }),
                mounted: function () {
                    var t = this,
                        e = new Tt.a("#btnCopyCurl", {
                            text: function () {
                                return t.code()
                            }
                        });
                    e.on("success", (function () {
                        t.$Message.info("复制成功")
                    }))
                }, methods: {
                    down: function () {
                        console.info("下载")
                    }, code: function () {
                        var t = {};
                        this.items.filter((function (t) {
                            return t.vd
                        })).forEach((function (e) {
                            t[e.vd] = e.v
                        })), t["accessKey"] = this.accessKey, t["secretKey"] = this.secretKey, t["posterId"] = this.posterId, t = JSON.stringify(t, "", "  ");
                        var e = "curl --location --request POST '".concat(window.API_URL, "api/link' \\\n--header 'Content-Type: application/json' \\\n--data-raw '").concat(t, "'");
                        return e
                    }
                }
            },
            ee = te,
            ne = (n("558c"), Object(P["a"])(ee, Vt, Xt, !1, null, "54c4afd6", null)),
            re = ne.exports,
            oe = function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticStyle: {
                        "text-align": "left"
                    }
                }, [n("pre", {
                    staticClass: "code language-shell line-numbers",
                    domProps: {
                        innerHTML: t._s(t.html)
                    }
                }, [t._v("      "), n("span"), t._v("\n    ")]), n("Button", {
                    attrs: {
                        id: "btnCopyJS",
                        type: "primary"
                    }
                }, [t._v("复制")]), n("a", {
                    attrs: {
                        href: t.link
                    }
                }, [t._v(t._s(t.link))])], 1)
            },
            ie = [];
        n("416b");

        function se(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function ae(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? se(Object(n), !0).forEach((function (e) {
                    Object(p["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : se(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }
        var ce = {
                name: "JS",
                components: {
                    Button: pt["Button"]
                },
                computed: ae(ae({}, Object(b["b"])(["items", "accessKey", "secretKey", "posterId"])), {}, {
                    html: function () {
                        var t = Rt.a.highlight(this.code(), Rt.a.languages.javascript, "javascript");
                        return t
                    }
                }),
                data: function () {
                    return {
                        link: ""
                    }
                }, mounted: function () {
                    var t = this,
                        e = new Tt.a("#btnCopyJS", {
                            text: function () {
                                return t.code()
                            }
                        });
                    e.on("success", (function () {
                        t.$Message.info("复制成功")
                    }))
                }, methods: {
                    down: function () {
                        console.info("下载")
                    }, code: function () {
                        var t = {};
                        this.items.filter((function (t) {
                            return t.vd
                        })).forEach((function (e) {
                            t[e.vd] = e.v
                        })), t["accessKey"] = this.accessKey, t["secretKey"] = this.secretKey, t["posterId"] = this.posterId, t = JSON.stringify(t, "", "  ");
                        var e = '// 复制后，粘贴在浏览器控制台即可运行\nvar myHeaders = new Headers();\nmyHeaders.append("Content-Type", "application/json");\n\nvar raw = JSON.stringify('.concat(t, ");\n\nvar requestOptions = {\n  method: 'POST',\n  headers: myHeaders,\n  body: raw,\n  redirect: 'follow'\n};\n\nfetch(\"").concat(window.API_URL, "api/link\", requestOptions)\n  .then(response => response.json())\n  .then(result => console.log(result, result.url))\n  .catch(error => console.log('error', error));");
                        return e
                    }
                }
            },
            ue = ce,
            le = (n("8cd3"), Object(P["a"])(ue, oe, ie, !1, null, "673431b3", null)),
            pe = le.exports,
            de = function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticStyle: {
                        "text-align": "left"
                    }
                }, [n("pre", {
                    staticClass: "code language-php line-numbers",
                    domProps: {
                        innerHTML: t._s(t.html)
                    }
                }, [t._v("      "), n("span"), t._v("\n    ")]), n("Button", {
                    attrs: {
                        id: "btnCopyPhp",
                        type: "primary"
                    }
                }, [t._v("复制")])], 1)
            },
            fe = [];
        n("6217"), n("8e9b");

        function me(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function he(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? me(Object(n), !0).forEach((function (e) {
                    Object(p["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : me(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }
        var be = {
                name: "PythonCode",
                components: {
                    Button: pt["Button"]
                },
                computed: he(he({}, Object(b["b"])(["items", "accessKey", "secretKey", "posterId"])), {}, {
                    html: function () {
                        var t = Rt.a.highlight(this.code(), Rt.a.languages.php, "php");
                        return t
                    }
                }),
                mounted: function () {
                    var t = this,
                        e = new Tt.a("#btnCopyPhp", {
                            text: function () {
                                return t.code()
                            }
                        });
                    e.on("success", (function () {
                        t.$Message.info("复制成功")
                    }))
                }, methods: {
                    down: function () {
                        console.info("下载")
                    }, code: function () {
                        var t = {};
                        this.items.filter((function (t) {
                            return t.vd
                        })).forEach((function (e) {
                            t[e.vd] = e.v
                        })), t["accessKey"] = this.accessKey, t["secretKey"] = this.secretKey, t["posterId"] = this.posterId, t = JSON.stringify(t, "", "  ");
                        var e = "<?php\n\n# 设置参数\n$data = '".concat(t, "';\n\nfunction get_link($data)\n{\n    $curl = curl_init();\n    curl_setopt_array($curl, array(\n        CURLOPT_URL => '").concat(window.API_URL, "api/link',\n        CURLOPT_RETURNTRANSFER => true,\n        CURLOPT_ENCODING => '',\n        CURLOPT_MAXREDIRS => 10,\n        CURLOPT_TIMEOUT => 0,\n        CURLOPT_FOLLOWLOCATION => true,\n        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n        CURLOPT_CUSTOMREQUEST => 'POST',\n        CURLOPT_HTTPHEADER => array('Content-Type: application/json'),\n        CURLOPT_POSTFIELDS => $data,\n    ));\n    $json = curl_exec($curl);\n    curl_close($curl);\n    $r = json_decode($json, true);\n    return \"").concat(window.API_URL, '" . $r["url"];;\n}\n\n# 获取连接\n$url = get_link($data);\necho "链接地址为: " . $url . "\\n";\n\nfunction down($url, $filename)\n{\n    $ch = curl_init();\n    curl_setopt($ch, CURLOPT_URL, $url);\n    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);\n    $st = curl_exec($ch);   //将curl的结果存到变量里\n    $fd = fopen($filename, \'w\');\n    fwrite($fd, $st);  //将curl的结果写入文件里\n    fclose($fd);\n    curl_close($ch);\n}\n\n# 下载并且, 保存图片\ndown($url, "temp.png");\necho "图片保存完成\\n";\n');
                        return e
                    }
                }
            },
            ve = be,
            ye = (n("2420"), Object(P["a"])(ve, de, fe, !1, null, "249e0d7e", null)),
            ge = ye.exports,
            we = function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticStyle: {
                        "text-align": "left"
                    }
                }, [n("pre", {
                    staticClass: "code language-shell line-numbers",
                    domProps: {
                        innerHTML: t._s(t.html)
                    }
                }, [t._v("    "), n("span"), t._v("\n  ")]), n("Button", {
                    attrs: {
                        id: "btnCopyGo",
                        type: "primary"
                    }
                }, [t._v("复制")]), n("a", {
                    attrs: {
                        href: t.link
                    }
                }, [t._v(t._s(t.link))])], 1)
            },
            Oe = [];
        n("1989");

        function je(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function Pe(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? je(Object(n), !0).forEach((function (e) {
                    Object(p["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : je(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }
        var Ce = {
                name: "GolangCode",
                components: {
                    Button: pt["Button"]
                },
                computed: Pe(Pe({}, Object(b["b"])(["items", "accessKey", "secretKey", "posterId"])), {}, {
                    html: function () {
                        var t = Rt.a.highlight(this.code(), Rt.a.languages.go, "go");
                        return t
                    }
                }),
                data: function () {
                    return {
                        link: ""
                    }
                }, mounted: function () {
                    var t = this,
                        e = new Tt.a("#btnCopyGo", {
                            text: function () {
                                return t.code()
                            }
                        });
                    e.on("success", (function () {
                        t.$Message.info("复制成功")
                    }))
                }, methods: {
                    down: function () {
                        console.info("下载")
                    }, code: function () {
                        var t = {};
                        this.items.filter((function (t) {
                            return t.vd
                        })).forEach((function (e) {
                            t[e.vd] = e.v
                        })), t["accessKey"] = this.accessKey, t["secretKey"] = this.secretKey, t["posterId"] = this.posterId, t = JSON.stringify(t, null, 4);
                        var e = '\npackage main\n\nimport (\n\t"fmt"\n\t"io/ioutil"\n\t"net/http"\n\t"strings"\n)\n\nfunc main() {\n\n\turl := "'.concat(window.API_URL, 'api/link"\n\tmethod := "POST"\n\n\tpayload := strings.NewReader(`').concat(t, '`)\n\n\tclient := &http.Client {\n\t}\n\treq, err := http.NewRequest(method, url, payload)\n\n\tif err != nil {\n\t\tfmt.Println(err)\n\t\treturn\n\t}\n\treq.Header.Add("Content-Type", "application/json")\n\n\tres, err := client.Do(req)\n\tif err != nil {\n\t\tfmt.Println(err)\n\t\treturn\n\t}\n\tdefer res.Body.Close()\n\n\tbody, err := ioutil.ReadAll(res.Body)\n\tif err != nil {\n\t\tfmt.Println(err)\n\t\treturn\n\t}\n\tfmt.Println(string(body))\n}\n');
                        return e
                    }
                }
            },
            _e = Ce,
            xe = (n("04b8"), Object(P["a"])(_e, we, Oe, !1, null, "35347cfa", null)),
            Ie = xe.exports;

        function Se(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function ke(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Se(Object(n), !0).forEach((function (e) {
                    Object(p["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Se(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }
        var De = {
                name: "ToolLayout",
                components: {
                    PythonCode: Qt,
                    PhpCode: ge,
                    CurlCode: re,
                    JavaCode: Ht,
                    JsCode: pe,
                    GolangCode: Ie,
                    Modal: pt["Modal"],
                    Tabs: pt["Tabs"],
                    TabPane: pt["TabPane"],
                    MyPosterList: gt,
                    SettingLayer: kt
                },
                data: function () {
                    return {
                        showModal: !1,
                        showCodeModal: !1,
                        activeIndex: 0,
                        lastActiveIndex: -1,
                        showExtendBarMyPosters: !0,
                        showExtendBarLevels: !1,
                        tools: [{
                            name: "我的海报",
                            icon: "icon-template",
                            active: !1
                        }, {
                            name: "图层",
                            icon: "icon-level",
                            active: !1
                        }, {
                            name: "文本",
                            t: "text",
                            icon: "icon-text",
                            active: !1
                        }, {
                            name: "二维码",
                            t: "qrcode",
                            icon: "icon-qrcode",
                            active: !1
                        }, {
                            name: "图片",
                            t: "image",
                            icon: "icon-image",
                            active: !1
                        }, {
                            name: "头像",
                            t: "avatar",
                            icon: "icon-avatar",
                            active: !1
                        }, {
                            name: "代码",
                            icon: "icon-code",
                            active: !1
                        }, {
                            name: "预览",
                            icon: "icon-preview1",
                            active: !1
                        }, {
                            name: "下载",
                            icon: "icon-download",
                            active: !1
                        }, {
                            name: "帮助",
                            icon: "icon-help",
                            active: !1
                        }]
                    }
                }, computed: ke({}, Object(b["b"])(["json", "W", "H", "sidebar", "items"])),
                created: function () {
                    this.reloadMyPoster()
                }, methods: ke(ke({}, Object(b["c"])(["addItem", "reloadMyPoster"])), {}, {
                    itemTitle: function (t, e) {
                        return t >= 2 && t <= 4 ? "点击添加到设计器" : e
                    }, isExtendItem: function (t) {
                        return 0 == this.activeIndex || 1 == this.activeIndex
                    }, choiceItem: function (t, e) {
                        if (this.activeIndex = e, t.t && this.addItem({
                            t: t.t,
                            name: t.name
                        }), this.isExtendItem(e) && (this.showExtendBarMyPosters = "我的海报" === t.name && !this.showExtendBarMyPosters, this.showExtendBarLevels = "图层" === t.name && !this.showExtendBarLevels, this.sidebar.showExtendBar = this.showExtendBarMyPosters || this.showExtendBarLevels), "预览" === t.name) {
                            var n = this.$refs.showImg,
                                r = this,
                                o = this.json,
                                i = new XMLHttpRequest;
                            i.withCredentials = !0, i.open("POST", window.PREVIEW_URL, !0), i.setRequestHeader("Content-Type", "application/json"), i.setRequestHeader("token", localStorage.getItem("token")), i.responseType = "blob", i.onload = function () {
                                if (200 == this.status) {
                                    var t = this.response;
                                    n.onload = function (t) {
                                        var e = r.$el.querySelector(".images").$viewer;
                                        e.show()
                                    }, n.src = window.URL.createObjectURL(t)
                                }
                                401 == this.status && alert("请登录后再操作")
                            }, i.send(o)
                        }
                        if ("下载" === t.name) {
                            var s = this,
                                a = new XMLHttpRequest;
                            a.withCredentials = !0, a.open("POST", window.PREVIEW_URL, !0), a.setRequestHeader("Content-Type", "application/json"), a.setRequestHeader("token", localStorage.getItem("token")), a.responseType = "blob", a.onload = function () {
                                if (200 == this.status) {
                                    var t = this.response;
                                    Ot()(t, s.$store.state.p.name + ".jpg", "", "image/png")
                                }
                                401 == this.status && alert("请登录后再操作")
                            }, a.send(this.json)
                        }
                        "代码" === t.name && (this.showCodeModal = !0), "我的海报" === t.name && this.showExtendBarMyPosters && this.reloadMyPoster(), t.name
                    }
                })
            },
            Ee = De,
            $e = (n("7332"), Object(P["a"])(Ee, ut, lt, !1, null, "18cc5a9a", null)),
            Re = $e.exports,
            Le = function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "property-layout"
                }, [n("div", {
                    staticClass: "title"
                }, [n("div", {
                    staticClass: "item",
                    class: {
                        active: "item" == t.currentPanel
                    },
                    on: {
                        click: function (e) {
                            return t.switchPanel("item")
                        }
                    }
                }, [n("p", [t._v("属性设置")])]), n("div", {
                    staticClass: "item",
                    class: {
                        active: "canvas" == t.currentPanel
                    },
                    on: {
                        click: function (e) {
                            return t.switchPanel("canvas")
                        }
                    }
                }, [n("p", [t._v("海报设置")])])]), n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "canvas" == t.currentPanel,
                        expression: "currentPanel == 'canvas' "
                    }],
                    staticClass: "canvas-setting"
                }, [n("div", {
                    staticClass: "panel"
                }, [n("Row", {
                    staticClass: "mt10"
                }, [n("Col", {
                    staticClass: "lh32",
                    attrs: {
                        span: "6"
                    }
                }, [t._v("\n                    名称\n                ")]), n("Col", {
                    attrs: {
                        span: "16"
                    }
                }, [n("Input", {
                    model: {
                        value: t.$store.state.p.name,
                        callback: function (e) {
                            t.$set(t.$store.state.p, "name", e)
                        }, expression: "$store.state.p.name"
                    }
                })], 1)], 1), n("Row", [n("Col", {
                    staticClass: "lh32",
                    attrs: {
                        span: "6"
                    }
                }, [t._v("\n                格式\n              ")]), n("Col", {
                    staticClass: "lh32",
                    attrs: {
                        span: "16"
                    }
                }, [n("RadioGroup", {
                    model: {
                        value: t.$store.state.p.type,
                        callback: function (e) {
                            t.$set(t.$store.state.p, "type", e)
                        }, expression: "$store.state.p.type"
                    }
                }, [n("Radio", {
                    attrs: {
                        label: "png"
                    }
                }, [n("span", [t._v("png")])]), n("Radio", {
                    attrs: {
                        label: "jpeg"
                    }
                }, [n("span", [t._v("jpeg")])])], 1)], 1)], 1), n("Row", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "jpeg" === t.$store.state.p.type,
                        expression: "$store.state.p.type === 'jpeg'"
                    }]
                }, [n("Col", {
                    staticClass: "lh32",
                    attrs: {
                        span: "6"
                    }
                }, [t._v("\n                质量\n              ")]), n("Col", {
                    attrs: {
                        span: "16"
                    }
                }, [n("Slider", {
                    attrs: {
                        max: 100,
                        min: 30
                    },
                    model: {
                        value: t.$store.state.p.quality,
                        callback: function (e) {
                            t.$set(t.$store.state.p, "quality", e)
                        }, expression: "$store.state.p.quality"
                    }
                })], 1)], 1), n("Divider", {
                    attrs: {
                        orientation: "left"
                    }
                }, [n("Tooltip", {
                    attrs: {
                        content: "修改海报尺寸"
                    }
                }, [t._v("\n                    海报尺寸\n                ")])], 1), n("Row", {
                    staticClass: "mt20"
                }, [n("Col", {
                    attrs: {
                        span: "6"
                    }
                }, [t._v(" ")]), n("Col", {
                    attrs: {
                        span: "6"
                    }
                }, [t._v(" ")]), n("Col", {
                    staticClass: "lh32",
                    attrs: {
                        span: "6"
                    }
                }, [t._v("高度")]), n("Col", {
                    staticClass: "lh32",
                    attrs: {
                        span: "6"
                    }
                }, [t._v("宽度")])], 1), n("Row", [n("Col", {
                    attrs: {
                        span: "12"
                    }
                }, [n("Dropdown", {
                    on: {
                        "on-click": t.itemChange
                    }
                }, [n("Button", {
                    attrs: {
                        type: "primary"
                    }
                }, [t._v("\n                            常用尺寸\n                            "), n("Icon", {
                    attrs: {
                        type: "ios-arrow-down"
                    }
                })], 1), n("DropdownMenu", {
                    attrs: {
                        slot: "list"
                    },
                    slot: "list"
                }, [n("DropdownItem", {
                    attrs: {
                        name: "640,1008"
                    }
                }, [t._v("640 x 1008")]), n("DropdownItem", {
                    attrs: {
                        name: "720,1280"
                    }
                }, [t._v("720 x 1280")]), n("DropdownItem", {
                    attrs: {
                        name: "750,1181"
                    }
                }, [t._v("750 x 1181")]), n("DropdownItem", {
                    attrs: {
                        name: "750,1333"
                    }
                }, [t._v("750 x 1333")]), n("DropdownItem", {
                    attrs: {
                        name: "800,2000"
                    }
                }, [t._v("800 x 2000")]), n("DropdownItem", {
                    attrs: {
                        name: "1242,2208"
                    }
                }, [t._v("1242 x 2208")])], 1)], 1)], 1), n("Col", {
                    attrs: {
                        span: "6"
                    }
                }, [n("InputNumber", {
                    staticClass: "input ",
                    attrs: {
                        max: 1e3,
                        min: 50
                    },
                    model: {
                        value: t.$store.state.p.w,
                        callback: function (e) {
                            t.$set(t.$store.state.p, "w", e)
                        }, expression: "$store.state.p.w"
                    }
                })], 1), n("Col", {
                    attrs: {
                        span: "6"
                    }
                }, [n("InputNumber", {
                    staticClass: "input ",
                    attrs: {
                        max: 2e3,
                        min: 50
                    },
                    model: {
                        value: t.$store.state.p.h,
                        callback: function (e) {
                            t.$set(t.$store.state.p, "h", e)
                        }, expression: "$store.state.p.h"
                    }
                })], 1)], 1), n("Divider", {
                    attrs: {
                        orientation: "left"
                    }
                }, [n("Tooltip", {
                    attrs: {
                        content: "修改背景颜色和图片"
                    }
                }, [t._v("\n                    背景\n                ")])], 1), n("Row", {
                    staticClass: "mt10"
                }, [n("Col", {
                    staticClass: "lh32",
                    attrs: {
                        span: "6"
                    }
                }, [t._v("\n                    背景色\n                ")]), n("Col", {
                    attrs: {
                        span: "6"
                    }
                }, [n("ColorPicker", {
                    attrs: {
                        recommend: ""
                    },
                    model: {
                        value: t.$store.state.p.bgc,
                        callback: function (e) {
                            t.$set(t.$store.state.p, "bgc", e)
                        }, expression: "$store.state.p.bgc"
                    }
                })], 1)], 1), n("Row", {
                    staticClass: "mt10"
                }, [n("Col", {
                    staticClass: "lh32",
                    attrs: {
                        span: "6"
                    }
                }, [t._v("\n                    背景图\n                ")]), n("Col", {
                    attrs: {
                        span: "8"
                    }
                }, [n("Upload", {
                    attrs: {
                        action: t.UPLOAD_URL,
                        "on-success": t.successHandler,
                        headers: {
                            token: t.token
                        },
                        format: ["jpg", "jpeg", "png"],
                        "show-upload-list": !1
                    }
                }, [n("Button", {
                    attrs: {
                        type: "primary",
                        icon: "ios-cloud-upload-outline"
                    }
                }, [t._v("上传")])], 1)], 1), n("Col", {
                    attrs: {
                        span: "4"
                    }
                }, [n("Button", {
                    attrs: {
                        type: "primary"
                    },
                    on: {
                        click: t.deleteBgImage
                    }
                }, [t._v("删除背景图")])], 1)], 1), n("Row", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.$store.state.p.bgUrl,
                        expression: "$store.state.p.bgUrl"
                    }]
                }, [n("Col", {
                    attrs: {
                        span: "6"
                    }
                }, [t._v("\n                背景图地址\n              ")]), n("Col", {
                    attrs: {
                        span: "17"
                    }
                }, [n("Input", {
                    attrs: {
                        type: "textarea",
                        rows: 4
                    },
                    model: {
                        value: t.$store.state.p.bgUrl,
                        callback: function (e) {
                            t.$set(t.$store.state.p, "bgUrl", e)
                        }, expression: "$store.state.p.bgUrl"
                    }
                })], 1)], 1)], 1)]), n("setting-item-layout", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "item" == t.currentPanel,
                        expression: "currentPanel == 'item' "
                    }],
                    staticClass: "item-setting"
                })], 1)
            },
            Te = [],
            Ke = (n("28a5"), function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return null != t.currentItem ? n("div", {
                    staticClass: "item-setting-panel"
                }, [n("setting-item-base", {
                    attrs: {
                        item: t.currentItem
                    }
                })], 1) : t._e()
            }),
            Me = [],
            Ue = function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "setting-item-base"
                }, [n("Divider", {
                    attrs: {
                        orientation: "left"
                    }
                }, [n("Tooltip", {
                    attrs: {
                        "max-width": "200",
                        content: "此处可进行位置和大小的调整"
                    }
                }, [t._v("\n        位置大小\n      ")])], 1), n("Row", [n("Col", {
                    attrs: {
                        span: "6"
                    }
                }, [t._v("x")]), n("Col", {
                    attrs: {
                        span: "6"
                    }
                }, [t._v("y")]), n("Col", {
                    attrs: {
                        span: "6"
                    }
                }, [t._v("宽度")]), n("Col", {
                    attrs: {
                        span: "6"
                    }
                }, [t._v("高度")])], 1), n("Row", [n("Col", {
                    attrs: {
                        span: "6"
                    }
                }, [n("InputNumber", {
                    staticClass: "input ",
                    attrs: {
                        max: t.w - t.item.w,
                        min: 0
                    },
                    model: {
                        value: t.item.x,
                        callback: function (e) {
                            t.$set(t.item, "x", e)
                        }, expression: "item.x"
                    }
                })], 1), n("Col", {
                    attrs: {
                        span: "6"
                    }
                }, [n("InputNumber", {
                    staticClass: "input ",
                    attrs: {
                        max: t.h - t.item.h,
                        min: 0
                    },
                    model: {
                        value: t.item.y,
                        callback: function (e) {
                            t.$set(t.item, "y", e)
                        }, expression: "item.y"
                    }
                })], 1), n("Col", {
                    attrs: {
                        span: "6"
                    }
                }, [n("InputNumber", {
                    staticClass: "input ",
                    attrs: {
                        max: t.w,
                        min: 0
                    },
                    model: {
                        value: t.item.w,
                        callback: function (e) {
                            t.$set(t.item, "w", e)
                        }, expression: "item.w"
                    }
                })], 1), n("Col", {
                    attrs: {
                        span: "6"
                    }
                }, [n("InputNumber", {
                    staticClass: "input ",
                    attrs: {
                        max: t.h,
                        min: 0
                    },
                    model: {
                        value: t.item.h,
                        callback: function (e) {
                            t.$set(t.item, "h", e)
                        }, expression: "item.h"
                    }
                })], 1)], 1), n("Divider", {
                    attrs: {
                        orientation: "left"
                    }
                }, [n("Tooltip", {
                    attrs: {
                        "max-width": "200",
                        content: "点击修改颜色"
                    }
                }, [t._v("颜色")])], 1), n("Row", [n("Col", {
                    staticClass: "lh32",
                    attrs: {
                        span: "6"
                    }
                }, [t._v("\n        颜色\n      ")]), n("Col", {
                    attrs: {
                        span: "6"
                    }
                }, [n("color-picker", {
                    attrs: {
                        recommend: ""
                    },
                    on: {
                        "on-change": t.changeColor
                    },
                    model: {
                        value: t.item.c,
                        callback: function (e) {
                            t.$set(t.item, "c", e)
                        }, expression: "item.c"
                    }
                })], 1)], 1), n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "image" === t.item.t || "avatar" === t.item.t,
                        expression: "item.t === 'image' || item.t === 'avatar' "
                    }]
                }, [n("Divider", {
                    attrs: {
                        orientation: "left"
                    }
                }, [n("Tooltip", {
                    attrs: {
                        "max-width": "200",
                        content: "图片"
                    }
                }, [t._v("图片")])], 1), n("Row", {
                    staticClass: "mt10"
                }, [n("Col", {
                    staticClass: "lh32",
                    attrs: {
                        span: "6"
                    }
                }, [t._v("\n          图片\n        ")]), n("Col", {
                    attrs: {
                        span: "8"
                    }
                }, [n("Upload", {
                    attrs: {
                        action: t.UPLOAD_URL,
                        "on-success": t.successHandler,
                        headers: {
                            token: t.token
                        },
                        format: ["jpg", "jpeg", "png"],
                        "show-upload-list": !1
                    }
                }, [n("Button", {
                    attrs: {
                        type: "primary",
                        icon: "ios-cloud-upload-outline"
                    }
                }, [t._v("上传")])], 1)], 1), n("Col", {
                    attrs: {
                        span: "6"
                    }
                }, [n("Button", {
                    on: {
                        click: t.deleteImg
                    }
                }, [t._v("删除")])], 1)], 1)], 1), n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "text" === t.item.t,
                        expression: "item.t === 'text' "
                    }]
                }, [n("Divider", {
                    attrs: {
                        orientation: "left"
                    }
                }, [n("Tooltip", {
                    attrs: {
                        "max-width": "200",
                        content: "拖动修改字体大小"
                    }
                }, [t._v("字体")])], 1), n("Row", [n("Col", {
                    staticClass: "lh36",
                    attrs: {
                        span: "6"
                    }
                }, [t._v("\n          字体大小\n        ")]), n("Col", {
                    attrs: {
                        span: "10"
                    }
                }, [n("Slider", {
                    attrs: {
                        min: 10
                    },
                    model: {
                        value: t.item.s,
                        callback: function (e) {
                            t.$set(t.item, "s", e)
                        }, expression: "item.s"
                    }
                })], 1), n("Col", {
                    attrs: {
                        span: "1"
                    }
                }, [t._v("\n           \n        ")]), n("Col", {
                    attrs: {
                        span: "6"
                    }
                }, [n("InputNumber", {
                    staticClass: "input ",
                    attrs: {
                        max: 100,
                        min: 0
                    },
                    model: {
                        value: t.item.s,
                        callback: function (e) {
                            t.$set(t.item, "s", e)
                        }, expression: "item.s"
                    }
                })], 1)], 1)], 1), n("div", [n("Divider", {
                    attrs: {
                        orientation: "left"
                    }
                }, [n("Tooltip", {
                    attrs: {
                        "max-width": "200",
                        content: "静态参数: 效果预览使用，不可变    动态参数: 调用接口使用，可变"
                    }
                }, [t._v("\n          参数\n        ")])], 1), n("Row", [n("Col", {
                    attrs: {
                        span: "6"
                    }
                }, [t._v("\n          名称\n        ")]), n("Col", {
                    attrs: {
                        span: "17"
                    }
                }, [n("Input", {
                    model: {
                        value: t.item.name,
                        callback: function (e) {
                            t.$set(t.item, "name", e)
                        }, expression: "item.name"
                    }
                })], 1)], 1), n("Row", [n("Col", {
                    attrs: {
                        span: "6"
                    }
                }, [t._v("\n          静态参数\n        ")]), n("Col", {
                    attrs: {
                        span: "17"
                    }
                }, [n("Input", {
                    attrs: {
                        type: "textarea",
                        rows: 4
                    },
                    on: {
                        "on-change": t.changeV
                    },
                    model: {
                        value: t.item.v,
                        callback: function (e) {
                            t.$set(t.item, "v", e)
                        }, expression: "item.v"
                    }
                })], 1)], 1), n("Row", [n("Col", {
                    attrs: {
                        span: "6"
                    }
                }, [t._v("\n          动态参数\n        ")]), n("Col", {
                    attrs: {
                        span: "17"
                    }
                }, [n("Input", {
                    model: {
                        value: t.item.vd,
                        callback: function (e) {
                            t.$set(t.item, "vd", e)
                        }, expression: "item.vd"
                    }
                })], 1)], 1)], 1)], 1)
            },
            Be = [];

        function Ne(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function He(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Ne(Object(n), !0).forEach((function (e) {
                    Object(p["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ne(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }
        var Ae = {
                name: "SettingItemBase",
                components: {
                    InputNumber: pt["InputNumber"],
                    Row: pt["Row"],
                    Col: pt["Col"],
                    ColorPicker: pt["ColorPicker"],
                    Slider: pt["Slider"],
                    Divider: pt["Divider"],
                    Tooltip: pt["Tooltip"],
                    Input: pt["Input"],
                    Checkbox: pt["Checkbox"]
                },
                props: {
                    item: {}
                },
                data: function () {
                    return {
                        UPLOAD_URL: "index.php?m=wjyk_nhyk&c=site&a=entry&do=admin&tp_c=index&tp_a=upload",
                        token: localStorage.getItem("token")
                    }
                }, computed: He(He({}, Object(b["b"])(["w", "h"])), {}, {
                    strikethrough: {
                        get: function () {
                            return this.item.st >= 1
                        }, set: function (t) {
                            this.item.st = t ? Number((this.item.s / 10).toFixed(0)) : 0
                        }
                    }
                }),
                methods: {
                    isQrcode: function () {
                        return "qrcode" === this.item.t
                    }, changeColor: function (t) {
                        this.isQrcode() && $(this.item.uuid, "buildQrcode")
                    }, changeBgColor: function (t) {
                        this.isQrcode() && $(this.item.uuid, "buildQrcode")
                    }, deleteImg: function (t) {
                        this.item.v = ""
                    }, changeV: function () {
                        this.isQrcode() && $(this.item.uuid, "buildQrcode")
                    }, successHandler: function (t, e) {
                        var n = this;
                        if (0 !== t.code);
                        else {
                            var r = t.msg,
                                o = new Image;
                            o.src = r.startsWith("http") ? r : API_URL + r;
                            var i = 400,
                                s = setInterval((function () {
                                    i-- <= 0 && window.clearInterval(s), o.width > 0 && (n.item.v = r, window.clearInterval(s))
                                }), 50)
                        }
                    }
                }
            },
            qe = Ae,
            ze = (n("db58"), Object(P["a"])(qe, Ue, Be, !1, null, null, null)),
            Fe = ze.exports;

        function Je(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function We(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Je(Object(n), !0).forEach((function (e) {
                    Object(p["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Je(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }
        var Ge = {
                name: "ItemSettingPanel",
                components: {
                    SettingItemBase: Fe
                },
                computed: We({}, Object(b["b"])(["items", "currentPanel", "currentItem"]))
            },
            Qe = Ge,
            Ve = Object(P["a"])(Qe, Ke, Me, !1, null, "2be32f8e", null),
            Xe = Ve.exports;

        function Ye(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function Ze(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Ye(Object(n), !0).forEach((function (e) {
                    Object(p["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ye(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }
        var tn = {
                name: "SettingLayout",
                components: {
                    SettingItemLayout: Xe,
                    SettingLayer: kt,
                    InputNumber: pt["InputNumber"],
                    Row: pt["Row"],
                    Col: pt["Col"],
                    ColorPicker: pt["ColorPicker"],
                    Slider: pt["Slider"],
                    Divider: pt["Divider"],
                    Tooltip: pt["Tooltip"],
                    Dropdown: pt["Dropdown"],
                    Icon: pt["Icon"],
                    DropdownMenu: pt["DropdownMenu"],
                    DropdownItem: pt["DropdownItem"],
                    Button: pt["Button"],
                    Upload: pt["Upload"]
                },
                data: function () {
                    return {
                         UPLOAD_URL: "index.php?m=wjyk_nhyk&c=site&a=entry&do=admin&tp_c=index&tp_a=upload",
                        token: localStorage.getItem("token")
                    }
                }, computed: Ze({}, Object(b["b"])(["items", "currentPanel", "ciuuid"])),
                methods: Ze(Ze({}, Object(b["c"])(["switchPanel", "activeItemDontShow", "changeWH", "changeBgImage"])), {}, {
                    itemChange: function (t) {
                        if (t) {
                            var e = Number(t.split(",")[0]),
                                n = Number(t.split(",")[1]);
                            this.changeWH({
                                w: e,
                                h: n
                            })
                        }
                    }, deleteBgImage: function () {
                        this.changeBgImage("")
                    }, successHandler: function (t, e) {
                        var n = this;
                        if (0 !== t.code) console.info("res=", t);
                        else {
                            var r = t.msg,
                                o = new Image;
                            o.src = r.startsWith("http") ? r : API_URL + r;
                            var i = 400,
                                s = setInterval((function () {
                                    i-- <= 0 && window.clearInterval(s), o.width > 0 && (n.changeBgImage(r), n.changeWH({
                                        w: o.width,
                                        h: o.height
                                    }), window.clearInterval(s))
                                }), 50)
                        }
                    }
                })
            },
            en = tn,
            nn = (n("ffea"), n("d501"), Object(P["a"])(en, Le, Te, !1, null, "1394a67e", null)),
            rn = nn.exports,
            on = function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "debug-layout",
                    class: {
                        active: t.show
                    },
                    on: {
                        dblclick: function (e) {
                            t.show = !t.show
                        }
                    }
                }, [n("pre", [t._v(t._s(t.json))])])
            },
            sn = [];

        function an(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function cn(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? an(Object(n), !0).forEach((function (e) {
                    Object(p["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : an(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }
        var un = {
                name: "DebugLayout",
                data: function () {
                    return {}
                }, computed: cn(cn({}, Object(b["b"])(["ciuuid", "items", "debug", "json"])), {}, {
                    show: {
                        get: function () {
                            var t = !0;
                            return t && this.debug
                        }, set: function (t) {
                            this.$store.state.p.editor.debug = Boolean(t)
                        }
                    }
                }),
                methods: {}
            },
            ln = un,
            pn = (n("69df"), Object(P["a"])(ln, on, sn, !1, null, "bc2ecf4a", null)),
            dn = pn.exports,
            fn = function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "top-bar-layout"
                }, [n("div", {
                    staticClass: "left-bar"
                }, [n("div", {
                    staticClass: "main-title",
                    attrs: {
                        title: "快速完成海报开发"
                    }
                }, [t._v("自定义海报生成")]), n("span", {
                    staticClass: "btn-icon icon iconfont icon-new",
                    attrs: {
                        title: "新建海报"
                    },
                    on: {
                        click: t.newPosterHandler
                    }
                }), n("span", {
                    staticClass: "btn-icon icon iconfont icon-save1",
                    attrs: {
                        title: "保存海报"
                    },
                    on: {
                        click: t.savePoster
                    }
                }), n("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "saving" == t.editor.saveStatus,
                        expression: "editor.saveStatus == 'saving'"
                    }],
                    staticClass: "text-saved"
                }, [t._v("正在保存...")]), n("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "saved" == t.editor.saveStatus,
                        expression: "editor.saveStatus == 'saved'"
                    }],
                    staticClass: "text-saved"
                }, [t._v(t._s((new Date).format("hh:mm:ss") + "  已保存"))])]), t._m(0)])
            },
            mn = [

                function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "right-bar"
                    }, [])
                }
            ],
            hn = n("1345");

        function bn(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function vn(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? bn(Object(n), !0).forEach((function (e) {
                    Object(p["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : bn(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }
        var yn = {
                name: "TopBarLayout",
                components: {
                    LoginModal: hn["default"],
                    Dropdown: pt["Dropdown"],
                    DropdownMenu: pt["DropdownMenu"],
                    Icon: pt["Icon"],
                    DropdownItem: pt["DropdownItem"],
                    Divider: pt["Divider"],
                    Drawer: pt["Drawer"],
                    Modal: pt["Modal"]
                },
                data: function () {
                    return {
                        m: {
                            showLoginModal: !1,
                            showFeedbackModal: !1
                        },
                        posters: [],
                        saveTips: ""
                    }
                }, computed: vn({}, Object(b["b"])(["currentUser", "json", "editor"])),
                methods: vn(vn({}, Object(b["c"])(["logout", "changePoster", "newPoster", "reloadMyPoster", "savePoster"])), {}, {
                    logoutNow: function () {
                        this.m.showLoginModal = !1, this.logout()
                    }, newPosterHandler: function () {
                        var t = this;
                        this.$Modal.confirm({
                            title: "温馨提示",
                            content: "<p>请在新建海报前，保存当前修改。</p>",
                            onOk: function () {
                                t.newPoster()
                            }
                        })
                    }, feedback: function () {
                        this.m.showFeedbackModal = !0
                    }
                })
            },
            gn = yn,
            wn = (n("327d"), Object(P["a"])(gn, fn, mn, !1, null, "1ec8b44c", null)),
            On = wn.exports,
            jn = {
                name: "PosterLayout",
                components: {
                    TopBarLayout: On,
                    ContentWrapper: ct,
                    ToolLayout: Re,
                    SettingLayout: rn,
                    DebugLayout: dn
                },
                mounted: function () {
                    window.app = this
                }, methods: {}
            },
            Pn = jn,
            Cn = (n("607f"), Object(P["a"])(Pn, a, c, !1, null, null, null)),
            _n = Cn.exports,
            xn = {
                name: "home",
                components: {
                    PosterLayout: _n
                },
                mounted: function () {}, computed: {}, data: function () {
                    return {}
                }
            },
            In = xn,
            Sn = (n("5155"), Object(P["a"])(In, i, s, !1, null, "7b53bb80", null)),
            kn = Sn.exports,
            Dn = function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "container"
                }, [n("div", {
                    staticClass: "top"
                }, [t._v("\n        演示以Vue组件方式嵌入系统中\n    ")]), n("div", {
                    staticClass: "nav-bar"
                }, t._l(10, (function (e) {
                    return n("div", {
                        staticClass: "nav-item"
                    }, [t._v("\n            菜单： " + t._s(e) + "\n        ")])
                })), 0), n("div", {
                    staticClass: "content-container"
                }, [n("poster-layout")], 1)])
            },
            En = [],
            $n = {
                name: "B",
                components: {
                    PosterLayout: _n
                },
                mounted: function () {}, methods: {}
            },
            Rn = $n,
            Ln = (n("6a03"), Object(P["a"])(Rn, Dn, En, !1, null, null, null)),
            Tn = Ln.exports,
            Kn = function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "container"
                }, [n("div", {
                    staticClass: "top"
                }, [t._v("\n        演示以Iframe方式嵌入系统中(推荐使用)\n    ")]), n("div", {
                    staticClass: "nav-bar"
                }, t._l(10, (function (e) {
                    return n("div", {
                        staticClass: "nav-item"
                    }, [t._v("\n            菜单： " + t._s(e) + "\n        ")])
                })), 0), t._m(0)])
            },
            Mn = [

                function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "content-container"
                    }, [n("iframe", {
                        attrs: {
                            src: "/"
                        }
                    })])
                }
            ],
            Un = {
                name: "B2",
                components: {},
                mounted: function () {}, methods: {}
            },
            Bn = Un,
            Nn = (n("f2ee"), Object(P["a"])(Bn, Kn, Mn, !1, null, null, null)),
            Hn = Nn.exports;
        r["default"].use(o["a"]);
        var An = new o["a"]({
            routes: [{
                path: "/",
                name: "home",
                component: kn
            }, {
                path: "/login",
                name: "login",
                component: function () {
                    return n.e("about").then(n.bind(null, "1345"))
                }
            }, {
                path: "/b",
                name: "b",
                component: Tn
            }, {
                path: "/b2",
                name: "b2",
                component: Hn
            }, {
                path: "/about",
                name: "about",
                component: function () {
                    return n.e("about").then(n.bind(null, "8166"))
                }
            }]
        });
        An.beforeEach((function (t, e, n) {
            0 === t.matched.length ? e.name ? n({
                name: e.name
            }) : n("/") : n()
        }));
        e["a"] = An
    }, "42ca": function (t, e, n) {}, "49ac": function (t, e, n) {
        "use strict";
        n("37f3")
    }, "506b": function (t, e, n) {}, 5155: function (t, e, n) {
        "use strict";
        n("42ca")
    }, "558c": function (t, e, n) {
        "use strict";
        n("06a5")
    }, "56d7": function (t, e, n) {
        "use strict";
        n.r(e);
        n("cadf"), n("551c"), n("f751"), n("097d");
        var r = n("2b0e"),
            o = function () {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    attrs: {
                        id: "app"
                    }
                }, [n("router-view")], 1)
            },
            i = [],
            s = (n("7c55"), n("2877")),
            a = {},
            c = Object(s["a"])(a, o, i, !1, null, null, null),
            u = c.exports,
            l = n("41cb"),
            p = (n("8e6e"), n("ac6a"), n("456d"), n("bd86")),
            d = n("2f62");
        n("f559"), n("7f7f"), n("c5f6"), n("55dd"), n("3b2b"), n("28a5"), n("6b54"), n("a481");

        function f(t, e) {
            var n, r, o = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
                i = [];
            if (e = e || o.length, t)
                for (n = 0; n < t; n++) i[n] = o[0 | Math.random() * e];
            else
                for (i[8] = i[13] = i[18] = i[23] = "-", i[14] = "4", n = 0; n < 36; n++) i[n] || (r = 0 | 16 * Math.random(), i[n] = o[19 == n ? 3 & r | 8 : r]);
            return i.join("")
        }
        Date.prototype.format = function (t) {
            var e = {
                "M+": this.getMonth() + 1,
                "d+": this.getDate(),
                "h+": this.getHours(),
                "m+": this.getMinutes(),
                "s+": this.getSeconds(),
                "q+": Math.floor((this.getMonth() + 3) / 3),
                S: this.getMilliseconds()
            };
            for (var n in /(y+)/.test(t) && (t = t.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length))), e) new RegExp("(" + n + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[n] : ("00" + e[n]).substr(("" + e[n]).length)));
            return t
        };
        var m = function () {
                return f(8)
            },
            h = (n("4917"), n("bc3a")),
            b = n.n(h),
            v = n("4328"),
            y = n.n(v),
            g = n("60ed"),
            w = n.n(g);

        function O(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function j(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? O(Object(n), !0).forEach((function (e) {
                    Object(p["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : O(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }
        var P = b.a.create({
            baseURL: window.API_URL,
            timeout: 3e4,
            withCredentials: !0
        });

        function C(t) {
            var e = window.location.hash.split("?", 2)[1];
            if (e) {
                var n = new RegExp("(^|&)" + t + "=([^&]*)(&|$)"),
                    r = e.match(n);
                return null != r && decodeURIComponent(r[2])
            }
        }
        var _ = C("token");
        _ && localStorage.setItem("token", _), P.interceptors.request.use((function (t) {
            t.headers["token"] = localStorage.getItem("token");
            var e = {
                _t: (new Date).getTime()
            };
            return "get" === t.method ? w()(t.params) && (t.params = j(j({}, e), t.params)) : "post" === t.method && (w()(t.data) && (t.data = j(j({}, e), t.data)), /^application\/x-www-form-urlencoded/.test(t.headers["content-type"]) && (t.data = y.a.stringify(t.data))), t
        }), (function (t) {
            return Promise.reject(t)
        })), P.interceptors.response.use((function (t) {
            return 401 === t.status && console.info("没有登录"), t.data && 401 === t.data.code && (console.warn("没有登录"), l["a"].replace({
                name: "login"
            })), t
        }), (function (t) {
            return console.error(t), Promise.reject(t)
        }));
        var x = P;

        function I(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function S(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? I(Object(n), !0).forEach((function (e) {
                    Object(p["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : I(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }
        r["default"].use(d["a"]);
        var k = 1.2,
            D = .25,
            E = .5,
            $ = !1,
            R = 80,
            L = {
                state: {
                    p: {
                        name: "未命名",
                        id: 0,
                        w: 720,
                        h: 1280,
                        bgc: "#fff",
                        type: "jpeg",
                        quality: R,
                        bgUrl: "",
                        items: [],
                        editor: {
                            scale: E,
                            cp: "canvas",
                            ciuuid: "",
                            debug: $,
                            saveStatus: "draft",
                            sidebar: {
                                showExtendBar: !1
                            }
                        }
                    },
                    user: null,
                    copyItem: null,
                    posters: []
                },
                getters: {
                    debug: function (t) {
                        return t.p.editor.debug
                    }, W: function (t) {
                        return t.p.w * t.p.editor.scale
                    }, H: function (t) {
                        return t.p.h * t.p.editor.scale
                    }, w: function (t) {
                        return t.p.w
                    }, h: function (t) {
                        return t.p.h
                    }, BGC: function (t) {
                        return t.p.bgc
                    }, BGURL: function (t) {
                        return t.p.bgUrl
                    }, items: function (t) {
                        return t.p.items
                    }, scale: function (t) {
                        return t.p.editor.scale
                    }, currentPanel: function (t) {
                        return t.p.editor.cp
                    }, currentItem: function (t) {
                        return t.p.items.filter((function (e) {
                            return e.uuid === t.p.editor.ciuuid
                        }))[0]
                    }, ciuuid: function (t) {
                        return t.p.editor.ciuuid
                    }, json: function (t) {
                        var e = JSON.parse(JSON.stringify(t.p));
                        e.items.sort((function (t, e) {
                            return t.z - e.z
                        }));
                        for (var n = 0; n < e.items.length; n++) e.items[n].z = n + 1;
                        return JSON.stringify(e, "\r", " ")
                    }, currentUser: function (t) {
                        return t.user
                    }, accessKey: function (t) {
                        return t.user ? t.user.accessKey : ""
                    }, secretKey: function (t) {
                        return t.user ? t.user.secretKey : ""
                    }, posterId: function (t) {
                        return t.p.id
                    }, sidebar: function (t) {
                        return t.p.editor.sidebar
                    }, editor: function (t) {
                        return t.p.editor
                    }, posters: function (t) {
                        return t.posters
                    }
                },
                mutations: {
                    addItem: function (t, e) {
                        if (t.p.items.length >= 10) console.error("对不起, 暂时只支持添加10个元素。请联系客服开通权限。");
                        else {
                            var n = {
                                uuid: m(),
                                x: 400,
                                y: 200,
                                w: 150,
                                h: 150,
                                z: 1,
                                s: 15,
                                c: "#000000",
                                bgc: "",
                                v: "https://poster.prodapi.cn/static/images/xiaoniu.png",
                                vd: "",
                                fn: "",
                                st: 0,
                                active: !1
                            };
                            n = S(S({}, e), n), n.x = ~~ (t.p.w / 2 - n.w / 2), n.y = ~~ (t.p.h / 2 - n.h / 2), "text" === n.t && (n.w = 324, n.h = 58, n.s = 24, n.x = 120, n.y = 200, n.v = "多行文本测试1多行文本测试2多行文本测试3多行文本测试4"), "image" === n.t && (n.w = 200, n.h = 200), "qrcode" === n.t && (n.p = 0, n.c = "#000000", n.bgc = "#ffffff", n.v = "https://poster.prodapi.cn/#from=qrcode"), "avatar" === n.t && (n.w = 80, n.h = 80, n.c = "#888888");
                            var r = Math.max.apply(Math, t.p.items.map((function (t) {
                                return t.z
                            })));
                            r >= 1 && (n.z = r + 1), t.p.items.push(n), H.commit("activeItemAndShowProperty", n.uuid)
                        }
                    }, copyItem: function (t, e) {
                        var n = t.p.items.filter((function (t) {
                            return t.uuid === e
                        }))[0];
                        t.copyItem = S({}, n)
                    }, pasteItem: function (t, e) {
                        if (t.copyItem) {
                            t.copyItem.uuid = m();
                            var n = t.copyItem;
                            n.x = n.x + 24, n.y = n.y + 24;
                            var r = Math.max.apply(Math, t.p.items.map((function (t) {
                                return t.z
                            })));
                            r >= 1 && (n.z = r + 1), t.p.items.push(n), H.commit("activeItemAndShowProperty", n.uuid)
                        }
                    }, deactiveAllItem: function (t, e) {
                        t.p.items.forEach((function (t) {
                            return t.active = !1
                        }))
                    }, activeItemDontShow: function (t, e) {
                        H.commit("activeItem", e), t.p.editor.cp = "item"
                    }, activeItemAndShowProperty: function (t, e) {
                        H.commit("activeItem", e), t.p.editor.cp = "item"
                    }, activeItem: function (t, e) {
                        t.p.editor.ciuuid !== e && (t.p.items.forEach((function (t) {
                            t.active = t.uuid === e
                        })), t.p.editor.ciuuid = e)
                    }, removeItem: function (t, e) {
                        var n = [];
                        t.p.items.forEach((function (t) {
                            t.uuid !== e && n.push(t)
                        })), n.length >= 1 && (n[0].active = !0, t.p.editor.ciuuid = n[0].uuid), t.p.items = n
                    }, switchPanel: function (t, e) {
                        t.p.editor.cp = e
                    }, adjustScale: function (t, e) {
                        var n = t.p.editor.scale;
                        n += e, n = Number(n.toFixed(2)), n < D || n > k ? console.warn("缩放比达到极限") : (t.p.editor.scale = n, console.info("调整缩放比例: scale=" + n))
                    }, autoScale: function (t, e) {
                        t.p.scale = .6
                    }, itemUp: function (t, e) {
                        var n = t.p.items.filter((function (t) {
                                return t.uuid === e
                            }))[0],
                            r = n.z,
                            o = Math.max.apply(Math, t.p.items.map((function (t) {
                                return t.z
                            })));
                        if (o !== r) {
                            var i = r + 1,
                                s = t.p.items.filter((function (t) {
                                    return t.z === i && t.uuid !== e
                                }));
                            if (s && 0 !== s.length) {
                                var a = s[0];
                                n.z = i, a.z = r
                            } else console.warn("元素上移(没有匹配的元素): z=" + r + ", uuid=" + e)
                        } else console.warn("元素上移(元素已经到了最上面): z=" + r + ", uuid=" + e)
                    }, itemDown: function (t, e) {
                        var n = t.p.items.filter((function (t) {
                                return t.uuid === e
                            }))[0],
                            r = n.z;
                        if (!(r <= 1)) {
                            var o = r - 1,
                                i = t.p.items.filter((function (t) {
                                    return t.z === o && t.uuid !== e
                                }));
                            if (i && 0 !== i.length) {
                                var s = i[0];
                                n.z = o, s.z = r
                            }
                        }
                    }, changeWH: function (t, e) {
                        t.p.w = e.w, t.p.h = e.h
                    }, changeBgImage: function (t, e) {
                        t.p.bgUrl = e
                    }, login: function (t, e) {
                        localStorage.setItem("token", e.token), localStorage.setItem("user", JSON.stringify(e.user, "", " ")), t.user = e.user
                    }, logout: function (t, e) {
                        t.user = null, localStorage.removeItem("token"), localStorage.removeItem("user")
                    }, changePoster: function (t, e) {
                        var n = e.id,
                            r = e.name;
                        e = JSON.parse(e.json), e.items.forEach((function (t) {
                            t.uuid = t.uuid ? t.uuid : m()
                        })), e.editor = e.editor ? e.editor : t.p.editor, e.editor.scaleNew = E, e.editor.sidebar = e.editor.sidebar ? e.editor.sidebar : t.p.editor.sidebar, e.editor.saveStatus = e.editor.saveStatus ? e.editor.saveStatus : "draft", e.id = n, e.name = r, t.p = e, window.setTimeout((function () {
                            H.commit("adjustScale", .01)
                        }), 100), window.setTimeout((function () {
                            H.commit("adjustScale", -.01)
                        }), 200)
                    }, newPoster: function (t, e) {
                        var n = {
                            name: "未命名",
                            id: 0,
                            w: 720,
                            h: 1280,
                            bgc: "#ffffff",
                            type: "jpeg",
                            quality: R,
                            bgUrl: "",
                            items: [],
                            editor: {
                                scaleNew: E,
                                scale: E,
                                cp: "canvas",
                                ciuuid: "",
                                debug: $,
                                saveStatus: "draft",
                                sidebar: {
                                    showExtendBar: t.p.editor.sidebar.showExtendBar
                                }
                            }
                        };
                        t.p = n
                    }, reloadMyPoster: function (t, e) {
                        x.get("index.php?m=wjyk_nhyk&c=site&a=entry&do=admin&tp_c=poster&tp_a=getPoster", {}, {
                            headers: {
                                "content-type": "application/x-www-form-urlencoded"
                            }
                        }).then((function (e) {
                            var n = e.data;
                            n.posters.forEach((function (t) {
                                return t.preview = (t.preview.startsWith("http") ? t.preview : window.API_URL + t.preview) + "?t=" + (new Date).getTime()
                            })), t.posters = n.posters
                        }))
                    }, savePoster: function (t, e) {
                        var n = {};
                        
                        n.id = t.p.id, n.json = H.getters.json, n.name = t.p.name, n.quality = t.p.quality, t.p.editor.saveStatus = "saving",
                          x.post("index.php?m=wjyk_nhyk&c=site&a=entry&do=admin&tp_c=poster&tp_a=savePoster", n).then((function (n) {
                            var r = n.data;
                            0 !== r.code && alert(r.msg), r.id && (t.p.id = r.id), t.p.editor.saveStatus = "saved", H.commit("reloadMyPoster", t, e)
                        }))
                    }
                },
                actions: {}
            },
            T = localStorage.getItem("user");
        T && (T = JSON.parse(T), L.state.user = T);
        var K = L,
            M = {
                state: {
                    menuTop: 0,
                    menuLeft: 0,
                    menuShow: !1
                },
                mutations: {
                    showContextMenu: function (t, e) {
                        var n = e.top,
                            r = e.left;
                        t.menuShow = !0, t.menuTop = n, t.menuLeft = r
                    }, hideContextMenu: function (t) {
                        t.menuShow = !1
                    }
                }
            };

        function U(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function B(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? U(Object(n), !0).forEach((function (e) {
                    Object(p["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : U(Object(n)).forEach((function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }
        r["default"].use(d["a"]);
        var N = {
                state: B(B({}, K.state), M.state),
                mutations: B(B({}, K.mutations), M.mutations),
                getters: B(B({}, K.getters), M.getters)
            },
            H = new d["a"].Store(N),
            A = n("3b58"),
            q = n.n(A),
            z = n("e069"),
            F = n.n(z),
            J = (n("dcad"), n("0808"), n("6944")),
            W = n.n(J);
        r["default"].prototype.$http = x, r["default"].component("vue-drag-resize", q.a), r["default"].use(W.a), r["default"].use(F.a), r["default"].config.productionTip = !1, new r["default"]({
            router: l["a"],
            store: H,
            render: function (t) {
                return t(u)
            }
        }).$mount("#app")
    }, "5c48": function (t, e, n) {}, "607f": function (t, e, n) {
        "use strict";
        n("c725")
    }, "69df": function (t, e, n) {
        "use strict";
        n("d4e2")
    }, "6a03": function (t, e, n) {
        "use strict";
        n("ad3f")
    }, 7332: function (t, e, n) {
        "use strict";
        n("cf64")
    }, "7c55": function (t, e, n) {
        "use strict";
        n("5c48")
    }, "7eee": function (t, e, n) {
        "use strict";
        n("32bd")
    }, "85ed": function (t, e, n) {
        "use strict";
        n("9f87")
    }, "8b19": function (t, e, n) {}, "8cd3": function (t, e, n) {
        "use strict";
        n("cc61")
    }, "8f93": function (t, e, n) {
        "use strict";
        n("f7d2")
    }, 9405: function (t, e, n) {}, "96a9": function (t, e, n) {}, "9a24": function (t, e, n) {
        "use strict";
        n("96a9")
    }, "9d03": function (t, e, n) {}, "9f87": function (t, e, n) {}, ad3f: function (t, e, n) {}, b790: function (t, e, n) {}, ba68: function (t, e, n) {
        t.exports = n.p + "img/no-img.3679ff87.svg"
    }, c119: function (t, e, n) {}, c725: function (t, e, n) {}, cc61: function (t, e, n) {}, cf64: function (t, e, n) {}, d4e2: function (t, e, n) {}, d501: function (t, e, n) {
        "use strict";
        n("14b8")
    }, d771: function (t, e, n) {}, d99e: function (t, e, n) {}, db58: function (t, e, n) {
        "use strict";
        n("9405")
    }, e0a2: function (t, e, n) {}, ed79: function (t, e, n) {}, f28d: function (t, e, n) {
        "use strict";
        n("10e5")
    }, f2ee: function (t, e, n) {
        "use strict";
        n("ed79")
    }, f59e: function (t, e, n) {
        "use strict";
        n("c119")
    }, f7d2: function (t, e, n) {}, f7fe: function (t, e, n) {
        "use strict";
        n("506b")
    }, ffea: function (t, e, n) {
        "use strict";
        n("e0a2")
    }
});