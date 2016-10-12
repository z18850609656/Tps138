$(function(){
	$.get('list.json',function (data) {
		var str='';
		var stri=window.location.search;
		var a=stri.split('=');
		console.log(a);
		for (var i=0;i<data.length;i++){
			if(data[i].pId==a[1]){
				str+='<div class="middle-left">' +
					'<div class="one">' +
					'<img class="big" src="'+data[i].img+'"/>' +
					'</div>' +
					'<div class="the">' +
					'<img class="bigbig" src="'+data[i].img+'"/>' +
					'</div>' +
					'<span></span>' +
					'<div class="small1">' +
						'<img class="small active img1" src="'+data[i].img+'"/>' +
						'<img class="small img2" src="'+data[i].img+'"/>' +
					'</div>' +
					'</div>' +
					'<div class="middle-right">' +
					'<p class="post">包邮</p>' +
					'<h1>'+data[i].name+'</h1>' +
					'<p class="spec">' +
					'<span class="spec-left">商品编码:01523335-1</span>' +
					'<span class="spec-right">原产地: '+data[i].country_name+'</span>' +
					'</p>' +
					'<div class="middle-price">' +
					'<ul class="middle-list">' +
					'<li class="price1">' +
					'<a class="spec-right  price" >价格:</a>' +
					'<b class="price-right">'+data[i].price+'</b>' +
					'</li>' +
					'<li class="price1 price2">' +
					'<a class="spec-right  price  standard" style="float: left">规格:</a>' +
					'<ul id="standard1">' +
					'<li><a  class="streak" id="pink" title="粉色" href="###">粉色</a> </li>' +
					'<li><a   title="黑色" href="###">黑色</a></li>' +
					'<li><a  title="玫瑰色" href="###">玫瑰色</a></li>' +
					'<li><a   title="草绿色" href="###">草绿色</a></li>' +
					'<li><a   title="淡紫色" href="###">淡紫色</a></li>' +
					'<li><a   title="金黄色" href="###">金黄色</a></li>' +
					'<li><a  title="亮橙色" href="###">亮橙色</a></li>' +
					'<li><a  title="浅紫色" href="###">浅紫色</a></li>' +
					'<li><a  id="blue" title="天蓝色" href="###">天蓝色</a></li>' +
					'</ul>' +
					'</li><br/><br/><br/><br/><br/>' +
					'<li id="nu"><a class="spec-right  price  standard" style="float: left">数量：</a>' +
					'<div class="num-left">' +
					'<input type="text" name="num" value="1">' +
					'<div class="up"><img src="img/op.png"/> </div>' +
					'<div class="down"><img src="img/op%20(2).png"/> </div>' +
					'</div>' +
					'<div class="num-right">' +
					'<p class="spec-right  price" id="ku" >库存：999</p>' +
					'</div>' +
					'</li>' +
					'</ul>' +
					'</div>' +
					'<p class="address  spec-right" style="padding-left: 10px;font-size: 14px" >发货地: 深圳市</p>' +
					'<span id="fr">' +
					'<a href="###" class="go" id="buy">立即购买</a>' +
					'<a href="go.html" class="go" id="shopping-cart" data-id="'+data[i].pId+'">加入购物车</a>' +
					'</span>' +
					'<div id="jia">' +
					'<a id="care">添加关注（0）</a>' +
					'</div>' +
					'</div>' +
					'</div>'
			}

		}


		var $middle_big=$('.middle-big');
		$middle_big.html(str);

		var $shopping_cart=$('#shopping-cart');
		$shopping_cart.click(function () {
			var aa=$shopping_cart.attr('data-id');
			$.cookie(aa,aa,{expires:7,path:'/'});
		});


	/*	var $streak=$(".streak");
		var $oLi=$("#standard1 li");
		$oLi.on("click",function () {
			var index=$(this).index();
			console.log(index)
			$oLi.removeClass("streak").eq(index).addClass("streak");
			/!*$(this).addClass("streak").siblings().removeClass("streak")*!/
		})*/

		var ione = $(".one"),
			ithe = $(".the"),
			itwo = $(".small1 img"),
			tthe = $(".the img");
		var $img1=$('.img1');
		var $img2=$('.img2');
		var $bigbig=$('.bigbig');
		var $big=$('.big');

		$img1.click(function () {
			var aa=$img1.attr('src');
			$big.attr('src',aa);
			$bigbig.attr('src',aa);
			itwo.css('border','none');
			$img1.css('border','1px #f00 solid')
		});
		$img2.click(function () {
			var aa=$img2.attr('src');
			$big.attr('src',aa);
			$bigbig.attr('src',aa);
			itwo.css('border','none');
			$img2.css('border','1px #f00 solid')
		});



			ione.mousemove(function(a){
				var evt = a || window.event;
				ithe.css('display','block');
				var ot = evt.clientY-($(".one").offset().top- $(document).scrollTop())-87;
				var ol = evt.clientX-($(".one").offset().left- $(document).scrollLeft())-87;
				if(ol<=0){
					ol = 0;
				}
				if(ot<=0){
					ot = 0;
				}
				if(ol>=175){
					ol=175
				}
				if(ot>=175){
					ot=175
				}
				$("span").css({'left':ol,'top':ot});
				var ott = ot/350*800;
				var oll = ol/350*800;
				tthe.css({'left':-oll,'top':-ott})
			})
			ione.mouseout(function(){
				ithe.css('display','none')
			})

		});




	});
