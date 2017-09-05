var slideIndex = 0;
var slides;
var dots;
var timer;
var slideShowDelay = 5000;

function plusDivs(n) {
  slideIndex += n;
  slideIndex %= slides.length;
  if (slideIndex == -1) {
  	slideIndex += slides.length;
  }
  slides[slideIndex].className = 
      slides[slideIndex].className.replace(" w3-animate-left", "");
  slides[slideIndex].className = 
      slides[slideIndex].className.replace(" w3-animate-right", "");
  if (n > 0) {
    slides[slideIndex].className += " w3-animate-right";
  } else if (n < 0) {
    slides[slideIndex].className += " w3-animate-left";
  }
  showDivs(slideIndex);
}

function currentDiv(n) {
  if (slideIndex == n) {
    slides[slideIndex].className = 
        slides[slideIndex].className.replace(" w3-animate-left", "");
    slides[slideIndex].className = 
        slides[slideIndex].className.replace(" w3-animate-right", "");
  } else if (n < slideIndex) {
    while (n < slideIndex) {
      plusDivs(-1);
    } 
  } else if (n > slideIndex) {
    while (n > slideIndex) {
      plusDivs(1);
    }
  }
  showDivs(slideIndex = n);
}

function initImages() {
  slides = document.getElementsByClassName("mySlides");
  dots = document.getElementsByClassName("demo");
	for (i = 1; i < slides.length; i++) {
	    slides[i].style.display = "none"; 
	}
	currentDiv(0);
}

function showDivs(n) {
  var i;
  for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  slides[slideIndex].style.display = "block";  
  dots[slideIndex].className += " w3-white";
  restartTimer();
}

function carousel() {
	plusDivs(1);
  restartTimer();
}

function restartTimer() {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(carousel, slideShowDelay)
}

function scrollToHash(hashName) { location.hash = "#" + hashName; }