(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/hotel/hotelDetial/hotelDetial" ], {
    "0e69": function(e, t, n) {
        "use strict";
        (function(e) {
            n("cee1");
            r(n("66fd"));
            var t = r(n("2260"));
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            e(t.default);
        }).call(this, n("543d")["createPage"]);
    },
    "16db": function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "c", function() {
            return s;
        }), n.d(t, "a", function() {
            return r;
        });
        var r = {
            beautyCalendar: function() {
                return n.e("components/beauty-calendar/beauty-calendar").then(n.bind(null, "aefa"));
            },
            sunuiCell: function() {
                return n.e("components/sunui-cell/sunui-cell").then(n.bind(null, "cf30"));
            },
            sunuiPopup: function() {
                return n.e("components/sunui-popup/sunui-popup").then(n.bind(null, "6cf4"));
            }
        }, a = function() {
            var e = this, t = e.$createElement, n = (e._self._c, Number(e.roomInfo.coupon_money)), r = n > 0 ? Number(e.roomInfo.coupon_money).toFixed(2) : null, a = e.startDate.split("-"), s = e.startDate.split("-"), o = e.timeNow ? e.timeNow.split("-") : null, i = e.timeNow ? e.timeNow.split("-") : null, u = 0 != e.userInfo.curDiscount ? Number(e.userInfo.curDiscount).toFixed(1) : null, c = e.less ? Number(e.less).toFixed(2) : null, l = 0 != e.deposit && 0 != e.deposit && 0 != e.deposit && "" != e.deposit && void 0 != e.deposit ? Number(e.deposit).toFixed(2) : null, d = Number(e.realPayment).toFixed(2), h = e.less && e.discountPrice && 1 == e.checked && e.less ? Number(e.less).toFixed(2) : null, f = e.less && e.discountPrice ? Number(e.discountPrice).toFixed(2) : null, p = !e.less && e.discountPrice ? Number(e.discountPrice).toFixed(2) : null;
            e.$mp.data = Object.assign({}, {
                $root: {
                    m0: n,
                    g0: r,
                    g1: a,
                    g2: s,
                    g3: o,
                    g4: i,
                    g5: u,
                    g6: c,
                    g7: l,
                    g8: d,
                    g9: h,
                    g10: f,
                    g11: p
                }
            });
        }, s = [];
    },
    2260: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("16db"), a = n("6aad");
        for (var s in a) "default" !== s && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(s);
        n("9e86");
        var o, i = n("f0c5"), u = Object(i["a"])(a["default"], r["b"], r["c"], !1, null, null, null, !1, r["a"], o);
        t["default"] = u.exports;
    },
    "6aad": function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("ae8c"), a = n.n(r);
        for (var s in r) "default" !== s && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(s);
        t["default"] = a.a;
    },
    "9e86": function(e, t, n) {
        "use strict";
        var r = n("f0a3"), a = n.n(r);
        a.a;
    },
    ae8c: function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = s(n("a34a")), a = s(n("0747"));
            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function o(e, t, n, r, a, s, o) {
                try {
                    var i = e[s](o), u = i.value;
                } catch (c) {
                    return void n(c);
                }
                i.done ? t(u) : Promise.resolve(u).then(r, a);
            }
            function i(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(r, a) {
                        var s = e.apply(t, n);
                        function i(e) {
                            o(s, r, a, i, u, "next", e);
                        }
                        function u(e) {
                            o(s, r, a, i, u, "throw", e);
                        }
                        i(void 0);
                    });
                };
            }
            var u = {
                data: function() {
                    var e = this.getDate({
                        format: !0
                    });
                    return {
                        checked: !0,
                        less: "",
                        lessId: "",
                        addre: this.$img.addre,
                        year: e.split("-")[0],
                        monthtime: e.split("-")[1],
                        day: e.split("-")[2],
                        monthtime2: "",
                        year2: "",
                        day2: "",
                        tianshu: 1,
                        timeNow: "",
                        datess: "",
                        dateaa: "",
                        roomInfo: {},
                        userInfo: {},
                        applyType: 1,
                        is_card: "",
                        deposit: "",
                        system: {},
                        realname: "",
                        idCard: "",
                        mobile: "",
                        orderList: [],
                        multi: !0,
                        autoChoose: !0,
                        startDate: new Date().toISOString().slice(0, 10),
                        rang: 13,
                        autoClear: !1,
                        isShow: !1,
                        addressList: [],
                        roomMessage: "请选择您的房间号 >",
                        roomMessageID: "",
                        getSeatInfo: [],
                        before_school: "",
                        sid: "",
                        roomAll: [],
                        getDefaultInfo: {}
                    };
                },
                computed: {
                    allPrice: function() {
                        var e = 0;
                        return e = Number(this.roomInfo.discount_prcie) * Number(this.tianshu), e;
                    },
                    discountPrice: function() {
                        var e = 0, t = Number(this.allPrice * (this.userInfo.curDiscount / 10)).toFixed(2);
                        return e = this.userInfo.curDiscount && 0 != this.userInfo.curDiscount && 0 != this.userInfo.curDiscount && 0 != this.userInfo.curDiscount && void 0 != this.userInfo.curDiscount ? Number(Number(this.allPrice) - Number(t)).toFixed(2) : 0, 
                        e;
                    },
                    allDiscount: function() {
                        var e = 0;
                        return e = 1 == this.checked ? Number(Number(this.discountPrice) + Number(this.less)).toFixed(2) : Number(this.discountPrice).toFixed(2), 
                        e;
                    },
                    realPayment: function() {
                        var e = 0;
                        return e = this.deposit ? Number(Number(this.allPrice) - Number(this.allDiscount) + Number(this.deposit)).toFixed(2) : Number(Number(this.allPrice) - Number(this.allDiscount)).toFixed(2), 
                        e;
                    }
                },
                onLoad: function(e) {
                    this.id = e.id, console.log("this.id----", this.id), this.userInfoes(), this.mounteds();
                },
                onShow: function() {
                    this.personName = e.getStorageSync("personName"), this.personMobile = e.getStorageSync("personMobile"), 
                    this.personCard = e.getStorageSync("personCard"), this.ids = e.getStorageSync("personID"), 
                    this.hotelRoom(), this.myAllCoupon(), this.DateDiff(), this.getSystem(), this.getDefaultPerson(), 
                    a.default.releaseKey("submit");
                },
                methods: {
                    getDefaultPerson: function() {
                        var t = this;
                        return i(r.default.mark(function n() {
                            var a;
                            return r.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, t.$http({
                                        url: t.$api.get_default_person,
                                        data: {
                                            uid: e.getStorageSync("uid").id
                                        }
                                    });

                                  case 2:
                                    a = n.sent, 0 == a.errno && (t.getDefaultInfo = a.data, console.log("获取默认地址this.getDefaultInfo======", t.getDefaultInfo));

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    selectRoom: function(e) {
                        var t = e.target.value;
                        console.log("房间号の3", e), this.before_school = this.roomAll[t].seat_no, this.sid = this.roomAll[t].id;
                    },
                    getSeats: function() {
                        var e = this;
                        return i(r.default.mark(function t() {
                            var n;
                            return r.default.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, e.$http({
                                        url: e.$api.get_seats,
                                        data: {
                                            room_id: e.roomInfo.id
                                        }
                                    });

                                  case 2:
                                    n = t.sent, 0 == n.errno && (e.getSeatInfo = n.data.data, e.getSeatInfo.filter(function(t, n) {
                                        1 == t.status && (e.roomAll.push(t), e.roomAll || (e.roomMessage = "暂无房间号", e.roomMessageID = 1));
                                    }));

                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    addressLists: function() {
                        var t = this;
                        return i(r.default.mark(function n() {
                            var a;
                            return r.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, t.$http({
                                        url: t.$api.get_persons,
                                        data: {
                                            uid: e.getStorageSync("uid").id
                                        }
                                    });

                                  case 2:
                                    a = n.sent, 0 == a.errno && (t.addressList = a.data, t.personName ? (t.realname = t.personName, 
                                    t.mobile = t.personMobile, t.idCard = t.personCard) : t.addressList[0] ? (t.realname = t.addressList[0].person_name, 
                                    t.mobile = t.addressList[0].person_mobile, t.idCard = t.addressList[0].person_card) : (t.realname = "", 
                                    t.mobile = "", t.idCard = ""), console.log("地址总列表==============", a, t.realname, t.mobile, t.idCard));

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    hotelDetials: function() {
                        e.navigateTo({
                            url: "/packages/hotel/hotelAddress/hotelAddress?id=" + this.id
                        }), console.log("id", this.id);
                    },
                    addressAign: function() {
                        e.navigateTo({
                            url: "/packages/hotel/hotelAddressNext/hotelAddressNext?type=1&name=" + this.userInfo.nickname + "&phone=" + this.userInfo.phone + "&switchChecked=1"
                        }), e.setNavigationBarTitle({
                            title: "新增联系方式"
                        });
                    },
                    useCoupons: function() {
                        var t = this;
                        return i(r.default.mark(function n() {
                            var a;
                            return r.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, t.$http({
                                        url: t.$api.use_coupon,
                                        data: {
                                            uid: e.getStorageSync("uid").id,
                                            id: t.lessId,
                                            region: ""
                                        }
                                    });

                                  case 2:
                                    a = n.sent, 0 == a.errno && (t.usecouponList = a.data);

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    previewImage: function(t) {
                        var n = this.roomInfo.carousel;
                        e.previewImage({
                            current: t,
                            urls: n
                        });
                    },
                    showBigImg: function(t, n) {
                        e.previewImage({
                            current: t,
                            urls: n
                        });
                    },
                    toChange: function() {
                        this.isShow = !this.isShow;
                    },
                    hotelCoupon: function() {
                        var t = this;
                        return i(r.default.mark(function n() {
                            var a;
                            return r.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, t.$http({
                                        url: t.$api.hotel_coupon,
                                        data: {
                                            uid: e.getStorageSync("uid").id,
                                            room_id: t.roomInfo.id,
                                            store_id: e.getStorageSync("hotelStoreNexts").id
                                        }
                                    });

                                  case 2:
                                    a = n.sent, 0 == a.errno ? (t.$sun.toast(a.message), t.myAllCoupon()) : t.$sun.toast(a.message);

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    getCoupon: function() {
                        var t = this;
                        return i(r.default.mark(function n() {
                            var a;
                            return r.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, t.$http({
                                        url: t.$api.use_coupon,
                                        data: {
                                            uid: e.getStorageSync("uid").id,
                                            price: t.realPayment,
                                            use_coupon: "",
                                            store_id: e.getStorageSync("hotelStoreNexts").id
                                        }
                                    });

                                  case 2:
                                    a = n.sent, 0 == a.errno && (t.couponList = a.data, t.couponList.filter(function(e, n) {
                                        t.$set(e, "checkCoupon", !1);
                                    }), 0 != t.couponList.length ? (t.coupons = "请选择优惠券", t.couponInfo = 0) : (t.coupons = "暂无优惠券", 
                                    t.couponInfo = 0));

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    hotelRoom: function() {
                        var t = this;
                        return i(r.default.mark(function n() {
                            var a, s;
                            return r.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, t.$http({
                                        url: t.$api.room_info,
                                        data: {
                                            id: t.id,
                                            store_id: e.getStorageSync("hotelStoreNexts").id
                                        }
                                    });

                                  case 2:
                                    a = n.sent, 0 == a.errno ? (t.roomInfo = a.data.room, t.getSeats(), t.$set(t.roomInfo, "name", t.getDefaultInfo.person_name), 
                                    t.$set(t.roomInfo, "mobile", t.getDefaultInfo.person_mobile), 0 == t.is_card && t.$set(t.roomInfo, "card", t.getDefaultInfo.person_card), 
                                    t.$set(t.roomInfo, "goods_id", t.roomInfo.id), t.$set(t.roomInfo, "original_price", t.roomInfo.price), 
                                    t.params = [], t.params.push(t.roomInfo)) : (s = e.getStorageSync("hotelStoreNexts").store_name, 
                                    s ? (setTimeout(function() {
                                        t.$sun.toast("“" + s + "” 没有该房间！");
                                    }, 2e3), e.navigateBack({
                                        delta: 1
                                    })) : (setTimeout(function() {
                                        t.$sun.toast("暂无该房间！");
                                    }, 2e3), e.navigateBack({
                                        delta: 1
                                    })));

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    getSystem: function() {
                        var e = this;
                        return i(r.default.mark(function t() {
                            var n;
                            return r.default.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, e.$http({
                                        url: e.$api.hotelSystem
                                    });

                                  case 2:
                                    n = t.sent, 0 == n.errno && (e.system = n.data, e.is_card = n.data.is_card, e.deposit = n.data.deposit);

                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    handleApplyType2: function(e) {
                        var t = e.detail.value;
                        this.applyType = t;
                    },
                    checkedOn: function() {
                        this.checked = 1 != this.checked, this.myAllCoupon();
                    },
                    handleApplyType: function(e) {
                        var t = e.detail.value;
                        this.applyType = t;
                    },
                    myAllCoupon: function() {
                        var t = this;
                        return i(r.default.mark(function n() {
                            var a;
                            return r.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, t.$http({
                                        url: t.$api.my_coupon,
                                        data: {
                                            uid: e.getStorageSync("uid").id,
                                            status: 1
                                        }
                                    });

                                  case 2:
                                    a = n.sent, 0 == a.errno && (t.couponList = a.data, t.couponList.filter(function(n) {
                                        return 0 == t.checked ? (t.less, t.lessId = "", console.log("this.chec2222222222222keed", t.checked, "this.less===", t.less, "this.lessId", t.lessId)) : 2 == n.sub_c_type && e.getStorageSync("hotelStoreNexts").id == n.sid && (console.log("find===========", n, n.less, "uni.getStorageSync(hotelStoreNexts).store_id", e.getStorageSync("hotelStoreNexts").id, n.sid), 
                                        t.less = n.less, t.lessId = n.id), n;
                                    }));

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    addOrders: function(t) {
                        var n = this;
                        return i(r.default.mark(function s() {
                            var o;
                            return r.default.wrap(function(r) {
                                while (1) switch (r.prev = r.next) {
                                  case 0:
                                    return r.next = 2, n.$http({
                                        url: n.$api.hotel_add_order,
                                        method: "POST",
                                        data: {
                                            member_discount: n.discountPrice,
                                            pay_type: n.applyType,
                                            uid: e.getStorageSync("uid").id,
                                            real_payment: Number(n.realPayment).toFixed(2),
                                            status: t,
                                            type: 2,
                                            unit_price: n.roomInfo.discount_prcie,
                                            num: 1,
                                            goods_id: n.roomInfo.id,
                                            list: n.params,
                                            coupon_id: 1 == n.checked ? n.lessId : "",
                                            discount: 1 == n.checked ? n.less : "",
                                            price: Number(n.allPrice).toFixed(2),
                                            store_name: e.getStorageSync("hotelStoreNexts").store_name,
                                            store_id: e.getStorageSync("hotelStoreNexts").id,
                                            reserve_start: n.startDate,
                                            reserve_end: n.timeNow,
                                            reserve_number: n.tianshu,
                                            deposit: n.deposit ? n.deposit : "",
                                            seat_number: n.sid
                                        }
                                    });

                                  case 2:
                                    o = r.sent, 0 == o.errno ? (n.useCoupons(), 1 == t ? e.redirectTo({
                                        url: "/packages/hotel/orderList/orderList?index=1"
                                    }) : e.redirectTo({
                                        url: "/packages/hotel/succesOrder/succesOrder"
                                    })) : (a.default.releaseKey("submit"), e.showModal({
                                        title: "提示",
                                        content: "请在后台配置微信支付基础配置信息，注：商品金额需要大于0",
                                        showCancel: !1
                                    }));

                                  case 4:
                                  case "end":
                                    return r.stop();
                                }
                            }, s);
                        }))();
                    },
                    userInfoes: function() {
                        var t = this;
                        return i(r.default.mark(function n() {
                            var a;
                            return r.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, t.$http({
                                        url: t.$api.userhy,
                                        data: {
                                            uid: e.getStorageSync("uid").id
                                        }
                                    });

                                  case 2:
                                    a = n.sent, 0 == a.errno && (t.userInfo = a.data, t.balance = t.userInfo.money);

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    getShopList: function() {
                        var e = this, t = getCurrentPages(), n = t[t.length - 2];
                        this.orderList = n.$vm.list, this.orderList = this.orderList.filter(function(t) {
                            return e.ids == t.id && (e.$set(t, "name", e.realname), e.$set(t, "mobile", e.mobile), 
                            e.$set(t, "card", e.idCard), e.$set(t, "goods_id", e.roomInfo.id)), t.id;
                        }), this.orderList.find(function(t) {
                            return e.id, t.id, t;
                        });
                    },
                    new2: function() {
                        this.$refs.pop.show({
                            style: "width:642rpx; height:auto;background-color: #FFFFFF;",
                            anim: "center",
                            topclose: !1
                        });
                    },
                    wansh: function() {
                        this.$refs.pop.close(), e.navigateTo({
                            url: "/packages/index/my/editProfile"
                        });
                    },
                    zhifus: function() {
                        var t = this, n = wx.getStorageSync("indexUrl");
                        if (this.isFirst = e.getStorageSync("uid").isFirst, 0 != this.isFirst) if (1 != n) this.new2(); else {
                            if (!this.getDefaultInfo.person_name) return console.log("this.getDefaultInfo.person_name", this.getDefaultInfo.person_name), 
                            this.$sun.toast("请去填写完善人员信息"), !1;
                            if (0 == this.is_card && !this.getDefaultInfo.person_card) return this.$sun.toast("请去填写完善您的身份证信息"), 
                            !1;
                            if (!this.roomInfo.apply_room_count && 0 == this.roomInfo.apply_room_count) return this.$sun.toast("暂无房间可选！"), 
                            !1;
                            if (!this.before_school) return this.$sun.toast("请选择房间号"), !1;
                            if (this.datess == this.timeNow) return this.$sun.toast("请选择离店时间"), !1;
                            if (0 == this.tianshu) return this.$sun.toast("入住天数为0，无法下单"), !1;
                            this.hotelRoom(), a.default.uniDoFunc({
                                key: "submit",
                                success: function() {
                                    var n = i(r.default.mark(function n() {
                                        var s, o, u;
                                        return r.default.wrap(function(n) {
                                            while (1) switch (n.prev = n.next) {
                                              case 0:
                                                if (a.default.lockKey("submit"), 1 != t.applyType) {
                                                    n.next = 13;
                                                    break;
                                                }
                                                if (0 != t.realPayment && 0 != t.realPayment && 0 != t.realPayment) {
                                                    n.next = 7;
                                                    break;
                                                }
                                                console.log("进入零元免微信支付"), t.addOrders(2), n.next = 11;
                                                break;

                                              case 7:
                                                return n.next = 9, t.$http({
                                                    url: t.$api.pay,
                                                    data: {
                                                        uid: e.getStorageSync("uid").id,
                                                        openid: wx.getStorageSync("openid"),
                                                        price: t.realPayment
                                                    }
                                                });

                                              case 9:
                                                s = n.sent, 0 == s.code ? (o = s.data, t.$sun.wePay(o, function() {
                                                    var e = i(r.default.mark(function e(n) {
                                                        return r.default.wrap(function(e) {
                                                            while (1) switch (e.prev = e.next) {
                                                              case 0:
                                                                console.log("进入微信支付"), t.addOrders(2);

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
                                                    var e = i(r.default.mark(function e(n) {
                                                        return r.default.wrap(function(e) {
                                                            while (1) switch (e.prev = e.next) {
                                                              case 0:
                                                                console.log("进入待支付状态", n), -1 != JSON.parse(n).errMsg.indexOf("requestPayment:fail cancel") ? t.addOrders(1) : (t.$sun.toast("您已取消支付"), 
                                                                a.default.releaseKey("submit"));

                                                              case 2:
                                                              case "end":
                                                                return e.stop();
                                                            }
                                                        }, e);
                                                    }));
                                                    return function(t) {
                                                        return e.apply(this, arguments);
                                                    };
                                                }())) : (t.$sun.toast("支付失败"), a.default.releaseKey("submit"));

                                              case 11:
                                                n.next = 29;
                                                break;

                                              case 13:
                                                if (2 != t.applyType) {
                                                    n.next = 28;
                                                    break;
                                                }
                                                if (console.log("余额支付", t.balance, t.realPayment), !(Number(t.balance) < Number(t.realPayment))) {
                                                    n.next = 22;
                                                    break;
                                                }
                                                return console.log("余额支付", t.balance, t.realPayment), t.$sun.toast("您的余额不足，请使用微信支付."), 
                                                a.default.releaseKey("submit"), n.abrupt("return");

                                              case 22:
                                                return n.next = 24, t.$http({
                                                    url: t.$api.balance_pay,
                                                    data: {
                                                        uid: e.getStorageSync("uid").id,
                                                        price: t.realPayment,
                                                        pay_type: t.applyType
                                                    }
                                                });

                                              case 24:
                                                u = n.sent, 0 == u.errno ? (console.log("余额支付成功！调用add_order接口="), t.addOrders(2)) : (t.$sun.toast("支付失败"), 
                                                a.default.releaseKey("submit"));

                                              case 26:
                                                n.next = 29;
                                                break;

                                              case 28:
                                                a.default.releaseKey("submit");

                                              case 29:
                                              case "end":
                                                return n.stop();
                                            }
                                        }, n);
                                    }));
                                    function s() {
                                        return n.apply(this, arguments);
                                    }
                                    return s;
                                }()
                            });
                        } else {
                            if (!this.getDefaultInfo.person_name) return this.$sun.toast("请去填写完善人员信息"), !1;
                            if (0 == this.is_card && !this.getDefaultInfo.person_card) return this.$sun.toast("请去填写完善您的身份证信息"), 
                            !1;
                            if (!this.roomInfo.apply_room_count && 0 == this.roomInfo.apply_room_count) return this.$sun.toast("暂无房间可选！"), 
                            !1;
                            if (!this.before_school) return this.$sun.toast("请选择房间号"), !1;
                            if (this.datess == this.timeNow) return this.$sun.toast("请选择离店时间"), !1;
                            if (0 == this.tianshu) return this.$sun.toast("入住天数为0，无法下单"), !1;
                            this.hotelRoom(), a.default.uniDoFunc({
                                key: "submit",
                                success: function() {
                                    var n = i(r.default.mark(function n() {
                                        var s, o, u;
                                        return r.default.wrap(function(n) {
                                            while (1) switch (n.prev = n.next) {
                                              case 0:
                                                if (a.default.lockKey("submit"), 1 != t.applyType) {
                                                    n.next = 13;
                                                    break;
                                                }
                                                if (0 != t.realPayment && 0 != t.realPayment && 0 != t.realPayment) {
                                                    n.next = 7;
                                                    break;
                                                }
                                                console.log("进入零元免微信支付"), t.addOrders(2), n.next = 11;
                                                break;

                                              case 7:
                                                return n.next = 9, t.$http({
                                                    url: t.$api.pay,
                                                    data: {
                                                        uid: e.getStorageSync("uid").id,
                                                        openid: wx.getStorageSync("openid"),
                                                        price: t.realPayment
                                                    }
                                                });

                                              case 9:
                                                s = n.sent, 0 == s.code ? (o = s.data, t.$sun.wePay(o, function() {
                                                    var e = i(r.default.mark(function e(n) {
                                                        return r.default.wrap(function(e) {
                                                            while (1) switch (e.prev = e.next) {
                                                              case 0:
                                                                console.log("进入微信支付"), t.addOrders(2);

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
                                                    var e = i(r.default.mark(function e(n) {
                                                        return r.default.wrap(function(e) {
                                                            while (1) switch (e.prev = e.next) {
                                                              case 0:
                                                                console.log("进入待支付状态", n), -1 != JSON.parse(n).errMsg.indexOf("requestPayment:fail cancel") ? t.addOrders(1) : (t.$sun.toast("您已取消支付"), 
                                                                a.default.releaseKey("submit"));

                                                              case 2:
                                                              case "end":
                                                                return e.stop();
                                                            }
                                                        }, e);
                                                    }));
                                                    return function(t) {
                                                        return e.apply(this, arguments);
                                                    };
                                                }())) : (t.$sun.toast("支付失败"), a.default.releaseKey("submit"));

                                              case 11:
                                                n.next = 29;
                                                break;

                                              case 13:
                                                if (2 != t.applyType) {
                                                    n.next = 28;
                                                    break;
                                                }
                                                if (console.log("余额支付", t.balance, t.realPayment), !(Number(t.balance) < Number(t.realPayment))) {
                                                    n.next = 22;
                                                    break;
                                                }
                                                return console.log("余额支付", t.balance, t.realPayment), t.$sun.toast("您的余额不足，请使用微信支付."), 
                                                a.default.releaseKey("submit"), n.abrupt("return");

                                              case 22:
                                                return n.next = 24, t.$http({
                                                    url: t.$api.balance_pay,
                                                    data: {
                                                        uid: e.getStorageSync("uid").id,
                                                        price: t.realPayment,
                                                        pay_type: t.applyType
                                                    }
                                                });

                                              case 24:
                                                u = n.sent, 0 == u.errno ? (console.log("余额支付成功！调用add_order接口="), t.addOrders(2)) : (t.$sun.toast("支付失败"), 
                                                a.default.releaseKey("submit"));

                                              case 26:
                                                n.next = 29;
                                                break;

                                              case 28:
                                                a.default.releaseKey("submit");

                                              case 29:
                                              case "end":
                                                return n.stop();
                                            }
                                        }, n);
                                    }));
                                    function s() {
                                        return n.apply(this, arguments);
                                    }
                                    return s;
                                }()
                            });
                        }
                    },
                    mounteds: function() {
                        var e = new Date(), t = e.getFullYear(), n = (e.getMonth() + 1).toString().padStart(2, "0"), r = (e.getDate() + 1).toString().padStart(2, "0"), a = t + "-" + n + "-" + r;
                        this.timeNow = a;
                    },
                    mounted: function() {
                        var e = new Date(), t = "周" + "日一二三四五六".charAt(new Date().getDay());
                        e.setDate(e.getDate() + 1), this.timeNow = e.toLocaleDateString(), this.monthtime2 = this.timeNow.split("/")[1], 
                        this.day2 = this.timeNow.split("/")[2], this.xingqi = t, this.monthtime2, this.monthtime2 < 10 && (this.monthtime2 = "0" + this.monthtime2), 
                        this.day2, this.day2 < 10 && (this.day2 = "0" + this.day2);
                    },
                    show: function() {
                        this.$refs.calendar.open();
                    },
                    change: function(e) {
                        this.startDate = e[0], this.timeNow = e[e.length - 1], wx.setStorageSync("startDate", this.startDate), 
                        wx.setStorageSync("timeNow", this.timeNow), this.DateDiff();
                    },
                    DateDiff: function() {
                        var e = new Date(this.startDate).getTime(), t = new Date(this.timeNow).getTime();
                        this.tianshu = parseInt(Math.abs(t - e) / 1e3 / 60 / 60 / 24);
                    },
                    bindDateChange2: function(e) {
                        this.dateaa = e.target.value, this.year = this.dateaa.split("-")[0], this.day = this.dateaa.split("-")[2], 
                        this.monthtime = this.dateaa.split("-")[1], this.DateDiff();
                    },
                    bindDateChange: function(e) {
                        this.date2 = e.target.value, this.day2 = this.date2.split("-")[2], this.monthtime2 = this.date2.split("-")[1], 
                        this.year2 = this.date2.split("-")[0], this.datess = this.year + "-" + this.monthtime2 + "-" + this.day2;
                        "日一二三四五六".charAt(new Date().getDay());
                        this.DateDiff();
                    },
                    getDate: function(e) {
                        var t = new Date(), n = t.getFullYear(), r = t.getMonth() + 1, a = t.getDate();
                        return "start" === e ? n -= 60 : "end" === e && (n += 2), r = r > 9 ? r : "0" + r, 
                        a = a > 9 ? a : "0" + a, "".concat(n, "-").concat(r, "-").concat(a);
                    }
                }
            };
            t.default = u;
        }).call(this, n("543d")["default"]);
    },
    f0a3: function(e, t, n) {}
}, [ [ "0e69", "common/runtime", "common/vendor" ] ] ]);