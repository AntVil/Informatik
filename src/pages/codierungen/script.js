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
        beispiel_fano_bedingung_1();
        beispiel_fano_bedingung_2();
    }
}

function beispiel_fano_bedingung_1(){
    let can = document.getElementById("beispiel_fano_bedingung_1");
    can.width = can.clientWidth;
    can.height = can.clientWidth*16/30;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    let size = can.width / 30;
    
    circle(ctxt, can.width*1/2, 3*size, 2*size, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*1/4, 8*size, 2*size, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*3/4, 8*size, 2*size, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*1/8, 13*size, 2*size, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*3/8, 13*size, 2*size, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*5/8, 13*size, 2*size, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*7/8, 13*size, 2*size, "#00CCFFFF", "#00FFFFFF");

    
    text(ctxt, "b", can.width*1/4, 8*size, 2*size);
    text(ctxt, "a", can.width*3/4, 8*size, 2*size);
    text(ctxt, "c", can.width*1/8, 13*size, 2*size);
    text(ctxt, "e", can.width*3/8, 13*size, 2*size);
    text(ctxt, "d", can.width*5/8, 13*size, 2*size);
    text(ctxt, "f", can.width*7/8, 13*size, 2*size);

    text(ctxt, "0", can.width*1/4, 4*size, 2*size, "#7777AAFF");
    text(ctxt, "1", can.width*3/4, 4*size, 2*size, "#7777AAFF");
    text(ctxt, "0", can.width*1/8, 9*size, 2*size, "#7777AAFF");
    text(ctxt, "1", can.width*3/8, 9*size, 2*size, "#7777AAFF");
    text(ctxt, "0", can.width*5/8, 9*size, 2*size, "#7777AAFF");
    text(ctxt, "1", can.width*7/8, 9*size, 2*size, "#7777AAFF");
    
    line(ctxt, can.width*1/2 + 2*size * Math.cos(Math.PI*3/4), 3*size + 2*size * Math.sin(Math.PI*3/4), can.width*1/4 - 2*size * Math.cos(Math.PI*3/4), 8*size - 2*size * Math.sin(Math.PI*3/4), "#7777AAFF", 2, 0, can.width/50);
    line(ctxt, can.width*1/2 - 2*size * Math.cos(Math.PI*3/4), 3*size + 2*size * Math.sin(Math.PI*3/4), can.width*3/4 + 2*size * Math.cos(Math.PI*3/4), 8*size - 2*size * Math.sin(Math.PI*3/4), "#7777AAFF", 2, 0, can.width/50);

    line(ctxt, can.width*1/4 + 2*size * Math.cos(Math.PI*3/4), 8*size + 2*size * Math.sin(Math.PI*3/4), can.width*1/8, 13*size - 2*size, "#7777AAFF", 2, 0, can.width/50);
    line(ctxt, can.width*1/4 - 2*size * Math.cos(Math.PI*3/4), 8*size + 2*size * Math.sin(Math.PI*3/4), can.width*3/8, 13*size - 2*size, "#7777AAFF", 2, 0, can.width/50);

    line(ctxt, can.width*3/4 + 2*size * Math.cos(Math.PI*3/4), 8*size + 2*size * Math.sin(Math.PI*3/4), can.width*5/8, 13*size - 2*size, "#7777AAFF", 2, 0, can.width/50);
    line(ctxt, can.width*3/4 - 2*size * Math.cos(Math.PI*3/4), 8*size + 2*size * Math.sin(Math.PI*3/4), can.width*7/8, 13*size - 2*size, "#7777AAFF", 2, 0, can.width/50);
}

function beispiel_fano_bedingung_2(){
    let can = document.getElementById("beispiel_fano_bedingung_2");
    can.width = can.clientWidth;
    can.height = can.clientWidth*16/30;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    let size = can.width / 30;
    
    circle(ctxt, can.width*1/2, 3*size, 2*size, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*1/4, 8*size, 2*size, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*3/4, 8*size, 2*size, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*1/8, 13*size, 2*size, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*3/8, 13*size, 2*size, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*5/8, 13*size, 2*size, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*7/8, 13*size, 2*size, "#00CCFFFF", "#00FFFFFF");

    text(ctxt, "a", can.width*1/8, 13*size, 2*size);
    text(ctxt, "b", can.width*3/8, 13*size, 2*size);
    text(ctxt, "c", can.width*5/8, 13*size, 2*size);
    text(ctxt, "d", can.width*7/8, 13*size, 2*size);

    text(ctxt, "0", can.width*1/4, 4*size, 2*size, "#7777AAFF");
    text(ctxt, "1", can.width*3/4, 4*size, 2*size, "#7777AAFF");
    text(ctxt, "0", can.width*1/8, 9*size, 2*size, "#7777AAFF");
    text(ctxt, "1", can.width*3/8, 9*size, 2*size, "#7777AAFF");
    text(ctxt, "0", can.width*5/8, 9*size, 2*size, "#7777AAFF");
    text(ctxt, "1", can.width*7/8, 9*size, 2*size, "#7777AAFF");
    
    line(ctxt, can.width*1/2 + 2*size * Math.cos(Math.PI*3/4), 3*size + 2*size * Math.sin(Math.PI*3/4), can.width*1/4 - 2*size * Math.cos(Math.PI*3/4), 8*size - 2*size * Math.sin(Math.PI*3/4), "#7777AAFF", 2, 0, can.width/50);
    line(ctxt, can.width*1/2 - 2*size * Math.cos(Math.PI*3/4), 3*size + 2*size * Math.sin(Math.PI*3/4), can.width*3/4 + 2*size * Math.cos(Math.PI*3/4), 8*size - 2*size * Math.sin(Math.PI*3/4), "#7777AAFF", 2, 0, can.width/50);

    line(ctxt, can.width*1/4 + 2*size * Math.cos(Math.PI*3/4), 8*size + 2*size * Math.sin(Math.PI*3/4), can.width*1/8, 13*size - 2*size, "#7777AAFF", 2, 0, can.width/50);
    line(ctxt, can.width*1/4 - 2*size * Math.cos(Math.PI*3/4), 8*size + 2*size * Math.sin(Math.PI*3/4), can.width*3/8, 13*size - 2*size, "#7777AAFF", 2, 0, can.width/50);

    line(ctxt, can.width*3/4 + 2*size * Math.cos(Math.PI*3/4), 8*size + 2*size * Math.sin(Math.PI*3/4), can.width*5/8, 13*size - 2*size, "#7777AAFF", 2, 0, can.width/50);
    line(ctxt, can.width*3/4 - 2*size * Math.cos(Math.PI*3/4), 8*size + 2*size * Math.sin(Math.PI*3/4), can.width*7/8, 13*size - 2*size, "#7777AAFF", 2, 0, can.width/50);
}
