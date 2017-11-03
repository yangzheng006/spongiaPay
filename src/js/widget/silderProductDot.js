
/**
 * silder gallery begin  [{image:"322332",url:328932382939},{image:"8349",url:"23i32u3i2u"}]
 */
;(function(){
    "use strict";
    var type;

    var SilderGallery = function (el,jsons,atype) {
        this.data = jsons;
        this.el = el;
        type = atype;
    };
    SilderGallery.prototype = {
        show:function () {
            var list = [];
            var str = '';
            if(type == 'ad'){
                for (var i = 0; i < this.data.length; i++) {

                    if (this.data[i].image.indexOf("cdn") === -1) {
                        return this.data[i].image;
                    }else if (this.data[i].image.indexOf("@") !== -1) {
                        this.data[i].image = this.data[i].image.substring(0, this.data[i].image.indexOf("@"));
                    }
                    var screen = window.devicePixelRatio*document.documentElement.clientWidth;
                    if(this.data[i].linkId == null){
                        str = '<a href="javascript:;">';
                    }else{
                        str = '<a href="../product/view.html?id='+this.data[i].linkId+'">';
                    }
                    str += '<img src="'+this.data[i].image + '@' + Math.ceil(100 * screen / 100)+ 'w_' +Math.ceil(40 * screen / 100) + 'h_1e_1c_100Q" alt="">';
                    str += '<div class="product_mask"></div>';
                    str += '</a>';
                    if((i%1)==0 && i >= 0){
                        list.push({content:str});
                        str = "";
                    }
                }
            }else if(type == 'product'){
                for (var i = 0; i < this.data.length; i++) {
                    if ((i % 1) == 0) {
                        str = '<div class="channel">';
                    }
                    str += '<div class="channel__item"><a href="../product/details.html?id=' + this.data[i].id + '" data-id="' + this.data[i].id + '">';
                    str += '<p class="fly_img"><img  src="' + this.data[i].thumbnail + '"></p><div class="product_mask"></div>';
                    if ((i % 1) == 0 && i >= 0) {
                        str += '</a></div>';
                        list.push({content: str});
                        str = "";
                    }
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
                animateTime: 1800,
                plugins: ['dot'],
                duration: 3000
                // animateType: type  //zoomout,fade
            });
        }
    };

    $.fn.silderProductDot = function(jsons,type) {
        var sg= new SilderGallery(document.getElementById(this.attr("id")), jsons,type);
        return sg.show();
    }
})();

/**
 * silder gallery end
 */