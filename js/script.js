let next = document.getElementById('button-next');
let back = document.getElementById('button-back');

let move = document.getElementById('review-slider-move-content');

let currentSlide = 0;

next.onclick = function() {
	currentSlide++;
	if (currentSlide > 2) {
		currentSlide = 0;
	}
	if (currentSlide < 0) {
		currentSlide = 2;
	}
	move.style.right = currentSlide * 100 + '%';
}
back.onclick = function() {
	currentSlide--;
	if (currentSlide > 2) {
		currentSlide = 0;
	}
	if (currentSlide < 0) {
		currentSlide = 2;
	}
	move.style.right = currentSlide * 100 + '%';
}