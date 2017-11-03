/**
 * 商品
 */

var product = function (fn) {
    this.fn = fn;
};
product.prototype = {
    /**
     * 商品列表
     * productCategoryId 平台分类 id
     * communityId 商圈
     * keyword 搜索关键词
     * tagIds 商品签标
     * brandId 品牌
     * startPrice endPrice 介位段
     * isTop 是否置顶
     * isGift 是否是赠品
     * isOutOfStock 是否库存不足
     * orderType 排序 {综合排序 weight,置顶降序 topDesc, 价格升序 priceAsc,价格降序 priceDesc,销量降序 salesDesc,评分降序 scoreDesc, 日期降序 dateDesc,人气降序 hitsDesc}
     */
    list: function (data) {
        ajax.get({
            url: base + "weixin/product/list.jhtml",
            data: data,
            success: this.fn
        });
    },
    /**
     * 商品详情
     * id 商品Id
     */
    view: function (data) {
        ajax.get({
            url: base + 'weixin/product/view.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * app商品预览页接口
     * id 商品Id
     */
    app_view:function (data) {
        ajax.get({
            url: base + 'weixin/product/app_view.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 商品详情页分享
     * id 商品Id
     */
    share: function (data) {
        ajax.get({
            url: base + 'weixin/product/share.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 分类页分享
     */
    categoryShare: function () {
        ajax.get({
            url: base + 'weixin/product/category/share.jhtml',
            success: this.fn
        })
    },
    /**
     * 获取指定商家的商品列表
     * id 商家编号
     * productCategoryTenantId 商家分类 id
     * keyword 搜索关键词
     * tagIds 商品签标(2新品,5推荐,1热销)
     * brandId 品牌
     * startPrice endPrice 介位段
     * orderType 排序 {综合排序 weight,置顶降序 topDesc, 价格升序 priceAsc,价格降序 priceDesc,销量降序 salesDesc,评分降序 scoreDesc, 日期降序 dateDesc,人气降序 hitsDesc}
     */
    listT: function (data) {
        ajax.get({
            url: base + 'weixin/product/list/' + data.id + '.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 商家促销商品
     * tenantId 商家Id
     * location 经纬度
     * pageable 分页
     */
    promotionList:function (data) {
        ajax.get({
            url: base + 'weixin/product/promotion/list.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 邻家好货，指联盟商品的商品
     * id 商家Id
     */
    unions: function (data) {
        ajax.get({
            url: base + 'weixin/product/unions.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 获取推荐，搭配商品列表
     * id 商品Id
     */
    recommend: function (data) {
        ajax.get({
            url: base + 'weixin/product/recommend.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 商品热门搜索词
     */
    hot_search: function () {
        ajax.get({
            url: base + 'weixin/product/hot_search.jhtml',
            success: this.fn
        });
    },
    /**
     * 添加商品到收藏
     * id 商品Id
     */
    favorite: function (data) {
        ajax.post({
            url: base + 'weixin/member/favorite/product/add.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 取消商品收藏
     * id 商品Id
     */
    delFavorite: function (data) {
        ajax.post({
            url: base + 'weixin/member/favorite/product/delete.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 分享商品列表
     * tenantId 联盟商家Id
     * keyword 关键词
     * orderType 排序 {综合排序 weight,置顶降序 topDesc, 价格升序 priceAsc,价格降序 priceDesc,销量降序 salesDesc,评分降序 scoreDesc, 日期降序 dateDesc,人气降序 hitsDesc}
     * location 经纬度
     * type 类型（1本店，2联盟商家，3平台推荐）
     * pageable 分页
     */
    shareList: function (data) {
        ajax.get({
            url: base + 'weixin/product/share/list.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 根据商品sn查询商品id
     * sn 商品sn
     */
    findBySn: function (data) {
        ajax.get({
            url: base + 'weixin/product/findBySn.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 小店推荐商品列表
     * pageSize
     * pageNumber
     */
    recommendList: function (data) {
        ajax.get({
            url: base + 'weixin/product/recommend/list.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 频道页人气商品
     * count 数量
     * channelId 频道Id
     */
    hotList: function (data) {
        ajax.get({
            url: base + 'weixin/product/hot/list.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 增加分享商品次数
     * id 商品id
     */
    extend: function (data) {
        ajax.post({
            url: base + 'weixin/product/extend.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 推荐理由
     * id 商品Id
     */
    recommendReason: function (data) {
        ajax.get({
            url: base + 'weixin/product/recommendReason.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     *推荐品牌下的推荐商品
     */
    brandRecommendProduct: function () {
        ajax.get({
            url: base + 'weixin/product/brand_recommend_product.jhtml',
            success: this.fn
        });
    },
    /**
     * 搭配销售
     * id 商品Id
     */
    tieinsale: function (data) {
        ajax.get({
            url: base + 'weixin/product/tieinsale.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 精品推荐
     * 商家商品分类 productCategoryTenantId
     * 标签Long[] tagIds
     * pageSize
     * pageNumber
     * username
     * type 1：分类为其他  否则传2
     */

    productpush: function (data) {
        ajax.get({
            url: base + 'weixin/member/productpush/list.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     *商家分类其它的数量
     */
    otherCount:function () {
        ajax.get({
            url:base+'weixin/member/productpush/otherCount.jhtml',
            success:this.fn
        });
    },
    /**
     *精品推荐的数量
     */
    productPushCount:function () {
        ajax.get({
            url:base+'weixin/member/productpush/count.jhtml',
            success:this.fn
        });
    },
    /**
     *精品推荐的分类
     * tenantId 商家id
     */
    productPushCategory:function (data) {
        ajax.get({
            url:base+'weixin/member/productpush/roots.jhtml',
            data:data,
            success:this.fn
        });
    }

};



