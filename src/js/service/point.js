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

    }
};


