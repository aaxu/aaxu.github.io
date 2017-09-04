var slideIndex = 1;
var waitTime = 0;
var slides = document.getElementsByClassName("mySlides");
var timer = null;
showDivs(slideIndex);

function initImages() {
	for (i = 1; i < slides.length; i++) {
	        slides[i].style.display = "none"; 
	}
	carousel();
}

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length} ;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slides[slideIndex-1].style.display = "block";
    if (timer != null) {
    	clearTimeout(timer);
    	timer = setTimeout(carousel, 2000)
    }
}

function carousel() {
    var i;
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
    }
    slides[slideIndex-1].style.display = "block"; 
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    timer = setTimeout(carousel, 2000); // Change image every 2 seconds
}