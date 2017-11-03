    // 底部导航选中变色
    ;(function(){
            "use strict";
            setTimeout(function () {
                var str = window.location.href;
                if(str.indexOf("home/index.html")>-1){
                    console.log('home')
                    $(".foot_menu2 #nav1").addClass('weui-bar__item_on').siblings('.weui-bar__item_on').removeClass('weui-bar__item_on');
                    $('#nav1').find('img').eq(0).hide()
                    $('#nav1').find('img').eq(1).show()
                }
                else if(str.indexOf("recommend/index.html")>-1){
                    console.log('recommend')
                    $(".foot_menu2 #nav2").addClass('weui-bar__item_on').siblings('.weui-bar__item_on').removeClass('weui-bar__item_on');
                    $('#nav2').find('img').eq(0).hide()
                    $('#nav2').find('img').eq(1).show()
                }
                else if(str.indexOf("finance/index.html")>-1){
                    console.log('finance')
                    $(".foot_menu2 #nav3").addClass('weui-bar__item_on').siblings('.weui-bar__item_on').removeClass('weui-bar__item_on');
                    $('#nav3').find('img').eq(0).hide()
                    $('#nav3').find('img').eq(1).show()
                }
                else if(str.indexOf("member/index.html")>-1){
                    console.log('member')
                    $(".foot_menu2 #nav4").addClass('weui-bar__item_on').siblings('.weui-bar__item_on').removeClass('weui-bar__item_on');
                    $('#nav4').find('img').eq(0).hide()
                    $('#nav4').find('img').eq(1).show()
                }
            },100)
    })(window||this);