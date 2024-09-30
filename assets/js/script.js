// Navbar burger button toggle functionality
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  nav.classList.toggle('nav-active');
  burger.classList.toggle('toggle');
});

// Carousel
document.querySelectorAll('.carousel').forEach((carousel, index) => {
    let slideIndex = 0;
    const slides = carousel.querySelectorAll('.carousel-slide');
    const prevButton = carousel.querySelector('.prev');
    const nextButton = carousel.querySelector('.next');
    
    // Function to show the current slide
    function showSlide(index) {
      const container = carousel.querySelector('.carousel-container');
      container.style.transform = `translateX(-${index * 100}%)`;
    }
  
    // Function to move slides
    function moveSlide(n) {
      slideIndex += n;
      if (slideIndex >= slides.length) {
        slideIndex = 0;
      } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
      }
      showSlide(slideIndex);
    }
  
    // Event listeners for buttons
    prevButton.addEventListener('click', () => moveSlide(-1));
    nextButton.addEventListener('click', () => moveSlide(1));
  
    // Show the initial slide
    showSlide(slideIndex);
  });

// Tabs
function showSection(sectionId) {
    // Remove the active class from all tabs and content sections
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => tab.classList.remove('active'));
    contents.forEach(content => content.classList.remove('active'));

    // Add the active class to the clicked tab and corresponding content
    document.querySelector(`[onclick="showSection('${sectionId}')"]`).classList.add('active');
    document.getElementById(sectionId).classList.add('active');
}