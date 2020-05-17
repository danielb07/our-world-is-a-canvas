class Pencil {
    constructor(){
        this.path = [];
        this.x1;
        this.y1;
        this.x2;
        this.y2;
        this.x3;
        this.y3;
        this.x4;
        this.y4;
}
    display(){
        var position = [mouseX,mouseY];
        this.path.push(position);
       

        stroke(0,0,0)
        strokeWeight(2)
        // curve(displayWidth/2,displayHeight/2,displayWidth/2+100,displayHeight/2,displayWidth/2+100,displayHeight/4,displayWidth/2,displayHeight/4)
        for( var i=0; i<this.path.length;i++){
            // nice mistake
            // uncomment the next line and comment the one after that and run. See what happens
            // line(this.path[i][0],this.path[i][1],this.path[i+1][0],this.path[i+1][0])
            this.x1 = this.path[i][0];
            this.y1 = this.path[i][1]
            if (this.path[i+2] !== undefined){
                this.x2 = this.path[i+2][0];
            }

            if(this.path[i+2] !== undefined){
                this.y2 = this.path[i+2][1];
            }

            if (this.path[i+4] !== undefined){
                this.x3 = this.path[i+4][0];
            }

            if(this.path[i+4] !== undefined){
                this.y3 = this.path[i+4][1];
            }

            if (this.path[i+6] !== undefined){
                this.x4 = this.path[i+6][0];
            }

            if(this.path[i+6] !== undefined){
            this.y4 = this.path[i+6][1];
            }
            
            curve(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3, this.x4, this.y4);
        }
    }

    penUp(){
        this.path = [];
        this.x1 = undefined;
        this.y1 = undefined;
        this.x2 = undefined;
        this.y2 = undefined;
        this.x3 = undefined;
        this.y3 = undefined;
        this.x4 = undefined;
        this.y4 = undefined;
    }
       
    }

