<?php /*a:2:{s:83:"D:\phpstudy_pro\WWW\addons\wjyk_nhyk\application\admin\view\distribution\index.html";i:1639920798;s:60:"../addons/wjyk_nhyk/application/admin/view/index/footer.html";i:1641211050;}*/ ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>提现设置</title>
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
<div class="layui-fluid">
    <div class="layui-row layui-col-space15">
        <div class="layui-col-md12">
            <div class="layui-card">
                <div class="layui-card-header">分销设置</div>
                <div class="layui-card-body" pad15>
                    <form class="layui-form " style="margin-top:21px;">
                        <input type="hidden" name="id" value="<?php echo htmlentities($set['id']); ?>">


                        <div class="layui-form-item">
                            <label class="layui-form-label" style="width: 10%;">分销等级</label>
                            <div class="layui-input-block">
                                <input type="radio" name="distribution_level" value="0" title="关闭" <?php if($set['distribution_level'] == 0 || empty($set['distribution_level'])): ?>checked<?php endif; ?> lay-filter="bbb">
                                <input type="radio" name="distribution_level" value="1" title="一级分销" <?php if($set['distribution_level'] == 1): ?>checked<?php endif; ?> lay-filter="bbb">
                                <input type="radio" name="distribution_level" value="2" title="二级分销" <?php if($set['distribution_level'] == 2): ?>checked<?php endif; ?> lay-filter="bbb">
                                <input type="radio" name="distribution_level" value="3" title="三级分销" <?php if($set['distribution_level'] == 3): ?>checked<?php endif; ?> lay-filter="bbb">
                            </div>
                        </div>
                        <div class="layui-form-item">
                            <label class="layui-form-label" style="width: 10%;">一级分销比例</label>
                            <div class="layui-input-inline">
                                <input type="number" name="distribution_one"   autocomplete="off" class="layui-input" value="<?php echo htmlentities($set['distribution_one']); ?>">
                            </div>
                            <div class="layui-form-mid layui-word-aux">小数         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;比如0.05</div>
                        </div>
                        <div class="layui-form-item">
                            <label class="layui-form-label" style="width: 10%;">二级分销比例</label>
                            <div class="layui-input-inline">
                                <input type="number" name="distribution_two"   autocomplete="off" class="layui-input" value="<?php echo htmlentities($set['distribution_two']); ?>">
                            </div>
                            <div class="layui-form-mid layui-word-aux">小数         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;比如0.03</div>
                        </div>
                        <div class="layui-form-item">
                            <label class="layui-form-label" style="width: 10%;">三级分销比例</label>
                            <div class="layui-input-inline">
                                <input type="number" name="distribution_three"   autocomplete="off" class="layui-input" value="<?php echo htmlentities($set['distribution_three']); ?>">
                            </div>
                            <div class="layui-form-mid layui-word-aux">小数         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;比如0.01</div>
                        </div>

                        <div class="layui-form-item">
                            <label class="layui-form-label" style="width: 10%;">提现方式</label>
                            <div class="layui-input-block">
                            	  <input type="checkbox" name="w_type[1]" value="1" title="银行卡" <?php if(strpos($set['w_type'],'1') !== false): ?>checked<?php endif; ?>>
							      <input type="checkbox" name="w_type[2]"  value="2"  title="微信" <?php if(strpos($set['w_type'],'2') !== false): ?>checked<?php endif; ?>>
							      <input type="checkbox" name="w_type[3]" value="3"  title="支付宝" <?php if(strpos($set['w_type'],'3') !== false): ?>checked<?php endif; ?>>
                            
                      
                            </div>
                        </div>
                        
                        <div class="layui-form-item">
                            <label class="layui-form-label" style="width: 10%;">分销条件</label>
                            <div class="layui-input-block">
                            	  
                                <input type="radio" name="condition" lay-filter="levelM" value="1" title="无条件" <?php if($set['condition'] == 1 || empty($set['condition'])): ?>checked<?php endif; ?>>
                                <input type="radio" name="condition" lay-filter="levelM" value="2" title="审核" <?php if($set['condition'] == 2): ?>checked<?php endif; ?>> 
                                <input type="radio" name="condition" lay-filter="levelM" value="3" title="累计消费" <?php if($set['condition'] == 3): ?>checked<?php endif; ?>> 
                                <input type="radio" name="condition" lay-filter="levelM" value="4" title="指定会员等级" <?php if($set['condition'] == 4): ?>checked<?php endif; ?>> 
                            </div>
                        </div>
                        
              
                           <div class="layui-form-item condition_div" id="consume_money_div" style="display: none;">
	                            <label class="layui-form-label" style="width: 10%;">累计消费金额</label>
	                            <div class="layui-input-inline">
	                                <input type="number" name="consume_money"   autocomplete="off" class="layui-input" value="<?php echo htmlentities($set['consume_money']); ?>">
	                            </div>
	                            <div class="layui-form-mid layui-word-aux">元</div>
	                        </div>
	                        <div class="layui-form-item condition_div" id="member_level_div" style="display: none;">
	                            <label class="layui-form-label" style="width: 10%;">指定会员等级</label>
	                            <div class="layui-input-inline">
	                                <select lay-filter="typeSelect" name="member_level"  >	
						              	 <?php if(empty($levels)): ?>	
						              	      <option value="">暂无</option>	
						              	 <?php else: foreach($levels as $v): ?>						                  
							              		 <option value="<?php echo htmlentities($v['id']); ?>"  <?php if($set['member_level'] == $v['id']): ?> selected="" <?php endif; ?>><?php echo htmlentities($v['member_name']); ?></option>							        
							              	 <?php endforeach; ?>							    
						              	 <?php endif; ?>				           
					              	  </select>  
	                            </div>
	                        </div>
                        

                        <div class="layui-form-item">
                            <label class="layui-form-label" style="width: 10%;">提现额度</label>
                            <div class="layui-input-inline">
                                <input type="number" name="lowest_withdraw"   autocomplete="off" class="layui-input" value="<?php echo htmlentities($set['lowest_withdraw']); ?>">
                            </div>
                            <div class="layui-form-mid layui-word-aux">元         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;金额达到此额度时才能提现</div>
                        </div>

                        <div class="layui-form-item">
                            <label class="layui-form-label" style="width: 10%;">提现手续费</label>
                            <div class="layui-input-inline">
                                <input type="number" name="handling_fee"   autocomplete="off" class="layui-input" value="<?php echo htmlentities($set['handling_fee']); ?>">
                            </div>
                            <div class="layui-form-mid layui-word-aux">%          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;收取百分之多少的手续费</div>
                        </div>
                        <div class="layui-form-item">
                            <label class="layui-form-label">分销海报</label>
                            <div class="layui-form-mid layui-word-aux">建议上传658px * 1032px尺寸</div>
                            <button type="button" class="layui-btn" id="test1">上传图片</button>
                            <div class="layui-input-block">
                                <img class="layui-upload-img" id="demo1" style="margin-top: 10px;height: 500px;width: 350px" <?php if($set['poster']==''): else: ?>src="<?php echo htmlentities($set['poster']); ?>"<?php endif; ?>">
                                <input type="hidden" name="poster" id="poster" value="<?php echo htmlentities($set['poster']); ?>">
                            </div>
                        </div>
                        <div class="layui-form-item">
                            <label class="layui-form-label">分销说明</label>

                            <div class="layui-input-block">
                                <script id="ueditor" name="distribution_description" type="text/plain" ><?php echo $set['distribution_description']; ?></script>
                            </div>
                            <div class="layui-input-block">
                                <div class="layui-form-mid layui-word-aux">图片建议宽度375px</div>
                            </div>
                        </div>

                        <div class="layui-form-item">
                            <div class="layui-input-block">
                                <button class="layui-btn" lay-submit lay-filter="demo1">立即提交</button>
                            </div>
                        </div>
                        <!-- 更多表单结构排版请移步文档左侧【页面元素-表单】一项阅览 -->
                    </form>
                </div>
            </div>
        </div>
    </div>

    <script src="../addons/wjyk_nhyk/public/static/layuiadmin/layui/layui.js"></script>
    <script type="text/javascript" src="../addons/wjyk_nhyk/public/static/ueditor/ueditor.config.js"></script>
    <script type="text/javascript" src="../addons/wjyk_nhyk/public/static/ueditor/ueditor.all.js"></script>
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
                        $('#poster').val(res.msg);
                    }
                }
            });
            
          
         
            
            radioChange($("input[name='condition']:checked").val());
            
            

           
            
            
            form.on('radio(levelM)', function(data){
            	radioChange(data.value);
            });
            
            function radioChange(value){
            	
            	$(".condition_div").hide();
   	            if (value == '3') {
   	                $("#consume_money_div").show();
   	            }else if (value == '4') {
   	        	    $("#member_level_div").show();
   	            }
            }
            

            var ue = UE.getEditor('ueditor', {

                zIndex: 99,

                maximumWords: 999,

                scaleEnabled: true,

                initialFrameWidth: 800,

                initialFrameHeight: 300,

                autoHeightEnabled: false,}

            );

            //监听提交
            form.on('submit(demo1)', function(data){
                var admin = layui.admin

                admin.req({
                    url:"<?php echo siteUrl('admin/distribution/set','','web'); ?>",
                    data:data.field,
                    type:"POST",
                    done:res=>{
                        if(res.code == 0 ){
                            layer.msg("设置成功");
                        }
                    }
                })
                return false

            });


            //表单取值
            layui.$('#LAY-component-form-getval').on('click', function(){
                var data = form.val('example');
                alert(JSON.stringify(data));
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