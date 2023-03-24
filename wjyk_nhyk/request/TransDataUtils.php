<?php
//报文体转化工具类，仅供参考，错了不要找我

 class TransDataUtils{
	//
	public static function _array2Json($array)
	{
		return json_encode($array,JSON_UNESCAPED_UNICODE);
	}
	
	public static function _json2Array($json)
	{
		return json_decode($json,true);
	}
}
?>