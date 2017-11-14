/**
 * 广告位
 */

var ad = function (fn) {
    this.fn = fn;
};
ad.prototype = {
    /**
     * 首页轮播图
     * @param position 广告位Id
     */
    adIndex: function (position) {
        ajax.get({
            url: base + "carouselGet",
            success: this.fn
        });

    }
};


