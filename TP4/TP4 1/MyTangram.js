/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
	constructor(scene) {
        super(scene);
        this.init(scene);
        this.scene = scene;
    }
	init(scene) {

		this.diamond = new MyDiamond(scene);
        this.triangle = new MyTriangle(scene);
        this.parallelogram = new MyParallelogram(scene);
        this.triangleSmall1 = new MyTriangleSmall(scene);
        this.triangleSmall2 = new MyTriangleSmall(scene);
        this.triangleBig1 = new MyTriangleBig(scene);
        this.triangleBig2 = new MyTriangleBig(scene);


        //Diamond
       this.textureDiamond = new CGFtexture(this.scene, 'images/tangram.png');
       this.materialDiamond = new CGFappearance(this.scene);
       this.materialDiamond.setAmbient(1, 1, 1, 1.0);
       this.materialDiamond.setDiffuse(1, 1, 1, 1.0);
       this.materialDiamond.setSpecular(1, 1, 1, 1.0);
       this.materialDiamond.setShininess(10.0);
       this.materialDiamond.setTexture(this.textureDiamond);
       this.materialDiamond.setTextureWrap('REPEAT', 'REPEAT');

       //Triangle
       this.materialTriangle = new CGFappearance(this.scene);
       this.materialTriangle.setAmbient(1, 0.72, 1, 1.0);
       this.materialTriangle.setDiffuse(1, 0.72, 1, 1.0);
       this.materialTriangle.setSpecular(1, 0.72, 1, 0,8);
       this.materialTriangle.setShininess(10.0);

       //Parallelogram
       this.materialParallelogram = new CGFappearance(this.scene);
       this.materialParallelogram.setAmbient(1, 1, 0, 1.0);
       this.materialParallelogram.setDiffuse(1, 1, 0, 1.0);
       this.materialParallelogram.setSpecular(1, 1, 0, 0.8);
       this.materialParallelogram.setShininess(10.0);

       //Triangle Small 1
       this.materialTriangleSmall1 = new CGFappearance(this.scene);
       this.materialTriangleSmall1.setAmbient(1,0,0,1.0);
       this.materialTriangleSmall1.setDiffuse(1,0,0,1.0);
       this.materialTriangleSmall1.setSpecular(1,0,0,0.8);
       this.materialTriangleSmall1.setShininess(10.0);

       //Triangle Small 2
       this.materialTriangleSmall2 = new CGFappearance(this.scene);
       this.materialTriangleSmall2.setAmbient(0.67, 0.35, 0.67, 1.0);
       this.materialTriangleSmall2.setDiffuse(0.67, 0.35, 0.67, 1.0);
       this.materialTriangleSmall2.setSpecular(0.67, 0.35, 0.67, 1.0);
       this.materialTriangleSmall2.setShininess(10.0);

       //Triangle Big 1
       this.materialTriangleBig1 = new CGFappearance(this.scene);
       this.materialTriangleBig1.setAmbient(1, 0.55, 0, 1.0);
       this.materialTriangleBig1.setDiffuse(1, 0.55, 0, 1.0);
       this.materialTriangleBig1.setSpecular(1, 0.55, 0, 0.8);
       this.materialTriangleBig1.setShininess(10.0);

       //Triangle Big 2
       this.materialTriangleBig2 = new CGFappearance(this.scene);
       this.materialTriangleBig2.setAmbient(0, 0.66, 1, 1.0);
       this.materialTriangleBig2.setDiffuse(0, 0.66, 1, 1.0);
       this.materialTriangleBig2.setSpecular(0, 0.66, 1, 1.0);
       this.materialTriangleBig2.setShininess(10.0);
    }

	display () {

        //if (this.displayDiamond) 
            this.materialDiamond.apply();
            this.scene.pushMatrix();
            this.scene.translate(-1.6, 2.6, 0);
            this.diamond.display();
            this.scene.popMatrix();
        
        //if (this.displayTriangle)
            this.materialDiamond.apply();
            this.scene.pushMatrix();
            this.scene.translate(-0.6, -0.6, 0);
            this.scene.translate(2.40, 0.4, 0);
            this.triangle.display();
            this.scene.popMatrix();
        
        //if (this.displayParallelogram)
            this.materialDiamond.apply();
            this.scene.pushMatrix();
            this.scene.translate(-2, 2, 0);
            this.scene.rotate(Math.PI, 1, 0, 0);
            this.scene.rotate(Math.PI/2, 0, 0, 1);
            this.parallelogram.display();
            this.scene.popMatrix(); 

        //if (this.displayTriangleSmall1)
            this.materialDiamond.apply();
            this.scene.pushMatrix();
            this.scene.translate(-2, -1, 0);
            this.scene.rotate(Math.PI/2, 0, 0, 1);
            this.triangleSmall1.display();  
            this.scene.popMatrix();      

        //if (this.displayTriangleSmall2)
            this.materialDiamond.apply();
            this.scene.pushMatrix();
            this.scene.translate(-0.6, -0.6, 0);
            this.scene.translate(3.8, -0.6, 0);
            this.scene.rotate(-Math.PI, 0, 0, 1);
            this.triangleSmall2.display();  
            this.scene.popMatrix();      

        //if (this.displayTriangleBig1)
            this.materialDiamond.apply();
            this.scene.pushMatrix();
            this.scene.translate(-2, 0, 0);
            this.scene.rotate(-Math.PI/2, 0, 0, 1);
            this.triangleBig1.display();
            this.scene.popMatrix();

        //if (this.displayTriangleBig2)
            this.materialDiamond.apply();
            this.scene.pushMatrix();
            this.scene.translate(-0.6, -0.6, 0);
            this.scene.rotate(-3*Math.PI/4, 0, 0, 1);
            this.triangleBig2.display();
            this.scene.popMatrix();

    }
    
    enableNormalViz() {
        this.diamond.enableNormalViz(); 
        this.triangle.enableNormalViz();
        this.parallelogram.enableNormalViz();
        this.triangleSmall1.enableNormalViz();
        this.triangleSmall2.enableNormalViz();
        this.triangleBig1.enableNormalViz();
        this.triangleBig2.enableNormalViz();
    }
    
    disableNormalViz() {
        this.diamond.disableNormalViz(); 
        this.triangle.disableNormalViz();
        this.parallelogram.disableNormalViz();
        this.triangleSmall1.disableNormalViz();
        this.triangleSmall2.disableNormalViz();
        this.triangleBig1.disableNormalViz();
        this.triangleBig2.disableNormalViz();
    }

    updateBuffers(complexity){ }
        
}

