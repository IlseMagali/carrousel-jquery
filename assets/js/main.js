// $(document).ready(function(){
//   $("#siguiente").click(function(){
//     $("#imagenUno").css("visibility", "none");
//     $("#imagenDos").css("visibility", "visible")
//   });
// });

$(document).ready(function(){
	// Set the interval to be 5 seconds
	var t = setInterval(function(){
		$("#carrousel ul").animate({marginLeft:0},1000)
      $("#carrousel ul").animate({marginLeft:0},1000,function(){
  			$(this).find("li:last").after($(this).find("li:first"));
  			$(this).css({marginLeft:0});
		  })
	},5000);
});
