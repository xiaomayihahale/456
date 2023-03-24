(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/login/Administrator-Index/Administrator-Index" ], {
    "0e01": function(t, n, e) {
        "use strict";
        (function(t) {
            e("cee1");
            o(e("66fd"));
            var n = o(e("646d"));
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(n.default);
        }).call(this, e("543d")["createPage"]);
    },
    3087: function(t, n, e) {
        "use strict";
        e.d(n, "b", function() {
            return a;
        }), e.d(n, "c", function() {
            return r;
        }), e.d(n, "a", function() {
            return o;
        });
        var o = {
            sunuiPopup: function() {
                return e.e("components/sunui-popup/sunui-popup").then(e.bind(null, "6cf4"));
            }
        }, a = function() {
            var t = this, n = t.$createElement;
            t._self._c;
        }, r = [];
    },
    "646d": function(t, n, e) {
        "use strict";
        e.r(n);
        var o = e("3087"), a = e("f25b");
        for (var r in a) "default" !== r && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(r);
        e("bcef");
        var i, c = e("f0c5"), s = Object(c["a"])(a["default"], o["b"], o["c"], !1, null, null, null, !1, o["a"], i);
        n["default"] = s.exports;
    },
    bc47: function(t, n, e) {
        "use strict";
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var o = a(e("a34a"));
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function r(t, n, e, o, a, r, i) {
                try {
                    var c = t[r](i), s = c.value;
                } catch (u) {
                    return void e(u);
                }
                c.done ? n(s) : Promise.resolve(s).then(o, a);
            }
            function i(t) {
                return function() {
                    var n = this, e = arguments;
                    return new Promise(function(o, a) {
                        var i = t.apply(n, e);
                        function c(t) {
                            r(i, o, a, c, s, "next", t);
                        }
                        function s(t) {
                            r(i, o, a, c, s, "throw", t);
                        }
                        c(void 0);
                    });
                };
            }
            var c = function() {
                Promise.all([ e.e("common/vendor"), e.e("components/stan-ucharts/HistogramChart") ]).then(function() {
                    return resolve(e("06a4"));
                }.bind(null, e)).catch(e.oe);
            }, s = function() {
                Promise.all([ e.e("common/vendor"), e.e("components/stan-ucharts/ArcbarChart") ]).then(function() {
                    return resolve(e("2aac"));
                }.bind(null, e)).catch(e.oe);
            }, u = function() {
                Promise.all([ e.e("common/vendor"), e.e("components/stan-ucharts/LineChart") ]).then(function() {
                    return resolve(e("4583"));
                }.bind(null, e)).catch(e.oe);
            }, l = function() {
                Promise.all([ e.e("common/vendor"), e.e("components/stan-ucharts/PieChart") ]).then(function() {
                    return resolve(e("e327"));
                }.bind(null, e)).catch(e.oe);
            }, f = function() {
                Promise.all([ e.e("common/vendor"), e.e("components/stan-ucharts/RingChart") ]).then(function() {
                    return resolve(e("dba2"));
                }.bind(null, e)).catch(e.oe);
            }, d = {
                name: "Index",
                components: {
                    HistogramChart: c,
                    ArcbarChart: s,
                    LineChart: u,
                    PieChart: l,
                    RingChart: f
                },
                data: function() {
                    var t = this.getDate({
                        format: !0
                    });
                    return {
                        login: {},
                        koukuan: this.$img.koukuan,
                        hexiao: this.$img.hexiao,
                        tcCard: this.$img.tcCard,
                        tckCard2: this.$img.tckCard2,
                        daichongs: this.$img.daichong,
                        storeListInfo: [],
                        active: 0,
                        data2: [ "按日", "按月" ],
                        userInfo: {},
                        date: t,
                        lineData2: {
                            categories: [],
                            series: []
                        },
                        result: "",
                        cz1: this.$img.cz1,
                        cz2: this.$img.cz2,
                        logo: this.$img.logo,
                        everday: this.$img.everday,
                        getStore: {},
                        system: {},
                        code: "",
                        eatPlugin: "",
                        hotelPlugin: "",
                        ktvPlugin: ""
                    };
                },
                computed: {
                    startDate: function() {
                        return this.getDate("start");
                    },
                    endDate: function() {
                        return this.getDate("end");
                    }
                },
                onShow: function() {
                    this.uid = t.getStorageSync("uid").id;
                },
                onLoad: function(t) {
                    this.login = wx.getStorageSync("login"), this.getSystem(), this.getServerData(), 
                    this.storeLists();
                },
                methods: {
                    getSystem: function() {
                        var t = this;
                        return i(o.default.mark(function n() {
                            var e;
                            return o.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, t.$http({
                                        url: t.$api.system
                                    });

                                  case 2:
                                    e = n.sent, 0 == e.errno && (t.system = e.data, t.code = e.data.tz_url, t.plugin = e.data.plugin, 
                                    t.plugin.filter(function(n) {
                                        console.log("iaaaaaaaaaaaaaaaaaaaaaa", n);
                                        var e = "wjyk_nhyk_plugin_food", o = "wjyk_nhyk_plugin_hotel", a = "wjyk_nhyk_plugin_ktv";
                                        n.identifie == e && (t.eatPlugin = n.is_open), n.identifie == o && (t.hotelPlugin = n.is_open), 
                                        n.identifie == a && (t.ktvPlugin = n.is_open), console.log("餐厅====", t.eatPlugin);
                                    }));

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    daichong: function() {
                        var n = this;
                        t.showModal({
                            confirmText: "确定",
                            content: "您是否确定打开照相机",
                            title: "温馨提示",
                            success: function() {
                                var e = i(o.default.mark(function e(a) {
                                    return o.default.wrap(function(e) {
                                        while (1) switch (e.prev = e.next) {
                                          case 0:
                                            a.confirm ? wx.scanCode({
                                                success: function(n) {
                                                    console.log("---------代充", n), t.navigateTo({
                                                        url: "/packages/login/Administrator-Index/AdminChargeMoney/AdminChargeMoney?result=" + n.result
                                                    });
                                                },
                                                fail: function(t) {
                                                    n.$sun.toast("扫码失败");
                                                }
                                            }) : a.cancel && console.log("您已点击取消");

                                          case 1:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e);
                                }));
                                function a(t) {
                                    return e.apply(this, arguments);
                                }
                                return a;
                            }()
                        });
                    },
                    tcCardss: function() {
                        var n = this;
                        t.showModal({
                            confirmText: "确定",
                            content: "您是否确定打开照相机",
                            title: "温馨提示",
                            success: function() {
                                var e = i(o.default.mark(function e(a) {
                                    return o.default.wrap(function(e) {
                                        while (1) switch (e.prev = e.next) {
                                          case 0:
                                            a.confirm ? wx.scanCode({
                                                success: function(n) {
                                                    console.log("---------扣除套餐卡", n), t.navigateTo({
                                                        url: "/packages/login/Administrator-Index/tcCard/tcCard?result=" + n.result
                                                    });
                                                },
                                                fail: function(t) {
                                                    n.$sun.toast("扫码失败");
                                                }
                                            }) : a.cancel && console.log("您已点击取消");

                                          case 1:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e);
                                }));
                                function a(t) {
                                    return e.apply(this, arguments);
                                }
                                return a;
                            }()
                        });
                    },
                    tcCardssAdd: function() {
                        var n = this;
                        t.showModal({
                            confirmText: "确定",
                            content: "您是否确定打开照相机",
                            title: "温馨提示",
                            success: function() {
                                var e = i(o.default.mark(function e(a) {
                                    return o.default.wrap(function(e) {
                                        while (1) switch (e.prev = e.next) {
                                          case 0:
                                            a.confirm ? wx.scanCode({
                                                success: function(n) {
                                                    console.log("---------增加套餐卡次数", n), t.navigateTo({
                                                        url: "/packages/login/Administrator-Index/AdminChargeMoney2/addCardtck?result=" + n.result
                                                    });
                                                },
                                                fail: function(t) {
                                                    n.$sun.toast("扫码失败");
                                                }
                                            }) : a.cancel && console.log("您已点击取消");

                                          case 1:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e);
                                }));
                                function a(t) {
                                    return e.apply(this, arguments);
                                }
                                return a;
                            }()
                        });
                    },
                    kkmoney: function() {
                        var n = this;
                        t.showModal({
                            confirmText: "确定",
                            content: "您是否确定打开照相机",
                            title: "温馨提示",
                            success: function() {
                                var e = i(o.default.mark(function e(a) {
                                    return o.default.wrap(function(e) {
                                        while (1) switch (e.prev = e.next) {
                                          case 0:
                                            a.confirm ? wx.scanCode({
                                                success: function(n) {
                                                    console.log("---------扣款", n, n.result), t.navigateTo({
                                                        url: "/packages/login/Administrator-Index/AdminChargeMoney2/AdminChargeMoney2?result=" + n.result
                                                    });
                                                },
                                                fail: function(t) {
                                                    n.$sun.toast("扫码失败");
                                                }
                                            }) : a.cancel && console.log("您已点击取消");

                                          case 1:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e);
                                }));
                                function a(t) {
                                    return e.apply(this, arguments);
                                }
                                return a;
                            }()
                        });
                    },
                    writeOff: function() {
                        var n = this;
                        t.showModal({
                            confirmText: "确定",
                            content: "您是否确定打开照相机",
                            title: "温馨提示",
                            success: function() {
                                var e = i(o.default.mark(function e(a) {
                                    return o.default.wrap(function(e) {
                                        while (1) switch (e.prev = e.next) {
                                          case 0:
                                            a.confirm ? wx.scanCode({
                                                success: function(n) {
                                                    console.log("---------核销", n, "res.result", n.result), t.navigateTo({
                                                        url: "/packages/login/Administrator-Index/tcCard/tcCard?" + n.result + "&writeOff=1"
                                                    });
                                                },
                                                fail: function(t) {
                                                    n.$sun.toast("扫码失败");
                                                }
                                            }) : a.cancel && console.log("您已点击取消");

                                          case 1:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e);
                                }));
                                function a(t) {
                                    return e.apply(this, arguments);
                                }
                                return a;
                            }()
                        });
                    },
                    storeLists: function() {
                        var t = this;
                        return i(o.default.mark(function n() {
                            var e;
                            return o.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, t.$http({
                                        url: t.$api.getSingleStore,
                                        data: {
                                            store_id: t.login.store_id
                                        }
                                    });

                                  case 2:
                                    e = n.sent, 0 == e.errno && (t.storeListInfo = e.data);

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    moneydata: function(t) {
                        this.active = t, this.getServerData();
                    },
                    bindDateChange: function(t) {
                        this.date = t.target.value;
                    },
                    getDate: function(t) {
                        var n = new Date(), e = n.getFullYear(), o = n.getMonth() + 1, a = n.getDate();
                        return "start" === t ? e -= 60 : "end" === t && (e += 2), o = o > 9 ? o : "0" + o, 
                        a = a > 9 ? a : "0" + a, "".concat(e, "-").concat(o, "-").concat(a);
                    },
                    getServerData: function() {
                        var t = this;
                        return i(o.default.mark(function n() {
                            var e, a;
                            return o.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, t.$http({
                                        url: t.$api.getStoreInfo,
                                        data: {
                                            uid: t.login.id,
                                            type: t.active + 1,
                                            oper_uid: t.login.id
                                        }
                                    });

                                  case 2:
                                    if (e = n.sent, 0 == e.errno) {
                                        if (t.getStore = e.data, t.lineData2.categories = e.data.dateList, 0 == t.active) for (a = 0; a < t.lineData2.categories.length; a++) t.lineData2.categories[a] = t.lineData2.categories[a].substring(5);
                                        t.lineData2.series = e.data.data, t.$nextTick(function() {
                                            t.$refs["lineData2"].showCharts();
                                        });
                                    }

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    scanCode: function() {
                        t.scanCode({
                            success: function(t) {}
                        });
                    },
                    scanIt: function() {
                        this.$refs.pop.show({
                            style: "background-color:#fff;width:100%;height:auto;overflow-x:auto;",
                            anim: "bottom",
                            position: "bottom",
                            topclose: !1,
                            titleStyle: "position: fixed;width: 100%;background: #fff;z-index: 19999 !important;border-bottom:1rpx solid #f7f7f7;"
                        });
                    },
                    closeDialog: function() {
                        this.$refs.pop.close();
                    },
                    money: function() {
                        t.navigateTo({
                            url: "/packages/login/Administrator-Index/RechargeRecord/RechargeRecord?"
                        });
                    },
                    orderMeal: function() {
                        t.navigateTo({
                            url: "/packages/takeawayOrder/administrator-order-meal/administrator-order-meal"
                        });
                    },
                    orderHotel: function() {
                        t.navigateTo({
                            url: "/packages/hotel/administrator-order-hotel/administrator-order-hotel?index=0"
                        });
                    },
                    setCoupon: function() {
                        t.navigateTo({
                            url: "/packages/login/Administrator-Index/login-gift-Coupon/login-gift-Coupon"
                        });
                    },
                    saveWine: function() {
                        var n = this;
                        t.showModal({
                            confirmText: "确定",
                            content: "您是否确定打开照相机",
                            title: "温馨提示",
                            success: function() {
                                var e = i(o.default.mark(function e(a) {
                                    return o.default.wrap(function(e) {
                                        while (1) switch (e.prev = e.next) {
                                          case 0:
                                            a.confirm ? wx.scanCode({
                                                success: function(n) {
                                                    console.log("酒库管理======", n), t.navigateTo({
                                                        url: "/packages/ktv/administrator-save-Wine/administrator-save-Wine?result=" + n.result
                                                    });
                                                },
                                                fail: function(t) {
                                                    n.$sun.toast("扫码失败");
                                                }
                                            }) : a.cancel && console.log("您已点击取消");

                                          case 1:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e);
                                }));
                                function a(t) {
                                    return e.apply(this, arguments);
                                }
                                return a;
                            }()
                        });
                    }
                }
            };
            n.default = d;
        }).call(this, e("543d")["default"]);
    },
    bcef: function(t, n, e) {
        "use strict";
        var o = e("db61"), a = e.n(o);
        a.a;
    },
    db61: function(t, n, e) {},
    f25b: function(t, n, e) {
        "use strict";
        e.r(n);
        var o = e("bc47"), a = e.n(o);
        for (var r in o) "default" !== r && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(r);
        n["default"] = a.a;
    }
}, [ [ "0e01", "common/runtime", "common/vendor" ] ] ]);