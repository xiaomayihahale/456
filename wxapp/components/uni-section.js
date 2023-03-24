(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "components/uni-section" ], {
    "2cad": function(t, n, e) {
        "use strict";
        e.r(n);
        var u = e("619c"), c = e("c315");
        for (var i in c) "default" !== i && function(t) {
            e.d(n, t, function() {
                return c[t];
            });
        }(i);
        e("4a05");
        var r, a = e("f0c5"), o = Object(a["a"])(c["default"], u["b"], u["c"], !1, null, "3b8eb216", null, !1, u["a"], r);
        n["default"] = o.exports;
    },
    "4a05": function(t, n, e) {
        "use strict";
        var u = e("7e9e"), c = e.n(u);
        c.a;
    },
    "619c": function(t, n, e) {
        "use strict";
        var u;
        e.d(n, "b", function() {
            return c;
        }), e.d(n, "c", function() {
            return i;
        }), e.d(n, "a", function() {
            return u;
        });
        var c = function() {
            var t = this, n = t.$createElement;
            t._self._c;
        }, i = [];
    },
    "6a13": function(t, n, e) {
        "use strict";
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var e = {
                name: "UniTitle",
                props: {
                    type: {
                        type: String,
                        default: ""
                    },
                    title: {
                        type: String,
                        default: ""
                    },
                    subTitle: {
                        type: String,
                        default: ""
                    }
                },
                data: function() {
                    return {};
                },
                watch: {
                    title: function(n) {
                        t.report && "" !== n && t.report("title", n);
                    }
                },
                methods: {
                    onClick: function() {
                        this.$emit("click");
                    }
                }
            };
            n.default = e;
        }).call(this, e("543d")["default"]);
    },
    "7e9e": function(t, n, e) {},
    c315: function(t, n, e) {
        "use strict";
        e.r(n);
        var u = e("6a13"), c = e.n(u);
        for (var i in u) "default" !== i && function(t) {
            e.d(n, t, function() {
                return u[t];
            });
        }(i);
        n["default"] = c.a;
    }
} ]);

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ "components/uni-section-create-component", {
    "components/uni-section-create-component": function(module, exports, __webpack_require__) {
        __webpack_require__("543d")["createComponent"](__webpack_require__("2cad"));
    }
}, [ [ "components/uni-section-create-component" ] ] ]);