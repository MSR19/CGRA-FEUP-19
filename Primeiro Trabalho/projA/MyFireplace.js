/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyFireplace extends CGFobject {
	constructor(scene) {
        super(scene);
        this.init(scene);
        this.scene = scene;
    }

	init(scene, numLogs) {
        //Initializing the objcts
        this.rod = new MyCylinder(scene,20);
        this.top = new MyUnitCubeQuad(scene);
        
        this.textureTrunk = new CGFtexture(this.scene, 'Images/bamboo.jpg');
        this.materialTrunk = new CGFappearance(this.scene);
        this.materialTrunk.setAmbient(1, 1, 1, 1.0);
        this.materialTrunk.setDiffuse(1, 1, 1, 1.0);
        this.materialTrunk.setSpecular(1, 1, 1, 1.0);
        this.materialTrunk.setShininess(10.0);
        this.materialTrunk.setTexture(this.textureTrunk);
        this.materialTrunk.setTextureWrap('REPEAT', 'REPEAT');

        this.materialTop = new CGFappearance(this.scene);
        this.materialTop.setAmbient(0, 0, 0, 1.0);
        this.materialTop.setDiffuse(0, 0, 0, 1.0);
        this.materialTop.setSpecular(0, 0, 0, 1.0);
        this.materialTop.setShininess(20.0);
    }
	display () {
        this.scene.pushMatrix();
        this.scene.scale(0.10,3,0.10);
        this.materialTrunk.apply();
        this.rod.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,3.1,0);
        this.scene.scale(0.25,0.25,0.25);
        this.scene.rotate(Math.PI/3.5,1,0,1);
        this.top.redifeMaterials(this.materialTop);
        this.top.display();
        this.scene.popMatrix();

    }
    
    enableNormalViz() {
        this.rod.enableNormalViz();
        this.top.enableNormalViz();
    }
    
    disableNormalViz() {
        this.rod.disableNormalViz();
        this.top.disableNormalViz();
    }   
}

