(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "wjyk_nhyk/pages/login/Ad-Logins/Ad-Logins" ], {
    "0e30": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("54d0"), s = n("a027");
        for (var r in s) "default" !== r && function(t) {
            n.d(e, t, function() {
                return s[t];
            });
        }(r);
        n("4644");
        var o, i = n("f0c5"), u = Object(i["a"])(s["default"], a["b"], a["c"], !1, null, null, null, !1, a["a"], o);
        e["default"] = u.exports;
    },
    "25d8": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = {
                props: [ "list", "current" ],
                data: function() {
                    return {
                        paddingBottomHeight: 0
                    };
                },
                created: function() {
                    var e = this;
                    t.getSystemInfo({
                        success: function(t) {
                            var n = [ "X", "XR", "XS", "11", "12", "13", "14", "15" ];
                            n.forEach(function(n) {
                                -1 != t.model.indexOf(n) && -1 != t.model.indexOf("iPhone") && (e.paddingBottomHeight = 40);
                            });
                        }
                    });
                },
                watch: {},
                onLoad: function() {},
                methods: {
                    tabbarChange: function(e, n) {
                        t.switchTab({
                            url: "/" + e
                        });
                    }
                }
            };
            e.default = n;
        }).call(this, n("543d")["default"]);
    },
    4644: function(t, e, n) {
        "use strict";
        var a = n("6088"), s = n.n(a);
        s.a;
    },
    5398: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = o(n("a34a")), s = o(n("0747")), r = o(n("d187"));
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function i(t, e, n, a, s, r, o) {
                try {
                    var i = t[r](o), u = i.value;
                } catch (c) {
                    return void n(c);
                }
                i.done ? e(u) : Promise.resolve(u).then(a, s);
            }
            function u(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(a, s) {
                        var r = t.apply(e, n);
                        function o(t) {
                            i(r, a, s, o, u, "next", t);
                        }
                        function u(t) {
                            i(r, a, s, o, u, "throw", t);
                        }
                        o(void 0);
                    });
                };
            }
            var c = {
                components: {
                    "iew-tabbar": r.default
                },
                data: function() {
                    return {
                        rememberPsw: !0,
                        index: "",
                        tabbarsss: [],
                        navIndex3: 0,
                        navItem3: [ {
                            title: "店员端",
                            id: 2
                        }, {
                            title: "店长端",
                            id: 1
                        }, {
                            title: "总管理员",
                            id: 3
                        } ],
                        loginselect: this.$img.loginselect,
                        dianyuanbj: this.$img.dianyuanbj,
                        dianzhangbj: this.$img.dianzhangbj,
                        qiehuanss: this.$img.qiehuans,
                        system: {},
                        login: {},
                        login22: this.$img.login22,
                        account: "",
                        password: "",
                        type: 2
                    };
                },
                onLoad: function() {
                    this.getSystem();
                },
                onShow: function() {
                    0 == this.navIndex3 && (this.account = t.getStorageSync("userClerk").account, this.password = t.getStorageSync("userClerk").password), 
                    1 == this.navIndex3 && (this.account = t.getStorageSync("userManager").account, 
                    this.password = t.getStorageSync("userManager").password), 2 == this.navIndex3 && (this.account = t.getStorageSync("userAll").account, 
                    this.password = t.getStorageSync("userAll").password), 0 != this.tabbarsss.length && t.hideTabBar({
                        animation: !1
                    }), s.default.releaseKey("submit");
                },
                methods: {
                    navChange3: function(e) {
                        this.navIndex3 = e, this.account = "", this.password = "", console.log("不同端登录this.navIndex3===========", this.navIndex3), 
                        0 == this.navIndex3 && (t.getStorageSync("userClerk") ? (this.account = t.getStorageSync("userClerk").account, 
                        this.password = t.getStorageSync("userClerk").password) : (this.account = "", this.password = "")), 
                        1 == this.navIndex3 && (t.getStorageSync("userManager") ? (this.account = t.getStorageSync("userManager").account, 
                        this.password = t.getStorageSync("userManager").password) : (this.account = "", 
                        this.password = "")), 2 == this.navIndex3 && (t.getStorageSync("userAll") ? (this.account = t.getStorageSync("userAll").account, 
                        this.password = t.getStorageSync("userAll").password) : (this.account = "", this.password = ""));
                    },
                    slogins: function() {
                        var t = this;
                        s.default.uniDoFunc({
                            key: "submit",
                            success: function() {
                                var e = u(a.default.mark(function e() {
                                    return a.default.wrap(function(e) {
                                        while (1) switch (e.prev = e.next) {
                                          case 0:
                                            if (s.default.lockKey("submit"), "" != t.account) {
                                                e.next = 7;
                                                break;
                                            }
                                            return t.$sun.toast("用户名不能为空"), s.default.releaseKey("submit"), e.abrupt("return");

                                          case 7:
                                            if ("" != t.password) {
                                                e.next = 13;
                                                break;
                                            }
                                            return t.$sun.toast("请输入密码"), s.default.releaseKey("submit"), e.abrupt("return");

                                          case 13:
                                            t.alogins();

                                          case 14:
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
                        });
                    },
                    getSystem: function() {
                        var t = this;
                        return u(a.default.mark(function e() {
                            var n, s;
                            return a.default.wrap(function(e) {
                                while (1) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, t.$http({
                                        url: t.$api.system
                                    });

                                  case 2:
                                    n = e.sent, 0 == n.errno && (t.system = n.data, t.tempId = n.data.notice.new_template, 
                                    t.tabbarsss = n.data.meauLists, s = "管理员", t.tabbarsss.filter(function(e) {
                                        e.meau_name == s && (t.index = e.index);
                                    }), wx.setStorageSync("system", n.data));

                                  case 4:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    acceptMessage: function() {
                        var e = this;
                        wx.getSetting({
                            withSubscriptions: !0,
                            success: function(n) {
                                0 == n.subscriptionsSetting.mainSwitch || t.requestSubscribeMessage({
                                    tmplIds: [ e.tempId ],
                                    success: function() {
                                        var n = u(a.default.mark(function n(r) {
                                            return a.default.wrap(function(n) {
                                                while (1) switch (n.prev = n.next) {
                                                  case 0:
                                                    "accept" == r[e.tempId] ? (console.log("授权成功", r), s.default.releaseKey("submit"), 
                                                    wx.setStorageSync("login", e.login), t.navigateTo({
                                                        url: "/packages/login/Administrator-Index/Administrator-Index"
                                                    }), e.$sun.toast("登录成功")) : wx.showModal({
                                                        title: "温馨提示",
                                                        content: "您已拒绝授权，将无法在微信中收到通知！",
                                                        showCancel: !1,
                                                        success: function(n) {
                                                            n.confirm && (console.log("拒绝授权", r), s.default.releaseKey("submit"), wx.setStorageSync("login", e.login), 
                                                            t.navigateTo({
                                                                url: "/packages/login/Administrator-Index/Administrator-Index"
                                                            }), e.$sun.toast("登录成功"));
                                                        }
                                                    });

                                                  case 1:
                                                  case "end":
                                                    return n.stop();
                                                }
                                            }, n);
                                        }));
                                        function r(t) {
                                            return n.apply(this, arguments);
                                        }
                                        return r;
                                    }(),
                                    fail: function(n) {
                                        s.default.releaseKey("submit"), wx.setStorageSync("login", e.login), t.navigateTo({
                                            url: "/packages/login/Administrator-Index/Administrator-Index"
                                        }), e.$sun.toast("登录成功");
                                    },
                                    complete: function(t) {
                                        console.log("完成", t);
                                    }
                                });
                            }
                        });
                    },
                    alogins: function() {
                        var e = this;
                        return u(a.default.mark(function n() {
                            var r, o;
                            return a.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, e.$http({
                                        url: e.$api.Alogin,
                                        data: {
                                            username: e.account,
                                            password: e.password,
                                            type: e.navItem3[e.navIndex3].id
                                        }
                                    });

                                  case 2:
                                    r = n.sent, 0 == r.errno ? (e.rememberPsw ? (o = {}, e.$set(o, "account", e.account), 
                                    e.$set(o, "password", e.password), 0 == e.navIndex3 && t.setStorageSync("userClerk", o), 
                                    1 == e.navIndex3 && t.setStorageSync("userManager", o), 2 == e.navIndex3 && t.setStorageSync("userAll", o)) : (0 == e.navIndex3 && t.removeStorageSync("userClerk"), 
                                    1 == e.navIndex3 && t.removeStorageSync("userManager"), 2 == e.navIndex3 && t.removeStorageSync("userAll"), 
                                    e.account = "", e.password = ""), e.login = r.data, e.tempId && 0 == e.navIndex3 ? (s.default.releaseKey("submit"), 
                                    e.acceptMessage()) : (s.default.releaseKey("submit"), 1 == e.navIndex3 ? (e.$sun.toast(r.message), 
                                    wx.setStorageSync("login", e.login), t.navigateTo({
                                        url: "/packages/login/Administrator-Index/dianzhangIndex"
                                    })) : 0 == e.navIndex3 ? (e.$sun.toast(r.message), wx.setStorageSync("login", e.login), 
                                    t.navigateTo({
                                        url: "/packages/login/Administrator-Index/Administrator-Index"
                                    })) : 2 == e.navIndex3 && (e.$sun.toast(r.message), wx.setStorageSync("login", e.login), 
                                    t.navigateTo({
                                        url: "/packages/login/administratorIndex/administratorIndex"
                                    })))) : (s.default.releaseKey("submit"), e.$sun.toast(r.message));

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    }
                }
            };
            e.default = c;
        }).call(this, n("543d")["default"]);
    },
    "54d0": function(t, e, n) {
        "use strict";
        n.d(e, "b", function() {
            return s;
        }), n.d(e, "c", function() {
            return r;
        }), n.d(e, "a", function() {
            return a;
        });
        var a = {
            sunuiNavbar: function() {
                return n.e("components/sunui-navbar/sunui-navbar").then(n.bind(null, "6b73"));
            }
        }, s = function() {
            var t = this, e = t.$createElement;
            t._self._c;
            t._isMounted || (t.e0 = function(e) {
                t.rememberPsw = !t.rememberPsw;
            });
        }, r = [];
    },
    "5bf5": function(t, e, n) {},
    6088: function(t, e, n) {},
    "621e": function(t, e, n) {
        "use strict";
        var a = n("5bf5"), s = n.n(a);
        s.a;
    },
    "67b9": function(t, e, n) {
        "use strict";
        (function(t) {
            n("cee1");
            a(n("66fd"));
            var e = a(n("0e30"));
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(e.default);
        }).call(this, n("543d")["createPage"]);
    },
    8054: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("25d8"), s = n.n(a);
        for (var r in a) "default" !== r && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(r);
        e["default"] = s.a;
    },
    a027: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("5398"), s = n.n(a);
        for (var r in a) "default" !== r && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(r);
        e["default"] = s.a;
    },
    d187: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("ef69"), s = n("8054");
        for (var r in s) "default" !== r && function(t) {
            n.d(e, t, function() {
                return s[t];
            });
        }(r);
        n("621e");
        var o, i = n("f0c5"), u = Object(i["a"])(s["default"], a["b"], a["c"], !1, null, "6aaab849", null, !1, a["a"], o);
        e["default"] = u.exports;
    },
    ef69: function(t, e, n) {
        "use strict";
        var a;
        n.d(e, "b", function() {
            return s;
        }), n.d(e, "c", function() {
            return r;
        }), n.d(e, "a", function() {
            return a;
        });
        var s = function() {
            var t = this, e = t.$createElement;
            t._self._c;
        }, r = [];
    }
}, [ [ "67b9", "common/runtime", "common/vendor" ] ] ]);