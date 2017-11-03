/**
 * 快讯
 * Created by WangChao on 2017/1/10.
 */
var kuaixun = function (fn) {
    this.fn = fn;
};
kuaixun.prototype = {
    /**
     * 列表
     * pageSize 页大小
     * pageNumber 页号
     * tenantId 店铺Id
     */
    list: function (data) {
        ajax.get({
            url: base + 'weixin/kuaixun/list.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 推荐资讯
     * id 文章Id
     * pageSize 页大小
     * pageNumber 页号
     * lng,lat 经纬度
     */
    recommendList: function (data) {
        ajax.get({
            url: base + 'weixin/kuaixun/recommend/list.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 详情
     * id 快讯Id
     */
    view: function (data) {
        ajax.get({
            url: base + 'weixin/kuaixun/view.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 挑货快讯（首页）
     */
    hotList: function (data) {
        ajax.get({
            url: base + 'weixin/kuaixun/hot/list.jhtml',
            data: data,
            success: this.fn
        })
    },
    /**
     * 点赞/取消点赞
     * id 文章id
     */
    praise: function (data) {
        ajax.post({
            url: base + 'weixin/kuaixun/praise.jhtml',
            data: data,
            success: this.fn
        })
    },
    /**
     * 趣头条文章分类
     */
    category: function () {
        ajax.get({
            url: base + 'weixin/kuaixun/category.jhtml',
            success: this.fn
        });
    },
    /**
     * 趣头条文章列表
     *
     * articleCategoryId 分类Id
     * isRecommend       是否是推荐
     * isHot             是否是热点
     * keyword           关键词
     */
    qttList: function (data) {
        ajax.get({
            url: base + 'weixin/kuaixun/qtt/list.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 热门搜索
     */
    hotSearch: function () {
        ajax.get({
            url: base + 'weixin/kuaixun/hot_search.jhtml',
            success: this.fn
        });
    },
    /**
     * 收藏/取消收藏
     * id 文章id
     */

    favorite: function (data) {
        ajax.post({
            url: base + '/weixin/kuaixun/favorite.jhtml',
            data: data,
            success: this.fn
        })
    },
    /**
     * 访问
     */
    visit: function (data) {
        ajax.get({
            url: base + 'weixin/kuaixun/visit_number.jhtml',
            data: data,
            success: this.fn
        })
    },
    /**
     * 文章添加评论
     * id 文章Id
     * content 评论内容
     */
    review: function (data) {
        ajax.post({
            url: base + 'weixin/kuaixun/review/add.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 文章评论列表
     * id 文章id
     * @param data
     */
    reviewList: function (data) {
        ajax.get({
            url: base + 'weixin/kuaixun/review/list.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 常见问题分类
     */
    questionsCategory: function (data) {
        ajax.get({
            url: base + 'weixin/kuaixun/questions/category.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 常见问题列表
     * id 分类id
     */
    questionCategory: function (data) {
        ajax.get({
            url: base + 'weixin/kuaixun/questions/list.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 常见问题详情
     * id 文章id
     */
    questionsList: function (data) {
        ajax.get({
            url: base + 'weixin/kuaixun/questions/view.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 专题
     * pageSize
     * pageNumber
     */

    articlePush: function (data) {
        ajax.get({
            url: base + 'weixin/member/article/list.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 分享文章访问记录数
     * pageSize
     * pageNumber
     */
    articleVisitRecord:function (data) {
        ajax.get({
            url:base+'weixin/member/articleVisitRecord/list.jhtml',
            success:this.fn,
            data:data
        });
    },
    /**
     * 分享累计收益
     */
    totalProfit:function (data) {
        ajax.get({
            url:base+'weixin/member/articleVisitRecord/totalProfit.jhtml',
            success:this.fn,
            data:data
        });
    }
};