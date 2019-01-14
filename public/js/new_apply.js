
jQuery(document).ready(function($) {
	
	jQuery(".new-apply a").click(function(){
		$(this).parent().find(".myModal1").show();
	});
	jQuery(".new-apply span.close").click(function(){
		$(".myModal1").hide();
	});
	$(window).click(function() {
		//Hide the menus if visible
		$(".myModal1").hide();
	});

	$('.new-apply a').click(function(event){
		event.stopPropagation();
	});
	$('.modal-content').click(function(event){
		event.stopPropagation();
	});
});

