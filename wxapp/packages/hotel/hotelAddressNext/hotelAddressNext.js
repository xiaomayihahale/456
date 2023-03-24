(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/hotel/hotelAddressNext/hotelAddressNext" ], {
    "0d23": function(e, t, n) {
        "use strict";
        var s;
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "c", function() {
            return r;
        }), n.d(t, "a", function() {
            return s;
        });
        var a = function() {
            var e = this, t = e.$createElement;
            e._self._c;
        }, r = [];
    },
    "27a9": function(e, t, n) {
        "use strict";
        var s = n("a8ce"), a = n.n(s);
        a.a;
    },
    a8ce: function(e, t, n) {},
    b16f: function(e, t, n) {
        "use strict";
        n.r(t);
        var s = n("0d23"), a = n("b4ec");
        for (var r in a) "default" !== r && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(r);
        n("27a9");
        var i, c = n("f0c5"), o = Object(c["a"])(a["default"], s["b"], s["c"], !1, null, null, null, !1, s["a"], i);
        t["default"] = o.exports;
    },
    b4ec: function(e, t, n) {
        "use strict";
        n.r(t);
        var s = n("cb82"), a = n.n(s);
        for (var r in s) "default" !== r && function(e) {
            n.d(t, e, function() {
                return s[e];
            });
        }(r);
        t["default"] = a.a;
    },
    cb82: function(e, t, n) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var s = r(n("a34a")), a = r(n("0747"));
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function i(e, t, n, s, a, r, i) {
                try {
                    var c = e[r](i), o = c.value;
                } catch (u) {
                    return void n(u);
                }
                c.done ? t(o) : Promise.resolve(o).then(s, a);
            }
            function c(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(s, a) {
                        var r = e.apply(t, n);
                        function c(e) {
                            i(r, s, a, c, o, "next", e);
                        }
                        function o(e) {
                            i(r, s, a, c, o, "throw", e);
                        }
                        c(void 0);
                    });
                };
            }
            var o = {
                data: function() {
                    return {
                        arrow: this.$img.arrow,
                        checked: !1,
                        region: [ "", "", "" ],
                        regions: "",
                        index: 0,
                        type: "",
                        id: "",
                        realname: "",
                        mobile: "",
                        province: "",
                        city: "",
                        district: "",
                        is_card: "",
                        idCard: "",
                        is_default: "",
                        message: ""
                    };
                },
                onShow: function() {
                    console.log("checked: this.type==1?true:false,", this.checked), a.default.releaseKey("submit"), 
                    this.getSystem();
                },
                onLoad: function(e) {
                    this.type = e.type, this.id = e.id, this.switchChecked = e.switchChecked, this.id && this.addressDetails(), 
                    1 == this.switchChecked && (this.checked = !0, this.realname = e.name, this.mobile = e.phone, 
                    console.log("进入type==1=", this.realname, this.mobile, this.checked));
                },
                methods: {
                    switch1Change: function(e) {
                        console.log("switch1 发生 change 事件，携带值为", e.target.value), this.checked = e.target.value;
                    },
                    getSystem: function() {
                        var e = this;
                        return c(s.default.mark(function t() {
                            var n;
                            return s.default.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, e.$http({
                                        url: e.$api.hotelSystem
                                    });

                                  case 2:
                                    n = t.sent, 0 == n.errno && (e.system = n.data, e.is_card = n.data.is_card);

                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    determine: function() {
                        var e = this, t = /^[1-9]{1}[0-9]{14}$|^[1-9]{1}[0-9]{16}([0-9]|[xX])$/;
                        return console.log("------确定------", this.checked), this.realname ? this.mobile ? /^1[3456789]\d{9}$/.test(this.mobile) ? 0 != this.is_card || this.idCard ? 0 != this.is_card || this.idCard.match(t) ? (console.log("确定提交成功", this.checked), 
                        void a.default.uniDoFunc({
                            key: "submit",
                            success: function() {
                                var t = c(s.default.mark(function t() {
                                    return s.default.wrap(function(t) {
                                        while (1) switch (t.prev = t.next) {
                                          case 0:
                                            a.default.lockKey("submit"), console.log("防抖... 在事件触发前连续点击事件会重新计时"), 2 == e.type ? e.addressEdits() : e.addressNews();

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
                        })) : (this.$sun.toast("请输入正确的身份证号"), !1) : (this.$sun.toast("身份证号不能为空"), !1) : (this.$sun.toast("请输入正确的手机号"), 
                        !1) : (this.$sun.toast("手机号不能为空"), !1) : (this.$sun.toast("请输入姓名"), !1);
                    },
                    addressClick: function() {
                        var t = this;
                        "" != this.realname || "" != this.mobile || "" != this.idCard ? e.showModal({
                            title: "提示",
                            content: "确认清空该地址？",
                            success: function() {
                                var e = c(s.default.mark(function e(n) {
                                    return s.default.wrap(function(e) {
                                        while (1) switch (e.prev = e.next) {
                                          case 0:
                                            n.confirm ? (t.realname = "", t.mobile = "", t.idCard = "") : n.cancel && console.log("用户点击取消");

                                          case 1:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e);
                                }));
                                function n(t) {
                                    return e.apply(this, arguments);
                                }
                                return n;
                            }()
                        }) : this.$sun.toast("联系方式为空");
                    },
                    deleteAddress: function() {
                        var t = this;
                        e.showModal({
                            title: "提示",
                            content: "确认删除该地址？",
                            success: function() {
                                var n = c(s.default.mark(function n(a) {
                                    var r;
                                    return s.default.wrap(function(n) {
                                        while (1) switch (n.prev = n.next) {
                                          case 0:
                                            if (!a.confirm) {
                                                n.next = 8;
                                                break;
                                            }
                                            return n.next = 3, t.$http({
                                                url: t.$api.del_persons,
                                                data: {
                                                    id: t.id
                                                }
                                            });

                                          case 3:
                                            r = n.sent, console.log("删除地址", r), 0 == r.errno ? e.showModal({
                                                title: "提示",
                                                showCancel: !1,
                                                content: r.message,
                                                success: function(t) {
                                                    if (t.confirm) e.navigateBack({
                                                        delta: 1
                                                    }); else if (t.cancel) return;
                                                }
                                            }) : t.$sun.toast(r.message), n.next = 9;
                                            break;

                                          case 8:
                                            a.cancel && console.log("用户点击取消");

                                          case 9:
                                          case "end":
                                            return n.stop();
                                        }
                                    }, n);
                                }));
                                function a(e) {
                                    return n.apply(this, arguments);
                                }
                                return a;
                            }()
                        });
                    },
                    addressDetails: function() {
                        var e = this;
                        return c(s.default.mark(function t() {
                            var n;
                            return s.default.wrap(function(t) {
                                while (1) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, e.$http({
                                        url: e.$api.get_single_persons,
                                        data: {
                                            id: e.id
                                        }
                                    });

                                  case 2:
                                    n = t.sent, 0 == n.errno && (e.realname = n.data.person_name, e.mobile = n.data.person_mobile, 
                                    e.idCard = n.data.person_card, e.checked = 2 == n.data.is_default, console.log("地址详情", n));

                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    addressNews: function() {
                        var t = this;
                        return c(s.default.mark(function n() {
                            return s.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    console.log("新增默认地址", t.checked), t.$http({
                                        url: t.$api.add_persons,
                                        show: !0,
                                        data: {
                                            uid: e.getStorageSync("uid").id,
                                            person_name: t.realname,
                                            person_mobile: t.mobile,
                                            person_card: 0 == t.is_card ? t.idCard : "",
                                            person_sex: "",
                                            person_addres: "",
                                            is_default: t.checked ? 2 : 1
                                        }
                                    }).then(function(t) {
                                        e.showModal({
                                            title: "提示",
                                            showCancel: !1,
                                            content: t.message,
                                            success: function(t) {
                                                if (t.confirm) e.navigateBack({
                                                    delta: 1
                                                }); else if (t.cancel) return;
                                            }
                                        });
                                    }).catch(function(e) {
                                        t.$sun.toast(e.message), a.default.releaseKey("submit");
                                    });

                                  case 2:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    addressEdits: function() {
                        var t = this;
                        return c(s.default.mark(function n() {
                            return s.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    console.log("修改默认地址", t.checked, t.realname, t.mobile), t.$http({
                                        url: t.$api.edit_persons,
                                        show: !0,
                                        data: {
                                            uid: e.getStorageSync("uid").id,
                                            person_name: t.realname,
                                            person_mobile: t.mobile,
                                            person_card: 0 == t.is_card ? t.idCard : "",
                                            person_sex: "",
                                            person_addres: "",
                                            id: t.id
                                        }
                                    }).then(function(n) {
                                        t.id == e.getStorageSync("personID") && (wx.setStorageSync("personName", t.realname), 
                                        wx.setStorageSync("personMobile", t.mobile), wx.setStorageSync("personCard", t.idCard)), 
                                        console.log(t.id, e.getStorageSync("personID"), t.id == e.getStorageSync("personID"), "this.id===(uni.getStorageSync)"), 
                                        e.showModal({
                                            title: "提示",
                                            showCancel: !1,
                                            content: n.message,
                                            success: function(t) {
                                                if (t.confirm) e.navigateBack({
                                                    delta: 1
                                                }); else if (t.cancel) return;
                                            }
                                        });
                                    }).catch(function(e) {
                                        t.$sun.toast(e.message), a.default.releaseKey("submit");
                                    });

                                  case 2:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    }
                }
            };
            t.default = o;
        }).call(this, n("543d")["default"]);
    },
    e3bb: function(e, t, n) {
        "use strict";
        (function(e) {
            n("cee1");
            s(n("66fd"));
            var t = s(n("b16f"));
            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            e(t.default);
        }).call(this, n("543d")["createPage"]);
    }
}, [ [ "e3bb", "common/runtime", "common/vendor" ] ] ]);