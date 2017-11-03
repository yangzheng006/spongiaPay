/**
 * 社交
 * Created by WangChao on 2017/1/18.
 */
var contact = function (fn) {
    this.fn = fn;
};

contact.prototype = {
    /**
     * 导购说说列表
     * memberId 会员Id
     * pageSize 页大小
     * pageNumber 页号
     */
    list: function (data) {
        ajax.get({
            url: base + 'weixin/member/contact/list.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 发表说说
     * content  内容
     * type  类型{订单秀order,魔拍秀camera,任性秀wayward}
     * isShow   是否显示(true,false)
     * images[{file 文件}]  图片集合
     * ids  商品id（数组）
     */
    save: function (data) {
        ajax.post({
            url: base + 'weixin/member/contact/save.jhtml',
            data: data,
            contentType: false,
            processData: false,
            success: this.fn
        });
    },
    /**
     * 设置个性签名
     * signature  个性签名
     */
    updateSignature: function (data) {
        ajax.post({
            url: base + 'weixin/member/contact/updateSignature.jhtml',
            data: data,
            success: this.fn
        })
    },
    /**
     * 设置常驻区域
     * areaId   区域Id
     */
    updateArea: function (data) {
        ajax.post({
            url: base + 'weixin/member/contact/updateArea.jhtml',
            data: data,
            success: this.fn
        })
    },
    /**
     * 设置个性标签
     * tagIds   标签id（数组）
     */
    updatePersonalityTag: function (data) {
        ajax.post({
            url: base + 'weixin/member/contact/updatePersonalityTag.jhtml',
            data: data,
            traditional: true,
            success: this.fn
        })
    },
    // /**
    //  * 设置导购标签
    //  * @param data
    //  */
    // updateTag:function (data) {
    //     ajax.post({
    //         url: base + 'weixin/member/contact/updateTag.jhtml',
    //         data: data,
    //         traditional: true,
    //         success: this.fn
    //     })
    // },
    /**
     * 设置导购星座
     * constellation 星座
     */
    updateConstellation:function (data) {
        ajax.post({
            url: base + 'weixin/member/contact/updateConstellation.jhtml',
            data: data,
            traditional: true,
            success: this.fn
        })
    },
    /**
     * 点赞/取消点赞
     * id 说说id
     */
    praises: function (data) {
        ajax.post({
            url: base + 'weixin/member/contact/praises.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 删除说说
     * ids 说说id（数组）
     */
    delete:function (data) {
        ajax.post({
            url: base + 'weixin/member/contact/delete.jhtml',
            data: data,
            traditional: true,
            success: this.fn
        });
    },
    /**
     * 说说回复
     * id 说说Id
     * content 回复内容
     */
    reply:function (data) {
        ajax.post({
            url: base + 'weixin/member/contact/reply.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 详情
     * id   说说Id
     * lat  经度
     * lng  纬度
     */
    view: function (data) {
        ajax.get({
            url: base + 'weixin/member/contact/view.jhtml',
            data: data,
            success: this.fn
        })
    },

    /**
     * 朋友圈说说列表
     * lat  经度
     * lng  纬度
     */
    friendList: function (data) {
        ajax.get({
            url: base + 'weixin/member/contact/friendList.jhtml',
            data: data,
            success: this.fn
        })
    },
    /**
     * 说说个人详情
     * 用户名username
     */
    guideView: function (data) {
        ajax.get({
            url: base + 'weixin/member/contact/guideView.jhtml',
            data: data,
            success: this.fn
        })
    },
    /**
     * 说说个人列表
     * pageSize 页大小
     * pageNumber 页号
     * 用户名username
     */
    guideList: function (data) {
        ajax.get({
            url: base + 'weixin/member/contact/guideList.jhtml',
            data: data,
            success: this.fn
        })
    },
    /**
     * 说说个人页面分享地址
     */
    personalShare: function () {
        ajax.get({
            url: base + 'weixin/member/contact/personal/share.jhtml',
            success: this.fn
        })
    }

};
