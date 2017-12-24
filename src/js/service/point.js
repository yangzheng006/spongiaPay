/**
 * 广告位
 */

var point = function (fn) {
    this.fn = fn;
};
point.prototype = {
    /**
     *
     */
    view: function (data) {
        ajax.get({
            url: base + "integralGetDate",
            success: this.fn,
            data:data
        });

    },

    /**
     *积分赠送givEIntegral
     */
    givEIntegral: function (data) {
        ajax.get({
            url: base + "givEIntegral",
            success: this.fn,
            data:data
        });

    },


    /**
     *积分记录
     * hyid
     * month
     */
    selectIntegralRecord: function (data) {
        ajax.get({
            url: base + "selectIntegralRecord",
            success: this.fn,
            data:data
        });

    },

    /**
     *提交积分提现
     * hyid
     * KHYH  发卡机构
     * YHKH  银行卡号
     * TXJF  提现积分
     * BKID  绑卡信息id
     */
    wthdrawals: function (data) {
        ajax.get({
            url: base + "wthdrawals",
            success: this.fn,
            data:data
        });
    },


    /**
     *使用积分
     * hyId
     * shmc  商户名称
     * jf   使用积分
     */
    useIntegral: function (data) {
        ajax.get({
            url: base + "useIntegral",
            success: this.fn,
            data:data
        });

    }

};


