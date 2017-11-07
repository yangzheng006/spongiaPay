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

    }

};


