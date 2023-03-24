(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/hotel/hotelList/hotelList" ], {
    "039d": function(t, e, n) {},
    3473: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("6dc2"), o = n.n(a);
        for (var i in a) "default" !== i && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(i);
        e["default"] = o.a;
    },
    "47c7": function(t, e, n) {
        "use strict";
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {
            return a;
        });
        var a = {
            beautyCalendar: function() {
                return n.e("components/beauty-calendar/beauty-calendar").then(n.bind(null, "aefa"));
            }
        }, o = function() {
            var t = this, e = t.$createElement, n = (t._self._c, t.startDate.slice(5)), a = t.timeNow.slice(5).replace("/", "-");
            t.$mp.data = Object.assign({}, {
                $root: {
                    g0: n,
                    g1: a
                }
            });
        }, i = [];
    },
    "5ba7": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("47c7"), o = n("3473");
        for (var i in o) "default" !== i && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        n("85fe");
        var s, r = n("f0c5"), c = Object(r["a"])(o["default"], a["b"], a["c"], !1, null, null, null, !1, a["a"], s);
        e["default"] = c.exports;
    },
    "6dc2": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = o(n("a34a"));
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function i(t, e, n, a, o, i, s) {
                try {
                    var r = t[i](s), c = r.value;
                } catch (l) {
                    return void n(l);
                }
                r.done ? e(c) : Promise.resolve(c).then(a, o);
            }
            function s(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(a, o) {
                        var s = t.apply(e, n);
                        function r(t) {
                            i(s, a, o, r, c, "next", t);
                        }
                        function c(t) {
                            i(s, a, o, r, c, "throw", t);
                        }
                        r(void 0);
                    });
                };
            }
            var r = function(t) {
                var e = t.key;
                return new Promise(function(t, n) {
                    wx.getLocation({
                        type: "gcj02",
                        success: function(a) {
                            wx.request({
                                url: "https://apis.map.qq.com/ws/geocoder/v1/?location=".concat(a.latitude, ",").concat(a.longitude, "&key=").concat(e),
                                method: "GET",
                                success: function(e) {
                                    if ("query ok" == e.data.message) {
                                        var a = e.data.result.address_component, o = e.data.result.location;
                                        wx.request({
                                            url: "https://wis.qq.com/weather/common",
                                            method: "GET",
                                            data: {
                                                source: "xw",
                                                weather_type: "observe|alarm|air|forecast_1h|forecast_24h|index|limit|tips|rise",
                                                province: "".concat(a.province),
                                                city: "".concat(a.city),
                                                county: "".concat(a.district)
                                            },
                                            success: function(e) {
                                                e.data.data.district = a.city, e.data.data.addressa = o, t(e.data.data);
                                            },
                                            fail: function() {
                                                n(e.data.message);
                                            },
                                            complete: function() {}
                                        });
                                    }
                                }
                            });
                        },
                        fail: function(t) {
                            n(t);
                        }
                    });
                });
            }, c = function() {
                n.e("components/beauty-calendar/beauty-calendar").then(function() {
                    return resolve(n("aefa"));
                }.bind(null, n)).catch(n.oe);
            }, l = {
                components: {
                    beautyCalendar: c
                },
                data: function() {
                    return {
                        districts: "请打开定位",
                        addressa: {},
                        region: [ "", "", "" ],
                        regions: "",
                        province: "",
                        city: "",
                        district: "",
                        ditu: this.$img.ditu,
                        coupon: this.$img.coupon,
                        start: "",
                        end: "",
                        title: "dfaf ewrf saf",
                        multi: !0,
                        autoChoose: !0,
                        startDate: new Date().toISOString().slice(0, 10),
                        timeNow: "",
                        rang: 13,
                        autoClear: !1,
                        tabIndex: 0,
                        daohang: [ {
                            title: "全部",
                            id: 0
                        }, {
                            title: "距离",
                            id: 1
                        } ],
                        list: [],
                        realname: "",
                        hotelCateListInfo: [],
                        julis: "",
                        store_addres: "",
                        lat: t.getStorageSync("lat"),
                        lng: t.getStorageSync("lng")
                    };
                },
                mounteds: function() {
                    var t = new Date(), e = t.getFullYear(), n = (t.getMonth() + 1).toString().padStart(2, "0"), a = (t.getDate() + 1).toString().padStart(2, "0"), o = e + "-" + n + "-" + a;
                    this.timeNow = o, console.log(this.timeNow, "timeNow");
                },
                mounted: function() {
                    var t = new Date(), e = t.getFullYear(), n = (t.getMonth() + 1).toString().padStart(2, "0"), a = (t.getDate() + 1).toString().padStart(2, "0"), o = e + "-" + n + "-" + a;
                    this.timeNow = o, console.log(this.timeNow, "timeNow");
                },
                onLoad: function() {
                    this.getSystem2(), this.getAuthorizeInfo(), console.log("fdekljfewfjiodj", this.start, this.end);
                },
                onShow: function() {
                    this.getSystem2(), this.julis = t.getStorageSync("hotelStoreNexts").juli, this.store_addres = t.getStorageSync("hotelStoreNexts").store_addres, 
                    this.hotelCates(), console.log(this.lat, "this.lat", this.lng, "this.lng"), this.lat && this.lng && this.upCallback(this.mescroll);
                },
                methods: {
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
                        console.log("aaaaaaa"), t.getLocation({
                            type: "gcj02",
                            success: function(t) {
                                e.lat = t.latitude, console.log("this.lat", e.lat), e.lng = t.longitude, console.log("this.lng", e.lng), 
                                wx.setStorageSync("lat", e.lat), wx.setStorageSync("lng", e.lng), console.log("调用33333333333"), 
                                e.upCallback(e.mescroll);
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
                                console.log("调用122221"), n.confirm ? (console.log("调用111111111111"), e.upCallback(e.mescroll), 
                                t.openSetting()) : n.cancel && (t.showToast({
                                    title: "你拒绝了授权，无法获得周边信息",
                                    icon: "none",
                                    duration: 10
                                }), e.$sun.toast("定位失败"));
                            }
                        });
                    },
                    upCallback: function(e) {
                        var n = this;
                        return s(a.default.mark(function o() {
                            var i;
                            return a.default.wrap(function(a) {
                                while (1) switch (a.prev = a.next) {
                                  case 0:
                                    return a.next = 2, n.$http({
                                        url: n.$api.store,
                                        data: {
                                            page: e.num,
                                            psize: 10,
                                            uid: t.getStorageSync("uid").id,
                                            lat: t.getStorageSync("lat"),
                                            lng: t.getStorageSync("lng"),
                                            distance: n.distance_limit,
                                            sort: n.daohang[n.tabIndex].id,
                                            search_name: n.realname ? n.realname : ""
                                        }
                                    });

                                  case 2:
                                    i = a.sent, 0 == i.errno ? (console.log("附近门店", i.data), n.mescroll.endByPage(i.data.list.length, i.totalPage), 
                                    1 == e.num && (n.list = []), n.list = n.list.concat(i.data.list), console.log(n.list, "list")) : n.list = "";

                                  case 4:
                                  case "end":
                                    return a.stop();
                                }
                            }, o);
                        }))();
                    },
                    hotelCates: function() {
                        var e = this;
                        return s(a.default.mark(function n() {
                            var o;
                            return a.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, e.$http({
                                        url: e.$api.hotelCateList,
                                        data: {
                                            store_id: t.getStorageSync("hotelStoreNexts").id
                                        }
                                    });

                                  case 2:
                                    o = n.sent, 0 == o.errno && (e.hotelCateListInfo = o.data);

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    getSystem2: function() {
                        var t = this;
                        return s(a.default.mark(function e() {
                            var n, o;
                            return a.default.wrap(function(e) {
                                while (1) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, t.$http({
                                        url: t.$api.system
                                    });

                                  case 2:
                                    if (n = e.sent, 0 != n.errno) {
                                        e.next = 12;
                                        break;
                                    }
                                    return t.system = n.data, e.next = 7, r({
                                        key: n.data.qqmap_key
                                    });

                                  case 7:
                                    o = e.sent, t.distance_limit = Number(n.data.distance_limit) / 1e3, t.districts = o.district.substr(0, o.district.length - 1), 
                                    t.addressa = o.addressa, t.upCallback(t.mescroll);

                                  case 12:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    bindPickerChange: function(t) {
                        this.region[0] = t.target.value[0], this.region[1] = t.target.value[1], this.region[2] = t.target.value[2], 
                        this.province = t.target.value[0], this.city = t.target.value[1], this.district = t.target.value[2], 
                        this.regions = t.target.value[0] + "-" + t.target.value[1] + "-" + t.target.value[2], 
                        console.log("picker发送选择改变，携带值为", t, t.target.value, this.region), console.log("=============", this.province, this.city, this.district);
                    },
                    change: function(t) {
                        console.log("eeeeee", t[0], t[t.length - 1]), this.startDate = t[0], this.timeNow = t[t.length - 1], 
                        wx.setStorageSync("startDate", this.startDate), wx.setStorageSync("timeNow", this.timeNow), 
                        console.log(t, this.startDate, this.timeNow);
                    },
                    show: function() {
                        this.$refs.calendar.open();
                    },
                    changeInput: function() {
                        console.log("输入的值", this.realname);
                    },
                    changeSearch: function() {
                        console.log("输入键盘的搜索", this.realname), this.upCallback(this.mescroll);
                    },
                    boxs: function(t, e) {
                        this.tabIndex = t, console.log("this.tabIndex", this.tabIndex), this.upCallback(this.mescroll);
                    },
                    dianpu: function(e) {
                        t.navigateTo({
                            url: "/packages/hotel/hotelName/hotelName?id=" + e.id
                        }), wx.setStorageSync("hotelStoreNexts", e), t.setNavigationBarTitle({
                            title: e.store_name
                        });
                    }
                }
            };
            e.default = l;
        }).call(this, n("543d")["default"]);
    },
    "85fe": function(t, e, n) {
        "use strict";
        var a = n("039d"), o = n.n(a);
        o.a;
    },
    b3ca: function(t, e, n) {
        "use strict";
        (function(t) {
            n("cee1");
            a(n("66fd"));
            var e = a(n("5ba7"));
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(e.default);
        }).call(this, n("543d")["createPage"]);
    }
}, [ [ "b3ca", "common/runtime", "common/vendor" ] ] ]);