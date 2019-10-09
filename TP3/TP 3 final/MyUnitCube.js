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
			0, 0, 0,
			0, 0, 0,
			0, 0, 1,	//1 == 3
			0, 0, 1,
			0, 0, 1,
			0, 1, 0,	//2 == 6
			0, 1, 0,
			0, 1, 0,
			0, 1, 1,	//3 == 9
			0, 1, 1,
			0, 1, 1,
			1, 0, 0,	//4 == 12
			1, 0, 0,
			1, 0, 0,
			1, 0, 1,	//5 == 15
			1, 0, 1,
			1, 0, 1,
			1, 1, 0,	//6 == 18
			1, 1, 0,
			1, 1, 0,
			1, 1, 1,	//7 == 21
			1, 1, 1,
			1, 1, 1
			//primeira face {0,1,2,3}
			//segunda face  {0,1,4,5}
			//terceira face {2,3,6,7}
			//quarta face	{4,5,6,7}
			//quinta face 	{0,2,4,6}
			//sexta face	{1,3,5,7}
		];

		this.normals = [
			-1,0,0,
			0,-1,0,
			0,0,-1,	//0
			//0,0,0

			-1,0,0,
			0,-1,0,
			0,0,1,	//1
			//0,0,1

			-1,0,0,
			0,1,0,
			0,0,-1,	//2
			//0,1,0

			-1,0,0,
			0,1,0,
			0,0,1,	//3
			//0,1,1

			1,0,0,
			0,-1,0,
			0,0,-1,	//4
			//1,0,0

			1,0,0,
			0,-1,0,
			0,0,1, //5
			//1,0,1

			1,0,0,
			0,1,0,
			0,0,-1,	//6
			//1,1,0

			1,0,0,
			0,1,0,
			0,0,1	//7
			//1,1,1
		]


		//Counter-clockwise reference of vertices
		this.indices = [
			0, 3, 6,
			6, 3, 0,
			3, 6, 9,
			9, 6, 3,	//primeira face
			0, 3, 12,
			12, 3, 0,
			3, 12, 15,
			15, 12, 3,	//segunda face
			6, 9, 18,
			18, 9, 6,
			9, 18, 21,
			21, 18, 9,	//terceira face
			12, 15, 18,
			18, 15, 12,
			15, 18, 21,
			21, 18, 15,	//quarta face
			0, 6, 12,
			12, 6, 0,
			6, 12, 18,
			18, 12, 6,	//quinta face
			3, 9, 15,
			15, 9, 3,
			9, 15, 21,
			21, 15, 9 	//sexta face
		];
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}

	updateBuffers(complexity) { }

}

