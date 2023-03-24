(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/hotel/orderDetials/orderDetials" ], {
    "0169": function(e, t, r) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = a(r("a34a"));
            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function i(e, t, r, n, a, i, s) {
                try {
                    var o = e[i](s), u = o.value;
                } catch (c) {
                    return void r(c);
                }
                o.done ? t(u) : Promise.resolve(u).then(n, a);
            }
            function s(e) {
                return function() {
                    var t = this, r = arguments;
                    return new Promise(function(n, a) {
                        var s = e.apply(t, r);
                        function o(e) {
                            i(s, n, a, o, u, "next", e);
                        }
                        function u(e) {
                            i(s, n, a, o, u, "throw", e);
                        }
                        o(void 0);
                    });
                };
            }
            var o = {
                data: function() {
                    return {
                        id: "",
                        order: {},
                        orderGoods: [],
                        reserveStart: "",
                        reserveEnd: "",
                        system: {},
                        options: {},
                        startCreatetime: "12:00:00",
                        createtime: "",
                        timers: "",
                        hourDifference: "",
                        liquidatedDamages: "",
                        wyjContent: "",
                        timeYD: ""
                    };
                },
                onLoad: function(e) {
                    this.options = e, console.log(e, "options"), this.id = e.id, this.getOrderDetail(), 
                    this.getTime();
                },
                onShow: function() {
                    this.getSystem(), this.userInfoes();
                },
                methods: {
                    getTime: function() {
                        var e = new Date(), t = e.getFullYear(), r = e.getMonth() + 1, n = e.getDate(), a = e.getHours() < 10 ? "0" + e.getHours() : e.getHours(), i = e.getMinutes() < 10 ? "0" + e.getMinutes() : e.getMinutes(), s = e.getSeconds() < 10 ? "0" + e.getSeconds() : e.getSeconds();
                        r >= 1 && r <= 9 && (r = "0" + r), n >= 0 && n <= 9 && (n = "0" + n);
                        var o = t + "-" + r + "-" + n + " " + a + ":" + i + ":" + s;
                        return this.timers = o, console.log(o, "时间this.timer================", this.timers), 
                        o;
                    },
                    DateDiff2: function() {
                        var e = new Date(this.timers).getTime(), t = new Date(this.createtime).getTime();
                        this.hourDifference = parseInt(Math.abs(t - e) / 36e5), t > e ? (console.log("退款时间 大于开始预定时间"), 
                        this.timeYD = "") : (console.log("退款时间 小于开始预定时间"), this.timeYD = 1), this.hourDifference < this.system.free_hour && (this.liquidatedDamages = Number(Number(this.system.promise_money) + (Number(this.system.free_hour) - Number(this.hourDifference)) * Number(this.system.promise_add_money)).toFixed(2), 
                        this.wyjContent = "当前退款违约金为" + this.liquidatedDamages, console.log("this.liquidatedDamages==========", this.liquidatedDamages, "this.wyjContent", this.wyjContent));
                    },
                    getSystem: function() {
                        var e = this;
                        return s(n.default.mark(function t() {
                            var r, a;
                            return n.default.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, e.$http({
                                        url: e.$api.hotelSystem
                                    });

                                  case 2:
                                    r = t.sent, 0 == r.errno && (e.system = r.data, e.arrive_time = r.data.arrive_time, 
                                    console.log("this.arrive_time=======", e.arrive_time), e.arrive_time ? (e.createtime = e.order.reserve_start + " " + e.arrive_time, 
                                    e.DateDiff2()) : (a = "12:00:00", e.createtime = e.order.reserve_start + " " + a, 
                                    e.DateDiff2()));

                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    checkOut: function(t, r) {
                        e.navigateTo({
                            url: "/packages/hotel/checkOut-Hotel/checkOut-Hotel?id=" + t.id + "&roomid=" + r + "&store_id=" + t.store_id
                        }), console.log("item========", t, "roomid========", r);
                    },
                    refundOrders: function(t) {
                        var r = this;
                        return s(n.default.mark(function a() {
                            return n.default.wrap(function(a) {
                                while (1) switch (a.prev = a.next) {
                                  case 0:
                                    console.log("申请退款流程ing=======================", t), t && (r.hourDifference < r.system.back_hour || 1 == r.timeYD ? (r.$sun.toast("超时 不允许退款!"), 
                                    console.log("this.hourDifference", r.hourDifference, "this.system.back_hour", r.system.back_hour, "this.timeYD", r.timeYD)) : (console.log("进入弹出框======"), 
                                    e.showModal({
                                        title: "温馨提示",
                                        confirmColor: "#ff6145",
                                        content: "您确定要退款吗?\r\n" + r.wyjContent,
                                        success: function() {
                                            var a = s(n.default.mark(function a(i) {
                                                var s;
                                                return n.default.wrap(function(n) {
                                                    while (1) switch (n.prev = n.next) {
                                                      case 0:
                                                        if (!i.confirm) {
                                                            n.next = 5;
                                                            break;
                                                        }
                                                        return n.next = 3, r.$http({
                                                            url: r.$api.refund_order,
                                                            data: {
                                                                orderid: t
                                                            }
                                                        });

                                                      case 3:
                                                        s = n.sent, 0 == s.errno && (r.refundOrder2 = s.data, console.log("申请退款", s, r.refundOrder2), 
                                                        e.setNavigationBarTitle({
                                                            title: r.refundOrder2.index_title
                                                        }), r.$sun.toast(s.message));

                                                      case 5:
                                                      case "end":
                                                        return n.stop();
                                                    }
                                                }, a);
                                            }));
                                            function i(e) {
                                                return a.apply(this, arguments);
                                            }
                                            return i;
                                        }()
                                    })));

                                  case 2:
                                  case "end":
                                    return a.stop();
                                }
                            }, a);
                        }))();
                    },
                    userInfoes: function() {
                        var t = this;
                        return s(n.default.mark(function r() {
                            var a;
                            return n.default.wrap(function(r) {
                                while (1) switch (r.prev = r.next) {
                                  case 0:
                                    return r.next = 2, t.$http({
                                        url: t.$api.userhy,
                                        data: {
                                            uid: e.getStorageSync("uid").id
                                        }
                                    });

                                  case 2:
                                    a = r.sent, 0 == a.errno && (t.userInfo = a.data, t.balance = t.userInfo.money);

                                  case 4:
                                  case "end":
                                    return r.stop();
                                }
                            }, r);
                        }))();
                    },
                    deteleOne: function(t) {
                        var r = this;
                        return s(n.default.mark(function a() {
                            return n.default.wrap(function(a) {
                                while (1) switch (a.prev = a.next) {
                                  case 0:
                                    e.showModal({
                                        title: "提示",
                                        confirmColor: "#ff6145",
                                        content: "您确定删除订单吗?",
                                        success: function() {
                                            var a = s(n.default.mark(function a(i) {
                                                var s;
                                                return n.default.wrap(function(n) {
                                                    while (1) switch (n.prev = n.next) {
                                                      case 0:
                                                        if (!i.confirm) {
                                                            n.next = 5;
                                                            break;
                                                        }
                                                        return n.next = 3, r.$http({
                                                            url: r.$api.del_hotel_order,
                                                            data: {
                                                                id: t
                                                            }
                                                        });

                                                      case 3:
                                                        s = n.sent, 0 == s.errno && (r.$sun.toast(s.message), e.navigateBack({
                                                            delta: 1
                                                        }));

                                                      case 5:
                                                      case "end":
                                                        return n.stop();
                                                    }
                                                }, a);
                                            }));
                                            function i(e) {
                                                return a.apply(this, arguments);
                                            }
                                            return i;
                                        }()
                                    });

                                  case 1:
                                  case "end":
                                    return a.stop();
                                }
                            }, a);
                        }))();
                    },
                    getOrderDetail: function() {
                        var e = this;
                        return s(n.default.mark(function t() {
                            var r, a, i, s;
                            return n.default.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                  case 0:
                                    return r = getCurrentPages(), a = r[r.length - 2], a.$vm.options.index = e.options.index, 
                                    i = e.options.id, t.next = 6, e.$http({
                                        url: e.$api.hotel_order_info,
                                        data: {
                                            id: i
                                        }
                                    });

                                  case 6:
                                    s = t.sent, 0 == s.errno && (e.order = s.data, e.orderGoods = s.data.goods, e.reserveStart = s.data.reserve_start, 
                                    e.reserveEnd = s.data.reserve_end);

                                  case 8:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    handleOperate: function(t, r) {
                        var a = this, i = t.id, o = Number(t.real_payment);
                        switch (r) {
                          case "pay":
                            e.showActionSheet({
                                itemList: [ "微信支付", "余额支付" ],
                                success: function() {
                                    var t = s(n.default.mark(function t(r) {
                                        var u, c, d, l, f;
                                        return n.default.wrap(function(t) {
                                            while (1) switch (t.prev = t.next) {
                                              case 0:
                                                u = r.tapIndex, t.t0 = u, t.next = 0 === t.t0 ? 4 : 1 === t.t0 ? 10 : 28;
                                                break;

                                              case 4:
                                                return a.applyType = 1, t.next = 7, a.$http({
                                                    url: a.$api.pay,
                                                    data: {
                                                        uid: e.getStorageSync("uid").id,
                                                        price: o,
                                                        openid: wx.getStorageSync("openid")
                                                    }
                                                });

                                              case 7:
                                                return c = t.sent, 0 == c.code && (d = c.data, a.$sun.wePay(d, function() {
                                                    var t = s(n.default.mark(function t(r) {
                                                        var s;
                                                        return n.default.wrap(function(t) {
                                                            while (1) switch (t.prev = t.next) {
                                                              case 0:
                                                                return t.next = 2, a.$http({
                                                                    url: a.$api.edit_foodsOrder_order,
                                                                    data: {
                                                                        uid: e.getStorageSync("uid").id,
                                                                        status: 2,
                                                                        id: i,
                                                                        pay_type: a.applyType
                                                                    }
                                                                });

                                                              case 2:
                                                                s = t.sent, 0 == s.code && (a.$sun.toast(s.message), e.navigateBack({
                                                                    delta: 1
                                                                }));

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
                                                    var e = s(n.default.mark(function e(t) {
                                                        return n.default.wrap(function(e) {
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
                                                if (a.applyType = 2, console.log(o, "this.userInfo.money", "555", a.balance), !(Number(a.balance) < Number(o))) {
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
                                                        price: o,
                                                        pay_type: a.applyType
                                                    }
                                                });

                                              case 18:
                                                if (l = t.sent, 0 != l.errno) {
                                                    t.next = 26;
                                                    break;
                                                }
                                                return t.next = 22, a.$http({
                                                    url: a.$api.edit_foodsOrder_order,
                                                    data: {
                                                        status: 2,
                                                        id: i,
                                                        pay_type: a.applyType
                                                    }
                                                });

                                              case 22:
                                                f = t.sent, 0 == f.errno ? (a.$sun.toast(f.message), e.navigateBack({
                                                    delta: 1
                                                })) : a.$sun.toast(f.message), t.next = 27;
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
                                    function r(e) {
                                        return t.apply(this, arguments);
                                    }
                                    return r;
                                }()
                            });
                            break;

                          case "cancel":
                            e.showModal({
                                title: "提示",
                                confirmColor: "#ff6145",
                                content: "您确定取消订单吗?",
                                success: function() {
                                    var t = s(n.default.mark(function t(r) {
                                        var s;
                                        return n.default.wrap(function(t) {
                                            while (1) switch (t.prev = t.next) {
                                              case 0:
                                                if (!r.confirm) {
                                                    t.next = 5;
                                                    break;
                                                }
                                                return t.next = 3, a.$http({
                                                    url: a.$api.edit_foodsOrder_order,
                                                    data: {
                                                        uid: e.getStorageSync("uid").id,
                                                        status: 0,
                                                        id: i
                                                    }
                                                });

                                              case 3:
                                                s = t.sent, 0 == s.errno && (a.$sun.toast(s.message), e.navigateBack({
                                                    delta: 1
                                                }));

                                              case 5:
                                              case "end":
                                                return t.stop();
                                            }
                                        }, t);
                                    }));
                                    function r(e) {
                                        return t.apply(this, arguments);
                                    }
                                    return r;
                                }()
                            });
                            break;

                          case "require":
                            e.showModal({
                                title: "提示",
                                confirmColor: "#ff6145",
                                content: "您确定已经该订单完成了吗?",
                                success: function() {
                                    var t = s(n.default.mark(function t(r) {
                                        var s;
                                        return n.default.wrap(function(t) {
                                            while (1) switch (t.prev = t.next) {
                                              case 0:
                                                if (!r.confirm) {
                                                    t.next = 5;
                                                    break;
                                                }
                                                return t.next = 3, a.$http({
                                                    url: a.$api.edit_foodsOrder_order,
                                                    data: {
                                                        uid: e.getStorageSync("uid").id,
                                                        status: 3,
                                                        id: i
                                                    }
                                                });

                                              case 3:
                                                s = t.sent, 0 == s.errno && (a.navbarTapHandler(3), a.$sun.toast(s.message));

                                              case 5:
                                              case "end":
                                                return t.stop();
                                            }
                                        }, t);
                                    }));
                                    function r(e) {
                                        return t.apply(this, arguments);
                                    }
                                    return r;
                                }()
                            });
                            break;
                        }
                    },
                    reserveAlign: function(t) {
                        e.redirectTo({
                            url: "/packages/hotel/hotelDetial/hotelDetial?id=" + t
                        }), console.log("订单传入页面的id", t);
                    },
                    paste: function() {
                        e.setClipboardData({
                            data: this.order.order_number
                        });
                    },
                    bookAgain: function(t) {
                        e.redirectTo({
                            url: "/packages/hotel/hotelDetial/hotelDetial?id=" + t
                        }), console.log("订单传入页面的id", t);
                    }
                }
            };
            t.default = o;
        }).call(this, r("543d")["default"]);
    },
    "0ef2": function(e, t, r) {},
    "16e1": function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r("c0c3"), a = r("2687");
        for (var i in a) "default" !== i && function(e) {
            r.d(t, e, function() {
                return a[e];
            });
        }(i);
        r("7c4d");
        var s, o = r("f0c5"), u = Object(o["a"])(a["default"], n["b"], n["c"], !1, null, null, null, !1, n["a"], s);
        t["default"] = u.exports;
    },
    2687: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r("0169"), a = r.n(n);
        for (var i in n) "default" !== i && function(e) {
            r.d(t, e, function() {
                return n[e];
            });
        }(i);
        t["default"] = a.a;
    },
    "529b": function(e, t, r) {
        "use strict";
        (function(e) {
            r("cee1");
            n(r("66fd"));
            var t = n(r("16e1"));
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            e(t.default);
        }).call(this, r("543d")["createPage"]);
    },
    "7c4d": function(e, t, r) {
        "use strict";
        var n = r("0ef2"), a = r.n(n);
        a.a;
    },
    c0c3: function(e, t, r) {
        "use strict";
        var n;
        r.d(t, "b", function() {
            return a;
        }), r.d(t, "c", function() {
            return i;
        }), r.d(t, "a", function() {
            return n;
        });
        var a = function() {
            var e = this, t = e.$createElement, r = (e._self._c, e.reserveStart.split("-")), n = e.reserveStart.split("-"), a = e.reserveEnd.split("-"), i = e.reserveEnd.split("-");
            e.$mp.data = Object.assign({}, {
                $root: {
                    g0: r,
                    g1: n,
                    g2: a,
                    g3: i
                }
            });
        }, i = [];
    }
}, [ [ "529b", "common/runtime", "common/vendor" ] ] ]);