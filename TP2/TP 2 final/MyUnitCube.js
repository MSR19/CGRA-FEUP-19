/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			0, 0, 0,	//0
			0, 0, 1,	//1
			0, 1, 0,	//2
			0, 1, 1,	//3
			1, 0, 0,	//4
			1, 0, 1,	//5
			1, 1, 0,	//6
			1, 1, 1,	//7
			//primeira face {0,1,2,3}
			//segunda face  {0,1,4,5}
			//terceira face {2,3,6,7}
			//quarta face	{4,5,6,7}
			//quinta face 	{0,2,4,6}
			//sexta face	{1,3,5,7}
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
			2, 1, 0,
			1, 2, 3,
			3, 2, 1,	//primeira face
			0, 1, 4,
			4, 1, 0,
			1, 4, 5,
			5, 4, 1,	//segunda face
			2, 3, 6,
			6, 3, 2,
			3, 6, 7,
			7, 6, 3,	//terceira face
			4, 5, 6,
			6, 5, 4,
			5, 6, 7,
			7, 6, 5,	//quarta face
			0, 2, 4,
			4, 2, 0,
			2, 4, 6,
			6, 4, 1,	//quinta face
			1, 3, 5,
			5, 3, 1,
			3, 5, 7,
			7, 5, 3 	//sexta face
		];
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}
}

