(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "wjyk_nhyk/pages/gwcNext/gwcNext" ], {
    1425: function(t, e, n) {},
    1706: function(t, e, n) {
        "use strict";
        var r = n("1425"), o = n.n(r);
        o.a;
    },
    8835: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("d450"), o = n("8f68");
        for (var u in o) "default" !== u && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(u);
        n("1706");
        var a, c = n("f0c5"), i = Object(c["a"])(o["default"], r["b"], r["c"], !1, null, null, null, !1, r["a"], a);
        e["default"] = i.exports;
    },
    "8f68": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("e42a"), o = n.n(r);
        for (var u in r) "default" !== u && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(u);
        e["default"] = o.a;
    },
    c7f9: function(t, e, n) {
        "use strict";
        (function(t) {
            n("cee1");
            r(n("66fd"));
            var e = r(n("8835"));
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(e.default);
        }).call(this, n("543d")["createPage"]);
    },
    d450: function(t, e, n) {
        "use strict";
        var r;
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return u;
        }), n.d(e, "a", function() {
            return r;
        });
        var o = function() {
            var t = this, e = t.$createElement;
            t._self._c;
        }, u = [];
    },
    e42a: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = o(n("a34a"));
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function u(t, e, n, r, o, u, a) {
                try {
                    var c = t[u](a), i = c.value;
                } catch (s) {
                    return void n(s);
                }
                c.done ? e(i) : Promise.resolve(i).then(r, o);
            }
            function a(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(r, o) {
                        var a = t.apply(e, n);
                        function c(t) {
                            u(a, r, o, c, i, "next", t);
                        }
                        function i(t) {
                            u(a, r, o, c, i, "throw", t);
                        }
                        c(void 0);
                    });
                };
            }
            var c = {
                data: function() {
                    return {
                        qrcode: "",
                        posterShow: !1,
                        poster: ""
                    };
                },
                onShow: function() {
                    this.commissions(), this.getSystem();
                },
                methods: {
                    getSystem: function() {
                        var t = this;
                        return a(r.default.mark(function e() {
                            var n;
                            return r.default.wrap(function(e) {
                                while (1) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, t.$http({
                                        url: t.$api.system
                                    });

                                  case 2:
                                    n = e.sent, 0 == n.errno && (t.poster = n.data.dist.poster);

                                  case 4:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    commissions: function() {
                        var e = this;
                        return a(r.default.mark(function n() {
                            var o;
                            return r.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, e.$http({
                                        url: e.$api.commission,
                                        data: {
                                            uid: t.getStorageSync("uid").id
                                        }
                                    });

                                  case 2:
                                    o = n.sent, 0 == o.errno && (e.qrcode = o.data.qrcode);

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    closePost: function() {
                        this.posterShow = !1;
                    },
                    openPost: function() {
                        var e = this;
                        t.showLoading({
                            title: "加载中...",
                            mask: !0
                        }), this.posterShow = !0;
                        var n = {
                            icon: this.poster,
                            code: this.qrcode
                        };
                        setTimeout(function() {
                            console.log(e.$refs.poster), e.$refs.poster.drawPoster(n);
                        }, 1e3);
                    }
                }
            };
            e.default = c;
        }).call(this, n("543d")["default"]);
    }
}, [ [ "c7f9", "common/runtime", "common/vendor" ] ] ]);