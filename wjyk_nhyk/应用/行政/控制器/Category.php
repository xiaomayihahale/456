<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='http://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"http://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');
