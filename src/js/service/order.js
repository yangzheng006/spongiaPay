/**
 * 订单
 * Created by WangChao on 11/15 0015.
 */
var order = function (fn) {
    this.fn = fn;
};

order.prototype = {
    /**
     * 我的订单列表
     * tenantId 商家Id
     * type {unshipped 待发货, unpaid 待支付, unreciver 待签收, unreview 待评价}
     * pageSize 每页记录数
     * pageNumber 页码
     */
    list: function (data) {
        ajax.get({
            url: base + "weixin/member/order/list.jhtml",
            data: data,
            success: this.fn
        });
    },
    /**
     * 订单统计
     * tenantId 商家Id
     */
    count:function (data) {
        ajax.get({
            url: base + "weixin/member/order/count.jhtml",
            data: data,
            success: this.fn
        });
    },
    /**
     * 订单明细
     * id 子订单Id
     */
    view:function (data) {
        ajax.get({
            url: base + "weixin/member/order/view.jhtml",
            data: data,
            success: this.fn
        });
    },
    /**
     * 确认订单页
     */
    confirmOrder: function (data) {
        ajax.get({
            url: base + 'weixin/member/order/info.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 计算费用（确认订单页面选择配送方式、支付方式、优惠券后调用）
     * paymentMethodId 支付方式Id
     * shippingMethodId 配送方式Id
     * codes    优惠码（数组）
     */
    calculate: function (data) {
        ajax.post({
            url: base + 'weixin/member/order/calculate.jhtml',
            data: data,
            traditional: true,
            success: this.fn
        });
    },
    /**
     * 检测邀请码是否合法
     * code 邀请码
     */
    inviteCode: function (data) {
        ajax.get({
            url: base + 'weixin/member/invite_code.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 确认下单
     * receiverId 收货地址编号
     * paymentMethodId 支付方式编号
     * shippingMethodId 配送方式编号
     * memo 备注
     * extensionId 导购、分享者编号
     * deliveryCenterId 门店Id
     * codes 优惠码（数组）
     * deliveryCount 预计到店人数
     * deliveryDate 预计提货时间
     * name 姓名
     * mobile 手机号
     * captcha 验证码
     */
    create: function (data) {
        ajax.post({
            url: base + 'weixin/member/order/create.jhtml',
            data: data,
            traditional: true,
            success: this.fn
        });
    },
    /**
     * 提醒卖家发货/退货
     * id 子订单Id
     */
    remind: function (data) {
        ajax.post({
            url: base + 'weixin/member/order/remind.jhtml',
            data: data,
            success: this.fn
        })
    },
    /**
     * 取消订单(未发货前)
     * id 子订单Id
     */
    refund: function (data) {
        ajax.post({
            url: base + 'weixin/member/order/refund.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 退货
     * id 子订单Id
     */
    return: function (data) {
        ajax.post({
            url: base + 'weixin/member/order/return.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 签收（买家）
     * id 子订单Id
     */
    confirm: function (data) {
        ajax.post({
            url: base + 'weixin/member/order/confirm.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 发起支付（单个子订单）
     * id 子订单Id
     */
    tradePayment: function (data) {
        ajax.post({
            url: base + 'weixin/member/order/payment/' + data.id + '.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 发起支付--整单合并支付
     * sn 订单号
     */
    payment:function (data) {
        ajax.post({
            url:base+'weixin/member/order/payment.jhtml',
            data:data,
            success:this.fn
        });
    },
    /**
     * 打开付款单
     * sn 付款单号
     */
    paymentView:function (data) {
        ajax.post({
            url:base+'weixin/member/order/paymentView.jhtml',
            data:data,
            success:this.fn
        })
    },
    /**
     * 提交支付
     * paymentPluginId  支付插件
     * sn 支付单号
     */
    paymentSubmit:function (data) {
        ajax.post({
            url:paymentBase+'weixin/payment/submit.jhtml',
            data:data,
            success:this.fn
        });
    },

    /**
     * 查询支付状态
     * sn 支付单号
     */
    queryStatus: function (data) {
        ajax.post({
            url: paymentBase + 'weixin/payment/query.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 查询支付宝支付状态
     * @param data
     */
    aliQuery:function (data) {
        ajax.post({
            url: paymentBase + 'weixin/payment/aliQuery.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 提交支付（支付宝）
     * paymentPluginId  支付插件
     * sn 支付单号
     */
    paymentSubmitAli:function (data) {
        ajax.post({
            url:paymentBase+'dmao/member/payment/alipay.jhtml',
            data:data,
            success:this.fn
        });
    },

    /**
     * 查询三方物流动态
     * sn   物流单号
     */
    deliveryQuery:function (data) {
        ajax.get({
            url:base+'app/member/order/delivery_query.jhtml',
            data:data,
            success:this.fn
        });
    },
    /**
     * 打开订单
     * sn 订单号
     */
    orderView:function (data) {
        ajax.post({
            url:base+'weixin/member/order/orderView.jhtml',
            data:data,
            success:this.fn
        })
    },
    /**
     * 核销提货码
     */
    cancelSn:function (data) {
        ajax.post({
            url:base+'weixin/member/order/cancelSn.jhtml',
            data:data,
            success:this.fn
        });
    }

};