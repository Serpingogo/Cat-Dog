<?php
    include("./config.php");
    $username = $_POST["userName"];
    $pwd = $_POST["password"];
    $sql = "select * from user where username='$username' and pwd='$pwd'";
    $res = mysql_query($sql);
    $row = mysql_num_rows($res);   
    if($row>0){
        echo json_encode(array(
            "res_code"=>1,
            "res_message"=>"登陆成功"
        ));
    }else{
        echo json_encode(array(
            "res_code"=>0,
            "res_message"=>"用户名或密码错误，请重试"
        ));
    }
?>