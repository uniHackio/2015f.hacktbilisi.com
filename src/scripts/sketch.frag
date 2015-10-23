uniform sampler2D map;

varying vec2 vUv;
varying float depth;

void main() {
  vec4 color = texture2D( map, vUv );
  if (depth > 0.99)
    discard;

  // gl_FragColor = vec4( 0.5, 0.5, 0.5, 0.5 );
  // multiply #b1b8f7
  // #b1b8f7 => vec4(0.694, 0.722, 0.969, 1) 
  // http://renderingpipeline.com/2012/06/photoshop-blendmodi-glsl/
  gl_FragColor = vec4(0.694, 0.722, 0.969, 1)*color;
}