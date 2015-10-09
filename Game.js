$(document).ready(function() {

	var dx = 4;
	var dy = 4;
	var player = $("#Player");
	var HEIGHT = 600;
	var WIDTH = 800;
	var keys = {};
	var curX;
	var curY;
	var stop;
	var velx;
	var vely;

	window.addEventListener('keydown',function(e) {
		keys [e.which] = true;
		}, true);
	window.addEventListener('keyup',function(e) {
		keys [e.which] = false;
		}, true);

	//First of all do you need to have bullet top or bullet top + 5
	function move(bullet, x, y) {
		bullet.css("top", bullet.position().top - y - 10);
		bullet.css("left", bullet.position().left - x - 10);
			if (bullet.position().top < -2) {
				$(".Bullet").remove();
				clearInterval(stop);
			}
			if (bullet.position().left < -2) {
				$(".Bullet").remove();
				clearInterval(stop);
			}
			if (bullet.position().top > 595) {
				$(".Bullet").remove();
				clearInterval(stop);
			}
			if (bullet.position().left > 795) {
				$(".Bullet").remove();
				clearInterval(stop);
			}
	}

	document.getElementById("Main").addEventListener("click", function(e) {
		curX = e.clientX;
		curY = e.clientY;
		$("#Main").append('<div class = "Bullet"></div>');
		var bullet = $(".Bullet").last();
		$(".Bullet").css('top', player.position().top + 18);
		$(".Bullet").css('left', player.position().left + 18);
		var bt = bullet.position().top + 5;
		var bl = bullet.position().left + 5;
		var bx = bl - curX;
		var by = bt - curY;
		var slope = by/bx;
		var distance = Math.sqrt(((bx-curX)*(bx-curX))+((by-curY)*(by-curY)));
		var xdis = (bx/distance) * 2;
		var ydis = (by/distance) * 2;
		var interval = setInterval(function() {move(bullet, xdis, ydis);}, 10);
	}); 



	function doKeyDown(){
			if (keys[87]) { //Up Arrow
				if (player.position().top - dy > -2){
					player.css('top', player.position().top - dy);
				}
			}
			if (keys[83]){ //Down Arrow 
				if (player.position().top - dy < HEIGHT -51) {
					player.css('top', player.position().top + dy);
				}
			}
			if (keys[65]) { //Left Arroww
				if (player.position().left - dx > -2){
					player.css('left', player.position().left - dx);
				}
			}
			if (keys[68]) { //Right Arrow
				if (player.position().left + dx < WIDTH -40){
					player.css('left', player.position().left + dx);
				}
			}
			setTimeout(doKeyDown, 10);
	}



	doKeyDown();

});