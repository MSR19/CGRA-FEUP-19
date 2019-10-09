/**
 * My Tree Row Patch
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyVoxeHill extends CGFobject {
	constructor(scene, complexity) {
        super(scene);
        this.init(scene, complexity);
        this.scene = scene;
        this.complexity = complexity;
    }

	init(scene, complexity) {
        //Initializing the objcts
        //nivel = 8*nivel de arvores niel 0 = 1 
        this.cubes = [];
        this.cubes.push(new MyUnitCubeQuad(scene));
        for (var j = 1; j <= complexity; j++) {
            for (var i = 0; i != 8*j; i++) {
                 this.cubes.push(new MyUnitCubeQuad(scene));
            } 
        }
    }
	display () {
        var counter = 0;
        
        this.scene.pushMatrix();
        this.scene.translate(0,this.complexity,0);
        this.cubes[counter].display();
        this.scene.popMatrix();

        counter++;

        for (var i = 1; i <= this.complexity; i++) {
            var linha = 3+((i-1)*2);
            for (var j = 0; j != i*8; j++) {
                this.scene.pushMatrix();
                if (j < linha) {
                //primeira linha
                this.scene.translate(i-(j),this.complexity-i,i);
                }
                else if (j < (linha)*2) {
                //segundo linha
                this.scene.translate(i-(j)+linha,this.complexity-i,-i);
                }
                else if (j < (linha)*2+1+(i-1)*2) {
                //primeira coluna
                this.scene.translate(i,this.complexity-i,i-j + (linha)*2 -1);
                }
                else {
                    this.scene.translate(-i,this.complexity-i,i-j + (linha)*2+1+(i-1)*2 -1);  
                }
                //segundo coluna
                this.cubes[counter].display(this.scene);
                this.scene.popMatrix();
                counter++;
                //complxity-i = altura
                // i == distancia do centro 
            }   
        }
    }
    
    enableNormalViz() {
        for (var i = 0; i < this.cubes.length; i++) {
            this.cubes[i].enableNormalViz();
        }
    }
    
    disableNormalViz() {
        for (var i = 0; i < this.cubes.length; i++) {
            this.cubes[i].disableNormalViz();
        }
    }   
}

