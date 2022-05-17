import * as THREE from '../jsm/three.module.js';
import Stats from '../jsm/stats.module.js';
import { STLLoader } from '../jsm/STLLoader.js';


let container, stats;
let camera, cameraTarget, scene, renderer;

init();
animate();

function init() {

    container = document.createElement( 'div' );
    document.body.appendChild( container );

    camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 1, 15 );
    camera.position.set( 3, 0.15, 3 );

    cameraTarget = new THREE.Vector3( 0, - 0.25, 0 );

    scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xFDFECA );
    scene.fog = new THREE.Fog( 0xFEFFA5, 2, 15 );

    // Ground

    const plane = new THREE.Mesh(
        new THREE.PlaneGeometry( 40, 40 ),
        new THREE.MeshPhongMaterial( { color: 0xFCE74C, specular: 0xFCCA4C } )
    );
    plane.rotation.x = - Math.PI / 2;
    plane.position.y = - 0.5;
    scene.add( plane );

    plane.receiveShadow = true;


    // ASCII file

    const loader = new STLLoader();
    loader.load( './src/Mike_Wazowski.stl', function ( geometry ) {

        const material = new THREE.MeshPhongMaterial( { color: 0x13DB28, specular: 0x111111, shininess: 200 } );
        const mesh = new THREE.Mesh( geometry, material );

        mesh.position.set( 0.10,  -0.5, -0.2 );
        mesh.rotation.set(  - Math.PI / 2, 0, 0 );
        mesh.scale.set( 0.01, 0.01, 0.01 );

        mesh.castShadow = true;
        mesh.receiveShadow = true;

        scene.add( mesh );

    } );
    


    // Lights

    scene.add( new THREE.HemisphereLight( 0x443333, 0x111122 ) );

    addShadowedLight( 1, 1, 1, 0xff6400, 1.35 );
    addShadowedLight( 0.5, 1, - 1, 0xffaa00, 1 );
    // renderer

    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.outputEncoding = THREE.sRGBEncoding;

    renderer.shadowMap.enabled = true;

    container.appendChild( renderer.domElement );

    // stats

    stats = new Stats();
    container.appendChild( stats.dom );

    //

    window.addEventListener( 'resize', onWindowResize );

}

function addShadowedLight( x, y, z, color, intensity ) {

    const directionalLight = new THREE.DirectionalLight( color, intensity );
    directionalLight.position.set( x, y, z );
    scene.add( directionalLight );

    directionalLight.castShadow = true;

    const d = 1;
    directionalLight.shadow.camera.left = - d;
    directionalLight.shadow.camera.right = d;
    directionalLight.shadow.camera.top = d;
    directionalLight.shadow.camera.bottom = - d;

    directionalLight.shadow.camera.near = 1;
    directionalLight.shadow.camera.far = 4;

    directionalLight.shadow.bias = - 0.002;

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

function animate() {

    requestAnimationFrame( animate );

    render();
    stats.update();

}

function render() {

    const timer = Date.now() * 0.0005;

    camera.position.x = Math.cos( timer ) * 3;
    camera.position.z = Math.sin( timer ) * 3;

    camera.lookAt( cameraTarget );

    renderer.render( scene, camera );

}