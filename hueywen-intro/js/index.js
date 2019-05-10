const options = {
  strings: ["Huey Wen!","a Developer.", "a Dreamer."],
  typeSpeed: 50,
  smartBackspace: true,
  backSpeed: 80,
  loop: true,
  loopCount: Infinity,
  showCursor: true,
  cursorChar: '|',
  startDelay: 0,
  backDelay: 1000
}
   
const typed = new Typed(".type", options)

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}