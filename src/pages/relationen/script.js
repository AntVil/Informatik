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

window.onresize = setup();

function setup(){
    if(loaded){
        beispiel_reflexiv();
        beispiel_symmetrisch();
        beispiel_antisymmetrisch();
        beispiel_transitiv();
        beispiel_total();
        beispiel_halbordnung();
        beispiel_totalordnung();
        beispiel_aequivalenzrelation();
        beispiel_aequivalenzklasse_1();
        beispiel_aequivalenzklasse_2();
    }
}

function beispiel_reflexiv(){
    let can = document.getElementById("beispiel_reflexiv");
    can.width = can.clientWidth;
    can.height = can.clientWidth / 3;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    circle(ctxt, can.width/5, can.height/2, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*2/5, can.height/2, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*3/5, can.height/2, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*4/5, can.height/2, can.width/15, "#00CCFFFF", "#00FFFFFF");
    text(ctxt, "a", can.width/5, can.height/2, can.width/15);
    text(ctxt, "b", can.width*2/5, can.height/2, can.width/15);
    text(ctxt, "c", can.width*3/5, can.height/2, can.width/15);
    text(ctxt, "d", can.width*4/5, can.height/2, can.width/15);
    line(ctxt, can.width*1.75/10, can.height/2 - can.width/15, can.width*2.25/10, can.height/2 - can.width/15, "#7777AAFF", 2, -can.width/6, can.width/50);
    line(ctxt, can.width*3.75/10, can.height/2 - can.width/15, can.width*4.25/10, can.height/2 - can.width/15, "#7777AAFF", 2, -can.width/6, can.width/50);
    line(ctxt, can.width*5.75/10, can.height/2 - can.width/15, can.width*6.25/10, can.height/2 - can.width/15, "#7777AAFF", 2, -can.width/6, can.width/50);
    line(ctxt, can.width*7.75/10, can.height/2 - can.width/15, can.width*8.25/10, can.height/2 - can.width/15, "#7777AAFF", 2, -can.width/6, can.width/50);
}

function beispiel_symmetrisch(){
    let can = document.getElementById("beispiel_symmetrisch");
    can.width = can.clientWidth;
    can.height = can.clientWidth / 3;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    circle(ctxt, can.width/5, can.height/2, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*2/5, can.height/2, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*3/5, can.height/2, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*4/5, can.height/2, can.width/15, "#00CCFFFF", "#00FFFFFF");
    text(ctxt, "a", can.width/5, can.height/2, can.width/15);
    text(ctxt, "b", can.width*2/5, can.height/2, can.width/15);
    text(ctxt, "c", can.width*3/5, can.height/2, can.width/15);
    text(ctxt, "d", can.width*4/5, can.height/2, can.width/15);
    line(ctxt, can.width/5 + can.width/15, can.height/2, can.width*2/5 - can.width/15, can.height/2, "#7777AAFF", 2, 0, can.width/50, can.width/50);
}

function beispiel_antisymmetrisch(){
    let can = document.getElementById("beispiel_antisymmetrisch");
    can.width = can.clientWidth;
    can.height = can.clientWidth / 3;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    circle(ctxt, can.width/5, can.height/2, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*2/5, can.height/2, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*3/5, can.height/2, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*4/5, can.height/2, can.width/15, "#00CCFFFF", "#00FFFFFF");
    text(ctxt, "a", can.width/5, can.height/2, can.width/15);
    text(ctxt, "b", can.width*2/5, can.height/2, can.width/15);
    text(ctxt, "c", can.width*3/5, can.height/2, can.width/15);
    text(ctxt, "d", can.width*4/5, can.height/2, can.width/15);
    line(ctxt, can.width/5 + can.width/15, can.height/2, can.width*2/5 - can.width/15, can.height/2, "#7777AAFF", 2, 0, can.width/50);
}

function beispiel_transitiv(){
    let can = document.getElementById("beispiel_transitiv");
    can.width = can.clientWidth;
    can.height = can.clientWidth / 3;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    circle(ctxt, can.width/5, can.height/2, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*2/5, can.height/2, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*3/5, can.height/2, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*4/5, can.height/2, can.width/15, "#00CCFFFF", "#00FFFFFF");
    text(ctxt, "a", can.width/5, can.height/2, can.width/15);
    text(ctxt, "b", can.width*2/5, can.height/2, can.width/15);
    text(ctxt, "c", can.width*3/5, can.height/2, can.width/15);
    text(ctxt, "d", can.width*4/5, can.height/2, can.width/15);
    line(ctxt, can.width/5 + can.width/15, can.height/2, can.width*2/5 - can.width/15, can.height/2, "#7777AAFF", 2, 0, can.width/50);
    line(ctxt, can.width*2/5 + can.width/15, can.height/2, can.width*3/5 - can.width/15, can.height/2, "#7777AAFF", 2, 0, can.width/50);
    line(ctxt, can.width/5, can.height/2 - can.width/15, can.width*3/5, can.height/2 - can.width/15, "#7777AAFF", 2, -can.width/6, can.width/50);
}

function beispiel_total(){
    let can = document.getElementById("beispiel_total");
    can.width = can.clientWidth;
    can.height = can.clientWidth;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    circle(ctxt, can.width/5, can.height/5, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*4/5, can.height/5, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width/5, can.height*4/5, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*4/5, can.height*4/5, can.width/15, "#00CCFFFF", "#00FFFFFF");
    text(ctxt, "a", can.width/5, can.height/5, can.width/15);
    text(ctxt, "b", can.width*4/5, can.height/5, can.width/15);
    text(ctxt, "c", can.width/5, can.height*4/5, can.width/15);
    text(ctxt, "d", can.width*4/5, can.height*4/5, can.width/15);
    line(ctxt, can.width*1.75/10, can.height/5 - can.width/15, can.width*2.25/10, can.height/5 - can.width/15, "#7777AAFF", 2, -can.width/6, can.width/50);
    line(ctxt, can.width*7.75/10, can.height/5 - can.width/15, can.width*8.25/10, can.height/5 - can.width/15, "#7777AAFF", 2, -can.width/6, can.width/50);
    line(ctxt, can.width*1.75/10, can.height*4/5 + can.width/15, can.width*2.25/10, can.height*4/5 + can.width/15, "#7777AAFF", 2, can.width/6, can.width/50);
    line(ctxt, can.width*7.75/10, can.height*4/5 + can.width/15, can.width*8.25/10, can.height*4/5 + can.width/15, "#7777AAFF", 2, can.width/6, can.width/50);
    
    line(ctxt, can.width/5 + can.width/15, can.height/5, can.width*4/5 - can.width/15, can.height/5, "#7777AAFF", 2, 0, can.width/50, can.width/50);
    line(ctxt, can.width/5, can.height/5 + can.width/15, can.width/5, can.height*4/5 - can.width/15, "#7777AAFF", 2, 0, can.width/50);
    line(ctxt, can.width*4/5, can.height/5 + can.width/15, can.width*4/5, can.height*4/5 - can.width/15, "#7777AAFF", 2, 0, can.width/50);
    line(ctxt, can.width/5 + can.width/15, can.height*4/5, can.width*4/5 - can.width/15, can.height*4/5, "#7777AAFF", 2, 0, can.width/50);

    line(ctxt, can.width/5 + Math.cos(Math.PI/4) * can.width/15, can.height/5 + Math.sin(Math.PI/4) * can.width/15, can.width*4/5 - Math.cos(Math.PI/4) * can.width/15, can.height*4/5 - Math.sin(Math.PI/4) * can.width/15, "#7777AAFF", 2, 0, can.width/50);
    line(ctxt, can.width/5 + Math.cos(Math.PI/4) * can.width/15, can.height*4/5 - Math.sin(Math.PI/4) * can.width/15, can.width*4/5 - Math.cos(Math.PI/4) * can.width/15, can.height/5 + Math.sin(Math.PI/4) * can.width/15, "#7777AAFF", 2, 0, can.width/50);
}

function beispiel_halbordnung(){
    let can = document.getElementById("beispiel_halbordnung");
    can.width = can.clientWidth;
    can.height = can.clientWidth / 3;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    circle(ctxt, can.width/5, can.height/2, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*2/5, can.height/2, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*3/5, can.height/2, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*4/5, can.height/2, can.width/15, "#00CCFFFF", "#00FFFFFF");
    text(ctxt, "a", can.width/5, can.height/2, can.width/15);
    text(ctxt, "b", can.width*2/5, can.height/2, can.width/15);
    text(ctxt, "c", can.width*3/5, can.height/2, can.width/15);
    text(ctxt, "d", can.width*4/5, can.height/2, can.width/15);
    line(ctxt, can.width*1.75/10, can.height/2 - can.width/15, can.width*2.25/10, can.height/2 - can.width/15, "#7777AAFF", 2, -can.width/6, can.width/50);
    line(ctxt, can.width*3.75/10, can.height/2 - can.width/15, can.width*4.25/10, can.height/2 - can.width/15, "#7777AAFF", 2, -can.width/6, can.width/50);
    line(ctxt, can.width*5.75/10, can.height/2 - can.width/15, can.width*6.25/10, can.height/2 - can.width/15, "#7777AAFF", 2, -can.width/6, can.width/50);
    line(ctxt, can.width*7.75/10, can.height/2 - can.width/15, can.width*8.25/10, can.height/2 - can.width/15, "#7777AAFF", 2, -can.width/6, can.width/50);
    line(ctxt, can.width/5 + can.width/15, can.height/2, can.width*2/5 - can.width/15, can.height/2, "#7777AAFF", 2, 0, can.width/50);
    line(ctxt, can.width*2/5 + can.width/15, can.height/2, can.width*3/5 - can.width/15, can.height/2, "#7777AAFF", 2, 0, can.width/50);
    line(ctxt, can.width/5, can.height/2 + can.width/15, can.width*3/5, can.height/2 + can.width/15, "#7777AAFF", 2, can.width/6, can.width/50);
}

function beispiel_totalordnung(){
    let can = document.getElementById("beispiel_totalordnung");
    can.width = can.clientWidth;
    can.height = can.clientWidth;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    circle(ctxt, can.width/5, can.height/5, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*4/5, can.height/5, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width/5, can.height*4/5, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*4/5, can.height*4/5, can.width/15, "#00CCFFFF", "#00FFFFFF");
    text(ctxt, "a", can.width/5, can.height/5, can.width/15);
    text(ctxt, "b", can.width*4/5, can.height/5, can.width/15);
    text(ctxt, "c", can.width/5, can.height*4/5, can.width/15);
    text(ctxt, "d", can.width*4/5, can.height*4/5, can.width/15);
    line(ctxt, can.width*1.75/10, can.height/5 - can.width/15, can.width*2.25/10, can.height/5 - can.width/15, "#7777AAFF", 2, -can.width/6, can.width/50);
    line(ctxt, can.width*7.75/10, can.height/5 - can.width/15, can.width*8.25/10, can.height/5 - can.width/15, "#7777AAFF", 2, -can.width/6, can.width/50);
    line(ctxt, can.width*1.75/10, can.height*4/5 + can.width/15, can.width*2.25/10, can.height*4/5 + can.width/15, "#7777AAFF", 2, can.width/6, can.width/50);
    line(ctxt, can.width*7.75/10, can.height*4/5 + can.width/15, can.width*8.25/10, can.height*4/5 + can.width/15, "#7777AAFF", 2, can.width/6, can.width/50);
    
    line(ctxt, can.width/5 + can.width/15, can.height/5, can.width*4/5 - can.width/15, can.height/5, "#7777AAFF", 2, 0, can.width/50);
    line(ctxt, can.width/5, can.height/5 + can.width/15, can.width/5, can.height*4/5 - can.width/15, "#7777AAFF", 2, 0, can.width/50);
    line(ctxt, can.width*4/5, can.height/5 + can.width/15, can.width*4/5, can.height*4/5 - can.width/15, "#7777AAFF", 2, 0, can.width/50);
    line(ctxt, can.width/5 + can.width/15, can.height*4/5, can.width*4/5 - can.width/15, can.height*4/5, "#7777AAFF", 2, 0, can.width/50);

    line(ctxt, can.width/5 + Math.cos(Math.PI/4) * can.width/15, can.height/5 + Math.sin(Math.PI/4) * can.width/15, can.width*4/5 - Math.cos(Math.PI/4) * can.width/15, can.height*4/5 - Math.sin(Math.PI/4) * can.width/15, "#7777AAFF", 2, 0, can.width/50);
    line(ctxt, can.width/5 + Math.cos(Math.PI/4) * can.width/15, can.height*4/5 - Math.sin(Math.PI/4) * can.width/15, can.width*4/5 - Math.cos(Math.PI/4) * can.width/15, can.height/5 + Math.sin(Math.PI/4) * can.width/15, "#7777AAFF", 2, 0, can.width/50);
}

function beispiel_aequivalenzrelation(){
    let can = document.getElementById("beispiel_aequivalenzrelation");
    can.width = can.clientWidth;
    can.height = can.clientWidth;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    circle(ctxt, can.width/5, can.height/5, can.width/15, "#CC00FFFF", "#FF00FFFF");
    circle(ctxt, can.width*4/5, can.height/5, can.width/15, "#CC00FFFF", "#FF00FFFF");
    circle(ctxt, can.width/5, can.height*4/5, can.width/15, "#CC00FFFF", "#FF00FFFF");
    circle(ctxt, can.width*4/5, can.height*4/5, can.width/15, "#FFCC00FF", "#FFFF00FF");
    text(ctxt, "a", can.width/5, can.height/5, can.width/15);
    text(ctxt, "b", can.width*4/5, can.height/5, can.width/15);
    text(ctxt, "c", can.width/5, can.height*4/5, can.width/15);
    text(ctxt, "d", can.width*4/5, can.height*4/5, can.width/15);
    line(ctxt, can.width*1.75/10, can.height/5 - can.width/15, can.width*2.25/10, can.height/5 - can.width/15, "#7777AAFF", 2, -can.width/6, can.width/50);
    line(ctxt, can.width*7.75/10, can.height/5 - can.width/15, can.width*8.25/10, can.height/5 - can.width/15, "#7777AAFF", 2, -can.width/6, can.width/50);
    line(ctxt, can.width*1.75/10, can.height*4/5 + can.width/15, can.width*2.25/10, can.height*4/5 + can.width/15, "#7777AAFF", 2, can.width/6, can.width/50);
    line(ctxt, can.width*7.75/10, can.height*4/5 + can.width/15, can.width*8.25/10, can.height*4/5 + can.width/15, "#7777AAFF", 2, can.width/6, can.width/50);
    
    line(ctxt, can.width/5 + can.width/15, can.height/5, can.width*4/5 - can.width/15, can.height/5, "#7777AAFF", 2, 0, can.width/50);
    line(ctxt, can.width/5, can.height/5 + can.width/15, can.width/5, can.height*4/5 - can.width/15, "#7777AAFF", 2, 0, can.width/50);
    
    line(ctxt, can.width/5 + Math.cos(Math.PI/4) * can.width/15, can.height*4/5 - Math.sin(Math.PI/4) * can.width/15, can.width*4/5 - Math.cos(Math.PI/4) * can.width/15, can.height/5 + Math.sin(Math.PI/4) * can.width/15, "#7777AAFF", 2, 0, can.width/50);
}

function beispiel_aequivalenzklasse_1(){
    let can = document.getElementById("beispiel_aequivalenzklasse_1");
    can.width = can.clientWidth;
    can.height = can.clientWidth;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    rect(ctxt, can.width/7, can.height/7, can.width*5/7, can.height*5/7, "#AA00FFFF", "#00000000", 1, can.width/10);
    circle(ctxt, can.width/4, can.height/4, can.width/15, "#CC00FFFF", "#FF00FFFF");
    circle(ctxt, can.width*3/4, can.height/4, can.width/15, "#CC00FFFF", "#FF00FFFF");
    circle(ctxt, can.width/4, can.height*3/4, can.width/15, "#CC00FFFF", "#FF00FFFF");
    text(ctxt, "a", can.width/4, can.height/4, can.width/15);
    text(ctxt, "b", can.width*3/4, can.height/4, can.width/15);
    text(ctxt, "c", can.width/4, can.height*3/4, can.width/15);
}

function beispiel_aequivalenzklasse_2(){
    let can = document.getElementById("beispiel_aequivalenzklasse_2");
    can.width = can.clientWidth;
    can.height = can.clientWidth;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    rect(ctxt, can.width/7, can.height/7, can.width*5/7, can.height*5/7, "#FFAA00FF", "#00000000", 1, can.width/10);
    circle(ctxt, can.width*3/4, can.height*3/4, can.width/15, "#FFCC00FF", "#FFFF00FF");
    text(ctxt, "d", can.width*3/4, can.height*3/4, can.width/15);
}
