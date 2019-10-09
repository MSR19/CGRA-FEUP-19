/**
 * My Tree Row Patch
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTreeRowPatch extends CGFobject {
	constructor(scene, trunkTexture, treeTopTexture) {
        super(scene);
        this.init(scene, trunkTexture, treeTopTexture);
        this.scene = scene;
    }

	init(scene, trunkTexture, treeTopTexture) {
        //Initializing the objcts
        this.tree1 = new MyTree (this.scene, 2 + (Math.random()*2.5), (1.5/2) + (Math.random()), 3 + (Math.random()*2), 2 + (Math.random()),  trunkTexture, treeTopTexture);
        this.tree2 = new MyTree (this.scene, 2 + (Math.random()*2.5), (1.5/2) + (Math.random()), 3 + (Math.random()*2), 2 + (Math.random()),  trunkTexture, treeTopTexture);
        this.tree3 = new MyTree (this.scene, 2 + (Math.random()*2.5), (1.5/2) + (Math.random()), 3 + (Math.random()*2), 2 + (Math.random()),  trunkTexture, treeTopTexture);
     
        this.tree4 = new MyTree (this.scene, 2 + (Math.random()*2.5), (1.5/2) + (Math.random()), 3 + (Math.random()*2), 2 + (Math.random()),  trunkTexture, treeTopTexture);
        this.tree5 = new MyTree (this.scene, 2 + (Math.random()*2.5), (1.5/2) + (Math.random()), 3 + (Math.random()*2), 2 + (Math.random()),  trunkTexture, treeTopTexture);
        this.tree6 = new MyTree (this.scene, 2 + (Math.random()*2.5), (1.5/2) + (Math.random()), 3 + (Math.random()*2), 2 + (Math.random()),  trunkTexture, treeTopTexture);

        this.trees = [
            this.tree1, this.tree2, this.tree3,
            this.tree4, this.tree5, this.tree6
        ];

        this.treesX = [
            (Math.random()*2), (Math.random()*2), (Math.random()*2),
            (Math.random()*2), (Math.random()*2), (Math.random()*2)
        ];

        this.treesY = [
            (Math.random()*3), (Math.random()*3), (Math.random()*3),
            (Math.random()*3), (Math.random()*3), (Math.random()*3)
        ];       
    }
	display () {
        //Display treeS 
        for (var i = 0; i < 6; i++) {
            //7+7+3.5
            this.scene.pushMatrix();
            this.scene.translate(-17.5 + this.treesX[i] + (i*7), 0, this.treesY[i] );
            this.trees[i].display();
            this.scene.popMatrix();
        }
    }
    
    enableNormalViz() {
        for (var i = 0; i < 6; i++) {
            this.trees[i].enableNormalViz();
        }
    }
    
    disableNormalViz() {
        for (var i = 0; i < 6; i++) {
            this.trees[i].disableNormalViz();
        }
    }   
}

