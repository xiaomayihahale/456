(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/index/DistributionManagement/DistributionManagement" ], {
    "218a": function(t, n, e) {
        "use strict";
        e.d(n, "b", function() {
            return o;
        }), e.d(n, "c", function() {
            return s;
        }), e.d(n, "a", function() {
            return i;
        });
        var i = {
            sunuiCell: function() {
                return e.e("components/sunui-cell/sunui-cell").then(e.bind(null, "cf30"));
            },
            sunuiPopup: function() {
                return e.e("components/sunui-popup/sunui-popup").then(e.bind(null, "6cf4"));
            },
            sunuiPainter: function() {
                return Promise.all([ e.e("common/vendor"), e.e("components/sunui-painter/sunui-painter") ]).then(e.bind(null, "0a22"));
            }
        }, o = function() {
            var t = this, n = t.$createElement;
            t._self._c;
        }, s = [];
    },
    6450: function(t, n, e) {
        "use strict";
        var i = e("a710"), o = e.n(i);
        o.a;
    },
    "8d45": function(t, n, e) {
        "use strict";
        e.r(n);
        var i = e("218a"), o = e("91a2");
        for (var s in o) "default" !== s && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(s);
        e("6450");
        var a, r = e("f0c5"), u = Object(r["a"])(o["default"], i["b"], i["c"], !1, null, null, null, !1, i["a"], a);
        n["default"] = u.exports;
    },
    "91a2": function(t, n, e) {
        "use strict";
        e.r(n);
        var i = e("aa17"), o = e.n(i);
        for (var s in i) "default" !== s && function(t) {
            e.d(n, t, function() {
                return i[t];
            });
        }(s);
        n["default"] = o.a;
    },
    a710: function(t, n, e) {},
    a7c3: function(t, n, e) {
        "use strict";
        (function(t) {
            e("cee1");
            i(e("66fd"));
            var n = i(e("8d45"));
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(n.default);
        }).call(this, e("543d")["createPage"]);
    },
    aa17: function(t, n, e) {
        "use strict";
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var i = o(e("a34a"));
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function s(t, n, e, i, o, s, a) {
                try {
                    var r = t[s](a), u = r.value;
                } catch (c) {
                    return void e(c);
                }
                r.done ? n(u) : Promise.resolve(u).then(i, o);
            }
            function a(t) {
                return function() {
                    var n = this, e = arguments;
                    return new Promise(function(i, o) {
                        var a = t.apply(n, e);
                        function r(t) {
                            s(a, i, o, r, u, "next", t);
                        }
                        function u(t) {
                            s(a, i, o, r, u, "throw", t);
                        }
                        r(void 0);
                    });
                };
            }
            var r = {
                data: function() {
                    return {
                        fxbjs: this.$img.fxbjs,
                        system: {},
                        commissionList: {},
                        erwm: this.$img.erwm,
                        list: [ {
                            url: "/packages/index/DistributionManagement/myTeam/myTeam",
                            title: "我的团队"
                        }, {
                            url: "/packages/index/DistributionManagement/myGold/myGold",
                            title: "佣金记录"
                        } ],
                        lists: [ {
                            url: "/packages/index/DistributionManagement/money/money",
                            title: "赚钱说明"
                        } ],
                        logno: "",
                        distributionList: {},
                        distributionInfo: {},
                        basePainter: {},
                        img: "",
                        background: "https://b89.admin168.net/addons/wjyk_ptsc_wxapp/public/static/index/price4.png",
                        qrcode: ""
                    };
                },
                onLoad: function() {},
                onShow: function() {
                    this.commissions(), this.getSystem(), this.logno = null;
                },
                methods: {
                    getSystem: function() {
                        var t = this;
                        return a(i.default.mark(function n() {
                            var e;
                            return i.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, t.$http({
                                        url: t.$api.system
                                    });

                                  case 2:
                                    e = n.sent, 0 == e.errno && (t.system = e.data);

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    toGo: function(n, e) {
                        t.navigateTo({
                            url: n
                        });
                    },
                    changeInput: function() {
                        console.log("输入的值", this.logno);
                    },
                    tixian: function() {
                        t.navigateTo({
                            url: "/packages/index/DistributionManagement/withdrawalsRecord/withdrawalsRecord"
                        });
                    },
                    commissions: function() {
                        var n = this;
                        return a(i.default.mark(function e() {
                            var o;
                            return i.default.wrap(function(e) {
                                while (1) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, n.$http({
                                        url: n.$api.commission,
                                        data: {
                                            uid: t.getStorageSync("uid").id
                                        }
                                    });

                                  case 2:
                                    o = e.sent, 0 == o.errno && (n.commissionList = o.data, console.log("推广中心——分销管理——index", o));

                                  case 4:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    poster: function() {
                        t.navigateTo({
                            url: "/wjyk_nhyk/pages/gwcNext/gwcNext"
                        });
                    },
                    openModal: function() {
                        console.log("进来了"), this.$refs.pops.show({
                            style: "width:658rpx; border-top-left-radius: 20rpx;border-top-right-radius: 20rpx; height: auto;",
                            anim: "center",
                            topclose: !1
                        });
                    },
                    closeModal: function() {
                        this.$refs.pops.close();
                    },
                    sharePoster: function() {
                        this.basePainter = {
                            width: "512rpx",
                            height: "512rpx",
                            background: "#FFFFFF",
                            views: [ {
                                type: "image",
                                url: "https://b89.admin168.net/addons/wjyk_ptsc_wxapp/public/static/index/bg.png",
                                mode: "widthFix",
                                css: {
                                    width: "512rpx",
                                    height: "512rpx",
                                    margin: "auto"
                                }
                            }, {
                                type: "image",
                                url: "https://n8.dns06.cn/opz16111401345014.png",
                                mode: "widthFix",
                                css: {
                                    left: "156rpx",
                                    top: "156rpx",
                                    width: "200rpx",
                                    height: "200rpx",
                                    background: "#fff"
                                }
                            } ]
                        };
                    },
                    dianji: function() {
                        var n = this;
                        t.saveImageToPhotosAlbum({
                            filePath: this.img,
                            success: function(t) {
                                n.$sun.toast("保存成功，可以去分享啦~");
                            },
                            fail: function(t) {
                                n.$sun.toast("保存失败，稍后再试");
                            }
                        });
                    },
                    previewImage: function() {
                        t.previewImage({
                            urls: [ this.img ],
                            current: 0
                        });
                    },
                    getSuccessInfo: function(n) {
                        this.img = n, console.log("this.img==========", this.img), t.hideLoading();
                    },
                    getFailInfo: function(n) {
                        console.log("eeeee", n), t.showToast({
                            title: "海报生成失败，请检查图片是否有效!",
                            duration: 3e3,
                            icon: "none"
                        });
                    },
                    distributionSets: function() {
                        var t = this;
                        return a(i.default.mark(function n() {
                            var e;
                            return i.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, t.$http({
                                        url: t.$api.distributionSet
                                    });

                                  case 2:
                                    e = n.sent, 0 == e.errno && (t.distributionInfo = e.data, console.log("推广中心——分销设置——index", e));

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    withdraw: function() {
                        t.navigateTo({
                            url: "/packages/index/DistributionManagement/WithdrawMoney/WithdrawMoney"
                        });
                    },
                    cashWaits: function() {
                        var n = this;
                        return a(i.default.mark(function e() {
                            var o;
                            return i.default.wrap(function(e) {
                                while (1) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, n.$http({
                                        url: n.$api.cashWait,
                                        data: {
                                            uid: t.getStorageSync("uid").id,
                                            apply_price: n.logno
                                        }
                                    });

                                  case 2:
                                    o = e.sent, console.log("佣金提现申请11111", o), 0 == o.errno ? (console.log("佣金提现申请", o), 
                                    n.distributionDisplays(), n.$sun.toast(o.message), n.recall()) : n.$sun.toast(o.message);

                                  case 5:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    recall: function() {
                        this.$refs.pop.close();
                    },
                    determine: function() {
                        this.logno ? Number(this.logno) < Number(this.distributionInfo.lowest_withdraw) ? this.$sun.toast("提现额度不能低于" + this.distributionInfo.lowest_withdraw) : Number(this.logno) > Number(this.distributionList.balance) ? this.$sun.toast("佣金不足") : this.cashWaits() : this.$sun.toast("请输入提现金额");
                    }
                }
            };
            n.default = r;
        }).call(this, e("543d")["default"]);
    }
}, [ [ "a7c3", "common/runtime", "common/vendor" ] ] ]);