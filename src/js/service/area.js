/**
 * 区域
 * Created by WangChao on 11/15 0015.
 */
var area=function (fn) {
    this.fn=fn
};
area.prototype={
  /**
   * 更新地址
   * @param data
   */
  updateAddress:function(data){
      ajax.post({
        url: base + "updateAddress",
        data: data,
        success: this.fn
      });
    },
    /**
     * 全城
     * @param data
     */
    community: function (data) {
        ajax.get({
            url: base + "weixin/area/community.jhtml",
            data: data,
            success: this.fn
        });
    },
    /**
     * 获取当前城市子级区域
     */
    currentChildren:function () {
        ajax.get({
            url: base + "weixin/area/current_children.jhtml",
            success: this.fn
        });
    }
};
