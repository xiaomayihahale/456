(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/takeawayOrder/detials/detials" ], {
    "0fa6": function(e, t, s) {
        "use strict";
        s.r(t);
        var n = s("f274"), i = s("7af3");
        for (var o in i) "default" !== o && function(e) {
            s.d(t, e, function() {
                return i[e];
            });
        }(o);
        s("670c");
        var a, c = s("f0c5"), r = Object(c["a"])(i["default"], n["b"], n["c"], !1, null, null, null, !1, n["a"], a);
        t["default"] = r.exports;
    },
    "344b": function(e, t, s) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = o(s("a34a")), i = o(s("0747"));
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function a(e, t, s, n, i, o, a) {
                try {
                    var c = e[o](a), r = c.value;
                } catch (u) {
                    return void s(u);
                }
                c.done ? t(r) : Promise.resolve(r).then(n, i);
            }
            function c(e) {
                return function() {
                    var t = this, s = arguments;
                    return new Promise(function(n, i) {
                        var o = e.apply(t, s);
                        function c(e) {
                            a(o, n, i, c, r, "next", e);
                        }
                        function r(e) {
                            a(o, n, i, c, r, "throw", e);
                        }
                        c(void 0);
                    });
                };
            }
            var r = {
                data: function() {
                    return {
                        specX: "",
                        norms: [],
                        foods: {},
                        nums: 1,
                        tabIndex: 0,
                        tabIndex2: 0,
                        pushName: "",
                        iSinfo: !0,
                        comment: [],
                        name: "",
                        checkeds: "",
                        checklist: [],
                        checkListName: [],
                        pushPrice: "",
                        inStock: "",
                        inName: "",
                        sumKong: 0
                    };
                },
                computed: {
                    sum: function() {
                        console.log("进入结算金额");
                        var e = 0;
                        return console.log("this.sumKong", this.sumKong), 1 == this.sumKong ? e = Number(this.foods.original_price) : e += Number(Number(this.pushPrice) + Number(this.foods.original_price)), 
                        e;
                    }
                },
                onLoad: function(e) {
                    this.options = e, this.id = e.id, this.scanCode = e.scanCode, this.stordIds = e.stordIds, 
                    this.placeOrder = e.placeOrder, this.actives = e.actives, console.log("this.norms==", this.norms, "this.options", this.options, "this.scanCode====", this.scanCode), 
                    this.norms.forEach(function(e, t) {
                        e.datas.forEach(function(t, s) {
                            console.log("items,indexs", t, s), e.datas.length && 0 == s ? t.checked = !0 : t.checked = !1;
                        });
                    });
                },
                onShow: function() {
                    i.default.releaseKey("submit"), this.foodsInfos();
                },
                methods: {
                    showBigImg: function(t, s) {
                        e.previewImage({
                            current: t,
                            urls: s
                        }), this.pushName = "", this.sumKong = 1;
                    },
                    handleClick: function(e, t) {
                        var s = this;
                        this.norms.forEach(function(n, i) {
                            n.datas.forEach(function(i, o) {
                                console.log("item----", n, "indexs", o, "items---", i), e.id == n.id && (t.id == i.id ? s.$set(i, "checked", !i.checked) : s.$set(i, "checked", !1));
                            });
                        }), this.$forceUpdate(), this.handleFilter();
                    },
                    handleFilter: function() {
                        var e = this, t = !0;
                        this.norms.forEach(function(s, n) {
                            if (t = !0, s.datas.forEach(function(s, n) {
                                if (s.checked) {
                                    t = !1;
                                    var i = !0;
                                    e.checklist.filter(function(e) {
                                        s.id + s.name == e.id + e.name && (i = !1);
                                    }), i && e.checklist.push(s);
                                    s.name;
                                }
                            }), t) {
                                var i = !0;
                                e.checkListName.filter(function(e) {
                                    s.id == e.id && (i = !1);
                                }), i && (e.checkListName.push(s), console.log("this.checkListNameaaaaaaaaaaa", e.checkListName));
                            } else e.checkListName = e.checkListName.filter(function(e) {
                                return e.id != s.id;
                            });
                        }), this.checklist = this.checklist.filter(function(e) {
                            return 0 != e.checked;
                        }), 0 == this.checklist.length ? this.pushName = "" : this.checklist.forEach(function(t, s) {
                            if (0 == s && 1 == t.checked) {
                                e.pushName = null;
                                var n = t.name + "/";
                                e.pushName = n, e.pushPrice = null, t.price ? (e.inStock = !0, e.pushPrice += Number(t.price)) : (e.inStock = !1, 
                                e.$sun.toast("该商品“" + t.name + "”规格价格不存在，无法选择！"), e.inName = t.name), console.log("规格价格--------------", t, "this.pushPrice", e.pushPrice);
                            } else {
                                var i = t.name + "/";
                                e.pushName += i, t.price ? (e.inStock = !0, e.pushPrice += Number(t.price)) : (e.inStock = !1, 
                                e.$sun.toast("该商品“" + t.name + "”规格价格不存在，无法选择！"), e.inName = t.name), console.log("规格价格22222--------------", t, "this.pushPrice", e.pushPrice);
                            }
                        });
                    },
                    addgwc: function() {
                        var e = this;
                        if (console.log("this.checklist", this.checklist, "this.norms", this.norms, "this.checkListName"), 
                        this.checklist < this.norms) this.$sun.toast("请选择规格" + this.checkListName[0].name); else {
                            for (var t = 0; t < this.norms.length; t++) {
                                this.name = "", this.checkeds = "";
                                for (var s = 0; s < this.norms[t].datas.length; s++) this.checkeds += this.norms[t].datas[s].checked;
                                this.name;
                            }
                            "" == this.pushName && 0 != this.norms.length && this.$sun.toast("请选择规格！"), this.foods.stock <= 0 ? this.$sun.toast("库存不足！") : i.default.uniDoFunc({
                                key: "submit",
                                success: function() {
                                    var t = c(n.default.mark(function t() {
                                        return n.default.wrap(function(t) {
                                            while (1) switch (t.prev = t.next) {
                                              case 0:
                                                i.default.lockKey("submit"), e.handleCart();

                                              case 2:
                                              case "end":
                                                return t.stop();
                                            }
                                        }, t);
                                    }));
                                    function s() {
                                        return t.apply(this, arguments);
                                    }
                                    return s;
                                }()
                            });
                        }
                    },
                    handleCart: function() {
                        var t = this;
                        return c(n.default.mark(function s() {
                            var o;
                            return n.default.wrap(function(s) {
                                while (1) switch (s.prev = s.next) {
                                  case 0:
                                    return s.next = 2, t.$http({
                                        url: t.$api.add_car,
                                        data: {
                                            store_id: e.getStorageSync("storeEatNexts"),
                                            uid: 1 == t.options.personnelCode ? wx.getStorageSync("login").id : e.getStorageSync("uid").id,
                                            id: t.foods.id,
                                            spec: t.pushName,
                                            num: t.nums,
                                            type: 1,
                                            car_type: 1,
                                            spec_price: Number(t.sum).toFixed(2)
                                        }
                                    });

                                  case 2:
                                    o = s.sent, 0 == o.errno ? (t.$sun.toast(o.message), 1 == t.options.personnelCode ? (console.log("进入店员代下单================", t.stordIds, t.placeOrder, t.actives, t.options.userMid, t.options.orderPerType), 
                                    e.reLaunch({
                                        url: "/packages/takeawayOrder/administrator-order-classification/administrator-order-classification?personnelCode=1&stordIds=" + t.stordIds + "&placeOrder=" + t.placeOrder + "&actives=" + t.actives + "&userMid=" + t.options.userMid + "&orderPerType=" + t.options.orderPerType
                                    }), i.default.releaseKey("submit")) : (console.log("非店员代下单================"), e.redirectTo({
                                        url: "/packages/takeawayOrder/classification/classification?scanCode=" + t.scanCode + "&stordIds=" + t.stordIds + "&placeOrder=" + t.placeOrder + "&actives=" + t.actives
                                    }), i.default.releaseKey("submit"))) : i.default.releaseKey("submit");

                                  case 4:
                                  case "end":
                                    return s.stop();
                                }
                            }, s);
                        }))();
                    },
                    foodsInfos: function() {
                        var e = this;
                        return c(n.default.mark(function t() {
                            var s;
                            return n.default.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                  case 0:
                                    return console.log("----------"), t.next = 3, e.$http({
                                        url: e.$api.foods_info,
                                        data: {
                                            id: e.id
                                        }
                                    });

                                  case 3:
                                    s = t.sent, 0 == s.errno && (e.comment = s.data.comment, e.foods = s.data.foods, 
                                    e.norms = s.data.foods.norm, e.norms = JSON.parse(e.norms), console.log("this.norm", e.norms), 
                                    e.norms.forEach(function(t, s) {
                                        console.log("this.norms商品规格======", e.norms);
                                        var n = !1;
                                        if (t.datas.forEach(function(t, s) {
                                            t.checked = !1, n = !0, e.checklist = e.checklist.filter(function(e) {
                                                return t.id != e.id;
                                            }), console.log("this.inName啊啊啊啊啊啊啊啊啊啊啊啊啊==========", e.inName, e.pushName);
                                        }), n) {
                                            var i = !0;
                                            e.checkListName.filter(function(e) {
                                                t.id == e.id && (i = !1);
                                            }), i && (e.checkListName.push(t), console.log("this.checkListNameaaaaaaaaaaa", e.checkListName));
                                        } else e.checkListName = e.checkListName.filter(function(e) {
                                            return e.id != t.id;
                                        });
                                    })), console.log("result", s);

                                  case 6:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    back: function() {
                        e.navigateBack({
                            delta: 1
                        });
                    },
                    add: function() {
                        this.foods.stock <= this.nums ? this.$sun.toast("库存不足") : (this.nums++, console.log(this.nums, "this.nums"));
                    },
                    jian: function() {
                        1 == this.nums ? this.$sun.toast("最低数量1") : (this.nums--, console.log(this.nums, "this.nums"));
                    },
                    showinfo: function() {
                        this.iSinfo = !this.iSinfo;
                    },
                    boxs: function(e, t) {
                        this.tabIndex = e, console.log("this.tabIndex", this.tabIndex);
                    },
                    boxs2: function(e, t) {
                        this.norms[e].type;
                        for (var s = 0; s < t.length; s++) e == s && (console.log(s, "i----------"), this.norms[e].datas.checked = !0, 
                        console.log("相等=-===========", this.norms[e].datas.checked, this.norms[e].datas));
                    },
                    boxs3: function(e, t) {
                        this.tabIndex = e, console.log("this.tabIndex", this.tabIndex, e);
                    }
                }
            };
            t.default = r;
        }).call(this, s("543d")["default"]);
    },
    "3e15": function(e, t, s) {
        "use strict";
        (function(e) {
            s("cee1");
            n(s("66fd"));
            var t = n(s("0fa6"));
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            e(t.default);
        }).call(this, s("543d")["createPage"]);
    },
    "670c": function(e, t, s) {
        "use strict";
        var n = s("e59d"), i = s.n(n);
        i.a;
    },
    "7af3": function(e, t, s) {
        "use strict";
        s.r(t);
        var n = s("344b"), i = s.n(n);
        for (var o in n) "default" !== o && function(e) {
            s.d(t, e, function() {
                return n[e];
            });
        }(o);
        t["default"] = i.a;
    },
    e59d: function(e, t, s) {},
    f274: function(e, t, s) {
        "use strict";
        var n;
        s.d(t, "b", function() {
            return i;
        }), s.d(t, "c", function() {
            return o;
        }), s.d(t, "a", function() {
            return n;
        });
        var i = function() {
            var e = this, t = e.$createElement, s = (e._self._c, e.__map(e.comment, function(t, s) {
                var n = e.__get_orig(t), i = Number(t.fraction);
                return {
                    $orig: n,
                    l0: i
                };
            })), n = Number(e.sum).toFixed(2);
            e.$mp.data = Object.assign({}, {
                $root: {
                    l1: s,
                    g0: n
                }
            });
        }, o = [];
    }
}, [ [ "3e15", "common/runtime", "common/vendor" ] ] ]);