/**
 * 银行卡
 * Created by WangChao on 11/21 0021.
 */
var bank=function (fn) {
    this.fn=fn;
};

bank.prototype={
    /**
     * 我的银行卡
     */
    list:function () {
        ajax.get({
            url:base+'weixin/member/bank/list.jhtml',
            success:this.fn
        });
    },
    /**
     * 支持的银行
     */
    bankInfoList:function () {
        ajax.get({
            url:base+'weixin/member/bank/bank_info/list.jhtml',
            success:this.fn
        });
    },
    /**
     * 添加银行卡发送手机验证码
     * @param data
     * mobile 手机号
     */
    sendCode:function (data) {
        ajax.post({
            url:base+'weixin/member/bank/sendCode.jhtml',
            data:data,
            success:this.fn
        });
    },
    /**
     * 新增银行卡
     * captcha 验证码
     * bankInfoId 银行Id
     * cardNo 卡号
     * depositUser 开户名
     * idCardNo 证件号
     */
    save:function (data) {
        ajax.post({
            url:base+'weixin/member/bank/save.jhtml',
            data:data,
            success:this.fn
        });
    },
    /**
     * 删除银行卡
     * @param data
     * id 银行卡Id
     */
    delete:function (data) {
        ajax.post({
            url:base+'weixin/member/bank/delete.jhtml',
            data:data,
            success:this.fn
        });
    }

};