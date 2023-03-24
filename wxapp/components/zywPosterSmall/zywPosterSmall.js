(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "components/zywPosterSmall/zywPosterSmall" ], {
    "0472": function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("fac6"), c = n.n(o);
        for (var i in o) "default" !== i && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        e["default"] = c.a;
    },
    "715c": function(t, e, n) {
        "use strict";
        var o = n("a3a0"), c = n.n(o);
        c.a;
    },
    a3a0: function(t, e, n) {},
    f294: function(t, e, n) {
        "use strict";
        var o;
        n.d(e, "b", function() {
            return c;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {
            return o;
        });
        var c = function() {
            var t = this, e = t.$createElement;
            t._self._c;
        }, i = [];
    },
    f447: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n("f294"), c = n("0472");
        for (var i in c) "default" !== i && function(t) {
            n.d(e, t, function() {
                return c[t];
            });
        }(i);
        n("715c");
        var s, a = n("f0c5"), r = Object(a["a"])(c["default"], o["b"], o["c"], !1, null, "44855718", null, !1, o["a"], s);
        e["default"] = r.exports;
    },
    fac6: function(t, e, n) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = c(n("a34a"));
            function c(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function i(t, e, n, o, c, i, s) {
                try {
                    var a = t[i](s), r = a.value;
                } catch (l) {
                    return void n(l);
                }
                a.done ? e(r) : Promise.resolve(r).then(o, c);
            }
            function s(t) {
                return function() {
                    var e = this, n = arguments;
                    return new Promise(function(o, c) {
                        var s = t.apply(e, n);
                        function a(t) {
                            i(s, o, c, a, r, "next", t);
                        }
                        function r(t) {
                            i(s, o, c, a, r, "throw", t);
                        }
                        a(void 0);
                    });
                };
            }
            var a = "", r = {
                props: {},
                data: function() {
                    return {
                        tempImgShow: !1,
                        tempImg: "",
                        cansWidth: 315,
                        cansHeight: 476,
                        guanbi: this.$img.guanbi
                    };
                },
                created: function() {
                    this.ctx = t.createCanvasContext("zwyPoster", this), this.ctx.setFillStyle("#FFFFFF"), 
                    this.ctx.fillRect(0, 0, 315, 476), this.ctx.draw();
                },
                methods: {
                    sleep: function() {
                        return new Promise(function(t, e) {
                            setTimeout(function() {
                                t();
                            }, 200);
                        });
                    },
                    drawPoster: function(t) {
                        var e = this;
                        return s(o.default.mark(function n() {
                            return o.default.wrap(function(n) {
                                while (1) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, e.sleep();

                                  case 2:
                                    return n.next = 4, e.drawWebBgTest({
                                        url: t.icon,
                                        sLeft: 0,
                                        sTop: 0,
                                        sWidth: 1,
                                        sHeight: 1
                                    });

                                  case 4:
                                    return n.next = 6, e.drawWebBgTest({
                                        url: t.code,
                                        sLeft: .18,
                                        sTop: .54,
                                        sWidth: .628,
                                        sHeight: .411
                                    }).then(function() {
                                        e.saveCans();
                                    });

                                  case 6:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    longpress: function() {
                        var e = this;
                        t.saveImageToPhotosAlbum({
                            filePath: this.tempImg,
                            success: function(n) {
                                t.showToast({
                                    title: "保存相册成功"
                                }), e.closeCans(), console.log("save success");
                            },
                            fail: function(e) {
                                console.log(e), "saveImageToPhotosAlbum:fail auth deny" == e.errMsg && t.showModal({
                                    title: "您需要授权相册权限",
                                    success: function(e) {
                                        e.confirm && t.openSetting({
                                            success: function(t) {},
                                            fail: function(t) {
                                                console.log(t);
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    },
                    measureText: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
                        return function(t) {
                            t = String(t);
                            t = t.split("");
                            var n = 0;
                            return t.forEach(function(t) {
                                /[a-zA-Z]/.test(t) ? n += 7 : /[0-9]/.test(t) ? n += 5.5 : /\./.test(t) ? n += 2.7 : /-/.test(t) ? n += 3.25 : /[\u4e00-\u9fa5]/.test(t) ? n += 10 : /\(|\)/.test(t) ? n += 3.73 : /\s/.test(t) ? n += 2.5 : /%/.test(t) ? n += 8 : n += 10;
                            }), n * e / 10;
                        }(t);
                    },
                    closeCans: function() {
                        this.$emit("closePost");
                    },
                    drawForm: function(t, e) {
                        var n = this;
                        return new Promise(function(o, c) {
                            for (var i = 20, s = .9 * n.cansWidth, r = i * (t.length + 2) + a, l = {}, f = 0; f < e.length + 1; f++) 0 == f ? l[0] = .1 * n.cansWidth : f == e.length ? l[f] = .9 * n.cansWidth : l[f] = n.cansWidth * e[f]["sWidth"];
                            n.ctx.lineWidth = .5, n.ctx.setFontSize(8), n.ctx.setTextBaseline("top");
                            for (f = 0; f <= e.length + 1; f++) n.ctx.moveTo(l[f], a + i), n.ctx.lineTo(l[f], r);
                            for (f = 0; f <= t.length + 1; f++) {
                                var u = i * (f + 1) + a;
                                if (n.ctx.moveTo(l[0], u), n.ctx.lineTo(s, u), f <= t.length) if (0 == f) for (var h = 0; h < e.length; h++) n.ctx.fillText(e[h].name, l[h] + 8, u + 8); else {
                                    var d = f - 1;
                                    for (var x in t[d]) n.ctx.fillText(t[d][x], l[x] + 8, u + 8);
                                }
                            }
                            n.ctx.stroke(), n.ctx.draw(!0), setTimeout(function() {
                                a = r + 30, o();
                            }, 50);
                        });
                    },
                    saveCans: function() {
                        console.log("保存");
                        var e = 1.5, n = this;
                        t.canvasToTempFilePath({
                            x: 0,
                            y: 0,
                            width: n.cansWidth * e,
                            height: n.cansHeight * e,
                            destWidth: n.cansWidth * e * 2,
                            destHeight: n.cansHeight * e * 2,
                            fileType: "jpg",
                            canvasId: "zwyPoster",
                            success: function(e) {
                                t.hideLoading(), n.tempImg = e.tempFilePath, setTimeout(function() {
                                    n.tempImgShow = !0;
                                }, 100);
                            },
                            fail: function(e) {
                                t.hideLoading(), console.log(e);
                            }
                        }, this);
                    },
                    circleImg: function(e, n, o, c) {
                        var i = this;
                        return new Promise(function(s, a) {
                            t.downloadFile({
                                url: e,
                                success: function(t) {
                                    console.log(t), n = Math.ceil(i.cansWidth * n), o = Math.ceil(i.cansHeight * o), 
                                    c = c > 1 ? c : Math.ceil(i.cansWidth * c), i.ctx.save();
                                    var e = 2 * c, a = n + c, r = o + c;
                                    i.ctx.arc(a, r, c, 0, 2 * Math.PI), i.ctx.clip(), console.log(t.tempFilePath), i.ctx.drawImage(t.tempFilePath, n, o, e, e), 
                                    i.ctx.restore(), i.ctx.draw(!0), s();
                                },
                                fail: function(t) {
                                    console.log(t), s();
                                }
                            });
                        });
                    },
                    drawPara: function(t) {
                        var e = this;
                        return new Promise(function(n, o) {
                            var c, i = {};
                            if (t.redWord.length > 0) for (var s = 0; s < t.redWord.length; s++) {
                                var a = 0, r = void 0;
                                while ((r = t.para.indexOf(t.redWord[s], a)) > -1) {
                                    i[r] = !0;
                                    for (var l = 0; l < t.redWord[s].length; l++) i[r + l] = !0;
                                    a = r + 1;
                                }
                            }
                            e.ctx.font = "normal normal ".concat(t.fontSize, "px sans-serif"), e.ctx.setFillStyle(t.color), 
                            c = "center" == t.sLeft ? e.cansWidth * (.5 - t.sMaxWidth / 2) - t.fontSize : t.sLeft * e.cansWidth - 10;
                            var f = Math.floor(e.cansWidth * t.sMaxWidth);
                            console.log(t.sMaxWidth), console.log(f);
                            var u = t.para.split(""), h = "", d = 0, x = 0;
                            for (s = 0; s < u.length; s++) h += s > 0 ? u[s - 1] : u[0], x = e.measureText(h, t.fontSize), 
                            x > f && (d++, h = "占", x = e.measureText(h, t.fontSize)), i[s] && (e.ctx.save(), 
                            t.bold && (e.ctx.font = "normal bold ".concat(t.fontSize, "px sans-serif")), e.ctx.setFillStyle(t.redColor)), 
                            e.ctx.fillText(u[s], c + x, t.sTop * e.cansHeight + t.titleHeight * d), e.ctx.restore();
                            e.ctx.draw(!0), setTimeout(function() {
                                n();
                            }, 50);
                        });
                    },
                    drawBg: function(t) {
                        var e = this;
                        return new Promise(function(n, o) {
                            var c, i, s, a, r;
                            i = t.sTop <= 1 ? e.cansHeight * t.sTop : t.sTop, s = t.sWidth <= 1 ? e.cansWidth * t.sWidth : t.sWidth, 
                            a = t.sHeight <= 1 ? e.cansHeight * t.sHeight : t.sHeight, c = "center" == t.sLeft ? t.sWidth <= 1 ? e.cansWidth * (.5 - t.sWidth / 2) : .5 * e.cansWidth - t.sWidth / 2 : e.cansWidth * t.sLeft, 
                            t.r ? (r = t.r, e.ctx.save(), s < 2 * r && (r = s / 2), a < 2 * r && (r = a / 2), 
                            e.ctx.beginPath(), e.ctx.moveTo(c + r, i), e.ctx.arcTo(c + s, i, c + s, i + a, r), 
                            e.ctx.arcTo(c + s, i + a, c, i + a, r), e.ctx.arcTo(c, i + a, c, i, r), e.ctx.arcTo(c, i, c + s, i, r), 
                            e.ctx.closePath(), e.ctx.clip(), e.ctx.drawImage(t.url, c, i, s, a), e.ctx.restore(), 
                            e.ctx.draw(!0)) : (e.ctx.drawImage(t.url, c, i, s, a), e.ctx.draw(!0)), console.log(t.url), 
                            setTimeout(function() {
                                n();
                            }, 50);
                        });
                    },
                    drawWebBgTest: function(e) {
                        var n = this;
                        return new Promise(function(o, c) {
                            t.downloadFile({
                                url: e.url,
                                success: function(t) {
                                    var c, i, s, a, r;
                                    i = n.cansHeight * e.sTop, s = n.cansWidth * e.sWidth, a = e.sHeight ? n.cansHeight * e.sHeight : s, 
                                    c = "center" == e.sLeft ? n.cansWidth * (.5 - e.sWidth / 2) : n.cansWidth * e.sLeft, 
                                    e.r ? (r = e.r, n.ctx.save(), n.ctx.beginPath(), n.ctx.arc(c + r, i + r, r, Math.PI, 1.5 * Math.PI), 
                                    n.ctx.moveTo(c + r, i), n.ctx.lineTo(c + s - r, i), n.ctx.lineTo(c + s, i + r), 
                                    n.ctx.arc(c + s - r, i + r, r, 1.5 * Math.PI, 2 * Math.PI), n.ctx.lineTo(c + s, i + a - r), 
                                    n.ctx.lineTo(c + s - r, i + a), n.ctx.arc(c + s - r, i + a - r, r, 0, .5 * Math.PI), 
                                    n.ctx.lineTo(c + r, i + a), n.ctx.lineTo(c, i + a - r), n.ctx.arc(c + r, i + a - r, r, .5 * Math.PI, Math.PI), 
                                    n.ctx.lineTo(c, i + r), n.ctx.lineTo(c + r, i), n.ctx.closePath(), n.ctx.clip(), 
                                    n.ctx.drawImage(t.tempFilePath, c, i, s, a), n.ctx.restore(), n.ctx.draw(!0)) : (n.ctx.drawImage(t.tempFilePath, c, i, s, a), 
                                    n.ctx.draw(!0)), o();
                                }
                            });
                        });
                    },
                    drawText: function(t) {
                        var e = this;
                        return new Promise(function(n, o) {
                            var c;
                            if (e.ctx.save(), t.bold && (e.ctx.font = "normal bold ".concat(t.fontSize, "px sans-serif")), 
                            e.ctx.setFillStyle(t.color), e.ctx.setFontSize(t.fontSize), "center" == t.sLeft) {
                                var i = e.measureText(t.text, t.fontSize);
                                c = .5 * e.cansWidth - i / 2;
                            } else c = t.sLeft <= 1 ? t.sLeft * e.cansWidth : t.sLeft;
                            t.sTop;
                            if (t.sTop <= 1 && (t.sTop = t.sTop * e.cansHeight), t.text instanceof Array) {
                                t.lineHeight || (t.lineHeight = t.fontSize + 2), console.log("我是数组", t.text);
                                for (var s = 0; s < t.text.length; s++) e.ctx.fillText(t.text[s], c, t.sTop + t.lineHeight * s);
                            } else console.log("我是字符串", t.text), e.ctx.fillText(t.text, c, t.sTop);
                            e.ctx.draw(!0), e.ctx.restore(), setTimeout(function() {
                                n();
                            }, 50);
                        });
                    }
                }
            };
            e.default = r;
        }).call(this, n("543d")["default"]);
    }
} ]);

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ "components/zywPosterSmall/zywPosterSmall-create-component", {
    "components/zywPosterSmall/zywPosterSmall-create-component": function(module, exports, __webpack_require__) {
        __webpack_require__("543d")["createComponent"](__webpack_require__("f447"));
    }
}, [ [ "components/zywPosterSmall/zywPosterSmall-create-component" ] ] ]);