(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/takeawayOrder/loginNext/loginNext" ], {
    "1bd7": function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("4d19"), o = n.n(a);
        for (var r in a) "default" !== r && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(r);
        t["default"] = o.a;
    },
    "4d19": function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = r(n("a34a")), o = r(n("bf7f"));
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function c(e, t, n, a, o, r, c) {
                try {
                    var i = e[r](c), s = i.value;
                } catch (u) {
                    return void n(u);
                }
                i.done ? t(s) : Promise.resolve(s).then(a, o);
            }
            function i(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(a, o) {
                        var r = e.apply(t, n);
                        function i(e) {
                            c(r, a, o, i, s, "next", e);
                        }
                        function s(e) {
                            c(r, a, o, i, s, "throw", e);
                        }
                        i(void 0);
                    });
                };
            }
            var s = {
                data: function() {
                    return {
                        system: {},
                        aa: "uid的默认值"
                    };
                },
                onShow: function() {
                    this.getSystem();
                },
                onReady: function() {
                    this.$sun.title("登录授权");
                },
                methods: {
                    getSystem: function() {
                        var e = this;
                        return i(a.default.mark(function t() {
                            var n;
                            return a.default.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, e.$http({
                                        url: e.$api.system
                                    });

                                  case 2:
                                    n = t.sent, 0 == n.errno && (e.system = n.data, e.kfTemplate = n.data.notice.kf_template, 
                                    e.tempId = n.data.notice.new_template, e.successTemplate = n.data.notice.cz_success_template, 
                                    e.brTemplate = n.data.notice.br_template, console.log("系统设置 打印", e.kfTemplate, e.tempId, e.successTemplate, e.brTemplate), 
                                    wx.setStorageSync("system", n.data)), console.log("systemInfo", n, "this.tempId", e.tempId);

                                  case 5:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    handleUnAuth: function() {
                        wx.navigateBack();
                    },
                    getUserProfile: function(t) {
                        var n = this;
                        wx.getUserProfile({
                            desc: "用于完善会员资料",
                            success: function(t) {
                                console.log("result", t);
                                var a = t.userInfo, r = e.getStorageSync("pid");
                                console.log("================", t, a), console.log("数据缓存pid", e.getStorageSync("pid"), r), 
                                o.default.getUserProfile(function(t) {
                                    o.default.request({
                                        url: n.$api.userInfos,
                                        method: "GET",
                                        data: {
                                            pid: r || "",
                                            openid: wx.getStorageSync("openid"),
                                            avatar: a.avatarUrl,
                                            nickname: a.nickName,
                                            gender: a.gender
                                        },
                                        success: function(e) {
                                            console.log("成功", e, e.data, e.data.id), "request:ok" == e.errMsg && (wx.setStorageSync("uid", e.data.data), 
                                            wx.navigateBack(), console.log("登录set的uid-----------", e.data.data, e.data.data.id), 
                                            n.aa = e.data.data.id, console.log("this.aa----------", n.aa));
                                        },
                                        fail: function(t) {
                                            e.showModal({
                                                title: "错误",
                                                content: "访问公众平台接口失败, 错误: invalid appsecret, view more at http://t.cn/RAEkdVq, hints: [ req_id: WeMfdZyFe-D3JW7 ],错误详情：无效的appsecret",
                                                showCancel: !1
                                            }), console.log("登录错误-------------", t);
                                        },
                                        complete: function(e) {
                                            console.log("info", e, t), wx.setStorageSync("userInfo", a);
                                        }
                                    });
                                }, t.detail);
                            }
                        });
                    },
                    updateUserInfo: function(t) {
                        var n = this;
                        if ("getUserProfile:fail auth deny" == t.detail.errMsg) wx.navigateBack(); else {
                            var a = t.detail.userInfo, r = e.getStorageSync("pid");
                            console.log("pid****************2222", e.getStorageSync("pid")), o.default.getUserProfile(function(t) {
                                o.default.request({
                                    url: n.$api.userInfos,
                                    method: "GET",
                                    data: {
                                        pid: r || "",
                                        openid: wx.getStorageSync("openid"),
                                        avatar: a.avatarUrl,
                                        nickname: a.nickName,
                                        gender: a.gender
                                    },
                                    success: function(e) {
                                        "request:ok" == e.errMsg && (wx.setStorageSync("uid", e.data.data), wx.navigateBack());
                                    },
                                    fail: function(t) {
                                        e.showModal({
                                            title: "错误",
                                            content: "访问公众平台接口失败, 错误: invalid appsecret, view more at http://t.cn/RAEkdVq, hints: [ req_id: WeMfdZyFe-D3JW7 ],错误详情：无效的appsecret",
                                            showCancel: !1
                                        });
                                    },
                                    complete: function(e) {
                                        console.log("info", e), wx.setStorageSync("userInfo", t.wxInfo);
                                    }
                                });
                            }, t.detail);
                        }
                    }
                }
            };
            t.default = s;
        }).call(this, n("543d")["default"]);
    },
    "4e49": function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("5c8c"), o = n("1bd7");
        for (var r in o) "default" !== r && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(r);
        n("f09b");
        var c, i = n("f0c5"), s = Object(i["a"])(o["default"], a["b"], a["c"], !1, null, null, null, !1, a["a"], c);
        t["default"] = s.exports;
    },
    "5c8c": function(e, t, n) {
        "use strict";
        var a;
        n.d(t, "b", function() {
            return o;
        }), n.d(t, "c", function() {
            return r;
        }), n.d(t, "a", function() {
            return a;
        });
        var o = function() {
            var e = this, t = e.$createElement;
            e._self._c;
        }, r = [];
    },
    a902: function(e, t, n) {},
    c8d6: function(e, t, n) {
        "use strict";
        (function(e) {
            n("cee1");
            a(n("66fd"));
            var t = a(n("4e49"));
            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            e(t.default);
        }).call(this, n("543d")["createPage"]);
    },
    f09b: function(e, t, n) {
        "use strict";
        var a = n("a902"), o = n.n(a);
        o.a;
    }
}, [ [ "c8d6", "common/runtime", "common/vendor" ] ] ]);