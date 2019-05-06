class Login{
    constructor(){
        this.user = document.getElementById("userName");
        this.pwd = document.getElementById("pwd"); 
        this.btn = document.getElementById("loginBtn");
        this.check = document.getElementById("checked");
        this.bindEvt();       
    }
    bindEvt(){
        this.btn.onclick = this.submit.bind(this);
    }
    submit(){
        let userName = this.user.value, password = this.pwd.value;        
        tools.ajaxPromise("post","../api/v1/login.php",{userName,password}).then(data=>{            
            if(data.res_code===1){
                alert(data.res_message);                
                if(this.check.checked){
                    tools.cookie("username",userName,{"path":"/","expires":7});
                }else{
                    tools.cookie("username",userName,{"path":"/"});
                }               
                window.location.href = "../index.html";                
            }else(
                alert(data.res_message)
            )
        })
        
    }
}
new Login();