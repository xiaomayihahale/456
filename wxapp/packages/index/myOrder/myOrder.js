(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/index/myOrder/myOrder" ], {
    "1d1f": function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("65f9"), a = n.n(r);
        for (var s in r) "default" !== s && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(s);
        t["default"] = a.a;
    },
    "3e89": function(e, t, n) {
        "use strict";
        (function(e) {
            n("cee1");
            r(n("66fd"));
            var t = r(n("57e3"));
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            e(t.default);
        }).call(this, n("543d")["createPage"]);
    },
    "4f53": function(e, t, n) {
        "use strict";
        var r = n("b34e"), a = n.n(r);
        a.a;
    },
    "57e3": function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("70c8"), a = n("1d1f");
        for (var s in a) "default" !== s && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(s);
        n("4f53");
        var u, i = n("f0c5"), o = Object(i["a"])(a["default"], r["b"], r["c"], !1, null, null, null, !1, r["a"], u);
        t["default"] = o.exports;
    },
    "65f9": function(e, t, n) {
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
            function s(e, t, n, r, a, s, u) {
                try {
                    var i = e[s](u), o = i.value;
                } catch (c) {
                    return void n(c);
                }
                i.done ? t(o) : Promise.resolve(o).then(r, a);
            }
            function u(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(r, a) {
                        var u = e.apply(t, n);
                        function i(e) {
                            s(u, r, a, i, o, "next", e);
                        }
                        function o(e) {
                            s(u, r, a, i, o, "throw", e);
                        }
                        i(void 0);
                    });
                };
            }
            var i = {
                data: function() {
                    return {
                        system: {},
                        userInfo: {},
                        applyType: 1,
                        orderList: [],
                        balance: "",
                        everday: this.$img.everday,
                        orderDetailInfo: {},
                        imgUrl: this.$imgUrl,
                        currentIndex: 0,
                        navArr: [ {
                            title: "全部订单",
                            id: ""
                        }, {
                            title: "待付款",
                            id: 1
                        }, {
                            title: "待发货",
                            id: 2
                        }, {
                            title: "待收货",
                            id: 3
                        }, {
                            title: "已完成",
                            id: 4
                        } ],
                        options: {}
                    };
                },
                onShow: function() {
                    this.getSystem(), this.userInfoes(), this.navbarTapHandler(Number(this.options.currentIndex));
                },
                onLoad: function(e) {
                    console.log(e, "userInfoesoptions"), this.options = e;
                },
                computed: {
                    orderStatus: function() {
                        return function(e) {
                            var t = [ "全部订单", "待付款", "待发货", "待收货", "已完成" ];
                            return t[e];
                        };
                    }
                },
                methods: {
                    userInfoes: function() {
                        var t = this;
                        return u(r.default.mark(function n() {
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
                                    a = n.sent, 0 == a.errno && (t.userInfo = a.data, t.balance = t.userInfo.money, 
                                    console.log(t.balance, t.userInfo, "this.userInfo"));

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    upCallback: function(t) {
                        var n = this;
                        return u(r.default.mark(function a() {
                            var s;
                            return r.default.wrap(function(r) {
                                while (1) switch (r.prev = r.next) {
                                  case 0:
                                    return r.next = 2, n.$http({
                                        url: n.$api.my_order,
                                        data: {
                                            uid: e.getStorageSync("uid").id,
                                            status: n.navArr[n.currentIndex].id,
                                            page: t.num,
                                            psize: 10
                                        }
                                    });

                                  case 2:
                                    s = r.sent, 0 == s.errno && (n.mescroll.endByPage(s.data.list.length, s.data.total), 
                                    1 == t.num && (n.orderList = []), n.orderList = n.orderList.concat(s.data.list));

                                  case 4:
                                  case "end":
                                    return r.stop();
                                }
                            }, a);
                        }))();
                    },
                    paste: function(t) {
                        e.setClipboardData({
                            data: t.order_number
                        });
                    },
                    fuzhi: function(t) {
                        e.setClipboardData({
                            data: t.pickup_code
                        });
                    },
                    handleDetails: function(e) {
                        this.$sun.navGo("/packages/index/orderDetails/orderDetails", {
                            id: e,
                            index: this.currentIndex
                        });
                    },
                    navbarTapHandler: function(e) {
                        this.currentIndex = e, this.$sun.title(this.navArr[this.currentIndex].title), this.mescroll.resetUpScroll();
                    },
                    getSystem: function() {
                        var e = this;
                        return u(r.default.mark(function t() {
                            var n;
                            return r.default.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, e.$http({
                                        url: e.$api.system
                                    });

                                  case 2:
                                    n = t.sent, 0 == n.errno && (e.system = n.data, e.kfTemplate = n.data.notice.kf_template, 
                                    console.log("系统设置 打印", e.kfTemplate, e.tempId, e.successTemplate, e.brTemplate));

                                  case 4:
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
                            success: function(n) {
                                console.log(n.subscriptionsSetting), 0 == n.subscriptionsSetting.mainSwitch || e.requestSubscribeMessage({
                                    tmplIds: [ t.kfTemplate ],
                                    success: function() {
                                        var e = u(r.default.mark(function e(n) {
                                            return r.default.wrap(function(e) {
                                                while (1) switch (e.prev = e.next) {
                                                  case 0:
                                                    console.log("总打印", n), "accept" == n[t.kfTemplate] ? console.log("授权成功", n) : wx.showModal({
                                                        title: "温馨提示",
                                                        content: "您已拒绝授权，将无法在微信中收到通知！",
                                                        showCancel: !1,
                                                        success: function(e) {
                                                            e.confirm && console.log("拒绝授权", n);
                                                        }
                                                    });

                                                  case 2:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            }, e);
                                        }));
                                        function n(t) {
                                            return e.apply(this, arguments);
                                        }
                                        return n;
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
                    handleOperate: function(t, n) {
                        var a = this, s = t.id, i = Number(t.real_payment);
                        switch (n) {
                          case "pay":
                            e.showActionSheet({
                                itemList: [ "微信支付", "余额支付" ],
                                success: function() {
                                    var t = u(r.default.mark(function t(n) {
                                        var o, c, l, d, f;
                                        return r.default.wrap(function(t) {
                                            while (1) switch (t.prev = t.next) {
                                              case 0:
                                                o = n.tapIndex, t.t0 = o, t.next = 0 === t.t0 ? 4 : 1 === t.t0 ? 10 : 28;
                                                break;

                                              case 4:
                                                return a.applyType = 1, t.next = 7, a.$http({
                                                    url: a.$api.pay,
                                                    data: {
                                                        uid: e.getStorageSync("uid").id,
                                                        price: i,
                                                        openid: wx.getStorageSync("openid")
                                                    }
                                                });

                                              case 7:
                                                return c = t.sent, 0 == c.code ? (l = c.data, a.$sun.wePay(l, function() {
                                                    var t = u(r.default.mark(function t(n) {
                                                        var u;
                                                        return r.default.wrap(function(t) {
                                                            while (1) switch (t.prev = t.next) {
                                                              case 0:
                                                                return t.next = 2, a.$http({
                                                                    url: a.$api.edit_order,
                                                                    data: {
                                                                        uid: e.getStorageSync("uid").id,
                                                                        status: 2,
                                                                        id: s,
                                                                        pay_type: a.applyType
                                                                    }
                                                                });

                                                              case 2:
                                                                u = t.sent, 0 == u.code && (a.$sun.toast(u.message), a.navbarTapHandler(2), a.kfTemplate && a.acceptMessage());

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
                                                    var e = u(r.default.mark(function e(t) {
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
                                                }())) : (a.$sun.toast("支付失败"), console.log("payInfo.data", c.data)), t.abrupt("break", 28);

                                              case 10:
                                                if (a.applyType = 2, console.log(i, "this.userInfo.money", "555", a.balance), !(Number(a.balance) < Number(i))) {
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
                                                        price: i,
                                                        pay_type: a.applyType
                                                    }
                                                });

                                              case 18:
                                                if (d = t.sent, 0 != d.errno) {
                                                    t.next = 26;
                                                    break;
                                                }
                                                return t.next = 22, a.$http({
                                                    url: a.$api.edit_order,
                                                    data: {
                                                        status: 2,
                                                        id: s,
                                                        pay_type: a.applyType
                                                    }
                                                });

                                              case 22:
                                                f = t.sent, 0 == f.errno ? (a.$sun.toast(f.message), a.navbarTapHandler(2), a.kfTemplate && a.acceptMessage()) : a.$sun.toast(f.message), 
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
                                    var t = u(r.default.mark(function t(n) {
                                        var u;
                                        return r.default.wrap(function(t) {
                                            while (1) switch (t.prev = t.next) {
                                              case 0:
                                                if (!n.confirm) {
                                                    t.next = 5;
                                                    break;
                                                }
                                                return t.next = 3, a.$http({
                                                    url: a.$api.edit_order,
                                                    data: {
                                                        uid: e.getStorageSync("uid").id,
                                                        status: 0,
                                                        id: s
                                                    }
                                                });

                                              case 3:
                                                u = t.sent, 0 == u.errno && (a.$sun.toast(u.message), a.mescroll.resetUpScroll());

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
                                content: "您确定已经收到货物了吗?",
                                success: function() {
                                    var t = u(r.default.mark(function t(n) {
                                        var u;
                                        return r.default.wrap(function(t) {
                                            while (1) switch (t.prev = t.next) {
                                              case 0:
                                                if (!n.confirm) {
                                                    t.next = 5;
                                                    break;
                                                }
                                                return t.next = 3, a.$http({
                                                    url: a.$api.edit_order,
                                                    data: {
                                                        uid: e.getStorageSync("uid").id,
                                                        status: 4,
                                                        id: s
                                                    }
                                                });

                                              case 3:
                                                u = t.sent, 0 == u.errno && (a.navbarTapHandler(4), a.$sun.toast(u.message));

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
            t.default = i;
        }).call(this, n("543d")["default"]);
    },
    "70c8": function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "c", function() {
            return s;
        }), n.d(t, "a", function() {
            return r;
        });
        var r = {
            sunuiTab: function() {
                return n.e("components/sunui-tab/sunui-tab").then(n.bind(null, "0244"));
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
        }, s = [];
    },
    b34e: function(e, t, n) {}
}, [ [ "3e89", "common/runtime", "common/vendor" ] ] ]);