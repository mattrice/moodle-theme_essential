$(document).ready(function(){

    var top = 40;
    if ($(".navbar-inner")[0]) {
        top = $(".navbar-inner").first().offset().top + $(".navbar-inner").first().height();
    }
 
    //floating quiz_timer
    $('#mod_quiz_navblock div#quiz-timer')
	.addClass('block')
	.css({
		'top':  top,
		'position': 'fixed', 
		'z-index': '5000'});
});
