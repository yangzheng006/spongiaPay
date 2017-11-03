/**
 * fly
 * Created by Administrator on 2016/12/2 0002.
 */
// $(function() {
//     var offset = $("#fly_cart_end").offset();//飞往的目标
//     $(".fly_cart_start").click(function(event){
//         var flycart = $(this);
//         var img = flycart.parent().find('#fly_img img').attr('src');//获取图片地址
//         var flyer = $('<img class="u-flyer" src="'+img+'">');
//         flyer.fly({
//             start: {
//                 left: event.pageX, //开始位置（必填）#fly元素会被设置成position: fixed
//                 top: event.pageY //开始位置（必填）
//             },
//             end: {
//                 left: offset.left+10, //结束位置（必填）
//                 top: offset.top+10, //结束位置（必填）
//                 width: 0, //结束时宽度
//                 height: 0 //结束时高度
//             },
//             onEnd: function(){ //结束回调
//                 // $("#msg").show().animate({width: '250px'}, 200).fadeOut(1000); //提示信息
//                 // flycart.css("cursor","default").removeClass('orange').unbind('click');
//                 this.destory(); //移除dom
//             }
//         });
//     });
//
// });