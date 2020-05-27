class Pencil {
    constructor(){
        this.path = [];
        this.x1;
        this.y1;
        

    }
       
    curve(){
        var position = [mouseX,mouseY];
        this.path.push(position);
        for( var i=0; i<this.path.length;i++){
            database.ref('/').update({
                stroke: this.path
            });
        }
        
    }

    penUp(){
       artWork.push(this.path)
        this.path = [];
        this.x1 = undefined;
        this.y1 = undefined;
        
       
    }
    dot(){
        var position = [mouseX,mouseY]
        dotWork.push(position);
        database.ref('/').update({
            dot: position
        })
    }
    
    
    }

