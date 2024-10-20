import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'; 

const canvas = document.getElementById('canvas');

// 1. Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0');


// 2. Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// 3. Object
const geometry = new THREE.DodecahedronGeometry();
const material = new THREE.MeshLambertMaterial(
    {
        color: '#468585',
        emissive: '#468585'
    }
);
const dodecahedron = new THREE.Mesh(geometry, material);

const boxGeometry = new THREE.BoxGeometry(2, 0.1, 2);
const boxMaterial = new THREE.MeshStandardMaterial(
    {
        color: '#468585',
        emissive: '#468585'
    }
);
const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.y = -1.5

scene.add(box);
scene.add(dodecahedron);

// 4. Lights
const spotLight = new THREE.SpotLight(0x006769, 100);
spotLight.position.set(1, 1, 1);
scene.add(spotLight);
// const light = new THREE.DirectionalLight(0x9CDBA6, 10);
// light.position.set(1, 1, 1);
// scene.add(light);

// 5. renderer
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// 6. Orbit Controls allows view options
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableZoom = true;
controls.enablePan = true

// 7. Animations

function animate(){
    requestAnimationFrame(animate);

    dodecahedron.rotation.x += 0.01;
    dodecahedron.rotation.y += 0.01;

    box.rotation.y += 0.005;

    renderer.render(scene, camera);
}
animate();

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight)
});