$(function() {
		alert("Welcome");
	 	alert("This is a fresh project, modification's still ongoing , Enjoy!!!!")
});


$(function() {
	$("#add").on("click",function(){
		var val = $("input").val();
		if(val !=='') {
			var elem = $("<li></li>").text(val);
			$(elem).append("<button class='rem'><i class='fa fa-minus'></i></button>");
			$("#mylist").append(elem);
			$("input").val("");
			$(".rem").on("click",function() {
				$(this).parent().remove();
			});
		}
	});
});