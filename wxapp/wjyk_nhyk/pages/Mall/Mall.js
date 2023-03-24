(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "wjyk_nhyk/pages/Mall/Mall" ], {
    "10d8": function(t, e, n) {
        "use strict";
        var i = n("a1c6"), a = n.n(i);
        a.a;
    },
    "25d8": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = {
                props: [ "list", "current" ],
                data: function() {
                    return {
                        paddingBottomHeight: 0
                    };
                },
                created: function() {
                    var e = this;
                    t.getSystemInfo({
                        success: function(t) {
                            var n = [ "X", "XR", "XS", "11", "12", "13", "14", "15" ];
                            n.forEach(function(n) {
                                -1 != t.model.indexOf(n) && -1 != t.model.indexOf("iPhone") && (e.paddingBottomHeight = 40);
                            });
                        }
                    });
                },
                watch: {},
                onLoad: function() {},
                methods: {
                    tabbarChange: function(e, n) {
                        t.switchTab({
                            url: "/" + e
                        });
                    }
                }
            };
            e.default = n;
        }).call(this, n("543d")["default"]);
    },
    "4a77": function(t, e, n) {
        "use strict";
        (function(t) {
            n("cee1");
            i(n("66fd"));
            var e = i(n("da8d"));
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(e.default);
        }).call(this, n("543d")["createPage"]);
    },
    5103: function(t, e, n) {
        "use strict";
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return s;
        }), n.d(e, "a", function() {
            return i;
        });
        var i = {
            uNavbar: function() {
                return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null, "f459"));
            },
            uImage: function() {
                return n.e("uview-ui/components/u-image/u-image").then(n.bind(null, "42c7"));
            },
            sunuiPopup: function() {
                return n.e("components/sunui-popup/sunui-popup").then(n.bind(null, "6cf4"));
            }
        }, a = function() {
            var t = this, e = t.$createElement, n = (t._self._c, 0 != t.shopCartList.length ? t.uid && t.stores.store_name && Number(t.gwcSumNumber) > 99 : null), i = 0 != t.shopCartList.length ? Number(t.sum).toFixed(2) : null;
            t.$mp.data = Object.assign({}, {
                $root: {
                    m0: n,
                    g0: i
                }
            });
        }, s = [];
    },
    "5bf5": function(t, e, n) {},
    "621e": function(t, e, n) {
        "use strict";
        var i = n("5bf5"), a = n.n(i);
        a.a;
    },
    8054: function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("25d8"), a = n.n(i);
        for (var s in i) "default" !== s && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(s);
        e["default"] = a.a;
    },
    a1c6: function(t, e, n) {},
    a69d: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = s(n("a34a")), a = s(n("d187"));
            function s(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function o(t, e, n, i, a, s, o) {
                try {
                    var r = t[s](o), u = r.value;
                } catch (c) {
                    return void n(c);
                }
                r.done ? e(u) : Promise.resolve(u).then(i, a);
            }
            function r(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(i, a) {
                        var s = t.apply(e, n);
                        function r(t) {
                            o(s, i, a, r, u, "next", t);
                        }
                        function u(t) {
                            o(s, i, a, r, u, "throw", t);
                        }
                        r(void 0);
                    });
                };
            }
            var u = {
                components: {
                    "iew-tabbar": a.default
                },
                data: function() {
                    return {
                        indicatorDots: !1,
                        autoplay: !0,
                        interval: 2e3,
                        duration: 1e3,
                        circular: !0,
                        index: "",
                        tabbarsss: [],
                        stores: {},
                        nums: 1,
                        jia: 0,
                        isAllChecked: !0,
                        lists: [],
                        system: {},
                        namae: "",
                        newGoodsList: {},
                        likeGoods: [],
                        cateList: [],
                        shopCartList: [],
                        bj: this.$img.bg,
                        bj1: this.$img.bg1,
                        bj2: this.$img.bg2,
                        bj3: this.$img.bg3,
                        sp2: this.$img.sp2,
                        everday: this.$img.everday,
                        duihuan: this.$img.duihuan,
                        huiyuan: this.$img.huiyuan,
                        countClear: 1,
                        couponInfo: {},
                        quanxuan: "",
                        hint: "",
                        stockNum: "",
                        uid: ""
                    };
                },
                onLoad: function(e) {
                    this.namae = t.getStorageSync("storeNext").store_name, this.id = e.id, this.getSystem(), 
                    this.isAllChecked = !0;
                },
                onShow: function() {
                    0 != this.tabbarsss.length && t.hideTabBar({
                        animation: !1
                    }), this.goodsIndex(), this.uid = t.getStorageSync("uid").id, this.stores = t.getStorageSync("storeNext"), 
                    getApp().globalData.coupon && (this.couponInfo = getApp().globalData.coupon), this.getShopCart();
                },
                computed: {
                    sum: function() {
                        var t = 0;
                        return this.shopCartList.forEach(function(e) {
                            console.log("p", e), 1 == e.checked && (t += e.num * e.spec_price);
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
                            1 == e.checked && (parseInt(e.stock) < parseInt(e.num) ? (t.stockNum += !1, t.hint = e.tag_name + "   库存为" + e.stock) : t.stockNum += !0);
                        }), e;
                    }
                },
                methods: {
                    swiperIndex: function(e) {
                        console.log("item=======", e), 0 == e.link_type ? e.link && t.navigateTo({
                            url: "/" + e.link
                        }) : 1 == e.link_type ? e.external_link && t.navigateTo({
                            url: "/packages/takeawayOrder/link/link?link=" + e.external_link
                        }) : 2 == e.link_type && "" != e.appid && "" != e.external_link && wx.navigateToMiniProgram({
                            appId: e.appid,
                            path: e.external_link,
                            success: function(t) {
                                console.log("成功", t);
                            },
                            fail: function(t) {
                                console.log("失败", t);
                            }
                        });
                    },
                    add: function(e) {
                        var n = this;
                        return r(i.default.mark(function a() {
                            var s;
                            return i.default.wrap(function(i) {
                                while (1) switch (i.prev = i.next) {
                                  case 0:
                                    if (console.log("库存不足11" + e.stock + "p.num" + e.num), !(parseInt(e.stock) <= parseInt(e.num))) {
                                        i.next = 5;
                                        break;
                                    }
                                    n.$sun.toast("库存不足"), i.next = 11;
                                    break;

                                  case 5:
                                    return e.num++, console.log(e.num, "this.nums"), i.next = 9, n.$http({
                                        url: n.$api.add_car,
                                        data: {
                                            uid: t.getStorageSync("uid").id,
                                            id: e.goods_id,
                                            spec: e.spec,
                                            num: 1,
                                            type: 1,
                                            car_type: 0,
                                            store_id: ""
                                        }
                                    });

                                  case 9:
                                    s = i.sent, s.errno;

                                  case 11:
                                  case "end":
                                    return i.stop();
                                }
                            }, a);
                        }))();
                    },
                    jian: function(t) {
                        var e = this;
                        return r(i.default.mark(function n() {
                            var a;
                            return i.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    if (1 != t.num) {
                                        n.next = 4;
                                        break;
                                    }
                                    e.$sun.toast("最低数量1"), n.next = 9;
                                    break;

                                  case 4:
                                    return t.num--, n.next = 7, e.$http({
                                        url: e.$api.del_car_num,
                                        data: {
                                            id: t.id,
                                            num: t.num,
                                            car_type: 0
                                        }
                                    });

                                  case 7:
                                    a = n.sent, a.errno;

                                  case 9:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    store2: function() {
                        this.handleLogin() && this.$refs.pops.show({
                            style: "width:642rpx; height:auto;background-color: #FFFFFF;",
                            anim: "center",
                            shadeClose: !1,
                            topclose: !1
                        });
                    },
                    store: function() {
                        this.handleLogin() && this.$sun.navGo("/packages/Mall/NearbyStores/NearbyStores", {
                            indexs: 1
                        });
                    },
                    wansh: function() {
                        this.$refs.pops.close(), this.$sun.navGo("/packages/Mall/NearbyStores/NearbyStores", {
                            indexs: 1
                        });
                    },
                    handleLogin: function() {
                        if (this.uid) return !0;
                        t.navigateTo({
                            url: "/wjyk_nhyk/pages/login/login"
                        });
                    },
                    changeAll: function(t) {
                        var e = this;
                        this.isAllChecked = 1 != this.isAllChecked, this.shopCartList.find(function(t) {
                            1 == e.isAllChecked ? t.checked = !0 : t.checked = !1;
                        });
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
                        if (-1 == this.stockNum.indexOf(!1)) {
                            this.$refs.pop.close();
                            var t = 0, e = 0;
                            if (this.shopCartList.find(function(n) {
                                console.log("结算p=====", n), 1 == n.checked && ++t, ++e;
                            }), 0 != t && 0 != e && t == e && (this.isAllChecked = !0), console.log("打印多少选中", t), 
                            this.handleLogin() && this.shopCartList.length && "" != this.stores && 0 != t) {
                                var n = new Array();
                                this.shopCartList.find(function(t) {
                                    t.checked && n.push(t);
                                }), this.$sun.navGo("/packages/Mall/confirm-order/confirm-order", {
                                    type: 2
                                });
                            } else this.stores ? this.$sun.toast("请添加购物商品") : this.store2();
                        } else this.$sun.toast(this.hint);
                    },
                    handleClearShop: function() {
                        var e = this, n = 0;
                        this.shopCartList.find(function(t) {
                            1 == t.checked && ++n;
                        }), this.handleLogin() && 0 != n ? t.showModal({
                            confirmText: "确定",
                            content: "确定清空购物车么???",
                            title: "清空购物车",
                            success: function() {
                                var t = r(i.default.mark(function t(n) {
                                    var a, s, o, r, u;
                                    return i.default.wrap(function(t) {
                                        while (1) switch (t.prev = t.next) {
                                          case 0:
                                            if (!n.confirm) {
                                                t.next = 10;
                                                break;
                                            }
                                            for (a = e.shopCartList, s = [], o = 0, r = a.length; o < r; o++) a[o].checked && s.push(a[o].id);
                                            return t.next = 6, e.$http({
                                                url: e.$api.del_car,
                                                data: {
                                                    list: s
                                                }
                                            });

                                          case 6:
                                            u = t.sent, e.$sun.toast(u.message), 0 == u.errno && e.getShopCart(), a.length <= 0 && (e.isAllChecked = !1);

                                          case 10:
                                          case "end":
                                            return t.stop();
                                        }
                                    }, t);
                                }));
                                function n(e) {
                                    return t.apply(this, arguments);
                                }
                                return n;
                            }()
                        }) : this.$sun.toast("暂无选中商品");
                    },
                    getSystem: function() {
                        var t = this;
                        return r(i.default.mark(function e() {
                            var n, a;
                            return i.default.wrap(function(e) {
                                while (1) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, t.$http({
                                        url: t.$api.system
                                    });

                                  case 2:
                                    n = e.sent, 0 == n.errno && (t.system = n.data, t.tabbarsss = n.data.meauLists, 
                                    a = "商城", t.tabbarsss.filter(function(e) {
                                        e.meau_name == a && (t.index = e.index);
                                    }));

                                  case 4:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    getShopCart: function() {
                        var e = this;
                        return r(i.default.mark(function n() {
                            var a;
                            return i.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, e.$http({
                                        url: e.$api.my_car,
                                        data: {
                                            uid: t.getStorageSync("uid").id,
                                            car_type: 0
                                        }
                                    });

                                  case 2:
                                    a = n.sent, 0 == a.errno ? (e.isAllChecked = !0, a.data.find(function(t) {
                                        e.$set(t, "checked", !0);
                                    }), e.shopCartList = a.data) : e.$sun.toast(a.message);

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    goodsIndex: function() {
                        var e = this;
                        return r(i.default.mark(function n() {
                            var a;
                            return i.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, e.$http({
                                        url: e.$api.goods,
                                        data: {
                                            uid: t.getStorageSync("uid").id
                                        }
                                    });

                                  case 2:
                                    a = n.sent, 0 == a.errno && (e.newGoodsList = a.data.new_goods, e.likeGoods = a.data.like_goods, 
                                    e.cateList = a.data.cateList);

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    commdty: function(e) {
                        void 0 != this.stores.store_name ? (t.navigateTo({
                            url: "/wjyk_nhyk/pages/Mall/MaillDetails/MaillDetails?id=" + e.id
                        }), t.setNavigationBarTitle({
                            title: e.goods_name
                        })) : this.store2();
                    },
                    gwc: function() {
                        this.handleLogin() && this.stores.store_name ? (this.getShopCart(), this.$refs.pop.show({
                            style: "background-color:#fff;width:100%;height:auto;overflow-x:auto;",
                            anim: "bottom",
                            position: "bottom",
                            topclose: !1,
                            titleStyle: "position: fixed;width: 100%;background: #fff;z-index: 999;border-bottom:1rpx solid #f7f7f7;"
                        })) : this.store2();
                    },
                    duihuans: function() {
                        t.navigateTo({
                            url: "/packages/index/orderDetails/orderDetails"
                        });
                    },
                    sort: function(e) {
                        void 0 != this.stores.store_name ? t.navigateTo({
                            url: "/packages/Mall/classifaction/classifaction?id=" + e
                        }) : this.store2();
                    },
                    GoodDaily: function() {
                        void 0 != this.stores.store_name ? t.navigateTo({
                            url: "/packages/Mall/integralMail/GoodDailys/GoodDailys"
                        }) : this.store2();
                    },
                    memberGoods: function() {
                        void 0 != this.stores.store_name ? t.navigateTo({
                            url: "/packages/Mall/integralMail/MemberGoods/MemberGoods"
                        }) : this.store2();
                    },
                    integralMails: function() {
                        void 0 != this.stores.store_name ? t.navigateTo({
                            url: "/packages/Mall/integralMail/integralMail?isIndex=1"
                        }) : this.store2();
                    }
                }
            };
            e.default = u;
        }).call(this, n("543d")["default"]);
    },
    c39f: function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("a69d"), a = n.n(i);
        for (var s in i) "default" !== s && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(s);
        e["default"] = a.a;
    },
    d187: function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("ef69"), a = n("8054");
        for (var s in a) "default" !== s && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(s);
        n("621e");
        var o, r = n("f0c5"), u = Object(r["a"])(a["default"], i["b"], i["c"], !1, null, "6aaab849", null, !1, i["a"], o);
        e["default"] = u.exports;
    },
    da8d: function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("5103"), a = n("c39f");
        for (var s in a) "default" !== s && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(s);
        n("10d8");
        var o, r = n("f0c5"), u = Object(r["a"])(a["default"], i["b"], i["c"], !1, null, null, null, !1, i["a"], o);
        e["default"] = u.exports;
    },
    ef69: function(t, e, n) {
        "use strict";
        var i;
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return s;
        }), n.d(e, "a", function() {
            return i;
        });
        var a = function() {
            var t = this, e = t.$createElement;
            t._self._c;
        }, s = [];
    }
}, [ [ "4a77", "common/runtime", "common/vendor" ] ] ]);