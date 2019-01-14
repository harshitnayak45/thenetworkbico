
jQuery(document).ready(function($) {
	
	
	$('.form-registration-login p span').on('click', function () {
		if ($('input[name="password_l"]').attr('type') == 'text' ) {
			$('input[name="password_l"]').attr('type', 'password'); 
			$(this).html('Show'); 
		} else {
			$('input[name="password_l"]').attr('type', 'text'); 
			$(this).html('Hide'); 
		}
		
	});
});

