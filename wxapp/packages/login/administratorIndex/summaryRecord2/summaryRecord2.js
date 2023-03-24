(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/login/administratorIndex/summaryRecord2/summaryRecord2" ], {
    "27ff": function(t, e, o) {},
    "5bb8": function(t, e, o) {
        "use strict";
        o.r(e);
        var i = o("a240"), n = o.n(i);
        for (var a in i) "default" !== a && function(t) {
            o.d(e, t, function() {
                return i[t];
            });
        }(a);
        e["default"] = n.a;
    },
    a240: function(t, e, o) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = n(o("a34a"));
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function a(t, e, o, i, n, a, r) {
                try {
                    var s = t[a](r), l = s.value;
                } catch (c) {
                    return void o(c);
                }
                s.done ? e(l) : Promise.resolve(l).then(i, n);
            }
            function r(t) {
                return function() {
                    var e = this, o = arguments;
                    return new Promise(function(i, n) {
                        var r = t.apply(e, o);
                        function s(t) {
                            a(r, i, n, s, l, "next", t);
                        }
                        function l(t) {
                            a(r, i, n, s, l, "throw", t);
                        }
                        s(void 0);
                    });
                };
            }
            var s = {
                data: function() {
                    var t = this.getDate({
                        format: !0
                    });
                    return {
                        qiehuanss: this.$img.qiehuans,
                        deduction: {},
                        list: [],
                        data2: [ "线上消费", "线下消费" ],
                        active: 0,
                        money: this.$img.money,
                        money2: this.$img.money2,
                        date: t,
                        yeartime2: t.split("-")[0],
                        yeartime: t.split("-")[0],
                        monthtime: t.split("-")[1],
                        day: t.split("-")[2],
                        fbj12: this.$img.fbj12,
                        arrow: this.$img.arrow,
                        indexarr3: [ {
                            title: "年统计",
                            type: 1
                        }, {
                            title: "月统计",
                            type: 2
                        } ],
                        currentIndex: 0,
                        storeLogo: "",
                        storeName: "",
                        storeLogo2: "",
                        storeName2: "",
                        type: "",
                        storeId: ""
                    };
                },
                mounted: function() {},
                computed: {
                    startDate: function() {
                        return this.getDate("start");
                    },
                    endDate: function() {
                        return this.getDate("end");
                    }
                },
                onLoad: function(t) {
                    this.type = t.type, this.storeName2 = t.storeName, this.storeLogo2 = t.storeLogo, 
                    this.storeId = t.storeId, console.log("this.type", this.type, this.options), this.storeLists();
                },
                onShow: function() {
                    var t = getCurrentPages(), e = t[t.length - 1];
                    void 0 == e.data.storeId || "" == e.data.storeId || (this.storeId = e.data.storeId, 
                    this.storeLogo = e.data.storeLogo, this.storeName = e.data.storeName, console.log("storeId", this.storeId, this.storeLogo, this.storeName)), 
                    this.mescroll.resetUpScroll();
                },
                methods: {
                    storeLists: function() {
                        var t = this;
                        return r(i.default.mark(function e() {
                            var o;
                            return i.default.wrap(function(e) {
                                while (1) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, t.$http({
                                        url: t.$api.storeList,
                                        data: {
                                            uid: wx.getStorageSync("login").id
                                        }
                                    });

                                  case 2:
                                    o = e.sent, 0 == o.errno && (t.storeLogo = o.data[0].store_logo, t.storeName = o.data[0].store_name, 
                                    t.storeidsse = o.data[0].id, console.log("门店列表", o, t.storeLogo, t.storeName, t.storeidsse), 
                                    t.mescroll.resetUpScroll());

                                  case 4:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    upCallback: function(t) {
                        var e = this;
                        return r(i.default.mark(function o() {
                            var n;
                            return i.default.wrap(function(o) {
                                while (1) switch (o.prev = o.next) {
                                  case 0:
                                    return o.next = 2, e.$http({
                                        url: e.$api.statist_list,
                                        data: {
                                            page: t.num,
                                            psize: 10,
                                            store_id: e.storeId ? e.storeId : e.storeidsse,
                                            month: 0 == e.currentIndex ? e.yeartime + "-" + e.monthtime : "",
                                            day: 1 == e.currentIndex ? e.date : "",
                                            cate_type: e.active + 1
                                        }
                                    });

                                  case 2:
                                    n = o.sent, console.log("分页分页d-----------------------------------------------"), 
                                    0 == n.errno ? (console.log("代充记录", n.data), e.mescroll.endByPage(n.data.list.length, n.totalPage), 
                                    1 == t.num && (e.list = []), e.deduction = n.data, e.list = e.list.concat(n.data.list), 
                                    console.log(e.list, "list", e.storeidsse)) : e.list = [];

                                  case 5:
                                  case "end":
                                    return o.stop();
                                }
                            }, o);
                        }))();
                    },
                    qhStore: function() {
                        t.navigateTo({
                            url: "/packages/login/administratorIndex/storeSwitching"
                        });
                    },
                    moneydata: function(t) {
                        this.active = t, console.log("this.active", this.active), this.mescroll.resetUpScroll();
                    },
                    moneydata2: function(t) {
                        this.active = t, console.log("this.active", this.active), this.mescroll.resetUpScroll();
                    },
                    bindDateChange: function(t) {
                        console.log("选中的值", t), this.date = t.target.value, this.yeartime2 = this.date.split("-")[0], 
                        console.log("截取的值", this.date.split("-"), this.yeartime), this.upCallback(this.mescroll);
                    },
                    bindDateChange2: function(t) {
                        this.date = t.target.value, this.yeartime = this.date.split("-")[0], this.monthtime = this.date.split("-")[1], 
                        this.day = this.date.split("-")[2], console.log("截取的值", this.date.split("-"), this.yeartime), 
                        this.upCallback(this.mescroll);
                    },
                    getDate: function(t) {
                        var e = new Date(), o = e.getFullYear(), i = e.getMonth() + 1, n = e.getDate();
                        return "start" === t ? o -= 60 : "end" === t && (o += 2), i = i > 9 ? i : "0" + i, 
                        n = n > 9 ? n : "0" + n, "".concat(o, "-").concat(i, "-").concat(n);
                    },
                    navbarTapHandler: function(t) {
                        console.log("e1111111111111", t), this.currentIndex = t, this.mescroll.resetUpScroll();
                    },
                    detailRecord: function(e) {
                        1 == e.type && (console.log("item.rid", e.rid), t.navigateTo({
                            url: "/packages/login/Administrator-Index/DetailedRecord/DetailedRecord?id=" + e.rid + "&plugin_type=" + e.plugin_type
                        }), console.log("plugin_type =====", e.plugin_type)), 2 == e.type && (console.log("item.rid", e.rid), 
                        t.navigateTo({
                            url: "/packages/login/Administrator-Index/RechargeRecord/detailedRecord2/detailedRecord2?id=" + e.rid
                        })), 3 == e.type && (console.log("item.id", e.id), t.navigateTo({
                            url: "/packages/login/koukuanDetail/koukuanDetail?id=" + e.id
                        })), 4 == e.type && (console.log("item.id", e.id), t.navigateTo({
                            url: "/packages/login/Administrator-Index/RechargeRecord/detailedRecord1/detailedRecord1?id=" + e.rid
                        }));
                    }
                }
            };
            e.default = s;
        }).call(this, o("543d")["default"]);
    },
    b8f7: function(t, e, o) {
        "use strict";
        o.d(e, "b", function() {
            return n;
        }), o.d(e, "c", function() {
            return a;
        }), o.d(e, "a", function() {
            return i;
        });
        var i = {
            sunuiTab: function() {
                return o.e("components/sunui-tab/sunui-tab").then(o.bind(null, "0244"));
            }
        }, n = function() {
            var t = this, e = t.$createElement;
            t._self._c;
        }, a = [];
    },
    c07c: function(t, e, o) {
        "use strict";
        var i = o("27ff"), n = o.n(i);
        n.a;
    },
    e53e: function(t, e, o) {
        "use strict";
        o.r(e);
        var i = o("b8f7"), n = o("5bb8");
        for (var a in n) "default" !== a && function(t) {
            o.d(e, t, function() {
                return n[t];
            });
        }(a);
        o("c07c");
        var r, s = o("f0c5"), l = Object(s["a"])(n["default"], i["b"], i["c"], !1, null, null, null, !1, i["a"], r);
        e["default"] = l.exports;
    },
    ee5d: function(t, e, o) {
        "use strict";
        (function(t) {
            o("cee1");
            i(o("66fd"));
            var e = i(o("e53e"));
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(e.default);
        }).call(this, o("543d")["createPage"]);
    }
}, [ [ "ee5d", "common/runtime", "common/vendor" ] ] ]);