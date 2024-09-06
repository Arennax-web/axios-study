

// 模拟手写一个简易 Axios2
class Axios2{
    // 拦截器
    // const interceptor
    request = {}
    constructor(){
        // 浏览器自带 方法
        this.request = new XMLHttpRequest()
        this.request.onreadystatechange = ()=> {
            console.log(this.request.readyState + 'onreadystatechange');
            if(this.request.readyState === 4 && this.request.status === 200) {
                console.log(this.request.getAllResponseHeaders()+'getAllResponseHeaders');
            }
            
        };
    
        this.request.onabort = function handleAbort(res) {
            console.log(res+'onabort');
        }
        this.request.onerror = function handleError(res) {
            console.log(res + 'onerror');
    
        }
        this.request.ontimeout = function handleTimeout(res) {
            console.log(res+'ontimeout');
        }
    }
    open(config){// 创建链接
        this.request.open(config.method.toUpperCase(), config.url, true);
    }
    send(){// 发送消息
        this.request.send('requestData');
    }
    abort(){// 终止发送
        this.request.abort('abortRequest');
    }
}

const axios2 = new Axios2()

export default axios2