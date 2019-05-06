<?php
    include("./config.php");

    $goodsname = $_GET["name"];
    $price = $_GET["price"];
    $num = $_GET["num"];      
    $sql = "insert into goods (goodsname,price,num) values ('$goodsname',$price,$num)";    
    $res = mysql_query($sql);
    
    if($res){
        echo JSON_encode(array(
            "res_code"=>1,
            "res_message"=>"商品添加成功"
        ));
        }else{
        echo JSON_encode(array(
            "res_code"=>0,
            "res_message"=>"网络错误，商品添加失败，请重试"
        ));
    };
?>
