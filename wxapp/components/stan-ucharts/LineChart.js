(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "components/stan-ucharts/LineChart" ], {
    "2c48": function(t, e, a) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = i(a("866c"));
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            var c = {}, o = {}, r = {
                name: "LineChart",
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
                        default: "line_canvas_".concat(Math.ceil(1e4 * Math.random(5)))
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
                methods: {
                    showCharts: function() {
                        var t = this, e = {
                            $this: this,
                            canvasId: this.canvasId,
                            type: "line",
                            padding: [ 15, 15, 0, 15 ],
                            colors: [ "#fc8f14", "#aadddd" ],
                            rotate: !1,
                            rotateLock: !0,
                            enableScroll: !0,
                            enableMarkLine: !1,
                            animation: !0,
                            dataLabel: !0,
                            dataPointShape: !0,
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
                                scrollBackgroundColor: "#FFFFFF",
                                scrollColor: "#A6A6A6",
                                disabled: !1,
                                disableGrid: !0,
                                calibration: !0,
                                gridColor: "#FFFFFF",
                                gridType: "dash",
                                gridEval: 1,
                                dashLength: 4,
                                fontColor: "#666666",
                                boundaryGap: "center",
                                axisLine: !1,
                                axisLineColor: "#FFFFFF"
                            },
                            yAxis: {
                                disabled: !1,
                                position: "left",
                                format: function(e) {
                                    var a = {
                                        type: "number",
                                        fixed: 0,
                                        name: ""
                                    }, n = t.yAxisAs && t.yAxisAs.formatter ? Object.assign(a, t.yAxisAs.formatter) : a, i = n.type, c = n.fixed, o = n.name;
                                    if ("number" == i) return e.toFixed(c) + o;
                                    if ("percent" == i) {
                                        var r = o || "%";
                                        return (100 * e).toFixed(c) + r;
                                    }
                                    return e.toFixed(0);
                                }
                            },
                            legend: {
                                show: !0,
                                position: "top",
                                float: "left",
                                padding: 10,
                                margin: 0
                            },
                            extra: {
                                line: {
                                    type: "straight"
                                }
                            }
                        };
                        o[this.canvasId] = Object.assign(e, this.basicAs, this.xAxisAs, this.yAxisAs, this.legendAs, this.extraAs), 
                        c[this.canvasId] = new n.default(o[this.canvasId]);
                    },
                    touchstart: function(t) {
                        var e = this;
                        c[this.canvasId].touchLegend(t, {
                            animation: !1
                        }), c[this.canvasId].scrollStart(t), c[this.canvasId].showToolTip(t, {
                            format: function(t, a) {
                                var n, i = {
                                    type: "number",
                                    fixed: 0,
                                    name: ""
                                }, c = e.yAxisAs && e.yAxisAs.formatter ? Object.assign(i, e.yAxisAs.formatter) : i, o = c.type, r = c.fixed, s = c.name;
                                return "object" === typeof t.data ? "number" == o ? "".concat(a, " ").concat(t.name, ":").concat(t.data.value.toFixed(r)).concat(s) : "percent" == o ? (n = s || "%", 
                                "".concat(a, " ").concat(t.name, ":").concat((100 * t.data.value).toFixed(r)).concat(n)) : "".concat(a, " ").concat(t.name, ":").concat(t.data.value) : "number" == o ? "".concat(a, " ").concat(t.name, ":").concat(t.data.toFixed(r)).concat(s) : "percent" == o ? (n = s || "%", 
                                "".concat(a, " ").concat(t.name, ":").concat((100 * t.data).toFixed(r)).concat(n)) : "".concat(a, " ").concat(t.name, ":").concat(t.data);
                            }
                        });
                    },
                    touchmove: function(t) {
                        c[this.canvasId].scroll(t);
                    },
                    touchend: function(t) {
                        c[this.canvasId].scrollEnd(t);
                    },
                    changeData: function(t) {
                        var e = t.series, a = t.categories;
                        c[this.canvasId].updateData({
                            series: e,
                            categories: a
                        });
                    }
                }
            };
            e.default = r;
        }).call(this, a("543d")["default"]);
    },
    4583: function(t, e, a) {
        "use strict";
        a.r(e);
        var n = a("97d7"), i = a("edf3");
        for (var c in i) "default" !== c && function(t) {
            a.d(e, t, function() {
                return i[t];
            });
        }(c);
        var o, r = a("f0c5"), s = Object(r["a"])(i["default"], n["b"], n["c"], !1, null, null, null, !1, n["a"], o);
        e["default"] = s.exports;
    },
    "97d7": function(t, e, a) {
        "use strict";
        var n;
        a.d(e, "b", function() {
            return i;
        }), a.d(e, "c", function() {
            return c;
        }), a.d(e, "a", function() {
            return n;
        });
        var i = function() {
            var t = this, e = t.$createElement;
            t._self._c;
        }, c = [];
    },
    edf3: function(t, e, a) {
        "use strict";
        a.r(e);
        var n = a("2c48"), i = a.n(n);
        for (var c in n) "default" !== c && function(t) {
            a.d(e, t, function() {
                return n[t];
            });
        }(c);
        e["default"] = i.a;
    }
} ]);

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ "components/stan-ucharts/LineChart-create-component", {
    "components/stan-ucharts/LineChart-create-component": function(module, exports, __webpack_require__) {
        __webpack_require__("543d")["createComponent"](__webpack_require__("4583"));
    }
}, [ [ "components/stan-ucharts/LineChart-create-component" ] ] ]);