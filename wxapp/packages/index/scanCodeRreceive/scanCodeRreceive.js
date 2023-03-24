(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/index/scanCodeRreceive/scanCodeRreceive" ], {
    "051c": function(n, t, e) {
        "use strict";
        e.r(t);
        var i = e("d119"), o = e.n(i);
        for (var u in i) "default" !== u && function(n) {
            e.d(t, n, function() {
                return i[n];
            });
        }(u);
        t["default"] = o.a;
    },
    "4db6": function(n, t, e) {
        "use strict";
        e.r(t);
        var i = e("e1d6"), o = e("051c");
        for (var u in o) "default" !== u && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(u);
        e("fd24");
        var r, a = e("f0c5"), s = Object(a["a"])(o["default"], i["b"], i["c"], !1, null, null, null, !1, i["a"], r);
        t["default"] = s.exports;
    },
    d119: function(n, t, e) {
        "use strict";
        (function(n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = o(e("a34a"));
            function o(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            function u(n, t, e, i, o, u, r) {
                try {
                    var a = n[u](r), s = a.value;
                } catch (c) {
                    return void e(c);
                }
                a.done ? t(s) : Promise.resolve(s).then(i, o);
            }
            function r(n) {
                return function() {
                    var t = this, e = arguments;
                    return new Promise(function(i, o) {
                        var r = n.apply(t, e);
                        function a(n) {
                            u(r, i, o, a, s, "next", n);
                        }
                        function s(n) {
                            u(r, i, o, a, s, "throw", n);
                        }
                        a(void 0);
                    });
                };
            }
            var a = {
                data: function() {
                    return {
                        scene: "",
                        uid: "",
                        id: "",
                        options: {},
                        options2: "",
                        couponsss: this.$img.coupon,
                        system: {},
                        couponList: [],
                        youhui1: this.$img.youhui1,
                        youhui2: this.$img.youhui2,
                        youhui11: this.$img.youhui11,
                        youhui22: this.$img.youhui22,
                        arrow: this.$img.arrow,
                        singleCouponList: []
                    };
                },
                onShow: function() {
                    this.singleCoupons();
                },
                onLoad: function(t) {
                    console.log("options=========", t), this.uid = n.getStorageSync("uid").id, this.options = t, 
                    this.scene = decodeURIComponent(this.options.scene), this.id = this.scene.split("=")[2], 
                    this.getSystem();
                },
                methods: {
                    handleLogin: function() {
                        if (this.uid = n.getStorageSync("uid").id, this.uid) return !0;
                        n.navigateTo({
                            url: "/packages/takeawayOrder/loginNext/loginNext"
                        });
                    },
                    navChange3: function(n) {
                        this.navIndex3 = n, console.log("this.navIndex3", this.navIndex3, n);
                    },
                    getSystem: function() {
                        var n = this;
                        return r(i.default.mark(function t() {
                            var e;
                            return i.default.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, n.$http({
                                        url: n.$api.system
                                    });

                                  case 2:
                                    e = t.sent, 0 == e.errno && (n.system = e.data);

                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    handleReceiptCoupon: function(t) {
                        var e = this;
                        return r(i.default.mark(function o() {
                            var u;
                            return i.default.wrap(function(i) {
                                while (1) switch (i.prev = i.next) {
                                  case 0:
                                    return i.next = 2, e.$http({
                                        url: e.$api.receive_coupon,
                                        data: {
                                            id: t,
                                            uid: n.getStorageSync("uid").id
                                        }
                                    });

                                  case 2:
                                    u = i.sent, u.errno, e.$sun.toast(u.message);

                                  case 4:
                                  case "end":
                                    return i.stop();
                                }
                            }, o);
                        }))();
                    },
                    singleCoupons: function() {
                        var n = this;
                        return r(i.default.mark(function t() {
                            var e;
                            return i.default.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                  case 0:
                                    if (!n.handleLogin()) {
                                        t.next = 7;
                                        break;
                                    }
                                    return t.next = 3, n.$http({
                                        url: n.$api.single_coupon,
                                        data: {
                                            coupon_id: n.id
                                        }
                                    });

                                  case 3:
                                    e = t.sent, 0 == e.errno && (n.singleCouponList = e.data), t.next = 8;
                                    break;

                                  case 7:
                                    n.$sun.toast("登录不成功", result.message);

                                  case 8:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    }
                }
            };
            t.default = a;
        }).call(this, e("543d")["default"]);
    },
    da73: function(n, t, e) {},
    e1d6: function(n, t, e) {
        "use strict";
        var i;
        e.d(t, "b", function() {
            return o;
        }), e.d(t, "c", function() {
            return u;
        }), e.d(t, "a", function() {
            return i;
        });
        var o = function() {
            var n = this, t = n.$createElement, e = (n._self._c, n.singleCouponList ? Number(n.singleCouponList.less) : null);
            n.$mp.data = Object.assign({}, {
                $root: {
                    m0: e
                }
            });
        }, u = [];
    },
    e78c: function(n, t, e) {
        "use strict";
        (function(n) {
            e("cee1");
            i(e("66fd"));
            var t = i(e("4db6"));
            function i(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            n(t.default);
        }).call(this, e("543d")["createPage"]);
    },
    fd24: function(n, t, e) {
        "use strict";
        var i = e("da73"), o = e.n(i);
        o.a;
    }
}, [ [ "e78c", "common/runtime", "common/vendor" ] ] ]);