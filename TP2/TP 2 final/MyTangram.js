/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
	constructor(scene) {
		super(scene);
		this.init(scene);
    }
    
	init(scene) {

		this.diamond = new MyDiamond(scene);
        this.triangle = new MyTriangle(scene);
        this.parallelogram = new MyParallelogram(scene);
        this.triangleSmall1 = new MyTriangleSmall(scene);
        this.triangleSmall2 = new MyTriangleSmall(scene);
        this.triangleBig1 = new MyTriangleBig(scene);
        this.triangleBig2 = new MyTriangleBig(scene);
		
    }
    
	display () {

		//if (this.displayDiamond) 
            this.scene.pushMatrix();
            this.scene.translate(-1.6, 2.6, 0);
            this.diamond.display();
            this.scene.popMatrix();
        
        //if (this.displayTriangle)
            this.scene.pushMatrix();
            this.scene.translate(-0.6, -0.6, 0);
            this.scene.translate(2.40, 0.4, 0);
            this.triangle.display();
            this.scene.popMatrix();
        
        //if (this.displayParallelogram)
            this.scene.pushMatrix();
            this.scene.translate(-2, 2, 0);
            this.scene.rotate(Math.PI, 1, 0, 0);
            this.scene.rotate(Math.PI/2, 0, 0, 1);
            this.parallelogram.display();
            this.scene.popMatrix(); 

		//if (this.displayTriangleSmall1)
            this.scene.pushMatrix();
            this.scene.translate(-2, -1, 0);
            this.scene.rotate(Math.PI/2, 0, 0, 1);
            this.triangleSmall1.display();  
            this.scene.popMatrix();      

        //if (this.displayTriangleSmall2)
            this.scene.pushMatrix();
            this.scene.translate(-0.6, -0.6, 0);
            this.scene.translate(3.8, -0.6, 0);
            this.scene.rotate(-Math.PI, 0, 0, 1);
            this.triangleSmall2.display();  
            this.scene.popMatrix();      

        //if (this.displayTriangleBig1)
            this.scene.pushMatrix();
            this.scene.translate(-2, 0, 0);
            this.scene.rotate(-Math.PI/2, 0, 0, 1);
            this.triangleBig1.display();
            this.scene.popMatrix();

        //if (this.displayTriangleBig2)
            this.scene.pushMatrix();
            this.scene.translate(-0.6, -0.6, 0);
            this.scene.rotate(-3*Math.PI/4, 0, 0, 1);
            this.triangleBig2.display();
            this.scene.popMatrix();

    }
    
}

