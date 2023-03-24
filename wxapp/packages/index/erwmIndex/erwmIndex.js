(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/index/erwmIndex/erwmIndex" ], {
    "07eb": function(n, e, t) {
        "use strict";
        t.r(e);
        var r = t("9e1f"), u = t.n(r);
        for (var o in r) "default" !== o && function(n) {
            t.d(e, n, function() {
                return r[n];
            });
        }(o);
        e["default"] = u.a;
    },
    "3cdc": function(n, e, t) {
        "use strict";
        (function(n) {
            t("cee1");
            r(t("66fd"));
            var e = r(t("87e2"));
            function r(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            n(e.default);
        }).call(this, t("543d")["createPage"]);
    },
    "5c8b": function(n, e, t) {},
    "87e2": function(n, e, t) {
        "use strict";
        t.r(e);
        var r = t("aeb2"), u = t("07eb");
        for (var o in u) "default" !== o && function(n) {
            t.d(e, n, function() {
                return u[n];
            });
        }(o);
        t("b91d");
        var a, c = t("f0c5"), i = Object(c["a"])(u["default"], r["b"], r["c"], !1, null, null, null, !1, r["a"], a);
        e["default"] = i.exports;
    },
    "9e1f": function(n, e, t) {
        "use strict";
        (function(n) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = u(t("a34a"));
            function u(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            function o(n, e, t, r, u, o, a) {
                try {
                    var c = n[o](a), i = c.value;
                } catch (f) {
                    return void t(f);
                }
                c.done ? e(i) : Promise.resolve(i).then(r, u);
            }
            function a(n) {
                return function() {
                    var e = this, t = arguments;
                    return new Promise(function(r, u) {
                        var a = n.apply(e, t);
                        function c(n) {
                            o(a, r, u, c, i, "next", n);
                        }
                        function i(n) {
                            o(a, r, u, c, i, "throw", n);
                        }
                        c(void 0);
                    });
                };
            }
            var c = {
                data: function() {
                    return {
                        userInfo: {},
                        money22: this.$img.money22
                    };
                },
                onShow: function() {
                    this.userInfoes();
                },
                methods: {
                    userInfoes: function() {
                        var e = this;
                        return a(r.default.mark(function t() {
                            var u;
                            return r.default.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, e.$http({
                                        url: e.$api.userhy,
                                        data: {
                                            uid: n.getStorageSync("uid").id
                                        }
                                    });

                                  case 2:
                                    u = t.sent, 0 == u.errno && (e.userInfo = u.data, console.log("用户信息", u, e.uid));

                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    }
                }
            };
            e.default = c;
        }).call(this, t("543d")["default"]);
    },
    aeb2: function(n, e, t) {
        "use strict";
        var r;
        t.d(e, "b", function() {
            return u;
        }), t.d(e, "c", function() {
            return o;
        }), t.d(e, "a", function() {
            return r;
        });
        var u = function() {
            var n = this, e = n.$createElement;
            n._self._c;
        }, o = [];
    },
    b91d: function(n, e, t) {
        "use strict";
        var r = t("5c8b"), u = t.n(r);
        u.a;
    }
}, [ [ "3cdc", "common/runtime", "common/vendor" ] ] ]);