/**
 * product channel {jsons}
 */

var productChannel = function(fn) {
    this.fn = fn;
};
productChannel.prototype = {
    /**
     * 获取同城频道列表
     */
    list:function () {
        ajax.get({
            url:base+"weixin/product_channel/list.jhtml",
            success:this.fn
        });

    },
    /**
     * 获取频道下的商家分类
     * id 频道id
     */
    tenantCategory:function (data) {
        ajax.get({
            url:base+'weixin/product_channel/tenant_category.jhtml',
            data:data,
            success:this.fn
        });
    },
    /**
     * 频道特权
     * id 频道Id
     */
    getprivilege:function (data) {
        ajax.get({
            url:base+'weixin/product_channel/getprivilege.jhtml',
            data:data,
            success:this.fn
        });
    }

};


