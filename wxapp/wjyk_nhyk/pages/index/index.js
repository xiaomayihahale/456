(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "wjyk_nhyk/pages/index/index" ], {
    1473: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("faa6"), a = n("e695");
        for (var s in a) "default" !== s && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(s);
        n("e4b2");
        var r, u = n("f0c5"), o = Object(u["a"])(a["default"], i["b"], i["c"], !1, null, null, null, !1, i["a"], r);
        t["default"] = o.exports;
    },
    "25d8": function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = {
                props: [ "list", "current" ],
                data: function() {
                    return {
                        paddingBottomHeight: 0
                    };
                },
                created: function() {
                    var t = this;
                    e.getSystemInfo({
                        success: function(e) {
                            var n = [ "X", "XR", "XS", "11", "12", "13", "14", "15" ];
                            n.forEach(function(n) {
                                -1 != e.model.indexOf(n) && -1 != e.model.indexOf("iPhone") && (t.paddingBottomHeight = 40);
                            });
                        }
                    });
                },
                watch: {},
                onLoad: function() {},
                methods: {
                    tabbarChange: function(t, n) {
                        e.switchTab({
                            url: "/" + t
                        });
                    }
                }
            };
            t.default = n;
        }).call(this, n("543d")["default"]);
    },
    "5bf5": function(e, t, n) {},
    "621e": function(e, t, n) {
        "use strict";
        var i = n("5bf5"), a = n.n(i);
        a.a;
    },
    "66ee": function(e, t, n) {
        "use strict";
        (function(e) {
            n("cee1");
            i(n("66fd"));
            var t = i(n("1473"));
            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            e(t.default);
        }).call(this, n("543d")["createPage"]);
    },
    "6a87": function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = r(n("a34a")), a = r(n("0747")), s = r(n("d187"));
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function u(e, t, n, i, a, s, r) {
                try {
                    var u = e[s](r), o = u.value;
                } catch (c) {
                    return void n(c);
                }
                u.done ? t(o) : Promise.resolve(o).then(i, a);
            }
            function o(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(i, a) {
                        var s = e.apply(t, n);
                        function r(e) {
                            u(s, i, a, r, o, "next", e);
                        }
                        function o(e) {
                            u(s, i, a, r, o, "throw", e);
                        }
                        r(void 0);
                    });
                };
            }
            var c = {
                components: {
                    "iew-tabbar": s.default
                },
                data: function() {
                    return {
                        ktv: this.$img.ktv,
                        indexMealLists: [],
                        uid: "",
                        eatPlugin: "",
                        hotelPlugin: "",
                        ktvPlugin: "",
                        mobile: "",
                        index: "",
                        tabbarsss: [],
                        currTime: new Date().getTime(),
                        aa: 0,
                        br_coupon: {},
                        percent: [],
                        indexSer: "2",
                        sy1: this.$img.sy1,
                        fl: this.$img.fl,
                        fl1: this.$img.fl1,
                        fl2: this.$img.fl2,
                        fl3: this.$img.fl3,
                        fl4: this.$img.fl4,
                        zhangdan: this.$img.zhangdan,
                        ziliao: this.$img.ziliao,
                        orderSale: this.$img.orderSale,
                        fenxiao: this.$img.fenxiao,
                        eataa: this.$img.eataa,
                        hotelse: this.$img.hotelse,
                        dizhi: this.$img.dizhi,
                        system: {},
                        member: [],
                        members: [],
                        couponInfos: {},
                        userInfo: {},
                        daifuCount: "",
                        daiHuCount: "",
                        curMember: "",
                        date: new Date().toISOString().slice(0, 10),
                        avatar: this.$img.avatar,
                        nickname: "",
                        qiandaoList: [],
                        swiperdata: [],
                        currentIndex: 0,
                        options: {},
                        list: [ {
                            url: "/packages/index/DistributionManagement/DistributionManagement",
                            title: "分销推广"
                        } ],
                        condition: "",
                        audit: {}
                    };
                },
                onShow: function() {
                    this.isFirst = e.getStorageSync("uid").isFirst, this.getPersons(), this.stores = e.getStorageSync("storeNext"), 
                    this.uid = e.getStorageSync("uid").id, a.default.releaseKey("submit"), this.displayMeal(), 
                    this.userInfoes(), "" != e.getStorageSync("uid").br_coupon && "" != this.uid && void 0 != this.uid && this.birthday(), 
                    this.br_coupon = e.getStorageSync("uid").br_coupon;
                },
                onLoad: function(t) {
                    this.getSystem(), this.options = t, this.options.scene && e.setStorageSync("pid", this.options.scene);
                },
                methods: {
                    jump: function(t) {
                        1 == t.type ? this.handleLogin() && t.meau_link && (t.meau_params ? e.navigateTo({
                            url: t.meau_link + "?" + t.meau_params
                        }) : e.navigateTo({
                            url: t.meau_link
                        })) : 2 == t.type ? t.meau_link && e.navigateTo({
                            url: "/packages/takeawayOrder/link/link?link=" + t.meau_link
                        }) : 3 == t.type && "" != t.meal_app_id && "" != t.meau_link && wx.navigateToMiniProgram({
                            appId: t.meal_app_id,
                            path: t.meau_link,
                            success: function(e) {
                                console.log("成功", e);
                            },
                            fail: function(e) {
                                console.log("失败", e);
                            }
                        });
                    },
                    chajian: function() {
                        e.navigateTo({
                            url: "/wjyk_nhyk/pages/first/first"
                        });
                    },
                    getPersons: function() {
                        var t = this;
                        return o(i.default.mark(function n() {
                            var a;
                            return i.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, t.$http({
                                        url: t.$api.get_persons,
                                        data: {
                                            uid: e.getStorageSync("uid").id
                                        }
                                    });

                                  case 2:
                                    a = n.sent, a.errno;

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    userInfoes: function() {
                        var t = this;
                        return o(i.default.mark(function n() {
                            var a;
                            return i.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, t.$http({
                                        url: t.$api.userhy,
                                        data: {
                                            uid: e.getStorageSync("uid").id
                                        }
                                    });

                                  case 2:
                                    a = n.sent, 0 == a.errno && (t.audit = a.data.audit, t.userInfo = a.data, t.curMember = a.data.curMember_name, 
                                    t.daifuCount = a.data.daifuCount, t.daiHuCount = a.data.daiHuCount, t.member.filter(function(e, n) {
                                        t.curMember == e.member_name && (t.aa = n);
                                    }));

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    zhangdans: function() {
                        this.handleLogin() && e.navigateTo({
                            url: "/packages/index/Mymoney/MyBill/MyBill?opc=1"
                        });
                    },
                    displayMeal: function() {
                        var t = this;
                        return o(i.default.mark(function n() {
                            var a;
                            return i.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, t.$http({
                                        url: t.$api.display_meal,
                                        data: {
                                            uid: e.getStorageSync("uid").id
                                        }
                                    });

                                  case 2:
                                    a = n.sent, 0 == a.errno && (t.couponInfos = a.data);

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    handleLogin: function() {
                        if (this.uid) return !0;
                        e.navigateTo({
                            url: "/wjyk_nhyk/pages/login/login"
                        });
                    },
                    bindUser: function() {
                        var e = this;
                        return this.mobile ? /^1[3456789]\d{9}$/.test(this.mobile) ? void a.default.uniDoFunc({
                            key: "submit",
                            success: function() {
                                var t = o(i.default.mark(function t() {
                                    return i.default.wrap(function(t) {
                                        while (1) switch (t.prev = t.next) {
                                          case 0:
                                            a.default.lockKey("submit"), e.coments();

                                          case 2:
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
                        }) : (this.$sun.toast("请输入正确的手机号"), !1) : (this.$sun.toast("手机号不能为空"), !1);
                    },
                    coments: function() {
                        var t = this;
                        return o(i.default.mark(function n() {
                            var s;
                            return i.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, t.$http({
                                        url: t.$api.bind_user,
                                        data: {
                                            uid: e.getStorageSync("uid").id,
                                            mobile: t.mobile
                                        }
                                    });

                                  case 2:
                                    s = n.sent, 0 == s.errno ? (t.phoness = s.data, t.$sun.toast(s.message), setTimeout(function() {
                                        t.bindCloses(), t.userInfoes();
                                    }, 1400)) : (a.default.releaseKey("submit"), t.$sun.toast(s.message));

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    getSystem: function() {
                        var t = this;
                        return o(i.default.mark(function n() {
                            var a, s;
                            return i.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, t.$http({
                                        url: t.$api.system
                                    });

                                  case 2:
                                    a = n.sent, 0 == a.errno && (t.system = a.data, t.member = a.data.memberLevel, t.plugin = a.data.plugin, 
                                    t.condition = a.data.dist.condition, t.indexMealLists = a.data.indexMealLists, t.tabbarsss = a.data.meauLists, 
                                    t.kfTemplate = a.data.notice.kf_template, t.plugin.filter(function(e) {
                                        var n = "wjyk_nhyk_plugin_food", i = "wjyk_nhyk_plugin_hotel", a = "wjyk_nhyk_plugin_ktv";
                                        e.identifie == n && (t.eatPlugin = e.is_open), e.identifie == i && (t.hotelPlugin = e.is_open), 
                                        e.identifie == a && (t.ktvPlugin = e.is_open);
                                    }), s = "会员", t.tabbarsss.filter(function(e) {
                                        e.meau_name == s && (t.index = e.index);
                                    }), 0 == t.tabbarsss.length && "" == t.tabbarsss || e.hideTabBar({
                                        animation: !1
                                    }), 1 != e.getStorageSync("switchTo") && (1 == t.system.show_index_type && e.reLaunch({
                                        url: "/packages/takeawayOrder/index/index"
                                    }), 2 == t.system.show_index_type && e.reLaunch({
                                        url: "/packages/hotel/index/index"
                                    }), 3 == t.system.show_index_type && (e.getStorageSync("ktvStoreNexts") ? e.navigateTo({
                                        url: "/packages/ktv/index/index"
                                    }) : e.navigateTo({
                                        url: "/packages/ktv/ktvNearbyStores/ktvNearbyStores"
                                    }))));

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    first: function() {
                        e.navigateTo({
                            url: "/wjyk_nhyk/pages/gwcNext/gwcNext"
                        });
                    },
                    AddMealCoupons: function(t) {
                        var n = this;
                        return o(i.default.mark(function s() {
                            var r;
                            return i.default.wrap(function(s) {
                                while (1) switch (s.prev = s.next) {
                                  case 0:
                                    r = wx.getStorageSync("indexUrl"), 0 != n.isFirst ? (console.log("新用户第一次进入======", n.isFirst, "this.uid", n.uid, "indexUrl", r), 
                                    n.uid && 1 != r ? n.new2() : a.default.uniDoFunc({
                                        key: "submit",
                                        success: function() {
                                            var s = o(i.default.mark(function s() {
                                                var r, u;
                                                return i.default.wrap(function(s) {
                                                    while (1) switch (s.prev = s.next) {
                                                      case 0:
                                                        return a.default.lockKey("submit"), s.next = 3, n.$http({
                                                            url: n.$api.pay,
                                                            data: {
                                                                uid: e.getStorageSync("uid").id,
                                                                openid: wx.getStorageSync("openid"),
                                                                price: t.meal_money
                                                            }
                                                        });

                                                      case 3:
                                                        r = s.sent, 0 == r.code ? (u = r.data, n.$sun.wePay(u, function() {
                                                            var s = o(i.default.mark(function s(r) {
                                                                var u;
                                                                return i.default.wrap(function(i) {
                                                                    while (1) switch (i.prev = i.next) {
                                                                      case 0:
                                                                        return i.next = 2, n.$http({
                                                                            url: n.$api.AddMealCoupon,
                                                                            data: {
                                                                                uid: e.getStorageSync("uid").id,
                                                                                meal_id: t.id
                                                                            }
                                                                        });

                                                                      case 2:
                                                                        u = i.sent, n.$sun.toast(u.message), 0 == u.errno ? (n.$sun.toast(u.message), a.default.releaseKey("submit"), 
                                                                        n.displayMeal()) : (a.default.releaseKey("submit"), n.$sun.toast(u.message));

                                                                      case 5:
                                                                      case "end":
                                                                        return i.stop();
                                                                    }
                                                                }, s);
                                                            }));
                                                            return function(e) {
                                                                return s.apply(this, arguments);
                                                            };
                                                        }(), function() {
                                                            var e = o(i.default.mark(function e(t) {
                                                                return i.default.wrap(function(e) {
                                                                    while (1) switch (e.prev = e.next) {
                                                                      case 0:
                                                                        n.$sun.toast("取消了支付"), a.default.releaseKey("submit");

                                                                      case 2:
                                                                      case "end":
                                                                        return e.stop();
                                                                    }
                                                                }, e);
                                                            }));
                                                            return function(t) {
                                                                return e.apply(this, arguments);
                                                            };
                                                        }())) : n.$sun.toast("支付失败");

                                                      case 5:
                                                      case "end":
                                                        return s.stop();
                                                    }
                                                }, s);
                                            }));
                                            function r() {
                                                return s.apply(this, arguments);
                                            }
                                            return r;
                                        }()
                                    })) : a.default.uniDoFunc({
                                        key: "submit",
                                        success: function() {
                                            var s = o(i.default.mark(function s() {
                                                var r, u;
                                                return i.default.wrap(function(s) {
                                                    while (1) switch (s.prev = s.next) {
                                                      case 0:
                                                        return a.default.lockKey("submit"), s.next = 3, n.$http({
                                                            url: n.$api.pay,
                                                            data: {
                                                                uid: e.getStorageSync("uid").id,
                                                                openid: wx.getStorageSync("openid"),
                                                                price: t.meal_money
                                                            }
                                                        });

                                                      case 3:
                                                        r = s.sent, 0 == r.code ? (u = r.data, n.$sun.wePay(u, function() {
                                                            var s = o(i.default.mark(function s(r) {
                                                                var u;
                                                                return i.default.wrap(function(i) {
                                                                    while (1) switch (i.prev = i.next) {
                                                                      case 0:
                                                                        return i.next = 2, n.$http({
                                                                            url: n.$api.AddMealCoupon,
                                                                            data: {
                                                                                uid: e.getStorageSync("uid").id,
                                                                                meal_id: t.id
                                                                            }
                                                                        });

                                                                      case 2:
                                                                        u = i.sent, n.$sun.toast(u.message), 0 == u.errno ? (n.$sun.toast(u.message), a.default.releaseKey("submit"), 
                                                                        n.displayMeal()) : (a.default.releaseKey("submit"), n.$sun.toast(u.message));

                                                                      case 5:
                                                                      case "end":
                                                                        return i.stop();
                                                                    }
                                                                }, s);
                                                            }));
                                                            return function(e) {
                                                                return s.apply(this, arguments);
                                                            };
                                                        }(), function() {
                                                            var e = o(i.default.mark(function e(t) {
                                                                return i.default.wrap(function(e) {
                                                                    while (1) switch (e.prev = e.next) {
                                                                      case 0:
                                                                        n.$sun.toast("取消了支付"), a.default.releaseKey("submit");

                                                                      case 2:
                                                                      case "end":
                                                                        return e.stop();
                                                                    }
                                                                }, e);
                                                            }));
                                                            return function(t) {
                                                                return e.apply(this, arguments);
                                                            };
                                                        }())) : n.$sun.toast("支付失败");

                                                      case 5:
                                                      case "end":
                                                        return s.stop();
                                                    }
                                                }, s);
                                            }));
                                            function r() {
                                                return s.apply(this, arguments);
                                            }
                                            return r;
                                        }()
                                    });

                                  case 2:
                                  case "end":
                                    return s.stop();
                                }
                            }, s);
                        }))();
                    },
                    new2: function() {
                        this.$refs.pop.show({
                            style: "width:642rpx; height:auto;background-color: #FFFFFF;",
                            anim: "center",
                            topclose: !1
                        });
                    },
                    wansh: function() {
                        this.$refs.pop.close(), e.navigateTo({
                            url: "/packages/index/my/editProfile"
                        });
                    },
                    bindphones: function() {
                        this.$refs.popphone.show({
                            style: "width:642rpx; height:auto;background-color: #FFFFFF;",
                            anim: "center",
                            topclose: !1
                        });
                    },
                    bindCloses: function() {
                        this.$refs.popphone.close(), this.mobile = "";
                    },
                    login: function() {
                        e.navigateTo({
                            url: "/wjyk_nhyk/pages/login/login"
                        });
                    },
                    birthday: function() {
                        this.$refs.pops.show({
                            style: "width:692rpx; height:auto;",
                            anim: "center",
                            shadeClose: !1,
                            topclose: !1
                        });
                    },
                    closeModal: function() {
                        this.$refs.pops.close();
                    },
                    closeModals: function(t) {
                        var n = this;
                        return o(i.default.mark(function a() {
                            var s;
                            return i.default.wrap(function(i) {
                                while (1) switch (i.prev = i.next) {
                                  case 0:
                                    return i.next = 2, n.$http({
                                        url: n.$api.receive_coupon,
                                        data: {
                                            id: t,
                                            uid: e.getStorageSync("uid").id
                                        }
                                    });

                                  case 2:
                                    s = i.sent, n.$sun.toast(s.message), 0 == s.errno && n.closeModal();

                                  case 5:
                                  case "end":
                                    return i.stop();
                                }
                            }, a);
                        }))();
                    },
                    swiperChange: function(e) {
                        this.currentIndex = e.detail.current;
                    },
                    erwm: function() {
                        this.handleLogin() && (this.kfTemplate ? this.acceptMessage() : (console.log("jinr================"), 
                        e.navigateTo({
                            url: "/packages/index/erwmIndex/erwmIndex"
                        })));
                    },
                    acceptMessage: function() {
                        var t = this;
                        wx.getSetting({
                            withSubscriptions: !0,
                            success: function(n) {
                                console.log("res======", n), 0 == n.subscriptionsSetting.mainSwitch || e.requestSubscribeMessage({
                                    tmplIds: [ t.kfTemplate ],
                                    success: function() {
                                        var n = o(i.default.mark(function n(a) {
                                            return i.default.wrap(function(n) {
                                                while (1) switch (n.prev = n.next) {
                                                  case 0:
                                                    "accept" == a[t.kfTemplate] ? (console.log("授权成功", a), e.navigateTo({
                                                        url: "/packages/index/erwmIndex/erwmIndex"
                                                    })) : wx.showModal({
                                                        title: "温馨提示",
                                                        content: "您已拒绝授权，将无法在微信中收到通知！",
                                                        showCancel: !1,
                                                        success: function(t) {
                                                            t.confirm && (console.log("拒绝授权", a), e.navigateTo({
                                                                url: "/packages/index/erwmIndex/erwmIndex"
                                                            }));
                                                        }
                                                    });

                                                  case 1:
                                                  case "end":
                                                    return n.stop();
                                                }
                                            }, n);
                                        }));
                                        function a(e) {
                                            return n.apply(this, arguments);
                                        }
                                        return a;
                                    }(),
                                    fail: function(t) {
                                        console.log("失败", t), e.navigateTo({
                                            url: "/packages/index/erwmIndex/erwmIndex"
                                        });
                                    },
                                    complete: function(e) {
                                        console.log("完成", e);
                                    }
                                });
                            }
                        });
                    },
                    money2: function() {
                        if (this.handleLogin()) {
                            var t = wx.getStorageSync("indexUrl");
                            0 != this.isFirst && this.uid && 1 != t ? this.new2() : e.navigateTo({
                                url: "/packages/index/MemberCentreMoney/MemberCentreMoney"
                            });
                        }
                    },
                    qiandao: function() {
                        this.handleLogin() && e.navigateTo({
                            url: "/packages/index/qiandao/qiandao"
                        });
                    },
                    money: function() {
                        if (this.handleLogin()) {
                            var t = wx.getStorageSync("indexUrl");
                            console.log("this.isFirst", this.isFirst), 0 != this.isFirst && this.uid && 1 != t ? this.new2() : e.navigateTo({
                                url: "/packages/index/Mymoney/Mymoney"
                            });
                        }
                    },
                    jf: function() {
                        this.handleLogin() && ("" != this.stores ? e.navigateTo({
                            url: "/packages/Mall/integralMail/integralMail?isIndex=1"
                        }) : this.store2());
                    },
                    store2: function() {
                        this.handleLogin() && this.$refs.popmend.show({
                            style: "width:642rpx; height:auto;background-color: #FFFFFF;",
                            anim: "center",
                            shadeClose: !1,
                            topclose: !1
                        });
                    },
                    wansh2: function() {
                        this.$refs.popmend.close(), this.$sun.navGo("/packages/Mall/NearbyStores/NearbyStores", {
                            indexs: 1
                        });
                    },
                    coupon: function() {
                        this.handleLogin() && e.navigateTo({
                            url: "/packages/index/my-coupon/my-coupon?type=1&currentIndex=0"
                        });
                    },
                    handleMore2: function() {
                        if (this.handleLogin()) {
                            var e = wx.getStorageSync("indexUrl");
                            0 != this.isFirst && this.uid && 1 != e ? this.new2() : this.$sun.navGo("/packages/index/myOrder/myOrder", {
                                title: "全部订单",
                                currentIndex: 0
                            });
                        }
                    },
                    handleOrderList2: function(t) {
                        if (this.handleLogin()) {
                            var n = wx.getStorageSync("indexUrl");
                            0 != this.isFirst && this.uid && 1 != n ? this.new2() : e.navigateTo({
                                url: "/packages/index/myOrder/myOrder?currentIndex=" + t
                            });
                        }
                    },
                    yuyueeat: function() {
                        var t = wx.getStorageSync("indexUrl");
                        this.handleLogin() && (0 != this.isFirst && this.uid && 1 != t ? this.new2() : e.navigateTo({
                            url: "/packages/takeawayOrder/index/index"
                        }));
                    },
                    hotels: function() {
                        var t = wx.getStorageSync("indexUrl");
                        this.handleLogin() && (0 != this.isFirst && this.uid && 1 != t ? this.new2() : e.navigateTo({
                            url: "/packages/hotel/index/index"
                        }));
                    },
                    getKtv: function() {
                        var t = wx.getStorageSync("indexUrl");
                        this.handleLogin() && (0 != this.isFirst && this.uid && 1 != t ? this.new2() : e.getStorageSync("ktvStoreNexts") ? e.navigateTo({
                            url: "/packages/ktv/index/index"
                        }) : e.navigateTo({
                            url: "/packages/ktv/ktvNearbyStores/ktvNearbyStores"
                        }));
                    },
                    editInfo: function(t) {
                        this.handleLogin() && e.navigateTo({
                            url: "/packages/index/my/editProfile?pid=" + t
                        });
                    },
                    addressInfo: function() {
                        this.handleLogin() && e.navigateTo({
                            url: "/packages/Mall/address/address?address=1"
                        });
                    },
                    packageCard: function() {
                        e.navigateTo({
                            url: "/packages/index/packageCardtc/packageCardtc"
                        });
                    },
                    tckSale: function() {
                        e.navigateTo({
                            url: "/packages/login/Administrator-Index/dianzhangSale?index=1"
                        });
                    },
                    fenx: function() {
                        var t = this;
                        if (this.handleLogin()) if (2 == this.userInfo.is_distribution || 1 == this.condition) e.navigateTo({
                            url: "/packages/index/DistributionManagement/DistributionManagement"
                        }); else if (2 == this.condition && (this.audit.status ? 3 == this.audit.status ? e.navigateTo({
                            url: "/packages/index/DistributionManagement/DistributionManagement"
                        }) : (e.navigateTo({
                            url: "/packages/index/distribution-Audit/distribution-Audit?status=" + this.audit.status
                        }), 1 == this.audit.status ? e.setNavigationBarTitle({
                            title: "待审核"
                        }) : 2 == this.audit.status && e.setNavigationBarTitle({
                            title: "审核失败"
                        })) : e.navigateTo({
                            url: "/packages/index/distribution-Audit/distribution-Audit?status=0"
                        })), 3 == this.condition && (Number(this.userInfo.credit4) < Number(this.system.dist.consume_money) ? this.$sun.toast("累加消费" + this.system.dist.consume_money + "才可成为分销商！") : e.navigateTo({
                            url: "/packages/index/DistributionManagement/DistributionManagement"
                        })), 4 == this.condition) if (Number(this.userInfo.member_level) < Number(this.system.dist.member_level)) {
                            var n = "";
                            this.member.filter(function(e) {
                                Number(t.system.dist.member_level) == Number(e.id) && (n = e.member_name);
                            }), this.$sun.toast("会员等级达到“ " + n + " ”才可成为分销商！");
                        } else e.navigateTo({
                            url: "/packages/index/DistributionManagement/DistributionManagement"
                        });
                    },
                    toGo: function(t, n) {
                        this.handleLogin() && e.navigateTo({
                            url: t
                        });
                    }
                }
            };
            t.default = c;
        }).call(this, n("543d")["default"]);
    },
    8054: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("25d8"), a = n.n(i);
        for (var s in i) "default" !== s && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(s);
        t["default"] = a.a;
    },
    d187: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("ef69"), a = n("8054");
        for (var s in a) "default" !== s && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(s);
        n("621e");
        var r, u = n("f0c5"), o = Object(u["a"])(a["default"], i["b"], i["c"], !1, null, "6aaab849", null, !1, i["a"], r);
        t["default"] = o.exports;
    },
    e4b2: function(e, t, n) {
        "use strict";
        var i = n("ff98"), a = n.n(i);
        a.a;
    },
    e695: function(e, t, n) {
        "use strict";
        n.r(t);
        var i = n("6a87"), a = n.n(i);
        for (var s in i) "default" !== s && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(s);
        t["default"] = a.a;
    },
    ef69: function(e, t, n) {
        "use strict";
        var i;
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "c", function() {
            return s;
        }), n.d(t, "a", function() {
            return i;
        });
        var a = function() {
            var e = this, t = e.$createElement;
            e._self._c;
        }, s = [];
    },
    faa6: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "c", function() {
            return s;
        }), n.d(t, "a", function() {
            return i;
        });
        var i = {
            sunuiCard: function() {
                return n.e("components/sunui-card/sunui-card").then(n.bind(null, "c694"));
            },
            sunuiPopup: function() {
                return n.e("components/sunui-popup/sunui-popup").then(n.bind(null, "6cf4"));
            }
        }, a = function() {
            var e = this, t = e.$createElement, n = (e._self._c, Number(e.aa)), i = Number(e.userInfo.credit4), a = e.__map(e.member, function(t, n) {
                var a = e.__get_orig(t), s = Number(t.need_money), r = i >= s ? null : Number(Number(e.userInfo.credit4) / Number(t.need_money) * 100).toFixed(1), u = -1 == t.nextLevelId ? Number(t.discount).toFixed(1) : null, o = -1 != t.nextLevelId ? Number(t.nextDiscount).toFixed(1) : null;
                return {
                    $orig: a,
                    m2: s,
                    g0: r,
                    g1: u,
                    g2: o
                };
            }), s = e.userInfo.money ? Number(e.userInfo.money).toFixed(2) : null, r = e.userInfo.integral ? Number(e.userInfo.integral).toFixed() : null, u = Number(e.daifuCount) > 99 && e.uid, o = Number(e.daiHuCount) > 99 && e.uid, c = Number(e.userInfo.daiShCount) > 99 && e.uid;
            e.$mp.data = Object.assign({}, {
                $root: {
                    m0: n,
                    m1: i,
                    l0: a,
                    g3: s,
                    g4: r,
                    m3: u,
                    m4: o,
                    m5: c
                }
            });
        }, s = [];
    },
    ff98: function(e, t, n) {}
}, [ [ "66ee", "common/runtime", "common/vendor" ] ] ]);