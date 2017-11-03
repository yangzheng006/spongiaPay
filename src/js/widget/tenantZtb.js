    // 底部导航选中变色
    ;(function(){
        "use strict";
        $(".starlevels").starLevelize();
        $('.clr-gray01').remove();
        $(document).on('click','.tenant_ztb',function () {
            var tid=$(this).attr('id');
            var tenantId=pageManager.GetQueryString('id');
            if(tenantId>2){
                new tenant(function (data) {
                    console.log(data);
                    location.href='../tenant/index.jhtml?id='+tid+ '&extension=' + data.ownerUserName;
                }).view({id:tenantId});
            }else{
                location.href='../tenant/index.jhtml?id='+tid;
            }
        });
    })(window||this);