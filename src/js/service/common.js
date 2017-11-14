/**
 * commmon
 * Created by WangChao on 2016/11/24.
 */
var common = function (fn) {
    this.fn = fn;
};
common.prototype = {
    /**
     * 获取公钥
     * @param data
     */
    getPublicKey: function () {
        ajax.get({
            url: base + 'weixin/common/public_key.jhtml',
            success:this.fn
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