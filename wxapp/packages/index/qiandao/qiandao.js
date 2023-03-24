(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/index/qiandao/qiandao" ], {
    "0403": function(n, e, t) {
        "use strict";
        (function(n) {
            t("cee1");
            i(t("66fd"));
            var e = i(t("ffd5"));
            function i(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            n(e.default);
        }).call(this, t("543d")["createPage"]);
    },
    "33be": function(n, e, t) {
        "use strict";
        (function(n) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = r(t("a34a"));
            function r(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            function u(n, e, t, i, r, u, a) {
                try {
                    var s = n[u](a), o = s.value;
                } catch (c) {
                    return void t(c);
                }
                s.done ? e(o) : Promise.resolve(o).then(i, r);
            }
            function a(n) {
                return function() {
                    var e = this, t = arguments;
                    return new Promise(function(i, r) {
                        var a = n.apply(e, t);
                        function s(n) {
                            u(a, i, r, s, o, "next", n);
                        }
                        function o(n) {
                            u(a, i, r, s, o, "throw", n);
                        }
                        s(void 0);
                    });
                };
            }
            var s = {
                data: function() {
                    return {
                        timeNow: "",
                        date: new Date().toISOString().slice(0, 10),
                        userInfo: {},
                        sign_count: 0,
                        sign: [ {
                            time: 1,
                            integral: 600,
                            integral_name: "积分",
                            is_check: 0
                        }, {
                            time: 2,
                            integral: 600,
                            integral_name: "积分",
                            is_check: 0
                        }, {
                            time: 3,
                            integral: 600,
                            integral_name: "积分",
                            is_check: 0
                        }, {
                            time: 4,
                            integral: 600,
                            integral_name: "积分",
                            is_check: 0
                        }, {
                            time: 5,
                            integral: 600,
                            integral_name: "积分",
                            is_check: 0
                        }, {
                            time: 6,
                            integral: 600,
                            integral_name: "积分",
                            is_check: 0
                        } ],
                        signs: {
                            time: 7,
                            integral: 600,
                            integral_name: "积分",
                            is_check: 0
                        },
                        qdLists: [],
                        system: {},
                        qiandao: this.$img.qiandao,
                        jifen2: this.$img.jifen2,
                        shang: this.$img.shang
                    };
                },
                onShow: function() {
                    this.getSystem(), this.userInfoes();
                },
                mounted: function() {
                    var n = new Date();
                    n.setDate(n.getDate() - 1), this.timeNow = n.toLocaleDateString();
                },
                methods: {
                    getSystem: function() {
                        var n = this;
                        return a(i.default.mark(function e() {
                            var t;
                            return i.default.wrap(function(e) {
                                while (1) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, n.$http({
                                        url: n.$api.system
                                    });

                                  case 2:
                                    t = e.sent, 0 == t.errno && (n.system = t.data);

                                  case 4:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    userInfoes: function() {
                        var e = this;
                        return a(i.default.mark(function t() {
                            var r;
                            return i.default.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, e.$http({
                                        url: e.$api.userhy,
                                        data: {
                                            uid: n.getStorageSync("uid").id
                                        }
                                    });

                                  case 2:
                                    r = t.sent, 0 == r.errno && (e.userInfo = r.data, console.log("this.timeNow成功", e.timeNow, e.userInfo.sign_date), 
                                    7 == Number(e.userInfo.sign_count) && e.userInfo.sign_date != e.date && (e.userInfo.sign_count = 0), 
                                    e.userInfo.sign_date > e.timeNow && (console.log("this.timeNow大于", e.timeNow, e.userInfo.sign_date), 
                                    e.userInfo.sign_count = 0, console.log("执行thi 啊啊啊天数为0", e.userInfo.sign_count)), 
                                    console.log("用户信息", r, e.uid)), e.DateDiff2();

                                  case 5:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    DateDiff2: function() {
                        var n = new Date(this.userInfo.sign_date).getTime(), e = new Date(this.timeNow).getTime();
                        console.log("时间戳sDate1", this.timers, n, "sDate2", this.createtime, e), e > n ? this.userInfo.sign_count = 0 : this.timeYD = 1;
                    },
                    sqiandao: function(n, e) {
                        this.setQiandao();
                    },
                    qiandaos: function() {
                        this.setQiandao();
                    },
                    setQiandao: function() {
                        var e = this;
                        return a(i.default.mark(function t() {
                            var r;
                            return i.default.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, e.$http({
                                        url: e.$api.qiandao,
                                        data: {
                                            uid: n.getStorageSync("uid").id
                                        }
                                    });

                                  case 2:
                                    r = t.sent, 0 == r.code ? (e.userInfoes(), e.$sun.toast("签到成功")) : e.$sun.toast("您已签到成功");

                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    }
                }
            };
            e.default = s;
        }).call(this, t("543d")["default"]);
    },
    "76a3": function(n, e, t) {
        "use strict";
        t.d(e, "b", function() {
            return r;
        }), t.d(e, "c", function() {
            return u;
        }), t.d(e, "a", function() {
            return i;
        });
        var i = {
            richParser: function() {
                return Promise.all([ t.e("common/vendor"), t.e("components/rich-parser/rich-parser") ]).then(t.bind(null, "6057"));
            }
        }, r = function() {
            var n = this, e = n.$createElement, t = (n._self._c, n.__map(n.sign, function(e, t) {
                var i = n.__get_orig(e), r = 0 == t ? Number(n.userInfo.sign_count) : null, u = 0 == t ? Number(n.userInfo.sign_count) : null, a = 0 == t ? Number(n.userInfo.sign_count) : null, s = 0 == t && t >= a ? Number(n.system.sign_integral) : null, o = t < 6 && 0 != t ? Number(n.userInfo.sign_count) : null, c = t < 6 && 0 != t ? Number(n.userInfo.sign_count) : null, f = t < 6 && 0 != t ? Number(n.userInfo.sign_count) : null, l = t < 6 && 0 != t && t >= f ? Number(n.system.con_sing_integral) : null, m = t < 6 && 0 != t && t >= f ? Number(Number(e.time) - 1) : null;
                return {
                    $orig: i,
                    m0: r,
                    m1: u,
                    m2: a,
                    m3: s,
                    m4: o,
                    m5: c,
                    m6: f,
                    m7: l,
                    m8: m
                };
            })), i = Number(n.userInfo.sign_count), r = Number(n.userInfo.sign_count), u = Number(n.userInfo.sign_count), a = Number(n.userInfo.sign_count), s = 7 != a ? Number(n.system.con_sing_integral) : null;
            n.$mp.data = Object.assign({}, {
                $root: {
                    l0: t,
                    m9: i,
                    m10: r,
                    m11: u,
                    m12: a,
                    m13: s
                }
            });
        }, u = [];
    },
    "7a76": function(n, e, t) {
        "use strict";
        t.r(e);
        var i = t("33be"), r = t.n(i);
        for (var u in i) "default" !== u && function(n) {
            t.d(e, n, function() {
                return i[n];
            });
        }(u);
        e["default"] = r.a;
    },
    "8d28": function(n, e, t) {
        "use strict";
        var i = t("f6a1"), r = t.n(i);
        r.a;
    },
    f6a1: function(n, e, t) {},
    ffd5: function(n, e, t) {
        "use strict";
        t.r(e);
        var i = t("76a3"), r = t("7a76");
        for (var u in r) "default" !== u && function(n) {
            t.d(e, n, function() {
                return r[n];
            });
        }(u);
        t("8d28");
        var a, s = t("f0c5"), o = Object(s["a"])(r["default"], i["b"], i["c"], !1, null, null, null, !1, i["a"], a);
        e["default"] = o.exports;
    }
}, [ [ "0403", "common/runtime", "common/vendor" ] ] ]);