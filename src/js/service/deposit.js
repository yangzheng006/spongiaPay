/**
 * 账单
 * Created by WangChao on 11/21 0021.
 */
var deposit=function (fn) {
    this.fn=fn;
};
deposit.prototype={
    list:function (data) {
        /**
         * 本人账单流水明细
         * begin_date 开始时间
         * end_date 结束时间
         * pageSize 页大小
         * pageNumber 页码
         */
        ajax.get({
            url:base+'weixin/member/deposit/list.jhtml',
            data:data,
            success:this.fn
        });
    },
    /**
     * 本人账单统计
     * begin_date 开始时间
     * end_date 结束时间
     */
    sumer:function (data) {
        ajax.get({
            url:base+'weixin/member/deposit/sumer.jhtml',
            data:data,
            success:this.fn
        });
    }
};