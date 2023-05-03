import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const container = document.getElementById('AreaOne');
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.5, 1000);
camera.position.z = 80;

scene.fog = new THREE.Fog(0x5d0361, 10, 1500);

const renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

// Ajout de l'arrière-plan
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('../image/walpaper.jpg');
const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
const geometry = new THREE.PlaneGeometry(2, 2, 0);
const background = new THREE.Mesh(geometry, material);
background.position.z = -1;
scene.add(background);

// Chargement du modèle GLTF
const loader = new GLTFLoader();
loader.load('models/sd_card_adapter/scene.gltf', function (gltf) {
    scene.add(gltf.scene);
}, undefined, function (error) {
    console.error(error);
});

// Ajout d'un éclairage directionnel
const light = new THREE.DirectionalLight(0xFAF7C8, 20);
light.position.set(10, 1, 10);
scene.add(light);

const lights = new THREE.PointLight( 0xff0000, 10, 100 );
lights.position.set( 50, 50, 50 );
scene.add( lights );

var lightAmb = new THREE.AmbientLight(0x777777);
scene.add(lightAmb);

function animate() {
    requestAnimationFrame( animate );

    scene.rotation.x += 0.01;
    scene.rotation.y += 0.01;

    renderer.render( scene, camera );
}

animate();
