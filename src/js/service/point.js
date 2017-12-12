/**
 * 广告位
 */

var point = function (fn) {
    this.fn = fn;
};
point.prototype = {
    /**
     * 首页轮播图
     * @param position 广告位Id
     */
    view: function (data) {
        ajax.get({
            url: base + "integralGetDate",
            success: this.fn,
            data:data
        });

    }
};


