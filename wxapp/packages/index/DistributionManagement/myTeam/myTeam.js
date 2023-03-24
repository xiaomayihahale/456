(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/index/DistributionManagement/myTeam/myTeam" ], {
    "0152": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("a0f7"), a = n.n(r);
        for (var u in r) "default" !== u && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(u);
        e["default"] = a.a;
    },
    "0f2e": function(t, e, n) {
        "use strict";
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return u;
        }), n.d(e, "a", function() {
            return r;
        });
        var r = {
            sunuiTab: function() {
                return n.e("components/sunui-tab/sunui-tab").then(n.bind(null, "0244"));
            }
        }, a = function() {
            var t = this, e = t.$createElement;
            t._self._c;
        }, u = [];
    },
    "275b": function(t, e, n) {
        "use strict";
        var r = n("2e1e"), a = n.n(r);
        a.a;
    },
    "2a20": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("0f2e"), a = n("0152");
        for (var u in a) "default" !== u && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(u);
        n("275b");
        var i, c = n("f0c5"), o = Object(c["a"])(a["default"], r["b"], r["c"], !1, null, null, null, !1, r["a"], i);
        e["default"] = o.exports;
    },
    "2e1e": function(t, e, n) {},
    "5edf": function(t, e, n) {
        "use strict";
        (function(t) {
            n("cee1");
            r(n("66fd"));
            var e = r(n("2a20"));
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(e.default);
        }).call(this, n("543d")["createPage"]);
    },
    a0f7: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = a(n("a34a"));
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function u(t, e, n, r, a, u, i) {
                try {
                    var c = t[u](i), o = c.value;
                } catch (s) {
                    return void n(s);
                }
                c.done ? e(o) : Promise.resolve(o).then(r, a);
            }
            function i(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(r, a) {
                        var i = t.apply(e, n);
                        function c(t) {
                            u(i, r, a, c, o, "next", t);
                        }
                        function o(t) {
                            u(i, r, a, c, o, "throw", t);
                        }
                        c(void 0);
                    });
                };
            }
            var c = {
                data: function() {
                    return {
                        dist: 0,
                        teams: this.$img.team,
                        BJ33: this.$img.BJ33,
                        myTeamList: [],
                        indexarr1: [ {
                            title: "我的团队",
                            type: 1
                        } ],
                        indexarr2: [ {
                            title: "一级团队",
                            type: 1
                        }, {
                            title: "二级团队",
                            type: 2
                        } ],
                        indexarr3: [ {
                            title: "一级团队",
                            type: 1
                        }, {
                            title: "二级团队",
                            type: 2
                        }, {
                            title: "三级团队",
                            type: 3
                        } ],
                        currentIndex: 0
                    };
                },
                onLoad: function() {},
                onShow: function() {
                    this.myTeams(), this.getSystem();
                },
                methods: {
                    getSystem: function() {
                        var t = this;
                        return i(r.default.mark(function e() {
                            var n;
                            return r.default.wrap(function(e) {
                                while (1) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, t.$http({
                                        url: t.$api.system
                                    });

                                  case 2:
                                    n = e.sent, 0 == n.errno && (t.dist = n.data.dist.distribution_level);

                                  case 4:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    myTeams: function() {
                        var e = this;
                        return i(r.default.mark(function n() {
                            var a;
                            return r.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, e.$http({
                                        url: e.$api.myTeam,
                                        data: {
                                            uid: t.getStorageSync("uid").id,
                                            type: 2 == e.dist ? e.indexarr2[e.currentIndex].type : e.indexarr3[e.currentIndex].type
                                        }
                                    });

                                  case 2:
                                    a = n.sent, 0 == a.errno && (e.myTeamList = a.data, console.log("我的团队", e.myTeamList));

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    navbarTapHandler: function(t) {
                        this.currentIndex = t, this.myTeams();
                    }
                }
            };
            e.default = c;
        }).call(this, n("543d")["default"]);
    }
}, [ [ "5edf", "common/runtime", "common/vendor" ] ] ]);