/**
 * 活动
 * Created by WangChao on 2016/12/23.
 */
var activity=function (fn) {
    this.fn=fn;
};
activity.prototype={
    /**
     * 活动列表
     */
    list:function (data) {
        ajax.get({
            url: base + 'weixin/activity/list.jhtml',
            data: data,
            success:this.fn
        });
    },
    /**
     * 活动页
     * linkId 链接Id
     */
    union:function(data){
        ajax.get({
            url:base+'weixin/activity/union/activity.jhtml',
            data:data,
            success:this.fn
        })
    },
    /**
     * 活动商家
     * linkId 链接Id
     */
    tenants:function (data) {
        ajax.get({
            url:base+'weixin/activity/tenant/list.jhtml',
            data:data,
            success:this.fn
        });
    },
    /**
     * 商圈活动页弹幕
     */
    barrage:function () {
        ajax.get({
            url:base+'weixin/activity/barrage.jhtml',
            success:this.fn
        });
    }

};