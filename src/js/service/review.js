/**
 * Created by WangChao on 2016/12/2.
 */
var review = function (fn) {
    this.fn = fn
};
review.prototype = {
    /**
     * 订单评价页
     * tradeId 子订单Id
     */
    view: function (data) {
        ajax.get({
            url: base + 'weixin/member/review/view.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 订单、商品评价提交（使用FormData方式提交）
     * tradeId    子订单Id(订单评论时传)
     * orderItemId    商品项Id(商品评论时传)
     * score  商品、商家评分
     * assistant    导购评分
     * content    内容
     * flag  评论对象(trade订单评论,product商品评论)
     * images[{file 文件}]  图片集合
     * isAnonym 是否匿名
     */
    submit: function (data) {
        ajax.post({
            url: base + 'weixin/member/review/add.jhtml',
            data: data,
            contentType: false,
            processData: false,
            success: this.fn
        });
    },
    /**
     * 订单、商品评价提交
     * tradeId    子订单Id(订单评论时传)
     * orderItemId    商品项Id(商品评论时传)
     * score  商品、商家评分
     * assistant    导购评分
     * content    内容
     * flag  评论对象(trade订单评论,product商品评论)
     * images[{file 文件}]  图片集合
     * isAnonym 是否匿名
     */
    submit1: function (data) {
        ajax.post({
            url: base + 'weixin/member/review/add.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 商品评价列表
     * id 商品Id
     * pageSize 页大小
     * pageNumber 页码
     */
    list: function (data) {
        ajax.get({
            url: base + 'weixin/member/review/list.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 评论点赞/取消点赞
     * id   文章Id
     * @param data
     */
    praise:function (data) {
        ajax.post({
            url: base+'weixin/member/review/praise.jhtml',
            data:data,
            success:this.fn
        })
    }
};
