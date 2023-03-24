(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/hotel/orderList/orderList" ], {
    2644: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("5c23"), a = n.n(r);
        for (var o in r) "default" !== o && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(o);
        t["default"] = a.a;
    },
    "5c23": function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = a(n("a34a"));
            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function o(e, t, n, r, a, o, i) {
                try {
                    var s = e[o](i), u = s.value;
                } catch (c) {
                    return void n(c);
                }
                s.done ? t(u) : Promise.resolve(u).then(r, a);
            }
            function i(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(r, a) {
                        var i = e.apply(t, n);
                        function s(e) {
                            o(i, r, a, s, u, "next", e);
                        }
                        function u(e) {
                            o(i, r, a, s, u, "throw", e);
                        }
                        s(void 0);
                    });
                };
            }
            var s = {
                data: function() {
                    return {
                        navIndex3: 0,
                        navItem3: [ {
                            title: "全部",
                            id: ""
                        }, {
                            title: "待付款",
                            id: 1
                        }, {
                            title: "待入住",
                            id: 2
                        }, {
                            title: "已入住",
                            id: 3
                        }, {
                            title: "已完成",
                            id: 4
                        } ],
                        orderList: [],
                        goodInfo: [],
                        goodInfos: [],
                        aa: [],
                        applyType: 1,
                        startCreatetime: "12:00:00",
                        createtime: "",
                        timers: "",
                        hourDifference: "",
                        liquidatedDamages: "",
                        wyjContent: "",
                        timeYD: "",
                        roomInfo: {}
                    };
                },
                computed: {
                    orderStatus: function() {
                        return function(e) {
                            var t = [ "已退款", "待支付", "待入住", "已入住", "已完成" ];
                            return t[e];
                        };
                    }
                },
                onShow: function() {
                    this.mescroll.resetUpScroll(), this.getTime(), this.navChange3(Number(this.options.index));
                },
                onLoad: function(e) {
                    this.userInfoes(), this.options = e, console.log(e, "userInfoesoptions=============", this.options.index);
                },
                methods: {
                    store2: function() {
                        this.$refs.pop.show({
                            style: "width:642rpx; height:auto;background-color: #FFFFFF;",
                            anim: "center",
                            topclose: !1
                        });
                    },
                    wansh2: function() {
                        this.$refs.pop.close();
                    },
                    getTime: function() {
                        var e = new Date(), t = e.getFullYear(), n = e.getMonth() + 1, r = e.getDate(), a = e.getHours() < 10 ? "0" + e.getHours() : e.getHours(), o = e.getMinutes() < 10 ? "0" + e.getMinutes() : e.getMinutes(), i = e.getSeconds() < 10 ? "0" + e.getSeconds() : e.getSeconds();
                        n >= 1 && n <= 9 && (n = "0" + n), r >= 0 && r <= 9 && (r = "0" + r);
                        var s = t + "-" + n + "-" + r + " " + a + ":" + o + ":" + i;
                        return this.timers = s, console.log(s, "时间this.timer================", this.timers), 
                        s;
                    },
                    DateDiff2: function() {
                        var e = new Date(this.timers.replace(/\-/g, "/")).getTime(), t = new Date(this.createtime.replace(/\-/g, "/")).getTime();
                        console.log("sDate1开始时间", e, "sDate2结束时间", t), this.hourDifference = parseInt(Math.abs(t - e) / 36e5), 
                        t > e ? (console.log("退款时间 大于开始预定时间"), this.timeYD = "") : (console.log("退款时间 小于开始预定时间"), 
                        this.timeYD = 1), this.hourDifference < this.system.free_hour && (this.liquidatedDamages = Number(Number(this.system.promise_money) + (Number(this.system.free_hour) - Number(this.hourDifference)) * Number(this.system.promise_add_money)).toFixed(2), 
                        this.wyjContent = "当前退款违约金为" + this.liquidatedDamages, console.log("this.liquidatedDamages==========", this.liquidatedDamages, "this.wyjContent", this.wyjContent));
                    },
                    getSystem: function(e) {
                        var t = this;
                        return i(r.default.mark(function n() {
                            var a, o;
                            return r.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, t.$http({
                                        url: t.$api.hotelSystem
                                    });

                                  case 2:
                                    a = n.sent, 0 == a.errno && (t.system = a.data, t.arrive_time = a.data.arrive_time, 
                                    console.log("this.arrive_time=======", t.arrive_time), t.arrive_time ? (t.orderList.filter(function(n) {
                                        return e == n.id && (t.createtime = n.reserve_start + " " + t.arrive_time), t.DateDiff2(), 
                                        n.id;
                                    }), t.refundOrders(e)) : (o = "12:00:00", t.orderList.filter(function(n) {
                                        return e == n.id && (t.createtime = n.reserve_start + " " + o), t.DateDiff2(), n.id;
                                    }), t.refundOrders(e)));

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    refundOrders: function(t) {
                        var n = this;
                        return i(r.default.mark(function a() {
                            return r.default.wrap(function(a) {
                                while (1) switch (a.prev = a.next) {
                                  case 0:
                                    console.log("申请退款流程ing=======================", t), t && (n.hourDifference < n.system.back_hour || 1 == n.timeYD ? (n.$sun.toast("超时 不允许退款!"), 
                                    console.log("this.hourDifference", n.hourDifference, "this.system.back_hour", n.system.back_hour, "this.timeYD", n.timeYD)) : (console.log("进入弹出框======"), 
                                    e.showModal({
                                        title: "温馨提示",
                                        confirmColor: "#ff6145",
                                        content: "您确定要退款吗?\r\n" + n.wyjContent,
                                        success: function() {
                                            var a = i(r.default.mark(function a(o) {
                                                var i;
                                                return r.default.wrap(function(r) {
                                                    while (1) switch (r.prev = r.next) {
                                                      case 0:
                                                        if (!o.confirm) {
                                                            r.next = 5;
                                                            break;
                                                        }
                                                        return r.next = 3, n.$http({
                                                            url: n.$api.refund_order,
                                                            data: {
                                                                orderid: t
                                                            }
                                                        });

                                                      case 3:
                                                        i = r.sent, 0 == i.errno && (n.refundOrder2 = i.data, console.log("申请退款", i, n.refundOrder2), 
                                                        e.setNavigationBarTitle({
                                                            title: n.refundOrder2.index_title
                                                        }), n.$sun.toast(i.message), n.mescroll.resetUpScroll());

                                                      case 5:
                                                      case "end":
                                                        return r.stop();
                                                    }
                                                }, a);
                                            }));
                                            function o(e) {
                                                return a.apply(this, arguments);
                                            }
                                            return o;
                                        }()
                                    })));

                                  case 2:
                                  case "end":
                                    return a.stop();
                                }
                            }, a);
                        }))();
                    },
                    checkOut: function(t, n) {
                        e.navigateTo({
                            url: "/packages/hotel/checkOut-Hotel/checkOut-Hotel?id=" + t.id + "&index=" + this.navIndex3 + "&roomid=" + n + "&store_id=" + t.store_id
                        }), console.log("item========", t, "roomid========", n);
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
                    upCallback: function(t) {
                        var n = this;
                        return i(r.default.mark(function a() {
                            var o, i, s;
                            return r.default.wrap(function(r) {
                                while (1) switch (r.prev = r.next) {
                                  case 0:
                                    return r.next = 2, n.$http({
                                        url: n.$api.my_hotel_order,
                                        data: {
                                            uid: e.getStorageSync("uid").id,
                                            status: n.navItem3[n.navIndex3].id,
                                            page: t.num,
                                            psize: 10
                                        }
                                    });

                                  case 2:
                                    if (o = r.sent, 0 == o.errno) for (n.mescroll.endByPage(o.data.list.length, o.data.total), 
                                    1 == t.num && (n.orderList = []), n.orderList = n.orderList.concat(o.data.list), 
                                    n.goodInfo = [], i = 0; i < n.orderList.length; i++) n.goodInfos = n.orderList[i].goods, 
                                    s = new Array(), n.goodInfos.find(function(e) {
                                        s.push(e);
                                    });

                                  case 4:
                                  case "end":
                                    return r.stop();
                                }
                            }, a);
                        }))();
                    },
                    navChange3: function(e) {
                        this.navIndex3 = e, this.$sun.title(this.navItem3[this.navIndex3].title), this.mescroll.resetUpScroll();
                    },
                    detialNext: function(t) {
                        e.navigateTo({
                            url: "/packages/hotel/orderDetials/orderDetials?id=" + t + "&index=" + this.navIndex3
                        }), console.log("this.navIndex3aaaaaaaaaaaaaaaaa", this.navIndex3);
                    },
                    reserveAlign: function(t, n) {
                        this.roomInfo = {}, this.$set(this.roomInfo, "id", t.store_id), this.$set(this.roomInfo, "store_name", t.store_name), 
                        wx.setStorageSync("hotelStoreNexts", this.roomInfo), console.log("this.roomInfoaaaaaaaaaaaaaaa=============", this.roomInfo), 
                        e.redirectTo({
                            url: "/packages/hotel/hotelDetial/hotelDetial?id=" + n
                        }), console.log("订单传入页面的id", n);
                    },
                    handleOperate: function(t, n) {
                        var a = this, o = t.id, s = Number(t.real_payment);
                        switch (n) {
                          case "pay":
                            e.showActionSheet({
                                itemList: [ "微信支付", "余额支付" ],
                                success: function() {
                                    var t = i(r.default.mark(function t(n) {
                                        var u, c, d, l, f;
                                        return r.default.wrap(function(t) {
                                            while (1) switch (t.prev = t.next) {
                                              case 0:
                                                u = n.tapIndex, t.t0 = u, t.next = 0 === t.t0 ? 4 : 1 === t.t0 ? 10 : 28;
                                                break;

                                              case 4:
                                                return a.applyType = 1, t.next = 7, a.$http({
                                                    url: a.$api.pay,
                                                    data: {
                                                        uid: e.getStorageSync("uid").id,
                                                        price: s,
                                                        openid: wx.getStorageSync("openid")
                                                    }
                                                });

                                              case 7:
                                                return c = t.sent, 0 == c.code && (d = c.data, a.$sun.wePay(d, function() {
                                                    var t = i(r.default.mark(function t(n) {
                                                        var i;
                                                        return r.default.wrap(function(t) {
                                                            while (1) switch (t.prev = t.next) {
                                                              case 0:
                                                                return t.next = 2, a.$http({
                                                                    url: a.$api.hotel_edit_order,
                                                                    data: {
                                                                        uid: e.getStorageSync("uid").id,
                                                                        status: 2,
                                                                        id: o,
                                                                        pay_type: a.applyType
                                                                    }
                                                                });

                                                              case 2:
                                                                i = t.sent, 0 == i.code && (a.$sun.toast(i.message), a.navChange3(2), a.kfTemplate && a.acceptMessage());

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
                                                    var e = i(r.default.mark(function e(t) {
                                                        return r.default.wrap(function(e) {
                                                            while (1) switch (e.prev = e.next) {
                                                              case 0:
                                                                a.$sun.toast("取消了支付");

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
                                                if (a.applyType = 2, console.log(s, "this.userInfo.money", "555", a.balance), !(Number(a.balance) < Number(s))) {
                                                    t.next = 16;
                                                    break;
                                                }
                                                a.$sun.toast("您的余额不足，请使用微信支付."), t.next = 27;
                                                break;

                                              case 16:
                                                return t.next = 18, a.$http({
                                                    url: a.$api.balance_pay,
                                                    data: {
                                                        uid: e.getStorageSync("uid").id,
                                                        price: s,
                                                        pay_type: a.applyType
                                                    }
                                                });

                                              case 18:
                                                if (l = t.sent, 0 != l.errno) {
                                                    t.next = 26;
                                                    break;
                                                }
                                                return t.next = 22, a.$http({
                                                    url: a.$api.hotel_edit_order,
                                                    data: {
                                                        status: 2,
                                                        id: o,
                                                        pay_type: a.applyType
                                                    }
                                                });

                                              case 22:
                                                f = t.sent, 0 == f.errno ? (a.$sun.toast(f.message), a.navChange3(2), a.kfTemplate && a.acceptMessage()) : a.$sun.toast(f.message), 
                                                t.next = 27;
                                                break;

                                              case 26:
                                                a.$sun.toast(orderInfo.message);

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
                                    var t = i(r.default.mark(function t(n) {
                                        var i;
                                        return r.default.wrap(function(t) {
                                            while (1) switch (t.prev = t.next) {
                                              case 0:
                                                if (!n.confirm) {
                                                    t.next = 5;
                                                    break;
                                                }
                                                return t.next = 3, a.$http({
                                                    url: a.$api.hotel_edit_order,
                                                    data: {
                                                        uid: e.getStorageSync("uid").id,
                                                        status: 0,
                                                        id: o
                                                    }
                                                });

                                              case 3:
                                                i = t.sent, 0 == i.errno && (a.$sun.toast(i.message), a.mescroll.resetUpScroll());

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
            t.default = s;
        }).call(this, n("543d")["default"]);
    },
    c75b: function(e, t, n) {
        "use strict";
        (function(e) {
            n("cee1");
            r(n("66fd"));
            var t = r(n("dbb3"));
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            e(t.default);
        }).call(this, n("543d")["createPage"]);
    },
    cadc: function(e, t, n) {},
    dbb3: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("e8b0"), a = n("2644");
        for (var o in a) "default" !== o && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(o);
        n("e13d");
        var i, s = n("f0c5"), u = Object(s["a"])(a["default"], r["b"], r["c"], !1, null, null, null, !1, r["a"], i);
        t["default"] = u.exports;
    },
    e13d: function(e, t, n) {
        "use strict";
        var r = n("cadc"), a = n.n(r);
        a.a;
    },
    e8b0: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "a", function() {
            return r;
        });
        var r = {
            sunuiNavbar: function() {
                return n.e("components/sunui-navbar/sunui-navbar").then(n.bind(null, "6b73"));
            },
            sunuiPopup: function() {
                return n.e("components/sunui-popup/sunui-popup").then(n.bind(null, "6cf4"));
            }
        }, a = function() {
            var e = this, t = e.$createElement, n = (e._self._c, e.__map(e.orderList, function(t, n) {
                var r = e.__get_orig(t), a = e.orderStatus(t.status);
                return {
                    $orig: r,
                    m0: a
                };
            }));
            e.$mp.data = Object.assign({}, {
                $root: {
                    l0: n
                }
            });
        }, o = [];
    }
}, [ [ "c75b", "common/runtime", "common/vendor" ] ] ]);