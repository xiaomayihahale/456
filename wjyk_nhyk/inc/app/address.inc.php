<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='http://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"http://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');