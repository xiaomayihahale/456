<?php

defined('IN_IA') or exit('Access Denied');
header('Access-Control-Allow-Origin:*'); // *代表允许任何网址请求

class Wjyk_nhykModuleSite extends WeModuleSite {
    

    public function __call($name, $arguments)
    {      
        global $_W, $_GPC;
   
        //借权用户的信息获取
        if(empty($_W['fans']['nickname']))
        {
            $_W['fans'] = mc_fansinfo($_W['fans']['openid']);
        }
        if(empty($_W['fans']['uid']))
        {
            mc_oauth_userinfo();
        }
        define('VERSION', IMS_VERSION);
        
     
        include __DIR__.'/index.php';
        exit;
    }
    
    public function doWebWeb()
    {

        global $_W, $_GPC;
        $i = intval($_GPC['i']);
        
        
        
        if(empty($i)){
            $_W['uniacid'] = $_COOKIE[$_W['config']['cookie']['pre'].'__uniacid'];//$_SESSION['__merch_uniacid'];//
        }else{
            $_W['uniacid'] = $i;
        }
        
        if (!empty($i)) {
        
             $_SESSION['__merch_uniacid'] = $_W['uniacid'];
             isetcookie('__uniacid', $_W['uniacid'], 7 * 86400,true);
        }
        
       
        
        define('VERSION', IMS_VERSION);
        include __DIR__.'/webIndex.php';
        exit;
    }

}