(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/login/Administrator-Index/codeIndex" ], {
    5126: function(t, e, n) {
        "use strict";
        (function(t) {
            n("cee1");
            u(n("66fd"));
            var e = u(n("7029"));
            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(e.default);
        }).call(this, n("543d")["createPage"]);
    },
    7029: function(t, e, n) {
        "use strict";
        n.r(e);
        var u = n("7059"), r = n("e39c");
        for (var o in r) "default" !== o && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(o);
        var i, a = n("f0c5"), c = Object(a["a"])(r["default"], u["b"], u["c"], !1, null, null, null, !1, u["a"], i);
        e["default"] = c.exports;
    },
    7059: function(t, e, n) {
        "use strict";
        var u;
        n.d(e, "b", function() {
            return r;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {
            return u;
        });
        var r = function() {
            var t = this, e = t.$createElement;
            t._self._c;
        }, o = [];
    },
    d73c: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var u = r(n("a34a"));
        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function o(t, e, n, u, r, o, i) {
            try {
                var a = t[o](i), c = a.value;
            } catch (d) {
                return void n(d);
            }
            a.done ? e(c) : Promise.resolve(c).then(u, r);
        }
        function i(t) {
            return function() {
                var e = this, n = arguments;
                return new Promise(function(u, r) {
                    var i = t.apply(e, n);
                    function a(t) {
                        o(i, u, r, a, c, "next", t);
                    }
                    function c(t) {
                        o(i, u, r, a, c, "throw", t);
                    }
                    a(void 0);
                });
            };
        }
        var a = {
            data: function() {
                return {
                    type: "",
                    uid: "",
                    text: "",
                    url: ""
                };
            },
            onLoad: function(t) {
                this.type = t.type, this.text = t.text, this.uid = t.uid, this.getSystem(), console.log("--------", this.type, this.uid);
            },
            methods: {
                getSystem: function() {
                    var t = this;
                    return i(u.default.mark(function e() {
                        var n;
                        return u.default.wrap(function(e) {
                            while (1) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, t.$http({
                                    url: t.$api.system
                                });

                              case 2:
                                n = e.sent, 0 == n.errno && (1 == t.type ? (t.url = n.data.tz_url + "?uid=" + t.uid, 
                                console.log("扣款", t.uid)) : 2 == t.type ? (t.url = n.data.tc_url + "?uid=" + t.uid, 
                                console.log("套餐卡", t.uid)) : 3 == t.type && (t.url = n.data.cz_url + "?uid=" + t.uid, 
                                console.log("代充", t.uid)));

                              case 4:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))();
                }
            }
        };
        e.default = a;
    },
    e39c: function(t, e, n) {
        "use strict";
        n.r(e);
        var u = n("d73c"), r = n.n(u);
        for (var o in u) "default" !== o && function(t) {
            n.d(e, t, function() {
                return u[t];
            });
        }(o);
        e["default"] = r.a;
    }
}, [ [ "5126", "common/runtime", "common/vendor" ] ] ]);