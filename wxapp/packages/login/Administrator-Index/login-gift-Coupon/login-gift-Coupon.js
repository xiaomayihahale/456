(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/login/Administrator-Index/login-gift-Coupon/login-gift-Coupon" ], {
    "0543": function(n, t, o) {
        "use strict";
        (function(n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var u = e(o("a34a"));
            function e(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            function i(n, t, o, u, e, i, r) {
                try {
                    var a = n[i](r), c = a.value;
                } catch (f) {
                    return void o(f);
                }
                a.done ? t(c) : Promise.resolve(c).then(u, e);
            }
            function r(n) {
                return function() {
                    var t = this, o = arguments;
                    return new Promise(function(u, e) {
                        var r = n.apply(t, o);
                        function a(n) {
                            i(r, u, e, a, c, "next", n);
                        }
                        function c(n) {
                            i(r, u, e, a, c, "throw", n);
                        }
                        a(void 0);
                    });
                };
            }
            var a = {
                data: function() {
                    return {
                        couponsss: this.$img.coupon,
                        youhui1: this.$img.youhui1,
                        youhui2: this.$img.youhui2,
                        youhui11: this.$img.youhui11,
                        youhui22: this.$img.youhui22,
                        arrow: this.$img.arrow,
                        getCouponInfo: []
                    };
                },
                onShow: function() {
                    this.getAllCoupon();
                },
                methods: {
                    getAllCoupon: function() {
                        var n = this;
                        return r(u.default.mark(function t() {
                            var o;
                            return u.default.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                  case 0:
                                    return console.log("-店员赠送券给用户---------"), t.next = 3, n.$http({
                                        url: n.$api.get_all_coupon
                                    });

                                  case 3:
                                    o = t.sent, 0 == o.errno && (n.getCouponInfo = o.data);

                                  case 5:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    handleReceiptCoupon: function(t) {
                        n.navigateTo({
                            url: "/packages/login/Administrator-Index/gift-Coupon-Index/gift-Coupon-Index?id=" + t
                        });
                    }
                }
            };
            t.default = a;
        }).call(this, o("543d")["default"]);
    },
    "0b98": function(n, t, o) {
        "use strict";
        (function(n) {
            o("cee1");
            u(o("66fd"));
            var t = u(o("81c7"));
            function u(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            n(t.default);
        }).call(this, o("543d")["createPage"]);
    },
    "55f2": function(n, t, o) {
        "use strict";
        var u;
        o.d(t, "b", function() {
            return e;
        }), o.d(t, "c", function() {
            return i;
        }), o.d(t, "a", function() {
            return u;
        });
        var e = function() {
            var n = this, t = n.$createElement, o = (n._self._c, 0 != n.getCouponInfo ? n.__map(n.getCouponInfo, function(t, o) {
                var u = n.__get_orig(t), e = Number(t.less).toFixed(0);
                return {
                    $orig: u,
                    g0: e
                };
            }) : null);
            n.$mp.data = Object.assign({}, {
                $root: {
                    l0: o
                }
            });
        }, i = [];
    },
    "81c7": function(n, t, o) {
        "use strict";
        o.r(t);
        var u = o("55f2"), e = o("d5d5");
        for (var i in e) "default" !== i && function(n) {
            o.d(t, n, function() {
                return e[n];
            });
        }(i);
        o("e665");
        var r, a = o("f0c5"), c = Object(a["a"])(e["default"], u["b"], u["c"], !1, null, null, null, !1, u["a"], r);
        t["default"] = c.exports;
    },
    d5d5: function(n, t, o) {
        "use strict";
        o.r(t);
        var u = o("0543"), e = o.n(u);
        for (var i in u) "default" !== i && function(n) {
            o.d(t, n, function() {
                return u[n];
            });
        }(i);
        t["default"] = e.a;
    },
    e665: function(n, t, o) {
        "use strict";
        var u = o("f463"), e = o.n(u);
        e.a;
    },
    f463: function(n, t, o) {}
}, [ [ "0b98", "common/runtime", "common/vendor" ] ] ]);