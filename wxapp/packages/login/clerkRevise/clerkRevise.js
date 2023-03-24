(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/login/clerkRevise/clerkRevise" ], {
    "0770": function(e, t, n) {
        "use strict";
        var a;
        n.d(t, "b", function() {
            return u;
        }), n.d(t, "c", function() {
            return r;
        }), n.d(t, "a", function() {
            return a;
        });
        var u = function() {
            var e = this, t = e.$createElement;
            e._self._c;
        }, r = [];
    },
    "4fa0": function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = r(n("a34a")), u = r(n("0747"));
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function s(e, t, n, a, u, r, s) {
                try {
                    var i = e[r](s), o = i.value;
                } catch (c) {
                    return void n(c);
                }
                i.done ? t(o) : Promise.resolve(o).then(a, u);
            }
            function i(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(a, u) {
                        var r = e.apply(t, n);
                        function i(e) {
                            s(r, a, u, i, o, "next", e);
                        }
                        function o(e) {
                            s(r, a, u, i, o, "throw", e);
                        }
                        i(void 0);
                    });
                };
            }
            var o = {
                data: function() {
                    return {
                        type: "",
                        password: "",
                        username: ""
                    };
                },
                onLoad: function(e) {
                    this.type = e.type, this.username = e.username, this.dyid = e.dyid, console.log("this.type", this.type, this.options);
                },
                onShow: function() {
                    u.default.releaseKey("submit");
                },
                methods: {
                    revisess: function() {
                        var e = this;
                        if ("" == this.password) return this.$sun.toast("请输入密码"), void u.default.releaseKey("submit");
                        u.default.uniDoFunc({
                            key: "submit",
                            success: function() {
                                var t = i(a.default.mark(function t() {
                                    return a.default.wrap(function(t) {
                                        while (1) switch (t.prev = t.next) {
                                          case 0:
                                            u.default.lockKey("submit"), 1 == e.type || 3 == e.type ? (u.default.lockKey("submit"), 
                                            e.dianzhangpwd()) : 2 == e.type ? (u.default.lockKey("submit"), e.userpwd()) : (u.default.releaseKey("submit"), 
                                            e.$sun.toast("修改失败"));

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
                    dianzhangpwd: function() {
                        var t = this;
                        return i(a.default.mark(function n() {
                            var r;
                            return a.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, t.$http({
                                        url: t.$api.update_pwd,
                                        data: {
                                            uid: wx.getStorageSync("login").id,
                                            pwd: t.password
                                        }
                                    });

                                  case 2:
                                    r = n.sent, 0 == r.errno ? (t.$sun.toast(r.message), console.log("修改成功"), setTimeout(function() {
                                        e.navigateBack({
                                            delta: 2
                                        });
                                    }, 1e3)) : (u.default.releaseKey("submit"), t.$sun.toast(r.message));

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    userpwd: function() {
                        var t = this;
                        return i(a.default.mark(function n() {
                            var r;
                            return a.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, t.$http({
                                        url: t.$api.update_user_pwd,
                                        data: {
                                            oper_id: t.dyid,
                                            pwd: t.password
                                        }
                                    });

                                  case 2:
                                    r = n.sent, 0 == r.errno ? (t.$sun.toast(r.message), console.log("修改成功"), setTimeout(function() {
                                        e.navigateBack({
                                            delta: 1
                                        });
                                    }, 1e3)) : (u.default.releaseKey("submit"), t.$sun.toast(r.message));

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    }
                }
            };
            t.default = o;
        }).call(this, n("543d")["default"]);
    },
    "6ace": function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("4fa0"), u = n.n(a);
        for (var r in a) "default" !== r && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(r);
        t["default"] = u.a;
    },
    "8baa": function(e, t, n) {},
    "8c6b": function(e, t, n) {
        "use strict";
        (function(e) {
            n("cee1");
            a(n("66fd"));
            var t = a(n("d263"));
            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            e(t.default);
        }).call(this, n("543d")["createPage"]);
    },
    d263: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("0770"), u = n("6ace");
        for (var r in u) "default" !== r && function(e) {
            n.d(t, e, function() {
                return u[e];
            });
        }(r);
        n("f1e5");
        var s, i = n("f0c5"), o = Object(i["a"])(u["default"], a["b"], a["c"], !1, null, null, null, !1, a["a"], s);
        t["default"] = o.exports;
    },
    f1e5: function(e, t, n) {
        "use strict";
        var a = n("8baa"), u = n.n(a);
        u.a;
    }
}, [ [ "8c6b", "common/runtime", "common/vendor" ] ] ]);