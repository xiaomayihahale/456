<?php /*a:2:{s:76:"D:\phpstudy_pro\WWW\addons\wjyk_nhyk\application\admin\view\store\index.html";i:1639920798;s:60:"../addons/wjyk_nhyk/application/admin/view/index/footer.html";i:1641211050;}*/ ?>


<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>门店列表</title>
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <link rel="stylesheet" href="../addons/wjyk_nhyk/public/static/layuiadmin/layui/css/layui.css" media="all">
    <link rel="stylesheet" href="../addons/wjyk_nhyk/public/static/layuiadmin/style/admin.css" media="all">
</head>
<style>
    .layui-table-cell, .layui-table-tool-panel li {
        height: auto;
    }
</style>
<body>

<div class="layui-fluid">
    <div class="layui-row layui-col-space15">
        <div class="layui-col-md12">
            <div class="layui-card">
                <div class="layui-card-header">门店列表</div>
                <div class="layui-card-body">
                    <div class=" demoTable layui-form" style="margin-bottom:10px">
                        <button class="layui-btn" data-type="addgoods">添加门店</button> 
                    	
                    	<div class="layui-inline" style="margin-left:10px">
			              <input class="layui-input" placeholder="请输入门店名称" name="id" id="test-table-demoReload" autocomplete="off">
			            </div>
			            <button class="layui-btn" data-type="reload">搜索</button>
					</div>
                    <table class="layui-hide" id="test-table-operate" lay-filter="test-table-operate"></table>

                    <script type="text/html" id="test-table-operate-barDemo">
						<a class="layui-btn layui-btn-xs" lay-event="add_admin">添加店长</a>
						<a class="layui-btn layui-btn-xs" lay-event="add_user">添加店员</a>
                        <a class="layui-btn layui-btn-xs" lay-event="edit">编辑</a>
						<a class="layui-btn layui-btn-danger layui-btn-xs" lay-event="del">删除</a>
						<a class="layui-btn layui-btn-xs" lay-event="store">门店统计</a>
						<a class="layui-btn layui-btn-xs" lay-event="printer">打印机管理</a>
                    </script>
                    
                    <script type="text/html" id="displayTpl">
  						{{#  if(d.status == 0){ }}
                        <input type="checkbox" checked lay-skin="switch" lay-filter="encrypt"  lay-text="显示|隐藏" >
                        {{#  } else { }}
                        <input type="checkbox" lay-skin="switch" lay-filter="encrypt" lay-text="显示|隐藏" >
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
            ,url:"<?php echo siteUrl('admin/store/store_list','','web'); ?>"
            ,cols: [[
				{field:'store_name',width:"20%",  title: '门店名称'}
				,{field:'store_addres',width:"20%",  title: '门店地址'}
				,{field:'status',  title: '是否显示',width:"10%",  sort: true,templet: '#displayTpl', event: 'setSign'}
				//,{field:'closure',  title: '是否营业', sort: true,templet: '#yingYe', event: 'setClosure'}
                ,{field:'create_date',  title: '添加时间',width:"20%",width:"20%", sort: true ,templet:function(d){
               
                	return layui.util.toDateString(d.create_date*1000, "yyyy-MM-dd HH:mm");
                }}
                ,{width:"30%", align:'center', toolbar: '#test-table-operate-barDemo'}
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
            if(obj.event === 'del'){
                layer.confirm('确定删除该门店吗？', function(index){
                	window.location.href="<?php echo siteUrl('admin/store/del_store','','web'); ?>&id="+data.id;
                    layer.close(index);
                });
            } else if(obj.event === 'edit'){
                //window.location.href="<?php echo siteUrl('admin/store/edit_store','','web'); ?>&id="+data.id;
                
                layer.open({
                    type:2,
                    area: ['1000px', '700px'],
                    title:"门店修改",
                    yes: function(index, layero){
                       
                    },
                    cancel: function(){ 
                        //右上角关闭回调
                        
                        //return false 开启该代码可禁止点击该按钮关闭
                    },
                    content:"<?php echo siteUrl('admin/store/edit_store','','web'); ?>&id="+data.id,
                    success:function(){
                    	
                    }  
                });
                
            }else if(obj.event=== "add_admin"){
            	
            	layer.open({
                    type:2,
                    area: ['800px', '500px'],
                    title:"添加店长",
                   
                    content:"<?php echo siteUrl('admin/storeAdmin/add_admin_index','','web'); ?>&id="+data.id,
                    success:function(){
                    	
                    }  
                });
            	
            	
            }else if(obj.event=== "add_user"){
            	layer.open({
                    type:2,
                    area: ['800px', '500px'],
                    title:"添加店员",
                    
                    content:"<?php echo siteUrl('admin/storeAdmin/user_index','','web'); ?>&id="+data.id,
                    success:function(){
                    	
                    }  
                });
            }else if(obj.event === 'setClosure'){
                admin.req({
                    url:"<?php echo siteUrl('admin/store/closure_change','','web'); ?>&id="+data.id,
                    type:"POST",
                    done:res=>{
                        table.reload('test-table-operate', {
                            // page: {
                            //     curr: 1 //重新从第 1 页开始
                            // }
                        });
                    }
                })
            }else if(obj.event === 'setSign'){
                admin.req({
                    url:"<?php echo siteUrl('admin/store/change','','web'); ?>&id="+data.id,
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
            else if(obj.event === 'store'){
            	layer.open({
                    type:2,
                    area: ['1500px', '800px'],
                    title:data.store_name+" 统计",
                    
                    content:"<?php echo siteUrl('admin/storeAdmin/store_info','','web'); ?>&id="+data.id,
                    success:function(){
                    	
                    }  
                });
            }else if(obj.event === 'printer'){
            	layer.open({
                    type:2,
                    area: ['90%', '80%'],
                    title:"打印机管理",
                   // btn: ['确定', '取消'],
                    yes:function(index, layero){
                    	
                    },
                    content:"<?php echo siteUrl('admin/printer/index','','web'); ?>&store_id="+data.id,
                    success:function(){
                    	
                    }  
                });
            }
        });
     

        var $ = layui.$, active = {
            reload: function(){
            	var demoReload = $('#test-table-demoReload');
                var categoryid = $('#categoryid');
                //执行重载 --id
                table.reload('test-table-operate', {
                  page: {
                    curr: 1 //重新从第 1 页开始
                  }
                  ,where: {
                	  'name': demoReload.val(),
                    'categoryid': categoryid.val()
                  }
                });
              },
              addgoods:function(){
            	  layer.open({
                      type:2,
                      area: ['1000px', '700px'],
                      title:"门店新增",
                      yes: function(index, layero){
                         
                      },
                      cancel: function(){ 
                          //右上角关闭回调
                          
                          //return false 开启该代码可禁止点击该按钮关闭
                      },
                      content:"<?php echo siteUrl('admin/store/edit_store','','web'); ?>",
                      success:function(){
                      	
                      }  
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