$(document).ready(function () {

    $(".partner_login").on("click", function () {
        $(".partner_login__login_form").show();
    });

    $(document).on("mouseup", function (e) {
        var partner_container = $(".partner_login");
        var search_results_container = $(".search_results");
        if (!partner_container.is(e.target) && partner_container.has(e.target).length === 0) {
            $(".partner_login__login_form").hide();
        }
        if (!search_results_container.is(e.target) && search_results_container.has(e.target).length === 0) {
            $(".search_results").hide();
        }
    });

    /*$("#top_search_form").on("submit", function (e) {
        e.preventDefault();
        var listing_field = $(".search_results__listing");
        var data = $(".top_search_field__input").val();
        listing_field.empty();
        $.ajax({
            method: "GET",
            url: "https://liquimoly.ru/ajax/search.ajax.php",
            data: {q: data}
        }).done(function (msg) {
			msg	 = msg.replace(/\/images/g, 'http://liquimoly.ru/images');
			msg	 = msg.replace(/\/public_rus/g, 'http://liquimoly.ru/public_rus');
			msg	 = msg.replace(/\/upload/g, 'http://liquimoly.ru/upload');
			msg	 = msg.replace(/\/catalogue_images/g, 'http://liquimoly.ru/catalogue_images');

			console.log(msg);
            $(".search_results__listing").append(msg);
            $(".search_results").show();
        });
    }) */

});



function openbox(id){
    display = document.getElementById(id).style.display;

    if(display=='none'){
       //document.getElementById(id).style.display='block';
		$('#sender-subscribe').fadeIn(1000);
    }else{
		$('#sender-subscribe').fadeOut(1000);
       //document.getElementById(id).style.display='none';
    }
}

var ww = screen.width;

$(document).ready(function() {
    $(".nav li a").each(function() {
        if ($(this).next().length > 0) {
            $(this).addClass("parent");
        };
    })

    $(".toggleMenu").click(function(e) {
        e.preventDefault();
        $(this).toggleClass("active");
        $(".nav").toggle();
    });
    adjustMenu();
    $('select.sort').on('change', function() {
        location.href = $(this).val();
    });



});

$(window).bind('resize orientationchange', function() {
    ww = screen.width;
    adjustMenu();
});

var adjustMenu = function() {
    if (ww < 768) {
        //$(".nav").css("display", "inline-block");



        $(".nav li").unbind('mouseenter mouseleave');
        $(".nav li a.parent").unbind('click').bind('click', function(e) {
            // must be attached to anchor element to prevent bubbling
            e.preventDefault();
            $(this).parent("li").toggleClass("hover");
        });
    } else if (ww >= 768) {
        //$(".toggleMenu").css("display", "none");
        //$(".nav").show();
        $(".nav li").removeClass("hover");
        $(".nav li a").unbind('click');
        $(".nav li").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function() {
            // must be attached to li so that mouseleave is not triggered when hover over submenu
            $(this).toggleClass('hover');
        });
    }
}
