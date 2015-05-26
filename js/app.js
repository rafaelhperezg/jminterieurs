$(document).ready(function(){
	$('#s4').cycle({ 
	    fx:      'scrollUp', 
	    speed:    2000, 
	    timeout:  1000,
	    pause:  1  
	});

	$(window).resize(function(){
		$('#s4').css('height', ($('#s4').width() * 0.75));
	});
	$('#s4').css('height', ($('#s4').width() * 0.75));
});


// Possible effects:
// blindX
// blindY
// blindZ
// cover
// curtainX
// curtainY
// fade
// fadeZoom
// growX
// growY
// scrollUp
// scrollDown
// scrollLeft
// scrollRight
// scrollHorz
// scrollVert
// shuffle
// slideX
// slideY
// toss
// turnUp
// turnDown
// turnLeft
// turnRight
// uncover
// wipe
// zoom

$(document).ready(function(){
	$("#prueba-bas-page").hide()
});

$(".fleche-bas-index").hover(function(){
	$("#prueba-bas-page").show();
	$('html, body').animate({
        scrollTop: $("#prueba-bas-page").offset().top
    }, 5000);
});












