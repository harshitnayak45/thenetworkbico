
jQuery(document).ready(function($) {
	var ajaxUrl = jQuery('input[name="ajaxUrl"]').val();
	
	// console.log(cloneIndex);
	jQuery(".Volunteering-submit input[name='not_have']").change(function(){
		var not_have = jQuery('input[name="not_have"]:checked').val();

		if(not_have == "Not Have"){
			$('.volunteering_clone').hide();
			$('.clone_volunteering_button').hide();
		}
		else{
			$('.volunteering_clone').show();
			$('.clone_volunteering_button').show();
		}
	});
	
	jQuery(".clone_volunteering_button h6").click(function(){
		var cloneIndex = $(".volunteering_clone_detail").length;
		cloneIndex++;
		var clone = $(".volunteering_clone_detail:last-child").clone().appendTo(".volunteering_clone").attr("id", "clonedInput" +  cloneIndex);	
		jQuery(".volunteering_clone_detail:last-child textarea[name='community_service[]']").val(''); 
		jQuery(".volunteering_clone_detail:last-child select[name='frequency_of_participation[]']").val(''); 
		jQuery(".volunteering_clone_detail:last-child select[name='total_activity[]']").val(''); 
		
		jQuery(".volunteering_clone_detail:last-child span.number_activity").html(cloneIndex); 
		
		jQuery("h6.remove").click(function(){
			jQuery( this ).parent().remove();
		});
	});
	
	
});