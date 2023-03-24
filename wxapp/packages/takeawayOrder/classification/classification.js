(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/takeawayOrder/classification/classification" ], {
    "3de5": function(t, e, s) {
        "use strict";
        var n = s("b53b"), i = s.n(n);
        i.a;
    },
    b53b: function(t, e, s) {},
    bc25: function(t, e, s) {
        "use strict";
        s.d(e, "b", function() {
            return i;
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
        }, i = function() {
            var t = this, e = t.$createElement, s = (t._self._c, t.__map(t.shopCartList, function(e, s) {
                var n = t.__get_orig(e), i = t.shopCartList.length > 0 && "" != t.shopCartList.length && e.store_id == t.stores ? t.gwcSumNumber && Number(t.gwcSumNumber) > 99 : null, a = t.shopCartList.length > 0 && "" != t.shopCartList.length && e.store_id == t.stores ? Number(t.sum).toFixed(2) : null;
                return {
                    $orig: n,
                    m0: i,
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
    c263: function(t, e, s) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = i(s("a34a"));
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function a(t, e, s, n, i, a, r) {
                try {
                    var o = t[a](r), c = o.value;
                } catch (u) {
                    return void s(u);
                }
                o.done ? e(c) : Promise.resolve(c).then(n, i);
            }
            function r(t) {
                return function() {
                    var e = this, s = arguments;
                    return new Promise(function(n, i) {
                        var r = t.apply(e, s);
                        function o(t) {
                            a(r, n, i, o, c, "next", t);
                        }
                        function c(t) {
                            a(r, n, i, o, c, "throw", t);
                        }
                        o(void 0);
                    });
                };
            }
            var o = function() {
                Promise.all([ s.e("common/vendor"), s.e("components/cjnewTabbar") ]).then(function() {
                    return resolve(s("4d6f"));
                }.bind(null, s)).catch(s.oe);
            }, c = function() {
                s.e("components/QS-Navbar/QS-Navbar").then(function() {
                    return resolve(s("318c"));
                }.bind(null, s)).catch(s.oe);
            }, u = {
                components: {
                    "iew-tabbar": o,
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
                        personnelCode: "",
                        uid: ""
                    };
                },
                onLoad: function(t) {
                    this.handleLogin(), this.options = t, this.stordIds = t.stordIds, this.placeOrder = t.placeOrder, 
                    this.byseatInfoID = wx.getStorageSync("storeEatOrderID"), this.scanCode = t.scanCode, 
                    this.personnelCode = t.personnelCode, t.actives && (this.actives = t.actives), this.isAllChecked = !0;
                },
                onShow: function() {
                    this.isFirst = t.getStorageSync("uid").isFirst, this.uid = t.getStorageSync("uid").id, 
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
                        return r(n.default.mark(function i() {
                            var a;
                            return n.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    if (!(parseInt(e.stock) <= parseInt(e.num))) {
                                        n.next = 4;
                                        break;
                                    }
                                    s.$sun.toast("库存不足"), n.next = 9;
                                    break;

                                  case 4:
                                    return e.num++, n.next = 7, s.$http({
                                        url: s.$api.add_car,
                                        data: {
                                            store_id: t.getStorageSync("storeEatNexts"),
                                            uid: t.getStorageSync("uid").id,
                                            id: e.goods_id,
                                            spec: e.spec,
                                            num: 1,
                                            type: 1,
                                            car_type: 1
                                        }
                                    });

                                  case 7:
                                    a = n.sent, a.errno;

                                  case 9:
                                  case "end":
                                    return n.stop();
                                }
                            }, i);
                        }))();
                    },
                    jian: function(t) {
                        var e = this;
                        return r(n.default.mark(function s() {
                            var i;
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
                                    i = s.sent, i.errno;

                                  case 10:
                                  case "end":
                                    return s.stop();
                                }
                            }, s);
                        }))();
                    },
                    numberChange: function(e, s, i) {
                        var a = this;
                        return r(n.default.mark(function r() {
                            var o, c, u, d, h, l;
                            return n.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    if (o = i, 0 != e) {
                                        n.next = 9;
                                        break;
                                    }
                                    return n.next = 4, a.$http({
                                        url: a.$api.del_car,
                                        data: {
                                            list: [ o ]
                                        }
                                    });

                                  case 4:
                                    c = n.sent, a.$sun.toast(c.message), 0 == c.errno && (a.isAllChecked = !1, a.getShopCart()), 
                                    n.next = 16;
                                    break;

                                  case 9:
                                    for (u = a.shopCartList, d = 0, h = 0; h < u.length; h++) a.shopCartList[h].goods_id == s && (u[h].num = e, 
                                    d = u[h].num);
                                    return n.next = 14, a.$http({
                                        url: a.$api.add_car,
                                        data: {
                                            store_id: t.getStorageSync("storeEatNexts"),
                                            uid: t.getStorageSync("uid").id,
                                            id: s,
                                            spec: a.pushName,
                                            num: d,
                                            type: 1,
                                            car_type: 1
                                        }
                                    });

                                  case 14:
                                    l = n.sent, l.errno;

                                  case 16:
                                  case "end":
                                    return n.stop();
                                }
                            }, r);
                        }))();
                    },
                    storeLists: function() {
                        var t = this;
                        return r(n.default.mark(function e() {
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
                                    s = e.sent, 0 == s.errno && (t.storeListInfo = s.data, console.log("门店id", t.storeListInfo, "将门店id存缓存================", t.storeListInfo.store_name));

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
                    wanshs: function() {
                        this.$refs.popNew.close(), t.navigateTo({
                            url: "/packages/index/my/editProfile"
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
                        return r(n.default.mark(function s() {
                            var i;
                            return n.default.wrap(function(s) {
                                while (1) switch (s.prev = s.next) {
                                  case 0:
                                    return s.next = 2, e.$http({
                                        url: e.$api.my_car,
                                        data: {
                                            uid: t.getStorageSync("uid").id,
                                            car_type: 1,
                                            store_id: t.getStorageSync("storeEatNexts")
                                        }
                                    });

                                  case 2:
                                    i = s.sent, e.shopCartList = i.data, 0 == i.errno ? (e.isAllChecked = !0, i.data.find(function(t) {
                                        e.$set(t, "checked", !0);
                                    })) : e.$sun.toast(i.message);

                                  case 5:
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
                                var t = r(n.default.mark(function t(s) {
                                    var i, a, r, o, c;
                                    return n.default.wrap(function(t) {
                                        while (1) switch (t.prev = t.next) {
                                          case 0:
                                            if (!s.confirm) {
                                                t.next = 11;
                                                break;
                                            }
                                            for (i = e.shopCartList, a = [], r = 0, o = i.length; r < o; r++) i[r].checked && a.push(i[r].id);
                                            return t.next = 6, e.$http({
                                                url: e.$api.del_car,
                                                data: {
                                                    list: a
                                                }
                                            });

                                          case 6:
                                            c = t.sent, e.$sun.toast(c.message), 0 == c.errno && e.getShopCart(), i.length <= 0 && (e.isAllChecked = !1), 
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
                        var e = wx.getStorageSync("indexUrl");
                        if (0 != this.isFirst) if (this.uid && 1 != e) this.new2(); else if (this.handleLogin(), 
                        -1 == this.stockNum.indexOf(!1)) {
                            this.$refs.pop.close();
                            var s = 0, n = 0;
                            if (this.shopCartList.find(function(t) {
                                1 == t.checked && ++s, ++n;
                            }), 0 != s && 0 != n && s == n && (this.isAllChecked = !0), this.shopCartList.length && 0 != s) {
                                var i = new Array();
                                this.shopCartList.find(function(t) {
                                    t.checked && i.push(t);
                                }), 1 == this.scanCode ? (t.navigateTo({
                                    url: "/packages/takeawayOrder/scanCodeOder/scanCodeOder?type=2&actives=" + this.actives + "&gwcSum=" + this.sum + "&byseatInfoID=" + this.byseatInfoID + "&placeOrder=" + this.placeOrder + "&scanCode=1&orderPerType=1"
                                }), 0 == this.actives ? t.setNavigationBarTitle({
                                    title: "门店取餐"
                                }) : t.setNavigationBarTitle({
                                    title: "外卖配送"
                                })) : 1 == this.options.personnelCode ? (t.navigateTo({
                                    url: "/packages/takeawayOrder/scanCodeOder/scanCodeOder?type=2&actives=" + this.actives + "&gwcSum=" + this.sum + "&byseatInfoID=" + this.byseatInfoID + "&placeOrder=" + this.placeOrder + "&personnelCode=1&userMid=" + this.options.userMid + "&orderPerType=" + this.options.orderPerType
                                }), 0 == this.actives ? t.setNavigationBarTitle({
                                    title: "门店取餐"
                                }) : t.setNavigationBarTitle({
                                    title: "外卖配送"
                                })) : (t.navigateTo({
                                    url: "/packages/takeawayOrder/confirm-order2/confirm-order2?type=2&actives=" + this.actives + "&gwcSum=" + this.sum + "&scanCode=2"
                                }), 0 == this.actives ? t.setNavigationBarTitle({
                                    title: "门店取餐"
                                }) : t.setNavigationBarTitle({
                                    title: "外卖配送"
                                }));
                            }
                        } else this.$sun.toast(this.hint); else if (this.handleLogin(), -1 == this.stockNum.indexOf(!1)) {
                            this.$refs.pop.close();
                            s = 0, n = 0;
                            if (this.shopCartList.find(function(t) {
                                1 == t.checked && ++s, ++n;
                            }), 0 != s && 0 != n && s == n && (this.isAllChecked = !0), this.shopCartList.length && 0 != s) {
                                i = new Array();
                                this.shopCartList.find(function(t) {
                                    t.checked && i.push(t);
                                }), 1 == this.scanCode ? (t.navigateTo({
                                    url: "/packages/takeawayOrder/scanCodeOder/scanCodeOder?type=2&actives=" + this.actives + "&gwcSum=" + this.sum + "&byseatInfoID=" + this.byseatInfoID + "&placeOrder=" + this.placeOrder + "&scanCode=1&orderPerType=1"
                                }), 0 == this.actives ? t.setNavigationBarTitle({
                                    title: "门店取餐"
                                }) : t.setNavigationBarTitle({
                                    title: "外卖配送"
                                })) : 1 == this.options.personnelCode ? (t.navigateTo({
                                    url: "/packages/takeawayOrder/scanCodeOder/scanCodeOder?type=2&actives=" + this.actives + "&gwcSum=" + this.sum + "&byseatInfoID=" + this.byseatInfoID + "&placeOrder=" + this.placeOrder + "&personnelCode=1&userMid=" + this.options.userMid + "&orderPerType=" + this.options.orderPerType
                                }), 0 == this.actives ? t.setNavigationBarTitle({
                                    title: "门店取餐"
                                }) : t.setNavigationBarTitle({
                                    title: "外卖配送"
                                })) : (t.navigateTo({
                                    url: "/packages/takeawayOrder/confirm-order2/confirm-order2?type=2&actives=" + this.actives + "&gwcSum=" + this.sum + "&scanCode=2"
                                }), 0 == this.actives ? t.setNavigationBarTitle({
                                    title: "门店取餐"
                                }) : t.setNavigationBarTitle({
                                    title: "外卖配送"
                                }));
                            }
                        } else this.$sun.toast(this.hint);
                    },
                    getSystem: function() {
                        var t = this;
                        return r(n.default.mark(function e() {
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
                    saveMessage: function() {
                        var t = wx.getStorageSync("indexUrl");
                        0 != this.isFirst && this.uid && 1 != t ? this.new2() : this.handleLogin();
                    },
                    new2: function() {
                        this.$refs.popNew.show({
                            style: "width:642rpx; height:auto;background-color: #FFFFFF;",
                            anim: "center",
                            topclose: !1
                        });
                    },
                    gwc: function() {
                        var t = wx.getStorageSync("indexUrl");
                        0 != this.isFirst && 1 != t ? this.new2() : (this.getShopCart(), this.$refs.pop.show({
                            style: "background-color:#fff;width:100%;height:auto;overflow-x:auto;",
                            anim: "bottom",
                            position: "bottom",
                            topclose: !1,
                            titleStyle: "position: fixed;width: 100%;background: #fff;z-index: 999;border-bottom:1rpx solid #f7f7f7;"
                        }));
                    },
                    getChange: function(t) {
                        this.navIndex = t, this.mescroll.resetUpScroll();
                    },
                    goodsfen: function() {
                        var e = this;
                        return r(n.default.mark(function s() {
                            var i, a;
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
                                    if (i = s.sent, e.categoryList = i.data, !e.categoryid) {
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
                        return r(n.default.mark(function i() {
                            var a;
                            return n.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, s.$http({
                                        url: s.$api.cate_foods,
                                        data: {
                                            page: e.num,
                                            psize: 10,
                                            uid: t.getStorageSync("uid").id,
                                            is_exchange: 1,
                                            cid: s.categoryid,
                                            store_id: t.getStorageSync("storeEatNexts") ? t.getStorageSync("storeEatNexts") : "",
                                            goods_name: "",
                                            sort: s.tabList[s.navIndex].sort
                                        }
                                    });

                                  case 2:
                                    a = n.sent, 0 == a.errno ? (console.log("分类商品", a.data), s.mescroll.endByPage(a.data.list.length, a.totalPage), 
                                    1 == e.num && (s.list = []), s.deduction = a.data, s.list = s.list.concat(a.data.list)) : s.list = [];

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, i);
                        }))();
                    },
                    handleLogin: function() {
                        if (this.uid = t.getStorageSync("uid").id, this.uid) return !0;
                        t.navigateTo({
                            url: "/wjyk_nhyk/pages/login/login"
                        });
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
                        })) : 1 == this.options.personnelCode ? (t.navigateTo({
                            url: "/packages/takeawayOrder/detials/detials?id=" + e.id + "&personnelCode=1&placeOrder=" + this.placeOrder + "&stordIds=" + this.stordIds + "&userMid=" + this.options.userMid + "&orderPerType=" + this.options.orderPerType + "&actives=" + this.actives
                        }), t.setNavigationBarTitle({
                            title: e.foods_name
                        })) : (t.navigateTo({
                            url: "/packages/takeawayOrder/detials/detials?id=" + e.id + "&scanCode=2&actives=" + this.actives
                        }), t.setNavigationBarTitle({
                            title: e.foods_name
                        }));
                    }
                }
            };
            e.default = u;
        }).call(this, s("543d")["default"]);
    },
    df7e: function(t, e, s) {
        "use strict";
        s.r(e);
        var n = s("c263"), i = s.n(n);
        for (var a in n) "default" !== a && function(t) {
            s.d(e, t, function() {
                return n[t];
            });
        }(a);
        e["default"] = i.a;
    },
    f53d: function(t, e, s) {
        "use strict";
        s.r(e);
        var n = s("bc25"), i = s("df7e");
        for (var a in i) "default" !== a && function(t) {
            s.d(e, t, function() {
                return i[t];
            });
        }(a);
        s("3de5");
        var r, o = s("f0c5"), c = Object(o["a"])(i["default"], n["b"], n["c"], !1, null, null, null, !1, n["a"], r);
        e["default"] = c.exports;
    },
    fddc: function(t, e, s) {
        "use strict";
        (function(t) {
            s("cee1");
            n(s("66fd"));
            var e = n(s("f53d"));
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(e.default);
        }).call(this, s("543d")["createPage"]);
    }
}, [ [ "fddc", "common/runtime", "common/vendor" ] ] ]);