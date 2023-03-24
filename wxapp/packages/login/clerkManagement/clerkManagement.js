(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/login/clerkManagement/clerkManagement" ], {
    5216: function(e, t, n) {},
    5660: function(e, t, n) {
        "use strict";
        (function(e) {
            n("cee1");
            a(n("66fd"));
            var t = a(n("c4b8"));
            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            e(t.default);
        }).call(this, n("543d")["createPage"]);
    },
    "58e7": function(e, t, n) {
        "use strict";
        var a = n("5216"), r = n.n(a);
        r.a;
    },
    "710e": function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("bd74"), r = n.n(a);
        for (var o in a) "default" !== o && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(o);
        t["default"] = r.a;
    },
    bd74: function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = r(n("a34a"));
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function o(e, t, n, a, r, o, u) {
                try {
                    var i = e[o](u), c = i.value;
                } catch (s) {
                    return void n(s);
                }
                i.done ? t(c) : Promise.resolve(c).then(a, r);
            }
            function u(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(a, r) {
                        var u = e.apply(t, n);
                        function i(e) {
                            o(u, a, r, i, c, "next", e);
                        }
                        function c(e) {
                            o(u, a, r, i, c, "throw", e);
                        }
                        i(void 0);
                    });
                };
            }
            var i = {
                data: function() {
                    return {
                        avatar: this.$img.avatar,
                        storeid: "",
                        list: [],
                        username: "",
                        pwd: ""
                    };
                },
                onLoad: function(e) {
                    this.storeid = wx.getStorageSync("login").store_id, console.log(this.storeid, "this.storeid------");
                },
                methods: {
                    revises: function(t) {
                        console.log(t, "11111111"), e.navigateTo({
                            url: "/packages/login/clerkRevise/clerkRevise?username=" + t.username + "&type=2&pwd=" + t.pwd + "&dyid=" + t.id
                        });
                    },
                    detial: function(t) {
                        var n = this;
                        e.showModal({
                            confirmText: "确定",
                            content: "您是否确定删除该店员",
                            title: "温馨提示",
                            success: function() {
                                var e = u(a.default.mark(function e(r) {
                                    return a.default.wrap(function(e) {
                                        while (1) switch (e.prev = e.next) {
                                          case 0:
                                            r.confirm ? n.deletess(t) : r.cancel && console.log("您已点击取消");

                                          case 1:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e);
                                }));
                                function r(t) {
                                    return e.apply(this, arguments);
                                }
                                return r;
                            }()
                        });
                    },
                    deletess: function(t) {
                        var n = this;
                        return u(a.default.mark(function r() {
                            var o;
                            return a.default.wrap(function(a) {
                                while (1) switch (a.prev = a.next) {
                                  case 0:
                                    return a.next = 2, n.$http({
                                        url: n.$api.del_account,
                                        data: {
                                            oper_id: t.id
                                        }
                                    });

                                  case 2:
                                    o = a.sent, n.$sun.toast(o.message), 0 == o.errno && (n.$sun.toast(o.message), setTimeout(function() {
                                        e.navigateBack({
                                            delta: 1
                                        });
                                    }, 1500), console.log("result", o));

                                  case 5:
                                  case "end":
                                    return a.stop();
                                }
                            }, r);
                        }))();
                    },
                    upCallback: function(e) {
                        var t = this;
                        return u(a.default.mark(function n() {
                            var r;
                            return a.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, t.$http({
                                        url: t.$api.oper_users,
                                        data: {
                                            page: e.num,
                                            psize: 10,
                                            store_id: t.storeid
                                        }
                                    });

                                  case 2:
                                    r = n.sent, 0 == r.errno && (console.log("店员列表", r.data), t.mescroll.endByPage(r.data.list.length, r.totalPage), 
                                    1 == e.num && (t.list = []), t.list = t.list.concat(r.data.list), console.log(t.list, "list"));

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    }
                }
            };
            t.default = i;
        }).call(this, n("543d")["default"]);
    },
    c07a: function(e, t, n) {
        "use strict";
        var a;
        n.d(t, "b", function() {
            return r;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "a", function() {
            return a;
        });
        var r = function() {
            var e = this, t = e.$createElement;
            e._self._c;
        }, o = [];
    },
    c4b8: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("c07a"), r = n("710e");
        for (var o in r) "default" !== o && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(o);
        n("58e7");
        var u, i = n("f0c5"), c = Object(i["a"])(r["default"], a["b"], a["c"], !1, null, null, null, !1, a["a"], u);
        t["default"] = c.exports;
    }
}, [ [ "5660", "common/runtime", "common/vendor" ] ] ]);