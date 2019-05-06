class Resign{
    constructor(){
        this.user = document.getElementById("userName");
        this.pwd = document.getElementById("pwd"); 
        this.btn = document.getElementById("resignBtn");
        this.bindEvt();       
    }
    bindEvt(){
        this.btn.onclick = this.submit.bind(this);
    }
    submit(){
        let userName = this.user.value, pwd= this.pwd.value;
        tools.ajaxPromise("post","../api/v1/resigner.php",{userName,pwd}).then(data=>{            
            if(data.res_code===1){
                alert(data.res_message+"即将跳转至登录页面");
                window.location.href = "./login.html";
            }else(
                alert(data.res_message)
            )
        })
    }
}
new Resign();