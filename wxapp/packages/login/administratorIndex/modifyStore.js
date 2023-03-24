(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/login/administratorIndex/modifyStore" ], {
    "265e": function(t, e, n) {
        "use strict";
        var r;
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {
            return r;
        });
        var a = function() {
            var t = this, e = t.$createElement;
            t._self._c;
        }, o = [];
    },
    "8a1b": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("9aac"), a = n.n(r);
        for (var o in r) "default" !== o && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(o);
        e["default"] = a.a;
    },
    "9aac": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = o(n("a34a")), a = o(n("0747"));
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function u(t, e, n, r, a, o, u) {
                try {
                    var i = t[o](u), s = i.value;
                } catch (c) {
                    return void n(c);
                }
                i.done ? e(s) : Promise.resolve(s).then(r, a);
            }
            function i(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(r, a) {
                        var o = t.apply(e, n);
                        function i(t) {
                            u(o, r, a, i, s, "next", t);
                        }
                        function s(t) {
                            u(o, r, a, i, s, "throw", t);
                        }
                        i(void 0);
                    });
                };
            }
            var s = {
                data: function() {
                    return {
                        store: {},
                        storenames: "",
                        storephone: ""
                    };
                },
                onLoad: function(t) {
                    this.id = t.id, console.log(this.id, "id---------"), this.storeInfos();
                },
                onShow: function() {
                    a.default.releaseKey("submit");
                },
                methods: {
                    dianzhang: function() {
                        t.navigateTo({
                            url: "/packages/login/administratorIndex/changeStoreManager"
                        });
                    },
                    storeInfos: function() {
                        var t = this;
                        return i(r.default.mark(function e() {
                            var n;
                            return r.default.wrap(function(e) {
                                while (1) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, t.$http({
                                        url: t.$api.store_info,
                                        data: {
                                            store_id: t.id
                                        }
                                    });

                                  case 2:
                                    n = e.sent, 0 == n.errno && (t.store = n.data, t.storenames = n.data.store_name, 
                                    t.storephone = n.data.store_phone, console.log("门店信息", n, t.uid));

                                  case 4:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    confirm: function() {
                        var t = this;
                        return this.storenames ? this.storephone ? void a.default.uniDoFunc({
                            key: "submit",
                            success: function() {
                                var e = i(r.default.mark(function e() {
                                    return r.default.wrap(function(e) {
                                        while (1) switch (e.prev = e.next) {
                                          case 0:
                                            a.default.lockKey("submit"), console.log("防抖... 在事件触发前连续点击事件会重新计时"), t.editconfirm();

                                          case 3:
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
                        }) : (this.$sun.toast("请输入门店电话"), !1) : (this.$sun.toast("请输入门店昵称"), !1);
                    },
                    editconfirm: function() {
                        var e = this;
                        return i(r.default.mark(function n() {
                            var o;
                            return r.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, e.$http({
                                        url: e.$api.update_store,
                                        data: {
                                            store_id: e.id,
                                            store_name: e.storenames,
                                            store_phone: e.storephone
                                        }
                                    });

                                  case 2:
                                    o = n.sent, 0 == o.errno ? (e.$sun.toast(o.message), console.log("更新门店信息", o, e.id), 
                                    setTimeout(function() {
                                        t.navigateBack({
                                            delta: 0
                                        });
                                    }, 1500)) : a.default.releaseKey("submit");

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    }
                }
            };
            e.default = s;
        }).call(this, n("543d")["default"]);
    },
    ae25: function(t, e, n) {
        "use strict";
        var r = n("d5c2"), a = n.n(r);
        a.a;
    },
    d5c2: function(t, e, n) {},
    e247: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("265e"), a = n("8a1b");
        for (var o in a) "default" !== o && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(o);
        n("ae25");
        var u, i = n("f0c5"), s = Object(i["a"])(a["default"], r["b"], r["c"], !1, null, null, null, !1, r["a"], u);
        e["default"] = s.exports;
    },
    f042: function(t, e, n) {
        "use strict";
        (function(t) {
            n("cee1");
            r(n("66fd"));
            var e = r(n("e247"));
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(e.default);
        }).call(this, n("543d")["createPage"]);
    }
}, [ [ "f042", "common/runtime", "common/vendor" ] ] ]);