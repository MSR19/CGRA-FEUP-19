/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyParallelogram extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			0, 0, 0,	//0
			1, 0, 0,	//1
			1, 1, 0,	//2
			2, 0, 0,    //3
			2, 1, 0,	//4
			3, 1, 0,	//5
			0, 0, 0,
			1, 0, 0,
			1, 1, 0,
			2, 0, 0,
			2, 1, 0,
			3, 1, 0
		];

		this.normals = [
			0,0,1,
			0,0,1,
			0,0,1,
			0,0,1,
			0,0,1,
			0,0,1,
			0,0,-1,
			0,0,-1,
			0,0,-1,
			0,0,-1,
			0,0,-1,
			0,0,-1
		]

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
			2, 1, 0,
			1, 2, 3,
			3, 2, 1,
			2, 3, 4,
			4, 3, 2,
			3, 4, 5,
			5, 4, 3
		];

		this.texCoords = [
			0.25, 0.75,
			0.75,0.75,
			0.5,1,
			1,1,
			0.25, 0.75,
			0.75,0.75,
			0.5,1,
			1,1
		];

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}

