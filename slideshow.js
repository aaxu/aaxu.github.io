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
  showDivs(slideIndex);
}

function currentDiv(n) {
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
// var slideIndex = -1;
// var waitTime = 0;
// var slides = document.getElementsByClassName("mySlides");
// var timer = null;

// // Time it takes for the slideshow to move onto the next image.
// var slideShowDelay = 5000;
// showDivs(slideIndex);


// function plusDivs(n) {
//     slideIndex += n;
//     slideIndex %= slides.length;
//     if (slideIndex == -1) {
//     	slideIndex += slides.length;
//     }
//     showDivs(slideIndex);
// }

// function showDivs(n) {
//     var i;
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none"; 
//     }
//     var currentSlide = slides[Math.max(0, slideIndex)];
//     if (currentSlide) {
//     	currentSlide.style.display = "block";
//     }
//     if (timer != null) {
//     	clearTimeout(timer);
//     	timer = setTimeout(carousel, slideShowDelay);
//     }
// }
