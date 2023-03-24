(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/login/koukuanDetail/koukuanDetail" ], {
    "0dd1": function(n, t, e) {
        "use strict";
        var o;
        e.d(t, "b", function() {
            return u;
        }), e.d(t, "c", function() {
            return r;
        }), e.d(t, "a", function() {
            return o;
        });
        var u = function() {
            var n = this, t = n.$createElement;
            n._self._c;
        }, r = [];
    },
    "10c1": function(n, t, e) {},
    3012: function(n, t, e) {
        "use strict";
        (function(n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = u(e("a34a"));
            function u(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            function r(n, t, e, o, u, r, a) {
                try {
                    var i = n[r](a), c = i.value;
                } catch (l) {
                    return void e(l);
                }
                i.done ? t(c) : Promise.resolve(c).then(o, u);
            }
            function a(n) {
                return function() {
                    var t = this, e = arguments;
                    return new Promise(function(o, u) {
                        var a = n.apply(t, e);
                        function i(n) {
                            r(a, o, u, i, c, "next", n);
                        }
                        function c(n) {
                            r(a, o, u, i, c, "throw", n);
                        }
                        i(void 0);
                    });
                };
            }
            var i = {
                data: function() {
                    return {
                        login: {},
                        singleInfo: {}
                    };
                },
                onLoad: function(n) {
                    this.login = wx.getStorageSync("login"), this.id = n.id, this.singleProxys();
                },
                methods: {
                    copy: function() {
                        n.setClipboardData({
                            data: this.singleInfo.member_no
                        });
                    },
                    singleProxys: function() {
                        var n = this;
                        return a(o.default.mark(function t() {
                            var e;
                            return o.default.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                  case 0:
                                    return console.log("----------"), t.next = 3, n.$http({
                                        url: n.$api.meal_count_log,
                                        data: {
                                            id: n.id
                                        }
                                    });

                                  case 3:
                                    e = t.sent, 0 == e.errno && (n.singleInfo = e.data), console.log("单个扣款记录id", n.id);

                                  case 6:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    }
                }
            };
            t.default = i;
        }).call(this, e("543d")["default"]);
    },
    "39c6": function(n, t, e) {
        "use strict";
        e.r(t);
        var o = e("0dd1"), u = e("e405");
        for (var r in u) "default" !== r && function(n) {
            e.d(t, n, function() {
                return u[n];
            });
        }(r);
        e("5791");
        var a, i = e("f0c5"), c = Object(i["a"])(u["default"], o["b"], o["c"], !1, null, null, null, !1, o["a"], a);
        t["default"] = c.exports;
    },
    5791: function(n, t, e) {
        "use strict";
        var o = e("10c1"), u = e.n(o);
        u.a;
    },
    cc4f: function(n, t, e) {
        "use strict";
        (function(n) {
            e("cee1");
            o(e("66fd"));
            var t = o(e("39c6"));
            function o(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            n(t.default);
        }).call(this, e("543d")["createPage"]);
    },
    e405: function(n, t, e) {
        "use strict";
        e.r(t);
        var o = e("3012"), u = e.n(o);
        for (var r in o) "default" !== r && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(r);
        t["default"] = u.a;
    }
}, [ [ "cc4f", "common/runtime", "common/vendor" ] ] ]);