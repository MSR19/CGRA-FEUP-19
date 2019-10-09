/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTree extends CGFobject {
	constructor(scene, trunkHeight, trunkRadius, treeTopHeight, treeTopRadius, trunkTexture, treeTopTexture) {
        super(scene);
        this.init(scene, trunkTexture, treeTopTexture);

        this.scene = scene;
        this.trunkHeight = trunkHeight;
        this.trunkRadius = trunkRadius;
        this.treeTopHeight = treeTopHeight;
        this.treeTopRadius = treeTopRadius;
    }

	init(scene, trunkTexture, treeTopTexture) {
        //Initializing the objcts
        this.cone = new MyCone(this.scene, 10);
        this.cylinder = new MyCylinder(this.scene, 5);
       
        //Trunk Material
       this.textureTrunk = new CGFtexture(this.scene, trunkTexture);
       this.materialTrunk = new CGFappearance(this.scene);
       this.materialTrunk.setAmbient(1, 1, 1, 1.0);
       this.materialTrunk.setDiffuse(1, 1, 1, 1.0);
       this.materialTrunk.setSpecular(0, 0, 0, 1.0);
       this.materialTrunk.setShininess(10.0);
       this.materialTrunk.setTexture(this.textureTrunk);
       this.materialTrunk.setTextureWrap('REPEAT', 'REPEAT');

       //TreeTop Material
       this.textureTreeTop = new CGFtexture(this.scene, treeTopTexture);
       this.materialTreeTop = new CGFappearance(this.scene);
       this.materialTreeTop.setAmbient(1, 1, 1, 1.0);
       this.materialTreeTop.setDiffuse(1, 1, 1, 1.0);
       this.materialTreeTop.setSpecular(1, 1, 1, 1.0);
       this.materialTreeTop.setShininess(10.0);
       this.materialTreeTop.setTexture(this.textureTreeTop);
       this.materialTreeTop.setTextureWrap('REPEAT','REPEAT');
    }

	display () {

        //Display Trunk/Cylinder
            this.materialTrunk.apply();
            this.scene.pushMatrix();
            this.scene.scale(this.trunkRadius, this.trunkHeight,this.trunkRadius);
            this.cylinder.display();
            this.scene.popMatrix();

        //Display TreeTop/Cone
            this.materialTreeTop.apply();
            this.scene.pushMatrix();
            this.scene.translate(0, this.trunkHeight, 0);
            this.scene.scale(this.treeTopRadius, this.treeTopHeight,this.treeTopRadius);
            this.cone.display();
            this.scene.popMatrix();

    }
    
    enableNormalViz() {
        this.cone.enableNormalViz(); 
        this.cylinder.enableNormalViz();
    }
    
    disableNormalViz() {
        this.cone.disableNormalViz(); 
        this.cylinder.disableNormalViz();
    }   
}

