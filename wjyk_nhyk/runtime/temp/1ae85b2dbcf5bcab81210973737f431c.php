<?php /*a:2:{s:75:"D:\phpstudy_pro\WWW\addons\wjyk_nhyk\application\admin\view\user\index.html";i:1639920798;s:60:"../addons/wjyk_nhyk/application/admin/view/index/footer.html";i:1641211050;}*/ ?>


<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>用户列表</title>
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
                <div class="layui-card-header">用户列表</div>
                <div class="layui-card-body">
                    <div class="demoTable layui-form" style="margin-bottom:10px">
                        
                        <div class="layui-inline">
                            <input class="layui-input" placeholder="请输入会员昵称" name="id" id="test-table-demoReload" autocomplete="off">
                        </div>     
                        <div class="layui-inline">
                            <input class="layui-input" placeholder="请输入会员手机号码" name="mobile" autocomplete="off">
                        </div>  
                         <div class="layui-inline">
                            <input class="layui-input" placeholder="请输入会员说明" name="desc"  autocomplete="off">
                        </div>                   
                             <div class="layui-inline">  
                                                      	 <select lay-filter="typeSelect" name="level_id" id = "level_id" >	
                                                      	 <?php if(empty($levels)): ?>	<option value="">暂无</option>	
                                                      	 <?php else: ?>							        
                                                      	 <option value="">选择会员等级</option>							    	
                                                      	 <?php foreach($levels as $v): ?>						                  
                                                      	 <option value="<?php echo htmlentities($v['id']); ?>" ><?php echo htmlentities($v['member_name']); ?></option>							        
                                                      	 <?php endforeach; ?>							    
                                                      	 <?php endif; ?>				           
                                                      	  </select>                       
                                </div>
                                
                               
                        <button class="layui-btn" data-type="reload">搜索</button>
                         <div class="layui-inline" style="margin-left:10px">
                             <button type="button" class="layui-btn layui-btn-warm" id="exportExcel" name="exportExcel"><i class="layui-icon layui-icon-download-circle"></i>导出Excel</button>
			             	  		
			             </div>
			             <div class="layui-inline" style="margin-left:10px">
                             <button type="button" class="layui-btn layui-btn-warm" id="tran_voucher" name="tran_voucher"><i class="layui-icon layui-icon-share"></i>批量送券</button>	
			             </div>	
                    </div>
                    <table class="layui-hide" id="test-table-operate" lay-filter="test-table-operate"></table>
					
					

                    <script type="text/html" id="test-table-operate-barDemo">																							
                        <a class="layui-btn layui-btn-sm layui-btn-radius layui-btn-danger" lay-event="meal">套餐卡</a>							
                        <a class="layui-btn layui-btn-xs" lay-event="edit">编辑</a>
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
            ,url:"<?php echo siteUrl('admin/user/user_list','','web'); ?>"
            ,cellMinWidth: 80
            ,cols: [[
            	 {type: 'checkbox',width:'4%'}
            	,{field:'nickname', width:'9%', title: '用户昵称'}
                ,{field:'avatar',  width:'9%', title: '用户头像',templet:function(d){
                        return "<img style='max-width:25px;' src='"+d.avatar+"'></img>";
                    }}
                ,{field:'mobile',  width:'9%', title: '手机号码'}
                ,{field:'desc', width:'9%', title: '个人说明'}
                ,{field:'credit2', width:'9%', title: '余额', sort: true}
                ,{field:'credit4',width:'11%',  title: '会员等级',templet:function(d){

                            return "会员等级："+d.member_name+"<br>消费金额:"+ d.credit4;
                    }} 
                ,{field:'pid',width:'9%', title: '上级信息',templet:function(d){    
                	if(!d.pid){                		
                		return "<font color='#FF0000'>暂无</font>";  
                	}else{         
                			return "名称："+d.pname+"<br>头像:<img style='max-width:25px;' src='"+d.pavatar+"'></img> <br>号码:"+d.pphone;  
                	}                                   
                }}, 
                {field:'down_count',width:'9%', title: '下级', sort: true}
                ,{field:'createtime', width:'9%', title: '添加时间', sort: true ,templet:function(d){
                        return layui.util.toDateString(d.createtime*1000, "yyyy-MM-dd HH:mm");
                    }}
                ,{align:'center', width:'15%', toolbar: '#test-table-operate-barDemo'}
            ]]
            ,page: true
        });
     
        $('#tran_voucher').on('click', function(){
        	var checkStatus = table.checkStatus('test-table-operate'),data = checkStatus.data;
        	var uids = "";
        	
        	for(i in data){
        		uids +=data[i].id+",";
        	}
            if(data.length>0){
            	layer.open({
                    type:2,
                    area: ['75%', '80%'],
                    title:"选择优惠券",
                    btn: ['确定', '取消'],
                    yes: function(index, layero){
                        //按钮【按钮一】的回调
                       var iframeWin1 = window[layero.find('iframe')[0]['name']];
                       var checkedData = iframeWin1.callbackdata(); //获取选中节点的数据
                       
                    	 if(checkedData != null && checkedData.length>0){
                    		var couponid = checkedData[0].id;
                    	
                    		
                    		layer.confirm('确定赠送吗？', function(index){
                        	  $.ajax({
                        	        url:"<?php echo siteUrl('admin/cash/trans_coupon','','web','nhykrout'); ?>",
                        	        data:{'coupons':couponid,'uids':uids},
                        	        type:"POST",
                        	        success: function(data){
                        	          var res = JSON.parse(data);
                        	          if(res.code == 0 ){
                        	            layer.msg(res.msg,{icon: 1,time:2000},function(){
                        	            });
                        	          }else{
                        	            layer.msg(res.msg,{icon: 2,time:2000},function(){
                        	            });
                        	          }
                        	        }
                        	      })
                          });
                    		
                    		
                    	 }
                    	layer.close(index);
                    },
                    cancel: function(){ 
                        //右上角关闭回调
                        
                        //return false 开启该代码可禁止点击该按钮关闭
                    },
                    content:"<?php echo siteUrl('admin/coupon/choose_index','','web'); ?>",
                    success:function(){
                    	
             
                    }  
                });
            }else{
            	layer.msg("请先选择用户",{icon: 1,time:2000},function(){
	            });
            }
        	 
        });
        
        $('#exportExcel').on('click', function(){
        	var nickname = $("input[name='id']").val();
            var mobile = $("input[name='mobile']").val();
            var level_id = $("#level_id").val();
			// 模拟从后端接口读取需要导出的数据
			$.ajax({
				url:  "<?php echo siteUrl('admin/user/user_log_list_export','','web'); ?>"
				,data :{
                    'nickname': nickname,
                    'mobile':mobile,
                    'level_id':level_id
				}
				,dataType: 'json'
				,success(res) {
					var data = res.data;
					console.log(data);
					// 重点！！！如果后端给的数据顺序和映射关系不对，请执行梳理函数后导出
					data = excel.filterExportData(data, [
					    'nickname'
					    ,'mobile'
						,'sex'
						,'money'
						,'integral'
						,'commission'
						,'createtime'
					]);
					// 重点2！！！一般都需要加一个表头，表头的键名顺序需要与最终导出的数据一致
					
					
					var sDate =new Date();
					
					
					var year = sDate.getFullYear();
		            var month = sDate.getMonth() + 1 < 10 ? "0" + (sDate.getMonth() + 1) : sDate.getMonth() + 1;
		            var date = sDate.getDate() < 10 ? "0" + sDate.getDate() : sDate.getDate();
		            var hour = sDate.getHours()< 10 ? "0" + sDate.getHours() : sDate.getHours();
		            var minute = sDate.getMinutes()< 10 ? "0" + sDate.getMinutes() : sDate.getMinutes();
		            var second = sDate.getSeconds()< 10 ? "0" + sDate.getSeconds() : sDate.getSeconds();
		            
		            var dataStr = year +"" + month+"" + date;
		            
		            var str = year + "-" + month + "-" + date+" "+hour+":"+minute+":"+second;
		            
		            data.unshift({
		            	nickname: "名称"
	            		,mobile :"手机号码"
	            			,sex:"性别"
		            	,money :"金额"
						, integral: "积分"
						, commission: "佣金"
						,createtime:"注册时间"
						
					});
                   
		            var colConf = LAY_EXCEL.makeColConfig({
		            	'B': 150,
                        'D': 150,
                        'G':150
                    }, 100)
                    // 3. 第1行行高40，第二行行高30，默认20
                    var rowConf = LAY_EXCEL.makeRowConfig(20)

					excel.exportExcel(data, '会员信息'+dataStr+'.xlsx', 'xlsx',{
					    extend: {
					    	'!cols': colConf
		                    , '!rows': rowConf
					    }
					});

				}
				,error() {
					layer.alert('获取数据失败，请检查是否部署在本地服务器环境下');
				}
			});
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
                    window.location.href="<?php echo siteUrl('admin/user/del_user','','web'); ?>&id="+data.id;
                    layer.close(index);
                });
            } else if(obj.event === 'edit'){
                window.location.href="<?php echo siteUrl('admin/user/edit_user','','web'); ?>&id="+data.id;
            } else if(obj.event === 'team'){            	           
            }else if(obj.event === 'meal' ){
                
                layer.open({      
                    type:2,        
                    area: ['800px', '500px'],
                    title:"套餐卡",                  
                            content:"<?php echo siteUrl('admin/user/user_meal_list','','web'); ?>&id="+data.id+"&type=1",                    success:function(){                    	                    }                  });            }
        });


        var $ = layui.$, active = {
            reload: function(){
                var demoReload = $('#test-table-demoReload');    
                var level_id = $('#level_id');
                var mobile = $("input[name='mobile']");
                var desc = $("input[name='desc']");
                //执行重载 --id
                table.reload('test-table-operate', {
                    page: {
                        curr: 1 //重新从第 1 页开始
                    }
                    ,where: {
                        'nickname': demoReload.val(),                        
                        'levelId':level_id.val(),
                        'mobile':mobile.val(),
                        'desc':desc.val()
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