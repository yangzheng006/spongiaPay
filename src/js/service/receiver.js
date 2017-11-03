/**
 * 收货地址
 * Created by WangChao on 2016/11/23.
 */
var receiver = function (fn) {
    this.fn = fn;
};
receiver.prototype = {
    /**
     * 收货地址列表
     */
    list: function () {
        ajax.get({
            url: base + 'weixin/member/receiver/list.jhtml',
            success: this.fn
        });
    },
    /**
     * 保存收货地址
     * areaId 区域Id
     * consignee 收货人
     * address 详细地址
     * phone 电话
     */
    save: function (data) {
        ajax.post({
            url: base + 'weixin/member/receiver/save.jhtml',
            data: data,
            success: this.fn
        });
    },
    /**
     * 编辑页
     * id 收货地址Id
     */
    view:function (data) {
        ajax.get({
            url:base+'weixin/member/receiver/view.jhtml',
            data:data,
            success:this.fn
        });
    },
    /**
     * 根据收货地址国家码获取区域编码
     * code 国家码
     */
    getAreaId:function (data) {
        ajax.get({
            url:base+'weixin/area/getAreaIdByCode.jhtml',
            data:data,
            success:this.fn
        });
    },
    /**
     * 修改收货地址
     * id 收货地址Id
     * areaId 区域Id
     * consignee 收货人
     * address 详细地址
     * phone 电话
     */
    update:function (data) {
        ajax.post({
            url:base+'weixin/member/receiver/update.jhtml',
            data:data,
            success:this.fn
        });
    },
    /**
     * 删除收货地址
     * id 收货地址Id
     */
    delete:function (data) {
        ajax.post({
            url:base+'weixin/member/receiver/delete.jhtml',
            data:data,
            success:this.fn
        });
    },
    /**
     * 收货地址设为默认
     * id 收货地址Id
     */
    setDefault:function (data) {
        ajax.post({
            url:base+'weixin/member/receiver/setIsDefault.jhtml',
            data:data,
            success:this.fn
        });
    }
};