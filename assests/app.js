
/*!
	Mobile-Menu-Slider v1.0
	Original by Selvaganapathy Kaliamurthy: http://selvagk.com
	Get the latest version: https://github.com/selvagk/Mobile-Menu-Slider

 *   @name app.css
  *   @author Selvagk
 *   @version 0.1
 *   @Website :www.selvagk.com
 
**/

$(function(){
	
	var detectStorage=localStorage.getItem('invoked');
	
	if(! detectStorage){
	   	setTimeout(openMenu,1000);
		setTimeout(closeMenu,3000);	
	}

$('#invokeMenu').on("touchstart",openMenu);

});

function openMenu(){

if($('#menu').hasClass('menuOpened')){
    $('#main').css({'-webkit-transform': 'translate3d(0%, 0, 0)'});
	$('#menu').css({'-webkit-transform': 'translate3d(100%, 0, 0)'}).removeClass('menuOpened');
}else{
$('#main').css({'-webkit-transform': 'translate3d(-85%, 0, 0)'});
$('#menu').css({'-webkit-transform': 'translate3d(15%, 0, 0)',}).addClass('menuOpened');	
}

}


function closeMenu(){
	
	$('#main').css({'-webkit-transform': 'translate3d(0%, 0, 0)'});
	$('#menu').css({'-webkit-transform': 'translate3d(100%, 0, 0)'});
	localStorage.setItem('invoked',true)
	
}

