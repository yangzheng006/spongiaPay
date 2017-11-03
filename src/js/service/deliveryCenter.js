/**
 * 实体店
 * Created by WangChao on 2016/12/7.
 */
var deliveryCenter = function (fn) {
    this.fn = fn;
};
deliveryCenter.prototype = {
    /**
     * 获取实体店详情
     * id 实体店Id
     */
    view: function (data) {
        ajax.get({
            url: base + 'weixin/delivery_center/view.jhtml',
            data: data,
            success: this.fn
        });
    }
};
