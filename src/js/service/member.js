/**
 * tenant
 */

var member = function (fn) {
    this.fn = fn;
};
member.prototype = {
    /**
     * 用户详情
     * memberId 用户id
     *
     */
    view: function (data) {
        ajax.get({
            url: base + "member",
            data: data,
            success: this.fn
        });
    }


};


