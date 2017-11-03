/**
 * silder gallery {jsons}
 */

var orders = function(fn) {
    this.fn = fn;
};
orders.prototype = {
    show:function () {
        var list = [];
        jsons = this.data;
        for (var i = 0; i < jsons.length - 1; i++) {
            list.add({content:jsons[i].image});
        }
        var islider = new iSlider({
            data: list,
            dom: document.getElementById("iSlider-wrapper"),
            isOverspread: false,
            isVertical: false,
            isLooping: true,
            isAutoplay: true,
            animateTime: 800,
            animateType: 'card'
        });
    }
};


