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
    }
};