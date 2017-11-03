/**
 * 选择银行卡组件
 * Created by Wan on 11/21 0011.
 */

var choosebank = {
    bank: function (data) {
        ajax.get({
            url: base + "weixin/member/bank/bank_info/list.jhtml",
            data: data,
            success: function (data) {
                var html = "";
                $.each(data, function (index, bank) {
                    var ul = '<ul class="weui-cell">';
                    ul += '<li id="' + bank.id + '" bankCode="' + bank.bankCode + '" name="' + bank.bankName + '" class="weui-cell__bd"><a href="javascript:;">' + bank.bankName + '</a></li>';
                    ul += '</ul>';
                    html += ul;
                });
                $(".chooseWidget").show().html(html);
                $(".chooseWidget ul").click(function(){
                    var $this = $(this).find("li");
                        $(".chooseWidget").hide().html("");
                        if(choosebank.callBack){
                            choosebank.callBack({id: $this.attr("id"), name: $this.attr("name"), bankCode: $this.attr("bankCode")});
                        }
                });
            }
        });
    }
};