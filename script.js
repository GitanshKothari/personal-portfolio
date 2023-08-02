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
  

  function createMLVisualization() {
    const mlCanvas = document.getElementById("mlCanvas");
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mlCanvas.clientWidth / mlCanvas.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(mlCanvas.clientWidth, mlCanvas.clientHeight);
    mlCanvas.appendChild(renderer.domElement);
  
    // Create a simple 3D neural network representation
    const geometry = new THREE.BoxGeometry(10, 10, 10);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const neuralNetwork = new THREE.Mesh(geometry, material);
    scene.add(neuralNetwork);
  
    camera.position.z = 5;
  
    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      neuralNetwork.rotation.x += 0.01;
      neuralNetwork.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
  
    animate();
  }
  
  // Call the function to create the 3D machine learning visualization
  createMLVisualization();