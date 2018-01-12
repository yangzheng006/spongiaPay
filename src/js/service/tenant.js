/**
 * tenant
 */

var tenant = function (fn, errfn) {
    this.fn = fn;
    this.errfn = errfn;
};
tenant.prototype = {
    /**
     * 优质商家、金融惠普
     */
    list: function (data) {
        ajax.get({
            url: base + "businessAndFinance",
            data: data,
            success: this.fn
        });

    },

    /**
     * 优质商家、金融惠普
     */
    merchantProductSearch: function (data) {
        ajax.get({
            url: base + "merchantProductSearch",
            data: data,
            success: this.fn
        });

    },


    /**
     * 附近商家
     */
    nearby: function (data) {
        ajax.get({
            url: base + "nearby",
            data: data,
            success: this.fn
        });

    },

    /**
     * 更多商家页面顶部导航一级分类名称
     */
    classOne: function (data) {
        ajax.get({
            url: base + "merchantClassification?superiorId=0",
            data: data,
            success: this.fn
        });

    },

    /**
     * 更多商家页面顶部导航二级分类名称
     * superiorId   一级分类id
     */
    classTwo: function (data) {
        ajax.get({
            url: base + "merchantClassification",
            data: data,
            success: this.fn
        });

    },

    /**
     * 更多商家商家列表
     * classificationId 二级分类ID
     */
    moreList: function (data) {
        ajax.get({
            url: base + "merchantProductListGet",
            data: data,
            success: this.fn
        });

    },

    /**
     *查询是否收藏
     * hyId 会员ID
     * shId 商家id
     */
    collectionIfGet: function (data) {
        ajax.get({
            url: base + "collectionIfGet",
            data: data,
            success: this.fn
        });

    },

    /**
     *查询是否收藏
     * hyId 会员ID
     * shId 商家id
     */
    collectionIfGet: function (data) {
        ajax.get({
            url: base + "collectionIfGet",
            data: data,
            success: this.fn,
            error: this.errfn,
            hideErrorTips: true
        });

    },

    /**
     *添加收藏
     * hyId 会员ID
     * shId 商家id
     */
    collectionAdd: function (data) {
        ajax.get({
            url: base + "collectionAdd",
            data: data,
            success: this.fn
        });

    },

    /**
     *取消收藏
     * hyId 会员ID
     * shId 商家id
     */
    collectionRemove: function (data) {
        ajax.get({
            url: base + "collectionRemove",
            data: data,
            success: this.fn
        });

    },

    /**
     *查询是否点赞
     * hyId 会员ID
     * shId 商家id
     */
    fabulousIfGet: function (data) {
        ajax.get({
            url: base + "fabulousIfGet",
            data: data,
            success: this.fn,
            error: this.errfn,
            hideErrorTips: true
        });

    },

    /**
     *添加点赞
     * hyId 会员ID
     * shId 商家id
     */
    fabulousAdd: function (data) {
        ajax.get({
            url: base + "fabulousAdd",
            data: data,
            success: this.fn
        });

    },
    /**
     *添加点赞
     * hyId 会员ID
     * shId 商家id
     */
    fabulousRemove: function (data) {
        ajax.get({
            url: base + "fabulousRemove",
            data: data,
            success: this.fn
        });

    },
    /**
     * 商家详情
     * hyId 会员ID
     * shId 商家id
     */
    merchantProductGet: function (data) {
        ajax.get({
            url: base + "merchantProductGet",
            data: data,
            success: this.fn
        });

    },

};


