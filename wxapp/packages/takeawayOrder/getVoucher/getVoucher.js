(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/takeawayOrder/getVoucher/getVoucher" ], {
    1553: function(t, e, n) {
        "use strict";
        var i;
        n.d(e, "b", function() {
            return r;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {
            return i;
        });
        var r = function() {
            var t = this, e = t.$createElement;
            t._self._c;
        }, o = [];
    },
    "7dc2": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = r(n("a34a"));
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function o(t, e, n, i, r, o, u) {
                try {
                    var a = t[o](u), s = a.value;
                } catch (c) {
                    return void n(c);
                }
                a.done ? e(s) : Promise.resolve(s).then(i, r);
            }
            function u(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(i, r) {
                        var u = t.apply(e, n);
                        function a(t) {
                            o(u, i, r, a, s, "next", t);
                        }
                        function s(t) {
                            o(u, i, r, a, s, "throw", t);
                        }
                        a(void 0);
                    });
                };
            }
            var a = {
                data: function() {
                    return {
                        getVoucherText: "立即领取",
                        disabled: !1,
                        voucherList: [],
                        options: {},
                        id: "",
                        item: {}
                    };
                },
                onShow: function() {
                    this.singleVoucher(), "" != this.voucherList.transfer_uid && (console.log("未领取--- 提示该代金券已领取的打印"), 
                    this.getVoucherText = "已领取", this.$sun.toast("该券已领取！"));
                },
                onLoad: function(e) {
                    this.uid = t.getStorageSync("uid").id, this.id = e.id, this.options = e, this.item = e.item, 
                    console.log("this.id-----", this.id, "this.item--------", this.item, "this.options---", this.options);
                },
                methods: {
                    index: function() {
                        t.navigateTo({
                            url: "/packages/takeawayOrder/index/index"
                        });
                    },
                    handleLogin: function() {
                        if (this.uid = t.getStorageSync("uid").id, this.uid) return !0;
                        t.navigateTo({
                            url: "/packages/takeawayOrder/loginNext/loginNext"
                        });
                    },
                    singleVoucher: function() {
                        var t = this;
                        return u(i.default.mark(function e() {
                            var n;
                            return i.default.wrap(function(e) {
                                while (1) switch (e.prev = e.next) {
                                  case 0:
                                    if (!t.handleLogin()) {
                                        e.next = 5;
                                        break;
                                    }
                                    return e.next = 3, t.$http({
                                        url: t.$api.single_voucher,
                                        data: {
                                            my_voucher_id: t.id
                                        }
                                    });

                                  case 3:
                                    n = e.sent, 0 == n.errno && (t.voucherList = n.data, console.log("result", n));

                                  case 5:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    getVoucher2: function() {
                        this.$sun.toast("该券已领取！");
                    },
                    getVoucher: function() {
                        var t = this;
                        return u(i.default.mark(function e() {
                            var n, r;
                            return i.default.wrap(function(e) {
                                while (1) switch (e.prev = e.next) {
                                  case 0:
                                    if (t.singleVoucher(), !t.handleLogin() || t.voucherList.uid == t.uid) {
                                        e.next = 16;
                                        break;
                                    }
                                    if (console.log("this.voucherList.transfer_uid领取代金券接口--------", t.voucherList.transfer_uid), 
                                    "" == t.voucherList.transfer_uid) {
                                        e.next = 9;
                                        break;
                                    }
                                    console.log("未领取--- 提示该代金券已领取的打印"), t.getVoucherText = "已领取", t.$sun.toast("该券已领取！"), 
                                    e.next = 14;
                                    break;

                                  case 9:
                                    return n = 0, e.next = 12, t.$http({
                                        url: t.$api.transfer_voucher,
                                        data: {
                                            my_voucher_id: t.id,
                                            transfer_uid: t.voucherList.uid,
                                            uid: t.uid
                                        }
                                    });

                                  case 12:
                                    r = e.sent, 0 == r.errno && (console.log("领取进来的打印"), setTimeout(function() {
                                        t.$sun.toast(r.message);
                                    }, 1500), n++, 1 == n && (console.log("警用count按钮", t.disabled), t.disabled = !0, 
                                    t.getVoucherText = "领取成功"), console.log("result", r, "count", n));

                                  case 14:
                                    e.next = 17;
                                    break;

                                  case 16:
                                    t.$sun.toast("不能领取自己赠送的代金券!");

                                  case 17:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    }
                }
            };
            e.default = a;
        }).call(this, n("543d")["default"]);
    },
    "92b8": function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("7dc2"), r = n.n(i);
        for (var o in i) "default" !== o && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(o);
        e["default"] = r.a;
    },
    "96b6": function(t, e, n) {
        "use strict";
        var i = n("a468"), r = n.n(i);
        r.a;
    },
    "9db4": function(t, e, n) {
        "use strict";
        (function(t) {
            n("cee1");
            i(n("66fd"));
            var e = i(n("e89f"));
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(e.default);
        }).call(this, n("543d")["createPage"]);
    },
    a468: function(t, e, n) {},
    e89f: function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("1553"), r = n("92b8");
        for (var o in r) "default" !== o && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(o);
        n("96b6");
        var u, a = n("f0c5"), s = Object(a["a"])(r["default"], i["b"], i["c"], !1, null, null, null, !1, i["a"], u);
        e["default"] = s.exports;
    }
}, [ [ "9db4", "common/runtime", "common/vendor" ] ] ]);