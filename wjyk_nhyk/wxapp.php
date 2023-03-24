<?php
defined('IN_IA') or exit('Access Denied');
define('IP', 'api.feieyun.cn'); // 接口IP或域名
define('PORT', 80); // 接口IP端口
define('PATH', '/Api/Open/'); // 接口路径
load()->library('qrcode');
include ("application/common.php");
class Wjyk_nhykModuleWxapp extends WeModuleWxapp
{
    
    
    public function doPageCoupon(){
        $this->__app("coupon");
    }
    
    public function doPageStore(){
        $this->__app("store");
    }
    
    public function doPageGoods(){
        $this->__app("goods");
    }
    
    public function doPageFoods(){
        $this->__app("foods");
    }
    
    public function doPageFoodsOrder(){
        $this->__app("foods_order");
    }
    
    public function doPageOrder(){
        $this->__app("order");
    }
    
    public function doPageAddress(){
        $this->__app("address");
    }
    
    public function doPageCommission(){
       // var_dump("123");
        $this->__app("commission");
    }
    
    public function doPageBrokerage(){
        $this->__app("brokerage");
    }
    
    public function doPageReserve(){
        $this->__app("reserve");
    }
    
    public function doPageInfo(){
        $this->__app("info");
    }
    
    public function doPageUser(){
        $this->__app("user");
    }
    
    public function doPageCollector(){
        $this->__app("collector");
    }
    
    public function doPageHotel(){
        $this->__app("hotel");
    }
    
    
    public function doPageKtvCombo(){
        $this->__appfolder("ktvcombo",'ktv');
    }
    public function doPageKtvGoods(){
        $this->__appfolder("ktvgoods",'ktv');
    }
    public function doPageKtvOrder(){
        $this->__appfolder("ktvorder",'ktv');
    }
    public function doPageKtvActivity(){
        $this->__appfolder("ktvactivity",'ktv');
    }
    
    public function __app($action)
    {
        
        // 借权用户的信息获取
       /*  global  $_GPC,$_W;
        
        if (empty($_W['fans']['nickname'])) {
            $_W['fans'] = mc_fansinfo($_W['fans']['openid']);
        }
        if (empty($_W['fans']['nickname'])) {
            mc_oauth_userinfo();
        }
        
        $op = $operation = $_GPC['op'] ? $_GPC['op'] : 'display';
        $uid=$_GPC['uid']; */
       
        
        require 'inc/app/' . $action . '.inc.php';
    }
    
     public function __appfolder($action,$folder)
    {
        
        require 'inc/app/' .$folder.'/'. $action . '.inc.php';
    }
     
    
    /**
     * 生日消息订阅定时任务
     */
    public function doPageBrtiming(){
        global $_W, $_GPC;
        $cur_y = intval(date("Y"));
        $cur_m = intval(date("m"));
        $cur_d = intval(date("d"));
        $users = pdo_fetchall(" SELECT a.openid FROM  ".tablename("wjyk_nhyk_user")." as a  WHERE a.birthyear=:birthyear AND a.birthmonth=:birthmonth AND a.birthday=:birthday AND a.uniacid=:uniacid"
               ,array("uniacid"=>$_W['uniacid'],"birthyear"=>$cur_y,"birthmonth"=>$cur_m,"birthday"=>$cur_d));

        $data = [];
        $notice_set = pdo_get('wjyk_nhyk_notice_set',array(
            'uniacid' => $_W['uniacid'],
        ));
        if(empty($notice_set) || $notice_set['br_type'] == 1){
            return ;
        }
        $uid = $data['uid'];
        $not_type = $notice_set['br_type'];
     
        foreach ($users as $k=>$v){
            if($not_type == 2 || $not_type == 4){
                 
                $app =  pdo_get("wjyk_nhyk_payconfig",array('uniacid' => $_W['uniacid']),"appid");
                $account_api = WeAccount::create();
                $token = $account_api->getAccessToken();
            
                $params['template_id'] = $notice_set['br_template'];
                $params['touser'] = $v['openid'];
                $params['minprogram'] = array("appid"=>$app['appid'],pagepath=>"wjyk_nhyk/page/index/index");
                $params['page'] = "wjyk_nhyk/pages/index/index";
            
                $params['miniprogram_state'] = 'formal';
                $params['data'] = array(
                    'thing1' => array(
                        'value' => "优惠卷",
                        'color' => '#ff510'
                    ),
                    'thing2' => array(
                        'value' => "您的生日优惠卷已经送出!尽快登陆领取哦",
                        'color' => '#ff510'
                    ),
                    'thing3' => array(
                        'value' => date("Y-m-d"),
                        'color' => '#ff510'
                    ),
                );
            
                $params = json_encode($params, true);
            
                $url = 'https://api.weixin.qq.com/cgi-bin/message/subscribe/send?access_token='.$token;
                $re = $this->sendCmd($url,$params);
            
            }
            
            if($not_type == 3 || $not_type == 4){
                //短信通知
                $mobdata = ['name'=>$v['nickname']];
                $this->sendMobile(1,$mobdata,1,4,$v['mobile']);
            }
        }
        
        
        echo json_encode(['code'=>'0','msg'=>'执行成功']); 
    }
    
    
    /**
     * 短信验证字符串替换
     * @param unknown $msg
     * @param unknown $data
     */
    private function msg_str_replace($msg,$data){
        foreach($data as $k=>$v){
            $msg = str_replace($k,$v,$msg);
        }
        return $msg;
    }
    
    /**
     * 助通云-短信验证
     * https://b59.admin168.net/app/index.php?i=2&c=entry&a=wxapp&do=sendMobile&m=wjyk_recycle
     *
     * @param
     *            integer telphone(电话号码)
     */
    public function sendMobile($type,$data,$temId,$dataType,$mobile)
    {
        global $_W, $_GPC;
    
        $note = pdo_get('wjyk_nhyk_note', array(
            'uniacid' => $_W['uniacid']
        ));
  
        if($note){
            $smsapi = "http://api.mix2.zthysms.com/v2/sendSms"; // 短信网关
            $user = $note['user']; // 短信平台帐号
            $pass = $note['pass']; // 短信平台密码
           // $message = $note['message']; // 短信模板
        }else{
            return ;
        }
        
        if($note['is_open'] != 1){
            return ;
        }
 

        $config = [
            'accessKeyId' => $note['keyId'],
            'accessKeySecret' => $note['keySecret'],
            'signName' => $note['signName'],
            'templateCode' => $note['templateCode'],
            'kf_success_code' => $note['kf_success_code'],
            'new_success_code' => $note['new_success_code']
        ];

        include 'Sms.php';

        $sms = new Sms($config);
        $phone = $_GPC['telphone'];
         
        if($dataType == 2){
            //扣费
            
            $code = $note["kf_success_code"];
            $message = json_encode(array("name"=>$data['name'],"time"=>date("Y-m-d"),"money"=>$data['money']));
        }else if($dataType == 3){
            $code = $note["new_success_code"];
            $message = json_encode(array("code"=>$data['code'],"name"=>$data['name'],"store"=>$data['store']));
        }else if($dataType == 1){
            $code = $note["templateCode"];
            $message = json_encode(array("name"=>$data['name'],"money"=>$data['money']));
        }else if($dataType == 4 ){
            $code = $note["br_success_code"];
            $message = json_encode(array("name"=>$data['name']));
        }
        
     
        $status = $sms->send_verify($mobile, $message,$code);

 
    }
    
    /**
     * 系统设置
     * https://b59.admin168.net/app/index.php?i=2&c=entry&a=wxapp&do=system&m=wjyk_recycle
     */
    public function doPageSystem(){
        global $_GPC, $_W;
        $system = pdo_get('wjyk_nhyk_system', array(
            'uniacid' => $_W['uniacid']
        ));
        $pay_config = pdo_get('wjyk_nhyk_payconfig', array(
            'uniacid' => $_W['uniacid']
        ),array("pay_type","sub_type"));
        $system['abouts'] = htmlspecialchars_decode($system['abouts']);
        $system['cate_carousel'] = unserialize($system['cate_carousel']);
        $system['link_carousel'] = unserialize($system['link_carousel']);
        $system['make_money_desc'] = htmlspecialchars_decode($system['make_money_desc']);
        $system['recharge_money_desc'] = htmlspecialchars_decode($system['recharge_money_desc']);
        $system['sign_desc'] = htmlspecialchars_decode($system['sign_desc']);
        
        //会员等级
        $recharge =  pdo_getall("wjyk_nhyk_recharge",array("uniacid"=>$_W['uniacid'],"status"=>0),array("money","only","id"),"",array("sort desc"));
        $system['recharge'] = $recharge;
        //会员等级
        $memLevel = pdo_fetchall("SELECT a.* FROM ".tablename("wjyk_nhyk_memlevel")." as a  WHERE a.uniacid=:uniacid  order by need_money ASC",array("uniacid"=>$_W['uniacid']));
        $count = count($memLevel);
        foreach ($memLevel as $k=>$v){
            if($k == $count -1){
                $v['nextMember_name'] ="满级会员";
                $v["nextMoney"] = 0;
                $v['nextDiscount'] =  0;
                $v['nextLevelId'] =  -1;
            }else{
                $v["nextMember_name"] = $memLevel[$k+1]['member_name'];
                $v["nextDiscount"] = $memLevel[$k+1]['discount'];
                $v["nextMoney"] = $memLevel[$k+1]['need_money'];
                $v['nextLevelId'] =  $memLevel[$k+1]['id'];
            }
            $memLevel[$k] = $v;
        }
        
        
        $indexMeauLists = pdo_fetchall("SELECT a.* FROM ".tablename("wjyk_nhyk_index_meau")." as a  WHERE a.uniacid=:uniacid and a.status=:status  order by `order` desc",
            array("uniacid"=>$_W['uniacid'],"status"=>0));
        
        //菜单栏
       /*  $meauLists = pdo_getall("wjyk_nhyk_meau",array("uniacid"=>$_W['uniacid'],"status"=>0),array("meau_name","meau_link","order","icon","icon_select"),"order desc");
         */
        $meauLists = pdo_fetchall("SELECT a.* FROM ".tablename("wjyk_nhyk_meau")." as a  WHERE a.uniacid=:uniacid and a.status=:status  order by `order` desc",
            array("uniacid"=>$_W['uniacid'],"status"=>0));
        foreach ($meauLists as $k=>$v){
            $v['index'] = $k;
            $meauLists[$k] = $v;
        }
        //套餐卡
        $mealLists = pdo_getall("wjyk_nhyk_meal",array("uniacid"=>$_W['uniacid'],"status"=>0),array("meal_count","meal_money","meal_discount","meal_name","id",'meal_back_img'));
        
        
        $plugin = pdo_fetchall("SELECT a.* FROM ".tablename('wjyk_nhyk_plugin')." as a LEFT JOIN ".tablename("wjyk_nhyk_module_plugin")." as b on a.id = b.pid WHERE b.is_open= 1 and b.uniacid=:uniacid order by a.id asc ",array("uniacid"=>$_W['uniacid']));
        
        
        $notice_set = pdo_get('wjyk_nhyk_notice_set',array(
            'uniacid' => $_W['uniacid'],
        ));
        
        $system['mealLists'] = $mealLists;
        $system['indexMealLists'] = $indexMeauLists;
        $system['meauLists'] = $meauLists;
        $system['memberLevel'] = $memLevel;
        
        $system['plugin'] = $plugin;
        
        $dis = pdo_get('wjyk_nhyk_distribution_set', array(
            'uniacid' => $_W['uniacid']
        ));
        if($dis){
            $dis['distribution_description']=htmlspecialchars_decode($dis['distribution_description']);
        }
        $system['dist'] = $dis;
        $system['pay_config']=$pay_config;
        $system['share_index'] ="wjyk_nhyk/pages/index/index"; 
        $system['notice'] = $notice_set?$notice_set:[] ;
        $system['tz_url'] = $_W['siteroot']."web/nhykrout.php?do=admin&m=wjyk_nhyk&version_id=4&i=".$_W['uniacid']."&tp_c=cash&tp_a=index";
        $system['cz_url'] = $_W['siteroot']."web/nhykrout.php?do=admin&m=wjyk_nhyk&version_id=4&i=".$_W['uniacid']."&tp_c=cash&tp_a=cz_index";
        $system['tc_url'] = $_W['siteroot']."web/nhykrout.php?do=admin&m=wjyk_nhyk&version_id=4&i=".$_W['uniacid']."&tp_c=cash&tp_a=meal_index";
        return self::result(0, 'success',$system);
    }
    
    
    
    /**
     * 酒店系统设置
     * https://b59.admin168.net/app/index.php?i=2&c=entry&a=wxapp&do=system&m=wjyk_recycle
     */
    public function doPageHotelSystem(){
        global $_GPC, $_W;
        $system = pdo_get('wjyk_nhyk_system_hotel', array(
            'uniacid' => $_W['uniacid']
        ));
    
        //$system['carousel'] = unserialize($system['carousel']);

        if(!empty($system['arrive_time'])){
            $system['arrive_time'] = date("H:s:i",$system['arrive_time']);
        }
        
        if(!empty($system['leave_time'])){
            $system['leave_time'] = date("H:s:i",$system['leave_time']);
        }
        
        $system['share_index'] ="packages/hotel/index/index"; 
     
        return self::result(0, 'success',$system);
    }
    
    /**
     * ktv系统设置
     * https://b59.admin168.net/app/index.php?i=2&c=entry&a=wxapp&do=system&m=wjyk_recycle
     */
    public function doPageKtvSystem(){
        global $_GPC, $_W;
        $system = pdo_get('wjyk_nhyk_system_ktv', array(
            'uniacid' => $_W['uniacid']
        ));
        $system['abouts'] = htmlspecialchars_decode($system['abouts']);
        $system['share_index'] ="packages/ktv/ktvNearbyStores/ktvNearbyStores"; 
        return self::result(0, 'success',$system);
    }
    
    
    /**
     * 酒店系统设置
     * https://b59.admin168.net/app/index.php?i=2&c=entry&a=wxapp&do=system&m=wjyk_recycle
     */
    public function doPageFoodsSystem(){
        global $_GPC, $_W;
        $system = pdo_get('wjyk_nhyk_system_foods', array(
            'uniacid' => $_W['uniacid']
        ));
       
        $system['link_carousel'] = unserialize($system['link_carousel']);
        $system['cate_carousel'] = unserialize($system['cate_carousel']);
      
        $system['djq_carousel'] = unserialize($system['djq_carousel']);
       
       
        $system['share_index'] ="packages/takeawayOrder/index/index"; 
   
        return self::result(0, 'success',$system);
    }
    
    
    
 

    
    
   
    
    
    
    /**
     * 扣费成功订阅消息
     * https://b59.admin168.net/app/index.php?i=2&c=entry&a=wxapp&do=receiveSendSubMessage&m=wjyk_recycle
     * @param  orderid  订单id
     */
    public function kf_success_msg($uid,$money,$type,$lessmoney,$time,$store_name){

        global $_W, $_GPC;
        $notice_set = pdo_get('wjyk_nhyk_notice_set',array(
            'uniacid' => $_W['uniacid'],
        ));
        if(empty($notice_set) || $notice_set['cz_type'] == 1){
            return ;
        }
        $not_type = $notice_set['kf_type'];
    
        $user = pdo_fetch("SELECT a.nickname,a.openid,a.mobile,a.nickname FROM  ".tablename("wjyk_nhyk_user")." as a  WHERE a.id=:uid AND a.uniacid=:uniacid"
            ,array("uid"=>$uid,"uniacid"=>$_W['uniacid']));

        if(empty($user)){
            return ;
        }
        if($not_type == 2 || $not_type == 4){
    
            $account_api = WeAccount::create();
            $token = $account_api->getAccessToken();
    
            $params['touser'] = $user['openid'];
            $params['template_id'] = $notice_set['kf_template'];
    
            $params['page'] = "";
    
            $params['miniprogram_state'] = 'formal';
    
            $params['data'] = array(
                
                'amount2' => array(
                    'value' => $money,
                    'color' => '#ff510'
                ),
                'date3' => array(
                    'value' => $time,
                    'color' => '#ff510'
                ),
                'thing4' => array(
                    'value' => $type,
                    'color' => '#ff510'
                ),
                'thing6' => array(
                    'value' => $store_name,
                    'color' => '#ff510'
                )
               
            );
    
            $params = json_encode($params, true);
            $url = 'https://api.weixin.qq.com/cgi-bin/message/subscribe/send?access_token='.$token;
            $re = $this->sendCmd($url,$params);
            
        }

        if($not_type == 3 || $not_type == 4){
            //短信通知
            $mobdata = ['name'=>$user['nickname'],"money"=>$money];
            $this->sendMobile(1,$mobdata,1,2,$user['mobile']);
        }
    }
    
    
  
    
    /**
     * 充值成功订阅消息
     * https://b59.admin168.net/app/index.php?i=2&c=entry&a=wxapp&do=receiveSendSubMessage&m=wjyk_recycle
     * @param  orderid  订单id
     */
    public function cz_success_msg($uid,$money,$type,$lessmoney,$time){
        global $_W, $_GPC;
        $notice_set = pdo_get('wjyk_nhyk_notice_set',array(
            'uniacid' => $_W['uniacid'],
        ));
        if(empty($notice_set) || $notice_set['cz_type'] == 1){
            return ;
        }
        $not_type = $notice_set['cz_type'];
        
        $user = pdo_fetch("SELECT a.* FROM ".tablename("wjyk_nhyk_user")." as a WHERE a.id=:uid AND a.uniacid=:uniacid"
                 ,array("uid"=>$uid,"uniacid"=>$_W['uniacid']));
        
        if(empty($user)){
            return ;
        }
        if($not_type == 2 || $not_type == 4){
            
            $account_api = WeAccount::create();
            $token = $account_api->getAccessToken();
            
            $params['touser'] = $user['openid'];
            $params['template_id'] = $notice_set['cz_success_template'];
            
            $params['page'] = "";
            
            $params['miniprogram_state'] = 'formal';
            
            $params['data'] = array(
                'name1' => array(
                    'value' => $user['nickname'],
                    'color' => '#ff510'
                ),
                'amount2' => array(
                    'value' => $money,
                    'color' => '#ff510'
                ),
                'phrase3' => array(
                    'value' => $type,
                    'color' => '#ff510'
                ),
                'amount6' => array(
                    'value' =>$lessmoney,
                    'color' => '#ff510'
                ),
                'time4' => array(
                    'value' =>$time,
                    'color' => '#ff510'
                )
            );
            
            $params = json_encode($params, true);
            
            $url = 'https://api.weixin.qq.com/cgi-bin/message/subscribe/send?access_token='.$token;
            $re = $this->sendCmd($url,$params);
       
        } 
        
        if($not_type == 3 || $not_type == 4){
            //短信通知
            $mobdata = ['name'=>$user['nickname'],"money"=>$money+$lessmoney];
            $this->sendMobile(1,$mobdata,1,1,$user['mobile']);
        }
    }
    
    
    /**
     * 新订单成功订阅消息
     * https://b59.admin168.net/app/index.php?i=2&c=entry&a=wxapp&do=receiveSendSubMessage&m=wjyk_recycle
     * @param  orderid  订单id
     */
    public function new_order_msg($uid,$money,$good_name,$time,$order_no,$store_name){
        global $_W, $_GPC;
        $notice_set = pdo_get('wjyk_nhyk_notice_set',array(
            'uniacid' => $_W['uniacid'],
        ));
        if(empty($notice_set) || $notice_set['cz_type'] == 1){
            return ;
        }
        $not_type = $notice_set['cz_type'];
    
        $user = pdo_fetch("SELECT a.* FROM  ".tablename("wjyk_nhyk_user")." as a  WHERE a.id=:uid AND a.uniacid=:uniacid"
            ,array("uid"=>$uid,"uniacid"=>$_W['uniacid']));
    
        if(empty($user)){
            return ;
        }
        if($not_type == 2 || $not_type == 4){
    
            $account_api = WeAccount::create();
            $token = $account_api->getAccessToken();
    
            $params['touser'] = $user['openid'];
            $params['template_id'] = $notice_set['cz_success_template'];
    
            $params['minprogram'] = array("appid"=>$app['appid'],pagepath=>"wjyk_nhyk/page/index/index");
            $params['page'] = "wjyk_nhyk/pages/index/index";
            
            $params['miniprogram_state'] = 'formal';
    
            $params['data'] = array(
                'time1' => array(
                    'value' => $time,
                    'color' => '#ff510'
                ),
                'thing8' => array(
                    'value' => $user['nickname'],
                    'color' => '#ff510'
                ),
                'phone_number9' => array(
                    'value' => $user['mobile'],
                    'color' => '#ff510'
                ),
                'thing14' => array(
                    'value' =>$good_name,
                    'color' => '#ff510'
                ),
                'amount15' => array(
                    'value' =>$money,
                    'color' => '#ff510'
                )
            );
    
            $params = json_encode($params, true);
    
            $url = 'https://api.weixin.qq.com/cgi-bin/message/subscribe/send?access_token='.$token;
            $re = $this->sendCmd($url,$params);
            
        }
    
        if($not_type == 3 || $not_type == 4){
            //短信通知
            //短信通知
            $mobdata = ['code'=>$order_no,"name"=>$user['nickname'],'store'=>$store_name];
            $this->sendMobile(1,$mobdata,1,3,$user['mobile']);
        }
    }
    
    
    public function get_qrcode($uid,$toUrl, $folder,$type){
        global  $_W;

        $settings = pdo_fetch("SELECT appid,app_key FROM " . tablename('wjyk_nhyk_payconfig') . " WHERE  uniacid=:uniacid", [ ':uniacid' => $_W['uniacid']]);
        
        $appid = $settings['appid'];
        $secret =  $settings['app_key'];
        $name = time().$uid.rand(1,1000);
        
        //$path = IA_ROOT.'/addons/wjyk_nhyk/qr_code/code-' . $name. '.png';
        $paths = $_W['siteroot'].'addons/wjyk_nhyk/qr_code/code-' . $name. '.png';
        $dirpath = IA_ROOT.'/addons/wjyk_nhyk/qr_code/';
        $path = $dirpath.'code-' . $name. '.png';
       
        if($type == 1){
            $errorCorrectionLevel = "L";
            $matrixPointSize = "4.3";
            $margin = "1";
            QRcode::png($toUrl, $path, $errorCorrectionLevel, $matrixPointSize, $margin);
        }else{
            $url_access_token = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' . $appid . '&secret=' . $secret;
            $json_access_token = $this->sendCmd($url_access_token, array());
            $arr_access_token = json_decode($json_access_token, true);
            $access_token = $arr_access_token['access_token'];
            $url = 'https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=' . $access_token;
            $qrcode = array(
                'scene'			=> $uid,
                'width'			=> 320,
                'page'=> $toUrl,
            );
       
            
            $result = $this->sendCmd($url, json_encode($qrcode));
     
         
            //判断目录存在否，存在给出提示，不存在则创建目录
            if (is_dir($dirpath)){
            }else{
                mkdir(iconv("UTF-8", "GBK", $dirpath),0777,true);
            }
            file_put_contents($path, $result);
        }
        
       
        $attachment = pdo_get("wjyk_nhyk_attachment",array("uniacid"=>$_W['uniacid']));
        
        if($attachment){
            if($attachment['type'] == 2){
                
                require_once(IA_ROOT . '/framework/library/qiniu/autoload.php');
                $auth = new \Qiniu\Auth($attachment['qn_accesskey'], $attachment['qn_secretkey']);
                
                // 要上传的空间
                // 生成上传 Token
                $token = $auth->uploadToken($attachment['qn_bucket']);
                // 要上传文件的本地路径
                // 上传到七牛后保存的文件名
                $key = "opz".time().rAND(999,9999).".png";
                // 初始化 UploadManager 对象并进行文件的上传
                $uploadMgr = new \Qiniu\Storage\UploadManager();
                // 调用 UploadManager 的 putFile 方法进行文件的上传
                list($ret, $err) = $uploadMgr->putFile($token, $key, $path);
                
                if ($err !== null) {
                    $qr_path=$paths;
                } else {
                    $qr_path=$attachment['qn_url']."/".$ret['key'];
                    unlink($path);
                }
            }else if($attachment['type'] == 3){
                
            }else if($attachment['type'] == 4){
                
                require_once(IA_ROOT . '/addons/wjyk_nhyk/vendor/cos-sdk-v5.phar');
                $secretId = $attachment['tx_secretid']; //"云 API 密钥 SecretId";
                $secretKey = $attachment['tx_secretkey']; //"云 API 密钥 SecretKey";
                $region = $attachment['tx_local']; //设置一个默认的存储桶地域
                
                $cosClient = new \Qcloud\Cos\Client(
                    array(
                        'region' => $region,
                        'domain' =>$attachment['tx_url'],
                        'schema' => 'https', //协议头部，默认为http
                        'credentials'=> array(
                            'secretId'  => $secretId,
                            'secretKey' => $secretKey)));
                    
                    try {
                        $bucket = $attachment['tx_bucket']."-".$attachment['tx_appid']; //存储桶名称 格式：BucketName-APPID
                        
                        //此处的 key 为对象键，对象键是对象在存储桶中的唯一标识
                        $key = "opz".time().rAND(999,9999).".png";
                        $srcPath = "path/to/localFile";//本地文件绝对路径
                        $file = fopen($path, "rb");
                        if ($file) {
                            $result = $cosClient->putObject(array(
                                'Bucket' => $bucket,
                                'Key' => $key,
                                'Body' => $file));
                            
                            $qr_path = $attachment['tx_url']."/".$key;
                            unlink($path);
                        }
                    } catch (\Exception $e) {
                        $qr_path=$paths;
                    }
            }else {
                $qr_path=$paths;
            }
        }else{
            $qr_path=$paths;
        }
        
        return $qr_path;
    }

    
    function member_upgrade($uid,$price){
        global $_W,$_GPC;
        $user =  pdo_fetch("SELECT a.com_money,a.member_level FROM  ".tablename("wjyk_nhyk_user")." as a WHERE a.id=:uid AND a.uniacid=:uniacid"
             ,array("uniacid"=>$_W['uniacid'],"id"=>$uid));
        

        $member=pdo_fetch("select id from ".tablename('wjyk_nhyk_memlevel')." where uniacid=:uniacid and need_money<=:need_money
    order by need_money desc limit 1",array(':uniacid'=>$_W['uniacid'],':need_money'=>$user['com_money']+$price));
      
        $update_date = array('com_money +='=>$price);
        //升级是否达到开启分销条件
        $distribution_set =  pdo_get("wjyk_nhyk_distribution_set",array("uniacid"=>$_W['uniacid']));
        if($distribution_set && $distribution_set['condition'] == 3 && ($user['com_money']+$price) >=$distribution_set['consume_money']  ){
            $update_date['is_distribution'] = 2;
        }
        if($member['id']==$user['member_level']){
            pdo_update("wjyk_nhyk_user",$update_date,array('id'=>$uid));
        }else{
            $update_date['member_level']= $member['id'];
            if($distribution_set && $distribution_set['condition'] == 4 && $member['id'] == $distribution_set['member_level']){
                $update_date['is_distribution'] = 2;
            }
            pdo_update("wjyk_nhyk_user",$update_date,array('id'=>$uid));
        }
    }
    
    
    
    /**
     * 七牛云上传
     * https://b59.admin168.net/app/index.php?i=2&c=entry&a=wxapp&do=upload&m=wjyk_recycle
     *
     * @param
     *           file
     */
    public function doPageUpload(){

                
     
        
        
        global $_GPC, $_W;
        $savePath = 'attachment/images/' . $_W['uniacid'];
      
        $file = $_FILES['file'];
        $filePath = $file['tmp_name'];
        $temp = explode("/", $file['type']); //获取文件名按“.”进行分割
      
        // 获取文件后缀名 更新成功
        $extension = end($temp);
        // 上传后保存的文件名
        $key = time() . rand(999, 9999) . ".$extension";
        // 获取文件后缀
        $temp = explode(".", $_FILES["file"]["name"]);
        $extension = end($temp);
   
        if (! in_array($extension, array(
            "gif",
            "jpeg",
            "jpg",
            "png"
        ))) {
            exit(json_encode(array(
                'code' => -1,
                'msg' => "上传文件必须为图片文件",
            )));
        }
        
        
        $res = move_uploaded_file($filePath, "../attachment/images/" . $key);
        $paths = $_W['siteroot'] . "attachment/images/" . $key;
        $path = IA_ROOT."/" . "attachment/images/" . $key;
        
        
       
        
        //上传至
        $attachment = pdo_get("wjyk_nhyk_attachment",array("uniacid"=>$_W['uniacid']));
        
        if($attachment){
            if($attachment['type'] == 2){
                
                require_once(IA_ROOT . '/framework/library/qiniu/autoload.php');
                $auth = new \Qiniu\Auth($attachment['qn_accesskey'], $attachment['qn_secretkey']);
                
                // 要上传的空间
                // 生成上传 Token
                $token = $auth->uploadToken($attachment['qn_bucket']);
                // 要上传文件的本地路径
                // 上传到七牛后保存的文件名
                $key = "opz".time().rAND(999,9999).".png";
                // 初始化 UploadManager 对象并进行文件的上传
                $uploadMgr = new \Qiniu\Storage\UploadManager();
                // 调用 UploadManager 的 putFile 方法进行文件的上传
                list($ret, $err) = $uploadMgr->putFile($token, $key, $path);
                
                if ($err !== null) {
                    $qr_path=$paths;
                } else {
                    $qr_path=$attachment['qn_url']."/".$ret['key'];
                    unlink($path);
                }
            }else if($attachment['type'] == 3){
                /* require_once(IA_ROOT . '/framework/library/alioss/autoload.php');
                
                // 阿里云主账号AccessKey拥有所有API的访问权限，风险很高。强烈建议您创建并使用RAM账号进行API访问或日常运维，请登录RAM控制台创建RAM账号。
                $accessKeyId = $_W['setting']['remote']['alioss']['key'];
                $accessKeySecret = $_W['setting']['remote']['alioss']['secret'];
                $endpoint = $_W['setting']['remote']['alioss']['ossurl'];
                // 设置存储空间名称。
                $bucket= $_W['setting']['remote']['alioss']['bucket'];
                // 设置文件名称。
                $object = time().rand(999,9999).".png";
                // <yourLocalFile>由本地文件路径加文件名包括后缀组成，例如/users/local/myfile.txt。
                
                try{
                $ossClient =new OSS\OssClient($accessKeyId, $accessKeySecret, $endpoint);
                $ossClient->uploadFile($bucket, $object, $path);
                $qr_path=$_W['setting']['remote']['alioss']['url']."/".$object;
                unlink($path);
                } catch(OSS\Core\OssException $e) {
                $qr_path=$paths;
                } */
            }else if($attachment['type'] == 4){
                
                require_once(IA_ROOT . '/addons/wjyk_nhyk/vendor/cos-sdk-v5.phar');
                $secretId = $attachment['tx_secretid']; //"云 API 密钥 SecretId";
                $secretKey = $attachment['tx_secretkey']; //"云 API 密钥 SecretKey";
                $region = $attachment['tx_local']; //设置一个默认的存储桶地域
                
                $cosClient = new \Qcloud\Cos\Client(
                    array(
                        'region' => $region,
                        'domain' =>$attachment['tx_url'],
                        'schema' => 'https', //协议头部，默认为http
                        'credentials'=> array(
                            'secretId'  => $secretId,
                            'secretKey' => $secretKey)));
                    
                    try {
                        $bucket = $attachment['tx_bucket']."-".$attachment['tx_appid']; //存储桶名称 格式：BucketName-APPID
                        
                        //此处的 key 为对象键，对象键是对象在存储桶中的唯一标识
                        $key = "opz".time().rAND(999,9999).".png";
                        $srcPath = "path/to/localFile";//本地文件绝对路径
                        $file = fopen($path, "rb");
                        if ($file) {
                            $result = $cosClient->putObject(array(
                                'Bucket' => $bucket,
                                'Key' => $key,
                                'Body' => $file));
                            
                            $qr_path = $attachment['tx_url']."/".$key;
                        }
                    } catch (\Exception $e) {
                        $qr_path=$paths;
                    }
            }else {
                $qr_path=$paths;
            }
        }else{
            $qr_path=$paths;
        }
  
        
        exit(json_encode(array(
            'code' => 0,
            'msg' => $qr_path,
            'relimg_path'=>$path
        )));
        
        
    }
    
    
    /**
     * 根据code获取key
     */
    public function doPageGetKeyByCode(){
        global $_W,$_GPC;
        $code = $_GPC['code'];
        if(empty($code)){
            return ;
        }
        $payconfig = pdo_get('wjyk_nhyk_payconfig',array(
            'uniacid' => $_W['uniacid']
        ));
        $url = "https://api.weixin.qq.com/sns/jscode2session?appid={$payconfig['appid']}&secret={$payconfig['app_key']}&js_code={$code}&grant_type=authorization_code";
        $send_data = array(
            'appid' => $payconfig['appid'],
            'secret' => $payconfig['app_key'],
            'js_code' => $code,
            'grant_type' => "authorization_code"
        );
        $sign = $this->MakeSign($send_data, $payconfig['pay_key']);
        $send_data['sign'] = $sign;
        $key =  $this->wtw_request($url);
        echo json_encode(['code'=>'0','msg'=>"成功","data"=>$key]);
    }
    
    
    /**
     * 微信支付
     * https://b59.admin168.net/app/index.php?i=3&c=entry&a=wxapp&do=pay&m=wjyk_recycle
     * @param
     *        openid
     * @param
     *        money  支付金额
     */
    public function doPagePay()
    {
        global $_W,$_GPC;
        $openid = $_GPC['openid'];
        $money = $_GPC['price'];
        $payconfig = pdo_get('wjyk_nhyk_payconfig',array(
            'uniacid' => $_W['uniacid']
        ));
        $url = "https://api.mch.weixin.qq.com/pay/unifiedorder";
        $nonce_str = $this->getNonceStr(32);
        if($payconfig['pay_type'] == 2){
            $send_data = array(
                'appid' => $payconfig['appid'],
                'mch_id' => $payconfig['mchid'],
                'sub_appid' => $payconfig['sub_appid'],
                'sub_mch_id' => $payconfig['sub_mchid'],
                'nonce_str' => $nonce_str,
                'body' => "支付",
                'out_trade_no' => time() + 3600,
                'total_fee' => $money*100,
                'notify_url' =>$_W['siteroot']."wjyk_nhyk/pages/index/index",
                'spbill_create_ip' => $_W['clientip'],
                'trade_type' => 'JSAPI',
                'sub_openid' => $openid
            );
        }else{
            $send_data = array(
                'appid' => $payconfig['appid'],
                'mch_id' => $payconfig['mchid'],
                'nonce_str' => $nonce_str,
                'body' => "支付",
                'out_trade_no' => time() + 3600,
                'total_fee' => $money*100,
                'notify_url' => $_W['siteroot']."web/notify.php",
                'spbill_create_ip' => $_W['clientip'],
                'trade_type' => 'JSAPI',
                'attach' => '支付',
                'openid' => $openid
            );
        }
        $sign = $this->MakeSign($send_data, $payconfig['pay_key']);
        $send_data['sign'] = $sign;
        $result = $this->FromXml($this->wtw_request($url, $this->ToXml($send_data)));
        if ($result['return_code'] == 'SUCCESS' && $result['result_code'] !="FAIL" ) {
            echo json_encode(['code'=>'0','msg'=>'','data'=>$this->sign_pay($result)]);
        } else {
            echo json_encode(['code'=>'1','msg'=>$result]);
        }
    }
    
    public function doPageThirdPay(){
        global $_W,$_GPC;
        $openid = $_GPC['openid'];
        $price = $_GPC['price'];
        header("Content-type: text/html; charset=utf-8");
        require "sdk/RsaUtil.php";
        require "sdk/HttpUtil.php";
        $payconfig = pdo_get('wjyk_nhyk_payconfig',array(
            'uniacid' => $_W['uniacid']
        ));
        //var_dump($payconfig);
        $rsaUtil = new RsaUtil(IA_ROOT.'/addons/wjyk_nhyk/cert/'.$_W['uniacid'].'/baofu.pfx',IA_ROOT.'/addons/wjyk_nhyk/cert/'.$_W['uniacid'].'/baofu.cer',$payconfig['cer_pwd']);
        $httpUtil = new HttpUtil();
        require_once "request/TransContent.php";
        require_once "request/TransDataUtils.php";
        
        
        $params = new TransContent();
        $params -> _set("method","POLYMERIZE_MAIN_SWEPTN");
        $params -> _set("version","1.0");
        $params -> _set("format","json");
        $params -> _set("merchantNo",$payconfig['bf_mchid']);
        $params -> _set("signType","CFCA");
        $params -> _set("signContent","");
        $params -> _set("sign","");
        
        
        $body = new TransContent();
        date_default_timezone_set("Asia/Shanghai");
        $body -> _set("transNo", "WechatPay".date("YmdHis"));//商户订单号
        $body -> _set("payType", "WECHAT_APPLET");//支付类型
        $body -> _set("orderAmt", "1");//交易金额
        $body -> _set("goodsInfo", "测试");//商品信息摘要
        $body -> _set("returnUrl", "");//后台回调地址
        $body -> _set("requestDate",date("YmdHis"));//请求时间
        $body -> _set("pageUrl", "");//前台跳转地址
        $body -> _set("extend", "自定义字段");//原样返回字段
        $body -> _set("memo", "");
        //$ttt = date('YmdHis',strtotime('+2 seconds'));
        $memo = new TransContent();
        $memo -> _set("paylimit", "");//限制卡类型
        $memo -> _set("timeExpire", date('YmdHis',strtotime('+30 seconds')));//交易结束时间
       // $memo -> _set("openid", "oUpF8uMuAJO_M2pxb1Q9zNjWeS6o");
        $memo -> _set("openid", $openid);
        $memo -> _set("appid", "wx7784dcc8307d40fb");
        //$memo -> _set("shareInfo", "100000178,1");//分账域，分账时必填
        $memo -> _set("spbillCreateIp", "171.2.2.149");//终端用户IP
        $memo -> _set("longitude", "171.21");//经度
        $memo -> _set("latitude", "22.33");//纬度
        $memojson = $memo -> _getArray2Json();
        $body -> _set("memo",$memojson);
        $bodyjson = TransDataUtils :: _array2Json($body -> _getValues());
        $encrypted = $rsaUtil -> encryptedByPrivateKey($bodyjson);
        $params -> _set("signContent",$encrypted);
        $array = $params -> _getValues();
        $request_url = "https://test-api.huishouqian.com/api/acquiring";
        $httpResult = $httpUtil -> post2($params -> _getValues(),$request_url);
        $bodyArray = TransDataUtils :: _json2Array($httpResult);
        $decryptBody = $rsaUtil -> decryptByPublicKey($bodyArray['result']);
        $data = json_decode($decryptBody,JSON_UNESCAPED_UNICODE);
        if(!empty($data['qrCode'])){
            $data['qrCode'] = json_decode($data['qrCode'],JSON_UNESCAPED_UNICODE);
        }
        //$data = json_decode($decryptBody);
       // var_dump($data);
      //  var_dump($decryptBody);
        
       /*  var_dump($decryptBody);
        var_dump($expression);
        $data = json_encode($decryptBody); */
        ob_clean();
        echo json_encode(['code'=>'0','msg'=>'','data'=>$data],JSON_UNESCAPED_UNICODE);
    }

    public function sign_pay($arr)
    {
        global $_W, $_GPC;
        $payconfig = pdo_get('wjyk_nhyk_payconfig',array(
            'uniacid' => $_W['uniacid']
        ));
        $package = "prepay_id=" . $arr['prepay_id'];
        $signType = "MD5";
        $time = (int) time();
        $array = array(
            'appId' => $payconfig['appid'],
            'nonceStr' => $arr['nonce_str'],
            'package' => $package,
            'signType' => $signType,
            'timeStamp' => (string) $time
        );
        $sign_str = $this->MakeSign($array, $payconfig['pay_key']);
    
        $array['paySign'] = $sign_str;
        return $array;
    }
    
    // 创建随机字符串
    public function createNoncestr($length = 16) {
        $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        $str = "";
        for($i = 0; $i < $length; $i ++) {
            $str .= substr ( $chars, mt_rand ( 0, strlen ( $chars ) - 1 ), 1 );
        }
        return $str;
    }
    
    /**
     *
     * 产生随机字符串，不长于32位
     *
     * @param int $length
     * @return 产生的随机字符串
     */
    public static function getNonceStr($length = 32)
    {
        $chars = "abcdefghijklmnopqrstuvwxyz0123456789";
        $str = "";
        for ($i = 0; $i < $length; $i ++) {
            $str .= substr($chars, mt_rand(0, strlen($chars) - 1), 1);
        }
        return $str;
    }
    
    public function FromXml($xml)
    {
        // 将XML转为array
        // 禁止引用外部xml实体
        libxml_disable_entity_loader(true);
        $arr = json_decode(json_encode(simplexml_load_string($xml, 'SimpleXMLElement', LIBXML_NOCDATA)), true);
        return $arr;
    }
    
    public function ToXml($array)
    {
        $xml = "<xml>";
        foreach ($array as $key => $val) {
            if ($key != 'body') {
                $xml .= "<" . $key . ">" . $val . "</" . $key . ">";
            } else {
                $xml .= "<" . $key . "><![CDATA[" . $val . "]]></" . $key . ">";
            }
        }
        $xml .= "</xml>";
        return $xml;
    }
    
    public function MakeSign($array, $key)
    {
        // 签名步骤一：按字典序排序参数
        ksort($array);
        $string = $this->ToUrlParams($array);
        // 签名步骤二：在string后加入KEY
        $string = $string . "&key=" . $key;
        // 签名步骤三：MD5加密
        $string = md5($string);
        // 签名步骤四：所有字符转为大写
        $result = strtoupper($string);
        return $result;
    }
     
    
    public function ToUrlParams($arr)
    {
        $buff = "";
        foreach ($arr as $k => $v) {
            if ($k != "sign" && $v != "" && ! is_array($v)) {
                $buff .= $k . "=" . $v . "&";
            }
        }
    
        $buff = trim($buff, "&");
        return $buff;
    }
    
    /**
     * [wtw_request description]模版请求
     *
     * @param [type] $url
     *            [description]
     * @param [type] $data
     *            [description]
     * @return [type] [description]
     */
    public function wtw_request($url, $data = null)
    {
        $curl = curl_init(); // 启动一个CURL会话
        curl_setopt($curl, CURLOPT_URL, $url); // 要访问的地址
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false); // 对认证证书来源的检查
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false); // 从证书中检查SSL加密算法是否存在
        curl_setopt($curl, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']); // 模拟用户使用的浏览器
        if ($data != null) {
            curl_setopt($curl, CURLOPT_POST, 1); // 发送一个常规的Post请求
            curl_setopt($curl, CURLOPT_POSTFIELDS, $data); // Post提交的数据包
        }
        curl_setopt($curl, CURLOPT_TIMEOUT, 300); // 设置超时限制防止死循环
        curl_setopt($curl, CURLOPT_HEADER, 0); // 显示返回的Header区域内容
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1); // 获取的信息以文件流的形式返回
        $info = curl_exec($curl); // 执行操作
        if (curl_errno($curl)) {
            // echo 'Errno:'.curl_getinfo($curl);//捕抓异常
            // dump(curl_getinfo($curl));
        }
        return $info;
    }
    
    
    function sendCmd($url, $data)
    {
        $curl = curl_init(); // 启动一个CURL会话
        curl_setopt($curl, CURLOPT_URL, $url); // 要访问的地址
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0); // 对认证证书来源的检测
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 2); // 从证书中检查SSL加密算法是否存在
        curl_setopt($curl, CURLOPT_HTTPHEADER, array(
            'Expect:'
        )); // 解决数据包大不能提交
        curl_setopt($curl, CURLOPT_FOLLOWLOCATION, 1); // 使用自动跳转
        curl_setopt($curl, CURLOPT_AUTOREFERER, 1); // 自动设置Referer
        curl_setopt($curl, CURLOPT_POST, 1); // 发送一个常规的Post请求
        curl_setopt($curl, CURLOPT_POSTFIELDS, $data); // Post提交的数据包
        curl_setopt($curl, CURLOPT_TIMEOUT, 30); // 设置超时限制防止死循
        curl_setopt($curl, CURLOPT_HEADER, 0); // 显示返回的Header区域内容
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1); // 获取的信息以文件流的形式返回
    
        $tmpInfo = curl_exec($curl); // 执行操作
        if (curl_errno($curl)) {
            echo 'Errno' . curl_error($curl);
        }
        curl_close($curl); // 关键CURL会话
        return $tmpInfo; // 返回数据
    }
    
    
    //我的地址库
    public function doPageMy_address(){
        global $_GPC, $_W;
        $address=pdo_fetchall("select * from ".tablename('wjyk_nhyk_address')." where uniacid=:uniacid and uid=:uid  order by is_default desc,id desc",array(':uid'=>$_GPC['uid'],':uniacid'=>$_W['uniacid']));
        $this->result(0,"",$address);
    }
    /**
     * 地址详情
     * https://b69.admin168.net/app/index.php?i=2&c=entry&a=wxapp&do=address_info&m=wjyk_jdsc_wxapp
     * @param
     *            id 地址id
     */
    public function doPageAddress_info(){
        global $_GPC, $_W;
        $address=pdo_fetch("select * from ".tablename('wjyk_nhyk_address')." where id=:id",array(':id'=>$_GPC['id']));
        $this->result(0,"",$address);
    }
    public function doPageDel_address(){
        global $_GPC, $_W;
        $id=$_GPC['id'];
        $res=pdo_delete("wjyk_nhyk_address",array('id'=>$id));
        if($res){
            $this->result(0,"删除成功");
        }else{
            $this->result(1,"删除失败，请稍后再试");
        }
    
    }
    
    /**
     * 编辑地址
     * https://b69.admin168.net/app/index.php?i=2&c=entry&a=wxapp&do=edit_address&m=wjyk_jdsc_wxapp
     *
     * @param
     *            id 编辑时传
     * @param
     *            uid
     * @param
     *            province 省
     * @param
     *            city 市
     * @param
     *            district 区
     * @param
     *            address 详细地址
     * @param
     *            realname 姓名
     * @param
     *            mobile 电话
     * @param
     *            is_default 1-非默认  2-默认
     */
    public function doPageEdit_address(){
        global $_GPC, $_W;
        $id=$_GPC['id'];
        $data=array(
            'uid'=>$_GPC['uid'],
            'province'=>$_GPC['province'],
            'city'=>$_GPC['city'],
            'district'=>$_GPC['district'],
            'address'=>$_GPC['address'],
            'realname'=>$_GPC['realname'],
            'mobile'=>$_GPC['mobile'],
            'is_default'=>$_GPC['is_default'],
            'uniacid'=>$_W['uniacid'],
        );
        if(intval($id)>0){
            if($data['is_default']==2){
                pdo_update("wjyk_nhyk_address",array('is_default'=>1),array('uid'=>$_GPC['uid'],'is_default'=>2));
            }
            $res=pdo_update("wjyk_nhyk_address",$data,array('id'=>$id));
        }else{
            $address=pdo_get("wjyk_nhyk_address",array('uid'=>$_GPC['uid']));
            if(!$address){
                $data['is_default']=2;
            }else{
                if($data['is_default']==2){
                    pdo_update("wjyk_nhyk_address",array('is_default'=>1),array('uid'=>$_GPC['uid'],'is_default'=>2));
                }
            }
            $res=pdo_insert("wjyk_nhyk_address",$data);
        }
        if($res){
            $this->result(0,"编辑地址成功");
        }else{
            $this->result(1,"编辑失败，请确认是否更改过信息！");
        }
    }
    
    /**
     * 获取默认地址
     * https://b69.admin168.net/app/index.php?i=2&c=entry&a=wxapp&do=get_address&m=wjyk_jdsc_wxapp
     * @param
     *            uid
     */
    public function doPageGet_address(){
        global $_GPC, $_W;
        $uid = $_GPC['uid'];
        $address=pdo_fetch("select * from ".tablename('wjyk_nhyk_address')." where uid=:uid order by is_default desc,id desc limit 1 ",array(':uid'=>$uid));
        if(!$address){
            $address=array();
        }
        $this->result(0,"success",$address);
    }
    
    /**
     * 设置默认地址
     * https://b69.admin168.net/app/index.php?i=2&c=entry&a=wxapp&do=set_address&m=wjyk_jdsc_wxapp
     * @param
     *            uid
     * @param
     *            addressid  地址id
     */
    public function doPageSet_address(){
        global $_GPC, $_W;
        $uid = $_GPC['uid'];
        $id = intval($_GPC['addressid']);
    
        pdo_update('wjyk_nhyk_address', array(
            'is_default' => 1
        ), array(
            'uid' => $uid,
            'uniacid' => $_W['uniacid']
        ));
    
        $result = pdo_update('wjyk_nhyk_address', array(
            'is_default' => 2
        ), array(
            'id' => $id,
            'uid' => $uid,
            'uniacid' => $_W['uniacid']
        ));
        if (! empty($result)) {
            return self::result(0, '设置成功');
        } else {
            return self::result(-1, '设置失败');
        }
    }
    
    
    /**
     * 添加购物车
     * https://b69.admin168.net/app/index.php?i=2&c=entry&a=wxapp&do=add_car&m=wjyk_jdsc_wxapp
     * @param
     *            uid
     * @param
     *            id 商品id
     * @param
     *            type  1-详情页添加  2-购物车页编辑
     * @param
     *            num 数量
     * @param
     *            spec
     */
    public function doPageAdd_car(){
        global $_W,$_GPC;
        $uid=$_GPC['uid'];
        $goods_id=$_GPC['id'];
        $type=$_GPC['type'];
        $type=$_GPC['car_type'];
         
        if(!empty($_GPC['spec'])){
            $car=pdo_get("wjyk_nhyk_car",array('uid'=>$uid,'goods_id'=>$goods_id,'spec'=>$_GPC['spec']));
        }else{
            $car=pdo_get("wjyk_nhyk_car",array('uid'=>$uid,'goods_id'=>$goods_id));
        }
        if($type==1){
            if($car){
                pdo_update("wjyk_nhyk_car",array('num +='=>$_GPC['num']),array('id'=>$car['id']));
                $this->result(0,"编辑购物车成功");
            }else{
                $data=array(
                    'uid'=>$uid,
                    'goods_id'=>$goods_id,
                    'num'=>$_GPC['num'],
                    'spec' => $_GPC['spec'],
                    'car_type' => $_GPC['car_type'],
                    'uniacid'=>$_W['uniacid'],
                    'createtime'=>time()
                );
                pdo_insert("wjyk_nhyk_car",$data);
                $this->result(0,"添加购物车成功");
            }
        }else{
            if($car){
                if($car['num']!=$_GPC['num']){
                    pdo_update("wjyk_nhyk_car",array('num '=>$_GPC['num']),array('id'=>$car['id']));
                }
                $this->result(0,"编辑购物车成功");
            }else{
                $data=array(
                    'uid'=>$uid,
                    'goods_id'=>$goods_id,
                    'num'=>$_GPC['num'],
                    'spec' => $_GPC['spec'],
                    'car_type' => $_GPC['car_type'],
                    'uniacid'=>$_W['uniacid'],
                    'createtime'=>time()
                );
                pdo_insert("wjyk_nhyk_car",$data);
                $this->result(0,"添加购物车成功");
            }
    
        }
    }
    
    
    
    
    public function doPageComment(){
        global $_W,$_GPC;
        $page = $_GPC['page'];
        $page = max(1, intval($page));
        $limit = 10;
        $condition = " a.uniacid = :uniacid AND a.goods_id = :goods_id ";
        $params[':uniacid'] = $_W['uniacid'];
        $params[':goods_id'] = $_GPC['goods_id'];
        if(!empty($_GPC['fraction'])){
            if($_GPC['fraction']==1){
                $condition .= " and a.fraction < :fraction ";
            }elseif($_GPC['fraction']==2){
                $condition .= " and a.fraction = :fraction ";
            }elseif($_GPC['fraction']==3){
                $condition .= " and a.fraction > :fraction ";
            }
            $params[':fraction'] = 3;
        }
        $data = pdo_fetchall("SELECT a.*,b.nickname,b.avatar FROM ".tablename('wjyk_nhyk_comment')."  as a left join  ".tablename('wjyk_nhyk_user')." as b on a.uid=b.id WHERE " . $condition ." order by a.createtime desc LIMIT ". ($page - 1) * $limit . ',' . $limit ,$params);
        foreach ($data as $k=>$v){
            
            $data[$k]['createtime']=date("Y-m-d H:i",$v['createtime']);
            
            if($v['c_type']==2){
                if(!empty($v['img'])){
                    if(is_serialized($v['img'])){
                        $data[$k]['img'] = unserialize($v['img']);
                    }else{
                        $data[$k]['img'] = explode(",",$v['img']);
                    }
                }
            }else{
                $data[$k]['img']=array();
            } 
            
        }
        $count = pdo_fetchcolumn("SELECT COUNT(*) as count FROM ".tablename('wjyk_nhyk_comment')."  as a left join  ".tablename('wjyk_nhyk_user')." as b on a.uid=b.id WHERE " . $condition , $params);
        
        $remainder=$count%10;
        if($remainder>0){
            $remainder=1;
        }else{
            $remainder=0;
        }
        $total= $count==0 ? 0 : intval($count/10)+$remainder;
        $this->result(0,"",array('comment'=>$data,'total'=>$total,'page'=>$page));
    }
    
    /**
     * 添加多个评论
     * https://b69.admin168.net/app/index.php?i=2&c=entry&a=wxapp&do=add_multi_comment&m=wjyk_jdsc_wxapp
     * @param
     *            uid
     * @param
     *            order_id 订单id
     * @param
     *            goods_id 商品id  字符串  用,隔开
     * @param
     *            fraction 分数
     * @param
     *            content 评价内容
     * @param
     *            c_type 1-文字  2-有图
     * @param
     *            img 图片  数组类型
     */
    public function doPageAdd_multi_comment(){
        global $_W,$_GPC;
        
        $order = pdo_get('wjyk_nhyk_order', array(
            'id' => $_GPC['order_id'],
            'uniacid' => $_W['uniacid']
        ));
        
        $img = htmlspecialchars_decode($_GPC['img'], ENT_QUOTES);
        $img = json_decode($img, true);
        
        $goodsidList = explode(",", $_GPC['goods_id']);
        
        $sql="INSERT INTO ".tablename('wjyk_nhyk_comment')." (uid,goods_id,fraction,content,c_type,img,uniacid,createtime,orderid) VALUES ";
        $time = time();
        
        foreach ($goodsidList as $k=>$v){
            $sql.="(".$_GPC['uid'].",".$v.",".$_GPC['fraction'].",'".$_GPC['content']."',".$_GPC['c_type'].",'".implode(",",$img)."',".$_W['uniacid'].",".$time.",".$_GPC['order_id']."),";
        }
        $sql=substr($sql,0,-1);
        pdo_query($sql);
        
        if($_GPC['fraction']<3){
            pdo_query("update  ".tablename('wjyk_nhyk_foods')." set different = different+1  where id in ({$_GPC['goods_id']})");
        }elseif($_GPC['fraction']==3){
            pdo_query("update  ".tablename('wjyk_nhyk_foods')." set medium = medium+1  where id in ({$_GPC['goods_id']})");
        }elseif($_GPC['fraction']>3){
            pdo_query("update  ".tablename('wjyk_nhyk_foods')." set good = good+1  where id in ({$_GPC['goods_id']})");
        }
        pdo_update("wjyk_nhyk_order",array('is_comment'=>2),array('id'=>$_GPC['order_id']));
        $this->result(0,"评论成功");
    }
    
    
    /**
     * 添加评论
     * https://b69.admin168.net/app/index.php?i=2&c=entry&a=wxapp&do=add_comment&m=wjyk_jdsc_wxapp
     * @param
     *            uid
     * @param
     *            order_id 订单id
     * @param
     *            goods_id 商品id
     * @param
     *            fraction 分数
     * @param
     *            content 评价内容
     * @param
     *            c_type 1-文字  2-有图
     * @param
     *            img 图片  数组类型
     */
    public function doPageAdd_comment(){
        global $_W,$_GPC;
        
        $order = pdo_get('wjyk_nhyk_order', array(
            'id' => $_GPC['order_id'],
            'uniacid' => $_W['uniacid']
        ));
        
        if(!empty($_GPC['goods_id'])){
            $goodsid = $_GPC['goods_id'];
        }else{
            $goodsid = $order['goods_id'];
        }
        
        
        
        $img = htmlspecialchars_decode($_GPC['img'], ENT_QUOTES);
        $img = json_decode($img, true);
        
        $data=array(
            'uid'=>$_GPC['uid'],
            'spec' => $order['spec'],
            'orderid' => $order['id'],
            'goods_id'=> $goodsid,
            'fraction'=>$_GPC['fraction'],
            'content'=>$_GPC['content'],
            'c_type'=>$_GPC['c_type'],
            'img'=>implode(",",$img),
            'uniacid'=>$_W['uniacid'],
            'createtime' =>time()
        );
        $res=pdo_insert("wjyk_nhyk_comment",$data);
        if($_GPC['fraction']<3){
            pdo_update("wjyk_nhyk_foods",array('different +='=>1),array('id'=>$goodsid));
        }elseif($_GPC['fraction']==3){
            pdo_update("wjyk_nhyk_foods",array('medium +='=>1),array('id'=>$goodsid));
        }elseif($_GPC['fraction']>3){
            pdo_update("wjyk_nhyk_foods",array('good +='=>1),array('id'=>$goodsid));
        }
        pdo_update("wjyk_nhyk_order",array('is_comment'=>2),array('id'=>$_GPC['order_id']));
        $this->result(0,"评论成功");
    }
    //删除评论
    public function doPageDel_comment(){
        global $_W,$_GPC;
        $res=pdo_delete("wjyk_nhyk_comment",array('id'=>$_GPC['id']));
        if($res){
            $this->result(0,"删除评论成功");
        }else{
            $this->result(0,"删除评论失败");
        }
    }
    
    
    
    
    //我的购物车
    public function doPageMy_car(){
        global $_W,$_GPC;
        $uid = $_GPC['uid'];
        $type = $_GPC['type'];
        $car=pdo_fetchall("select a.car_type，a.id,a.num,a.goods_id,a.spec,b.goods_name,b.cover,b.discount_price,b.stock,b.is_freight,b.freight,b.original_price from ".tablename('wjyk_nhyk_car')." as a
        left join ".tablename('wjyk_nhyk_goods')." as b on a.goods_id=b.id where a.uid=:uid and a.type = :type order by a.id desc ",array(':uid'=>$uid,"type"=>$type));
    
    
        $this->result(0,"",$car);
    }
    //删除购物车
    public function doPageDel_car(){
        global $_W,$_GPC;
        $list = htmlspecialchars_decode($_GPC['list'], ENT_QUOTES);
        $list = json_decode($list, true);
        $id="";
        foreach ($list as $k=>$v){
            $id.=$v.",";
        }
        $id=substr($id,0,-1);
        pdo_query("delete from ".tablename('wjyk_nhyk_car')." where id in ({$id})");
        $this->result(0,"删除购物车成功");
    }
    
    //删除购物车
    public function doPageDel_car_num(){
        global $_W,$_GPC;
        
        $id = $_GPC['id'];
        $num = $_GPC['num'];
        $result = pdo_update("wjyk_nhyk_car",array("num"=>$num),array("id"=>$id));
        if($result){
            
            $this->result(0,"购物车商品数量删除成功");
        }else{
            $this->result(-1,"购物车商品数量删除失败");
        }
    }
    
    
    function getRandNumber($start,$end,$length){
        //初始化变量为0
        $connt = 0;
        //建一个新数组
        $temp = array();
        while($connt < $length){
            $temp[] = mt_rand($start, $end);
            $data = array_flip(array_flip($temp));
            $connt = count($data);
        }
        shuffle($data);
        $str=implode(",", $data);
        $number=str_replace(',', '', $str);
        return $number;
    }
    
    public function getPayNo($text){
        return  $text . date('Ymd') . substr(implode(NULL, array_map('ord', str_split(substr(uniqid(), 7, 13), 1))), 0, 8);
    }
    
    public function bd_encrypt($gg_lon, $gg_lat)
    {
        $x_pi = 3.14159265358979324 * 3000.0 / 180.0;
        $x = $gg_lon;
        $y = $gg_lat;
        $z = sqrt($x * $x + $y * $y) - 0.00002 * sin($y * $x_pi);
        $theta = atan2($y, $x) - 0.000003 * cos($x * $x_pi);
        $bd_lon = $z * cos($theta) + 0.0065;
        $bd_lat = $z * sin($theta) + 0.006;
        // 保留小数点后六位
        $data['bd_lon'] = round($bd_lon, 6);
        $data['bd_lat'] = round($bd_lat, 6);
        return $data;
    }
    
    //BD-09(百度)坐标转换成GCJ-02(火星，高德)坐标
    //@param $longitude 百度经度
    //@param $latitude 百度纬度
    public function gd_encrypt($longitude,$latitude){
        $x_pi = 3.14159265358979324 * 3000.0 / 180.0;
        $x = $longitude - 0.0065;
        $y = $latitude - 0.006;
        $z = sqrt($x * $x + $y * $y) - 0.00002 * sin($y * $x_pi);
        $theta = atan2($y, $x) - 0.000003 * cos($x * $x_pi);
        $longitude = $z * cos($theta);
        $latitude = $z * sin($theta);
        $data['lng'] = round($longitude, 6);
        $data['lat'] = round($latitude, 6);
        return $data;
    }
    
    public function refund_request($url, $data = null,$useCert=false)
    {
        $curl = curl_init(); // 启动一个CURL会话
        curl_setopt($curl, CURLOPT_URL, $url); // 要访问的地址
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false); // 对认证证书来源的检查
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false); // 从证书中检查SSL加密算法是否存在
        curl_setopt($curl, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']); // 模拟用户使用的浏览器
        if ($data != null) {
            curl_setopt($curl, CURLOPT_POST, 1); // 发送一个常规的Post请求
            curl_setopt($curl, CURLOPT_POSTFIELDS, $data); // Post提交的数据包
        }
        curl_setopt($curl, CURLOPT_TIMEOUT, 300); // 设置超时限制防止死循环
        curl_setopt($curl, CURLOPT_HEADER, 0); // 显示返回的Header区域内容
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1); // 获取的信息以文件流的形式返回
        if($useCert){
            $certPath = '../cert/apiclient_cert.pem';//证书路径
            $keyPath = '../cert/apiclient_key.pem';//证书路径
    
            curl_setopt($curl,CURLOPT_SSLCERTTYPE,'PEM');
            curl_setopt($curl,CURLOPT_SSLCERT, dirname(__FILE__) . '/cert/apiclient_cert.pem');
    
            curl_setopt($curl,CURLOPT_SSLKEYTYPE,'PEM');
            curl_setopt($curl,CURLOPT_SSLKEY, dirname(__FILE__) . '/cert/apiclient_key.pem');
        }
    
        $info = curl_exec($curl); // 执行操作
        if (curl_errno($curl)) {
            $error = curl_errno($curl);
            echo "curl出错，错误码:$error" . "<br>";//捕抓异常
            curl_close($curl);
            return false;
        }
        return $info;
    }
    
    public function httpPost($url, $data) { // 模拟提交数据函数
        $curl = curl_init(); // 启动一个CURL会话
        curl_setopt($curl, CURLOPT_URL, $url); // 要访问的地址
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false); // 对认证证书来源的检查
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false); // 从证书中检查SSL加密算法是否存在
        curl_setopt($curl, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']); // 模拟用户使用的浏览器
        curl_setopt($curl, CURLOPT_POST, true); // 发送一个常规的Post请求
        curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($data)); // Post提交的数据包
        curl_setopt($curl, CURLOPT_TIMEOUT, 30); // 设置超时限制防止死循环
        curl_setopt($curl, CURLOPT_HEADER, 0); // 显示返回的Header区域内容
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true); // 获取的信息以文件流的形式返回
        curl_setopt($curl, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/json; charset=utf-8'
        )); //类型为json
        $result = curl_exec($curl); // 执行操作
        if (curl_errno($curl)) {
            echo 'Error POST' . curl_error($curl);
        }
        curl_close($curl); // 关键CURL会话
        return $result; // 返回数据
    }
    
    function httpGet($url)
    {
        // 初始化
        $ch = curl_init();
    
        curl_setopt($ch, CURLOPT_URL, $url);
        // 执行后不直接打印出来
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HEADER, false);
        // 跳过证书检查
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        // 不从证书中检查SSL加密算法是否存在
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
    
        // 执行并获取HTML文档内容
        $output = curl_exec($ch);
    
        // 释放curl句柄
        curl_close($ch);
    
        return $output;
    }
    
    
    private $dic = array(
    
        0=>'0', 1=>'1', 2=>'2', 3=>'3', 4=>'4', 5=>'5', 6=>'6', 7=>'7', 8=>'8',
    
        9=>'9', 10=>'A', 11=>'B', 12=>'C', 13=>'D', 14=>'E', 15=>'F', 16=>'G', 17=>'H',
    
        18=>'I',19=>'J', 20=>'K', 21=>'L', 22=>'M', 23=>'N', 24=>'O', 25=>'P', 26=>'Q',
    
        27=>'R',28=>'S', 29=>'T', 30=>'U', 31=>'V', 32=>'W', 33=>'X', 34=>'Y', 35=>'Z'
    
    );
    
    public function encodeID($int, $format=8) {
        
        $dics = $this->dic;
    
        $dnum = 36; //进制数
    
        $arr = array ();
    
        $loop = true;
    
        while ($loop) {
            $arr[] = $dics[bcmod($int, $dnum)];
    
            $int = bcdiv($int, $dnum, 0);
    
            if ($int == '0') {
                $loop = false;
    
            }
    
        }
    
        if (count($arr) < $format){
            $arr = array_pad($arr, $format, $dics[0]);
        }
       
        
        
        return implode('', array_reverse($arr));
    
    }
    
    public function decodeID($ids) {
        $dics = $this->dic;
    
        $dnum = 36; //进制数
    
        //键值交换
    
        $dedic = array_flip($dics);
    
        //去零
    
        $id = ltrim($ids, $dics[0]);
        $id = strrev($id);
        $v = 0;
        for ($i = 0, $j = strlen($id); $i < $j; $i++) {
            $v = bcadd(bcmul($dedic[$id {
                $i }
    
                ], bcpow($dnum, $i, 0), 0), $v, 0);
    
        }
        return $v;
    
    }
    
    /**
     * 扣款飞鹅打印
     * @param unknown $title
     * @param unknown $money
     * @param unknown $less
     * @param unknown $rel_money
     * @param unknown $mem_user
     * @param unknown $account_user
     */
    public function kg_printer($title,$money,$less,$rel_money,$mem_user,$account_user){
        $system = pdo_get('wjyk_nhyk_system',array(
            'uniacid' => $_W['uniacid']
        ));
        $content = '<CB>'.$system['name'].'</CB><BR>';
        $content .= '扣款时间：'.date('Y-m-d H:i:s',$time).'<BR>';
        $content .= '操作员：'.$account_user['username'].'<BR>';
        $content .= '扣款金额：'.$money.'元<BR>';
        $content .= '优惠金额：'.$less.'元<BR>';
        $content .= '实扣金额：'.$rel_money.'元<BR>';
        $content .= '会员名称：'.$mem_user['nickname'].'<BR>';
        $content .= '会员号：'.$mem_user['member_no'].'<BR>';
        $content .= '<BR><BR><BR><CUT>';//控制切纸
        
        $this->printer($content,$account_user['store_id']);
    }
    
    /**
     * 扣款飞鹅打印
     * @param unknown $title
     * @param unknown $money
     * @param unknown $less
     * @param unknown $rel_money
     * @param unknown $mem_user
     * @param unknown $account_user
     */
    public function foods_order_printer($store_name,$store_id,$lists,$remark,$rel_money,$addres,$name,$seat_number,$pickup_type,$receipt_type){

        $system = pdo_get('wjyk_nhyk_system',array(
            'uniacid' => $_W['uniacid']
        ));
  
        
        $content = '<CB>'.$store_name.'</CB><BR>';
        $content .= '--------------------------------<BR>';
        $content .= '下单时间: '.date('Y-m-d H:i:s',time())."<BR>";
        $content .= '<B>备注: '.$remark.'</B><BR>';
        
        if($pickup_type == 1){
            //店内
            $content .= '<B>用餐类型: 店内用餐</B><BR>';
            $content .= '<B>桌号: '.$seat_number.'</B><BR>';
        }else{
            $content .= '<B>用餐类型: 外卖</B><BR>';
            if($receipt_type == 1){
                $content .= '<B>收货方式: 到店自提</B><BR>';
            }else {
                $content .= '<B>收货方式: 配送</B><BR>';
            }
            
        }
        $content .= '--------------------------------<BR>';

        foreach($lists as $k=>$v){
            $content.=$v['foods_name'].'                   <RIGHT>';
            if($v['num']>1){
                $content .= 'X【'.$v['num'].'】';
            }else{
                $content .= 'X'.$v['num'];
            }
            $content .= '   ';
            $content .= $v['original_price']*$v['num'];
            $content .='</RIGHT><BR>';
        }
 
        $content .= '--------------------------------<BR>';
      
        $content .= '应付款　　　　　 　      '.$rel_money.'<BR>';
        $content .= '--------------------------------<BR>';
        if($pickup_type == 0){
            $content .= "地址:".$addres.'<BR>';
            $content .= "收货人名称:".$name.'<BR>';
        }
       
        $content .= '<BR><BR>#############完############<BR><CUT>';//控制切纸
        
   
        $this->printer($content,$store_id);
        
    }
    
    public function printer($content,$store_id){
      
        global $_GPC, $_W;
    
        $printer = pdo_getall('wjyk_nhyk_printer_set',array(
            'uniacid' => $_W['uniacid'],
            'store_id' =>$store_id
        ));
        
        
        header("Content-type: text/html; charset=utf-8");

        include 'HttpClient.class.php';

        $time = time(); // 请求时间

        foreach ($printer as $k=>$v){
   
            $msgInfo = array(
                'user' => $v['user'],
                'stime' => $time,
                'sig' => sha1($v['user'] . $v['ukey'] . $time),
                'apiname' => 'Open_printMsg',
                'sn' => $v['sncode'],
                'content' => $content,
                'times' => $time
            ); // 打印次数
            $client = new \HttpClient(IP, PORT);
      

            if (! $client->post(PATH, $msgInfo)) {
                
            } else {
                // 服务器返回的JSON字符串，建议要当做日志记录起来
                $result = $client->getContent();
          
              
            }
        }
    }
    
    
    
    /**
     * 计算佣金
     * @param unknown $uid
     * @param unknown $money
     */
    public function commission($uid,$money){
        global $_GPC, $_W;
    
        $setting = pdo_get("wjyk_nhyk_distribution_set", array(
            'uniacid' => $_W['uniacid']
        ));

        if ($setting['distribution_level'] != 0 ) { // 分销开启

            $is_distribution = pdo_getcolumn("wjyk_nhyk_user",array(
                'id' => $uid
            ),'is_distribution',1);
            if(!$is_distribution || $is_distribution == 1){
                //未到分销条件
                return ;
            }
            
            switch ($setting['distribution_level']) {
                case 1:
                    $commission[0] = $money * $setting['distribution_one'];
                    break;
                case 2:
                    $commission[0] = $money * $setting['distribution_one'];
                    $commission[1] = $money * $setting['distribution_two'];
                    break;
                case 3:
                    $commission[0] = $money * $setting['distribution_one'];
                    $commission[1] = $money * $setting['distribution_two'];
                    $commission[2] = $money * $setting['distribution_three'];
                    break;
                default:
                    $commission = array();
                    break;
            }

            $pid[0] = pdo_getcolumn("wjyk_nhyk_user", array(
                'id' => $uid
            ), 'pid', 1);
            if (! empty($pid[0])) {
                $pid[1] = pdo_getcolumn("wjyk_nhyk_user", array(
                    'id' => $pid[0]
                ), 'pid', 1);

                if(! empty($pid[1])){
                    $pid[2] = pdo_getcolumn("wjyk_nhyk_user", array(
                        'id' => $pid[1]
                    ), 'pid', 1);
                }

            }

            if (! empty($commission) && ! empty($pid)) {

                $t = time();
                $sql = " INSERT INTO " . tablename('wjyk_nhyk_commission') . " (uid,uniacid,pid,price,commission,c_type,addtime) VALUES ";
                foreach ($commission as $k => $v) {

                    if ($v < 0.01 || empty($pid[$k])) {
                        continue;
                    }
                    pdo_update("wjyk_nhyk_user", array(
                        'commission +=' => $v
                    ), array(
                        'id' => $pid[$k]
                    ));

                    $sql .= "(" . $uid . "," . $_W['uniacid'] . "," . $pid[$k] . "," . $money . "," . $v . ",1," . $t . "),";
                }
                $sql = substr($sql, 0, - 1);
                $sql .= ";";
                $res = pdo_query($sql);
            }
        }
       //更新积分
        $system = pdo_get("wjyk_nhyk_system", array(
            'uniacid' => $_W['uniacid']
        ));
        /* $zs_integral  = $system['consume_get_integral'] * $money;
        pdo_update("wjyk_nhyk_user",array("integral +="=>$zs_integral),array('uniacid'=>$_W['uniacid'],"id"=>$uid));
        $integral_log_data = [
            'uniacid'=>$_W['uniacid'],
            'ob_integral'=>$zs_integral,
            'type'=>2,
            'uid'=>$uid,
            'createtime'=>time()
        ];
        pdo_insert("wjyk_nhyk_integral",$integral_log_data); */
        $this->xf_integral($uid,$money);
    }
    
    public function xf_integral($uid,$money){
        global $_W;
        $system = pdo_get("wjyk_nhyk_system", array(
            'uniacid' => $_W['uniacid']
        ));
        $zs_integral  = $system['consume_get_integral'] * $money;
        pdo_update("wjyk_nhyk_user",array("integral +="=>$zs_integral),array('uniacid'=>$_W['uniacid'],"id"=>$uid));
        $integral_log_data = [
            'uniacid'=>$_W['uniacid'],
            'ob_integral'=>$zs_integral,
            'type'=>2,
            'uid'=>$uid,
            'createtime'=>time()
        ];
        pdo_insert("wjyk_nhyk_integral",$integral_log_data);
    }
    
    
   public function wxRefund($orderno, $money)
    {
        global $_W, $_GPC;
    
        $payconfig = pdo_get('wjyk_nhyk_payconfig', array(
            'uniacid' => $_W['uniacid']
        ));
        if (! $payconfig) {
            return - 1;
     
        }
        $url = "https://api.mch.weixin.qq.com/secapi/pay/refund";
        $send_data = array(
            'appid' => $payconfig['appid'],
            'mch_id' => $payconfig['mchid'],
            'nonce_str' => $this->getNonceStr(32),
            'out_trade_no' => $orderno,
            'out_refund_no' => $this->getPayNo('RE'),
            'total_fee' => $money * 100,
            'refund_fee' => $money * 100
        );
    
        $sign = $this->MakeSign($send_data, $payconfig['pay_key']);
    
        $send_data['sign'] = $sign;
    
        $result = $this->FromXml($this->refund_request($url, $this->ToXml($send_data), true));
    
    
        if (empty($result)) {
            return - 1;
       
        }
    
        if ($result['result_code'] == 'SUCCESS' && $result['return_code'] == 'SUCCESS') {
            return 0;
       
        } else {
            return - 1;
          
        }
    }
    
   public  function yeRefund($uid,$money)
    {
        global $_W, $_GPC;
        $result = pdo_update("wjyk_nhyk_user",array(
            "money +="=>$money
        ),array(
            'id' => $uid,
            'uniacid' => $_W['uniacid']
        ));
        if ($result) {
            return 0;
         
        } else {
            return - 1;
        
        }
    }
    
    
    public function updateQrcode($res,$type){
        global  $_W;
        $codearr = array();
        if(empty($res['qrcode']) && $type == 2){
            $url = 'wjyk_nhyk/pages/index/index';
            $codearr['qrcode'] = $this->get_qrcode($res['id'],$url,'user',2);
        }
        if(empty($res['member_qrcode'])&& $type == 1){
            $url = $res['member_no'];
            $codearr['member_qrcode'] = $this->get_qrcode($res['id'],$url,'user',1);
        }
        
        if(count($codearr)>0){
            pdo_update('wjyk_nhyk_user', $codearr, array(
                'uniacid' => $_W['uniacid'],
                'id' =>$res['id']
            ));
        }
    }
    
    
    
    

}