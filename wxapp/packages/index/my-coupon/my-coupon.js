(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/index/my-coupon/my-coupon" ], {
    "0d6c": function(t, e, n) {
        "use strict";
        var u = n("f59c"), r = n.n(u);
        r.a;
    },
    8130: function(t, e, n) {
        "use strict";
        n.r(e);
        var u = n("d699"), r = n.n(u);
        for (var o in u) "default" !== o && function(t) {
            n.d(e, t, function() {
                return u[t];
            });
        }(o);
        e["default"] = r.a;
    },
    "8cc2": function(t, e, n) {
        "use strict";
        (function(t) {
            n("cee1");
            u(n("66fd"));
            var e = u(n("c6bc"));
            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(e.default);
        }).call(this, n("543d")["createPage"]);
    },
    c6bc: function(t, e, n) {
        "use strict";
        n.r(e);
        var u = n("fa1a"), r = n("8130");
        for (var o in r) "default" !== o && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(o);
        n("0d6c");
        var a, i = n("f0c5"), s = Object(i["a"])(r["default"], u["b"], u["c"], !1, null, null, null, !1, u["a"], a);
        e["default"] = s.exports;
    },
    d699: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var u = r(n("a34a"));
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function o(t, e, n, u, r, o, a) {
                try {
                    var i = t[o](a), s = i.value;
                } catch (c) {
                    return void n(c);
                }
                i.done ? e(s) : Promise.resolve(s).then(u, r);
            }
            function a(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(u, r) {
                        var a = t.apply(e, n);
                        function i(t) {
                            o(a, u, r, i, s, "next", t);
                        }
                        function s(t) {
                            o(a, u, r, i, s, "throw", t);
                        }
                        i(void 0);
                    });
                };
            }
            var i = {
                data: function() {
                    return {
                        couponsss: this.$img.coupon,
                        system: {},
                        invalidColor: "#C9C9C9",
                        themeColor: "#FF5E44",
                        couponList: [],
                        youhui1: this.$img.youhui1,
                        youhui2: this.$img.youhui2,
                        youhui11: this.$img.youhui11,
                        youhui22: this.$img.youhui22,
                        arrow: this.$img.arrow,
                        MyMealList: [],
                        indexarr3: [ {
                            title: "优惠券",
                            type: 1
                        }, {
                            title: "领券大厅",
                            type: 2
                        } ],
                        currentIndex: 0,
                        indexarr2: [ {
                            title: "未使用",
                            status: 1
                        }, {
                            title: "已使用",
                            status: 2
                        }, {
                            title: "已过期",
                            status: 3
                        } ],
                        currentIndex2: 0,
                        couponLists: [],
                        coupon: {},
                        usecouponList: []
                    };
                },
                onShow: function() {
                    this.getCoupon();
                },
                onLoad: function(t) {
                    this.getSystem(), this.options = t, this.navbarTapHandler(Number(this.options.currentIndex)), 
                    this.currentIndex = t.currentIndex, this.couponNames = t.couponNames, this.applyPrice = t.applyPrice, 
                    this.top = t.subScript;
                },
                methods: {
                    getSystem: function() {
                        var t = this;
                        return a(u.default.mark(function e() {
                            var n;
                            return u.default.wrap(function(e) {
                                while (1) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, t.$http({
                                        url: t.$api.system
                                    });

                                  case 2:
                                    n = e.sent, 0 == n.errno && (t.system = n.data);

                                  case 4:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    useHotel: function() {
                        t.reLaunch({
                            url: "/packages/hotel/index/index"
                        });
                    },
                    use: function() {
                        t.switchTab({
                            url: "/wjyk_nhyk/pages/Mall/Mall"
                        });
                    },
                    handleUseCoupon: function(e) {
                        if (1 == e.type) {
                            var n = "满" + e.full + "减" + e.less;
                            getApp().globalData.coupon = e, getApp().globalData.coupons = n, 1 == this.options.indexs && t.navigateBack();
                        } else if (2 == e.type) {
                            var u = "满减" + e.less;
                            getApp().globalData.coupon = e, getApp().globalData.coupons = u, 1 == this.options.indexs && t.navigateBack();
                        } else {
                            var r = "生日满减" + e.less;
                            getApp().globalData.coupon = e, getApp().globalData.coupons = r, 1 == this.options.indexs && t.navigateBack();
                        }
                        console.log("1111111111111coupon传值", e, getApp());
                    },
                    handleReceiptCoupon: function(e) {
                        var n = this;
                        return a(u.default.mark(function r() {
                            var o;
                            return u.default.wrap(function(u) {
                                while (1) switch (u.prev = u.next) {
                                  case 0:
                                    return u.next = 2, n.$http({
                                        url: n.$api.receive_coupon,
                                        data: {
                                            id: e,
                                            uid: t.getStorageSync("uid").id
                                        }
                                    });

                                  case 2:
                                    o = u.sent, n.$sun.toast(o.message), 0 == o.errno && n.getCoupon();

                                  case 5:
                                  case "end":
                                    return u.stop();
                                }
                            }, r);
                        }))();
                    },
                    useCoupons: function() {
                        var e = this;
                        return a(u.default.mark(function n() {
                            var r;
                            return u.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, e.$http({
                                        url: e.$api.use_coupon,
                                        data: {
                                            uid: t.getStorageSync("uid").id,
                                            price: e.applyPrice
                                        }
                                    });

                                  case 2:
                                    r = n.sent, 0 == r.errno && (e.couponList = r.data);

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    couponNext: function(e) {
                        t.navigateTo({
                            url: "/packages/index/erwmIndex/erwmCoupon/erwmCoupon?id=" + e
                        });
                    },
                    getCoupon: function() {
                        var e = this;
                        return a(u.default.mark(function n() {
                            var r, o, a;
                            return u.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    r = e.options.type, e.options.price, console.log("switch=============this.currentIndex", e.currentIndex), 
                                    n.t0 = Number(e.currentIndex), n.next = 0 === n.t0 ? 6 : 1 === n.t0 ? 20 : 25;
                                    break;

                                  case 6:
                                    if (console.log("type", r), 1 != r) {
                                        n.next = 18;
                                        break;
                                    }
                                    if (1 != e.couponNames) {
                                        n.next = 12;
                                        break;
                                    }
                                    e.useCoupons(), n.next = 16;
                                    break;

                                  case 12:
                                    return n.next = 14, e.$http({
                                        url: e.$api.my_coupon,
                                        data: {
                                            uid: t.getStorageSync("uid").id,
                                            status: e.indexarr2[e.currentIndex2].status
                                        }
                                    });

                                  case 14:
                                    o = n.sent, 0 == o.errno && (e.couponList = o.data);

                                  case 16:
                                    n.next = 19;
                                    break;

                                  case 18:
                                  case 19:
                                    return n.abrupt("break", 25);

                                  case 20:
                                    return n.next = 22, e.$http({
                                        url: e.$api.display,
                                        data: {
                                            uid: t.getStorageSync("uid").id
                                        }
                                    });

                                  case 22:
                                    return a = n.sent, 0 == a.errno && (e.couponList = a.data), n.abrupt("break", 25);

                                  case 25:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    navbarTapHandler: function(e) {
                        this.currentIndex = e, t.setNavigationBarTitle({
                            title: this.indexarr3[this.currentIndex].title
                        }), this.getCoupon();
                    },
                    getChange: function(t) {
                        this.currentIndex2 = t, this.getCoupon();
                    }
                }
            };
            e.default = i;
        }).call(this, n("543d")["default"]);
    },
    f59c: function(t, e, n) {},
    fa1a: function(t, e, n) {
        "use strict";
        n.d(e, "b", function() {
            return r;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {
            return u;
        });
        var u = {
            sunuiNavbar: function() {
                return n.e("components/sunui-navbar/sunui-navbar").then(n.bind(null, "6b73"));
            }
        }, r = function() {
            var t = this, e = t.$createElement, n = (t._self._c, 0 == t.currentIndex && 0 == t.currentIndex2 && 0 != t.couponList.length ? t.__map(t.couponList, function(e, n) {
                var u = t.__get_orig(e), r = 2 == e.sub_c_type ? Number(e.less).toFixed(0) : null, o = 2 != e.sub_c_type ? Number(e.less).toFixed(0) : null;
                return {
                    $orig: u,
                    g0: r,
                    g1: o
                };
            }) : null), u = 0 == t.currentIndex && 1 == t.currentIndex2 && 0 != t.couponList.length ? t.__map(t.couponList, function(e, n) {
                var u = t.__get_orig(e), r = 2 == e.sub_c_type ? Number(e.less).toFixed(0) : null, o = 2 != e.sub_c_type ? Number(e.less).toFixed(0) : null;
                return {
                    $orig: u,
                    g2: r,
                    g3: o
                };
            }) : null, r = 0 == t.currentIndex && 2 == t.currentIndex2 && 0 != t.couponList.length ? t.__map(t.couponList, function(e, n) {
                var u = t.__get_orig(e), r = 2 == e.sub_c_type ? Number(e.less).toFixed(0) : null, o = 2 != e.sub_c_type ? Number(e.less).toFixed(0) : null;
                return {
                    $orig: u,
                    g4: r,
                    g5: o
                };
            }) : null, o = 1 == t.currentIndex && 0 != t.couponList ? t.__map(t.couponList, function(e, n) {
                var u = t.__get_orig(e), r = Number(e.less).toFixed(0);
                return {
                    $orig: u,
                    g6: r
                };
            }) : null;
            t.$mp.data = Object.assign({}, {
                $root: {
                    l0: n,
                    l1: u,
                    l2: r,
                    l3: o
                }
            });
        }, o = [];
    }
}, [ [ "8cc2", "common/runtime", "common/vendor" ] ] ]);