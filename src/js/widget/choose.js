/**
 * 选择组件
 * Created by WangChao on 11/11 0011.
 */

var choose = {
    area: function (data) {
        ajax.get({
            url: base + "weixin/area/children.jhtml",
            data: data,
            success: function (data) {
                var html = "";
                $.each(data, function (index, area) {
                    var ul = '<ul class="weui-cell">';
                    ul += '<li id="' + area.id + '" name="' + area.name + '" fullName="' + area.fullName + '" hasChildren="' + area.hasChildren + '" class="weui-cell__bd"><a href="javascript:;">' + area.name + '</a></li>';
                    ul += '</ul>';
                    html += ul;
                });
                $(".chooseWidget").show().html(html);
                $(".chooseWidget ul").click(function(){
                    var $this = $(this).find("li");
                    if ($this.attr("hasChildren") == "true") {
                        choose.area({areaId: $this.attr("id")});
                    } else {
                        $(".chooseWidget").hide().html("");
                        if(choose.callBack){
                            choose.callBack({id: $this.attr("id"), name: $this.attr("name"), fullName: $this.attr("fullName")});
                        }
                    }
                });
            }
        });
    }
};