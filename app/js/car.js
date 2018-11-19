require(["config"], function(){
 	require(["jquery", "tools","header","template","cookie"], function($,tools,header,template,cookie){
 		var cart = $.cookie("cart");
 		// console.log(cart);
		if(cart){
			var json_cart = JSON.parse(cart);
		}else{
			cart = [];
			if(cart.length === 0){
				alert("购物车为空");
				location.href = "http://localhost:1314/html/tshirt.html";
			}
		}
		
		var str = template("tableTemplate",{product:json_cart});
		 console.log(str);
		$("#commodity").html(str);
		//渲染显示购物车页面
		$(".delet").click(function(){
			$(this).parents("tr").remove();
		})
		$(function(){
			$(".minus").click(function(){
				
				var nums =$(this).next().val();
				
				if(--nums<1){
					nums = 1; 
				}

				var prices = $(this).parent().prev().find(".prices").val();
				$(this).next().val(nums);
				// console.log(prices);
				$(this).parent().next().next().find(".sprice").val(parseInt(nums*prices));
				$(".allPrice").
			})
			$(".add").click(function(){
				var nums =$(this).prev().val();
				nums ++;
				var prices = $(this).parent().prev().find(".prices").val();
				// console.log(prices.val());
				$(this).prev().val(nums);
				$(this).parent().next().next().find(".sprice").val(parseInt(nums*prices));
			})				
		})
 	})
 })