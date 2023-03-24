(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/takeawayOrder/addSpeak/addSpeak" ], {
    "14e1": function(t, e, n) {
        "use strict";
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {
            return r;
        });
        var r = {
            sunuiStar: function() {
                return n.e("components/sunui-star/sunui-star").then(n.bind(null, "a262"));
            },
            sunuiUpimg1: function() {
                return n.e("components/sunui-upimg1/sunui-upimg1").then(n.bind(null, "b8f3"));
            }
        }, a = function() {
            var t = this, e = t.$createElement;
            t._self._c;
        }, i = [];
    },
    "1e90": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("14e1"), a = n("9a28");
        for (var i in a) "default" !== i && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(i);
        n("202e");
        var o, u = n("f0c5"), s = Object(u["a"])(a["default"], r["b"], r["c"], !1, null, null, null, !1, r["a"], o);
        e["default"] = s.exports;
    },
    "202e": function(t, e, n) {
        "use strict";
        var r = n("76ff"), a = n.n(r);
        a.a;
    },
    "5d0b": function(t, e, n) {
        "use strict";
        (function(t) {
            n("cee1");
            r(n("66fd"));
            var e = r(n("1e90"));
            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(e.default);
        }).call(this, n("543d")["createPage"]);
    },
    "76ff": function(t, e, n) {},
    "8f48": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = i(n("a34a")), a = i(n("0747"));
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function o(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            function u(t, e, n, r, a, i, o) {
                try {
                    var u = t[i](o), s = u.value;
                } catch (c) {
                    return void n(c);
                }
                u.done ? e(s) : Promise.resolve(s).then(r, a);
            }
            function s(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(r, a) {
                        var i = t.apply(e, n);
                        function o(t) {
                            u(i, r, a, o, s, "next", t);
                        }
                        function s(t) {
                            u(i, r, a, o, s, "throw", t);
                        }
                        o(void 0);
                    });
                };
            }
            var c = {
                data: function() {
                    return {
                        img: [],
                        upPicUrl: "",
                        remnant: 0,
                        defaultStar: 5,
                        currentStar: 5,
                        orderInfo2: {},
                        roderGoods: [],
                        addNumber: ""
                    };
                },
                onLoad: function(t) {
                    this.upPicUrl = "https://" + this.$domain + "/app/index.php?i=" + this.$uniacid + "&c=entry&a=wxapp&do=upload&m=wjyk_nhyk", 
                    this.id = t.id, this.Orderinfo(), this.options = t, this.addNumber = t.addNumber, 
                    console.log("options========", this.options);
                },
                onShow: function() {
                    this.setDefaultStar(), a.default.releaseKey("submit");
                },
                methods: {
                    imgsChange1: function() {
                        this.$refs.selectimgandupload1.upload();
                    },
                    imgLoaded1: function(t) {
                        try {
                            this.img = [];
                            for (var e = 0; e < t.length; e++) this.img.push(t[e].url);
                        } catch (t) {
                            this.img = [];
                        }
                    },
                    Orderinfo: function() {
                        var e = this;
                        return s(r.default.mark(function n() {
                            var a;
                            return r.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, e.$http({
                                        url: e.$api.ct_orderInfo,
                                        data: {
                                            uid: t.getStorageSync("uid").id,
                                            id: e.id
                                        }
                                    });

                                  case 2:
                                    a = n.sent, 0 == a.errno && (e.goodsidStr = a.data.goodsidStr, e.orderInfo2 = a.data, 
                                    console.log("this.orderInfo2", e.orderInfo2), e.roderGoods = a.data.goods);

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    descInput: function(t) {
                        this.remnant = t.detail.value.length, this.remnant >= 50 && this.$sun.toast("备注字数已达上限"), 
                        console.log(this.text, "text");
                    },
                    setDefaultStar: function() {
                        this.changeStar({
                            curStar: this.defaultStar
                        });
                    },
                    changeStar: function(t) {
                        var e = t.curStar;
                        this.currentStar = e, 1 == e ? this.commentStr = "非常差" : 2 == e ? this.commentStr = "很差" : 3 == e ? this.commentStr = "一般" : 4 == e ? this.commentStr = "好" : 5 == e && (this.commentStr = "非常好"), 
                        console.log("this.commentStr", this.commentStr, this.currentStar);
                    },
                    addSpeakss: function() {
                        var t = this;
                        this.text ? a.default.uniDoFunc({
                            key: "submit",
                            success: function() {
                                var e = s(r.default.mark(function e() {
                                    return r.default.wrap(function(e) {
                                        while (1) switch (e.prev = e.next) {
                                          case 0:
                                            a.default.lockKey("submit"), t.speakas();

                                          case 2:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e);
                                }));
                                function n() {
                                    return e.apply(this, arguments);
                                }
                                return n;
                            }()
                        }) : this.$sun.toast("请输入评价");
                    },
                    speakas: function() {
                        var e = this;
                        return s(r.default.mark(function n() {
                            var i, u;
                            return r.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    if (!(e.roderGoods.length > 1)) {
                                        n.next = 8;
                                        break;
                                    }
                                    return console.log("添加评价-this.roderGoods.length > 1------"), n.next = 4, e.$http({
                                        url: e.$api.add_multi_comment,
                                        data: o({
                                            uid: t.getStorageSync("uid").id,
                                            store_id: e.orderInfo2.store_id,
                                            content: e.text,
                                            fraction: e.currentStar,
                                            c_type: e.img.length > 0 ? 2 : 1,
                                            img: e.img,
                                            order_id: e.id,
                                            goods_id: e.goodsidStr
                                        }, "img", e.img)
                                    });

                                  case 4:
                                    i = n.sent, 0 == i.errno && (t.navigateTo({
                                        url: "/packages/takeawayOrder/my/my"
                                    }), e.$sun.toast("评价成功")), n.next = 12;
                                    break;

                                  case 8:
                                    return n.next = 10, e.$http({
                                        url: e.$api.add_comment,
                                        data: o({
                                            uid: t.getStorageSync("uid").id,
                                            store_id: e.orderInfo2.store_id,
                                            content: e.text,
                                            fraction: e.currentStar,
                                            c_type: e.img.length > 0 ? 2 : 1,
                                            img: e.img,
                                            order_id: e.id
                                        }, "img", e.img)
                                    });

                                  case 10:
                                    u = n.sent, 0 == u.errno ? (t.navigateTo({
                                        url: "/packages/takeawayOrder/my/my"
                                    }), e.$sun.toast("评价成功")) : a.default.releaseKey("submit");

                                  case 12:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    }
                }
            };
            e.default = c;
        }).call(this, n("543d")["default"]);
    },
    "9a28": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("8f48"), a = n.n(r);
        for (var i in r) "default" !== i && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        e["default"] = a.a;
    }
}, [ [ "5d0b", "common/runtime", "common/vendor" ] ] ]);