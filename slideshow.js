var slideIndex = -1;
var waitTime = 0;
var slides = document.getElementsByClassName("mySlides");
var timer = null;

// Time it takes for the slideshow to move onto the next image.
var slideShowDelay = 5000;
showDivs(slideIndex);

function initImages() {
	for (i = 1; i < slides.length; i++) {
	        slides[i].style.display = "none"; 
	}
	carousel();
}

function plusDivs(n) {
    slideIndex += n;
    slideIndex %= slides.length;
    if (slideIndex == -1) {
    	slideIndex += slides.length;
    }
    showDivs(slideIndex);
}

function showDivs(n) {
    var i;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slides[slideIndex].style.display = "block";
    if (timer != null) {
    	clearTimeout(timer);
    	timer = setTimeout(carousel, slideShowDelay);
    }
}

function carousel() {
    var i;
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
    }
    slideIndex += 1;
    slideIndex %= slides.length;
    slides[slideIndex].style.display = "block";
    timer = setTimeout(carousel, slideShowDelay);
}