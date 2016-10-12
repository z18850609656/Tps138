
window.onscroll=function(){
    var scrollTop1=document.documentElement.scrollTop||document.body.scrollTop;
if(scrollTop1>300){
    ogo.style.display="block";
}else{
     ogo.style.display="none";
 }
}
//console.log(scrollTop1);

var ogo = document.getElementById("go");
ogo.onclick=function(){
//console.log(this);
    console.log(ogo);
    document.documentElement.scrollTop = document.body.scrollTop = 0;
}
