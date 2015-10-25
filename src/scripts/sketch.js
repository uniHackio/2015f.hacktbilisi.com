var  THREE = require('three')
var container;

var scene, camera, light, renderer;
var geometry, cube, mesh, material;
var mouse, center;
var animationId;
var width, height;
var nearClipping, farClipping, zOffset, scale;
var texture, t;




function conteinerHeight(){
  // window.innerHeight
  return container.offsetHeight;
}
function conteinerWidth(){
  // window.innerWidth
  return container.offsetWidth;
}

function init() {
  t = 0
  container = document.getElementById("main-background");

  camera = new THREE.PerspectiveCamera( 50, conteinerWidth() / conteinerHeight(), 1, 10000 );
  camera.position.set( 0, 0, 500 );

  scene = new THREE.Scene();
  center = new THREE.Vector3();
  center.z = - 1000;

  texture = new THREE.ImageUtils.loadTexture( '/images/tbilisi.jpg' );

  width = 640, height = 480;
  nearClipping = 5000, farClipping = 3500, zOffset = 1500, scale = 1;
  

  geometry = new THREE.Geometry();

  for ( var i = 0, l = width * height; i < l; i ++ ) {

    var vertex = new THREE.Vector3();
    vertex.x = ( i % width );
    vertex.y = Math.floor( i / width );

    geometry.vertices.push( vertex );

  }

  material = new THREE.ShaderMaterial( {

    uniforms: {

      "map": { type: "t", value: texture },
      "width": { type: "f", value: width },
      "height": { type: "f", value: height },
      "nearClipping": { type: "f", value: nearClipping },
      "farClipping": { type: "f", value: farClipping },

      "pointSize": { type: "f", value: 2 },
      "zOffset": { type: "f", value: zOffset },
      "scale": { type: "f", value: scale }

    },
    vertexShader: require('./sketch.vert'),
    fragmentShader: require('./sketch.frag'),
    depthTest: false, depthWrite: false,
    transparent: true

  } );

  mesh = new THREE.ParticleSystem( geometry, material );
  mesh.position.x = 0;
  mesh.position.y = 0;
  scene.add( mesh );


  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio( window.devicePixelRatio );

  renderer.setSize( conteinerWidth(), conteinerHeight() );
  container.appendChild( renderer.domElement );

  mouse = new THREE.Vector3( 0, 0, 1 );

  document.addEventListener( 'mousemove', onDocumentMouseMove, false );
  window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {
  camera.aspect = conteinerWidth() / conteinerHeight();
  camera.updateProjectionMatrix();

  renderer.setSize( conteinerWidth(), conteinerHeight() );

}

function onDocumentMouseMove( event ) {

  mouse.x = ( event.clientX - conteinerWidth() / 2 ) * 0.6;
  mouse.y = ( event.clientY - conteinerHeight() / 2 ) * 0.6;

}

function animate() {

  animationId = requestAnimationFrame( animate );

  render();

}

function render() {
  // var tsin = (1+Math.sin(Date.now()))/2
  camera.position.x += ( mouse.x - camera.position.x ) * 0.05;
  camera.position.y += ( - mouse.y - camera.position.y ) * 0.05;
  t += 0.025
  material.uniforms.scale.value = 1 + Math.sin(t)*0.1
  camera.lookAt( center );

  renderer.render( scene, camera );

}

module.exports ={
  init: init,
  animate: animate
}