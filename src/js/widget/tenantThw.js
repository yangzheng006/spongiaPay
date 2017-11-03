    // 底部导航选中变色
    ;(function(){
        "use strict";
        // $(".starlevels").starLevelize();
        $('.clr-gray01').remove();
        //到店里去
        $('.go_tenant').die().live('click',function () {
            var me = $(this);
            var name=me.attr('name');
            var address=me.attr('address');
            var lng=Number(me.attr('lng'));
            var lat=Number(me.attr('lat'));
            console.log(name,address,lng,lat);
            weixin.openLocation({
                lat: lat,
                lng: lng,
                name: name,
                address: address
            });
        });
        $(document).on('click','.tenant_thw',function () {
            var tid=$(this).attr('tenantId');
            var tenantId=pageManager.GetQueryString('id');
            if(location.href.indexOf('dynamicView')>-1){
                location.href='../tenant/index.jhtml?id='+tid;
            } else if(tenantId){
                new tenant(function (data) {
                    location.href='../tenant/index.jhtml?id='+tid+ '&extension=' + data.ownerUserName;
                }).view({id:tenantId});
            }else{
                location.href='../tenant/index.jhtml?id='+tid;
            }
        });
        // $('.union_tenant_list').each(function () {
        //     if($(this).find('.promotion').length>=3){
        //         $(this).find('.promotion').addClass('none');
        //         $(this).find('.promotionhang').removeClass('none');
        //     }
        // });
        $('.promotionhang').die().live('click',function (event) {
            if($(this).find('i').last().hasClass('icon-xiala')){
                $(this).find('i').last().removeClass('icon-xiala').addClass('icon-shangjiantou1');
                $(this).addClass('none');
                $(this).parent().find('.promotion').removeClass('none');
                $(this).parent().find('.promotion').first().append('<i class="icon iconfont icon-shangjiantou1" style="float: right;margin-top:2px;"></i>');
                $(this).parent().find('.promotion').first().on('click',function (e) {
                    e.stopPropagation();
                    $(this).find('i').eq(1).remove();
                    $(this).parent().find('.promotion').addClass('none');
                    $(this).parent().find('.promotionhang').removeClass('none');
                    $(this).parent().find('.promotionhang').find('i').last().removeClass('icon-shangjiantou1').addClass('icon-xiala');
                });
            }else if($(this).find('i').last().hasClass('icon-shangjiantou1')){
                $(this).find('i').last().removeClass('icon-shangjiantou1').addClass('icon-xiala');
            }
            event.stopPropagation();
        });
    })(window||this);