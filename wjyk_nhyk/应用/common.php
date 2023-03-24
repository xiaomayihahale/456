<?php
// 应用公共文件

load()->library('qrcode');
define('PATH', '/Api/Open/'); // 接口路径
if (!function_exists('siteUrl')) {
    /**
     * 生成url
     * @param string $url 路由地址,类似于tp5的url()函数的第一个参数 如：index/index/hello
     * @param string $vars 路由参数
     * @param string $weDoor 微擎入口 web-Web端入口,app-App端入口
     * @return array|string
     */
    function siteUrl($url = '', $vars = '', $weDoor = '',$phpFileName = 'index')
    {
        global $_GPC, $_W;
        //判断是什么类型登录
        $phpFileName = "index";
        if(!empty($_W['user'])){
            $phpFileName = "index";
        }else if(!empty($_GPC['_merch_uid'])){
            $phpFileName = "nhykrout";
        }
        $uniacid = empty($_W["uniacid"])?$_W["__merch_uniacid"]:$_W["uniacid"];
        if(empty($weDoor)){
            $baseUrl = request()->baseUrl(true);
            if(isset($_GPC["i"])){
                list($i,$c,$a) = [$_W["uniacid"],"entry","site"];
            }else{
                list($c,$a) = ["site","entry"];
            }
        }else{
            //$baseUrl = "./index.php";
            $baseUrl = request()->domain() . "/" . $weDoor."/".$phpFileName.".php";
            if ("app" == $weDoor) {
                list($i,$c,$a) = [$uniacid,"entry","site"];
            } else {
                list($c,$a) = ["site","entry"];
            }
        }

        $url = array_filter(explode('/', $url));
        if (empty($url)) {
            list($do, $tpC, $tpA) = array($_GPC["do"], $_GPC["tp_c"], $_GPC["tp_a"]);
        } else {
            switch (count($url)) {
                case 1:
                    list($do, $tpC, $tpA) = array($_GPC["do"], $_GPC["tp_c"], $url[0]);
                    break;
                case 2:
                    list($do, $tpC, $tpA) = array($_GPC["do"], $url[0], $url[1]);
                    break;
                case 3:
                    list($do, $tpC, $tpA) = $url;
                    break;
            }
        }
        $url = $baseUrl . '?m=' . MODULE_NAME . "&";
        if (!empty($c)) {
            $url .= "c={$c}&";
        }
        if (!empty($a)) {
            $url .= "a={$a}&";
        }
        if (!empty($i)) {
            $url .= "i={$i}&";
        }
        if (!empty($do)) {
            $url .= "do={$do}&";
        }
        if (!empty($tpC)) {
            $url .= "tp_c={$tpC}&";
        }
        if (!empty($tpA)) {
            $url .= "tp_a={$tpA}";
        }
        if (!empty($vars)) {
            $queryString = http_build_query($vars, '', '&');
            $url .="&".$queryString;
        }
        return $url;
    }
}


/**
 * 微擎版权信息
 * @return string
 */
function weCopyright(){
    global  $_W;
    $html = '<div class="copyright">';
    if(!isset($_W['setting']['copyright']['footerleft'])||empty($_W['setting']['copyright']['footerleft'])){
        $html .='Powered by <a href="http://www.we7.cc"><b>微擎</b></a> v'.IMS_VERSION.' © 2014-2015 <a href="http://www.we7.cc">www.we7.cc</a>';
    }else{
        $html .= $_W['setting']['copyright']['footerleft'];
    }
    $html .= ' </div>';
    if(isset($_W['setting']['copyright']['icp'])&&!empty($_W['setting']['copyright']['icp'])){
        $html .='<div>备案号：<a href="http://www.miitbeian.gov.cn" target="_blank">'.$_W['setting']['copyright']['icp'].'</a></div>';
    }
    return $html;
}



function member_upgrade($uid,$price){
    global $_W,$_GPC;
    $user =  pdo_fetch("SELECT a.com_money,a.member_level FROM  ".tablename("wjyk_nhyk_user")." as a WHERE a.id=:uid AND a.uniacid=:uniacid"
        ,array("uniacid"=>$_W['uniacid'],"uid"=>$uid));


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
 * 计算佣金
 * @param unknown $uid
 * @param unknown $money
 */
function commission($uid,$money){
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

 function yeRefund($uid,$money)
{
    global $_W, $_GPC;
    $result = pdo_update("wjyk_nhyk_user",array(
        "money +="=>$money
    ),array(
        'id' => $uid,
        'uniacid' => $_W['uniacid']
    ));
  
    
}

 function wxRefund($orderno, $money)
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
        'nonce_str' => getNonceStr(32),
        'out_trade_no' => $orderno,
        'out_refund_no' => getPayNo('RE'),
        'total_fee' => $money * 100,
        'refund_fee' => $money * 100
    );
    
    $sign = MakeSign($send_data, $payconfig['pay_key']);
    
    $send_data['sign'] = $sign;
    
    $result = FromXml(refund_request($url, ToXml($send_data), true));
    
    
    if (empty($result)) {
        return - 1;
       
    }
    
    if ($result['result_code'] == 'SUCCESS' && $result['return_code'] == 'SUCCESS') {
        return 0;
  
    } else {
        return - 1;
  
      
    }
}


function getPayNo($text){
    return  $text . date('Ymd') . substr(implode(NULL, array_map('ord', str_split(substr(uniqid(), 7, 13), 1))), 0, 8);
}
/**
 *
 * 产生随机字符串，不长于32位
 *
 * @param int $length
 * @return
 */
function getNonceStr($length = 32)
{
    $chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    $str = "";
    for ($i = 0; $i < $length; $i ++) {
        $str .= substr($chars, mt_rand(0, strlen($chars) - 1), 1);
    }
    return $str;
}

 function ToXml($array)
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

function cz_success_msg($uid,$money,$type,$lessmoney,$time){
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
      /*   var_dump("充值1111");
        $account_api = WeAccount::create();
        var_dump("充值2222");
        $token = $account_api->getAccessToken();
        var_dump("充值333");
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
        var_dump("充值参数");
        
        var_dump($params);
        
        $url = 'https://api.weixin.qq.com/cgi-bin/message/subscribe/send?access_token='.$token;
        $re = sendCmd($url,$params);
         */
    }
    
    if($not_type == 3 || $not_type == 4){
        //短信通知

        $mobdata = ['name'=>$user['nickname'],"money"=>$money+$lessmoney];
       
        sendMobile(1,$mobdata,1,1,$user['mobile']);
    }
}

/**
 * 扣费成功订阅消息
 * https://b59.admin168.net/app/index.php?i=2&c=entry&a=wxapp&do=receiveSendSubMessage&m=wjyk_recycle
 * @param  orderid  订单id
 */
function kf_success_msg($uid,$money,$type,$lessmoney,$time,$store_name){
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
      
        /* $account_api = WeAccount::create();
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
        $re = sendCmd($url,$params); */
        
    }
    
    if($not_type == 3 || $not_type == 4){
        //短信通知
        $mobdata = ['name'=>$user['nickname'],"money"=>$money];
        sendMobile(1,$mobdata,1,2,$user['mobile']);
    }
}


/**
 * 助通云-短信验证
 * https://b59.admin168.net/app/index.php?i=2&c=entry&a=wxapp&do=sendMobile&m=wjyk_recycle
 *
 * @param
 *            integer telphone(电话号码)
 */
function sendMobile($type,$data,$temId,$dataType,$mobile)
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


function get_qrcode($uid,$toUrl, $folder,$type){
    global  $_W;

    $settings = pdo_fetch("SELECT appid,app_key FROM " . tablename('wjyk_nhyk_payconfig') . " WHERE  uniacid=:uniacid", [ ':uniacid' => $_W['uniacid']]);

    $appid = $settings['appid'];
    $secret =  $settings['app_key'];
    $name = time().rand(1,1000);

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
        $json_access_token = sendCmd($url_access_token, array());
        $arr_access_token = json_decode($json_access_token, true);
        $access_token = $arr_access_token['access_token'];
        $url = 'https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=' . $access_token;
       
        $qrcode = array(
            'scene'			=> $uid,
            'width'			=> 320,
            'page'=> $toUrl,
        );
        
      
        $result = sendCmd($url, json_encode($qrcode));
         
        var_dump($result);
       
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


/**
 * 计算两个日期间 相差时间 
 * @param unknown $date1 开始时间
 * @param unknown $date2 结束时间
 */
function getMonthNum($date1, $date2){
    $date1 = date_create($date1);
    $date2 = date_create($date2);
    $diff = date_diff($date1,$date2);
    return $diff;
}


 function MakeSign($array, $key)
{
    // 签名步骤一：按字典序排序参数
    ksort($array);
    $string = ToUrlParams($array);
    // 签名步骤二：在string后加入KEY
    $string = $string . "&key=" . $key;
    // 签名步骤三：MD5加密
    $string = md5($string);
    // 签名步骤四：所有字符转为大写
    $result = strtoupper($string);
    return $result;
}


 function ToUrlParams($arr)
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

function FromXml($xml)
{
    // 将XML转为array
    // 禁止引用外部xml实体
    libxml_disable_entity_loader(true);
    $arr = json_decode(json_encode(simplexml_load_string($xml, 'SimpleXMLElement', LIBXML_NOCDATA)), true);
    return $arr;
}

 function refund_request($url, $data = null,$useCert=false)
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








