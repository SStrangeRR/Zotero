// добавление товара в корзину 
$(document).ready(function(){

	$( '.addtocart' ).click(function( event ) {
	 event.preventDefault( event ); // перехват ссылки на кнопке 
	  
	//alert ('Купиии2');
	var button = $(this) // определим с какйо кнопки пришло событие  
	var id = button.data('idcheck') // ид записи 
	//alert ( id );
	var idval = '#'+id+'_val'// ид 
	var idvalDat = $(idval).val()// данные  
	if (idvalDat < 0) idvalDat = 1;
	var page_url = '/index.php?view=addtocart&goods_id='+id+'&qty='+idvalDat+'&nrf=1';//nrf=1 - чтобы перегрузилась только корзина 
	//alert(page_url);
		
	/// в корзину 	
	$.ajax({ 
		type: 'get',
		cache: false,
		dataType: 'text',
		url: page_url,
		
		  success: function(data) {
			  //alert(page_url);
				$("#cart").hide();
				$("#cart").html(data);
			
				$(document).ready(function(){
						
				});
			
				$("#cart").slideToggle("slow");
				$("#cart").show();
		
		  },
		  error: function(data) {
				alert('Ошибка добавления товара ');
			
		  }
		
		});
		
	});

});


/*
function shopping_cart(id) {
	var idval = '#'+id+'_val'// ид 
	var idvalDat = $(idval).val()// данные  
	if (idvalDat < 0) idvalDat = 1;
	var page_url = 'index.php?view=addtocart&goods_id='+id+'&qty='+idvalDat
	
	//console.log(page_url);
	//alert(idvalDat);
	

	
	$.ajax({ 
	type: 'get',
	cache: false,
	dataType: 'text',
	url: page_url,
	
  success: function(data) {
	  //alert(idvalDat);
    	$("#cart").hide();
    	$("#cart").html(data);
	
		$(document).ready(function(){
				
		});
	
		$("#cart").slideToggle("slow");
		$("#cart").show();

  },
  error: function(data) {
  		alert('Ошибка заказа');
	
  }
  

});



	/*
	$.get('/?view=addtocart&goods_id='+id+'&qty='+idvalDat, null,
	function(data) {
        	$("#cart").hide();
			$("#cart").html(data);
			$(document).ready(function(){
				alert(idvalDat);
			});	
			$("#cart").slideToggle("slow");
			$("#cart").show();

    	}
	);
	*/
	/*
}
*/
////593/shopping_cart/add?id='+id+'&cc=1'
 


 
 
 
 /// управленеи отобращением логотипа  при скроле и ресайзе 
function showlog(){
  	var html = document.documentElement;
	var body = document.body;
	
	var scrollTop = html.scrollTop || body && body.scrollTop || 0;
	scrollTop -= html.clientTop; // в IE7- <html> смещён относительно (0,0)

	var width = $(window).width(); // ширина окна 
	//alert(width);
	
	/*alert( "Текущая прокрутка: " + scrollTop );*/
	//if (scrollTop >= 60 && width > 700) { $(".log").show(); }
	//if (scrollTop < 60 || width < 700) { $(".log").hide(); }
	
	//if (scrollTop >= 60 ) { $(".logotip").show(); }
	//if (scrollTop < 60 ) { $(".logotip").hide(); }
	//alert(width+ '++++');
	
    
}
/*
///при скорле экрана
window.onscroll = function() {
	showlog();
}

 // при изменении размеров экрана
 $(window).on('load resize',showlog);
*/

/// модальное окно Информационное
$('#info').on('show.bs.modal', function (event) {
	//alert('11111');
	var button = $(event.relatedTarget) // определим с какйо кнопки пришло событие  
	// соберём данные с кнопки 
	var idcards = button.data('idcards')// ид клиента   
	var idlist = button.data('idcheck') // ид записи 
	var type = button.data('type')  /// тип запрашиваемых данных 
	var allurl = '../info/' + type + '/' + idcards + '/' + idlist
	   
	// If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
	// Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead. 
	var modal = $(this)
	modal.find('.modal-body').text('Загрузка данных: '+ idlist)
	//console.log("значение", allurl);
	
	$.ajax({
	  url: allurl,             // указываем URL и
	  dataType : "html",       // тип загружаемых данных
	  //timeout : 30,
	  
	  success: function (data, textStatus) { // вешаем свой обработчик на функцию success
		  modal.find('.modal-body').html( data )

	  }, 
	  
	  error : function (data, textStatus) { // вешаем свой обработчик на функцию error 
		  
		   modal.find('.modal-body').text('Не удалось загрузить данные: '+ idlist)
	  } 
  });


  //modal.find('.modal-footer input').val(recipient)
  //modal.find('.modal-body').text('New message to ' + recipient + texts)
})