(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/hotel/hotelCoupon/hotelCoupon" ], {
    "3aca": function(t, e, n) {
        "use strict";
        (function(t) {
            n("cee1");
            o(n("66fd"));
            var e = o(n("f33b"));
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(e.default);
        }).call(this, n("543d")["createPage"]);
    },
    "512e": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = r(n("a34a"));
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function u(t, e, n, o, r, u, a) {
                try {
                    var i = t[u](a), s = i.value;
                } catch (c) {
                    return void n(c);
                }
                i.done ? e(s) : Promise.resolve(s).then(o, r);
            }
            function a(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(o, r) {
                        var a = t.apply(e, n);
                        function i(t) {
                            u(a, o, r, i, s, "next", t);
                        }
                        function s(t) {
                            u(a, o, r, i, s, "throw", t);
                        }
                        i(void 0);
                    });
                };
            }
            var i = {
                data: function() {
                    return {
                        couponLengths: 0,
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
                            title: "代金券",
                            type: 1
                        }, {
                            title: "优惠券",
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
                        usecouponList: [],
                        shareItem: {},
                        nickname: "",
                        date: new Date().toISOString().slice(0, 10)
                    };
                },
                onShow: function() {
                    this.getCoupon();
                },
                onLoad: function(t) {
                    this.userInfoes(), this.getSystem(), this.currentIndex = t.currentIndex, this.couponNames = t.couponNames, 
                    this.applyPrice = t.applyPrice, this.options = t, this.top = t.subScript;
                },
                methods: {
                    userInfoes: function() {
                        var e = this;
                        return a(o.default.mark(function n() {
                            var r;
                            return o.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, e.$http({
                                        url: e.$api.userhy,
                                        data: {
                                            uid: t.getStorageSync("uid").id
                                        }
                                    });

                                  case 2:
                                    r = n.sent, 0 == r.errno && (e.nickname = r.data.nickname, console.log("用户中心this.nickname--------", e.nickname));

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    couponNext: function(t) {
                        this.shareItem = t, console.log("小程序分享点击 传值================", t, "this.shareItem****", this.shareItem);
                    },
                    onShareAppMessage: function(t) {
                        return console.log("小程序分享点击 传值1button------1111111111================", "this.shareItem****", this.shareItem), 
                        console.log("========代金券分享======="), "button" === t.from && (console.log("小程序分享点击 传值2222222222222222================", this.shareItem, this.shareItem.name, "img", this.shareItem.img, "this.shareItem.id", this.shareItem.id), 
                        console.log(t, "res------")), {
                            title: this.shareItem.name,
                            imageUrl: this.shareItem.img,
                            path: "/packages/takeawayOrder/getVoucher/getVoucher?id=" + this.shareItem.id + "&item=" + this.shareItem + "&nickname=" + this.nickname + "&date=" + this.date
                        };
                    },
                    getSystem: function() {
                        var t = this;
                        return a(o.default.mark(function e() {
                            var n;
                            return o.default.wrap(function(e) {
                                while (1) switch (e.prev = e.next) {
                                  case 0:
                                    return console.log("----------"), e.next = 3, t.$http({
                                        url: t.$api.system
                                    });

                                  case 3:
                                    n = e.sent, 0 == n.errno && (t.system = n.data);

                                  case 5:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    use: function() {
                        t.reLaunch({
                            url: "/packages/hotel/index/index"
                        });
                    },
                    handleUseCoupon: function(e) {
                        if (1 == e.type) {
                            var n = "满" + e.full + "减" + e.less;
                            getApp().globalData.coupon = e, getApp().globalData.coupons = n, 1 == this.options.indexs && t.navigateBack();
                        } else if (2 == e.type) {
                            var o = "满减" + e.less;
                            getApp().globalData.coupon = e, getApp().globalData.coupons = o, 1 == this.options.indexs && t.navigateBack();
                        } else {
                            var r = "生日满减" + e.less;
                            getApp().globalData.coupon = e, getApp().globalData.coupons = r, 1 == this.options.indexs && t.navigateBack();
                        }
                        console.log("1111111111111coupon传值", e, getApp());
                    },
                    handleReceiptCoupon: function(e) {
                        var n = this;
                        return a(o.default.mark(function r() {
                            var u;
                            return o.default.wrap(function(o) {
                                while (1) switch (o.prev = o.next) {
                                  case 0:
                                    return o.next = 2, n.$http({
                                        url: n.$api.receive_coupon,
                                        data: {
                                            id: e,
                                            uid: t.getStorageSync("uid").id
                                        }
                                    });

                                  case 2:
                                    u = o.sent, n.$sun.toast(u.message), 0 == u.errno && (n.getCoupon(), console.log("couponInfo", u));

                                  case 5:
                                  case "end":
                                    return o.stop();
                                }
                            }, r);
                        }))();
                    },
                    useCoupons: function() {
                        var e = this;
                        return a(o.default.mark(function n() {
                            var r;
                            return o.default.wrap(function(n) {
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
                                    r = n.sent, 0 == r.errno && (console.log("type2", e.couponList), e.couponList = r.data, 
                                    console.log("则下单时进入"));

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    getCoupon: function() {
                        var e = this;
                        return a(o.default.mark(function n() {
                            var r, u, a;
                            return o.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    e.options.type, e.options.price, n.t0 = Number(e.currentIndex), n.next = 0 === n.t0 ? 5 : 1 === n.t0 ? 10 : 2 === n.t0 ? 19 : 24;
                                    break;

                                  case 5:
                                    return n.next = 7, e.$http({
                                        url: e.$api.my_voucher,
                                        data: {
                                            uid: t.getStorageSync("uid").id
                                        }
                                    });

                                  case 7:
                                    return r = n.sent, 0 == r.errno && (e.MyMealList = r.data, console.log("我的套餐卡", r)), 
                                    n.abrupt("break", 24);

                                  case 10:
                                    if (1 != e.couponNames) {
                                        n.next = 14;
                                        break;
                                    }
                                    e.useCoupons(), n.next = 18;
                                    break;

                                  case 14:
                                    return n.next = 16, e.$http({
                                        url: e.$api.my_coupon,
                                        data: {
                                            uid: t.getStorageSync("uid").id,
                                            status: e.indexarr2[e.currentIndex2].status
                                        }
                                    });

                                  case 16:
                                    u = n.sent, 0 == u.errno && (e.couponList = u.data, e.couponList.filter(function(t, n) {
                                        1 == t.sub_c_type ? console.log(t, "i.sub_c_type==2555555555555", n, e.couponLengths) : (e.couponLengths = Number(Number(n) + 1), 
                                        console.log(t, "i.sub_c_type==4444444444", n, e.couponLengths));
                                    }));

                                  case 18:
                                    return n.abrupt("break", 24);

                                  case 19:
                                    return n.next = 21, e.$http({
                                        url: e.$api.display,
                                        data: {
                                            uid: t.getStorageSync("uid").id
                                        }
                                    });

                                  case 21:
                                    return a = n.sent, 0 == a.errno && (e.couponList = a.data), n.abrupt("break", 24);

                                  case 24:
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
    a8e6: function(t, e, n) {},
    c6d2: function(t, e, n) {
        "use strict";
        n.d(e, "b", function() {
            return r;
        }), n.d(e, "c", function() {
            return u;
        }), n.d(e, "a", function() {
            return o;
        });
        var o = {
            sunuiNavbar: function() {
                return n.e("components/sunui-navbar/sunui-navbar").then(n.bind(null, "6b73"));
            }
        }, r = function() {
            var t = this, e = t.$createElement, n = (t._self._c, 0 == t.currentIndex2 && 0 != t.couponLengths && 0 != t.couponList.length ? t.__map(t.couponList, function(e, n) {
                var o = t.__get_orig(e), r = 2 == e.sub_c_type ? Number(e.less).toFixed(0) : null;
                return {
                    $orig: o,
                    g0: r
                };
            }) : null), o = 1 == t.currentIndex2 && 0 != t.couponLengths && 0 != t.couponList.length ? t.__map(t.couponList, function(e, n) {
                var o = t.__get_orig(e), r = 2 == e.sub_c_type ? Number(e.less).toFixed(0) : null;
                return {
                    $orig: o,
                    g1: r
                };
            }) : null, r = 2 == t.currentIndex2 && 0 != t.couponLengths && 0 != t.couponList.length ? t.__map(t.couponList, function(e, n) {
                var o = t.__get_orig(e), r = 2 == e.sub_c_type ? Number(e.less).toFixed(0) : null;
                return {
                    $orig: o,
                    g2: r
                };
            }) : null;
            t.$mp.data = Object.assign({}, {
                $root: {
                    l0: n,
                    l1: o,
                    l2: r
                }
            });
        }, u = [];
    },
    f33b: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("c6d2"), r = n("f89f");
        for (var u in r) "default" !== u && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(u);
        n("f479");
        var a, i = n("f0c5"), s = Object(i["a"])(r["default"], o["b"], o["c"], !1, null, null, null, !1, o["a"], a);
        e["default"] = s.exports;
    },
    f479: function(t, e, n) {
        "use strict";
        var o = n("a8e6"), r = n.n(o);
        r.a;
    },
    f89f: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("512e"), r = n.n(o);
        for (var u in o) "default" !== u && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(u);
        e["default"] = r.a;
    }
}, [ [ "3aca", "common/runtime", "common/vendor" ] ] ]);