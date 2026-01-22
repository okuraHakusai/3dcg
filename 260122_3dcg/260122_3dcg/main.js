import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 3Ｄモデル読み込み
const loader = new GLTFLoader();
loader.load('models/boss.glb', function (gltf) {
    scene.add(gltf.scene);
}, undefined, function (error) {
    console.error(error);
});

// コントローラーセット
const controls = new OrbitControls(camera, renderer.domElement);
controls.autoRotate = true;
controls.update();

// hdri読み込み
// const pmremGenerator = new THREE.PMREMGenerator(renderer);
// const hdriLoader = new RGBELoader()
// hdriLoader.load('hdri/small_empty_room_1_1k.hdr', function (texture) {
//     const envMap = pmremGenerator.fromEquirectangular(texture).texture;
//     texture.exposure = 1;
//     //   scene.environment = envMap //光の影響を受けたい場合はこれも記述
//     scene.background = envMap;
// }, undefined, function (error) {
//     console.log(error)
// });

// カメラの位置変更
camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    // cube.rotation.x += 0.01;
    // cube.rotation.y += 0.01;
    controls.update();
    renderer.render(scene, camera);
}
animate();