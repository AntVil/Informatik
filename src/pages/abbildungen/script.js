window.onload = function(){
    let equations = document.getElementsByClassName("equation");
    for(let i=0;i<equations.length;i++){
        katex.render(equations[i].innerText, equations[i], {
            throwOnError: false
        });
    }

    setup()
}

window.onresize = setup;


function setup(){
    beispiel_injektiv();
    beispiel_surjektiv();
    beispiel_bijektiv();
}

function beispiel_injektiv(){
    let can = document.getElementById("beispiel_injektiv");
    can.width = can.clientWidth;
    can.height = can.clientWidth;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    rect(ctxt, can.width/7, can.height/7, can.width*1.5/7, can.height*5/7, "#00AAFFFF", "#00000000", 1, can.width/10);
    rect(ctxt, can.width*4.5/7, can.height/7, can.width*1.5/7, can.height*5/7, "#FFAA00FF", "#00000000", 1, can.width/10);
    circle(ctxt, can.width/4, can.height/4, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*3/4, can.height/4, can.width/15, "#FFCC00FF", "#FFFF00FF");
    circle(ctxt, can.width/4, can.height/2, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*3/4, can.height/2, can.width/15, "#FFCC00FF", "#FFFF00FF");
    circle(ctxt, can.width*3/4, can.height*3/4, can.width/15, "#FFCC00FF", "#FFFF00FF");
    text(ctxt, "a", can.width/4, can.height/4, can.width/15);
    text(ctxt, "d", can.width*3/4, can.height/4, can.width/15);
    text(ctxt, "b", can.width/4, can.height/2, can.width/15);
    text(ctxt, "e", can.width*3/4, can.height/2, can.width/15);
    text(ctxt, "f", can.width*3/4, can.height*3/4, can.width/15);

    line(ctxt, can.width/4 + can.width/15, can.height/4, can.width*3/4 - can.width/15, can.height/4, "#7777AAFF", 2, 0, can.width/50);
    line(ctxt, can.width/4 + can.width/15, can.height*2/4, can.width*3/4 - can.width/15, can.height*2/4, "#7777AAFF", 2, 0, can.width/50);
}

function beispiel_surjektiv(){
    let can = document.getElementById("beispiel_surjektiv");
    can.width = can.clientWidth;
    can.height = can.clientWidth;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    rect(ctxt, can.width/7, can.height/7, can.width*1.5/7, can.height*5/7, "#00AAFFFF", "#00000000", 1, can.width/10);
    rect(ctxt, can.width*4.5/7, can.height/7, can.width*1.5/7, can.height*5/7, "#FFAA00FF", "#00000000", 1, can.width/10);
    circle(ctxt, can.width/4, can.height/4, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*3/4, can.height/4, can.width/15, "#FFCC00FF", "#FFFF00FF");
    circle(ctxt, can.width/4, can.height/2, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*3/4, can.height/2, can.width/15, "#FFCC00FF", "#FFFF00FF");
    circle(ctxt, can.width/4, can.height*3/4, can.width/15, "#00CCFFFF", "#00FFFFFF");
    text(ctxt, "a", can.width/4, can.height/4, can.width/15);
    text(ctxt, "d", can.width*3/4, can.height/4, can.width/15);
    text(ctxt, "b", can.width/4, can.height/2, can.width/15);
    text(ctxt, "e", can.width*3/4, can.height/2, can.width/15);
    text(ctxt, "c", can.width/4, can.height*3/4, can.width/15);
    
    line(ctxt, can.width/4 + can.width/15, can.height/4, can.width*3/4 - can.width/15, can.height/4, "#7777AAFF", 2, 0, can.width/50);
    line(ctxt, can.width/4 + can.width/15, can.height*2/4, can.width*3/4 - can.width/15, can.height*2/4, "#7777AAFF", 2, 0, can.width/50);
    line(ctxt, can.width/4 + Math.cos(Math.PI/4) * can.width/15, can.height*3/4 - Math.sin(Math.PI/4) * can.width/15, can.width*3/4 - Math.cos(Math.PI/4) * can.width/15, can.height/4 + Math.sin(Math.PI/4) * can.width/15, "#7777AAFF", 2, 0, can.width/50);
}

function beispiel_bijektiv(){
    let can = document.getElementById("beispiel_bijektiv");
    can.width = can.clientWidth;
    can.height = can.clientWidth;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    rect(ctxt, can.width/7, can.height/7, can.width*1.5/7, can.height*5/7, "#00AAFFFF", "#00000000", 1, can.width/10);
    rect(ctxt, can.width*4.5/7, can.height/7, can.width*1.5/7, can.height*5/7, "#FFAA00FF", "#00000000", 1, can.width/10);
    circle(ctxt, can.width/4, can.height/4, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*3/4, can.height/4, can.width/15, "#FFCC00FF", "#FFFF00FF");
    circle(ctxt, can.width/4, can.height/2, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*3/4, can.height/2, can.width/15, "#FFCC00FF", "#FFFF00FF");
    circle(ctxt, can.width/4, can.height*3/4, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*3/4, can.height*3/4, can.width/15, "#FFCC00FF", "#FFFF00FF");
    text(ctxt, "a", can.width/4, can.height/4, can.width/15);
    text(ctxt, "d", can.width*3/4, can.height/4, can.width/15);
    text(ctxt, "b", can.width/4, can.height/2, can.width/15);
    text(ctxt, "e", can.width*3/4, can.height/2, can.width/15);
    text(ctxt, "c", can.width/4, can.height*3/4, can.width/15);
    text(ctxt, "f", can.width*3/4, can.height*3/4, can.width/15);

    line(ctxt, can.width/4 + can.width/15, can.height/4, can.width*3/4 - can.width/15, can.height/4, "#7777AAFF", 2, 0, can.width/50);
    line(ctxt, can.width/4 + can.width/15, can.height*2/4, can.width*3/4 - can.width/15, can.height*2/4, "#7777AAFF", 2, 0, can.width/50);
    line(ctxt, can.width/4 + can.width/15, can.height*3/4, can.width*3/4 - can.width/15, can.height*3/4, "#7777AAFF", 2, 0, can.width/50);
}
