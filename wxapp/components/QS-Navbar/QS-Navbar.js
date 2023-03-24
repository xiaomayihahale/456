(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "components/QS-Navbar/QS-Navbar" ], {
    "075c": function(t, n, e) {
        "use strict";
        e.r(n);
        var a = e("a680"), r = e.n(a);
        for (var i in a) "default" !== i && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(i);
        n["default"] = r.a;
    },
    "318c": function(t, n, e) {
        "use strict";
        e.r(n);
        var a = e("db33"), r = e("075c");
        for (var i in r) "default" !== i && function(t) {
            e.d(n, t, function() {
                return r[t];
            });
        }(i);
        e("439c");
        var o, u = e("f0c5"), c = Object(u["a"])(r["default"], a["b"], a["c"], !1, null, "dfc727ee", null, !1, a["a"], o);
        n["default"] = c.exports;
    },
    "439c": function(t, n, e) {
        "use strict";
        var a = e("fe04"), r = e.n(a);
        r.a;
    },
    a680: function(t, n, e) {
        "use strict";
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var e = t.getSystemInfoSync().statusBarHeight;
            console.log("statusBarHeight========打印===", e);
            var a = {
                props: {
                    fixed: {
                        type: [ Boolean, String ],
                        default: !0
                    },
                    backgroundColor: {
                        type: String,
                        default: ""
                    },
                    statusBar: {
                        type: [ Boolean, String ],
                        default: !0
                    },
                    navbarItems: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    },
                    diffMenuButtonInfo: {
                        type: [ Boolean, String ],
                        default: !0
                    },
                    hasPlacherholder: {
                        type: [ Boolean, String ],
                        default: !0
                    },
                    zIndex: {
                        type: [ Number, String ],
                        default: 1e4
                    }
                },
                watch: {
                    backgroundColor: function(t) {
                        this.setBackgroundColor(t);
                    }
                },
                data: function() {
                    return {
                        statusBarHeight: e + "px",
                        menuButtonInfoLeft: 0,
                        iconSize: 26,
                        wW: 7.2,
                        navbarAnimation: {},
                        navbarAni: null
                    };
                },
                created: function() {
                    if (this.navbarAni = t.createAnimation({
                        duration: 0
                    }), "true" === String(this.diffMenuButtonInfo)) {
                        var n = t.getSystemInfoSync(), e = n.windowWidth, a = t.getMenuButtonBoundingClientRect().left - 10, r = e - a;
                        this.menuButtonInfoLeft = r, this.wW = a / e * 750 / 100;
                    }
                },
                mounted: function() {
                    this.setBackgroundColor();
                },
                methods: {
                    setBackgroundColor: function(t) {
                        var n = t || this.backgroundColor;
                        this.navbarAni.backgroundColor(n).step(), this.navbarAnimation = this.navbarAni.export();
                    },
                    _click: function(n) {
                        var e;
                        if (e = n.currentTarget.dataset.index, void 0 != e && null != e) {
                            var a = this.navbarItems[e];
                            if (a.doEvent) switch (a.doEvent) {
                              case "back":
                                t.navigateBack();
                                break;

                              case "navigateTo":
                                t.navigateTo({
                                    url: a.targetPath
                                });
                                break;

                              default:
                                this.$emit("click", a, e);
                                break;
                            } else this.$emit("click", a, e);
                        } else t.showToast({
                            icon: "none",
                            title: "找不到下标",
                            position: "center"
                        });
                    },
                    getQuery: function(n) {
                        var e;
                        e = t.createSelectorQuery().in(this), e.select(".QS-navbar").fields({
                            size: !0
                        }), e.exec(function(t) {
                            t[0] ? n && "function" === typeof n && n(t[0]) : n && "function" === typeof n && n({
                                height: 77
                            });
                        });
                    }
                }
            };
            n.default = a;
        }).call(this, e("543d")["default"]);
    },
    db33: function(t, n, e) {
        "use strict";
        var a;
        e.d(n, "b", function() {
            return r;
        }), e.d(n, "c", function() {
            return i;
        }), e.d(n, "a", function() {
            return a;
        });
        var r = function() {
            var t = this, n = t.$createElement, e = (t._self._c, String(t.fixed)), a = String(t.statusBar), r = t.__map(t.navbarItems || [], function(n, e) {
                var a = t.__get_orig(n), r = Number(n.width);
                return {
                    $orig: a,
                    m2: r
                };
            }), i = "true" === String(t.hasPlacherholder) && "true" === String(t.fixed), o = i ? "true" === String(t.statusBar) && "true" === String(t.fixed) : null, u = i ? String(t.fixed) : null;
            t.$mp.data = Object.assign({}, {
                $root: {
                    m0: e,
                    m1: a,
                    l0: r,
                    m3: i,
                    m4: o,
                    m5: u
                }
            });
        }, i = [];
    },
    fe04: function(t, n, e) {}
} ]);

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ "components/QS-Navbar/QS-Navbar-create-component", {
    "components/QS-Navbar/QS-Navbar-create-component": function(module, exports, __webpack_require__) {
        __webpack_require__("543d")["createComponent"](__webpack_require__("318c"));
    }
}, [ [ "components/QS-Navbar/QS-Navbar-create-component" ] ] ]);