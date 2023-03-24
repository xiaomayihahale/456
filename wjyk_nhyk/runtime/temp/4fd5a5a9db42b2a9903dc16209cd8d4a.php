<?php /*a:2:{s:87:"D:\phpstudy_pro\WWW\addons\wjyk_nhyk\application\admin\view\recharge\edit_recharge.html";i:1639920798;s:60:"../addons/wjyk_nhyk/application/admin/view/index/footer.html";i:1641211050;}*/ ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>编辑充值优惠</title>
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

	<input type="hidden" name="id" value="<?php echo htmlentities($srdb['id']); ?>">

  <div class="layui-form-item">
    <label class="layui-form-label">充值金额</label>
    <div class="layui-input-inline">
      <input type="number" name="money"  required autocomplete="off" class="layui-input" value="<?php echo htmlentities($srdb['money']); ?>" step = '0.01'>
    </div>
    <div class="layui-form-mid layui-word-aux"> 元</div>
  </div>
  
  <div class="layui-form-item">
    <label class="layui-form-label">赠送</label>
    <div class="layui-input-inline">
      <input type="number" name="only"  required autocomplete="off" class="layui-input" value="<?php echo htmlentities($srdb['only']); ?>" step = '0.01'>
    </div>
    <div class="layui-form-mid layui-word-aux"> 元</div>
  </div>
  
  <div class="layui-form-item">
    <label class="layui-form-label">排序</label>
    <div class="layui-input-block">
      <input type="number" name="sort"  placeholder="请输入排序值 ，数值越高，越在前显示" autocomplete="off" class="layui-input" value="<?php echo htmlentities($srdb['sort']); ?>">
    </div>
  </div>
  
  <div class="layui-form-item">
        <label class="layui-form-label">是否显示</label>
        <div class="layui-input-block">
            <input type="radio" name="status" value="0" title="显示" <?php if($srdb['status'] == '0' || $srdb['status'] == ''): ?>checked<?php endif; ?>>
            <input type="radio" name="status" value="1" title="隐藏" <?php if($srdb['status'] == '1'): ?>checked<?php endif; ?>>
        </div>
    </div>
  
  <div class="layui-form-item">
    <div class="layui-input-block">
      <button class="layui-btn" lay-submit lay-filter="demo1">立即提交</button>
      <input type="button" class="layui-btn layui-btn-primary" onclick="history.go(-1)" value="返回列表"> 
    </div>
  </div>
  <!-- 更多表单结构排版请移步文档左侧【页面元素-表单】一项阅览 -->
</form>
<div class="layui-footer" style="position:absolute;bottom:0;text-align:center;width:100%">
	
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
<script>
    layui.config({
        base: '../addons/wjyk_nhyk/public/static/layuiadmin/' //静态资源所在路径
    }).extend({
        index: 'lib/index' //主入口模块
    }).use(['jquery','layer', 'index', 'table','laydate'], function(){
    	var $ = layui.$
    	, layer = layui.layer
        , table = layui.table
        , form = layui.form
        , laydate = layui.laydate;
    	

   
    	laydate.render({
	   	    elem: '#test1'//指定元素
   	    	,range: true
   	    	,format: 'yyyy.MM.dd'
   	    });
    	
        
      //监听提交
        form.on('submit(demo1)', function(data){
            var admin = layui.admin

            admin.req({
                url:"<?php echo siteUrl('admin/recharge/edit_recharge','','web'); ?>",
                data:data.field,
                type:"POST",
                done:res=>{
                	if(res.code == 0 ){
                		layer.msg(res.msg,{icon: 1,time:3000},function(){
                			window.location.href="<?php echo siteUrl('admin/recharge/index','','web'); ?>";
                		});
                	}else{
                		layer.msg(res.msg,{icon: 2,time:3000},function(){
                			window.location.href="<?php echo siteUrl('admin/recharge/index','','web'); ?>";
                		});
                	}
                }
            })
            return false
  
        });


        //表单取值
        $('#LAY-component-form-getval').on('click', function(){
            var data = form.val('example');
            alert(JSON.stringify(data));
        });
        
    });
</script>
</body>
</html>