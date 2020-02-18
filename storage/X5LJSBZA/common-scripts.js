jQuery(document).ready(function ($) {

    /* prepend menu icon */
    $('#menu-icon').prepend('Navigate Here');

	/* prepend menu icon */
	$('.widget_categories ul li, .widget_archive ul li').prepend('<i class="fas fa-folder"></i>');
	$('.widget_recent_entries ul li').prepend('<i class="far fa-edit"></i>');
	$('.widget_recent_comments ul li').prepend('<i class="far fa-comment-dots"></i>');
    $('.widget_nav_menu ul li').prepend('<i class="fas fa-minus-square"></i>');	
    $('.widget_meta ul li').prepend('<i class="fas fa-wrench"></i>');	
	
    /* toggle nav */
    $("#menu-icon").on("click", function () {
        $("#main-menu").slideToggle();
        $(this).toggleClass("active");
    });

    //Scroll To top
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 100) {
            jQuery('#gototop').css({
                bottom: "160px"
            });
        } else {
            jQuery('#gototop').css({
                bottom: "-100px"
            });
        }
    });
    jQuery('#gototop').click(function () {
        jQuery('html, body').animate({
            scrollTop: '0px'
        }, 1800);
        return false;
    });

    //Menus
    jQuery('#main-nav ul > li > ul, #main-nav ul > li > ul > li > ul, #main-nav ul > li > ul > li > ul> li > ul').parent('li').addClass('parent-list');

    jQuery("#main-nav li").each(function () {
        var $sublist = jQuery(this).find('ul:first');
        jQuery(this).hover(function () {
            $sublist.stop().css({
                overflow: "hidden",
                height: "auto",
                display: "none"
            }).slideDown(600, function () {
                jQuery(this).css({
                    overflow: "visible",
                    height: "auto"
                });
            });
        },

        function () {
            if ($(window).width() >= 1024) {

                $sublist.stop().slideUp(200, function () {
                    jQuery(this).css({
                        overflow: "hidden",
                        display: "none"
                    });
                });
            }
        });
    });



});