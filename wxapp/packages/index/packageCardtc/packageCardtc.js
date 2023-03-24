(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/index/packageCardtc/packageCardtc" ], {
    6679: function(n, t, e) {
        "use strict";
        (function(n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = u(e("a34a"));
            function u(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            function r(n, t, e, a, u, r, o) {
                try {
                    var i = n[r](o), c = i.value;
                } catch (f) {
                    return void e(f);
                }
                i.done ? t(c) : Promise.resolve(c).then(a, u);
            }
            function o(n) {
                return function() {
                    var t = this, e = arguments;
                    return new Promise(function(a, u) {
                        var o = n.apply(t, e);
                        function i(n) {
                            r(o, a, u, i, c, "next", n);
                        }
                        function c(n) {
                            r(o, a, u, i, c, "throw", n);
                        }
                        i(void 0);
                    });
                };
            }
            var i = {
                data: function() {
                    return {
                        MyMealList: [],
                        couponsss: this.$img.coupon,
                        arrow: this.$img.arrow
                    };
                },
                onShow: function() {
                    this.getCoupon();
                },
                methods: {
                    couponNext: function(t) {
                        n.navigateTo({
                            url: "/packages/index/erwmIndex/erwmCoupon/erwmCoupon?id=" + t.id
                        }), this.$sun.title(t.meal_name);
                    },
                    getCoupon: function() {
                        var t = this;
                        return o(a.default.mark(function e() {
                            var u;
                            return a.default.wrap(function(e) {
                                while (1) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, t.$http({
                                        url: t.$api.MyMealCoupon,
                                        data: {
                                            uid: n.getStorageSync("uid").id
                                        }
                                    });

                                  case 2:
                                    u = e.sent, 0 == u.errno && (t.MyMealList = u.data, console.log("我的套餐卡", u));

                                  case 4:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    }
                }
            };
            t.default = i;
        }).call(this, e("543d")["default"]);
    },
    "676a": function(n, t, e) {
        "use strict";
        var a;
        e.d(t, "b", function() {
            return u;
        }), e.d(t, "c", function() {
            return r;
        }), e.d(t, "a", function() {
            return a;
        });
        var u = function() {
            var n = this, t = n.$createElement;
            n._self._c;
        }, r = [];
    },
    "6f83": function(n, t, e) {
        "use strict";
        var a = e("8061"), u = e.n(a);
        u.a;
    },
    8061: function(n, t, e) {},
    "85d4": function(n, t, e) {
        "use strict";
        (function(n) {
            e("cee1");
            a(e("66fd"));
            var t = a(e("f6a5"));
            function a(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            n(t.default);
        }).call(this, e("543d")["createPage"]);
    },
    bfaf: function(n, t, e) {
        "use strict";
        e.r(t);
        var a = e("6679"), u = e.n(a);
        for (var r in a) "default" !== r && function(n) {
            e.d(t, n, function() {
                return a[n];
            });
        }(r);
        t["default"] = u.a;
    },
    f6a5: function(n, t, e) {
        "use strict";
        e.r(t);
        var a = e("676a"), u = e("bfaf");
        for (var r in u) "default" !== r && function(n) {
            e.d(t, n, function() {
                return u[n];
            });
        }(r);
        e("6f83");
        var o, i = e("f0c5"), c = Object(i["a"])(u["default"], a["b"], a["c"], !1, null, null, null, !1, a["a"], o);
        t["default"] = c.exports;
    }
}, [ [ "85d4", "common/runtime", "common/vendor" ] ] ]);