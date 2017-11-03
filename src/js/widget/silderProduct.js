
/**
 * silder gallery begin  [{image:"322332",url:328932382939},{image:"8349",url:"23i32u3i2u"}]
 */
;(function(){
    "use strict";

    var SilderGallery = function (el,jsons) {
        this.data = jsons;
        this.el = el;

    };
    SilderGallery.prototype = {
        show:function () {
            var list = [];
            var str = '';
            for (var i = 0; i < this.data.length; i++) {
                var _url = "";
                if((i%1)==0){
                    str = '<div class="channel">';
                }
                str += '<div class="channel__item"><a href="../product/view.html?id='+ this.data[i].id +'" data-id="'+ this.data[i].id +'"> ';
                str += '<p class="fly_img"><img src="' + this.data[i].thumbnail + '"></p>';
                str += '<p class="f14">';
                if(this.data[i].marketPrice&&this.data[i].marketPrice!=this.data[i].price){
                    str += '<span class="clr_orange f16">￥' + this.data[i].price + '<span class="clr_lightGray f12" style="text-decoration: line-through;margin-left: 2px;">￥' + this.data[i].marketPrice + '</span></span>';
                }else{
                    str+='<span class="clr_orange f16">￥' + this.data[i].price + '</span>';
                }
                str += '</p>';
                if((i%1)==0 && i >= 0){
                    str += '</a></div>';
                    str+='<span class="cart fly_cart_start lunboCart" data-id="'+this.data[i].id+'" id="sheet_choose_norms" style="display:flex;">' +
                        '<i class="icon iconfont icon-jiarugouwuche"></i>' +
                        '</span>';
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
                animateTime: 1800,
                plugins: ['button'],
                duration: 3000
                // animateType: type  //zoomout,fade
            });
        }
    };

    $.fn.silderProduct = function(jsons) {
        var sg= new SilderGallery(document.getElementById(this.attr("id")), jsons);
        return sg.show();
    }


})();

/**
 * silder gallery end
 */