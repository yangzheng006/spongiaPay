/**
 * 购物车
 * Created by WangChao on 11/18 0018.
 */
var cart = function (fn) {
    this.fn = fn;
};
cart.prototype = {
    /**
     * 购物车列表
     * tenantId 商家Id
     */
    list: function (data) {
        ajax.get({
            url: base + 'weixin/cart/list.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 编辑数量
     * id 购物项Id
     * quantity 数量
     */
    edit: function (data) {
        ajax.post({
            url: base + 'weixin/cart/edit.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 添加至购物车
     * id 商品Id
     * quantity 数量
     * type (buy为立即购买)
     */
    add: function (data) {
        ajax.post({
            url: base + 'weixin/cart/add.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 添加至购物车2
     * id 商品Id
     *  数量
     */
    add2:function (data) {
        ajax.post({
            url: base + 'weixin/cart/add2.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 搭配销售-立即购买
     * id 商品Id
     * quantity 数量
     */
    tieinsaleBuy:function (data) {
        ajax.post({
            url: base + 'weixin/cart/tieinsale/buy.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 选择
     * ids 购物项Id(数组)
     * flag 是否选中
     */
    selected: function (data) {
        ajax.post({
            url: base + 'weixin/cart/selected.jhtml',
            data: data,
            traditional: true,
            success: this.fn
        });
    },
    /**
     * 删除
     * ids 购物项id(数组)
     */
    delete: function (data) {
        ajax.post({
            url: base + 'weixin/cart/delete.jhtml',
            data: data,
            traditional: true,
            success: this.fn
        });
    },
    /**
     * 删除
     * ids 商品id(数组)
     */
    del:function (data) {
        ajax.post({
            url: base + 'weixin/cart/del.jhtml',
            data: data,
            traditional: true,
            success: this.fn
        });
    },
    /**
     * 购物车商品数量
     * tenantId 商家Id
     */
    count: function (data) {
        ajax.get({
            url: base + 'weixin/cart/count.jhtml',
            data: data,
            success: this.fn
        })
    }

};
