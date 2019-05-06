class AddGood{
    constructor(){
        this.addGoodList = document.getElementById("addGoodsList");
        this.addGoods = document.getElementById("addGoods");
        this.aInput = Array.from(this.addGoodList.getElementsByTagName("input"));
        this.bindEvt();
    }
    bindEvt(){
        this.addGoods.onclick = this.addGoodClick.bind(this);
    }
    addGoodClick(){
        let name = this.aInput[0].value,price = Number(this.aInput[1].value),num=Number(this.aInput[2].value);        
        if(name===""||this.aInput[1].value===0||this.aInput[2].value===0) {
            alert("表格中数据不能为空");            
            return;
        }
        tools.ajaxPromise("get","./api/v1/addGood.php",{name,price,num}).then(data=>{
            if(data.res_code){
                alert(data.res_message);
                $(this.addGoodList).modal('hide')
                sel.render();                
            }
        });
        this.aInput[0].value=this.aInput[1].value=this.aInput[2].value="";
    }
}
new AddGood();