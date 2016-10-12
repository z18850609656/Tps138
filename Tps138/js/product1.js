/**
 * Created by Administrator on 2016/9/14.
 */
var proData=[];
$.get("product1.json",function (data) {
    proData=data;
    var str="";
    for (var i=0;i<proData.length;i++){
        str+='<li>'+
        '<img src="'+proData[i].img+'"/>'+
            '<div class="zuo"><a href="#">'+proData[i].name+'</a><br/><span>'+proData[i].price+'</span></div>'+
        '<div class="you"><img src="'+proData[i].country_img+'"/><p>'+proData[i].country_name+'</p></div>'+
            '</li>';
    }
    $(".xin1").html(str);

})


var proData=[];
$.get("product1.json",function (data) {
    proData=data;
    console.log(data.length)
    var str="";
    for (var i=0;i<proData.length;i++){
        str+='<li>'+
            '<img src="'+proData[i].img+'"/>'+
            '<div class="zuo"><a href="#">'+proData[i].name+'</a><br/><span>'+proData[i].price+'</span></div>'+
            '<div class="you"><img src="'+proData[i].country_img+'"/><p>'+proData[i].country_name+'</p></div>'+
            '</li>';
    }
    $(".xin1").html(str);

})



var proData=[];
$.get("product1.json",function (data) {
    proData=data;
    var str="";
    for (var i=0;i<proData.length;i++){
        str+='<li>'+
            '<img src="'+proData[i].img+'"/>'+
            '<div class="zuo"><a href="#">'+proData[i].name+'</a><br/><span>'+proData[i].price+'</span></div>'+
            '<div class="you"><img src="'+proData[i].country_img+'"/><p>'+proData[i].country_name+'</p></div>'+
            '</li>';
    }
    $(".xin1").html(str);

})



var proData=[];
$.get("product1.json",function (data) {
    proData=data;
    var str="";
    for (var i=0;i<proData.length;i++){
        str+='<li>'+
            '<img src="'+proData[i].img+'"/>'+
            '<div class="zuo"><a href="#">'+proData[i].name+'</a><br/><span>'+proData[i].price+'</span></div>'+
            '<div class="you"><img src="'+proData[i].country_img+'"/><p>'+proData[i].country_name+'</p></div>'+
            '</li>';
    }
    $(".xin1").html(str);

})


var proData=[];
$.get("product1.json",function (data) {
    proData=data;
    var str="";
    for (var i=0;i<proData.length;i++){
        str+='<li>'+
            '<img src="'+proData[i].img+'"/>'+
            '<div class="zuo"><a href="#">'+proData[i].name+'</a><br/><span>'+proData[i].price+'</span></div>'+
            '<div class="you"><img src="'+proData[i].country_img+'"/><p>'+proData[i].country_name+'</p></div>'+
            '</li>';
    }
    $(".xin1").html(str);

})


var proData=[];
$.get("product1.json",function (data) {
    proData=data;
    var str="";
    for (var i=0;i<proData.length;i++){
        str+='<li>'+
            '<img src="'+proData[i].img+'"/>'+
            '<div class="zuo"><a href="#">'+proData[i].name+'</a><br/><span>'+proData[i].price+'</span></div>'+
            '<div class="you"><img src="'+proData[i].country_img+'"/><p>'+proData[i].country_name+'</p></div>'+
            '</li>';
    }
    $(".xin1").html(str);

})