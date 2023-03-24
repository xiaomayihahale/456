(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/login/tckDetial/tckDetial" ], {
    5949: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("f064"), u = n.n(r);
        for (var a in r) "default" !== a && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(a);
        e["default"] = u.a;
    },
    "7f3d": function(t, e, n) {
        "use strict";
        (function(t) {
            n("cee1");
            r(n("66fd"));
            var e = r(n("b492"));
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(e.default);
        }).call(this, n("543d")["createPage"]);
    },
    b492: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("bac0"), u = n("5949");
        for (var a in u) "default" !== a && function(t) {
            n.d(e, t, function() {
                return u[t];
            });
        }(a);
        n("b697");
        var i, c = n("f0c5"), o = Object(c["a"])(u["default"], r["b"], r["c"], !1, null, null, null, !1, r["a"], i);
        e["default"] = o.exports;
    },
    b697: function(t, e, n) {
        "use strict";
        var r = n("d90d"), u = n.n(r);
        u.a;
    },
    bac0: function(t, e, n) {
        "use strict";
        n.d(e, "b", function() {
            return u;
        }), n.d(e, "c", function() {
            return a;
        }), n.d(e, "a", function() {
            return r;
        });
        var r = {
            sunuiTab: function() {
                return n.e("components/sunui-tab/sunui-tab").then(n.bind(null, "0244"));
            }
        }, u = function() {
            var t = this, e = t.$createElement;
            t._self._c;
        }, a = [];
    },
    d90d: function(t, e, n) {},
    f064: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = u(n("a34a"));
            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function a(t, e, n, r, u, a, i) {
                try {
                    var c = t[a](i), o = c.value;
                } catch (s) {
                    return void n(s);
                }
                c.done ? e(o) : Promise.resolve(o).then(r, u);
            }
            function i(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(r, u) {
                        var i = t.apply(e, n);
                        function c(t) {
                            a(i, r, u, c, o, "next", t);
                        }
                        function o(t) {
                            a(i, r, u, c, o, "throw", t);
                        }
                        c(void 0);
                    });
                };
            }
            var c = {
                data: function() {
                    return {
                        dist: 0,
                        imgUrl: this.$imgUrl,
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
                            title: "二级团队",
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
                                    return console.log("----------"), e.next = 3, t.$http({
                                        url: t.$api.system
                                    });

                                  case 3:
                                    n = e.sent, 0 == n.errno && (t.dist = n.data.dist.distribution_level);

                                  case 5:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    myTeams: function() {
                        var e = this;
                        return i(r.default.mark(function n() {
                            var u;
                            return r.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, e.$http({
                                        url: e.$api.myTeam,
                                        data: {
                                            uid: t.getStorageSync("uid"),
                                            type: e.indexarr[e.currentIndex].type
                                        }
                                    });

                                  case 2:
                                    u = n.sent, 0 == u.errno && (e.myTeamList = u.data);

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
}, [ [ "7f3d", "common/runtime", "common/vendor" ] ] ]);