window.onload = function(){
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
    beispiel_vektor();
    beispiel_linearkombination();
    beispiel_span();
}

function beispiel_vektor(){
    let can = document.getElementById("beispiel_vektor");
    can.width = can.clientWidth;
    can.height = can.clientWidth;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    line(ctxt, can.width/5, can.height/2, can.width*4/5, can.height/2, "#000000FF", 2, 0, can.width/30);
    line(ctxt, can.width/2, can.height*4/5, can.width/2, can.height/5, "#000000FF", 2, 0, can.width/30);
    
}

function beispiel_linearkombination(){
    let can = document.getElementById("beispiel_linearkombination");
    can.width = can.clientWidth;
    can.height = can.clientWidth;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    line(ctxt, can.width/5, can.height/2, can.width*4/5, can.height/2, "#000000FF", 2, 0, can.width/30);
    line(ctxt, can.width/2, can.height*4/5, can.width/2, can.height/5, "#000000FF", 2, 0, can.width/30);
    
}

function beispiel_span(){
    let can = document.getElementById("beispiel_span");
    can.width = can.clientWidth;
    can.height = can.clientWidth;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    line(ctxt, can.width/5, can.height/2, can.width*4/5, can.height/2, "#000000FF", 2, 0, can.width/30);
    line(ctxt, can.width/2, can.height*4/5, can.width/2, can.height/5, "#000000FF", 2, 0, can.width/30);
    
}
