/**
 * 提现选择银行卡组件
 * Created by Wan on 11/21 0011.
 */

var choosemybank = {
    bank: function (data) {
        ajax.get({
            url: base + "weixin/member/bank/list.jhtml",
            data: data,
            success: function (data) {
                var html = "<div style='height: 100%;overflow-y: scroll;'>";
                $.each(data, function (index, bank) {
                    var div='<div class="weui-cells">';
                    div+= '<div class="weui-cell" id="' + bank.id + '" account="' + bank.account + '" name="' + bank.bankName + '" cardNo="' + bank.cardNo + '" >'+
                        '<div class="weui-cell__hd">'+
                        '<img src="'+bank.logo+'" alt="" style="height: 20vw;height:20vw;">'+
                        '</div>'+
                        '<div class="weui-cell__bd weui-cell__primary f14" style="padding-left: 15px;">'+
                        '<p>'+bank.bankName+'</p>'+
                        '<p>**** **** ****<span id="cardNo">'+bank.cardNo+'</span>&nbsp;&nbsp; <span id="account">'+bank.account+'</span></p>'+
                        '</div>'+
                        '</div>'+
                        '</div>';
                    html+=div;
                });
                html+="</div>"
                var editmycard='<div class="weui-btn-hidden btnNext editmycard">'+
                    '<a class="weui-btn btn-default" href="javascript:"  id="sendcerti">管理银行卡</a>'+
                    '</div>';
                html+=editmycard;

                $(".chooseWidget").show().html(html);
                $(".chooseWidget .weui-cells").click(function(){
                    var $this = $(this).find(".weui-cell");
                    $(".chooseWidget").hide().html("");
                    if(choosemybank.callBack){
                        choosemybank.callBack({id: $this.attr("id"), cardNo: $this.attr("cardNo"), name: $this.attr("name"),logo:$this.find('img').attr("src")});
                    }
                });
                $(".editmycard").click(function(){
                    location.href=location.origin+'/weixin/member/index.html?#bank';
                })
            }
        });
    }
};