// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      const headerOffset = 60;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
      });
      // Toggle navigation menu for mobile
      document.querySelector('nav').classList.remove('show');
    });
  });
  
  // Toggle navigation menu for mobile
  document.querySelector('.menu-toggle').addEventListener('click', function () {
    document.querySelector('nav').classList.toggle('show');
  });
  
  
  // Scroll to top button functionality
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  window.addEventListener('scroll', () => {
    if (window.scrollY >= 300) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  });
  

  const projectsContainer = document.querySelector(".projects-container");

// Function to adjust the carousel position based on mouse position
    function handleMouseMove(event) {
    const carouselWidth = projectsContainer.offsetWidth;
    const mouseX = event.clientX - projectsContainer.getBoundingClientRect().left;
    const percent = (mouseX / carouselWidth - 0.5) * 2;
    const translateX = -200 * percent; // Adjust this value to control the visible area
    projectsContainer.style.transform = `translateX(${translateX}px)`;
    }

    // Attach the mousemove event listener to the projects container
    projectsContainer.addEventListener("mousemove", handleMouseMove);

    // Reset the carousel position when the mouse leaves the container
    projectsContainer.addEventListener("mouseleave", () => {
    projectsContainer.style.transform = "translateX(0)"; // Reset the carousel position to the initial state
    });