<?php /*a:2:{s:78:"D:\phpstudy_pro\WWW\addons\wjyk_nhyk\application\admin\view\index\console.html";i:1639920798;s:60:"../addons/wjyk_nhyk/application/admin/view/index/footer.html";i:1641211050;}*/ ?>


<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>layuiAdmin 控制台主页一</title>
  <meta name="renderer" content="webkit">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
  <link rel="stylesheet" href="../addons/wjyk_nhyk/public/static/layuiadmin/layui/css/layui.css" media="all">
  <link rel="stylesheet" href="../addons/wjyk_nhyk/public/static/layuiadmin/style/admin.css" media="all">
  <script src="../addons/wjyk_nhyk/public/static/layuiadmin/layui/echarts.min.js"></script>
</head>
<body>
  
  <div class="layui-fluid">
    <div class="layui-row layui-col-space15">
      <div class="layui-col-md8">
        <div class="layui-row layui-col-space15">
          <div class="layui-col-md6">
            <div class="layui-card">
              <div class="layui-card-header">快捷方式</div>
              <div class="layui-card-body">
                
                <div class="layui-carousel layadmin-carousel layadmin-shortcut">
                  <div carousel-item>
                    <ul class="layui-row layui-col-space10">
                      <li class="layui-col-xs3">
                        <a lay-href="<?php echo siteUrl('admin/category/index','','web'); ?>">
                          <i class="layui-icon layui-icon-app"></i>
                          <cite>分类</cite>
                        </a>
                      </li>
                      <li class="layui-col-xs3">
                        <a lay-href="<?php echo siteUrl('admin/store/index','','web'); ?>">
                          <i class="layui-icon layui-icon-senior"></i>
                          <cite>门店</cite>
                        </a>
                      </li>
                      <li class="layui-col-xs3">
                        <a lay-href="<?php echo siteUrl('admin/goods/index','','web'); ?>">
                          <i class="layui-icon layui-icon-cart"></i>
                          <cite>商城</cite>
                        </a>
                      </li>
                      <li class="layui-col-xs3">
                        <a lay-href="<?php echo siteUrl('admin/recharge/log_index','','web'); ?>">
                          <i class="layui-icon layui-icon-rmb"></i>
                          <cite>财务</cite>
                        </a>
                      </li>
                      <li class="layui-col-xs3">
                        <a lay-href="<?php echo siteUrl('admin/user/index','','web'); ?>">
                          <i class="layui-icon layui-icon-user"></i>
                          <cite>用户</cite>
                        </a>
                      </li>
                      
                      <li class="layui-col-xs3">
                        <a lay-href="<?php echo siteUrl('admin/plugin/index','','web'); ?>">
                          <i class="layui-icon layui-icon-component"></i>
                          <cite>插件</cite>
                        </a>
                      </li>

                      <li class="layui-col-xs3">
                        <a lay-href="<?php echo siteUrl('admin/system/index','','web'); ?>">
                          <i class="layui-icon layui-icon-set"></i>
                          <cite>设置</cite>
                        </a>
                      </li>
                    </ul>
                    
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          <div class="layui-col-md6">
            <div class="layui-card">
              <div class="layui-card-header">待办事项</div>
              <div class="layui-card-body">

                <div class="layui-carousel layadmin-carousel layadmin-backlog">
                  <div carousel-item>
                    <ul class="layui-row layui-col-space10">
                     
                     
                      <li class="layui-col-xs6">
                        <a lay-href="<?php echo siteUrl('admin/goodsOrder/index','','web'); ?>" class="layadmin-backlog-body">
                          <h3>待发货订单</h3>
                          <p><cite><?php echo htmlentities($orderCount); ?></cite></p>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="layui-col-md12">
            <div class="layui-card">
              <div class="layui-card-header">数据概览</div>
              <div class="layui-card-body">
                
                <div class="layui-carousel layadmin-carousel layadmin-dataview" id="main" data-anim="fade" lay-filter="LAY-index-dataview">
					
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="layui-col-md4">
        <div class="layui-card">
          <div class="layui-card-header">版本信息</div>
          <div class="layui-card-body layui-text">
            <table class="layui-table">
              <colgroup>
                <col width="100">
                <col>
              </colgroup>
              <tbody>
                <tr>
                  <td>当前版本</td>
                  <td>
                    <script type="text/html" template>
                      v<?php echo htmlentities($_W['current_module']['version']); ?>
                    </script>
                  </td>
                </tr>
                <tr>
                  <td>PHP 版本</td>
                  <td>
                    <script type="text/html" template>
                      	PHP Version <?php echo htmlentities($_W['php']); ?>
                    </script>
                  </td>
                </tr>
                <tr>
                  <td>Mysql 版本</td>
                  <td>
                    <script type="text/html" template>
                      	<?php echo htmlentities($_W['mysql']); ?>
                    </script>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
       <div class="layui-card">
		  <div class="layui-card-header">链接</div>
		  <div class="layui-card-body layadmin-takerates">
		    <div class="layui-collapse">
			  <div class="layui-colla-item">
			    <h2 class="layui-colla-title">首页</h2>
			    <div class="layui-colla-content layui-show"><?php echo htmlentities($url); ?></div>
			  </div>
			  <div class="layui-colla-item">
			    <h2 class="layui-colla-title">店长员工登录地址</h2>
			    <div class="layui-colla-content layui-show"><?php echo htmlentities($account_url); ?></div>
			  </div>
			    <?php if($_W['user']['type'] != 1): ?>
			    	<div class="layui-colla-item">
				    <h2 class="layui-colla-title">商户登录地址</h2>
				    <div class="layui-colla-content layui-show"><?php echo htmlentities($admin_url); ?></div>
				  </div>
				    	
			    <?php endif; ?>
			  
			  <div class="layui-colla-item">
			    <h2 class="layui-colla-title">定时任务</h2>
			    <div class="layui-colla-content layui-show">
				在宝塔的计划任务中添加任务类型为访问url的定时任务。具体请咨询售后。<br>
			    <?php echo htmlentities($timing); ?>
			    <div class="layui-upload-list"  id="ImgPreview" style="display: flex;"> 
		        	<img style='width:100%;height: 255px;' src="../addons/wjyk_nhyk/public/notice.png" ></img>
		        </div>
			    
			    </div>
			  </div>
			</div>
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
  }).use(['index','jquery', 'console'],function(){
	  var $ = layui.$
      , form = layui.form;
	  
	  $('#ImgPreview img').on('click', function () {
          layer.photos({
              photos: '#ImgPreview',
              shadeClose: false,
              closeBtn: 2,
              anim: 0
          });
      })
	  
	  var myChart = echarts.init(document.getElementById('main'));
      myChart.showLoading();
      $.get("<?php echo siteUrl('admin/user/user_statis','','web'); ?>", function (data) {
      	console.log(data);
      	myChart.hideLoading();  // 隐藏 loading 效果
	    myChart.setOption({
	    	title: {
                text: '新增用户数量'
            },
            tooltip: {},
            legend: {
                data:['用户数量']
            },
            xAxis: {
                data: data.data.dateList
            },
            yAxis: {},
            series: [{
                name: '用户数量',
                type: 'line',
                data: data.data.totalList
            }]
	    })
	 }, 'json')
  });
  </script>
</body>
<div class="layui-footer" style="position:absolute;bottom:0;text-align:center;width:100%">
	
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



