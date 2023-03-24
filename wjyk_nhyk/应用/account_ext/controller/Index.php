<?php
namespace app\account_ext\controller;

use think\Controller;

class Index extends Controller
{

    public function index()
    {
        global $_W;
        
   

        $this->assign("consoleUrl", siteUrl("admin/index/console", "", "app"));
        $this->assign("homeUrl", siteUrl("index/index/index", "", "app"));
        $this->assign("backUrl", $_W['siteroot'] . "web/index.php");
        $this->assign("loginUrl", $_W['siteroot'] . "web/index.php?c=user&a=logout&");

        
        
        $system = pdo_get('wjyk_nhyk_system',array(
            'uniacid' => $_W['uniacid']
        ));
        $_W['version'] = IMS_VERSION;

        return view('index/index', [
            '_W' => $_W,
            'system' => $system
        ]);
    }

    public function console()
    {
        global $_W;
        
        
        $system = pdo_get('wjyk_nhyk_system',array(
            'uniacid' => $_W['uniacid']
        ));
        
        
        $name='没有';
        $collecterCount=0;
        $orderCount = 0;
        $count= 0;
        /* $collecterCount = pdo_fetchcolumn("SELECT count(*) FROM " . tablename('wjyk_recycle_collector') . " WHERE uniacid = :uniacid AND is_status = :is_status", array(
            ':uniacid' => $_W['uniacid'],
            ':is_status' => 1
        ));
        
        
        $orderCount = pdo_fetchcolumn("SELECT count(*) FROM " . tablename('wjyk_recycle_goods_order') . " WHERE uniacid = :uniacid AND is_status = :is_status", array(
            ':uniacid' => $_W['uniacid'],
            ':is_status' => 1
        ));
        
        $count = pdo_fetchcolumn("SELECT count(*) FROM " . tablename('wjyk_recycle_reserve_order') . " WHERE uniacid = :uniacid AND is_status = :is_status", array(
            ':uniacid' => $_W['uniacid'],
            ':is_status' => 1
        )); */
        
        $url = "wjyk_nhyk/pages/index/index";
                
        $_W['php'] = phpversion();
        
        $sql = 'SELECT VERSION();';
        $_W['mysql'] = pdo_fetchcolumn($sql);
        
        $_W['version'] = IMS_VERSION;
        
        $timing = $_W['siteroot'] . "app/index.php?i={$_W['uniacid']}&c=entry&a=wxapp&do=timing&m=wjyk_nhyk";
        
        return view('index/console', [
            '_W' => $_W,
            'collecterCount' => $collecterCount,
            'count' => $count,
            'orderCount' => $orderCount,
            'url' => $url,
            'timing' => $timing,
            'name' => $name
        ]);
    }
    
    public function map(){
        return view('index/map');
    }
    
    public function qqmap(){
        return view('index/qqmap');
    }
    
    public function range(){
        return view('index/range');
    }
    
    public function plug(){
        global $_W;
        $_W['version'] = IMS_VERSION;
        return view('index/plug', [
            '_W' => $_W
        ]);
    }

    public function upload()
    {
        global $_W;
        
        $savePath = 'attachment/images/' . $_W['uniacid'];
        
        $file = request()->file('file'); // 获取上传的文件
        
        
        
        if ($file == null) {
            exit(json_encode(array(
                'code' => 1,
                'msg' => '未上传图片'
            )));
        }
        
        
        
        // 获取文件后缀
        $temp = explode(".", $_FILES["file"]["name"]);
        $extension = end($temp);
        if (! in_array($extension, array(
            "gif",
            "jpeg",
            "jpg",
            "png"
        ))) {
            $info = $file->move('../addons/wjyk_recycle/cert/',''); // 移动文件到指定目录 没有则创建
            $img = $_W['siteroot'] . 'addons/wjyk_recycle/cert/' . $_FILES["file"]["name"];
            exit(json_encode(array(
                'code' => 0,
                'msg' => $img
            )));
        }
        $info = $file->move('../' . $savePath . '/uploads/'); // 移动文件到指定目录 没有则创建
        $img = $_W['siteroot'] . $savePath . '/uploads/' . $info->getSaveName();
        $relimg_path = $savePath . '/uploads/' . $info->getSaveName();
       
        exit(json_encode(array(
            'code' => 0,
            'msg' => $img,
            'relimg_path'=>$relimg_path
        )));
    }
    
    
}

