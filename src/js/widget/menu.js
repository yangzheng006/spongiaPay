    // 底部导航选中变色
    ;(function(){
            "use strict";
            setTimeout(function () {
                var str = window.location.href;
                if(str.indexOf("member/index.html#home")>-1){
                    $(".foot_menu2 #nav1").addClass('weui-bar__item_on').siblings('.weui-bar__item_on').removeClass('weui-bar__item_on');
                }

                else if(str.indexOf("member/index.html#finance")>-1){
                    $(".foot_menu2 #nav2").addClass('weui-bar__item_on').siblings('.weui-bar__item_on').removeClass('weui-bar__item_on');
                }
                else if(str.indexOf("member/index.html#finance")>-1){
                    $(".foot_menu2 #nav3").addClass('weui-bar__item_on').siblings('.weui-bar__item_on').removeClass('weui-bar__item_on');
                }

                else if(str.indexOf("member/index.html#home")>-1){
                    $(".foot_menu2 #nav5").addClass('weui-bar__item_on').siblings('.weui-bar__item_on').removeClass('weui-bar__item_on');
                }

            },100)
    })(window||this);