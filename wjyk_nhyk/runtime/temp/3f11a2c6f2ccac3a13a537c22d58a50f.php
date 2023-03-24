<?php /*a:2:{s:80:"D:\phpstudy_pro\WWW\addons\wjyk_nhyk\application\admin\view\store\set_admin.html";i:1639920798;s:60:"../addons/wjyk_nhyk/application/admin/view/index/footer.html";i:1641211050;}*/ ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>管理员设置</title>
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
                <div class="layui-card-header">管理员设置</div>
                <div class="layui-card-body" pad15>

                    <div class="layui-form" wid100 lay-filter="">
<form class="layui-form" style="margin-top:21px;">

<input type="hidden" name="id"   value="<?php echo htmlentities($srdb['id']); ?>">


  <div class="layui-form-item">
    <label class="layui-form-label">账号名称</label>
    <div class="layui-input-block">
      <input type="text" name="username" required lay-verify="required" placeholder="请输入账户名称" autocomplete="off" class="layui-input" value="<?php echo htmlentities($srdb['username']); ?>">
    </div>
  </div>
    <div class="layui-form-item">
        <label class="layui-form-label">账号密码</label>
        <div class="layui-input-block">
            <input type="text" name="pwd" required lay-verify="required" placeholder="请输入账号密码" autocomplete="off" class="layui-input" value="<?php echo htmlentities($srdb['pwd']); ?>">
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
            
         

            
            $.ajax({
                url:"<?php echo siteUrl('admin/store/set_admin','','web'); ?>",
                data:data.field,
                type:"POST",
                success: function(data){
                    var res = JSON.parse(data);
                    if(res.code == 0 ){
                        layer.msg(res.msg,{icon: 1,time:3000},function(){
                          
                        });

                    }else{
                        layer.msg(res.msg,{icon: 2,time:3000},function(){
                     
                        });
                    }
                }
            })
            
            return false
  
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