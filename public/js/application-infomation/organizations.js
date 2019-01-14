
jQuery(document).ready(function($) {
	var ajaxUrl = jQuery('input[name="ajaxUrl"]').val();	
	var regex = /^(.+?)(\d+)$/i;
	
	// console.log(cloneIndex);
	jQuery(".Organizations-submit input[name='not_have']").change(function(){
		var not_have = jQuery('input[name="not_have"]:checked').val();

		if(not_have == "Not Have"){
			$('.organizations_clone').hide();
			$('.clone_organizations_button').hide();
		}
		else{
			$('.organizations_clone').show();
			$('.clone_organizations_button').show();
		}
	});
	jQuery(".clone_organizations_button h6").click(function(){
		var cloneIndex = $(".organizations_clone_detail").length;
		cloneIndex++;
		$(".organizations_clone_detail:last-child").clone().appendTo(".organizations_clone").attr("id", "clonedInput" +  cloneIndex);
		jQuery(".organizations_clone_detail:last-child input[name='organization[]']").val(''); 
		jQuery(".organizations_clone_detail:last-child textarea[name='community_service[]']").val(''); 
		jQuery(".organizations_clone_detail:last-child select[name='frequency_of_participation[]']").val(''); 
		jQuery(".organizations_clone_detail:last-child select[name='total_activity[]']").val(''); 
		
		jQuery(".organizations_clone_detail:last-child span.number_activity").html(cloneIndex); 
		
		jQuery("h6.remove").click(function(){
			jQuery( this ).parent().remove();
		});		
	});
});