(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/login/Administrator-Index/tcCard/tcCard" ], {
    "104d": function(t, e, n) {
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
    1254: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("bb98"), r = n.n(a);
        for (var o in a) "default" !== o && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(o);
        e["default"] = r.a;
    },
    bafe: function(t, e, n) {
        "use strict";
        (function(t) {
            n("cee1");
            a(n("66fd"));
            var e = a(n("f7f3"));
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(e.default);
        }).call(this, n("543d")["createPage"]);
    },
    bb98: function(t, e, n) {
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
            function o(t, e, n, a, r, o, u) {
                try {
                    var i = t[o](u), c = i.value;
                } catch (s) {
                    return void n(s);
                }
                i.done ? e(c) : Promise.resolve(c).then(a, r);
            }
            function u(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(a, r) {
                        var u = t.apply(e, n);
                        function i(t) {
                            o(u, a, r, i, c, "next", t);
                        }
                        function c(t) {
                            o(u, a, r, i, c, "throw", t);
                        }
                        i(void 0);
                    });
                };
            }
            var i = {
                data: function() {
                    return {
                        options: {}
                    };
                },
                onLoad: function(t) {
                    console.log("=======---------------------", t.result), this.options = t, this.mealid = t.result, 
                    this.writeOff = t.writeOff, console.log("this.mealid====", this.mealid, "options===", t), 
                    this.UseMealCoupons();
                },
                methods: {
                    UseMealCoupons: function() {
                        var e = this;
                        return u(a.default.mark(function n() {
                            var r, o;
                            return a.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    if (1 != e.writeOff) {
                                        n.next = 7;
                                        break;
                                    }
                                    return n.next = 3, e.$http({
                                        url: e.$api.write_qrcode,
                                        data: {
                                            id: e.options.id,
                                            type: e.options.type
                                        }
                                    });

                                  case 3:
                                    r = n.sent, 0 == r.errno ? (e.UseMealList = r.data, t.showModal({
                                        confirmText: "确定",
                                        showCancel: !1,
                                        title: "核销扫描成功",
                                        success: function() {
                                            var e = u(a.default.mark(function e(n) {
                                                return a.default.wrap(function(e) {
                                                    while (1) switch (e.prev = e.next) {
                                                      case 0:
                                                        setTimeout(function() {
                                                            t.navigateBack({
                                                                delta: 1
                                                            });
                                                        }, 1e3);

                                                      case 1:
                                                      case "end":
                                                        return e.stop();
                                                    }
                                                }, e);
                                            }));
                                            function n(t) {
                                                return e.apply(this, arguments);
                                            }
                                            return n;
                                        }()
                                    }), console.log("使用套餐卡", r)) : t.showModal({
                                        confirmText: "确定",
                                        showCancel: !1,
                                        title: "核销扫描失败，请重试",
                                        success: function() {
                                            var e = u(a.default.mark(function e(n) {
                                                return a.default.wrap(function(e) {
                                                    while (1) switch (e.prev = e.next) {
                                                      case 0:
                                                        setTimeout(function() {
                                                            t.navigateBack({
                                                                delta: 1
                                                            });
                                                        }, 1e3);

                                                      case 1:
                                                      case "end":
                                                        return e.stop();
                                                    }
                                                }, e);
                                            }));
                                            function n(t) {
                                                return e.apply(this, arguments);
                                            }
                                            return n;
                                        }()
                                    }), n.next = 11;
                                    break;

                                  case 7:
                                    return n.next = 9, e.$http({
                                        url: e.$api.UseMealCoupon,
                                        data: {
                                            uid: wx.getStorageSync("login").id,
                                            meal_id: e.mealid
                                        }
                                    });

                                  case 9:
                                    o = n.sent, 0 == o.errno ? (e.UseMealList = o.data, t.showModal({
                                        confirmText: "确定",
                                        showCancel: !1,
                                        title: "套餐卡扫描成功",
                                        success: function() {
                                            var e = u(a.default.mark(function e(n) {
                                                return a.default.wrap(function(e) {
                                                    while (1) switch (e.prev = e.next) {
                                                      case 0:
                                                        setTimeout(function() {
                                                            t.navigateBack({
                                                                delta: 1
                                                            });
                                                        }, 1e3);

                                                      case 1:
                                                      case "end":
                                                        return e.stop();
                                                    }
                                                }, e);
                                            }));
                                            function n(t) {
                                                return e.apply(this, arguments);
                                            }
                                            return n;
                                        }()
                                    }), console.log("使用套餐卡", o)) : t.showModal({
                                        confirmText: "确定",
                                        showCancel: !1,
                                        title: "套餐卡扫描失败，请重试",
                                        success: function() {
                                            var e = u(a.default.mark(function e(n) {
                                                return a.default.wrap(function(e) {
                                                    while (1) switch (e.prev = e.next) {
                                                      case 0:
                                                        setTimeout(function() {
                                                            t.navigateBack({
                                                                delta: 1
                                                            });
                                                        }, 1e3);

                                                      case 1:
                                                      case "end":
                                                        return e.stop();
                                                    }
                                                }, e);
                                            }));
                                            function n(t) {
                                                return e.apply(this, arguments);
                                            }
                                            return n;
                                        }()
                                    });

                                  case 11:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    }
                }
            };
            e.default = i;
        }).call(this, n("543d")["default"]);
    },
    f7f3: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("104d"), r = n("1254");
        for (var o in r) "default" !== o && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(o);
        var u, i = n("f0c5"), c = Object(i["a"])(r["default"], a["b"], a["c"], !1, null, null, null, !1, a["a"], u);
        e["default"] = c.exports;
    }
}, [ [ "bafe", "common/runtime", "common/vendor" ] ] ]);