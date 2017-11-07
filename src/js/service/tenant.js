/**
 * tenant
 */

var tenant = function (fn) {
    this.fn = fn;
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
            url: base + "classificationId",
            data: data,
            success: this.fn
        });

    },




};


