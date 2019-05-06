# Cat&Dog商城商品管理系统

### 使用技术

* html
* css
* javascript
* bootstrap
* jquery
* ajax

项目目录

* .git
* css
* html
* js
* libs
* catdog.md
* index.html
* api

### 接口
##### 选择接口

* url api/v1/select.php
* method : "get"

##### 添加商品接口

* url api/v1/addGood.php
* method get
* query {goodsName,price,num}
* echo $json=array(
    "res_code"=>1 || 0,
    "res_message => "成功"||"失败"
)

##### 删除商品接口

* url api/v1/delete.php
* method get
* query {id}
* echo $json=array(
    "res_code"=>1 || 0,
    "res_message => "成功"||"失败"
)

##### 更新数据

* url api/v1/update.php
* method get
* query {id,price,num}
* echo $json=array(
    "res_code"=>1 || 0,
    "res_message => "成功"||"失败"
)

##### 注册账号

* url api/v1/resigner.php
* method post
* query {id,username,pwd}
* echo $json=array(
    "res_code"=>1 || 0,
    "res_message => "成功"||"失败"
)