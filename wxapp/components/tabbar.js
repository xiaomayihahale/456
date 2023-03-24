(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "components/tabbar" ], {
    "25d8": function(t, n, e) {
        "use strict";
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var e = {
                props: [ "list", "current" ],
                data: function() {
                    return {
                        paddingBottomHeight: 0
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
                onLoad: function() {},
                methods: {
                    tabbarChange: function(n, e) {
                        t.switchTab({
                            url: "/" + n
                        });
                    }
                }
            };
            n.default = e;
        }).call(this, e("543d")["default"]);
    },
    "5bf5": function(t, n, e) {},
    "621e": function(t, n, e) {
        "use strict";
        var a = e("5bf5"), u = e.n(a);
        u.a;
    },
    "74ea": function(t, n, e) {
        "use strict";
        (function(t) {
            e("cee1");
            a(e("66fd"));
            var n = a(e("d187"));
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(n.default);
        }).call(this, e("543d")["createPage"]);
    },
    8054: function(t, n, e) {
        "use strict";
        e.r(n);
        var a = e("25d8"), u = e.n(a);
        for (var o in a) "default" !== o && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(o);
        n["default"] = u.a;
    },
    d187: function(t, n, e) {
        "use strict";
        e.r(n);
        var a = e("ef69"), u = e("8054");
        for (var o in u) "default" !== o && function(t) {
            e.d(n, t, function() {
                return u[t];
            });
        }(o);
        e("621e");
        var c, r = e("f0c5"), f = Object(r["a"])(u["default"], a["b"], a["c"], !1, null, "6aaab849", null, !1, a["a"], c);
        n["default"] = f.exports;
    },
    ef69: function(t, n, e) {
        "use strict";
        var a;
        e.d(n, "b", function() {
            return u;
        }), e.d(n, "c", function() {
            return o;
        }), e.d(n, "a", function() {
            return a;
        });
        var u = function() {
            var t = this, n = t.$createElement;
            t._self._c;
        }, o = [];
    }
}, [ [ "74ea", "common/runtime", "common/vendor" ] ] ]);