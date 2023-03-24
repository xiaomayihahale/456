<?php /*a:1:{s:87:"D:\phpstudy_pro\WWW\addons\wjyk_nhyk\application\admin\view\foodcategory\edit_cate.html";i:1639920798;}*/ ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>分类</title>
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
    <label class="layui-form-label">分类名称</label>
    <div class="layui-input-block">
      <input type="text" name="c_name" required lay-verify="required" placeholder="请输入分类名称" autocomplete="off" class="layui-input" value="<?php echo htmlentities($srdb['c_name']); ?>">
    </div>
  </div>
  <div class="layui-form-item">
    <label class="layui-form-label">分类图标</label>

    <div class="layui-upload col-sm-9">
      <button type="button" class="layui-btn" id="test1"  >选择图片</button>
      <div class="layui-form-mid layui-word-aux">建议上传55px * 55px尺寸</div>
      <div class="layui-input-block">
        <img class="layui-upload-img" id="demo1" style="margin-top: 10px;height: 150px;width: 150px" <?php if($srdb['ico']==''): else: ?>src="<?php echo htmlentities($srdb['ico']); ?>"<?php endif; ?>">
        <input type="hidden" name="ico" id="ico" value="<?php echo htmlentities($srdb['ico']); ?>">
      </div>
    </div>
  </div>

  <div class="layui-form-item">
    <label class="layui-form-label">排序</label>
    <div class="layui-input-block">
      <input type="number" name="sort"  placeholder="请输入排序值 ，数值越高，越在前显示" autocomplete="off" class="layui-input" value="<?php echo htmlentities($srdb['sort']); ?>">
    </div>
  </div>
   
  <div class="layui-form-item">
    <label class="layui-form-label">是否开启</label>
    <div class="layui-input-block">
      <input type="radio" name="is_show" value="2" title="显示" <?php if($srdb['is_show'] == '2' || $srdb['is_show'] == ''): ?>checked<?php endif; ?>>
      <input type="radio" name="is_show" value="1" title="隐藏" <?php if($srdb['is_show'] == '1'): ?>checked<?php endif; ?>>
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
    layui.use(['jquery','form', 'laydate','upload'], function(){
    	var $ = layui.$
    		,form = layui.form
            ,layer = layui.layer
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
                    $('#ico').val(res.msg);
                }
            }
        });
    	
      //监听提交
        form.on('submit(demo1)', function(data){
            var admin = layui.admin
            
            admin.req({
                url:"<?php echo siteUrl('admin/foodCategory/edit_cate','','web'); ?>",
                data:data.field,
                type:"POST",
                done:res=>{
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
        $("#return").click(function(){
        	window.parent.location.reload()//刷新父页面
        	var index = parent.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
      	    parent.layer.close(index); //再执行关闭  
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