/**
 * Created by Administrator on 2016/9/18.
 */
/**
 * Created by Administrator on 2016/9/14.
 */
/*var proData=[];
$.get("list.json",function (data) {
    proData=data;
    var str="";
    for (var i=0;i<proData.length;i++){
        str+='<li>'+
            '<img src="'+proData[i].img+'"/>'+
            '<div class="zuo"><a href="specifics.html?pId='+proData[i].pId+'">'+proData[i].name+'</a><br/><span>'+proData[i].price+'</span></div>'+
            '<div class="you"><img src="'+proData[i].country_img+'"/><p>'+proData[i].country_name+'</p></div>'+
            '</li>';
    }
    $(".xin1").html(str);

});*/

var pageRows = 15;
var productData = [];
var $proList = $(".xin1");

$.get("list.json",function (data) {
    productData = data;
    var pageCount =Math.ceil(data.length/pageRows);//总共有多少页

    addData(1);

    $("#page-rows").createPage({
        pageCount:pageCount, //总共有多少页
        current:1,//当前第几页
        backFn:function (page) {
            addData(page)
        }
    });

});

function addData(page) {
    var disNum = (page - 1) * 15;
    var str = "";
    for (var i = 0; i < pageRows; i++) {
        if (!productData[disNum + i]) {
            break
        }
        str += '<li><a href="specifics.html?pId='+productData[disNum + i].pId+'">'+
            '<img src="'+productData[disNum + i].img+'"/>'+
            '<div class="zuo"><a class="ov-ellipsis" style="width:150px" href="specifics.html?pId='+productData[disNum + i].pId+'">'+productData[disNum + i].name+'</a><br/><span>'+productData[disNum + i].price+'</span></div>'+
            '<div class="you"><img src="'+productData[disNum + i].country_img+'"/><p>'+productData[disNum + i].country_name+'</p></div>'+
            '</a></li>';
    }

    $proList.html(str);
}