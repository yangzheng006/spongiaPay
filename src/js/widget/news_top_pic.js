/**
 * Created by Administrator on 2017/4/20 0020.
 */
;(function(){
    "use strict";
    var time;
    var type;

    var silderNewsTopPic = function (el,jsons,atime,atype) {
        this.data = jsons;
        this.el = el;
        time = atime;
        type = atype;
    };
    silderNewsTopPic.prototype = {
        show:function () {
            var list = [];
            var str = '';
            for (var i = 0; i < this.data.length; i++) {
                if((i%1)==0){
                    str = '<a data-id="'+ this.data[i].id +'" href="../home/newDetailed.html?funId='+ this.data[i].id +'">';
                }
                str += '<img src="' + this.data[i].images[0] + '">';
                if((i%1)==0 && i >= 0){
                    str += '</a>';
                    list.push({content:str});
                    str = "";
                }
            }
            var S = new iSlider({
                data: list,
                dom: this.el,
                // isOverspread: true,
                //isVertical: true,
                isVertical: false,
                isLooping: true,
                isAutoplay: true,
                fixPage: false,
                animateTime: time,
                duration: 3000,
                plugins: ['dot'],
                animateType: type  //zoomout,fade
            });
        }
    };

    $.fn.silderNewsTopPic = function(jsons,time,type) {
        var sg= new silderNewsTopPic(document.getElementById(this.attr("id")), jsons,time,type);
        return sg.show();
    }


})();
