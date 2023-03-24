(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/takeawayOrder/voucherDetail/voucherDetail" ], {
    "3c12": function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return c;
        }), n.d(t, "c", function() {
            return u;
        }), n.d(t, "a", function() {
            return r;
        });
        var r = {
            richParser: function() {
                return Promise.all([ n.e("common/vendor"), n.e("components/rich-parser/rich-parser") ]).then(n.bind(null, "6057"));
            }
        }, c = function() {
            var e = this, t = e.$createElement;
            e._self._c;
        }, u = [];
    },
    6177: function(e, t, n) {
        "use strict";
        var r = n("fd11"), c = n.n(r);
        c.a;
    },
    "9db0": function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = u(n("a34a")), c = u(n("0747"));
            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function a(e, t, n, r, c, u, a) {
                try {
                    var o = e[u](a), s = o.value;
                } catch (i) {
                    return void n(i);
                }
                o.done ? t(s) : Promise.resolve(s).then(r, c);
            }
            function o(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(r, c) {
                        var u = e.apply(t, n);
                        function o(e) {
                            a(u, r, c, o, s, "next", e);
                        }
                        function s(e) {
                            a(u, r, c, o, s, "throw", e);
                        }
                        o(void 0);
                    });
                };
            }
            var s = {
                data: function() {
                    return {
                        voucherList: [],
                        indicatorDots: !1,
                        autoplay: !0,
                        interval: 2e3,
                        duration: 1e3,
                        circular: !0,
                        system: {}
                    };
                },
                onLoad: function(e) {
                    this.getSystem(), this.id = e.id;
                },
                onShow: function() {
                    this.singleVoucher(), c.default.releaseKey("submit");
                },
                methods: {
                    singleVoucher: function() {
                        var e = this;
                        return o(r.default.mark(function t() {
                            var n;
                            return r.default.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, e.$http({
                                        url: e.$api.voucher_info,
                                        data: {
                                            voucher_id: e.id
                                        }
                                    });

                                  case 2:
                                    n = t.sent, 0 == n.errno && (e.voucherList = n.data, console.log("result", n));

                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    zhifu: function() {
                        var e = this;
                        c.default.uniDoFunc({
                            key: "submit",
                            success: function() {
                                var t = o(r.default.mark(function t() {
                                    return r.default.wrap(function(t) {
                                        while (1) switch (t.prev = t.next) {
                                          case 0:
                                            c.default.lockKey("submit"), console.log("防抖... 在事件触发前连续点击事件会重新计时"), e.system.notice.cz_success_template ? e.acceptMessage() : e.addMoney();

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
                    acceptMessage: function() {
                        var t = this;
                        wx.getSetting({
                            withSubscriptions: !0,
                            success: function(n) {
                                console.log(n.subscriptionsSetting), 0 == n.subscriptionsSetting.mainSwitch || e.requestSubscribeMessage({
                                    tmplIds: [ t.system.notice.cz_success_template ],
                                    success: function() {
                                        var e = o(r.default.mark(function e(n) {
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
                    addMoney: function() {
                        var t = this;
                        return o(r.default.mark(function n() {
                            var u, a;
                            return r.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, t.$http({
                                        url: t.$api.pay,
                                        data: {
                                            uid: e.getStorageSync("uid").id,
                                            openid: wx.getStorageSync("openid"),
                                            price: t.voucherList.money
                                        }
                                    });

                                  case 2:
                                    u = n.sent, 0 == u.code && (a = u.data, t.$sun.wePay(a, function() {
                                        var n = o(r.default.mark(function n(c) {
                                            var u;
                                            return r.default.wrap(function(n) {
                                                while (1) switch (n.prev = n.next) {
                                                  case 0:
                                                    return n.next = 2, t.$http({
                                                        url: t.$api.add_voucher,
                                                        data: {
                                                            uid: e.getStorageSync("uid").id,
                                                            voucher_id: t.id
                                                        }
                                                    });

                                                  case 2:
                                                    u = n.sent, 0 == u.errno && (console.log("voucher_id:this.id", t.id), setTimeout(function() {
                                                        this.$sun.toast("购买成功");
                                                    }, 1800), e.navigateBack({
                                                        delta: 1
                                                    }));

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
                                        var e = o(r.default.mark(function e(n) {
                                            return r.default.wrap(function(e) {
                                                while (1) switch (e.prev = e.next) {
                                                  case 0:
                                                    c.default.releaseKey("submit"), t.$sun.toast("取消了支付");

                                                  case 2:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            }, e);
                                        }));
                                        return function(t) {
                                            return e.apply(this, arguments);
                                        };
                                    }())), console.log("this.money", t.voucherList.money);

                                  case 5:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    getSystem: function() {
                        var e = this;
                        return o(r.default.mark(function t() {
                            var n;
                            return r.default.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, e.$http({
                                        url: e.$api.system
                                    });

                                  case 2:
                                    n = t.sent, 0 == n.errno && (e.system = n.data, console.log(e.system, "----------"));

                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    }
                }
            };
            t.default = s;
        }).call(this, n("543d")["default"]);
    },
    bcdf: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("3c12"), c = n("da42");
        for (var u in c) "default" !== u && function(e) {
            n.d(t, e, function() {
                return c[e];
            });
        }(u);
        n("6177");
        var a, o = n("f0c5"), s = Object(o["a"])(c["default"], r["b"], r["c"], !1, null, null, null, !1, r["a"], a);
        t["default"] = s.exports;
    },
    da42: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("9db0"), c = n.n(r);
        for (var u in r) "default" !== u && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(u);
        t["default"] = c.a;
    },
    e6ea: function(e, t, n) {
        "use strict";
        (function(e) {
            n("cee1");
            r(n("66fd"));
            var t = r(n("bcdf"));
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            e(t.default);
        }).call(this, n("543d")["createPage"]);
    },
    fd11: function(e, t, n) {}
}, [ [ "e6ea", "common/runtime", "common/vendor" ] ] ]);