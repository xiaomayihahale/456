(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/hotel/index/index" ], {
    "326c": function(t, e, n) {},
    3558: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = o(n("a34a")), i = o(n("0747"));
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function s(t, e, n, a, i, o, s) {
                try {
                    var r = t[o](s), u = r.value;
                } catch (c) {
                    return void n(c);
                }
                r.done ? e(u) : Promise.resolve(u).then(a, i);
            }
            function r(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(a, i) {
                        var o = t.apply(e, n);
                        function r(t) {
                            s(o, a, i, r, u, "next", t);
                        }
                        function u(t) {
                            s(o, a, i, r, u, "throw", t);
                        }
                        r(void 0);
                    });
                };
            }
            var u = function(t) {
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
                                        var a = e.data.result.address_component, i = e.data.result.location;
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
                                                e.data.data.district = a.city, e.data.data.addressa = i, t(e.data.data);
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
                Promise.all([ n.e("common/vendor"), n.e("components/cjnewTabbar") ]).then(function() {
                    return resolve(n("4d6f"));
                }.bind(null, n)).catch(n.oe);
            }, l = function() {
                n.e("components/QS-Navbar/QS-Navbar").then(function() {
                    return resolve(n("318c"));
                }.bind(null, n)).catch(n.oe);
            }, d = function() {
                n.e("components/beauty-calendar/beauty-calendar").then(function() {
                    return resolve(n("aefa"));
                }.bind(null, n)).catch(n.oe);
            }, h = {
                components: {
                    "iew-tabbar": c,
                    QSNavbar: l,
                    beautyCalendar: d
                },
                data: function() {
                    var t = this.getDate({
                        format: !0
                    });
                    return {
                        guanbi: this.$img.guanbi,
                        ditu: this.$img.ditu,
                        navbarItems_1: [ {
                            type: "text",
                            text: "首页",
                            width: 20,
                            weight: "bold",
                            color: "#000"
                        } ],
                        imageIndex: 1,
                        zhuanhaun: this.$img.zhuanhaun,
                        indexbj2: this.$img.indexbj2,
                        hotelindex: this.$img.hotelindex,
                        searchVal: "",
                        tianshu: 1,
                        xingqi: "",
                        zhou: "",
                        district: "请打开定位",
                        addressa: {},
                        year: t.split("-")[0],
                        monthtime: t.split("-")[1],
                        day: t.split("-")[2],
                        monthtime2: "",
                        day2: "",
                        start: "",
                        timeNow: "",
                        datess: "",
                        dateaa: "",
                        userInfo: {},
                        id: "",
                        list: [],
                        lists: [],
                        julis: "",
                        store_addres: "",
                        multi: !0,
                        autoChoose: !0,
                        aDate: new Date().toISOString().slice(0, 10),
                        startDate: new Date().toISOString().slice(0, 10),
                        rang: 13,
                        autoClear: !1,
                        getRoomInfo: {},
                        getRoomInfo2: {},
                        system: {}
                    };
                },
                onLoad: function() {
                    this.mounteds();
                },
                onShow: function() {
                    this.uid = t.getStorageSync("uid").id, this.id = t.getStorageSync("hotelStoreNexts").id, 
                    this.julis = t.getStorageSync("hotelStoreNexts").juli, this.store_addres = t.getStorageSync("hotelStoreNexts").store_addres, 
                    this.getSystem(), this.getSystem2(), this.userInfoes(), this.getIndexRoom(), this.getIndexRoom2(), 
                    i.default.releaseKey("submit");
                },
                methods: {
                    handleLogin: function() {
                        if (this.uid) return !0;
                        t.navigateTo({
                            url: "/wjyk_nhyk/pages/login/login"
                        });
                    },
                    getIndexRoom: function() {
                        var t = this;
                        return r(a.default.mark(function e() {
                            var n;
                            return a.default.wrap(function(e) {
                                while (1) switch (e.prev = e.next) {
                                  case 0:
                                    return console.log("-酒店首页接口---------"), e.next = 3, t.$http({
                                        url: t.$api.get_index_rooms,
                                        data: {
                                            top_type: 1,
                                            limit: 4
                                        }
                                    });

                                  case 3:
                                    n = e.sent, 0 == n.errno && (t.list = n.data.data);

                                  case 5:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    getIndexRoom2: function() {
                        var t = this;
                        return r(a.default.mark(function e() {
                            var n;
                            return a.default.wrap(function(e) {
                                while (1) switch (e.prev = e.next) {
                                  case 0:
                                    return console.log("-酒店首页接口---------"), e.next = 3, t.$http({
                                        url: t.$api.get_index_rooms,
                                        data: {
                                            top_type: 2,
                                            limit: 11
                                        }
                                    });

                                  case 3:
                                    n = e.sent, 0 == n.errno && (t.lists = n.data.data);

                                  case 5:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    upCallback: function(e) {
                        var n = this;
                        return r(a.default.mark(function i() {
                            var o;
                            return a.default.wrap(function(a) {
                                while (1) switch (a.prev = a.next) {
                                  case 0:
                                    return a.next = 2, n.$http({
                                        url: n.$api.cate_hotel,
                                        data: {
                                            page: e.num,
                                            psize: 2,
                                            store_id: t.getStorageSync("hotelStoreNexts").id,
                                            lat: t.getStorageSync("lat"),
                                            lng: t.getStorageSync("lng"),
                                            sort: "",
                                            top_type: 1
                                        }
                                    });

                                  case 2:
                                    o = a.sent, 0 == o.errno && (n.mescroll.endByPage(o.data.list.length, o.totalPage), 
                                    1 == e.num && (n.list = []), n.deduction = o.data, n.list = n.list.concat(o.data.list), 
                                    console.log(n.list, "list"));

                                  case 4:
                                  case "end":
                                    return a.stop();
                                }
                            }, i);
                        }))();
                    },
                    upCallback2: function(e) {
                        var n = this;
                        return r(a.default.mark(function i() {
                            var o;
                            return a.default.wrap(function(a) {
                                while (1) switch (a.prev = a.next) {
                                  case 0:
                                    return a.next = 2, n.$http({
                                        url: n.$api.cate_hotel,
                                        data: {
                                            page: e.num,
                                            psize: 10,
                                            store_id: t.getStorageSync("hotelStoreNexts").id,
                                            lat: t.getStorageSync("lat"),
                                            lng: t.getStorageSync("lng"),
                                            sort: "",
                                            top_type: 2
                                        }
                                    });

                                  case 2:
                                    o = a.sent, 0 == o.errno && (n.mescroll.endByPage(o.data.list.length, o.totalPage), 
                                    1 == e.num && (n.lists = []), n.deduction = o.data, n.lists = n.lists.concat(o.data.list), 
                                    console.log(n.lists, "lists"));

                                  case 4:
                                  case "end":
                                    return a.stop();
                                }
                            }, i);
                        }))();
                    },
                    store2: function() {
                        this.$refs.popmend.show({
                            style: "width:642rpx; height:auto;background-color: #FFFFFF;",
                            anim: "center",
                            topclose: !1
                        });
                    },
                    wansh2: function() {
                        this.$refs.popmend.close(), this.$sun.navGo("/packages/hotel/hotelNearbyStores/hotelNearbyStores", {
                            indexs: 1
                        });
                    },
                    getSystem: function() {
                        var t = this;
                        return r(a.default.mark(function e() {
                            var n;
                            return a.default.wrap(function(e) {
                                while (1) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, t.$http({
                                        url: t.$api.hotelSystem
                                    });

                                  case 2:
                                    n = e.sent, 0 == n.errno && (t.system = n.data);

                                  case 4:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    getSystem2: function() {
                        var t = this;
                        return r(a.default.mark(function e() {
                            var n, i;
                            return a.default.wrap(function(e) {
                                while (1) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, t.$http({
                                        url: t.$api.system
                                    });

                                  case 2:
                                    if (n = e.sent, 0 != n.errno) {
                                        e.next = 9;
                                        break;
                                    }
                                    return e.next = 6, u({
                                        key: n.data.qqmap_key
                                    });

                                  case 6:
                                    i = e.sent, t.district = i.district.substr(0, i.district.length - 1), t.addressa = i.addressa;

                                  case 9:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    userInfoes: function() {
                        var e = this;
                        return r(a.default.mark(function n() {
                            var i;
                            return a.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, e.$http({
                                        url: e.$api.userhy,
                                        data: {
                                            uid: t.getStorageSync("uid").id
                                        }
                                    });

                                  case 2:
                                    i = n.sent, 0 == i.errno && (e.userInfo = i.data);

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    changeAlign: function() {
                        console.log("换一换====="), this.mescroll.setPageNum(2);
                    },
                    hotelDetial: function(e) {
                        this.handleLogin() && (t.navigateTo({
                            url: "/packages/hotel/hotelNearbyStores/hotelNearbyStores"
                        }), wx.setStorageSync("hotelID", e.id), console.log("item.id==========", e.id));
                    },
                    gaunbi: function() {
                        console.log("点击了关闭"), this.searchVal = "";
                    },
                    changeInput: function() {
                        console.log("输入的值", this.searchVal);
                    },
                    changeSearch: function() {
                        console.log("输入键盘的搜索", this.searchVal), t.navigateTo({
                            url: "/wjyk_ptsc_wxapp/pages/goods-list/goods-list?names=" + this.searchVal
                        });
                    },
                    mounteds: function() {
                        var t = new Date(), e = t.getFullYear(), n = (t.getMonth() + 1).toString().padStart(2, "0"), a = (t.getDate() + 1).toString().padStart(2, "0"), i = e + "-" + n + "-" + a;
                        this.timeNow = i, console.log(this.timeNow, "timeNow");
                    },
                    mounted: function() {
                        var t = new Date(), e = "周" + "日一二三四五六".charAt(new Date().getDay());
                        t.setDate(t.getDate() + 1), this.timeNow = t.toLocaleDateString(), this.monthtime2 = this.timeNow.split("/")[1], 
                        this.day2 = this.timeNow.split("/")[2], this.xingqi = e, this.monthtime2 >= 10 && console.log(this.monthtime2, this.day2, "不补0不补0不补0不补0不补0不补0不补0"), 
                        this.monthtime2 < 10 && (this.monthtime2 = "0" + this.monthtime2, console.log("补0补1111111111111111", this.monthtime2, this.day2)), 
                        this.day2 >= 10 && console.log(this.day2, this.day2, "不补0不补"), this.day2 < 10 && (this.day2 = "0" + this.day2, 
                        console.log("补0补55555555555555555555555550补0", this.day2, "this.timeNow", this.timeNow));
                    },
                    aa: function() {
                        var t = "2021-08-30";
                        function e() {
                            var e = new Array(7);
                            return e[0] = "周日", e[1] = "周一", e[2] = "周二", e[3] = "周三", e[4] = "周四", e[5] = "周五", 
                            e[6] = "周六", e[t.getDay()];
                        }
                        this.zhou = e(), console.log("今天是：$", this.zhou);
                    },
                    DateDiff: function() {
                        var t = new Date(this.startDate).getTime(), e = new Date(this.timeNow).getTime();
                        this.tianshu = parseInt(Math.abs(e - t) / 1e3 / 60 / 60 / 24);
                    },
                    bindDateChange2: function(t) {
                        this.dateaa = t.target.value, this.day = this.dateaa.split("-")[2], this.monthtime = this.dateaa.split("-")[1], 
                        console.log("截取的值", this.dateaa), this.DateDiff();
                    },
                    bindDateChange: function(t) {
                        this.date2 = t.target.value, this.day2 = this.date2.split("-")[2], this.monthtime2 = this.date2.split("-")[1], 
                        this.year = this.date2.split("-")[0], this.datess = this.year + "-" + this.monthtime2 + "-" + this.day2, 
                        console.log("截取的值222222222", this.day2, this.monthtime2, this.monthtime2 + "-" + this.day2, "日期", this.datess);
                        var e = "周" + "日一二三四五六".charAt(new Date().getDay());
                        console.log(e), this.DateDiff();
                    },
                    getDate: function(t) {
                        var e = new Date(), n = e.getFullYear(), a = e.getMonth() + 1, i = e.getDate();
                        return "start" === t && (n -= 60), a = a > 9 ? a : "0" + a, i = i > 9 ? i : "0" + i, 
                        "".concat(n, "-").concat(a, "-").concat(i);
                    },
                    indextop: function() {
                        t.switchTab({
                            url: "/wjyk_nhyk/pages/index/index"
                        });
                    },
                    show: function() {
                        this.handleLogin() && this.$refs.calendar.open();
                    },
                    indeax: function() {
                        this.handleLogin() && (t.switchTab({
                            url: "/wjyk_nhyk/pages/index/index"
                        }), t.setStorageSync("switchTo", !0));
                    },
                    change: function(t) {
                        console.log("eeeeee", t[0], t[t.length - 1]), this.startDate = t[0], this.timeNow = t[t.length - 1], 
                        wx.setStorageSync("startDate", this.startDate), wx.setStorageSync("timeNow", this.timeNow), 
                        this.DateDiff(), console.log("日期组件的展示==============", "e", t, "startDate===", this.startDate, "timeNow===", this.timeNow);
                    },
                    yuding: function() {
                        this.handleLogin() && i.default.uniDoFunc({
                            key: "submit",
                            success: function() {
                                var e = r(a.default.mark(function e() {
                                    return a.default.wrap(function(e) {
                                        while (1) switch (e.prev = e.next) {
                                          case 0:
                                            i.default.lockKey("submit"), t.navigateTo({
                                                url: "/packages/hotel/hotelList/hotelList"
                                            });

                                          case 2:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e);
                                }));
                                function n() {
                                    return e.apply(this, arguments);
                                }
                                return n;
                            }()
                        });
                    }
                }
            };
            e.default = h;
        }).call(this, n("543d")["default"]);
    },
    "8a30": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("bfd3"), i = n("9de7");
        for (var o in i) "default" !== o && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(o);
        n("a66e");
        var s, r = n("f0c5"), u = Object(r["a"])(i["default"], a["b"], a["c"], !1, null, null, null, !1, a["a"], s);
        e["default"] = u.exports;
    },
    "9de7": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("3558"), i = n.n(a);
        for (var o in a) "default" !== o && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(o);
        e["default"] = i.a;
    },
    a66e: function(t, e, n) {
        "use strict";
        var a = n("326c"), i = n.n(a);
        i.a;
    },
    a91e: function(t, e, n) {
        "use strict";
        (function(t) {
            n("cee1");
            a(n("66fd"));
            var e = a(n("8a30"));
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(e.default);
        }).call(this, n("543d")["createPage"]);
    },
    bfd3: function(t, e, n) {
        "use strict";
        n.d(e, "b", function() {
            return i;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {
            return a;
        });
        var a = {
            beautyCalendar: function() {
                return n.e("components/beauty-calendar/beauty-calendar").then(n.bind(null, "aefa"));
            },
            sunuiPopup: function() {
                return n.e("components/sunui-popup/sunui-popup").then(n.bind(null, "6cf4"));
            }
        }, i = function() {
            var t = this, e = t.$createElement, n = (t._self._c, t.startDate.split("-")), a = t.startDate.split("-"), i = t.timeNow ? t.timeNow.split("-") : null, o = t.timeNow ? t.timeNow.split("-") : null, s = t.userInfo.curDiscount ? Number(t.userInfo.curDiscount).toFixed(1) : null, r = 0 != t.list.length ? t.__map(t.list, function(e, n) {
                var a = t.__get_orig(e), i = 1 == e.top_type && n < 4 ? Number(e.price - e.discount_prcie).toFixed(2) : null, o = 1 == e.top_type && n < 4 && 0 != i ? Number(e.price - e.discount_prcie).toFixed(2) : null, s = 1 == e.top_type && n < 4 ? Number(e.coupon_money).toFixed(2) : null, r = 1 == e.top_type && n < 4 ? Number(e.discount_prcie).toFixed(2) : null;
                return {
                    $orig: a,
                    g5: i,
                    g6: o,
                    g7: s,
                    g8: r
                };
            }) : null, u = t.__map(t.lists, function(e, n) {
                var a = t.__get_orig(e), i = 2 == e.top_type && n >= 1 ? Number(e.price - e.discount_prcie).toFixed(2) : null, o = 2 == e.top_type && n >= 1 && 0 != i ? Number(e.price - e.discount_prcie).toFixed(2) : null, s = 2 == e.top_type && n >= 1 ? Number(e.coupon_money).toFixed(2) : null, r = 2 == e.top_type && n >= 1 ? Number(e.discount_prcie).toFixed(2) : null;
                return {
                    $orig: a,
                    g9: i,
                    g10: o,
                    g11: s,
                    g12: r
                };
            });
            t.$mp.data = Object.assign({}, {
                $root: {
                    g0: n,
                    g1: a,
                    g2: i,
                    g3: o,
                    g4: s,
                    l0: r,
                    l1: u
                }
            });
        }, o = [];
    }
}, [ [ "a91e", "common/runtime", "common/vendor" ] ] ]);