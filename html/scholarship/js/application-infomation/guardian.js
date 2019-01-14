
jQuery(document).ready(function($) {
	var ajaxUrl = jQuery('input[name="ajaxUrl"]').val();	
	var regex = /^(.+?)(\d+)$/i;
	
	// console.log(cloneIndex);
	
	jQuery(".clone_guardian_button h3").click(function(){
		var email_address_l = jQuery(".clone_guardian:last-child input[name='email_address_guardian[]']").val(); 
		if(email_address_l == ''){
			alert( "Please, Email Address can not be empty!" );
			return false;
		}
		else{
			if(!validateEmail(email_address_l)){
				alert( "Please, Email Address Not Exits!" );
				return false;
			}
		}
		var cloneIndex = $(".clone_guardian").length;
		cloneIndex++;
		$(".clone_guardian:last-child").clone().appendTo(".clone_guardian_main").attr("id", "clonedInput" +  cloneIndex);	
		jQuery(".clone_guardian:last-child input[name='firstname_guardian[]']").val(''); 
		jQuery(".clone_guardian:last-child input[name='lastname_guardian[]']").val(''); 
		jQuery(".clone_guardian:last-child input[name='phone_cell_guardian[]']").val(''); 
		jQuery(".clone_guardian:last-child input[name='phone_home_guardian[]']").val(''); 
		jQuery(".clone_guardian:last-child input[name='email_address_guardian[]']").val(''); 
		jQuery(".clone_guardian:last-child input[name='relationship[]']").val(''); 
		jQuery("h6.remove").click(function(){
			jQuery( this ).parent().remove();
		});
	});
	
	
});