(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/login/Administrator-Index/AdminChargeMoney2/addCardtck" ], {
    "0259": function(n, t, e) {},
    "12a5": function(n, t, e) {
        "use strict";
        (function(n) {
            e("cee1");
            o(e("66fd"));
            var t = o(e("f496"));
            function o(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            n(t.default);
        }).call(this, e("543d")["createPage"]);
    },
    3663: function(n, t, e) {
        "use strict";
        var o;
        e.d(t, "b", function() {
            return a;
        }), e.d(t, "c", function() {
            return u;
        }), e.d(t, "a", function() {
            return o;
        });
        var a = function() {
            var n = this, t = n.$createElement;
            n._self._c;
        }, u = [];
    },
    "452c": function(n, t, e) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = u(e("a34a")), a = u(e("0747"));
        function u(n) {
            return n && n.__esModule ? n : {
                default: n
            };
        }
        function r(n, t, e, o, a, u, r) {
            try {
                var i = n[u](r), s = i.value;
            } catch (c) {
                return void e(c);
            }
            i.done ? t(s) : Promise.resolve(s).then(o, a);
        }
        function i(n) {
            return function() {
                var t = this, e = arguments;
                return new Promise(function(o, a) {
                    var u = n.apply(t, e);
                    function i(n) {
                        r(u, o, a, i, s, "next", n);
                    }
                    function s(n) {
                        r(u, o, a, i, s, "throw", n);
                    }
                    i(void 0);
                });
            };
        }
        var s = {
            data: function() {
                return {
                    userInfo: {},
                    money: "",
                    logno: "",
                    login: {}
                };
            },
            onShow: function() {
                a.default.releaseKey("submit");
            },
            onLoad: function(n) {
                this.login = wx.getStorageSync("login"), this.mealid = n.result, console.log("this.mealid", this.mealid), 
                this.MyMealCoupons(), console.log("=======---------------------", n.result, "card", this.card);
            },
            methods: {
                changeInput: function() {
                    console.log("输入的值", this.logno);
                },
                changeInput2: function() {
                    console.log("输入的值money", this.money);
                },
                MyMealCoupons: function() {
                    var n = this;
                    return i(o.default.mark(function t() {
                        var e;
                        return o.default.wrap(function(t) {
                            while (1) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, n.$http({
                                    url: n.$api.single_meal,
                                    data: {
                                        meal_id: n.mealid
                                    }
                                });

                              case 2:
                                e = t.sent, 0 == e.errno && (n.userInfo = e.data, console.log("我的套餐卡", e, n.card));

                              case 4:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                addNum: function() {
                    var n = this;
                    this.logno ? this.money ? a.default.uniDoFunc({
                        key: "submit",
                        success: function() {
                            var t = i(o.default.mark(function t() {
                                return o.default.wrap(function(t) {
                                    while (1) switch (t.prev = t.next) {
                                      case 0:
                                        a.default.lockKey("submit"), console.log("防抖... 在事件触发前连续点击事件会重新计时"), n.adds();

                                      case 3:
                                      case "end":
                                        return t.stop();
                                    }
                                }, t);
                            }));
                            function e() {
                                return t.apply(this, arguments);
                            }
                            return e;
                        }()
                    }) : this.$sun.toast("请输入套餐卡金额") : this.$sun.toast("请输入套餐卡次数");
                },
                adds: function() {
                    var n = this;
                    return i(o.default.mark(function t() {
                        var e;
                        return o.default.wrap(function(t) {
                            while (1) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, n.$http({
                                    url: n.$api.add_meal_count,
                                    data: {
                                        uid: n.userInfo.id,
                                        oper_uid: n.login.id,
                                        meal_id: n.mealid,
                                        store_id: n.login.store_id,
                                        count: n.logno,
                                        money: n.money
                                    }
                                });

                              case 2:
                                e = t.sent, 0 == e.errno ? (n.logno = "", n.money = "", n.$sun.toast(e.message)) : (a.default.releaseKey("submit"), 
                                n.$sun.toast(e.message));

                              case 4:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                }
            }
        };
        t.default = s;
    },
    "98d4": function(n, t, e) {
        "use strict";
        var o = e("0259"), a = e.n(o);
        a.a;
    },
    d7c5: function(n, t, e) {
        "use strict";
        e.r(t);
        var o = e("452c"), a = e.n(o);
        for (var u in o) "default" !== u && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(u);
        t["default"] = a.a;
    },
    f496: function(n, t, e) {
        "use strict";
        e.r(t);
        var o = e("3663"), a = e("d7c5");
        for (var u in a) "default" !== u && function(n) {
            e.d(t, n, function() {
                return a[n];
            });
        }(u);
        e("98d4");
        var r, i = e("f0c5"), s = Object(i["a"])(a["default"], o["b"], o["c"], !1, null, null, null, !1, o["a"], r);
        t["default"] = s.exports;
    }
}, [ [ "12a5", "common/runtime", "common/vendor" ] ] ]);