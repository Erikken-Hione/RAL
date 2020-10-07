$(document).ready(function() {
	$('.navigation_burger').click(function(event) {
		$('.navigation_burger, .navigation_menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});