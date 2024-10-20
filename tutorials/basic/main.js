import * as THREE from 'three';

// 1. Create the Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0');

// 2. Add Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000,);
camera.position.z = 5

// 3. Create and add a cube object
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshLambertMaterial(
    {
        color: '#468585',
        emissive: '#468585'
    }
);

const cube = new THREE.Mesh(geometry, material);
scene.add(cube)

// 4. Add light
const light = new THREE.DirectionalLight(0x9CDBA6, 10);
light.position.set(1, 1, 1);
scene.add(light);

// 5. Set up rendering
const render = new THREE.WebGLRenderer();
render.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(render.domElement)

// 6. Animate scene
function animate(){
    requestAnimationFrame(animate);

    cube.rotateX += 0.01;
    cube.rotateY += 0.01;
    render.render(scene, camera);
}

animate();

