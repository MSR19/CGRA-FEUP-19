attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

varying float verticey;

uniform float timeFactor;
uniform float normScale;

void main() {
	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition+vec3(sin(timeFactor)*normScale,1,1), 1.0) ;
	verticey = gl_Position.y;
}

