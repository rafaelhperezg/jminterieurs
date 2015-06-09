
// _______________code for the slider on Index__________________________
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


// _______________code for the little animation for the text on Index__________________________
$(document).ready(function(){
	if ($(document).width() >= 1250) {
		$("#target-fleche-bas").hide();
		$(".div-fleche-haut").hide();
	} else {
		$(".div-fleche-haut").hide();
		$(".div-fleche-bas").hide();
		$(".content-text-index").addClass("div-before-footer");//This line is necessary to get the footer in the
		 													   //good position on small and medium devices
	}
});

$(".fleches-index").hover(function(){
	$("#target-fleche-bas").show();
	$(".div-fleche-haut").show();
	$('html, body').animate({
        scrollTop: $( $(this).parent().attr('href') ).stop(true,true).offset().top
    }, 1500);
    $(".div-fleche-haut").addClass("div-before-footer");
    $(".div-fleche-bas").removeClass("div-before-footer");
});

// ___________This was a try to get anotrer animation when loading the page
// $(document).ready( function(){
//         $("html").hide();
//         $("html").delay(500).fadeIn();  
//         $(window).unload(function () {
//             $("html").fadeOut();
//         });
//     });



// _______________This piede of code is to hide and fade out the logo Jm interieurs ____________
$(document).ready(function () {
        $('#target-fleche-haut').hide().fadeIn(3000);
         // $('html').hide().fadeIn(1000);
    });








