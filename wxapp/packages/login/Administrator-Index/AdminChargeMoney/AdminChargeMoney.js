(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/login/Administrator-Index/AdminChargeMoney/AdminChargeMoney" ], {
    "0e85": function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n("35e1"), s = n.n(o);
        for (var a in o) "default" !== a && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(a);
        t["default"] = s.a;
    },
    "35e1": function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = a(n("a34a")), s = a(n("0747"));
            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function i(e, t, n, o, s, a, i) {
                try {
                    var r = e[a](i), u = r.value;
                } catch (c) {
                    return void n(c);
                }
                r.done ? t(u) : Promise.resolve(u).then(o, s);
            }
            function r(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(o, s) {
                        var a = e.apply(t, n);
                        function r(e) {
                            i(a, o, s, r, u, "next", e);
                        }
                        function u(e) {
                            i(a, o, s, r, u, "throw", e);
                        }
                        r(void 0);
                    });
                };
            }
            var u = {
                data: function() {
                    return {
                        tabIndex: 0,
                        userInfo: {},
                        everday: this.$img.everday,
                        system: {},
                        cash: "",
                        money: 0,
                        logno: 0
                    };
                },
                onLoad: function(e) {
                    this.memberCode = e.result, console.log("this.memberCode", this.memberCode, "options.result", e.result), 
                    this.getSystem(), this.userInfoes();
                },
                onShow: function() {
                    s.default.releaseKey("submit");
                },
                methods: {
                    userInfoes: function() {
                        var e = this;
                        return r(o.default.mark(function t() {
                            var n;
                            return o.default.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, e.$http({
                                        url: e.$api.getUserProfile,
                                        data: {
                                            member_no: e.memberCode
                                        }
                                    });

                                  case 2:
                                    n = t.sent, 0 == n.errno && (e.userInfo = n.data, console.log("用户信息", n));

                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    changeInput: function() {
                        this.logno = this.logno, this.tabIndex = null, this.id = null, console.log("输入的值this.logno", this.logno, "this.tabIndex", this.tabIndex, "this.id", this.id);
                    },
                    aa: function() {
                        this.tabIndex = null, this.id = null;
                    },
                    getSystem: function() {
                        var e = this;
                        return r(o.default.mark(function t() {
                            var n;
                            return o.default.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, e.$http({
                                        url: e.$api.system
                                    });

                                  case 2:
                                    n = t.sent, 0 == n.errno && (e.system = n.data, e.system.recharge.sort(function(e, t) {
                                        return e.money - t.money;
                                    }), e.money = e.system.recharge[0].money, e.logno = e.system.recharge[0].money, 
                                    e.id = e.system.recharge[0].id, e.tempId = e.system.notice.new_template);

                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    boxs: function(e, t) {
                        this.money = t.money, this.tabIndex = e, this.id = t.id, this.logno = this.money, 
                        console.log("this.id", this.id, "this.tabIndex", this.tabIndex, "aaaaasasasasa", this.money, "this.money", this.logno, e);
                    },
                    daichong: function() {
                        var e = this;
                        if (!this.logno) return this.$sun.toast("请输入/选择代充金额"), !1;
                        s.default.uniDoFunc({
                            key: "submit",
                            success: function() {
                                var t = r(o.default.mark(function t() {
                                    return o.default.wrap(function(t) {
                                        while (1) switch (t.prev = t.next) {
                                          case 0:
                                            s.default.lockKey("submit"), e.tempId ? e.acceptMessage() : e.addMoney();

                                          case 2:
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
                    acceptMessage: function() {
                        var t = this;
                        wx.getSetting({
                            withSubscriptions: !0,
                            success: function(n) {
                                0 == n.subscriptionsSetting.mainSwitch || e.requestSubscribeMessage({
                                    tmplIds: [ t.tempId ],
                                    success: function() {
                                        var e = r(o.default.mark(function e(n) {
                                            return o.default.wrap(function(e) {
                                                while (1) switch (e.prev = e.next) {
                                                  case 0:
                                                    console.log("总打印", n), "accept" == n[t.tempId] ? (console.log("授权成功", n), t.addMoney()) : wx.showModal({
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
                    addMoney: function() {
                        var e = this;
                        return r(o.default.mark(function t() {
                            var n;
                            return o.default.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                  case 0:
                                    return console.log("this.money", e.money, "this.logno", e.logno), t.next = 3, e.$http({
                                        url: e.$api.add_money,
                                        data: {
                                            uid: e.userInfo.id,
                                            recharge_id: null != e.id ? e.id : "",
                                            type: 2,
                                            oper_uid: wx.getStorageSync("login").id,
                                            pay_type: null != e.id ? 1 : 2,
                                            price: 1 == e.pay_type ? "" : e.logno,
                                            store_id: wx.getStorageSync("login").store_id
                                        }
                                    });

                                  case 3:
                                    n = t.sent, 0 == n.errno ? (e.$sun.toast("代充成功"), e.logno = 0, e.tabIndex = null, 
                                    e.id = null, e.addMoneyInfo = n.data, s.default.releaseKey("submit"), console.log("充值--------", n, "this.logno", e.logno)) : (s.default.releaseKey("submit"), 
                                    e.$sun.toast(n.message));

                                  case 5:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    }
                }
            };
            t.default = u;
        }).call(this, n("543d")["default"]);
    },
    "73be": function(e, t, n) {
        "use strict";
        var o = n("cce1"), s = n.n(o);
        s.a;
    },
    c027: function(e, t, n) {
        "use strict";
        (function(e) {
            n("cee1");
            o(n("66fd"));
            var t = o(n("cfca"));
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            e(t.default);
        }).call(this, n("543d")["createPage"]);
    },
    cce1: function(e, t, n) {},
    cfca: function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n("ff12"), s = n("0e85");
        for (var a in s) "default" !== a && function(e) {
            n.d(t, e, function() {
                return s[e];
            });
        }(a);
        n("73be");
        var i, r = n("f0c5"), u = Object(r["a"])(s["default"], o["b"], o["c"], !1, null, null, null, !1, o["a"], i);
        t["default"] = u.exports;
    },
    ff12: function(e, t, n) {
        "use strict";
        var o;
        n.d(t, "b", function() {
            return s;
        }), n.d(t, "c", function() {
            return a;
        }), n.d(t, "a", function() {
            return o;
        });
        var s = function() {
            var e = this, t = e.$createElement;
            e._self._c;
        }, a = [];
    }
}, [ [ "c027", "common/runtime", "common/vendor" ] ] ]);