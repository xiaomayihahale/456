(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/login/Administrator-Index/dianzhangIndex" ], {
    "0139": function(t, e, n) {
        "use strict";
        (function(t) {
            n("cee1");
            a(n("66fd"));
            var e = a(n("4bd1"));
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(e.default);
        }).call(this, n("543d")["createPage"]);
    },
    "4bd1": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("99e6"), r = n("d710");
        for (var o in r) "default" !== o && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(o);
        n("600d");
        var i, s = n("f0c5"), c = Object(s["a"])(r["default"], a["b"], a["c"], !1, null, null, null, !1, a["a"], i);
        e["default"] = c.exports;
    },
    "600d": function(t, e, n) {
        "use strict";
        var a = n("aeb7"), r = n.n(a);
        r.a;
    },
    "71d1": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = r(n("a34a"));
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function o(t, e, n, a, r, o, i) {
                try {
                    var s = t[o](i), c = s.value;
                } catch (u) {
                    return void n(u);
                }
                s.done ? e(c) : Promise.resolve(c).then(a, r);
            }
            function i(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(a, r) {
                        var i = t.apply(e, n);
                        function s(t) {
                            o(i, a, r, s, c, "next", t);
                        }
                        function c(t) {
                            o(i, a, r, s, c, "throw", t);
                        }
                        s(void 0);
                    });
                };
            }
            var s = function() {
                Promise.all([ n.e("common/vendor"), n.e("components/stan-ucharts/HistogramChart") ]).then(function() {
                    return resolve(n("06a4"));
                }.bind(null, n)).catch(n.oe);
            }, c = function() {
                Promise.all([ n.e("common/vendor"), n.e("components/stan-ucharts/ArcbarChart") ]).then(function() {
                    return resolve(n("2aac"));
                }.bind(null, n)).catch(n.oe);
            }, u = function() {
                Promise.all([ n.e("common/vendor"), n.e("components/stan-ucharts/LineChart") ]).then(function() {
                    return resolve(n("4583"));
                }.bind(null, n)).catch(n.oe);
            }, l = function() {
                Promise.all([ n.e("common/vendor"), n.e("components/stan-ucharts/PieChart") ]).then(function() {
                    return resolve(n("e327"));
                }.bind(null, n)).catch(n.oe);
            }, d = function() {
                Promise.all([ n.e("common/vendor"), n.e("components/stan-ucharts/RingChart") ]).then(function() {
                    return resolve(n("dba2"));
                }.bind(null, n)).catch(n.oe);
            }, f = {
                name: "Index",
                components: {
                    HistogramChart: s,
                    ArcbarChart: c,
                    LineChart: u,
                    PieChart: l,
                    RingChart: d
                },
                data: function() {
                    var t = this.getDate({
                        format: !0
                    });
                    return {
                        edits: this.$img.edit,
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
                        login: {},
                        storeSum: {}
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
                    this.storeIndex(), this.getSystem(), this.getServerData(), this.storeLists();
                },
                onLoad: function(t) {
                    this.login = wx.getStorageSync("login"), console.log(this.login, "登录数据-----------");
                },
                methods: {
                    SummaryAll: function() {
                        t.navigateTo({
                            url: "/packages/login/clerkManagement/clerkManagement"
                        });
                    },
                    getSystem: function() {
                        var t = this;
                        return i(a.default.mark(function e() {
                            var n;
                            return a.default.wrap(function(e) {
                                while (1) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, t.$http({
                                        url: t.$api.system
                                    });

                                  case 2:
                                    n = e.sent, 0 == n.errno && (t.system = n.data, t.code = n.data.tz_url);

                                  case 4:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    storeLists: function() {
                        var t = this;
                        return i(a.default.mark(function e() {
                            var n;
                            return a.default.wrap(function(e) {
                                while (1) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, t.$http({
                                        url: t.$api.getSingleStore,
                                        data: {
                                            store_id: t.login.store_id
                                        }
                                    });

                                  case 2:
                                    n = e.sent, 0 == n.errno && (t.storeListInfo = n.data, console.log("门店id", t.storeListInfo));

                                  case 4:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    storeIndex: function() {
                        var t = this;
                        return i(a.default.mark(function e() {
                            var n;
                            return a.default.wrap(function(e) {
                                while (1) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, t.$http({
                                        url: t.$api.store_index,
                                        data: {
                                            store_id: t.login.store_id
                                        }
                                    });

                                  case 2:
                                    n = e.sent, 0 == n.errno && (t.storeSum = n.data, console.log("门店id", t.storeListInfo));

                                  case 4:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    edit: function() {
                        t.navigateTo({
                            url: "/packages/login/clerkRevise/clerkRevise?pwd=" + this.pwd + "&username=" + this.login.username + "&type=1"
                        }), t.setNavigationBarTitle({
                            title: "店长端 修改店长密码"
                        });
                    },
                    moneydata: function(t) {
                        this.active = t, this.getServerData();
                    },
                    bindDateChange: function(t) {
                        this.date = t.target.value;
                    },
                    getDate: function(t) {
                        var e = new Date(), n = e.getFullYear(), a = e.getMonth() + 1, r = e.getDate();
                        return "start" === t ? n -= 60 : "end" === t && (n += 2), a = a > 9 ? a : "0" + a, 
                        r = r > 9 ? r : "0" + r, "".concat(n, "-").concat(a, "-").concat(r);
                    },
                    getServerData: function() {
                        var t = this;
                        return i(a.default.mark(function e() {
                            var n, r;
                            return a.default.wrap(function(e) {
                                while (1) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, t.$http({
                                        url: t.$api.getStoreInfoss,
                                        data: {
                                            uid: wx.getStorageSync("login").id,
                                            type: t.active + 1,
                                            store_id: t.login.store_id
                                        }
                                    });

                                  case 2:
                                    if (n = e.sent, 0 == n.errno) {
                                        if (t.getStore = n.data, t.lineData2.categories = n.data.dateList, 0 == t.active) for (r = 0; r < t.lineData2.categories.length; r++) t.lineData2.categories[r] = t.lineData2.categories[r].substring(5);
                                        t.lineData2.series = n.data.data, t.$nextTick(function() {
                                            t.$refs["lineData2"].showCharts();
                                        });
                                    }

                                  case 4:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    closeDialog: function() {
                        this.$refs.pop.close();
                    },
                    money: function() {
                        t.navigateTo({
                            url: "/packages/login/Administrator-Index/SummaryRecord/SummaryRecord"
                        });
                    },
                    tckCard: function() {
                        t.navigateTo({
                            url: "/packages/login/clerkRevise/tckCardlList"
                        });
                    },
                    daichong: function() {
                        t.navigateTo({
                            url: "/packages/login/clerkRevise/dzhydaichongList"
                        });
                    },
                    tckSale: function() {
                        t.navigateTo({
                            url: "/packages/login/Administrator-Index/dianzhangSale"
                        });
                    }
                }
            };
            e.default = f;
        }).call(this, n("543d")["default"]);
    },
    "99e6": function(t, e, n) {
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
            var t = this, e = t.$createElement;
            t._self._c;
        }, o = [];
    },
    aeb7: function(t, e, n) {},
    d710: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("71d1"), r = n.n(a);
        for (var o in a) "default" !== o && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(o);
        e["default"] = r.a;
    }
}, [ [ "0139", "common/runtime", "common/vendor" ] ] ]);