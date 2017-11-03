/**
 * 确认订单时候选择我的收货地址组件
 * Created by Wan on 11/26 0011.
 */

var choosead = {
    bank: function (data) {
        ajax.get({
            url: base + "weixin/member/receiver/list.jhtml",
            data: data,
            success: function (data) {
                var html = "";
                $.each(data, function (index, bank) {
                    var ul = '<a class="weui-cell  weui-cell_access h30" href="javascript:;" adid="' + bank.id + '">'+
                        '<div class="weui-cell__hd" style="margin-right: 7px;"><i class="iconfont icon-weizhi f24"></i></div>'+
                        '<div class="weui-cell__bd" style="line-height: 1.8;">'+
                        '<p class="f14 bold clr_gray01">'+
                        '<span>'+bank.consignee+'</span><span style="margin-left: 10px;">'+bank.phone+'</span>'+
                        '</p>'+
                        '<p class="clr_gray01 address_moren f14 overtwo" style="margin-top: 0;"><span id="fullName">'+bank.area.fullName+'</span>,<span>'+bank.address+'</span></p>'+
                        '</div>'+
                        '</a>';
                    html += ul;
                });
                html = "<div style='overflow-y: scroll;width: 100%;height: 100%;'>"+html+"</div>";
                var editad= '<div class="add_address weui-btn-area editmyaddress" style="text-align: center;color:#fff;background:#ff6d06;height: 50px;padding: 0;margin: 0;line-height: 50px;">'+
                    '管理收货地址'+
                    '</div>';
                html+=editad;
                $(".chooseWidget").show().html(html);
                $(".chooseWidget a").click(function(){
                    $(".chooseWidget").hide().html("");
                    if(choosead.callBack){
                        choosead.callBack({id: $(this).attr("adid"),html:$(this)});
                    }
                    var receid=$(this).attr("adid");
                    var paymentId=$('#paymentMethodId').attr('styleid');
                    var shippingId=$('#shippingMethodId').attr('styleid');
                    var codep;
                    codep=[];
                    $(".selectcp").each(function(){
                        var cod=$(this).attr('code');
                        codep.push(cod);
                    });
                    console.log(codep);
                    var od=new order(function (data) {
                        console.log('选择收货地址计算');
                        console.log(data);
                        $('.totalamount').html(data.amountPayable);
                        $('.store').each(function () {
                            var index=$('.store').index(this);
                            $(this).find('.trueamount').html(data.trades[index].amount);
                            $(this).find('.freight').html(data.trades[index].freight);
                        })
                    });
                    od.calculate({
                        paymentMethodId:paymentId,
                        shippingMethodId:shippingId,
                        codes:codep,
                        receiverId:receid
                    });

                });
                $(".editmyaddress").click(function(){
                    location.replace('../member/address.html?type=cart');
                })
            }
        });
    }
};