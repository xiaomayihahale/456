<?php
 class HttpUtil{
	
	function post($array,$request_url){
		//echo "method=",$array['method'],"\r\nversion=",$array['version'],"\r\nformat=",$array['format'],"\r\nsignType=",$array['signType'],"\r\nsignContent=",$array['signContent'],"\r\nsign=",$array['sign'],"发送地址：",$request_url,"\r\n";
		$postData = array(
			"method" => $array['method'],
			"version" => $array['version'],
			"format" => $array['format'],
			"signType" => $array['signType'],
			"signContent" => $array['signContent'],
			"merchantNo" => $array['merchantNo'],
			"sign" => $array['sign']
		);
		
		$postData = http_build_query($postData);
		//echo "[客户端-发送] 发送地址：".$request_url," \r\n内容：".$postData. "\r\n";
		$context = array(
			'http' => array(
				'method' => 'POST',
				'header' => 'Content-type: application/x-www-form-urlencoded',
				"content:".$postData
				)
		);
		 $streamPostData = stream_context_create($context);
		// echo $request_url. "\n";
		 $httpResult = file_get_contents($request_url, false, $streamPostData);
		 
		 return $httpResult;
	}
	
	
	function post2($array,$request_url){
		$postData = array(
			"method" => $array['method'],
			"version" => $array['version'],
			"format" => $array['format'],
			"signType" => $array['signType'],
			"signContent" => $array['signContent'],
			"merchantNo" => $array['merchantNo'],
			"sign" => $array['sign']
		);
		
		$postData = http_build_query($postData);
	//	echo "[客户端-发送] 发送信息：".$request_url,"?".$postData. "\r\n";
		$headers = array('Content-Type: application/x-www-form-urlencoded');
		$curl = curl_init(); // 启动一个CURL会话
		curl_setopt($curl, CURLOPT_URL, $request_url); // 要访问的地址
		curl_setopt($curl, CURLOPT_AUTOREFERER, 1); // 自动设置Referer
		curl_setopt($curl, CURLOPT_POST,1); // 发送一个常规的Post请求
		curl_setopt($curl, CURLOPT_POSTFIELDS, $postData); // Post提交的数据包
		curl_setopt($curl, CURLOPT_TIMEOUT, 30); // 设置超时限制防止死循环
		curl_setopt($curl, CURLOPT_HEADER, 0); // 显示返回的Header区域内容
		curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1); // 获取的信息以文件流的形式返回
		curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
		curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
		curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);
		
		$httpResult = curl_exec($curl); // 执行操作
		if (curl_errno($curl)) {
			echo 'Errno'.curl_error($curl);//捕抓异常
		}
		curl_close($curl); // 关闭CURL会话
		return $httpResult;
	}
	
	

}
?>