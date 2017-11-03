    // 底部导航选中变色
    ;(function(){
            "use strict";
            setTimeout(function () {
                var str = window.location.href;
                var index = str.lastIndexOf("\/");
                str = str.substring(index + 1, str.length);

                //不在首页
                if(str.indexOf("shop.html") == -1){
                    $('.tenant_menu #nav1').attr('href',"javascript:location.replace('../tenant/shop.html?id=' + pageManager.GetQueryString('id'));");
                    $('.tenant_menu #nav2').attr('href',"javascript:location.replace('../tenant/category.html?id=' + pageManager.GetQueryString('id'));");
                    $('.tenant_menu #nav3').attr('href',"javascript:location.replace('../payBill/index.html?id=' + pageManager.GetQueryString('id'));");
                    $('.tenant_menu #nav4').attr('href',"javascript:location.replace('../tenant/cart.html?id=' + pageManager.GetQueryString('id'));");
                    $('.tenant_menu #nav5').attr('href',"javascript:location.replace('../tenant/member.html?id=' + pageManager.GetQueryString('id'));");
                }else if(str.indexOf("shop.html") > -1){
                    $('.tenant_menu #nav1').attr('href', '../tenant/shop.html?id=' + pageManager.GetQueryString('id'));
                    $('.tenant_menu #nav2').attr('href', '../tenant/category.html?id=' + pageManager.GetQueryString('id'));
                    $('.tenant_menu #nav3').attr('href', '../payBill/index.html?id=' + pageManager.GetQueryString('id'));
                    $('.tenant_menu #nav4').attr('href', '../tenant/cart.html?id=' + pageManager.GetQueryString('id'));
                    $('.tenant_menu #nav5').attr('href', '../tenant/member.html?id=' + pageManager.GetQueryString('id'));
                }
                if (str.indexOf("shop.html") > -1) {
                    $(".tenant_menu #nav1").addClass('weui-bar__item_on').siblings('.weui-bar__item_on').removeClass('weui-bar__item_on');
                }
                else if (str.indexOf("category.html") > -1) {
                    $(".tenant_menu #nav2").addClass('weui-bar__item_on').siblings('.weui-bar__item_on').removeClass('weui-bar__item_on');
                }
                else if (str.indexOf("cart.html") > -1) {
                    $(".tenant_menu #nav4").addClass('weui-bar__item_on').siblings('.weui-bar__item_on').removeClass('weui-bar__item_on');
                }
                else if (str.indexOf("member.html") > -1 || str.indexOf("redPacket.html") > -1) {
                    $(".tenant_menu #nav5").addClass('weui-bar__item_on').siblings('.weui-bar__item_on').removeClass('weui-bar__item_on');
                }
                //购物车数量
                var number = new cart(function (data) {
                    if (data != 0) {
                        $('.tenant_menu #cartCount').css('display', 'inline-block');
                        $('.tenant_menu #cartCount').html(data);
                    } else {
                        $('.tenant_menu #cartCount').hide();
                    }
                });
                number.count({tenantId: pageManager.GetQueryString('id')});
                //旧版商家首页进入的分类,隐藏底部导航
                var type=pageManager.GetQueryString('type');
                if (type && type == 'origin') {
                    $('.tenant_menu').addClass('none');
                    $('#silder-left').css('height', '100%');
                }
            },100)
    })(window||this);