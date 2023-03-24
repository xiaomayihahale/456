(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/login/Administrator-Index/DetailedRecord/DetailedRecord" ], {
    "05ef": function(t, n, e) {
        "use strict";
        var o = e("665f"), r = e.n(o);
        r.a;
    },
    "167c": function(t, n, e) {
        "use strict";
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var o = r(e("a34a"));
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function u(t, n, e, o, r, u, i) {
                try {
                    var a = t[u](i), c = a.value;
                } catch (d) {
                    return void e(d);
                }
                a.done ? n(c) : Promise.resolve(c).then(o, r);
            }
            function i(t) {
                return function() {
                    var n = this, e = arguments;
                    return new Promise(function(o, r) {
                        var i = t.apply(n, e);
                        function a(t) {
                            u(i, o, r, a, c, "next", t);
                        }
                        function c(t) {
                            u(i, o, r, a, c, "throw", t);
                        }
                        a(void 0);
                    });
                };
            }
            var a = {
                data: function() {
                    return {
                        order: {},
                        orderGoods: [],
                        plugin_type: ""
                    };
                },
                onLoad: function(t) {
                    this.plugin_type = t.plugin_type, this.id = t.id, console.log("this.plugin_type", this.plugin_type, "this.id", this.id), 
                    this.getOrderDetail();
                },
                computed: {
                    num: function() {
                        console.log("进入结算金额", this.orderGoods);
                        var t = 0;
                        return this.orderGoods.forEach(function(n) {
                            console.log("p", n.num), t += Number(n.num), console.log(t, "sumNum");
                        }), Number(t);
                    }
                },
                methods: {
                    copy2: function() {
                        t.setClipboardData({
                            data: this.order.member_no
                        });
                    },
                    detials: function() {
                        this.$refs.pop.show({
                            style: "background-color:#fff;width:100%;height:auto;overflow-x:auto;border-radius: 20rpx 20rpx 0rpx 0rpx;",
                            anim: "bottom",
                            position: "bottom",
                            topclose: !1,
                            titleStyle: "position: fixed;width: 100%;background: #fff;z-index: 999;border-bottom:1rpx solid #f7f7f7;"
                        });
                    },
                    closeDialog: function() {
                        this.$refs.pop.close();
                    },
                    getOrderDetail: function() {
                        var t = this;
                        return i(o.default.mark(function n() {
                            var e;
                            return o.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, t.$http({
                                        url: t.$api.order_info,
                                        data: {
                                            id: t.id
                                        }
                                    });

                                  case 2:
                                    e = n.sent, 0 == e.errno && (t.order = e.data, t.orderGoods = e.data.goods);

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    }
                }
            };
            n.default = a;
        }).call(this, e("543d")["default"]);
    },
    "23b6": function(t, n, e) {
        "use strict";
        (function(t) {
            e("cee1");
            o(e("66fd"));
            var n = o(e("d885"));
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(n.default);
        }).call(this, e("543d")["createPage"]);
    },
    "665f": function(t, n, e) {},
    d885: function(t, n, e) {
        "use strict";
        e.r(n);
        var o = e("da9b"), r = e("ef31");
        for (var u in r) "default" !== u && function(t) {
            e.d(n, t, function() {
                return r[t];
            });
        }(u);
        e("05ef");
        var i, a = e("f0c5"), c = Object(a["a"])(r["default"], o["b"], o["c"], !1, null, null, null, !1, o["a"], i);
        n["default"] = c.exports;
    },
    da9b: function(t, n, e) {
        "use strict";
        e.d(n, "b", function() {
            return r;
        }), e.d(n, "c", function() {
            return u;
        }), e.d(n, "a", function() {
            return o;
        });
        var o = {
            sunuiPopup: function() {
                return e.e("components/sunui-popup/sunui-popup").then(e.bind(null, "6cf4"));
            }
        }, r = function() {
            var t = this, n = t.$createElement;
            t._self._c;
        }, u = [];
    },
    ef31: function(t, n, e) {
        "use strict";
        e.r(n);
        var o = e("167c"), r = e.n(o);
        for (var u in o) "default" !== u && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(u);
        n["default"] = r.a;
    }
}, [ [ "23b6", "common/runtime", "common/vendor" ] ] ]);