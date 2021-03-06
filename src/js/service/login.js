/**
 * tenant
 */

var login = function (fn) {
    this.fn = fn;
};
login.prototype = {
    /**
     * 注册发送验证码
     * phoneNumber 电话号码
     * type  0：注册验证码短信
     */
    sendLoginCode: function (data) {
        ajax.get({
            url: base + "getAuthenticationCodeGet",
            data: data,
            success: this.fn
        });
    },

    /**
     * 注册提交
     * account 账号
     * authoCode验证码
     * passwd 密码
     */
    register: function (data) {
        ajax.post({
            url: base + "register",
            data: data,
            success: this.fn
        });
    },

    /**
     * 注册提交
     * account 账号
     * authoCode验证码
     * passwd 密码
     */
    registerInvite: function (data) {
        ajax.post({
            url: base + "registerInvite",
            data: data,
            success: this.fn
        });
    },



    /**
     * 登陆
     * type 1:密码登录2:验证码登录
     * account 账号
     * authoCode验证码
     */
    loginS: function (data) {
        ajax.post({
            url: base + "Login",
            data: data,
            success: this.fn
        });
    },

    /**
     * 忘记密码
     * id 用户id
     * mobile 电话号
     * Pwd  密码
     * AuthoCode 验证码
     */
    modifyPwd: function (data) {
        ajax.post({
            url: base + "modifyPwd",
            data: data,
            success: this.fn
        });
    }



};


