/**
 * 合伙人
 * Created by wangChao on 2017/1/23.
 */

var partner=function (fn) {
    this.fn=fn;
};
partner.prototype={
    /**
     * 申请成为合伙人时发送验证码
     * mobile 手机号
     */
    sendCode:function (data) {
        ajax.post({
            url:base+'weixin/member/partner/sendCode.jhtml',
            data:data,
            success:this.fn
        });
    },
    /**
     * 申请成为合伙人
     * captcha    验证码
     * inviteCode 邀请码
     * mobile 手机号
     */
    add:function (data) {
        ajax.post({
            url:base+'weixin/member/partner/add.jhtml',
            data:data,
            success:this.fn
        });
    },

    /**
     * 平台合伙人信息
     */
    partnerInfo: function (data) {
        ajax.get({
            url: base + 'weixin/member/partner/invite.jhtml',
            data: data,
            success: this.fn
        });
    },

    /**
     * 登录者的卖力值
     * username 用户名
     */
    hardValue: function (data) {
        ajax.get({
            url: base + 'weixin/member/partner/hardValue.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 合伙人卖力值排行
     * pageSize 页大小
     * pageNumber 页号
     */
    hardValueList: function (data) {
        ajax.get({
            url: base + 'weixin/member/partner/hardValueList.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 合伙人管理
     * type 1销售者, 2合伙人
     */
    list:function (data) {
        ajax.get({
            url: base + 'weixin/member/partner/list.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 累计收益
     */
    totalDebit:function () {
        ajax.get({
            url: base + 'weixin/member/partner/totalDebit.jhtml',
            success: this.fn
        });
    },
    /**
     * 是否是合伙人
     */
    isParttner:function () {
        ajax.get({
            url: base + 'weixin/member/partner/isParttner.jhtml',
            success: this.fn
        });
    }

};
