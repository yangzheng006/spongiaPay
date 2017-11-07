/**
 * tenant
 */

var product = function (fn) {
    this.fn = fn;
};
product.prototype = {
    /**
     * 商户产品列表
     * merchantId  商户id
     */
    list: function (data) {
        ajax.get({
            url: base + "merchantProductsGet",
            data: data,
            success: this.fn
        });

    }


};


