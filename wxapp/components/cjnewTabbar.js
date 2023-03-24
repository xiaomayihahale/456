(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "components/cjnewTabbar" ], {
    "207e": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            c(n("0747"));
            var a = n("252f");
            function c(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            var i = {
                props: [ "current", "type", "ids", "tabbarHeight" ],
                data: function() {
                    return {
                        list: [ {
                            icon_select: "/static/cj/cj11.png",
                            icon: "/static/cj/cj1.png",
                            meau_name: "首页",
                            path: "/packages/takeawayOrder/index/index",
                            id: 1
                        }, {
                            icon_select: "/static/cj/cj22.png",
                            icon: "/static/cj/cj2.png",
                            meau_name: "订餐",
                            path: "/packages/takeawayOrder/classification/classification",
                            id: 2
                        }, {
                            icon_select: "/static/cj/cj33.png",
                            icon: "/static/cj/cj3.png",
                            meau_name: "我的",
                            path: "/packages/takeawayOrder/my/my",
                            id: 3
                        } ],
                        listss: [ {
                            icon_select: "/static/cj/cj11.png",
                            icon: "/static/cj/cj1.png",
                            meau_name: "首页",
                            path: "/packages/hotel/index/index",
                            id: 1
                        }, {
                            icon_select: "/static/cj/cj33.png",
                            icon: "/static/cj/cj3.png",
                            meau_name: "我的",
                            path: "/packages/hotel/my/my",
                            id: 2
                        } ],
                        ktvList: [ {
                            icon_select: "/static/ktv/index1.png",
                            icon: "/static/ktv/index11.png",
                            meau_name: "首页",
                            path: "/packages/ktv/index/index",
                            id: 1
                        }, {
                            icon_select: "/static/ktv/index2.png",
                            icon: "/static/ktv/index22.png",
                            meau_name: "超市",
                            path: "/packages/ktv/superMarket/superMarket",
                            id: 2
                        }, {
                            icon_select: "/static/ktv/index3.png",
                            icon: "/static/ktv/index33.png",
                            meau_name: "我的",
                            path: "/packages/ktv/my/my",
                            id: 3
                        } ],
                        paddingBottomHeight: 0
                    };
                },
                created: function() {
                    var e = this;
                    t.getSystemInfo({
                        success: function(t) {
                            var n = [ "X", "XR", "XS", "11", "12", "13", "14", "15" ];
                            n.forEach(function(n) {
                                -1 != t.model.indexOf(n) && -1 != t.model.indexOf("iPhone") && (e.paddingBottomHeight = 10);
                            });
                        }
                    });
                },
                watch: {},
                computed: {
                    safeAreaHeight: function() {
                        return this.isIphoneX && this.safeAreaInsetBottom ? SAFE_AREA_INSET_BOTTOM : 0;
                    },
                    tabbarHeights: function() {
                        var t = (0, a.getPx)(this.height), e = t + this.safeAreaHeight;
                        return e;
                    }
                },
                onLoad: function() {},
                onShow: function() {
                    console.log("调用解锁------------");
                },
                methods: {
                    getTabbarHeight: function() {
                        return console.log("tabbar的高度点击事件", this.tabbarHeights), this.tabbarHeights;
                    },
                    tabbarChange: function(e, n, a) {
                        this.ids != a ? t.reLaunch({
                            url: e + "?id=" + a
                        }) : console.log("是同一个页面 不进行跳转，解锁");
                    }
                }
            };
            e.default = i;
        }).call(this, n("543d")["default"]);
    },
    "4d6f": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("b31b"), c = n("76e4");
        for (var i in c) "default" !== i && function(t) {
            n.d(e, t, function() {
                return c[t];
            });
        }(i);
        n("ae45");
        var s, o = n("f0c5"), r = Object(o["a"])(c["default"], a["b"], a["c"], !1, null, "63da3352", null, !1, a["a"], s);
        e["default"] = r.exports;
    },
    "76e4": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("207e"), c = n.n(a);
        for (var i in a) "default" !== i && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(i);
        e["default"] = c.a;
    },
    ae45: function(t, e, n) {
        "use strict";
        var a = n("f2bb"), c = n.n(a);
        c.a;
    },
    b31b: function(t, e, n) {
        "use strict";
        var a;
        n.d(e, "b", function() {
            return c;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {
            return a;
        });
        var c = function() {
            var t = this, e = t.$createElement;
            t._self._c;
        }, i = [];
    },
    f2bb: function(t, e, n) {}
} ]);

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ "components/cjnewTabbar-create-component", {
    "components/cjnewTabbar-create-component": function(module, exports, __webpack_require__) {
        __webpack_require__("543d")["createComponent"](__webpack_require__("4d6f"));
    }
}, [ [ "components/cjnewTabbar-create-component" ] ] ]);