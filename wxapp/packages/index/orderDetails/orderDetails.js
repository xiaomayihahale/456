(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/index/orderDetails/orderDetails" ], {
    "0cb4b": function(e, t, r) {},
    "5d0f": function(e, t, r) {
        "use strict";
        var n = r("d577"), o = r.n(n);
        o.a;
    },
    "9e8b": function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r("f589"), o = r("bd3a");
        for (var a in o) "default" !== a && function(e) {
            r.d(t, e, function() {
                return o[e];
            });
        }(a);
        r("5d0f"), r("b4fe");
        var s, i = r("f0c5"), u = Object(i["a"])(o["default"], n["b"], n["c"], !1, null, "177bc788", null, !1, n["a"], s);
        t["default"] = u.exports;
    },
    b4fe: function(e, t, r) {
        "use strict";
        var n = r("0cb4b"), o = r.n(n);
        o.a;
    },
    bd3a: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r("d501"), o = r.n(n);
        for (var a in n) "default" !== a && function(e) {
            r.d(t, e, function() {
                return n[e];
            });
        }(a);
        t["default"] = o.a;
    },
    d501: function(e, t, r) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = o(r("a34a"));
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function a(e, t, r, n, o, a, s) {
                try {
                    var i = e[a](s), u = i.value;
                } catch (c) {
                    return void r(c);
                }
                i.done ? t(u) : Promise.resolve(u).then(n, o);
            }
            function s(e) {
                return function() {
                    var t = this, r = arguments;
                    return new Promise(function(n, o) {
                        var s = e.apply(t, r);
                        function i(e) {
                            a(s, n, o, i, u, "next", e);
                        }
                        function u(e) {
                            a(s, n, o, i, u, "throw", e);
                        }
                        i(void 0);
                    });
                };
            }
            var i = {
                data: function() {
                    return {
                        order: {},
                        userMoney: "",
                        userInfo: {},
                        orderGoods: [],
                        options: {},
                        storeListInfo: {},
                        menkey: ""
                    };
                },
                onShow: function() {
                    this.getOrderDetail();
                },
                onLoad: function(e) {
                    this.options = e, console.log("options=======", e), this.userInfoes(), this.getSystem();
                },
                computed: {
                    freight: function() {
                        console.log("进入结算金额");
                        var e = 0;
                        return this.orderGoods.forEach(function(t) {
                            console.log("p", t.freight), e += Number(t.freight), console.log(e, "freight");
                        }), Number(e).toFixed(2);
                    }
                },
                methods: {
                    storeLists: function() {
                        var e = this;
                        return s(n.default.mark(function t() {
                            var r;
                            return n.default.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, e.$http({
                                        url: e.$api.getSingleStore,
                                        data: {
                                            store_id: e.order.store_id
                                        }
                                    });

                                  case 2:
                                    r = t.sent, 0 == r.errno && (e.storeListInfo = r.data, console.log("门店id", e.storeListInfo));

                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    getSystem: function() {
                        var e = this;
                        return s(n.default.mark(function t() {
                            var r;
                            return n.default.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, e.$http({
                                        url: e.$api.system
                                    });

                                  case 2:
                                    r = t.sent, 0 == r.errno && (e.menkey = r.data.qqmap_key);

                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    address: function(e) {
                        var t = this;
                        return s(n.default.mark(function r() {
                            var o, a, s, i, u, c, d;
                            return n.default.wrap(function(r) {
                                while (1) switch (r.prev = r.next) {
                                  case 0:
                                    return console.log(e), parseFloat(e.store_addres_lat), console.log(e.store_addres_lat, "this.latitude=========="), 
                                    parseFloat(e.store_addres_lng), console.log(e.store_addres_lng, "this.longitude============="), 
                                    o = 3.141592653589793, a = parseFloat(e.store_addres_lat) - .0065, s = parseFloat(e.store_addres_lng) - .006, 
                                    i = Math.sqrt(a * a + s * s) - 2e-5 * Math.sin(s * o), u = Math.atan2(s, a) - 3e-6 * Math.cos(a * o), 
                                    c = (i * Math.cos(u)).toFixed(7), d = (i * Math.sin(u)).toFixed(7), console.log("百度地图经纬度转腾讯地图经纬度", c, d), 
                                    e.store_name, console.log("腾讯key腾讯key腾讯key腾讯key腾讯key腾讯key腾讯key腾讯key腾讯key", t.menkey), 
                                    console.log("name=========", e.store_name, "lat", c, "lng", d, t.menkey), r.next = 18, 
                                    t.$sun.openLocation({
                                        lat: c,
                                        lng: d,
                                        name: e.store_name,
                                        address: e.store_addres,
                                        key: t.menkey
                                    });

                                  case 18:
                                    r.sent, console.log("腾讯key腾讯key腾讯key腾讯key腾讯key腾讯key腾讯key腾讯key腾讯key", t.menkey);

                                  case 20:
                                  case "end":
                                    return r.stop();
                                }
                            }, r);
                        }))();
                    },
                    commodity: function(t) {
                        e.navigateTo({
                            url: "/wjyk_nhyk/pages/Mall/MaillDetails/MaillDetails?id=" + t.id + "&is_exchange=" + t.is_exchange
                        });
                    },
                    paste: function() {
                        e.setClipboardData({
                            data: this.order.order_number
                        });
                    },
                    paste2: function() {
                        e.setClipboardData({
                            data: this.order.express_no
                        });
                    },
                    userInfoes: function() {
                        var t = this;
                        return s(n.default.mark(function r() {
                            var o;
                            return n.default.wrap(function(r) {
                                while (1) switch (r.prev = r.next) {
                                  case 0:
                                    return r.next = 2, t.$http({
                                        url: t.$api.userhy,
                                        data: {
                                            uid: e.getStorageSync("uid").id
                                        }
                                    });

                                  case 2:
                                    o = r.sent, 0 == o.errno && (t.userInfo = o.data);

                                  case 4:
                                  case "end":
                                    return r.stop();
                                }
                            }, r);
                        }))();
                    },
                    getOrderDetail: function() {
                        var e = this;
                        return s(n.default.mark(function t() {
                            var r, o, a, s, i, u, c;
                            return n.default.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                  case 0:
                                    return r = getCurrentPages(), o = r[r.length - 2], o.$vm.options.index = e.options.index, 
                                    a = e.options.id, t.next = 6, e.$http({
                                        url: e.$api.order_info,
                                        data: {
                                            id: a
                                        }
                                    });

                                  case 6:
                                    s = t.sent, 0 == s.errno && (e.order = s.data, e.orderGoods = s.data.goods, 1 == e.order.receipt_type && e.storeLists(), 
                                    i = Number(e.order.price), u = Number(e.userInfo.curDiscount) / 10, c = Number(i * u).toFixed(2), 
                                    0 == e.userInfo.curDiscount || 0 == e.userInfo.curDiscount ? e.userMoney = Number(0).toFixed(2) : e.userMoney = Number(i - Number(c)).toFixed(2));

                                  case 8:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    }
                }
            };
            t.default = i;
        }).call(this, r("543d")["default"]);
    },
    d577: function(e, t, r) {},
    e8d6: function(e, t, r) {
        "use strict";
        (function(e) {
            r("cee1");
            n(r("66fd"));
            var t = n(r("9e8b"));
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            e(t.default);
        }).call(this, r("543d")["createPage"]);
    },
    f589: function(e, t, r) {
        "use strict";
        var n;
        r.d(t, "b", function() {
            return o;
        }), r.d(t, "c", function() {
            return a;
        }), r.d(t, "a", function() {
            return n;
        });
        var o = function() {
            var e = this, t = e.$createElement, r = (e._self._c, Number(e.order.price).toFixed(2)), n = Number(e.order.real_payment).toFixed(2);
            e.$mp.data = Object.assign({}, {
                $root: {
                    g0: r,
                    g1: n
                }
            });
        }, a = [];
    }
}, [ [ "e8d6", "common/runtime", "common/vendor" ] ] ]);