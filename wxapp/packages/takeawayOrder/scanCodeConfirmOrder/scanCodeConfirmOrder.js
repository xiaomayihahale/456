(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/takeawayOrder/scanCodeConfirmOrder/scanCodeConfirmOrder" ], {
    "2aa2": function(e, t, o) {
        "use strict";
        var s = o("5e5a"), r = o.n(s);
        r.a;
    },
    "5e5a": function(e, t, o) {},
    "6b17": function(e, t, o) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = i(o("a34a")), r = i(o("0747")), n = o("2f62");
            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function a(e, t, o, s, r, n, i) {
                try {
                    var a = e[n](i), u = a.value;
                } catch (c) {
                    return void o(c);
                }
                a.done ? t(u) : Promise.resolve(u).then(s, r);
            }
            function u(e) {
                return function() {
                    var t = this, o = arguments;
                    return new Promise(function(s, r) {
                        var n = e.apply(t, o);
                        function i(e) {
                            a(n, s, r, i, u, "next", e);
                        }
                        function u(e) {
                            a(n, s, r, i, u, "throw", e);
                        }
                        i(void 0);
                    });
                };
            }
            function c(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), o.push.apply(o, s);
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
                        var s = 0, r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return s >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[s++]
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
                var n, i = !0, a = !1;
                return {
                    s: function() {
                        o = e[Symbol.iterator]();
                    },
                    n: function() {
                        var e = o.next();
                        return i = e.done, e;
                    },
                    e: function(e) {
                        a = !0, n = e;
                    },
                    f: function() {
                        try {
                            i || null == o.return || o.return();
                        } finally {
                            if (a) throw n;
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
                for (var o = 0, s = new Array(t); o < t; o++) s[o] = e[o];
                return s;
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
                        storeJuli: "",
                        myMealList: [],
                        defaultValue: e,
                        peopleAll: 1,
                        actives: 0,
                        leixing: [ {
                            title: "到店"
                        }, {
                            title: "外卖"
                        } ],
                        remnant: 0,
                        system: {},
                        youhui1: this.$img.youhui1,
                        youhui2: this.$img.youhui2,
                        couponList: [],
                        stores: "",
                        storeName: "",
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
                        scanCode: 2
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
                            console.log("p", t), 1 == t.checked && (e += t.num * t.original_price);
                        }), e;
                    },
                    totalCart: function() {
                        var e, t = 0, o = this.orderList, s = p(o);
                        try {
                            for (s.s(); !(e = s.n()).done; ) {
                                var r = e.value, n = Number(r.original_price), i = Number(r.num);
                                r.original_price;
                                if (console.log("dissssssssssssssssssss购物车的计算总金额*********", i), 1 == r.checked) if (0 == this.userInfo.curDiscount) t += n * i; else {
                                    var a = n * i, u = Number(this.userInfo.curDiscount) / 10;
                                    t += a * Number(u);
                                }
                            }
                        } catch (c) {
                            s.e(c);
                        } finally {
                            s.f();
                        }
                        return t;
                    },
                    totalDetail: function() {
                        console.log("zongjiajdd=====================================");
                        var e = Number(this.orderInfo.original_price);
                        if (0 == this.userInfo.curDiscount) return void 0 == this.orderInfo.freight ? this.totalCount * e : this.totalCount * e + Number(this.orderInfo.freight);
                        var t = Number(this.userInfo.curDiscount) / 10;
                        return this.totalCount * e * Number(t) + Number(this.orderInfo.freight);
                    }
                },
                onShow: function() {
                    console.log(this.ydtime, "ydtime======="), this.storeJuli = e.getStorageSync("storeJuli"), 
                    this.stores = e.getStorageSync("storeEatNexts"), this.storeName = e.getStorageSync("storeEatNextNames"), 
                    this.mescroll.resetUpScroll(), this.getAddress(), r.default.releaseKey("submit"), 
                    this.myVoucher();
                    var t = getCurrentPages(), o = t[t.length - 1];
                    this.addressid = o.data.address, 1 == this.addressid && (this.addressPhone = o.data.mydata, 
                    this.peopleAll = o.data.mypeople, console.log(o.data.mydata, shopList, this.peopleAll, "currPage.data.mydatacurrPage.data.mydatacurrPage.data.mydata"));
                },
                onLoad: function(e) {
                    this.getShopList(), this.options = e, this.typees = e.type, this.actives = e.actives, 
                    this.scanCode = wx.getStorageSync("scanCodes"), console.log("this.options85888888888888888888888-------", this.typees, "this.actives", this.actives, "this.scanCode", this.scanCode, this.spec, e), 
                    this.getSystem(), this.userInfoes(), this.spec = e.spec, this.muns = Number(e.num);
                },
                onShareAppMessage: function() {},
                methods: l(l({
                    getDate: function(e) {
                        var t = new Date(), o = t.getFullYear(), s = t.getMonth() + 1, r = t.getDate();
                        return "start" === e ? o -= 60 : "end" === e && (o += 2), s = s > 9 ? s : "0" + s, 
                        r = r > 9 ? r : "0" + r, "".concat(o, "-").concat(s, "-").concat(r);
                    },
                    changeDatetimePicker: function(e) {
                        console.log("选择的日期时间数据：", e, e.f3), this.ydtime = e.f3;
                    },
                    beizhus: function() {
                        console.log("备注------------", this.beizhu);
                    },
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
                    modifys: function() {
                        e.navigateTo({
                            url: "/packages/takeawayOrder/storePickupModify/storePickupModify?phone=" + this.address.mobile + "&people=" + this.peopleAll
                        });
                    }
                }, (0, n.mapMutations)([ "setCoupon" ])), {}, {
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
                        return u(s.default.mark(function o() {
                            var r, n;
                            return s.default.wrap(function(o) {
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
                                    console.log(t.balance, t.userInfo, "this.userInfo"), t.getCoupon(), t.userInfo.curDiscount ? (n = Number(Number(t.userInfo.curDiscount) / 10 * t.sum).toFixed(2), 
                                    t.memberDiscount = Number(t.sum - n).toFixed(2), console.log("实付框，有折扣-----------------", t.memberDiscount)) : (t.memberDiscount = 0, 
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
                        return u(s.default.mark(function o() {
                            var r;
                            return s.default.wrap(function(o) {
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
                    getCoupon: function() {
                        var t = this;
                        return u(s.default.mark(function o() {
                            var r;
                            return s.default.wrap(function(o) {
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
                                    }), 0 != t.couponList.length ? (t.coupons = "请选择优惠券", t.couponInfo = 0, t.couponid = "") : (console.log(t.myMealList.length, "this.myMealList.length======", t.myMealList), 
                                    t.coupons = "暂无优惠券", t.couponInfo = 0, t.couponid = ""));

                                  case 5:
                                  case "end":
                                    return o.stop();
                                }
                            }, o);
                        }))();
                    },
                    myVoucher: function() {
                        var t = this;
                        return u(s.default.mark(function o() {
                            var r;
                            return s.default.wrap(function(o) {
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
                                    }), 0 != t.myMealList.length ? t.vouchers = "请选择代金券" : (console.log(t.myMealList.length, "this.myMealList.length======", t.myMealList), 
                                    t.vouchers = "暂无代金券"), console.log("我的代金券", r, t.myMealList));

                                  case 4:
                                  case "end":
                                    return o.stop();
                                }
                            }, o);
                        }))();
                    },
                    seatcheckeBox: function(e) {
                        this.list.filter(function(t) {
                            e == t.id ? (t.seatInfo = 1 != t.seatInfo, console.log(e, "id------", t.id)) : (t.seatInfo = !1, 
                            console.log(e, "id22222222------", t.id)), console.log("x.seatInfo ========", t.seatInfo);
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
                        console.log(this.vouchers, "this.voucherName满无门槛", "this.less", this.voucherInfos, "==", this.voucherid)), 
                        console.log("count===============", t);
                    },
                    checkeBox: function(e) {
                        this.couponList.filter(function(t) {
                            e == t.id ? (t.checkCoupon = 1 != t.checkCoupon, console.log(e, "id------", t.id)) : (t.checkCoupon = !1, 
                            console.log(e, "id22222222------", t.id)), console.log("x.checkCoupon ========", t.checkCoupon);
                        });
                        var t = 0;
                        this.couponList.filter(function(e) {
                            1 != e.checkCoupon || (t = e);
                        }), 0 == t ? (this.coupons = "暂无优惠券", this.couponInfo = 0, this.couponid = "") : (console.log("优惠券id", t.id), 
                        1 == t.type ? (this.coupons = "满" + t.full + "减" + t.less, this.couponInfo = t.less, 
                        console.log(this.coupons, "this.couponName满减", "this.less", this.couponInfo)) : 2 == t.type && (this.coupons = "无门槛" + t.less, 
                        this.couponInfo = t.less, console.log(this.coupons, "this.couponName满无门槛", "this.less", this.couponInfo)), 
                        this.couponid = t.id), console.log("count===============", t);
                    },
                    closeDialog: function() {
                        console.log("couponLithis.yhjId", this.yhjId), console.log("couponList=================", this.couponList), 
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
                        return u(s.default.mark(function o() {
                            var r;
                            return s.default.wrap(function(o) {
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
                        var e = getCurrentPages(), t = e[e.length - 2], o = this.options.type;
                        if (1 == o) {
                            var s = t.$vm.detail;
                            this.orderInfo = s, console.log(this.orderInfo, "this.orderInfo"), this.maxNum = Number(this.orderInfo.stock), 
                            console.log(this.maxNum, this.orderInfo, this.orderInfo.freight, "上个页面返回购物车-----------------------------------------------------------------------------");
                        } else this.orderList = t.$vm.shopCartList, console.log("上个页面返回购物车2-----------------------------------------------------------------------------", this.orderList), 
                        this.orderList = this.orderList.filter(function(e) {
                            return e.checked;
                        });
                    },
                    getAddress: function() {
                        var t = this;
                        return u(s.default.mark(function o() {
                            var r;
                            return s.default.wrap(function(o) {
                                while (1) switch (o.prev = o.next) {
                                  case 0:
                                    return o.next = 2, t.$http({
                                        url: t.$api.Get_address,
                                        data: {
                                            uid: e.getStorageSync("uid").id
                                        }
                                    });

                                  case 2:
                                    r = o.sent, 0 == r.errno && (0 == r.data.length ? t.defaultFlag = !0 : (t.defaultFlag = !1, 
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
                        return u(s.default.mark(function t() {
                            var o;
                            return s.default.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, e.$http({
                                        url: e.$api.system
                                    });

                                  case 2:
                                    o = t.sent, 0 == o.errno && (e.system = o.data, e.kfTemplate = o.data.notice.kf_template, 
                                    console.log("系统设置 打印", e.kfTemplate, e.tempId, e.successTemplate, e.brTemplate)), 
                                    console.log("systemInfo", o, "this.tempId", e.tempId);

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
                                        var o = u(s.default.mark(function o(r) {
                                            return s.default.wrap(function(o) {
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
                                    fail: function(e) {
                                        console.log("失败", e);
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
                                var t = u(s.default.mark(function t() {
                                    return s.default.wrap(function(t) {
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
                        return u(s.default.mark(function t() {
                            var n, i, a, c, l, d, p, f;
                            return s.default.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                  case 0:
                                    if (n = Number(Number(o.voucherInfos) + Number(o.couponInfo)).toFixed(2), console.log("减去的折扣----------", n), 
                                    i = 1 == o.options.type ? o.totalDetail : o.totalCart, i = Number(Number(i) - Number(o.voucherInfos)) < 0 ? 0 : Number(Number(i) - Number(o.couponInfo) - Number(o.voucherInfos)).toFixed(2), 
                                    1 != o.scanCode) {
                                        t.next = 12;
                                        break;
                                    }
                                    return console.log("进入扫码点餐 加菜=========", o.scanCode), t.next = 8, o.$http({
                                        url: o.$api.add_foods_order,
                                        method: "POST",
                                        data: {
                                            voucher_id: o.voucherid,
                                            plugin_type: 1,
                                            seat_number: o.seatNumberID,
                                            receipt_type: o.actives + 1,
                                            pay_type: "",
                                            uid: e.getStorageSync("uid").id,
                                            real_payment: i,
                                            status: 2,
                                            type: o.options.type,
                                            unit_price: o.orderInfo.original_price,
                                            num: o.numa,
                                            goods_id: o.orderInfo.id,
                                            list: o.orderList,
                                            remark: o.beizhu,
                                            price: Number(sum).toFixed(2),
                                            spec: o.spec,
                                            store_name: o.storeName,
                                            store_id: o.stores
                                        }
                                    });

                                  case 8:
                                    a = t.sent, 0 == a.errno ? (o.$sun.toast(a.message), o.useCoupons(), setTimeout(function() {
                                        e.redirectTo({
                                            url: "/packages/takeawayOrder/orderMessage/orderMessage?index=2"
                                        });
                                    }, 1800)) : (r.default.releaseKey("submit"), o.$sun.toast(a.message)), t.next = 49;
                                    break;

                                  case 12:
                                    if (1 != o.applyType) {
                                        t.next = 29;
                                        break;
                                    }
                                    if (0 != i && 0 != i && 0 != i) {
                                        t.next = 23;
                                        break;
                                    }
                                    return console.log("进入零元免微信支付"), t.next = 17, o.$http({
                                        url: o.$api.add_foods_order,
                                        method: "POST",
                                        data: {
                                            voucher_id: o.voucherid,
                                            plugin_type: 1,
                                            seat_number: o.seatNumberID,
                                            receipt_type: o.actives + 1,
                                            pe_number: 0 == o.actives ? o.peopleAll : "",
                                            member_discount: o.memberDiscount,
                                            pay_type: o.applyType,
                                            uid: e.getStorageSync("uid").id,
                                            province: o.address.province,
                                            city: o.address.city,
                                            district: o.address.district,
                                            address: o.address.address,
                                            real_payment: i,
                                            mobile: 0 == o.actives ? o.addressPhone : o.address.mobile,
                                            realname: o.address.realname,
                                            status: 2,
                                            type: o.options.type,
                                            unit_price: o.orderInfo.original_price,
                                            num: o.numa,
                                            goods_id: o.orderInfo.id,
                                            list: o.orderList,
                                            coupon_id: o.couponid,
                                            remark: o.beizhu,
                                            discount: n,
                                            price: Number(sum).toFixed(2),
                                            spec: o.spec,
                                            freight: o.options.freight,
                                            store_name: o.storeName,
                                            store_id: o.stores,
                                            need_integral: ""
                                        }
                                    });

                                  case 17:
                                    c = t.sent, o.$sun.toast(c.message), o.aa = c.original_price, 0 == c.errno ? (o.useCoupons(), 
                                    e.redirectTo({
                                        url: "/packages/takeawayOrder/orderMessage/orderMessage?index=2"
                                    }), console.log("this.address.mobile", o.address.mobile, "unit_price: this.original_price,", o.orderInfo.original_price)) : r.default.releaseKey("submit"), 
                                    t.next = 27;
                                    break;

                                  case 23:
                                    return t.next = 25, o.$http({
                                        url: o.$api.pay,
                                        data: {
                                            uid: e.getStorageSync("uid").id,
                                            openid: wx.getStorageSync("openid"),
                                            price: i
                                        }
                                    });

                                  case 25:
                                    l = t.sent, 0 == l.code && (d = l.data, o.$sun.wePay(d, function() {
                                        var t = u(s.default.mark(function t(a) {
                                            var u;
                                            return s.default.wrap(function(t) {
                                                while (1) switch (t.prev = t.next) {
                                                  case 0:
                                                    return console.log("进入微信支付"), t.next = 3, o.$http({
                                                        url: o.$api.add_foods_order,
                                                        method: "POST",
                                                        data: {
                                                            voucher_id: o.voucherid,
                                                            plugin_type: 1,
                                                            seat_number: o.seatNumberID,
                                                            receipt_type: o.actives + 1,
                                                            pe_number: 0 == o.actives ? o.peopleAll : "",
                                                            member_discount: o.memberDiscount,
                                                            pay_type: o.applyType,
                                                            uid: e.getStorageSync("uid").id,
                                                            province: o.address.province,
                                                            city: o.address.city,
                                                            district: o.address.district,
                                                            address: o.address.address,
                                                            real_payment: i,
                                                            mobile: 0 == o.actives ? o.addressPhone : o.address.mobile,
                                                            realname: o.address.realname,
                                                            status: 2,
                                                            type: o.options.type,
                                                            unit_price: o.orderInfo.original_price,
                                                            num: o.numa,
                                                            goods_id: o.orderInfo.id,
                                                            list: o.orderList,
                                                            coupon_id: o.couponid,
                                                            discount: n,
                                                            remark: o.beizhu,
                                                            price: Number(sum).toFixed(2),
                                                            spec: o.spec,
                                                            freight: o.options.freight,
                                                            store_name: o.storeName,
                                                            store_id: o.stores,
                                                            need_integral: ""
                                                        }
                                                    });

                                                  case 3:
                                                    u = t.sent, o.$sun.toast(u.message), o.aa = u.original_price, 0 == u.errno ? (o.useCoupons(), 
                                                    e.redirectTo({
                                                        url: "/packages/takeawayOrder/orderMessage/orderMessage?index=2"
                                                    }), console.log("this.address.mobile", o.address.mobile, "unit_price: this.original_price,", o.orderInfo.original_price)) : r.default.releaseKey("submit");

                                                  case 7:
                                                  case "end":
                                                    return t.stop();
                                                }
                                            }, t);
                                        }));
                                        return function(e) {
                                            return t.apply(this, arguments);
                                        };
                                    }(), function() {
                                        var t = u(s.default.mark(function t(a) {
                                            var u;
                                            return s.default.wrap(function(t) {
                                                while (1) switch (t.prev = t.next) {
                                                  case 0:
                                                    if (console.log("进入待支付状态", a), -1 == JSON.parse(a).errMsg.indexOf("requestPayment:fail cancel")) {
                                                        t.next = 8;
                                                        break;
                                                    }
                                                    return t.next = 4, o.$http({
                                                        url: o.$api.add_foods_order,
                                                        method: "POST",
                                                        data: {
                                                            voucher_id: o.voucherid,
                                                            plugin_type: 1,
                                                            seat_number: o.seatNumberID,
                                                            receipt_type: o.actives + 1,
                                                            pe_number: 0 == o.actives ? o.peopleAll : "",
                                                            member_discount: o.memberDiscount,
                                                            pay_type: o.applyType,
                                                            uid: e.getStorageSync("uid").id,
                                                            province: o.address.province,
                                                            city: o.address.city,
                                                            district: o.address.district,
                                                            address: o.address.address,
                                                            real_payment: i,
                                                            mobile: 0 == o.actives ? o.addressPhone : o.address.mobile,
                                                            realname: o.address.realname,
                                                            status: 1,
                                                            type: o.options.type,
                                                            unit_price: o.orderInfo.original_price,
                                                            num: o.numa,
                                                            goods_id: o.orderInfo.id,
                                                            remark: o.beizhu,
                                                            list: o.orderList,
                                                            coupon_id: o.couponid,
                                                            discount: n,
                                                            price: Number(sum).toFixed(2),
                                                            store_name: o.storeName,
                                                            store_id: o.stores,
                                                            need_integral: ""
                                                        }
                                                    });

                                                  case 4:
                                                    u = t.sent, 0 == u.errno ? (console.log("this.address.mobile", o.address.mobile, "unit_price: this.original_price,", o.orderInfo.original_price), 
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

                                  case 27:
                                    t.next = 49;
                                    break;

                                  case 29:
                                    if (2 != o.applyType) {
                                        t.next = 48;
                                        break;
                                    }
                                    if (console.log("余额支付", o.balance, i), !(Number(o.balance) < Number(i))) {
                                        t.next = 38;
                                        break;
                                    }
                                    return console.log("余额支付", o.balance, i), o.$sun.toast("您的余额不足，请使用微信支付."), r.default.releaseKey("submit"), 
                                    t.abrupt("return");

                                  case 38:
                                    return t.next = 40, o.$http({
                                        url: o.$api.balance_pay,
                                        data: {
                                            uid: e.getStorageSync("uid").id,
                                            price: i,
                                            pay_type: o.applyType
                                        }
                                    });

                                  case 40:
                                    if (p = t.sent, 0 != p.errno) {
                                        t.next = 46;
                                        break;
                                    }
                                    return t.next = 44, o.$http({
                                        url: o.$api.add_foods_order,
                                        method: "POST",
                                        data: {
                                            voucher_id: o.voucherid,
                                            plugin_type: 1,
                                            seat_number: o.seatNumberID,
                                            receipt_type: o.actives + 1,
                                            pe_number: 0 == o.actives ? o.peopleAll : "",
                                            member_discount: o.memberDiscount,
                                            pay_type: o.applyType,
                                            uid: e.getStorageSync("uid").id,
                                            province: o.address.province,
                                            city: o.address.city,
                                            district: o.address.district,
                                            address: o.address.address,
                                            real_payment: i,
                                            mobile: 0 == o.actives ? o.addressPhone : o.address.mobile,
                                            realname: o.address.realname,
                                            status: 2,
                                            type: o.options.type,
                                            unit_price: o.orderInfo.original_price,
                                            num: o.numa,
                                            goods_id: o.orderInfo.id,
                                            list: o.orderList,
                                            remark: o.beizhu,
                                            coupon_id: o.couponid,
                                            discount: n,
                                            price: Number(sum).toFixed(2),
                                            spec: o.spec,
                                            freight: o.options.freight,
                                            store_name: o.storeName,
                                            store_id: o.stores,
                                            need_integral: ""
                                        }
                                    });

                                  case 44:
                                    f = t.sent, 0 == f.errno ? (o.$sun.toast(f.message), o.useCoupons(), setTimeout(function() {
                                        e.redirectTo({
                                            url: "/packages/takeawayOrder/orderMessage/orderMessage?index=2"
                                        });
                                    }, 1800)) : (r.default.releaseKey("submit"), o.$sun.toast(f.message));

                                  case 46:
                                    t.next = 49;
                                    break;

                                  case 48:
                                    r.default.releaseKey("submit");

                                  case 49:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    numberChange: function(e, t) {
                        console.log("assssssssss", e, t), this.totalCount = e, this.coupons = "暂无优惠券", this.couponInfo = 0, 
                        console.log(this.totalCount, e, "this.totalCount暂无优惠券");
                        for (var o = this.orderList, s = 0; s < o.length; s++) this.orderList[s].goods_id == t && (o[s].num = e);
                    }
                })
            };
            t.default = g;
        }).call(this, o("543d")["default"]);
    },
    8257: function(e, t, o) {
        "use strict";
        o.r(t);
        var s = o("c79b"), r = o("aec1");
        for (var n in r) "default" !== n && function(e) {
            o.d(t, e, function() {
                return r[e];
            });
        }(n);
        o("2aa2");
        var i, a = o("f0c5"), u = Object(a["a"])(r["default"], s["b"], s["c"], !1, null, null, null, !1, s["a"], i);
        t["default"] = u.exports;
    },
    aec1: function(e, t, o) {
        "use strict";
        o.r(t);
        var s = o("6b17"), r = o.n(s);
        for (var n in s) "default" !== n && function(e) {
            o.d(t, e, function() {
                return s[e];
            });
        }(n);
        t["default"] = r.a;
    },
    c79b: function(e, t, o) {
        "use strict";
        o.d(t, "b", function() {
            return r;
        }), o.d(t, "c", function() {
            return n;
        }), o.d(t, "a", function() {
            return s;
        });
        var s = {
            sunuiCell: function() {
                return o.e("components/sunui-cell/sunui-cell").then(o.bind(null, "cf30"));
            },
            sunuiPopup: function() {
                return o.e("components/sunui-popup/sunui-popup").then(o.bind(null, "6cf4"));
            }
        }, r = function() {
            var e = this, t = e.$createElement, o = (e._self._c, Number(e.userInfo.curDiscount)), s = o ? Number(e.userInfo.curDiscount).toFixed(1) : null, r = Number(e.sum).toFixed(2), n = Number(parseFloat(e.totalCart).toFixed(2) - parseFloat(e.voucherInfos).toFixed(2)), i = n < 0 ? null : Number(parseFloat(e.totalCart).toFixed(2) - parseFloat(e.couponInfo).toFixed(2) - parseFloat(e.voucherInfos).toFixed(2)).toFixed(2), a = 0 != e.couponList.length ? e.__map(e.couponList, function(t, o) {
                var s = e.__get_orig(t), r = Number(t.less).toFixed(0);
                return {
                    $orig: s,
                    g3: r
                };
            }) : null;
            e.$mp.data = Object.assign({}, {
                $root: {
                    m0: o,
                    g0: s,
                    g1: r,
                    m1: n,
                    g2: i,
                    l0: a
                }
            });
        }, n = [];
    },
    ebc3: function(e, t, o) {
        "use strict";
        (function(e) {
            o("cee1");
            s(o("66fd"));
            var t = s(o("8257"));
            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            e(t.default);
        }).call(this, o("543d")["createPage"]);
    }
}, [ [ "ebc3", "common/runtime", "common/vendor" ] ] ]);