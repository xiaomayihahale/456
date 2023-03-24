(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/takeawayOrder/myVip/myVip" ], {
    "48a1": function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("e607"), a = n("c4f5");
        for (var c in a) "default" !== c && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(c);
        n("9720");
        var s, u = n("f0c5"), i = Object(u["a"])(a["default"], r["b"], r["c"], !1, null, null, null, !1, r["a"], s);
        t["default"] = i.exports;
    },
    8198: function(e, t, n) {},
    "8aa9": function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = c(n("a34a")), a = c(n("0747"));
            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function s(e, t, n, r, a, c, s) {
                try {
                    var u = e[c](s), i = u.value;
                } catch (o) {
                    return void n(o);
                }
                u.done ? t(i) : Promise.resolve(i).then(r, a);
            }
            function u(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(r, a) {
                        var c = e.apply(t, n);
                        function u(e) {
                            s(c, r, a, u, i, "next", e);
                        }
                        function i(e) {
                            s(c, r, a, u, i, "throw", e);
                        }
                        u(void 0);
                    });
                };
            }
            var i = {
                data: function() {
                    return {
                        id: 0,
                        qian: 0,
                        userInfo: {},
                        rechargeList: [ {
                            buy: "100",
                            give: "30",
                            id: "1",
                            checked: !0
                        }, {
                            buy: "200",
                            id: "2",
                            give: "50",
                            checked: !1
                        }, {
                            buy: "300",
                            id: "3",
                            give: "100",
                            checked: !1
                        }, {
                            buy: "500",
                            id: "4",
                            give: "200",
                            checked: !1
                        } ],
                        system: {}
                    };
                },
                onLoad: function() {
                    this.getSystem();
                },
                onShow: function() {
                    this.userInfoes();
                },
                methods: {
                    rechargeSubmit: function(e) {
                        var t = this;
                        return u(r.default.mark(function n() {
                            var c;
                            return r.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    c = e.detail.value, JSON.parse(c.recharge), a.default.uniDoFunc({
                                        key: "submit",
                                        success: function() {
                                            var e = u(r.default.mark(function e() {
                                                return r.default.wrap(function(e) {
                                                    while (1) switch (e.prev = e.next) {
                                                      case 0:
                                                        a.default.lockKey("submit"), console.log("防抖... 在事件触发前连续点击事件会重新计时"), t.system.notice.cz_success_template ? t.acceptMessage() : t.addMoney();

                                                      case 3:
                                                      case "end":
                                                        return e.stop();
                                                    }
                                                }, e);
                                            }));
                                            function n() {
                                                return e.apply(this, arguments);
                                            }
                                            return n;
                                        }()
                                    }), console.log(c);

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
                            var c, s;
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
                                    c = n.sent, 0 == c.code && (s = c.data, t.$sun.wePay(s, function() {
                                        var n = u(r.default.mark(function n(c) {
                                            var s;
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
                                                    s = n.sent, 0 == s.errno && (a.default.releaseKey("submit"), console.log("recharge_id:this.id", t.id), 
                                                    t.addMoneyInfo = s.data, t.userInfoes(), t.$sun.toast("充值成功"), console.log("用户信息", s));

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
                                                    a.default.releaseKey("submit"), t.$sun.toast("取消了支付");

                                                  case 2:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            }, e);
                                        }));
                                        return function(t) {
                                            return e.apply(this, arguments);
                                        };
                                    }())), console.log("this.money", t.qian);

                                  case 5:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
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
                                                    "accept" == n[t.system.notice.cz_success_template] ? (console.log("授权成功", n), t.addMoney()) : wx.showModal({
                                                        title: "温馨提示",
                                                        content: "您已拒绝授权，将无法在微信中收到通知！",
                                                        showCancel: !1,
                                                        success: function(e) {
                                                            e.confirm && (console.log("拒绝授权", n), t.addMoney());
                                                        }
                                                    });

                                                  case 1:
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
                                    return console.log("----------"), t.next = 3, e.$http({
                                        url: e.$api.system
                                    });

                                  case 3:
                                    n = t.sent, 0 == n.errno && (e.system = n.data, e.system.recharge.sort(function(e, t) {
                                        return e.money - t.money;
                                    }), e.qian = e.system.recharge[0].money, e.id = e.system.recharge[0].id, console.log("this.logno----------", e.qian));

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
                                    a = n.sent, 0 == a.errno && (t.userInfo = a.data, console.log("用户信息", a, t.userInfo.curDiscount));

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    getMember: function() {
                        var t = this;
                        return u(r.default.mark(function n() {
                            var a, c, s, u, i, o, l;
                            return r.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, t.$http({
                                        url: t.$api.member_display,
                                        data: {
                                            uid: e.getStorageSync("uid")
                                        }
                                    });

                                  case 2:
                                    if (a = n.sent, 0 == a.errno) {
                                        for (c = a.data.user, s = a.data.member, u = 0, i = a.data.recharge.length; u < i; u++) a.data.recharge[u].checked = !1;
                                        for (a.data.recharge.length && (a.data.recharge[0].checked = !0), o = 0, l = s.length; o < l; o++) Number(c.consumption) >= Number(s[o].consumption) && (t.members = s[o], 
                                        t.updateMember = s[o + 1], console.log("this.members", t.members));
                                        t.member = a.data;
                                    }
                                    console.log("member", a);

                                  case 5:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    rechargeChange: function(e) {
                        var t = JSON.parse(e.detail.value);
                        this.qian = t.money, this.id = t.id;
                        var n = 0;
                        for (this.system.recharge.length; n < this.system.recharge.length; n++) this.system.recharge[n].money == t.money ? this.system.recharge[n].checked = !0 : this.system.recharge[n].checked = !1;
                        this.$forceUpdate(), console.log("radio-group1:", e.detail.value, this.qian, this.id);
                    },
                    membersbenefits: function() {
                        e.navigateTo({
                            url: "/packages/takeawayOrder/myVip/memberBenefits/memberBenefits"
                        });
                    },
                    rechargeRecord: function() {
                        e.navigateTo({
                            url: "/packages/index/Mymoney/MyBill/MyBill"
                        });
                    }
                }
            };
            t.default = i;
        }).call(this, n("543d")["default"]);
    },
    "8b99": function(e, t, n) {
        "use strict";
        (function(e) {
            n("cee1");
            r(n("66fd"));
            var t = r(n("48a1"));
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            e(t.default);
        }).call(this, n("543d")["createPage"]);
    },
    9720: function(e, t, n) {
        "use strict";
        var r = n("8198"), a = n.n(r);
        a.a;
    },
    c4f5: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("8aa9"), a = n.n(r);
        for (var c in r) "default" !== c && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(c);
        t["default"] = a.a;
    },
    e607: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "c", function() {
            return c;
        }), n.d(t, "a", function() {
            return r;
        });
        var r = {
            sunuiCell: function() {
                return n.e("components/sunui-cell/sunui-cell").then(n.bind(null, "cf30"));
            }
        }, a = function() {
            var e = this, t = e.$createElement, n = (e._self._c, Number(e.userInfo.curDiscount)), r = e.__map(e.system.recharge, function(t, n) {
                var r = e.__get_orig(t), a = JSON.stringify(t);
                return {
                    $orig: r,
                    g0: a
                };
            });
            e.$mp.data = Object.assign({}, {
                $root: {
                    m0: n,
                    l0: r
                }
            });
        }, c = [];
    }
}, [ [ "8b99", "common/runtime", "common/vendor" ] ] ]);