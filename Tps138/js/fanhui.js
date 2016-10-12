/**
 * Created by Administrator on 2016/9/20.
 */
window.onscroll=function(){
    console.log(1)
    var start = document.getElementById("header1-begin");
    var scrollTop1=document.documentElement.scrollTop||document.body.scrollTop;
    if(scrollTop1>600){
        /*alert(1)*/
        start.style.display="block";
    }else{
        start.style.display="none";
    }
}