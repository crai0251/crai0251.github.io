window.onload = init;

function init() {

	document.querySelector('.ham').onclick = showHideMobileMenu;
	document.querySelector('#submit').onclick = showformValues;

	$('#form').submit(function (e) {
   		 e.preventDefault();
   		 var form = this;
   		 $(".overlay-container").fadeIn(800, function(){
   		 		showformValues(form);
   		 		$('.overlay-container').delay(400).fadeOut(400);
   		 });
	});

}

function showHideMobileMenu() {

	var mobileNav = document.querySelector('.mobile-nav');

	if(mobileNav.style.display=="block") {
		mobileNav.style.display="none";
	} else {
		mobileNav.style.display="block";
	}
}

function showformValues(form){

	var formValues = $(form).serializeArray(); 
		
	$.each(formValues, function(index, field){


		$("#results").find("."+field.name+"_result").text(field.value);

		if(field.name=="email"){
			$("#results").find("."+field.name+"_result").attr("href", "mailto:"+field.value);
		}
	});				
}
