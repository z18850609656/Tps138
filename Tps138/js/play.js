/**
 * Created by Administrator on 2016/9/13.
 */
//大轮播
//获取元素
var $prev = $("#prev");
var $next = $("#next");
var $list = $("#pic-list");
var $picLi = $("#pic-list li");
var $btnLi = $("#btn-list li");
var $banner = $(".banner");
/*可能会用的变量*/
var iNow = 0;
var iW = $picLi.outerWidth();//li的宽度
var len = $picLi.length;
var timer = null;
var animated =true;
// 2、创建一个li，让他的img个第一个的图片一样，然后添加到list里面
//console.log($picLi.eq(0).find("img").attr("src"))//第一个图片的src
var src = $picLi.eq(0).find("img").attr("src");
$('<li><a href="###"><img src="'+src+'"></a></li>').appendTo($list);



//autoPlay()


/*右按钮事件*/
$next.click(function () {
    toNext()
});
//$next.click(toNext);


/*左按钮事件*/
$prev.click(function () {
    if(!animated) {
        console.log("不能开始下一次")
        return
    }

    if(iNow<=0){
        iNow = len;
        $list.css({"left":-iNow*iW})//到最后的位置
    }
    iNow--;
    changeView()
});

$btnLi.click(function () {
    iNow = $(this).index();//让iNow=当点击的按钮的下标
    changeView()
});


$banner.hover(function () {
    clearInterval(timer)
},function () {
    autoPlay()
});

function changeView() {

    animated = false;
    $list.stop().animate({"left":-iW*iNow},function () {

       // console.log("运动结束");
        animated = true;
    });
    $btnLi.removeClass("active").eq(iNow%len).addClass("active")
}




function autoPlay() {
    timer =setInterval(toNext,10000)
}



function toNext(){

    if(!animated){
        console.log("不能开始下一次")
        return
    }


    if(iNow>=len){
        iNow =0;
        $list.css({"left":0})
    }
    iNow++;

    changeView()
}