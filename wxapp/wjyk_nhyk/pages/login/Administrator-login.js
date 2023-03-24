(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "wjyk_nhyk/pages/login/Administrator-login" ], {
    "0c2b": function(t, n, e) {
        "use strict";
        e.r(n);
        var r = e("544d"), u = e("93e8");
        for (var a in u) "default" !== a && function(t) {
            e.d(n, t, function() {
                return u[t];
            });
        }(a);
        e("ba8e"), e("19f2");
        var o, c = e("f0c5"), i = Object(c["a"])(u["default"], r["b"], r["c"], !1, null, null, null, !1, r["a"], o);
        n["default"] = i.exports;
    },
    "19f2": function(t, n, e) {
        "use strict";
        var r = e("fbfe"), u = e.n(r);
        u.a;
    },
    "38f4": function(t, n, e) {
        "use strict";
        (function(t) {
            e("cee1");
            r(e("66fd"));
            var n = r(e("0c2b"));
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(n.default);
        }).call(this, e("543d")["createPage"]);
    },
    "4af4": function(t, n, e) {},
    "544d": function(t, n, e) {
        "use strict";
        var r;
        e.d(n, "b", function() {
            return u;
        }), e.d(n, "c", function() {
            return a;
        }), e.d(n, "a", function() {
            return r;
        });
        var u = function() {
            var t = this, n = t.$createElement;
            t._self._c;
        }, a = [];
    },
    "82c5": function(t, n, e) {
        "use strict";
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var r = u(e("a34a"));
            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function a(t, n, e, r, u, a, o) {
                try {
                    var c = t[a](o), i = c.value;
                } catch (f) {
                    return void e(f);
                }
                c.done ? n(i) : Promise.resolve(i).then(r, u);
            }
            function o(t) {
                return function() {
                    var n = this, e = arguments;
                    return new Promise(function(r, u) {
                        var o = t.apply(n, e);
                        function c(t) {
                            a(o, r, u, c, i, "next", t);
                        }
                        function i(t) {
                            a(o, r, u, c, i, "throw", t);
                        }
                        c(void 0);
                    });
                };
            }
            var c = {
                data: function() {
                    return {
                        system: {}
                    };
                },
                onShow: function() {
                    this.getSystem();
                },
                methods: {
                    getSystem: function() {
                        var t = this;
                        return o(r.default.mark(function n() {
                            var e;
                            return r.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, t.$http({
                                        url: t.$api.system
                                    });

                                  case 2:
                                    e = n.sent, 0 == e.errno && (t.system = e.data, wx.setStorageSync("system", e.data)), 
                                    console.log("systemInfo", e);

                                  case 5:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    login: function() {
                        t.navigateTo({
                            url: "/packages/login/Administrator-Index/Administrator-Index"
                        });
                    }
                }
            };
            n.default = c;
        }).call(this, e("543d")["default"]);
    },
    "93e8": function(t, n, e) {
        "use strict";
        e.r(n);
        var r = e("82c5"), u = e.n(r);
        for (var a in r) "default" !== a && function(t) {
            e.d(n, t, function() {
                return r[t];
            });
        }(a);
        n["default"] = u.a;
    },
    ba8e: function(t, n, e) {
        "use strict";
        var r = e("4af4"), u = e.n(r);
        u.a;
    },
    fbfe: function(t, n, e) {}
}, [ [ "38f4", "common/runtime", "common/vendor" ] ] ]);