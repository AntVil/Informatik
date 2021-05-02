let canrt = {
    elements: [],
    render: function(sourceCode, canvas){
        let setup = "";
        let loop = "";

        let element = {
            can: canvas,
            setup: setup,
            loop: loop
        }

        this.exec(element.setup);
        this.elements.push(element);
    },
    loop: function(){
        for(let i=0;i<this.elements.length;i++){
            this.elements[i]
        }
    },
    exec: function(sourceCode, element){

    }
}

/*
x = 
box[style:rounded, fill:#000000, color:#000000] (x, y, width, height);
line[color: ] (x1, y1, x2, y2);
circ[fill:#000000, color:#000000] (x, y, r);
text[font-size: 10, color:#000000] ("", x, y);
*/
