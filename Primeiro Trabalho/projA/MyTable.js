/**
 * My Tree Row Patch
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTable extends CGFobject {
	constructor(scene) {
        super(scene);
        this.init(scene);
        this.scene = scene;
    }

	init(scene) {
        this.prismBase1 = new MyPrism (scene, 8);
        this.base1 = new MyPrismBase (scene, 8);
        this.prismBase2 = new MyPrism (scene, 4);
        this.base2 = new MyPrismBase (scene, 4);

        this.cylinder = new MyCylinder (scene, 40);

        this.top = new MyPrism (scene, 5);
        this.topBase1 = new MyPrismBase (scene, 5);
        this.topBase2 = new MyPrismBase (scene, 5);

        //materials
        this.texture = new CGFtexture(scene, 'Images/marmore.jpg');
        this.material = new CGFappearance(scene);
        this.material.setAmbient(1, 1, 1, 1.0);
        this.material.setDiffuse(0.5, 0.5, 0.5, 1.0);
        this.material.setSpecular(1, 1, 1, 1.0);
        this.material.setShininess(10.0);
        this.material.setTexture(this.texture);
        this.material.setTextureWrap('REPEAT','REPEAT');
    }
	display () {
        this.material.apply();
        this.scene.pushMatrix();

        this.prismBase1.display();
        this.scene.translate(0,1,0);
        this.base1.display();

        this.scene.scale(0.80, 0.5, 0.80);
        this.prismBase2.display();
        this.scene.translate(0,1,0);
        this.base2.display();

        this.scene.scale(0.75, 6, 0.75);
        this.cylinder.display();

        this.scene.translate(0,1,0);
        this.scene.scale(3.5, 0.2, 3.5);
        this.top.display();
        this.topBase1.display();
        this.scene.translate(0,1,0);
        this.topBase2.display();

        this.scene.popMatrix();


    }
    
    enableNormalViz() {
        this.prismBase1.enableNormalViz();
        this.prismBase2.enableNormalViz();
        this.base1.enableNormalViz();
        this.base2.enableNormalViz();
        this.top.enableNormalViz();
        this.topBase1.enableNormalViz();
        this.topBase2.enableNormalViz();
    }
    
    disableNormalViz() {
        this.prismBase1.disableNormalViz();
        this.prismBase2.disableNormalViz();
        this.base1.disableNormalViz();
        this.base2.disableNormalViz();
        this.top.disableNormalViz();
        this.topBase1.disableNormalViz();
        this.topBase2.disableNormalViz();
    }   
}

