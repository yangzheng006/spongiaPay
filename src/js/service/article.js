/**
 * article.js
 * Created by WangChao on 2017/7/29.
 */
var article = function (fn) {
    this.fn = fn
};
article.prototype = {
    /**
     * app文章页分享
     * id   文章ID
     */
    app_share: function (data) {
        ajax.get({
            url: base + "weixin/member/article/app_share.jhtml",
            data: data,
            success: this.fn
        })
    }
};