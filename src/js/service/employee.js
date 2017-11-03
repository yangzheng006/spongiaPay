/**
 * 导购
 * Created by Administrator on 16/11/10.
 */
var employee = function (fn) {
    this.fn = fn;
};
employee.prototype = {
    /**
     * 企业导购列表
     * id 店铺Id
     * pageSize 每页记录数
     * pageNumber 页码
     */
    list: function (data) {
        ajax.get({
            url: base + "weixin/tenant/guide/list.jhtml",
            data: data,
            success: this.fn
        });
    },
    /**
     * 实体店导购列表
     * id 实体店Id
     * pageSize 每页记录数
     * pageNumber 页码
     */
    listDc: function (data) {
        ajax.get({
            url: base + "weixin/delivery_center/employee/list.jhtml",
            data: data,
            success: this.fn
        });
    },
    /**
     * 添加导购到收藏
     * id 员工ID(employeeId)
     */
    favorite:function(data){
        ajax.post({
            url: base + "weixin/member/favorite/guide/add.jhtml",
            data: data,
            success: this.fn
        });
    },
    /**
     * 取消导购收藏
     * id 员工ID(employeeId)
     */
    delFavorite:function(data){
        ajax.post({
            url: base + "weixin/member/favorite/guide/delete.jhtml",
            data: data,
            success: this.fn
        });
    },
    /**
     * 店主
     * deveryCenterId   门店Id
     * tenantId 店铺Id
     */
    owner:function (data) {
        ajax.get({
            url: base + "weixin/tenant/owner.jhtml",
            data: data,
            success: this.fn
        });
    }
};
