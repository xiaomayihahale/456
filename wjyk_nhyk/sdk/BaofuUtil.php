<?php
require ('../sdk/RsaUtil.php');
require ('../sdk/HttpUtil.php');
require ('../request/TransContent.php');
require ('../request/TransDataUtils.php');
class BaofuUtil{
     private $rsaUtil;
	 private $public_key;
     
	 function __construct($private_key_path,$public_key_path,$private_key_password){
	     
	     
	     $this->$rsaUtil = new RsaUtil($private_key_path,$public_key_path,$private_key_password);
	     
	 }
	 
	 public function getParams($mechid){
	     $params = new TransContent();
	     $params -> _set("method","POLYMERIZE_MAIN_SWEPTN");
	     $params -> _set("version","1.0");
	     $params -> _set("format","json");
	     $params -> _set("merchantNo",$mechid);
	     $params -> _set("signType","CFCA");
	     $params -> _set("signContent","");
	     $params -> _set("sign","");
	     return $params;
	 }
	 
	 
	 public function getBodys($money,$goodsinfo,$return_url,$pageUrl,$extend){
	     $body = new TransContent();
	     date_default_timezone_set("Asia/Shanghai");
	     $body -> _set("transNo", "WechatPay".date("YmdHis"));//商户订单号
	     $body -> _set("payType", "WECHAT_APPLET");//支付类型
	     $body -> _set("orderAmt", $money);//交易金额
	     $body -> _set("goodsInfo", $goodsinfo);//商品信息摘要
	     $body -> _set("returnUrl", $return_url);//后台回调地址
	     $body -> _set("requestDate",date("YmdHis"));//请求时间
	     $body -> _set("pageUrl", $pageUrl);//前台跳转地址
	     $body -> _set("extend", $extend);//原样返回字段
	     $body -> _set("memo", "");
	 }
	 
	 
	 public function getMemo($openid,$appid){
	     $memo = new TransContent();
	     $memo -> _set("paylimit", "");//限制卡类型
	     $memo -> _set("timeExpire", "");//交易结束时间
	     $memo -> _set("openid", $openid);
	    // $memo -> _set("appid", "wx7784dcc8307d40fb");
	     $memo -> _set("appid", $appid);
	     //$memo -> _set("shareInfo", "100000178,1");//分账域，分账时必填
	     $memo -> _set("spbillCreateIp", "171.2.2.149");//终端用户IP
	     $memo -> _set("longitude", "171.21");//经度
	     $memo -> _set("latitude", "22.33");//纬度
	     return $params;
	 }
	 
	 
	 

}
?>