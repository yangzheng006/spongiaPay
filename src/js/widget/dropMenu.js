var dropmenu = {
    init: function (navbar1, navbar2, navbar3) {
        if (navbar1) $(".navbar1").text(navbar1);
        if (navbar2) $(".navbar2").text(navbar2);
        if (navbar3) $(".navbar3").text(navbar3);
        $('.dropmenu #navbar .weui-navbar__item').on('click', function () {
            //$(this).addClass("active").siblings().removeClass("active");
            $('.dropmenu #nav_menu .menu').eq($(this).index()).toggle().siblings('div').hide();
            if($('.dropmenu #nav_menu .menu').eq($(this).index()).css("display") == "block"){
                $(this).addClass("active").siblings().removeClass("active");
            }else{
                $(this).removeClass("active");

            }
            $('.dropmenu #nav_menu').addClass('bg');

            document.getElementById('mask').addEventListener('touchmove', function (event) {     //对蒙版绑定touchmove的属性
                //判断条件,条件成立才阻止背景页面滚动,其他情况不会再影响到页面滚动
                if ($('#mask').css("display","block")) {
                    event.preventDefault();
                }
            });

            if($(".dropmenu #navbar .weui-navbar__item").hasClass("active")){
                $('#mask').css("display","block");
            }else{
                $('#mask').css("display","none");
            }
        });
        $(".dropmenu").on("click", "#nav_menu ul li", function () {
            $(this).addClass("active").siblings().removeClass("active");
            $(this).parent().parent().children("ol").eq($(this).index()).show().siblings('ol').hide();

            if($(this).parent().parent().children("ol").eq($(this).index()).children('li').length == 0){
                $(this).parent().parent().children("ol").eq($(this).index()).html('<div class="data_none" style="line-height: 40vh; font-size: 18px;">暂无数据</div>');
            }
        });

        $('#mask').click(function () {
            $('.dropmenu #nav_menu').removeClass('bg');
            $('#mask').css("display","none");
            $('.dropmenu #nav_menu .menu').hide();
            $('#navbar .weui-navbar__item').removeClass("active");
        })
    },
    bindCity: function (data, fn) {
        var html = '';
        var chtml = '';
        html += '<ul class="menu-item weui-flex__item f14 areas">';
        html += '<li class="weui-cell hot_area"><span>热门商圈</span><span class="hotregion none"></span></li>';
        html += '<li class="weui-cell" id="area_all" areaid="" communityid=""><span>全城</span></li>';
        $.each(data.area, function (index, area) {
            html += '<li class="weui-cell">';
            html += '<span>' + area.name + '</span>';
            html += '</li>';
            chtml += '<ol class="menu-item weui-flex__item non f14">';
            chtml += '<li class="weui-cell region_all"><span areaid="' + area.id + '" communityid="">全部</span></li>';
            $.each(area.communities, function (ind, community) {
                chtml += '<li class="weui-cell">';
                chtml += '<span areaId="' + area.id + '" communityId="' + community.id + '">' + community.name + '</span>';
                chtml += '</li>';
            });
            chtml += '</ol>';
        });
        html += "</ul>";
        html += chtml;

        $(".dropmenu #nav_menu .aread").html(html);
        $(".areas").after("<ol class='menu-item weui-flex__item hot non f14'></ol><ol class='menu-item weui-flex__item non f14'></ol>");
        $(".dropmenu").on("click", "#nav_menu .aread ol li", function () {
            $(this).addClass("active").siblings().removeClass("active");
            $(this).parent().parent().hide();

            $('.dropmenu #nav_menu').removeClass('bg');
            $('#mask').css("display","none");

            $(".dropmenu #navbar div").eq($(this).parent().parent().index()).find('.navbar1').html($(this).html());
            if (fn) {
                fn({
                    "areaId": $(this).find("span").attr("areaId"),
                    "communityId": $(this).find("span").attr("communityId")
                });
            }
            $('#navbar .weui-navbar__item').removeClass("active");

            $(".pageable .nearby_tenant").html('');
            // $('body').scrollTop(0);
            // $(document).scrollTop(0);

        });
        $(".dropmenu").on("click", "#area_all", function () {
            $(this).addClass("active").siblings().removeClass("active");
            $(this).parent().parent().hide();
            $(".aread").find('ol').hide();
            $('.dropmenu #nav_menu').removeClass('bg');
            $('#mask').css("display","none");
            $(".dropmenu #navbar div").eq($(this).parent().index()).find('.navbar1').html($(this).html());
            if (fn) {
                fn({
                    "areaId": "",
                    "communityId": ""
                });
            }
            $('#navbar .weui-navbar__item').removeClass("active");
        });

        new lbs(function (data) {
            console.log("当前城市：");
            console.log(data);
            $('.hotregion').html(data.id);
        }).current();
        $(".dropmenu").on("click", ".hot li", function () {
            var all = $('.hotregion').html();
            if (fn) {
                fn({
                    "areaId": all,
                    "communityId": $(this).find("span").attr("communityId")
                });
            }
            $(".pageable .nearby_tenant").html('');
            // $(document).scrollTop(0);
        });

        $(".dropmenu").on("click", ".region_all", function () {
            if (fn) {
                fn({
                    "areaId": $(this).find("span").attr("areaId"),
                    "communityId": ""
                });
            }
            $(".pageable .nearby_tenant").html('');
            // $(document).scrollTop(0);
        });
    },
    bindCategory: function (data, fn) {
        var html = '';
        var chtml = '';
        html += '<ul class="menu-item weui-flex__item f14 goods_category">';
        html += '<li class="weui-cell" id="class_all" categoryid=""><span>全部类别</span></li>';
        $.each(data, function (index, category) {
            html += '<li class="weui-cell">';
            html += '<span>' + category.name + '</span>';
            html += '</li>';
            chtml += '<ol class="menu-item weui-flex__item non f14">';
            chtml += '<li class="weui-cell"><span categoryId="' + category.id + '">全部</span></li>';
            $.each(category.childrens, function (ind, child) {
                chtml += '<li class="weui-cell">';
                chtml += '<span categoryId="' + child.id + '">' + child.name + '</span>';
                chtml += '</li>';
            });
            chtml += '</ol>';
        });
        html += "</ul>";
        html += chtml;
        $(".dropmenu #nav_menu .categoryd").html(html);
        $(".goods_category").after("<ol class='menu-item weui-flex__item non f14 ff'></ol>");
        $(".dropmenu").on("click", "#nav_menu .categoryd ol li", function () {
            $(this).addClass("active").siblings().removeClass("active");
            $(this).parent().parent().hide();

            $('.dropmenu #nav_menu').removeClass('bg');
            $('#mask').css("display","none");

            $("#navbar div").eq($(this).parent().parent().index()).find('.navbar2').html($(this).html());
            if (fn) {
                fn({"categoryId": $(this).find("span").attr("categoryId")});
            }
            $('#navbar .weui-navbar__item').removeClass("active");

            $(".pageable .nearby_tenant").html('');
            // $(document).scrollTop(0);
        });
        $(".dropmenu").on("click", "#class_all", function () {
            $(this).addClass("active").siblings().removeClass("active");
            $(this).parent().parent().hide();
            $("categoryd").find('ol').addClass('non');
            $('.dropmenu #nav_menu').removeClass('bg');
            $('#mask').css("display","none");
            $("#navbar div").eq($(this).parent().parent().index()).find('.navbar2').html($(this).html());
            if (fn) {
                fn({"categoryId": ""});
            }
            $('#navbar .weui-navbar__item').removeClass("active");
        });
    },
    bindOrder: function (data, fn) {
        var html = '';
        html += '<ol class="menu-item weui-flex__item f14" style="width:100vw">';
        $.each(data, function (i, v) {
            html += '<li class="weui-cell' + (i == 0 ? " active" : "") + '">';
            html += '<span>' + v + '</span>';
            html += '</li>';
        });
        html += '</ol>';
        $(".dropmenu #nav_menu .orderd").html(html);
        $(".dropmenu").on("click", "#nav_menu .orderd ol li", function () {
            $(this).addClass("active").siblings().removeClass("active");
            $(this).parent().parent().hide();

            $('.dropmenu #nav_menu').removeClass('bg');
            $('#mask').css("display","none");

            $("#navbar div").eq($(this).parent().parent().index()).find('.navbar3').html($(this).html());
            if (fn) {
                fn($(this).index());
            }
            $('#navbar .weui-navbar__item').removeClass("active");

            // $(".pageable .nearby_tenant").html('');

            // $('body').scrollTop(0);

        });
    }
};

