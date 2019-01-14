
jQuery(document).ready(function($) {
	var ajaxUrl = jQuery('input[name="ajaxUrl"]').val();	
	
	// console.log(cloneIndex);
	jQuery(".Work-submit input[name='not_have']").change(function(){
		var not_have = jQuery('input[name="not_have"]:checked').val();

		if(not_have == "Not Have"){
			$('.work_clone').hide();
			$('.clone_work_button').hide();
		}
		else{
			$('.work_clone').show();
			$('.clone_work_button').show();
		}
	});
	jQuery(".clone_work_button h6").click(function(){
		var cloneIndex = $(".work_clone_detail").length;
		cloneIndex++;
		$(".work_clone_detail:last-child").clone().appendTo(".work_clone").attr("id", "clonedInput" +  cloneIndex);	
		jQuery(".work_clone_detail:last-child input[name='position[]']").val(''); 
		jQuery(".work_clone_detail:last-child textarea[name='repossibilities[]']").val(''); 
		jQuery(".work_clone_detail:last-child span.number_activity").html(cloneIndex);
		jQuery("h6.remove").click(function(){
			jQuery( this ).parent().remove();
		});
	});
	
	
	
});