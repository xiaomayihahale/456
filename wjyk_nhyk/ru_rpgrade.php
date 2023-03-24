<?php
$sql="
CREATE TABLE IF NOT EXISTS `ims_wjyk_nhyk_account` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `account` varchar(255) DEFAULT NULL COMMENT '账号',
  `name` varchar(255) DEFAULT NULL COMMENT '姓名',
  `password` varchar(255) DEFAULT NULL COMMENT '密码',
  `auth_level` int(1) DEFAULT NULL COMMENT '权限级别 1 员工 2 门店管理员 3 总管理员',
  `create_date` int(11) DEFAULT NULL COMMENT '创建日期',
  `uniacid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `ims_wjyk_nhyk_address` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uniacid` int(11) NOT NULL,
  `uid` varchar(155) NOT NULL,
  `realname` varchar(155) NOT NULL COMMENT '收货人姓名',
  `mobile` varchar(155) NOT NULL COMMENT '收货人电话',
  `province` varchar(20) DEFAULT NULL COMMENT '省',
  `city` varchar(20) DEFAULT NULL COMMENT '市',
  `district` varchar(20) DEFAULT NULL COMMENT '区',
  `address` varchar(255) DEFAULT NULL COMMENT '详细地址',
  `is_default` smallint(1) NOT NULL DEFAULT '1' COMMENT '1-非默认，2-默认',
  `createtime` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='收货地址表';


CREATE TABLE IF NOT EXISTS `ims_wjyk_nhyk_attachment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uniacid` int(11) DEFAULT NULL,
  `type` smallint(1) DEFAULT NULL COMMENT '类型 1.本地 2.七牛 3 阿里 4 腾讯',
  `tx_appid` varchar(255) DEFAULT NULL COMMENT '腾讯appid',
  `tx_secretid` varchar(255) DEFAULT NULL COMMENT '腾讯SecretIDid',
  `tx_secretkey` varchar(255) DEFAULT NULL COMMENT '腾讯 SecretKEY',
  `tx_bucket` varchar(255) DEFAULT NULL COMMENT '腾讯 Bucket',
  `tx_url` varchar(255) DEFAULT NULL COMMENT '腾讯 url',
  `qn_accesskey` varchar(255) DEFAULT NULL COMMENT '七牛 Accesskey',
  `qn_secretkey` varchar(255) DEFAULT NULL,
  `qn_bucket` varchar(255) DEFAULT NULL,
  `qn_url` varchar(255) DEFAULT NULL,
  `ali_access_key_id` varchar(255) DEFAULT NULL,
  `ali_access_key_secret` varchar(255) DEFAULT NULL,
  `ali_url` varchar(255) DEFAULT NULL,
  `ali_bucket` varchar(255) DEFAULT NULL,
  `tx_local` varchar(255) DEFAULT NULL,
  `ali_end_point` varchar(255) DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `ims_wjyk_nhyk_car` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `order_number` varchar(255) DEFAULT NULL COMMENT '订单号',
  `uniacid` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `goods_id` int(11) NOT NULL,
  `num` int(11) NOT NULL,
  `createtime` int(10) NOT NULL,
  `spec` varchar(255) DEFAULT NULL COMMENT '规格',
  `car_type` smallint(1) DEFAULT '0' COMMENT '0 商城 1 点餐',
  `store_id` int(11) DEFAULT NULL COMMENT '门店id',
  `spec_price` decimal(10,2) DEFAULT '0.00' COMMENT '规格金额',
  `spec_stock` int(11) DEFAULT '0' COMMENT '库存',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='购物车';


CREATE TABLE IF NOT EXISTS `ims_wjyk_nhyk_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uniacid` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `c_name` varchar(1000) NOT NULL COMMENT '内容',
  `sort` int(11) NOT NULL,
  `is_show` smallint(1) DEFAULT '1' COMMENT '分数',
  `createtime` int(10) NOT NULL,
  `ico` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='评论表';


CREATE TABLE IF NOT EXISTS `ims_wjyk_nhyk_commission` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `uid` int(11) DEFAULT NULL COMMENT '0',
  `uniacid` int(11) DEFAULT NULL COMMENT '公众号id',
  `pid` int(11) DEFAULT NULL COMMENT '0',
  `c_type` int(1) DEFAULT NULL COMMENT '1购买商品 2.充值',
  `commission` float(11,2) DEFAULT NULL COMMENT '佣金',
  `price` float(11,2) DEFAULT NULL COMMENT '价格',
  `addtime` varchar(255) DEFAULT NULL COMMENT '时间',
  `order_id` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='佣金表';


CREATE TABLE IF NOT EXISTS `ims_wjyk_nhyk_commodity` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `commodity_name` varchar(255) DEFAULT NULL COMMENT '商品名称',
  `commodity_price` decimal(10,2) DEFAULT NULL COMMENT '商品价格',
  `commodity_img` varchar(255) DEFAULT '' COMMENT '商品价格',
  `commodity_desc` varchar(255) DEFAULT NULL COMMENT '商品描述',
  `commodity_norm` int(11) DEFAULT NULL COMMENT '规格id 为空即没有规格',
  `uniacid` int(11) DEFAULT NULL,
  `create_date` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `ims_wjyk_nhyk_coupon` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `uniacid` int(11) DEFAULT NULL COMMENT '公众号id',
  `full` float(11,2) DEFAULT '0.00' COMMENT '满',
  `less` float(11,2) DEFAULT '0.00' COMMENT '减',
  `sid` int(11) DEFAULT NULL COMMENT '店铺id',
  `goods_id` int(11) DEFAULT NULL COMMENT '商品id',
  `platform` int(1) DEFAULT '1' COMMENT '1平台，2商家',
  `give` int(1) DEFAULT '1' COMMENT '1领劵大厅，2购买商品',
  `num` int(11) DEFAULT '0' COMMENT '数量',
  `is_show` int(1) DEFAULT '1' COMMENT '是否显示',
  `start_time` int(10) NOT NULL,
  `end_time` int(10) NOT NULL,
  `addtime` int(10) NOT NULL,
  `sort` int(11) DEFAULT '0',
  `type` smallint(1) DEFAULT NULL COMMENT '优惠卷类型 1 满减 2 无门槛 ',
  `region` smallint(1) DEFAULT NULL COMMENT '限制 1.积分商城 2.商城 3.全场',
  `br_day` int(11) DEFAULT NULL COMMENT '有效天数',
  `c_type` smallint(1) DEFAULT NULL COMMENT '1.普通卷 2.生日劵',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='优惠卷';


CREATE TABLE IF NOT EXISTS `ims_wjyk_nhyk_deduction` (
  `id` int(11) NOT NULL,
  `uniacid` int(11) DEFAULT NULL,
  `coupon_id` int(11) DEFAULT NULL COMMENT '优惠卷id',
  `less` int(11) DEFAULT NULL COMMENT '优惠金额',
  `createtime` int(11) DEFAULT NULL COMMENT '创建日期',
  `uid` int(11) DEFAULT NULL,
  `oper_uid` int(11) DEFAULT NULL COMMENT '操作员id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `ims_wjyk_nhyk_distribution_audit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) DEFAULT NULL COMMENT '申请人uid',
  `createtime` int(11) DEFAULT NULL,
  `status` smallint(1) DEFAULT '1' COMMENT '审核状态 1待审核 2 拒绝 3 通过',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `uniacid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `ims_wjyk_nhyk_distribution_set` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uniacid` int(11) NOT NULL,
  `poster` varchar(255) DEFAULT '0' COMMENT '海报',
  `distribution_level` int(1) DEFAULT '0' COMMENT '分销等级',
  `distribution_one` float(3,2) DEFAULT '0.00' COMMENT '分销',
  `distribution_two` float(3,2) DEFAULT '0.00' COMMENT '分销',
  `distribution_three` float(3,2) DEFAULT '0.00' COMMENT '分销',
  `distribution_description` text COMMENT '分销说明',
  `handling_fee` float(11,2) NOT NULL DEFAULT '0.05',
  `lowest_withdraw` int(11) DEFAULT NULL COMMENT '最低提现',
  `w_type` varchar(50) DEFAULT '1' COMMENT '提现方式 1,微信 2.银行卡 3 支付宝',
  `createtime` int(10) NOT NULL,
  `condition` smallint(1) DEFAULT '1' COMMENT '限制条件 1 无条件 2审核 3 累计消费 4 指定会员等级 5 购买某个产品',
  `consume_money` decimal(10,2) DEFAULT '0.00',
  `member_level` int(11) DEFAULT NULL COMMENT '会员等级',
  `goods_id` int(11) DEFAULT NULL,
  `plugin_type` smallint(1) DEFAULT NULL COMMENT '插件类型',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='分销设置';


CREATE TABLE IF NOT EXISTS `ims_wjyk_nhyk_foodcategory` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uniacid` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `c_name` varchar(1000) NOT NULL COMMENT '内容',
  `sort` int(11) NOT NULL,
  `is_show` smallint(1) DEFAULT '1' COMMENT '分数',
  `createtime` int(10) NOT NULL,
  `ico` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='评论表';


CREATE TABLE IF NOT EXISTS `ims_wjyk_nhyk_foods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uniacid` int(11) DEFAULT NULL,
  `foods_name` varchar(255) DEFAULT NULL COMMENT '食品名称',
  `foods_img` varchar(255) DEFAULT NULL COMMENT '食品图片',
  `carousel` varchar(255) DEFAULT NULL COMMENT '食品轮播图',
  `discount` decimal(10,2) DEFAULT NULL COMMENT '折扣',
  `original_price` decimal(10,2) DEFAULT NULL COMMENT '原价',
  `desc` varchar(255) DEFAULT NULL COMMENT '描述',
  `norm` varchar(1000) DEFAULT '' COMMENT '规格',
  `summary` varchar(255) DEFAULT NULL COMMENT '简介',
  `createtime` int(11) DEFAULT NULL COMMENT '创建日期',
  `cid` int(11) DEFAULT NULL COMMENT '类型id',
  `stock` int(11) DEFAULT '0' COMMENT '库存',
  `is_show` smallint(1) DEFAULT NULL COMMENT '是否显示 0显示 1不显示 2 删除',
  `sales` int(11) DEFAULT '0' COMMENT '销量',
  `is_new` smallint(1) DEFAULT '1' COMMENT '是否新品 0 是 1 不是',
  `different` int(11) DEFAULT '0' COMMENT '差评',
  `medium` int(11) DEFAULT '0' COMMENT '中评',
  `good` int(11) DEFAULT NULL COMMENT '好评',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `ims_wjyk_nhyk_foods_store` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uniacid` int(11) DEFAULT NULL,
  `store_id` int(11) DEFAULT NULL,
  `is_show` smallint(1) DEFAULT NULL COMMENT '0 上架 1下架',
  `foods_id` int(11) DEFAULT NULL COMMENT '食品id',
  `foods_str` varchar(255) DEFAULT NULL,
  `type` smallint(1) DEFAULT NULL COMMENT '类型  1 点餐 2 酒店',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `ims_wjyk_nhyk_goods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uniacid` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `cid` int(11) NOT NULL,
  `goods_name` varchar(100) NOT NULL COMMENT '商品名称',
  `original_price` decimal(11,2) DEFAULT '0.00' COMMENT '原价',
  `discount_price` decimal(11,2) DEFAULT '0.00' COMMENT '优惠价',
  `cover` varchar(255) NOT NULL COMMENT '封面',
  `carousel` text COMMENT '轮播图',
  `details` text COMMENT '商品详情',
  `is_show` int(1) NOT NULL DEFAULT '1' COMMENT ' 1隐藏  2显示，3删除',
  `recommend` int(1) NOT NULL DEFAULT '1' COMMENT ' 1隐藏  2显示',
  `sales` int(10) DEFAULT '0' COMMENT '销量',
  `createtime` int(10) NOT NULL,
  `good` int(11) DEFAULT '0',
  `medium` int(11) DEFAULT '0',
  `different` int(11) DEFAULT '0',
  `favorites` int(10) DEFAULT '0',
  `stock` int(11) DEFAULT '0',
  `spec` text COMMENT '商品规格',
  `is_freight` int(1) NOT NULL DEFAULT '1' COMMENT '是否需要运费 1包邮   2-运费',
  `freight` decimal(11,2) DEFAULT '0.00' COMMENT '运费',
  `region_type` smallint(1) DEFAULT NULL COMMENT '商品划分区域  1.每日 2 会员 3 普通 4.兑换专区 ',
  `need_integer` int(11) DEFAULT NULL COMMENT '商品兑换需要积分',
  `is_exchange` smallint(1) DEFAULT NULL COMMENT '是否为兑换专区 1 否 2 是',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='商品表';


CREATE TABLE IF NOT EXISTS `ims_wjyk_nhyk_hotel` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uniacid` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT '' COMMENT '酒店名称',
  `mobile` varchar(255) DEFAULT '' COMMENT '酒店电话号码',
  `createtime` int(11) DEFAULT NULL,
  `desc` varchar(255) DEFAULT '' COMMENT '酒店描述',
  `img` varchar(255) DEFAULT NULL COMMENT '封面图',
  `addres_lat` varchar(255) DEFAULT NULL COMMENT '门店地址 x轴',
  `addres_lng` varchar(255) DEFAULT NULL,
  `resideprovince` varchar(30) NOT NULL,
  `residecity` varchar(30) NOT NULL,
  `residedist` varchar(30) NOT NULL,
  `score` decimal(10,1) DEFAULT '0.0' COMMENT '分数',
  `status` smallint(1) DEFAULT '0' COMMENT ' 显示 1 不显示 2 删除',
  `addres` varchar(255) DEFAULT NULL COMMENT '详细地址',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `ims_wjyk_nhyk_hotel_thing` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uniacid` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `c_name` varchar(1000) NOT NULL COMMENT '内容',
  `sort` int(11) NOT NULL,
  `is_show` smallint(1) DEFAULT '1' COMMENT '分数',
  `createtime` int(10) NOT NULL,
  `ico` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT '0.00' COMMENT '单价',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='评论表';


CREATE TABLE IF NOT EXISTS `ims_wjyk_nhyk_hotel_thing_consume` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` int(11) DEFAULT NULL COMMENT '订单id',
  `tid` int(11) DEFAULT NULL COMMENT '物品id',
  `less_num` int(11) DEFAULT '0' COMMENT '消耗数量',
  `less_price` decimal(10,2) DEFAULT '0.00' COMMENT '金额',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `ims_wjyk_nhyk_hotel_thing_rel` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uniacid` int(11) DEFAULT NULL,
  `rid` int(11) DEFAULT NULL,
  `num` int(11) DEFAULT '0' COMMENT '数量',
  `tid` int(11) DEFAULT NULL COMMENT '物品Id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `ims_wjyk_nhyk_index_meau` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uniacid` int(11) DEFAULT NULL,
  `order` int(11) DEFAULT NULL COMMENT '排序值',
  `meau_name` varchar(255) DEFAULT NULL COMMENT '菜单栏名称',
  `meau_link` varchar(255) DEFAULT NULL COMMENT '菜单栏链接',
  `createtime` int(11) DEFAULT NULL,
  `status` smallint(1) DEFAULT NULL COMMENT '是否显示 0 显示1 隐藏 2 删除',
  `icon` varchar(255) DEFAULT NULL COMMENT '图标',
  `meal_app_id` varchar(255) DEFAULT NULL COMMENT 'appid',
  `meau_params` varchar(255) DEFAULT '' COMMENT '链接参数',
  `type` smallint(1) DEFAULT '1' COMMENT '类型  1.内部 2 外部h5 3 外部小程序',
  `nei_type` int(11) DEFAULT NULL COMMENT '内部id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `ims_wjyk_nhyk_integral` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uniacid` int(11) DEFAULT NULL,
  `ob_integral` int(11) DEFAULT NULL COMMENT '获得积分',
  `type` smallint(1) DEFAULT NULL COMMENT '积分获得方式 1.签到  2 消费赠送积分',
  `createtime` int(11) DEFAULT NULL,
  `uid` int(11) DEFAULT NULL COMMENT '用户id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `ims_wjyk_nhyk_meal` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `meal_type` varchar(255) DEFAULT NULL COMMENT '服务类型',
  `meal_count` int(11) DEFAULT '0' COMMENT '套餐次数',
  `meal_money` decimal(10,2) DEFAULT '0.00' COMMENT '套餐价格',
  `uniacid` int(11) DEFAULT NULL,
  `create_date` int(11) DEFAULT NULL,
  `status` int(1) DEFAULT NULL COMMENT '是否有效 0 有效 1 失效',
  `expired_date` int(11) DEFAULT NULL COMMENT '过期时间',
  `order` int(11) DEFAULT NULL COMMENT '排序 ',
  `meal_month` int(11) DEFAULT NULL COMMENT '有效期月份',
  `meal_name` varchar(255) DEFAULT NULL COMMENT '套餐名称',
  `meal_discount` decimal(10,2) DEFAULT NULL COMMENT '折扣',
  `meal_back_img` varchar(255) DEFAULT NULL COMMENT '套餐卡背景图',
  `meal__desc` text COMMENT '套餐卡说明',
  `meal_use_count` int(11) DEFAULT '0' COMMENT '每天限制使用次数',
  `meal_buy_count` int(11) DEFAULT '10' COMMENT '每人限购次数',
  `meal_desc` text COMMENT '套餐卡说明',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `ims_wjyk_nhyk_meal_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uniacid` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `meal_id` int(11) NOT NULL,
  `createtime` int(11) NOT NULL,
  `rel_count` int(11) NOT NULL,
  `sum_count` int(11) NOT NULL,
  `store_id` int(11) NOT NULL,
  `oper_id` int(11) DEFAULT NULL COMMENT '操作员id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `ims_wjyk_nhyk_meau` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uniacid` int(11) DEFAULT NULL,
  `order` int(11) DEFAULT NULL COMMENT '排序值',
  `meau_name` varchar(255) DEFAULT NULL COMMENT '菜单栏名称',
  `meau_link` varchar(255) DEFAULT NULL COMMENT '菜单栏链接',
  `createtime` int(11) DEFAULT NULL,
  `status` smallint(1) DEFAULT NULL COMMENT '是否显示 0 显示1 隐藏 2 删除',
  `icon` varchar(255) DEFAULT NULL COMMENT '图标',
  `icon_select` varchar(255) DEFAULT NULL COMMENT '图标选中',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `ims_wjyk_nhyk_memlevel` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `member_name` varchar(255) DEFAULT NULL COMMENT '级别名称',
  `need_money` int(11) DEFAULT NULL COMMENT '达到下一级别需要花费金额',
  `member_level` int(2) DEFAULT NULL COMMENT '会员级别',
  `next_level` int(2) DEFAULT NULL COMMENT '下一级别',
  `create_date` int(11) DEFAULT NULL,
  `uniacid` int(11) DEFAULT NULL,
  `discount` decimal(10,2) DEFAULT NULL COMMENT '会员折扣价',
  `member_logo` varchar(255) DEFAULT NULL COMMENT '会员图片',
  `is_default` smallint(1) DEFAULT '1' COMMENT '2 默认 ',
  `member_back_logo` varchar(255) DEFAULT NULL COMMENT '背景图片',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `ims_wjyk_nhyk_merch_account` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uniacid` int(11) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL COMMENT '账号名',
  `pwd` varchar(255) DEFAULT NULL COMMENT '密码',
  `createtime` int(11) DEFAULT NULL,
  `lastvisit` varchar(255) DEFAULT NULL COMMENT '最后登录时间',
  `lastip` varchar(255) DEFAULT NULL COMMENT '最后登录ip',
  `type` smallint(1) DEFAULT NULL COMMENT '账户类型  1 门店管理 2 普通员工',
  `store_id` int(11) DEFAULT NULL COMMENT '门店id',
  `status` smallint(1) DEFAULT NULL COMMENT '状态 0 正常 1 停用',
  `mobile` varchar(255) DEFAULT NULL COMMENT '电话号码',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `ims_wjyk_nhyk_merch_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `status` smallint(1) DEFAULT NULL COMMENT '状态',
  `accounttime` int(11) DEFAULT NULL COMMENT '过期时间',
  `uniacid` int(11) DEFAULT NULL,
  `accountid` int(11) DEFAULT NULL COMMENT '账号id',
  `createtime` int(11) DEFAULT NULL COMMENT '创建日期',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `ims_wjyk_nhyk_module_plugin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uniacid` int(11) DEFAULT NULL,
  `pid` int(11) DEFAULT NULL,
  `is_open` smallint(1) DEFAULT NULL COMMENT '1 关闭 2 开启',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `ims_wjyk_nhyk_my_coupon` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `uniacid` int(11) DEFAULT NULL COMMENT '公众号id',
  `uid` int(11) DEFAULT NULL COMMENT '店铺id',
  `pid` int(11) DEFAULT NULL COMMENT 'pid',
  `full` int(11) DEFAULT NULL COMMENT '满',
  `less` int(11) DEFAULT NULL COMMENT '减',
  `sid` int(11) DEFAULT NULL COMMENT '店铺id',
  `c_type` int(1) DEFAULT '1' COMMENT '1平台，2商家',
  `status` int(1) DEFAULT '1' COMMENT '1未使用，2已使用',
  `start_time` int(10) NOT NULL,
  `end_time` int(10) NOT NULL,
  `addtime` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='我的优惠卷';


CREATE TABLE IF NOT EXISTS `ims_wjyk_nhyk_my_meal` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uniacid` int(11) DEFAULT NULL,
  `meal_id` int(11) NOT NULL,
  `expired_date` int(11) NOT NULL COMMENT '过期时间',
  `createtime` int(11) DEFAULT NULL COMMENT '创建时间',
  `rel_count` int(11) DEFAULT '0' COMMENT '使用次数',
  `sum_count` int(11) DEFAULT NULL COMMENT '总次数',
  `uid` int(11) NOT NULL COMMENT '用户id',
  `meal_discount` decimal(10,2) DEFAULT NULL COMMENT '折扣',
  `qrcode` varchar(255) DEFAULT NULL COMMENT '核销码',
  `meal_use_count` int(11) DEFAULT '0' COMMENT '每日限制使用次数',
  `status` smallint(1) DEFAULT '0' COMMENT ' 套餐卡',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `ims_wjyk_nhyk_my_voucher` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `uniacid` int(11) DEFAULT NULL COMMENT '公众号id',
  `uid` int(11) DEFAULT NULL COMMENT '店铺id',
  `pid` int(11) DEFAULT NULL COMMENT 'pid',
  `money` int(11) DEFAULT NULL COMMENT '满',
  `only` int(11) DEFAULT NULL COMMENT '减',
  `status` int(1) DEFAULT '1' COMMENT '1未使用，2已使用',
  `start_time` int(10) NOT NULL,
  `end_time` int(10) NOT NULL,
  `createtime` int(10) NOT NULL,
  `transfer_uid` int(11) DEFAULT NULL COMMENT '转让人uid',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='我的优惠卷';


CREATE TABLE IF NOT EXISTS `ims_wjyk_nhyk_note` (
  `id` int(11) NOT NULL,
  `is_open` smallint(1) DEFAULT '1' COMMENT '1-开启，2-隐藏',
  `type` smallint(1) DEFAULT '1' COMMENT '1-助通云，2-阿里云',
  `uniacid` int(11) DEFAULT NULL,
  `user` varchar(50) DEFAULT NULL,
  `pass` varchar(50) DEFAULT NULL,
  `message` varchar(255) DEFAULT NULL COMMENT '短信内容 充值成功',
  `keyId` varchar(50) DEFAULT NULL,
  `keySecret` varchar(50) DEFAULT NULL,
  `signName` varchar(50) DEFAULT NULL,
  `templateCode` varchar(50) DEFAULT NULL COMMENT '充值成功模板id',
  `kf_success_code` varchar(50) DEFAULT NULL COMMENT '扣费成功模板id',
  `new_success_code` varchar(50) DEFAULT NULL COMMENT '新订单模板id',
  `kf_success_message` varchar(255) DEFAULT NULL COMMENT '扣费msg',
  `new_success_message` varchar(255) DEFAULT NULL COMMENT '新订单msg',
  `br_success_code` varchar(255) DEFAULT NULL COMMENT '生日提醒模板code',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='短信配置表';


CREATE TABLE IF NOT EXISTS `ims_wjyk_nhyk_notice_set` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uniacid` int(11) DEFAULT NULL,
  `createtime` int(11) DEFAULT NULL,
  `new_template` varchar(255) DEFAULT NULL COMMENT '新模板',
  `cz_success_template` varchar(255) DEFAULT NULL COMMENT '充值模板',
  `kf_template` varchar(255) DEFAULT NULL COMMENT '扣款模板',
  `new_type` smallint(1) DEFAULT NULL COMMENT '新订单类型',
  `cz_type` smallint(1) DEFAULT NULL,
  `kf_type` smallint(1) DEFAULT NULL COMMENT '扣费类型',
  `br_template` varchar(255) DEFAULT NULL COMMENT '生日消息模板',
  `br_type` smallint(1) DEFAULT NULL COMMENT '生日 ',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `ims_wjyk_nhyk_order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `order_number` varchar(255) DEFAULT NULL COMMENT '订单号',
  `uniacid` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `goods_id` int(11) NOT NULL,
  `num` int(11) NOT NULL,
  `unit_price` float(10,2) DEFAULT '0.00',
  `price` float(11,2) DEFAULT '0.00' COMMENT '金额',
  `real_payment` float(11,2) DEFAULT '0.00' COMMENT '实付款',
  `discount` float(11,2) DEFAULT '0.00' COMMENT '优惠卷金额',
  `status` smallint(1) NOT NULL DEFAULT '1' COMMENT ' 1-待付款  2待发货，3待收货，4已完成',
  `realname` varchar(20) DEFAULT NULL COMMENT '姓名',
  `mobile` varchar(20) DEFAULT NULL COMMENT '电话',
  `province` varchar(20) DEFAULT NULL COMMENT '省',
  `city` varchar(20) DEFAULT NULL COMMENT '市',
  `district` varchar(20) DEFAULT NULL COMMENT '区',
  `address` varchar(255) DEFAULT NULL COMMENT '详细地址',
  `ship_time` int(10) DEFAULT NULL COMMENT '发货时间',
  `receipt_time` int(10) DEFAULT NULL COMMENT '收货时间',
  `express_no` varchar(50) DEFAULT NULL COMMENT '快递单号',
  `express_name` varchar(50) DEFAULT NULL COMMENT '快递',
  `createtime` int(10) NOT NULL,
  `is_comment` smallint(1) DEFAULT '1',
  `coupon_id` int(11) DEFAULT '0',
  `member_discount` float(11,2) DEFAULT '0.00' COMMENT '会员优惠金额',
  `pay_type` smallint(1) NOT NULL DEFAULT '1' COMMENT ' 1微信，2余额',
  `spec` text COMMENT '商品规格',
  `type` smallint(1) NOT NULL DEFAULT '1' COMMENT ' 1普通订单，2 兑换专区订单',
  `freight` float(3,2) DEFAULT '0.00' COMMENT '运费',
  `integral` float(11,2) DEFAULT '0.00' COMMENT '订单总积分',
  `other_goods_id` int(11) DEFAULT NULL,
  `store_id` int(11) DEFAULT NULL COMMENT '门店id',
  `store_name` varchar(255) DEFAULT NULL COMMENT '门店名称',
  `need_integral` int(11) DEFAULT NULL COMMENT '兑换所需要积分',
  `receipt_type` smallint(1) DEFAULT '1' COMMENT '收货方式 1.到店自提 2 邮寄',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `pickup_code` varchar(255) DEFAULT NULL COMMENT '取货码',
  `plugin_type` smallint(1) DEFAULT '0' COMMENT '0 普通商城 1 点餐 2 酒店预约',
  `pr_number` int(11) DEFAULT NULL COMMENT '订餐人数',
  `voucher_id` int(11) DEFAULT NULL COMMENT '代金券id',
  `seat_number` varchar(255) DEFAULT NULL COMMENT '桌台号',
  `arrival_time` varchar(255) DEFAULT '' COMMENT '到店时间',
  `pickup_type` smallint(1) DEFAULT '0' COMMENT '0 外卖 1 店内用餐',
  `reserve_number` int(11) DEFAULT '0' COMMENT '预约天数',
  `reserve_start` int(11) DEFAULT NULL COMMENT '预约开始时间',
  `reserve_end` int(11) DEFAULT NULL COMMENT '预约结束时间',
  `is_show` smallint(1) DEFAULT '0' COMMENT '是否删除 0 正常 1 删除',
  `deposit` decimal(10,0) DEFAULT '0' COMMENT '押金',
  `meal_id` int(11) DEFAULT NULL COMMENT '套餐id',
  `order_per_type` smallint(1) DEFAULT '1' COMMENT '下单人员类型 1普通客户 2 员工代下单',
  `mid` int(11) DEFAULT NULL COMMENT '操作人员id',
  `is_submit` smallint(1) DEFAULT '1' COMMENT '1 未提交 2 已提交(用于酒店插件是否有消耗物品)',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='订单表';


CREATE TABLE IF NOT EXISTS `ims_wjyk_nhyk_order_goods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` int(11) NOT NULL,
  `uniacid` int(11) NOT NULL,
  `goods_id` int(11) NOT NULL,
  `num` int(11) NOT NULL,
  `unit_price` float(11,2) DEFAULT '0.00' COMMENT '商品单价',
  `createtime` int(10) NOT NULL,
  `integral` decimal(10,2) DEFAULT '0.00' COMMENT '积分',
  `spec` varchar(255) DEFAULT NULL COMMENT '规格',
  `frequency` int(11) DEFAULT '1' COMMENT '点菜次数',
  `name` varchar(255) DEFAULT NULL COMMENT '姓名',
  `mobile` varchar(255) DEFAULT NULL COMMENT '电话号码',
  `card` varchar(20) DEFAULT NULL COMMENT '身份证',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='订单商品表';


CREATE TABLE IF NOT EXISTS `ims_wjyk_nhyk_parcategory` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uniacid` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `c_name` varchar(1000) NOT NULL COMMENT '内容',
  `sort` int(11) NOT NULL,
  `is_show` smallint(1) DEFAULT '1' COMMENT '分数',
  `createtime` int(10) NOT NULL,
  `ico` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='商品区域分类表';


CREATE TABLE IF NOT EXISTS `ims_wjyk_nhyk_pay_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) DEFAULT NULL,
  `rid` int(11) DEFAULT NULL COMMENT '关联id',
  `pay_money` decimal(10,2) DEFAULT '0.00' COMMENT '支付金额',
  `pay_type` int(11) DEFAULT NULL COMMENT '1.余额  2.微信 3.积分 4.线下 5.积分混合',
  `pay_integer` int(11) DEFAULT '0' COMMENT '支付积分',
  `createtime` int(11) DEFAULT NULL,
  `type` int(11) DEFAULT NULL COMMENT '购买类型 1.商城 2.充值 3.套餐卡',
  `uniacid` int(11) DEFAULT NULL,
  `less_money` decimal(10,2) DEFAULT '0.00' COMMENT '优惠金额',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `ims_wjyk_nhyk_payconfig` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uniacid` int(11) NOT NULL,
  `appid` varchar(50) NOT NULL,
  `app_key` varchar(50) NOT NULL,
  `mchid` varchar(50) NOT NULL,
  `pay_key` varchar(50) NOT NULL,
  `cert` smallint(1) DEFAULT NULL,
  `key` smallint(1) DEFAULT NULL,
  `sub_appid` varchar(50) DEFAULT NULL COMMENT '子商户id',
  `sub_mchid` varchar(50) DEFAULT NULL COMMENT '子商户',
  `pay_type` smallint(1) DEFAULT NULL COMMENT '1 主商户 2 子商户',
  `bf_mchid` varchar(50) DEFAULT NULL,
  `cer_pwd` varchar(50) DEFAULT NULL,
  `sub_type` smallint(1) DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `ims_wjyk_nhyk_person` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uniacid` int(11) DEFAULT NULL,
  `uid` int(11) NOT NULL,
  `person_name` varchar(255) DEFAULT '' COMMENT '联系人名称',
  `person_mobile` varchar(255) DEFAULT '' COMMENT '联系电话',
  `person_card` varchar(255) DEFAULT '' COMMENT '身份证号码',
  `person_sex` smallint(1) DEFAULT NULL COMMENT '性别',
  `person_addres` varchar(255) DEFAULT '' COMMENT '联系地址',
  `createtime` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `ims_wjyk_nhyk_plugin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uniacid` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `identifie` varchar(255) DEFAULT NULL,
  `summary` varchar(255) DEFAULT NULL,
  `is_open` smallint(1) DEFAULT NULL,
  `createtime` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `ims_wjyk_nhyk_poster` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uniacid` int(11) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `preview` varchar(255) DEFAULT NULL,
  `json` text,
  `create_time` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL COMMENT '状态',
  `img` varchar(255) DEFAULT NULL COMMENT '图片地址',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `ims_wjyk_nhyk_printer_set` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uniacid` int(11) NOT NULL,
  `user` varchar(155) NOT NULL COMMENT '用户',
  `ukey` varchar(155) NOT NULL COMMENT '用户key',
  `name` varchar(155) NOT NULL COMMENT '打印机名称',
  `sncode` varchar(155) NOT NULL COMMENT '打印机sn码',
  `key` varchar(155) NOT NULL COMMENT '打印机key',
  `createtime` int(10) NOT NULL,
  `store_id` int(11) DEFAULT NULL,
  `is_show` smallint(1) DEFAULT '0' COMMENT '是否显示',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='小票打印机设置';


CREATE TABLE IF NOT EXISTS `ims_wjyk_nhyk_proxy_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uniacid` int(11) DEFAULT NULL,
  `uid` int(11) DEFAULT NULL,
  `oper_uid` int(11) DEFAULT NULL COMMENT '操作员id',
  `coupon_id` int(11) DEFAULT NULL COMMENT '优惠卷id',
  `money` int(11) DEFAULT NULL COMMENT '充值金额',
  `less` int(11) DEFAULT NULL COMMENT '优惠金额',
  `rel_money` int(11) DEFAULT NULL COMMENT '实际金额',
  `createtime` int(11) DEFAULT NULL COMMENT '创建日期',
  `store_id` int(11) DEFAULT NULL COMMENT '门店id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `ims_wjyk_nhyk_recharge` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uniacid` int(11) NOT NULL,
  `money` decimal(20,2) NOT NULL COMMENT '充值金额',
  `only` decimal(20,2) NOT NULL COMMENT '仅需',
  `sort` int(10) NOT NULL DEFAULT '0' COMMENT '排序，数值越高，越在前显示',
  `createtime` int(10) NOT NULL,
  `status` int(11) DEFAULT NULL COMMENT '0 显示 1 不显示',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `ims_wjyk_nhyk_recharge_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uniacid` int(11) DEFAULT NULL,
  `uid` int(11) DEFAULT NULL COMMENT '用户id',
  `createtime` int(11) DEFAULT NULL,
  `recharge_id` int(11) DEFAULT NULL COMMENT '充值优惠id',
  `money` decimal(10,2) DEFAULT NULL COMMENT '充值金额',
  `only` decimal(10,2) DEFAULT NULL COMMENT '充值优惠',
  `type` smallint(1) DEFAULT NULL COMMENT '充值类型 1 普通充值 2 代充',
  `oper_uid` int(11) DEFAULT NULL COMMENT '操作员id',
  `store_id` int(11) DEFAULT NULL COMMENT '门店id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `ims_wjyk_nhyk_refund_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uniacid` int(11) NOT NULL,
  `uid` int(11) NOT NULL,
  `orderno` varchar(255) NOT NULL COMMENT '订单编号',
  `result` varchar(255) DEFAULT NULL COMMENT '退款原因',
  `contacts` varchar(255) DEFAULT NULL COMMENT '联系人',
  `phone` varchar(255) DEFAULT NULL COMMENT '联系方式',
  `is_status` smallint(1) NOT NULL DEFAULT '1' COMMENT ' 1-待处理  2已处理',
  `createtime` int(10) NOT NULL,
  `reason` varchar(255) DEFAULT NULL COMMENT '拒绝理由',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='退款记录表';


CREATE TABLE IF NOT EXISTS `ims_wjyk_nhyk_room` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uniacid` int(11) DEFAULT NULL,
  `spec` varchar(255) DEFAULT '' COMMENT '房间标签',
  `desc` varchar(255) DEFAULT '' COMMENT '房间描述',
  `price` decimal(10,2) DEFAULT '0.00' COMMENT '价格',
  `discount_prcie` decimal(10,2) DEFAULT '0.00' COMMENT '优惠价',
  `img` varchar(255) DEFAULT NULL COMMENT '封面图',
  `carousel` varchar(1000) DEFAULT NULL COMMENT '详情轮播图',
  `room_name` varchar(255) DEFAULT '' COMMENT '房间名称',
  `room_num` int(11) DEFAULT '0' COMMENT '房间数量',
  `pid` int(11) DEFAULT NULL COMMENT '所属酒店',
  `status` smallint(1) DEFAULT '0' COMMENT '0显示 1不显示 2 删除',
  `createtime` int(11) DEFAULT NULL,
  `price_desc` varchar(255) DEFAULT NULL COMMENT '费用政策',
  `cid` int(11) DEFAULT NULL COMMENT '类别id',
  `top_type` smallint(1) DEFAULT '0' COMMENT '0 无 1 ',
  `coupon_money` decimal(10,2) DEFAULT '0.00' COMMENT '优惠卷金额',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `ims_wjyk_nhyk_room_seat` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uniacid` int(11) DEFAULT NULL,
  `rid` int(11) DEFAULT NULL COMMENT '房间id',
  `seat_no` varchar(255) DEFAULT NULL COMMENT '房间编号',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `status` smallint(1) DEFAULT '1' COMMENT '1 可以使用 2 被占用',
  `createtime` int(11) DEFAULT NULL,
  `sort` int(11) DEFAULT NULL COMMENT '排序',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `ims_wjyk_nhyk_room_store` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uniacid` int(11) DEFAULT NULL,
  `store_id` int(11) DEFAULT NULL,
  `is_show` smallint(1) DEFAULT NULL COMMENT '0 上架 1下架',
  `foods_id` int(11) DEFAULT NULL COMMENT '食品id',
  `foods_str` varchar(255) DEFAULT NULL,
  `type` smallint(1) DEFAULT NULL COMMENT '类型  1 点餐 2 酒店',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `ims_wjyk_nhyk_seat` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uniacid` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT '' COMMENT '座位名称',
  `pe_number` int(11) DEFAULT '1' COMMENT '座位容纳人数',
  `seat_number` varchar(255) DEFAULT NULL COMMENT '座位号',
  `sort` int(11) DEFAULT '0' COMMENT '排序',
  `is_show` smallint(1) DEFAULT '0' COMMENT '0 显示 1不显示 2 删除',
  `createtime` int(11) DEFAULT NULL,
  `store_id` int(11) DEFAULT NULL COMMENT '门店id',
  `qrcode` varchar(255) DEFAULT NULL COMMENT '二维码',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `ims_wjyk_nhyk_store` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uniacid` int(11) DEFAULT NULL,
  `store_name` varchar(255) DEFAULT NULL COMMENT '门店名称',
  `store_admin` int(11) DEFAULT NULL COMMENT '门店管理员',
  `store_addres_lat` varchar(255) DEFAULT NULL COMMENT '门店地址 x轴',
  `store_addres_lng` varchar(255) DEFAULT NULL,
  `store_addres` varchar(255) DEFAULT NULL COMMENT '门店地址',
  `store_logo` varchar(255) DEFAULT NULL COMMENT '门店logo',
  `create_date` int(11) DEFAULT NULL,
  `store_phone` varchar(255) DEFAULT NULL COMMENT '电话号码',
  `account_id` int(11) DEFAULT NULL COMMENT '管理员id',
  `status` smallint(1) DEFAULT NULL,
  `store_desc_addres` varchar(255) DEFAULT NULL COMMENT '门店详细地址',
  `cate_type` smallint(1) DEFAULT NULL COMMENT '1.线上 2 线下',
  `oper_uid` int(11) DEFAULT NULL COMMENT '操作员id',
  `store_id` int(11) DEFAULT NULL COMMENT '门店id',
  `less_count` int(11) DEFAULT NULL COMMENT '套餐卡次数',
  `business` varchar(255) DEFAULT '' COMMENT '营业时间',
  `closure` smallint(1) DEFAULT '1' COMMENT '是否关闭',
  `ktv_img` varchar(255) DEFAULT '' COMMENT '详情图片',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `ims_wjyk_nhyk_system` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uniacid` int(11) NOT NULL COMMENT '所属公众号ID',
  `name` varchar(255) NOT NULL COMMENT '系统名称',
  `logo` varchar(255) NOT NULL COMMENT '系统logo',
  `mobile` varchar(255) NOT NULL COMMENT '平台电话',
  `carousel` text NOT NULL COMMENT '首页轮播图',
  `abouts` text COMMENT '关于我们',
  `advertising` varchar(255) DEFAULT NULL,
  `newTemplate` text COMMENT '新订单模板id',
  `cate_carousel` text COMMENT '分类轮播图',
  `sign_integral` int(11) DEFAULT NULL COMMENT '签到积分',
  `con_sing_integral` int(11) DEFAULT NULL COMMENT '连续签到积分',
  `background_img` varchar(255) DEFAULT NULL COMMENT '分销海报背景图',
  `do_mian` varchar(255) DEFAULT NULL COMMENT '域名',
  `make_money_desc` text COMMENT '赚钱说明',
  `consume_get_integral` int(11) DEFAULT NULL COMMENT '消费获得积分',
  `qqmap_key` varchar(255) DEFAULT NULL COMMENT '腾讯地图key',
  `mei_img` varchar(255) DEFAULT NULL COMMENT '每日图标',
  `dui_img` varchar(255) DEFAULT NULL COMMENT '兑换log',
  `member_img` varchar(255) DEFAULT NULL COMMENT '会员抢购log',
  `recharge_money_desc` text COMMENT '充值',
  `sign_desc` text COMMENT '签到提示',
  `new_good_img` varchar(255) DEFAULT NULL COMMENT '新品背景图',
  `link_carousel` text,
  `index_share_title` varchar(255) DEFAULT '' COMMENT '首页分享标题',
  `index_share_desc` varchar(255) DEFAULT '' COMMENT '首页分享说明',
  `index_share_img` varchar(255) DEFAULT '' COMMENT '首页分享图片',
  `is_open_auth` smallint(255) DEFAULT '1' COMMENT '1 不开启 2 开启',
  `show_index_type` smallint(1) DEFAULT '0' COMMENT '0.默认 1 餐厅 2 酒店',
  `desc_label` varchar(255) DEFAULT '' COMMENT '个人说明提示文本',
  `distance_limit` int(11) DEFAULT '10000' COMMENT '限制距离 米',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `ims_wjyk_nhyk_system_foods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uniacid` int(11) NOT NULL COMMENT '所属公众号ID',
  `carousel` text NOT NULL COMMENT '首页轮播图',
  `abouts` text COMMENT '关于我们',
  `advertising` varchar(255) DEFAULT NULL,
  `newTemplate` text COMMENT '新订单模板id',
  `cate_carousel` text COMMENT '分类轮播图',
  `sign_integral` int(11) DEFAULT NULL COMMENT '签到积分',
  `con_sing_integral` int(11) DEFAULT NULL COMMENT '连续签到积分',
  `background_img` varchar(255) DEFAULT NULL COMMENT '分销海报背景图',
  `do_mian` varchar(255) DEFAULT NULL COMMENT '域名',
  `make_money_desc` text COMMENT '赚钱说明',
  `consume_get_integral` int(11) DEFAULT NULL COMMENT '消费获得积分',
  `mei_img` varchar(255) DEFAULT NULL COMMENT '每日图标',
  `buy_img` varchar(255) DEFAULT NULL COMMENT '代金券log',
  `jf_img` varchar(255) DEFAULT NULL COMMENT '会员抢购log',
  `recharge_money_desc` text COMMENT '充值',
  `sign_desc` text COMMENT '签到提示',
  `wm_img` varchar(255) DEFAULT NULL COMMENT '外卖',
  `jiu_img` varchar(255) DEFAULT NULL COMMENT '就餐图片',
  `cj_img` varchar(255) DEFAULT NULL COMMENT '充值图片',
  `djq_name` varchar(255) DEFAULT '' COMMENT '代金券列表名称',
  `djq_carousel` text COMMENT '代金券轮播图',
  `wm_text` varchar(255) DEFAULT NULL COMMENT '外卖文本',
  `jiu_text` varchar(255) DEFAULT NULL COMMENT '就餐文本',
  `link_carousel` text,
  `index_share_title` varchar(255) DEFAULT '' COMMENT '首页分享标题',
  `index_share_desc` varchar(255) DEFAULT '' COMMENT '首页分享说明',
  `index_share_img` varchar(255) DEFAULT '' COMMENT '首页分享图片',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `ims_wjyk_nhyk_system_hotel` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uniacid` int(11) NOT NULL COMMENT '所属公众号ID',
  `carousel` text NOT NULL COMMENT '首页轮播图',
  `abouts` text COMMENT '关于我们',
  `advertising` varchar(255) DEFAULT NULL,
  `newTemplate` text COMMENT '新订单模板id',
  `cate_carousel` text COMMENT '分类轮播图',
  `is_card` smallint(1) DEFAULT '0' COMMENT '是否需要身份证 0 需要 1 不需要',
  `deposit` decimal(10,2) DEFAULT '0.00' COMMENT '押金',
  `index_share_title` varchar(255) DEFAULT '' COMMENT '首页分享标题',
  `index_share_desc` varchar(255) DEFAULT '' COMMENT '首页分享说明',
  `index_share_img` varchar(255) DEFAULT '' COMMENT '首页分享图片',
  `free_hour` int(11) DEFAULT '0' COMMENT '提前多少小时免费',
  `promise_hour` int(11) DEFAULT '0' COMMENT '违约时间',
  `promise_money` int(11) DEFAULT '0',
  `promise_add_money` int(11) DEFAULT '0' COMMENT '每增加一小时加收金额',
  `back_hour` int(11) DEFAULT '0' COMMENT '退款截止时间',
  `arrive_time` int(11) DEFAULT NULL,
  `leave_time` int(11) DEFAULT NULL COMMENT '离店时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `ims_wjyk_nhyk_transfer_voucher` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uniacid` int(11) DEFAULT NULL,
  `voucher_id` int(11) DEFAULT NULL COMMENT '代金券id',
  `uid` int(11) DEFAULT NULL COMMENT '领取人id',
  `transfer_uid` int(11) DEFAULT NULL COMMENT '转让人id',
  `createtime` int(11) DEFAULT NULL COMMENT '领取时间',
  `status` smallint(1) DEFAULT '1' COMMENT '已领取',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `ims_wjyk_nhyk_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) DEFAULT NULL,
  `uniacid` int(11) DEFAULT NULL,
  `openid` varchar(255) DEFAULT NULL,
  `member_no` varchar(255) DEFAULT NULL COMMENT '会员号',
  `phone` int(11) DEFAULT NULL COMMENT '电话号码',
  `nickname` varchar(255) DEFAULT NULL COMMENT '昵称',
  `realname` varchar(255) DEFAULT NULL COMMENT '姓名',
  `sex` int(1) DEFAULT NULL COMMENT '性别',
  `member_level` int(2) DEFAULT NULL COMMENT '用户级别',
  `money` decimal(10,2) DEFAULT '0.00' COMMENT '卡上余额',
  `com_money` decimal(10,2) DEFAULT '0.00' COMMENT '消费金额',
  `createtime` int(11) DEFAULT NULL COMMENT '创建日期',
  `sign_score` int(11) DEFAULT NULL COMMENT '签到积分',
  `sign_date` varchar(11) DEFAULT NULL COMMENT '签到日期',
  `pid` int(11) DEFAULT NULL COMMENT '上级id',
  `addres` varchar(255) DEFAULT NULL COMMENT '地址',
  `avatar` varchar(255) DEFAULT NULL COMMENT '头像',
  `qrcode` varchar(255) DEFAULT NULL COMMENT '会员码',
  `member_qrcode` varchar(255) DEFAULT NULL COMMENT '会员码',
  `commission` decimal(10,2) DEFAULT '0.00' COMMENT '佣金',
  `integral` int(11) DEFAULT '0' COMMENT '积分',
  `sign_count` int(11) DEFAULT '0' COMMENT '签到次数',
  `is_update_bir` smallint(1) DEFAULT '1' COMMENT '是否修改过生日信息 1 没有 2有',
  `recharge_qrcode` varchar(255) DEFAULT NULL COMMENT '代充二维码',
  `gender` smallint(1) DEFAULT NULL,
  `birthyear` smallint(6) unsigned NOT NULL,
  `birthmonth` tinyint(3) unsigned NOT NULL,
  `birthday` tinyint(3) unsigned NOT NULL,
  `mobile` varchar(255) DEFAULT NULL COMMENT '手机号码',
  `resideprovince` varchar(30) NOT NULL,
  `residecity` varchar(30) NOT NULL,
  `residedist` varchar(30) NOT NULL,
  `status` smallint(1) DEFAULT '0' COMMENT '0 未绑定 1.已绑定',
  `is_distribution` smallint(1) DEFAULT '1',
  `desc` varchar(255) DEFAULT '' COMMENT '个人说明',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `ims_wjyk_nhyk_user_import` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uniacid` int(11) DEFAULT NULL,
  `money` decimal(10,2) DEFAULT NULL COMMENT '钱包',
  `integral` int(11) DEFAULT '0' COMMENT '积分',
  `commission` decimal(10,2) DEFAULT '0.00' COMMENT '佣金',
  `nickname` varchar(255) DEFAULT NULL COMMENT '名称',
  `mobile` varchar(255) DEFAULT NULL COMMENT '手机号码',
  `createtime` int(11) DEFAULT NULL,
  `status` smallint(1) DEFAULT NULL COMMENT '0 未使用 1已绑定',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `ims_wjyk_nhyk_voucher` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uniacid` int(11) NOT NULL,
  `money` decimal(20,2) NOT NULL COMMENT '充值金额',
  `only` decimal(20,2) NOT NULL COMMENT '仅需',
  `sort` int(10) NOT NULL DEFAULT '0' COMMENT '排序，数值越高，越在前显示',
  `createtime` int(10) NOT NULL,
  `status` int(11) DEFAULT NULL COMMENT '0 显示 1 不显示',
  `img` varchar(255) DEFAULT NULL COMMENT '图片',
  `desc` varchar(255) DEFAULT NULL COMMENT '领取说明',
  `name` varchar(255) DEFAULT NULL COMMENT '代金券名称',
  `use_desc` text COMMENT '使用说明',
  `is_type` smallint(1) DEFAULT '1' COMMENT '1 热门 2 新品 3 自定义',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `ims_wjyk_nhyk_withdraw` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `uniacid` int(11) DEFAULT NULL COMMENT '公众号id',
  `uid` int(11) DEFAULT NULL COMMENT '0',
  `price` float(11,2) DEFAULT NULL COMMENT '金额',
  `apply_price` float(11,2) NOT NULL DEFAULT '0.00',
  `realname` varchar(255) DEFAULT NULL COMMENT '姓名',
  `mobile` varchar(255) DEFAULT NULL COMMENT '电话',
  `card_number` varchar(255) DEFAULT NULL COMMENT '卡号',
  `bank` varchar(255) DEFAULT NULL COMMENT '银行',
  `status` int(1) DEFAULT '0' COMMENT '1待审核，2拒绝,3通过',
  `w_type` int(1) DEFAULT '0' COMMENT '1微信提现，2银行卡提现,3提现到余额',
  `p_type` int(1) DEFAULT '0' COMMENT '0佣金提现，1余额提现',
  `addtime` varchar(255) DEFAULT NULL COMMENT '时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='提现';

";
pdo_run($sql);
if(!pdo_fieldexists("wjyk_nhyk_account", "id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_account")." ADD `id` int(11) NOT NULL AUTO_INCREMENT;");
}
if(!pdo_fieldexists("wjyk_nhyk_account", "account")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_account")." ADD `account` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_account", "name")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_account")." ADD `name` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_account", "password")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_account")." ADD `password` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_account", "auth_level")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_account")." ADD `auth_level` int(1);");
}
if(!pdo_fieldexists("wjyk_nhyk_account", "create_date")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_account")." ADD `create_date` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_account", "uniacid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_account")." ADD `uniacid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_address", "id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_address")." ADD `id` int(11) NOT NULL AUTO_INCREMENT;");
}
if(!pdo_fieldexists("wjyk_nhyk_address", "uniacid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_address")." ADD `uniacid` int(11) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_address", "uid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_address")." ADD `uid` varchar(155) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_address", "realname")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_address")." ADD `realname` varchar(155) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_address", "mobile")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_address")." ADD `mobile` varchar(155) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_address", "province")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_address")." ADD `province` varchar(20);");
}
if(!pdo_fieldexists("wjyk_nhyk_address", "city")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_address")." ADD `city` varchar(20);");
}
if(!pdo_fieldexists("wjyk_nhyk_address", "district")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_address")." ADD `district` varchar(20);");
}
if(!pdo_fieldexists("wjyk_nhyk_address", "address")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_address")." ADD `address` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_address", "is_default")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_address")." ADD `is_default` smallint(1) NOT NULL DEFAULT '1';");
}
if(!pdo_fieldexists("wjyk_nhyk_address", "createtime")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_address")." ADD `createtime` int(10) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_attachment", "id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_attachment")." ADD `id` int(11) NOT NULL AUTO_INCREMENT;");
}
if(!pdo_fieldexists("wjyk_nhyk_attachment", "uniacid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_attachment")." ADD `uniacid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_attachment", "type")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_attachment")." ADD `type` smallint(1);");
}
if(!pdo_fieldexists("wjyk_nhyk_attachment", "tx_appid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_attachment")." ADD `tx_appid` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_attachment", "tx_secretid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_attachment")." ADD `tx_secretid` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_attachment", "tx_secretkey")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_attachment")." ADD `tx_secretkey` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_attachment", "tx_bucket")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_attachment")." ADD `tx_bucket` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_attachment", "tx_url")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_attachment")." ADD `tx_url` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_attachment", "qn_accesskey")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_attachment")." ADD `qn_accesskey` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_attachment", "qn_secretkey")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_attachment")." ADD `qn_secretkey` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_attachment", "qn_bucket")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_attachment")." ADD `qn_bucket` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_attachment", "qn_url")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_attachment")." ADD `qn_url` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_attachment", "ali_access_key_id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_attachment")." ADD `ali_access_key_id` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_attachment", "ali_access_key_secret")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_attachment")." ADD `ali_access_key_secret` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_attachment", "ali_url")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_attachment")." ADD `ali_url` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_attachment", "ali_bucket")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_attachment")." ADD `ali_bucket` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_attachment", "tx_local")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_attachment")." ADD `tx_local` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_attachment", "ali_end_point")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_attachment")." ADD `ali_end_point` varchar(255) DEFAULT '';");
}
if(!pdo_fieldexists("wjyk_nhyk_car", "id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_car")." ADD `id` int(11) NOT NULL AUTO_INCREMENT;");
}
if(!pdo_fieldexists("wjyk_nhyk_car", "order_number")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_car")." ADD `order_number` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_car", "uniacid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_car")." ADD `uniacid` int(11) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_car", "uid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_car")." ADD `uid` int(11) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_car", "goods_id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_car")." ADD `goods_id` int(11) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_car", "num")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_car")." ADD `num` int(11) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_car", "createtime")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_car")." ADD `createtime` int(10) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_car", "spec")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_car")." ADD `spec` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_car", "car_type")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_car")." ADD `car_type` smallint(1) DEFAULT '0';");
}
if(!pdo_fieldexists("wjyk_nhyk_car", "store_id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_car")." ADD `store_id` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_car", "spec_price")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_car")." ADD `spec_price` decimal(10,2) DEFAULT '0.00';");
}
if(!pdo_fieldexists("wjyk_nhyk_car", "spec_stock")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_car")." ADD `spec_stock` int(11) DEFAULT '0';");
}
if(!pdo_fieldexists("wjyk_nhyk_category", "id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_category")." ADD `id` int(11) NOT NULL AUTO_INCREMENT;");
}
if(!pdo_fieldexists("wjyk_nhyk_category", "uniacid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_category")." ADD `uniacid` int(11) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_category", "uid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_category")." ADD `uid` int(11) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_category", "c_name")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_category")." ADD `c_name` varchar(1000) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_category", "sort")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_category")." ADD `sort` int(11) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_category", "is_show")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_category")." ADD `is_show` smallint(1) DEFAULT '1';");
}
if(!pdo_fieldexists("wjyk_nhyk_category", "createtime")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_category")." ADD `createtime` int(10) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_category", "ico")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_category")." ADD `ico` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_commission", "id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_commission")." ADD `id` int(11) unsigned NOT NULL AUTO_INCREMENT;");
}
if(!pdo_fieldexists("wjyk_nhyk_commission", "uid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_commission")." ADD `uid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_commission", "uniacid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_commission")." ADD `uniacid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_commission", "pid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_commission")." ADD `pid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_commission", "c_type")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_commission")." ADD `c_type` int(1);");
}
if(!pdo_fieldexists("wjyk_nhyk_commission", "commission")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_commission")." ADD `commission` float(11,2);");
}
if(!pdo_fieldexists("wjyk_nhyk_commission", "price")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_commission")." ADD `price` float(11,2);");
}
if(!pdo_fieldexists("wjyk_nhyk_commission", "addtime")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_commission")." ADD `addtime` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_commission", "order_id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_commission")." ADD `order_id` int(11) DEFAULT '0';");
}
if(!pdo_fieldexists("wjyk_nhyk_commodity", "id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_commodity")." ADD `id` int(11) NOT NULL AUTO_INCREMENT;");
}
if(!pdo_fieldexists("wjyk_nhyk_commodity", "commodity_name")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_commodity")." ADD `commodity_name` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_commodity", "commodity_price")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_commodity")." ADD `commodity_price` decimal(10,2);");
}
if(!pdo_fieldexists("wjyk_nhyk_commodity", "commodity_img")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_commodity")." ADD `commodity_img` varchar(255) DEFAULT '';");
}
if(!pdo_fieldexists("wjyk_nhyk_commodity", "commodity_desc")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_commodity")." ADD `commodity_desc` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_commodity", "commodity_norm")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_commodity")." ADD `commodity_norm` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_commodity", "uniacid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_commodity")." ADD `uniacid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_commodity", "create_date")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_commodity")." ADD `create_date` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_coupon", "id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_coupon")." ADD `id` int(11) unsigned NOT NULL AUTO_INCREMENT;");
}
if(!pdo_fieldexists("wjyk_nhyk_coupon", "uniacid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_coupon")." ADD `uniacid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_coupon", "full")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_coupon")." ADD `full` float(11,2) DEFAULT '0.00';");
}
if(!pdo_fieldexists("wjyk_nhyk_coupon", "less")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_coupon")." ADD `less` float(11,2) DEFAULT '0.00';");
}
if(!pdo_fieldexists("wjyk_nhyk_coupon", "sid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_coupon")." ADD `sid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_coupon", "goods_id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_coupon")." ADD `goods_id` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_coupon", "platform")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_coupon")." ADD `platform` int(1) DEFAULT '1';");
}
if(!pdo_fieldexists("wjyk_nhyk_coupon", "give")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_coupon")." ADD `give` int(1) DEFAULT '1';");
}
if(!pdo_fieldexists("wjyk_nhyk_coupon", "num")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_coupon")." ADD `num` int(11) DEFAULT '0';");
}
if(!pdo_fieldexists("wjyk_nhyk_coupon", "is_show")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_coupon")." ADD `is_show` int(1) DEFAULT '1';");
}
if(!pdo_fieldexists("wjyk_nhyk_coupon", "start_time")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_coupon")." ADD `start_time` int(10) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_coupon", "end_time")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_coupon")." ADD `end_time` int(10) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_coupon", "addtime")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_coupon")." ADD `addtime` int(10) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_coupon", "sort")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_coupon")." ADD `sort` int(11) DEFAULT '0';");
}
if(!pdo_fieldexists("wjyk_nhyk_coupon", "type")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_coupon")." ADD `type` smallint(1);");
}
if(!pdo_fieldexists("wjyk_nhyk_coupon", "region")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_coupon")." ADD `region` smallint(1);");
}
if(!pdo_fieldexists("wjyk_nhyk_coupon", "br_day")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_coupon")." ADD `br_day` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_coupon", "c_type")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_coupon")." ADD `c_type` smallint(1);");
}
if(!pdo_fieldexists("wjyk_nhyk_deduction", "id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_deduction")." ADD `id` int(11) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_deduction", "uniacid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_deduction")." ADD `uniacid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_deduction", "coupon_id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_deduction")." ADD `coupon_id` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_deduction", "less")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_deduction")." ADD `less` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_deduction", "createtime")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_deduction")." ADD `createtime` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_deduction", "uid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_deduction")." ADD `uid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_deduction", "oper_uid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_deduction")." ADD `oper_uid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_distribution_audit", "id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_distribution_audit")." ADD `id` int(11) NOT NULL AUTO_INCREMENT;");
}
if(!pdo_fieldexists("wjyk_nhyk_distribution_audit", "uid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_distribution_audit")." ADD `uid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_distribution_audit", "createtime")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_distribution_audit")." ADD `createtime` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_distribution_audit", "status")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_distribution_audit")." ADD `status` smallint(1) DEFAULT '1';");
}
if(!pdo_fieldexists("wjyk_nhyk_distribution_audit", "remark")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_distribution_audit")." ADD `remark` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_distribution_audit", "uniacid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_distribution_audit")." ADD `uniacid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_distribution_set", "id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_distribution_set")." ADD `id` int(11) NOT NULL AUTO_INCREMENT;");
}
if(!pdo_fieldexists("wjyk_nhyk_distribution_set", "uniacid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_distribution_set")." ADD `uniacid` int(11) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_distribution_set", "poster")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_distribution_set")." ADD `poster` varchar(255) DEFAULT '0';");
}
if(!pdo_fieldexists("wjyk_nhyk_distribution_set", "distribution_level")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_distribution_set")." ADD `distribution_level` int(1) DEFAULT '0';");
}
if(!pdo_fieldexists("wjyk_nhyk_distribution_set", "distribution_one")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_distribution_set")." ADD `distribution_one` float(3,2) DEFAULT '0.00';");
}
if(!pdo_fieldexists("wjyk_nhyk_distribution_set", "distribution_two")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_distribution_set")." ADD `distribution_two` float(3,2) DEFAULT '0.00';");
}
if(!pdo_fieldexists("wjyk_nhyk_distribution_set", "distribution_three")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_distribution_set")." ADD `distribution_three` float(3,2) DEFAULT '0.00';");
}
if(!pdo_fieldexists("wjyk_nhyk_distribution_set", "distribution_description")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_distribution_set")." ADD `distribution_description` text;");
}
if(!pdo_fieldexists("wjyk_nhyk_distribution_set", "handling_fee")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_distribution_set")." ADD `handling_fee` float(11,2) NOT NULL DEFAULT '0.05';");
}
if(!pdo_fieldexists("wjyk_nhyk_distribution_set", "lowest_withdraw")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_distribution_set")." ADD `lowest_withdraw` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_distribution_set", "w_type")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_distribution_set")." ADD `w_type` varchar(50) DEFAULT '1';");
}
if(!pdo_fieldexists("wjyk_nhyk_distribution_set", "createtime")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_distribution_set")." ADD `createtime` int(10) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_distribution_set", "condition")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_distribution_set")." ADD `condition` smallint(1) DEFAULT '1';");
}
if(!pdo_fieldexists("wjyk_nhyk_distribution_set", "consume_money")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_distribution_set")." ADD `consume_money` decimal(10,2) DEFAULT '0.00';");
}
if(!pdo_fieldexists("wjyk_nhyk_distribution_set", "member_level")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_distribution_set")." ADD `member_level` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_distribution_set", "goods_id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_distribution_set")." ADD `goods_id` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_distribution_set", "plugin_type")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_distribution_set")." ADD `plugin_type` smallint(1);");
}
if(!pdo_fieldexists("wjyk_nhyk_foodcategory", "id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_foodcategory")." ADD `id` int(11) NOT NULL AUTO_INCREMENT;");
}
if(!pdo_fieldexists("wjyk_nhyk_foodcategory", "uniacid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_foodcategory")." ADD `uniacid` int(11) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_foodcategory", "uid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_foodcategory")." ADD `uid` int(11) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_foodcategory", "c_name")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_foodcategory")." ADD `c_name` varchar(1000) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_foodcategory", "sort")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_foodcategory")." ADD `sort` int(11) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_foodcategory", "is_show")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_foodcategory")." ADD `is_show` smallint(1) DEFAULT '1';");
}
if(!pdo_fieldexists("wjyk_nhyk_foodcategory", "createtime")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_foodcategory")." ADD `createtime` int(10) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_foodcategory", "ico")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_foodcategory")." ADD `ico` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_foods", "id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_foods")." ADD `id` int(11) NOT NULL AUTO_INCREMENT;");
}
if(!pdo_fieldexists("wjyk_nhyk_foods", "uniacid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_foods")." ADD `uniacid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_foods", "foods_name")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_foods")." ADD `foods_name` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_foods", "foods_img")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_foods")." ADD `foods_img` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_foods", "carousel")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_foods")." ADD `carousel` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_foods", "discount")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_foods")." ADD `discount` decimal(10,2);");
}
if(!pdo_fieldexists("wjyk_nhyk_foods", "original_price")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_foods")." ADD `original_price` decimal(10,2);");
}
if(!pdo_fieldexists("wjyk_nhyk_foods", "desc")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_foods")." ADD `desc` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_foods", "norm")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_foods")." ADD `norm` varchar(1000) DEFAULT '';");
}
if(!pdo_fieldexists("wjyk_nhyk_foods", "summary")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_foods")." ADD `summary` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_foods", "createtime")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_foods")." ADD `createtime` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_foods", "cid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_foods")." ADD `cid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_foods", "stock")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_foods")." ADD `stock` int(11) DEFAULT '0';");
}
if(!pdo_fieldexists("wjyk_nhyk_foods", "is_show")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_foods")." ADD `is_show` smallint(1);");
}
if(!pdo_fieldexists("wjyk_nhyk_foods", "sales")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_foods")." ADD `sales` int(11) DEFAULT '0';");
}
if(!pdo_fieldexists("wjyk_nhyk_foods", "is_new")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_foods")." ADD `is_new` smallint(1) DEFAULT '1';");
}
if(!pdo_fieldexists("wjyk_nhyk_foods", "different")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_foods")." ADD `different` int(11) DEFAULT '0';");
}
if(!pdo_fieldexists("wjyk_nhyk_foods", "medium")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_foods")." ADD `medium` int(11) DEFAULT '0';");
}
if(!pdo_fieldexists("wjyk_nhyk_foods", "good")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_foods")." ADD `good` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_foods_store", "id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_foods_store")." ADD `id` int(11) NOT NULL AUTO_INCREMENT;");
}
if(!pdo_fieldexists("wjyk_nhyk_foods_store", "uniacid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_foods_store")." ADD `uniacid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_foods_store", "store_id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_foods_store")." ADD `store_id` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_foods_store", "is_show")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_foods_store")." ADD `is_show` smallint(1);");
}
if(!pdo_fieldexists("wjyk_nhyk_foods_store", "foods_id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_foods_store")." ADD `foods_id` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_foods_store", "foods_str")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_foods_store")." ADD `foods_str` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_foods_store", "type")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_foods_store")." ADD `type` smallint(1);");
}
if(!pdo_fieldexists("wjyk_nhyk_goods", "id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_goods")." ADD `id` int(11) NOT NULL AUTO_INCREMENT;");
}
if(!pdo_fieldexists("wjyk_nhyk_goods", "uniacid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_goods")." ADD `uniacid` int(11) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_goods", "uid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_goods")." ADD `uid` int(11) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_goods", "cid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_goods")." ADD `cid` int(11) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_goods", "goods_name")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_goods")." ADD `goods_name` varchar(100) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_goods", "original_price")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_goods")." ADD `original_price` decimal(11,2) DEFAULT '0.00';");
}
if(!pdo_fieldexists("wjyk_nhyk_goods", "discount_price")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_goods")." ADD `discount_price` decimal(11,2) DEFAULT '0.00';");
}
if(!pdo_fieldexists("wjyk_nhyk_goods", "cover")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_goods")." ADD `cover` varchar(255) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_goods", "carousel")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_goods")." ADD `carousel` text;");
}
if(!pdo_fieldexists("wjyk_nhyk_goods", "details")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_goods")." ADD `details` text;");
}
if(!pdo_fieldexists("wjyk_nhyk_goods", "is_show")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_goods")." ADD `is_show` int(1) NOT NULL DEFAULT '1';");
}
if(!pdo_fieldexists("wjyk_nhyk_goods", "recommend")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_goods")." ADD `recommend` int(1) NOT NULL DEFAULT '1';");
}
if(!pdo_fieldexists("wjyk_nhyk_goods", "sales")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_goods")." ADD `sales` int(10) DEFAULT '0';");
}
if(!pdo_fieldexists("wjyk_nhyk_goods", "createtime")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_goods")." ADD `createtime` int(10) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_goods", "good")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_goods")." ADD `good` int(11) DEFAULT '0';");
}
if(!pdo_fieldexists("wjyk_nhyk_goods", "medium")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_goods")." ADD `medium` int(11) DEFAULT '0';");
}
if(!pdo_fieldexists("wjyk_nhyk_goods", "different")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_goods")." ADD `different` int(11) DEFAULT '0';");
}
if(!pdo_fieldexists("wjyk_nhyk_goods", "favorites")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_goods")." ADD `favorites` int(10) DEFAULT '0';");
}
if(!pdo_fieldexists("wjyk_nhyk_goods", "stock")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_goods")." ADD `stock` int(11) DEFAULT '0';");
}
if(!pdo_fieldexists("wjyk_nhyk_goods", "spec")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_goods")." ADD `spec` text;");
}
if(!pdo_fieldexists("wjyk_nhyk_goods", "is_freight")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_goods")." ADD `is_freight` int(1) NOT NULL DEFAULT '1';");
}
if(!pdo_fieldexists("wjyk_nhyk_goods", "freight")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_goods")." ADD `freight` decimal(11,2) DEFAULT '0.00';");
}
if(!pdo_fieldexists("wjyk_nhyk_goods", "region_type")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_goods")." ADD `region_type` smallint(1);");
}
if(!pdo_fieldexists("wjyk_nhyk_goods", "need_integer")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_goods")." ADD `need_integer` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_goods", "is_exchange")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_goods")." ADD `is_exchange` smallint(1);");
}
if(!pdo_fieldexists("wjyk_nhyk_hotel", "id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_hotel")." ADD `id` int(11) NOT NULL AUTO_INCREMENT;");
}
if(!pdo_fieldexists("wjyk_nhyk_hotel", "uniacid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_hotel")." ADD `uniacid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_hotel", "name")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_hotel")." ADD `name` varchar(255) DEFAULT '';");
}
if(!pdo_fieldexists("wjyk_nhyk_hotel", "mobile")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_hotel")." ADD `mobile` varchar(255) DEFAULT '';");
}
if(!pdo_fieldexists("wjyk_nhyk_hotel", "createtime")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_hotel")." ADD `createtime` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_hotel", "desc")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_hotel")." ADD `desc` varchar(255) DEFAULT '';");
}
if(!pdo_fieldexists("wjyk_nhyk_hotel", "img")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_hotel")." ADD `img` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_hotel", "addres_lat")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_hotel")." ADD `addres_lat` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_hotel", "addres_lng")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_hotel")." ADD `addres_lng` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_hotel", "resideprovince")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_hotel")." ADD `resideprovince` varchar(30) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_hotel", "residecity")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_hotel")." ADD `residecity` varchar(30) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_hotel", "residedist")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_hotel")." ADD `residedist` varchar(30) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_hotel", "score")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_hotel")." ADD `score` decimal(10,1) DEFAULT '0.0';");
}
if(!pdo_fieldexists("wjyk_nhyk_hotel", "status")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_hotel")." ADD `status` smallint(1) DEFAULT '0';");
}
if(!pdo_fieldexists("wjyk_nhyk_hotel", "addres")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_hotel")." ADD `addres` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_hotel_thing", "id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_hotel_thing")." ADD `id` int(11) NOT NULL AUTO_INCREMENT;");
}
if(!pdo_fieldexists("wjyk_nhyk_hotel_thing", "uniacid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_hotel_thing")." ADD `uniacid` int(11) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_hotel_thing", "uid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_hotel_thing")." ADD `uid` int(11) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_hotel_thing", "c_name")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_hotel_thing")." ADD `c_name` varchar(1000) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_hotel_thing", "sort")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_hotel_thing")." ADD `sort` int(11) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_hotel_thing", "is_show")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_hotel_thing")." ADD `is_show` smallint(1) DEFAULT '1';");
}
if(!pdo_fieldexists("wjyk_nhyk_hotel_thing", "createtime")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_hotel_thing")." ADD `createtime` int(10) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_hotel_thing", "ico")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_hotel_thing")." ADD `ico` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_hotel_thing", "price")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_hotel_thing")." ADD `price` decimal(10,2) DEFAULT '0.00';");
}
if(!pdo_fieldexists("wjyk_nhyk_hotel_thing_consume", "id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_hotel_thing_consume")." ADD `id` int(11) NOT NULL AUTO_INCREMENT;");
}
if(!pdo_fieldexists("wjyk_nhyk_hotel_thing_consume", "order_id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_hotel_thing_consume")." ADD `order_id` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_hotel_thing_consume", "tid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_hotel_thing_consume")." ADD `tid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_hotel_thing_consume", "less_num")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_hotel_thing_consume")." ADD `less_num` int(11) DEFAULT '0';");
}
if(!pdo_fieldexists("wjyk_nhyk_hotel_thing_consume", "less_price")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_hotel_thing_consume")." ADD `less_price` decimal(10,2) DEFAULT '0.00';");
}
if(!pdo_fieldexists("wjyk_nhyk_hotel_thing_rel", "id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_hotel_thing_rel")." ADD `id` int(11) NOT NULL AUTO_INCREMENT;");
}
if(!pdo_fieldexists("wjyk_nhyk_hotel_thing_rel", "uniacid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_hotel_thing_rel")." ADD `uniacid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_hotel_thing_rel", "rid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_hotel_thing_rel")." ADD `rid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_hotel_thing_rel", "num")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_hotel_thing_rel")." ADD `num` int(11) DEFAULT '0';");
}
if(!pdo_fieldexists("wjyk_nhyk_hotel_thing_rel", "tid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_hotel_thing_rel")." ADD `tid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_index_meau", "id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_index_meau")." ADD `id` int(11) NOT NULL AUTO_INCREMENT;");
}
if(!pdo_fieldexists("wjyk_nhyk_index_meau", "uniacid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_index_meau")." ADD `uniacid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_index_meau", "order")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_index_meau")." ADD `order` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_index_meau", "meau_name")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_index_meau")." ADD `meau_name` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_index_meau", "meau_link")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_index_meau")." ADD `meau_link` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_index_meau", "createtime")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_index_meau")." ADD `createtime` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_index_meau", "status")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_index_meau")." ADD `status` smallint(1);");
}
if(!pdo_fieldexists("wjyk_nhyk_index_meau", "icon")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_index_meau")." ADD `icon` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_index_meau", "meal_app_id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_index_meau")." ADD `meal_app_id` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_index_meau", "meau_params")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_index_meau")." ADD `meau_params` varchar(255) DEFAULT '';");
}
if(!pdo_fieldexists("wjyk_nhyk_index_meau", "type")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_index_meau")." ADD `type` smallint(1) DEFAULT '1';");
}
if(!pdo_fieldexists("wjyk_nhyk_index_meau", "nei_type")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_index_meau")." ADD `nei_type` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_integral", "id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_integral")." ADD `id` int(11) NOT NULL AUTO_INCREMENT;");
}
if(!pdo_fieldexists("wjyk_nhyk_integral", "uniacid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_integral")." ADD `uniacid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_integral", "ob_integral")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_integral")." ADD `ob_integral` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_integral", "type")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_integral")." ADD `type` smallint(1);");
}
if(!pdo_fieldexists("wjyk_nhyk_integral", "createtime")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_integral")." ADD `createtime` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_integral", "uid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_integral")." ADD `uid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_meal", "id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_meal")." ADD `id` int(11) NOT NULL AUTO_INCREMENT;");
}
if(!pdo_fieldexists("wjyk_nhyk_meal", "meal_type")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_meal")." ADD `meal_type` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_meal", "meal_count")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_meal")." ADD `meal_count` int(11) DEFAULT '0';");
}
if(!pdo_fieldexists("wjyk_nhyk_meal", "meal_money")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_meal")." ADD `meal_money` decimal(10,2) DEFAULT '0.00';");
}
if(!pdo_fieldexists("wjyk_nhyk_meal", "uniacid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_meal")." ADD `uniacid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_meal", "create_date")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_meal")." ADD `create_date` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_meal", "status")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_meal")." ADD `status` int(1);");
}
if(!pdo_fieldexists("wjyk_nhyk_meal", "expired_date")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_meal")." ADD `expired_date` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_meal", "order")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_meal")." ADD `order` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_meal", "meal_month")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_meal")." ADD `meal_month` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_meal", "meal_name")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_meal")." ADD `meal_name` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_meal", "meal_discount")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_meal")." ADD `meal_discount` decimal(10,2);");
}
if(!pdo_fieldexists("wjyk_nhyk_meal", "meal_back_img")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_meal")." ADD `meal_back_img` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_meal", "meal__desc")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_meal")." ADD `meal__desc` text;");
}
if(!pdo_fieldexists("wjyk_nhyk_meal", "meal_use_count")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_meal")." ADD `meal_use_count` int(11) DEFAULT '0';");
}
if(!pdo_fieldexists("wjyk_nhyk_meal", "meal_buy_count")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_meal")." ADD `meal_buy_count` int(11) DEFAULT '10';");
}
if(!pdo_fieldexists("wjyk_nhyk_meal", "meal_desc")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_meal")." ADD `meal_desc` text;");
}
if(!pdo_fieldexists("wjyk_nhyk_meal_log", "id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_meal_log")." ADD `id` int(11) NOT NULL AUTO_INCREMENT;");
}
if(!pdo_fieldexists("wjyk_nhyk_meal_log", "uniacid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_meal_log")." ADD `uniacid` int(11) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_meal_log", "uid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_meal_log")." ADD `uid` int(11) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_meal_log", "meal_id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_meal_log")." ADD `meal_id` int(11) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_meal_log", "createtime")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_meal_log")." ADD `createtime` int(11) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_meal_log", "rel_count")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_meal_log")." ADD `rel_count` int(11) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_meal_log", "sum_count")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_meal_log")." ADD `sum_count` int(11) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_meal_log", "store_id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_meal_log")." ADD `store_id` int(11) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_meal_log", "oper_id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_meal_log")." ADD `oper_id` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_meau", "id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_meau")." ADD `id` int(11) NOT NULL AUTO_INCREMENT;");
}
if(!pdo_fieldexists("wjyk_nhyk_meau", "uniacid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_meau")." ADD `uniacid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_meau", "order")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_meau")." ADD `order` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_meau", "meau_name")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_meau")." ADD `meau_name` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_meau", "meau_link")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_meau")." ADD `meau_link` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_meau", "createtime")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_meau")." ADD `createtime` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_meau", "status")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_meau")." ADD `status` smallint(1);");
}
if(!pdo_fieldexists("wjyk_nhyk_meau", "icon")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_meau")." ADD `icon` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_meau", "icon_select")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_meau")." ADD `icon_select` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_memlevel", "id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_memlevel")." ADD `id` int(11) NOT NULL AUTO_INCREMENT;");
}
if(!pdo_fieldexists("wjyk_nhyk_memlevel", "member_name")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_memlevel")." ADD `member_name` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_memlevel", "need_money")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_memlevel")." ADD `need_money` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_memlevel", "member_level")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_memlevel")." ADD `member_level` int(2);");
}
if(!pdo_fieldexists("wjyk_nhyk_memlevel", "next_level")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_memlevel")." ADD `next_level` int(2);");
}
if(!pdo_fieldexists("wjyk_nhyk_memlevel", "create_date")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_memlevel")." ADD `create_date` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_memlevel", "uniacid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_memlevel")." ADD `uniacid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_memlevel", "discount")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_memlevel")." ADD `discount` decimal(10,2);");
}
if(!pdo_fieldexists("wjyk_nhyk_memlevel", "member_logo")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_memlevel")." ADD `member_logo` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_memlevel", "is_default")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_memlevel")." ADD `is_default` smallint(1) DEFAULT '1';");
}
if(!pdo_fieldexists("wjyk_nhyk_memlevel", "member_back_logo")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_memlevel")." ADD `member_back_logo` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_merch_account", "id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_merch_account")." ADD `id` int(11) NOT NULL AUTO_INCREMENT;");
}
if(!pdo_fieldexists("wjyk_nhyk_merch_account", "uniacid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_merch_account")." ADD `uniacid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_merch_account", "username")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_merch_account")." ADD `username` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_merch_account", "pwd")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_merch_account")." ADD `pwd` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_merch_account", "createtime")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_merch_account")." ADD `createtime` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_merch_account", "lastvisit")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_merch_account")." ADD `lastvisit` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_merch_account", "lastip")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_merch_account")." ADD `lastip` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_merch_account", "type")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_merch_account")." ADD `type` smallint(1);");
}
if(!pdo_fieldexists("wjyk_nhyk_merch_account", "store_id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_merch_account")." ADD `store_id` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_merch_account", "status")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_merch_account")." ADD `status` smallint(1);");
}
if(!pdo_fieldexists("wjyk_nhyk_merch_account", "mobile")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_merch_account")." ADD `mobile` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_merch_user", "id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_merch_user")." ADD `id` int(11) NOT NULL AUTO_INCREMENT;");
}
if(!pdo_fieldexists("wjyk_nhyk_merch_user", "status")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_merch_user")." ADD `status` smallint(1);");
}
if(!pdo_fieldexists("wjyk_nhyk_merch_user", "accounttime")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_merch_user")." ADD `accounttime` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_merch_user", "uniacid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_merch_user")." ADD `uniacid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_merch_user", "accountid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_merch_user")." ADD `accountid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_merch_user", "createtime")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_merch_user")." ADD `createtime` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_module_plugin", "id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_module_plugin")." ADD `id` int(11) NOT NULL AUTO_INCREMENT;");
}
if(!pdo_fieldexists("wjyk_nhyk_module_plugin", "uniacid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_module_plugin")." ADD `uniacid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_module_plugin", "pid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_module_plugin")." ADD `pid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_module_plugin", "is_open")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_module_plugin")." ADD `is_open` smallint(1);");
}
if(!pdo_fieldexists("wjyk_nhyk_my_coupon", "id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_my_coupon")." ADD `id` int(11) unsigned NOT NULL AUTO_INCREMENT;");
}
if(!pdo_fieldexists("wjyk_nhyk_my_coupon", "uniacid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_my_coupon")." ADD `uniacid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_my_coupon", "uid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_my_coupon")." ADD `uid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_my_coupon", "pid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_my_coupon")." ADD `pid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_my_coupon", "full")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_my_coupon")." ADD `full` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_my_coupon", "less")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_my_coupon")." ADD `less` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_my_coupon", "sid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_my_coupon")." ADD `sid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_my_coupon", "c_type")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_my_coupon")." ADD `c_type` int(1) DEFAULT '1';");
}
if(!pdo_fieldexists("wjyk_nhyk_my_coupon", "status")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_my_coupon")." ADD `status` int(1) DEFAULT '1';");
}
if(!pdo_fieldexists("wjyk_nhyk_my_coupon", "start_time")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_my_coupon")." ADD `start_time` int(10) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_my_coupon", "end_time")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_my_coupon")." ADD `end_time` int(10) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_my_coupon", "addtime")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_my_coupon")." ADD `addtime` int(10) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_my_meal", "id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_my_meal")." ADD `id` int(11) NOT NULL AUTO_INCREMENT;");
}
if(!pdo_fieldexists("wjyk_nhyk_my_meal", "uniacid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_my_meal")." ADD `uniacid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_my_meal", "meal_id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_my_meal")." ADD `meal_id` int(11) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_my_meal", "expired_date")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_my_meal")." ADD `expired_date` int(11) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_my_meal", "createtime")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_my_meal")." ADD `createtime` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_my_meal", "rel_count")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_my_meal")." ADD `rel_count` int(11) DEFAULT '0';");
}
if(!pdo_fieldexists("wjyk_nhyk_my_meal", "sum_count")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_my_meal")." ADD `sum_count` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_my_meal", "uid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_my_meal")." ADD `uid` int(11) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_my_meal", "meal_discount")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_my_meal")." ADD `meal_discount` decimal(10,2);");
}
if(!pdo_fieldexists("wjyk_nhyk_my_meal", "qrcode")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_my_meal")." ADD `qrcode` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_my_meal", "meal_use_count")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_my_meal")." ADD `meal_use_count` int(11) DEFAULT '0';");
}
if(!pdo_fieldexists("wjyk_nhyk_my_meal", "status")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_my_meal")." ADD `status` smallint(1) DEFAULT '0';");
}
if(!pdo_fieldexists("wjyk_nhyk_my_voucher", "id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_my_voucher")." ADD `id` int(11) unsigned NOT NULL AUTO_INCREMENT;");
}
if(!pdo_fieldexists("wjyk_nhyk_my_voucher", "uniacid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_my_voucher")." ADD `uniacid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_my_voucher", "uid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_my_voucher")." ADD `uid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_my_voucher", "pid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_my_voucher")." ADD `pid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_my_voucher", "money")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_my_voucher")." ADD `money` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_my_voucher", "only")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_my_voucher")." ADD `only` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_my_voucher", "status")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_my_voucher")." ADD `status` int(1) DEFAULT '1';");
}
if(!pdo_fieldexists("wjyk_nhyk_my_voucher", "start_time")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_my_voucher")." ADD `start_time` int(10) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_my_voucher", "end_time")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_my_voucher")." ADD `end_time` int(10) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_my_voucher", "createtime")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_my_voucher")." ADD `createtime` int(10) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_my_voucher", "transfer_uid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_my_voucher")." ADD `transfer_uid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_note", "id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_note")." ADD `id` int(11) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_note", "is_open")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_note")." ADD `is_open` smallint(1) DEFAULT '1';");
}
if(!pdo_fieldexists("wjyk_nhyk_note", "type")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_note")." ADD `type` smallint(1) DEFAULT '1';");
}
if(!pdo_fieldexists("wjyk_nhyk_note", "uniacid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_note")." ADD `uniacid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_note", "user")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_note")." ADD `user` varchar(50);");
}
if(!pdo_fieldexists("wjyk_nhyk_note", "pass")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_note")." ADD `pass` varchar(50);");
}
if(!pdo_fieldexists("wjyk_nhyk_note", "message")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_note")." ADD `message` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_note", "keyId")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_note")." ADD `keyId` varchar(50);");
}
if(!pdo_fieldexists("wjyk_nhyk_note", "keySecret")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_note")." ADD `keySecret` varchar(50);");
}
if(!pdo_fieldexists("wjyk_nhyk_note", "signName")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_note")." ADD `signName` varchar(50);");
}
if(!pdo_fieldexists("wjyk_nhyk_note", "templateCode")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_note")." ADD `templateCode` varchar(50);");
}
if(!pdo_fieldexists("wjyk_nhyk_note", "kf_success_code")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_note")." ADD `kf_success_code` varchar(50);");
}
if(!pdo_fieldexists("wjyk_nhyk_note", "new_success_code")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_note")." ADD `new_success_code` varchar(50);");
}
if(!pdo_fieldexists("wjyk_nhyk_note", "kf_success_message")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_note")." ADD `kf_success_message` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_note", "new_success_message")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_note")." ADD `new_success_message` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_note", "br_success_code")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_note")." ADD `br_success_code` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_notice_set", "id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_notice_set")." ADD `id` int(11) NOT NULL AUTO_INCREMENT;");
}
if(!pdo_fieldexists("wjyk_nhyk_notice_set", "uniacid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_notice_set")." ADD `uniacid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_notice_set", "createtime")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_notice_set")." ADD `createtime` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_notice_set", "new_template")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_notice_set")." ADD `new_template` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_notice_set", "cz_success_template")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_notice_set")." ADD `cz_success_template` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_notice_set", "kf_template")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_notice_set")." ADD `kf_template` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_notice_set", "new_type")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_notice_set")." ADD `new_type` smallint(1);");
}
if(!pdo_fieldexists("wjyk_nhyk_notice_set", "cz_type")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_notice_set")." ADD `cz_type` smallint(1);");
}
if(!pdo_fieldexists("wjyk_nhyk_notice_set", "kf_type")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_notice_set")." ADD `kf_type` smallint(1);");
}
if(!pdo_fieldexists("wjyk_nhyk_notice_set", "br_template")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_notice_set")." ADD `br_template` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_notice_set", "br_type")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_notice_set")." ADD `br_type` smallint(1);");
}
if(!pdo_fieldexists("wjyk_nhyk_order", "id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order")." ADD `id` int(11) NOT NULL AUTO_INCREMENT;");
}
if(!pdo_fieldexists("wjyk_nhyk_order", "order_number")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order")." ADD `order_number` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_order", "uniacid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order")." ADD `uniacid` int(11) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_order", "uid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order")." ADD `uid` int(11) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_order", "goods_id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order")." ADD `goods_id` int(11) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_order", "num")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order")." ADD `num` int(11) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_order", "unit_price")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order")." ADD `unit_price` float(10,2) DEFAULT '0.00';");
}
if(!pdo_fieldexists("wjyk_nhyk_order", "price")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order")." ADD `price` float(11,2) DEFAULT '0.00';");
}
if(!pdo_fieldexists("wjyk_nhyk_order", "real_payment")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order")." ADD `real_payment` float(11,2) DEFAULT '0.00';");
}
if(!pdo_fieldexists("wjyk_nhyk_order", "discount")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order")." ADD `discount` float(11,2) DEFAULT '0.00';");
}
if(!pdo_fieldexists("wjyk_nhyk_order", "status")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order")." ADD `status` smallint(1) NOT NULL DEFAULT '1';");
}
if(!pdo_fieldexists("wjyk_nhyk_order", "realname")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order")." ADD `realname` varchar(20);");
}
if(!pdo_fieldexists("wjyk_nhyk_order", "mobile")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order")." ADD `mobile` varchar(20);");
}
if(!pdo_fieldexists("wjyk_nhyk_order", "province")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order")." ADD `province` varchar(20);");
}
if(!pdo_fieldexists("wjyk_nhyk_order", "city")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order")." ADD `city` varchar(20);");
}
if(!pdo_fieldexists("wjyk_nhyk_order", "district")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order")." ADD `district` varchar(20);");
}
if(!pdo_fieldexists("wjyk_nhyk_order", "address")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order")." ADD `address` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_order", "ship_time")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order")." ADD `ship_time` int(10);");
}
if(!pdo_fieldexists("wjyk_nhyk_order", "receipt_time")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order")." ADD `receipt_time` int(10);");
}
if(!pdo_fieldexists("wjyk_nhyk_order", "express_no")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order")." ADD `express_no` varchar(50);");
}
if(!pdo_fieldexists("wjyk_nhyk_order", "express_name")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order")." ADD `express_name` varchar(50);");
}
if(!pdo_fieldexists("wjyk_nhyk_order", "createtime")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order")." ADD `createtime` int(10) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_order", "is_comment")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order")." ADD `is_comment` smallint(1) DEFAULT '1';");
}
if(!pdo_fieldexists("wjyk_nhyk_order", "coupon_id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order")." ADD `coupon_id` int(11) DEFAULT '0';");
}
if(!pdo_fieldexists("wjyk_nhyk_order", "member_discount")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order")." ADD `member_discount` float(11,2) DEFAULT '0.00';");
}
if(!pdo_fieldexists("wjyk_nhyk_order", "pay_type")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order")." ADD `pay_type` smallint(1) NOT NULL DEFAULT '1';");
}
if(!pdo_fieldexists("wjyk_nhyk_order", "spec")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order")." ADD `spec` text;");
}
if(!pdo_fieldexists("wjyk_nhyk_order", "type")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order")." ADD `type` smallint(1) NOT NULL DEFAULT '1';");
}
if(!pdo_fieldexists("wjyk_nhyk_order", "freight")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order")." ADD `freight` float(3,2) DEFAULT '0.00';");
}
if(!pdo_fieldexists("wjyk_nhyk_order", "integral")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order")." ADD `integral` float(11,2) DEFAULT '0.00';");
}
if(!pdo_fieldexists("wjyk_nhyk_order", "other_goods_id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order")." ADD `other_goods_id` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_order", "store_id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order")." ADD `store_id` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_order", "store_name")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order")." ADD `store_name` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_order", "need_integral")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order")." ADD `need_integral` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_order", "receipt_type")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order")." ADD `receipt_type` smallint(1) DEFAULT '1';");
}
if(!pdo_fieldexists("wjyk_nhyk_order", "remark")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order")." ADD `remark` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_order", "pickup_code")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order")." ADD `pickup_code` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_order", "plugin_type")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order")." ADD `plugin_type` smallint(1) DEFAULT '0';");
}
if(!pdo_fieldexists("wjyk_nhyk_order", "pr_number")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order")." ADD `pr_number` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_order", "voucher_id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order")." ADD `voucher_id` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_order", "seat_number")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order")." ADD `seat_number` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_order", "arrival_time")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order")." ADD `arrival_time` varchar(255) DEFAULT '';");
}
if(!pdo_fieldexists("wjyk_nhyk_order", "pickup_type")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order")." ADD `pickup_type` smallint(1) DEFAULT '0';");
}
if(!pdo_fieldexists("wjyk_nhyk_order", "reserve_number")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order")." ADD `reserve_number` int(11) DEFAULT '0';");
}
if(!pdo_fieldexists("wjyk_nhyk_order", "reserve_start")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order")." ADD `reserve_start` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_order", "reserve_end")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order")." ADD `reserve_end` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_order", "is_show")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order")." ADD `is_show` smallint(1) DEFAULT '0';");
}
if(!pdo_fieldexists("wjyk_nhyk_order", "deposit")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order")." ADD `deposit` decimal(10,0) DEFAULT '0';");
}
if(!pdo_fieldexists("wjyk_nhyk_order", "meal_id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order")." ADD `meal_id` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_order", "order_per_type")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order")." ADD `order_per_type` smallint(1) DEFAULT '1';");
}
if(!pdo_fieldexists("wjyk_nhyk_order", "mid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order")." ADD `mid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_order", "is_submit")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order")." ADD `is_submit` smallint(1) DEFAULT '1';");
}
if(!pdo_fieldexists("wjyk_nhyk_order_goods", "id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order_goods")." ADD `id` int(11) NOT NULL AUTO_INCREMENT;");
}
if(!pdo_fieldexists("wjyk_nhyk_order_goods", "order_id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order_goods")." ADD `order_id` int(11) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_order_goods", "uniacid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order_goods")." ADD `uniacid` int(11) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_order_goods", "goods_id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order_goods")." ADD `goods_id` int(11) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_order_goods", "num")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order_goods")." ADD `num` int(11) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_order_goods", "unit_price")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order_goods")." ADD `unit_price` float(11,2) DEFAULT '0.00';");
}
if(!pdo_fieldexists("wjyk_nhyk_order_goods", "createtime")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order_goods")." ADD `createtime` int(10) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_order_goods", "integral")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order_goods")." ADD `integral` decimal(10,2) DEFAULT '0.00';");
}
if(!pdo_fieldexists("wjyk_nhyk_order_goods", "spec")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order_goods")." ADD `spec` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_order_goods", "frequency")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order_goods")." ADD `frequency` int(11) DEFAULT '1';");
}
if(!pdo_fieldexists("wjyk_nhyk_order_goods", "name")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order_goods")." ADD `name` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_order_goods", "mobile")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order_goods")." ADD `mobile` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_order_goods", "card")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_order_goods")." ADD `card` varchar(20);");
}
if(!pdo_fieldexists("wjyk_nhyk_parcategory", "id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_parcategory")." ADD `id` int(11) NOT NULL AUTO_INCREMENT;");
}
if(!pdo_fieldexists("wjyk_nhyk_parcategory", "uniacid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_parcategory")." ADD `uniacid` int(11) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_parcategory", "uid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_parcategory")." ADD `uid` int(11) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_parcategory", "c_name")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_parcategory")." ADD `c_name` varchar(1000) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_parcategory", "sort")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_parcategory")." ADD `sort` int(11) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_parcategory", "is_show")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_parcategory")." ADD `is_show` smallint(1) DEFAULT '1';");
}
if(!pdo_fieldexists("wjyk_nhyk_parcategory", "createtime")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_parcategory")." ADD `createtime` int(10) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_parcategory", "ico")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_parcategory")." ADD `ico` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_pay_log", "id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_pay_log")." ADD `id` int(11) NOT NULL AUTO_INCREMENT;");
}
if(!pdo_fieldexists("wjyk_nhyk_pay_log", "uid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_pay_log")." ADD `uid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_pay_log", "rid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_pay_log")." ADD `rid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_pay_log", "pay_money")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_pay_log")." ADD `pay_money` decimal(10,2) DEFAULT '0.00';");
}
if(!pdo_fieldexists("wjyk_nhyk_pay_log", "pay_type")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_pay_log")." ADD `pay_type` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_pay_log", "pay_integer")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_pay_log")." ADD `pay_integer` int(11) DEFAULT '0';");
}
if(!pdo_fieldexists("wjyk_nhyk_pay_log", "createtime")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_pay_log")." ADD `createtime` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_pay_log", "type")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_pay_log")." ADD `type` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_pay_log", "uniacid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_pay_log")." ADD `uniacid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_pay_log", "less_money")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_pay_log")." ADD `less_money` decimal(10,2) DEFAULT '0.00';");
}
if(!pdo_fieldexists("wjyk_nhyk_payconfig", "id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_payconfig")." ADD `id` int(11) NOT NULL AUTO_INCREMENT;");
}
if(!pdo_fieldexists("wjyk_nhyk_payconfig", "uniacid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_payconfig")." ADD `uniacid` int(11) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_payconfig", "appid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_payconfig")." ADD `appid` varchar(50) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_payconfig", "app_key")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_payconfig")." ADD `app_key` varchar(50) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_payconfig", "mchid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_payconfig")." ADD `mchid` varchar(50) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_payconfig", "pay_key")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_payconfig")." ADD `pay_key` varchar(50) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_payconfig", "cert")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_payconfig")." ADD `cert` smallint(1);");
}
if(!pdo_fieldexists("wjyk_nhyk_payconfig", "key")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_payconfig")." ADD `key` smallint(1);");
}
if(!pdo_fieldexists("wjyk_nhyk_payconfig", "sub_appid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_payconfig")." ADD `sub_appid` varchar(50);");
}
if(!pdo_fieldexists("wjyk_nhyk_payconfig", "sub_mchid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_payconfig")." ADD `sub_mchid` varchar(50);");
}
if(!pdo_fieldexists("wjyk_nhyk_payconfig", "pay_type")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_payconfig")." ADD `pay_type` smallint(1);");
}
if(!pdo_fieldexists("wjyk_nhyk_payconfig", "bf_mchid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_payconfig")." ADD `bf_mchid` varchar(50);");
}
if(!pdo_fieldexists("wjyk_nhyk_payconfig", "cer_pwd")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_payconfig")." ADD `cer_pwd` varchar(50);");
}
if(!pdo_fieldexists("wjyk_nhyk_payconfig", "sub_type")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_payconfig")." ADD `sub_type` smallint(1) DEFAULT '1';");
}
if(!pdo_fieldexists("wjyk_nhyk_person", "id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_person")." ADD `id` int(11) NOT NULL AUTO_INCREMENT;");
}
if(!pdo_fieldexists("wjyk_nhyk_person", "uniacid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_person")." ADD `uniacid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_person", "uid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_person")." ADD `uid` int(11) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_person", "person_name")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_person")." ADD `person_name` varchar(255) DEFAULT '';");
}
if(!pdo_fieldexists("wjyk_nhyk_person", "person_mobile")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_person")." ADD `person_mobile` varchar(255) DEFAULT '';");
}
if(!pdo_fieldexists("wjyk_nhyk_person", "person_card")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_person")." ADD `person_card` varchar(255) DEFAULT '';");
}
if(!pdo_fieldexists("wjyk_nhyk_person", "person_sex")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_person")." ADD `person_sex` smallint(1);");
}
if(!pdo_fieldexists("wjyk_nhyk_person", "person_addres")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_person")." ADD `person_addres` varchar(255) DEFAULT '';");
}
if(!pdo_fieldexists("wjyk_nhyk_person", "createtime")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_person")." ADD `createtime` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_plugin", "id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_plugin")." ADD `id` int(11) NOT NULL AUTO_INCREMENT;");
}
if(!pdo_fieldexists("wjyk_nhyk_plugin", "uniacid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_plugin")." ADD `uniacid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_plugin", "name")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_plugin")." ADD `name` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_plugin", "identifie")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_plugin")." ADD `identifie` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_plugin", "summary")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_plugin")." ADD `summary` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_plugin", "is_open")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_plugin")." ADD `is_open` smallint(1);");
}
if(!pdo_fieldexists("wjyk_nhyk_plugin", "createtime")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_plugin")." ADD `createtime` int(10);");
}
if(!pdo_fieldexists("wjyk_nhyk_poster", "id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_poster")." ADD `id` int(11) NOT NULL AUTO_INCREMENT;");
}
if(!pdo_fieldexists("wjyk_nhyk_poster", "uniacid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_poster")." ADD `uniacid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_poster", "code")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_poster")." ADD `code` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_poster", "name")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_poster")." ADD `name` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_poster", "preview")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_poster")." ADD `preview` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_poster", "json")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_poster")." ADD `json` text;");
}
if(!pdo_fieldexists("wjyk_nhyk_poster", "create_time")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_poster")." ADD `create_time` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_poster", "status")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_poster")." ADD `status` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_poster", "img")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_poster")." ADD `img` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_printer_set", "id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_printer_set")." ADD `id` int(11) NOT NULL AUTO_INCREMENT;");
}
if(!pdo_fieldexists("wjyk_nhyk_printer_set", "uniacid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_printer_set")." ADD `uniacid` int(11) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_printer_set", "user")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_printer_set")." ADD `user` varchar(155) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_printer_set", "ukey")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_printer_set")." ADD `ukey` varchar(155) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_printer_set", "name")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_printer_set")." ADD `name` varchar(155) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_printer_set", "sncode")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_printer_set")." ADD `sncode` varchar(155) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_printer_set", "key")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_printer_set")." ADD `key` varchar(155) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_printer_set", "createtime")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_printer_set")." ADD `createtime` int(10) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_printer_set", "store_id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_printer_set")." ADD `store_id` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_printer_set", "is_show")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_printer_set")." ADD `is_show` smallint(1) DEFAULT '0';");
}
if(!pdo_fieldexists("wjyk_nhyk_proxy_log", "id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_proxy_log")." ADD `id` int(11) NOT NULL AUTO_INCREMENT;");
}
if(!pdo_fieldexists("wjyk_nhyk_proxy_log", "uniacid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_proxy_log")." ADD `uniacid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_proxy_log", "uid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_proxy_log")." ADD `uid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_proxy_log", "oper_uid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_proxy_log")." ADD `oper_uid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_proxy_log", "coupon_id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_proxy_log")." ADD `coupon_id` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_proxy_log", "money")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_proxy_log")." ADD `money` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_proxy_log", "less")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_proxy_log")." ADD `less` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_proxy_log", "rel_money")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_proxy_log")." ADD `rel_money` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_proxy_log", "createtime")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_proxy_log")." ADD `createtime` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_proxy_log", "store_id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_proxy_log")." ADD `store_id` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_recharge", "id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_recharge")." ADD `id` int(11) NOT NULL AUTO_INCREMENT;");
}
if(!pdo_fieldexists("wjyk_nhyk_recharge", "uniacid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_recharge")." ADD `uniacid` int(11) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_recharge", "money")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_recharge")." ADD `money` decimal(20,2) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_recharge", "only")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_recharge")." ADD `only` decimal(20,2) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_recharge", "sort")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_recharge")." ADD `sort` int(10) NOT NULL DEFAULT '0';");
}
if(!pdo_fieldexists("wjyk_nhyk_recharge", "createtime")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_recharge")." ADD `createtime` int(10) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_recharge", "status")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_recharge")." ADD `status` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_recharge_log", "id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_recharge_log")." ADD `id` int(11) NOT NULL AUTO_INCREMENT;");
}
if(!pdo_fieldexists("wjyk_nhyk_recharge_log", "uniacid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_recharge_log")." ADD `uniacid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_recharge_log", "uid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_recharge_log")." ADD `uid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_recharge_log", "createtime")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_recharge_log")." ADD `createtime` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_recharge_log", "recharge_id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_recharge_log")." ADD `recharge_id` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_recharge_log", "money")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_recharge_log")." ADD `money` decimal(10,2);");
}
if(!pdo_fieldexists("wjyk_nhyk_recharge_log", "only")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_recharge_log")." ADD `only` decimal(10,2);");
}
if(!pdo_fieldexists("wjyk_nhyk_recharge_log", "type")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_recharge_log")." ADD `type` smallint(1);");
}
if(!pdo_fieldexists("wjyk_nhyk_recharge_log", "oper_uid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_recharge_log")." ADD `oper_uid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_recharge_log", "store_id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_recharge_log")." ADD `store_id` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_refund_log", "id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_refund_log")." ADD `id` int(11) NOT NULL AUTO_INCREMENT;");
}
if(!pdo_fieldexists("wjyk_nhyk_refund_log", "uniacid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_refund_log")." ADD `uniacid` int(11) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_refund_log", "uid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_refund_log")." ADD `uid` int(11) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_refund_log", "orderno")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_refund_log")." ADD `orderno` varchar(255) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_refund_log", "result")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_refund_log")." ADD `result` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_refund_log", "contacts")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_refund_log")." ADD `contacts` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_refund_log", "phone")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_refund_log")." ADD `phone` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_refund_log", "is_status")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_refund_log")." ADD `is_status` smallint(1) NOT NULL DEFAULT '1';");
}
if(!pdo_fieldexists("wjyk_nhyk_refund_log", "createtime")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_refund_log")." ADD `createtime` int(10) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_refund_log", "reason")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_refund_log")." ADD `reason` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_room", "id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_room")." ADD `id` int(11) NOT NULL AUTO_INCREMENT;");
}
if(!pdo_fieldexists("wjyk_nhyk_room", "uniacid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_room")." ADD `uniacid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_room", "spec")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_room")." ADD `spec` varchar(255) DEFAULT '';");
}
if(!pdo_fieldexists("wjyk_nhyk_room", "desc")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_room")." ADD `desc` varchar(255) DEFAULT '';");
}
if(!pdo_fieldexists("wjyk_nhyk_room", "price")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_room")." ADD `price` decimal(10,2) DEFAULT '0.00';");
}
if(!pdo_fieldexists("wjyk_nhyk_room", "discount_prcie")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_room")." ADD `discount_prcie` decimal(10,2) DEFAULT '0.00';");
}
if(!pdo_fieldexists("wjyk_nhyk_room", "img")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_room")." ADD `img` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_room", "carousel")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_room")." ADD `carousel` varchar(1000);");
}
if(!pdo_fieldexists("wjyk_nhyk_room", "room_name")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_room")." ADD `room_name` varchar(255) DEFAULT '';");
}
if(!pdo_fieldexists("wjyk_nhyk_room", "room_num")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_room")." ADD `room_num` int(11) DEFAULT '0';");
}
if(!pdo_fieldexists("wjyk_nhyk_room", "pid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_room")." ADD `pid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_room", "status")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_room")." ADD `status` smallint(1) DEFAULT '0';");
}
if(!pdo_fieldexists("wjyk_nhyk_room", "createtime")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_room")." ADD `createtime` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_room", "price_desc")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_room")." ADD `price_desc` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_room", "cid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_room")." ADD `cid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_room", "top_type")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_room")." ADD `top_type` smallint(1) DEFAULT '0';");
}
if(!pdo_fieldexists("wjyk_nhyk_room", "coupon_money")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_room")." ADD `coupon_money` decimal(10,2) DEFAULT '0.00';");
}
if(!pdo_fieldexists("wjyk_nhyk_room_seat", "id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_room_seat")." ADD `id` int(11) NOT NULL AUTO_INCREMENT;");
}
if(!pdo_fieldexists("wjyk_nhyk_room_seat", "uniacid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_room_seat")." ADD `uniacid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_room_seat", "rid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_room_seat")." ADD `rid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_room_seat", "seat_no")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_room_seat")." ADD `seat_no` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_room_seat", "remark")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_room_seat")." ADD `remark` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_room_seat", "status")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_room_seat")." ADD `status` smallint(1) DEFAULT '1';");
}
if(!pdo_fieldexists("wjyk_nhyk_room_seat", "createtime")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_room_seat")." ADD `createtime` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_room_seat", "sort")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_room_seat")." ADD `sort` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_room_store", "id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_room_store")." ADD `id` int(11) NOT NULL AUTO_INCREMENT;");
}
if(!pdo_fieldexists("wjyk_nhyk_room_store", "uniacid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_room_store")." ADD `uniacid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_room_store", "store_id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_room_store")." ADD `store_id` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_room_store", "is_show")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_room_store")." ADD `is_show` smallint(1);");
}
if(!pdo_fieldexists("wjyk_nhyk_room_store", "foods_id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_room_store")." ADD `foods_id` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_room_store", "foods_str")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_room_store")." ADD `foods_str` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_room_store", "type")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_room_store")." ADD `type` smallint(1);");
}
if(!pdo_fieldexists("wjyk_nhyk_seat", "id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_seat")." ADD `id` int(11) NOT NULL AUTO_INCREMENT;");
}
if(!pdo_fieldexists("wjyk_nhyk_seat", "uniacid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_seat")." ADD `uniacid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_seat", "name")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_seat")." ADD `name` varchar(255) DEFAULT '';");
}
if(!pdo_fieldexists("wjyk_nhyk_seat", "pe_number")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_seat")." ADD `pe_number` int(11) DEFAULT '1';");
}
if(!pdo_fieldexists("wjyk_nhyk_seat", "seat_number")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_seat")." ADD `seat_number` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_seat", "sort")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_seat")." ADD `sort` int(11) DEFAULT '0';");
}
if(!pdo_fieldexists("wjyk_nhyk_seat", "is_show")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_seat")." ADD `is_show` smallint(1) DEFAULT '0';");
}
if(!pdo_fieldexists("wjyk_nhyk_seat", "createtime")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_seat")." ADD `createtime` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_seat", "store_id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_seat")." ADD `store_id` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_seat", "qrcode")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_seat")." ADD `qrcode` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_store", "id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_store")." ADD `id` int(11) NOT NULL AUTO_INCREMENT;");
}
if(!pdo_fieldexists("wjyk_nhyk_store", "uniacid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_store")." ADD `uniacid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_store", "store_name")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_store")." ADD `store_name` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_store", "store_admin")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_store")." ADD `store_admin` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_store", "store_addres_lat")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_store")." ADD `store_addres_lat` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_store", "store_addres_lng")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_store")." ADD `store_addres_lng` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_store", "store_addres")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_store")." ADD `store_addres` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_store", "store_logo")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_store")." ADD `store_logo` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_store", "create_date")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_store")." ADD `create_date` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_store", "store_phone")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_store")." ADD `store_phone` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_store", "account_id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_store")." ADD `account_id` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_store", "status")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_store")." ADD `status` smallint(1);");
}
if(!pdo_fieldexists("wjyk_nhyk_store", "store_desc_addres")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_store")." ADD `store_desc_addres` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_store", "cate_type")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_store")." ADD `cate_type` smallint(1);");
}
if(!pdo_fieldexists("wjyk_nhyk_store", "oper_uid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_store")." ADD `oper_uid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_store", "store_id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_store")." ADD `store_id` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_store", "less_count")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_store")." ADD `less_count` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_store", "business")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_store")." ADD `business` varchar(255) DEFAULT '';");
}
if(!pdo_fieldexists("wjyk_nhyk_store", "closure")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_store")." ADD `closure` smallint(1) DEFAULT '1';");
}
if(!pdo_fieldexists("wjyk_nhyk_store", "ktv_img")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_store")." ADD `ktv_img` varchar(255) DEFAULT '';");
}
if(!pdo_fieldexists("wjyk_nhyk_system", "id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system")." ADD `id` int(11) NOT NULL AUTO_INCREMENT;");
}
if(!pdo_fieldexists("wjyk_nhyk_system", "uniacid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system")." ADD `uniacid` int(11) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_system", "name")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system")." ADD `name` varchar(255) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_system", "logo")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system")." ADD `logo` varchar(255) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_system", "mobile")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system")." ADD `mobile` varchar(255) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_system", "carousel")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system")." ADD `carousel` text NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_system", "abouts")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system")." ADD `abouts` text;");
}
if(!pdo_fieldexists("wjyk_nhyk_system", "advertising")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system")." ADD `advertising` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_system", "newTemplate")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system")." ADD `newTemplate` text;");
}
if(!pdo_fieldexists("wjyk_nhyk_system", "cate_carousel")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system")." ADD `cate_carousel` text;");
}
if(!pdo_fieldexists("wjyk_nhyk_system", "sign_integral")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system")." ADD `sign_integral` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_system", "con_sing_integral")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system")." ADD `con_sing_integral` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_system", "background_img")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system")." ADD `background_img` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_system", "do_mian")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system")." ADD `do_mian` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_system", "make_money_desc")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system")." ADD `make_money_desc` text;");
}
if(!pdo_fieldexists("wjyk_nhyk_system", "consume_get_integral")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system")." ADD `consume_get_integral` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_system", "qqmap_key")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system")." ADD `qqmap_key` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_system", "mei_img")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system")." ADD `mei_img` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_system", "dui_img")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system")." ADD `dui_img` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_system", "member_img")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system")." ADD `member_img` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_system", "recharge_money_desc")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system")." ADD `recharge_money_desc` text;");
}
if(!pdo_fieldexists("wjyk_nhyk_system", "sign_desc")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system")." ADD `sign_desc` text;");
}
if(!pdo_fieldexists("wjyk_nhyk_system", "new_good_img")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system")." ADD `new_good_img` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_system", "link_carousel")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system")." ADD `link_carousel` text;");
}
if(!pdo_fieldexists("wjyk_nhyk_system", "index_share_title")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system")." ADD `index_share_title` varchar(255) DEFAULT '';");
}
if(!pdo_fieldexists("wjyk_nhyk_system", "index_share_desc")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system")." ADD `index_share_desc` varchar(255) DEFAULT '';");
}
if(!pdo_fieldexists("wjyk_nhyk_system", "index_share_img")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system")." ADD `index_share_img` varchar(255) DEFAULT '';");
}
if(!pdo_fieldexists("wjyk_nhyk_system", "is_open_auth")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system")." ADD `is_open_auth` smallint(255) DEFAULT '1';");
}
if(!pdo_fieldexists("wjyk_nhyk_system", "show_index_type")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system")." ADD `show_index_type` smallint(1) DEFAULT '0';");
}
if(!pdo_fieldexists("wjyk_nhyk_system", "desc_label")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system")." ADD `desc_label` varchar(255) DEFAULT '';");
}
if(!pdo_fieldexists("wjyk_nhyk_system", "distance_limit")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system")." ADD `distance_limit` int(11) DEFAULT '10000';");
}
if(!pdo_fieldexists("wjyk_nhyk_system_foods", "id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system_foods")." ADD `id` int(11) NOT NULL AUTO_INCREMENT;");
}
if(!pdo_fieldexists("wjyk_nhyk_system_foods", "uniacid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system_foods")." ADD `uniacid` int(11) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_system_foods", "carousel")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system_foods")." ADD `carousel` text NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_system_foods", "abouts")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system_foods")." ADD `abouts` text;");
}
if(!pdo_fieldexists("wjyk_nhyk_system_foods", "advertising")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system_foods")." ADD `advertising` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_system_foods", "newTemplate")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system_foods")." ADD `newTemplate` text;");
}
if(!pdo_fieldexists("wjyk_nhyk_system_foods", "cate_carousel")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system_foods")." ADD `cate_carousel` text;");
}
if(!pdo_fieldexists("wjyk_nhyk_system_foods", "sign_integral")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system_foods")." ADD `sign_integral` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_system_foods", "con_sing_integral")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system_foods")." ADD `con_sing_integral` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_system_foods", "background_img")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system_foods")." ADD `background_img` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_system_foods", "do_mian")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system_foods")." ADD `do_mian` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_system_foods", "make_money_desc")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system_foods")." ADD `make_money_desc` text;");
}
if(!pdo_fieldexists("wjyk_nhyk_system_foods", "consume_get_integral")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system_foods")." ADD `consume_get_integral` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_system_foods", "mei_img")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system_foods")." ADD `mei_img` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_system_foods", "buy_img")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system_foods")." ADD `buy_img` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_system_foods", "jf_img")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system_foods")." ADD `jf_img` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_system_foods", "recharge_money_desc")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system_foods")." ADD `recharge_money_desc` text;");
}
if(!pdo_fieldexists("wjyk_nhyk_system_foods", "sign_desc")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system_foods")." ADD `sign_desc` text;");
}
if(!pdo_fieldexists("wjyk_nhyk_system_foods", "wm_img")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system_foods")." ADD `wm_img` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_system_foods", "jiu_img")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system_foods")." ADD `jiu_img` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_system_foods", "cj_img")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system_foods")." ADD `cj_img` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_system_foods", "djq_name")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system_foods")." ADD `djq_name` varchar(255) DEFAULT '';");
}
if(!pdo_fieldexists("wjyk_nhyk_system_foods", "djq_carousel")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system_foods")." ADD `djq_carousel` text;");
}
if(!pdo_fieldexists("wjyk_nhyk_system_foods", "wm_text")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system_foods")." ADD `wm_text` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_system_foods", "jiu_text")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system_foods")." ADD `jiu_text` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_system_foods", "link_carousel")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system_foods")." ADD `link_carousel` text;");
}
if(!pdo_fieldexists("wjyk_nhyk_system_foods", "index_share_title")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system_foods")." ADD `index_share_title` varchar(255) DEFAULT '';");
}
if(!pdo_fieldexists("wjyk_nhyk_system_foods", "index_share_desc")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system_foods")." ADD `index_share_desc` varchar(255) DEFAULT '';");
}
if(!pdo_fieldexists("wjyk_nhyk_system_foods", "index_share_img")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system_foods")." ADD `index_share_img` varchar(255) DEFAULT '';");
}
if(!pdo_fieldexists("wjyk_nhyk_system_hotel", "id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system_hotel")." ADD `id` int(11) NOT NULL AUTO_INCREMENT;");
}
if(!pdo_fieldexists("wjyk_nhyk_system_hotel", "uniacid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system_hotel")." ADD `uniacid` int(11) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_system_hotel", "carousel")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system_hotel")." ADD `carousel` text NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_system_hotel", "abouts")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system_hotel")." ADD `abouts` text;");
}
if(!pdo_fieldexists("wjyk_nhyk_system_hotel", "advertising")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system_hotel")." ADD `advertising` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_system_hotel", "newTemplate")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system_hotel")." ADD `newTemplate` text;");
}
if(!pdo_fieldexists("wjyk_nhyk_system_hotel", "cate_carousel")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system_hotel")." ADD `cate_carousel` text;");
}
if(!pdo_fieldexists("wjyk_nhyk_system_hotel", "is_card")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system_hotel")." ADD `is_card` smallint(1) DEFAULT '0';");
}
if(!pdo_fieldexists("wjyk_nhyk_system_hotel", "deposit")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system_hotel")." ADD `deposit` decimal(10,2) DEFAULT '0.00';");
}
if(!pdo_fieldexists("wjyk_nhyk_system_hotel", "index_share_title")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system_hotel")." ADD `index_share_title` varchar(255) DEFAULT '';");
}
if(!pdo_fieldexists("wjyk_nhyk_system_hotel", "index_share_desc")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system_hotel")." ADD `index_share_desc` varchar(255) DEFAULT '';");
}
if(!pdo_fieldexists("wjyk_nhyk_system_hotel", "index_share_img")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system_hotel")." ADD `index_share_img` varchar(255) DEFAULT '';");
}
if(!pdo_fieldexists("wjyk_nhyk_system_hotel", "free_hour")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system_hotel")." ADD `free_hour` int(11) DEFAULT '0';");
}
if(!pdo_fieldexists("wjyk_nhyk_system_hotel", "promise_hour")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system_hotel")." ADD `promise_hour` int(11) DEFAULT '0';");
}
if(!pdo_fieldexists("wjyk_nhyk_system_hotel", "promise_money")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system_hotel")." ADD `promise_money` int(11) DEFAULT '0';");
}
if(!pdo_fieldexists("wjyk_nhyk_system_hotel", "promise_add_money")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system_hotel")." ADD `promise_add_money` int(11) DEFAULT '0';");
}
if(!pdo_fieldexists("wjyk_nhyk_system_hotel", "back_hour")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system_hotel")." ADD `back_hour` int(11) DEFAULT '0';");
}
if(!pdo_fieldexists("wjyk_nhyk_system_hotel", "arrive_time")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system_hotel")." ADD `arrive_time` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_system_hotel", "leave_time")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_system_hotel")." ADD `leave_time` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_transfer_voucher", "id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_transfer_voucher")." ADD `id` int(11) NOT NULL AUTO_INCREMENT;");
}
if(!pdo_fieldexists("wjyk_nhyk_transfer_voucher", "uniacid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_transfer_voucher")." ADD `uniacid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_transfer_voucher", "voucher_id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_transfer_voucher")." ADD `voucher_id` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_transfer_voucher", "uid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_transfer_voucher")." ADD `uid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_transfer_voucher", "transfer_uid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_transfer_voucher")." ADD `transfer_uid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_transfer_voucher", "createtime")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_transfer_voucher")." ADD `createtime` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_transfer_voucher", "status")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_transfer_voucher")." ADD `status` smallint(1) DEFAULT '1';");
}
if(!pdo_fieldexists("wjyk_nhyk_user", "id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_user")." ADD `id` int(11) NOT NULL AUTO_INCREMENT;");
}
if(!pdo_fieldexists("wjyk_nhyk_user", "uid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_user")." ADD `uid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_user", "uniacid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_user")." ADD `uniacid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_user", "openid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_user")." ADD `openid` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_user", "member_no")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_user")." ADD `member_no` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_user", "phone")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_user")." ADD `phone` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_user", "nickname")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_user")." ADD `nickname` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_user", "realname")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_user")." ADD `realname` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_user", "sex")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_user")." ADD `sex` int(1);");
}
if(!pdo_fieldexists("wjyk_nhyk_user", "member_level")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_user")." ADD `member_level` int(2);");
}
if(!pdo_fieldexists("wjyk_nhyk_user", "money")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_user")." ADD `money` decimal(10,2) DEFAULT '0.00';");
}
if(!pdo_fieldexists("wjyk_nhyk_user", "com_money")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_user")." ADD `com_money` decimal(10,2) DEFAULT '0.00';");
}
if(!pdo_fieldexists("wjyk_nhyk_user", "createtime")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_user")." ADD `createtime` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_user", "sign_score")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_user")." ADD `sign_score` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_user", "sign_date")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_user")." ADD `sign_date` varchar(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_user", "pid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_user")." ADD `pid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_user", "addres")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_user")." ADD `addres` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_user", "avatar")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_user")." ADD `avatar` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_user", "qrcode")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_user")." ADD `qrcode` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_user", "member_qrcode")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_user")." ADD `member_qrcode` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_user", "commission")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_user")." ADD `commission` decimal(10,2) DEFAULT '0.00';");
}
if(!pdo_fieldexists("wjyk_nhyk_user", "integral")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_user")." ADD `integral` int(11) DEFAULT '0';");
}
if(!pdo_fieldexists("wjyk_nhyk_user", "sign_count")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_user")." ADD `sign_count` int(11) DEFAULT '0';");
}
if(!pdo_fieldexists("wjyk_nhyk_user", "is_update_bir")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_user")." ADD `is_update_bir` smallint(1) DEFAULT '1';");
}
if(!pdo_fieldexists("wjyk_nhyk_user", "recharge_qrcode")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_user")." ADD `recharge_qrcode` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_user", "gender")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_user")." ADD `gender` smallint(1);");
}
if(!pdo_fieldexists("wjyk_nhyk_user", "birthyear")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_user")." ADD `birthyear` smallint(6) unsigned NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_user", "birthmonth")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_user")." ADD `birthmonth` tinyint(3) unsigned NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_user", "birthday")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_user")." ADD `birthday` tinyint(3) unsigned NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_user", "mobile")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_user")." ADD `mobile` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_user", "resideprovince")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_user")." ADD `resideprovince` varchar(30) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_user", "residecity")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_user")." ADD `residecity` varchar(30) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_user", "residedist")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_user")." ADD `residedist` varchar(30) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_user", "status")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_user")." ADD `status` smallint(1) DEFAULT '0';");
}
if(!pdo_fieldexists("wjyk_nhyk_user", "is_distribution")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_user")." ADD `is_distribution` smallint(1) DEFAULT '1';");
}
if(!pdo_fieldexists("wjyk_nhyk_user", "desc")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_user")." ADD `desc` varchar(255) DEFAULT '';");
}
if(!pdo_fieldexists("wjyk_nhyk_user_import", "id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_user_import")." ADD `id` int(11) NOT NULL AUTO_INCREMENT;");
}
if(!pdo_fieldexists("wjyk_nhyk_user_import", "uniacid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_user_import")." ADD `uniacid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_user_import", "money")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_user_import")." ADD `money` decimal(10,2);");
}
if(!pdo_fieldexists("wjyk_nhyk_user_import", "integral")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_user_import")." ADD `integral` int(11) DEFAULT '0';");
}
if(!pdo_fieldexists("wjyk_nhyk_user_import", "commission")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_user_import")." ADD `commission` decimal(10,2) DEFAULT '0.00';");
}
if(!pdo_fieldexists("wjyk_nhyk_user_import", "nickname")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_user_import")." ADD `nickname` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_user_import", "mobile")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_user_import")." ADD `mobile` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_user_import", "createtime")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_user_import")." ADD `createtime` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_user_import", "status")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_user_import")." ADD `status` smallint(1);");
}
if(!pdo_fieldexists("wjyk_nhyk_voucher", "id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_voucher")." ADD `id` int(11) NOT NULL AUTO_INCREMENT;");
}
if(!pdo_fieldexists("wjyk_nhyk_voucher", "uniacid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_voucher")." ADD `uniacid` int(11) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_voucher", "money")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_voucher")." ADD `money` decimal(20,2) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_voucher", "only")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_voucher")." ADD `only` decimal(20,2) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_voucher", "sort")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_voucher")." ADD `sort` int(10) NOT NULL DEFAULT '0';");
}
if(!pdo_fieldexists("wjyk_nhyk_voucher", "createtime")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_voucher")." ADD `createtime` int(10) NOT NULL;");
}
if(!pdo_fieldexists("wjyk_nhyk_voucher", "status")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_voucher")." ADD `status` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_voucher", "img")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_voucher")." ADD `img` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_voucher", "desc")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_voucher")." ADD `desc` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_voucher", "name")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_voucher")." ADD `name` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_voucher", "use_desc")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_voucher")." ADD `use_desc` text;");
}
if(!pdo_fieldexists("wjyk_nhyk_voucher", "is_type")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_voucher")." ADD `is_type` smallint(1) DEFAULT '1';");
}
if(!pdo_fieldexists("wjyk_nhyk_withdraw", "id")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_withdraw")." ADD `id` int(11) unsigned NOT NULL AUTO_INCREMENT;");
}
if(!pdo_fieldexists("wjyk_nhyk_withdraw", "uniacid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_withdraw")." ADD `uniacid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_withdraw", "uid")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_withdraw")." ADD `uid` int(11);");
}
if(!pdo_fieldexists("wjyk_nhyk_withdraw", "price")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_withdraw")." ADD `price` float(11,2);");
}
if(!pdo_fieldexists("wjyk_nhyk_withdraw", "apply_price")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_withdraw")." ADD `apply_price` float(11,2) NOT NULL DEFAULT '0.00';");
}
if(!pdo_fieldexists("wjyk_nhyk_withdraw", "realname")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_withdraw")." ADD `realname` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_withdraw", "mobile")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_withdraw")." ADD `mobile` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_withdraw", "card_number")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_withdraw")." ADD `card_number` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_withdraw", "bank")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_withdraw")." ADD `bank` varchar(255);");
}
if(!pdo_fieldexists("wjyk_nhyk_withdraw", "status")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_withdraw")." ADD `status` int(1) DEFAULT '0';");
}
if(!pdo_fieldexists("wjyk_nhyk_withdraw", "w_type")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_withdraw")." ADD `w_type` int(1) DEFAULT '0';");
}
if(!pdo_fieldexists("wjyk_nhyk_withdraw", "p_type")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_withdraw")." ADD `p_type` int(1) DEFAULT '0';");
}
if(!pdo_fieldexists("wjyk_nhyk_withdraw", "addtime")) {
 pdo_query("ALTER TABLE ".tablename("wjyk_nhyk_withdraw")." ADD `addtime` varchar(255);");
}
