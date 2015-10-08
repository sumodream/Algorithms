$(document).ready(function(){
	var $cr = $("#cr");
	var cr = $cr[0];
	$cr.click(function() {
		/* Act on the event */
		if(cr.checked){
			alert("感谢你的支持!你可以继续操作!");
		}
	});
});

$(document).jQuery(document).ready(function($) {
	var $cr = $("#cr");
	$cr.click(function(event) {
		if($cr.is(":checked")){
			alert("感谢你的支持!你可以继续操作!");
		}
	});
});