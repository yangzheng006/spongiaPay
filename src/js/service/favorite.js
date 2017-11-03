/**
 * 收藏
 * Created by WangChao on 11/21 0021.
 */
var favorite = function (fn) {
    this.fn = fn;
};
favorite.prototype = {
    /**
     * 我收藏的商品
     * pageSize 页大小
     * pageNumber 页码
     */
    productList: function (data) {
        ajax.get({
            url: base + 'weixin/member/favorite/product/list.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 我收藏的商家
     * lng 经度
     * lat 纬度
     * pageSize 页大小
     * pageNumber 页码
     */
    tenantList: function (data) {
        ajax.get({
            url: base + 'weixin/member/favorite/tenant/list.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 我收藏的导购
     * pageSize 页大小
     * pageNumber 页码
     */
    guideList: function (data) {
        ajax.get({
            url: base + 'weixin/member/favorite/guide/list.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 收藏、取消 店铺软文
     * id   店铺Id
     */
    wxshare: function (data) {
        ajax.post({
            url: base + 'weixin/member/favorite/wxshare/add.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 收藏的资讯
     * pageSize 页大小
     * pageNumber 页码
     * lng 经度
     * lat 纬度
     */
    articleList: function (data) {
        ajax.get({
            url: base + 'weixin/member/favorite/article/list.jhtml',
            data: data,
            success: this.fn
        })
    }
};