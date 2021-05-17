import * as THREE from 'three';
import Stats from 'three/examples/jsm/libs/stats.module.js';

let stats;
let width, height, pixelRatio;
let camera, scene, renderer;
let geometry, material, cube;

function setup() {
  width = window.innerWidth;
  height = window.innerHeight;
  pixelRatio = width / height;

  // RENDERER
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);
  document.body.appendChild(renderer.domElement);

  // CAMERA
  camera = new THREE.PerspectiveCamera(75, pixelRatio, 0.1, 1000 );

  // SCENE
  scene = new THREE.Scene();

  // STATS
  stats = new Stats();
  document.body.appendChild( stats.dom );

  // CUBE 
  geometry = new THREE.BoxGeometry();
  material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  cube = new THREE.Mesh( geometry, material );

  camera.position.z = 5;

  scene.add( cube );
}

// ANIMATE ----------------------------------------------------------------------

const animate = () => {
  requestAnimationFrame( animate );

  render();
  stats.update();
}

// RENDER ----------------------------------------------------------------------

const render = () => {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render( scene, camera );
}

setup();
animate();