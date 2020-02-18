$(document).ready(function(){
    
    /* ===Аккордеон=== */
    var openItem = false;
	if(jQuery.cookie("openItem") && jQuery.cookie("openItem") != 'false'){
		openItem = parseInt(jQuery.cookie("openItem"));
	}	
	jQuery("#accordion").accordion({
		active: openItem,
		collapsible: true,
        autoHeight: false,
        header: 'h3'
	});
	jQuery("#accordion h3").click(function(){
		jQuery.cookie("openItem", jQuery("#accordion").accordion("option", "active"));
	});	
	jQuery("#accordion > li").click(function(){
		jQuery.cookie("openItem", null);
        var link = jQuery(this).find('a').attr('href');
        window.location = link;
	});
    /* ===Аккордеон=== */

    /* ===Аккордеон2=== */
    var openItem = false;
	if(jQuery.cookie("openItem") && jQuery.cookie("openItem") != 'false'){
		openItem = parseInt(jQuery.cookie("openItem"));
	}	
	jQuery("#accordion2").accordion({
		active: openItem,
		collapsible: true,
        autoHeight: false,
        header: 'h3'
	});
	jQuery("#accordion2 h3").click(function(){
		jQuery.cookie("openItem", jQuery("#accordion2").accordion("option", "active"));
	});	
	jQuery("#accordion2 > li").click(function(){
		jQuery.cookie("openItem", null);
        var link = jQuery(this).find('a').attr('href');
        window.location = link;
	});
    /* ===Аккордеон2=== */


    /* ===Переключатель вида=== */
    if($.cookie("display") == null){
        $.cookie("display", "grid");
    }
    
    $(".grid_list").click(function(){
        var display = $(this).attr("id"); // получаем значение переключателя вида
        display = (display == "grid") ? "grid" : "list"; // допустимые значения
        if(display == $.cookie("display")){
            // если значение совпадает с кукой - ничего не делаем
            return false;   
        }else{
            // иначе - установим куку с новым значением вида
            $.cookie("display", display);
            window.location = "?" + query;
            return false;
        }
    });
    /* ===Переключатель вида=== */
    
    /* ===Сортировка=== */
    $("#param_order").toggle(
        function(){
            $(".sort-wrap").css({'visibility': 'visible'});
        },
        function(){
            $(".sort-wrap").css({'visibility': 'hidden'});
        }
    );
    /* ===Сортировка=== */
    
    /* ===Авторизация=== */
    $("#auth").click(function(e){
        e.preventDefault();
        var login = $("#login").val();
        var pass = $("#pass").val();
        var auth = $("#auth").val();
        $.ajax({
           url: './',
           type: 'POST',
           data: {auth: auth, login: login, pass: pass},
           success: function(res){
                if(res != 'Поля логин/пароль должны быть заполнены!' && res != 'Логин/пароль введены неверно!'){
                    // если пользователь успешно авторизован
                    $(".authform").hide().fadeIn(500).html(res);
                    // удаляем лишние поля заказа
                    $(".notauth").fadeOut(500);
                    setTimeout(function(){
                        $(".notauth").remove();
                    }, 500);
                }else{
                    // если авторизация неудачна
                    $(".error").remove();
                    $(".authform").append('<div class="error"></div>');
                    $(".error").hide().fadeIn(500).html(res);
                }
           },
           error: function(){
                alert("Error!");
           }
        });
    });
    /* ===Авторизация=== */
    
    /* ===Клавиша ENTER при пересчете=== */
    $(".kolvo").keypress(function(e){
        if(e.which == 13){
            return false;
        }
    });
    /* ===Клавиша ENTER при пересчете=== */
    
    /* ===Пересчет товаров в корзине=== */
    $(".kolvo").each(function(){
       var qty_start = $(this).val(); // кол-во до изменения
       
       $(this).change(function(){
           var qty = $(this).val(); // кол-во перед пересчетом
           var res = confirm("Пересчитать корзину?");
           if(res){
				var atr = $(this).attr("data");
				atr = atr.substr(0);
				
                var id = $(this).attr("id");
                id = id.substr(2);
                if(!parseInt(qty)){
                    qty = qty_start;
                }
				
                // передаем параметры
                window.location = "?view=cart&qty=" + qty + "&id=" + id + "&atr=" + atr;
           }else{
                // если отменен пересчет корзины
                $(this).val(qty_start);
           }
       }); 
    });
    /* ===Пересчет товаров в корзине=== */
    
    /* ===Галерея товаров=== */
        $("a[rel=gallery]").fancybox({
        'transitionIn'	: 'elastic',
        'transitionOut'	: 'elastic',
        'speedIn'       : 500,
        'speedOut'      : 500
    });
    /* ===Галерея товаров=== */
});
