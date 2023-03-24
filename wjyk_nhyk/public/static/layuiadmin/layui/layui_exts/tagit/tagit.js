/*
 * @Author: Peak Xin<xinyflove@gmail.com>
 * @Date:   2021-03-05
 * @Description: 多标签选择器
 */
layui.define(['jquery', 'layer'], function(exports) {
	"use strict";
	let timer = null;
	const $ = layui.jquery,
		layer = layui.layer,
		v = '1.0.0'
		//外部接口
		,
		tagit = {
			config: {}

			//设置全局项
			,
			set: function(options) {
					var that = this;
					that.config = $.extend({}, that.config, options);
					return that;
				}

				// 事件监听
				,
			on: function(events, callback) {
				return layui.onevent.call(this, MOD_NAME, events, callback)
			}
		}

		//操作当前实例
		,
		thisTagit = function() {
			var that = this,
				options = that.config;

			return {
				v: v,
				config: options,
				getData: function() {
					return options.content;
				}
			}
		}

		//字符常量
		,
		MOD_NAME = 'tagit'

		// 标签选择模版
		,
		tagitChoiceTemp = function(text) {
			return '<li class="tagit-choice"><span>' + text +
				'</span><a href="javascript:;" class="close">×</a></li>';
		}

		// 标签输入模版
		,
		tagitNewTemp = function() {
			return '<li class="tagit-new"><input type="text" placeholder="回车生成标签" autocomplete="off"></li>';
		}

		// 自动匹配盒子
		,
		tagitAutocompleteUl = function() {
			return '<ul class="tagit-autocomplete" style="display: none;"></ul>';
		}

		// 拼装获取的标签数据
		,
		getTagitAutocomplete = function(options, list) {
			var html = '';

			if (list && list.length) {
				layui.each(list, (index, item) => {
					html += '<li><a href="javascript:;" data-id="' + item.id + '" data-name="' + item
						.name + '">' + item.name + '</a></li>';
				});
			}

			options.autocompleteUl.html(html);
			if (html) {
				options.autocompleteUl.show();
			} else {
				options.autocompleteUl.hide();
			}
		}

		// 构造器
		,
		Class = function(options) {
			var that = this;
			that.config = $.extend({}, that.config, tagit.config, options);
			that.render();
		};

	//默认配置
	Class.prototype.config = {
		url: '', // 远程链接
		list: {}, // 展示下来列表数据
		limit: 0, // 选择数量限制，0没有限制
		content: [] // 默认标签
	};

	// 初始化
	Class.prototype.init = function() {
		var that = this,
			tagitChoice = '',
			options = that.config;

		options.elem.append(tagitNewTemp());

		if (options.limit && options.content.length > options.limit) {
			options.content = options.content.slice(0, options.limit);
		}
		$.each(options.content, function(index, item) {
			tagitChoice += tagitChoiceTemp(item);
		});
		options.tagitNew = options.elem.find('.tagit-new');
		options.tagitInput = options.elem.find('.tagit-new input[type="text"]');
		options.tagitNew.before(tagitChoice);
		options.tagitNew.append(tagitAutocompleteUl());
		options.autocompleteUl = options.elem.find('.tagit-autocomplete');

		that.events();
		that.enter();
	}

	Class.prototype.render = function() {
		var that = this,
			options = that.config;
		options.elem = $(options.elem);
	};

	// 回车生成标签
	Class.prototype.enter = function() {
		var that = this,
			tagit = '',
			options = that.config;

		//options.tagitInput.focus();
		options.tagitInput.keypress(function(event) {
			var keynum = (event.keyCode ? event.keyCode : event.which);
			if (keynum == '13') {
				var $val = options.tagitInput.val().trim();
				if (!$val) return false;

				if (options.content.indexOf($val) == -1) {
					if (options.limit && options.content.length >= options.limit) {
						var val = options.content.shift();
						options.elem.children().first().remove();
					}

					options.content.push($val)
					that.render();
					tagit = tagitChoiceTemp($val);
					options.tagitNew.before(tagit)
				}
				options.done && typeof options.done === 'function' && options.done($val);
				options.tagitInput.val('');
				$('.tagit .tagit-autocomplete').hide();
			}
		})
	};

	//事件处理
	Class.prototype.events = function() {
		var that = this,
			options = that.config;

		/* 删除标签事件 */
		options.elem.on('click', '.close', function() {
			var Thisremov = $(this).parent('li').remove();
			var ThisText = $(Thisremov).find('span').text();
			options.content.splice($.inArray(ThisText, options.content), 1)
		});

		/* 输入框聚焦事件 */
		options.elem.on('focus', 'input[type="text"]', function() {
			let tag = $(this).val();
			let url = options.url;
			$('.tagit .tagit-autocomplete').hide();

			options.setData && typeof options.setData === 'function' && options.setData(url,
				tag,
				function(list) {
					getTagitAutocomplete(options, list);
				});

			return false;
		});

		/* 输入框按键事件 */
		options.elem.on('keyup', 'input[type="text"]', function() {
			if (timer) {
				clearTimeout(timer);
			}

			let tag = $(this).val();
			let url = options.url;

			timer = setTimeout(() => {
				options.setData && typeof options.setData === 'function' && options.setData(
					url, tag,
					function(list) {
						getTagitAutocomplete(options, list);
					});
			}, 500);

			return false;
		});

		/* 输入框聚焦事件 */
		$(document).mouseup(function(e) {

			var _con = $('.tagit');
			if (!_con.is(e.target) && _con.has(e.target).length === 0) {
				$('.tagit .tagit-autocomplete').hide();
			}
		});

		/* 点击选择生成标签 */
		options.autocompleteUl.on('click', 'li a', function(e) {
			var tagit = '';
			var $val = $(this).attr('data-name').trim();

			if (!$val) return false;

			if (options.content.indexOf($val) == -1) {
				if (options.limit && options.content.length >= options.limit) {
					var val = options.content.shift();
					options.elem.children().first().remove();
				}

				options.content.push($val)
				that.render()
				tagit = tagitChoiceTemp($val);
				options.tagitNew.before(tagit)
			}
			options.done && typeof options.done === 'function' && options.done($val);
			options.tagitInput.val('');
			$('.tagit .tagit-autocomplete').hide();
		});

	};


	//核心入口
	tagit.render = function(options) {
		var inst = new Class(options);
		inst.init();
		return thisTagit.call(inst);
	};

	exports('tagit', tagit);
}).link(layui.cache.base + 'tagit/tagit.css?v=1');
