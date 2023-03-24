(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/takeawayOrder/myVip/memberBenefits/memberBenefits" ], {
    "15a4": function(e, n, t) {
        "use strict";
        t.r(n);
        var r = t("a1d1"), a = t("5e95");
        for (var u in a) "default" !== u && function(e) {
            t.d(n, e, function() {
                return a[e];
            });
        }(u);
        var i, o = t("f0c5"), c = Object(o["a"])(a["default"], r["b"], r["c"], !1, null, null, null, !1, r["a"], i);
        n["default"] = c.exports;
    },
    "316e": function(e, n, t) {
        "use strict";
        (function(e) {
            t("cee1");
            r(t("66fd"));
            var n = r(t("15a4"));
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            e(n.default);
        }).call(this, t("543d")["createPage"]);
    },
    "5e95": function(e, n, t) {
        "use strict";
        t.r(n);
        var r = t("cf11"), a = t.n(r);
        for (var u in r) "default" !== u && function(e) {
            t.d(n, e, function() {
                return r[e];
            });
        }(u);
        n["default"] = a.a;
    },
    a1d1: function(e, n, t) {
        "use strict";
        t.d(n, "b", function() {
            return a;
        }), t.d(n, "c", function() {
            return u;
        }), t.d(n, "a", function() {
            return r;
        });
        var r = {
            richParser: function() {
                return Promise.all([ t.e("common/vendor"), t.e("components/rich-parser/rich-parser") ]).then(t.bind(null, "6057"));
            }
        }, a = function() {
            var e = this, n = e.$createElement;
            e._self._c;
        }, u = [];
    },
    cf11: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var r = a(t("a34a"));
        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function u(e, n, t, r, a, u, i) {
            try {
                var o = e[u](i), c = o.value;
            } catch (f) {
                return void t(f);
            }
            o.done ? n(c) : Promise.resolve(c).then(r, a);
        }
        function i(e) {
            return function() {
                var n = this, t = arguments;
                return new Promise(function(r, a) {
                    var i = e.apply(n, t);
                    function o(e) {
                        u(i, r, a, o, c, "next", e);
                    }
                    function c(e) {
                        u(i, r, a, o, c, "throw", e);
                    }
                    o(void 0);
                });
            };
        }
        var o = {
            data: function() {
                return {
                    explain: ""
                };
            },
            onShow: function() {
                this.getExplain();
            },
            methods: {
                getExplain: function() {
                    var e = this;
                    return i(r.default.mark(function n() {
                        var t;
                        return r.default.wrap(function(n) {
                            while (1) switch (n.prev = n.next) {
                              case 0:
                                return n.next = 2, e.$http({
                                    url: e.$api.member_description
                                });

                              case 2:
                                t = n.sent, 0 == t.errno && (e.explain = t.data);

                              case 4:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                    }))();
                }
            }
        };
        n.default = o;
    }
}, [ [ "316e", "common/runtime", "common/vendor" ] ] ]);