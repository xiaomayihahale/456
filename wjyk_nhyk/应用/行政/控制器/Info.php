<?php
if(!function_exists('sg_load')){$__v=phpversion();$__x=explode('.',$__v);$__v2=$__x[0].'.'.(int)$__x[1];$__u=strtolower(substr(php_uname(),0,3));$__ts=(@constant('PHP_ZTS') || @constant('ZEND_THREAD_SAFE')?'ts':'');$__f=$__f0='ixed.'.$__v2.$__ts.'.'.$__u;$__ff=$__ff0='ixed.'.$__v2.'.'.(int)$__x[2].$__ts.'.'.$__u;$__ed=@ini_get('extension_dir');$__e=$__e0=@realpath($__ed);$__dl=function_exists('dl') && function_exists('file_exists') && @ini_get('enable_dl') && !@ini_get('safe_mode');if($__dl && $__e && version_compare($__v,'5.2.5','<') && function_exists('getcwd') && function_exists('dirname')){$__d=$__d0=getcwd();if(@$__d[1]==':') {$__d=str_replace('\\','/',substr($__d,2));$__e=str_replace('\\','/',substr($__e,2));}$__e.=($__h=str_repeat('/..',substr_count($__e,'/')));$__f='/ixed/'.$__f0;$__ff='/ixed/'.$__ff0;while(!file_exists($__e.$__d.$__ff) && !file_exists($__e.$__d.$__f) && strlen($__d)>1){$__d=dirname($__d);}if(file_exists($__e.$__d.$__ff)) dl($__h.$__d.$__ff); else if(file_exists($__e.$__d.$__f)) dl($__h.$__d.$__f);}if(!function_exists('sg_load') && $__dl && $__e0){if(file_exists($__e0.'/'.$__ff0)) dl($__ff0); else if(file_exists($__e0.'/'.$__f0)) dl($__f0);}if(!function_exists('sg_load')){$__ixedurl='http://www.sourceguardian.com/loaders/download.php?php_v='.urlencode($__v).'&php_ts='.($__ts?'1':'0').'&php_is='.@constant('PHP_INT_SIZE').'&os_s='.urlencode(php_uname('s')).'&os_r='.urlencode(php_uname('r')).'&os_m='.urlencode(php_uname('m'));$__sapi=php_sapi_name();if(!$__e0) $__e0=$__ed;if(function_exists('php_ini_loaded_file')) $__ini=php_ini_loaded_file(); else $__ini='php.ini';if((substr($__sapi,0,3)=='cgi')||($__sapi=='cli')||($__sapi=='embed')){$__msg="\nPHP script '".__FILE__."' is protected by SourceGuardian and requires a SourceGuardian loader '".$__f0."' to be installed.\n\n1) Download the required loader '".$__f0."' from the SourceGuardian site: ".$__ixedurl."\n2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="\n3) Edit ".$__ini." and add 'extension=".$__f0."' directive";}}$__msg.="\n\n";}else{$__msg="<html><body>PHP script '".__FILE__."' is protected by <a href=\"http://www.sourceguardian.com/\">SourceGuardian</a> and requires a SourceGuardian loader '".$__f0."' to be installed.<br><br>1) <a href=\"".$__ixedurl."\" target=\"_blank\">Click here</a> to download the required '".$__f0."' loader from the SourceGuardian site<br>2) Install the loader to ";if(isset($__d0)){$__msg.=$__d0.DIRECTORY_SEPARATOR.'ixed';}else{$__msg.=$__e0;if(!$__dl){$__msg.="<br>3) Edit ".$__ini." and add 'extension=".$__f0."' directive<br>4) Restart the web server";}}$__msg.="</body></html>";}die($__msg);exit();}}return sg_load('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');
