/**
 * tenant
 */

var cappTenant = function (fn) {
    this.fn = fn;
};
cappTenant.prototype = {
    /**
     * pageSize         分页参数（pageSize每页记录数,pageNumber页码）
     * pageNumber         分页参数（pageSize每页记录数,pageNumber页码）
     */
    list: function (data) {
        ajax.get({
            url: base + "weixin/capp/index.jhtml",
            data: data,
            success: this.fn
        });

    }
};


