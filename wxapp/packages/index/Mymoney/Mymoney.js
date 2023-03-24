(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/index/Mymoney/Mymoney" ], {
    1046: function(e, t, n) {},
    "25e2": function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = a(n("a34a")), s = a(n("0747"));
            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function o(e, t, n, r, s, a, o) {
                try {
                    var u = e[a](o), i = u.value;
                } catch (c) {
                    return void n(c);
                }
                u.done ? t(i) : Promise.resolve(i).then(r, s);
            }
            function u(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(r, s) {
                        var a = e.apply(t, n);
                        function u(e) {
                            o(a, r, s, u, i, "next", e);
                        }
                        function i(e) {
                            o(a, r, s, u, i, "throw", e);
                        }
                        u(void 0);
                    });
                };
            }
            var i = {
                data: function() {
                    return {
                        tabIndex: 0,
                        system: {},
                        qian: 0,
                        id: 0,
                        userInfo: {},
                        logo: this.$img.logo,
                        fxbj: this.$img.fxbj
                    };
                },
                onLoad: function() {
                    this.getSystem();
                },
                onShow: function() {
                    s.default.releaseKey("submit"), this.userInfoes();
                },
                methods: {
                    chongzhi: function() {
                        var e = this;
                        s.default.uniDoFunc({
                            key: "submit",
                            success: function() {
                                var t = u(r.default.mark(function t() {
                                    return r.default.wrap(function(t) {
                                        while (1) switch (t.prev = t.next) {
                                          case 0:
                                            s.default.lockKey("submit"), console.log("防抖... 在事件触发前连续点击事件会重新计时"), e.system.notice.cz_success_template ? e.acceptMessage() : e.addMoney();

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
                    boxs: function(e, t) {
                        this.qian = t.money, this.tabIndex = e, this.id = t.id, console.log("this.id", this.id, "this.tabIndex", this.tabIndex, "aaaaasasasasa", this.money, "this.money");
                    },
                    moneyjl: function() {
                        e.navigateTo({
                            url: "/packages/index/Mymoney/MyBill/MyBill"
                        });
                    },
                    acceptMessage: function() {
                        var t = this;
                        wx.getSetting({
                            withSubscriptions: !0,
                            success: function(n) {
                                console.log(n.subscriptionsSetting), 0 == n.subscriptionsSetting.mainSwitch || e.requestSubscribeMessage({
                                    tmplIds: [ t.system.notice.cz_success_template ],
                                    success: function() {
                                        var e = u(r.default.mark(function e(n) {
                                            return r.default.wrap(function(e) {
                                                while (1) switch (e.prev = e.next) {
                                                  case 0:
                                                    console.log("总打印", n), "accept" == n[t.system.notice.cz_success_template] ? (console.log("授权成功", n), 
                                                    t.addMoney()) : wx.showModal({
                                                        title: "温馨提示",
                                                        content: "您已拒绝授权，将无法在微信中收到通知！",
                                                        showCancel: !1,
                                                        success: function(e) {
                                                            e.confirm && (console.log("拒绝授权", n), t.addMoney());
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
                                        console.log("失败", e), t.addMoney();
                                    },
                                    complete: function(e) {
                                        console.log("完成", e);
                                    }
                                });
                            }
                        });
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
                                    n = t.sent, 0 == n.errno && (e.system = n.data, e.system.recharge.sort(function(e, t) {
                                        return e.money - t.money;
                                    }), e.qian = e.system.recharge[0].money, e.id = e.system.recharge[0].id), console.log("systemInfo", n, e.qian, "this.id", e.id);

                                  case 5:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    userInfoes: function() {
                        var t = this;
                        return u(r.default.mark(function n() {
                            var s;
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
                                    s = n.sent, 0 == s.errno && (t.userInfo = s.data, console.log("用户信息", s));

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    addMoney: function() {
                        var t = this;
                        return u(r.default.mark(function n() {
                            var a, o;
                            return r.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, t.$http({
                                        url: t.$api.pay,
                                        data: {
                                            uid: e.getStorageSync("uid").id,
                                            openid: wx.getStorageSync("openid"),
                                            price: t.qian
                                        }
                                    });

                                  case 2:
                                    a = n.sent, 0 == a.code ? (o = a.data, t.$sun.wePay(o, function() {
                                        var n = u(r.default.mark(function n(a) {
                                            var o;
                                            return r.default.wrap(function(n) {
                                                while (1) switch (n.prev = n.next) {
                                                  case 0:
                                                    return n.next = 2, t.$http({
                                                        url: t.$api.add_money,
                                                        data: {
                                                            uid: e.getStorageSync("uid").id,
                                                            recharge_id: t.id,
                                                            type: 1,
                                                            pay_type: 1,
                                                            price: "",
                                                            store_id: ""
                                                        }
                                                    });

                                                  case 2:
                                                    o = n.sent, 0 == o.errno && (t.addMoneyInfo = o.data, t.userInfoes(), t.$sun.toast("充值成功"), 
                                                    s.default.releaseKey("submit"), console.log("充值信息", o));

                                                  case 4:
                                                  case "end":
                                                    return n.stop();
                                                }
                                            }, n);
                                        }));
                                        return function(e) {
                                            return n.apply(this, arguments);
                                        };
                                    }(), function() {
                                        var e = u(r.default.mark(function e(n) {
                                            return r.default.wrap(function(e) {
                                                while (1) switch (e.prev = e.next) {
                                                  case 0:
                                                    s.default.releaseKey("submit"), t.$sun.toast("取消了支付");

                                                  case 2:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            }, e);
                                        }));
                                        return function(t) {
                                            return e.apply(this, arguments);
                                        };
                                    }())) : (t.$sun.toast("支付失败" + result.msg.return_msg), s.default.releaseKey("submit"));

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    }
                }
            };
            t.default = i;
        }).call(this, n("543d")["default"]);
    },
    6809: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("b803"), s = n("d8fb");
        for (var a in s) "default" !== a && function(e) {
            n.d(t, e, function() {
                return s[e];
            });
        }(a);
        n("9c7c");
        var o, u = n("f0c5"), i = Object(u["a"])(s["default"], r["b"], r["c"], !1, null, null, null, !1, r["a"], o);
        t["default"] = i.exports;
    },
    "9c7c": function(e, t, n) {
        "use strict";
        var r = n("1046"), s = n.n(r);
        s.a;
    },
    b803: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return s;
        }), n.d(t, "c", function() {
            return a;
        }), n.d(t, "a", function() {
            return r;
        });
        var r = {
            richParser: function() {
                return Promise.all([ n.e("common/vendor"), n.e("components/rich-parser/rich-parser") ]).then(n.bind(null, "6057"));
            }
        }, s = function() {
            var e = this, t = e.$createElement;
            e._self._c;
        }, a = [];
    },
    bf03: function(e, t, n) {
        "use strict";
        (function(e) {
            n("cee1");
            r(n("66fd"));
            var t = r(n("6809"));
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            e(t.default);
        }).call(this, n("543d")["createPage"]);
    },
    d8fb: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("25e2"), s = n.n(r);
        for (var a in r) "default" !== a && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(a);
        t["default"] = s.a;
    }
}, [ [ "bf03", "common/runtime", "common/vendor" ] ] ]);