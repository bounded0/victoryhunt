document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');
  
    // Toggle the visibility of the navigation links when the burger menu is clicked
    burgerMenu.addEventListener('click', function () {
      navLinks.classList.toggle('show');
    });
  
    // Close the navigation links if a link is clicked (for better usability)
    navLinks.addEventListener('click', function () {
      if (window.innerWidth <= 768) {
        navLinks.classList.remove('show');
      }
    });
  
    // Close the navigation links if the window is resized to more than 768px
    window.addEventListener('resize', function () {
      if (window.innerWidth > 768) {
        navLinks.classList.remove('show');
      }
    });
  });
  let slideIndex = 0;

function showSlides() {
  let i;
  const slides = document.querySelectorAll('.slide');

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = 'block';
  setTimeout(showSlides, 2000); // Change slide every 2 seconds
}

function changeSlide(n) {
  slideIndex += n;
  const slides = document.querySelectorAll('.slide');

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  if (slideIndex < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex - 1].style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function () {
  showSlides(); // Start the slideshow when the page loads
});
  