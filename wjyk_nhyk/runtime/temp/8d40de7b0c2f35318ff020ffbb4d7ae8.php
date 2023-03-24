<?php /*a:2:{s:76:"D:\phpstudy_pro\WWW\addons\wjyk_nhyk\application\admin\view\goods\index.html";i:1639920798;s:60:"../addons/wjyk_nhyk/application/admin/view/index/footer.html";i:1641211050;}*/ ?>


<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>积分商品列表</title>
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
                <div class="layui-card-header">商品列表</div>
                <div class="layui-card-body">
                    <div class=" demoTable layui-form" style="margin-bottom:10px">
                    	<button class="layui-btn" data-type="addgoods">添加商品</button>
                    	<div class="layui-inline" style="margin-left:10px">
			              <input class="layui-input" placeholder="请输入商品名称" name="id" id="test-table-demoReload" autocomplete="off">
			            </div>
			            <div class="layui-input-inline">
				            	<label class="layui-form-label">商品区域</label>
							    <div class="layui-input-block">
							      <select  lay-verify="" id="is_status">
					              	<option value="">请选择商品区域</option>
							        <option value="1">每日好货</option>
							        <option value="2">会员专区</option>
							        <option value="3">普通商品</option>
							      </select>
							    </div>
						 </div>
						 <div class="layui-input-inline">
				            	<label class="layui-form-label">商品类型</label>
							    <div class="layui-input-block">
							      <select  lay-verify="" id="is_type">
					              	<?php if(empty($cate)): ?>	
					              	      <option value="">暂无</option>	
					              	 <?php else: ?>		
					              	     <option value="">请选择商品类型</option>					        						    	
						              	 <?php foreach($cate as $v): ?>						                  
						              		 <option value="<?php echo htmlentities($v['id']); ?>" ><?php echo htmlentities($v['c_name']); ?></option>							        
						              	 <?php endforeach; ?>							    
					              	 <?php endif; ?>
							      </select>
							    </div>
						 </div>
			            <button class="layui-btn" data-type="reload">搜索</button>
					</div>
                    <table class="layui-hide" id="test-table-operate" lay-filter="test-table-operate"></table>

                    <script type="text/html" id="test-table-operate-barDemo">
                        <a class="layui-btn layui-btn-xs" lay-event="edit">编辑</a>
                        <a class="layui-btn layui-btn-danger layui-btn-xs" lay-event="del">删除</a>
                    </script>
                    
                    <script type="text/html" id="displayTpl">
  						
                        {{#  if(d.is_show == 2){ }}
                        <input type="checkbox" checked lay-skin="switch" lay-filter="encrypt"  lay-text="上架|下架" >
                        {{#  } else { }}
                        <input type="checkbox" lay-skin="switch" lay-filter="encrypt" lay-text="上架|下架" >
                        {{#  } }}
                 
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
    }).use(['index', 'table'], function(){
        var table = layui.table
            ,admin = layui.admin;

        table.render({
            elem: '#test-table-operate'
            ,url:"<?php echo siteUrl('admin/goods/goods_list','','web'); ?>"
            ,cols: [[
				{field:'cid',  title: '所属分类',templet:function(d){
					return d.c_name;
				}}
				,{field:'name',  title: '商品名称',templet:function(d){
                	return "<img style='max-width:25px;' src='"+d.cover+"'></img>"+d.goods_name;
                }}
                ,{field:'original_price', title: '价格（元）', sort: true}
                ,{field:'is_show',  title: '是否上架', sort: true,templet: '#displayTpl', event: 'setSign'}
                ,{field:'region_type',  title: '商品区域', sort: true,templet: function(d){
                	if(d.is_exchange == 2){
                		return "兑换专区";
                	}
                	if(d.region_type == 1){
                		return "每日好货";
                	}else if(d.region_type == 2){
                		return "会员专区";
                	}else if(d.region_type == 3){
                		return "普通商品"	
                	}
                }}
                ,{field:'createtime',  title: '添加时间', sort: true ,templet:function(d){
                	return layui.util.toDateString(d.createtime*1000, "yyyy-MM-dd HH:mm");
                }}
                ,{width:218, align:'center', toolbar: '#test-table-operate-barDemo'}
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
            	window.location.href="<?php echo siteUrl('admin/goods/edit_goods','','web'); ?>&id="+data.id;
            } else if(obj.event === 'del'){
                layer.confirm('确定删除该产品吗？', function(index){
                	window.location.href="<?php echo siteUrl('admin/goods/del_goods','','web'); ?>&id="+data.id;
                    layer.close(index);
                });
            } else if(obj.event === 'edit'){
                window.location.href="<?php echo siteUrl('admin/goods/edit_goods','','web'); ?>&id="+data.id;
            }else if(obj.event === 'setSign'){
                admin.req({
                    url:"<?php echo siteUrl('admin/goods/change','','web'); ?>&id="+data.id,
                    type:"POST",
                    done:res=>{
                        table.reload('test-table-operate', {
                            // page: {
                            //     curr: 1 //重新从第 1 页开始
                            // }
                        });
                    }
                })
            }
        });
        
        table.on('toolbar(test-table-operate)', function(obj){
       	  var checkStatus = table.checkStatus(obj.config.id);
       	  switch(obj.event){
       	    case 'add':
       	    	window.location.href="<?php echo siteUrl('admin/goods/edit_goods','','web'); ?>";
       	    break;
       	  };
       	});

        var $ = layui.$, active = {
            reload: function(){
            	var demoReload = $('#test-table-demoReload');
                var categoryid = $('#is_status');
                var typeid = $('#is_type');
                //执行重载 --id
                table.reload('test-table-operate', {
                  page: {
                    curr: 1 //重新从第 1 页开始
                  }
                  ,where: {
                	  'name': demoReload.val(),
                    'regionId': categoryid.val(),
                    'cateId':typeid.val()
                  }
                });
              },
              addgoods:function(){
           	   window.location.href="<?php echo siteUrl('admin/goods/edit_goods','','web'); ?>";
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