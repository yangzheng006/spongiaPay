/**
 * tenant
 */

var member = function (fn) {
    this.fn = fn;
};
member.prototype = {
    /**
     * 用户详情
     * memberId 用户id
     *
     */
    view: function (data) {
        ajax.get({
            url: base + "member",
            data: data,
            success: this.fn
        });
    },

    /**
     * 帮助管理
     *
     */
    help: function (data) {
        ajax.get({
            url: base + "helpCenterGet",
            data: data,
            success: this.fn
        });
    },

    /**
     * 关于我们
     *
     */
    about: function (data) {
        ajax.get({
            url: base + "aboutUsGet",
            data: data,
            success: this.fn
        });
    },

    /**
     * 实名认证提交
     *
     */
    realNameAuthen: function (data) {
        ajax.post({
            url: base + "realNameAuthentication",
            data: data,
            success: this.fn
        });
    },



    /**
     * 绑定银行卡
     *
     */
    addBinding: function (data) {
        ajax.post({
            url: base + "addBinding",
            data: data,
            success: this.fn
        });
    },

    /**
     * 修改绑定的手机号
     * mobile  新电话号码
     * currentMobile 当前电话号码
     * AuthoCode 验证码
     * id   用户ID
     *
     */
    mobilePhone: function (data) {
        ajax.post({
            url: base + "mobilePhone",
            data: data,
            success: this.fn
        });
    }







};


