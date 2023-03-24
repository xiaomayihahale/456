(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/login/Administrator-Index/AdminChargeMoney2/AdminChargeMoney2" ], {
    3451: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return s;
        }), n.d(t, "c", function() {
            return u;
        }), n.d(t, "a", function() {
            return o;
        });
        var o = {
            sunuiPopup: function() {
                return n.e("components/sunui-popup/sunui-popup").then(n.bind(null, "6cf4"));
            }
        }, s = function() {
            var e = this, t = e.$createElement, n = (e._self._c, 0 != e.couponList.length ? e.__map(e.couponList, function(t, n) {
                var o = e.__get_orig(t), s = Number(t.less).toFixed(0);
                return {
                    $orig: o,
                    g0: s
                };
            }) : null);
            e.$mp.data = Object.assign({}, {
                $root: {
                    l0: n
                }
            });
        }, u = [];
    },
    "3e66": function(e, t, n) {
        "use strict";
        (function(e) {
            n("cee1");
            o(n("66fd"));
            var t = o(n("fd8c"));
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            e(t.default);
        }).call(this, n("543d")["createPage"]);
    },
    7630: function(e, t, n) {
        "use strict";
        var o = n("9696"), s = n.n(o);
        s.a;
    },
    "8f94": function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n("fb37"), s = n.n(o);
        for (var u in o) "default" !== u && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(u);
        t["default"] = s.a;
    },
    9696: function(e, t, n) {},
    fb37: function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = u(n("a34a")), s = u(n("0747"));
            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function i(e, t, n, o, s, u, i) {
                try {
                    var c = e[u](i), r = c.value;
                } catch (a) {
                    return void n(a);
                }
                c.done ? t(r) : Promise.resolve(r).then(o, s);
            }
            function c(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(o, s) {
                        var u = e.apply(t, n);
                        function c(e) {
                            i(u, o, s, c, r, "next", e);
                        }
                        function r(e) {
                            i(u, o, s, c, r, "throw", e);
                        }
                        c(void 0);
                    });
                };
            }
            var r = {
                data: function() {
                    return {
                        youhui1: this.$img.youhui1,
                        youhui2: this.$img.youhui2,
                        everday: this.$img.everday,
                        arrow: this.$img.arrow,
                        yhjName: "",
                        yhjId: "",
                        couponName: "",
                        less: 0,
                        current: 0,
                        applyType: 1,
                        couponList: [],
                        userInfo: {},
                        money: 0,
                        logno: "",
                        coupons: "暂无优惠券",
                        system: {}
                    };
                },
                onShow: function() {
                    s.default.releaseKey("submit");
                },
                onLoad: function(e) {
                    this.getSystem(), this.memberCode = e.result, this.userInfoes();
                },
                methods: {
                    getSystem: function() {
                        var e = this;
                        return c(o.default.mark(function t() {
                            var n;
                            return o.default.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, e.$http({
                                        url: e.$api.system
                                    });

                                  case 2:
                                    n = t.sent, 0 == n.errno && (e.system = n.data, e.tempId = e.system.notice.new_template);

                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    userInfoes: function() {
                        var e = this;
                        return c(o.default.mark(function t() {
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
                                    n = t.sent, 0 == n.errno && (e.userInfo = n.data, console.log(e.userInfo.id, "this.userInfo.id", e.userInfo));

                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    getCoupon: function() {
                        var e = this;
                        return c(o.default.mark(function t() {
                            var n;
                            return o.default.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, e.$http({
                                        url: e.$api.use_coupon,
                                        data: {
                                            uid: e.userInfo.id,
                                            price: e.logno,
                                            region: 3
                                        }
                                    });

                                  case 2:
                                    n = t.sent, 0 == n.errno && (e.couponList = n.data, console.log("购物车金额------", e.logno), 
                                    console.log("this.userInfo.id", e.userInfo.id), e.couponList.filter(function(t, n) {
                                        e.$set(t, "checkCoupon", !1);
                                    }), 0 != e.couponList.length ? (e.couponName = "请选择优惠券", e.less = 0) : (console.log(e.couponList.length, "this.couponList.length======", e.couponList), 
                                    e.couponName = "暂无优惠券", e.less = 0));

                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    changeInput: function() {
                        console.log("输入的值", this.logno), this.getCoupon(), this.less = 0;
                    },
                    checkeBox: function(e) {
                        this.couponList.filter(function(t) {
                            e == t.id ? t.checkCoupon = 1 != t.checkCoupon : t.checkCoupon = !1, console.log("x.checkCoupon ========", t.checkCoupon, "id值", e, t.id);
                        });
                        var t = 0;
                        this.couponList.filter(function(e) {
                            1 != e.checkCoupon || (t = e);
                        }), 0 == t ? (this.less = 0, this.couponName = "暂无优惠券", console.log("count==0", this.less, this.couponName)) : (console.log("优惠券id", t.id), 
                        1 == t.type ? (this.couponName = "满" + t.full + "减" + t.less, this.less = t.less, 
                        console.log(this.couponName, "this.couponName满减", "this.less", this.less)) : 2 == t.type && (this.couponName = "无门槛" + t.less, 
                        this.less = t.less, console.log(this.couponName, "this.couponName满无门槛", "this.less", this.less)), 
                        this.yhjId = t.id), console.log("count===============", t);
                    },
                    handleApplyType2: function(e) {
                        var t = e.detail.value;
                        this.applyType = t;
                    },
                    coupon: function() {
                        0 == this.logno || null == this.logno || "" == this.logno ? this.$sun.toast("请输入该用户扣款消费金额!") : (this.getCoupon(), 
                        this.$refs.pop.show({
                            style: "background-color:#fff;width:100%;height:auto;overflow-x:auto;",
                            anim: "bottom",
                            position: "bottom",
                            topclose: !1,
                            titleStyle: "position: fixed;width: 100%;background: #fff;z-index: 1000;border-bottom:1rpx solid #f7f7f7;"
                        }));
                    },
                    closeDialog: function() {
                        this.$refs.pop.close();
                    },
                    koukuan: function() {
                        var e = this;
                        this.logno ? s.default.uniDoFunc({
                            key: "submit",
                            success: function() {
                                var t = c(o.default.mark(function t() {
                                    return o.default.wrap(function(t) {
                                        while (1) switch (t.prev = t.next) {
                                          case 0:
                                            s.default.lockKey("submit"), console.log("防抖... 在事件触发前连续点击事件会重新计时"), e.tempId ? e.acceptMessage() : e.lessMoneys();

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
                        }) : this.$sun.toast("请输入扣款金额");
                    },
                    lessMoneys: function() {
                        var e = this;
                        return c(o.default.mark(function t() {
                            var n, u;
                            return o.default.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                  case 0:
                                    return n = Number(Number(e.logno) - Number(e.less)).toFixed(2), console.log("money222222222222", n), 
                                    t.next = 4, e.$http({
                                        url: e.$api.less_money,
                                        data: {
                                            uid: e.userInfo.id,
                                            oper_uid: wx.getStorageSync("login").id,
                                            money: n,
                                            coupon_id: 0 == e.less ? "" : e.yhjId
                                        }
                                    });

                                  case 4:
                                    u = t.sent, 0 == u.errno ? (e.logno = "", e.$sun.toast(u.message), console.log(e.less, "this.less"), 
                                    s.default.releaseKey("submit")) : (s.default.releaseKey("submit"), e.$sun.toast(u.message));

                                  case 6:
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
                                0 == n.subscriptionsSetting.mainSwitch || e.requestSubscribeMessage({
                                    tmplIds: [ t.tempId ],
                                    success: function() {
                                        var e = c(o.default.mark(function e(n) {
                                            return o.default.wrap(function(e) {
                                                while (1) switch (e.prev = e.next) {
                                                  case 0:
                                                    console.log("总打印", n), "accept" == n[t.tempId] ? (console.log("授权成功", n), t.lessMoneys()) : wx.showModal({
                                                        title: "温馨提示",
                                                        content: "您已拒绝授权，将无法在微信中收到通知！",
                                                        showCancel: !1,
                                                        success: function(e) {
                                                            e.confirm && (console.log("拒绝授权", n), t.lessMoneys());
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
                                        console.log("失败", e), t.lessMoneys();
                                    },
                                    complete: function(e) {
                                        console.log("完成", e);
                                    }
                                });
                            }
                        });
                    }
                }
            };
            t.default = r;
        }).call(this, n("543d")["default"]);
    },
    fd8c: function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n("3451"), s = n("8f94");
        for (var u in s) "default" !== u && function(e) {
            n.d(t, e, function() {
                return s[e];
            });
        }(u);
        n("7630");
        var i, c = n("f0c5"), r = Object(c["a"])(s["default"], o["b"], o["c"], !1, null, null, null, !1, o["a"], i);
        t["default"] = r.exports;
    }
}, [ [ "3e66", "common/runtime", "common/vendor" ] ] ]);