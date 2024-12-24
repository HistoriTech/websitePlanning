function scrollBanner() {
  var scrollPos;
  var headerText = document.querySelector('.header .header__title');
  scrollPos = window.scrollY;

  if (scrollPos <= 600) {
      headerText.style.transform =  "translateY(" + (-scrollPos/3) +"px" + ")";
      headerText.style.opacity = 1 - (scrollPos/200);
  }
}

window.addEventListener('scroll', scrollBanner);












// Select the image element
const computerOpenBox = document.getElementById('computerOpenBox');

// Set the initial transition speed
computerOpenBox.style.transition = 'opacity 3s ease'; // Slower transition (4 seconds)

// Function to change opacity based on scroll position
function adjustOpacityOnScroll() {
  // Get the scroll position of the page
  const scrollPos = window.scrollY;

  // Set the opacity based on how far the user has scrolled
  if (scrollPos > 300) {
    computerOpenBox.style.opacity = 0.8; // Full opacity
  } else {
    // Return to initial opacity as user scrolls back up
    computerOpenBox.style.opacity = 0.1; // Initial opacity
  }
}

// Listen for the scroll event
window.addEventListener('scroll', adjustOpacityOnScroll);









