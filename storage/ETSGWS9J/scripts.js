$('.d_small_result').bind('mousewheel DOMMouseScroll', function(e) {
    var scrollTo = null;
    if (e.type == 'mousewheel') {
        scrollTo = (e.originalEvent.wheelDelta * -1);
    }
    else if (e.type == 'DOMMouseScroll') {
        scrollTo = 40 * e.originalEvent.detail;
    }
    if (scrollTo) {
        e.preventDefault();
        $(this).scrollTop(scrollTo + $(this).scrollTop());
    }
});

function render_filtered_search() {

    var counter = 0;
    $('.search_item').hide();

    $('.clicker_filter').each(function() {
        if ($(this).prop("checked")) {
            var filter = $(this).data("type");
            console.log(filter);
            $('.s_t_'+filter).show();
            counter++;
        }
    });

    console.log("counter "+counter);
    if (counter == 0) {
        $('.search_item').show();
    }
}

function triggerProblems (element, classType) {

    $(element).siblings().removeClass("active");
    $('.problem-link-container').removeClass("no-after");
    $(element).addClass("active");

    $('.problem-class-container').hide();
    $('.problem-link-container').hide();
    $('.problem-class-link').hide();

    $('.problem-link-container[data-vehicle*="' + classType + '"]').each(function() {
        $(this).show();
        $(this).parents('.problem-class-container').show();
        var problemClass = $(this).parents('.problem-class-container').data("problemclass");
        $('.problem-class-link[data-problemclass="' + problemClass + '"]').show();
    });

    $(".problem-class-container:visible").each(function() {
        $(this).find(".problem-link-container:visible").last().addClass("no-after");
    });
}

$( document ).ready(function() {

    if ($(".top_filters").length) {

        $(".problem-class-link").on("click", function() {
            var href = $(this).data("href");
            $('html, body').animate({
                scrollTop: $(href).offset().top
            }, 100);
        });

        var possible_filters = ["car", "truck", "moto"];
        var current_filter_from_hash = window.location.hash.substring(1);

        if ($('.problem-link-container[data-vehicle*="moto"]').length) {
            $(".problem-filter-button.moto").show();
        }

        console.log(current_filter_from_hash);

        if (possible_filters.indexOf(current_filter_from_hash) !== -1) {
            var element = $('.problem-filter-button.'+current_filter_from_hash);
            triggerProblems(element, current_filter_from_hash);
        }

        $(".problem-filter-button").on("click", function(e){
            e.preventDefault();
            var classType = $(this).data("classtoggle");
            window.location.hash = classType;
            triggerProblems(this, classType);

        });

        $('.problem-disable-filters').on("click", function(e){
            e.preventDefault();
            window.location.hash = "all";
            $(this).siblings().removeClass("active");
            $('.problem-link-container').removeClass("no-after");
            $('.problem-class-link').show();
            $('.problem-class-container').show();
            $('.problem-link-container').show();
        })
    }

    if (typeof $.fn.dropit !== 'undefined'){
        $('.volume_menu').dropit({beforeShow: function(){
            $( ".toggle_class" ).removeClass("item_volume_show_toggle");
            $( ".toggle_class" ).addClass( "item_volume_show_toggle_up" );
        }, beforeHide: function(){
            $( ".toggle_class" ).removeClass("item_volume_show_toggle_up");
            $( ".toggle_class" ).addClass( "item_volume_show_toggle" );
        }});
    }

    $('.clicker_filter').click(function(e){
        e.stopPropagation();
        render_filtered_search();
    });

    $('.e_btn').hover(
        function(){ $('.e_btn').attr('src', '/images/btn_enter_sel_156x47.png'); },
        function(){ $('.e_btn').attr('src', '/images/btn_enter_156x47.png'); }
    );
    $('.icon_search').hover(
        function(){ $('.icon_search').attr('src', '/images/i_search_sel_24x24.png'); },
        function(){ $('.icon_search').attr('src', '/images/i_search_24x24.png'); }
    );
    $('.btn_send').hover(
        function(){ $('.btn_send').attr('src', '/images/btn_send_sel_152x42.png'); },
        function(){ $('.btn_send').attr('src', '/images/btn_send_152x42.png'); }
    );
    $('#input_s').keypress(function(e){
        if (e.which == 13){
            if (show_p_search == false) show_s();
            else search();
            return false;
        }
    });
    if (typeof $.fn.loupe !== 'undefined') {
        $('.loupe_target').loupe({
            width: 400, // ширина лупы
            height: 300, // высота лупы
            loupe: 'loupe' // css класс лупы
        });
        $('.loupe_target').data('loupe', false);
    }
});

var show_p_fl = false;

function show_p(){
    if (show_p_fl == true){
        show_p_fl = false;
        $('.p_zona').removeClass('p_zona_on');
        $('.open_login').removeClass('open_login_on');
        $('.cl_zona_pl').hide();
    } else {
        show_p_fl = true;
        $('.open_login').addClass('open_login_on');
        $('.p_zona').addClass('p_zona_on');
        $('.cl_zona_pl').show();
    }
}

var show_p_search = false;

function search(){
    var q = $('#input_s').val();
    if (q == ''){
        alert('Поисковый запрос не задан.');
        return false;
    }
    $('#ajax_search').html('<div align="center"><img src="/images/loader.png" border="0"></div>');
    $('#search_q').html(q.replace(/<\/?[^>]+>/gi, ''));
    $.get('/ajax/search.ajax.php?q='+q, function(data){
        $('#ajax_search').html(data);
    });
}

function show_s(){
    if (search() == false) return false;

    if (show_p_search == true){
        show_p_search = false;
        $('.cl_search').hide();
    } else {
        show_p_search = true;
        $('.cl_search').show();
    }
}

$(document).mouseup(function (e){
    var div = $(".cl_search");
    var div_2 = $(".td_search");
    if (!div.is(e.target) && div.has(e.target).length === 0 && !div_2.is(e.target) && div_2.has(e.target).length === 0) {
        div.hide();
        show_p_search = false;
    }
    var div = $(".cl_zona_pl");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
        $('.p_zona').removeClass('p_zona_on');
        $('.cl_zona_pl').hide();
    }
});

var menu_g_s = 0;
function menu_g_show(){
    if (menu_g_s == 0){
        $('.sub_i_menu').show();
        $('.fl_sub_menu').css('height', 'auto');
        menu_g_s = 1;
    } else {
        $('.fl_sub_menu').css('height', '25');
        $('.sub_i_menu').hide();
        menu_g_s = 0;
    }
}

function old_hide(){
    $('#olddiv').hide();
    $.get("/ajax/oldhide.php?hide=1", function( data ) {});
}



