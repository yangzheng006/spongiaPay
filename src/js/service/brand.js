/**
 * 广告位
 */

var brand = function (fn) {
    this.fn = fn;
};
brand.prototype = {
    /**
     * 获取推荐的品牌
     */
    recommendBrand: function () {
        ajax.get({
            url: base + "weixin/brand/recommend_brand.jhtml",
            success: this.fn
        });
    }
};


