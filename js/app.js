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
	if ($(document).width() >= 1250) {
		$("#target-fleche-bas").hide();
		$(".div-fleche-haut").hide();
	} else {
		$(".div-fleche-haut").hide();
		$(".div-fleche-bas").hide();
	}
});

$(".fleches-index").hover(function(){
	$("#target-fleche-bas").show();
	$(".div-fleche-haut").show();
	$('html, body').animate({
        scrollTop: $( $(this).parent().attr('href') ).stop(true,true).offset().top
    }, 1500);
});




