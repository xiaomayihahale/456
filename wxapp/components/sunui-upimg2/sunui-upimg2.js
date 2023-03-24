(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "components/sunui-upimg2/sunui-upimg2" ], {
    "31e2": function(t, e, i) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = {
                props: {
                    maxFileNumber: {
                        type: Number,
                        default: 9
                    },
                    btnName: {
                        type: String,
                        default: "添加照片"
                    },
                    items: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    },
                    closeBtnColor: {
                        type: String,
                        default: "#666666"
                    },
                    uploadServerUrl: {
                        type: String,
                        default: ""
                    },
                    progressSize: {
                        type: Number,
                        default: 1
                    },
                    progressColor: {
                        type: String,
                        default: "#27BD81"
                    },
                    progressBGColor: {
                        type: String,
                        default: "#F8F8F8"
                    },
                    fileName: {
                        type: String,
                        default: "img"
                    },
                    formData: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    },
                    imgMode: {
                        type: String,
                        default: "widthFix"
                    },
                    header: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    }
                },
                data: function() {
                    return {
                        camera: this.$img.camera,
                        imgLists: [],
                        updatting: !1
                    };
                },
                watch: {
                    imgLists: function(t, e) {
                        this.updatting || this.$emit("change", t);
                    }
                },
                methods: {
                    clearAllImgs: function() {
                        this.imgLists = [];
                    },
                    addImg: function() {
                        var e = this, i = this.maxFileNumber - this.imgLists.length;
                        if (i < 1) return !1;
                        t.chooseImage({
                            count: i,
                            sizeType: [ "compressed" ],
                            success: function(t) {
                                for (var i = 0; i < t.tempFilePaths.length; i++) e.imgLists.push({
                                    url: t.tempFilePaths[i],
                                    progress: 0,
                                    error: !1
                                });
                            },
                            complete: function() {},
                            fail: function() {}
                        });
                    },
                    removeImg: function(t) {
                        var e = t.currentTarget.id.replace("sunui-items-img-", ""), i = this.imgLists.splice(e, 1);
                        this.$emit("removeImg", i[0]);
                    },
                    showImgs: function(e) {
                        for (var i = e.currentTarget.dataset.imgurl, s = [], r = 0; r < this.imgLists.length; r++) s.push(this.imgLists[r].url);
                        t.previewImage({
                            urls: s,
                            current: i
                        });
                    },
                    upload: function(e) {
                        this.updatting || (this.updatting = !0, e || (e = 0), t.showLoading({
                            title: "图片上传中"
                        }), this.uploadBase(e));
                    },
                    retry: function(t) {
                        var e = t.currentTarget.dataset.index;
                        this.upload(e);
                    },
                    uploadBase: function(e) {
                        var i = this;
                        if (e > this.imgLists.length - 1) return t.hideLoading(), this.updatting = !1, void this.$emit("uploaded", this.imgLists);
                        if ("" != this.uploadServerUrl) if (this.imgLists[e].progress >= 1) this.uploadBase(e + 1); else {
                            this.imgLists[e].error = !1;
                            var s = t.uploadFile({
                                url: this.uploadServerUrl,
                                filePath: this.imgLists[e].url,
                                name: "file",
                                formData: this.formData,
                                header: this.header,
                                success: function(s) {
                                    console.log("uploadRes-------------", s), s = JSON.parse(s.data), console.log("uploadRes", s), 
                                    0 != s.code ? (t.showToast({
                                        title: "上传失败 : " + s.msg,
                                        icon: "none"
                                    }), i.error(e)) : (i.imgLists[e].progress = 100, i.imgLists[e].url = s.msg, i.imgLists[e].result = s, 
                                    i.uploadBase(e + 1));
                                },
                                fail: function(s) {
                                    t.showToast({
                                        title: "上传失败，请点击图片重试",
                                        icon: "none"
                                    }), i.error(e);
                                }
                            });
                            s.onProgressUpdate(function(t) {
                                t.progress > 0 && (i.imgLists[e].progress = t.progress, i.imgLists.splice(e, 1, i.imgLists[e]));
                            });
                        } else t.showToast({
                            title: "请设置上传服务器地址",
                            icon: "none"
                        });
                    },
                    error: function(t) {
                        var e = this;
                        this.updatting = !1, setTimeout(function() {
                            e.imgLists[t].progress = 0, e.imgLists[t].error = !0, e.$emit("uploaderror");
                        }, 500);
                    },
                    setItems: function(t) {
                        this.imgLists = [];
                        for (var e = 0; e < t.length; e++) this.imgLists.push({
                            url: t[e],
                            progress: 100
                        });
                    }
                }
            };
            e.default = i;
        }).call(this, i("543d")["default"]);
    },
    "3b32": function(t, e, i) {
        "use strict";
        i.r(e);
        var s = i("31e2"), r = i.n(s);
        for (var n in s) "default" !== n && function(t) {
            i.d(e, t, function() {
                return s[t];
            });
        }(n);
        e["default"] = r.a;
    },
    "83e5f": function(t, e, i) {
        "use strict";
        i.r(e);
        var s = i("ef9d"), r = i("3b32");
        for (var n in r) "default" !== n && function(t) {
            i.d(e, t, function() {
                return r[t];
            });
        }(n);
        i("c577");
        var o, u = i("f0c5"), a = Object(u["a"])(r["default"], s["b"], s["c"], !1, null, "6b4d4be6", null, !1, s["a"], o);
        e["default"] = a.exports;
    },
    c577: function(t, e, i) {
        "use strict";
        var s = i("e2da"), r = i.n(s);
        r.a;
    },
    e2da: function(t, e, i) {},
    ef9d: function(t, e, i) {
        "use strict";
        var s;
        i.d(e, "b", function() {
            return r;
        }), i.d(e, "c", function() {
            return n;
        }), i.d(e, "a", function() {
            return s;
        });
        var r = function() {
            var t = this, e = t.$createElement;
            t._self._c;
        }, n = [];
    }
} ]);

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ "components/sunui-upimg2/sunui-upimg2-create-component", {
    "components/sunui-upimg2/sunui-upimg2-create-component": function(module, exports, __webpack_require__) {
        __webpack_require__("543d")["createComponent"](__webpack_require__("83e5f"));
    }
}, [ [ "components/sunui-upimg2/sunui-upimg2-create-component" ] ] ]);