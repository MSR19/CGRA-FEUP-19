/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangleSmall extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			0, 0, 0,	//0
			-1, 0, 0,	//1
			1, 0, 0,	//2
			0, 1, 0,	//3
			0, 0, 0,
			-1, 0, 0,
			1, 0, 0,
			0, 1, 0
		];

		this.normals = [
			0,0,1,
			0,0,1,
			0,0,1,
			0,0,1,
			0,0,-1,
			0,0,-1,
			0,0,-1,
			0,0,-1
		]

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 3,
			3, 1, 0,
			0, 2, 3,
			3, 2, 0
		];
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}

