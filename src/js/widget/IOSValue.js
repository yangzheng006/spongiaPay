// 顶部导航滑动效果   此组件要内页自已引入 div 结构
    function ios(ele,para) {
    function setupWebViewJavascriptBridge(callback) {
        if (window.WebViewJavascriptBridge) { return callback(WebViewJavascriptBridge); }
        if (window.WVJBCallbacks) { return window.WVJBCallbacks.push(callback); }
        window.WVJBCallbacks = [callback];
        var WVJBIframe = document.createElement('iframe');
        WVJBIframe.style.display = 'none';
        WVJBIframe.src = 'https://__bridge_loaded__';
        document.documentElement.appendChild(WVJBIframe);
        setTimeout(function() { document.documentElement.removeChild(WVJBIframe) }, 0)
    }
    setupWebViewJavascriptBridge(function(bridge) {
        bridge.registerHandler('testJavascriptHandler', function(data, responseCallback) {
            var responseData = { 'Javascript Says':'Right back atcha!' };
            responseCallback(responseData)
        });
        if(ele == 'reload'){
            console.log('刷新页面刷新页面刷新页面刷新页面');
            var callbackButton = $(document);
            callbackButton.trigger('click');
            callbackButton.onclick = function(e) {
                console.log(2222222222);
                e.preventDefault();
                bridge.callHandler('objcCallback', {'handle': para}, function(response) {
                })
            };
        }else{
            console.log('333333');
            var callbackButton = document.getElementById(ele);
            callbackButton.onclick = function(e) {
                console.log(333333);
                e.preventDefault();
                bridge.callHandler('objcCallback', {'handle': para}, function(response) {
                })
            };
        }
    });
}