(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "components/uni-number-box/uni-number-box" ], {
    "26a6": function(t, e, n) {
        "use strict";
        n.r(e);
        var u = n("8dd5"), i = n("c62f");
        for (var a in i) "default" !== a && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(a);
        n("6054");
        var l, s = n("f0c5"), r = Object(s["a"])(i["default"], u["b"], u["c"], !1, null, null, null, !1, u["a"], l);
        e["default"] = r.exports;
    },
    "571e": function(t, e, n) {},
    6054: function(t, e, n) {
        "use strict";
        var u = n("571e"), i = n.n(u);
        i.a;
    },
    "8dd5": function(t, e, n) {
        "use strict";
        var u;
        n.d(e, "b", function() {
            return i;
        }), n.d(e, "c", function() {
            return a;
        }), n.d(e, "a", function() {
            return u;
        });
        var i = function() {
            var t = this, e = t.$createElement;
            t._self._c;
        }, a = [];
    },
    c62f: function(t, e, n) {
        "use strict";
        n.r(e);
        var u = n("ded6"), i = n.n(u);
        for (var a in u) "default" !== a && function(t) {
            n.d(e, t, function() {
                return u[t];
            });
        }(a);
        e["default"] = i.a;
    },
    ded6: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var u = {
            name: "UniNumberBox",
            props: {
                value: {
                    type: [ Number, String ],
                    default: 1
                },
                text: {
                    type: String,
                    default: "加入购物车"
                },
                min: {
                    type: Number,
                    default: 0
                },
                max: {
                    type: Number,
                    default: 100
                },
                step: {
                    type: Number,
                    default: 1
                },
                disabled: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    inputValue: 0
                };
            },
            watch: {
                value: function(t) {
                    this.inputValue = +t;
                },
                inputValue: function(t, e) {
                    +t !== +e && (this.$emit("input", t), this.$emit("change", t), console.log("newVal", t));
                }
            },
            created: function() {
                this.inputValue = +this.value;
            },
            mounted: function() {
                console.log("vakue:", this.value, this.max);
            },
            methods: {
                _calcValue: function(t) {
                    if (!this.disabled) {
                        var e = this._getDecimalScale(), n = this.inputValue * e, u = this.step * e;
                        "minus" === t ? n -= u : "plus" === t && (n += u), n < this.min || n > this.max || (this.inputValue = n / e);
                    }
                },
                _getDecimalScale: function() {
                    var t = 1;
                    return ~~this.step !== this.step && (t = Math.pow(10, (this.step + "").split(".")[1].length)), 
                    t;
                },
                _onBlur: function(t) {
                    var e = t.detail.value;
                    e ? (e = +e, e > this.max ? e = this.max : e < this.min && (e = this.min), this.inputValue = e) : this.inputValue = 0;
                }
            }
        };
        e.default = u;
    }
} ]);

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ "components/uni-number-box/uni-number-box-create-component", {
    "components/uni-number-box/uni-number-box-create-component": function(module, exports, __webpack_require__) {
        __webpack_require__("543d")["createComponent"](__webpack_require__("26a6"));
    }
}, [ [ "components/uni-number-box/uni-number-box-create-component" ] ] ]);