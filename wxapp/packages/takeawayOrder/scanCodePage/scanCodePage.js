(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/takeawayOrder/scanCodePage/scanCodePage" ], {
    "33f9": function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("8a42"), a = n.n(o);
        for (var i in o) "default" !== i && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        e["default"] = a.a;
    },
    3992: function(t, e, n) {
        "use strict";
        var o;
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {
            return o;
        });
        var a = function() {
            var t = this, e = t.$createElement;
            t._self._c;
        }, i = [];
    },
    4318: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("3992"), a = n("33f9");
        for (var i in a) "default" !== i && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(i);
        n("68ef");
        var s, r = n("f0c5"), c = Object(r["a"])(a["default"], o["b"], o["c"], !1, null, null, null, !1, o["a"], s);
        e["default"] = c.exports;
    },
    "68ef": function(t, e, n) {
        "use strict";
        var o = n("a952"), a = n.n(o);
        a.a;
    },
    "8a42": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = a(n("a34a"));
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function i(t, e, n, o, a, i, s) {
                try {
                    var r = t[i](s), c = r.value;
                } catch (l) {
                    return void n(l);
                }
                r.done ? e(c) : Promise.resolve(c).then(o, a);
            }
            function s(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(o, a) {
                        var s = t.apply(e, n);
                        function r(t) {
                            i(s, o, a, r, c, "next", t);
                        }
                        function c(t) {
                            i(s, o, a, r, c, "throw", t);
                        }
                        r(void 0);
                    });
                };
            }
            function r() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", e = arguments.length > 1 ? arguments[1] : void 0, n = {}, o = t.split("&");
                return o.forEach(function(t, o) {
                    var a = t.split("="), i = a[0], s = a[1] || "";
                    i && (n[i] = e ? s : decodeURIComponent(s));
                }), n;
            }
            var c = {
                data: function() {
                    return {
                        address2: this.$img.address2,
                        options: {},
                        byseatInfo: {},
                        ids: "",
                        stordIds: "",
                        lat: "",
                        lng: "",
                        result: {},
                        uid: ""
                    };
                },
                onLoad: function(t) {
                    var e = decodeURIComponent(t.scene);
                    this.result = r(e), console.log("options===========", t, "result", e, ";result", this.result);
                },
                onShow: function() {
                    this.lat = t.getStorageSync("lat"), this.lng = t.getStorageSync("lng"), this.getAuthorizeInfo();
                },
                methods: {
                    handleLogin: function() {
                        if (this.uid = t.getStorageSync("uid").id, this.uid) return !0;
                        t.navigateTo({
                            url: "/wjyk_nhyk/pages/login/login"
                        });
                    },
                    getAuthorizeInfo: function() {
                        var e = this;
                        t.authorize({
                            scope: "scope.userLocation",
                            success: function() {
                                e.getLocations(), console.log("成功==========");
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
                                wx.setStorageSync("lat", e.lat), wx.setStorageSync("lng", e.lng), console.log("调用33333333333infoByseat"), 
                                e.infoByseat();
                            },
                            fail: function(t) {
                                e.lat = t.latitude, console.log("失败this.lat", e.lat), e.lng = t.longitude, console.log("失败this.lng", e.lng);
                            }
                        });
                    },
                    openConfirm: function() {
                        t.showModal({
                            title: "请求授权当前位置",
                            content: "需要获取您的地理位置，请确认授权",
                            success: function(e) {
                                console.log("调用122221"), e.confirm ? (console.log("调用111111111111infoByseat"), t.openSetting()) : e.cancel && t.showToast({
                                    title: "你拒绝了授权，无法获得周边信息",
                                    icon: "none",
                                    duration: 10
                                });
                            }
                        });
                    },
                    infoByseat: function() {
                        var e = this;
                        return s(o.default.mark(function n() {
                            var a;
                            return o.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    if (!e.handleLogin()) {
                                        n.next = 6;
                                        break;
                                    }
                                    return console.log("调用接口 返回座位号", e.result.id), n.next = 4, e.$http({
                                        url: e.$api.order_info_byseat,
                                        data: {
                                            seat_id: e.result.id
                                        }
                                    });

                                  case 4:
                                    a = n.sent, 0 == a.errno && (e.byseatInfo = a.data, console.log("byseatInfo", e.byseatInfo), 
                                    wx.setStorageSync("seatId", e.result.id), wx.setStorageSync("storeEatNexts", e.result.store_id), 
                                    0 == e.byseatInfo ? (t.redirectTo({
                                        url: "/packages/takeawayOrder/classification/classification?actives=0&placeOrder=1&scanCode=1&ids=" + e.result.id + "&stordIds=" + e.result.store_id
                                    }), console.log("无数据跳转数据 传递id=========")) : (t.redirectTo({
                                        url: "/packages/takeawayOrder/orderEat/orderEat?scanCode=1&ids=" + e.result.id + "&stordIds=" + e.result.store_id + "&id=" + e.byseatInfo.id + "&isTure=1"
                                    }), console.log("this.id有数据 传递id=========", e.byseatInfo.id), t.setNavigationBarTitle({
                                        title: "到店订单详情"
                                    })));

                                  case 6:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    }
                }
            };
            e.default = c;
        }).call(this, n("543d")["default"]);
    },
    a952: function(t, e, n) {},
    df65: function(t, e, n) {
        "use strict";
        (function(t) {
            n("cee1");
            o(n("66fd"));
            var e = o(n("4318"));
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(e.default);
        }).call(this, n("543d")["createPage"]);
    }
}, [ [ "df65", "common/runtime", "common/vendor" ] ] ]);