/**
 * 广告位
 */

var ad = function (fn) {
    this.fn = fn;
};
ad.prototype = {
    /**
     * 获取同城广告
     * @param position 广告位Id
     */
    do: function (position) {
        ajax.get({
            url: base + "weixin/ad.jhtml?position=" + position,
            success: this.fn
        });

    },
    /**
     * 获取商家广告
     * @param position 广告位id
     * @param tenantId 商家Id
     */
    doT: function (position, tenantId) {
        ajax.get({
            url: base + "weixin/ad/" + tenantId + ".jhtml?position=" + position,
            success: this.fn
        });

    },
    /**
     * 获取频道广告位
     * id 广告位Id(顶部banner 143,中间部位 144)
     * productChannelId 频道id
     * areaId 区域Id
     * count 数量
     * tenantCategoryId 商家分类Id
     */
    channel: function (data) {
        ajax.get({
            url: base + 'weixin/ad/channel.jhtml',
            data: data,
            success: this.fn
        });

    }
};


