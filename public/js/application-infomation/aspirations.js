
jQuery(document).ready(function($) {
	// var ajaxUrl = jQuery('input[name="ajaxUrl"]').val();
	// var upload = jQuery('input[name="upload_college"]').val();	
	// console.log(cloneIndex);
	
	jQuery(".clone_aspirations_button h6").click(function(){
		var cloneIndex = $(".main_clone_aspirations_detail").length;
		cloneIndex++;
		$(".main_clone_aspirations").append("<div class='col-md-12 p-0 float-left main_clone_aspirations_detail clone_detail clone_remove'><h6 class='remove float-right'>remove</h6><div class='col-md-12 p-0 float-left  '><div class='col-md-6 p-0 float-left p_r_10'><p>College " +  cloneIndex + "</p><input type='text' name='college[]'  ></div></div> <div  class='score_SAT col-md-12 p-0 float-left file_style_input '><p style='text-align:left;'>College Upload</p><input  id='college_upload' name='college_upload[]' type='file'  class='style_input_file_custom  ' accept='application/pdf,.doc,.xlsx,.xls'></div></div> ");
		jQuery("h6.remove").click(function(){
			jQuery( this ).parent().remove();
		});
		$('.style_input_file_custom').fileinput({
			browseLabel: "Select file",
			showUpload: false,
			showRemove: false,
			showCancel: false,
			msgPlaceholder:'',
		});
	});
});