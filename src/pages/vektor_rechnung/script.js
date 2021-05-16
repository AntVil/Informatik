let loaded = false;

window.onload = function(){
    loaded = true;
    
    let equations = document.getElementsByClassName("equation");
    for(let i=0;i<equations.length;i++){
        katex.render(equations[i].innerText, equations[i], {
            throwOnError: false
        });
    }

    setup();
}

window.onresize = setup;

function setup(){
    if(loaded){
        beispiel_vektor();
        beispiel_linearkombination();
        beispiel_span();
    }
}

function beispiel_vektor(){
    let can = document.getElementById("beispiel_vektor");
    can.width = can.clientWidth;
    can.height = can.clientWidth;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    let size = can.width * 3/5 / 7;
    line(ctxt, can.width/5, can.height/2, can.width*4/5, can.height/2, "#000000FF", 2, 0, can.width/30);
    line(ctxt, can.width/2, can.height*4/5, can.width/2, can.height/5, "#000000FF", 2, 0, can.width/30);
    line(ctxt, can.width/2, can.height/2, can.width/2 + size, can.height/2 - 2*size, "#FFAA00", 2, 0, can.width/45);
}

function beispiel_linearkombination(){
    let can = document.getElementById("beispiel_linearkombination");
    can.width = can.clientWidth;
    can.height = can.clientWidth;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    let size = can.width * 3/5 / 7;
    line(ctxt, can.width/5, can.height/2, can.width*4/5, can.height/2, "#000000FF", 2, 0, can.width/30);
    line(ctxt, can.width/2, can.height*4/5, can.width/2, can.height/5, "#000000FF", 2, 0, can.width/30);
    
    line(ctxt, can.width/2, can.height/2, can.width/2 + size, can.height/2 - 2*size, "#FFAA00", 2, 0, can.width/45);
    
    line(ctxt, can.width/2, can.height/2, can.width/2 + size/2, can.height/2 + size/2, "#00AAFF", 2, 0, can.width/45);
    line(ctxt, can.width/2 + size/2, can.height/2 + size/2, can.width/2 + size, can.height/2 + size, "#00AAFF", 2, 0, can.width/45, 0, true);

    line(ctxt, can.width/2 + size, can.height/2 + size, can.width/2 + 2*size, can.height/2 - size, "#FFAA00", 2, 0, can.width/45);

    line(ctxt, can.width/2 + size, can.height/2 - 2*size, can.width/2 + size*3/2, can.height/2 - size*3/2, "#00AAFF", 2, 0, can.width/45);
    line(ctxt, can.width/2 + size*3/2, can.height/2 - size*3/2, can.width/2 + 2*size, can.height/2 - size, "#00AAFF", 2, 0, can.width/45, 0, true);

    line(ctxt, can.width/2, can.height/2, can.width/2 + 2*size, can.height/2 - size, "#AA00FF", 2, 0, can.width/45);
}

function beispiel_span(){
    let can = document.getElementById("beispiel_span");
    can.width = can.clientWidth;
    can.height = can.clientWidth;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    let size = can.width * 3/5 / 7;
    line(ctxt, can.width/5, can.height/2, can.width*4/5, can.height/2, "#000000FF", 2, 0, can.width/30);
    line(ctxt, can.width/2, can.height*4/5, can.width/2, can.height/5, "#000000FF", 2, 0, can.width/30);
    
    line(ctxt, can.width/2 - 1.5*size, can.height/2 + 3*size, can.width/2 + 1.5*size, can.height/2 - 3*size, "#AAFF00", 1, 0, 0, 0, true);
    
    line(ctxt, can.width/2, can.height/2, can.width/2 + size, can.height/2 - 2*size, "#FFAA00", 2, 0, can.width/45);
}
