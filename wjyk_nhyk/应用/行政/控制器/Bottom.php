<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='http://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"http://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');
