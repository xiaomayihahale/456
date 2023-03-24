(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/takeawayOrder/link/link" ], {
    "44f9": function(n, t, e) {
        "use strict";
        var u;
        e.d(t, "b", function() {
            return r;
        }), e.d(t, "c", function() {
            return a;
        }), e.d(t, "a", function() {
            return u;
        });
        var r = function() {
            var n = this, t = n.$createElement;
            n._self._c;
        }, a = [];
    },
    "4ad1": function(n, t, e) {
        "use strict";
        e.r(t);
        var u = e("44f9"), r = e("7d2a");
        for (var a in r) "default" !== a && function(n) {
            e.d(t, n, function() {
                return r[n];
            });
        }(a);
        var c, o = e("f0c5"), i = Object(o["a"])(r["default"], u["b"], u["c"], !1, null, null, null, !1, u["a"], c);
        t["default"] = i.exports;
    },
    "730c": function(n, t, e) {
        "use strict";
        (function(n) {
            e("cee1");
            u(e("66fd"));
            var t = u(e("4ad1"));
            function u(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            n(t.default);
        }).call(this, e("543d")["createPage"]);
    },
    "7d2a": function(n, t, e) {
        "use strict";
        e.r(t);
        var u = e("d211"), r = e.n(u);
        for (var a in u) "default" !== a && function(n) {
            e.d(t, n, function() {
                return u[n];
            });
        }(a);
        t["default"] = r.a;
    },
    d211: function(n, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var u = {
            data: function() {
                return {
                    url: ""
                };
            },
            onLoad: function(n) {
                this.url = n.link, console.log("this.url", this.url);
            },
            methods: {}
        };
        t.default = u;
    }
}, [ [ "730c", "common/runtime", "common/vendor" ] ] ]);