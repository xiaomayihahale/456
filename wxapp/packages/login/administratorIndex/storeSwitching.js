(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/login/administratorIndex/storeSwitching" ], {
    "1cd7": function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("7396"), r = n("a8cd");
        for (var a in r) "default" !== a && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(a);
        n("f6fd");
        var i, c = n("f0c5"), u = Object(c["a"])(r["default"], o["b"], o["c"], !1, null, null, null, !1, o["a"], i);
        e["default"] = u.exports;
    },
    "4ef5": function(t, e, n) {},
    6799: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = r(n("a34a"));
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function a(t, e, n, o, r, a, i) {
                try {
                    var c = t[a](i), u = c.value;
                } catch (s) {
                    return void n(s);
                }
                c.done ? e(u) : Promise.resolve(u).then(o, r);
            }
            function i(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(o, r) {
                        var i = t.apply(e, n);
                        function c(t) {
                            a(i, o, r, c, u, "next", t);
                        }
                        function u(t) {
                            a(i, o, r, c, u, "throw", t);
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
                onShow: function() {
                    console.log("调用门店接口"), this.storeLists();
                },
                methods: {
                    storeLists: function() {
                        var t = this;
                        return i(o.default.mark(function e() {
                            var n;
                            return o.default.wrap(function(e) {
                                while (1) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, t.$http({
                                        url: t.$api.storeList,
                                        data: {
                                            uid: wx.getStorageSync("login").id
                                        }
                                    });

                                  case 2:
                                    n = e.sent, 0 == n.errno && (t.list = n.data, console.log("门店列表", n));

                                  case 4:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    money: function(e) {
                        t.navigateTo({
                            url: "/packages/login/administratorIndex/summaryRecord2/summaryRecord2?storeLogo=" + e.store_logo + "&type=2&storeName=" + e.store_name + "&storeId=" + e.id
                        });
                    },
                    tckCard: function(e) {
                        t.navigateTo({
                            url: "/packages/login/administratorIndex/tckCardlDeduction/tckCardlDeduction?storeLogo=" + e.store_logo + "&type=2&storeName=" + e.store_name + "&storeId=" + e.id
                        });
                    },
                    daichong: function(e) {
                        t.navigateTo({
                            url: "/packages/login/administratorIndex/dzhydaichongListx/dzhydaichongListx?storeLogo=" + e.store_logo + "&type=2&storeName=" + e.store_name + "&storeId=" + e.id
                        });
                    },
                    qreay: function(e, n, o, r) {
                        var a = getCurrentPages(), i = (a[a.length - 1], a[a.length - 2]);
                        console.log(i), i.setData({
                            storeId: e,
                            storeLogo: n,
                            storeName: o,
                            typess: r
                        }), t.navigateBack();
                    }
                }
            };
            e.default = c;
        }).call(this, n("543d")["default"]);
    },
    7396: function(t, e, n) {
        "use strict";
        var o;
        n.d(e, "b", function() {
            return r;
        }), n.d(e, "c", function() {
            return a;
        }), n.d(e, "a", function() {
            return o;
        });
        var r = function() {
            var t = this, e = t.$createElement;
            t._self._c;
        }, a = [];
    },
    a8cd: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("6799"), r = n.n(o);
        for (var a in o) "default" !== a && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(a);
        e["default"] = r.a;
    },
    c3f4: function(t, e, n) {
        "use strict";
        (function(t) {
            n("cee1");
            o(n("66fd"));
            var e = o(n("1cd7"));
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(e.default);
        }).call(this, n("543d")["createPage"]);
    },
    f6fd: function(t, e, n) {
        "use strict";
        var o = n("4ef5"), r = n.n(o);
        r.a;
    }
}, [ [ "c3f4", "common/runtime", "common/vendor" ] ] ]);