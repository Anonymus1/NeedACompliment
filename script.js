$(document).ready(function() {
	$("#main_button").mouseenter(function(){
		$("#main_button").fadeTo("fast",1);
	});
	$("#main_button").mouseleave(function() {
		$("#main_button").fadeTo("slow",0.75);
	});
	$("#main_button").click(function(){
		var compliment = Math.floor(Math.random()*5)+1;
		switch(compliment) {
			case 5: 
			alert("Your toes smell like brown sugar!")
			break;
			case 4:
			alert("I like your outfit!")
			break;
			case 3:
			alert("What a nice smile you have!")
			break;
			case 2:
			alert("You're so kind!")
			break;
			default:
			alert("You're so thoughtful!");
		}
	});
});
