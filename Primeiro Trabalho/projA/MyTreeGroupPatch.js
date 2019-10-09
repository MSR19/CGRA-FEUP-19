/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTreeGroupPatch extends CGFobject {
	constructor(scene, trunkTexture, treeTopTexture) {
        super(scene);
        this.init(scene, trunkTexture, treeTopTexture);
        this.scene = scene;
    }

	init(scene, trunkTexture, treeTopTexture) {
        //Initializing the objcts
        this.tree00 = new MyTree (this.scene, 2 + (Math.random()*2.5), (1.5/2) + (Math.random()), 3 + (Math.random()*2), 2 + (Math.random()),  trunkTexture, treeTopTexture);
        this.tree01 = new MyTree (this.scene, 2 + (Math.random()*2.5), (1.5/2) + (Math.random()), 3 + (Math.random()*2), 2 + (Math.random()),  trunkTexture, treeTopTexture);
        this.tree02 = new MyTree (this.scene, 2 + (Math.random()*2.5), (1.5/2) + (Math.random()), 3 + (Math.random()*2), 2 + (Math.random()),  trunkTexture, treeTopTexture);
     
        this.tree10 = new MyTree (this.scene, 2 + (Math.random()*2.5), (1.5/2) + (Math.random()), 3 + (Math.random()*2), 2 + (Math.random()),  trunkTexture, treeTopTexture);
        this.tree11 = new MyTree (this.scene, 2 + (Math.random()*2.5), (1.5/2) + (Math.random()), 3 + (Math.random()*2), 2 + (Math.random()),  trunkTexture, treeTopTexture);
        this.tree12 = new MyTree (this.scene, 2 + (Math.random()*2.5), (1.5/2) + (Math.random()), 3 + (Math.random()*2), 2 + (Math.random()),  trunkTexture, treeTopTexture);
     
        this.tree20 = new MyTree (this.scene, 2 + (Math.random()*2.5), (1.5/2) + (Math.random()), 3 + (Math.random()*2), 2 + (Math.random()),  trunkTexture, treeTopTexture);
        this.tree21 = new MyTree (this.scene, 2 + (Math.random()*2.5), (1.5/2) + (Math.random()), 3 + (Math.random()*2), 2 + (Math.random()),  trunkTexture, treeTopTexture);
        this.tree22 = new MyTree (this.scene, 2 + (Math.random()*2.5), (1.5/2) + (Math.random()), 3 + (Math.random()*2), 2 + (Math.random()),  trunkTexture, treeTopTexture);
     
        this.trees = [
            this.tree00, this.tree01, this.tree02,
            this.tree10, this.tree11, this.tree12,
            this.tree20, this.tree21, this.tree22
        ];

        this.treesX = [
            (Math.random()*2), (Math.random()*2), (Math.random()*2),
            (Math.random()*2), (Math.random()*2), (Math.random()*2),
            (Math.random()*2), (Math.random()*2), (Math.random()*2)
        ];

        this.treesY = [
            (Math.random()*2), (Math.random()*2), (Math.random()*2),
            (Math.random()*2), (Math.random()*2), (Math.random()*2),
            (Math.random()*2), (Math.random()*2), (Math.random()*2)
        ];       
    }
	display () {
        //Display treeS 
        for (var i = 0; i < 9; i++) {
            this.scene.pushMatrix();
            this.scene.translate(-7 + this.treesX[i] + ((i/3)*7), 0, -7 + this.treesY[i] + ((i%3)*7));
            this.trees[i].display();
            this.scene.popMatrix();
        }
    }
    
    enableNormalViz() {
        for (var i = 0; i < 9; i++) {
            this.trees[i].enableNormalViz();
        }
    }
    
    disableNormalViz() {
        for (var i = 0; i < 9; i++) {
            this.trees[i].disableNormalViz();
        }
    }   
}

