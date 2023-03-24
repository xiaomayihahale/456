(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/hotel/hotelName/hotelName" ], {
    "696b": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = o(n("a34a")), r = o(n("0747"));
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function i(t, e, n, a, r, o, i) {
                try {
                    var s = t[o](i), u = s.value;
                } catch (l) {
                    return void n(l);
                }
                s.done ? e(u) : Promise.resolve(u).then(a, r);
            }
            function s(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(a, r) {
                        var o = t.apply(e, n);
                        function s(t) {
                            i(o, a, r, s, u, "next", t);
                        }
                        function u(t) {
                            i(o, a, r, s, u, "throw", t);
                        }
                        s(void 0);
                    });
                };
            }
            var u = {
                data: function() {
                    return {
                        yh33: this.$img.yh33,
                        diwei2: this.$img.diwei2,
                        ditu: this.$img.ditu,
                        calles: this.$img.calles,
                        dingwei: this.$img.dingwei,
                        phone: "15575469635",
                        aaa: {
                            store_addres_lat: 77.515455,
                            store_addres_lng: 110.555555
                        },
                        list: [],
                        storeDetail: {},
                        qqKey: "",
                        hotelCouponInfo: {},
                        roomAll: []
                    };
                },
                onLoad: function(t) {
                    this.id = t.id;
                },
                onShow: function() {
                    r.default.releaseKey("submit"), this.hotelRoomList(), this.getSystem();
                },
                methods: {
                    hotelCoupon: function() {
                        var e = this;
                        return s(a.default.mark(function n() {
                            var r;
                            return a.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, e.$http({
                                        url: e.$api.hotel_coupon,
                                        data: {
                                            uid: t.getStorageSync("uid").id,
                                            room_id: e.roomInfo.id,
                                            store_id: t.getStorageSync("hotelStoreNexts").id
                                        }
                                    });

                                  case 2:
                                    r = n.sent, r.errno, e.$sun.toast(r.message);

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    hotelRoomList: function() {
                        var e = this;
                        return s(a.default.mark(function n() {
                            var r;
                            return a.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, e.$http({
                                        url: e.$api.hotel_store_info,
                                        data: {
                                            store_id: e.id,
                                            lat: t.getStorageSync("lat"),
                                            lng: t.getStorageSync("lng"),
                                            limit: ""
                                        }
                                    });

                                  case 2:
                                    r = n.sent, 0 == r.errno && (e.list = r.data.rooms, e.storeDetail = r.data.store, 
                                    console.log("storeDetail.", e.storeDetail, "this.list", e.list));

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    callPhone: function(t) {
                        this.$sun.phone(t);
                    },
                    getSystem: function() {
                        var t = this;
                        return s(a.default.mark(function e() {
                            var n;
                            return a.default.wrap(function(e) {
                                while (1) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, t.$http({
                                        url: t.$api.system
                                    });

                                  case 2:
                                    n = e.sent, 0 == n.errno && (t.qqKey = n.data.qqmap_key, console.log("this.qqKey------", t.qqKey));

                                  case 4:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    address: function(t) {
                        var e = this;
                        return s(a.default.mark(function n() {
                            var r, o, i, s, u, l, c;
                            return a.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return console.log(t), parseFloat(t.store_addres_lat), console.log(t.store_addres_lat, "this.latitude=========="), 
                                    parseFloat(t.store_addres_lng), console.log(t.store_addres_lng, "this.longitude============="), 
                                    r = 3.141592653589793, o = parseFloat(t.store_addres_lat) - .0065, i = parseFloat(t.store_addres_lng) - .006, 
                                    s = Math.sqrt(o * o + i * i) - 2e-5 * Math.sin(i * r), u = Math.atan2(i, o) - 3e-6 * Math.cos(o * r), 
                                    l = (s * Math.cos(u)).toFixed(7), c = (s * Math.sin(u)).toFixed(7), console.log("百度地图经纬度转腾讯地图经纬度", l, c), 
                                    t.store_name, console.log("name=========", t.store_name, "lat", l, "lng", c), n.next = 17, 
                                    e.$sun.openLocation({
                                        lat: l,
                                        lng: c,
                                        name: t.store_name,
                                        address: t.store_addres,
                                        key: e.qqKey
                                    });

                                  case 17:
                                    n.sent;

                                  case 18:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    destine: function(e) {
                        var n = this;
                        r.default.uniDoFunc({
                            key: "submit",
                            success: function() {
                                var o = s(a.default.mark(function o() {
                                    return a.default.wrap(function(a) {
                                        while (1) switch (a.prev = a.next) {
                                          case 0:
                                            r.default.lockKey("submit"), t.navigateTo({
                                                url: "/packages/hotel/hotelDetial/hotelDetial?id=" + e + "&type=1"
                                            }), t.setNavigationBarTitle({
                                                title: n.storeDetail.store_name
                                            });

                                          case 3:
                                          case "end":
                                            return a.stop();
                                        }
                                    }, o);
                                }));
                                function i() {
                                    return o.apply(this, arguments);
                                }
                                return i;
                            }()
                        });
                    }
                }
            };
            e.default = u;
        }).call(this, n("543d")["default"]);
    },
    "8f02": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("9aba"), r = n("f440");
        for (var o in r) "default" !== o && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(o);
        n("e18f");
        var i, s = n("f0c5"), u = Object(s["a"])(r["default"], a["b"], a["c"], !1, null, null, null, !1, a["a"], i);
        e["default"] = u.exports;
    },
    "9aba": function(t, e, n) {
        "use strict";
        var a;
        n.d(e, "b", function() {
            return r;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {
            return a;
        });
        var r = function() {
            var t = this, e = t.$createElement, n = (t._self._c, t.__map(t.list, function(e, n) {
                var a = t.__get_orig(e), r = Number(Number(e.price) - Number(e.discount_prcie)), o = r > 0 ? Number(Number(e.price) - Number(e.discount_prcie)).toFixed(2) : null;
                return {
                    $orig: a,
                    m0: r,
                    g0: o
                };
            }));
            t.$mp.data = Object.assign({}, {
                $root: {
                    l0: n
                }
            });
        }, o = [];
    },
    e18f: function(t, e, n) {
        "use strict";
        var a = n("f871"), r = n.n(a);
        r.a;
    },
    e1c6: function(t, e, n) {
        "use strict";
        (function(t) {
            n("cee1");
            a(n("66fd"));
            var e = a(n("8f02"));
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(e.default);
        }).call(this, n("543d")["createPage"]);
    },
    f440: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("696b"), r = n.n(a);
        for (var o in a) "default" !== o && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(o);
        e["default"] = r.a;
    },
    f871: function(t, e, n) {}
}, [ [ "e1c6", "common/runtime", "common/vendor" ] ] ]);