<?php /*a:1:{s:75:"D:\phpstudy_pro\WWW\addons\wjyk_nhyk\application\admin\view\note\index.html";i:1639920798;}*/ ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>支付设置</title>
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <link rel="stylesheet" href="../addons/wjyk_nhyk/public/static/layuiadmin/layui/css/layui.css" media="all">
    <link rel="stylesheet" href="../addons/wjyk_nhyk/public/static/layuiadmin/style/admin.css" media="all">
    <style>
		.layui-form-label{
			width:115px;
        }
		.layui-input-block{
			margin-left:145px;
		}
        form{
            padding-right:15px ;
        }
        
    </style>
</head>
<body>
<form class="layui-form" style="margin-top:21px;">

  <div class="layui-form-item">
    <label class="layui-form-label">是否开启</label>
    <div class="layui-input-block" id="IsPurchased">
      <input type="radio" name="is_open" value="1" title="开启" <?php if($note['is_open'] == '1' || $note['is_open'] == ''): ?>checked<?php endif; ?> lay-filter="aaa">
      <input type="radio" name="is_open" value="2" title="隐藏" <?php if($note['is_open'] == '2'): ?>checked<?php endif; ?> lay-filter="aaa">
    </div>
  </div>
  
  


  <div class="xxx" >
      	<div class="layui-form-item">
		    <label class="layui-form-label">AccessKey ID</label>
		    <div class="layui-input-block">
		      <input type="text" name="keyId"   autocomplete="off" class="layui-input" value="<?php echo htmlentities($note['keyId']); ?>">
		    </div>
		  </div>
	  
		  <div class="layui-form-item">
		    <label class="layui-form-label">AccessKey Secret</label>
		    <div class="layui-input-block">
		      <input type="text" name="keySecret"   autocomplete="off" class="layui-input" value="<?php echo htmlentities($note['keySecret']); ?>">
		    </div>
		  </div>
	  	 <div class="layui-form-item">
		    <label class="layui-form-label">签名名称</label>
		    <div class="layui-input-block">
		      <input type="text" name="signName"   autocomplete="off" class="layui-input" value="<?php echo htmlentities($note['signName']); ?>">
		    </div>
		  </div>
	  
		  <div class="layui-form-item">
		    <label class="layui-form-label">会员充值成功模版CODE</label>
		    <div class="layui-input-block">
		      <input type="text" name="templateCode" autocomplete="off" class="layui-input" value="<?php echo htmlentities($note['templateCode']); ?>">
		      <div class="layui-form-mid layui-word-aux">用于用户充值成功后提醒用户。请在阿里云短信后台申请短信模板。<div class="layui-btn layui-btn-xs layui-btn-primary"  id="eee">查看</div></div>
		    </div>
		  </div>
		  <div class="layui-form-item">
		    <label class="layui-form-label">会员扣费成功模版CODE</label>
		    <div class="layui-input-block">
		      <input type="text" name="kf_success_code" autocomplete="off" class="layui-input" value="<?php echo htmlentities($note['kf_success_code']); ?>">
		      <div class="layui-form-mid layui-word-aux">用于用户扣费成功后提醒用户。请在阿里云短信后台申请短信模板。<div class="layui-btn layui-btn-xs layui-btn-primary"  id="fff">查看</div></div>
		    </div>
		  </div>
		  <div class="layui-form-item">
		    <label class="layui-form-label">会员新订单模版CODE</label>
		    <div class="layui-input-block">
		      <input type="text" name="new_success_code" autocomplete="off" class="layui-input" value="<?php echo htmlentities($note['new_success_code']); ?>">
		      <div class="layui-form-mid layui-word-aux">用于会员下单成功后提醒用户。请在阿里云短信后台申请短信模板。<div class="layui-btn layui-btn-xs layui-btn-primary"  id="ddd">查看</div></div>
		    </div>
		  </div>
		  <div class="layui-form-item">
		    <label class="layui-form-label">会员生日提醒CODE</label>
		    <div class="layui-input-block">
		      <input type="text" name="br_success_code" autocomplete="off" class="layui-input" value="<?php echo htmlentities($note['br_success_code']); ?>">
		      <div class="layui-form-mid layui-word-aux">用于会员生日提醒会员领取福利。请在阿里云短信后台申请短信模板。<div class="layui-btn layui-btn-xs layui-btn-primary"  id="ggg">查看</div></div>
		    </div>
		  </div>
  	  </div>
  
  
  <script  type="text/html" id="form1">
<div class="layui-fluid">
    <div class="layui-row layui-col-space15">
      <div class="layui-col-md12">
        <div class="layui-card">
          <div class="layui-card-body">
			<h2 id="panels-footer" style="margin-bottom:20px;"><a class="anchorjs-link " href="#" aria-label="Anchor link for: panels footer" data-anchorjs-icon="" style="font-family: anchorjs-icons; font-style: normal; font-variant: normal; font-weight: normal; line-height: inherit; position: absolute; margin-left: -1em; padding-right: 0.5em;"></a>在阿里云短信后台申请短信，</h2>
			<img src="../addons/wjyk_nhyk/public/images/cz.png" alt="" style="width: 70%;height: 50%;">
          </div>
        </div>
      </div>
   </div>
</div>
</script>

<script  type="text/html" id="form2">
<div class="layui-fluid">
    <div class="layui-row layui-col-space15">
      <div class="layui-col-md12">
        <div class="layui-card">
          <div class="layui-card-body">
			<h2 id="panels-footer" style="margin-bottom:20px;"><a class="anchorjs-link " href="#" aria-label="Anchor link for: panels footer" data-anchorjs-icon="" style="font-family: anchorjs-icons; font-style: normal; font-variant: normal; font-weight: normal; line-height: inherit; position: absolute; margin-left: -1em; padding-right: 0.5em;"></a>在阿里云短信后台申请短信，</h2>
			<img src="../addons/wjyk_nhyk/public/images/kf.png" alt="" style="width: 70%;height: 50%;">
          </div>
        </div>
      </div>
   </div>
</div>
</script>


<script  type="text/html" id="form3">
<div class="layui-fluid">
    <div class="layui-row layui-col-space15">
      <div class="layui-col-md12">
        <div class="layui-card">
          <div class="layui-card-body">
			<h2 id="panels-footer" style="margin-bottom:20px;"><a class="anchorjs-link " href="#" aria-label="Anchor link for: panels footer" data-anchorjs-icon="" style="font-family: anchorjs-icons; font-style: normal; font-variant: normal; font-weight: normal; line-height: inherit; position: absolute; margin-left: -1em; padding-right: 0.5em;"></a>在阿里云短信后台申请短信，</h2>
			<img src="../addons/wjyk_nhyk/public/images/new_order.png" alt="" style="width: 70%;height: 50%;">
          </div>
        </div>
      </div>
   </div>
</div>
</script>

<script  type="text/html" id="form4">
<div class="layui-fluid">
    <div class="layui-row layui-col-space15">
      <div class="layui-col-md12">
        <div class="layui-card">
          <div class="layui-card-body">
			<h2 id="panels-footer" style="margin-bottom:20px;"><a class="anchorjs-link " href="#" aria-label="Anchor link for: panels footer" data-anchorjs-icon="" style="font-family: anchorjs-icons; font-style: normal; font-variant: normal; font-weight: normal; line-height: inherit; position: absolute; margin-left: -1em; padding-right: 0.5em;"></a>在阿里云短信后台申请短信，</h2>
			<img src="../addons/wjyk_nhyk/public/images/br.png" alt="" style="width: 70%;height: 50%;">
          </div>
        </div>
      </div>
   </div>
</div>
</script>
  
  
  
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
    layui.use(['form', 'layedit', 'laydate','upload','jquery'], function(){
        var 
        $ = layui.$
        ,form = layui.form
            ,layer = layui.layer
            ,layedit = layui.layedit
            ,laydate = layui.laydate;

        
        
        $("#eee").click(function(){
        	layer.open({
                title : '<i class="fa fa-plus"></i>&nbsp;短信消息设置',
                type : 1,
                fix : false,
                skin : 'layui-layer-rim',
                // 加上边框
                area : [ '80%', '70%' ],
                // 宽高
                content : $('#form1').html(),
                success: function (layero, index) {
                    
                }
            });
       });
        
        $("#fff").click(function(){
        	layer.open({
                title : '<i class="fa fa-plus"></i>&nbsp;短信消息设置',
                type : 1,
                fix : false,
                skin : 'layui-layer-rim',
                // 加上边框
                area : [ '80%', '70%' ],
                // 宽高
                content : $('#form2').html(),
                success: function (layero, index) {
                    
                }
            });
       });
        
        
        $("#ddd").click(function(){
        	layer.open({
                title : '<i class="fa fa-plus"></i>&nbsp;短信消息设置',
                type : 1,
                fix : false,
                skin : 'layui-layer-rim',
                // 加上边框
                area : [ '80%', '70%' ],
                // 宽高
                content : $('#form3').html(),
                success: function (layero, index) {
                    
                }
            });
       });
        
        $("#ggg").click(function(){
        	layer.open({
                title : '<i class="fa fa-plus"></i>&nbsp;短信消息设置',
                type : 1,
                fix : false,
                skin : 'layui-layer-rim',
                // 加上边框
                area : [ '80%', '70%' ],
                // 宽高
                content : $('#form4').html(),
                success: function (layero, index) {
                    
                }
            });
       });
                
        //监听提交
        form.on('submit(demo1)', function(data){
            var admin = layui.admin
            

            admin.req({
                url:"<?php echo siteUrl('admin/note/set_note','','web'); ?>",
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
      

        
        form.on('radio(bbb)', function (data) {
        	console.log("11111");
            if ($('#type input[name="type"]:checked ').val() == "2") {
             $(".type1").hide();
             $(".type2").show();
            }
            else {
             $(".type1").show();
             $(".type2").hide();
            }
            form.render();
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