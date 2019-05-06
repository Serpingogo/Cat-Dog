<?php
    include("./config.php");

    $username = $_POST["userName"];

    $pwd = $_POST["pwd"];

    $sqluser = "select * from user where username='$username'";

    $resuser = mysql_query($sqluser);

    $row = mysql_num_rows($resuser);
    
    if($row>0){
        echo json_encode(array(
            "res_code" => 0,
            "res_message" =>"对不起，此用户名已被注册"
        ));
    }else{
        $sql = "insert into user (username,pwd) values ('$username','$pwd')";
        $res = mysql_query($sql);
        if($res){
            echo json_encode(array(
                "res_code" => 1,
                "res_message" =>"注册成功"
            ));  
        }else{
            echo json_encode(array(
                "res_code" => 0,
                "res_message" =>"网络错误，注册失败，请重试"
            ));
        }
    }
?>