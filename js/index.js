class TodoList{
    constructor(){
        this.tbody = document.querySelector("#tbody");
    }
    bindEvt(){
        this.tbody.onclick = e=>{
            let srcTarget = e.target,tr=srcTarget.parentNode.parentNode,classLists = Array.from(srcTarget.classList);
            if(classLists.includes("editBtn")){
                this.editBtnClick(tr);
            }else if(classLists.includes("okBtn")){
                this.okBtnClick(tr);
            }else if(classLists.includes("cancelBtn")){
                this.cancelBtnClick(tr);
            }else if(classLists.includes("delBtn")){
                if(confirm(`你确认要删除${tr.children[1].innerHTML}`))this.delBtnClick(tr);
            }
        }
    }
    editBtnClick(tr){
        Array.from(tr.querySelectorAll("span")).forEach(span=>{
            span.nextElementSibling.value = span.innerHTML;
        })
        tr.classList.remove("unedit");
        tr.classList.add("onedit")
    }
    okBtnClick(tr){
        let unitPrice = tr.querySelector(".unitprice"),
            amount = tr.querySelector(".amount"),
            id= tr.getAttribute("data-id"),
            price = unitPrice.value,
            num = amount.value;

        // Array.from(tr.querySelectorAll("span")).forEach(span=>{
        //     span.innerHTML = span.nextElementSibling.value;
        // })        

        tools.ajaxPromise("get","./api/v1/update.php",{id,price,num}).then(data=>{            
            if(data.res_code){
                alert(data.res_message);
                unitPrice.previousElementSibling.innerHTML = unitPrice.value;
                amount.previousElementSibling.innerHTML = amount.value;
            }
        })
        tr.classList.remove("onedit");
        tr.classList.add("unedit")
    }
    cancelBtnClick(tr){
        tr.classList.remove("onedit");
        tr.classList.add("unedit")
    }
    delBtnClick(tr){
        let id= tr.getAttribute("data-id");
        tools.ajaxPromise("get","./api/v1/delete.php",{id}).then(data=>{
            alert(data.res_message);
            if(data.res_code){                
                sel.render();
            }
        })      
    }
}
new TodoList().bindEvt();
class IsCookie{
    constructor(){
        this.unloginBox = document.getElementById("unlogin-box");
        this.loginBox = document.getElementById("login-box");
        this.span = this.loginBox.querySelector("span");
        this.quit = this.loginBox.querySelector(".quit");       
        this.bindEvt();
    }
    bindEvt(){
        this.username =tools.cookie("username");
        if(this.username){
            this.span.innerHTML=this.username;
            this.loginBox.classList.remove("unlogining");
            this.unloginBox.classList.add("unlogining");
        }
        this.quit.onclick = this.quitClick.bind(this);
    }
    quitClick(){        
        tools.cookie("username",this.username,{"path":"/","expires":"-1"});        
        this.loginBox.classList.add("unlogining");
        this.unloginBox.classList.remove("unlogining");
    }
}
new IsCookie();