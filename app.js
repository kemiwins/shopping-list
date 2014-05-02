$(document).ready(function() {
	$(".add").on("click", function() {
		var value=$.trim($("#items_input").val());
		$("<li>").insertAfter("li:last").append(value);
		if(value == "") {
			$("li:last").hide();	
			alert("Please enter an item!");
		}
		if(value > "") {
			$("li:last").show();	
		}
		$("#items_input").val("");
	})
	$(".list").on("click", "li", function() {
		$(this).toggleClass("selected");	
	})
	$(".remove").mousedown(function(){
		$(".selected").hide("li");
	})
	$(".clear").mousedown(function(){
		$("li").addClass("selected").hide("li");
		$("#items_input").val(""); 
	})
	$("#items_input").keydown(function(event){
		if(event.keyCode == 13) {
			var value=$.trim($("#items_input").val());
			$("<li>").insertAfter("li:last").append(value);
			if(value == "") {
				$("li:last").hide();	
				alert("Please enter an item!");
			}
			if(value > "") {
				$("li:last").show();	
			}
			$("#items_input").val(""); 
		}
	})
});
