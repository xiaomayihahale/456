(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "components/sunui-tab/sunui-tab" ], {
    "0244": function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("c19e"), r = n("7032");
        for (var u in r) "default" !== u && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(u);
        n("670f");
        var c, a = n("f0c5"), s = Object(a["a"])(r["default"], i["b"], i["c"], !1, null, null, null, !1, i["a"], c);
        e["default"] = s.exports;
    },
    1362: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = {
                name: "sunui-tab",
                props: {
                    selectColor: {
                        type: String,
                        default: "#FF6145"
                    },
                    sty: {
                        type: String
                    },
                    navArr: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    },
                    tabCurrentIndex: {
                        type: Number,
                        default: 0
                    }
                },
                data: function() {
                    return {
                        scrollLeft: 0,
                        widthList: [],
                        screenWidth: 0
                    };
                },
                methods: {
                    tabChange: function(t) {
                        this.$emit("navbarTap", t);
                        for (var e = this.widthList, n = 0, i = 0; i < t + 1; i++) n += e[i];
                        var r = e[t];
                        n -= this.screenWidth / 2, n -= r / 2, this.scrollLeft = n;
                    },
                    calculateItemWidth: function() {
                        var e = this, n = [];
                        this.navArr.forEach(function(i, r) {
                            var u = t.createSelectorQuery().in(e).select("#item-" + r);
                            u.fields({
                                size: !0
                            }, function(t) {
                                n.push(t.width);
                            }).exec();
                        }), this.widthList = n;
                    },
                    calculateWindowWidth: function() {
                        var e = t.getSystemInfoSync();
                        this.screenWidth = e.screenWidth;
                    }
                },
                created: function() {
                    var t = this;
                    this.calculateWindowWidth(), setTimeout(function() {
                        t.calculateItemWidth();
                    }, 1e3);
                }
            };
            e.default = n;
        }).call(this, n("543d")["default"]);
    },
    "670f": function(t, e, n) {
        "use strict";
        var i = n("fcd9"), r = n.n(i);
        r.a;
    },
    7032: function(t, e, n) {
        "use strict";
        n.r(e);
        var i = n("1362"), r = n.n(i);
        for (var u in i) "default" !== u && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(u);
        e["default"] = r.a;
    },
    c19e: function(t, e, n) {
        "use strict";
        var i;
        n.d(e, "b", function() {
            return r;
        }), n.d(e, "c", function() {
            return u;
        }), n.d(e, "a", function() {
            return i;
        });
        var r = function() {
            var t = this, e = t.$createElement;
            t._self._c;
        }, u = [];
    },
    fcd9: function(t, e, n) {}
} ]);

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ "components/sunui-tab/sunui-tab-create-component", {
    "components/sunui-tab/sunui-tab-create-component": function(module, exports, __webpack_require__) {
        __webpack_require__("543d")["createComponent"](__webpack_require__("0244"));
    }
}, [ [ "components/sunui-tab/sunui-tab-create-component" ] ] ]);