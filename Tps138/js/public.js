var $cna=$("#cna").parent();
var $mny=$("#mny").parent();
var $ge=$("#ge").parent();
var $countryList=$("#countryList");
var $lanName = $(".lan-name");
var $moneyList=$("#moneyList");
var $ren=$(".ren")
var $dingList=$("#dingList");
var $siyou=$(".siyou")
var $oLi1=$("#countryList li");
var $oLi2=$("#moneyList li ");
var $oLi3=$("#dingList li");
$cna.hover(function () {
    $(this).css("background","#fff")
    $countryList.show();
},function () {
    $countryList.hide();
    $(this).css("background","")
});
$oLi1.click(function () {
    console.log($(this).html())
    $lanName.html($(this).html());
});



$mny.hover(function () {
    $(this).css("background","#fff")
    $moneyList.show();
},function () {
    $moneyList.hide();
    $(this).css("background","")
});
$oLi2.click(function () {
    console.log($(this).html())
    $ren.html($(this).html());
});



$ge.hover(function () {
    $(this).css("background","#fff")
    $dingList.show();
},function () {
    $dingList.hide();
    $(this).css("background","")
});
$oLi3.click(function () {
    console.log($(this).html())
    $siyou.html($(this).html());
});

//二级菜单
/*var $re=$(".re");
var $fu=$(".fu ");
var $two=$(".two");
console.log($re.length)
$re.hover(function () {
    $two.eq($(this).index()).css({'display':'block'})
},function () {
    $two.eq($(this).index()).css({'display':'none'})
});*/

//
// $("#main_menu").mouseenter(function () {
//     $("#all_list").show();
// });
//
// $(".fu").mouseleave(function () {
//     $(this).parent().find(".two").show();
// });
// $(".two").mouseleave(function (event) {
//     $("#all_list").hide();
//     $(this).parent().find(".two").hide();
// })

$("#main_menu").hover(function(){
    $("#all_list").show();
});
$("#all_list .re").hover(function(){
    $(this).find(".two").show();
    $(this).find(".two").animate({left:140},"200","swing")
    $(this).stop().animate({left:20},"200","swing")
   /* $(this).addClass("boder-left")*/
    /*$(this).css("border-left","2px red solid").animate({left:1},"200","swing")*/

},function(){
    $(this).find(".two").hide();
    $(this).animate({left:0},"200","swing")
});
$("#all_list").mouseleave(function(){
    $(this).hide();
})






