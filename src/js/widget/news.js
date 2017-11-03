
/**
 * silder gallery begin  [{image:"322332",url:328932382939},{image:"8349",url:"23i32u3i2u"}]
 */
;(function(){
    "use strict";
    var news;

    var SilderGallery = function (el,jsons) {
        this.data = jsons;
        this.el = el;
    };
    SilderGallery.prototype = {
        show:function () {
            var list = [];
            var str = '';
            for (var i = 0; i < this.data.length; i++) {
                str +='<li><a>';
                str +='<p class="Ftitle">' + this.data[i].name +'</p>';
                str +='<p class="Fauxiliary"><i class="icon iconfont icon-dingwei"></i>'+ this.data[i].name +'</p>';
                str +='</a></li>';
                list.push({content:str});
            }

            var S = new iSlider({
                data: list,
                dom: this.el,
                //mode : 'vertical',
                //isOverspread: true,
                isVertical: true,
                //isVertical: false,
                isLooping: true,
                isAutoplay: true,
                fixPage: false,
                animateTime: time,
                duration: 2000,
               // animateType: type  //zoomout,fade
            });
        }
    };

    $.fn.news = function(jsons,news) {

        var sd= new news(document.getElementById(this.attr("id")), jsons,news);

        return sd.show();
    }


})();

/**
 * silder gallery end
 */