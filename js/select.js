class selectGoods{
    constructor(){
        this.tbody=document.getElementById("tbody");
        this.page = 1;
        this.render()
    }
    render(){
        tools.ajaxPromise("get","./api/v1/select.php").then(data=>{
            if(data.res_code){                
                let html = data.res_body.data.reduce((str,tr,i)=>{
                    str+=`<tr class="unedit" data-id=${tr.id}>
                        <td>${i+1}</td>
                        <td>${tr.goodsname}</td>
                        <td><span>${tr.price}</span><input type="text" name="" id="" class="unitprice"></td>
                        <td><span>${tr.num}</span><input type="text" name="" id="" class="amount"></td>
                        <td>                       
                            <!-- Contextual button for informational alert messages -->
                            <button type="button" class="btn btn-info btn-sm editBtn">编辑</button>
                            <!-- Indicates a successful or positive action -->
                            <button type="button" class="btn btn-success btn-sm okBtn">确认</button>
                            <!-- Indicates caution should be taken with this action -->
                            <button type="button" class="btn btn-warning btn-sm cancelBtn">取消</button>
                            <!-- Indicates a dangerous or potentially negative action -->
                            <button type="button" class="btn btn-danger btn-sm delBtn">删除</button>
                        </td>
                    </tr>`;
                    return str;
                },'')                
                this.tbody.innerHTML=html;                
            }
        }).catch(function(){
            
        })
    }
}
let sel= new selectGoods();