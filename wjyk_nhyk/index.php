<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006-2018 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------

// [ 应用入口文件 ]
namespace think;

global  $_GPC,$_W;
//微擎模块
$m = $_GPC['m'];
//设置常量
define('MODULE_NAME',$m);
//tp模块
$tpM = $_GPC['do'] ? $_GPC['do']:'index';
//tp控制器
$tpC = isset($_GPC['tp_c'])? $_GPC['tp_c']:'index';
$_GPC['tp_c'] = $tpC = strtolower(trim(preg_replace("/[A-Z]/", "_\\0", $tpC), "_"));
//tp方法
$_GPC['tp_a'] =  $tpA = isset($_GPC['tp_a'])? trim($_GPC['tp_a']):'index';

// 加载基础文件
require __DIR__ . '/thinkphp/base.php';

// 执行应用并响应
Container::get('app')->path(__DIR__.'/application/')->bind($tpM."/".$tpC."/".$tpA)->run()->send();

