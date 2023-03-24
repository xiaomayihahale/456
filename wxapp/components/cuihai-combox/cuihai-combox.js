(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "components/cuihai-combox/cuihai-combox" ], {
    "1c89": function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i("e463"), a = i.n(n);
        for (var r in n) "default" !== r && function(t) {
            i.d(e, t, function() {
                return n[t];
            });
        }(r);
        e["default"] = a.a;
    },
    "1cf8": function(t, e, i) {
        "use strict";
        var n;
        i.d(e, "b", function() {
            return a;
        }), i.d(e, "c", function() {
            return r;
        }), i.d(e, "a", function() {
            return n;
        });
        var a = function() {
            var t = this, e = t.$createElement, i = (t._self._c, t.showSelector ? t.__map(t.filterCandidates, function(e, i) {
                var n = t.__get_orig(e), a = t.isCheck(i);
                return {
                    $orig: n,
                    m0: a
                };
            }) : null);
            t.$mp.data = Object.assign({}, {
                $root: {
                    l0: i
                }
            });
        }, r = [];
    },
    2263: function(t, e, i) {
        "use strict";
        var n = i("7e39"), a = i.n(n);
        a.a;
    },
    "7e39": function(t, e, i) {},
    db4e: function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i("1cf8"), a = i("1c89");
        for (var r in a) "default" !== r && function(t) {
            i.d(e, t, function() {
                return a[t];
            });
        }(r);
        i("2263");
        var s, o = i("f0c5"), l = Object(o["a"])(a["default"], n["b"], n["c"], !1, null, "3f89a4e7", null, !1, n["a"], s);
        e["default"] = l.exports;
    },
    e463: function(t, e, i) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = {
                name: "comboxSearch",
                props: {
                    label: {
                        type: String,
                        default: ""
                    },
                    labelWidth: {
                        type: String,
                        default: "auto"
                    },
                    placeholder: {
                        type: String,
                        default: ""
                    },
                    candidates: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    },
                    emptyTips: {
                        type: String,
                        default: "无匹配项"
                    },
                    value: {
                        type: String,
                        default: ""
                    },
                    initValue: {
                        type: Array,
                        default: null
                    },
                    keyName: {
                        type: String,
                        default: ""
                    },
                    isJSON: {
                        type: Boolean,
                        default: !1
                    },
                    isDisabled: {
                        type: Boolean,
                        default: !1
                    },
                    isCheckBox: {
                        type: Boolean,
                        default: !1
                    },
                    color: {
                        default: "#000000",
                        type: String
                    },
                    selectColor: {
                        default: "#0081ff",
                        type: String
                    },
                    selectBgColor: {
                        default: "#e8e8e8",
                        type: String
                    }
                },
                data: function() {
                    return {
                        showSelector: !1,
                        inputVal: "",
                        arrays: [],
                        gid: "sm-org-dropDown-".concat(new Date().getTime()).concat(Math.random())
                    };
                },
                computed: {
                    labelStyle: function() {
                        return "auto" === this.labelWidth ? {} : {
                            width: this.labelWidth
                        };
                    },
                    filterCandidates: function() {
                        var t = this;
                        if (this.isDisabled) {
                            if (this.isJSON) {
                                var e = 0;
                                return this.candidates.filter(function(i) {
                                    return i.index = e, e++, void 0 != i[t.keyName];
                                });
                            }
                            return this.candidates;
                        }
                        if (this.isJSON) {
                            var i = 0;
                            return this.candidates.filter(function(e) {
                                return e.index = i, i++, e[t.keyName].indexOf(t.inputVal) > -1;
                            });
                        }
                        return this.candidates.filter(function(e) {
                            return e.indexOf(t.inputVal) > -1;
                        });
                    },
                    filterCandidatesLength: function() {
                        return this.filterCandidates.length;
                    }
                },
                created: function() {
                    var e = this;
                    null != this.initValue && (this.arrays = this.initValue, this.inputVal = this.getInpuevals()), 
                    t.$on("sm-org-dropDown-show", function(t) {
                        e.showSelector && e.gid != t && (e.showSelector = !1);
                    });
                },
                beforeDestroy: function() {
                    t.$off("sm-org-dropDown-show");
                },
                watch: {
                    value: {
                        handler: function(t) {
                            this.inputVal = t;
                        },
                        immediate: !0
                    }
                },
                methods: {
                    toggleSelector: function() {
                        this.showSelector = !this.showSelector, this.showSelector && t.$emit("sm-org-dropDown-show", this.gid);
                    },
                    onFocus: function() {
                        this.showSelector = !0, t.$emit("sm-org-dropDown-show", this.gid);
                    },
                    onBlur: function() {},
                    onSelectorClick: function(t, e) {
                        if (this.isCheckBox) {
                            var i = this.arrays.indexOf(t);
                            if (-1 != i) {
                                var n = (this.arrays || []).findIndex(function(e) {
                                    return e === t;
                                });
                                this.arrays.splice(n, 1), console.log("选择11", t, e);
                            } else this.arrays.push(t), console.log("选择22", t, e);
                            this.inputVal = this.getInpuevals(), this.isJSON ? (this.$emit("getValue", this.arrays), 
                            console.log("选择33", t, e)) : (this.$emit("getValue", this.trimSpace(this.inputVal.split(" "))), 
                            console.log("选择44", t, e));
                        } else this.showSelector = !1, this.isJSON ? (this.inputVal = this.filterCandidates[t][this.keyName], 
                        this.$emit("getValue", e.id), console.log("选择55", t, e, this.inputVal)) : (this.$emit("getValue", this.filterCandidates[t]), 
                        this.inputVal = this.filterCandidates[t], console.log("选择66", t, e));
                    },
                    trimSpace: function(t) {
                        for (var e = 0; e < t.length; e++) "" == t[e] && (t.splice(e, 1), e -= 1);
                        return t;
                    },
                    onInput: function() {
                        var t = this;
                        setTimeout(function() {
                            t.$emit("input", t.inputVal);
                        });
                    },
                    clearInputValue: function() {
                        this.inputVal = "", this.showSelector = !1, this.$emit("getValue", " ");
                    },
                    getInpuevals: function() {
                        var t = this;
                        return 0 == this.arrays.length ? this.inputVal = "" : (this.arrays.sort(function(t, e) {
                            return t - e;
                        }), this.inputVal = "", this.isJSON ? this.arrays.forEach(function(e) {
                            t.inputVal += t.candidates[e][t.keyName] + " ";
                        }) : this.arrays.forEach(function(e) {
                            t.inputVal += t.candidates[e] + " ";
                        })), this.inputVal;
                    },
                    isCheck: function(t) {
                        return -1 != this.arrays.indexOf(t);
                    }
                }
            };
            e.default = i;
        }).call(this, i("543d")["default"]);
    }
} ]);

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ "components/cuihai-combox/cuihai-combox-create-component", {
    "components/cuihai-combox/cuihai-combox-create-component": function(module, exports, __webpack_require__) {
        __webpack_require__("543d")["createComponent"](__webpack_require__("db4e"));
    }
}, [ [ "components/cuihai-combox/cuihai-combox-create-component" ] ] ]);