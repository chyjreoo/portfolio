$(document).ready(function(){

// header change
	$(window).on('scroll',function(){
		var scrollDistance = $(window).scrollTop();
		var $header = $('.js-header');

		if (scrollDistance > 80) {
			$header.addClass('header--changed');
		}
		else {
			$header.removeClass('header--changed')
		}
	})

// tooltip
	var tooltiptag1 = document.getElementById('tooltiptag1');
	var tooltiptag2 = document.getElementById('tooltiptag2');
	var tooltiptag3 = document.getElementById('tooltiptag3');
	window.onmousemove = function(e){
		var x = e.clientX,
			y = e.clientY;
		tooltiptag1.style.top = (y + 10) + 'px';
		tooltiptag1.style.left = (x) + 'px';
		tooltiptag2.style.top = (y + 10) + 'px';
		tooltiptag2.style.left = (x) + 'px';
		tooltiptag3.style.top = (y + 10) + 'px';
		tooltiptag3.style.left = (x) + 'px';
	}

// rellax initiallization
	 var rellax = new Rellax('.rellax', {
	    center:true
	 });

// wow.js initialliaztion
	new WOW().init();

})