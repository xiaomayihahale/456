(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/takeawayOrder/scanCodeOder/scanCodeOder" ], {
    2869: function(e, t, o) {
        "use strict";
        o.r(t);
        var r = o("de1c"), n = o.n(r);
        for (var s in r) "default" !== s && function(e) {
            o.d(t, e, function() {
                return r[e];
            });
        }(s);
        t["default"] = n.a;
    },
    5838: function(e, t, o) {},
    6157: function(e, t, o) {
        "use strict";
        o.d(t, "b", function() {
            return n;
        }), o.d(t, "c", function() {
            return s;
        }), o.d(t, "a", function() {
            return r;
        });
        var r = {
            sunuiCell: function() {
                return o.e("components/sunui-cell/sunui-cell").then(o.bind(null, "cf30"));
            }
        }, n = function() {
            var e = this, t = e.$createElement, o = (e._self._c, 1 != e.options.personnelCode ? Number(e.userInfo.curDiscount) : null), r = 1 != e.options.personnelCode && o ? Number(e.userInfo.curDiscount).toFixed(1) : null, n = Number(e.sum).toFixed(2), s = 1 == e.options.personnelCode ? Number(e.totalCart2).toFixed(2) : null, i = 1 != e.options.personnelCode ? Number(parseFloat(e.totalCart).toFixed(2) - parseFloat(e.voucherInfos).toFixed(2)) : null, a = 1 == e.options.personnelCode || i < 0 ? null : Number(parseFloat(e.totalCart).toFixed(2) - parseFloat(e.couponInfo).toFixed(2) - parseFloat(e.voucherInfos).toFixed(2)).toFixed(2);
            e.$mp.data = Object.assign({}, {
                $root: {
                    m0: o,
                    g0: r,
                    g1: n,
                    g2: s,
                    m1: i,
                    g3: a
                }
            });
        }, s = [];
    },
    a88e: function(e, t, o) {
        "use strict";
        var r = o("5838"), n = o.n(r);
        n.a;
    },
    bae8: function(e, t, o) {
        "use strict";
        o.r(t);
        var r = o("6157"), n = o("2869");
        for (var s in n) "default" !== s && function(e) {
            o.d(t, e, function() {
                return n[e];
            });
        }(s);
        o("a88e");
        var i, a = o("f0c5"), u = Object(a["a"])(n["default"], r["b"], r["c"], !1, null, null, null, !1, r["a"], i);
        t["default"] = u.exports;
    },
    de1c: function(e, t, o) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = i(o("a34a")), n = i(o("0747")), s = o("2f62");
            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function a(e, t, o, r, n, s, i) {
                try {
                    var a = e[s](i), u = a.value;
                } catch (c) {
                    return void o(c);
                }
                a.done ? t(u) : Promise.resolve(u).then(r, n);
            }
            function u(e) {
                return function() {
                    var t = this, o = arguments;
                    return new Promise(function(r, n) {
                        var s = e.apply(t, o);
                        function i(e) {
                            a(s, r, n, i, u, "next", e);
                        }
                        function u(e) {
                            a(s, r, n, i, u, "throw", e);
                        }
                        i(void 0);
                    });
                };
            }
            function c(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), o.push.apply(o, r);
                }
                return o;
            }
            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(o), !0).forEach(function(t) {
                        l(e, t, o[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : c(Object(o)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t));
                    });
                }
                return e;
            }
            function l(e, t, o) {
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
                        var r = 0, n = function() {};
                        return {
                            s: n,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                };
                            },
                            e: function(e) {
                                throw e;
                            },
                            f: n
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
                    if ("string" === typeof e) return m(e, t);
                    var o = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === o && e.constructor && (o = e.constructor.name), "Map" === o || "Set" === o ? Array.from(e) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? m(e, t) : void 0;
                }
            }
            function m(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var o = 0, r = new Array(t); o < t; o++) r[o] = e[o];
                return r;
            }
            var h = function() {
                Promise.all([ o.e("common/vendor"), o.e("components/biaofun-datetime-picker") ]).then(function() {
                    return resolve(o("2bf5"));
                }.bind(null, o)).catch(o.oe);
            }, g = {
                components: {
                    biaofunDatetimePicker: h
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
                        scanCode: 2,
                        placeOrder: ""
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
                        return console.log("sum合============", e, "this.orderList==", this.orderList), this.orderList.forEach(function(t) {
                            console.log("p", t), 1 == t.checked && (e += Number(parseFloat(t.num).toFixed(2) * parseFloat(t.spec_price).toFixed(2)));
                        }), console.log("sum合============", e, "this.orderList==", this.orderList), e;
                    },
                    totalCart: function() {
                        var e, t = 0, o = this.orderList, r = p(o);
                        try {
                            for (r.s(); !(e = r.n()).done; ) {
                                var n = e.value, s = Number(n.spec_price), i = Number(n.num);
                                if (console.log("dissssssssssssssssssss购物车的计算总金额*********", i), 1 == n.checked) if (0 == this.userInfo.curDiscount) t += s * i; else {
                                    var a = s * i, u = Number(this.userInfo.curDiscount) / 10;
                                    t += a * Number(u);
                                }
                            }
                        } catch (c) {
                            r.e(c);
                        } finally {
                            r.f();
                        }
                        return t;
                    },
                    totalCart2: function() {
                        var e, t = 0, o = this.orderList, r = p(o);
                        try {
                            for (r.s(); !(e = r.n()).done; ) {
                                var n = e.value, s = Number(n.spec_price), i = Number(n.num);
                                console.log("dissssssssssssssssssss购物车的计算总金额*********", i), 1 == n.checked && (t += s * i);
                            }
                        } catch (a) {
                            r.e(a);
                        } finally {
                            r.f();
                        }
                        return t;
                    },
                    totalDetail: function() {
                        console.log("zongjiajdd=====================================");
                        var e = Number(this.orderInfo.spec_price);
                        if (0 == this.userInfo.curDiscount) return void 0 == this.orderInfo.freight ? this.totalCount * e : this.totalCount * e + Number(this.orderInfo.freight);
                        var t = Number(this.userInfo.curDiscount) / 10;
                        return this.totalCount * e * Number(t) + Number(this.orderInfo.freight);
                    }
                },
                onShow: function() {
                    console.log(this.ydtime, "ydtime======="), this.storeJuli = e.getStorageSync("storeJuli"), 
                    this.stores = e.getStorageSync("storeEatNexts"), this.storeName = e.getStorageSync("storeEatNextNames"), 
                    this.seat_id = wx.getStorageSync("seatId"), this.getAddress(), n.default.releaseKey("submit");
                    var t = getCurrentPages(), o = t[t.length - 1];
                    this.addressid = o.data.address, 1 == this.addressid && (this.addressPhone = o.data.mydata, 
                    this.peopleAll = o.data.mypeople, console.log(o.data.mydata, shopList, this.peopleAll, "currPage.data.mydatacurrPage.data.mydatacurrPage.data.mydata"));
                },
                onLoad: function(e) {
                    this.getShopList(), this.options = e, this.byseatInfoID = wx.getStorageSync("storeEatOrderID"), 
                    this.placeOrder = e.placeOrder, this.typees = e.type, this.actives = e.actives, 
                    this.scanCode = e.scanCode, this.getSystem(), this.userInfoes(), this.spec = e.spec, 
                    this.muns = Number(e.num), console.log("是否积分商城商品--options-----", this.options, "this.actives====", this.actives);
                },
                onShareAppMessage: function() {},
                methods: d(d({
                    getDate: function(e) {
                        var t = new Date(), o = t.getFullYear(), r = t.getMonth() + 1, n = t.getDate();
                        return "start" === e ? o -= 60 : "end" === e && (o += 2), r = r > 9 ? r : "0" + r, 
                        n = n > 9 ? n : "0" + n, "".concat(o, "-").concat(r, "-").concat(n);
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
                        return u(r.default.mark(function o() {
                            var n, s;
                            return r.default.wrap(function(o) {
                                while (1) switch (o.prev = o.next) {
                                  case 0:
                                    return o.next = 2, t.$http({
                                        url: t.$api.userhy,
                                        data: {
                                            uid: e.getStorageSync("uid").id
                                        }
                                    });

                                  case 2:
                                    n = o.sent, 0 == n.errno && (t.userInfo = n.data, t.balance = t.userInfo.money, 
                                    console.log(t.balance, t.userInfo, "this.userInfo"), t.userInfo.curDiscount ? (s = Number(Number(t.userInfo.curDiscount) / 10 * t.sum).toFixed(2), 
                                    t.memberDiscount = Number(t.sum - s).toFixed(2), console.log("实付框，有折扣-----------------", t.memberDiscount)) : (t.memberDiscount = 0, 
                                    console.log("实付框无折扣--------------", t.memberDiscount)));

                                  case 4:
                                  case "end":
                                    return o.stop();
                                }
                            }, o);
                        }))();
                    },
                    getShopList: function() {
                        var e = this, t = getCurrentPages(), o = t[t.length - 2], r = this.options.type;
                        if (1 == r) {
                            var n = o.$vm.detail;
                            this.orderInfo = n, console.log(this.orderInfo, "this.orderInfo"), this.maxNum = Number(this.orderInfo.stock), 
                            console.log(this.maxNum, this.orderInfo, this.orderInfo.freight, "上个页面返回购物车-----------------------------------------------------------------------------");
                        } else this.orderList = o.$vm.shopCartList, console.log("上个页面返回购物车2-----------------------------------------------------------------------------", this.orderList), 
                        this.orderList = this.orderList.filter(function(t) {
                            return e.$set(t, "original_price", t.spec_price), t.checked;
                        });
                    },
                    getAddress: function() {
                        var t = this;
                        return u(r.default.mark(function o() {
                            var n;
                            return r.default.wrap(function(o) {
                                while (1) switch (o.prev = o.next) {
                                  case 0:
                                    return o.next = 2, t.$http({
                                        url: t.$api.Get_address,
                                        data: {
                                            uid: e.getStorageSync("uid").id
                                        }
                                    });

                                  case 2:
                                    n = o.sent, 0 == n.errno && (0 == n.data.length ? t.defaultFlag = !0 : (t.defaultFlag = !1, 
                                    t.address = n.data), console.log("默认地址", n));

                                  case 4:
                                  case "end":
                                    return o.stop();
                                }
                            }, o);
                        }))();
                    },
                    getSystem: function() {
                        var e = this;
                        return u(r.default.mark(function t() {
                            var o;
                            return r.default.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, e.$http({
                                        url: e.$api.system
                                    });

                                  case 2:
                                    o = t.sent, 0 == o.errno && (e.system = o.data);

                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    chongzhi: function() {
                        var e = this;
                        console.log("选好了=================="), n.default.uniDoFunc({
                            key: "submit",
                            success: function() {
                                var t = u(r.default.mark(function t() {
                                    return r.default.wrap(function(t) {
                                        while (1) switch (t.prev = t.next) {
                                          case 0:
                                            n.default.lockKey("submit"), console.log("防抖... 在事件触发前连续点击事件会重新计时"), e.orderSubmit();

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
                        return u(r.default.mark(function t() {
                            var s, i, a, u, c, d, l;
                            return r.default.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                  case 0:
                                    if (s = Number(Number(o.voucherInfos) + Number(o.couponInfo)).toFixed(2), console.log("减去的折扣----------", s), 
                                    i = 1 == o.options.type ? o.totalDetail : o.totalCart, i = Number(Number(i) - Number(o.voucherInfos)) < 0 ? 0 : Number(Number(i) - Number(o.couponInfo) - Number(o.voucherInfos)).toFixed(2), 
                                    1 != o.scanCode && 1 != o.options.personnelCode) {
                                        t.next = 24;
                                        break;
                                    }
                                    if (a = Number(Number(o.voucherInfos) + Number(o.couponInfo)).toFixed(2), console.log("减去的折扣----------", a), 
                                    u = 1 == o.options.type ? o.totalDetail : o.totalCart, 1 != o.placeOrder) {
                                        t.next = 19;
                                        break;
                                    }
                                    return console.log("进入扫码点餐 第一次扫码点餐跳转页=========", o.scanCode), c = Number(parseInt(o.actives) + 1), 
                                    console.log("activeType-------", c), u = Number(Number(u) - Number(o.voucherInfos)) < 0 ? 0 : Number(Number(u) - Number(o.couponInfo) - Number(o.voucherInfos)).toFixed(2), 
                                    t.next = 15, o.$http({
                                        url: o.$api.add_foods_order,
                                        method: "POST",
                                        data: {
                                            voucher_id: 1 == o.options.orderPerType ? o.voucherid : "",
                                            plugin_type: 1,
                                            seat_number: o.seat_id,
                                            pickup_type: 1,
                                            receipt_type: "",
                                            pe_number: 0 == o.actives ? o.peopleAll : "",
                                            member_discount: 1 == o.options.orderPerType ? o.memberDiscount : "",
                                            pay_type: o.applyType,
                                            uid: 1 == o.options.personnelCode ? wx.getStorageSync("login").id : e.getStorageSync("uid").id,
                                            real_payment: 1 == o.options.personnelCode ? Number(o.sum).toFixed(2) : u,
                                            mobile: 0 == o.actives ? o.addressPhone : o.address.mobile,
                                            status: 1,
                                            type: 2,
                                            unit_price: o.orderInfo.spec_price,
                                            num: o.numa,
                                            goods_id: o.orderInfo.id,
                                            remark: o.beizhu,
                                            list: o.orderList,
                                            coupon_id: 1 == o.options.orderPerType ? o.couponid : "",
                                            discount: 1 == o.options.orderPerType ? a : "",
                                            price: Number(o.sum).toFixed(2),
                                            store_name: o.storeName,
                                            store_id: o.stores,
                                            order_per_type: o.options.orderPerType ? o.options.orderPerType : "",
                                            mid: o.options.userMid ? o.options.userMid : ""
                                        }
                                    });

                                  case 15:
                                    d = t.sent, 0 == d.errno && (console.log("this.address.mobile", o.address.mobile, "unit_price: this.original_price,", o.orderInfo.original_price), 
                                    1 == o.options.personnelCode ? e.reLaunch({
                                        url: "/packages/takeawayOrder/successOrder/successOrder"
                                    }) : e.reLaunch({
                                        url: "/packages/takeawayOrder/orderMessage/orderMessage?index=1&scanCode=1"
                                    })), t.next = 24;
                                    break;

                                  case 19:
                                    return console.log("进入扫码点餐 加菜加菜=========", o.scanCode), t.next = 22, o.$http({
                                        url: o.$api.agin_order,
                                        method: "POST",
                                        data: {
                                            id: o.byseatInfoID,
                                            plugin_type: 1,
                                            pay_type: "",
                                            member_discount: 1 == o.options.orderPerType ? o.memberDiscount : "",
                                            uid: 1 == o.options.personnelCode ? wx.getStorageSync("login").id : e.getStorageSync("uid").id,
                                            real_payment: 1 == o.options.personnelCode ? Number(o.sum).toFixed(2) : u,
                                            discount: 1 == o.options.orderPerType ? a : "",
                                            status: 1,
                                            type: o.options.type,
                                            unit_price: o.orderInfo.spec_price,
                                            num: o.numa,
                                            goods_id: o.orderInfo.id,
                                            list: o.orderList,
                                            remark: o.beizhu,
                                            price: o.sum,
                                            spec: o.spec,
                                            store_name: o.storeName,
                                            store_id: o.stores
                                        }
                                    });

                                  case 22:
                                    l = t.sent, 0 == l.errno ? (o.$sun.toast(l.message), 1 == o.options.personnelCode ? e.reLaunch({
                                        url: "/packages/takeawayOrder/successOrder/successOrder?addEat=1"
                                    }) : setTimeout(function() {
                                        e.reLaunch({
                                            url: "/packages/takeawayOrder/orderMessage/orderMessage?index=1&scanCode=1"
                                        });
                                    }, 1800)) : (n.default.releaseKey("submit"), o.$sun.toast(l.message));

                                  case 24:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    }
                })
            };
            t.default = g;
        }).call(this, o("543d")["default"]);
    },
    fe80: function(e, t, o) {
        "use strict";
        (function(e) {
            o("cee1");
            r(o("66fd"));
            var t = r(o("bae8"));
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            e(t.default);
        }).call(this, o("543d")["createPage"]);
    }
}, [ [ "fe80", "common/runtime", "common/vendor" ] ] ]);