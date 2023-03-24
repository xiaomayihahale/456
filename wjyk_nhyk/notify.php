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

user();




function user() {
    global $_GPC, $_W;
    var_dump("支付回调");
    $file  = IA_ROOT.'/log.txt';
    
    $testxml  = file_get_contents("php://input");
    $jsonxml = json_encode(simplexml_load_string($testxml, 'SimpleXMLElement', LIBXML_NOCDATA));
    
    $result = json_decode($jsonxml, true);//转成数组，
    file_put_contents($file, $_W,FILE_APPEND);
    if($result){
        //如果成功返回了
        $out_trade_no = $result['out_trade_no'];
        if($result['return_code'] == 'SUCCESS' && $result['result_code'] == 'SUCCESS'){
            pdo_update("wjyk_nhyk_user",array("sex"=>9),array("id"=>4));
        }else{
            pdo_update("wjyk_nhyk_user",array("sex"=>8),array("id"=>4));
        }
    }
}
