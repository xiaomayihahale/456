(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/takeawayOrder/confirm-order2/confirm-order2" ], {
    "262e": function(e, t, o) {
        "use strict";
        o.r(t);
        var n = o("cc44"), r = o.n(n);
        for (var s in n) "default" !== s && function(e) {
            o.d(t, e, function() {
                return n[e];
            });
        }(s);
        t["default"] = r.a;
    },
    "30be": function(e, t, o) {},
    "86d3": function(e, t, o) {
        "use strict";
        o.r(t);
        var n = o("a581"), r = o("262e");
        for (var s in r) "default" !== s && function(e) {
            o.d(t, e, function() {
                return r[e];
            });
        }(s);
        o("be91");
        var i, a = o("f0c5"), u = Object(a["a"])(r["default"], n["b"], n["c"], !1, null, null, null, !1, n["a"], i);
        t["default"] = u.exports;
    },
    a0b8: function(e, t, o) {
        "use strict";
        (function(e) {
            o("cee1");
            n(o("66fd"));
            var t = n(o("86d3"));
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            e(t.default);
        }).call(this, o("543d")["createPage"]);
    },
    a581: function(e, t, o) {
        "use strict";
        o.d(t, "b", function() {
            return r;
        }), o.d(t, "c", function() {
            return s;
        }), o.d(t, "a", function() {
            return n;
        });
        var n = {
            sunuiCell: function() {
                return o.e("components/sunui-cell/sunui-cell").then(o.bind(null, "cf30"));
            },
            sunuiPopup: function() {
                return o.e("components/sunui-popup/sunui-popup").then(o.bind(null, "6cf4"));
            }
        }, r = function() {
            var e = this, t = e.$createElement, o = (e._self._c, Number(e.userInfo.curDiscount)), n = o ? Number(e.userInfo.curDiscount).toFixed(1) : null, r = Number(e.sum).toFixed(2), s = Number(parseFloat(e.totalCart).toFixed(2) - parseFloat(e.voucherInfos).toFixed(2)), i = s < 0 ? null : Number(parseFloat(e.totalCart).toFixed(2) - parseFloat(e.couponInfo).toFixed(2) - parseFloat(e.voucherInfos).toFixed(2)).toFixed(2), a = 0 == e.classify && 0 != e.couponList.length ? e.__map(e.couponList, function(t, o) {
                var n = e.__get_orig(t), r = Number(t.less).toFixed(0);
                return {
                    $orig: n,
                    g3: r
                };
            }) : null;
            e.$mp.data = Object.assign({}, {
                $root: {
                    m0: o,
                    g0: n,
                    g1: r,
                    m1: s,
                    g2: i,
                    l0: a
                }
            });
        }, s = [];
    },
    be91: function(e, t, o) {
        "use strict";
        var n = o("30be"), r = o.n(n);
        r.a;
    },
    cc44: function(e, t, o) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = i(o("a34a")), r = i(o("0747")), s = o("2f62");
            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function a(e, t, o, n, r, s, i) {
                try {
                    var a = e[s](i), u = a.value;
                } catch (c) {
                    return void o(c);
                }
                a.done ? t(u) : Promise.resolve(u).then(n, r);
            }
            function u(e) {
                return function() {
                    var t = this, o = arguments;
                    return new Promise(function(n, r) {
                        var s = e.apply(t, o);
                        function i(e) {
                            a(s, n, r, i, u, "next", e);
                        }
                        function u(e) {
                            a(s, n, r, i, u, "throw", e);
                        }
                        i(void 0);
                    });
                };
            }
            function c(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), o.push.apply(o, n);
                }
                return o;
            }
            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(o), !0).forEach(function(t) {
                        d(e, t, o[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : c(Object(o)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t));
                    });
                }
                return e;
            }
            function d(e, t, o) {
                return t in e ? Object.defineProperty(e, t, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = o, e;
            }
            function p(e, t) {
                var o;
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (o = f(e)) || t && e && "number" === typeof e.length) {
                        o && (e = o);
                        var n = 0, r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return n >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[n++]
                                };
                            },
                            e: function(e) {
                                throw e;
                            },
                            f: r
                        };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var s, i = !0, a = !1;
                return {
                    s: function() {
                        o = e[Symbol.iterator]();
                    },
                    n: function() {
                        var e = o.next();
                        return i = e.done, e;
                    },
                    e: function(e) {
                        a = !0, s = e;
                    },
                    f: function() {
                        try {
                            i || null == o.return || o.return();
                        } finally {
                            if (a) throw s;
                        }
                    }
                };
            }
            function f(e, t) {
                if (e) {
                    if ("string" === typeof e) return h(e, t);
                    var o = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === o && e.constructor && (o = e.constructor.name), "Map" === o || "Set" === o ? Array.from(e) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? h(e, t) : void 0;
                }
            }
            function h(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var o = 0, n = new Array(t); o < t; o++) n[o] = e[o];
                return n;
            }
            var m = function() {
                Promise.all([ o.e("common/vendor"), o.e("components/biaofun-datetime-picker") ]).then(function() {
                    return resolve(o("2bf5"));
                }.bind(null, o)).catch(o.oe);
            }, g = {
                components: {
                    biaofunDatetimePicker: m
                },
                data: function() {
                    var e = this.getDate({
                        format: !0
                    });
                    return console.log("currentDate", e), {
                        ditu: this.$img.ditu,
                        storeJuli: "",
                        myMealList: [],
                        myMealCoupon: [],
                        defaultValue: e,
                        peopleAll: 1,
                        actives: 0,
                        leixing: [ {
                            title: "到店"
                        }, {
                            title: "外卖"
                        } ],
                        packageCards: [ {
                            title: "优惠券"
                        }, {
                            title: "套餐卡"
                        } ],
                        remnant: 0,
                        system: {},
                        youhui1: this.$img.youhui1,
                        youhui2: this.$img.youhui2,
                        couponList: [],
                        stores: "",
                        storeName: "",
                        tckInfo: "",
                        tckId: "",
                        couponid: "",
                        coupons: "",
                        shopPrice: 0,
                        aa: "",
                        userInfo: {},
                        applyType: 1,
                        defaultFlag: !0,
                        ydtime: "",
                        checkMyMeal: !1,
                        checkCoupon: !1,
                        totalCount: 0,
                        maxNum: 0,
                        address: {},
                        orderInfo: {},
                        orderList: [],
                        coupon: {},
                        applyType2: 1,
                        isUseCoupon: !1,
                        isCoupon: !1,
                        isAddress: !1,
                        options: {},
                        xomhjish: "",
                        tempId: "",
                        muns: 0,
                        spec: "无",
                        youhui: {},
                        z8: this.$img.z8,
                        couponInfo: 0,
                        checkTck: !1,
                        vouchers: "",
                        voucherInfos: 0,
                        voucherid: "",
                        addressid: "",
                        beizhu: "",
                        addressPhone: "",
                        xzVoucher: "",
                        list: [],
                        seatNumber: "请选择座位号",
                        seatNumberID: "",
                        seatInfo: !1,
                        memberDiscount: "",
                        scanCode: 2,
                        mobliess: "",
                        phoneInfo: this.mobliess,
                        phoneInfoNumber: "",
                        MyMealList: "",
                        classify: 0
                    };
                },
                computed: {
                    startDate: function() {
                        return this.getDate("start");
                    },
                    endDate: function() {
                        return this.getDate("end");
                    },
                    numa: function() {
                        console.log("进入结算数量");
                        var e = 0;
                        return this.orderList.forEach(function(t) {
                            console.log("p", t), 1 == t.checked && (e += Number(t.num), console.log("结算p.num", t.num, e));
                        }), e;
                    },
                    sum: function() {
                        console.log("进入结算金额");
                        var e = 0;
                        return this.orderList.forEach(function(t) {
                            console.log("p", t), 1 == t.checked && (e += t.num * t.spec_price);
                        }), e;
                    },
                    totalCart: function() {
                        var e, t = 0, o = this.orderList, n = p(o);
                        try {
                            for (n.s(); !(e = n.n()).done; ) {
                                var r = e.value, s = Number(r.spec_price), i = Number(r.num);
                                if (1 == r.checked) if (0 == this.userInfo.curDiscount) t += s * i; else {
                                    var a = s * i, u = Number(this.userInfo.curDiscount) / 10;
                                    t += a * Number(u);
                                }
                            }
                        } catch (c) {
                            n.e(c);
                        } finally {
                            n.f();
                        }
                        return t;
                    },
                    totalDetail: function() {
                        var e = Number(this.orderInfo.original_price);
                        if (0 == this.userInfo.curDiscount) return void 0 == this.orderInfo.freight ? this.totalCount * e : this.totalCount * e + Number(this.orderInfo.freight);
                        var t = Number(this.userInfo.curDiscount) / 10;
                        return this.totalCount * e * Number(t) + Number(this.orderInfo.freight);
                    }
                },
                onShow: function() {
                    this.phoneInfoNumber = e.getStorageSync("phoneInfo"), this.getAddress(), console.log(this.ydtime, "ydtime======="), 
                    this.storeJuli = e.getStorageSync("storeJuli"), this.stores = e.getStorageSync("storeEatNexts"), 
                    this.storeName = e.getStorageSync("storeEatNextNames"), this.mescroll.resetUpScroll(), 
                    r.default.releaseKey("submit"), this.myVoucher(), this.myMealCoupons();
                    var t = getCurrentPages(), o = t[t.length - 1];
                    this.addressid = o.data.address, 1 == this.addressid && (this.addressPhone = o.data.mydata, 
                    this.peopleAll = o.data.mypeople, console.log(o.data.mydata, this.peopleAll, "currPage.data.mydatacurrPage.data.mydatacurrPage.data.mydata"));
                },
                onLoad: function(e) {
                    this.getShopList(), this.options = e, this.typees = e.type, this.actives = e.actives, 
                    this.scanCode = e.scanCode, console.log("this.options", this.options, this.typees, "this.actives", this.actives, "this.scanCode", this.scanCode), 
                    this.getSystem(), this.userInfoes(), this.spec = e.spec, this.muns = Number(e.num);
                },
                onShareAppMessage: function() {},
                methods: l(l({
                    getDate: function(e) {
                        var t = new Date(), o = t.getFullYear(), n = t.getMonth() + 1, r = t.getDate();
                        return "start" === e ? o -= 60 : "end" === e && (o += 2), n = n > 9 ? n : "0" + n, 
                        r = r > 9 ? r : "0" + r, "".concat(o, "-").concat(n, "-").concat(r);
                    },
                    changeDatetimePicker: function(e) {
                        console.log("选择的日期时间数据：", e, e.f3), this.ydtime = e.f3;
                    },
                    beizhus: function() {},
                    store: function() {
                        this.$sun.navGo("/packages/takeawayOrder/NearbyStores/NearbyStores", {
                            indexs: 2
                        });
                    },
                    qiehuan: function() {
                        e.navigateTo({
                            url: "/packages/takeawayOrder/NearbyStores/NearbyStores"
                        });
                    },
                    moneydata1: function(t) {
                        this.actives = t, console.log("this.active", this.actives, "this.index", t), 0 == this.actives ? e.setNavigationBarTitle({
                            title: "门店取餐"
                        }) : e.setNavigationBarTitle({
                            title: "外卖配送"
                        });
                    },
                    classData: function(e) {
                        this.classify = e, console.log("this.classify", this.classify, "this.index", e);
                    },
                    modifys: function() {
                        void 0 == this.phoneInfo || "" == this.phoneInfo ? e.navigateTo({
                            url: "/packages/takeawayOrder/storePickupModify/storePickupModify?phone=1&people=" + this.peopleAll
                        }) : e.navigateTo({
                            url: "/packages/takeawayOrder/storePickupModify/storePickupModify?phone=" + this.phoneInfo + "&people=" + this.peopleAll
                        });
                    }
                }, (0, s.mapMutations)([ "setCoupon" ])), {}, {
                    handleApplyType: function(e) {
                        var t = e.detail.value;
                        this.applyType = t, console.log(this.applyType, "applyType");
                    },
                    descInput: function(e) {
                        this.remnant = e.detail.value.length, this.remnant >= 50 && this.$sun.toast("备注字数已达上限"), 
                        console.log(this.text, "text");
                    },
                    userInfoes: function() {
                        var t = this;
                        return u(n.default.mark(function o() {
                            var r, s;
                            return n.default.wrap(function(o) {
                                while (1) switch (o.prev = o.next) {
                                  case 0:
                                    return o.next = 2, t.$http({
                                        url: t.$api.userhy,
                                        data: {
                                            uid: e.getStorageSync("uid").id
                                        }
                                    });

                                  case 2:
                                    r = o.sent, 0 == r.errno && (t.userInfo = r.data, t.balance = t.userInfo.money, 
                                    console.log(t.balance, t.userInfo, "this.userInfo"), t.getCoupon(), t.userInfo.curDiscount ? (s = Number(Number(t.userInfo.curDiscount) / 10 * t.sum).toFixed(2), 
                                    t.memberDiscount = Number(t.sum - s).toFixed(2), console.log("实付框，有折扣-----------------", t.memberDiscount)) : (t.memberDiscount = 0, 
                                    console.log("实付框无折扣--------------", t.memberDiscount)));

                                  case 4:
                                  case "end":
                                    return o.stop();
                                }
                            }, o);
                        }))();
                    },
                    useCoupons: function() {
                        var t = this;
                        return u(n.default.mark(function o() {
                            var r;
                            return n.default.wrap(function(o) {
                                while (1) switch (o.prev = o.next) {
                                  case 0:
                                    return o.next = 2, t.$http({
                                        url: t.$api.use_coupon,
                                        data: {
                                            uid: e.getStorageSync("uid").id,
                                            id: t.couponid,
                                            region: ""
                                        }
                                    });

                                  case 2:
                                    r = o.sent, 0 == r.errno && (console.log("type2", t.usecouponList, "成功this.couponid", t.couponid), 
                                    t.usecouponList = r.data, console.log("则下单时进入"));

                                  case 4:
                                  case "end":
                                    return o.stop();
                                }
                            }, o);
                        }))();
                    },
                    myMealCoupons: function() {
                        var t = this;
                        return u(n.default.mark(function o() {
                            var r;
                            return n.default.wrap(function(o) {
                                while (1) switch (o.prev = o.next) {
                                  case 0:
                                    return o.next = 2, t.$http({
                                        url: t.$api.MyMealCoupon,
                                        data: {
                                            uid: e.getStorageSync("uid").id
                                        }
                                    });

                                  case 2:
                                    r = o.sent, 0 == r.errno && (t.myMealCoupon = r.data, console.log("我的套餐卡", r));

                                  case 4:
                                  case "end":
                                    return o.stop();
                                }
                            }, o);
                        }))();
                    },
                    getCoupon: function() {
                        var t = this;
                        return u(n.default.mark(function o() {
                            var r;
                            return n.default.wrap(function(o) {
                                while (1) switch (o.prev = o.next) {
                                  case 0:
                                    return console.log("去使用优惠券购物车金额", t.totalCart, t.options.type), o.next = 3, t.$http({
                                        url: t.$api.use_coupon,
                                        data: {
                                            uid: e.getStorageSync("uid").id,
                                            price: 1 == t.options.type ? t.totalDetail : t.totalCart,
                                            use_coupon: ""
                                        }
                                    });

                                  case 3:
                                    r = o.sent, 0 == r.errno && (t.couponList = r.data, console.log("购物车金额", t.totalCart, t.options.type), 
                                    console.log("去使用优惠券type2", t.couponList), t.couponList.filter(function(e, o) {
                                        t.$set(e, "checkCoupon", !1);
                                    }), 0 != t.couponList.length ? (t.coupons = "请选择优惠券", t.couponInfo = 0, t.couponid = "") : (t.coupons = "暂无优惠券", 
                                    t.couponInfo = 0, t.couponid = ""));

                                  case 5:
                                  case "end":
                                    return o.stop();
                                }
                            }, o);
                        }))();
                    },
                    myVoucher: function() {
                        var t = this;
                        return u(n.default.mark(function o() {
                            var r;
                            return n.default.wrap(function(o) {
                                while (1) switch (o.prev = o.next) {
                                  case 0:
                                    return o.next = 2, t.$http({
                                        url: t.$api.my_voucher,
                                        data: {
                                            uid: e.getStorageSync("uid").id
                                        }
                                    });

                                  case 2:
                                    r = o.sent, 0 == r.errno && (t.myMealList = r.data, t.myMealList.filter(function(e, o) {
                                        t.$set(e, "checkMyMeal", !1);
                                    }), 0 != t.myMealList.length ? t.vouchers = "请选择代金券" : t.vouchers = "暂无代金券", console.log("我的代金券", t.myMealList, "this.myMealList.length======", t.myMealList.length));

                                  case 4:
                                  case "end":
                                    return o.stop();
                                }
                            }, o);
                        }))();
                    },
                    seatcheckeBox: function(e) {
                        this.list.filter(function(t) {
                            e == t.id ? t.seatInfo = 1 != t.seatInfo : t.seatInfo = !1;
                        });
                        var t = 0;
                        this.list.filter(function(e) {
                            1 != e.seatInfo || (t = e);
                        }), 0 == t ? (this.seatNumber = "暂无座位号", this.seatNumberID = "") : (console.log("座位号id", t.id), 
                        this.seatNumber = t.name + " " + t.seat_number, this.seatNumberID = t.id, console.log("座位号显示文字", this.seatNumber, "this.seatNumberID", this.seatNumberID)), 
                        console.log("count===============", t);
                    },
                    checkeBox2: function(e) {
                        this.myMealList.filter(function(t) {
                            e == t.id ? (t.checkMyMeal = 1 != t.checkMyMeal, console.log(e, "id------", t.id)) : (t.checkMyMeal = !1, 
                            console.log(e, "id22222222------", t.id)), console.log("x.checkMyMeal ========", t.checkMyMeal);
                        });
                        var t = 0;
                        this.myMealList.filter(function(e) {
                            1 != e.checkMyMeal || (t = e);
                        }), 0 == t ? (this.vouchers = "暂无代金券", this.voucherInfos = 0, this.voucherid = "") : (console.log("代金券id", t.id), 
                        this.vouchers = "面值" + t.only, this.voucherInfos = t.only, this.voucherid = t.id, 
                        console.log(this.vouchers, "this.voucherName满无门槛", "this.less", this.voucherInfos, "==", this.voucherid));
                    },
                    checkeBox: function(e) {
                        this.couponList.filter(function(t) {
                            e == t.id ? t.checkCoupon = 1 != t.checkCoupon : t.checkCoupon = !1;
                        });
                        var t = 0;
                        this.couponList.filter(function(e) {
                            1 != e.checkCoupon || (t = e);
                        }), 0 == t ? (this.coupons = "暂无优惠券", this.couponInfo = 0, this.couponid = "") : (console.log("优惠券id", t.id), 
                        1 == t.type ? (this.coupons = "满" + t.full + "减" + t.less, this.couponInfo = t.less) : 2 == t.type && (this.coupons = "无门槛" + t.less, 
                        this.couponInfo = t.less), this.couponid = t.id);
                    },
                    tckcheckeBox: function(e) {
                        if (this.couponid) this.$sun.toast("当前已选择优惠券！"), this.myMealCoupon.filter(function(e) {
                            e.checkTck = !1;
                        }); else {
                            console.log("进入套餐卡的点击事件=============="), this.myMealCoupon.filter(function(t) {
                                e == t.id ? t.checkTck = 1 != t.checkTck : t.checkTck = !1;
                            });
                            var t = 0;
                            this.myMealCoupon.filter(function(e) {
                                1 != e.checkTck || (t = e);
                            }), 0 == t ? (this.coupons = "暂无套餐卡", this.tckInfo = 0, this.tckId = "") : (this.couponInfo = 0, 
                            this.couponid = "", console.log("套餐卡id", t.id), this.coupons = t.meal_name, this.tckId = t.id, 
                            this.tckInfo = t.meal_discount);
                        }
                    },
                    closeDialog: function() {
                        this.$refs.pop.close();
                    },
                    closeDialog2: function() {
                        this.$refs.pops.close();
                    },
                    handleCoupon: function() {
                        console.log("选择优惠券"), this.getCoupon(), this.$refs.pop.show({
                            style: "background-color:#fff;width:100%;height:auto;overflow-x:auto;",
                            anim: "bottom",
                            position: "bottom",
                            topclose: !1,
                            titleStyle: "position: fixed;width: 100%;background: #fff;z-index: 1000;border-bottom:1rpx solid #f7f7f7;"
                        });
                    },
                    voucherList: function() {
                        console.log("选择代金券"), this.$refs.pops.show({
                            style: "background-color:#fff;width:100%;height:auto;overflow-x:auto;",
                            anim: "bottom",
                            position: "bottom",
                            topclose: !1,
                            titleStyle: "position: fixed;width: 100%;background: #fff;z-index: 1000;border-bottom:1rpx solid #f7f7f7;"
                        });
                    },
                    zuoweiList: function() {
                        this.$refs.popseat.show({
                            style: "background-color:#FFFFFF;width:606rpx;border-radius:20rpx;"
                        });
                    },
                    closeDialog3: function() {
                        this.$refs.popseat.close();
                    },
                    upCallback: function(e) {
                        var t = this;
                        return u(n.default.mark(function o() {
                            var r;
                            return n.default.wrap(function(o) {
                                while (1) switch (o.prev = o.next) {
                                  case 0:
                                    return o.next = 2, t.$http({
                                        url: t.$api.seat_list,
                                        data: {
                                            page: e.num,
                                            psize: 10,
                                            store_id: t.stores
                                        }
                                    });

                                  case 2:
                                    r = o.sent, 0 == r.errno && (console.log("座位号", r.data), t.mescroll.endByPage(r.data.list.length, r.totalPage), 
                                    1 == e.num && (t.list = []), t.list = t.list.concat(r.data.list), console.log(t.list, "list分页=============================="), 
                                    t.list.filter(function(e, o) {
                                        console.log("座位号增加seatInfo--"), t.$set(e, "seatInfo", !1);
                                    }));

                                  case 4:
                                  case "end":
                                    return o.stop();
                                }
                            }, o);
                        }))();
                    },
                    getShopList: function() {
                        var e = this, t = getCurrentPages(), o = t[t.length - 2], n = this.options.type;
                        if (1 == n) {
                            var r = o.$vm.detail;
                            this.orderInfo = r, console.log(this.orderInfo, "this.orderInfo"), this.maxNum = Number(this.orderInfo.stock), 
                            console.log(this.maxNum, this.orderInfo, this.orderInfo.freight, "上个页面返回购物车-----------------------------------------------------------------------------");
                        } else this.orderList = o.$vm.shopCartList, console.log("上个页面返回购物车2-----------------------------------------------------------------------------", this.orderList), 
                        this.orderList = this.orderList.filter(function(t) {
                            return e.$set(t, "original_price", t.spec_price), console.log("item", t.checked, "item", t), 
                            t.checked;
                        });
                    },
                    getAddress: function() {
                        var t = this;
                        return u(n.default.mark(function o() {
                            var r;
                            return n.default.wrap(function(o) {
                                while (1) switch (o.prev = o.next) {
                                  case 0:
                                    return o.next = 2, t.$http({
                                        url: t.$api.Get_address,
                                        data: {
                                            uid: e.getStorageSync("uid").id
                                        }
                                    });

                                  case 2:
                                    r = o.sent, 0 == r.errno && (t.mobliess = r.data.mobile, "" != t.phoneInfoNumber ? t.phoneInfo = t.phoneInfoNumber : t.phoneInfo = t.mobliess, 
                                    console.log(t.mobliess, "this.mobliess===手机号========================="), 0 == r.data.length ? t.defaultFlag = !0 : (t.defaultFlag = !1, 
                                    t.address = r.data), console.log("默认地址", r));

                                  case 4:
                                  case "end":
                                    return o.stop();
                                }
                            }, o);
                        }))();
                    },
                    handleChooseAddress: function() {
                        e.navigateTo({
                            url: "/packages/Mall/address/address"
                        });
                    },
                    getSystem: function() {
                        var e = this;
                        return u(n.default.mark(function t() {
                            var o;
                            return n.default.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, e.$http({
                                        url: e.$api.system
                                    });

                                  case 2:
                                    o = t.sent, 0 == o.errno && (e.system = o.data, e.kfTemplate = o.data.notice.kf_template, 
                                    console.log("系统设置 打印", e.kfTemplate, e.tempId, e.successTemplate, e.brTemplate)), 
                                    console.log("result", o, "this.tempId", e.tempId);

                                  case 5:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    acceptMessage: function() {
                        var t = this;
                        wx.getSetting({
                            withSubscriptions: !0,
                            success: function(o) {
                                console.log(o.subscriptionsSetting), 0 == o.subscriptionsSetting.mainSwitch || e.requestSubscribeMessage({
                                    tmplIds: [ t.kfTemplate ],
                                    success: function() {
                                        var o = u(n.default.mark(function o(r) {
                                            return n.default.wrap(function(o) {
                                                while (1) switch (o.prev = o.next) {
                                                  case 0:
                                                    console.log("总打印", r), "accept" == r[t.kfTemplate] ? (console.log("授权成功", r), t.$sun.toast("下单成功"), 
                                                    t.useCoupons(), e.redirectTo({
                                                        url: "/packages/takeawayOrder/orderMessage/orderMessage?index=2"
                                                    })) : wx.showModal({
                                                        title: "温馨提示",
                                                        content: "您已拒绝授权，将无法在微信中收到通知！",
                                                        showCancel: !1,
                                                        success: function(o) {
                                                            o.confirm && (console.log("拒绝授权", r), t.$sun.toast("下单成功"), t.useCoupons(), e.redirectTo({
                                                                url: "/packages/takeawayOrder/orderMessage/orderMessage?index=2"
                                                            }));
                                                        }
                                                    });

                                                  case 2:
                                                  case "end":
                                                    return o.stop();
                                                }
                                            }, o);
                                        }));
                                        function r(e) {
                                            return o.apply(this, arguments);
                                        }
                                        return r;
                                    }(),
                                    fail: function(o) {
                                        console.log("失败", o), t.$sun.toast("下单成功"), t.useCoupons(), e.redirectTo({
                                            url: "/packages/takeawayOrder/orderMessage/orderMessage?index=2"
                                        });
                                    },
                                    complete: function(e) {
                                        console.log("完成", e);
                                    }
                                });
                            }
                        });
                    },
                    chongzhi: function() {
                        var e = this;
                        r.default.uniDoFunc({
                            key: "submit",
                            success: function() {
                                var t = u(n.default.mark(function t() {
                                    return n.default.wrap(function(t) {
                                        while (1) switch (t.prev = t.next) {
                                          case 0:
                                            r.default.lockKey("submit"), console.log("防抖... 在事件触发前连续点击事件会重新计时"), e.orderSubmit();

                                          case 3:
                                          case "end":
                                            return t.stop();
                                        }
                                    }, t);
                                }));
                                function o() {
                                    return t.apply(this, arguments);
                                }
                                return o;
                            }()
                        });
                    },
                    orderSubmit: function(t) {
                        var o = this;
                        return u(n.default.mark(function t() {
                            var s, i, a, c, l, d, p, f;
                            return n.default.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                  case 0:
                                    if (s = Number(Number(o.voucherInfos) + Number(o.couponInfo)).toFixed(2), console.log("减去的折扣----------", s), 
                                    i = 1 == o.options.type ? o.totalDetail : o.totalCart, a = Number(parseInt(o.actives) + 1), 
                                    i = Number(Number(i) - Number(o.voucherInfos)) < 0 ? 0 : Number(Number(i) - Number(o.couponInfo) - Number(o.voucherInfos)).toFixed(2), 
                                    void 0 != o.phoneInfo && "" != o.phoneInfo) {
                                        t.next = 10;
                                        break;
                                    }
                                    if (0 != o.actives) {
                                        t.next = 10;
                                        break;
                                    }
                                    return o.$sun.toast("您还没有填写手机号 ~ "), r.default.releaseKey("submit"), t.abrupt("return", !1);

                                  case 10:
                                    if (!o.defaultFlag) {
                                        t.next = 15;
                                        break;
                                    }
                                    if (1 != o.actives) {
                                        t.next = 15;
                                        break;
                                    }
                                    return o.$sun.toast("您还没有选择收货地址 ~ "), r.default.releaseKey("submit"), t.abrupt("return", !1);

                                  case 15:
                                    if (1 != o.applyType) {
                                        t.next = 31;
                                        break;
                                    }
                                    if (0 != i && 0 != i && 0 != i) {
                                        t.next = 25;
                                        break;
                                    }
                                    return console.log("进入零元免微信支付"), t.next = 20, o.$http({
                                        url: o.$api.add_foods_order,
                                        method: "POST",
                                        data: {
                                            voucher_id: o.voucherid,
                                            plugin_type: 1,
                                            pickup_type: 0,
                                            receipt_type: a,
                                            pe_number: 0 == o.actives ? o.peopleAll : "",
                                            member_discount: o.memberDiscount,
                                            pay_type: o.applyType,
                                            uid: e.getStorageSync("uid").id,
                                            province: o.address.province,
                                            city: o.address.city,
                                            district: o.address.district,
                                            address: o.address.address,
                                            real_payment: i,
                                            mobile: 0 == o.actives ? o.phoneInfo : o.address.mobile,
                                            realname: o.address.realname,
                                            status: 2,
                                            type: o.options.type,
                                            unit_price: o.orderInfo.original_price,
                                            num: o.numa,
                                            goods_id: o.orderInfo.id,
                                            list: o.orderList,
                                            coupon_id: o.couponid,
                                            remark: o.beizhu,
                                            discount: s,
                                            price: Number(o.sum).toFixed(2),
                                            spec: o.spec,
                                            freight: o.options.freight,
                                            store_name: o.storeName,
                                            store_id: o.stores,
                                            need_integral: ""
                                        }
                                    });

                                  case 20:
                                    c = t.sent, o.$sun.toast(c.message), 0 == c.errno ? (o.useCoupons(), e.redirectTo({
                                        url: "/packages/takeawayOrder/orderMessage/orderMessage?index=2"
                                    }), console.log("this.address.mobile", o.address.mobile, "unit_price: this.original_price,", o.orderInfo.original_price)) : r.default.releaseKey("submit"), 
                                    t.next = 29;
                                    break;

                                  case 25:
                                    return t.next = 27, o.$http({
                                        url: o.$api.pay,
                                        data: {
                                            uid: e.getStorageSync("uid").id,
                                            openid: wx.getStorageSync("openid"),
                                            price: i
                                        }
                                    });

                                  case 27:
                                    l = t.sent, 0 == l.code && (d = l.data, o.$sun.wePay(d, function() {
                                        var t = u(n.default.mark(function t(u) {
                                            var c;
                                            return n.default.wrap(function(t) {
                                                while (1) switch (t.prev = t.next) {
                                                  case 0:
                                                    return console.log("进入微信支付"), t.next = 3, o.$http({
                                                        url: o.$api.add_foods_order,
                                                        method: "POST",
                                                        data: {
                                                            voucher_id: o.voucherid,
                                                            plugin_type: 1,
                                                            pickup_type: 0,
                                                            receipt_type: a,
                                                            pe_number: 0 == o.actives ? o.peopleAll : "",
                                                            member_discount: o.memberDiscount,
                                                            pay_type: o.applyType,
                                                            uid: e.getStorageSync("uid").id,
                                                            province: o.address.province,
                                                            city: o.address.city,
                                                            district: o.address.district,
                                                            address: o.address.address,
                                                            real_payment: i,
                                                            mobile: 0 == o.actives ? o.phoneInfo : o.address.mobile,
                                                            realname: o.address.realname,
                                                            status: 2,
                                                            type: o.options.type,
                                                            unit_price: o.orderInfo.original_price,
                                                            num: o.numa,
                                                            goods_id: o.orderInfo.id,
                                                            list: o.orderList,
                                                            coupon_id: o.couponid,
                                                            discount: s,
                                                            remark: o.beizhu,
                                                            price: Number(o.sum).toFixed(2),
                                                            spec: o.spec,
                                                            freight: o.options.freight,
                                                            store_name: o.storeName,
                                                            store_id: o.stores,
                                                            need_integral: ""
                                                        }
                                                    });

                                                  case 3:
                                                    c = t.sent, o.$sun.toast(c.message), 0 == c.errno ? (o.useCoupons(), e.redirectTo({
                                                        url: "/packages/takeawayOrder/orderMessage/orderMessage?index=2"
                                                    }), console.log("this.address.mobile", o.address.mobile, "unit_price: this.original_price,", o.orderInfo.original_price)) : r.default.releaseKey("submit");

                                                  case 6:
                                                  case "end":
                                                    return t.stop();
                                                }
                                            }, t);
                                        }));
                                        return function(e) {
                                            return t.apply(this, arguments);
                                        };
                                    }(), function() {
                                        var t = u(n.default.mark(function t(u) {
                                            var c;
                                            return n.default.wrap(function(t) {
                                                while (1) switch (t.prev = t.next) {
                                                  case 0:
                                                    if (console.log("进入待支付状态", u), -1 == JSON.parse(u).errMsg.indexOf("requestPayment:fail cancel")) {
                                                        t.next = 8;
                                                        break;
                                                    }
                                                    return t.next = 4, o.$http({
                                                        url: o.$api.add_foods_order,
                                                        method: "POST",
                                                        data: {
                                                            voucher_id: o.voucherid,
                                                            plugin_type: 1,
                                                            pickup_type: 0,
                                                            receipt_type: a,
                                                            pe_number: 0 == o.actives ? o.peopleAll : "",
                                                            member_discount: o.memberDiscount,
                                                            pay_type: o.applyType,
                                                            uid: e.getStorageSync("uid").id,
                                                            province: o.address.province,
                                                            city: o.address.city,
                                                            district: o.address.district,
                                                            address: o.address.address,
                                                            real_payment: i,
                                                            mobile: 0 == o.actives ? o.phoneInfo : o.address.mobile,
                                                            realname: o.address.realname,
                                                            status: 1,
                                                            type: o.options.type,
                                                            unit_price: o.orderInfo.original_price,
                                                            num: o.numa,
                                                            goods_id: o.orderInfo.id,
                                                            remark: o.beizhu,
                                                            list: o.orderList,
                                                            coupon_id: o.couponid,
                                                            discount: s,
                                                            price: Number(o.sum).toFixed(2),
                                                            store_name: o.storeName,
                                                            store_id: o.stores,
                                                            need_integral: ""
                                                        }
                                                    });

                                                  case 4:
                                                    c = t.sent, 0 == c.errno ? (console.log("this.address.mobile", o.address.mobile, "unit_price: this.original_price,", o.orderInfo.original_price), 
                                                    e.redirectTo({
                                                        url: "/packages/takeawayOrder/orderMessage/orderMessage?index=1"
                                                    })) : (r.default.releaseKey("submit"), e.showModal({
                                                        title: "提示",
                                                        content: "请在后台配置微信支付基础配置信息，注：商品金额需要大于0",
                                                        showCancel: !1
                                                    })), t.next = 10;
                                                    break;

                                                  case 8:
                                                    o.$sun.toast("您已取消支付"), r.default.releaseKey("submit");

                                                  case 10:
                                                  case "end":
                                                    return t.stop();
                                                }
                                            }, t);
                                        }));
                                        return function(e) {
                                            return t.apply(this, arguments);
                                        };
                                    }()));

                                  case 29:
                                    t.next = 51;
                                    break;

                                  case 31:
                                    if (2 != o.applyType) {
                                        t.next = 50;
                                        break;
                                    }
                                    if (console.log("余额支付", o.balance, i), !(Number(o.balance) < Number(i))) {
                                        t.next = 40;
                                        break;
                                    }
                                    return console.log("余额支付", o.balance, i), o.$sun.toast("您的余额不足，请使用微信支付."), r.default.releaseKey("submit"), 
                                    t.abrupt("return");

                                  case 40:
                                    return t.next = 42, o.$http({
                                        url: o.$api.balance_pay,
                                        data: {
                                            uid: e.getStorageSync("uid").id,
                                            price: i,
                                            pay_type: o.applyType
                                        }
                                    });

                                  case 42:
                                    if (p = t.sent, 0 != p.errno) {
                                        t.next = 48;
                                        break;
                                    }
                                    return t.next = 46, o.$http({
                                        url: o.$api.add_foods_order,
                                        method: "POST",
                                        data: {
                                            voucher_id: o.voucherid,
                                            plugin_type: 1,
                                            pickup_type: 0,
                                            receipt_type: a,
                                            pe_number: 0 == o.actives ? o.peopleAll : "",
                                            member_discount: o.memberDiscount,
                                            pay_type: o.applyType,
                                            uid: e.getStorageSync("uid").id,
                                            province: o.address.province,
                                            city: o.address.city,
                                            district: o.address.district,
                                            address: o.address.address,
                                            real_payment: i,
                                            mobile: 0 == o.actives ? o.phoneInfo : o.address.mobile,
                                            realname: o.address.realname,
                                            status: 2,
                                            type: o.options.type,
                                            unit_price: o.orderInfo.original_price,
                                            num: o.numa,
                                            goods_id: o.orderInfo.id,
                                            list: o.orderList,
                                            remark: o.beizhu,
                                            coupon_id: o.couponid,
                                            discount: s,
                                            price: Number(o.sum).toFixed(2),
                                            spec: o.spec,
                                            freight: o.options.freight,
                                            store_name: o.storeName,
                                            store_id: o.stores,
                                            need_integral: ""
                                        }
                                    });

                                  case 46:
                                    f = t.sent, 0 == f.errno ? (o.$sun.toast(f.message), o.useCoupons(), setTimeout(function() {
                                        e.redirectTo({
                                            url: "/packages/takeawayOrder/orderMessage/orderMessage?index=2"
                                        });
                                    }, 1800)) : (r.default.releaseKey("submit"), o.$sun.toast(f.message));

                                  case 48:
                                    t.next = 51;
                                    break;

                                  case 50:
                                    r.default.releaseKey("submit");

                                  case 51:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    numberChange: function(e, t) {
                        console.log("assssssssss", e, t), this.totalCount = e, this.coupons = "暂无优惠券", this.couponInfo = 0, 
                        console.log(this.totalCount, e, "this.totalCount暂无优惠券");
                        for (var o = this.orderList, n = 0; n < o.length; n++) this.orderList[n].goods_id == t && (o[n].num = e);
                    }
                })
            };
            t.default = g;
        }).call(this, o("543d")["default"]);
    }
}, [ [ "a0b8", "common/runtime", "common/vendor" ] ] ]);