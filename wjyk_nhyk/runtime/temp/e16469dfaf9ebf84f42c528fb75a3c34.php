<?php /*a:1:{s:80:"D:\phpstudy_pro\WWW\addons\wjyk_nhyk\application\admin\view\payconfig\index.html";i:1639920798;}*/ ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>支付设置</title>
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <link rel="stylesheet" href="../addons/wjyk_nhyk/public/static/layuiadmin/layui/css/layui.css" media="all">
    <link rel="stylesheet" href="../addons/wjyk_nhyk/public/static/layuiadmin/style/admin.css" media="all">
    <style>
        form{
            padding-right:15px ;
        }
    </style>
</head>
<body>
<form class="layui-form" style="margin-top:21px;">

	<div class="layui-form-item">
	    <label class="layui-form-label">支付商户选择</label>
	    <div class="layui-input-block" id="is_freight">
	      <input type="radio" name="pay_type" value="1" title="主商户" <?php if($payconfig['pay_type'] == '1' || $payconfig['pay_type'] == ''): ?>checked<?php endif; ?> lay-filter="bbb">
	      <input type="radio" name="pay_type" value="2" title="子商户" <?php if($payconfig['pay_type'] == '2'): ?>checked<?php endif; ?> lay-filter="bbb">
	      <input type="radio" name="pay_type" value="3" title="宝付" <?php if($payconfig['pay_type'] == '3'): ?>checked<?php endif; ?> lay-filter="bbb">
	    </div>
	  </div>
 
  
  <div class="puto">
  		  <div class="layui-form-item" id="main_app">
		    <label class="layui-form-label">小程序(AppId)</label>
		    <div class="layui-input-block">
		      <input type="text" name="appid" required lay-verify="required" autocomplete="off" class="layui-input" value="<?php echo htmlentities($payconfig['appid']); ?>">
		    </div>
		  </div>
		  
		   <div class="layui-form-item" class="sub_app" id="sub_app">
		    <label class="layui-form-label">支付子小程序(AppId)</label>
		    <div class="layui-input-block">
		      <input type="text" name="sub_appid"  required lay-verify="required"  autocomplete="off" class="layui-input" value="<?php echo htmlentities($payconfig['sub_appid']); ?>">
		    </div>
		  </div>
		  
		  <div class="layui-form-item">
		    <label class="layui-form-label">小程序(AppSecret)</label>
		    <div class="layui-input-block">
		      <input type="text" name="app_key" required lay-verify="required"  autocomplete="off" class="layui-input" value="<?php echo htmlentities($payconfig['app_key']); ?>">
		    </div>
		  </div>
		  
		   
		  
		  <div class="layui-form-item"  id ="main_mchid">
		    <label class="layui-form-label">支付商户号(Mch_Id)</label>
		    <div class="layui-input-block">
		      <input type="text" name="mchid"  required lay-verify="required" autocomplete="off" class="layui-input" value="<?php echo htmlentities($payconfig['mchid']); ?>">
		    </div>
		  </div> 
		   <div class="layui-form-item" id ="sub_mchid">
		    <label class="layui-form-label">支付子商户号(Mch_Id)</label>
		    <div class="layui-input-block">
		      <input type="text" name="sub_mchid" required lay-verify="required" autocomplete="off" class="layui-input" value="<?php echo htmlentities($payconfig['sub_mchid']); ?>">
		    </div>
		  </div>
		  
		  <div class="layui-form-item" >
		    <label class="layui-form-label">支付密钥(APIKEY)</label>
		    <div class="layui-input-block">
		      <input type="text" name="pay_key" required lay-verify="required" autocomplete="off" class="layui-input" value="<?php echo htmlentities($payconfig['pay_key']); ?>">
		    </div>
		  </div>
		   <div class="layui-form-item">
		  	<label class="layui-form-label">cert文件</label>
		  	<button type="button" class="layui-btn" id="test1"><i class="layui-icon"></i>上传文件</button>
		    <?php if($payconfig['cert'] == 1): ?>
		    <button type="button" class="layui-btn layui-btn-xs layui-btn-normal" >已上传</button>下载证书 cert.zip 中的 apiclient_cert.pem 文件
		    <?php endif; ?>
		  </div>
		  
		  <div class="layui-form-item" id="keyContent">
		    <label class="layui-form-label">key文件</label>
		    <button type="button" class="layui-btn" id="test2"><i class="layui-icon"></i>上传文件</button>
		    <?php if($payconfig['key'] == 1): ?>
		    <button type="button" class="layui-btn layui-btn-xs layui-btn-normal" >已上传</button>下载证书 cert.zip 中的 apiclient_key.pem 文件
		    <?php endif; ?>
		  </div>
		  
  </div>

  
  <div class="baofu">
  		  <div class="layui-form-item"  >
		    <label class="layui-form-label">支付商户号</label>
		    <div class="layui-input-block">
		      <input type="text" name="bf_mchid"  required lay-verify="required" autocomplete="off" class="layui-input" value="<?php echo htmlentities($payconfig['bf_mchid']); ?>">
		    </div>
		  </div> 
		  <div class="layui-form-item" >
		    <label class="layui-form-label">支付密钥(APIKEY)</label>
		    <div class="layui-input-block">
		      <input type="text" name="cer_pwd" required lay-verify="required" autocomplete="off" class="layui-input" value="<?php echo htmlentities($payconfig['cer_pwd']); ?>">
		    </div>
		  </div>
		    <div class="layui-form-item">
			  	<label class="layui-form-label">cer文件</label>
			  	<button type="button" class="layui-btn" id="test3"><i class="layui-icon"></i>上传文件</button>
			    <?php if($payconfig['baofu_cert'] == 1): ?>
			   	 <button type="button" class="layui-btn layui-btn-xs layui-btn-normal" >已上传</button>*.cer 文件
			    <?php endif; ?>
			  </div>
			  <div class="layui-form-item" id="keyContent">
			    <label class="layui-form-label">pfx文件</label>
			    <button type="button" class="layui-btn" id="test4"><i class="layui-icon"></i>上传文件</button>
			    <?php if($payconfig['baofu_key'] == 1): ?>
			    <button type="button" class="layui-btn layui-btn-xs layui-btn-normal" >已上传</button>*.pfx 文件
			    <?php endif; ?>
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
    layui.use(['form', 'layedit', 'laydate','upload'], function(){
        var form = layui.form
            ,layer = layui.layer
            ,layedit = layui.layedit
            ,upload = layui.upload,
            $ = layui.$
            ,laydate = layui.laydate;
      
        
        upload.render({
          elem: '#test3'
          ,url: "<?php echo siteUrl('admin/index/upload_cer','','web'); ?>?type=3" //改成您自己的上传接口
          ,accept: 'file' //普通文件
          ,done: function(res){
            layer.msg('上传成功');
            console.log(res);
          }
        });
        
        upload.render({
            elem: '#test4'
            ,url: "<?php echo siteUrl('admin/index/upload_cer','','web'); ?>?type=3"//改成您自己的上传接口
            ,accept: 'file' //普通文件
            ,done: function(res){
              layer.msg('上传成功');
              console.log(res);
            }
          });
        
        upload.render({
            elem: '#test1'
            ,url: "<?php echo siteUrl('admin/index/upload_cer','','web'); ?>?type=1"//改成您自己的上传接口
            ,accept: 'file' //普通文件
            ,done: function(res){
              layer.msg('上传成功');
              console.log(res);
            }
          });
        
        upload.render({
            elem: '#test2'
            ,url: "<?php echo siteUrl('admin/index/upload_cer','','web'); ?>?type=1"//改成您自己的上传接口
            ,accept: 'file' //普通文件
            ,done: function(res){
              layer.msg('上传成功');
              console.log(res);
            }
          });
                
      //监听提交
        form.on('submit(demo1)', function(data){
            var admin = layui.admin

            admin.req({
                url:"<?php echo siteUrl('admin/payconfig/set_payconfig','','web'); ?>",
                data:data.field,
                type:"POST",
                done:res=>{
                    if(res.code == 0 ){
                		layer.msg("设置成功",function(){
                			window.location.href="<?php echo siteUrl('admin/payconfig/index','','web'); ?>";
                		});
                	}
                }
            })
            return false
  
        });
      
     appChange($("input[name='pay_type']:checked").val());
     function appChange(value){
    	 if (value == "2") {
    		 $(".puto").show();
    		 $("input[name='sub_appid']").attr("lay-verify","required");
    		 $("input[name='sub_mchid']").attr("lay-verify","required");
             $("#sub_app").show();
             $("#sub_mchid").show();
             $(".baofu").hide();
           }
           else if(value=="1") {
        	   $(".puto").show();
        	   $("input[name='sub_appid']").removeAttr("lay-verify");
      		  $("input[name='sub_mchid']").removeAttr("lay-verify");
               $("#sub_app").hide();
               $("#sub_mchid").hide();
               $(".baofu").hide();
           }else{
        	   $(".puto").hide();
        	   $(".baofu").show();
        	   
           }
     }

        form.on('radio(bbb)', function (data) {
            appChange($('#is_freight input[name="pay_type"]:checked ').val() );
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