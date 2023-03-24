(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "packages/index/distribution-Audit/distribution-Audit" ], {
    "40e9": function(t, e, n) {
        "use strict";
        var u;
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {
            return u;
        });
        var a = function() {
            var t = this, e = t.$createElement;
            t._self._c;
        }, i = [];
    },
    "456c": function(t, e, n) {
        "use strict";
        n.r(e);
        var u = n("eb6e"), a = n.n(u);
        for (var i in u) "default" !== i && function(t) {
            n.d(e, t, function() {
                return u[t];
            });
        }(i);
        e["default"] = a.a;
    },
    "54a5": function(t, e, n) {},
    a87e: function(t, e, n) {
        "use strict";
        (function(t) {
            n("cee1");
            u(n("66fd"));
            var e = u(n("c166"));
            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            t(e.default);
        }).call(this, n("543d")["createPage"]);
    },
    ab38: function(t, e, n) {
        "use strict";
        var u = n("54a5"), a = n.n(u);
        a.a;
    },
    c166: function(t, e, n) {
        "use strict";
        n.r(e);
        var u = n("40e9"), a = n("456c");
        for (var i in a) "default" !== i && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(i);
        n("ab38");
        var r, c = n("f0c5"), o = Object(c["a"])(a["default"], u["b"], u["c"], !1, null, null, null, !1, u["a"], r);
        e["default"] = o.exports;
    },
    eb6e: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var u = a(n("a34a"));
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function i(t, e, n, u, a, i, r) {
                try {
                    var c = t[i](r), o = c.value;
                } catch (s) {
                    return void n(s);
                }
                c.done ? e(o) : Promise.resolve(o).then(u, a);
            }
            function r(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(u, a) {
                        var r = t.apply(e, n);
                        function c(t) {
                            i(r, u, a, c, o, "next", t);
                        }
                        function o(t) {
                            i(r, u, a, c, o, "throw", t);
                        }
                        c(void 0);
                    });
                };
            }
            var c = {
                data: function() {
                    return {
                        status: "",
                        successfulReview: this.$img.successfulReview,
                        auditFailure: this.$img.auditFailure,
                        underReview: this.$img.underReview
                    };
                },
                onLoad: function(e) {
                    this.options = e, this.status = e.status, 3 == this.status && (this.$sun.toast("您已通过审核"), 
                    setTimeout(function() {
                        t.redirectTo({
                            url: "/packages/index/DistributionManagement/DistributionManagement"
                        });
                    }, 1800));
                },
                methods: {
                    applyAudit: function() {
                        var e = this;
                        return r(u.default.mark(function n() {
                            var a;
                            return u.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, e.$http({
                                        url: e.$api.apply_audit,
                                        data: {
                                            uid: t.getStorageSync("uid").id
                                        }
                                    });

                                  case 2:
                                    a = n.sent, a.errno, e.$sun.toast(a.message), setTimeout(function() {
                                        t.navigateBack({
                                            delta: 1
                                        });
                                    }, 1800);

                                  case 4:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    applyAuditInfos: function() {
                        var e = this;
                        return r(u.default.mark(function n() {
                            var a;
                            return u.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, e.$http({
                                        url: e.$api.apply_audit_info,
                                        data: {
                                            uid: t.getStorageSync("uid").id
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
                    }
                }
            };
            e.default = c;
        }).call(this, n("543d")["default"]);
    }
}, [ [ "a87e", "common/runtime", "common/vendor" ] ] ]);