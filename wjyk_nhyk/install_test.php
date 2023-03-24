<?php
global $_W;
$t=time();
pdo_query("



CREATE TABLE ".tablename("wjyk_nhyk_ktv_activity")." (
`id`  int(11) NOT NULL AUTO_INCREMENT ,
`cid`  int(11) NULL DEFAULT NULL COMMENT '包厢类型id' ,
`c_name`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '活动名称' ,
`c_price`  decimal(10,2) NULL DEFAULT NULL COMMENT '原价' ,
`createtime`  int(11) NULL DEFAULT NULL COMMENT '创建日期' ,
`uniacid`  int(11) NULL DEFAULT NULL ,
`c_img`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '图片' ,
`c_desc`  text CHARACTER SET utf8 COLLATE utf8_general_ci NULL ,
`c_d_price`  decimal(10,2) NULL DEFAULT 0.00 COMMENT '折扣价格' ,
`c_time`  int(10) NULL DEFAULT 0 COMMENT '购买后多少天有效' ,
`c_reserve`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '预约信息' ,
`is_show`  smallint(1) NULL DEFAULT 1 COMMENT '1  2 3' ,
`sort`  int(11) NULL DEFAULT 0 COMMENT '排序' ,
PRIMARY KEY (`id`)
)
ENGINE=InnoDB
DEFAULT CHARACTER SET=utf8 COLLATE=utf8_general_ci
AUTO_INCREMENT=1

;

CREATE TABLE ".tablename("wjyk_nhyk_ktv_activity_meal")." (
`id`  int(11) NOT NULL AUTO_INCREMENT ,
`cid`  int(11) NULL DEFAULT NULL COMMENT '包厢类型id' ,
`c_name`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '开始时间' ,
`c_num`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '结束时间' ,
`c_price`  decimal(10,2) NULL DEFAULT NULL COMMENT '套餐id' ,
`createtime`  int(11) NULL DEFAULT NULL COMMENT '创建日期' ,
`uniacid`  int(11) NULL DEFAULT NULL ,
`aid`  int(11) NULL DEFAULT NULL ,
PRIMARY KEY (`id`)
)
ENGINE=InnoDB
DEFAULT CHARACTER SET=utf8 COLLATE=utf8_general_ci
AUTO_INCREMENT=1

;

CREATE TABLE ".tablename("wjyk_nhyk_ktv_cabinet")." (
`id`  int(11) NOT NULL AUTO_INCREMENT ,
`cabinet_number`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '柜号' ,
`uid`  int(11) NULL DEFAULT NULL ,
`did`  int(11) NULL DEFAULT NULL COMMENT '物品id' ,
`uniacid`  int(11) NULL DEFAULT NULL ,
`end_time`  int(11) NULL DEFAULT NULL COMMENT '过期时间' ,
`end_day`  int(11) NULL DEFAULT 0 COMMENT '天数' ,
`img`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '图片' ,
`status`  smallint(1) NULL DEFAULT 1 COMMENT '1 有效 2 失效' ,
`createtime`  int(11) NULL DEFAULT NULL ,
PRIMARY KEY (`id`)
)
ENGINE=InnoDB
DEFAULT CHARACTER SET=utf8 COLLATE=utf8_general_ci
AUTO_INCREMENT=1

;

CREATE TABLE ".tablename("wjyk_nhyk_ktv_combo")." (
`id`  int(11) NOT NULL AUTO_INCREMENT ,
`cid`  int(11) NULL DEFAULT NULL COMMENT '包厢类型id' ,
`start_time`  int(11) NULL DEFAULT NULL COMMENT '开始时间' ,
`end_time`  int(11) NULL DEFAULT NULL COMMENT '结束时间' ,
`tid`  int(11) NULL DEFAULT NULL COMMENT '套餐id' ,
`price`  decimal(10,2) NULL DEFAULT 0.00 COMMENT '价格' ,
`uniacid`  int(11) NULL DEFAULT NULL ,
`name`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '预订单名称' ,
`sort`  int(11) NULL DEFAULT 0 COMMENT '排序' ,
`is_show`  smallint(1) NULL DEFAULT 2 COMMENT ' 1 隐藏 2 显示' ,
`createtime`  int(11) NULL DEFAULT NULL COMMENT '创建日期' ,
`interval_time`  smallint(1) NULL DEFAULT 1 COMMENT ' 1 小时 2 半小时' ,
`hour`  int(11) NULL DEFAULT 0 COMMENT '预订小时' ,
PRIMARY KEY (`id`)
)
ENGINE=InnoDB
DEFAULT CHARACTER SET=utf8 COLLATE=utf8_general_ci
AUTO_INCREMENT=1

;

CREATE TABLE ".tablename("wjyk_nhyk_ktv_combo_meal")." (
`id`  int(11) NOT NULL AUTO_INCREMENT ,
`uniacid`  int(11) NULL DEFAULT NULL ,
`cid`  int(11) NULL DEFAULT NULL ,
`name`  varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL ,
`price`  decimal(10,2) NULL DEFAULT 0.00 COMMENT '价格' ,
PRIMARY KEY (`id`)
)
ENGINE=InnoDB
DEFAULT CHARACTER SET=utf8 COLLATE=utf8_general_ci
AUTO_INCREMENT=1

;

CREATE TABLE ".tablename("wjyk_nhyk_ktv_combo_rel")." (
`id`  int(11) NOT NULL AUTO_INCREMENT ,
`uniacid`  int(11) NULL DEFAULT NULL ,
`cid`  int(11) NULL DEFAULT NULL ,
`mid`  int(11) NULL DEFAULT NULL ,
PRIMARY KEY (`id`)
)
ENGINE=InnoDB
DEFAULT CHARACTER SET=utf8 COLLATE=utf8_general_ci
AUTO_INCREMENT=1

;

CREATE TABLE ".tablename("wjyk_nhyk_ktv_deposit")." (
`id`  int(11) NOT NULL AUTO_INCREMENT ,
`uniacid`  int(11) NULL DEFAULT NULL ,
`uid`  int(11) NULL DEFAULT NULL ,
`food_name`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '物品名称' ,
`food_num`  int(11) NULL DEFAULT 0 COMMENT '商品数量' ,
`createtime`  int(11) NULL DEFAULT NULL ,
`goods_id`  int(11) NULL DEFAULT NULL ,
`cabinet_number`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '柜号' ,
`food_img`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '商品图片' ,
`food_price`  decimal(10,2) NULL DEFAULT 0.00 COMMENT '价格' ,
`food_stock`  int(11) NULL DEFAULT 0 COMMENT '库存' ,
`cid`  int(11) NULL DEFAULT NULL ,
PRIMARY KEY (`id`)
)
ENGINE=InnoDB
DEFAULT CHARACTER SET=utf8 COLLATE=utf8_general_ci
AUTO_INCREMENT=1

;

CREATE TABLE ".tablename("wjyk_nhyk_ktv_deposit_log")." (
`id`  int(11) NOT NULL AUTO_INCREMENT ,
`did`  int(11) NULL DEFAULT NULL ,
`uniacid`  int(11) NULL DEFAULT NULL ,
`num`  int(11) NULL DEFAULT NULL ,
`uid`  int(11) NULL DEFAULT NULL ,
`createtime`  int(11) NULL DEFAULT NULL ,
`remark`  text CHARACTER SET utf8 COLLATE utf8_general_ci NULL ,
`receive_user`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL ,
`receive_type`  smallint(1) NULL DEFAULT 1 COMMENT '1 本人 2好友 3家人' ,
`oper_uid`  int(11) NULL DEFAULT NULL ,
PRIMARY KEY (`id`)
)
ENGINE=InnoDB
DEFAULT CHARACTER SET=utf8 COLLATE=utf8_general_ci
AUTO_INCREMENT=1

;

CREATE TABLE ".tablename("wjyk_nhyk_ktv_goods")." (
`id`  int(11) NOT NULL AUTO_INCREMENT ,
`uniacid`  int(11) NOT NULL ,
`uid`  int(11) NOT NULL ,
`cid`  int(11) NOT NULL ,
`goods_name`  varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '商品名称' ,
`original_price`  decimal(11,2) NULL DEFAULT 0.00 COMMENT '原价' ,
`discount_price`  decimal(11,2) NULL DEFAULT 0.00 COMMENT '优惠价' ,
`cover`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '封面' ,
`carousel`  text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '轮播图' ,
`details`  text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '商品详情' ,
`is_show`  int(1) NOT NULL DEFAULT 1 COMMENT ' 1隐藏  2显示，3删除' ,
`recommend`  int(1) NOT NULL DEFAULT 1 COMMENT '1 否 2 是' ,
`sales`  int(10) NULL DEFAULT 0 COMMENT '销量' ,
`createtime`  int(10) NOT NULL ,
`good`  int(11) NULL DEFAULT 0 ,
`medium`  int(11) NULL DEFAULT 0 ,
`different`  int(11) NULL DEFAULT 0 ,
`favorites`  int(10) NULL DEFAULT 0 ,
`stock`  int(11) NULL DEFAULT 0 ,
`spec`  text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '商品规格' ,
`is_freight`  int(1) NOT NULL DEFAULT 1 COMMENT '是否需要运费 1包邮   2-运费' ,
`freight`  decimal(3,2) NULL DEFAULT 0.00 COMMENT '运费' ,
`region_type`  smallint(1) NULL DEFAULT NULL COMMENT '商品划分区域  1.每日 2 会员 3 普通 4.兑换专区 ' ,
`need_integer`  int(11) NULL DEFAULT NULL COMMENT '商品兑换需要积分' ,
`is_exchange`  smallint(1) NULL DEFAULT NULL COMMENT '是否为兑换专区 1 否 2 是' ,
PRIMARY KEY (`id`)
)
ENGINE=InnoDB
DEFAULT CHARACTER SET=utf8 COLLATE=utf8_general_ci
COMMENT='商品表'
AUTO_INCREMENT=1

;

CREATE TABLE ".tablename("wjyk_nhyk_ktv_goods_category")." (
`id`  int(11) NOT NULL AUTO_INCREMENT ,
`uniacid`  int(11) NOT NULL ,
`uid`  int(11) NOT NULL ,
`c_name`  varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '内容' ,
`sort`  int(11) NOT NULL ,
`is_show`  smallint(1) NULL DEFAULT 1 COMMENT '分数' ,
`createtime`  int(10) NOT NULL ,
`ico`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL ,
PRIMARY KEY (`id`)
)
ENGINE=InnoDB
DEFAULT CHARACTER SET=utf8 COLLATE=utf8_general_ci
COMMENT='评论表'
AUTO_INCREMENT=1

;

CREATE TABLE ".tablename("wjyk_nhyk_ktv_meal")." (
`id`  int(11) NOT NULL AUTO_INCREMENT ,
`meal_type`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '服务类型' ,
`meal_count`  int(11) NULL DEFAULT 0 COMMENT '套餐次数' ,
`meal_money`  decimal(10,2) NULL DEFAULT 0.00 COMMENT '套餐价格' ,
`uniacid`  int(11) NULL DEFAULT NULL ,
`create_date`  int(11) NULL DEFAULT NULL ,
`status`  int(1) NULL DEFAULT NULL COMMENT '是否有效 0 有效 1 失效' ,
`expired_date`  int(11) NULL DEFAULT NULL COMMENT '过期时间' ,
`order`  int(11) NULL DEFAULT NULL COMMENT '排序 ' ,
`meal_month`  int(11) NULL DEFAULT NULL COMMENT '有效期月份' ,
`meal_name`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '套餐名称' ,
`meal_discount`  decimal(10,2) NULL DEFAULT NULL COMMENT '折扣' ,
`meal_back_img`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '套餐卡背景图' ,
`meal__desc`  text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '套餐卡说明' ,
`meal_discount_money`  decimal(10,2) NULL DEFAULT 0.00 COMMENT '金额' ,
PRIMARY KEY (`id`)
)
ENGINE=InnoDB
DEFAULT CHARACTER SET=utf8 COLLATE=utf8_general_ci
AUTO_INCREMENT=1

;

CREATE TABLE ".tablename("wjyk_nhyk_ktv_my_activity")." (
`id`  int(11) NOT NULL AUTO_INCREMENT ,
`uniacid`  int(11) NULL DEFAULT NULL ,
`aid`  int(11) NULL DEFAULT NULL ,
`end_time`  int(11) NULL DEFAULT NULL COMMENT '到期时间' ,
`uid`  int(11) NULL DEFAULT NULL ,
`status`  smallint(1) NULL DEFAULT 1 COMMENT ' 1 未使用 2 已过期 3 已使用' ,
`createtime`  int(11) NULL DEFAULT NULL ,
`qrcode`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '核销二维码' ,
`is_write`  smallint(1) NULL DEFAULT 0 ,
PRIMARY KEY (`id`)
)
ENGINE=InnoDB
DEFAULT CHARACTER SET=utf8 COLLATE=utf8_general_ci
AUTO_INCREMENT=1

;

CREATE TABLE ".tablename("wjyk_nhyk_ktv_room")." (
`id`  int(11) NOT NULL AUTO_INCREMENT ,
`uniacid`  int(11) NULL DEFAULT NULL ,
`img`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '封面图' ,
`room_name`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '房间名称' ,
`room_num`  int(11) NULL DEFAULT 0 COMMENT '房间数量' ,
`pid`  int(11) NULL DEFAULT NULL COMMENT '所属酒店' ,
`status`  smallint(1) NULL DEFAULT 0 COMMENT '0显示 1不显示 2 删除' ,
`createtime`  int(11) NULL DEFAULT NULL ,
`cid`  int(11) NULL DEFAULT NULL COMMENT '类别id' ,
`is_occupy`  smallint(1) NULL DEFAULT 0 COMMENT '0 空闲  1 占用' ,
`sort`  int(11) NULL DEFAULT 0 ,
PRIMARY KEY (`id`)
)
ENGINE=InnoDB
DEFAULT CHARACTER SET=utf8 COLLATE=utf8_general_ci
AUTO_INCREMENT=1

;

CREATE TABLE ".tablename("wjyk_nhyk_ktvcategory")." (
`id`  int(11) NOT NULL AUTO_INCREMENT ,
`uniacid`  int(11) NOT NULL ,
`uid`  int(11) NOT NULL ,
`c_name`  varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '内容' ,
`sort`  int(11) NOT NULL ,
`is_show`  smallint(1) NULL DEFAULT 1 COMMENT '分数' ,
`createtime`  int(10) NOT NULL ,
`ico`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL ,
`min_person_number`  int(11) NULL DEFAULT 0 COMMENT '最小容纳人数' ,
`max_person_number`  int(11) NULL DEFAULT 0 COMMENT '最大容纳人数' ,
PRIMARY KEY (`id`)
)
ENGINE=InnoDB
DEFAULT CHARACTER SET=utf8 COLLATE=utf8_general_ci
COMMENT='评论表'
AUTO_INCREMENT=1

;

CREATE TABLE ".tablename("wjyk_nhyk_link")." (
`id`  int(11) NOT NULL AUTO_INCREMENT ,
`img`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL ,
`link`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '内部链接' ,
`external_link`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '外部链接' ,
`link_type`  smallint(1) NULL DEFAULT 0 COMMENT '0 内部链接 1 外部链接' ,
`uniacid`  int(11) NULL DEFAULT NULL ,
PRIMARY KEY (`id`)
)
ENGINE=InnoDB
DEFAULT CHARACTER SET=utf8 COLLATE=utf8_general_ci
AUTO_INCREMENT=1

;
CREATE TABLE ".tablename("wjyk_nhyk_system_ktv")." (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uniacid` int(11) NOT NULL COMMENT '所属公众号ID',
  `carousel` text NOT NULL COMMENT '首页轮播图',
  `abouts` text COMMENT '退款规则',
  `advertising` varchar(255) DEFAULT NULL,
  `newTemplate` text COMMENT '新订单模板id',
  `cate_carousel` text COMMENT '分类轮播图',
  `is_card` smallint(1) DEFAULT '0' COMMENT '是否需要身份证 0 需要 1 不需要',
  `deposit` decimal(10,2) DEFAULT '0.00' COMMENT '押金',
  `qrcode` text COMMENT '点歌二维码',
  `index_share_title` varchar(255) DEFAULT '' COMMENT '首页分享标题',
  `index_share_desc` varchar(255) DEFAULT '' COMMENT '首页分享说明',
  `index_share_img` varchar(255) DEFAULT '' COMMENT '首页分享图片',
  `start_time` int(11) DEFAULT NULL COMMENT '营业开始时间',
  `end_time` int(11) DEFAULT NULL COMMENT '营业结束时间',
  `operate_date` varchar(255) DEFAULT '' COMMENT '营业日期',
  `free_hour` int(11) DEFAULT '0' COMMENT '提前多少小时免费',
  `promise_hour` int(11) DEFAULT '0' COMMENT '违约时间',
  `promise_money` int(11) DEFAULT '0',
  `promise_add_money` int(11) DEFAULT '0' COMMENT '每增加一小时加收金额',
  `back_hour` int(11) DEFAULT '0' COMMENT '退款截止时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;



");

pdo_update("wjyk_nhyk_plugin",array('is_open'=>2,'createtime'=>$t),array('identifie'=>'wjyk_nhyk_plugin_ktv'));



?>