/**
 * 购物车
 * Created by WangChao on 11/18 0018.
 */
var card = function (fn) {
    this.fn = fn;
};
card.prototype = {

    /**
     * 会员卡列表
     * tenantId 数量
     */
    list: function (data) {
        ajax.get({
            url: base + 'weixin/member/card/list.jhtml',
            data: data,
            success: this.fn
        });
    },

    /**
     * 会员卡详情
     * id 卡id
     */
    view: function (data) {
        ajax.get({
            url: base + 'weixin/member/card/view.jhtml',
            data: data,
            success: this.fn
        });
    },

    /**
     * 奖励金明细
     *
     */
    bounty: function (data) {
        ajax.get({
            url: base + 'weixin/member/rebate/list.jhtml',
            data: data,
            success: this.fn
        });
    },

    /**
     * 奖励金分享
     *
     */
    share: function (data) {
        ajax.get({
            url: base + 'weixin/member/rebate/signin.jhtml',
            data: data,
            success: this.fn
        });
    },

     /**
     * 升级会员首页
     *
     */
    updateView: function (data) {
        ajax.get({
            url: base + 'weixin/member/card/grade/view.jhtml',
            data: data,
            success: this.fn
        });
    },

    /**
     * 升级会员支付
     *
     */
    updatePay: function (data) {
        ajax.post({
            url: base + 'weixin/member/card/grade/payment.jhtml',
            data: data,
            success: this.fn
        });
    },

    /**
     *会员卡充值活动信息
     * id  会员卡id
     *
     */
    activity: function (data) {
        ajax.get({
            url: base + 'weixin/member/card/activity.jhtml',
            data: data,
            success: this.fn
        });
    },


    /**
     *会员卡充值活动提交
     * id  活动id
     *
     */
    fill: function (data) {
        ajax.post({
            url: base + 'weixin/member/card/fill.jhtml',
            data: data,
            success: this.fn
        });
    },

    /**
     *账单信息
     * id  会员卡id
     *
     */
    bill: function (data) {
        ajax.get({
            url: base + 'weixin/member/card/bill.jhtml',
            data: data,
            success: this.fn
        });
    },

    /**
     *会员卡核销状态
     *
     * safeKey  活动支付码
     *
     */
    cancleCard: function (data) {
        ajax.get({
            url: base + 'weixin/payment/queryCard.jhtml',
            data: data,
            success: this.fn
        });
    }







};
