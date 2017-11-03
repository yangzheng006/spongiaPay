/**
 * 优惠券
 * Created by WangChao on 11/9 0009.
 */
var coupon = function (fn) {
    this.fn = fn;
};
coupon.prototype = {
    /**
     * 我的优惠券
     * tenantId 商家Id
     * pageSize 每页记录数
     * pageNumber 页码
     */
    list: function (data) {
        ajax.get({
            url: base + "weixin/member/coupon/list.jhtml",
            data: data,
            success: this.fn
        });
    },
    /**
     * 店铺可领用优惠券
     * tenantId 店铺Id
     * pageSize 页大小
     * pageNumber 页码
     */
    listT: function (data) {
        ajax.get({
            url: base + "weixin/coupon/list.jhtml",
            data: data,
            success: this.fn
        });
    },
    /**
     * 领取优惠券
     * id 优惠券Id
     */
    pickup: function (data) {
        ajax.post({
            url: base + 'weixin/coupon/pickup.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 优惠券分享页
     * id 优惠券Id
     */
    view:function (data) {
        ajax.get({
            url:base+'weixin/coupon/view_json.jhtml',
            data:data,
            success:this.fn
        });
    },

    /**
     * 优惠券分享页
     * id 优惠券Id
     */
    viewDe:function (data) {
        ajax.get({
            url:base+'weixin/member/coupon/view.jhtml',
            data:data,
            success:this.fn
        });
    },

    /**
     * 分享
     * id   优惠券Id
     */
    share:function (data) {
        ajax.get({
            url:base+'weixin/coupon/share.jhtml',
            data:data,
            success:this.fn
        });
    },
    /**
     * 平台券领取记录
     * id 券Id
     */
    record:function (data) {
        ajax.get({
            url:base+'weixin/coupon/record.jhtml',
            data:data,
            success:this.fn
        });
    },
    /**
     * 领取平台券页面
     * id 平台券Id
     * no 序号
     */
    multipleCoupon:function (data) {
        ajax.get({
            url:base+'weixin/coupon/view_jsons.jhtml',
            data:data,
            success:this.fn
        });
    },
    /**
     * 领取平台券
     * id 平台券Id
     * no 序号
     */
    judge:function (data) {
        ajax.post({
            url:base+'weixin/coupon/judge.jhtml',
            data:data,
            success:this.fn
        });
    },
    mc_share:function (data) {
        ajax.get({
            url:base+'weixin/coupon/mc_share.jhtml',
            data:data,
            success:this.fn
        });
    },
    /**
     * 满包邮信息
     * id   ID
     */
    promotion:function (data) {
        ajax.get({
            url:base+'weixin/coupon/promotion.jhtml',
            data:data,
            success:this.fn
        });
    },
    /**
     * 推广现金券
     */
    extendMultipleCoupon:function () {
        ajax.get({
            url:base+'weixin/coupon/extend/multipleCoupon.jhtml',
            success:this.fn
        });
    },
    // 推广现金券二维码
    // weixin/coupon/extend/multipleCoupon/qrcode.jhtml

    /**
     * 拼手气分享链接
     */
    payBillRedShare: function () {
        ajax.get({
            url: base + 'weixin/coupon/payBillRedShare.jhtml',
            success: this.fn
        });
    }

};