var tools ={
    /**设置标签样式
     * @param obj <string> 标签
     * @param  attr <object> 属性对象
     */
    setStyle:function(obj,attr){
        for(var key in attr){
            obj.style[key] = attr[key];
        }
    },
    /** 设置标签样式
     * @param obj <string> 标签
     * @param  attr <string> 属性名
     * @ispesuedo 传入伪类属性
     * return <string> 
     */
    getStyle:function(obj,attr,ispesuedo){
        ispesuedo = ispesuedo || false;
        return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj,ispesuedo)[attr];
    },
    /**通过ajax获取后台文本
     * @param method "get"or"post"
     * @param url <string> 传输的地址
     * @param query {} 请求携带的参数
     * @param callback <function> 回调函数，接收返回值
     * @param isJSON <boolean> 是否转为json格式的字符串
     */
    ajax: function(method,url,query,callback,isJSON){
        var ajx = new XMLHttpRequest();
        isJSON = isJSON===undefined? true : isJSON; 
        method = method.toUpperCase();
        if(method === "GET"){
            if(query){
                var str="?";
                for(var key in query){
                    str+=key+"="+query[key]+"&";
                }
                str = str.slice(0,-1);
                url+=str;
            }
            ajx.open(method,url,true);
            ajx.send(null);            
        }else if(method==="POST"){ 
            var str ="";           
            if(query){                
                for(var key in query){
                    str+=key+"="+query[key]+"&";
                }
                str = str.slice(0,-1);
            }
            ajx.open(method,url,true);
            ajx.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            ajx.send(str);
        }
        ajx.onreadystatechange = function(){
            if(ajx.readyState===4){
                if(ajx.status===200){
                    callback&&callback(isJSON? JSON.parse(ajx.responseText) : ajx.responseText);
                }else{
                    alert("请求失败");
                }
            }
        }        
        
    },
    /**
     *使用promise进行ajax的请求 
     * @param {*} method <string>
     * @param {*} url <string>
     * @param {*} query <object>
     * @param {*} isJSON 
     * @return 返回promise
     */
    ajaxPromise:function(method,url,query,isJson){        
            var ajx = new XMLHttpRequest();
            isJson = isJson===undefined? true : isJson; 
            method = method.toUpperCase();
            if(method === "GET"){
                if(query){
                    var str="?";
                    for(var key in query){
                        str+=key+"="+query[key]+"&";
                    }
                    str = str.slice(0,-1);
                    url+=str;
                }                
                ajx.open(method,url,true);
                ajx.send(null);            
            }else if(method==="POST"){ 
                var str ="";           
                if(query){                
                    for(var key in query){
                        str+=key+"="+query[key]+"&";
                    }
                    str = str.slice(0,-1);
                }
                ajx.open(method,url,true);
                ajx.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                ajx.send(str);
            }
            return new Promise(function(resolve,reject){
                ajx.onreadystatechange = function(){
                    if(ajx.readyState===4){
                        if(ajx.status===200){                                                                         
                            resolve(isJson? JSON.parse(ajx.responseText) : ajx.responseText);
                        }else{
                            reject();
                        }
                    }
                } 
            })
    },    
    /** jsonp实现跨源操作
     * @param url <string> 传输的地址  
     * @param cb <string> 回调函数的函数名
     * @param [query] <object> 其他参数  
     */
    ajaxJsonp:function(url,cb,query){
        var script = document.createElement("script");
        url+="?cb="+cb;
        if(query){
            for(var key in query){
                url+="&"+key+"="+query[key];
            }
        }
        script.src=url;
        document.body.appendChild(script);
        document.body.removeChild(script);
    },
    /**事件监听
     * @param obj <string> 监听的对象
     * @param type <string> 事件名
     * @param foo <function> 函数
     * @param isCampture <boolean> 是否在捕获阶段处理事件 
     */
    on:function(obj,type,foo,isCampture){
        isCampture = isCampture || false;
        window.attachEvent? obj.attachEvent("on"+type,foo) : obj.addEventListener(type,foo,isCampture); 
    },
    /**
     * 移除事件监听
     */
    off:function(obj,type,foo,isCampture){
        isCampture = isCampture || false;
        window.detachEvent? obj.detachEvent("on"+type,foo) : obj.removeEventListener(type,foo,isCampture);
    },
    /**cookie的增，删，改，查
     * @param key <string> 属性名
     * @param [value] <object> 属性值
     * @param [option] <object> 其他参数如 时间，路径  
     * @return <string> 查到的元素返回出来
     */    
    cookie:function(key,value,option){
        if(value===undefined){
            //获取cookie值
            var cookies = document.cookie;
            cookies = cookies.split("; ");
            var objCk = cookies.reduce(function(obj,item){
                item = item.split("=");
                //decodeURIComponent 解码
                obj[item[0]] = decodeURIComponent(item[1]);
                return obj;
            },{})
            return objCk[key];
        }else{
            //增 删（option.expires = -1） 改(同样设置一遍key的value)
            //encodeURIComponent 转码
            var str= key+"="+encodeURIComponent(value);
            if(option){
                console.log(1);
                if(Math.abs(option.expires)){
                    var date = new Date();
                    date.setDate(date.getDate()+Number(option.expires));
                    str+=";expires="+date;
                }
                if(option.path){
                    str+=";path="+option.path;
                }
            }     
            document.cookie = str;
        }
    },
    /**获取可视窗口的大小
     * 
     */
    /**位置居中
     * @param 
     */
    /**运动
     * 
     */
    /**滑轮属性
     * 
     */
}
