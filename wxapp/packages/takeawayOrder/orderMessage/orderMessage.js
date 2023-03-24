(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/takeawayOrder/orderMessage/orderMessage" ], {
    "27b5": function(e, t, n) {
        "use strict";
        (function(e) {
            n("cee1");
            o(n("66fd"));
            var t = o(n("855d"));
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            e(t.default);
        }).call(this, n("543d")["createPage"]);
    },
    "296a": function(e, t, n) {
        "use strict";
        var o = n("784a"), r = n.n(o);
        r.a;
    },
    "4ebe": function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return r;
        }), n.d(t, "c", function() {
            return a;
        }), n.d(t, "a", function() {
            return o;
        });
        var o = {
            sunuiTab: function() {
                return n.e("components/sunui-tab/sunui-tab").then(n.bind(null, "0244"));
            },
            sunuiPopup: function() {
                return n.e("components/sunui-popup/sunui-popup").then(n.bind(null, "6cf4"));
            },
            sunuiCell: function() {
                return n.e("components/sunui-cell/sunui-cell").then(n.bind(null, "cf30"));
            }
        }, r = function() {
            var e = this, t = e.$createElement, n = (e._self._c, e.__map(e.orderList, function(t, n) {
                var o = e.__get_orig(t), r = e.orderStatus(t.status), a = 1 == t.pickup_type ? Number(e.userInfo.curDiscount) : null, s = 1 == t.pickup_type && a ? Number(parseFloat(e.userInfo.curDiscount) / 10 * parseFloat(e.amount(t.id))).toFixed(2) : null, i = 1 != t.pickup_type || a ? null : e.amount(t.id), u = e.numa(t.id);
                return {
                    $orig: o,
                    m0: r,
                    m1: a,
                    g0: s,
                    m2: i,
                    m3: u
                };
            })), o = Number(e.sum).toFixed(2), r = Number(e.userInfo.curDiscount), a = r ? Number(e.userInfo.curDiscount).toFixed(1) : null, s = Number(parseFloat(e.totalCart).toFixed(2) - parseFloat(e.voucherInfos).toFixed(2)), i = s < 0 ? null : Number(parseFloat(e.totalCart).toFixed(2) - parseFloat(e.couponInfo).toFixed(2) - parseFloat(e.voucherInfos).toFixed(2)).toFixed(2), u = 0 != e.couponList.length ? e.__map(e.couponList, function(t, n) {
                var o = e.__get_orig(t), r = Number(t.less).toFixed(0);
                return {
                    $orig: o,
                    g4: r
                };
            }) : null;
            e.$mp.data = Object.assign({}, {
                $root: {
                    l0: n,
                    g1: o,
                    m4: r,
                    g2: a,
                    m5: s,
                    g3: i,
                    l1: u
                }
            });
        }, a = [];
    },
    "70d8": function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = a(n("a34a")), r = a(n("0747"));
            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function s(e, t, n, o, r, a, s) {
                try {
                    var i = e[a](s), u = i.value;
                } catch (c) {
                    return void n(c);
                }
                i.done ? t(u) : Promise.resolve(u).then(o, r);
            }
            function i(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(o, r) {
                        var a = e.apply(t, n);
                        function i(e) {
                            s(a, o, r, i, u, "next", e);
                        }
                        function u(e) {
                            s(a, o, r, i, u, "throw", e);
                        }
                        i(void 0);
                    });
                };
            }
            function u(e, t) {
                var n;
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (n = c(e)) || t && e && "number" === typeof e.length) {
                        n && (e = n);
                        var o = 0, r = function() {};
                        return {
                            s: r,
                            n: function() {
                                return o >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[o++]
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
                var a, s = !0, i = !1;
                return {
                    s: function() {
                        n = e[Symbol.iterator]();
                    },
                    n: function() {
                        var e = n.next();
                        return s = e.done, e;
                    },
                    e: function(e) {
                        i = !0, a = e;
                    },
                    f: function() {
                        try {
                            s || null == n.return || n.return();
                        } finally {
                            if (i) throw a;
                        }
                    }
                };
            }
            function c(e, t) {
                if (e) {
                    if ("string" === typeof e) return d(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? d(e, t) : void 0;
                }
            }
            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                return o;
            }
            var l = {
                data: function() {
                    return {
                        youhui1: this.$img.youhui1,
                        byseatGoods: [],
                        byseatInfo: {},
                        storeListInfo: {},
                        scanCode: 2,
                        pi: 3.14159,
                        EARTH_RADIUS: 6378137,
                        juli: "",
                        balance: "",
                        orderList: [],
                        stordIds: "",
                        wmnone: this.$img.wmnone,
                        currentIndex: 0,
                        indexarr1: [ {
                            title: "全部订单",
                            is_comment: "",
                            id: ""
                        }, {
                            title: "待付款",
                            is_comment: "",
                            id: 1
                        }, {
                            title: "待完成",
                            is_comment: "",
                            id: 2
                        }, {
                            title: "待评价",
                            is_comment: 1,
                            id: 4
                        }, {
                            title: "已完成",
                            is_comment: "",
                            id: 4
                        } ],
                        applyType: 1,
                        userInfo: {},
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
                        placeOrder: "",
                        options: {}
                    };
                },
                computed: {
                    sum: function() {
                        console.log("进入结算sum总金额");
                        var e = 0;
                        return this.byseatGoods.forEach(function(t) {
                            e += t.num * t.unit_price, console.log("sum总金额==========", e);
                        }), e;
                    },
                    totalCart: function() {
                        var e, t = 0, n = this.byseatGoods, o = u(n);
                        try {
                            for (o.s(); !(e = o.n()).done; ) {
                                var r = e.value, a = Number(r.unit_price), s = Number(r.num);
                                if (console.log("dissssssssssssssssssss购物车的计算总金额totalCart*********", s), 0 == this.userInfo.curDiscount) t += a * s; else {
                                    var i = a * s, c = Number(this.userInfo.curDiscount) / 10;
                                    t += i * Number(c);
                                }
                            }
                        } catch (d) {
                            o.e(d);
                        } finally {
                            o.f();
                        }
                        return t;
                    },
                    orderStatus: function() {
                        return function(e) {
                            var t = [ "全部订单", "待付款", "待完成" ];
                            return t[e];
                        };
                    }
                },
                onShow: function() {
                    r.default.releaseKey("submit"), this.userInfoes(), this.storeLists(), this.myVoucher(), 
                    this.mescroll.resetUpScroll();
                },
                onLoad: function(e) {
                    this.options = e, this.seat_id = wx.getStorageSync("seatId"), this.stordIds = e.stordIds, 
                    this.scanCode = e.scanCode, console.log(e, "userInfoesoptions", "this.scanCode", this.scanCode), 
                    this.currentIndex = e.index;
                },
                methods: {
                    takeawayIndex: function() {
                        e.navigateTo({
                            url: "/packages/takeawayOrder/classification/classification"
                        });
                    },
                    takeawayIndex2: function() {
                        e.navigateTo({
                            url: "/packages/takeawayOrder/administrator-order-meal/administrator-order-meal"
                        });
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
                                var t = i(o.default.mark(function t() {
                                    return o.default.wrap(function(t) {
                                        while (1) switch (t.prev = t.next) {
                                          case 0:
                                            r.default.lockKey("submit"), console.log("防抖... 在事件触发前连续点击事件会重新计时"), e.orderSubmit();

                                          case 3:
                                          case "end":
                                            return t.stop();
                                        }
                                    }, t);
                                }));
                                function n() {
                                    return t.apply(this, arguments);
                                }
                                return n;
                            }()
                        });
                    },
                    orderSubmit: function(t) {
                        var n = this;
                        return i(o.default.mark(function t() {
                            var a, s, u, c, d;
                            return o.default.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                  case 0:
                                    if (a = Number(Number(n.voucherInfos) + Number(n.couponInfo)).toFixed(2), console.log("减去的折扣----------", a), 
                                    s = n.totalCart, s = Number(Number(s) - Number(n.voucherInfos)) < 0 ? 0 : Number(Number(s) - Number(n.couponInfo) - Number(n.voucherInfos)).toFixed(2), 
                                    1 != n.applyType) {
                                        t.next = 16;
                                        break;
                                    }
                                    if (0 != s && 0 != s && 0 != s) {
                                        t.next = 10;
                                        break;
                                    }
                                    console.log("进入零元免微信支付"), n.addOrderInfo(), t.next = 14;
                                    break;

                                  case 10:
                                    return t.next = 12, n.$http({
                                        url: n.$api.pay,
                                        data: {
                                            uid: e.getStorageSync("uid").id,
                                            openid: wx.getStorageSync("openid"),
                                            price: s
                                        }
                                    });

                                  case 12:
                                    u = t.sent, 0 == u.code && (c = u.data, n.$sun.wePay(c, function() {
                                        var e = i(o.default.mark(function e(t) {
                                            return o.default.wrap(function(e) {
                                                while (1) switch (e.prev = e.next) {
                                                  case 0:
                                                    console.log("进入微信支付"), n.addOrderInfo();

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
                                        var e = i(o.default.mark(function e(t) {
                                            return o.default.wrap(function(e) {
                                                while (1) switch (e.prev = e.next) {
                                                  case 0:
                                                    console.log("进入待支付状态", t), n.$sun.toast("您已取消支付"), r.default.releaseKey("submit");

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
                                    if (2 != n.applyType) {
                                        t.next = 31;
                                        break;
                                    }
                                    if (console.log("余额支付", n.balance, s), !(Number(n.balance) < Number(s))) {
                                        t.next = 25;
                                        break;
                                    }
                                    return console.log("余额支付", n.balance, s), n.$sun.toast("您的余额不足，请使用微信支付."), r.default.releaseKey("submit"), 
                                    t.abrupt("return");

                                  case 25:
                                    return t.next = 27, n.$http({
                                        url: n.$api.balance_pay,
                                        data: {
                                            uid: e.getStorageSync("uid").id,
                                            price: s,
                                            pay_type: n.applyType
                                        }
                                    });

                                  case 27:
                                    d = t.sent, 0 == d.errno && n.addOrderInfo();

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
                    infoByseat: function(e) {
                        var t = this;
                        return i(o.default.mark(function n() {
                            var r;
                            return o.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return console.log("调用接口 返回座位号", t.seat_id), n.next = 3, t.$http({
                                        url: t.$api.order_info_byseat,
                                        data: {
                                            seat_id: e.seat_number
                                        }
                                    });

                                  case 3:
                                    r = n.sent, 0 == r.errno && (t.byseatInfo = r.data, t.byseatGoods = r.data.goods, 
                                    t.getCoupon(), console.log("根据座位号查询详细数据byseatInfo======", t.byseatInfo));

                                  case 5:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    amount: function(e) {
                        console.log("orderList实付款==========", this.orderList);
                        for (var t = 0, n = 0; n < this.orderList.length; n++) {
                            var o = this.orderList[n].goods;
                            if (this.orderList[n].id == e) for (var r = 0; r < o.length; r++) t += parseFloat(o[r].num) * parseFloat(o[r].unit_price);
                        }
                        return t;
                    },
                    numa: function(e) {
                        console.log("进入结算数量", e);
                        var t = 0;
                        return this.orderList.forEach(function(n) {
                            if (n.id == e) {
                                t = 0;
                                for (var o = 0, r = n.goods.length; o < r; o++) t += Number(n.goods[o].num);
                            }
                        }), t;
                    },
                    addOrders: function() {
                        e.navigateTo({
                            url: "/packages/takeawayOrder/classification/classification"
                        });
                    },
                    speakadd: function(t) {
                        e.navigateTo({
                            url: "/packages/takeawayOrder/addSpeak/addSpeak?id=" + t + "&addNumber=" + this.numa(t)
                        });
                    },
                    chilkOrder: function(t, n) {
                        e.navigateTo({
                            url: "/packages/takeawayOrder/orderEat/orderEat?id=" + t + "&isTure=1"
                        }), 1 == n.receipt_type ? e.setNavigationBarTitle({
                            title: "到店订单详情"
                        }) : e.setNavigationBarTitle({
                            title: "外卖订单详情"
                        });
                    },
                    navbarTapHandler: function(e) {
                        this.currentIndex = e, this.mescroll.resetUpScroll();
                    },
                    upCallback: function(t) {
                        var n = this;
                        return i(o.default.mark(function r() {
                            var a;
                            return o.default.wrap(function(o) {
                                while (1) switch (o.prev = o.next) {
                                  case 0:
                                    return o.next = 2, n.$http({
                                        url: n.$api.ct_myOrder,
                                        data: {
                                            uid: e.getStorageSync("uid").id,
                                            status: n.indexarr1[n.currentIndex].id,
                                            is_comment: n.indexarr1[n.currentIndex].is_comment,
                                            page: t.num,
                                            psize: 10
                                        }
                                    });

                                  case 2:
                                    a = o.sent, 0 == a.errno && (n.mescroll.endByPage(a.data.list.length, a.data.total), 
                                    1 == t.num && (n.orderList = []), n.orderList = n.orderList.concat(a.data.list));

                                  case 4:
                                  case "end":
                                    return o.stop();
                                }
                            }, r);
                        }))();
                    },
                    deteleOne: function(e) {
                        var t = this;
                        return i(o.default.mark(function n() {
                            var r;
                            return o.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, t.$http({
                                        url: t.$api.del_order,
                                        data: {
                                            id: e
                                        }
                                    });

                                  case 2:
                                    r = n.sent, 0 == r.errno && (t.$sun.toast(r.message), t.mescroll.resetUpScroll());

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    userInfoes: function() {
                        var t = this;
                        return i(o.default.mark(function n() {
                            var r, a;
                            return o.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, t.$http({
                                        url: t.$api.userhy,
                                        data: {
                                            uid: e.getStorageSync("uid").id
                                        }
                                    });

                                  case 2:
                                    r = n.sent, 0 == r.errno && (t.userInfo = r.data, t.balance = t.userInfo.money, 
                                    t.userInfo.curDiscount ? (a = Number(Number(t.userInfo.curDiscount) / 10 * t.sum).toFixed(2), 
                                    t.memberDiscount = Number(t.sum - a).toFixed(2), console.log("实付框，有折扣-----------------", t.memberDiscount)) : (t.memberDiscount = 0, 
                                    console.log("实付框无折扣--------------", t.memberDiscount)));

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    storeClick: function(t) {
                        console.log("跳转item", t), e.navigateTo({
                            url: "/packages/takeawayOrder/classification/classification"
                        }), wx.setStorageSync("storeEatNexts", t.store_id), wx.setStorageSync("storeEatNextNames", t.store_name);
                        parseFloat(t.store_addres_lat), parseFloat(t.store_addres_lng);
                        var n = 3.141592653589793, o = parseFloat(t.store_addres_lat) - .0065, r = parseFloat(t.store_addres_lng) - .006, a = Math.sqrt(o * o + r * r) - 2e-5 * Math.sin(r * n), s = Math.atan2(r, o) - 3e-6 * Math.cos(o * n), i = (a * Math.cos(s)).toFixed(7), u = (a * Math.sin(s)).toFixed(7);
                        console.log("百度地图经纬度转腾讯地图经纬度", i, u);
                        var c = this, d = e.getStorageSync("lat"), l = e.getStorageSync("lng"), f = c.getGreatCircleDistance(d, l, i, u);
                        this.juli = parseInt(f / 1e3), wx.setStorageSync("storeJuli", this.juli);
                    },
                    getRad: function(e) {
                        return e * this.pi / 180;
                    },
                    getGreatCircleDistance: function(e, t, n, o) {
                        var r = this.getRad(e), a = this.getRad(n), s = r - a, i = this.getRad(t) - this.getRad(o), u = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(s / 2), 2) + Math.cos(r) * Math.cos(a) * Math.pow(Math.sin(i / 2), 2)));
                        return u *= this.EARTH_RADIUS, u = Math.round(1e4 * u) / 1e4, u;
                    },
                    addEat: function(t) {
                        this.infoByseat(t), console.log("跳转加菜item", t, "this.byseatInfo.id===", this.byseatInfo.id), 
                        1 == this.options.personnelCode ? e.navigateTo({
                            url: "/packages/takeawayOrder/administrator-order-classification/administrator-order-classification?personnelCode=1&byseatInfoID=" + t.id + "&stordIds=" + t.store_id
                        }) : e.navigateTo({
                            url: "/packages/takeawayOrder/classification/classification?scanCode=1&byseatInfoID=" + t.id + "&stordIds=" + t.store_id
                        }), wx.setStorageSync("storeEatNexts", t.store_id), wx.setStorageSync("storeEatNextNames", t.store_name), 
                        wx.setStorageSync("storeEatOrderID", t.id);
                    },
                    storeLists: function() {
                        var e = this;
                        return i(o.default.mark(function t() {
                            var n;
                            return o.default.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, e.$http({
                                        url: e.$api.getSingleStore,
                                        data: {
                                            store_id: e.stordIds
                                        }
                                    });

                                  case 2:
                                    n = t.sent, 0 == n.errno && (e.storeListInfo = n.data);

                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    getCoupon: function() {
                        var t = this;
                        return i(o.default.mark(function n() {
                            var r;
                            return o.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, t.$http({
                                        url: t.$api.use_coupon,
                                        data: {
                                            uid: e.getStorageSync("uid").id,
                                            price: t.byseatInfo.real_payment,
                                            use_coupon: ""
                                        }
                                    });

                                  case 2:
                                    r = n.sent, 0 == r.errno && (t.couponList = r.data, console.log("购物车金额", t.totalCart, "去使用优惠券type2", t.couponList), 
                                    t.couponList.filter(function(e, n) {
                                        t.$set(e, "checkCoupon", !1);
                                    }), 0 != t.couponList.length ? (t.coupons = "请选择优惠券", t.couponInfo = 0, t.couponid = "") : (t.coupons = "暂无优惠券", 
                                    t.couponInfo = 0, t.couponid = ""));

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    myVoucher: function() {
                        var t = this;
                        return i(o.default.mark(function n() {
                            var r;
                            return o.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, t.$http({
                                        url: t.$api.my_voucher,
                                        data: {
                                            uid: e.getStorageSync("uid").id
                                        }
                                    });

                                  case 2:
                                    r = n.sent, 0 == r.errno && (t.myMealList = r.data, t.myMealList.filter(function(e, n) {
                                        t.$set(e, "checkMyMeal", !1);
                                    }), 0 != t.myMealList.length ? t.vouchers = "请选择代金券" : t.vouchers = "暂无代金券");

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    handleCoupon: function() {
                        this.getCoupon(), this.$refs.pop.show({
                            style: "background-color:#fff;width:100%;height:auto;overflow-x:auto;",
                            anim: "bottom",
                            position: "bottom",
                            topclose: !1,
                            titleStyle: "position: fixed;width: 100%;background: #fff;z-index: 1000;border-bottom:1rpx solid #f7f7f7;"
                        });
                    },
                    handleApplyType: function(e) {
                        var t = e.detail.value;
                        this.applyType = t;
                    },
                    voucherList: function() {
                        this.$refs.pops.show({
                            style: "background-color:#fff;width:100%;height:auto;overflow-x:auto;",
                            anim: "bottom",
                            position: "bottom",
                            topclose: !1,
                            titleStyle: "position: fixed;width: 100%;background: #fff;z-index: 1000;border-bottom:1rpx solid #f7f7f7;"
                        });
                    },
                    checkeBox2: function(e) {
                        this.myMealList.filter(function(t) {
                            e == t.id ? t.checkMyMeal = 1 != t.checkMyMeal : t.checkMyMeal = !1;
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
                        1 == t.type ? (this.coupons = "满" + t.full + "减" + t.less, this.couponInfo = t.less, 
                        console.log(this.coupons, "this.couponName满减", "this.less", this.couponInfo)) : 2 == t.type && (this.coupons = "无门槛" + t.less, 
                        this.couponInfo = t.less, console.log(this.coupons, "this.couponName满无门槛", "this.less", this.couponInfo)), 
                        this.couponid = t.id), console.log("count===============", t);
                    },
                    addOrderInfo: function() {
                        var t = this;
                        return i(o.default.mark(function n() {
                            var r, a, s;
                            return o.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return r = Number(Number(t.voucherInfos) + Number(t.couponInfo)).toFixed(2), console.log("减去的折扣----------", r), 
                                    a = t.totalCart, a = Number(Number(a) - Number(t.voucherInfos)) < 0 ? 0 : Number(Number(a) - Number(t.couponInfo) - Number(t.voucherInfos)).toFixed(2), 
                                    n.next = 6, t.$http({
                                        url: t.$api.add_foods_order,
                                        method: "POST",
                                        data: {
                                            voucher_id: t.voucherid,
                                            plugin_type: 1,
                                            seat_number: t.byseatInfo.seat_number,
                                            receipt_type: 1,
                                            pe_number: t.byseatInfo.pr_number,
                                            arrival_time: t.byseatInfo.arrival_time,
                                            member_discount: t.memberDiscount,
                                            pay_type: t.applyType,
                                            uid: e.getStorageSync("uid").id,
                                            real_payment: a,
                                            mobile: t.byseatInfo.mobile,
                                            status: 4,
                                            type: 2,
                                            num: t.numa,
                                            goods_id: t.byseatInfo.id,
                                            list: t.byseatGoods,
                                            coupon_id: t.couponid,
                                            discount: r,
                                            price: Number(t.sum).toFixed(2),
                                            spec: t.byseatInfo.spec,
                                            freight: t.byseatInfo.freight,
                                            store_name: t.byseatInfo.store_name,
                                            store_id: t.byseatInfo.store_id,
                                            order_per_type: "",
                                            mid: ""
                                        }
                                    });

                                  case 6:
                                    s = n.sent, 0 == s.errno && (t.$sun.toast(s.message), t.useCoupons(), t.confirmOrder());

                                  case 8:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    confirmOrder: function() {
                        var t = this;
                        return i(o.default.mark(function n() {
                            var r, a;
                            return o.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return r = Number(Number(t.voucherInfos) + Number(t.couponInfo)).toFixed(2), console.log("减去的折扣----------", r), 
                                    t.totalCart, n.next = 5, t.$http({
                                        url: t.$api.edit_foodsOrder_order,
                                        data: {
                                            uid: e.getStorageSync("uid").id,
                                            status: 4,
                                            id: t.byseatInfo.id,
                                            real_payment: t.byseatInfo.real_payment,
                                            member_discount: t.byseatInfo.member_discount,
                                            coupon_id: t.couponid,
                                            discount: t.byseatInfo.discount,
                                            voucher_id: t.voucherid
                                        }
                                    });

                                  case 5:
                                    a = n.sent, 0 == a.errno && (t.navbarTapHandler(3), t.closeDialog());

                                  case 7:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    useCoupons: function() {
                        var t = this;
                        return i(o.default.mark(function n() {
                            var r;
                            return o.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, t.$http({
                                        url: t.$api.use_coupon,
                                        data: {
                                            uid: e.getStorageSync("uid").id,
                                            id: t.couponid,
                                            region: ""
                                        }
                                    });

                                  case 2:
                                    r = n.sent, 0 == r.errno && (t.usecouponList = r.data, console.log("则下单时进入type2", t.usecouponList, "成功this.couponid", t.couponid));

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    handleOperate: function(t, n) {
                        var r = this, a = t.id, s = Number(t.real_payment);
                        switch (n) {
                          case "pay":
                            e.showActionSheet({
                                itemList: [ "微信支付", "余额支付" ],
                                success: function() {
                                    var t = i(o.default.mark(function t(n) {
                                        var u, c, d, l, f;
                                        return o.default.wrap(function(t) {
                                            while (1) switch (t.prev = t.next) {
                                              case 0:
                                                u = n.tapIndex, t.t0 = u, t.next = 0 === t.t0 ? 4 : 1 === t.t0 ? 10 : 28;
                                                break;

                                              case 4:
                                                return r.applyType = 1, t.next = 7, r.$http({
                                                    url: r.$api.pay,
                                                    data: {
                                                        uid: e.getStorageSync("uid").id,
                                                        price: s,
                                                        openid: wx.getStorageSync("openid")
                                                    }
                                                });

                                              case 7:
                                                return c = t.sent, 0 == c.code && (d = c.data, r.$sun.wePay(d, function() {
                                                    var t = i(o.default.mark(function t(n) {
                                                        var s;
                                                        return o.default.wrap(function(t) {
                                                            while (1) switch (t.prev = t.next) {
                                                              case 0:
                                                                return t.next = 2, r.$http({
                                                                    url: r.$api.edit_foodsOrder_order,
                                                                    data: {
                                                                        uid: e.getStorageSync("uid").id,
                                                                        status: 2,
                                                                        id: a,
                                                                        pay_type: r.applyType
                                                                    }
                                                                });

                                                              case 2:
                                                                s = t.sent, 0 == s.code && (r.$sun.toast(s.message), r.navbarTapHandler(2));

                                                              case 4:
                                                              case "end":
                                                                return t.stop();
                                                            }
                                                        }, t);
                                                    }));
                                                    return function(e) {
                                                        return t.apply(this, arguments);
                                                    };
                                                }(), function() {
                                                    var e = i(o.default.mark(function e(t) {
                                                        return o.default.wrap(function(e) {
                                                            while (1) switch (e.prev = e.next) {
                                                              case 0:
                                                                r.$sun.toast("取消了支付");

                                                              case 1:
                                                              case "end":
                                                                return e.stop();
                                                            }
                                                        }, e);
                                                    }));
                                                    return function(t) {
                                                        return e.apply(this, arguments);
                                                    };
                                                }())), t.abrupt("break", 28);

                                              case 10:
                                                if (r.applyType = 2, console.log(s, "this.userInfo.money", "555", r.balance), !(Number(r.balance) < Number(s))) {
                                                    t.next = 16;
                                                    break;
                                                }
                                                r.$sun.toast("您的余额不足，请使用微信支付."), t.next = 27;
                                                break;

                                              case 16:
                                                return t.next = 18, r.$http({
                                                    url: r.$api.balance_pay,
                                                    data: {
                                                        uid: e.getStorageSync("uid").id,
                                                        price: s,
                                                        pay_type: r.applyType
                                                    }
                                                });

                                              case 18:
                                                if (l = t.sent, 0 != l.errno) {
                                                    t.next = 26;
                                                    break;
                                                }
                                                return t.next = 22, r.$http({
                                                    url: r.$api.edit_foodsOrder_order,
                                                    data: {
                                                        status: 2,
                                                        id: a,
                                                        pay_type: r.applyType
                                                    }
                                                });

                                              case 22:
                                                f = t.sent, 0 == f.errno ? (r.$sun.toast(f.message), r.navbarTapHandler(2)) : r.$sun.toast(f.message), 
                                                t.next = 27;
                                                break;

                                              case 26:
                                                r.$sun.toast(orderInfo.message);

                                              case 27:
                                                return t.abrupt("break", 28);

                                              case 28:
                                              case "end":
                                                return t.stop();
                                            }
                                        }, t);
                                    }));
                                    function n(e) {
                                        return t.apply(this, arguments);
                                    }
                                    return n;
                                }()
                            });
                            break;

                          case "cancel":
                            e.showModal({
                                title: "提示",
                                confirmColor: "#ff6145",
                                content: "您确定取消订单吗?",
                                success: function() {
                                    var t = i(o.default.mark(function t(n) {
                                        var s;
                                        return o.default.wrap(function(t) {
                                            while (1) switch (t.prev = t.next) {
                                              case 0:
                                                if (!n.confirm) {
                                                    t.next = 5;
                                                    break;
                                                }
                                                return t.next = 3, r.$http({
                                                    url: r.$api.edit_foodsOrder_order,
                                                    data: {
                                                        uid: e.getStorageSync("uid").id,
                                                        status: 0,
                                                        id: a
                                                    }
                                                });

                                              case 3:
                                                s = t.sent, 0 == s.errno && (r.$sun.toast(s.message), r.mescroll.resetUpScroll());

                                              case 5:
                                              case "end":
                                                return t.stop();
                                            }
                                        }, t);
                                    }));
                                    function n(e) {
                                        return t.apply(this, arguments);
                                    }
                                    return n;
                                }()
                            });
                            break;

                          case "require":
                            e.showModal({
                                title: "提示",
                                confirmColor: "#ff6145",
                                content: "您确定已经该订单完成了吗?",
                                success: function() {
                                    var t = i(o.default.mark(function t(n) {
                                        var s;
                                        return o.default.wrap(function(t) {
                                            while (1) switch (t.prev = t.next) {
                                              case 0:
                                                if (!n.confirm) {
                                                    t.next = 5;
                                                    break;
                                                }
                                                return t.next = 3, r.$http({
                                                    url: r.$api.edit_foodsOrder_order,
                                                    data: {
                                                        uid: e.getStorageSync("uid").id,
                                                        status: 4,
                                                        id: a
                                                    }
                                                });

                                              case 3:
                                                s = t.sent, 0 == s.errno && (r.navbarTapHandler(3), r.$sun.toast(s.message));

                                              case 5:
                                              case "end":
                                                return t.stop();
                                            }
                                        }, t);
                                    }));
                                    function n(e) {
                                        return t.apply(this, arguments);
                                    }
                                    return n;
                                }()
                            });
                            break;
                        }
                    }
                }
            };
            t.default = l;
        }).call(this, n("543d")["default"]);
    },
    "784a": function(e, t, n) {},
    "855d": function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n("4ebe"), r = n("9f3a");
        for (var a in r) "default" !== a && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(a);
        n("296a");
        var s, i = n("f0c5"), u = Object(i["a"])(r["default"], o["b"], o["c"], !1, null, null, null, !1, o["a"], s);
        t["default"] = u.exports;
    },
    "9f3a": function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n("70d8"), r = n.n(o);
        for (var a in o) "default" !== a && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(a);
        t["default"] = r.a;
    }
}, [ [ "27b5", "common/runtime", "common/vendor" ] ] ]);