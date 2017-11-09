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
     * 获取公钥
     * image
     * type  0是实名认证正面照片
     */
    uploadImage: function (data) {
        ajax.get({
            url: base + 'fileUpload',
            success:this.fn,
            data:data
        });
    }

};