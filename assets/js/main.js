
$(document).ready(function(){

});


// RECORRIDO DE IMAGENES EN SLIDER AUTOMATICAMENTE
$(document).ready(function(){
	var t = setInterval(function(){
		$("#carrousel ul").animate({marginLeft:0},1000)
      $("#carrousel ul").animate({marginLeft:0},1000,function(){
  			$(this).find("li:last").after($(this).find("li:first"));
  			$(this).css({marginLeft:0});
		  })
	},5000);
});
