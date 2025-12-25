//Import three.js
import * as THREE from "three";

// Create global variables
let renderer, scene, container, camera;

// Calls start function after the content is loaded
window.addEventListener("load", function () {
  start();
});

// Define start function
async function start() {
  // Create renderer and define its size
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Create a container div and append it to the DOM
  container = document.querySelector("#threejsContainer");
  container.appendChild(renderer.domElement);

  // Create scene to add elements inside
  scene = new THREE.Scene();

  // Create a camera
  camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  // Change the camera position to avoid the camera to be inside
  // other objects once everything is positioned at 0,0,0, coordinates by default
  camera.position.z = 5;

  // Create a box
  const geometryCube = new THREE.BoxGeometry(0.5, 0.5, 0.5);
  const materialCube = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometryCube, materialCube);
  cube.position.set(-2, 1.5, 0);
  cube.rotation.set(0, Math.PI / 2, 0);
  scene.add(cube);

  //primitive: Plane
  const geometryPlane = new THREE.PlaneGeometry(0.5, 0.5);
  const materialPlane = new THREE.MeshBasicMaterial({ color: 0x0000ff });
  const plane = new THREE.Mesh(geometryPlane, materialPlane);
  plane.position.set(-1, 1.5, 0);
  scene.add(plane);

  //primitive: Sphere
  const geometrySphere = new THREE.SphereGeometry(0.35, 16, 16);
  const materialSphere = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  const sphere = new THREE.Mesh(geometrySphere, materialSphere);
  sphere.position.set(0, 1.5, 0);
  scene.add(sphere);

  //primitive: Cylinder
  const geometryCylinder = new THREE.CylinderGeometry(0.35, 0.35, 0.75);
  const materialCylinder = new THREE.MeshBasicMaterial({ color: 0xffff00 });
  const cylinder = new THREE.Mesh(geometryCylinder, materialCylinder);
  cylinder.position.set(1, 1.5, 0);
  scene.add(cylinder);

  //primitive: Torus
  const geometryTorus = new THREE.TorusGeometry(0.4, 0.1, 16, 32);
  const materialTorus = new THREE.MeshBasicMaterial({ color: 0xfffff0 });
  const torus = new THREE.Mesh(geometryTorus, materialTorus);
  torus.position.set(2, 1.5, 0);
  scene.add(torus);

  //primitive: Capsule
  const geometryCapsule = new THREE.CapsuleGeometry(0.25, 0.5, 4, 8);
  const materialCapsule = new THREE.MeshBasicMaterial({ color: 0xff00ff });
  const capsule = new THREE.Mesh(geometryCapsule, materialCapsule);
  capsule.position.set(-2, 0, 0);
  scene.add(capsule);

  //primitive: Circle
  const geometryCircle = new THREE.CircleGeometry(0.5, 64);
  const materialCircle = new THREE.MeshBasicMaterial({ color: 0xfcc000 });
  const circle = new THREE.Mesh(geometryCircle, materialCircle);
  circle.position.set(-1, 0, 0);
  scene.add(circle);

  //primitive: Cone
  const geometryCone = new THREE.ConeGeometry(0.5, 1, 32);
  const materialCone = new THREE.MeshBasicMaterial({ color: 0xfccff0 });
  const cone = new THREE.Mesh(geometryCone, materialCone);
  cone.position.set(0, 0, 0);
  scene.add(cone);

  //primitive: Ring
  const geometryRing = new THREE.RingGeometry(0.2, 0.5, 32);
  const materialRing = new THREE.MeshBasicMaterial({ color: 0x0cc000 });
  const ring = new THREE.Mesh(geometryRing, materialRing);
  ring.position.set(1, 0, 0);
  scene.add(ring);

  //primitive: Torus Knot
  const geometryTorusKnot = new THREE.TorusKnotGeometry(0.25, 0.075, 64, 16);
  const materialTorusKnot = new THREE.MeshBasicMaterial({ color: 0xff00cc });
  const torusKnot = new THREE.Mesh(geometryTorusKnot, materialTorusKnot);
  torusKnot.position.set(2, 0, 0);
  scene.add(torusKnot);

  //render the scene with the current camera
  renderer.render(scene, camera);
}
