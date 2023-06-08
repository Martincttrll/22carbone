import * as THREE from "three";
export default function initThree() {
  const container = document.querySelector(".container-right");

  // Créer une scène
  const scene = new THREE.Scene();

  // Créer une caméra
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  // Créer un rendu
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);
  // Créer un groupe
  const group = new THREE.Group();
  scene.add(group);

  // Créer une sphère
  const geometry = new THREE.SphereGeometry(1, 32, 32);
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load("/img/texture.png");
  const material = new THREE.MeshStandardMaterial({
    map: texture,
    roughness: 0.1,
    metalness: 0.8,
  });

  // Créer le matériau avec la texture chromée
  const sphere = new THREE.Mesh(geometry, material);
  group.add(sphere);

  // Positionner la caméra sur la sphère
  const spherePosition = sphere.position;
  camera.position.set(spherePosition.x, spherePosition.y, spherePosition.z + 3);

  const light = new THREE.SpotLight(0xffffff, 2, 0, 15);
  scene.add(light);

  window.addEventListener("mousemove", onMouseMove);

  function onMouseMove(event) {
    // Récupérer la position de la souris dans la fenêtre
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Convertir la position de la souris en coordonnées normalisées
    const normalizedMouseX = (mouseX / window.innerWidth) * 2 - 1;
    const normalizedMouseY = -(mouseY / window.innerHeight) * 2 + 1;

    // Déplacer la sphère en fonction de la position de la souris
    light.position.x = normalizedMouseX * 0.9;
    light.position.y = normalizedMouseY * 0.9;
    light.position.z = 5;
  }
  // Animation de la sphère
  function animate() {
    requestAnimationFrame(animate);
    // Animation de flottement
    const time = performance.now() * 0.001; // Temps écoulé en secondes
    const amplitude = 0.2; // Amplitude du mouvement de flottement
    const frequency = 1.5; // Fréquence du mouvement de flottement

    const offsetY = Math.sin(time * frequency) * amplitude;
    group.position.y = offsetY;

    sphere.rotation.x += 0.003;
    sphere.rotation.y += 0.003;

    renderer.render(scene, camera);
  }
  animate();
}
