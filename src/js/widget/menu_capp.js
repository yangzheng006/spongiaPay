// 底部导航选中变色
;(function(){
    "use strict";
    setTimeout(function () {
        var str = window.location.href;
        var index = str .lastIndexOf("\/");
        str  = str .substring(index + 1, str .length);
        var aa = window.location.pathname;
        if(aa.indexOf("home/index.html")>-1){
            $(".menu_capp #nav1").addClass('weui-bar__item_on').siblings('.weui-bar__item_on').removeClass('weui-bar__item_on');
        }
        else if(aa.indexOf("nearby/index.html")>-1){
            $(".menu_capp #nav2").addClass('weui-bar__item_on').siblings('.weui-bar__item_on').removeClass('weui-bar__item_on');
        }
        else if(aa.indexOf("member/index.html")>-1){
            $(".menu_capp #nav3").addClass('weui-bar__item_on').siblings('.weui-bar__item_on').removeClass('weui-bar__item_on');
        }

        if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
//            console.log('iphone');
            ios('message','message');
            ios('messageMenu','message');

        } else if (/(Android)/i.test(navigator.userAgent)) {
            $(document).on('click','#message',function () {
                messageAndroid("message");
                function messageAndroid(a){
                    window.android.messageAndroid(a);
                }
            });
            $(document).on('click','#messageMenu',function () {
                messageAndroid("message");
                function messageAndroid(a){
                    window.android.messageAndroid(a);
                }
            });
        }

        //购物车数量
        var number = new cart(function(data){
            if(data!= 0){
                $('#cartCount').css('display','inline-block');
                $('#cartCount').html(data);
            }else{
                $('#cartCount').hide();
            }
        });
        number.count();
    },500);
})(window||this);