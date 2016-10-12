var $goTop=$("#top");
var $navList=$("#nav-list")
var $navOpt=$("#nav-list li")
var $section=$(".f1")
var iH = $section.outerHeight()
testScrollTop();
$(window).scroll(function () {
    testScrollTop()
});
/*返回顶部*/
$goTop.click(function () {
    $("body,html").animate({"scrollTop":0});

});

/*右侧导航栏事件*/
$navOpt.click(function () {
    //$(this).addClass("active").siblings().removeClass("active")
    var index = $(this).index();//当前点击的li 的下标（楼层）
    var iT = $section.eq(index).offset().top//当前楼层距离页面顶部的距离

    //让滚动高度运动到当前楼层的位置
    $("body,html").animate({"scrollTop":iT},1000);
});

/*楼层运动*/

function testScrollTop() {

    var iScrollT = $(window).scrollTop();

    $section.each(function () {
        var iT = $(this).offset().top//每一个楼层的距离页面顶部的距离
        if(iScrollT>=iT-iH/2-20 && iScrollT<iT+iH){
            console.log($(this).index());
           /* $navOpt.removeClass("nav-active").eq($(this).index()).addClass("nav-active")*/
        }

    });

};
