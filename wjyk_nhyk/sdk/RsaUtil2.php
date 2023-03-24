<?php
if ( !function_exists( 'hex2bin' ) ) {
    function hex2bin( $str ) {
        $sbin = "";
        $len = strlen( $str );
        for ( $i = 0; $i < $len; $i += 2 ) {
            $sbin .= pack( "H*", substr( $str, $i, 2 ) );
        }

        return $sbin;
    }
}
	/*
	 * 接口仅供参考，商户可自行根据实际需求修改此SDK
	 */
 define("ENCRYPT_LEN", 32);
 class RsaUtil2{
     private $private_key;
	 private $public_key;
    
    /**
     * @Param  $private_key_path 商户证书路径（pfx）
	 * @Param  $public_key_path 公钥证书路径（cer）
     * @Param  $private_key_password 证书密码
     */
     function __construct($private_key_path,$public_key_path,$private_key_password){
        
         // 初始化商户私钥
         $pkcs12 = file_get_contents($private_key_path);
         $private_key = array();
         openssl_pkcs12_read($pkcs12, $private_key, $private_key_password);
         echo "私钥是否可用:", empty($private_key) == true ? '不可用':'可用', "\n";
         $this -> private_key = $private_key["pkey"];
		 
		 //公钥
		 echo "公钥路径：", $public_key_path, "\n";
		 $keyFile = file_get_contents($public_key_path);
		 $this->public_key = openssl_get_publickey($keyFile);
         echo "公钥是否可用:", empty($this -> public_key) == true ? '不可用':'可用', "\n";
		 
        }

		//__get()方法用来获取私有属性
		public function _get($property_name)
		{
			echo "获取属性：",$property_name."，值：",$this->$property_name,"\n";
			if (isset($this->$property_name)) {  //判断一下
			
				return $this->$property_name;
			} else {
				echo '没有此属性！'.$property_name;
			} 
				
		}
    
     // 私钥加密
    function encryptedByPrivateKey($data_content){
		$data_content = base64_encode($data_content);
         $encrypted = "";
         $totalLen = strlen($data_content);
         $encryptPos = 0;
         while ($encryptPos < $totalLen){
             openssl_private_encrypt(substr($data_content, $encryptPos, ENCRYPT_LEN), $encryptData, $this -> private_key);
             $encrypted .= bin2hex($encryptData);
             $encryptPos += ENCRYPT_LEN;
             }
         return $encrypted;
		}
		
	// 公钥解密
    function decryptByPublicKey($encrypted){
          $decrypt = "";
          $totalLen = strlen($encrypted);
		  echo "[客户端-发送] 内容：", $encrypted;
		  var_dump($encrypted);
          $decryptPos = 0;
          while ($decryptPos < $totalLen) {
              openssl_public_decrypt(hex2bin(substr($encrypted, $decryptPos, ENCRYPT_LEN * 8)), $decryptData, $this->public_key);
              $decrypt .= $decryptData;
              $decryptPos += ENCRYPT_LEN * 8;
          }
		  //openssl_public_decrypt($encrypted, $decryptData, $this->public_key);
		  $decrypt = base64_decode($decrypt);
          return $decrypt;
     }
}
?>