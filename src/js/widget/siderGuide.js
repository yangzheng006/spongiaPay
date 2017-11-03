
/**
 * silder gallery begin  [{image:"322332",url:328932382939},{image:"8349",url:"23i32u3i2u"}]
 */
;(function(){
    "use strict";
    var time;
    var type;
    //var pImage;

    var guidell = function (el,jsons,atime,atype) {
        this.data = jsons;
        this.el = el;
        time = atime;
        type = atype;
        //pImage = apImage;
    };
    guidell.prototype = {
        show:function () {
            var list = [];
            if ( this.data.length == 0 ) {
                list.push({content:'<p class="noneGuide">暂无讲师</p>'});
            } else {
                var y = this.data;
                for (var j = 0; j < y.length; j++) {
                    var str = '';
                    if(y[j].employeeId!=null){
                        str +='<a class="img" id="imgLink"  href="../guide/home.html?id='+y[j].employeeId+'&mid='+y[j].id+'&who=other&userType=guide">';
                    }else if(y[j].employeeId==null){
                        str +='<a class="img" id="imgLink"  href="../guide/home.html?id='+y[j].employeeId+'&mid='+y[j].id+'&who=other&userType=simple">';
                    }

                    //判断图片是否有
                    if(y[j].headImg == null ){
                        str+='<img src="../images/actv.jpg"/>';
                    }else{
                        str+='<img src="'+ y[j].headImg +'" />';
                    }

                    //判断是否去过导购的店
                    if(y[j].tenantVisited == true){
                        str+='<span class="visited f12">曾去过他的店</span>';
                    }

                    str +='<div class="title weui-cell"><div class="weui-cell__bd">';
                    if(y[j].gender == 'male'){
                        str += '<p class="f14"><i class="icon iconfont icon-nan"></i>';
                    }else {
                        str += '<p class="f14"><i class="icon iconfont icon-nvfemale128"></i>';
                    }
                    // if(this.data[j].constellation==null){
                    //     str +='<p class="f14">'+ this.data[j].name +'</p>';
                    // }else{
                    //     str +='<p class="f14">'+ this.data[j].name +'<span class="f12 clr_lightGray">'+ this.data[j].constellation +'</span></p>';
                    // }

                    if(y[j].nickName == null){
                        str +='<span class="guide_name">' + y[j].name +'</span>';
                    }else{
                        str +='<span class="guide_name">' + y[j].nickName +'</span>';
                    }
                    if(y[j].constellation == null){
                        str +='</p>';
                    }else{
                        str +='<span class="f12 clr_lightGray">('+ y[j].constellation +')</span></p>';
                    }
                    str += '<span class="suoyin none"></span>';


                    //添加标签
                    if(y[j].tags != null){
                        if(y[j].tags.length > 0){
                            //添加标签
                            str +='<div class="tad">';
                            // var icons = [];

                            for(var i=0;i<y[j].tags.length;i++){
                                // var tagb='';
                                str+='<p class="f10">'+ y[j].tags[i].name +'</p>';
                                // icons.push(tagb);
                            }
                            str +='</div>';
                        }
                    }

                    if(y[j].quertity==null){
                        str +='<p class="f12 clr_lightGray"><span>粉丝：<em class="clr_darkGray">'+ y[j].fansCount +'</em></span><span class="pNum">商品：<em class="clr_darkGray">0</em></span></p>'
                    }else{
                        str +='<p class="f12 clr_lightGray"><span>粉丝：<em class="clr_darkGray">'+ y[j].fansCount +'</em></span><span class="pNum">商品：<em class="clr_darkGray">'+ y[j].quertity +'</em></span></p>'
                    }
                    str +='</div></div></a>';


                    str+='<span class="none colsguide">'+y[j].hasFavorited+'</span>';
                    //是否收藏导购
                    if(y[j].hasFavorited) {
                        str += '<div class="attention" data-id="'+y[j].id+'">';
                        str += '<p><i class="icon iconfont icon-aixin reds"></i></p>';
                        str += '</div></a>';
                    }else{
                        str += '<div class="attention" data-id="'+y[j].id+'"> ';
                        str += '<p><i class="iconfont icon-aixin gray"></i></p>';
                        str += '</div>';
                    }
                    list.push({content:str});
                }

                console.log(list);
            }

            var indexList=[];
            if(this.data.length != 0 ) {
                var S = new iSlider(document.getElementById('guide_pic'),list, {
                    isLooping: 1,
                    isOverspread: false,
                    //isAutoplay: 1,
                    animateTime: 500,
                    animateType: 'rotate',
                    //oninitialized:start,
                    // oninitialized:addOne,
                    //loadData:start,
                    fixPage:false,
                    onRenderComplete: function(index, ele) {
                        $(".suoyin").text(index + 1);
                    },
                    onSlideChange: function(index, ele) {
                        $(".suoyin").text(index + 1);
                        var a = $('.islider-active').find('.suoyin').text();
                        indexList.push(a);
                        console.log(indexList);
                        var yushu=a%10;
                        var num=parseInt(a/10)+2;
                        // console.log('余数'+yushu);
                        // console.log('页数'+num);
                        var l = this.data.length;
                        var d = this.direction;
                        if (d > 0 || (index - this.slideIndex + l) % l === 1) {
                            if(arrCheck(indexList,a)){
                                if(yushu==8){
                                    loadList(num);
                                }
                            }
                        }
                        function arrCheck(arr,ss){
                            var count=0;
                            for(var i=0;i<arr.length;i++){
                                var temp=ss;
                                if(arr[i]==temp){
                                    count++;
                                }
                            }
                            if(count>1){
                                return false;
                            }else{
                                return true;
                            }
                        }

                        function loadList(number) {
                            new guide(function (data) {
                                for (var j = 0; j <data.length; j++) {
                                    var str = '';
                                    if(data[j].employeeId!=null){
                                        str +='<a class="img" id="imgLink"  href="../guide/home.html?id='+data[j].employeeId+'&mid='+data[j].id+'&who=other&userType=guide">';
                                    }else{
                                        str +='<a class="img" id="imgLink"  href="../guide/home.html?id='+data[j].employeeId+'&mid='+data[j].id+'&who=other&userType=simple">';
                                    }

                                    //判断图片是否有
                                    if(data[j].headImg == null ){
                                        str+='<img src="../images/actv.jpg"/>';
                                    }else{
                                        str+='<img src="'+ data[j].headImg +'" />';
                                    }

                                    //判断是否去过导购的店
                                    if(data[j].tenantVisited == true){
                                        str+='<span class="visited f12">曾去过他的店</span>';
                                    }

                                    str +='<div class="title weui-cell"><div class="weui-cell__bd">';
                                    if(data[j].gender == 'male'){
                                        str += '<p class="f14"><i class="icon iconfont icon-nan"></i>';
                                    }else {
                                        str += '<p class="f14"><i class="icon iconfont icon-nvfemale128"></i>';
                                    }
                                    if(data[j].nickName == null){
                                        str +='<span class="guide_name">' + data[j].name +'</span>';
                                    }else{
                                        str +='<span class="guide_name">' + data[j].nickName +'</span>';
                                    }
                                    if(data[j].constellation == null){
                                        str +='</p>';
                                    }else{
                                        str +='<span class="f12 clr_lightGray">('+ data[j].constellation +')</span></p>';
                                    }
                                    str += '<span class="suoyin none"></span>';
                                    //添加标签
                                    if(data[j].tags != null){
                                        if(data[j].tags.length > 0){
                                            //添加标签
                                            str +='<div class="tad">';
                                            // var icons = [];

                                            for(var i=0;i<data[j].tags.length;i++){
                                                // var tagb='';
                                                str+='<p class="f10">'+ data[j].tags[i].name +'</p>';
                                                // icons.push(tagb);
                                            }
                                            str +='</div>';
                                        }
                                    }

                                    if(data[j].quertity==null){
                                        str +='<p class="f12 clr_lightGray"><span>粉丝：<em class="clr_darkGrayy">'+ data[j].fansCount +'</em></span><span class="pNum">商品：<em class="clr_darkGray">0</em></span></p>'
                                    }else{
                                        str +='<p class="f12 clr_lightGray"><span>粉丝：<em class="clr_darkGray">'+ data[j].fansCount +'</em></span><span class="pNum">商品：<em class="clr_darkGray">'+ data[j].quertity +'</em></span></p>'
                                    }
                                    str +='</div></div></a>';


                                    str+='<span class="none colsguide">'+data[j].hasFavorited+'</span>';
                                    //是否收藏导购
                                    if(data[j].hasFavorited) {
                                        str += '<div class="attention" data-id="'+data[j].id+'">';
                                        str += '<p><i class="icon iconfont icon-aixin reds"></i></p>';
                                        str += '</div></a>';
                                    }else{
                                        str += '<div class="attention" data-id="'+data[j].id+'"> ';
                                        str += '<p><i class="iconfont icon-aixin gray"></i></p>';
                                        str += '</div>';
                                    }
                                    list.push({content:str});
                                }
                            }).list({type:1,pageNumber:number,pageSize:10})
                        }


                    }
                });
            }else {
                var ST = new iSlider(document.getElementById('guide_pic'),list, {
                    isLooping: 1,
                    isOverspread: false,
                    //isAutoplay: 1,
                    animateTime: 500,
                    animateType: 'rotate',
                    // oninitialized:startT,
                    fixPage:false
                });
            }
        }

    };

    $.fn.sideGuide = function(jsons) {
        var gde = new guidell(document.getElementById(this.attr("id")),jsons,time,type);
        return gde.show();
    }

})();

/**
 * silder gallery end
 */
