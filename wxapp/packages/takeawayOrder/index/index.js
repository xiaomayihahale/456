(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/takeawayOrder/index/index" ], {
    "51c7": function(n, e, t) {
        "use strict";
        t.d(e, "b", function() {
            return a;
        }), t.d(e, "c", function() {
            return o;
        }), t.d(e, "a", function() {
            return i;
        });
        var i = {
            sunuiPopup: function() {
                return t.e("components/sunui-popup/sunui-popup").then(t.bind(null, "6cf4"));
            }
        }, a = function() {
            var n = this, e = n.$createElement;
            n._self._c;
        }, o = [];
    },
    5780: function(n, e, t) {
        "use strict";
        t.r(e);
        var i = t("51c7"), a = t("f21c");
        for (var o in a) "default" !== o && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(o);
        t("9568");
        var r, c = t("f0c5"), u = Object(c["a"])(a["default"], i["b"], i["c"], !1, null, null, null, !1, i["a"], r);
        e["default"] = u.exports;
    },
    9568: function(n, e, t) {
        "use strict";
        var i = t("c2c6"), a = t.n(i);
        a.a;
    },
    a9c6: function(n, e, t) {
        "use strict";
        (function(n) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = a(t("a34a"));
            function a(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            function o(n, e, t, i, a, o, r) {
                try {
                    var c = n[o](r), u = c.value;
                } catch (s) {
                    return void t(s);
                }
                c.done ? e(u) : Promise.resolve(u).then(i, a);
            }
            function r(n) {
                return function() {
                    var e = this, t = arguments;
                    return new Promise(function(i, a) {
                        var r = n.apply(e, t);
                        function c(n) {
                            o(r, i, a, c, u, "next", n);
                        }
                        function u(n) {
                            o(r, i, a, c, u, "throw", n);
                        }
                        c(void 0);
                    });
                };
            }
            var c = function() {
                Promise.all([ t.e("common/vendor"), t.e("components/cjnewTabbar") ]).then(function() {
                    return resolve(t("4d6f"));
                }.bind(null, t)).catch(t.oe);
            }, u = function() {
                t.e("components/QS-Navbar/QS-Navbar").then(function() {
                    return resolve(t("318c"));
                }.bind(null, t)).catch(t.oe);
            }, s = {
                components: {
                    "iew-tabbar": c,
                    QSNavbar: u
                },
                data: function() {
                    return {
                        avatar: this.$img.avatar,
                        uid: "",
                        idNext: "",
                        stordIdNexts: "",
                        indicatorDots: !1,
                        autoplay: !0,
                        interval: 2e3,
                        duration: 1e3,
                        circular: !0,
                        system: {},
                        navbarItems_1: [ {
                            type: "text",
                            text: "首页",
                            width: 20,
                            weight: "bold"
                        } ],
                        wmindex1: this.$img.wmindex1,
                        wmindex2: this.$img.wmindex2,
                        wmindex11: this.$img.wmindex11,
                        wmindex22: this.$img.wmindex22,
                        wmindex33: this.$img.wmindex33,
                        userInfo: {}
                    };
                },
                onShow: function() {
                    this.isFirst = n.getStorageSync("uid").isFirst, this.uid = n.getStorageSync("uid").id, 
                    this.getSystem(), this.userInfoes();
                },
                methods: {
                    handleLogin: function() {
                        if (this.uid) return !0;
                        n.navigateTo({
                            url: "/wjyk_nhyk/pages/login/login"
                        });
                    },
                    indeax: function() {
                        this.handleLogin() && (n.switchTab({
                            url: "/wjyk_nhyk/pages/index/index"
                        }), n.setStorageSync("switchTo", !0));
                    },
                    carousel: function(e) {
                        console.log("item=======", e), 0 == e.link_type ? this.handleLogin() && e.link && (n.navigateTo({
                            url: "/" + e.link
                        }), console.log("跳转内部链接")) : 1 == e.link_type ? e.external_link && (n.navigateTo({
                            url: "/packages/takeawayOrder/link/link?link=" + e.external_link
                        }), console.log("跳转外部链接")) : 2 == e.link_type && "" != e.appid && "" != e.external_link && (console.log("跳转外部小程序"), 
                        wx.navigateToMiniProgram({
                            appId: e.appid,
                            path: e.external_link,
                            success: function(n) {
                                console.log("成功", n);
                            },
                            fail: function(n) {
                                console.log("失败", n);
                            }
                        }));
                    },
                    getSystem: function() {
                        var n = this;
                        return r(i.default.mark(function e() {
                            var t;
                            return i.default.wrap(function(e) {
                                while (1) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, n.$http({
                                        url: n.$api.foodsSystem
                                    });

                                  case 2:
                                    t = e.sent, 0 == t.errno && (n.system = t.data);

                                  case 4:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    erwm2: function() {
                        this.handleLogin() && n.navigateTo({
                            url: "/packages/index/erwmIndex/erwmIndex"
                        });
                    },
                    goumai: function() {
                        this.handleLogin() && n.navigateTo({
                            url: "/packages/takeawayOrder/voucher/voucher"
                        });
                    },
                    chongzhi: function() {
                        this.handleLogin() && n.navigateTo({
                            url: "/packages/index/Mymoney/Mymoney"
                        });
                    },
                    jifen: function() {
                        this.handleLogin() && n.navigateTo({
                            url: "/packages/Mall/integralMail/integralMail"
                        });
                    },
                    scanCode: function() {
                        n.scanCode({
                            success: function(n) {}
                        });
                    },
                    erwm: function() {
                        var e = this, t = wx.getStorageSync("indexUrl");
                        0 != this.isFirst ? this.uid && 1 != t ? this.new2() : (this.handleLogin(), wx.scanCode({
                            success: function(e) {
                                n.navigateTo({
                                    url: "/" + e.path
                                });
                            },
                            fail: function(n) {
                                e.$sun.toast("扫码失败");
                            }
                        })) : (this.handleLogin(), wx.scanCode({
                            success: function(e) {
                                console.log("res.path", e.path), n.navigateTo({
                                    url: "/" + e.path
                                });
                            },
                            fail: function(n) {
                                e.$sun.toast("扫码失败");
                            }
                        }));
                    },
                    new2: function() {
                        this.$refs.popNew.show({
                            style: "width:642rpx; height:auto;background-color: #FFFFFF;",
                            anim: "center",
                            topclose: !1
                        });
                    },
                    wanshs: function() {
                        this.$refs.popNew.close(), n.navigateTo({
                            url: "/packages/index/my/editProfile"
                        });
                    },
                    waimai: function() {
                        this.handleLogin() && n.navigateTo({
                            url: "/packages/takeawayOrder/classification/classification?actives=1"
                        });
                    },
                    storeEat: function() {
                        this.handleLogin() && n.navigateTo({
                            url: "/packages/takeawayOrder/classification/classification?actives=0"
                        });
                    },
                    lists: function(e) {
                        n.navigateTo({
                            url: e
                        });
                    },
                    aa: function() {
                        n.navigateTo({
                            url: "/packages/takeawayOrder/voucher/voucher"
                        });
                    },
                    userInfoes: function() {
                        var e = this;
                        return r(i.default.mark(function t() {
                            var a;
                            return i.default.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, e.$http({
                                        url: e.$api.userhy,
                                        data: {
                                            uid: n.getStorageSync("uid").id
                                        }
                                    });

                                  case 2:
                                    a = t.sent, 0 == a.errno && (e.userInfo = a.data);

                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    }
                }
            };
            e.default = s;
        }).call(this, t("543d")["default"]);
    },
    c2c6: function(n, e, t) {},
    f21c: function(n, e, t) {
        "use strict";
        t.r(e);
        var i = t("a9c6"), a = t.n(i);
        for (var o in i) "default" !== o && function(n) {
            t.d(e, n, function() {
                return i[n];
            });
        }(o);
        e["default"] = a.a;
    },
    fb2f: function(n, e, t) {
        "use strict";
        (function(n) {
            t("cee1");
            i(t("66fd"));
            var e = i(t("5780"));
            function i(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            n(e.default);
        }).call(this, t("543d")["createPage"]);
    }
}, [ [ "fb2f", "common/runtime", "common/vendor" ] ] ]);