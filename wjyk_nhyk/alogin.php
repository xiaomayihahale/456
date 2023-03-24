<?php
/**
 * [WeEngine System] Copyright (c) 2014 WE7.CC
 * WeEngine is NOT a free software, it under the license terms, visited http://www.we7.cc/ for more details.
 */
define('IN_SYS', true);
define('IN_GW', true);
define('IMS_FAMILY', "x");
define('IMS_VERSION', "2.1.2");
define('IMS_RELEASE_DATE', "201907030001");
require '../framework/bootstrap.inc.php';
require IA_ROOT . '/web/common/bootstrap.sys.inc.php';

load()->model('user');
load()->model('message');
load()->classs('oauth2/oauth2client');
load()->model('setting');

/* if (!empty($_W['uid']) && $_GPC['handle_type'] != 'bind') {
	itoast('请先退出再登录！');
} */

if (checksubmit() || $_W['isajax']) {
   
	_login($_GPC['referer']);
}

$support_login_types = OAuth2Client::supportThirdLoginType();
if (in_array($_GPC['login_type'], $support_login_types)) {
	_login($_GPC['referer']);
}

$setting = $_W['setting'];
$_GPC['login_type'] = !empty($_GPC['login_type']) ? $_GPC['login_type'] : (!empty($_W['setting']['copyright']['mobile_status']) ? 'mobile': 'system');

$login_urls = user_support_urls();


extract($GLOBALS, EXTR_SKIP);

include realpath("../")."/addons/wjyk_nhyk/login.html";
 




function _login($forward = '') {
  

	global $_GPC, $_W;
	if (empty($_GPC['login_type'])) {
		$_GPC['login_type'] = 'system';
	}

	if (empty($_GPC['handle_type'])) {
		$_GPC['handle_type'] = 'login';
	}

	$member =  user();
	
	if (is_error($member)) {
		itoast($member['message'], '', '');
	}

	$record = user_single($member);
	$failed = pdo_get('users_failed_login', array('username' => trim($_GPC['username'])));
	if (!empty($record)) {
		if ($record['status'] == USER_STATUS_CHECK || $record['status'] == USER_STATUS_BAN) {
		    itoast('您的账号正在审核或是已经被系统禁止，请联系网站管理员解决?', '', '');
		}
		$_W['uid'] = $record['uid'];
		$_W['isfounder'] = user_is_founder($record['uid']);
		$_W['user'] = $record;

		

		if (!empty($_W['siteclose']) && empty($_W['isfounder'])) {
		    itoast('站点已关闭，关闭原因:'. $_W['setting']['copyright']['reason'], './alogin.php', '');
		}
		
		$cookie = array();
		$cookie['uid'] = $record['uid'];
		$cookie['lastvisit'] = $record['lastvisit'];
		$cookie['lastip'] = $record['lastip'];
		$cookie['hash'] = !empty($record['hash']) ? $record['hash'] : md5($record['password'] . $record['salt']);
		$session = authcode(json_encode($cookie), 'encode');
		isetcookie('__session', $session, !empty($_GPC['rember']) ? 7 * 86400 : 0, true);
		$status = array();
		$status['uid'] = $record['uid'];
		$status['lastvisit'] = TIMESTAMP;
		$status['lastip'] = CLIENT_IP;
		
	
		if (empty($forward)) {
			$forward = user_login_forward($_GPC['forward']);
		}
				$forward = safe_gpc_url($forward);

		if ($record['uid'] != $_GPC['__uid']) {
			isetcookie('__uniacid', '', -7 * 86400);
			isetcookie('__uid', '', -7 * 86400);
		}
		if (!empty($failed)) {
			pdo_delete('users_failed_login', array('id' => $failed['id']));
		}

	
		cache_build_frame_menu();
		
		
		$uni_modules = pdo_fetch("SELECT a.* FROM ".tablename("uni_account_users")." AS a left join".tablename("uni_modules")." as b on a.uniacid = b.uniacid where b.module_name=:module_name and a.uid=:uid LIMIT 1 ",
		    array("module_name"=>"wjyk_nhyk","uid"=>$record['uid']));
		if(empty($uni_modules)){
		    itoast('登录失败，该账号无权登录', '', '');
		    exit();
		}
		$uniacid = $uni_modules['uniacid'];
		isetcookie('__uid',$record['uid'] , 7 * 86400);
		isetcookie('__uniacid', $uniacid, 7 * 86400);
		$forward ='./index.php?c=site&a=entry&do=admin&module_name=wjyk_nhyk';
		itoast("欢迎回来，{$record['username']}。", $forward, 'success');

	} else {
		if (empty($failed)) {
			pdo_insert('users_failed_login', array('ip' => CLIENT_IP, 'username' => trim($_GPC['username']), 'count' => '1', 'lastupdate' => TIMESTAMP));
		} else {
			pdo_update('users_failed_login', array('count' => $failed['count'] + 1, 'lastupdate' => TIMESTAMP), array('id' => $failed['id']));
		}
		itoast('登录失败，请检查您输入的账号和密码', '', '');
	}
}

function user() {
    global $_GPC, $_W;
    $username = trim($_GPC['username']);
    $refused_login_limit = $_W['setting']['copyright']['refused_login_limit'];
    pdo_delete('users_failed_login', array('lastupdate <' => TIMESTAMP - $refused_login_limit * 60));
    $failed = pdo_get('users_failed_login', array('username' => $username));
    if ($failed['count'] >= 5) {
        return error('-1', "输入密码错误次数超过5次，请在{$refused_login_limit}分钟后再登录");
    }
    /*  if (!empty($_W['setting']['copyright']['verifycode'])) {
        $verify = trim($_GPC['verify']);
        if (empty($verify)) {
            return error('-1', '请输入验证码');
        }
        $result = checkcaptcha($verify);
        if (empty($result)) {
            return error('-1', '输入验证码错误');
        }
    }  */
    if (empty($username)) {
        return error('-1', '请输入要登录的用户名');
    }
    $member['username'] = $username;
    $member['password'] = $_GPC['password'];
    $member['type'] = 1;
    if (empty($member['password'])) {
        return error('-1', '请输入密码');
    }
    return $member;
}
