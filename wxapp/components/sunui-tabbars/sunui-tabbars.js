(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "components/sunui-tabbars/sunui-tabbars" ], {
    1430: function(t, n, e) {
        "use strict";
        e.r(n);
        var r = e("d5eb"), u = e.n(r);
        for (var a in r) "default" !== a && function(t) {
            e.d(n, t, function() {
                return r[t];
            });
        }(a);
        n["default"] = u.a;
    },
    "47e3": function(t, n, e) {},
    a65f: function(t, n, e) {
        "use strict";
        e.r(n);
        var r = e("ca8a"), u = e("1430");
        for (var a in u) "default" !== a && function(t) {
            e.d(n, t, function() {
                return u[t];
            });
        }(a);
        e("c2bd");
        var o, c = e("f0c5"), i = Object(c["a"])(u["default"], r["b"], r["c"], !1, null, "14841bfc", null, !1, r["a"], o);
        n["default"] = i.exports;
    },
    b129: function(t, n, e) {
        "use strict";
        (function(t) {
            e("cee1");
            r(e("66fd"));
            var n = r(e("a65f"));
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(n.default);
        }).call(this, e("543d")["createPage"]);
    },
    c2bd: function(t, n, e) {
        "use strict";
        var r = e("47e3"), u = e.n(r);
        u.a;
    },
    ca8a: function(t, n, e) {
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
    d5eb: function(t, n, e) {
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
                } catch (s) {
                    return void e(s);
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
                props: {
                    current: String
                },
                data: function() {
                    return {
                        system: [],
                        paddingBottomHeight: 0,
                        list: []
                    };
                },
                created: function() {
                    var n = this;
                    t.getSystemInfo({
                        success: function(t) {
                            var e = [ "X", "XR", "XS", "11", "12", "13", "14", "15" ];
                            e.forEach(function(e) {
                                -1 != t.model.indexOf(e) && -1 != t.model.indexOf("iPhone") && (n.paddingBottomHeight = 40);
                            });
                        }
                    });
                },
                watch: {},
                onLoad: function() {
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
                                    return console.log("----------"), n.next = 3, t.$http({
                                        url: t.$api.system
                                    });

                                  case 3:
                                    e = n.sent, 0 == e.errno && (t.list = e.data.meauLists, console.log("msystem==================em", t.list));

                                  case 5:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    tabbarChange: function(n) {
                        console.log(n), t.switchTab({
                            url: n
                        });
                    }
                }
            };
            n.default = c;
        }).call(this, e("543d")["default"]);
    }
}, [ [ "b129", "common/runtime", "common/vendor" ] ] ]);