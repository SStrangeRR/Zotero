/**
 * @author mad@Max
 * VSQ - Spoiler v1.0.5
 */
$(document).ready(function() {
  
$( ".spoiler" ).click(function() {
	$(this).children("div").toggle();
	
	if ( $(this).find("h2").hasClass("vsqminus") ) {
	$(this).find("h2").removeClass( "vsqminus" );
	}
	else
	{
	$(this).find("h2").addClass( "vsqminus" );
	}
	
});
});
