
jQuery(document).ready(function($) {
	
	
	// jQuery(".application-detail-form").click(function(){
	// 	$(this).submit();
	// });
	
	$('.style_input_file_custom').fileinput({
		browseLabel: "Select file",
		showUpload: false,
        showRemove: false,
        showCancel: false,
		msgPlaceholder:'',
	});
});

function validateEmail($email) {
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return emailReg.test( $email );
}
