var miRender = document.getElementById('miRender');

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, miRender.clientWidth / miRender.clientHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
//renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setSize(miRender.clientWidth, miRender.clientHeight, true);

//document.body.appendChild(renderer.domElement);
miRender.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x8945f9 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
};

animate();
