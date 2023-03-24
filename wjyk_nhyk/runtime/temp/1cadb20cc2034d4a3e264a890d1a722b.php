<?php /*a:1:{s:81:"D:\phpstudy_pro\WWW\addons\wjyk_nhyk\application\admin\view\store\edit_store.html";i:1639920798;}*/ ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>编辑门店</title>
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
    <input type="hidden" name="id" value="<?php echo htmlentities($store['id']); ?>"/>
	  <div class="layui-form-item">
	    <label class="layui-form-label">门店名称</label>
	    <div class="layui-input-block">
	      <input type="text" name="store_name" required lay-verify="required" placeholder="请输入门店名称" autocomplete="off" class="layui-input" value="<?php echo htmlentities($store['store_name']); ?>" />
	    </div>
	  </div>
	  
	  <div class="layui-form-item">
	    <label class="layui-form-label">门店电话号码</label>
	    <div class="layui-input-block">
	      <input type="text" name="store_phone" required lay-verify="required" placeholder="请输入门店号码" autocomplete="off" class="layui-input" value="<?php echo htmlentities($store['store_phone']); ?>" />
	    </div>
	  </div>

	 
	  
	  <div class="layui-form-item">
	    <label class="layui-form-label">门店地址</label>
	    <div class="layui-input-inline">
	        <button type="button" class="layui-btn" id="trapeze">选择门店经纬度</button>
	    </div>
	    <label class="layui-form-label">经度</label>
	    <div class="layui-input-inline">
	        <input type="text" name="store_addres_lng" class="layui-input" value="<?php echo htmlentities($store['store_addres_lng']); ?>" id="lng">
	    </div>
	    <label class="layui-form-label">纬度</label>
	    <div class="layui-input-inline">
			<input type="text" name="store_addres_lat" class="layui-input" value="<?php echo htmlentities($store['store_addres_lat']); ?>" id="lat">
	    </div>
	  </div>
	  
	  

		<div class="layui-form-item">
	    <label class="layui-form-label">门店详细地址</label>
	    <div class="layui-input-block">
	      <input type="text" id="store_addres" name="store_addres" required lay-verify="required" placeholder="请输入门店详细地址" autocomplete="off" class="layui-input" value="<?php echo htmlentities($store['store_addres']); ?>" />
	    </div>
	  </div>

	
	 <div class="layui-form-item">
	    <label class="layui-form-label">营业时间</label>
	    <div class="layui-input-block">
	      <input type="text"  name="business" required lay-verify="required" placeholder="周一至周五" autocomplete="off" class="layui-input" value="<?php echo htmlentities($store['business']); ?>" />
	    </div>
	  </div>
	
    
    

    <div class="layui-form-item">
        <label class="layui-form-label">门店图片</label>
        <button type="button" class="layui-btn" id="test2">上传图片</button>
        <div class="layui-input-block">
            <img class="layui-upload-img" id="demo2" style="margin-top: 10px;height: 150px;width: 150px" <?php if($store['store_logo']==''): else: ?>src="<?php echo htmlentities($store['store_logo']); ?>"<?php endif; ?>">
            <input type="hidden" name="store_logo"  lay-verify="required" id="group_log" value="<?php echo htmlentities($store['store_logo']); ?>">
        </div>
        <div class="layui-input-block">
            <div class="layui-form-mid layui-word-aux">图片建议尺寸380*380px</div>
        </div>
    </div>
    
      <div class="layui-form-item">
        <label class="layui-form-label">门店详情图片</label>
        <button type="button" class="layui-btn" id="test3">上传图片</button>
        <div class="layui-input-block">
            <img class="layui-upload-img" id="demo3" style="margin-top: 10px;height: 150px;width: 150px" <?php if($store['ktv_img']==''): else: ?>src="<?php echo htmlentities($store['ktv_img']); ?>"<?php endif; ?>">
            <input type="hidden" name="ktv_img"  lay-verify="required" id="group_log3" value="<?php echo htmlentities($store['ktv_img']); ?>">
        </div>
        <div class="layui-input-block">
            <div class="layui-form-mid layui-word-aux">图片建议尺寸750*366px</div>
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
<script type="text/javascript" src="../addons/wjyk_nhyk/public/static/ueditor/ueditor.config.js"></script>
<script type="text/javascript" src="../addons/wjyk_nhyk/public/static/ueditor/ueditor.all.js"></script>
<script>
	layui.config({
	    base: '../addons/wjyk_nhyk/public/static/layuiadmin/' //静态资源所在路径
	}).extend({
	    index: 'lib/index' //主入口模块
	    	, layarea: '../layui/layui_exts/city-picker/layarea'
	}).use(['jquery','layer', 'index', 'table','upload', 'layarea','layedit'], function(){
		var $ = layui.$
		, layer = layui.layer
		, layedit = layui.layedit
	    , table = layui.table
	    , form = layui.form
	    , layarea = layui.layarea
	    , upload = layui.upload;

        //建立编辑器
        layedit.build('group_desc');

        /** 初始化 */
      

        
        $("#trapeze").click(function(){
            layer.open({
                type:2,
                area: ['800px', '500px'],
                title:"选择经纬度",
                btn: ['确定', '取消'],
                yes: function(index, layero){
                    //按钮【按钮一】的回调
                    var body = layer.getChildFrame('body', index);
                    var tempLng = body.find("#lng").val();
                    var tempLat = body.find("#lat").val();
                    var tempAddres = body.find("#addres").val();
                    console.log("lng",tempLng);
                    console.log("lat",tempLat);
                 
                    $("#lng").val(tempLng);
                    $("#lat").val(tempLat);
                    $("#store_addres").val(tempAddres);
                    
                	layer.close(index);
                	
                },
                cancel: function(){ 
                    //右上角关闭回调
                    
                    //return false 开启该代码可禁止点击该按钮关闭
                },
                content:"<?php echo siteUrl('admin/index/baidumap','','web'); ?>",
                success:function(){
                	

                }  
            });
       });
        
        $("#store_admin_select").click(function(){
        	layer.open({
                type:2,
                area: ['800px', '500px'],
                title:"选择经纬度",
                btn: ['确定', '取消'],
                yes: function(index, layero){
                    //按钮【按钮一】的回调
                    var body = layer.getChildFrame('body', index);
                    var tempLng = body.find("#lng").val();
                    var tempLat = body.find("#lat").val();
                    var tempAddres = body.find("#addres").val();
                  	debugger;
                    $("#lng").val(tempLng);
                    $("#lat").val(tempLat);
                    $("#addres").val(tempAddres);
                    $("#addresLabel").text(tempAddres);
                    
                	layer.close(index);
                	
                },
                cancel: function(){ 
                    //右上角关闭回调
                    
                    //return false 开启该代码可禁止点击该按钮关闭
                },
                content:"<?php echo siteUrl('admin/store/select_admin','','web'); ?>",
                success:function(){
                	

                }  
            });
        });
        
        
        $("#qqtrapeze").click(function(){
            layer.open({
                type:2,
                area: ['800px', '500px'],
                title:"选择经纬度",
                btn: ['确定', '取消'],
                yes: function(index, layero){
                    //按钮【按钮一】的回调
                    var body = layer.getChildFrame('body', index);
                    var tempLng = body.find("#lng").val();
                    var tempLat = body.find("#lat").val();
                    var tempAddres = body.find("#addres").val();
                 
                    $("#lng").val(tempLng);
                    $("#lat").val(tempLat);
                    $("#addres").val(tempAddres);
                    $("#addresLabel").text(tempAddres);
                    
                	layer.close(index);
                	
                },
                cancel: function(){ 
                    //右上角关闭回调
                    
                    //return false 开启该代码可禁止点击该按钮关闭
                },
                content:"<?php echo siteUrl('admin/index/qqmap','','web'); ?>",
                success:function(){
                	

                }  
            });
       });
        
        
        
        
        var allUpload =  $("button[id$='_upload']");
        allUpload.each(function(){
            var id = $(this).attr('id');
            upload.render({
                elem: '#'+id
                ,url: "<?php echo siteUrl('admin/index/upload','','web'); ?>" //改成您自己的上传接口
                ,done: function(res){
                    //如果上传失败
                    if(res.code < 0){
                        return layer.msg('上传失败');
                    }else{
                        $('#'+id+"_img").attr('src', res.msg); //图片链接（base64）
                        $('#'+id+"_log").val(res.msg);
                        
                    }
                }
            });
        });

    	layarea.render({
            elem: '#area-picker',
            change: function (res) {
                //选择结果
                console.log(res);
            }
        });


      
        
       


    	



        $(document).on('click',".del_img",function(){
            $(this).parent().parent().remove();
        });

        upload.render({
            elem: '#test2'
            ,url: "<?php echo siteUrl('admin/index/upload','','web'); ?>" //改成您自己的上传接口
            ,done: function(res){
                if(res.code > 0){
                    return layer.msg('上传失败');
                }else{
                    $('#demo2').attr('src', res.msg); //图片链接（base64）
                    $('#group_log').val(res.msg);
                    
                }
            }
        });
        
        upload.render({
            elem: '#test3'
            ,url: "<?php echo siteUrl('admin/index/upload','','web'); ?>" //改成您自己的上传接口
            ,done: function(res){
                if(res.code > 0){
                    return layer.msg('上传失败');
                }else{
                    $('#demo3').attr('src', res.msg); //图片链接（base64）
                    $('#group_log3').val(res.msg);
                    
                }
            }
        });
        
        

       window.addEventListener('message', function(event) {
        	debugger;
            console.log(event) // 里面就有经纬度等其他信息
        })
      
        


     

        $(document).on('click',".del_details",function(){
            $(this).parent().parent().remove();
        });

      //监听提交
        form.on('submit(demo1)', function(data){
            var admin = layui.admin;
          
            
            $.ajax({
            	url:"<?php echo siteUrl('admin/store/edit_store','','web'); ?>",
                data:data.field,
                type:"POST",
                success: function(data){
                	var res = JSON.parse(data);
                	if(res.code == 0 ){
                		layer.msg(res.msg,{icon: 1,time:3000},function(){
                			window.parent.location.reload()//刷新父页面
                            var index = parent.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
                            parent.layer.close(index); //再执行关闭
                		});
                	}else{
                		layer.msg(res.msg,{icon: 2,time:3000},function(){
                			window.parent.location.reload()//刷新父页面
                            var index = parent.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
                            parent.layer.close(index); //再执行关闭
                		});
                	}
                }
            })
            return false
        });

		
      
    });
</script>
</body>
</html>