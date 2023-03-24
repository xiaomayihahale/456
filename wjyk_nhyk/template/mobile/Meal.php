<?php

namespace app\admin\controller;

use think\Controller;

class Meal extends Controller
{
    public function index(){
        global $_W;
       
        $_W['version'] = IMS_VERSION;
        return view('meal/index', [
            '_W' => $_W
        ]);
    }



    public function meal_list(){
        global $_W;
        $limit = input('limit');
        $page = input('page');

        $page = max(1, intval($page));
        $limit = empty($limit) ? 0 : intval($limit);


        $condition = " uniacid = :uniacid and status<:status";
        $params[':uniacid'] = $_W['uniacid'];
        $params[':status'] = 1;


        if (! empty(input('name'))) {
            $name = input('name');
            $condition .= " AND c_name LIKE '%{$name}%'";
        }
        
        $data = pdo_fetchall("SELECT * FROM ".tablename('wjyk_nhyk_meal')." WHERE " . $condition ." order by id desc LIMIT ". ($page - 1) * $limit . ',' . $limit ,$params);




        $count = pdo_fetchcolumn("SELECT COUNT(*) as count FROM ".tablename('wjyk_nhyk_meal')." WHERE " . $condition , $params);

        echo json_encode(['code'=>'0','msg'=>'','count'=>$count,'data'=>$data]);

    }

    public function edit_meal(){
        global $_W;
        if($_SERVER['REQUEST_METHOD'] == 'POST'){
    
            $data = [
                'uniacid' => $_W['uniacid'],
                'meal_name' => input('meal_name'),
                'meal_count' => input('meal_count'),
                'meal_money' => input('meal_money'),
                'meal_discount' => input('meal_discount'),
                
                'status' => input('status'),
                'order'=>input('order')
            ];

            if(input('id')){
                pdo_update('wjyk_nhyk_meal',$data,array(
                    'uniacid' => $_W['uniacid'],
                    'id' => input('id')
                ));
            }else{
                $data['create_date'] = time();
                pdo_insert('wjyk_nhyk_meal',$data);
            }
            echo json_encode(['code'=>'0','msg'=>'操作成功']);
        }else {
            $srdb = pdo_get('wjyk_nhyk_meal',array(
                'uniacid' => $_W['uniacid'],
                'id' => input('id')
            ));
          

            $_W['version'] = IMS_VERSION;
            return view('meal/edit_meal', [
                '_W' => $_W,
                'srdb'  => $srdb,
            ]);
        }

    }
    public function change(){
        global $_W;
        $id = intval(input('id'));
        $coupon=pdo_get("wjyk_nhyk_meal",array('id'=>$id));
        if($coupon['status']==1){
            pdo_update("wjyk_nhyk_meal",array('status'=>0),array('id'=>$id));
        }else{
            pdo_update("wjyk_nhyk_meal",array('status'=>1),array('id'=>$id));
        }
        echo json_encode(['code'=>'0','msg'=>'操作成功']);
    }

    public function del_meal(){
        global $_W;
        $id = intval(input('id'));
        $result = pdo_update('wjyk_nhyk_meal',array('status'=>1),array(
            'id' => input('id'),
            'uniacid' => $_W['uniacid']
        ));
        if($result){
            $this->success("删除成功");
        }else{
            $this->error("删除失败");
        }
    }

}

