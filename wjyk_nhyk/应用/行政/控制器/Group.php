<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='http://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"http://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');
