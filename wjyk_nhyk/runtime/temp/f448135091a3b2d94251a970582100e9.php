<?php /*a:1:{s:81:"D:\phpstudy_pro\WWW\addons\wjyk_nhyk\application\admin\view\attachment\index.html";i:1639920798;}*/ ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>附件设置</title>
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <link rel="stylesheet" href="../addons/wjyk_nhyk/public/static/layuiadmin/layui/css/layui.css" media="all">
    <link rel="stylesheet" href="../addons/wjyk_nhyk/public/static/layuiadmin/style/admin.css" media="all">
    <style>
		.layui-form-label{
			width:115px;
        }
		.layui-input-block{
			margin-left:145px;
		}
        form{
            padding-right:15px ;
        }
        
    </style>
</head>
<body>
<form class="layui-form" style="margin-top:21px;">

  <div class="layui-form-item">
    <label class="layui-form-label">服务器</label>
    <div class="layui-input-block" id="type">
      <input type="radio" name="type" value="1" title="本地" <?php if($srdb['type'] == '1' || $srdb['type'] == ''): ?>checked<?php endif; ?> lay-filter="aaa">
      <input type="radio" name="type" value="2" title="七牛" <?php if($srdb['type'] == '2'): ?>checked<?php endif; ?> lay-filter="aaa">
      <input type="radio" name="type" value="3" title="阿里云" <?php if($srdb['type'] == '3'): ?>checked<?php endif; ?> lay-filter="aaa"> 
      <input type="radio" name="type" value="4" title="腾讯云" <?php if($srdb['type'] == '4'): ?>checked<?php endif; ?> lay-filter="aaa">
    </div>
  </div>
  
  


  <div class="qiniu" style="display: none;">
      	<div class="layui-form-item">
		    <label class="layui-form-label">Accesskey</label>
		    <div class="layui-input-block">
		      <input type="text" name="qn_accesskey"   autocomplete="off" class="layui-input" value="<?php echo htmlentities($srdb['qn_accesskey']); ?>">
		       <div class="layui-form-mid layui-word-aux">用于签名的公钥</div>
		    </div>
		  </div>
	  
		  <div class="layui-form-item">
		    <label class="layui-form-label">Secretkey</label>
		    <div class="layui-input-block">
		      <input type="text" name="qn_secretkey"   autocomplete="off" class="layui-input" value="<?php echo htmlentities($srdb['qn_secretkey']); ?>">
		      <div class="layui-form-mid layui-word-aux">用于签名的私钥</div>
		    </div>
		  </div>
	  	 <div class="layui-form-item">
		    <label class="layui-form-label">Bucket</label>
		    <div class="layui-input-block">
		      <input type="text" name="qn_bucket"   autocomplete="off" class="layui-input" value="<?php echo htmlentities($srdb['qn_bucket']); ?>">
		      <div class="layui-form-mid layui-word-aux">请保证bucket为可公共读取的</div>
		    </div>
		  </div>
		  <div class="layui-form-item">
		    <label class="layui-form-label">URL</label>
		    <div class="layui-input-block">
		      <input type="text" name="qn_url"   autocomplete="off" class="layui-input" value="<?php echo htmlentities($srdb['qn_url']); ?>">
		      <div class="layui-form-mid layui-word-aux">七牛支持用户自定义访问域名。注：url开头加http://或https://结尾不加 ‘/’例：http://abc.com</div>
		    </div>
		  </div>
	  
		 
  	  </div>
  	  
  	    <div class="tx" style="display: none;">
	      	<div class="layui-form-item">
			    <label class="layui-form-label">APPID</label>
			    <div class="layui-input-block">
			      <input type="text" name="tx_appid"   autocomplete="off" class="layui-input" value="<?php echo htmlentities($srdb['tx_appid']); ?>">
			      <div class="layui-form-mid layui-word-aux">APPID 是您项目的唯一ID</div>
			    </div>
			  </div>
		  
			  <div class="layui-form-item">
			    <label class="layui-form-label">SecretID</label>
			    <div class="layui-input-block">
			      <input type="text" name="tx_secretid"   autocomplete="off" class="layui-input" value="<?php echo htmlentities($srdb['tx_secretid']); ?>">
			      <div class="layui-form-mid layui-word-aux">SecretID 是您项目的安全密钥，具有该账户完全的权限，请妥善保管</div>
			    </div>
			  </div>
			  
			  <div class="layui-form-item">
			    <label class="layui-form-label">SecretKEY</label>
			    <div class="layui-input-block">
			      <input type="text" name="tx_secretkey"   autocomplete="off" class="layui-input" value="<?php echo htmlentities($srdb['tx_secretkey']); ?>">
			      <div class="layui-form-mid layui-word-aux">SecretKEY 是您项目的安全密钥，具有该账户完全的权限，请妥善保管</div>
			    </div>
			  </div>
			  
			  
		  	 <div class="layui-form-item">
			    <label class="layui-form-label">Bucket</label>
			    <div class="layui-input-block">
			      <input type="text" name="tx_bucket"   autocomplete="off" class="layui-input" value="<?php echo htmlentities($srdb['tx_bucket']); ?>">
			      <div class="layui-form-mid layui-word-aux">请保证bucket为可公共读取的</div>
			    </div>
			  </div>
			   <div class="layui-form-item">
			    <label class="layui-form-label">Local</label>
			    <div class="layui-input-block">
			      <input type="text" name="tx_local"   autocomplete="off" class="layui-input" value="<?php echo htmlentities($srdb['tx_local']); ?>">
			      <div class="layui-form-mid layui-word-aux">服务器所在位置</div>
			    </div>
			  </div>
			  <div class="layui-form-item">
			    <label class="layui-form-label">URL</label>
			    <div class="layui-input-block">
			      <input type="text" name="tx_url"   autocomplete="off" class="layui-input" value="<?php echo htmlentities($srdb['tx_url']); ?>">
			      <div class="layui-form-mid layui-word-aux">腾讯云支持用户自定义访问域名。注：url开头加http://或https://结尾不加 ‘/’例：http://abc.com</div>
			    </div>
			  </div>
		  
		 
  	  </div>
  	  
  	    <div class="ali" style="display: none;">
	      	<div class="layui-form-item">
			    <label class="layui-form-label">Access Key ID</label>
			    <div class="layui-input-block">
			      <input type="text" name="ali_access_key_id"   autocomplete="off" class="layui-input" value="<?php echo htmlentities($srdb['ali_access_key_id']); ?>">
			       <div class="layui-form-mid layui-word-aux">Access Key ID是您访问阿里云API的密钥，具有该账户完全的权限，请您妥善保管</div>
			    </div>
			  </div>
		  
			  <div class="layui-form-item">
			    <label class="layui-form-label">Access Key Secret</label>
			    <div class="layui-input-block">
			      <input type="text" name="ali_access_key_secret"   autocomplete="off" class="layui-input" value="<?php echo htmlentities($srdb['ali_access_key_secret']); ?>">
			       <div class="layui-form-mid layui-word-aux">Access Key Secret是您访问阿里云API的密钥，具有该账户完全的权限，请您妥善保管。(填写完Access Key ID 和 Access Key Secret 后请选择bucket) </div>
			    </div>
			  </div>
			  
			  
			   <div class="layui-form-item">
			    <label class="layui-form-label">Bucket</label>
			    <div class="layui-input-block">
			      <input type="text" name="ali_bucket"   autocomplete="off" class="layui-input" value="<?php echo htmlentities($srdb['ali_bucket']); ?>">
			      <div class="layui-form-mid layui-word-aux">请保证bucket为可公共读取的</div>
			    </div>
			  </div>
			  
			  <div class="layui-form-item">
			    <label class="layui-form-label">地域节点</label>
			    <div class="layui-input-block">
			      <input type="text" name="ali_end_point"   autocomplete="off" class="layui-input" value="<?php echo htmlentities($srdb['ali_end_point']); ?>">
			      <div class="layui-form-mid layui-word-aux">阿里云存储地域节点</div>
			    </div>
			  </div>
			  
		  
			  <div class="layui-form-item">
			    <label class="layui-form-label">自定义URL</label>
			    <div class="layui-input-block">
			      <input type="text" name="ali_url"   autocomplete="off" class="layui-input" value="<?php echo htmlentities($srdb['ali_url']); ?>">
			       <div class="layui-form-mid layui-word-aux">阿里云oss支持用户自定义访问域名，如果自定义了URL则用自定义的URL，如果未自定义，则用系统生成出来的URL。注：自定义url开头加http://或https://结尾不加 ‘/’例：http://abc.com</div>
			    </div>
			  </div>
		  
		 
  	  </div>
  
  

  
  
  
  <div class="layui-form-item">
    <div class="layui-input-block">
      <button class="layui-btn" lay-submit lay-filter="demo1">立即提交</button>
    </div>
  </div>
  <!-- 更多表单结构排版请移步文档左侧【页面元素-表单】一项阅览 -->
</form>
<script src="../addons/wjyk_nhyk/public/static/layuiadmin/layui/layui.js"></script>
<script>
    layui.config({
    	base: '../addons/wjyk_nhyk/public/static/layuiadmin/' //静态资源所在路径
    }).extend({
        index: 'lib/index' //主入口模块
    }).use('index');

</script>
<script>
    layui.use(['form', 'layedit', 'laydate','upload','jquery'], function(){
        var 
        $ = layui.$
        ,form = layui.form
            ,layer = layui.layer
            ,layedit = layui.layedit
            ,laydate = layui.laydate;

        
        
    
   
      
                
        //监听提交
        form.on('submit(demo1)', function(data){
            var admin = layui.admin
            

            admin.req({
                url:"<?php echo siteUrl('admin/attachment/set_config','','web'); ?>",
                data:data.field,
                type:"POST",
                done:res=>{
                    if(res.code == 0 ){
                		layer.msg("设置成功");
                	}
                }
            })
            return false
  
        });
       change();
		function change(){
			  if ($('#type input[name="type"]:checked ').val() == "1") {
	             $(".tx").hide();
	             $(".ali").hide();
	             $(".qiniu").hide();
	             
            }else  if ($('#type input[name="type"]:checked ').val() == "2") {
            	$(".tx").hide();
	             $(".ali").hide();
	             $(".qiniu").show();
            }else  if ($('#type input[name="type"]:checked ').val() == "3") {
            	$(".tx").hide();
	             $(".ali").show();
	             $(".qiniu").hide();
            }else  if ($('#type input[name="type"]:checked ').val() == "4") {
            	$(".tx").show();
	             $(".ali").hide();
	             $(".qiniu").hide();
            } 
		}
        
        form.on('radio(aaa)', function (data) {
   			
        	change();
           
            form.render();
        });


        //表单取值
        layui.$('#LAY-component-form-getval').on('click', function(){
            var data = form.val('example');
            alert(JSON.stringify(data));
        });

    });
</script>
</body>
</html>