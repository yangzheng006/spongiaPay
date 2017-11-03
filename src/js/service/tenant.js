/**
 * tenant
 */

var tenant = function (fn) {
    this.fn = fn;
};
tenant.prototype = {
    /**
     * 商家列表
     * tenantCategoryId 店铺分类Id
     * areaId           区域Id
     * channelId        频道Id
     * lat         坐标
     * lng         坐标
     * distatce         距离内
     * tagIds           标签Ids
     * communityId      商圈Id
     * isPromotion      优惠商家true，全部商家false或null
     * isUnion          是否是联盟商家
     * keyword          关键字
     * orderType        排序方式（默认排序 weight,点击降序 hitsDesc,评分降序 scoreDesc,日期降序 dateDesc,距离优先 distance）
     * pageSize         分页参数（pageSize每页记录数,pageNumber页码）
     * pageNumber         分页参数（pageSize每页记录数,pageNumber页码）
     */
    list: function (data) {
        ajax.get({
            url: base + "weixin/tenant/list.jhtml",
            data: data,
            success: this.fn
        });

    },
    /**
     * 附近商家列表
     * tenantCategoryId 店铺分类Id
     * areaId           区域Id
     * channelId        频道Id
     * lat         坐标
     * lng         坐标
     * distatce         距离内
     * tagIds           标签Ids
     * communityId      商圈Id
     * isPromotion      优惠商家true，全部商家false或null
     * isUnion          是否是联盟商家
     * keyword          关键字
     * orderType        排序方式（默认排序 weight,点击降序 hitsDesc,评分降序 scoreDesc,日期降序 dateDesc,距离优先 distance）
     * pageSize         分页参数（pageSize每页记录数,pageNumber页码）
     * pageNumber         分页参数（pageSize每页记录数,pageNumber页码）
     */
    nearbyList:function(data){
        ajax.get({
            url: base + "weixin/tenant/nearbyList.jhtml",
            data: data,
            success: this.fn
        });
    },
    /**
     * 首页推荐商家列表
     * tagId 标签id
     */
    firstRecommend: function (data) {
        ajax.get({
            url: base + "weixin/tenant/firstRecommend.jhtml",
            data: data,
            success: this.fn
        });
    },
    /**
     * 商家热门搜索词
     */
    hot_search: function () {
        ajax.get({
            url: base + 'weixin/tenant/hot_search.jhtml',
            success: this.fn
        });
    },
    /**
     * 商家详情
     * id 店铺ID
     * lat 纬度
     * lng 经度
     */
    view: function (data) {
        ajax.get({
            url: base + 'weixin/tenant/view.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 分享
     * id 商家Id
     */
    share:function (data) {
        ajax.get({
            url:base+'weixin/tenant/share.jhtml',
            data:data,
            success:this.fn
        });
    },
    /**
     * 优惠买单分享
     * id 商家Id
     */
    offerToPayShare:function (data) {
        ajax.get({
            url:base+'weixin/tenant/offerToPay/share.jhtml',
            data:data,
            success:this.fn
        });
    },
    /**
     * 附近页分享
     */
    nearbyShare:function () {
        ajax.get({
            url:base+'weixin/tenant/nearby/share.jhtml',
            success:this.fn
        });
    },
    /**
     * 获取商家商品分类
     * tenantId 店铺Id
     */
    productCategory: function (data) {
        ajax.get({
            url: base + 'weixin/productCategoryTenant/all.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 获取商家商品分类(树形结构)
     * tenantId 店铺Id
     */
    productCategory1: function (data) {
        ajax.get({
            url: base + 'weixin/productCategoryTenant/alll.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 获取商家商品分类
     * tenantId 店铺Id
     */
    productCategoryRoot: function (data) {
        ajax.get({
            url: base + 'weixin/productCategoryTenant/roots.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 是否全部一级分类
     * tenantId 店铺Id
     */
    allFirstGrade:function (data) {
        ajax.get({
            url: base + 'weixin/productCategoryTenant/allFirstGrade.jhtml',
            data: data,
            success: this.fn
        })
    },
    /**
     * 获取商家门店列表
     * id 店铺Id
     * pageSize 每页记录数
     * pageNumber页码
     */
    deliveryCenterList: function (data) {
        ajax.get({
            url: base + 'weixin/tenant/deliveryCenter/list.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 获取商家门店列表
     * ids 店铺Id（数组）
     * pageSize 每页记录数
     * pageNumber页码
     */
    deliveryCenterLists: function (data) {
        ajax.get({
            url: base + 'weixin/tenant/deliveryCenter/lists.jhtml',
            data: data,
            traditional: true,
            success: this.fn
        });
    },
    /**
     * 查询联盟商家
     * id 商家Id
     * pageSize 每页记录数
     * pageNumber页码
     */
    union:function (data) {
        ajax.get({
            url: base + 'weixin/tenant/union.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 本店联盟商家
     * pageSize 每页记录数
     * pageNumber页码
     * keyword
     */
    myUnion:function (data) {
        ajax.get({
            url: base + 'weixin/tenant/myUnion.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 根据商品条形码查询商品列表
     * id  商家Id
     * barcode  商品条形码
     */
    barcode:function (data) {
        ajax.get({
            url: base + 'weixin/tenant/barcode.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 添加店铺到收藏
     * id 店铺Id
     */
    favorite:function (data) {
        ajax.post({
            url:base+'weixin/member/favorite/tenant/add.jhtml',
            data:data,
            success:this.fn
        });
    },
    /**
     * 取消店铺收藏
     * id 店铺ID
     */
    delFavorite: function (data) {
        ajax.post({
            url:base+'weixin/member/favorite/tenant/delete.jhtml',
            data:data,
            success:this.fn
        });
    },
    /**
     * 店铺软文
     * id 店铺Id
     */
    article:function (data) {
        ajax.get({
            url:base+'weixin/tenant/article.jhtml',
            data:data,
            success:this.fn
        });
    },
    /**
     * 拼手气（红包、代金券、现金券）
     * lng 经度
     * lat 纬度
     */
    coupon: function (data) {
        ajax.get({
            url: base + 'weixin/tenant/coupon.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 店铺二维码
     * id 店铺id
     */
    qrcode:function (data) {
        ajax.get({
            url:base+'weixin/tenant/qrcode.jhtml',
            data:data,
            success:this.fn
        })
    }
};


