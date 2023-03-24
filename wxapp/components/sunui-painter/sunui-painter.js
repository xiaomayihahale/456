(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "components/sunui-painter/sunui-painter" ], {
    "0735": function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = s(n("a34a")), a = n("3500"), i = n("62fa"), o = n("4a3d");
            function s(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function u(t, e, n, r, a, i, o) {
                try {
                    var s = t[i](o), u = s.value;
                } catch (c) {
                    return void n(c);
                }
                s.done ? e(u) : Promise.resolve(u).then(r, a);
            }
            function c(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(r, a) {
                        var i = t.apply(e, n);
                        function o(t) {
                            u(i, r, a, o, s, "next", t);
                        }
                        function s(t) {
                            u(i, r, a, o, s, "throw", t);
                        }
                        o(void 0);
                    });
                };
            }
            var d = {
                name: "l-painter",
                props: {
                    board: Object,
                    fileType: {
                        type: String,
                        default: "jpg"
                    },
                    maxDrawCount: {
                        type: Number,
                        default: 5
                    },
                    width: [ Number, String ],
                    height: [ Number, String ],
                    pixelRatio: Number,
                    customStyle: String,
                    isRenderImage: Boolean,
                    isBase64ToPath: Boolean,
                    type: {
                        type: String,
                        default: "2d"
                    }
                },
                data: function() {
                    var t = "l-painter";
                    return {
                        drawCount: 0,
                        canvasId: t,
                        use2dCanvas: "2d" === this.type,
                        draw: null,
                        ctx: null
                    };
                },
                watch: {
                    newboard: {
                        handler: function(t, e) {
                            if ("{}" !== JSON.stringify(t)) {
                                var n = t || {}, r = n.width, a = n.height, i = e || {}, o = i.width, s = i.height;
                                r === o && a === s || (this.inited = !1, this.drawCount = 0), this.render();
                            }
                        },
                        immediate: !0,
                        deep: !0
                    }
                },
                computed: {
                    newboard: function() {
                        return this.board && JSON.parse(JSON.stringify(this.board));
                    },
                    isUse2dCanvas: function() {
                        return "2d" === this.type && this.use2dCanvas;
                    },
                    style: function() {
                        return "width:".concat(this.boardWidth, "px; height: ").concat(this.boardHeight, "px; ").concat(this.customStyle);
                    },
                    dpr: function() {
                        return this.pixelRatio || t.getSystemInfoSync().pixelRatio;
                    },
                    boardWidth: function() {
                        var t = this.board || {}, e = t.width, n = void 0 === e ? 200 : e;
                        return (0, a.toPx)(this.width || n);
                    },
                    boardHeight: function() {
                        var t = this.board || {}, e = t.height, n = void 0 === e ? 200 : e;
                        return (0, a.toPx)(this.height || n);
                    }
                },
                methods: {
                    render: function() {
                        var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        this.getContext().then(function() {
                            var n = c(r.default.mark(function n(o) {
                                var s, u, d, h, f, l, v, p;
                                return r.default.wrap(function(n) {
                                    while (1) switch (n.prev = n.next) {
                                      case 0:
                                        if (s = t.use2dCanvas, u = t.boardWidth, d = t.boardHeight, h = t.board, f = t.canvas, 
                                        l = t.isBase64ToPath, t.ctx || (t.ctx = o), v = e.width, p = e.height, !s || f) {
                                            n.next = 5;
                                            break;
                                        }
                                        return n.abrupt("return", Promise.reject(new Error("render: fail canvas has not been created")));

                                      case 5:
                                        return t.boundary = {
                                            top: 0,
                                            left: 0,
                                            width: u || v,
                                            height: d || p
                                        }, t.ctx.clearRect(0, 0, u, d), t.draw || (t.draw = new i.Draw(t.ctx, f, s)), n.next = 10, 
                                        t.draw.drawBoard("{}" != JSON.stringify(e) ? e : h);

                                      case 10:
                                        if (s) {
                                            n.next = 13;
                                            break;
                                        }
                                        return n.next = 13, t.canvasDraw(t.ctx);

                                      case 13:
                                        return t.$emit("done"), t.isRenderImage && t.canvasToTempFilePath().then(function() {
                                            var e = c(r.default.mark(function e(n) {
                                                var i, o;
                                                return r.default.wrap(function(e) {
                                                    while (1) switch (e.prev = e.next) {
                                                      case 0:
                                                        return e.next = 2, t.contrast(n.tempFilePath);

                                                      case 2:
                                                        if (i = e.sent, !i) {
                                                            e.next = 12;
                                                            break;
                                                        }
                                                        if (!/^data:image\/(\w+);base64/.test(n.tempFilePath) || !l) {
                                                            e.next = 11;
                                                            break;
                                                        }
                                                        return e.next = 7, (0, a.base64ToPath)(n.tempFilePath);

                                                      case 7:
                                                        o = e.sent, t.$emit("success", o), e.next = 12;
                                                        break;

                                                      case 11:
                                                        t.$emit("success", n.tempFilePath);

                                                      case 12:
                                                      case "end":
                                                        return e.stop();
                                                    }
                                                }, e);
                                            }));
                                            return function(t) {
                                                return e.apply(this, arguments);
                                            };
                                        }()).catch(function(e) {
                                            t.$emit("fail", e), new Error(JSON.stringify(e)), console.error(JSON.stringify(e));
                                        }), n.abrupt("return", Promise.resolve(!0));

                                      case 16:
                                      case "end":
                                        return n.stop();
                                    }
                                }, n);
                            }));
                            return function(t) {
                                return n.apply(this, arguments);
                            };
                        }());
                    },
                    canvasDraw: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.ctx;
                        return new Promise(function(e) {
                            t.draw(!1, function() {
                                e(!0);
                            });
                        });
                    },
                    getContext: function() {
                        var e = this;
                        if (this.ctx && this.inited) return Promise.resolve(this.ctx);
                        var n = this.type, r = this.isUse2dCanvas, a = this.dpr, i = this.boardWidth, s = this.boardHeight;
                        if (!r) {
                            var u = t.createCanvasContext(this.canvasId, this);
                            return Promise.resolve(u);
                        }
                        return new Promise(function(r) {
                            t.createSelectorQuery().in(e).select("#l-painter").node().exec(function(t) {
                                var u = t[0].node;
                                if (!u) return e.use2dCanvas = !1, e.getContext();
                                var c = u.getContext(n);
                                e.inited || (e.inited = !0, u.width = i * a, u.height = s * a, e.use2dCanvas = !0, 
                                e.canvas = u, c.scale(a, a)), r((0, o.adaptor)(c));
                            });
                        });
                    },
                    canvasToTempFilePath: function() {
                        var e = this, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = this.use2dCanvas, a = this.canvasId;
                        return new Promise(function(i, o) {
                            var s = e.boundary, u = s.top, c = void 0 === u ? 0 : u, d = s.left, h = void 0 === d ? 0 : d, f = s.width, l = s.height, v = f * e.dpr, p = l * e.dpr, g = {
                                x: h,
                                y: c,
                                width: f,
                                height: l,
                                destWidth: v,
                                destHeight: p,
                                canvasId: a,
                                fileType: n.fileType || e.fileType,
                                quality: n.quality || 1,
                                success: i,
                                fail: o
                            };
                            r && (delete g.canvasId, g.canvas = e.canvas), t.canvasToTempFilePath(g, e);
                        });
                    },
                    contrast: function(e) {
                        var n = this;
                        return new Promise(function(r, a) {
                            t.getImageInfo({
                                src: e,
                                success: function(t) {
                                    if (n.drawCount > n.maxDrawCount) {
                                        var e = "绘制了".concat(n.maxDrawCount, "次, 但结果还是不成功！");
                                        return console.error(e), n.$emit("fail", e), void r(!1);
                                    }
                                    Math.abs((t.width * n.boardHeight - n.boardWidth * t.height) / (t.height * n.boardHeight)) < .01 ? r(!0) : n.render(), 
                                    n.drawCount++;
                                },
                                fail: function(t) {
                                    console.error("getImageInfo:fail ".concat(e, " failed ").concat(JSON.stringify(t))), 
                                    n.$emit("fail", "".concat(JSON.stringify(t))), r(!0);
                                }
                            });
                        });
                    }
                }
            };
            e.default = d;
        }).call(this, n("543d")["default"]);
    },
    "0a22": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("583c"), a = n("889d");
        for (var i in a) "default" !== i && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(i);
        var o, s = n("f0c5"), u = Object(s["a"])(a["default"], r["b"], r["c"], !1, null, null, null, !1, r["a"], o);
        e["default"] = u.exports;
    },
    "583c": function(t, e, n) {
        "use strict";
        var r;
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {
            return r;
        });
        var a = function() {
            var t = this, e = t.$createElement;
            t._self._c;
        }, i = [];
    },
    "889d": function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n("0735"), a = n.n(r);
        for (var i in r) "default" !== i && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        e["default"] = a.a;
    }
} ]);

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ "components/sunui-painter/sunui-painter-create-component", {
    "components/sunui-painter/sunui-painter-create-component": function(module, exports, __webpack_require__) {
        __webpack_require__("543d")["createComponent"](__webpack_require__("0a22"));
    }
}, [ [ "components/sunui-painter/sunui-painter-create-component" ] ] ]);