/**
 * 意见反馈
 * Created by WangChao on 2017/06/06
 */
var feedback = function (fn) {
    this.fn = fn
};
feedback.prototype = {
    /**
     * 提交
     * type 反馈类型{function功能异常，experience体验问题，suggest新功能建议，other其他}
     * content 反馈内容
     * images[{file 文件}]  图片集合
     * mobile   手机号
     */
    save:function (data) {
        ajax.post({
            url: base + 'weixin/member/feedback/save.jhtml',
            data: data,
            contentType: false,
            processData: false,
            success: this.fn
        });
    }
};
