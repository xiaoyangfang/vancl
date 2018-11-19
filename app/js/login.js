require(["config"],function(){
 	require(["jquery","tools","login"],function($,tools,login){
		$("#form").submit(function(e){
			var data = {
				"username" : $(".username").val(),
				"password" : $(".password").val()
			};
			console.log(data);
			$.ajax({
				type:"post",
				data: data,
				dataType:"json",
				url:"http://localhost/webpage-project-www/api/vi/login.php",
				async:true,
				success:function(res){
					if(res.code === 1){
						alert("登录成功！");
						
						window.open("http://localhost:1314");
					}else{
						alert("账户或者密码错误！");
					}
				}
			});
			e.preventDefault();
		});
  	})
 })