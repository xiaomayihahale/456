(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/index/DistributionManagement/money/money" ], {
    "2b6c": function(n, t, e) {
        "use strict";
        var r = e("9666"), u = e.n(r);
        u.a;
    },
    4189: function(n, t, e) {
        "use strict";
        (function(n) {
            e("cee1");
            r(e("66fd"));
            var t = r(e("ab4e"));
            function r(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            n(t.default);
        }).call(this, e("543d")["createPage"]);
    },
    4989: function(n, t, e) {
        "use strict";
        e.r(t);
        var r = e("e44f"), u = e.n(r);
        for (var a in r) "default" !== a && function(n) {
            e.d(t, n, function() {
                return r[n];
            });
        }(a);
        t["default"] = u.a;
    },
    "6ba4": function(n, t, e) {
        "use strict";
        e.d(t, "b", function() {
            return u;
        }), e.d(t, "c", function() {
            return a;
        }), e.d(t, "a", function() {
            return r;
        });
        var r = {
            richParser: function() {
                return Promise.all([ e.e("common/vendor"), e.e("components/rich-parser/rich-parser") ]).then(e.bind(null, "6057"));
            }
        }, u = function() {
            var n = this, t = n.$createElement;
            n._self._c;
        }, a = [];
    },
    9666: function(n, t, e) {},
    ab4e: function(n, t, e) {
        "use strict";
        e.r(t);
        var r = e("6ba4"), u = e("4989");
        for (var a in u) "default" !== a && function(n) {
            e.d(t, n, function() {
                return u[n];
            });
        }(a);
        e("2b6c");
        var o, c = e("f0c5"), i = Object(c["a"])(u["default"], r["b"], r["c"], !1, null, null, null, !1, r["a"], o);
        t["default"] = i.exports;
    },
    e44f: function(n, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = u(e("a34a"));
        function u(n) {
            return n && n.__esModule ? n : {
                default: n
            };
        }
        function a(n, t, e, r, u, a, o) {
            try {
                var c = n[a](o), i = c.value;
            } catch (s) {
                return void e(s);
            }
            c.done ? t(i) : Promise.resolve(i).then(r, u);
        }
        function o(n) {
            return function() {
                var t = this, e = arguments;
                return new Promise(function(r, u) {
                    var o = n.apply(t, e);
                    function c(n) {
                        a(o, r, u, c, i, "next", n);
                    }
                    function i(n) {
                        a(o, r, u, c, i, "throw", n);
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
                    var n = this;
                    return o(r.default.mark(function t() {
                        var e;
                        return r.default.wrap(function(t) {
                            while (1) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, n.$http({
                                    url: n.$api.system
                                });

                              case 2:
                                e = t.sent, 0 == e.errno && (n.system = e.data);

                              case 4:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                }
            }
        };
        t.default = c;
    }
}, [ [ "4189", "common/runtime", "common/vendor" ] ] ]);