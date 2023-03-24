<?php /*a:2:{s:77:"D:\phpstudy_pro\WWW\addons\wjyk_nhyk\application\admin\view\system\index.html";i:1641211831;s:60:"../addons/wjyk_nhyk/application/admin/view/index/footer.html";i:1641211050;}*/ ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>系统设置</title>
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
<div class="layui-fluid">
    <div class="layui-row layui-col-space15">
        <div class="layui-col-md12">
            <div class="layui-card">
                <div class="layui-card-header">基本设置</div>
                <div class="layui-card-body" pad15>

                    <div class="layui-form" wid100 lay-filter="">
<form class="layui-form" style="margin-top:21px;">

	<div class="layui-fluid">
	    <div class="layui-row layui-col-space15">
	        <div class="layui-col-md12">
	            <div class="layui-card">
	                <div class="layui-card-body">
	                	<div class="layui-btn-group test-table-operate-btn">
	                        <div class="layui-btn" data-type="toPayment" id="dian">支付设置</div>
	                    </div>
	                    <div class="layui-btn-group test-table-operate-btn">
	                        <div class="layui-btn" data-type="toPayment" id="fujian">附件设置</div>
	                    </div>
	                </div>
	               
	            </div>
	           
	        </div>
	        
	    </div>
	</div>


  <div class="layui-form-item">
    <label class="layui-form-label">&#31995;&#32479;&#21517;&#31216;</label>
    <div class="layui-input-block">
      <input type="text" name="name" required lay-verify="required" placeholder="" autocomplete="off" class="layui-input" value="<?php if($system['name']): ?><?php echo htmlentities($system['name']); else: ?>&#35831;&#36755;&#20837;&#31995;&#32479;&#21517;&#31216;<?php endif; ?>">
    </div>
  </div>
    <div class="layui-form-item">
        <label class="layui-form-label">&#31995;&#32479;&#30005;&#35805;</label>
        <div class="layui-input-block">
            <input type="text" name="mobile" required lay-verify="required" placeholder="" autocomplete="off" class="layui-input" value="<?php if($system['mobile']): ?><?php echo htmlentities($system['mobile']); else: ?>&#35831;&#36755;&#20837;&#31995;&#32479;&#30005;&#35805;<?php endif; ?>">
        </div>
    </div>
    
       <div class="layui-form-item">
        <label class="layui-form-label">&#20010;&#20154;&#35828;&#26126;&#25991;&#26412;&#25552;&#31034;</label>
        <div class="layui-input-block">
            <input type="text" name="desc_label" required lay-verify="required" placeholder="&#22777;&#183;&#38155;&#96;&#28304;&#183;&#30721;&#32;&#121;&#102;&#112;&#104;&#112;&#46;&#32;&#99;&#110;" autocomplete="off" class="layui-input" value="<?php if($system['desc_label']): ?><?php echo htmlentities($system['desc_label']); else: ?>&#35831;&#36755;&#20837;&#25991;&#26412;&#25552;&#31034;<?php endif; ?>">
        </div>
    </div>
  
  
  
  <div class="layui-form-item">
        <label class="layui-form-label">系统logo</label>
      <div class="layui-form-mid layui-word-aux">建议上传100px * 100px尺寸</div>
        <button type="button" class="layui-btn" id="test1">上传图片</button>
        <div class="layui-input-block">
            <img class="layui-upload-img" id="demo1" style="margin-top: 10px;height: 150px;width: 150px" <?php if($system['logo']==''): else: ?>src="<?php echo htmlentities($system['logo']); ?>"<?php endif; ?>">
            <input type="hidden" name="logo" id="logo" value="<?php echo htmlentities($system['logo']); ?>">
        </div>
    </div>
    
	<div class="layui-form-item">
    <label class="layui-form-label">签到送积分</label>
    <div class="layui-input-block">
      <input type="text" name="sign_integral" required lay-verify="required" placeholder="请输入积分" autocomplete="off" class="layui-input" value="<?php echo htmlentities($system['sign_integral']); ?>">
    </div>
  </div>
  
   <div class="layui-form-item">
	    <label class="layui-form-label">连续签到额外积分</label>
	    <div class="layui-input-block">
	      <input type="text" name="con_sing_integral" required lay-verify="required" placeholder="请输入积分" autocomplete="off" class="layui-input" value="<?php echo htmlentities($system['con_sing_integral']); ?>">
	    </div>
	  </div>
  
  <div class="layui-form-item">
    <label class="layui-form-label">首页分享标题</label>
    <div class="layui-input-block">
      <input type="text" name="index_share_title" required lay-verify="required"  autocomplete="off" class="layui-input" value="<?php echo htmlentities($system['index_share_title']); ?>">
    </div>
  </div>
  
  
      <div class="layui-form-item">
        <label class="layui-form-label">自定义展示首页</label>
        <div class="layui-input-block">
          	<select lay-filter="typeSelect" name="show_index_type"  >	
              	 <?php if(empty($index_type)): ?>	
              	      <option value="">暂无</option>	
              	 <?php else: ?>		
              	     <option value="0"  <?php if($system['show_index_type'] == '0'): ?> selected="" <?php endif; ?>>默认</option>					    	
	              	 <?php foreach($index_type as $v): ?>						                  
	              		 <option value="<?php echo htmlentities($v['id']); ?>"  <?php if($system['show_index_type'] == $v['id']): ?> selected="" <?php endif; ?>><?php echo htmlentities($v['name']); ?></option>							        
	              	 <?php endforeach; ?>							    
              	 <?php endif; ?>				           
              	  </select> 
        </div>
    </div>

  

  
  <div class="layui-form-item">
    <label class="layui-form-label">首页分享图片</label>
    <div class="layui-form-mid layui-word-aux">建议上传100px * 100px尺寸</div>
        <button type="button" class="layui-btn" id="test2">上传图片</button>
        <div class="layui-input-block">
            <img class="layui-upload-img" id="demo2" style="margin-top: 10px;height: 150px;width: 150px" <?php if($system['index_share_img']==''): else: ?>src="<?php echo htmlentities($system['index_share_img']); ?>"<?php endif; ?>">
            <input type="hidden" name="index_share_img" id="logo2" value="<?php echo htmlentities($system['index_share_img']); ?>">
        </div>
  </div>
  
	 
	  
	  <div class="layui-form-item">
	    <label class="layui-form-label">消费赠送积分(每消费一元获得积分)</label>
	    <div class="layui-input-block">
	      <input type="text" name="consume_get_integral" required lay-verify="required" placeholder="请输入积分" autocomplete="off" class="layui-input" value="<?php echo htmlentities($system['consume_get_integral']); ?>">
	    </div>
	  </div>
	  
	  <div class="layui-form-item">
	    <label class="layui-form-label">附近门店可见距离(米)</label>
	    <div class="layui-input-block">
	      <input type="number" name="distance_limit" required lay-verify="required" placeholder="请输入距离(米)" autocomplete="off" class="layui-input" value="<?php echo htmlentities($system['distance_limit']); ?>">
	    </div>
	  </div>
  
  

	  
	  <div class="layui-form-item">
        <label class="layui-form-label">腾讯地图key</label>
        <div class="layui-input-block">
          <input type="text" name="qqmap_key" required lay-verify="required"  autocomplete="off" class="layui-input" value="<?php echo htmlentities($system['qqmap_key']); ?>">
          <div class="layui-form-mid layui-word-aux">用于小程序定位 前往<a href="https://lbs.qq.com/" target="_blank">申请</a></div>
             
        </div>
    </div>
    
    
  
	 


   
    
    
    
    
    

    <div class="layui-form-item">
        <label class="layui-form-label">商城设置</label>
        <div class="layui-input-block">
          <div class="layui-form-mid layui-word-aux">商城基础设置 商城图片等设置 。前往<a lay-href="<?php echo siteUrl('admin/goods/set_index','','web'); ?>">商城设置</a></div>
             
        </div>
    </div>
    <div class="layui-form-item">
        <label class="layui-form-label">短信设置</label>
        <div class="layui-input-block">
          <div class="layui-form-mid layui-word-aux">会员消费充值等行为的短信提醒设置 。前往<a lay-href="<?php echo siteUrl('admin/note/index','','web'); ?>">短信设置</a></div>
             
        </div>
    </div>
    <div class="layui-form-item">
        <label class="layui-form-label">通知设置</label>
        <div class="layui-input-block">
          <div class="layui-form-mid layui-word-aux">会员消费充值等行为的微信通知设置 。前往<a lay-href="<?php echo siteUrl('admin/notice/index','','web'); ?>">通知设置</a></div>
             
        </div>
    </div>
    
    
  
  <div class="layui-form-item">
        <label class="layui-form-label">分销设置</label>
        <div class="layui-input-block">
          <div class="layui-form-mid layui-word-aux">会员分销佣金比例等设置 。前往<a lay-href="<?php echo siteUrl('admin/distribution/index','','web'); ?>">分销设置</a></div>
             
        </div>
    </div>
  
    <div class="layui-form-item">
        <label class="layui-form-label">充值说明</label>
        <div class="layui-input-block">
            <script id="czUeditor" name="recharge_money_desc" type="text/plain" ><?php echo $system['recharge_money_desc']; ?></script>
        </div>
    </div>
    
    <div class="layui-form-item">
        <label class="layui-form-label">签到说明</label>
        <div class="layui-input-block">
            <script id="qdUeditor" name="sign_desc" type="text/plain" ><?php echo $system['sign_desc']; ?></script>
        </div>
    </div>
  

  
  

 
  

  
  <div class="layui-form-item">
    <div class="layui-input-block">
      <button class="layui-btn" lay-submit lay-filter="demo1">立即提交</button>
    </div>
  </div>
  <!-- 更多表单结构排版请移步文档左侧【页面元素-表单】一项阅览 -->
</form>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
<div class="layui-footer" style="margin-top:20px;display: flex;justify-content: center;align-items: flex-end;">
	
<?php if($_W['user']['type'] !=1): ?>
	<div class="container-fluid footer text-center" role="footer">	
	<div class="friend-link" style="height:30px">
		<?php if(empty($_W['setting']['copyright']['footerright'])): ?>
			<a href="http://www.w7.cc">微信开发</a>
			<a href="http://s.w7.cc">微信应用</a>
			<a href="http://bbs.w7.cc">微擎论坛</a>
			<a href="http://s.w7.cc">联系客服</a>
		<?php else: ?>
			<?php echo $_W['setting']['copyright']['footerright']?>
		<?php endif; ?>
	</div>
	<div class="copyright" style="height:30px"><?php if(empty($_W['setting']['copyright']['footerleft'])): ?>Powered by <a href="http://www.w7.cc"><b>微擎</b></a> v<?php echo htmlentities($_W['version']); ?> &copy; 2014-2021 <a href="http://www.yfphp.cn"target="_blank">yfphp.cn</a><?php else: ?><?php echo htmlentities($_W['setting']['copyright']['footerleft']); ?><?php endif; ?></div>
	<?php if(!empty($_W['setting']['copyright']['icp'])): ?>
	<div>备案号：<a href="http://www.miitbeian.gov.cn" target="_blank"><?php echo htmlentities($_W['setting']['copyright']['icp']); ?></a></div><?php endif; ?>
</div>
<?php endif; ?>

</body>
</html>
</div>
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
		
        
        var protocolUe = UE.getEditor('czUeditor', {

            zIndex: 99,

            maximumWords: 999,

            scaleEnabled: true,

            initialFrameWidth: 800,

            initialFrameHeight: 300,

            autoHeightEnabled: false,}

        );
        
        var protocolUe = UE.getEditor('qdUeditor', {

            zIndex: 99,

            maximumWords: 999,

            scaleEnabled: true,

            initialFrameWidth: 800,

            initialFrameHeight: 300,

            autoHeightEnabled: false,}

        );
		
		$('#ImgPreview img').on('click', function () {
            layer.photos({
                photos: '#ImgPreview',
                shadeClose: false,
                closeBtn: 2,
                anim: 0
            });
        })
        
        $('#ImgPreviewTemp img').on('click', function () {
            layer.photos({
                photos: '#ImgPreviewTemp',
                shadeClose: false,
                closeBtn: 2,
                anim: 0
            });
        })

        $('#ImgStore img').on('click', function () {
            layer.photos({
                photos: '#ImgStore',
                shadeClose: false,
                closeBtn: 2,
                anim: 0
            });
        })
        
        $('.upload_img').on('click',function () {
    		var url = $(this).attr('id');
    		$(this).parents('.image-container').remove();
    	});

		
		layarea.render({
            elem: '#area-picker',
            change: function (res) {
                //选择结果
                console.log(res);
            }
        });
		
	
    

    	
    	upload.render({
            elem: '#test1'
            ,url: "<?php echo siteUrl('admin/index/upload','','web'); ?>" //改成您自己的上传接口
            ,done: function(res){
                //如果上传失败
                if(res.code < 0){
                    return layer.msg('上传失败');
                }else{
                    $('#demo1').attr('src', res.msg); //图片链接（base64）
                    $('#logo').val(res.msg);
                }
            }
        });
    	
    	upload.render({
            elem: '#test2'
            ,url: "<?php echo siteUrl('admin/index/upload','','web'); ?>" //改成您自己的上传接口
            ,done: function(res){
                //如果上传失败
                if(res.code < 0){
                    return layer.msg('上传失败');
                }else{
                    $('#demo2').attr('src', res.msg); //图片链接（base64）
                    $('#logo2').val(res.msg);
                }
            }
        });
    	
        upload.render({
            elem: '#test3'
            ,url: "<?php echo siteUrl('admin/index/upload','','web'); ?>" //改成您自己的上传接口
            ,done: function(res){
                //如果上传失败
                if(res.code < 0){
                    return layer.msg('上传失败');
                }else{
                    $('#demo3').attr('src', res.msg); //图片链接（base64）
                    $('#advertising').val(res.msg);
                }
            }
        });
  
    	
  



        //创建一个编辑器
        var editIndex = layedit.build('LAY_demo_editor');
        //自定义验证规则
        form.verify({
            name: function(value){
                if(value.length < 5){
                    return '标题至少得5个字符啊';
                }
            }
            ,promotion_content: function(value){
                layedit.sync(editIndex);
            }
        });

        //监听指定开关
        form.on('switch(switchTest)', function(data){
            layer.msg('开关checked：'+ (this.checked ? 'true' : 'false'), {
                offset: '6px'
            });
            layer.tips('温馨提示：请注意开关状态的文字可以随意定义，而不仅仅是ON|OFF', data.othis)
        });
        
      //监听提交
        form.on('submit(demo1)', function(data){
            var admin = layui.admin
            
            if($('#logo').attr('value') == '' ||$('#logo').attr('value') == null ){
            	layer.msg('图片为空',{icon: 2,time:3000});
            	return false;
            }

            admin.req({
                url:"<?php echo siteUrl('admin/system/set_system','','web'); ?>",
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
      
        $("#dian").click(function(){
        	layer.open({
                type:2,
                area: ['60%', '65%'],
                title:"支付配置",
                yes: function(index, layero){
                    //按钮【按钮一】的回调
                	layer.close(index);
                },
                cancel: function(){ 
                    //右上角关闭回调
                    
                    //return false 开启该代码可禁止点击该按钮关闭
                },
                content:"<?php echo siteUrl('admin/payconfig/index','','web'); ?>",
                success:function(){
                	

                }  
            });
       });
        
        $("#fujian").click(function(){
        	layer.open({
                type:2,
                area: ['60%', '65%'],
                title:"附件配置",
                yes: function(index, layero){
                    //按钮【按钮一】的回调
                	layer.close(index);
                },
                cancel: function(){ 
                    //右上角关闭回调
                    
                    //return false 开启该代码可禁止点击该按钮关闭
                },
                content:"<?php echo siteUrl('admin/attachment/index','','web'); ?>",
                success:function(){
                	
                }  
            });
       });
        
        
        
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
                    console.log("lng",tempLng);
                    console.log("lat",tempLat);
                   
                    $("#lng").val(tempLng);
                    $("#lat").val(tempLat);
                	layer.close(index);
                	
                },
                cancel: function(){ 
                    //右上角关闭回调
                    
                    //return false 开启该代码可禁止点击该按钮关闭
                },
                content:"<?php echo siteUrl('admin/index/map','','web'); ?>",
                success:function(){
                	

                }  
            });
       });
        
        $("#rangeSelect").click(function(){
            layer.open({
                type:2,
                area: ['1000px', '600px'],
                title:"选择经营范围",
                btn: ['确定', '取消'],
                yes: function(index, layero){
                    //按钮【按钮一】的回调
                    var body = layer.getChildFrame('body', index);
                    var rangeLng = body.find("#rangeLng").val();
                    var rangeLat = body.find("#rangeLat").val();
                    console.log("rangeLng",rangeLng);
                    console.log("rangeLat",rangeLat);
                                        
                   
                    $("#rangeLng").val(rangeLng);
                    $("#rangeLat").val(rangeLat);
                	layer.close(index);
                	
                },
                cancel: function(){ 
                    //右上角关闭回调
                    
                    //return false 开启该代码可禁止点击该按钮关闭
                },
                content:"<?php echo siteUrl('admin/index/range','','web'); ?>",
                success:function(){
                	

                }  
            });
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