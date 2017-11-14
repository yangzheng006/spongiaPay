
/**
 * silder gallery begin  [{image:"322332",url:328932382939},{image:"8349",url:"23i32u3i2u"}]
 */
;(function(){
    "use strict";
    var time;
    var type;
    var pImage;
    var tNum;

    var SilderGallery = function (el,jsons,atime,atype,apImage,thNum) {
        this.data = jsons;
        this.el = el;
        time = atime;
        type = atype;
        pImage = apImage;
        tNum = thNum;
    };
    SilderGallery.prototype = {
        show:function () {
            var list = [];
            var str = '';
            if(pImage == "true"){
                for (var i = 0; i < this.data.length; i++) {
                    var  _url = 'javascript:;';
                    str = '<a href="'+ _url +'">';
                    str += '<img src="' + this.data[i].TPLJ + '">';
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

    $.fn.silderDot = function(jsons,time,type,pImage,tNum) {
        var sg= new SilderGallery(document.getElementById(this.attr("id")), jsons,time,type,pImage,tNum);
        return sg.show();
    }
})();

/**
 * silder gallery end
 */