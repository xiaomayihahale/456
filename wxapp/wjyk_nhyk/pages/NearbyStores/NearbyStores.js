(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "wjyk_nhyk/pages/NearbyStores/NearbyStores" ], {
    "0477": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("c625"), o = n.n(a);
        for (var s in a) "default" !== s && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(s);
        e["default"] = o.a;
    },
    "21bc": function(t, e, n) {
        "use strict";
        var a;
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return s;
        }), n.d(e, "a", function() {
            return a;
        });
        var o = function() {
            var t = this, e = t.$createElement;
            t._self._c;
        }, s = [];
    },
    "25d8": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = {
                props: [ "list", "current" ],
                data: function() {
                    return {
                        paddingBottomHeight: 0
                    };
                },
                created: function() {
                    var e = this;
                    t.getSystemInfo({
                        success: function(t) {
                            var n = [ "X", "XR", "XS", "11", "12", "13", "14", "15" ];
                            n.forEach(function(n) {
                                -1 != t.model.indexOf(n) && -1 != t.model.indexOf("iPhone") && (e.paddingBottomHeight = 40);
                            });
                        }
                    });
                },
                watch: {},
                onLoad: function() {},
                methods: {
                    tabbarChange: function(e, n) {
                        t.switchTab({
                            url: "/" + e
                        });
                    }
                }
            };
            e.default = n;
        }).call(this, n("543d")["default"]);
    },
    4808: function(t, e, n) {},
    "5bf5": function(t, e, n) {},
    "621e": function(t, e, n) {
        "use strict";
        var a = n("5bf5"), o = n.n(a);
        o.a;
    },
    "7de5": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("21bc"), o = n("0477");
        for (var s in o) "default" !== s && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(s);
        n("fcc5");
        var i, r = n("f0c5"), l = Object(r["a"])(o["default"], a["b"], a["c"], !1, null, null, null, !1, a["a"], i);
        e["default"] = l.exports;
    },
    8054: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("25d8"), o = n.n(a);
        for (var s in a) "default" !== s && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(s);
        e["default"] = o.a;
    },
    bbde: function(t, e, n) {
        "use strict";
        (function(t) {
            n("cee1");
            a(n("66fd"));
            var e = a(n("7de5"));
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(e.default);
        }).call(this, n("543d")["createPage"]);
    },
    c625: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = s(n("a34a")), o = s(n("d187"));
            function s(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function i(t, e, n, a, o, s, i) {
                try {
                    var r = t[s](i), l = r.value;
                } catch (c) {
                    return void n(c);
                }
                r.done ? e(l) : Promise.resolve(l).then(a, o);
            }
            function r(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(a, o) {
                        var s = t.apply(e, n);
                        function r(t) {
                            i(s, a, o, r, l, "next", t);
                        }
                        function l(t) {
                            i(s, a, o, r, l, "throw", t);
                        }
                        r(void 0);
                    });
                };
            }
            var l = {
                components: {
                    "iew-tabbar": o.default
                },
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
                        lng: "",
                        aa: "",
                        bb: "",
                        covers: [ {
                            latitude: t.getStorageSync("lat"),
                            longitude: t.getStorageSync("lng"),
                            iconPath: t.getStorageSync("userInfo").avatarUrl,
                            height: 40,
                            width: 40
                        } ]
                    };
                },
                onLoad: function(t) {
                    console.log("onloadcovers============", this.covers), this.options = t, this.getSystem();
                },
                onShow: function() {
                    console.log("this.tabbarsss", this.tabbarsss), 0 == this.tabbarsss.length && "" == this.tabbarsss || t.hideTabBar({
                        animation: !1
                    }), this.getAuthorizeInfo(), this.uid = t.getStorageSync("uid").id;
                },
                methods: {
                    maps: function() {
                        var e = this;
                        t.chooseLocation({
                            success: function(t) {
                                e.lat = t.latitude, console.log("this.lat", e.lat), e.lng = t.longitude, console.log("this.lng", e.lng), 
                                e.address = t.name, e.upCallback();
                            },
                            fail: function(t) {
                                e.maps(), console.log("你拒绝了授权，无法获得周边信息");
                            }
                        });
                    },
                    getSystem: function() {
                        var t = this;
                        return r(a.default.mark(function e() {
                            var n, o;
                            return a.default.wrap(function(e) {
                                while (1) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, t.$http({
                                        url: t.$api.system
                                    });

                                  case 2:
                                    n = e.sent, 0 == n.errno && (t.menkey = n.data.qqmap_key, t.tabbarsss = n.data.meauLists, 
                                    t.distance_limit = Number(n.data.distance_limit) / 1e3, console.log("后台返回的限时范围 传入的单位是米", t.distance_limit), 
                                    o = "附近门店", t.tabbarsss.filter(function(e) {
                                        e.meau_name == o && (t.index = e.index);
                                    }), console.log("系统设置数据========", n.data, "腾讯key", t.menkey));

                                  case 4:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    upCallback: function(e) {
                        var n = this;
                        return r(a.default.mark(function o() {
                            var s, i;
                            return a.default.wrap(function(a) {
                                while (1) switch (a.prev = a.next) {
                                  case 0:
                                    return a.next = 2, n.$http({
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
                                    if (s = a.sent, 0 == s.errno) for (n.mescroll.endByPage(s.data.list.length, s.totalPage), 
                                    1 == e.num && (n.list = []), n.list = n.list.concat(s.data.list), i = 0; i < n.list.length; i++) n.$set(n.list[i], "latitude", n.list[i].store_addres_lat), 
                                    n.$set(n.list[i], "longitude", n.list[i].store_addres_lng), n.$set(n.list[i], "iconPath", n.list[i].store_logo), 
                                    n.$set(n.list[i], "height", 34), n.$set(n.list[i], "width", 34), n.$set(n.list[i], "title", n.list[i].store_name), 
                                    console.log("this.list数组", n.list); else n.list = "";

                                  case 4:
                                  case "end":
                                    return a.stop();
                                }
                            }, o);
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
                                e.getLocations(), e.upCallback();
                            },
                            fail: function() {
                                e.openConfirm(), console.log("你拒绝了授权，无法获得周边信息");
                            }
                        });
                    },
                    getLocations: function() {
                        var e = this;
                        t.getLocation({
                            type: "gcj02",
                            success: function(t) {
                                e.lat = t.latitude, console.log("this.lat", e.lat), e.lng = t.longitude, console.log("this.lng", e.lng), 
                                wx.setStorageSync("lat", e.lat), wx.setStorageSync("lng", e.lng), e.upCallback();
                            },
                            fail: function(t) {
                                e.lat = t.latitude, e.lng = t.longitude, console.log("失败this.lat", e.lat, "失败this.lng", e.lng);
                            }
                        });
                    },
                    openConfirm: function() {
                        var e = this;
                        t.showModal({
                            title: "请求授权当前位置",
                            content: "需要获取您的地理位置，请确认授权",
                            success: function(n) {
                                e.upCallback(), n.confirm ? (e.upCallback(), t.openSetting()) : n.cancel && (t.showToast({
                                    title: "你拒绝了授权，无法获得周边信息",
                                    icon: "none",
                                    duration: 10
                                }), e.$sun.toast("定位失败"));
                            }
                        });
                    },
                    address: function(t) {
                        var e = this;
                        return r(a.default.mark(function n() {
                            var o, s, i, r, l, c, u;
                            return a.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return console.log(t), parseFloat(t.store_addres_lat), console.log(t.store_addres_lat, "this.latitude=========="), 
                                    parseFloat(t.store_addres_lng), console.log(t.store_addres_lng, "this.longitude============="), 
                                    o = 3.141592653589793, s = parseFloat(t.store_addres_lat) - .0065, i = parseFloat(t.store_addres_lng) - .006, 
                                    r = Math.sqrt(s * s + i * i) - 2e-5 * Math.sin(i * o), l = Math.atan2(i, s) - 3e-6 * Math.cos(s * o), 
                                    c = (r * Math.cos(l)).toFixed(7), u = (r * Math.sin(l)).toFixed(7), console.log("百度地图经纬度转腾讯地图经纬度", c, u), 
                                    t.store_name, n.next = 16, e.$sun.openLocation({
                                        lat: c,
                                        lng: u,
                                        name: t.store_name,
                                        address: t.store_addres,
                                        key: e.menkey
                                    });

                                  case 16:
                                    n.sent;

                                  case 17:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    }
                }
            };
            e.default = l;
        }).call(this, n("543d")["default"]);
    },
    d187: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("ef69"), o = n("8054");
        for (var s in o) "default" !== s && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(s);
        n("621e");
        var i, r = n("f0c5"), l = Object(r["a"])(o["default"], a["b"], a["c"], !1, null, "6aaab849", null, !1, a["a"], i);
        e["default"] = l.exports;
    },
    ef69: function(t, e, n) {
        "use strict";
        var a;
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return s;
        }), n.d(e, "a", function() {
            return a;
        });
        var o = function() {
            var t = this, e = t.$createElement;
            t._self._c;
        }, s = [];
    },
    fcc5: function(t, e, n) {
        "use strict";
        var a = n("4808"), o = n.n(a);
        o.a;
    }
}, [ [ "bbde", "common/runtime", "common/vendor" ] ] ]);