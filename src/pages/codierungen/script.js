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
        beispiel_huffman_1();
        beispiel_huffman_2();
    }
}

function beispiel_fano_bedingung_1(){
    let can = document.getElementById("beispiel_fano_bedingung_1");
    can.width = can.clientWidth;
    can.height = can.clientWidth*16/30;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    let size = can.width / 30;
    
    circle(ctxt, can.width*1/2, 3*size, 2*size, "#00CCFF", "#00FFFF");
    circle(ctxt, can.width*1/4, 8*size, 2*size, "#00CCFF", "#00FFFF");
    circle(ctxt, can.width*3/4, 8*size, 2*size, "#00CCFF", "#00FFFF");
    circle(ctxt, can.width*1/8, 13*size, 2*size, "#00CCFF", "#00FFFF");
    circle(ctxt, can.width*3/8, 13*size, 2*size, "#00CCFF", "#00FFFF");
    circle(ctxt, can.width*5/8, 13*size, 2*size, "#00CCFF", "#00FFFF");
    circle(ctxt, can.width*7/8, 13*size, 2*size, "#00CCFF", "#00FFFF");

    
    text(ctxt, "e", can.width*1/4, 8*size, 2*size);
    text(ctxt, "f", can.width*3/4, 8*size, 2*size);
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

function beispiel_fano_bedingung_2(){
    let can = document.getElementById("beispiel_fano_bedingung_2");
    can.width = can.clientWidth;
    can.height = can.clientWidth*16/30;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    let size = can.width / 30;
    
    circle(ctxt, can.width*1/2, 3*size, 2*size, "#00CCFF", "#00FFFF");
    circle(ctxt, can.width*1/4, 8*size, 2*size, "#00CCFF", "#00FFFF");
    circle(ctxt, can.width*3/4, 8*size, 2*size, "#00CCFF", "#00FFFF");
    circle(ctxt, can.width*1/8, 13*size, 2*size, "#00CCFF", "#00FFFF");
    circle(ctxt, can.width*3/8, 13*size, 2*size, "#00CCFF", "#00FFFF");
    circle(ctxt, can.width*5/8, 13*size, 2*size, "#00CCFF", "#00FFFF");
    circle(ctxt, can.width*7/8, 13*size, 2*size, "#00CCFF", "#00FFFF");

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

function beispiel_huffman_1(){
    let can = document.getElementById("beispiel_huffman_1");
    can.width = can.clientWidth;
    can.height = can.clientWidth*7/13;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    let size = can.width / 13;
    
    circle(ctxt, 2*size, 2*size, size, "#00CCFF", "#00FFFF");
    circle(ctxt, 5*size, 2*size, size, "#00CCFF", "#00FFFF");
    circle(ctxt, 8*size, 2*size, size, "#00CCFF", "#00FFFF");
    circle(ctxt, 11*size, 2*size, size, "#00CCFF", "#00FFFF");

    text(ctxt, "1", 2*size, 2*size, size);
    text(ctxt, "1", 5*size, 2*size, size);
    text(ctxt, "2", 8*size, 2*size, size);
    text(ctxt, "3", 11*size, 2*size, size);

    circle(ctxt, 2*size, 5*size, size, "#FFCC00", "#FFFF00");
    circle(ctxt, 5*size, 5*size, size, "#FFCC00", "#FFFF00");
    circle(ctxt, 8*size, 5*size, size, "#FFCC00", "#FFFF00");
    circle(ctxt, 11*size, 5*size, size, "#FFCC00", "#FFFF00");

    text(ctxt, "b", 2*size, 5*size, size);
    text(ctxt, "r", 5*size, 5*size, size);
    text(ctxt, "e", 8*size, 5*size, size);
    text(ctxt, "n", 11*size, 5*size, size);

    line(ctxt, 2*size, 3*size, 2*size, 4*size, "#7777AAFF", 2, 0, size/3);
    line(ctxt, 5*size, 3*size, 5*size, 4*size, "#7777AAFF", 2, 0, size/3);
    line(ctxt, 8*size, 3*size, 8*size, 4*size, "#7777AAFF", 2, 0, size/3);
    line(ctxt, 11*size, 3*size, 11*size, 4*size, "#7777AAFF", 2, 0, size/3);
}

function beispiel_huffman_2(){
    let can = document.getElementById("beispiel_huffman_2");
    can.width = can.clientWidth;
    can.height = can.clientWidth*0.75;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    let size = can.height / 16;
    
    circle(ctxt, can.width*1/2, 2*size, size, "#00CCFF", "#00FFFF");
    circle(ctxt, can.width*1/4, 5*size, size, "#00CCFF", "#00FFFF");
    circle(ctxt, can.width*3/4, 5*size, size, "#00CCFF", "#00FFFF");
    circle(ctxt, can.width*1/8, 8*size, size, "#00CCFF", "#00FFFF");
    circle(ctxt, can.width*3/8, 8*size, size, "#00CCFF", "#00FFFF");
    circle(ctxt, can.width*1/16, 11*size, size, "#00CCFF", "#00FFFF");
    circle(ctxt, can.width*3/16, 11*size, size, "#00CCFF", "#00FFFF");
    
    circle(ctxt, can.width*3/4, 8*size, size, "#FFCC00", "#FFFF00");
    circle(ctxt, can.width*3/8, 11*size, size, "#FFCC00", "#FFFF00");
    circle(ctxt, can.width*1/16, 14*size, size, "#FFCC00", "#FFFF00");
    circle(ctxt, can.width*3/16, 14*size, size, "#FFCC00", "#FFFF00");

    text(ctxt, "7", can.width*1/2, 2*size, size);
    text(ctxt, "4", can.width*1/4, 5*size, size);
    text(ctxt, "3", can.width*3/4, 5*size, size);
    text(ctxt, "2", can.width*1/8, 8*size, size);
    text(ctxt, "2", can.width*3/8, 8*size, size);
    text(ctxt, "1", can.width*1/16, 11*size, size);
    text(ctxt, "1", can.width*3/16, 11*size, size);
    
    text(ctxt, "n", can.width*3/4, 8*size, size);
    text(ctxt, "e", can.width*3/8, 11*size, size);
    text(ctxt, "b", can.width*1/16, 14*size, size);
    text(ctxt, "r", can.width*3/16, 14*size, size);


    text(ctxt, "0", can.width*1/4, 3*size, size, "#7777AAFF");
    text(ctxt, "1", can.width*3/4, 3*size, size, "#7777AAFF");

    text(ctxt, "0", can.width*1/8, 6*size, size, "#7777AAFF");
    text(ctxt, "1", can.width*3/8, 6*size, size, "#7777AAFF");

    text(ctxt, "0", can.width*1/16, 9*size, size, "#7777AAFF");
    text(ctxt, "1", can.width*3/16, 9*size, size, "#7777AAFF");

    
    line(ctxt, can.width*1/2 + size * Math.cos(Math.PI*3/4), 2*size + size * Math.sin(Math.PI*3/4), can.width*1/4 - size * Math.cos(Math.PI*3/4), 5*size - size * Math.sin(Math.PI*3/4), "#7777AAFF", 2, 0, can.width/50);
    line(ctxt, can.width*1/2 - size * Math.cos(Math.PI*3/4), 2*size + size * Math.sin(Math.PI*3/4), can.width*3/4 + size * Math.cos(Math.PI*3/4), 5*size - size * Math.sin(Math.PI*3/4), "#7777AAFF", 2, 0, can.width/50);

    line(ctxt, can.width*1/4 + size * Math.cos(Math.PI*3/4), 5*size + size * Math.sin(Math.PI*3/4), can.width*1/8, 8*size - size, "#7777AAFF", 2, 0, can.width/50);
    line(ctxt, can.width*1/4 - size * Math.cos(Math.PI*3/4), 5*size + size * Math.sin(Math.PI*3/4), can.width*3/8, 8*size - size, "#7777AAFF", 2, 0, can.width/50);

    line(ctxt, can.width*3/4, 6*size, can.width*3/4, 7*size, "#7777AAFF", 2, 0, can.width/50);
    
    line(ctxt, can.width*1/8 + size * Math.cos(Math.PI*3/4), 8*size + size * Math.sin(Math.PI*3/4), can.width*1/16, 11*size - size, "#7777AAFF", 2, 0, can.width/50);
    line(ctxt, can.width*1/8 - size * Math.cos(Math.PI*3/4), 8*size + size * Math.sin(Math.PI*3/4), can.width*3/16, 11*size - size, "#7777AAFF", 2, 0, can.width/50);

    line(ctxt, can.width*3/8, 9*size, can.width*3/8, 10*size, "#7777AAFF", 2, 0, can.width/50);

    line(ctxt, can.width*1/16, 12*size, can.width*1/16, 13*size, "#7777AAFF", 2, 0, can.width/50);
    line(ctxt, can.width*3/16, 12*size, can.width*3/16, 13*size, "#7777AAFF", 2, 0, can.width/50);
}
