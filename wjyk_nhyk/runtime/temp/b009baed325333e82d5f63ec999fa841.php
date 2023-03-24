<?php /*a:1:{s:76:"D:\phpstudy_pro\WWW\addons\wjyk_nhyk\application\admin\view\index\index.html";i:1639920798;}*/ ?>


<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title><?php echo htmlentities($system['name']); ?></title>
  <meta name="renderer" content="webkit">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
  <link rel="stylesheet" href="../addons/wjyk_nhyk/public/static/layuiadmin/layui/css/layui.css" media="all">
  <link rel="stylesheet" href="../addons/wjyk_nhyk/public/static/layuiadmin/style/admin.css" media="all">
  <script src="../addons/wjyk_nhyk/public/static/layuiadmin/layui/echarts.min.js"></script>

</head>
<body class="layui-layout-body">
  
  <div id="LAY_app">
    <div class="layui-layout layui-layout-admin">
      <div class="layui-header">
        <!-- 头部区域 -->
        <ul class="layui-nav layui-layout-left">
          <li class="layui-nav-item layadmin-flexible" lay-unselect>
            <a href="javascript:;" layadmin-event="flexible" title="侧边伸缩">
              <i class="layui-icon layui-icon-shrink-right" id="LAY_app_flexible"></i>
            </a>
          </li>
          
          <li class="layui-nav-item" lay-unselect>
            <a href="javascript:;" layadmin-event="refresh" title="刷新">
              <i class="layui-icon layui-icon-refresh-3"></i>
            </a>
          </li>

        </ul>
        <ul class="layui-nav layui-layout-right" lay-filter="layadmin-layout-right">
          
          <li class="layui-nav-item" lay-unselect>
            <a href="javascript:;">
              
              <cite><?php echo htmlentities($_W['user']['username']); ?></cite>
            </a>
            <dl class="layui-nav-child">
                <?php if($_W['user']['type'] != 1): ?>
                	<dd><a href="<?php echo htmlentities($backUrl); ?>">返回系统</a></dd>
                <?php else: ?>
                	<dd><a id="rel_pwd" href="javascript:;">修改密码</a></dd>
                <?php endif; ?>
          
              <dd><a href="<?php echo htmlentities($loginUrl); ?>">退出</a></dd>
            </dl>
          </li>
          <li class="layui-nav-item layui-hide-xs" lay-unselect>
            <a href="javascript:;" layadmin-event="theme">
              <i class="layui-icon layui-icon-theme"></i>
            </a>
          </li>
          <li class="layui-nav-item layui-hide-xs" lay-unselect>
            <a href="javascript:;" layadmin-event="note">
              <i class="layui-icon layui-icon-note"></i>
            </a>
          </li>
          <li class="layui-nav-item layui-hide-xs" lay-unselect>
            <a href="javascript:;" layadmin-event="fullscreen">
              <i class="layui-icon layui-icon-screen-full"></i>
            </a>
          </li>
        </ul>
      </div>
      
      <!-- 侧边菜单 -->
      <div class="layui-side layui-side-menu">
        <div class="layui-side-scroll">
          <div class="layui-logo" lay-href="<?php echo siteUrl('admin/index/console','','web'); ?>">
            <span><?php echo htmlentities($system['name']); ?></span>
          </div>
          
          <ul class="layui-nav layui-nav-tree" lay-shrink="all" id="LAY-system-side-menu" lay-filter="layadmin-system-side-menu">
          
           
          
            
            
            
            
            <li data-name="recycle" class="layui-nav-item">
              <a href="javascript:;" lay-tips="会员" lay-direction="2">
                <i class="layui-icon layui-icon-senior"></i>
                <cite>会员管理</cite>
              </a>
              <dl class="layui-nav-child">
              	<dd>
                  <a lay-href="<?php echo siteUrl('admin/member/level','','web'); ?>">会员等级列表</a>
                </dd>
              </dl>
              <dl class="layui-nav-child">
              	<dd>
                  <a lay-href="<?php echo siteUrl('admin/user/index','','web'); ?>">会员列表</a>
                </dd>
              </dl>
              <dl class="layui-nav-child">
              	<dd>
                  <a lay-href="<?php echo siteUrl('admin/user/import_index','','web'); ?>">待绑定会员列表</a>
                </dd>
              </dl>
               <dl class="layui-nav-child">
              	<dd>
                  <a lay-href="<?php echo siteUrl('admin/group/index','','web'); ?>">会员分组</a>
                </dd>
              </dl>
            </li>
            
            <li data-name="recycle" class="layui-nav-item">
              <a href="javascript:;" lay-tips="门店" lay-direction="2">
                <i class="layui-icon layui-icon-template"></i>
                <cite>门店管理</cite>
              </a>
              <dl class="layui-nav-child">
              	<dd>
                  <a lay-href="<?php echo siteUrl('admin/store/index','','web'); ?>">门店列表</a>
                </dd>
              </dl>
              
	              <dl class="layui-nav-child">
	              	<dd>
	                  <a lay-href="<?php echo siteUrl('admin/storeAdmin/admin_index','','web'); ?>">店长列表</a>
	                </dd>
	              </dl>
	              <dl class="layui-nav-child">
	              	<dd>
	                  <a lay-href="<?php echo siteUrl('admin/storeAdmin/user_index','','web'); ?>">店员列表</a>
	                </dd>
	              </dl>
	              <dl class="layui-nav-child">
	              	<dd>
	                  <a lay-href="<?php echo siteUrl('admin/store/set_admin','','web'); ?>">设置管理员</a>
	                </dd>
	              </dl>
            </li>
            
            
            
            
            
            
            
            <li data-name="order" class="layui-nav-item">
              <a href="javascript:;" lay-tips="订单" lay-direction="2">
                <i class="layui-icon layui-icon-cart"></i>
                <cite>商城管理</cite>
              </a>
              <dl class="layui-nav-child">
              	<dd>
                  <a lay-href="<?php echo siteUrl('admin/goods/set_index','','web'); ?>">商城设置</a>
                </dd>
              
              	<dd>
                 <a lay-href="<?php echo siteUrl('admin/category/index','','web'); ?>">商品分类列表</a>
                </dd>
              	
                <dd>
                  <a lay-href="<?php echo siteUrl('admin/goods/index','','web'); ?>">商品列表</a>
                </dd>
                <dd>
                  <a lay-href="<?php echo siteUrl('admin/goodsOrder/index','','web'); ?>">商城订单</a>
                </dd>
              </dl>
            </li>
          
          <?php echo $plugin_html ?>
          
          <li data-name="order" class="layui-nav-item">
              <a href="javascript:;" lay-tips="订单" lay-direction="2">
                <i class="layui-icon layui-icon-rmb"></i>
                <cite>财务管理</cite>
              </a>
              <dl class="layui-nav-child">
              	
               
                <dd>
                  <a lay-href="<?php echo siteUrl('admin/recharge/log_index','','web'); ?>">充值记录</a>
                </dd>
                <dd>
                  <a lay-href="<?php echo siteUrl('admin/statistics/proxy_index','','web'); ?>">扣款记录</a>
                </dd>
                
              </dl>
            </li>
          
            
            
          <li data-name="order" class="layui-nav-item">
              <a href="javascript:;" lay-tips="分销" lay-direction="2">
                <i class="layui-icon layui-icon-share"></i>
                <cite>分销管理</cite>
              </a>
              <dl class="layui-nav-child">
              	
              	<dd>
                  <a lay-href="<?php echo siteUrl('admin/distribution/index','','web'); ?>">分销设置</a>
                </dd>
                <dd>
                  <a lay-href="<?php echo siteUrl('admin/distribution/withdraw','','web'); ?>">提现列表</a>
                </dd>
                <dd>
                  <a lay-href="<?php echo siteUrl('admin/distribution/audit_index','','web'); ?>">分销审核</a>
                </dd>
              </dl>
            </li>
            
           <li data-name="order" class="layui-nav-item">
              <a href="javascript:;" lay-tips="卡劵优惠" lay-direction="2">
                <i class="layui-icon layui-icon-templeate-1"></i>
                <cite>卡劵优惠</cite>
              </a>
              <dl class="layui-nav-child">
              	<dd>
                  <a lay-href="<?php echo siteUrl('admin/coupon/index','','web'); ?>">优惠券列表</a>
                </dd>
                <dd>
                  <a lay-href="<?php echo siteUrl('admin/meal/index','','web'); ?>">套餐卡列表</a>
                </dd>
                 <dd>
                  <a lay-href="<?php echo siteUrl('admin/recharge/index','','web'); ?>">充值优惠</a>
                </dd>
              	
              </dl>
            </li>
            
            
			
           
            
            <li data-name="home" class="layui-nav-item layui-nav-itemed">
              <a href="javascript:;" lay-tips="设置" lay-direction="2">
                <i class="layui-icon layui-icon-set"></i>
                <cite>系统管理</cite>
              </a>
              <dl class="layui-nav-child">
                <dd data-name="console">
                  <a lay-href="<?php echo siteUrl('admin/system/index','','web'); ?>">系统设置</a>
                </dd>
               
                <dd data-name="console">
                  <a lay-href="<?php echo siteUrl('admin/notice/index','','web'); ?>">通知设置</a>
                </dd>
                
                <dd data-name="console">
                  <a lay-href="<?php echo siteUrl('admin/note/index','','web'); ?>">短信设置</a>
                </dd>
                
                 <dd data-name="console">
                  <a lay-href="<?php echo siteUrl('admin/meau/index','','web'); ?>">菜单栏设置</a>
                </dd>
                
                <dd data-name="console">
                  <a lay-href="<?php echo siteUrl('admin/meau/link_index','','web'); ?>">首页链接</a>
                </dd>
                 <!-- <dd data-name="console">
                  <a lay-href="<?php echo siteUrl('admin/poster/index','','web'); ?>">个性化海报生成</a>
                </dd> --> 
                
        
              </dl>
            </li>
            
            
          </ul>
        </div>
      </div>

      <!-- 页面标签 -->
      <div class="layadmin-pagetabs" id="LAY_app_tabs">
        <div class="layui-icon layadmin-tabs-control layui-icon-prev" layadmin-event="leftPage"></div>
        <div class="layui-icon layadmin-tabs-control layui-icon-next" layadmin-event="rightPage"></div>
        <div class="layui-icon layadmin-tabs-control layui-icon-down">
          <ul class="layui-nav layadmin-tabs-select" lay-filter="layadmin-pagetabs-nav">
            <li class="layui-nav-item" lay-unselect>
              <a href="javascript:;"></a>
              <dl class="layui-nav-child layui-anim-fadein">
                <dd layadmin-event="closeThisTabs"><a href="javascript:;">关闭当前标签页</a></dd>
                <dd layadmin-event="closeOtherTabs"><a href="javascript:;">关闭其它标签页</a></dd>
                <dd layadmin-event="closeAllTabs"><a href="javascript:;">关闭全部标签页</a></dd>
              </dl>
            </li>
          </ul>
        </div>
        <div class="layui-tab" lay-unauto lay-allowClose="true" lay-filter="layadmin-layout-tabs">
          <ul class="layui-tab-title" id="LAY_app_tabsheader">
            <li lay-id="<?php echo htmlentities($homeUrl); ?>" lay-attr="<?php echo htmlentities($homeUrl); ?>" class="layui-this"><i class="layui-icon layui-icon-home"></i></li>
          </ul>
        </div>
      </div>
      

      <!-- 主体内容 -->
      <div class="layui-body" id="LAY_app_body">
        <div class="layadmin-tabsbody-item layui-show">
          	<iframe src="<?php echo htmlentities($consoleUrl); ?>" frameborder="0" class="layadmin-iframe"></iframe>
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
      var $ = layui.$
      	  ,table = layui.table
          ,admin = layui.admin;
      
      $('#rel_pwd').on('click', function(){
    	  layer.open({
              type:2,
              area : [ '35%', '30%' ],
              title:"修改密码",
              yes: function(index, layero){
                  //按钮【按钮一】的回调
                  layer.close(index);
              },
              cancel: function(){
                  //右上角关闭回调

                  //return false 开启该代码可禁止点击该按钮关闭
              },
              content:"<?php echo siteUrl('admin/w7User/edit_pwd',array('pid'=>0),'web'); ?>&type=1",
              success:function(){
					

              }
          });
      });

  });
  </script>
  
  <!-- 百度统计 -->
  <script>
  var _hmt = _hmt || [];
  (function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?d214947968792b839fd669a4decaaffc";
    var s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm, s);
  })();
  </script>
</body>
</html>


