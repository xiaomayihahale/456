(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/index/my/editProfile" ], {
    1975: function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = i(n("a34a")), a = i(n("e617")), o = i(n("0747"));
            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function r(e, t, n, s, a, o, i) {
                try {
                    var r = e[o](i), c = r.value;
                } catch (u) {
                    return void n(u);
                }
                r.done ? t(c) : Promise.resolve(c).then(s, a);
            }
            function c(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(s, a) {
                        var o = e.apply(t, n);
                        function i(e) {
                            r(o, s, a, i, c, "next", e);
                        }
                        function c(e) {
                            r(o, s, a, i, c, "throw", e);
                        }
                        i(void 0);
                    });
                };
            }
            var u = {
                data: function() {
                    var e = this.getDate({
                        format: !0
                    });
                    return {
                        addressAll: "",
                        phones: "",
                        textModel: "",
                        remnant: 0,
                        system: {},
                        imgToken: "",
                        avar: "",
                        avarShow: !1,
                        userId: "",
                        yeartime: e.split("-")[0],
                        monthtime: e.split("-")[1],
                        daytime: e.split("-")[2],
                        userInfo: {},
                        arrow: this.$img.arrow,
                        everday: this.$img.everday,
                        date: e,
                        region: [ "", "", "" ],
                        regions: "",
                        spec: "请选择性别",
                        show: !1,
                        realname: "",
                        sex: "",
                        mobile: "",
                        province: "",
                        city: "",
                        district: "",
                        list: [ {
                            value: 1,
                            label: "男"
                        }, {
                            value: 2,
                            label: "女"
                        } ],
                        cc: "",
                        session_key: ""
                    };
                },
                computed: {
                    startDate: function() {
                        return this.getDate("start");
                    },
                    endDate: function() {
                        return this.getDate("end");
                    }
                },
                onLoad: function(t) {
                    var n = this;
                    this.getSystem(), this.id = t.id, this.userInfoes(), e.login({
                        provider: "weixin",
                        success: function(e) {
                            var t = e.code;
                            console.log("code=======", t), n.cc = t, n.getKeyByCode(n.cc);
                        },
                        fail: function(e) {
                            console.log("err=========", e), console.log(e);
                        }
                    });
                },
                onShow: function() {},
                methods: {
                    getKeyByCode: function(e, t, n) {
                        var o = this;
                        return c(s.default.mark(function i() {
                            var r, c, u, l, d, f;
                            return s.default.wrap(function(s) {
                                while (1) switch (s.prev = s.next) {
                                  case 0:
                                    return console.log("thiat.cc2222222222222222222222222", o.cc), s.next = 3, o.$http({
                                        url: o.$api.getKeyByCode,
                                        data: {
                                            code: e
                                        }
                                    });

                                  case 3:
                                    r = s.sent, 0 == r.code && (c = r.data.split("session_key")[1], u = c.split('"')[6], 
                                    l = c.split('"')[2], console.log("openid", u, "session_key", l), d = new a.default("wx7784dcc8307d40fb", l), 
                                    f = d.decryptData(t, n), console.log("data", f), o.phones = f.phoneNumber, console.log("调用接口session_key=-===========result.data", r.data, "this.session_key", o.session_key));

                                  case 5:
                                  case "end":
                                    return s.stop();
                                }
                            }, i);
                        }))();
                    },
                    addressSelect: function() {
                        var t = this;
                        e.chooseLocation({
                            success: function(e) {
                                console.log("成功=========", e), console.log("位置名称：" + e.name), console.log("详细地址：" + e.address), 
                                console.log("纬度：" + e.latitude), console.log("经度：" + e.longitude), t.addressAll = e.address;
                            },
                            fail: function(e) {
                                console.log("失败=========", e);
                            }
                        });
                    },
                    onGetPhoneNumber: function(t) {
                        var n = this;
                        if ("getPhoneNumber:ok" == t.detail.errMsg) {
                            console.log("用户点击了接受"), console.log(t.detail);
                            var s = t.detail.encryptedData, a = (t.detail.errMsg, t.detail.iv);
                            e.login({
                                provider: "weixin",
                                success: function(e) {
                                    console.log("_that.session_key", n.session_key);
                                    var t = e.code;
                                    n.cc = t, n.getKeyByCode(n.cc, s, a), console.log("调用接口that.getKeyByCode(_that.cc);===============");
                                },
                                fail: function(e) {
                                    console.log("err=========", e);
                                }
                            });
                        } else console.log("用户点击了拒绝");
                    },
                    descInput: function(e) {
                        this.remnant = e.detail.value.length, this.remnant >= 50 && this.$sun.toast("备注字数已达上限"), 
                        console.log(this.textModel, "text");
                    },
                    getSystem: function() {
                        var e = this;
                        return c(s.default.mark(function t() {
                            var n;
                            return s.default.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, e.$http({
                                        url: e.$api.system
                                    });

                                  case 2:
                                    n = t.sent, 0 == n.errno && (e.system = n.data, e.brTemplate = n.data.notice.br_template, 
                                    wx.setStorageSync("system", n.data));

                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    acceptMessage: function() {
                        var t = this;
                        wx.getSetting({
                            withSubscriptions: !0,
                            success: function(n) {
                                console.log(n.subscriptionsSetting), 0 == n.subscriptionsSetting.mainSwitch || e.requestSubscribeMessage({
                                    tmplIds: [ t.brTemplate ],
                                    success: function() {
                                        var e = c(s.default.mark(function e(n) {
                                            return s.default.wrap(function(e) {
                                                while (1) switch (e.prev = e.next) {
                                                  case 0:
                                                    console.log("总打印", n), "accept" == n[t.brTemplate] ? (console.log("授权成功", n), t.User()) : wx.showModal({
                                                        title: "温馨提示",
                                                        content: "您已拒绝授权，将无法在微信中收到通知！",
                                                        showCancel: !1,
                                                        success: function(e) {
                                                            e.confirm && (console.log("拒绝授权", n), t.User());
                                                        }
                                                    });

                                                  case 2:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            }, e);
                                        }));
                                        function n(t) {
                                            return e.apply(this, arguments);
                                        }
                                        return n;
                                    }(),
                                    fail: function(e) {
                                        console.log("失败", e), t.User();
                                    },
                                    complete: function(e) {
                                        console.log("完成", e);
                                    }
                                });
                            }
                        });
                    },
                    confirm: function(e) {
                        console.log(e), this.spec = e[0].label, this.sex = e[0].value, console.log("this.sex", this.sex, this.spec);
                    },
                    birsthday: function() {
                        this.$sun.toast("不允许二次修改生日");
                    },
                    bindDateChange: function(e) {
                        this.date = e.target.value, this.yeartime = this.date.split("-")[0], this.monthtime = this.date.split("-")[1], 
                        this.daytime = this.date.split("-")[2];
                    },
                    bindPickerChange: function(e) {
                        this.region[0] = e.target.value[0], this.region[1] = e.target.value[1], this.region[2] = e.target.value[2], 
                        this.province = e.target.value[0], this.city = e.target.value[1], this.district = e.target.value[2], 
                        this.regions = e.target.value[0] + "-" + e.target.value[1] + "-" + e.target.value[2];
                    },
                    getDate: function(e) {
                        var t = new Date(), n = t.getFullYear(), s = t.getMonth() + 1, a = t.getDate();
                        return console.log("出生年月11111111111111111", n, s, a), "start" === e ? n -= 60 : "end" === e && (n += 2), 
                        s = s > 9 ? s : "0" + s, a = a > 9 ? a : "0" + a, "".concat(n, "-").concat(s, "-").concat(a);
                    },
                    editUser: function() {
                        var e = this;
                        return this.realname ? this.mobile ? /^1[3456789]\d{9}$/.test(this.mobile) ? "" == this.yeartime || 0 == this.yeartime || void 0 == this.yeartime ? (this.$sun.toast("请选择出生日期"), 
                        !1) : this.sex ? this.addressAll ? (console.log("确定提交成功"), void o.default.uniDoFunc({
                            key: "submit",
                            success: function() {
                                var t = c(s.default.mark(function t() {
                                    return s.default.wrap(function(t) {
                                        while (1) switch (t.prev = t.next) {
                                          case 0:
                                            o.default.lockKey("submit"), console.log("防抖... 在事件触发前连续点击事件会重新计时"), e.brTemplate ? e.acceptMessage() : e.User();

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
                        })) : (this.$sun.toast("请选择省市区/县"), !1) : (this.$sun.toast("请选择性别"), !1) : (this.$sun.toast("请输入正确的手机号"), 
                        !1) : (this.$sun.toast("手机号不能为空"), !1) : (this.$sun.toast("请输入昵称"), !1);
                    },
                    User: function() {
                        var t = this;
                        return c(s.default.mark(function n() {
                            var a;
                            return s.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, t.$http({
                                        url: t.$api.user,
                                        data: {
                                            uid: e.getStorageSync("uid").id,
                                            nickname: t.realname,
                                            phone: t.mobile,
                                            sex: t.sex ? t.sex : 0,
                                            addres: t.addressAll,
                                            birthyear: 1 == t.userInfo.is_update_bir ? t.yeartime : "",
                                            birthmonth: 1 == t.userInfo.is_update_bir ? t.monthtime : "",
                                            birthday: 1 == t.userInfo.is_update_bir ? t.daytime : "",
                                            desc: t.textModel
                                        }
                                    });

                                  case 2:
                                    a = n.sent, 0 == a.errno ? (wx.setStorageSync("indexUrl", 1), t.$sun.toast("保存成功！"), 
                                    setTimeout(function() {
                                        e.navigateBack({
                                            delta: 1
                                        });
                                    }, 1e3)) : (o.default.releaseKey("submit"), t.$sun.toast(a.message));

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    userInfoes: function() {
                        var t = this;
                        return c(s.default.mark(function n() {
                            var a;
                            return s.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, t.$http({
                                        url: t.$api.userhy,
                                        data: {
                                            uid: e.getStorageSync("uid").id
                                        }
                                    });

                                  case 2:
                                    a = n.sent, 0 == a.errno && (t.userInfo = a.data, t.realname = a.data.nickname, 
                                    t.mobile = a.data.phone, t.sex = a.data.sex, 1 == a.data.sex || "1" == a.data.sex ? t.spec = "男" : 2 == a.data.sex || "2" == a.data.sex ? t.spec = "女" : t.spec = "请选择性别", 
                                    t.addressAll = a.data.addres, t.yeartime = a.data.birthyear, t.monthtime = a.data.birthmonth, 
                                    t.daytime = a.data.birthday, t.textModel = a.data.desc);

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    avatarInfo: function() {
                        var t = this;
                        return c(s.default.mark(function n() {
                            var a;
                            return s.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, t.$http({
                                        url: t.$api.avatar,
                                        data: {
                                            uid: e.getStorageSync("uid").id
                                        }
                                    });

                                  case 2:
                                    a = n.sent, 0 == a.errno && (t.avatarInfo = a.data);

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    }
                }
            };
            t.default = u;
        }).call(this, n("543d")["default"]);
    },
    "26e5": function(e, t, n) {
        "use strict";
        n.r(t);
        var s = n("608a"), a = n("e27d");
        for (var o in a) "default" !== o && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(o);
        n("5719");
        var i, r = n("f0c5"), c = Object(r["a"])(a["default"], s["b"], s["c"], !1, null, null, null, !1, s["a"], i);
        t["default"] = c.exports;
    },
    5719: function(e, t, n) {
        "use strict";
        var s = n("578d"), a = n.n(s);
        a.a;
    },
    "578d": function(e, t, n) {},
    "608a": function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "a", function() {
            return s;
        });
        var s = {
            uSelect: function() {
                return n.e("uview-ui/components/u-select/u-select").then(n.bind(null, "73e8"));
            }
        }, a = function() {
            var e = this, t = e.$createElement;
            e._self._c;
            e._isMounted || (e.e0 = function(t) {
                e.show = !0;
            });
        }, o = [];
    },
    7505: function(e, t, n) {
        "use strict";
        (function(e) {
            n("cee1");
            s(n("66fd"));
            var t = s(n("26e5"));
            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            e(t.default);
        }).call(this, n("543d")["createPage"]);
    },
    e27d: function(e, t, n) {
        "use strict";
        n.r(t);
        var s = n("1975"), a = n.n(s);
        for (var o in s) "default" !== o && function(e) {
            n.d(t, e, function() {
                return s[e];
            });
        }(o);
        t["default"] = a.a;
    }
}, [ [ "7505", "common/runtime", "common/vendor" ] ] ]);