/**
 * 金融
 */

var ad = function (fn) {
    this.fn = fn;
};
ad.prototype = {
    /**
     * 一级导航分类
     *
     */
    classOne: function (data) {
        ajax.get({
            url: base + "classificationGet?superiorId=0",
            data:data,
            success: this.fn
        });

    },
    /**
     * 二级导航分类
     *superiorId 上级分类id
     */
    classTwo: function (data) {
        ajax.get({
            url: base + "classificationGet",
            data:data,
            success: this.fn
        });

    },

    /**
     * 产品列表
     *classificationId 金融分类id
     */
    list:function (data) {
        ajax.get({
            url: base + "productListGet",
            data:data,
            success: this.fn
        });

    },

    /**
     * 理财产品详情
     * id  产品id
     */
    wealthView:function (data) {
        ajax.get({
            url: base + "financialProductsGet",
            data:data,
            success: this.fn
        });

    },

    /**
     * 贷款产品详情
     *id  产品id
     */
    loanView:function (data) {
        ajax.get({
            url: base + "loanProductsGet",
            data:data,
            success: this.fn
        });

    },

    /**
     * 信用卡产品详情
     *id  产品id
     */
    creditCardView:function (data) {
        ajax.get({
            url: base + "creditCardProductsGet",
            data:data,
            success: this.fn
        });

    }





};


