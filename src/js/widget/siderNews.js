
/**
 * silder gallery begin  [{image:"322332",url:328932382939},{image:"8349",url:"23i32u3i2u"}]
 */
;(function(){
    "use strict";
    var time;
    var type;
    var num;

    var kuaixun = function (el,jsons,atime,atype,anum) {
        this.data = jsons;
        this.el = el;
        time = atime;
        type = atype;
        num = anum;

    };
    kuaixun.prototype = {
        show:function () {
            var list = [];
                if(num == 'mall'){
                    for (var j = 0; j < this.data.length; j++) {
                        var str='';
                        str +='<li><a href="../home/newDetailed.html?funId='+this.data[j].id+'">';

                        if(this.data[j].address!=null){
                            str +='<p class="f14 clr_darkGray new_title">'+ this.data[j].title +'</p>';
                            str +='<p class="f12 clr_darkGray new_title"><i class="icon iconfont icon-dingwei" style="margin-left: -3px;"></i>'+ this.data[j].address +'</p>';
                        }else{
                            str +='<p class="f14 clr_darkGray new_title" style="margin-top:1em">'+ this.data[j].title +'</p>';
                        }
                        str +='</a></li>';
                        list.push({content:str});
                    }
                    // console.log(list);
                }else if(num == 'tenant'){
                    var str='';
                    str +='<li><a href="../home/newDetailed.html?funId='+this.data.id+'">';
                    str +='<p class="f14 clr_darkGray new_title">'+ this.data.title +'</p>';
                    str +='</a></li>';
                    list.push({content:str});
                    // console.log(list);
                }
                var xun = new iSlider({
                    dom: document.getElementById('myscroll'),
                    data: list,
                    isAutoplay: 1,
                    isLooping: 1,
                    isOverspread: 1,
                    animateTime: 800,
                    fixPage: false,
                    isVertical: true
                });
            }
        };

    $.fn.sideNews = function(jsons,time,type,num) {
        var st = new kuaixun(document.getElementById(this.attr("id")),jsons,time,type,num);
        return st.show();
    }
})();

/**
 * silder gallery end
 */