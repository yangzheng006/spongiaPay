// 顶部导航滑动效果   此组件要内页自已引入 div 结构
function nav() {
    var $div_li =$("#pagenavi1 li");
    var nav_w=$(".find_nav_list li").first().width();
    $(document).on('click',".find_nav_list li", function(){
        nav_w=$(this).width();
        $(this).addClass("find_nav_cur").siblings().removeClass("find_nav_cur");
        var fn_w = ($(".find_nav").width() - nav_w) / 2;
        var fnl_l;
        var fnl_x = parseInt($(this).position().left);
        if (fnl_x <= fn_w) {
            fnl_l = 0;
        } else if (fn_w - fnl_x <= flb_w - fl_w) {
            fnl_l = flb_w - fl_w;

        } else {
            fnl_l = fn_w - fnl_x;
        }
        $(".find_nav_list").animate({
            "left" : fnl_l
        }, 300);
        sessionStorage.left=fnl_l;
        // var index =  $div_li.index(this);
        // $('.s_div').eq(index).removeClass('none').siblings('.s_div').addClass('none');
    });

    var fl_w=$(".find_nav_list").width();
    var flb_w=$(".find_nav_left").width();
    // var a = $(window).width();
    var a = $('.find_nav').width();
    if(fl_w>a){
        $(".find_nav_list").on('touchstart', function (e) {
            var touch1 = e.targetTouches[0];
            x1 = touch1.pageX;
            y1 = touch1.pageY;
            ty_left = parseInt($(this).css("left"));
        });
        $(".find_nav_list").on('touchmove', function (e) {
            var touch2 = e.targetTouches[0];
            var x2 = touch2.pageX;
            var y2 = touch2.pageY;
            if(ty_left + x2 - x1>=0){
                $(this).css("left", 0);
            }else if(ty_left + x2 - x1<=flb_w-fl_w){
                $(this).css("left", flb_w-fl_w);
            }else{
                $(this).css("left", ty_left + x2 - x1);
            }
            if(Math.abs(y2-y1)>0){
                e.preventDefault();
            }
        });
    }else{
        $('.find_nav_list').css('left','0 !important');
    }

};