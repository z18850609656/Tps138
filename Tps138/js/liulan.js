/**
 * Created by Administrator on 2016/9/16.
 */
var proData=[];
$.get("liulan.json",function (data) {
    proData=data;
    console.log(data)
    var str="";
    for (var i=0;i<proData.length;i++){
        str+='<li>'+
            '<img src="'+proData[i].img+'"/>'+
            '<div class="zuo" id="la1"><a href="#">'+proData[i].name+'</a><br/><span>'+proData[i].price+'</span></div>'+
            '<div class="you" id="la2"><img src="'+proData[i].country_img+'"/><p>'+proData[i].country_name+'</p></div>'+
            '</li>';
    }
    $("#xin8").html(str);

})
