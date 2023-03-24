(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/hotel/hotelAddress/hotelAddress" ], {
    "01b2": function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("3f7d"), a = n("def0");
        for (var s in a) "default" !== s && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(s);
        n("c3cb");
        var o, c = n("f0c5"), i = Object(c["a"])(a["default"], r["b"], r["c"], !1, null, null, null, !1, r["a"], o);
        t["default"] = i.exports;
    },
    "3f7d": function(e, t, n) {
        "use strict";
        var r;
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "c", function() {
            return s;
        }), n.d(t, "a", function() {
            return r;
        });
        var a = function() {
            var e = this, t = e.$createElement, n = (e._self._c, e.__map(e.addressList, function(t, n) {
                var r = e.__get_orig(t), a = t.person_name.substr(0, 1);
                return {
                    $orig: r,
                    g0: a
                };
            }));
            e.$mp.data = Object.assign({}, {
                $root: {
                    l0: n
                }
            });
        }, s = [];
    },
    "685d": function(e, t, n) {},
    "6e5c": function(e, t, n) {
        "use strict";
        (function(e) {
            n("cee1");
            r(n("66fd"));
            var t = r(n("01b2"));
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            e(t.default);
        }).call(this, n("543d")["createPage"]);
    },
    c3cb: function(e, t, n) {
        "use strict";
        var r = n("685d"), a = n.n(r);
        a.a;
    },
    def0: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("ed3b"), a = n.n(r);
        for (var s in r) "default" !== s && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(s);
        t["default"] = a.a;
    },
    ed3b: function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = a(n("a34a"));
            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function s(e, t, n, r, a, s, o) {
                try {
                    var c = e[s](o), i = c.value;
                } catch (u) {
                    return void n(u);
                }
                c.done ? t(i) : Promise.resolve(i).then(r, a);
            }
            function o(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(r, a) {
                        var o = e.apply(t, n);
                        function c(e) {
                            s(o, r, a, c, i, "next", e);
                        }
                        function i(e) {
                            s(o, r, a, c, i, "throw", e);
                        }
                        c(void 0);
                    });
                };
            }
            var c = {
                data: function() {
                    return {
                        is_card: "",
                        checked: !1,
                        addressList: [],
                        name: "",
                        applyType: 1,
                        current: 0
                    };
                },
                onShow: function() {
                    this.addressLists(), this.getSystem();
                },
                onLoad: function(e) {
                    this.address = e.address;
                },
                methods: {
                    getSystem: function() {
                        var e = this;
                        return o(r.default.mark(function t() {
                            var n;
                            return r.default.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, e.$http({
                                        url: e.$api.hotelSystem
                                    });

                                  case 2:
                                    n = t.sent, 0 == n.errno && (e.system = n.data, e.is_card = n.data.is_card);

                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    setDefaults: function(t) {
                        var n = this;
                        return o(r.default.mark(function a() {
                            var s;
                            return r.default.wrap(function(r) {
                                while (1) switch (r.prev = r.next) {
                                  case 0:
                                    return r.next = 2, n.$http({
                                        url: n.$api.set_default_person,
                                        data: {
                                            pid: t,
                                            uid: e.getStorageSync("uid").id
                                        }
                                    });

                                  case 2:
                                    s = r.sent, 0 == s.errno && (console.log("设置默认地址", s), e.navigateBack({
                                        delta: 1
                                    }));

                                  case 4:
                                  case "end":
                                    return r.stop();
                                }
                            }, a);
                        }))();
                    },
                    handleApplyType: function(e) {
                        var t = e.detail.value;
                        this.applyType = t;
                    },
                    checkeds: function(e) {
                        console.log("点击单选框进行调用", e), this.setDefaults(e);
                    },
                    radioChange: function(e) {
                        for (var t = 0; t < this.addressList.length; t++) if (this.addressList[t].value === e.detail.value) {
                            this.current = t;
                            break;
                        }
                    },
                    deleteAddress: function(t) {
                        var n = this;
                        e.showModal({
                            title: "提示",
                            content: "确认删除该联系方式？",
                            success: function() {
                                var a = o(r.default.mark(function a(s) {
                                    var o;
                                    return r.default.wrap(function(r) {
                                        while (1) switch (r.prev = r.next) {
                                          case 0:
                                            if (!s.confirm) {
                                                r.next = 8;
                                                break;
                                            }
                                            return r.next = 3, n.$http({
                                                url: n.$api.del_persons,
                                                data: {
                                                    id: t
                                                }
                                            });

                                          case 3:
                                            o = r.sent, console.log("删除联系方式", o, "id", t), 0 == o.errno ? (t == e.getStorageSync("personID") && (wx.setStorageSync("personName", ""), 
                                            wx.setStorageSync("personMobile", ""), wx.setStorageSync("personCard", ""), wx.setStorageSync("personID", "")), 
                                            e.showModal({
                                                title: "提示",
                                                showCancel: !1,
                                                content: o.message,
                                                success: function(t) {
                                                    if (t.confirm) e.navigateBack({
                                                        delta: 1
                                                    }); else if (t.cancel) return;
                                                }
                                            })) : n.$sun.toast(o.message), r.next = 9;
                                            break;

                                          case 8:
                                            s.cancel && console.log("用户点击取消");

                                          case 9:
                                          case "end":
                                            return r.stop();
                                        }
                                    }, a);
                                }));
                                function s(e) {
                                    return a.apply(this, arguments);
                                }
                                return s;
                            }()
                        });
                    },
                    addressIndex: function(t) {
                        console.log("编辑删除地址跳转------------"), e.navigateTo({
                            url: "/packages/hotel/hotelAddressNext/hotelAddressNext?id=" + t + "&type=2"
                        }), e.setNavigationBarTitle({
                            title: "编辑联系方式"
                        });
                    },
                    addressAign: function() {
                        console.log("新增地址------------"), e.navigateTo({
                            url: "/packages/hotel/hotelAddressNext/hotelAddressNext?type=1"
                        }), e.setNavigationBarTitle({
                            title: "新增联系方式"
                        });
                    },
                    addressLists: function() {
                        var t = this;
                        return o(r.default.mark(function n() {
                            var a;
                            return r.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, t.$http({
                                        url: t.$api.get_persons,
                                        data: {
                                            uid: e.getStorageSync("uid").id
                                        }
                                    });

                                  case 2:
                                    a = n.sent, 0 == a.errno && (t.addressList = a.data, console.log("地址列表", a));

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    }
                }
            };
            t.default = c;
        }).call(this, n("543d")["default"]);
    }
}, [ [ "6e5c", "common/runtime", "common/vendor" ] ] ]);