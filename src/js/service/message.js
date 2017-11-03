/**
 * 消息
 * Created by WangChao on 2016/12/15.
 */
var message = function (fn) {
    this.fn = fn
};
message.prototype = {
    /**
     * 消息列表
     * type 消息类型（订单提醒order,账单提醒account,系统消息message）
     * pageSize 页大小
     * pageNumber 页码
     */
    list: function (data) {
        ajax.get({
            url: base + 'weixin/member/message/list.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 订单消息列表
     * pageSize 页大小
     * pageNumber 页码
     */
    orderList: function (data) {
        ajax.get({
            url: base + 'weixin/member/message/orderList.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 未读消息数
     */
    count: function (data) {
        ajax.get({
            url: base + 'weixin/member/message/count.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 获取第一条消息
     */
    firstMessage:function () {
        ajax.get({
            url: base + 'weixin/member/message/first_message.jhtml',
            success: this.fn
        });
    }
};
