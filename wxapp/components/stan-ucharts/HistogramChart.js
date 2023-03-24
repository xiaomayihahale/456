(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "components/stan-ucharts/HistogramChart" ], {
    "06a4": function(t, a, e) {
        "use strict";
        e.r(a);
        var n = e("81d7"), c = e("6293");
        for (var i in c) "default" !== i && function(t) {
            e.d(a, t, function() {
                return c[t];
            });
        }(i);
        e("ae82");
        var o, r = e("f0c5"), s = Object(r["a"])(c["default"], n["b"], n["c"], !1, null, "105c0564", null, !1, n["a"], o);
        a["default"] = s.exports;
    },
    "0b50": function(t, a, e) {},
    "46ff": function(t, a, e) {
        "use strict";
        (function(t) {
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var n = c(e("866c"));
            function c(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            var i = {}, o = {}, r = {
                name: "HistogramChart",
                props: {
                    dataAs: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    },
                    basicAs: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    },
                    xAxisAs: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    },
                    yAxisAs: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    },
                    legendAs: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    },
                    extraAs: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    },
                    width: {
                        type: Number,
                        default: 750
                    },
                    height: {
                        type: Number,
                        default: 500
                    },
                    labelKey: {
                        type: String,
                        default: "categories"
                    },
                    valueKey: {
                        type: String,
                        default: "series"
                    },
                    canvasId: {
                        type: String,
                        default: "histogram_canvas_".concat(Math.ceil(1e4 * Math.random(5)))
                    }
                },
                data: function() {
                    return {};
                },
                computed: {
                    cWidth: function() {
                        return t.upx2px(this.width);
                    },
                    cHeight: function() {
                        return t.upx2px(this.height);
                    }
                },
                mounted: function() {},
                methods: {
                    showCharts: function() {
                        var t = this, a = {
                            $this: this,
                            canvasId: this.canvasId,
                            type: "column",
                            padding: [ 15, 15, 0, 15 ],
                            colors: [ "#ffc440" ],
                            rotate: !1,
                            rotateLock: !0,
                            enableScroll: !0,
                            enableMarkLine: !1,
                            animation: !0,
                            dataLabel: !0,
                            duration: 1e3,
                            fontSize: 12,
                            background: "transparent",
                            pixelRatio: 1,
                            width: this.cWidth,
                            height: this.cHeight,
                            categories: this.dataAs[this.labelKey],
                            series: this.dataAs[this.valueKey],
                            xAxis: {
                                type: "grid",
                                rotateLabel: !0,
                                itemCount: 5,
                                scrollShow: !0,
                                scrollAlign: "right",
                                scrollBackgroundColor: "#EFEBEF",
                                scrollColor: "#A6A6A6",
                                disabled: !1,
                                disableGrid: !0,
                                fontColor: "#666666",
                                boundaryGap: "center",
                                axisLine: !1,
                                axisLineColor: "#cccccc"
                            },
                            yAxis: {
                                disabled: !1,
                                position: "left",
                                format: function(a) {
                                    var e = {
                                        type: "number",
                                        fixed: 0,
                                        name: ""
                                    }, n = t.yAxisAs && t.yAxisAs.formatter ? Object.assign(e, t.yAxisAs.formatter) : e, c = n.type, i = n.fixed, o = n.name;
                                    if ("number" == c) return "".concat(a.toFixed(i)).concat(o);
                                    if ("percent" == c) {
                                        var r = o || "%";
                                        return "".concat((100 * a).toFixed(i)).concat(o).concat(r);
                                    }
                                    return a.toFixed(0);
                                },
                                title: ""
                            },
                            legend: {
                                show: !0,
                                position: "top",
                                float: "left",
                                padding: 10,
                                margin: 0
                            },
                            extra: {
                                column: {
                                    type: "group",
                                    width: .45 * this.cWidth / this.dataAs[this.labelKey].length
                                }
                            }
                        };
                        o[this.canvasId] = Object.assign(a, this.basicAs, this.xAxisAS, this.yAxisAS, this.legendAs, this.extraAs), 
                        i[this.canvasId] = new n.default(o[this.canvasId]);
                    },
                    touchstart: function(t) {
                        var a = this;
                        i[this.canvasId].touchLegend(t, {
                            animation: !1
                        }), i[this.canvasId].scrollStart(t), i[this.canvasId].showToolTip(t, {
                            format: function(t, e) {
                                var n, c = {
                                    type: "number",
                                    fixed: 0,
                                    name: ""
                                }, i = a.yAxisAs && a.yAxisAs.formatter ? Object.assign(c, a.yAxisAs.formatter) : c, o = i.type, r = i.fixed, s = i.name;
                                return "object" === typeof t.data ? "number" == o ? "".concat(e, " ").concat(t.name, ":").concat(t.data.value.toFixed(r)).concat(s) : "percent" == o ? (n = s || "%", 
                                "".concat(e, " ").concat(t.name, ":").concat((100 * t.data.value).toFixed(r)).concat(n)) : "".concat(e, " ").concat(t.name, ":").concat(t.data.value) : "number" == o ? "".concat(e, " ").concat(t.name, ":").concat(t.data.toFixed(r)).concat(s) : "percent" == o ? (n = s || "%", 
                                "".concat(e, " ").concat(t.name, ":").concat((100 * t.data).toFixed(r)).concat(n)) : "".concat(e, " ").concat(t.name, ":").concat(t.data);
                            }
                        });
                    },
                    touchmove: function(t) {
                        i[this.canvasId].scroll(t);
                    },
                    touchend: function(t) {
                        i[this.canvasId].scrollEnd(t);
                    },
                    changeData: function(t) {
                        var a = t.series, e = t.categories;
                        i[this.canvasId].updateData({
                            series: a,
                            categories: e
                        });
                    }
                }
            };
            a.default = r;
        }).call(this, e("543d")["default"]);
    },
    6293: function(t, a, e) {
        "use strict";
        e.r(a);
        var n = e("46ff"), c = e.n(n);
        for (var i in n) "default" !== i && function(t) {
            e.d(a, t, function() {
                return n[t];
            });
        }(i);
        a["default"] = c.a;
    },
    "81d7": function(t, a, e) {
        "use strict";
        var n;
        e.d(a, "b", function() {
            return c;
        }), e.d(a, "c", function() {
            return i;
        }), e.d(a, "a", function() {
            return n;
        });
        var c = function() {
            var t = this, a = t.$createElement;
            t._self._c;
        }, i = [];
    },
    ae82: function(t, a, e) {
        "use strict";
        var n = e("0b50"), c = e.n(n);
        c.a;
    }
} ]);

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ "components/stan-ucharts/HistogramChart-create-component", {
    "components/stan-ucharts/HistogramChart-create-component": function(module, exports, __webpack_require__) {
        __webpack_require__("543d")["createComponent"](__webpack_require__("06a4"));
    }
}, [ [ "components/stan-ucharts/HistogramChart-create-component" ] ] ]);