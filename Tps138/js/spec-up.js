/**
 * Created by Administrator on 2016/9/20.
 */
window.onscroll=function(){
   /* console.log(1)*/
    var up = document.getElementById("in");
    var scrollTop1=document.documentElement.scrollTop||document.body.scrollTop;
    if(scrollTop1>1000){
        /*alert(1)*/
        up.style.display="block";
    }else{
       up.style.display="none";
    }
}