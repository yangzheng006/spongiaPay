/**
 * 红包
 * Created by WangChao on 11/9 0009.
 */
var redPacket = function (fn) {
    this.fn = fn;
};
redPacket.prototype = {
    /**
     * 我的红包
     * tenantId 商家Id
     * lng 经度
     * lat 纬度
     * pageSize 每页记录数
     * pageNumber 页码
     */
    list: function (data) {
        ajax.get({
            url: base + "weixin/member/redPacket/list.jhtml",
            data: data,
            success: this.fn
        });
    },
    /**
     * 商家红包
     * @param data
     * areaId 区域Id
     * categoryId 分类Id
     * orderType 排序类型（distance 按距离排序;amountSize 按红包大小排序）
     * lng 经度
     * lat 纬度
     * pageSize 每页记录数
     * pageNumber 页码
     * distance  距离
     */
    tenantRedList: function (data) {
        ajax.get({
            url: base + "weixin/member/redPacket/tenant/list.jhtml",
            data: data,
            success: this.fn
        });
    },
    /**
     * 领取红包
     * @param data
     * id 红包Id
     * guideId  导购Id
     */
    get: function (data) {
        ajax.post({
            url: base + "weixin/member/redPacket/get.jhtml",
            data: data,
            success: this.fn
        });
    },
    /**
     * 使用红包
     * @param data
     * code 红包码
     */
    use: function (data) {
        ajax.get({
            url: base + "weixin/member/redPacket/use.jhtml",
            data: data,
            success: this.fn
        });
    },
    /**
     * 推荐好店
     * @param data
     * areaId 区域Id
     * lng经度
     * lat纬度
     * pageSize 每页记录数
     * pageNumber 页码
     */
    recommendTenant: function (data) {
        ajax.get({
            url: base + "weixin/member/redPacket/tenant/recommend.jhtml",
            data: data,
            success: this.fn
        })
    },
    /**
     * 全部类别
     * @param data
     */
    category: function (data) {
        ajax.get({
            url: base + "weixin/tenantCategory/all.jhtml",
            data: data,
            success: this.fn
        });
    },
    /**
     * 商家红包分享
     */
    share: function (data) {
        ajax.get({
            url: base + "weixin/member/redPacket/share.jhtml",
            data: data,
            success: this.fn
        });
    },
    /**
     * 附近商圈
     * @param data
     */
    community: function () {
        ajax.get({
            url: base + 'weixin/tenant/community.jhtml',
            success: this.fn
        })
    },
    /**
     * 优惠雨
     * communityId   商圈Id
     */
    promotions: function (data) {
        ajax.get({
            url: base + 'weixin/member/redPacket/promotions.jhtml',
            data: data,
            success: this.fn
        });
    },

    /**
     * 我推广的红包/我核销的红包
     * username 账号
     * type     类型（0推广，1核销）
     * pageable 分页
     */
    extension_bouns: function (data) {
        ajax.get({
            url: base + 'weixin/member/redPacket/extension/bouns/type.jhtml',
            data: data,
            success: this.fn
        })
    },
    /**
     * 检查当前区域下是否存在有红包的商圈
     */
    checkCommunityRedPacket:function () {
        ajax.get({
            url: base + 'weixin/tenant/checkCommunityRedPacket.jhtml',
            success: this.fn
        })
    }

};