<?php /*a:2:{s:77:"D:\phpstudy_pro\WWW\addons\wjyk_nhyk\application\admin\view\member\level.html";i:1639920798;s:60:"../addons/wjyk_nhyk/application/admin/view/index/footer.html";i:1641211050;}*/ ?>


<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>用户列表</title>
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, member-scalable=0">
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
                <div class="layui-card-header">会员等级</div>
                <div class="layui-card-body">

                    <div class="layui-btn-group test-table-operate-btn" style="margin-bottom: 10px;">
                        <button class="layui-btn" data-type="addFirst">添加等级</button>
                    </div>
                    <table class="layui-hide" id="test-table-operate" lay-filter="test-table-operate"></table>



                    <script type="text/html" id="test-table-operate-barDemo">
                    <a class="layui-btn layui-btn-xs" lay-event="edit">编辑</a>
                    {{#  if(d.is_default ==1){ }}
                    <a class="layui-btn layui-btn-danger layui-btn-xs" lay-event="del">删除</a>
                    {{#  } }}
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
    }).use(['index', 'table','jquery'], function(){
        var $ = layui.$
            ,table = layui.table
            ,admin = layui.admin;

        table.render({
            elem: '#test-table-operate'
            ,url:"<?php echo siteUrl('admin/member/level_list','','web'); ?>"
            ,cols: [[
                {field:'member_name', title: '等级名称'}
                ,{field:'discount', title: '折扣', sort: true,templet:function(d){
                        if(d.discount == 0){
                            return "无折扣";
                        }else{
                            return d.discount+"折";
                        }
                    }}
                ,{field:'need_money', title: '升级条件', sort: true,templet:function(d){
                        if(d.need_money == 0){
                            return "默认等级";
                        }else{
                            return d.need_money;
                        }
                    }}
                ,{align:'center', toolbar: '#test-table-operate-barDemo'}
            ]]
        });


        //监听表格复选框选择
        table.on('checkbox(test-table-operate)', function(obj){
            console.log(obj)
        });
        //监听工具条
        table.on('tool(test-table-operate)', function(obj){
            var data = obj.data;
            if(obj.event === 'del'){
                layer.confirm('确定删除该等级吗？', function(index){
                    window.location.href="<?php echo siteUrl('admin/member/del_level','','web'); ?>&id="+data.id;
                    layer.close(index);
                });
            } else if(obj.event === 'edit'){
                layer.open({
                    type:2,
                    area : [ '80%', '50%' ],
                    title:"编辑等级",
                    yes: function(index, layero){
                        //按钮【按钮一】的回调
                        layer.close(index);
                    },
                    cancel: function(){
                        //右上角关闭回调

                        //return false 开启该代码可禁止点击该按钮关闭
                    },
                    content:"<?php echo siteUrl('admin/member/level_edit','','web'); ?>&id="+data.id,
                    success:function(){


                    }
                });
            }
        });
        var $ = layui.$, active = {
            addFirst: function(){ //添加
                layer.open({
                    type:2,
                    area : [ '80%', '50%' ],
                    title:"添加优惠",
                    yes: function(index, layero){
                        //按钮【按钮一】的回调
                        layer.close(index);
                    },
                    cancel: function(){
                        //右上角关闭回调

                        //return false 开启该代码可禁止点击该按钮关闭
                    },
                    content:"<?php echo siteUrl('admin/member/level_edit','','web'); ?>",
                    success:function(){


                    }
                });
            }

        };


        $('.test-table-operate-btn .layui-btn').on('click', function(){
            var type = $(this).data('type');
            active[type] ? active[type].call(this) : '';
        });
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