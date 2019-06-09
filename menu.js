$(document).ready(function(){
	//Обработчик события наведение
	$('.menu_item').mouseover(function(){
		/*Изменение необходимых стилей*/
		$(this).children().css({'display':'block'});
	});
	//Обработчик события увода мыши
	$('.menu_item').mouseout(function(){
		/*Изменение необходимых стилей*/
		$(this).children().css({'display':'none'});
	});
});


//Обработчик клика по кнопке отправки формы
$(document).ready(function(){
	$('.submit').on('click',function(){
		/*Изменение необходимых стилей*/
		$(this).css({'background-color':'#f5f5f5'});
	});
});