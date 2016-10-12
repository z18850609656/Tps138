/**
 * Created by Administrator on 2016/9/14.
 */
/*
 轮播的调用1*/

/**
 * Created by Administrator on 2016/9/13.
 */

$(function(){
    var $newpro=$("#mao .mao");
  $newpro.each(function () {
     /* $('.first_btn').eq(i).index=i;*/
      var index=$(this).index();
      var $active1=$('.first_btn li');
      var $xin1=$('.xin1');
      console.log(index);//2

      $('.first_btn').eq(index).find("li").click(function () {
          var len=$(this).index();
          $xin1.eq(index).stop().animate({'left':-len*1200})
         // $('.first_btn').eq(index).find($active1).removeClass('active1').eq(len).addClass('active1');
         $(this).addClass('active1').siblings().removeClass('active1')
      })
  })

});

$(function () {
    var $active1=$('.last_btn li');
    var $xin8=$('#xin8');

    $active1.click(function () {
        var len=$(this).index()
        $xin8.animate({'left':-len*1200})
        $active1.removeClass('active1').eq(len).addClass('active1')
    })
});

 /*小轮播baby7*/


$(function () {
    var $f1=$(".f1");
    $f1.each(function(){
        var $bnt=$(this).find(".btn");
        var $btnLi=$bnt.find("li");
        var $center=$(this).find(".center");
        var $img=$(this).find(".baby_centerBig")
        var $centerLi=$center.find("li");
        var $pre=$(this).find(".pre");
        var $nex=$(this).find(".nex");
        var len=parseInt($centerLi.outerWidth());
        var now=0;
        console.log(len);

        $btnLi.click(function(){
            var index=$(this).index();
            now=index;
            $center.stop().animate({left:-len*now},500);
            $(this).addClass("active4").siblings().removeClass("active4");
        });
        $pre.click(function(){
            if(now<=0){
                now=4
            }
            now--;
            $center.stop().animate({left:-len*now},500);
            $btnLi.eq(now).addClass("active4").siblings().removeClass("active4");
        });
        $nex.click(function () {
            if (now==3){
                    now=-1;
                }
                now++;
            $center.stop().animate({"left":-len*now})
            $btnLi.eq(now).addClass("active4").siblings().removeClass("active4");

        })
        $img.hover(function () {
         $pre.show();
         $nex.show();
         $bnt.show();
         },function () {
         $pre.hide();
         $nex.hide();
         $bnt.hide();
         })
    });



})


