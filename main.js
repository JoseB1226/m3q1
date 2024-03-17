
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 5, 4.2);
camera.lookAt(0, 2, 0); // Look at the origin point

scene.background = new THREE.Color(0xa6c6f7);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const light = new THREE.AmbientLight( 0xffffff, 3); // soft white light
scene.add( light );

const floorTexture = new THREE.TextureLoader().load( 'assets/textures/floorx.jpg');
const floorMaterial1 = new THREE.MeshStandardMaterial({map: floorTexture});
const floorGeometry = new THREE.BoxGeometry(10, 10, 10, 10);
//const floorMaterial = new THREE.MeshStandardMaterial({ color: 0xffc0cb, side: THREE.DoubleSide, wireframe: false });
const floor = new THREE.Mesh(floorGeometry, floorMaterial1);
floor.position.set(0, -5.5, 0);
scene.add(floor);

const wallTexture = new THREE.TextureLoader().load( 'assets/textures/wallx.jpg');
const wallMaterial1 = new THREE.MeshStandardMaterial({map: wallTexture});
const wallGeometry = new THREE.BoxGeometry(10, 10, 0.1);
//const wallMaterial1 = new THREE.MeshStandardMaterial({ color: 0xfff5e1 });
const wall1 = new THREE.Mesh(wallGeometry, wallMaterial1);
wall1.position.set(0, -1, -5);
scene.add(wall1);

const wallTexture2 = new THREE.TextureLoader().load( 'assets/textures/wallx.jpg');
const wallMaterial2 = new THREE.MeshStandardMaterial({map: wallTexture});
//const wallMaterial2 = new THREE.MeshStandardMaterial({ color: 0xffebc1 });
const wall2 = new THREE.Mesh(wallGeometry, wallMaterial2);
wall2.position.set(5, -1, 0);
wall2.rotation.y = Math.PI / 2;
scene.add(wall2);

const wallTexture3 = new THREE.TextureLoader().load( 'assets/textures/wallx.jpg');
const wallMaterial3 = new THREE.MeshStandardMaterial({map: wallTexture});
//const wallMaterial3 = new THREE.MeshStandardMaterial({ color: 0xffd700 });
const wall3 = new THREE.Mesh(wallGeometry, wallMaterial3);
wall3.position.set(0, -1, 5);
scene.add(wall3);

const wallTexture4 = new THREE.TextureLoader().load( 'assets/textures/wallx.jpg');
const wallMaterial4 = new THREE.MeshStandardMaterial({map: wallTexture});
//const wallMaterial4 = new THREE.MeshStandardMaterial({ color: 0xffe4b4 });
const wall4 = new THREE.Mesh(wallGeometry, wallMaterial4);
wall4.position.set(-5, -1, 0);
wall4.rotation.y = Math.PI / 2;
scene.add(wall4);

const windowFrameGeometry = new THREE.BoxGeometry(0.1, 1, 1);
const windowFrameMaterial = new THREE.MeshBasicMaterial({ color: 0x87cefa });
const windowFrame = new THREE.Mesh(windowFrameGeometry, windowFrameMaterial);
windowFrame.position.set(-4.99, 2, 0);
scene.add(windowFrame);


const glassGeometry = new THREE.PlaneGeometry(0.09, 0.98);
const glassMaterial = new THREE.MeshStandardMaterial({ color: 0xadd8e6, transparent: true, opacity: 0.7 });
const glass1 = new THREE.Mesh(glassGeometry, glassMaterial);
glass1.position.set(-4.95, 2, 0.5);
scene.add(glass1);

const glass2 = new THREE.Mesh(glassGeometry, glassMaterial);
glass2.position.set(-4.95, 2, 0);
scene.add(glass2);

const glass3 = new THREE.Mesh(glassGeometry, glassMaterial);
glass3.position.set(-4.95, 2, -0.5);
scene.add(glass3);


const sillGeometry = new THREE.BoxGeometry(0.1, 0.05, 1);
const sillMaterial = new THREE.MeshBasicMaterial({ color: 0x663300 });
const sill = new THREE.Mesh(sillGeometry, sillMaterial);
sill.position.set(-4.95, 1.975, 0);
scene.add(sill);


const vaseGeometry = new THREE.CylinderGeometry(0.2, 0.15, 0.5, 16);
const vaseMaterial = new THREE.MeshBasicMaterial({ color: 0x228B22 }); 
const vase = new THREE.Mesh(vaseGeometry, vaseMaterial);
vase.position.set(-4.7, 0.1, -1);
scene.add(vase);


const directionalLight = new THREE.DirectionalLight( 0x663300, 3 );
scene.add( directionalLight );

const wood = new THREE.TextureLoader().load( 'assets/textures/woodx.jpg');
const material = new THREE.MeshStandardMaterial({map: wood});
var geometry = new THREE.BoxGeometry(0.9, 8, 0.5); 
//var material = new THREE.MeshPhongMaterial({ color: 0x663300}); 
var bar = new THREE.Mesh(geometry, material);
bar.position.set(0, -1, -5); 
scene.add(bar);

const wood1 = new THREE.TextureLoader().load( 'assets/textures/woodx.jpg');
const horizontalMaterial = new THREE.MeshStandardMaterial({map: wood1});
var horizontalGeometry = new THREE.BoxGeometry(3.4, -1, 0.1); 
//var horizontalMaterial = new THREE.MeshPhongMaterial({ color: 0x663300}); 
var horizontalBar = new THREE.Mesh(horizontalGeometry, horizontalMaterial);
horizontalBar.position.set(0, 2, -4.5); 
scene.add(horizontalBar);



const light2 = new THREE.PointLight( 0xffffff, 10, 100 );
light.position.set( 50, 50, 50 );
scene.add( light2 );


const chair1 = new THREE.TextureLoader().load( 'assets/textures/chairx.jpg');
const boxMaterial = new THREE.MeshStandardMaterial({map: wood1});
var boxGeometry = new THREE.BoxGeometry(2.5, 1, 1); 
//var boxMaterial = new THREE.MeshLambertMaterial({ color: 0x663600 }); 
var box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.set(2.5, 0, -3); 
scene.add(box);


const chair2 = new THREE.TextureLoader().load( 'assets/textures/chairx.jpg');
const boxMaterial1 = new THREE.MeshStandardMaterial({map: wood1});
var boxGeometry1 = new THREE.BoxGeometry(2.5, 1, 1); 
//var boxMaterial1 = new THREE.MeshLambertMaterial({ color:  0x663600}); 
var box1 = new THREE.Mesh(boxGeometry1, boxMaterial1);
box1.position.set(2.5, 0, -1); 
scene.add(box1);

const chair3 = new THREE.TextureLoader().load( 'assets/textures/chairx.jpg');
const boxMaterial2 = new THREE.MeshStandardMaterial({map: wood1});
var boxGeometry2 = new THREE.BoxGeometry(2.5, 1, 1); 
//var boxMaterial2 = new THREE.MeshLambertMaterial({ color:  0x663600}); 
var box2 = new THREE.Mesh(boxGeometry2, boxMaterial3);
box2.position.set(2.5, 0, 1.1); 
scene.add(box2);

var boxGeometry3 = new THREE.BoxGeometry(2.5, 1, 1); 
var boxMaterial3 = new THREE.MeshLambertMaterial({ color:  0x663600}); 
var box3 = new THREE.Mesh(boxGeometry3, boxMaterial3);
box3.position.set(-2, 0, 1.1); 
scene.add(box3);

var boxGeometry4 = new THREE.BoxGeometry(2.5, 1, 1); 
var boxMaterial4 = new THREE.MeshLambertMaterial({ color:  0x663600}); 
var box4 = new THREE.Mesh(boxGeometry3, boxMaterial3);
box4.position.set(-2, 0, -1); 
scene.add(box4);

var boxGeometry5 = new THREE.BoxGeometry(2.5, 1, 1); 
var boxMaterial5 = new THREE.MeshLambertMaterial({ color:  0x663600});
var box5 = new THREE.Mesh(boxGeometry5, boxMaterial5);
box5.position.set(-2, 0, -3); 
scene.add(box5);


const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};

animate();
