(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/takeawayOrder/myCoupon/myCoupon" ], {
    "58ef": function(t, e, n) {
        "use strict";
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return a;
        }), n.d(e, "a", function() {
            return r;
        });
        var r = {
            sunuiNavbar: function() {
                return n.e("components/sunui-navbar/sunui-navbar").then(n.bind(null, "6b73"));
            }
        }, o = function() {
            var t = this, e = t.$createElement, n = (t._self._c, 1 == t.currentIndex && 0 == t.currentIndex2 && 0 != t.couponList.length ? t.__map(t.couponList, function(e, n) {
                var r = t.__get_orig(e), o = 1 == e.sub_c_type ? Number(e.less).toFixed(0) : null;
                return {
                    $orig: r,
                    g0: o
                };
            }) : null), r = 1 == t.currentIndex && 1 == t.currentIndex2 && 0 != t.couponList.length ? t.__map(t.couponList, function(e, n) {
                var r = t.__get_orig(e), o = 1 == e.sub_c_type ? Number(e.less).toFixed(0) : null;
                return {
                    $orig: r,
                    g1: o
                };
            }) : null, o = 1 == t.currentIndex && 2 == t.currentIndex2 && 0 != t.couponList.length ? t.__map(t.couponList, function(e, n) {
                var r = t.__get_orig(e), o = 1 == e.sub_c_type ? Number(e.less).toFixed(0) : null;
                return {
                    $orig: r,
                    g2: o
                };
            }) : null, a = 2 == t.currentIndex && 0 != t.couponList ? t.__map(t.couponList, function(e, n) {
                var r = t.__get_orig(e), o = Number(e.less).toFixed(0);
                return {
                    $orig: r,
                    g3: o
                };
            }) : null;
            t.$mp.data = Object.assign({}, {
                $root: {
                    l0: n,
                    l1: r,
                    l2: o,
                    l3: a
                }
            });
        }, a = [];
    },
    "83ba": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("58ef"), o = n("9cd4");
        for (var a in o) "default" !== a && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(a);
        n("f7da");
        var u, i = n("f0c5"), s = Object(i["a"])(o["default"], r["b"], r["c"], !1, null, null, null, !1, r["a"], u);
        e["default"] = s.exports;
    },
    "896f": function(t, e, n) {
        "use strict";
        (function(t) {
            n("cee1");
            r(n("66fd"));
            var e = r(n("83ba"));
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(e.default);
        }).call(this, n("543d")["createPage"]);
    },
    "9cd4": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("a217"), o = n.n(r);
        for (var a in r) "default" !== a && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(a);
        e["default"] = o.a;
    },
    a217: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = o(n("a34a"));
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function a(t, e, n, r, o, a, u) {
                try {
                    var i = t[a](u), s = i.value;
                } catch (c) {
                    return void n(c);
                }
                i.done ? e(s) : Promise.resolve(s).then(r, o);
            }
            function u(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(r, o) {
                        var u = t.apply(e, n);
                        function i(t) {
                            a(u, r, o, i, s, "next", t);
                        }
                        function s(t) {
                            a(u, r, o, i, s, "throw", t);
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
                            title: "代金券",
                            type: 1
                        }, {
                            title: "优惠券",
                            type: 2
                        }, {
                            title: "领券大厅",
                            type: 3
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
                        return u(r.default.mark(function n() {
                            var o;
                            return r.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, e.$http({
                                        url: e.$api.userhy,
                                        data: {
                                            uid: t.getStorageSync("uid").id
                                        }
                                    });

                                  case 2:
                                    o = n.sent, 0 == o.errno && (e.nickname = o.data.nickname, console.log("用户中心this.nickname--------", e.nickname));

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
                        return u(r.default.mark(function e() {
                            var n;
                            return r.default.wrap(function(e) {
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
                        t.switchTab({
                            url: "/wjyk_nhyk/pages/Mall/Mall"
                        });
                    },
                    handleUseCoupon: function(e) {
                        if (1 == e.type) {
                            var n = "满" + e.full + "减" + e.less;
                            getApp().globalData.coupon = e, getApp().globalData.coupons = n, 1 == this.options.indexs && t.navigateBack();
                        } else if (2 == e.type) {
                            var r = "满减" + e.less;
                            getApp().globalData.coupon = e, getApp().globalData.coupons = r, 1 == this.options.indexs && t.navigateBack();
                        } else {
                            var o = "生日满减" + e.less;
                            getApp().globalData.coupon = e, getApp().globalData.coupons = o, 1 == this.options.indexs && t.navigateBack();
                        }
                        console.log("1111111111111coupon传值", e, getApp());
                    },
                    handleReceiptCoupon: function(e) {
                        var n = this;
                        return u(r.default.mark(function o() {
                            var a;
                            return r.default.wrap(function(r) {
                                while (1) switch (r.prev = r.next) {
                                  case 0:
                                    return r.next = 2, n.$http({
                                        url: n.$api.receive_coupon,
                                        data: {
                                            id: e,
                                            uid: t.getStorageSync("uid").id
                                        }
                                    });

                                  case 2:
                                    a = r.sent, n.$sun.toast(a.message), 0 == a.errno && (n.getCoupon(), console.log("couponInfo", a));

                                  case 5:
                                  case "end":
                                    return r.stop();
                                }
                            }, o);
                        }))();
                    },
                    useCoupons: function() {
                        var e = this;
                        return u(r.default.mark(function n() {
                            var o;
                            return r.default.wrap(function(n) {
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
                                    o = n.sent, 0 == o.errno && (console.log("type2", e.couponList), e.couponList = o.data, 
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
                        return u(r.default.mark(function n() {
                            var o, a, u;
                            return r.default.wrap(function(n) {
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
                                    return o = n.sent, 0 == o.errno && (e.MyMealList = o.data, console.log("我的套餐卡", o)), 
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
                                    a = n.sent, 0 == a.errno && (e.couponList = a.data, console.log("个人中心进入"), console.log("this.indexarr222222222222", e.indexarr2[e.currentIndex2].status, e.indexarr2[e.currentIndex2], e.indexarr2, e.currentIndex2));

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
                                    return u = n.sent, 0 == u.errno && (e.couponList = u.data), n.abrupt("break", 24);

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
    f258: function(t, e, n) {},
    f7da: function(t, e, n) {
        "use strict";
        var r = n("f258"), o = n.n(r);
        o.a;
    }
}, [ [ "896f", "common/runtime", "common/vendor" ] ] ]);