<?php /*a:2:{s:75:"D:\phpstudy_pro\WWW\addons\wjyk_nhyk\application\admin\view\notice\set.html";i:1639920798;s:60:"../addons/wjyk_nhyk/application/admin/view/index/footer.html";i:1641211050;}*/ ?>
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
		.layui-form-label{
			width:145px;
        }
		.layui-input-block{
			margin-left:175px;
		}
        form{
            padding-right:15px ;
        }
    </style>
</head>
<body>
<form class="layui-form" style="margin-top:21px;">

  
  <div class="layui-form-item">
    <label class="layui-form-label">新订单通知模板ID</label>
    <div class="layui-input-block">
      <input type="text" name="new_template" placeholder="请输入新订单通知模板ID" class="layui-input" value="<?php echo htmlentities($set['new_template']); ?>">
       <div class="layui-form-mid layui-word-aux">用于用户下单后通知用户。请在小程序后台服务类目为：”IT科技 > 软件服务提供商中选择“新订单通知“。<div class="layui-btn layui-btn-xs layui-btn-primary"  id="ddd">查看</div></div>
    </div>
   
  </div>
  

  
  <div class="layui-form-item">
    <label class="layui-form-label">新订单消息推送类型</label>
    <div class="layui-input-block">
        <input type="radio" name="new_type" value="1" title="不开启" <?php if($set['new_type'] != '1'): ?>checked<?php endif; ?> lay-filter="bbb">
        <input type="radio" name="new_type" value="2" title="微信" <?php if($set['new_type'] == '2'): ?>checked<?php endif; ?> lay-filter="bbb">
        <input type="radio" name="new_type" value="3" title="手机短信" <?php if($set['new_type'] == '3'): ?>checked<?php endif; ?> lay-filter="bbb">
        <input type="radio" name="new_type" value="4" title="全部开启" <?php if($set['new_type'] == '4'): ?>checked<?php endif; ?> lay-filter="bbb">
    </div>
  </div>
  
  
  <div class="layui-form-item">
    <label class="layui-form-label">会员充值成功模板ID</label>
    <div class="layui-input-block">
      <input type="text" name="cz_success_template"  placeholder="请输入充值成功模板ID" class="layui-input" value="<?php echo htmlentities($set['cz_success_template']); ?>">
      <div class="layui-form-mid layui-word-aux">用于会员充值成功后提醒用户。请在小程序后台服务类目为：”IT科技 > 软件服务提供商“，中选择”充值成功提醒“。<div class="layui-btn layui-btn-xs layui-btn-primary"  id="eee">查看</div></div>
    </div>
  </div>
  
  <div class="layui-form-item">
    <label class="layui-form-label">充值成功消息推送类型</label>
    <div class="layui-input-block">
        <input type="radio" name="cz_type" value="1" title="不开启" <?php if($set['cz_type'] != '1'): ?>checked<?php endif; ?> lay-filter="bbb">
        <input type="radio" name="cz_type" value="2" title="微信" <?php if($set['cz_type'] == '2'): ?>checked<?php endif; ?> lay-filter="bbb">
        <input type="radio" name="cz_type" value="3" title="手机短信" <?php if($set['cz_type'] == '3'): ?>checked<?php endif; ?> lay-filter="bbb">
        <input type="radio" name="cz_type" value="4" title="全部开启" <?php if($set['cz_type'] == '4'): ?>checked<?php endif; ?> lay-filter="bbb">
    </div>
  </div>
  
  <div class="layui-form-item">
    <label class="layui-form-label">会员扣费通知模板ID</label>
    <div class="layui-input-block">
      <input type="text" name="kf_template"  placeholder="请输入会员扣费通知模板ID" class="layui-input" value="<?php echo htmlentities($set['kf_template']); ?>">
      <div class="layui-form-mid layui-word-aux">用于用户扣费后提醒用户。请在小程序后台服务类目为：”IT科技 > 软件服务提供商“，中选择”付款成功通知“。<div class="layui-btn layui-btn-xs layui-btn-primary"  id="fff">查看</div></div>
    </div>
  </div>
  
  <div class="layui-form-item">
    <label class="layui-form-label">用户扣费消息推送类型</label>
    <div class="layui-input-block">
        <input type="radio" name="kf_type" value="1" title="不开启" <?php if($set['kf_type'] != '1'): ?>checked<?php endif; ?> lay-filter="bbb">
        <input type="radio" name="kf_type" value="2" title="微信" <?php if($set['kf_type'] == '2'): ?>checked<?php endif; ?> lay-filter="bbb">
        <input type="radio" name="kf_type" value="3" title="手机短信" <?php if($set['kf_type'] == '3'): ?>checked<?php endif; ?> lay-filter="bbb">
        <input type="radio" name="kf_type" value="4" title="全部开启" <?php if($set['kf_type'] == '4'): ?>checked<?php endif; ?> lay-filter="bbb">
    </div>
  </div>
  
  <div class="layui-form-item">
    <label class="layui-form-label">生日通知模板ID</label>
    <div class="layui-input-block">
      <input type="text" name="br_template"  placeholder="请输入生日通知模板ID" class="layui-input" value="<?php echo htmlentities($set['br_template']); ?>">
      <div class="layui-form-mid layui-word-aux">用于会员生日当天提醒用户。请在小程序后台服务类目为：”IT科技 > 软件服务提供商“，中选择”奖品发放通知“。<div class="layui-btn layui-btn-xs layui-btn-primary"  id="ggg">查看</div></div>
    </div>
  </div>
  
  <div class="layui-form-item">
    <label class="layui-form-label">生日通知消息推送类型</label>
    <div class="layui-input-block">
        <input type="radio" name="br_type" value="1" title="不开启" <?php if($set['br_type'] != '1'): ?>checked<?php endif; ?> lay-filter="bbb">
        <input type="radio" name="br_type" value="2" title="微信" <?php if($set['br_type'] == '2'): ?>checked<?php endif; ?> lay-filter="bbb">
        <input type="radio" name="br_type" value="3" title="手机短信" <?php if($set['br_type'] == '3'): ?>checked<?php endif; ?> lay-filter="bbb">
        <input type="radio" name="br_type" value="4" title="全部开启" <?php if($set['br_type'] == '4'): ?>checked<?php endif; ?> lay-filter="bbb">
    </div>
  </div>
  
  <div class="layui-form-item">
    <div class="layui-input-block">
      <button class="layui-btn" lay-submit lay-filter="demo1">立即提交</button>
    </div>
  </div>
  <!-- 更多表单结构排版请移步文档左侧【页面元素-表单】一项阅览 -->
</form>


<!-- 表单弹框 -->
<script  type="text/html" id="form1">
<div class="layui-fluid">
    <div class="layui-row layui-col-space15">
      <div class="layui-col-md12">
        <div class="layui-card">
          <div class="layui-card-body">
			<h2 id="panels-footer" style="margin-bottom:20px;"><a class="anchorjs-link " href="#" aria-label="Anchor link for: panels footer" data-anchorjs-icon="" style="font-family: anchorjs-icons; font-style: normal; font-variant: normal; font-weight: normal; line-height: inherit; position: absolute; margin-left: -1em; padding-right: 0.5em;"></a>在小程序后台基本设置，服务类目中选择 “IT科技 > 软件服务提供商”</h2>
			<img src="../addons/wjyk_nhyk/public/images/wxapp-set.png" alt="" style="width: 95%;height: 50%;margin-bottom:20px;">
			<h2 id="panels-footer" style="margin-bottom:20px;"><a class="anchorjs-link " href="#" aria-label="Anchor link for: panels footer" data-anchorjs-icon="" style="font-family: anchorjs-icons; font-style: normal; font-variant: normal; font-weight: normal; line-height: inherit; position: absolute; margin-left: -1em; padding-right: 0.5em;"></a>在小程序后台订阅消息，公共模板库中选择 “新订单通知”模板</h2>
			<img src="../addons/wjyk_nhyk/public/images/new.jpg" alt="" style="width: 70%;height: 50%;">
          </div>
        </div>
      </div>
   </div>
</div>
</script>

<!-- 表单弹框 -->
<script  type="text/html" id="form2">
<div class="layui-fluid">
    <div class="layui-row layui-col-space15">
      <div class="layui-col-md12">
        <div class="layui-card">
          <div class="layui-card-body">
			<h2 id="panels-footer" style="margin-bottom:20px;"><a class="anchorjs-link " href="#" aria-label="Anchor link for: panels footer" data-anchorjs-icon="" style="font-family: anchorjs-icons; font-style: normal; font-variant: normal; font-weight: normal; line-height: inherit; position: absolute; margin-left: -1em; padding-right: 0.5em;"></a>在小程序后台基本设置，服务类目中选择 “IT科技 > 软件服务提供商”</h2>
			<img src="../addons/wjyk_nhyk/public/images/wxapp-set.png" alt="" style="width: 95%;height: 50%;margin-bottom:20px;">
			<h2 id="panels-footer" style="margin-bottom:20px;"><a class="anchorjs-link " href="#" aria-label="Anchor link for: panels footer" data-anchorjs-icon="" style="font-family: anchorjs-icons; font-style: normal; font-variant: normal; font-weight: normal; line-height: inherit; position: absolute; margin-left: -1em; padding-right: 0.5em;"></a>在小程序后台订阅消息，公共模板库中选择 “充值成功提醒”模板</h2>
			<img src="../addons/wjyk_nhyk/public/images/czcg.jpg" alt="" style="width: 70%;height: 50%;">
          </div>
        </div>
      </div>
   </div>
</div>
</script>

<!-- 表单弹框 -->
<script  type="text/html" id="form3">
<div class="layui-fluid">
    <div class="layui-row layui-col-space15">
      <div class="layui-col-md12">
        <div class="layui-card">
          <div class="layui-card-body">
			<h2 id="panels-footer" style="margin-bottom:20px;"><a class="anchorjs-link " href="#" aria-label="Anchor link for: panels footer" data-anchorjs-icon="" style="font-family: anchorjs-icons; font-style: normal; font-variant: normal; font-weight: normal; line-height: inherit; position: absolute; margin-left: -1em; padding-right: 0.5em;"></a>在小程序后台基本设置，服务类目中选择 “IT科技 > 软件服务提供商”</h2>
			<img src="../addons/wjyk_nhyk/public/images/wxapp-set.png" alt="" style="width: 95%;height: 50%;margin-bottom:20px;">
			<h2 id="panels-footer" style="margin-bottom:20px;"><a class="anchorjs-link " href="#" aria-label="Anchor link for: panels footer" data-anchorjs-icon="" style="font-family: anchorjs-icons; font-style: normal; font-variant: normal; font-weight: normal; line-height: inherit; position: absolute; margin-left: -1em; padding-right: 0.5em;"></a>在小程序后台订阅消息，公共模板库中选择 “付款成功通知”模板</h2>
			<img src="../addons/wjyk_nhyk/public/images/yhcz.jpg" alt="" style="width: 70%;height: 50%;">
          </div>
        </div>
      </div>
   </div>
</div>
</script>
<!-- 表单弹框 -->
<script  type="text/html" id="form4">
<div class="layui-fluid">
    <div class="layui-row layui-col-space15">
      <div class="layui-col-md12">
        <div class="layui-card">
          <div class="layui-card-body">
			<h2 id="panels-footer" style="margin-bottom:20px;"><a class="anchorjs-link " href="#" aria-label="Anchor link for: panels footer" data-anchorjs-icon="" style="font-family: anchorjs-icons; font-style: normal; font-variant: normal; font-weight: normal; line-height: inherit; position: absolute; margin-left: -1em; padding-right: 0.5em;"></a>在小程序后台基本设置，服务类目中选择 “IT科技 > 软件服务提供商”</h2>
			<img src="../addons/wjyk_nhyk/public/images/wxapp-set.png" alt="" style="width: 95%;height: 50%;margin-bottom:20px;">
			<h2 id="panels-footer" style="margin-bottom:20px;"><a class="anchorjs-link " href="#" aria-label="Anchor link for: panels footer" data-anchorjs-icon="" style="font-family: anchorjs-icons; font-style: normal; font-variant: normal; font-weight: normal; line-height: inherit; position: absolute; margin-left: -1em; padding-right: 0.5em;"></a>在小程序后台订阅消息，公共模板库中选择 “奖品发放通知”模板</h2>
			<img src="../addons/wjyk_nhyk/public/images/jpff.jpg" alt="" style="width: 70%;height: 50%;">
          </div>
        </div>
      </div>
   </div>
</div>
</script>
<!-- 表单弹框 -->
<script  type="text/html" id="form5">
<div class="layui-fluid">
    <div class="layui-row layui-col-space15">
      <div class="layui-col-md12">
        <div class="layui-card">
          <div class="layui-card-body">
			<h2 id="panels-footer" style="margin-bottom:20px;"><a class="anchorjs-link " href="#" aria-label="Anchor link for: panels footer" data-anchorjs-icon="" style="font-family: anchorjs-icons; font-style: normal; font-variant: normal; font-weight: normal; line-height: inherit; position: absolute; margin-left: -1em; padding-right: 0.5em;"></a>在小程序后台基本设置，服务类目中选择 “IT科技 > 软件服务提供商”</h2>
			<img src="../addons/wjyk_nhyk/public/images/wxapp-set.png" alt="" style="width: 95%;height: 50%;margin-bottom:20px;">
			<h2 id="panels-footer" style="margin-bottom:20px;"><a class="anchorjs-link " href="#" aria-label="Anchor link for: panels footer" data-anchorjs-icon="" style="font-family: anchorjs-icons; font-style: normal; font-variant: normal; font-weight: normal; line-height: inherit; position: absolute; margin-left: -1em; padding-right: 0.5em;"></a>在小程序后台订阅消息，公共模板库中选择 “订单取消通知”模板</h2>
			<img src="../addons/wjyk_nhyk/public/images/kjsb.jpg" alt="" style="width: 70%;height: 50%;">
          </div>
        </div>
      </div>
   </div>
</div>
</script>

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
                    $('#share_pic').val(res.msg);
                }
            }
        });
        
        
      //监听提交
        form.on('submit(demo1)', function(data){
            var admin = layui.admin
            

            admin.req({
                url:"<?php echo siteUrl('admin/notice/set_notice','','web'); ?>",
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
      
        $("#ddd").click(function(){
        	layer.open({
                title : '<i class="fa fa-plus"></i>&nbsp;订阅消息设置',
                type : 1,
                fix : false,
                skin : 'layui-layer-rim',
                // 加上边框
                area : [ '80%', '70%' ],
                // 宽高
                content : $('#form1').html(),
                success: function (layero, index) {
                    
                }
            });
       });
        
        $("#eee").click(function(){
        	layer.open({
                title : '<i class="fa fa-plus"></i>&nbsp;订阅消息设置',
                type : 1,
                fix : false,
                skin : 'layui-layer-rim',
                // 加上边框
                area : [ '80%', '70%' ],
                // 宽高
                content : $('#form2').html(),
                success: function (layero, index) {
                    
                }
            });
       });
        
        $("#fff").click(function(){
        	layer.open({
                title : '<i class="fa fa-plus"></i>&nbsp;订阅消息设置',
                type : 1,
                fix : false,
                skin : 'layui-layer-rim',
                // 加上边框
                area : [ '80%', '70%' ],
                // 宽高
                content : $('#form3').html(),
                success: function (layero, index) {
                    
                }
            });
       });
        
        $("#ggg").click(function(){
        	layer.open({
                title : '<i class="fa fa-plus"></i>&nbsp;订阅消息设置',
                type : 1,
                fix : false,
                skin : 'layui-layer-rim',
                // 加上边框
                area : [ '80%', '70%' ],
                // 宽高
                content : $('#form4').html(),
                success: function (layero, index) {
                    
                }
            });
       });
        
        $("#hhh").click(function(){
        	layer.open({
                title : '<i class="fa fa-plus"></i>&nbsp;订阅消息设置',
                type : 1,
                fix : false,
                skin : 'layui-layer-rim',
                // 加上边框
                area : [ '80%', '70%' ],
                // 宽高
                content : $('#form5').html(),
                success: function (layero, index) {
                    
                }
            });
       });
        
        $("#dian").click(function(){
        	layer.open({
                type:2,
                area: ['800px', '500px'],
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


        //表单取值
        layui.$('#LAY-component-form-getval').on('click', function(){
            var data = form.val('example');
            alert(JSON.stringify(data));
        });

    });
</script>
</body>
</html>