(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/index/Mymoney/billDetailXS/billDetailXS" ], {
    2489: function(t, e, n) {
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
            function o(t, e, n, r, a, o, u) {
                try {
                    var i = t[o](u), c = i.value;
                } catch (s) {
                    return void n(s);
                }
                i.done ? e(c) : Promise.resolve(c).then(r, a);
            }
            function u(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(r, a) {
                        var u = t.apply(e, n);
                        function i(t) {
                            o(u, r, a, i, c, "next", t);
                        }
                        function c(t) {
                            o(u, r, a, i, c, "throw", t);
                        }
                        i(void 0);
                    });
                };
            }
            var i = {
                data: function() {
                    return {
                        userInfo: {},
                        order: {}
                    };
                },
                onShow: function() {
                    this.getOrderDetail();
                },
                onLoad: function(t) {
                    this.userInfoes(), console.log(t, "options");
                },
                methods: {
                    userInfoes: function() {
                        var e = this;
                        return u(r.default.mark(function n() {
                            var a;
                            return r.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, e.$http({
                                        url: e.$api.userhy,
                                        data: {
                                            uid: t.getStorageSync("uid").id
                                        }
                                    });

                                  case 2:
                                    a = n.sent, 0 == a.errno && (e.userInfo = a.data, console.log("用户信息", a, e.uid));

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    paste: function() {
                        t.setClipboardData({
                            data: this.userInfo.member_no
                        });
                    },
                    paste2: function() {
                        t.setClipboardData({
                            data: this.order.order_number
                        });
                    },
                    getOrderDetail: function() {
                        var t = this;
                        return u(r.default.mark(function e() {
                            var n, a, o, u;
                            return r.default.wrap(function(e) {
                                while (1) switch (e.prev = e.next) {
                                  case 0:
                                    return n = getCurrentPages(), a = n[n.length - 2], a.$vm.options.index = t.options.index, 
                                    o = t.options.id, e.next = 6, t.$http({
                                        url: t.$api.order_info,
                                        data: {
                                            id: o
                                        }
                                    });

                                  case 6:
                                    u = e.sent, 0 == u.errno && (t.order = u.data);

                                  case 8:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    }
                }
            };
            e.default = i;
        }).call(this, n("543d")["default"]);
    },
    "8dbf": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("2489"), a = n.n(r);
        for (var o in r) "default" !== o && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(o);
        e["default"] = a.a;
    },
    b56f: function(t, e, n) {},
    bc17: function(t, e, n) {
        "use strict";
        var r = n("b56f"), a = n.n(r);
        a.a;
    },
    c9bc: function(t, e, n) {
        "use strict";
        (function(t) {
            n("cee1");
            r(n("66fd"));
            var e = r(n("e9cb"));
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(e.default);
        }).call(this, n("543d")["createPage"]);
    },
    e9cb: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("fb46"), a = n("8dbf");
        for (var o in a) "default" !== o && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(o);
        n("bc17");
        var u, i = n("f0c5"), c = Object(i["a"])(a["default"], r["b"], r["c"], !1, null, null, null, !1, r["a"], u);
        e["default"] = c.exports;
    },
    fb46: function(t, e, n) {
        "use strict";
        var r;
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {
            return r;
        });
        var a = function() {
            var t = this, e = t.$createElement, n = (t._self._c, Number(t.order.real_payment).toFixed(2));
            t.$mp.data = Object.assign({}, {
                $root: {
                    g0: n
                }
            });
        }, o = [];
    }
}, [ [ "c9bc", "common/runtime", "common/vendor" ] ] ]);