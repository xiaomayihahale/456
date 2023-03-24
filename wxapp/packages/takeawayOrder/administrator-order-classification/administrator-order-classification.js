(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/takeawayOrder/administrator-order-classification/administrator-order-classification" ], {
    "20c0": function(t, e, s) {
        "use strict";
        s.r(e);
        var n = s("feba"), o = s.n(n);
        for (var a in n) "default" !== a && function(t) {
            s.d(e, t, function() {
                return n[t];
            });
        }(a);
        e["default"] = o.a;
    },
    2763: function(t, e, s) {
        "use strict";
        s.r(e);
        var n = s("83ec"), o = s("20c0");
        for (var a in o) "default" !== a && function(t) {
            s.d(e, t, function() {
                return o[t];
            });
        }(a);
        s("c4fd");
        var i, r = s("f0c5"), c = Object(r["a"])(o["default"], n["b"], n["c"], !1, null, null, null, !1, n["a"], i);
        e["default"] = c.exports;
    },
    "83ec": function(t, e, s) {
        "use strict";
        s.d(e, "b", function() {
            return o;
        }), s.d(e, "c", function() {
            return a;
        }), s.d(e, "a", function() {
            return n;
        });
        var n = {
            sunuiNavbar: function() {
                return s.e("components/sunui-navbar/sunui-navbar").then(s.bind(null, "6b73"));
            },
            mescrollUni: function() {
                return Promise.all([ s.e("common/vendor"), s.e("components/mescroll-uni/mescroll-uni") ]).then(s.bind(null, "afde"));
            },
            sunuiPopup: function() {
                return s.e("components/sunui-popup/sunui-popup").then(s.bind(null, "6cf4"));
            }
        }, o = function() {
            var t = this, e = t.$createElement, s = (t._self._c, t.__map(t.shopCartList, function(e, s) {
                var n = t.__get_orig(e), o = t.shopCartList.length > 0 && "" != t.shopCartList.length && e.store_id == t.stores ? t.gwcSumNumber && Number(t.gwcSumNumber) > 99 : null, a = t.shopCartList.length > 0 && "" != t.shopCartList.length && e.store_id == t.stores ? Number(t.sum).toFixed(2) : null;
                return {
                    $orig: n,
                    m0: o,
                    g0: a
                };
            })), n = Number(t.sum).toFixed(2);
            t.$mp.data = Object.assign({}, {
                $root: {
                    l0: s,
                    g1: n
                }
            });
        }, a = [];
    },
    c4fd: function(t, e, s) {
        "use strict";
        var n = s("cda9"), o = s.n(n);
        o.a;
    },
    cda9: function(t, e, s) {},
    e361: function(t, e, s) {
        "use strict";
        (function(t) {
            s("cee1");
            n(s("66fd"));
            var e = n(s("2763"));
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(e.default);
        }).call(this, s("543d")["createPage"]);
    },
    feba: function(t, e, s) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = o(s("a34a"));
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function a(t, e, s, n, o, a, i) {
                try {
                    var r = t[a](i), c = r.value;
                } catch (u) {
                    return void s(u);
                }
                r.done ? e(c) : Promise.resolve(c).then(n, o);
            }
            function i(t) {
                return function() {
                    var e = this, s = arguments;
                    return new Promise(function(n, o) {
                        var i = t.apply(e, s);
                        function r(t) {
                            a(i, n, o, r, c, "next", t);
                        }
                        function c(t) {
                            a(i, n, o, r, c, "throw", t);
                        }
                        r(void 0);
                    });
                };
            }
            var r = function() {
                Promise.all([ s.e("common/vendor"), s.e("components/cjnewTabbar") ]).then(function() {
                    return resolve(s("4d6f"));
                }.bind(null, s)).catch(s.oe);
            }, c = function() {
                s.e("components/QS-Navbar/QS-Navbar").then(function() {
                    return resolve(s("318c"));
                }.bind(null, s)).catch(s.oe);
            }, u = {
                components: {
                    "iew-tabbar": r,
                    QSNavbar: c
                },
                data: function() {
                    return {
                        storeListInfo: {},
                        scanCode: 2,
                        storeName: "",
                        stores: "",
                        actives: 0,
                        leixing: [ {
                            title: "到店"
                        }, {
                            title: "外卖"
                        } ],
                        navbarItems_1: [ {
                            type: "text",
                            text: "订单",
                            width: 20,
                            weight: "bold"
                        } ],
                        toplist2: [ {
                            title: "可不辣"
                        }, {
                            title: "香辣"
                        } ],
                        wmgwc: this.$img.wmgwc,
                        tabList: [ {
                            name: "销量",
                            sort: 1
                        }, {
                            name: "价格",
                            sort: 2
                        } ],
                        isAllChecked: !0,
                        tabIndex: 0,
                        shopCartList: [],
                        navIndex: 0,
                        adarr: {},
                        categoryList: [],
                        current: 0,
                        categoryid: 0,
                        list: [],
                        downOption: {
                            auto: !1
                        },
                        upOption: {
                            auto: !1
                        },
                        options: {},
                        hint: "",
                        stockNum: "",
                        personnelCode: ""
                    };
                },
                onLoad: function(t) {
                    this.options = t, console.log("onLoad时间下的options===========", this.options), this.stordIds = t.stordIds, 
                    this.placeOrder = t.placeOrder, console.log("byseatInfoID-加菜id======---", this.byseatInfoID, "this.placeOrder标识是否是下单---", this.placeOrder, "this.stordIds=传过来的门店id", this.stordIds), 
                    this.byseatInfoID = wx.getStorageSync("storeEatOrderID"), this.scanCode = t.scanCode, 
                    this.personnelCode = t.personnelCode, t.actives && (this.actives = t.actives), this.isAllChecked = !0;
                },
                onShow: function() {
                    1 != this.scanCode && 1 != this.personnelCode || this.storeLists(), this.goodsfen(), 
                    this.stores = t.getStorageSync("storeEatNexts"), this.storeName = t.getStorageSync("storeEatNextNames"), 
                    this.stores || this.store2(), this.getSystem(), this.getShopCart();
                },
                computed: {
                    sum: function() {
                        var t = 0;
                        return this.shopCartList.forEach(function(e) {
                            1 == e.checked && (t += e.num * e.spec_price);
                        }), t;
                    },
                    numa: function() {
                        var t = 0;
                        return this.shopCartList.forEach(function(e) {
                            1 == e.checked && (t += Number(e.num));
                        }), t;
                    },
                    gwcSumNumber: function() {
                        var t = 0;
                        return this.shopCartList.forEach(function(e) {
                            t += parseInt(e.num);
                        }), t;
                    },
                    stocks: function() {
                        var t = this, e = 0;
                        return this.stockNum = "", this.shopCartList.forEach(function(e) {
                            1 == e.checked && (parseInt(e.stock) < parseInt(e.num) ? (console.log("库存小于数量"), 
                            t.stockNum += !1, t.hint = e.foods_name + "   库存为" + e.stock) : (console.log("库存大于等于数量"), 
                            t.stockNum += !0));
                        }), e;
                    }
                },
                methods: {
                    add: function(e) {
                        var s = this;
                        return i(n.default.mark(function o() {
                            var a;
                            return n.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    if (!(parseInt(e.stock) <= parseInt(e.num))) {
                                        n.next = 4;
                                        break;
                                    }
                                    s.$sun.toast("库存不足"), n.next = 10;
                                    break;

                                  case 4:
                                    return e.num++, console.log(e.num, "this.nums"), n.next = 8, s.$http({
                                        url: s.$api.add_car,
                                        data: {
                                            store_id: t.getStorageSync("storeEatNexts"),
                                            uid: wx.getStorageSync("login").id,
                                            id: e.goods_id,
                                            spec: e.spec,
                                            num: 1,
                                            type: 1,
                                            car_type: 1
                                        }
                                    });

                                  case 8:
                                    a = n.sent, 0 == a.errno && console.log("p===", e);

                                  case 10:
                                  case "end":
                                    return n.stop();
                                }
                            }, o);
                        }))();
                    },
                    jian: function(t) {
                        var e = this;
                        return i(n.default.mark(function s() {
                            var o;
                            return n.default.wrap(function(s) {
                                while (1) switch (s.prev = s.next) {
                                  case 0:
                                    if (1 != t.num) {
                                        s.next = 4;
                                        break;
                                    }
                                    e.$sun.toast("最低数量1"), s.next = 10;
                                    break;

                                  case 4:
                                    return t.num--, console.log(t.num, "this.nums"), s.next = 8, e.$http({
                                        url: e.$api.del_car_num,
                                        data: {
                                            id: t.id,
                                            num: t.num,
                                            car_type: 1
                                        }
                                    });

                                  case 8:
                                    o = s.sent, o.errno;

                                  case 10:
                                  case "end":
                                    return s.stop();
                                }
                            }, s);
                        }))();
                    },
                    numberChange: function(e, s, o) {
                        var a = this;
                        return i(n.default.mark(function i() {
                            var r, c, u, d, l, h;
                            return n.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    if (console.log("=========购物车数量加减", e, s, o), r = o, 0 != e) {
                                        n.next = 11;
                                        break;
                                    }
                                    return console.log("进入删除购物车接口==============="), n.next = 6, a.$http({
                                        url: a.$api.del_car,
                                        data: {
                                            list: [ r ]
                                        }
                                    });

                                  case 6:
                                    c = n.sent, a.$sun.toast(c.message), 0 == c.errno && (a.isAllChecked = !1, a.getShopCart()), 
                                    n.next = 19;
                                    break;

                                  case 11:
                                    for (console.log("增加购物车接口==============="), u = a.shopCartList, d = 0, l = 0; l < u.length; l++) a.shopCartList[l].goods_id == s && (console.log("this.shopCartList[i].goods_id", a.shopCartList[l].goods_id, "this.shopCartList[i].goods_id==可以", s, e), 
                                    u[l].num = e, d = u[l].num), console.log("增加数-========量", d);
                                    return n.next = 17, a.$http({
                                        url: a.$api.add_car,
                                        data: {
                                            store_id: t.getStorageSync("storeEatNexts"),
                                            uid: wx.getStorageSync("login").id,
                                            id: s,
                                            spec: a.pushName,
                                            num: d,
                                            type: 1,
                                            car_type: 1
                                        }
                                    });

                                  case 17:
                                    h = n.sent, h.errno;

                                  case 19:
                                  case "end":
                                    return n.stop();
                                }
                            }, i);
                        }))();
                    },
                    storeLists: function() {
                        var t = this;
                        return i(n.default.mark(function e() {
                            var s;
                            return n.default.wrap(function(e) {
                                while (1) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, t.$http({
                                        url: t.$api.getSingleStore,
                                        data: {
                                            store_id: t.stordIds
                                        }
                                    });

                                  case 2:
                                    s = e.sent, 0 == s.errno && (t.storeListInfo = s.data, wx.setStorageSync("storeEatNextNames", t.storeListInfo.store_name), 
                                    console.log("门店id", t.storeListInfo, "将门店id存缓存================", t.storeListInfo.store_name));

                                  case 4:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    store2: function() {
                        this.$refs.pops.show({
                            style: "width:642rpx; height:auto;background-color: #FFFFFF;",
                            anim: "center",
                            shadeClose: !1,
                            topclose: !1
                        });
                    },
                    wansh: function() {
                        this.$refs.pops.close(), this.$sun.navGo("/packages/takeawayOrder/NearbyStores/NearbyStores", {
                            indexs: 2
                        });
                    },
                    store: function() {
                        this.$sun.navGo("/packages/takeawayOrder/NearbyStores/NearbyStores", {
                            indexs: 2
                        });
                    },
                    moneydata1: function(t) {
                        this.actives = t;
                    },
                    getShopCart: function() {
                        var e = this;
                        return i(n.default.mark(function s() {
                            var o;
                            return n.default.wrap(function(s) {
                                while (1) switch (s.prev = s.next) {
                                  case 0:
                                    return s.next = 2, e.$http({
                                        url: e.$api.my_car,
                                        data: {
                                            uid: wx.getStorageSync("login").id,
                                            car_type: 1,
                                            store_id: t.getStorageSync("storeEatNexts")
                                        }
                                    });

                                  case 2:
                                    o = s.sent, e.shopCartList = o.data, console.log("购物车this.shopCartList===============啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊", e.shopCartList), 
                                    0 == o.errno ? (e.isAllChecked = !0, o.data.find(function(t) {
                                        e.$set(t, "checked", !0);
                                    })) : e.$sun.toast(o.message);

                                  case 6:
                                  case "end":
                                    return s.stop();
                                }
                            }, s);
                        }))();
                    },
                    changeAll: function(t) {
                        var e = this;
                        this.isAllChecked = 1 != this.isAllChecked, this.shopCartList.find(function(t) {
                            1 == e.isAllChecked ? t.checked = !0 : t.checked = !1;
                        });
                    },
                    handleClearShop: function() {
                        var e = this, s = 0;
                        this.shopCartList.find(function(t) {
                            1 == t.checked && ++s;
                        }), 0 != s ? t.showModal({
                            confirmText: "确定",
                            content: "确定清空购物车么???",
                            title: "清空购物车",
                            success: function() {
                                var t = i(n.default.mark(function t(s) {
                                    var o, a, i, r, c;
                                    return n.default.wrap(function(t) {
                                        while (1) switch (t.prev = t.next) {
                                          case 0:
                                            if (!s.confirm) {
                                                t.next = 11;
                                                break;
                                            }
                                            for (o = e.shopCartList, a = [], i = 0, r = o.length; i < r; i++) o[i].checked && a.push(o[i].id);
                                            return t.next = 6, e.$http({
                                                url: e.$api.del_car,
                                                data: {
                                                    list: a
                                                }
                                            });

                                          case 6:
                                            c = t.sent, e.$sun.toast(c.message), 0 == c.errno && e.getShopCart(), o.length <= 0 && (e.isAllChecked = !1), 
                                            e.$refs.pop.close();

                                          case 11:
                                          case "end":
                                            return t.stop();
                                        }
                                    }, t);
                                }));
                                function s(e) {
                                    return t.apply(this, arguments);
                                }
                                return s;
                            }()
                        }) : this.$sun.toast("暂无选中商品");
                    },
                    checkeBox: function(t) {
                        this.shopCartList.find(function(e) {
                            t == e.id && (e.checked ? e.checked = !1 : e.checked = !0);
                        });
                        var e = 0;
                        this.shopCartList.find(function(t) {
                            0 == t.checked && ++e;
                        }), this.isAllChecked = !(e > 0);
                    },
                    cauSum: function() {
                        if (console.log("this.stockNum.indexOf(false)", this.stockNum.indexOf(!1)), -1 == this.stockNum.indexOf(!1)) {
                            this.$refs.pop.close();
                            var e = 0, s = 0;
                            if (this.shopCartList.find(function(t) {
                                1 == t.checked && ++e, ++s;
                            }), 0 != e && 0 != s && e == s && (this.isAllChecked = !0), this.shopCartList.length && 0 != e) {
                                var n = new Array();
                                this.shopCartList.find(function(t) {
                                    t.checked && n.push(t);
                                }), 1 == this.scanCode ? (t.navigateTo({
                                    url: "/packages/takeawayOrder/scanCodeOder/scanCodeOder?type=2&actives=" + this.actives + "&gwcSum=" + this.sum + "&byseatInfoID=" + this.byseatInfoID + "&placeOrder=" + this.placeOrder + "&scanCode=1"
                                }), console.log("|this.options========扫码进入", this.options, "this.actives", this.actives), 
                                0 == this.actives ? t.setNavigationBarTitle({
                                    title: "门店取餐"
                                }) : t.setNavigationBarTitle({
                                    title: "外卖配送"
                                }), console.log("扫码进入------this.actives", this.actives, this.scanCode, "this.placeOrder 1则标识是否为第一次下单---", this.placeOrder, "this.byseatInfoID====", this.byseatInfoID)) : 1 == this.options.personnelCode ? (console.log("进入员工代下单============="), 
                                t.navigateTo({
                                    url: "/packages/takeawayOrder/scanCodeOder/scanCodeOder?type=2&actives=" + this.actives + "&gwcSum=" + this.sum + "&byseatInfoID=" + this.byseatInfoID + "&placeOrder=" + this.placeOrder + "&personnelCode=1&userMid=" + this.options.userMid + "&orderPerType=" + this.options.orderPerType
                                }), console.log("|this.options========扫码进入", this.options, "this.actives", this.actives), 
                                0 == this.actives ? t.setNavigationBarTitle({
                                    title: "门店取餐"
                                }) : t.setNavigationBarTitle({
                                    title: "外卖配送"
                                }), console.log("扫码进入------this.actives", this.actives, this.scanCode, "this.placeOrder 1则标识是否为第一次下单---", this.placeOrder, "this.byseatInfoID====", this.byseatInfoID)) : (t.navigateTo({
                                    url: "/packages/takeawayOrder/confirm-order2/confirm-order2?type=2&actives=" + this.actives + "&gwcSum=" + this.sum + "&scanCode=2"
                                }), 0 == this.actives ? t.setNavigationBarTitle({
                                    title: "门店取餐"
                                }) : t.setNavigationBarTitle({
                                    title: "外卖配送"
                                }), console.log("非扫码进入------", this.scanCode));
                            }
                        } else console.log("this.hint提示语=====", this.hint), this.$sun.toast(this.hint);
                    },
                    getSystem: function() {
                        var t = this;
                        return i(n.default.mark(function e() {
                            var s;
                            return n.default.wrap(function(e) {
                                while (1) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, t.$http({
                                        url: t.$api.foodsSystem
                                    });

                                  case 2:
                                    s = e.sent, 0 == s.errno && (t.adarr = s.data);

                                  case 4:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    boxs: function(t, e) {
                        this.tabIndex = t, console.log("this.tabIndex", this.tabIndex);
                    },
                    gwc: function() {
                        this.getShopCart(), this.$refs.pop.show({
                            style: "background-color:#fff;width:100%;height:auto;overflow-x:auto;",
                            anim: "bottom",
                            position: "bottom",
                            topclose: !1,
                            titleStyle: "position: fixed;width: 100%;background: #fff;z-index: 999;border-bottom:1rpx solid #f7f7f7;"
                        });
                    },
                    getChange: function(t) {
                        this.navIndex = t, this.mescroll.resetUpScroll();
                    },
                    goodsfen: function() {
                        var e = this;
                        return i(n.default.mark(function s() {
                            var o, a;
                            return n.default.wrap(function(s) {
                                while (1) switch (s.prev = s.next) {
                                  case 0:
                                    return s.next = 2, e.$http({
                                        url: e.$api.cateList,
                                        data: {
                                            store_id: t.getStorageSync("storeEatNexts") ? t.getStorageSync("storeEatNexts") : ""
                                        }
                                    });

                                  case 2:
                                    if (o = s.sent, e.categoryList = o.data, !e.categoryid) {
                                        s.next = 15;
                                        break;
                                    }
                                    a = 0;

                                  case 6:
                                    if (!(a < e.categoryList.length)) {
                                        s.next = 13;
                                        break;
                                    }
                                    if (e.categoryid != e.categoryList[a].id) {
                                        s.next = 10;
                                        break;
                                    }
                                    return e.current = a, s.abrupt("break", 13);

                                  case 10:
                                    a++, s.next = 6;
                                    break;

                                  case 13:
                                    s.next = 16;
                                    break;

                                  case 15:
                                    e.categoryList.length && (e.categoryid = e.categoryList[0].id);

                                  case 16:
                                    e.$nextTick(function() {
                                        e.mescroll.resetUpScroll();
                                    });

                                  case 17:
                                  case "end":
                                    return s.stop();
                                }
                            }, s);
                        }))();
                    },
                    upCallback: function(e) {
                        var s = this;
                        return i(n.default.mark(function o() {
                            var a;
                            return n.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, s.$http({
                                        url: s.$api.cate_foods,
                                        data: {
                                            page: e.num,
                                            psize: 10,
                                            uid: wx.getStorageSync("login").id,
                                            is_exchange: 1,
                                            cid: s.categoryid,
                                            store_id: t.getStorageSync("storeEatNexts") ? t.getStorageSync("storeEatNexts") : "",
                                            goods_name: "",
                                            sort: s.tabList[s.navIndex].sort
                                        }
                                    });

                                  case 2:
                                    a = n.sent, 0 == a.errno ? (console.log("代充记录", a.data), s.mescroll.endByPage(a.data.list.length, a.totalPage), 
                                    1 == e.num && (s.list = []), s.deduction = a.data, s.list = s.list.concat(a.data.list)) : s.list = [];

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, o);
                        }))();
                    },
                    query: function() {
                        this.$refs.navbar.getQuery(function(t) {});
                    },
                    box: function(t) {
                        this.current = t, this.categoryid = this.categoryList[this.current].id, this.goodsfen(), 
                        this.mescroll.resetUpScroll();
                    },
                    toDetails: function(e) {
                        1 == this.scanCode ? (t.navigateTo({
                            url: "/packages/takeawayOrder/detials/detials?id=" + e.id + "&scanCode=1&placeOrder=" + this.placeOrder + "&stordIds=" + this.stordIds + "&actives=" + this.actives
                        }), t.setNavigationBarTitle({
                            title: e.foods_name
                        })) : 1 == this.options.personnelCode ? (console.log("进入员工代下单============="), t.navigateTo({
                            url: "/packages/takeawayOrder/detials/detials?id=" + e.id + "&personnelCode=1&placeOrder=" + this.placeOrder + "&stordIds=" + this.stordIds + "&userMid=" + this.options.userMid + "&orderPerType=" + this.options.orderPerType + "&actives=" + this.actives
                        }), t.setNavigationBarTitle({
                            title: e.foods_name
                        })) : (t.navigateTo({
                            url: "/packages/takeawayOrder/detials/detials?id=" + e.id + "&scanCode=2&actives=" + this.actives
                        }), console.log("跳转传接口actives========", this.actives), t.setNavigationBarTitle({
                            title: e.foods_name
                        }));
                    }
                }
            };
            e.default = u;
        }).call(this, s("543d")["default"]);
    }
}, [ [ "e361", "common/runtime", "common/vendor" ] ] ]);