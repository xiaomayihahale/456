(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/index/DistributionManagement/myGold/myGold" ], {
    "10a6": function(t, n, e) {
        "use strict";
        var a;
        e.d(n, "b", function() {
            return u;
        }), e.d(n, "c", function() {
            return r;
        }), e.d(n, "a", function() {
            return a;
        });
        var u = function() {
            var t = this, n = t.$createElement;
            t._self._c;
        }, r = [];
    },
    "32b2": function(t, n, e) {
        "use strict";
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var a = u(e("a34a"));
            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function r(t, n, e, a, u, r, o) {
                try {
                    var c = t[r](o), i = c.value;
                } catch (l) {
                    return void e(l);
                }
                c.done ? n(i) : Promise.resolve(i).then(a, u);
            }
            function o(t) {
                return function() {
                    var n = this, e = arguments;
                    return new Promise(function(a, u) {
                        var o = t.apply(n, e);
                        function c(t) {
                            r(o, a, u, c, i, "next", t);
                        }
                        function i(t) {
                            r(o, a, u, c, i, "throw", t);
                        }
                        c(void 0);
                    });
                };
            }
            var c = {
                data: function() {
                    return {
                        list: []
                    };
                },
                methods: {
                    upCallback: function(n) {
                        var e = this;
                        return o(a.default.mark(function u() {
                            var r;
                            return a.default.wrap(function(a) {
                                while (1) switch (a.prev = a.next) {
                                  case 0:
                                    return a.next = 2, e.$http({
                                        url: e.$api.myGold,
                                        data: {
                                            page: n.num,
                                            psize: 10,
                                            uid: t.getStorageSync("uid").id
                                        }
                                    });

                                  case 2:
                                    r = a.sent, 0 == r.errno && (console.log("佣金记录", r.data), e.mescroll.endByPage(r.data.list.length, r.totalPage), 
                                    1 == n.num && (e.list = []), e.list = e.list.concat(r.data.list));

                                  case 4:
                                  case "end":
                                    return a.stop();
                                }
                            }, u);
                        }))();
                    }
                }
            };
            n.default = c;
        }).call(this, e("543d")["default"]);
    },
    "4ba5": function(t, n, e) {
        "use strict";
        var a = e("9985"), u = e.n(a);
        u.a;
    },
    "72b4": function(t, n, e) {
        "use strict";
        e.r(n);
        var a = e("32b2"), u = e.n(a);
        for (var r in a) "default" !== r && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(r);
        n["default"] = u.a;
    },
    9985: function(t, n, e) {},
    c9bd: function(t, n, e) {
        "use strict";
        (function(t) {
            e("cee1");
            a(e("66fd"));
            var n = a(e("d593"));
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(n.default);
        }).call(this, e("543d")["createPage"]);
    },
    d593: function(t, n, e) {
        "use strict";
        e.r(n);
        var a = e("10a6"), u = e("72b4");
        for (var r in u) "default" !== r && function(t) {
            e.d(n, t, function() {
                return u[t];
            });
        }(r);
        e("4ba5");
        var o, c = e("f0c5"), i = Object(c["a"])(u["default"], a["b"], a["c"], !1, null, null, null, !1, a["a"], o);
        n["default"] = i.exports;
    }
}, [ [ "c9bd", "common/runtime", "common/vendor" ] ] ]);