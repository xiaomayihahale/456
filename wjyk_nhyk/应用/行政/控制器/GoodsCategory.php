<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='http://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"http://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');
