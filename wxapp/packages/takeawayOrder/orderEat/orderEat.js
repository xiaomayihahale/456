(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/takeawayOrder/orderEat/orderEat" ], {
    2655: function(e, t, o) {
        "use strict";
        o.r(t);
        var n = o("f76f"), r = o.n(n);
        for (var s in n) "default" !== s && function(e) {
            o.d(t, e, function() {
                return n[e];
            });
        }(s);
        t["default"] = r.a;
    },
    "6e20": function(e, t, o) {
        "use strict";
        o.r(t);
        var n = o("9d6f"), r = o("2655");
        for (var s in r) "default" !== s && function(e) {
            o.d(t, e, function() {
                return r[e];
            });
        }(s);
        o("d053"), o("f24f");
        var i, a = o("f0c5"), u = Object(a["a"])(r["default"], n["b"], n["c"], !1, null, "39f2846b", null, !1, n["a"], i);
        t["default"] = u.exports;
    },
    "755d": function(e, t, o) {},
    "8a82": function(e, t, o) {},
    "9d6f": function(e, t, o) {
        "use strict";
        o.d(t, "b", function() {
            return r;
        }), o.d(t, "c", function() {
            return s;
        }), o.d(t, "a", function() {
            return n;
        });
        var n = {
            sunuiPopup: function() {
                return o.e("components/sunui-popup/sunui-popup").then(o.bind(null, "6cf4"));
            },
            sunuiCell: function() {
                return o.e("components/sunui-cell/sunui-cell").then(o.bind(null, "cf30"));
            }
        }, r = function() {
            var e = this, t = e.$createElement, o = (e._self._c, 1 == e.order.pickup_type && 1 == e.order.order_per_type ? Number(e.amount).toFixed(2) : null), n = 1 == e.order.pickup_type && 1 != e.order.order_per_type ? Number(e.amounts).toFixed(2) : null, r = 0 == e.order.pickup_type ? Number(e.order.real_payment).toFixed(2) : null, s = Number(e.sum).toFixed(2), i = 1 == e.byseatInfo.order_per_type ? Number(e.userInfo.curDiscount) : null, a = 1 == e.byseatInfo.order_per_type && i ? Number(e.userInfo.curDiscount).toFixed(1) : null, u = 1 == e.byseatInfo.order_per_type ? Number(parseFloat(e.totalCart).toFixed(2) - parseFloat(e.voucherInfos).toFixed(2)) : null, c = 1 != e.byseatInfo.order_per_type || u < 0 ? null : Number(parseFloat(e.totalCart).toFixed(2) - parseFloat(e.couponInfo).toFixed(2) - parseFloat(e.voucherInfos).toFixed(2)).toFixed(2), l = 2 == e.byseatInfo.order_per_type ? Number(e.sum).toFixed(2) : null, d = 0 != e.couponList.length ? e.__map(e.couponList, function(t, o) {
                var n = e.__get_orig(t), r = Number(t.less).toFixed(0);
                return {
                    $orig: n,
                    g7: r
                };
            }) : null;
            e.$mp.data = Object.assign({}, {
                $root: {
                    g0: o,
                    g1: n,
                    g2: r,
                    g3: s,
                    m0: i,
                    g4: a,
                    m1: u,
                    g5: c,
                    g6: l,
                    l0: d
                }
            });
        }, s = [];
    },
    a277: function(e, t, o) {
        "use strict";
        (function(e) {
            o("cee1");
            n(o("66fd"));
            var t = n(o("6e20"));
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            e(t.default);
        }).call(this, o("543d")["createPage"]);
    },
    d053: function(e, t, o) {
        "use strict";
        var n = o("8a82"), r = o.n(n);
        r.a;
    },
    f24f: function(e, t, o) {
        "use strict";
        var n = o("755d"), r = o.n(n);
        r.a;
    },
    f76f: function(e, t, o) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(o("a34a")), r = s(o("0747"));
            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function i(e, t, o, n, r, s, i) {
                try {
                    var a = e[s](i), u = a.value;
                } catch (c) {
                    return void o(c);
                }
                a.done ? t(u) : Promise.resolve(u).then(n, r);
            }
            function a(e) {
                return function() {
                    var t = this, o = arguments;
                    return new Promise(function(n, r) {
                        var s = e.apply(t, o);
                        function a(e) {
                            i(s, n, r, a, u, "next", e);
                        }
                        function u(e) {
                            i(s, n, r, a, u, "throw", e);
                        }
                        a(void 0);
                    });
                };
            }
            function u(e, t) {
                var o;
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (o = c(e)) || t && e && "number" === typeof e.length) {
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
            function c(e, t) {
                if (e) {
                    if ("string" === typeof e) return l(e, t);
                    var o = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === o && e.constructor && (o = e.constructor.name), "Map" === o || "Set" === o ? Array.from(e) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? l(e, t) : void 0;
                }
            }
            function l(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var o = 0, n = new Array(t); o < t; o++) n[o] = e[o];
                return n;
            }
            var d = {
                data: function() {
                    return {
                        options: {},
                        youhui1: this.$img.youhui1,
                        pi: 3.14159,
                        EARTH_RADIUS: 6378137,
                        juli: "",
                        isShow: !1,
                        order: {},
                        userMoney: "",
                        userInfo: {},
                        orderGoods: [],
                        byseatGoods: [],
                        byseatInfo: {},
                        storeListInfo: {},
                        scanCode: 2,
                        applyType: 1,
                        real_payment2: "",
                        price2: "",
                        couponInfo: 0,
                        vouchers: "",
                        voucherInfos: 0,
                        voucherid: "",
                        couponList: [],
                        stores: "",
                        storeName: "",
                        couponid: "",
                        coupons: "",
                        myMealList: [],
                        memberDiscount: "",
                        uid: ""
                    };
                },
                onShow: function() {
                    r.default.releaseKey("submit"), this.userInfoes(), this.storeLists(), this.myVoucher(), 
                    this.scanCode = wx.getStorageSync("scanCodes"), this.seat_id = wx.getStorageSync("seatId"), 
                    console.log("userInfoesoptions", "this.scanCode------", this.scanCode), 1 == this.scanCode ? this.infoByseat() : this.getOrderDetail();
                },
                onLoad: function(e) {
                    this.handleLogin(), this.options = e, this.stordIds = e.stordIds, console.log("this.options----------------", this.options);
                },
                computed: {
                    amount: function() {
                        var e = this, t = 0;
                        return this.orderGoods.forEach(function(o) {
                            if (0 == e.userInfo.curDiscount) t += o.num * o.unit_price; else {
                                var n = o.num * o.unit_price, r = Number(e.userInfo.curDiscount) / 10;
                                t += n * Number(r);
                            }
                        }), t;
                    },
                    amounts: function() {
                        var e = 0;
                        return this.orderGoods.forEach(function(t) {
                            e += t.num * t.unit_price;
                        }), e;
                    },
                    numa: function() {
                        var e = 0;
                        return this.orderGoods.forEach(function(t) {
                            e += Number(t.num);
                        }), e;
                    },
                    freight: function() {
                        var e = 0;
                        return this.orderGoods.forEach(function(t) {
                            e += Number(t.freight);
                        }), Number(e).toFixed(2);
                    },
                    sum: function() {
                        console.log("进入结算sum总金额");
                        var e = 0;
                        return this.byseatGoods.forEach(function(t) {
                            e += t.num * t.unit_price, console.log("sum总金额==========", e);
                        }), e;
                    },
                    totalCart: function() {
                        var e, t = 0, o = this.byseatGoods, n = u(o);
                        try {
                            for (n.s(); !(e = n.n()).done; ) {
                                var r = e.value;
                                console.log("item.unit_price", r.unit_price);
                                var s = Number(r.unit_price), i = Number(r.num);
                                if (0 == this.userInfo.curDiscount) t += s * i; else {
                                    var a = s * i, c = Number(this.userInfo.curDiscount) / 10;
                                    t += a * Number(c);
                                }
                            }
                        } catch (l) {
                            n.e(l);
                        } finally {
                            n.f();
                        }
                        return t;
                    }
                },
                methods: {
                    handleLogin: function() {
                        if (this.uid = e.getStorageSync("uid").id, this.uid) return !0;
                        e.navigateTo({
                            url: "/wjyk_nhyk/pages/login/login"
                        });
                    },
                    storeClick: function(t) {
                        console.log("跳转item", t), e.navigateTo({
                            url: "/packages/takeawayOrder/classification/classification"
                        }), wx.setStorageSync("storeEatNexts", t.store_id), wx.setStorageSync("storeEatNextNames", t.store_name);
                        parseFloat(t.store_addres_lat);
                        console.log(t.store_addres_lat, "this.latitude==========");
                        parseFloat(t.store_addres_lng);
                        console.log(t.store_addres_lng, "this.longitude=============");
                        var o = 3.141592653589793, n = parseFloat(t.store_addres_lat) - .0065, r = parseFloat(t.store_addres_lng) - .006, s = Math.sqrt(n * n + r * r) - 2e-5 * Math.sin(r * o), i = Math.atan2(r, n) - 3e-6 * Math.cos(n * o), a = (s * Math.cos(i)).toFixed(7), u = (s * Math.sin(i)).toFixed(7);
                        console.log("百度地图经纬度转腾讯地图经纬度", a, u);
                        var c = this, l = e.getStorageSync("lat"), d = e.getStorageSync("lng");
                        console.log("当前经纬度=========", l, d, "门店经纬度======", a, u);
                        var f = c.getGreatCircleDistance(l, d, a, u);
                        this.juli = parseInt(f / 1e3), wx.setStorageSync("storeJuli", this.juli), console.log("this.juli-----------", this.juli, "jl", f, c.getGreatCircleDistance(l, d, a, u), l, d, a, u);
                    },
                    getRad: function(e) {
                        return e * this.pi / 180;
                    },
                    getGreatCircleDistance: function(e, t, o, n) {
                        var r = this.getRad(e), s = this.getRad(o), i = r - s, a = this.getRad(t) - this.getRad(n), u = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(i / 2), 2) + Math.cos(r) * Math.cos(s) * Math.pow(Math.sin(a / 2), 2)));
                        return u *= this.EARTH_RADIUS, u = Math.round(1e4 * u) / 1e4, console.log("s----------", u), 
                        u;
                    },
                    addEat: function(t) {
                        console.log("跳转加菜item", t), 1 == this.options.personnelCode ? e.navigateTo({
                            url: "/packages/takeawayOrder/administrator-order-classification/administrator-order-classification?personnelCode=1&stordIds=" + t.store_id
                        }) : e.navigateTo({
                            url: "/packages/takeawayOrder/classification/classification?scanCode=1&stordIds=" + t.store_id
                        }), wx.setStorageSync("storeEatNexts", t.store_id), wx.setStorageSync("storeEatNextNames", t.store_name), 
                        wx.setStorageSync("storeEatOrderID", this.order.id);
                    },
                    BillPlease: function(e) {
                        this.infoByseat(e), this.goodsInfo = e, console.log("结账 this.goodsInfo==========", this.goodsInfo), 
                        this.$refs.popAll.show({
                            style: "background-color:#fff;width:100%;height:auto;overflow-x:auto;",
                            anim: "bottom",
                            position: "bottom",
                            topclose: !1,
                            titleStyle: "position: fixed;width: 100%;background: #fff;z-index: 999;border-bottom:1rpx solid #f7f7f7;"
                        });
                    },
                    closeDialog: function() {
                        this.$refs.popAll.close(), r.default.releaseKey("submit");
                    },
                    chongzhi: function() {
                        var e = this;
                        r.default.uniDoFunc({
                            key: "submit",
                            success: function() {
                                var t = a(n.default.mark(function t() {
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
                        return a(n.default.mark(function t() {
                            var s, i, u, c, l;
                            return n.default.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                  case 0:
                                    if (s = Number(Number(o.voucherInfos) + Number(o.couponInfo)).toFixed(2), console.log("减去的折扣----------", s), 
                                    i = o.totalCart, i = Number(Number(i) - Number(o.voucherInfos)) < 0 ? 0 : Number(Number(i) - Number(o.couponInfo) - Number(o.voucherInfos)).toFixed(2), 
                                    1 != o.applyType) {
                                        t.next = 16;
                                        break;
                                    }
                                    if (0 != i && 0 != i && 0 != i) {
                                        t.next = 10;
                                        break;
                                    }
                                    console.log("进入零元免微信支付"), o.addOrderInfo(), t.next = 14;
                                    break;

                                  case 10:
                                    return t.next = 12, o.$http({
                                        url: o.$api.pay,
                                        data: {
                                            uid: e.getStorageSync("uid").id,
                                            openid: wx.getStorageSync("openid"),
                                            price: i
                                        }
                                    });

                                  case 12:
                                    u = t.sent, 0 == u.code && (c = u.data, o.$sun.wePay(c, function() {
                                        var e = a(n.default.mark(function e(t) {
                                            return n.default.wrap(function(e) {
                                                while (1) switch (e.prev = e.next) {
                                                  case 0:
                                                    console.log("进入微信支付"), o.addOrderInfo();

                                                  case 2:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            }, e);
                                        }));
                                        return function(t) {
                                            return e.apply(this, arguments);
                                        };
                                    }(), function() {
                                        var e = a(n.default.mark(function e(t) {
                                            return n.default.wrap(function(e) {
                                                while (1) switch (e.prev = e.next) {
                                                  case 0:
                                                    console.log("进入待支付状态", t), o.$sun.toast("您已取消支付"), r.default.releaseKey("submit");

                                                  case 3:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            }, e);
                                        }));
                                        return function(t) {
                                            return e.apply(this, arguments);
                                        };
                                    }()));

                                  case 14:
                                    t.next = 32;
                                    break;

                                  case 16:
                                    if (2 != o.applyType) {
                                        t.next = 31;
                                        break;
                                    }
                                    if (console.log("余额支付", o.balance, i), !(Number(o.balance) < Number(i))) {
                                        t.next = 25;
                                        break;
                                    }
                                    return console.log("余额支付", o.balance, i), o.$sun.toast("您的余额不足，请使用微信支付."), r.default.releaseKey("submit"), 
                                    t.abrupt("return");

                                  case 25:
                                    return t.next = 27, o.$http({
                                        url: o.$api.balance_pay,
                                        data: {
                                            uid: e.getStorageSync("uid").id,
                                            price: i,
                                            pay_type: o.applyType
                                        }
                                    });

                                  case 27:
                                    l = t.sent, 0 == l.errno && o.addOrderInfo();

                                  case 29:
                                    t.next = 32;
                                    break;

                                  case 31:
                                    r.default.releaseKey("submit");

                                  case 32:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    addOrderInfo: function() {
                        var t = this;
                        return a(n.default.mark(function o() {
                            var r, s, i;
                            return n.default.wrap(function(o) {
                                while (1) switch (o.prev = o.next) {
                                  case 0:
                                    return r = Number(Number(t.voucherInfos) + Number(t.couponInfo)).toFixed(2), console.log("减去的折扣----------", r), 
                                    s = t.totalCart, s = Number(Number(s) - Number(t.voucherInfos)) < 0 ? 0 : Number(Number(s) - Number(t.couponInfo) - Number(t.voucherInfos)).toFixed(2), 
                                    o.next = 6, t.$http({
                                        url: t.$api.add_foods_order,
                                        method: "POST",
                                        data: {
                                            voucher_id: 1 == t.byseatInfo.order_per_type ? t.voucherid : "",
                                            plugin_type: 1,
                                            seat_number: t.byseatInfo.seat_number,
                                            receipt_type: 1,
                                            pe_number: t.byseatInfo.pr_number,
                                            arrival_time: t.byseatInfo.arrival_time,
                                            member_discount: 1 == t.byseatInfo.order_per_type ? t.memberDiscount : "",
                                            pay_type: t.applyType,
                                            uid: e.getStorageSync("uid").id,
                                            real_payment: 1 == t.byseatInfo.order_per_type ? t.realPrice : Number(t.sum).toFixed(2),
                                            mobile: t.byseatInfo.mobile,
                                            status: 4,
                                            type: 2,
                                            num: t.numa,
                                            goods_id: t.byseatInfo.id,
                                            list: t.byseatGoods,
                                            coupon_id: 1 == t.byseatInfo.order_per_type ? t.couponid : "",
                                            discount: r,
                                            price: Number(t.sum).toFixed(2),
                                            spec: t.byseatInfo.spec,
                                            freight: t.byseatInfo.freight,
                                            store_name: t.byseatInfo.store_name,
                                            store_id: t.byseatInfo.store_id
                                        }
                                    });

                                  case 6:
                                    i = o.sent, 0 == i.errno && (t.$sun.toast("结账完成！"), t.useCoupons(), 1 == t.options.personnelCode ? setTimeout(function() {
                                        e.reLaunch({
                                            url: "/packages/takeawayOrder/administrator-order-meal/administrator-order-meal"
                                        });
                                    }, 1500) : t.confirmOrder());

                                  case 8:
                                  case "end":
                                    return o.stop();
                                }
                            }, o);
                        }))();
                    },
                    confirmOrder: function() {
                        var t = this;
                        return a(n.default.mark(function o() {
                            var r, s;
                            return n.default.wrap(function(o) {
                                while (1) switch (o.prev = o.next) {
                                  case 0:
                                    return r = Number(Number(t.voucherInfos) + Number(t.couponInfo)).toFixed(2), console.log("减去的折扣----------", r), 
                                    t.totalCart, o.next = 5, t.$http({
                                        url: t.$api.edit_foodsOrder_order,
                                        data: {
                                            uid: e.getStorageSync("uid").id,
                                            status: 4,
                                            id: t.byseatInfo.id,
                                            real_payment: 1 == t.byseatInfo.order_per_type ? t.byseatInfo.real_payment : t.byseatInfo.price,
                                            member_discount: 1 == t.byseatInfo.order_per_type ? t.byseatInfo.member_discount : "",
                                            coupon_id: 1 == t.byseatInfo.order_per_type ? t.couponid : "",
                                            discount: 1 == t.byseatInfo.order_per_type ? t.byseatInfo.discount : "",
                                            voucher_id: 1 == t.byseatInfo.order_per_type ? t.voucherid : ""
                                        }
                                    });

                                  case 5:
                                    s = o.sent, 0 == s.errno && (t.closeDialog(), t.$sun.toast("结账完成！"), setTimeout(function() {
                                        e.reLaunch({
                                            url: "/packages/takeawayOrder/my/my"
                                        });
                                    }, 1500));

                                  case 7:
                                  case "end":
                                    return o.stop();
                                }
                            }, o);
                        }))();
                    },
                    useCoupons: function() {
                        var t = this;
                        return a(n.default.mark(function o() {
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
                                    r = o.sent, 0 == r.errno && (t.usecouponList = r.data, console.log("type2", t.usecouponList, "成功this.couponid", t.couponid), 
                                    console.log("则下单时进入"));

                                  case 4:
                                  case "end":
                                    return o.stop();
                                }
                            }, o);
                        }))();
                    },
                    storeLists: function() {
                        var e = this;
                        return a(n.default.mark(function t() {
                            var o;
                            return n.default.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, e.$http({
                                        url: e.$api.getSingleStore,
                                        data: {
                                            store_id: e.stordIds
                                        }
                                    });

                                  case 2:
                                    o = t.sent, 0 == o.errno && (e.storeListInfo = o.data, console.log("查询门店列表", e.storeListInfo));

                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    getCoupon: function() {
                        var t = this;
                        return a(n.default.mark(function o() {
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
                                    }), 0 != t.couponList.length ? (t.coupons = "请选择优惠券", t.couponInfo = 0, t.couponid = "") : (console.log(t.couponList.length, "this.couponList.length======", t.couponList), 
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
                        return a(n.default.mark(function o() {
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
                                    }), 0 != t.myMealList.length ? t.vouchers = "请选择代金券" : (console.log(t.myMealList.length, "this.myMealList.length======", t.myMealList), 
                                    t.vouchers = "暂无代金券"), console.log("我的代金券", r, t.myMealList));

                                  case 4:
                                  case "end":
                                    return o.stop();
                                }
                            }, o);
                        }))();
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
                    handleApplyType: function(e) {
                        var t = e.detail.value;
                        this.applyType = t, console.log(this.applyType, "applyType");
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
                            e == t.id ? t.checkCoupon = 1 != t.checkCoupon : t.checkCoupon = !1;
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
                    toChange: function() {
                        this.isShow = !this.isShow;
                    },
                    infoByseat: function(e) {
                        var t = this;
                        return a(n.default.mark(function o() {
                            var r;
                            return n.default.wrap(function(o) {
                                while (1) switch (o.prev = o.next) {
                                  case 0:
                                    return console.log("调用接口 返回座位号", t.seat_id), o.next = 3, t.$http({
                                        url: t.$api.order_info_byseat,
                                        data: {
                                            seat_id: e.seat_number
                                        }
                                    });

                                  case 3:
                                    r = o.sent, 0 == r.errno && (t.byseatInfo = r.data, t.byseatGoods = r.data.goods, 
                                    t.getCoupon(), console.log("根据座位号查询详细数据byseatInfo======", t.byseatInfo));

                                  case 5:
                                  case "end":
                                    return o.stop();
                                }
                            }, o);
                        }))();
                    },
                    getOrderDetail: function() {
                        var e = this;
                        return a(n.default.mark(function t() {
                            var o, r, s, i, a, u;
                            return n.default.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                  case 0:
                                    return o = getCurrentPages(), o[o.length - 2], r = e.options.id, t.next = 5, e.$http({
                                        url: e.$api.ct_orderInfo,
                                        data: {
                                            id: r
                                        }
                                    });

                                  case 5:
                                    s = t.sent, 0 == s.errno && (e.order = s.data, e.orderGoods = s.data.goods, i = Number(e.order.price), 
                                    a = Number(e.userInfo.curDiscount) / 10, u = Number(i * a).toFixed(2), 0 == e.userInfo.curDiscount || 0 == e.userInfo.curDiscount ? e.userMoney = Number(0).toFixed(2) : e.userMoney = Number(i - Number(u)).toFixed(2), 
                                    console.log("-----会员折扣=", i, a, u, e.userMoney, e.userInfo.curDiscount));

                                  case 7:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    commodity: function(t) {
                        console.log(t, "item------"), e.navigateTo({
                            url: "/wjyk_nhyk/pages/Mall/MaillDetails/MaillDetails?id=" + t.id + "&is_exchange=" + t.is_exchange
                        });
                    },
                    paste: function() {
                        e.setClipboardData({
                            data: this.order.order_number
                        });
                    },
                    paste2: function() {
                        e.setClipboardData({
                            data: this.order.express_no
                        });
                    },
                    userInfoes: function() {
                        var t = this;
                        return a(n.default.mark(function o() {
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
                                    console.log(t.balance, t.userInfo, "this.userInfo"), t.userInfo.curDiscount ? (s = Number(Number(t.userInfo.curDiscount) / 10 * t.sum).toFixed(2), 
                                    console.log("realMoney===", s, "this.userInfo.curDiscount==", "this.sum==", t.sum), 
                                    t.memberDiscount = Number(t.sum - s).toFixed(2), console.log("实付框，有折扣-----------------", t.memberDiscount)) : (t.memberDiscount = 0, 
                                    console.log("实付框无折扣--------------", t.memberDiscount)));

                                  case 4:
                                  case "end":
                                    return o.stop();
                                }
                            }, o);
                        }))();
                    }
                }
            };
            t.default = d;
        }).call(this, o("543d")["default"]);
    }
}, [ [ "a277", "common/runtime", "common/vendor" ] ] ]);