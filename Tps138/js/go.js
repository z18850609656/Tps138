/**
 * Created by Administrator on 2016/9/21.
 */
$(function () {
   $.get('list.json',function (data) {

       var str='';
       var aaa=document.cookie;
       var bbb=aaa.split(';');
       for(var j=0;j<bbb.length;j++){
           var ccc=bbb[j].split('=');
           for(var i=0;i<data.length;i++){
               if(data[i].pId==ccc[1]){
                   str+='<li class="middle-big">' +
                       '<div class="go-left">' +
                       '<img src="'+data[i].img+'"/>' +
                       '<div class="shop-left">' +
                       '<p>'+data[i].name+'</p><br/>' +
                       '<span>此商品在'+data[i].country_name+'有售</span>' +
                       '</div>' +
                       '</div>' +
                       '<ul class="go-right">' +
                       '<li><b class="per-price">'+data[i].price.slice(1)+'</b></li>' +
                       ' <li id="act">' +
                       '<a  class="minus">-</a>' +
                       '<a class="numAdd">1</a>' +
                       '<a class="add">+</a>' +
                       '</li>' +
                       '<li class="ji"><b>80684</b></li>' +
                       '<li class="dd"> <img data-id="'+data[i].pId+'" class="action" id="del" src="img/shan_03.png"/></li>' +
                       '</ul>' +
                       '</li>'
               }

           }
       }

       var $box=$('.box');
       $box.html(str)

       var $action=$('.action');
       $action.click(function () {
           var aaa=$('.action').attr('data-id');
           console.log(aaa);
           $.cookie(aaa,aaa,{expires:-1,path:'/'})
           $(this).parents(".middle-big").remove();
       })
       

   })
    $(document).on("click",".minus",function () {
        var op=$(this).parents(".middle-big")
        var num=op.find(".numAdd");
        var price=op.find(".per-price")
        var sum=op.find(".ji b");
        var val=num.html();
        if(val<=1){
            val=2
        }
        num.html(--val)
        sum.html(val*price.html())
        getSum()

    })
    $(document).on("click",".add",function () {
        var op=$(this).parents(".middle-big")
        var num=op.find(".numAdd");
        var price=op.find(".per-price")
        var sum=op.find(".ji b");
        var val=num.html();
        num.html(++val);
        sum.html(val*price.html())
        getSum()
    })
//总的金额
    function getSum() {
        var $allNum = $(".all-num");
        var $allSum = $(".all-sum");
        var allNum=0;
        var allSum=0;
        $(".per-price").each(function () {
            var op=$(this).parents(".middle-big");
            var num=op.find(".numAdd");
            /*var price=op.find(".per-price")*/
            var sum=op.find(".ji b");
            allNum+=parseFloat(num.html());
            allSum+=parseFloat(sum.html());
        })
        $allNum.html(allNum);
        $allSum.html(allSum);
    }



});



















