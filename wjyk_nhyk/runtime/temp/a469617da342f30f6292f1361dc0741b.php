<?php /*a:1:{s:79:"D:\phpstudy_pro\WWW\addons\wjyk_nhyk\application\admin\view\meau\edit_meau.html";i:1639920798;}*/ ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>菜单栏编辑</title>
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
        <label class="layui-form-label">菜单栏名称</label>
        <div class="layui-input-block">
            <input type="text" name="meau_name" required lay-verify="required" placeholder="" autocomplete="off" class="layui-input" value="<?php echo htmlentities($srdb['meau_name']); ?>">
        </div>
    </div>
    <div class="layui-form-item">
        <label class="layui-form-label">菜单栏链接</label>
        <div class="layui-input-block">
            <input type="text" name="meau_link" required lay-verify="required" placeholder="" autocomplete="off" class="layui-input" value="<?php echo htmlentities($srdb['meau_link']); ?>">
        </div>
    </div>
    
    <div class="layui-form-item">
        <label class="layui-form-label">排序值</label>
        <div class="layui-input-block">
            <input type="number" name="order" required lay-verify="required" placeholder="" autocomplete="off" class="layui-input" value="<?php echo htmlentities($srdb['order']); ?>">
        </div>
    </div>
    

    
    
    <div class="layui-form-item" >
        <label class="layui-form-label">图标</label>
        <button type="button" class="layui-btn" id="icon_upload">上传图片</button>
        <div class="layui-form-mid layui-word-aux">图片建议尺寸50px * 50px，或者等比例图片</div>
        <div class="layui-input-block">
            <img class="layui-upload-img" id="icon_upload_img" style="margin-top: 10px;height: 50px;width: 50px" <?php if(!empty($srdb['icon'])): ?> src="<?php echo htmlentities($srdb['icon']); ?>" <?php endif; ?> >
            <input type="hidden" name="icon" id="icon_upload_log"  class="icon"  <?php if(!empty($srdb['icon'])): ?> value="<?php echo htmlentities($srdb['icon']); ?>" <?php endif; ?> >
        </div>
    </div>
    
    <div class="layui-form-item" >
        <label class="layui-form-label">图标选中</label>
        <button type="button" class="layui-btn" id="icon_select_upload">上传图片</button>
        <div class="layui-form-mid layui-word-aux">图片建议尺寸50px * 50px，或者等比例图片</div>
        <div class="layui-input-block">
            <img class="layui-upload-img" id="icon_select_upload_img" style="margin-top: 10px;height: 50px;width: 50px" <?php if(!empty($srdb['icon_select'])): ?> src="<?php echo htmlentities($srdb['icon_select']); ?>" <?php endif; ?> >
            <input type="hidden" name="icon_select" id="icon_select_upload_log"  class="icon_select"  <?php if(!empty($srdb['icon_select'])): ?> value="<?php echo htmlentities($srdb['icon_select']); ?>" <?php endif; ?> >
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
                    $('#logo').val(res.msg);
                }
            }
        });
        
        //监听提交
        form.on('submit(demo1)', function(data){
            var admin = layui.admin

            $.ajax({
                url:"<?php echo siteUrl('admin/meau/edit_meau','','web'); ?>",
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