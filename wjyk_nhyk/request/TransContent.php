<?php
class TransContent{
    
    private $values = array();
    
    // 保存属性名称和值
    function _set($name, $value)
    {
        $this -> values[$name] = $value;
    }
	// 取得属性名称对应的值
    function _get($name) 
	{ 
		echo "GET:[".$name."]=".$this -> values[$name]."\r\n"; 
		return array_key_exists($name, $this->values) ? $this -> values[$name] : null;
	}

	function _getArray2Json()
	{
		return json_encode($this->values,JSON_UNESCAPED_UNICODE);
	}
	
	function _getTransContent()
	{
		return $this->values;
	}
	
	public function _getValues(){
		return $this->values;
	}
}
?>