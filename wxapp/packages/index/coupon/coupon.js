(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/index/coupon/coupon" ], {
    "09cf": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("3fdf"), u = n.n(r);
        for (var a in r) "default" !== a && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(a);
        e["default"] = u.a;
    },
    "3fdf": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = a(n("a34a")), u = n("2f62");
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function o(t, e, n, r, u, a, o) {
                try {
                    var i = t[a](o), c = i.value;
                } catch (s) {
                    return void n(s);
                }
                i.done ? e(c) : Promise.resolve(c).then(r, u);
            }
            function i(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(r, u) {
                        var a = t.apply(e, n);
                        function i(t) {
                            o(a, r, u, i, c, "next", t);
                        }
                        function c(t) {
                            o(a, r, u, i, c, "throw", t);
                        }
                        i(void 0);
                    });
                };
            }
            function c(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            function s(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? c(Object(n), !0).forEach(function(e) {
                        f(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
                }
                return t;
            }
            function f(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            var l = {
                data: function() {
                    return {
                        invalidColor: "#C9C9C9",
                        themeColor: "#FF5E44",
                        navIndex3: 0,
                        navIndex2: 0,
                        navItem2: [ {
                            title: "未使用",
                            status: 1
                        }, {
                            title: "已使用",
                            status: 2
                        }, {
                            title: "已过期",
                            status: 3
                        } ],
                        navItem3: [ {
                            title: "我的优惠券"
                        }, {
                            title: "领券大厅"
                        } ],
                        couponList: [],
                        optEmpty: {
                            tip: "暂无优惠券 ~"
                        }
                    };
                },
                onShow: function() {
                    this.getCoupon();
                },
                methods: s(s({}, (0, u.mapMutations)([ "setCoupon" ])), {}, {
                    handleUseCoupon: function(t) {
                        this.setCoupon({
                            id: t.id,
                            money: t.less,
                            full: t.full
                        }), this.$sun.navBack();
                    },
                    handleReceiptCoupon: function(e) {
                        var n = this;
                        return i(r.default.mark(function u() {
                            var a;
                            return r.default.wrap(function(r) {
                                while (1) switch (r.prev = r.next) {
                                  case 0:
                                    return r.next = 2, n.$http({
                                        url: n.$api.receive_coupon,
                                        data: {
                                            id: e,
                                            uid: t.getStorageSync("uid")
                                        }
                                    });

                                  case 2:
                                    a = r.sent, n.$sun.toast(a.message), 0 == a.errno && n.getCoupon();

                                  case 5:
                                  case "end":
                                    return r.stop();
                                }
                            }, u);
                        }))();
                    },
                    getCoupon: function() {
                        var e = this;
                        return i(r.default.mark(function n() {
                            var u, a, o, i, c;
                            return r.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    u = e.options.type, a = e.options.price, n.t0 = Number(e.navIndex3), n.next = 0 === n.t0 ? 5 : 1 === n.t0 ? 18 : 23;
                                    break;

                                  case 5:
                                    if (1 != u) {
                                        n.next = 12;
                                        break;
                                    }
                                    return n.next = 8, e.$http({
                                        url: e.$api.my_coupon,
                                        data: {
                                            uid: t.getStorageSync("uid"),
                                            status: e.navItem2[e.navIndex2].status
                                        }
                                    });

                                  case 8:
                                    o = n.sent, 0 == o.errno && (e.couponList = o.data), n.next = 17;
                                    break;

                                  case 12:
                                    if (2 != u) {
                                        n.next = 17;
                                        break;
                                    }
                                    return n.next = 15, e.$http({
                                        url: e.$api.use_coupon,
                                        data: {
                                            uid: t.getStorageSync("uid"),
                                            price: a
                                        }
                                    });

                                  case 15:
                                    i = n.sent, 0 == i.errno && (e.couponList = i.data);

                                  case 17:
                                    return n.abrupt("break", 23);

                                  case 18:
                                    return n.next = 20, e.$http({
                                        url: e.$api.display,
                                        data: {
                                            uid: t.getStorageSync("uid")
                                        }
                                    });

                                  case 20:
                                    return c = n.sent, 0 == c.errno && (e.couponList = c.data), n.abrupt("break", 23);

                                  case 23:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    navChange2: function(t) {
                        this.navIndex2 = t, this.getCoupon();
                    },
                    navChange3: function(t) {
                        this.navIndex3 = t, this.getCoupon();
                    }
                })
            };
            e.default = l;
        }).call(this, n("543d")["default"]);
    },
    "62a2": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("f07f"), u = n("09cf");
        for (var a in u) "default" !== a && function(t) {
            n.d(e, t, function() {
                return u[t];
            });
        }(a);
        n("79d14");
        var o, i = n("f0c5"), c = Object(i["a"])(u["default"], r["b"], r["c"], !1, null, null, null, !1, r["a"], o);
        e["default"] = c.exports;
    },
    "79d14": function(t, e, n) {
        "use strict";
        var r = n("a220"), u = n.n(r);
        u.a;
    },
    a220: function(t, e, n) {},
    bb44b: function(t, e, n) {
        "use strict";
        (function(t) {
            n("cee1");
            r(n("66fd"));
            var e = r(n("62a2"));
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(e.default);
        }).call(this, n("543d")["createPage"]);
    },
    f07f: function(t, e, n) {
        "use strict";
        n.d(e, "b", function() {
            return u;
        }), n.d(e, "c", function() {
            return a;
        }), n.d(e, "a", function() {
            return r;
        });
        var r = {
            sunuiNavbar: function() {
                return n.e("components/sunui-navbar/sunui-navbar").then(n.bind(null, "6b73"));
            }
        }, u = function() {
            var t = this, e = t.$createElement;
            t._self._c;
        }, a = [];
    }
}, [ [ "bb44b", "common/runtime", "common/vendor" ] ] ]);