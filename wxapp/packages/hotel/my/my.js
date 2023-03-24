(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/hotel/my/my" ], {
    "5a99": function(e, n, t) {
        "use strict";
        (function(e) {
            t("cee1");
            a(t("66fd"));
            var n = a(t("8251"));
            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            e(n.default);
        }).call(this, t("543d")["createPage"]);
    },
    "7b91": function(e, n, t) {
        "use strict";
        (function(e) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var a = o(t("a34a"));
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function r(e, n, t, a, o, r, i) {
                try {
                    var u = e[r](i), s = u.value;
                } catch (c) {
                    return void t(c);
                }
                u.done ? n(s) : Promise.resolve(s).then(a, o);
            }
            function i(e) {
                return function() {
                    var n = this, t = arguments;
                    return new Promise(function(a, o) {
                        var i = e.apply(n, t);
                        function u(e) {
                            r(i, a, o, u, s, "next", e);
                        }
                        function s(e) {
                            r(i, a, o, u, s, "throw", e);
                        }
                        u(void 0);
                    });
                };
            }
            var u = function() {
                Promise.all([ t.e("common/vendor"), t.e("components/cjnewTabbar") ]).then(function() {
                    return resolve(t("4d6f"));
                }.bind(null, t)).catch(t.oe);
            }, s = function() {
                t.e("components/QS-Navbar/QS-Navbar").then(function() {
                    return resolve(t("318c"));
                }.bind(null, t)).catch(t.oe);
            }, c = {
                components: {
                    "iew-tabbar": u,
                    QSNavbar: s
                },
                data: function() {
                    return {
                        huiyuan: this.$img.huiyuan,
                        avatar: this.$img.avatar,
                        uid: "",
                        navbarItems_1: [ {
                            type: "text",
                            text: "我的",
                            width: 20,
                            weight: "bold",
                            color: "#fff"
                        } ],
                        userInfo: {}
                    };
                },
                onShow: function() {
                    this.uid = e.getStorageSync("uid").id, this.stores = e.getStorageSync("storeNext"), 
                    this.getSystem(), this.userInfoes(), this.getSystemInfo();
                },
                methods: {
                    handleLogin: function() {
                        if (this.uid) return !0;
                        e.navigateTo({
                            url: "/wjyk_nhyk/pages/login/login"
                        });
                    },
                    getSystem: function() {
                        var e = this;
                        return i(a.default.mark(function n() {
                            var t;
                            return a.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, e.$http({
                                        url: e.$api.hotelSystem
                                    });

                                  case 2:
                                    t = n.sent, 0 == t.errno && (e.system = t.data);

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    userInfoes: function() {
                        var n = this;
                        return i(a.default.mark(function t() {
                            var o;
                            return a.default.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, n.$http({
                                        url: n.$api.userhy,
                                        data: {
                                            uid: e.getStorageSync("uid").id
                                        }
                                    });

                                  case 2:
                                    o = t.sent, 0 == o.errno && (n.userInfo = o.data);

                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    handleContact: function(e) {
                        console.log("===========", e, e.detail.path), console.log(e.detail.query);
                    },
                    erwm2: function() {
                        this.handleLogin() && (this.kfTemplate ? this.acceptMessage() : e.navigateTo({
                            url: "/packages/index/erwmIndex/erwmIndex"
                        }));
                    },
                    getSystemInfo: function() {
                        var e = this;
                        return i(a.default.mark(function n() {
                            var t;
                            return a.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, e.$http({
                                        url: e.$api.system
                                    });

                                  case 2:
                                    t = n.sent, 0 == t.errno && (e.kfTemplate = t.data.notice.kf_template);

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    acceptMessage: function() {
                        var n = this;
                        wx.getSetting({
                            withSubscriptions: !0,
                            success: function(t) {
                                0 == t.subscriptionsSetting.mainSwitch || e.requestSubscribeMessage({
                                    tmplIds: [ n.kfTemplate ],
                                    success: function() {
                                        var t = i(a.default.mark(function t(o) {
                                            return a.default.wrap(function(t) {
                                                while (1) switch (t.prev = t.next) {
                                                  case 0:
                                                    "accept" == o[n.kfTemplate] ? (console.log("授权成功", o), e.navigateTo({
                                                        url: "/packages/index/erwmIndex/erwmIndex"
                                                    })) : wx.showModal({
                                                        title: "温馨提示",
                                                        content: "您已拒绝授权，将无法在微信中收到通知！",
                                                        showCancel: !1,
                                                        success: function(n) {
                                                            n.confirm && (console.log("拒绝授权", o), e.navigateTo({
                                                                url: "/packages/index/erwmIndex/erwmIndex"
                                                            }));
                                                        }
                                                    });

                                                  case 1:
                                                  case "end":
                                                    return t.stop();
                                                }
                                            }, t);
                                        }));
                                        function o(e) {
                                            return t.apply(this, arguments);
                                        }
                                        return o;
                                    }(),
                                    fail: function(n) {
                                        console.log("失败", n), e.navigateTo({
                                            url: "/packages/index/erwmIndex/erwmIndex"
                                        });
                                    },
                                    complete: function(e) {
                                        console.log("完成", e);
                                    }
                                });
                            }
                        });
                    },
                    chick: function() {
                        this.handleLogin() && e.navigateTo({
                            url: "/packages/takeawayOrder/myVip/myVip"
                        });
                    },
                    handleOrderList2: function(n) {
                        this.handleLogin() && (e.navigateTo({
                            url: "/packages/hotel/orderList/orderList?index=" + n
                        }), console.log("indexaaaaaaaaaaaaaaaa", n));
                    },
                    coupon2: function() {
                        this.handleLogin() && e.navigateTo({
                            url: "/packages/hotel/hotelCoupon/hotelCoupon?currentIndex=1"
                        });
                    },
                    jf: function() {
                        this.handleLogin() && (e.navigateTo({
                            url: "/packages/Mall/integralMail/integralMail"
                        }), console.log("this.stores", this.stores));
                    },
                    store2: function() {
                        this.$refs.popmend.show({
                            style: "width:642rpx; height:auto;background-color: #FFFFFF;",
                            anim: "center",
                            shadeClose: !1,
                            topclose: !1
                        });
                    },
                    wansh2: function() {
                        this.$refs.popmend.close(), this.$sun.navGo("/packages/Mall/NearbyStores/NearbyStores", {
                            indexs: 1
                        });
                    },
                    money: function() {
                        this.handleLogin() && e.navigateTo({
                            url: "/packages/index/Mymoney/Mymoney"
                        });
                    },
                    address: function() {
                        this.handleLogin() && e.navigateTo({
                            url: "/packages/Mall/address/address"
                        });
                    }
                }
            };
            n.default = c;
        }).call(this, t("543d")["default"]);
    },
    "7ecb": function(e, n, t) {},
    8251: function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("f277"), o = t("d77e");
        for (var r in o) "default" !== r && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(r);
        t("f320");
        var i, u = t("f0c5"), s = Object(u["a"])(o["default"], a["b"], a["c"], !1, null, null, null, !1, a["a"], i);
        n["default"] = s.exports;
    },
    d77e: function(e, n, t) {
        "use strict";
        t.r(n);
        var a = t("7b91"), o = t.n(a);
        for (var r in a) "default" !== r && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(r);
        n["default"] = o.a;
    },
    f277: function(e, n, t) {
        "use strict";
        t.d(n, "b", function() {
            return o;
        }), t.d(n, "c", function() {
            return r;
        }), t.d(n, "a", function() {
            return a;
        });
        var a = {
            sunuiCard: function() {
                return t.e("components/sunui-card/sunui-card").then(t.bind(null, "c694"));
            },
            sunuiCell: function() {
                return t.e("components/sunui-cell/sunui-cell").then(t.bind(null, "cf30"));
            },
            sunuiPopup: function() {
                return t.e("components/sunui-popup/sunui-popup").then(t.bind(null, "6cf4"));
            }
        }, o = function() {
            var e = this, n = e.$createElement, t = (e._self._c, e.userInfo.curMember_name && e.userInfo.nextMoney && e.userInfo.nextMember_name ? Number(e.userInfo.nextDiscount).toFixed(1) : null);
            e.$mp.data = Object.assign({}, {
                $root: {
                    g0: t
                }
            });
        }, r = [];
    },
    f320: function(e, n, t) {
        "use strict";
        var a = t("7ecb"), o = t.n(a);
        o.a;
    }
}, [ [ "5a99", "common/runtime", "common/vendor" ] ] ]);