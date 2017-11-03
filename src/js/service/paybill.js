/**
 * 优惠买单
 * Created by WangChao on 2016/12/10.
 */

var paybill = function (fn) {
    this.fn = fn;
};
paybill.prototype = {
    /**
     * 优惠买单数据获取
     * id 店铺Id
     */
    buyreduce: function (data) {
        ajax.get({
            url: base + 'weixin/pay/bill/buyreduce/' + data.id + '.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 根据用户输入的金额，获取平台立减和店铺优惠券
     * id 店铺Id
     * amount 消费金额
     * noAmount 不参与金额
     */
    getAmount:function(data){
        ajax.post({
            url:base+'weixin/pay/bill/get/amount.jhtml',
            data:data,
            success:this.fn
        });
    },
    /**
     * 买单立减订单提交
     * id 店铺Id
     * amount 消费金额
     * noAmount 不参与金额
     * deliveryCenterId 门店Id
     * type 支付类型（1:微信扫码支付；原功能不传此参数）
     */
    submit:function (data) {
        ajax.post({
            url:base+'weixin/member/pay/bill/get/amount.jhtml',
            data:data,
            success:this.fn
        })
    },
    /**
     * 根据经纬度获取实体店地址
     * id 店铺Id
     * lat 纬度
     * lng 经度
     */
    deliveryCenter:function (data) {
        ajax.get({
            url:base+'weixin/pay/bill/deliver/center.jhtml',
            data:data,
            success:this.fn
        });
    },
    /**
     * 查询支付状态
     * sn 支付单号
     * @return 0:处理中，1支付成功，2支付失败
     */
    query:function (data) {
        ajax.get({
            url:base+'weixin/member/pay/bill/query.jhtml',
            data:data,
            success:this.fn
        })
    }
};
