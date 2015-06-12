$(document).ready(function(){

	//about button show more/less
	$(".about_buttonD").click(function(){
		$(".about").animate({height: '40vh'});
		$(".about section").slideDown();
	});
	$(".about_buttonU").click(function(){
		$(".about").animate({height: '10vh'});
		$(".about section").slideUp(500);
	});
	//work button show more/less
	$(".works_buttonD").click(function(){
		$(".works").animate({height: '40vh'});
		$(".works section").slideDown();
	});
	$(".works_buttonU").click(function(){
		$(".works").animate({height: '10vh'});
		$(".works section").slideUp(500);
	});
	//resume button show more/less
	$(".resume_buttonD").click(function(){
		$(".resume").animate({height: '40vh'});
		$(".resume section").slideDown();
	});
	$(".resume_buttonU").click(function(){
		$(".resume").animate({height: '10vh'});
		$(".resume section").slideUp(500);
	});
});