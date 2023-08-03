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
      scrollToTopBtn.style.display = 'flex';
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
  
    // // Create a simple 3D neural network representation
    // const geometry = new THREE.BoxGeometry(3, 3, 3);
    // const material = new THREE.MeshBasicMaterial({ color: 0xd35400 });
    // const neuralNetwork = new THREE.Mesh(geometry, material);
    // scene.add(neuralNetwork);


    const groundGeometry = new THREE.PlaneGeometry(100, 100);
    const groundMaterial = new THREE.MeshPhongMaterial({ color: 0xd35400, side: THREE.DoubleSide });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    // ground.rotation.x = -Math.PI / 2; // Rotate the ground to be horizontal
    scene.add(ground);

    // Add a car model (you can use any 3D model you like)
    const carGeometry = new THREE.BoxGeometry(3, 1, 2);
    const carMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 });
    const car = new THREE.Mesh(carGeometry, carMaterial);
    car.position.set(0, 0.25, 0);
    scene.add(car);


      // Add lighting to the scene
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Ambient light to add overall illumination
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Directional light to simulate sunlight
    directionalLight.position.set(1, 1, 1); // Set the light's direction
    scene.add(ambientLight, directionalLight);

    camera.position.z = 5;
  
    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      // neuralNetwork.rotation.x += 0.01;
      // neuralNetwork.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
  
    animate();


    function updateCarPosition() {
      document.addEventListener("keydown", (event) => {
        const speed = 0.1;
        switch (event.key) {
          case "w":
            car.position.z -= speed;
            break;
          case "a":
            car.position.x -= speed;
            break;
          case "s":
            car.position.z += speed;
            break;
          case "d":
            car.position.x += speed;
            break;
        }
      });
    }
  
    updateCarPosition();
  }
  
  // Call the function to create the 3D machine learning visualization
  createMLVisualization();