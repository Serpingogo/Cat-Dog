<?php
    include("./config.php");

    $sql = "select * from goods";

    $res = mysql_query($sql);
    
    $goods = array();

    while($row = mysql_fetch_assoc($res)){
        array_push($goods,$row);
    }

    $json = array(
        "res_code"=>1,
        "res_body"=>array(
            "data"=>$goods
        )
        );
    
    echo JSON_encode($json);
?>