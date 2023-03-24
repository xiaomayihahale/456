<?php /*a:1:{s:83:"D:\phpstudy_pro\WWW\addons\wjyk_nhyk\application\admin\view\coupon\edit_coupon.html";i:1639920798;}*/ ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>项目分类</title>
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
        <label class="layui-form-label">优惠券类别</label>
        <div class="layui-input-block">
            <select name="c_type"  >
		        <option value="1" <?php if($srdb['c_type'] == '1'): ?> selected="" <?php endif; ?>>普通券</option>
		       <option value="2" <?php if($srdb['c_type'] == '2'): ?> selected="" <?php endif; ?>>生日券</option>
	        </select>
        </div>
    </div>


	<div class="layui-form-item">
        <label class="layui-form-label">优惠券类型</label>
        <div class="layui-input-block">
            <select name="type" lay-filter="typeSelect" id="type_id">
		        <option value="1" <?php if($srdb['type'] == '1'): ?> selected="" <?php endif; ?>>满减券</option>
		       <option value="2" <?php if($srdb['type'] == '2'): ?> selected="" <?php endif; ?>>无门槛</option>
	        </select>
        </div>
    </div>
    
    <div class="layui-form-item">
        <label class="layui-form-label">优惠券使用限制(可以在哪里使用)</label>
        <div class="layui-input-block">
        	<select name="region" id="region_id">
		       <option value="2" <?php if($srdb['region'] == '2'): ?> selected="" <?php endif; ?>>商城</option>
		       <option value="3" <?php if($srdb['region'] == '3'): ?> selected="" <?php endif; ?>>全场</option>
	        </select>
        </div>
    </div>
	

    <div class="layui-form-item" id="full_div">
        <label class="layui-form-label">满足金额</label>
        <div class="layui-input-block">
            <input type="text" name="full"  lay-verify="required" placeholder="" autocomplete="off" class="layui-input" value="<?php echo htmlentities($srdb['full']); ?>">
        </div>
    </div>
    <div class="layui-form-item">
        <label class="layui-form-label">优惠金额</label>
        <div class="layui-input-block">
            <input type="text" name="less"  lay-verify="required" placeholder="" autocomplete="off" class="layui-input" value="<?php echo htmlentities($srdb['less']); ?>">
        </div>
    </div>
    <div class="layui-form-item" id= "num_div">
        <label class="layui-form-label">发放数量</label>
        <div class="layui-input-block">
            <input type="text" name="num"  lay-verify="required" placeholder="100" autocomplete="off" class="layui-input" value="<?php echo htmlentities($srdb['num']); ?>">
        </div>
    </div>
    <div class="layui-form-item">
        <label class="layui-form-label">排序</label>
        <div class="layui-input-block">
            <input type="text" name="sort"  lay-verify="required" placeholder="0" autocomplete="off" class="layui-input" value="<?php echo htmlentities($srdb['sort']); ?>">
        </div>
    </div>
    
    <div class="layui-form-item" id="br_div">
        <label class="layui-form-label">有效天数(从生日领券当天开始计算)</label>
        <div class="layui-input-block">
            <input type="text" name="br_day"  lay-verify="required" placeholder="0" autocomplete="off" class="layui-input" value="<?php echo htmlentities($srdb['br_day']); ?>">
        </div>
    </div>

    <div class="layui-form-item">
        <label class="layui-form-label">是否显示</label>
        <div class="layui-input-block">
            <input type="radio" name="is_show" value="1" title="隐藏" <?php if($srdb['is_show'] == '1'): ?>checked<?php endif; ?>>
            <input type="radio" name="is_show" value="2" title="显示" <?php if($srdb['is_show'] == '2' || $srdb['is_show'] == ''): ?>checked<?php endif; ?>>
        </div>
    </div>
    
    
    
    
    
    <div class="layui-form-item" id="eff_div">
        <label class="layui-form-label">有效时间</label>
        <div class="layui-input-block">
            <input type="text" class="layui-input" name="effective" id="test5"  value="<?php echo htmlentities($srdb['effective']); ?>" />
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
    layui.use(['jquery','form', 'laydate','upload','laydate'], function(){
        var $ = layui.$
            ,form = layui.form
            ,layer = layui.layer
            ,laydate = layui.laydate
            , upload = layui.upload;


        
        
        //日期时间范围选择
        laydate.render({
            elem: '#test5'
            ,type: 'datetime'
            ,range: '~' //或 range: '~' 来自定义分割字符
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
                    $('#ico').val(res.msg);
                }
            }
        });
		
        typeIdChange($("#type_id").val());
        
        
        form.on('select(typeSelect)', function(data) {
        	typeIdChange(data.value);
            form.render('select');
        })
        
        function typeIdChange(value){
            if(value == 1){
            	$("#full_div").removeAttr("style");
            	$("input[name='full']").attr("lay-verify","required");
            	
            	$("#num_div").removeAttr("style");
            	$("input[name='num']").attr("lay-verify","required");
            	
            	$("#eff_div").removeAttr("style");
            	$("input[name='effective']").attr("lay-verify","required");
            	
            	$("#br_div").attr("style","display: none");
            	$("input[name='br_day']").removeAttr("lay-verify");
            }else if(value == 2){
            	$("#full_div").attr("style","display: none");
            	$("input[name='full']").removeAttr("lay-verify");
            	
            	$("#num_div").removeAttr("style");
            	$("input[name='num']").attr("lay-verify","required");
            	
            	$("#eff_div").removeAttr("style");
            	$("input[name='effective']").attr("lay-verify","required");
            	
            	$("#br_div").attr("style","display: none");
            	$("input[name='br_day']").removeAttr("lay-verify");
            }else if(value == 3){
            	$("#full_div").attr("style","display: none");
            	$("input[name='full']").removeAttr("lay-verify");
            	
            	$("#num_div").attr("style","display: none");
            	$("input[name='num']").removeAttr("lay-verify");
            	
            	$("#eff_div").attr("style","display: none");
            	$("input[name='effective']").removeAttr("lay-verify");
            	
            	$("#br_div").removeAttr("style");
            	$("input[name='br_day']").attr("lay-verify","required");
            }
        }
        
        //监听提交
        form.on('submit(demo1)', function(data){
            var admin = layui.admin

            $.ajax({
                url:"<?php echo siteUrl('admin/coupon/edit_coupon','','web'); ?>",
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