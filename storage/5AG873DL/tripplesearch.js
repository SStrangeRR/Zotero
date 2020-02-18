jQuery(document).ready(function($){


$('#common .but').click(function(){
	$('.but').show();
	$(this).hide();
	$('.form').hide();
	$('#common .form').show();
$.cookie("ts_button", '#common', {
	expires: 7,
	path: "/"
});
});
$('#yandex .but').click(function(){
	$('.but').show();
	$(this).hide();
	$('.form').hide();
	$('#yandex .form').show();
	$.cookie("ts_button", '#yandex', {
	expires: 7,
	path: "/"
});
});

$('#google .but').click(function(){
	$('.but').show();
	$(this).hide();
	$('.form').hide();
	$('#google .form').show();
$.cookie("ts_button", '#google', {
	expires: 7,
	path: "/"
});
});

});


