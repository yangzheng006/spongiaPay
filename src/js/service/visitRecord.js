/**
 * 访问记录
 * Created by WangChao on 2016/12/15.
 */
var visitRecord = function (fn) {
    this.fn = fn;
};
visitRecord.prototype = {
    /**
     * 添加访问记录
     *
     * tenantId    店铺Id
     * productId   商品Id
     * visitType   访问类型  (无线网wifi,C端app,购物屏pad,微信weixin)
     * machineType 设备类型  (手机mobile,平板pad,电脑pc)
     */
    add: function (data) {
        ajax.post({
            url: base + 'weixin/visitRecord/add.jhtml',
            data: data,
            success: this.fn
        });
    }
};