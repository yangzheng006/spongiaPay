/**
 * commmon
 * Created by WangChao on 2016/11/24.
 */
var common = function (fn) {
    this.fn = fn;
};
common.prototype = {
    /**
     * 发送验证码
     * phoneNumber 电话号码
     * @param type 0：注册验证码短信 1：修改手机号 2:绑定银行卡
     */
    sendCode: function (data) {
        ajax.get({
            url: base + 'getAuthenticationCodeGet',
            success:this.fn,
            data:data
        });
    },


    /**
     * 上传照片
     * image
     * type  0是实名认证正面照片   1 实名认证身份证反面照
     */
    uploadImage: function (data) {
        ajax.post({
            url: base + 'fileUpload',
            success:this.fn,
            data:data
        });
    }

};