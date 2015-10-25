uniform sampler2D map;

uniform float width;
uniform float height;
uniform float nearClipping, farClipping;

uniform float pointSize;
uniform float zOffset;
uniform float scale;

varying vec2 vUv;
varying float depth;

const float XtoZ = 1.11146; // tan( 1.0144686 / 2.0 ) * 2.0;
const float YtoZ = 0.83359; // tan( 0.7898090 / 2.0 ) * 2.0;

void main() {

  vUv = vec2( position.x / width, position.y / height );

  vec4 color = texture2D( map, vUv );

  // Get the Y component from RGB.
  // It is based on http://en.wikipedia.org/wiki/YUV
  depth = 0.299 * color.r + 0.587* color.g + 0.114 * color.b;

  // Projection code by @kcmic

  float z = depth * scale * (farClipping - nearClipping) + nearClipping;

  vec4 pos = vec4(
    ( position.x / width - 0.5 ) * z * XtoZ,
    ( position.y / height - 0.5 ) * z * YtoZ,
    - z + zOffset,
    1.0);

  gl_PointSize = pointSize;
  gl_Position = projectionMatrix * modelViewMatrix * pos;

}