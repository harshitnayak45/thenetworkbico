
jQuery(document).ready(function($) {
	var ajaxUrl = jQuery('input[name="ajaxUrl"]').val();
	
	// console.log(cloneIndex);
	
	jQuery(".Education-submit input[name='not_have']").change(function(){
		var not_have = jQuery('input[name="not_have"]:checked').val();

		if(not_have == "Not Have"){
			$('.extracurricular_clone').hide();
			$('.clone_extracurricular_button').hide();
		}
		else{
			$('.extracurricular_clone').show();
			$('.clone_extracurricular_button').show();
		}
	});
	jQuery(".clone_extracurricular_button h6").click(function(){
		var cloneIndex = $(".extracurricular_clone_detail").length;
		cloneIndex++;
		$(".extracurricular_clone").append('<div class="col-md-12 p-0 float-left extracurricular_clone_detail clone_remove"><h6 class="remove float-right">remove</h6><div class="col-md-12 p-0 float-left"><div class="col-md-12 p-0 float-left "><p>Extracurricular <span class="number_activity">' + cloneIndex + '</span> activity</p><textarea rows="4" cols="80" name="extracurricular_activity[]"></textarea></div></div> <div class="col-md-12 p-0 float-left"><div class="col-md-6 p-0 float-left p_r_10"><p>Type of activity</p><select name="type_of_activity[]"><option value="other">other</option><option value="sport">sport</option><option value="club/committee">club/committee</option><option value="school office">school office</option></select></div></div> </div>' );
		jQuery("h6.remove").click(function(){
			jQuery( this ).parent().remove();
		});
	});
	
	
});