
/*!
	Mobile-Menu-Slider v1.0
	Original by Selvaganapathy Kaliamurthy: http://selvagk.com
	Get the latest version: https://github.com/selvagk/Mobile-Menu-Slider

 *   @name app.css
  *   @author Selvagk
 *   @version 0.1
 *   @Website :www.selvagk.com
 
**/

/***removes the click delay of 300ms***/
(function($){$.fn.touchMe=function(handler){return $(this).each(function(){$.FastButton($(this)[0],handler);});};$.FastButton=function(element,handler){var startX,startY;var reset=function(){$(element).unbind('touchend');$("body").unbind('touchmove.fastClick');};var onClick=function(event){event.stopPropagation();reset();handler.call(this,event);if(event.type==='touchend'){$.clickbuster.preventGhostClick(startX,startY);}};var onTouchMove=function(event){if(Math.abs(event.originalEvent.touches[0].clientX-startX)>10||Math.abs(event.originalEvent.touches[0].clientY-startY)>10){reset();}};var onTouchStart=function(event){event.stopPropagation();$(element).bind('touchend',onClick);$("body").bind('touchmove.fastClick',onTouchMove);startX=event.originalEvent.touches[0].clientX;startY=event.originalEvent.touches[0].clientY;};$(element).bind({touchstart:onTouchStart,click:onClick});};$.clickbuster={coordinates:[],preventGhostClick:function(x,y){$.clickbuster.coordinates.push(x,y);window.setTimeout($.clickbuster.pop,2500);},pop:function(){$.clickbuster.coordinates.splice(0,2);},onClick:function(event){var x,y,i;for(i=0;i<$.clickbuster.coordinates.length;i+=2){x=$.clickbuster.coordinates[i];y=$.clickbuster.coordinates[i+1];if(Math.abs(event.clientX-x)<25&&Math.abs(event.clientY-y)<25){event.stopPropagation();event.preventDefault();}}}};$(function(){document.addEventListener('click',$.clickbuster.onClick,true);});}(jQuery));



$(function(){
	
	var detectStorage=localStorage.getItem('invoked');
	
	if(! detectStorage){
	   	setTimeout(openMenu,2000);
		setTimeout(closeMenu,5000);	
	}

$('#invokeMenu').touchMe(openMenu);
});

function openMenu(){

if($('#menu').hasClass('menuOpened')){
    $('#main').css({'-webkit-transform': 'translate3d(0%, 0, 0)'});
	$('#menu').css({'-webkit-transform': 'translate3d(100%, 0, 0)'}).removeClass('menuOpened');
}else{
$('#main').css({'-webkit-transform': 'translate3d(-85%, 0, 0)'});
$('#menu').css({'-webkit-transform': 'translate3d(0, 0, 0)',}).addClass('menuOpened');	
}

}


function closeMenu(){
	
	$('#main').css({'-webkit-transform': 'translate3d(0%, 0, 0)'});
	$('#menu').css({'-webkit-transform': 'translate3d(100%, 0, 0)'});
	localStorage.setItem('invoked',true)
	
}

