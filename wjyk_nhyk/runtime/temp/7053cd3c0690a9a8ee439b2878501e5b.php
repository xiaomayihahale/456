<?php /*a:2:{s:86:"D:\phpstudy_pro\WWW\addons\wjyk_nhyk\application\admin\view\distribution\withdraw.html";i:1639920798;s:60:"../addons/wjyk_nhyk/application/admin/view/index/footer.html";i:1641211050;}*/ ?>


<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>待审核提现记录列表</title>
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
                <div class="layui-card-header">提现记录</div>
                <div class="layui-card-body">
                    <div class="demoTable" style="margin-bottom:10px;display: flex;">

                        <div class="layui-form" action="">
                            <div class="layui-input-inline">
                                <label class="layui-form-label">提现状态</label>
                                <div class="layui-input-block">
                                    <select  lay-verify="" id="is_status">
                                        <option value="0">请选择</option>
                                        <option value="1">待审核</option>
                                        <option value="2">已驳回</option>
                                        <option value="3">已打款</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <button class="layui-btn" style="margin-left:20px;" data-type="reload">搜索</button>

                    </div>
                    <table class="layui-hide" id="test-table-operate" lay-filter="test-table-operate"></table>
                    <script type="text/html" id="test-table-operate-barDemo">
                        <a class="layui-btn layui-btn-primary layui-btn-xs" lay-event="detail">查看</a>
                    </script>
                </div>
            </div>
        </div>
    </div>
</div>

<script src="../addons/wjyk_nhyk/public/static/layuiadmin/layui/layui.js"></script>
<script>
    layui.config({
        base: '../addons/wjyk_nhyk/public/static/layuiadmin/' //静态资源所在路径
    }).extend({
        index: 'lib/index' //主入口模块
    }).use(['index', 'table','jquery'], function(){
        var table = layui.table
            ,admin = layui.admin;
        table.render({
            elem: '#test-table-operate'
            ,url:"<?php echo siteUrl('admin/distribution/withdraw_list','','web'); ?>"
            ,cols: [[
                {field:'id', title: '提现者信息',templet:function(d){
                        return "<img style='max-width:25px;' src='"+d.avatar+"'></img>"+d.name;
                    }}
                ,{field:'apply_price', title: '申请金额(元)', sort: true}
                ,{field:'price', title: '实际金额(元)', sort: true}
                ,{field:'w_type', title: '提现方式', sort: true,templet:function(d){
                        if(d.w_type == 1){
                            return "提现到银行卡";
                        }else if(d.w_type == 2){
                            return "提现到微信零钱";
                        }else if(d.w_type==3){
                        	return "提现到支付宝";
                        }
                    }}
                ,{field:'createtime', title: '申请时间', sort: true ,templet:function(d){
                        return layui.util.toDateString(d.createtime*1000, "yyyy-MM-dd HH:mm");
                    }}
                ,{align:'center', toolbar: '#test-table-operate-barDemo'}
            ]]
            ,page: true
        });



        //监听表格复选框选择
        table.on('checkbox(test-table-operate)', function(obj){
            console.log(obj)
        });
        //监听工具条
        table.on('tool(test-table-operate)', function(obj){
            var data = obj.data;
            if(obj.event === 'detail'){
                window.location.href="<?php echo siteUrl('admin/distribution/edit_withdraw','','web'); ?>&id="+data.id;
            }
        });
        var $ = layui.$, active = {
            reload: function(){
                var status = $('#is_status');
                //执行重载 --id
                table.reload('test-table-operate', {
                    page: {
                        curr: 1 //重新从第 1 页开始
                    }
                    ,where: {
                        'status': status.val(),
                    }
                });
            }
        };
        $('.demoTable .layui-btn').on('click', function(){
            var type = $(this).data('type');
            active[type] ? active[type].call(this) : '';
        });

        $('.test-table-operate-btn .layui-btn').on('click', function(){
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