(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/hotel/hotelNearbyStores/hotelNearbyStores" ], {
    "153c": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = s(n("a34a"));
            function s(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function a(t, e, n, o, s, a, l) {
                try {
                    var i = t[a](l), r = i.value;
                } catch (c) {
                    return void n(c);
                }
                i.done ? e(r) : Promise.resolve(r).then(o, s);
            }
            function l(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(o, s) {
                        var l = t.apply(e, n);
                        function i(t) {
                            a(l, o, s, i, r, "next", t);
                        }
                        function r(t) {
                            a(l, o, s, i, r, "throw", t);
                        }
                        i(void 0);
                    });
                };
            }
            var i = {
                data: function() {
                    return {
                        index: "",
                        tabbarsss: [],
                        menkey: "",
                        address2: this.$img.address2,
                        optEmpty: {
                            tip: "未获取到当前位置"
                        },
                        list: [],
                        logo: this.$img.logo,
                        id: 0,
                        title: "map",
                        lat: "",
                        lng: ""
                    };
                },
                onLoad: function(t) {
                    this.options = t, this.getSystem(), console.log("this.options", this.options);
                },
                onShow: function() {
                    0 == this.tabbarsss.length && "" == this.tabbarsss || (t.hideTabBar({
                        animation: !1
                    }), console.log("this.tabbarsss", this.tabbarsss)), this.getAuthorizeInfo(), this.uid = t.getStorageSync("uid").id, 
                    this.hotelID = t.getStorageSync("hotelID");
                },
                methods: {
                    store: function(e) {
                        console.log("item==========", e), getApp().globalData.coupon = e, wx.setStorageSync("hotelStoreNexts", e), 
                        t.redirectTo({
                            url: "/packages/hotel/hotelDetial/hotelDetial?id=" + this.hotelID
                        }), console.log(this.hotelID, "this.hotelID============"), t.setNavigationBarTitle({
                            title: e.store_name
                        });
                    },
                    maps: function() {
                        var e = this;
                        t.chooseLocation({
                            success: function(t) {
                                e.lat = t.latitude, console.log("this.lat", e.lat), e.lng = t.longitude, console.log("this.lng", e.lng), 
                                console.log("调用33333333333"), console.log("位置名称：" + t.name), e.address = t.name, 
                                console.log("详细地址：" + e.address, t.address), console.log("纬度：" + t.latitude), console.log("经度：" + t.longitude), 
                                e.upCallback(), console.log("成功==========");
                            },
                            fail: function(t) {
                                e.maps(), console.log("你拒绝了授权，无法获得周边信息");
                            }
                        });
                    },
                    getSystem: function() {
                        var t = this;
                        return l(o.default.mark(function e() {
                            var n, s;
                            return o.default.wrap(function(e) {
                                while (1) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, t.$http({
                                        url: t.$api.system
                                    });

                                  case 2:
                                    n = e.sent, 0 == n.errno && (t.menkey = n.data.qqmap_key, t.tabbarsss = n.data.meauLists, 
                                    t.distance_limit = Number(n.data.distance_limit) / 1e3, console.log("menkey=", t.menkey, "this.distance_limit", t.distance_limit), 
                                    s = "附近门店", t.tabbarsss.filter(function(e) {
                                        e.meau_name == s && (t.index = e.index);
                                    }));

                                  case 4:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    upCallback: function(e) {
                        var n = this;
                        return l(o.default.mark(function s() {
                            var a, l;
                            return o.default.wrap(function(o) {
                                while (1) switch (o.prev = o.next) {
                                  case 0:
                                    return o.next = 2, n.$http({
                                        url: n.$api.store,
                                        data: {
                                            page: e.num,
                                            psize: 10,
                                            uid: t.getStorageSync("uid").id,
                                            lat: n.lat,
                                            lng: n.lng,
                                            distance: n.distance_limit
                                        }
                                    });

                                  case 2:
                                    if (a = o.sent, 0 == a.errno) for (console.log("附近门店", a.data), n.mescroll.endByPage(a.data.list.length, a.totalPage), 
                                    1 == e.num && (n.list = []), n.list = n.list.concat(a.data.list), console.log(n.list, "list"), 
                                    l = 0; l < n.list.length; l++) n.$set(n.list[l], "latitude", n.list[l].store_addres_lat), 
                                    n.$set(n.list[l], "longitude", n.list[l].store_addres_lng), n.$set(n.list[l], "iconPath", n.list[l].store_logo), 
                                    n.$set(n.list[l], "height", 34), n.$set(n.list[l], "width", 34), n.$set(n.list[l], "title", n.list[l].store_name), 
                                    console.log("this.list数组", n.list); else n.list = "";

                                  case 4:
                                  case "end":
                                    return o.stop();
                                }
                            }, s);
                        }))();
                    },
                    handleLogin: function() {
                        if (this.uid) return !0;
                        t.navigateTo({
                            url: "/wjyk_nhyk/pages/login/login"
                        });
                    },
                    getAuthorizeInfo: function() {
                        var e = this;
                        t.authorize({
                            scope: "scope.userLocation",
                            success: function() {
                                e.getLocations(), e.upCallback(), console.log("成功==========");
                            },
                            fail: function() {
                                e.openConfirm(), console.log("你拒绝了授权，无法获得周边信息");
                            }
                        });
                    },
                    getLocations: function() {
                        var e = this;
                        console.log("aaaaaaa"), t.getLocation({
                            type: "gcj02",
                            success: function(t) {
                                e.lat = t.latitude, console.log("this.lat", e.lat), e.lng = t.longitude, console.log("this.lng", e.lng), 
                                wx.setStorageSync("lat", e.lat), wx.setStorageSync("lng", e.lng), console.log("调用33333333333"), 
                                e.upCallback();
                            },
                            fail: function(t) {
                                e.lat = t.latitude, console.log("失败this.lat", e.lat), e.lng = t.longitude, console.log("失败this.lng", e.lng);
                            }
                        });
                    },
                    openConfirm: function() {
                        var e = this;
                        t.showModal({
                            title: "请求授权当前位置",
                            content: "需要获取您的地理位置，请确认授权",
                            success: function(n) {
                                console.log("调用122221"), e.upCallback(), n.confirm ? (console.log("调用111111111111"), 
                                e.upCallback(), t.openSetting()) : n.cancel && (t.showToast({
                                    title: "你拒绝了授权，无法获得周边信息",
                                    icon: "none",
                                    duration: 10
                                }), e.$sun.toast("定位失败"));
                            }
                        });
                    },
                    address: function(t) {
                        var e = this;
                        return l(o.default.mark(function n() {
                            var s, a, l, i, r, c, u;
                            return o.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return console.log(t), parseFloat(t.store_addres_lat), console.log(t.store_addres_lat, "this.latitude=========="), 
                                    parseFloat(t.store_addres_lng), console.log(t.store_addres_lng, "this.longitude============="), 
                                    s = 3.141592653589793, a = parseFloat(t.store_addres_lat) - .0065, l = parseFloat(t.store_addres_lng) - .006, 
                                    i = Math.sqrt(a * a + l * l) - 2e-5 * Math.sin(l * s), r = Math.atan2(l, a) - 3e-6 * Math.cos(a * s), 
                                    c = (i * Math.cos(r)).toFixed(7), u = (i * Math.sin(r)).toFixed(7), console.log("百度地图经纬度转腾讯地图经纬度", c, u), 
                                    t.store_name, console.log("name=========", t.store_name, "lat", c, "lng", u, e.menkey), 
                                    n.next = 17, e.$sun.openLocation({
                                        lat: c,
                                        lng: u,
                                        name: t.store_name,
                                        address: t.store_addres,
                                        key: e.menkey
                                    });

                                  case 17:
                                    n.sent;

                                  case 18:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    }
                }
            };
            e.default = i;
        }).call(this, n("543d")["default"]);
    },
    "73de": function(t, e, n) {
        "use strict";
        var o;
        n.d(e, "b", function() {
            return s;
        }), n.d(e, "c", function() {
            return a;
        }), n.d(e, "a", function() {
            return o;
        });
        var s = function() {
            var t = this, e = t.$createElement;
            t._self._c;
        }, a = [];
    },
    "7f8e": function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("73de"), s = n("802e");
        for (var a in s) "default" !== a && function(t) {
            n.d(e, t, function() {
                return s[t];
            });
        }(a);
        n("9779");
        var l, i = n("f0c5"), r = Object(i["a"])(s["default"], o["b"], o["c"], !1, null, null, null, !1, o["a"], l);
        e["default"] = r.exports;
    },
    "802e": function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("153c"), s = n.n(o);
        for (var a in o) "default" !== a && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(a);
        e["default"] = s.a;
    },
    9779: function(t, e, n) {
        "use strict";
        var o = n("e873"), s = n.n(o);
        s.a;
    },
    c405: function(t, e, n) {
        "use strict";
        (function(t) {
            n("cee1");
            o(n("66fd"));
            var e = o(n("7f8e"));
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(e.default);
        }).call(this, n("543d")["createPage"]);
    },
    e873: function(t, e, n) {}
}, [ [ "c405", "common/runtime", "common/vendor" ] ] ]);