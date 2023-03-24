<?php
define('IN_SYS', true);
require '../framework/bootstrap.inc.php';
load()->web('common');
load()->web('template');
header('Content-Type: text/html; charset=UTF-8');session_start();
$uniacid = intval($_GPC['i']);
$cookie = $_GPC['__merch_uniacid'];$cookie2 = $_GPC['c663__merch_uniacid'];
if (empty($uniacid) && empty($cookie) && empty($_W['user'])) {   //打回到登录            
	exit('Access Denied.');
}



if (!empty($uniacid)) {
	$_SESSION['__merch_uniacid'] = $uniacid;
	isetcookie('__merch_uniacid', $uniacid, 7 * 86400,true);
}

$site = WeUtility::createModuleSite('wjyk_nhyk');
if (!is_error($site)) {
	$method = 'doWebWeb';
	$site->uniacid = $uniacid;
	$site->inMobile = false;

	if (method_exists($site, $method)) {
		$site->$method();
		exit();
	}
}

?>
