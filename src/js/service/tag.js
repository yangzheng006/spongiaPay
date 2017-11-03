/**
 * 标签
 * Created by WangChao on 2017/1/20.
 */
var tag = function (fn) {
    this.fn = fn;
};
tag.prototype = {
    /**
     * 标签列表
     * type 类型(导购标签guide,兴趣标签interest)
     */
    list: function (data) {
        ajax.get({
            url: base + 'weixin/tag/list.jhtml',
            data: data,
            success: this.fn
        });
    }
};