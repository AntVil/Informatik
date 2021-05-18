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
        beispiel_syntaxbaum();
    }
}

function beispiel_syntaxbaum(){
    let can = document.getElementById("beispiel_syntaxbaum");
    can.width = can.clientWidth;
    can.height = can.clientWidth*32/30;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    let size= can.width/30;

    rect(ctxt, 1 * size, 1 * size, 28 * size, 27 * size, "#AA00FF", "#00000000", 0, size);
    
    rect(ctxt, 23 * size, 5 * size, 5 * size, 18 * size, "#FFAA00", "#00000000", 0, size);
    rect(ctxt, 2 * size, 13 * size, 26 * size, 14 * size, "#FFAA00", "#00000000", 0, size);
    rect(ctxt, 22 * size, 12 * size, 2 * size, 2 * size, "#FFAA00", "#00000000", 0, size);
    rect(ctxt, 21 * size, 11 * size, 2 * size, 2 * size, "#AA00FF", "#00000000", 0, size);

    rect(ctxt, 3 * size, 17 * size, 24 * size, 9 * size, "#00AAFF", "#00000000", 0, size);
    
    rect(ctxt, 4 * size, 21 * size, 19 * size, 4 * size, "#AAFF00", "#00000000", 0, size);
    

    circle(ctxt, 21 * size, 3 * size, size, "#CC00FF", "#FFAAFF");
    text(ctxt, "∨", 21 * size, 3 * size, size);


    circle(ctxt, 17 * size, 7 * size, size, "#CC00FF", "#FFAAFF");
    text(ctxt, "∧", 17 * size, 7 * size, size);

    circle(ctxt, 25 * size, 7 * size, size, "#FFCC00", "#FFFFAA");
    text(ctxt, "p₀", 25 * size, 7 * size, size);

    
    circle(ctxt, 13 * size, 11 * size, size, "#CC00FF", "#FFAAFF");
    text(ctxt, "∀x", 13 * size, 11 * size, size, "#FF3333");

    circle(ctxt, 21 * size, 11 * size, size, "#CC00FF", "#FFAAFF");
    text(ctxt, "∃y", 21 * size, 11 * size, size, "#FF3333");


    circle(ctxt, 13 * size, 15 * size, size, "#FFCC00", "#FFFFAA");
    text(ctxt, "p₁", 13 * size, 15 * size, size);

    circle(ctxt, 21 * size, 15 * size, size, "#FFCC00", "#FFFFAA");
    text(ctxt, "p₁", 21 * size, 15 * size, size);

    
    circle(ctxt, 13 * size, 19 * size, size, "#00CCFF", "#AAFFFF");
    text(ctxt, "f₁", 13 * size, 19 * size, size);

    circle(ctxt, 21 * size, 19 * size, size, "#00CCFF", "#AAFFFF");
    text(ctxt, "f₃", 21 * size, 19 * size, size);
    

    circle(ctxt, 13 * size, 23 * size, size, "#FF3333", "#FFAAAA");
    text(ctxt, "x", 13 * size, 23 * size, size);
    circle(ctxt, 17 * size, 23 * size, size, "#FF3333", "#FFAAAA");
    text(ctxt, "y", 17 * size, 23 * size, size);
    circle(ctxt, 21 * size, 23 * size, size, "#CCFF00", "#FFFFAA");
    text(ctxt, "x", 21 * size, 23 * size, size);
    circle(ctxt, 25 * size, 23 * size, size, "#00CCFF", "#AAFFFF");
    text(ctxt, "f₀", 25 * size, 23 * size, size);


    line(ctxt, (21 - Math.cos(Math.PI/4)) * size, (3 + Math.sin(Math.PI/4)) * size, (17 + Math.cos(Math.PI/4)) * size, (7 - Math.sin(Math.PI/4)) * size, "#7777AA", 2, 0, size / 2);
    line(ctxt, (21 + Math.cos(Math.PI/4)) * size, (3 + Math.sin(Math.PI/4)) * size, (25 - Math.cos(Math.PI/4)) * size, (7 - Math.sin(Math.PI/4)) * size, "#7777AA", 2, 0, size / 2);
    
    line(ctxt, (17 - Math.cos(Math.PI/4)) * size, (7 + Math.sin(Math.PI/4)) * size, (13 + Math.cos(Math.PI/4)) * size, (11 - Math.sin(Math.PI/4)) * size, "#7777AA", 2, 0, size / 2);
    line(ctxt, (17 + Math.cos(Math.PI/4)) * size, (7 + Math.sin(Math.PI/4)) * size, (21 - Math.cos(Math.PI/4)) * size, (11 - Math.sin(Math.PI/4)) * size, "#7777AA", 2, 0, size / 2);
    
    line(ctxt, 13 * size, 12 * size, 13 * size, 14 * size, "#7777AA", 2, 0, size / 2);
    line(ctxt, 21 * size, 12 * size, 21 * size, 14 * size, "#7777AA", 2, 0, size / 2);

    line(ctxt, 13 * size, 16 * size, 13 * size, 18 * size, "#7777AA", 2, 0, size / 2);
    line(ctxt, 21 * size, 16 * size, 21 * size, 18 * size, "#7777AA", 2, 0, size / 2);

    line(ctxt, 13 * size, 20 * size, 13 * size, 22 * size, "#7777AA", 2, 0, size / 2);
    line(ctxt, (21 - Math.cos(Math.PI/4)) * size, (19 + Math.sin(Math.PI/4)) * size, (17 + Math.cos(Math.PI/4)) * size, (23 - Math.sin(Math.PI/4)) * size, "#7777AA", 2, 0, size / 2);
    line(ctxt, 21 * size, 20 * size, 21 * size, 22 * size, "#7777AA", 2, 0, size / 2);
    line(ctxt, (21 + Math.cos(Math.PI/4)) * size, (19 + Math.sin(Math.PI/4)) * size, (25 - Math.cos(Math.PI/4)) * size, (23 - Math.sin(Math.PI/4)) * size, "#7777AA", 2, 0, size / 2);

    line(ctxt, 12 * size, 11 * size, 12 * size, 23 * size, "#7777AA", 2, can.width/12, size/2, 0, true);

    line(ctxt, 20 * size, 11 * size, 17 * size, 22 * size, "#7777AA", 2, can.width/12, size/2, 0, true);
    
    
    text(ctxt, "gebunden", 13 * size, 30 * size, size, "#FF3333");
    text(ctxt, "ungebunden", 21 * size, 30 * size, size, "#CCFF00");

    text(ctxt, "Formeln", 2*size, 3*size, size, "#FFFFFF", "left");
    text(ctxt, "Atomare Formeln", 3*size, 15*size, size, "#FFFFFF", "left");
    text(ctxt, "Terme", 4*size, 19*size, size, "#FFFFFF", "left");
    text(ctxt, "Variablen", 5*size, 23*size, size, "#FFFFFF", "left");
}
