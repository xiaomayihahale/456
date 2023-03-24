(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/takeawayOrder/voucher/voucher" ], {
    "44a5": function(t, e, n) {
        "use strict";
        var r;
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return u;
        }), n.d(e, "a", function() {
            return r;
        });
        var a = function() {
            var t = this, e = t.$createElement;
            t._self._c;
        }, u = [];
    },
    4774: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("fba9"), a = n.n(r);
        for (var u in r) "default" !== u && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(u);
        e["default"] = a.a;
    },
    5537: function(t, e, n) {},
    "60fc": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("44a5"), a = n("4774");
        for (var u in a) "default" !== u && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(u);
        n("f422");
        var c, o = n("f0c5"), i = Object(o["a"])(a["default"], r["b"], r["c"], !1, null, null, null, !1, r["a"], c);
        e["default"] = i.exports;
    },
    "784f": function(t, e, n) {
        "use strict";
        (function(t) {
            n("cee1");
            r(n("66fd"));
            var e = r(n("60fc"));
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(e.default);
        }).call(this, n("543d")["createPage"]);
    },
    f422: function(t, e, n) {
        "use strict";
        var r = n("5537"), a = n.n(r);
        a.a;
    },
    fba9: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = a(n("a34a"));
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function u(t, e, n, r, a, u, c) {
                try {
                    var o = t[u](c), i = o.value;
                } catch (s) {
                    return void n(s);
                }
                o.done ? e(i) : Promise.resolve(i).then(r, a);
            }
            function c(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(r, a) {
                        var c = t.apply(e, n);
                        function o(t) {
                            u(c, r, a, o, i, "next", t);
                        }
                        function i(t) {
                            u(c, r, a, o, i, "throw", t);
                        }
                        o(void 0);
                    });
                };
            }
            var o = {
                data: function() {
                    return {
                        system: {},
                        voucherList1: [],
                        voucherList2: [],
                        voucherList3: [],
                        indicatorDots: !1,
                        autoplay: !0,
                        interval: 2e3,
                        duration: 1e3,
                        circular: !0
                    };
                },
                onShow: function() {
                    this.getSystem(), this.displayVouchers1(), this.displayVouchers2(), this.displayVouchers3();
                },
                methods: {
                    getSystem: function() {
                        var t = this;
                        return c(r.default.mark(function e() {
                            var n;
                            return r.default.wrap(function(e) {
                                while (1) switch (e.prev = e.next) {
                                  case 0:
                                    return console.log("----------"), e.next = 3, t.$http({
                                        url: t.$api.foodsSystem
                                    });

                                  case 3:
                                    n = e.sent, 0 == n.errno && (t.system = n.data);

                                  case 5:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    detial: function(e) {
                        t.navigateTo({
                            url: "/packages/takeawayOrder/voucherDetail/voucherDetail?id=" + e
                        });
                    },
                    displayVouchers1: function() {
                        var e = this;
                        return c(r.default.mark(function n() {
                            var a;
                            return r.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, e.$http({
                                        url: e.$api.display_voucher,
                                        data: {
                                            uid: t.getStorageSync("uid").id,
                                            type: 1
                                        }
                                    });

                                  case 2:
                                    a = n.sent, 0 == a.errno && (e.voucherList1 = a.data, console.log("result", a));

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    displayVouchers2: function() {
                        var e = this;
                        return c(r.default.mark(function n() {
                            var a;
                            return r.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, e.$http({
                                        url: e.$api.display_voucher,
                                        data: {
                                            uid: t.getStorageSync("uid").id,
                                            type: 2
                                        }
                                    });

                                  case 2:
                                    a = n.sent, 0 == a.errno && (e.voucherList2 = a.data, console.log("result", a));

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    displayVouchers3: function() {
                        var e = this;
                        return c(r.default.mark(function n() {
                            var a;
                            return r.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, e.$http({
                                        url: e.$api.display_voucher,
                                        data: {
                                            uid: t.getStorageSync("uid").id,
                                            type: 3
                                        }
                                    });

                                  case 2:
                                    a = n.sent, 0 == a.errno && (e.voucherList3 = a.data, console.log("result", a));

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    }
                }
            };
            e.default = o;
        }).call(this, n("543d")["default"]);
    }
}, [ [ "784f", "common/runtime", "common/vendor" ] ] ]);