(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/hotel/checkOut-Hotel/checkOut-Hotel" ], {
    "232f": function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("bf43"), o = n("8cd2");
        for (var a in o) "default" !== a && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(a);
        n("cf74");
        var i, s = n("f0c5"), u = Object(s["a"])(o["default"], r["b"], r["c"], !1, null, null, null, !1, r["a"], i);
        t["default"] = u.exports;
    },
    "38be": function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = a(n("a34a")), o = a(n("0747"));
            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function i(e, t, n, r, o, a, i) {
                try {
                    var s = e[a](i), u = s.value;
                } catch (c) {
                    return void n(c);
                }
                s.done ? t(u) : Promise.resolve(u).then(r, o);
            }
            function s(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(r, o) {
                        var a = e.apply(t, n);
                        function s(e) {
                            i(a, r, o, s, u, "next", e);
                        }
                        function u(e) {
                            i(a, r, o, s, u, "throw", e);
                        }
                        s(void 0);
                    });
                };
            }
            var u = {
                data: function() {
                    return {
                        nums: 1,
                        id: "",
                        order: {},
                        orderGoods: [],
                        reserveStart: "",
                        reserveEnd: "",
                        startDate: "",
                        endDate: "",
                        getthingByRidInfo: [],
                        checked: !1,
                        getList: [],
                        itemNumber: 0,
                        consumables: [],
                        cc: [],
                        aa: []
                    };
                },
                computed: {
                    sum: function() {
                        var e = this;
                        console.log("进入结算金额");
                        var t = 0, n = 0;
                        return this.getthingByRidInfo.forEach(function(r, o) {
                            console.log("item========", r), r.temp_num > 0 && (console.log("结算item.num", r.temp_num), 
                            console.log("结算item.item.spec_itemrice", r.price), n += r.temp_num * r.price, t = Number(Number(e.order.deposit) - Number(n)).toFixed(2), 
                            console.log("内部item", r, "he", t)), console.log("外部item", r);
                        }), t;
                    }
                },
                onLoad: function(e) {
                    this.options = e, console.log(e, "options", "this.checked=======", this.checked), 
                    this.id = e.id, this.store_id = e.store_id, this.roomid = e.roomid, this.getthingByRid();
                },
                onShow: function() {
                    o.default.releaseKey("submit"), this.getOrderDetail();
                },
                methods: {
                    notSubmit: function() {
                        var t = this;
                        e.navigateBack({
                            delta: 1
                        }), setTimeout(function() {
                            t.$sun.toast("退款总额小于0，不可申请");
                        }, 500);
                    },
                    numberChange: function(e, t) {
                        console.log("点击加减======", e, t), this.getthingByRid(t.temp_num, t.tid);
                    },
                    getweekday: function(e) {
                        var t = this;
                        return s(r.default.mark(function n() {
                            var o, a;
                            return r.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return o = new Array("日", "一", "二", "三", "四", "五", "六"), a = o[new Date(e).getDay()], 
                                    t.startDate = a, console.log("week===========", a), n.abrupt("return", a);

                                  case 5:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    getweekday2: function(e) {
                        var t = this;
                        return s(r.default.mark(function n() {
                            var o, a;
                            return r.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return o = new Array("日", "一", "二", "三", "四", "五", "六"), a = o[new Date(e).getDay()], 
                                    console.log("week===========", a), t.endDate = a, n.abrupt("return", a);

                                  case 5:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    confirms: function() {
                        var e = this;
                        o.default.uniDoFunc({
                            key: "submit",
                            success: function() {
                                var t = s(r.default.mark(function t() {
                                    return r.default.wrap(function(t) {
                                        while (1) switch (t.prev = t.next) {
                                          case 0:
                                            o.default.lockKey("submit"), console.log("防抖... 在事件触发前连续点击事件会重新计时"), e.sure();

                                          case 3:
                                          case "end":
                                            return t.stop();
                                        }
                                    }, t);
                                }));
                                function n() {
                                    return t.apply(this, arguments);
                                }
                                return n;
                            }()
                        });
                    },
                    sure: function() {
                        var t = this;
                        return s(r.default.mark(function n() {
                            var a, i, s;
                            return r.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    for (t.getthingByRid(), t.getthingByRidInfo = t.getthingByRidInfo.filter(function(e) {
                                        return console.log("x============", e, "0" != e.temp_num, parseInt(e.temp_num), e.temp_num), 
                                        0 != parseInt(e.temp_num);
                                    }), console.log("点击确定退房============", t.getthingByRidInfo), a = 0; a < t.getthingByRidInfo.length; a++) i = {}, 
                                    i["tid"] = t.getthingByRidInfo[a].tid, i["less_num"] = t.getthingByRidInfo[a].temp_num, 
                                    i["less_price"] = t.getthingByRidInfo[a].price, t.consumables[a] = i, console.log("consumablesaaaaaaaa=====", t.consumables);
                                    return n.next = 6, t.$http({
                                        url: t.$api.apply_consume_thing,
                                        method: "POST",
                                        data: {
                                            order_id: t.id,
                                            list: 1 == t.checked ? t.consumables : ""
                                        }
                                    });

                                  case 6:
                                    s = n.sent, 0 == s.errno ? (console.log("成功==========="), e.navigateBack({
                                        delta: 1
                                    }), setTimeout(function() {
                                        t.$sun.toast(s.message);
                                    }, 500)) : (console.log("失败==========="), e.navigateBack({
                                        delta: 1
                                    }), setTimeout(function() {
                                        t.$sun.toast(s.message);
                                    }, 500), o.default.releaseKey("submit"));

                                  case 8:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    hotelRoom: function() {
                        var e = this;
                        return s(r.default.mark(function t() {
                            var n;
                            return r.default.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, e.$http({
                                        url: e.$api.room_info,
                                        data: {
                                            id: e.roomid,
                                            store_id: e.store_id
                                        }
                                    });

                                  case 2:
                                    n = t.sent, 0 == n.errno && (e.roomInfo = n.data.room);

                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    add: function(e) {
                        var t = this;
                        return s(r.default.mark(function n() {
                            return r.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    1 == t.checked ? e.temp_num < e.num ? (console.log("num===========", e.temp_num), 
                                    e.temp_num++, console.log(e.temp_num, "this.nums")) : t.$sun.toast("库存为" + e.num) : t.$sun.toast("请打开开关！");

                                  case 1:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    jian: function(e) {
                        var t = this;
                        return s(r.default.mark(function n() {
                            return r.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    1 == t.checked ? 0 == e.temp_num ? t.$sun.toast("最低数量0") : (e.temp_num--, console.log(e.temp_num, "this.nums", e)) : t.$sun.toast("请打开开关！");

                                  case 1:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    getthingByRid: function(e, t) {
                        var n = this;
                        return s(r.default.mark(function o() {
                            var a;
                            return r.default.wrap(function(r) {
                                while (1) switch (r.prev = r.next) {
                                  case 0:
                                    return n.itemNumber = e, console.log("退房消耗品传值数量=======================", e, "itemid", t, "this.itemNumber=i", n.itemNumber), 
                                    r.next = 4, n.$http({
                                        url: n.$api.getthing_by_rid,
                                        data: {
                                            rid: n.roomid
                                        }
                                    });

                                  case 4:
                                    a = r.sent, 0 == a.errno && (n.getthingByRidInfo = a.data, console.log("this.getthingByRidInfo", n.getthingByRidInfo));

                                  case 6:
                                  case "end":
                                    return r.stop();
                                }
                            }, o);
                        }))();
                    },
                    getOrderDetail: function() {
                        var e = this;
                        return s(r.default.mark(function t() {
                            var n, o, a;
                            return r.default.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                  case 0:
                                    return console.log("进入订单详情==============", e.id), n = getCurrentPages(), o = n[n.length - 2], 
                                    o.$vm.options.index = e.options.index, t.next = 6, e.$http({
                                        url: e.$api.hotel_order_info,
                                        data: {
                                            id: e.id
                                        }
                                    });

                                  case 6:
                                    a = t.sent, 0 == a.errno && (e.order = a.data, e.orderGoods = a.data.goods, e.reserveStart = a.data.reserve_start, 
                                    e.reserveEnd = a.data.reserve_end, e.getweekday(e.reserveStart), e.getweekday2(e.reserveEnd), 
                                    console.log("this.reserveStart", e.reserveStart, "this.reserveEnd", e.reserveEnd));

                                  case 8:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    switch1Change: function(e) {
                        console.log("switch1 发生 change 事件，携带值为", e.target.value), this.checked = e.target.value, 
                        this.checked, console.log("this.checked===========", this.checked);
                    }
                }
            };
            t.default = u;
        }).call(this, n("543d")["default"]);
    },
    "8cd2": function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("38be"), o = n.n(r);
        for (var a in r) "default" !== a && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(a);
        t["default"] = o.a;
    },
    "989c": function(e, t, n) {},
    bf43: function(e, t, n) {
        "use strict";
        var r;
        n.d(t, "b", function() {
            return o;
        }), n.d(t, "c", function() {
            return a;
        }), n.d(t, "a", function() {
            return r;
        });
        var o = function() {
            var e = this, t = e.$createElement, n = (e._self._c, e.reserveStart.split("-")), r = e.reserveStart.split("-"), o = e.reserveEnd.split("-"), a = e.reserveEnd.split("-");
            e.$mp.data = Object.assign({}, {
                $root: {
                    g0: n,
                    g1: r,
                    g2: o,
                    g3: a
                }
            });
        }, a = [];
    },
    c4ca: function(e, t, n) {
        "use strict";
        (function(e) {
            n("cee1");
            r(n("66fd"));
            var t = r(n("232f"));
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            e(t.default);
        }).call(this, n("543d")["createPage"]);
    },
    cf74: function(e, t, n) {
        "use strict";
        var r = n("989c"), o = n.n(r);
        o.a;
    }
}, [ [ "c4ca", "common/runtime", "common/vendor" ] ] ]);