<?php /*a:2:{s:82:"D:\phpstudy_pro\WWW\addons\wjyk_nhyk\application\admin\view\user\import_index.html";i:1639920798;s:60:"../addons/wjyk_nhyk/application/admin/view/index/footer.html";i:1641211050;}*/ ?>


<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>待绑定用户列表</title>
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <link rel="stylesheet" href="../addons/wjyk_nhyk/public/static/layuiadmin/layui/css/layui.css" media="all">
    <link rel="stylesheet" href="../addons/wjyk_nhyk/public/static/layuiadmin/style/admin.css" media="all">
</head>
<style>
    .layui-table-cell{
        display:table-cell;
        vertical-align: middle;
    }
</style>
<body>

<div class="layui-fluid">
    <div class="layui-row layui-col-space15">
        <div class="layui-col-md12">
            <div class="layui-card">
                <div class="layui-card-header">待绑定用户列表</div>
                <div class="layui-card-body">
                    <div class="demoTable layui-form" style="margin-bottom:10px">
                        <div class="layui-inline">
                           <button type="button" class="layui-btn" id="delAll" data-type="delAll">清空所有导入数据</button>
                        </div>  
                        <div class="layui-inline">
                            <input class="layui-input" placeholder="请输入会员昵称" name="id" id="test-table-demoReload" autocomplete="off">
                        </div>     
                        <div class="layui-inline">
                            <input class="layui-input" placeholder="请输入会员手机号码" name="mobile" id="test-table-demoReload" autocomplete="off">
                        </div>                 
                            
                               
                        <button class="layui-btn" data-type="reload">搜索</button>
                       		<div class="layui-inline" style="margin-left:10px">
	             	  		 <button type="button" class="layui-btn" id="uploadExcel">批量导入会员</button>
	             	  		<a href="<?php echo MODULE_URL; ?>public/excel/202108.xlsx" download="会员示例.xlsx">导入示例文件.xlsx</a> 
	             		</div>
			             		
                    </div>
                    <table class="layui-hide" id="test-table-operate" lay-filter="test-table-operate"></table>
					
					

                    <script type="text/html" id="test-table-operate-barDemo">		
                        <a class="layui-btn layui-btn-danger layui-btn-xs" lay-event="del">删除</a>
                    </script>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- 表单弹框 -->
<script  type="text/html" id="calendarForm">
    <table class="layui-hide" id="my-offline" lay-filter="test-table-operate"></table>
</script>

<script src="../addons/wjyk_nhyk/public/static/layuiadmin/layui/layui.js"></script>
<script>
    layui.config({
        base: '../addons/wjyk_nhyk/public/static/layuiadmin/' //静态资源所在路径
    }).extend({
        index: 'lib/index' //主入口模块
        	,excel: '../layui/layui_exts/excel/excel',
    }).use(['jquery','index', 'table','upload','excel'], function(){
        var table = layui.table
        ,$ = layui.$
        ,excel = layui.excel
            ,admin = layui.admin,upload=layui.upload;

        table.render({
            elem: '#test-table-operate'
            ,url:"<?php echo siteUrl('admin/user/user_import_list','','web'); ?>"
            ,cols: [[
                {field:'nickname', title: '用户昵称'}
                
                ,{field:'mobile', title: '手机号码'}
                ,{field:'money', title: '余额', sort: true}
                ,{field:'commission', title: '佣金', sort: true}
                ,{field:'integral', title: '积分', sort: true}
                ,{field:'status', title: '绑定状态', sort: true ,templet:function(d){
           
                	if(d.status  == 0){
                		return "未绑定";
                	}else {
                		return "已绑定";
                	}
                }}
                ,{field:'createtime', title: '添加时间', sort: true ,templet:function(d){
                        return layui.util.toDateString(d.createtime*1000, "yyyy-MM-dd HH:mm");
                    }}
                ,{align:'center', toolbar: '#test-table-operate-barDemo'}
            ]]
            ,page: true
        });
     
        upload.render({
            elem: '#uploadExcel'
            ,url: "<?php echo siteUrl('admin/index/uploadExcel','','web'); ?>" //改成您自己的上传接口
            ,accept: 'file'
            ,acceptMime: 'application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
           , exts: 'xlsx|xls'
            ,done: function(res){
                if(res.code > 0){
                    return layer.msg('上传失败');
                }else{
                	
                    layer.msg('批量导入成功 ');
                    
                  
                    //执行重载 --id
                    table.reload('test-table-operate', {
                        page: {
                            curr: 1 //重新从第 1 页开始
                        }
                    });
                    
                }
            },
        });
       

        //监听表格复选框选择
        table.on('checkbox(test-table-operate)', function(obj){
            console.log(obj)
        });
        //监听工具条
        table.on('tool(test-table-operate)', function(obj){
            var data = obj.data;
            if(obj.event === 'del'){
                layer.confirm('确定删除该用户吗？', function(index){
                    window.location.href="<?php echo siteUrl('admin/user/del_import_user','','web'); ?>&id="+data.id;
                    layer.close(index);
                });
            }
        });


        var $ = layui.$, active = {
            reload: function(){
                var demoReload = $('#test-table-demoReload');    
                var level_id = $('#level_id');
                var mobile = $("input[name='mobile']");
                //执行重载 --id
                table.reload('test-table-operate', {
                    page: {
                        curr: 1 //重新从第 1 页开始
                    }
                    ,where: {
                        'nickname': demoReload.val(),                        
                        'levelId':level_id.val(),
                        'mobile':mobile.val()
                    }
                });
            },
            delAll:function(){
            	layer.confirm('确定删除所有导入吗？', function(index){
                    window.location.href="<?php echo siteUrl('admin/user/del_import_alluser','','web'); ?>";
                    layer.close(index);
                });
            }
        };

        $('.demoTable .layui-btn').on('click', function(){
            var type = $(this).data('type');
            active[type] ? active[type].call(this) : '';
        });

    });
</script>
</body>
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
</html>