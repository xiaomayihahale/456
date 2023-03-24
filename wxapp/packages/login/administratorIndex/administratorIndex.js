(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/login/administratorIndex/administratorIndex" ], {
    2448: function(t, e, n) {
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
                    var c = t[o](i), s = c.value;
                } catch (u) {
                    return void n(u);
                }
                c.done ? e(s) : Promise.resolve(s).then(a, r);
            }
            function i(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(a, r) {
                        var i = t.apply(e, n);
                        function c(t) {
                            o(i, a, r, c, s, "next", t);
                        }
                        function s(t) {
                            o(i, a, r, c, s, "throw", t);
                        }
                        c(void 0);
                    });
                };
            }
            var c = function() {
                Promise.all([ n.e("common/vendor"), n.e("components/stan-ucharts/HistogramChart") ]).then(function() {
                    return resolve(n("06a4"));
                }.bind(null, n)).catch(n.oe);
            }, s = function() {
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
                    HistogramChart: c,
                    ArcbarChart: s,
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
                    this.storeIndex();
                },
                onLoad: function(t) {
                    this.login = wx.getStorageSync("login"), this.getSystem(), this.getServerData(), 
                    console.log(this.login, "登录数据-----------");
                },
                methods: {
                    SummaryAll: function() {
                        t.navigateTo({
                            url: "/packages/login/administratorIndex/storeManagement"
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
                    storeIndex: function() {
                        var t = this;
                        return i(a.default.mark(function e() {
                            var n;
                            return a.default.wrap(function(e) {
                                while (1) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, t.$http({
                                        url: t.$api.store_admin_index,
                                        data: {
                                            store_id: ""
                                        }
                                    });

                                  case 2:
                                    n = e.sent, 0 == n.errno && (t.storeSum = n.data, console.log("门店id"));

                                  case 4:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    edit: function() {
                        t.navigateTo({
                            url: "/packages/login/clerkRevise/clerkRevise?pwd=" + this.pwd + "&username=" + this.login.username + "&type=3"
                        }), console.log("修改管理员密码"), t.setNavigationBarTitle({
                            title: "修改管理员端密码"
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
                                            store_id: ""
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
                            url: "/packages/login/administratorIndex/summaryRecord2/summaryRecord2"
                        });
                    },
                    tckCard: function() {
                        t.navigateTo({
                            url: "/packages/login/administratorIndex/tckCardlDeduction/tckCardlDeduction"
                        });
                    },
                    daichong: function() {
                        t.navigateTo({
                            url: "/packages/login/administratorIndex/dzhydaichongListx/dzhydaichongListx"
                        });
                    }
                }
            };
            e.default = f;
        }).call(this, n("543d")["default"]);
    },
    6826: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("2448"), r = n.n(a);
        for (var o in a) "default" !== o && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(o);
        e["default"] = r.a;
    },
    "83e5": function(t, e, n) {
        "use strict";
        var a = n("d005"), r = n.n(a);
        r.a;
    },
    "8ea1": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("c42c"), r = n("6826");
        for (var o in r) "default" !== o && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(o);
        n("83e5");
        var i, c = n("f0c5"), s = Object(c["a"])(r["default"], a["b"], a["c"], !1, null, null, null, !1, a["a"], i);
        e["default"] = s.exports;
    },
    bae2: function(t, e, n) {
        "use strict";
        (function(t) {
            n("cee1");
            a(n("66fd"));
            var e = a(n("8ea1"));
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(e.default);
        }).call(this, n("543d")["createPage"]);
    },
    c42c: function(t, e, n) {
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
    d005: function(t, e, n) {}
}, [ [ "bae2", "common/runtime", "common/vendor" ] ] ]);