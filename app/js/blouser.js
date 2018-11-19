require(["config"], function(){
	require(["jquery","tools","template","login","slideshow","header","blouseSlideshow","blouse"], function($,tools,template,login){
		new Promise(function(resolve, reject){
			$("header").load("/html/component/header.html",function(){
				$("ul").header();
				resolve();
			});
			$("#lunbo").load("/html/component/lunbo.html",function(){
				$(".blouse_slideshow").blouseSlideshow();
			});
			$("#blouseMeun").load("/html/component/blouseMeun.html",function(){
				 $("#blouseMeun").blouse();
				// console.log(555);
				//  console.dir($);
				// console.log($(".tabs").blouse);
			});
			$("footer").load("/html/component/footer.html",function(){

			});

		 }).then(function(){
		 	$.ajax({
		 		method: "get",
		 		url: "http://rap2api.taobao.org/app/mock/117183/blouse_webpage",
		 		success: function(res){
		 			//console.log(res);
		 			var html = template("pro-template",{blouse_webpage: res.products});
		 			$("#xinpin").html(html);
		 		}
		 	})
		}).then(function(){
		 	$.ajax({
		 		method: "get",
		 		url: "http://rap2api.taobao.org/app/mock/117183/blouse_shirt",
		 		success: function(res){
		 			//console.log(res);
		 			var html = template("pro-templatet",{blouse_shirt: res.product});
		 			$("#niujinfan").html(html);
		 		}
		 	})
		}).then(function(){
		 	$.ajax({
		 		method: "get",
		 		url: "http://rap2api.taobao.org/app/mock/117183/blouse_caroset",
		 		success: function(res){
		 			//console.log(res);
		 			var html = template("pro-templates",{blouse_caroset: res.product});
		 			$("#product_caroset").html(html);
		 		}
		 	})
		}).then(function(){
		 	$.ajax({
		 		method: "get",
		 		url: "http://rap2api.taobao.org/app/mock/117183/blouse_washablecotton",
		 		success: function(res){
		 			//console.log(res);
		 			var html = template("pro-templatef",{blouse_washablecotton: res.product});
		 			$("#product_washable").html(html);
		 		}
		 	})
		}).then(function(){
		 	$.ajax({
		 		method: "get",
		 		url: "http://rap2api.taobao.org/app/mock/117183/blouse_washableproductShirt",
		 		success: function(res){
		 			//console.log(res);
		 			var html = template("pro-templatex",{blouse_washableproductShir: res.product});
		 			$("#productShirt").html(html);
		 		}
		 	})
		}).then(function(){
		 	$.ajax({
		 		method: "get",
		 		url: "http://rap2api.taobao.org/app/mock/117183/blouse_newshirt",
		 		success: function(res){
		 			//console.log(res);
		 			var html = template("pro-templateone",{blouse_newshirt: res.product});
		 			$("#newProduct").html(html);
		 		}
		 	})
		}).then(function(){
		 	$.ajax({
		 		method: "get",
		 		url: "http://rap2api.taobao.org/app/mock/117183/blouse_business",
		 		success: function(res){
		 			//console.log(res);
		 			var html = template("pro-templatetwo",{blouse_business: res.product});
		 			$("#product_business").html(html);
		 		}
		 	})
		}).then(function(){
		 	$.ajax({
		 		method: "get",
		 		url: "http://rap2api.taobao.org/app/mock/117183/blouse_business",
		 		success: function(res){
		 			//console.log(res);
		 			var html = template("pro-templatethree",{blouse_business: res.product});
		 			$("#product_leisure").html(html);
		 		}
		 	})
		}).then(function(){
		 	$.ajax({
		 		method: "get",
		 		url: "http://rap2api.taobao.org/app/mock/117183/blouse_newshirt",
		 		success: function(res){
		 			//console.log(res);
		 			var html = template("pro-templatefour",{blouse_newshirt: res.product});
		 			$("#product_gaozhi").html(html);
		 		}
		 	})
		}).then(function(){
		 	$.ajax({
		 		method: "get",
		 		url: "http://rap2api.taobao.org/app/mock/117183/blouse_business",
		 		success: function(res){
		 			//console.log(res);
		 			var html = template("pro-templatefive",{blouse_business: res.product});
		 			$("#product_longshirt").html(html);
		 		}
		 	})
		}).then(function(){
		 	$.ajax({
		 		method: "get",
		 		url: "http://rap2api.taobao.org/app/mock/117183/blouse_business",
		 		success: function(res){
		 			//console.log(res);
		 			var html = template("pro-templatefive",{blouse_business: res.product});
		 			$("#product_longshirtt").html(html);
		 		}
		 	})
		}).then(function(){
		 	$.ajax({
		 		method: "get",
		 		url: "http://rap2api.taobao.org/app/mock/117183/blouse_business",
		 		success: function(res){
		 			//console.log(res);
		 			var html = template("pro-templatefive",{blouse_business: res.product});
		 			$("#product_longshirts").html(html);
		 		}
		 	})
		}).then(function(){
		 	$.ajax({
		 		method: "get",
		 		url: "http://rap2api.taobao.org/app/mock/117183/blouse_business",
		 		success: function(res){
		 			//console.log(res);
		 			var html = template("pro-templatefive",{blouse_business: res.product});
		 			$("#product_sleeveshort").html(html);
		 		}
		 	})
		}).then(function(){
		 	$.ajax({
		 		method: "get",
		 		url: "http://rap2api.taobao.org/app/mock/117183/blouse_business",
		 		success: function(res){
		 			//console.log(res);
		 			var html = template("pro-templatefive",{blouse_business: res.product});
		 			$("#product_sleeveshortt").html(html);
		 		}
		 	})
		}).then(function(){
		 	$.ajax({
		 		method: "get",
		 		url: "http://rap2api.taobao.org/app/mock/117183/blouse_newshirt",
		 		success: function(res){
		 			//console.log(res);
		 			var html = template("pro-templateone",{blouse_newshirt: res.product});
		 			$("#product_discounts").html(html);
		 		}
		 	})
		})
	})
});