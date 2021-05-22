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
        beispiel_logische_bereiche();
        beispiel_not();
        beispiel_and();
        beispiel_or();
        beispiel_xor();
        beispiel_nand();
        beispiel_nor();
        beispiel_xnor();
        beispiel_halbaddierer();
        beispiel_volladdierer();
    }
}

function beispiel_logische_bereiche(){
    let can = document.getElementById("beispiel_logische_bereiche");
    can.width = can.clientWidth;
    can.height = can.clientWidth;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    line(ctxt, can.width/5, can.height/5, can.width/5, can.height*2/5, "#AAFF00", 2, 0, 0, can.width/50);
    line(ctxt, can.width/5, can.height*2/5, can.width/5, can.height*3/5, "#7777AA", 2, 0);
    line(ctxt, can.width/5, can.height*3/5, can.width/5, can.height*4/5, "#FF0000", 2, 0, can.width/50);
    line(ctxt, can.width*1.25/5, can.height*2/5, can.width*1.25/5, can.height*3/5, "#7777AA", 2, 0, can.width/50, can.width/50);

    text(ctxt, "5V", can.width*0.5/5, can.height/5, can.width/15, "#AAFF00");
    text(ctxt, "0V", can.width*0.5/5, can.height*4/5, can.width/15, "#FF0000");
    text(ctxt, "HIGH", can.width*1.25/5, can.height/4, can.width/15, "#AAFF00", "left");
    text(ctxt, "LOW", can.width*1.25/5, can.height*3/4, can.width/15, "#FF0000", "left");

    text(ctxt, "Sicherheitsabstand", can.width*1.5/5, can.height/2, can.width/15, "#7777AA", "left");
}

function beispiel_not(){
    let can = document.getElementById("beispiel_not");
    can.width = can.clientWidth;
    can.height = can.clientWidth;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    rect(ctxt, can.width*2/7, can.height*2/7, can.width*3/7, can.height*3/7, "#DDDDDD", "#000000", 2);

    text(ctxt, "1", can.width/2, can.height/2, can.width/5);
    circle(ctxt, can.width*5.5/7, can.height/2, can.width*0.5/7, "#DDDDDD", "#000000", 2);

    line(ctxt, can.width/7, can.height/2, can.width*2/7, can.height/2, "#000000", 2);
}

function beispiel_and(){
    let can = document.getElementById("beispiel_and");
    can.width = can.clientWidth;
    can.height = can.clientWidth;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    rect(ctxt, can.width*2/7, can.height*2/7, can.width*3/7, can.height*3/7, "#DDDDDD", "#000000", 2);

    text(ctxt, "&", can.width/2, can.height/2, can.width/5);

    line(ctxt, can.width/7, can.height*2/5, can.width*2/7, can.height*2/5, "#000000", 2);
    line(ctxt, can.width/7, can.height*3/5, can.width*2/7, can.height*3/5, "#000000", 2);

    line(ctxt, can.width*5/7, can.height/2, can.width*6/7, can.height/2, "#000000", 2);
}

function beispiel_or(){
    let can = document.getElementById("beispiel_or");
    can.width = can.clientWidth;
    can.height = can.clientWidth;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    rect(ctxt, can.width*2/7, can.height*2/7, can.width*3/7, can.height*3/7, "#DDDDDD", "#000000", 2);

    text(ctxt, "≥1", can.width/2, can.height/2, can.width/5);

    line(ctxt, can.width/7, can.height*2/5, can.width*2/7, can.height*2/5, "#000000", 2);
    line(ctxt, can.width/7, can.height*3/5, can.width*2/7, can.height*3/5, "#000000", 2);

    line(ctxt, can.width*5/7, can.height/2, can.width*6/7, can.height/2, "#000000", 2);
}

function beispiel_xor(){
    let can = document.getElementById("beispiel_xor");
    can.width = can.clientWidth;
    can.height = can.clientWidth;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    rect(ctxt, can.width*2/7, can.height*2/7, can.width*3/7, can.height*3/7, "#DDDDDD", "#000000", 2);

    text(ctxt, "=1", can.width/2, can.height/2, can.width/5);

    line(ctxt, can.width/7, can.height*2/5, can.width*2/7, can.height*2/5, "#000000", 2);
    line(ctxt, can.width/7, can.height*3/5, can.width*2/7, can.height*3/5, "#000000", 2);

    line(ctxt, can.width*5/7, can.height/2, can.width*6/7, can.height/2, "#000000", 2);
}

function beispiel_nand(){
    let can = document.getElementById("beispiel_nand");
    can.width = can.clientWidth;
    can.height = can.clientWidth;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    rect(ctxt, can.width*2/7, can.height*2/7, can.width*3/7, can.height*3/7, "#DDDDDD", "#000000", 2);

    text(ctxt, "&", can.width/2, can.height/2, can.width/5);

    line(ctxt, can.width/7, can.height*2/5, can.width*2/7, can.height*2/5, "#000000", 2);
    line(ctxt, can.width/7, can.height*3/5, can.width*2/7, can.height*3/5, "#000000", 2);

    circle(ctxt, can.width*5.5/7, can.height/2, can.width*0.5/7, "#DDDDDD", "#000000", 2);
}

function beispiel_nor(){
    let can = document.getElementById("beispiel_nor");
    can.width = can.clientWidth;
    can.height = can.clientWidth;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    rect(ctxt, can.width*2/7, can.height*2/7, can.width*3/7, can.height*3/7, "#DDDDDD", "#000000", 2);

    text(ctxt, "≥1", can.width/2, can.height/2, can.width/5);

    line(ctxt, can.width/7, can.height*2/5, can.width*2/7, can.height*2/5, "#000000", 2);
    line(ctxt, can.width/7, can.height*3/5, can.width*2/7, can.height*3/5, "#000000", 2);

    circle(ctxt, can.width*5.5/7, can.height/2, can.width*0.5/7, "#DDDDDD", "#000000", 2);
}

function beispiel_xnor(){
    let can = document.getElementById("beispiel_xnor");
    can.width = can.clientWidth;
    can.height = can.clientWidth;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    rect(ctxt, can.width*2/7, can.height*2/7, can.width*3/7, can.height*3/7, "#DDDDDD", "#000000", 2);

    text(ctxt, "=1", can.width/2, can.height/2, can.width/5);

    line(ctxt, can.width/7, can.height*2/5, can.width*2/7, can.height*2/5, "#000000", 2);
    line(ctxt, can.width/7, can.height*3/5, can.width*2/7, can.height*3/5, "#000000", 2);

    circle(ctxt, can.width*5.5/7, can.height/2, can.width*0.5/7, "#DDDDDD", "#000000", 2);
}

function beispiel_halbaddierer(){
    let can = document.getElementById("beispiel_halbaddierer");
    can.width = can.clientWidth;
    can.height = can.clientWidth*9/11;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    let size = can.width / 11;

    rect(ctxt, 5*size, 1*size, 3*size, 3*size, "#DDDDDD", "#000000", 2);
    rect(ctxt, 5*size, 5*size, 3*size, 3*size, "#DDDDDD", "#000000", 2);

    text(ctxt, "=1", 6.5*size, 2.5*size, can.width/10);
    text(ctxt, "&", 6.5*size, 6.5*size, can.width/10);
    
    text(ctxt, "A", 1.5*size, 2*size, can.width/10);
    text(ctxt, "B", 1.5*size, 7*size, can.width/10);

    text(ctxt, "S", 10*size, 2.5*size, can.width/10);
    text(ctxt, "C", 10*size, 6.5*size, can.width/10);

    line(ctxt, 2*size, 2*size, 5*size, 2*size, "#000000", 2);
    line(ctxt, 2*size, 7*size, 5*size, 7*size, "#000000", 2);
    line(ctxt, 3*size, 3*size, 5*size, 3*size, "#000000", 2);
    line(ctxt, 4*size, 6*size, 5*size, 6*size, "#000000", 2);
    line(ctxt, 3*size, 3*size, 3*size, 7*size, "#000000", 2);
    line(ctxt, 4*size, 2*size, 4*size, 6*size, "#000000", 2);

    circle(ctxt, 4*size, 2*size, 4, "#000000");
    circle(ctxt, 3*size, 7*size, 4, "#000000");

    line(ctxt, 8*size, 2.5*size, 9.5*size, 2.5*size, "#000000", 2);
    line(ctxt, 8*size, 6.5*size, 9.5*size, 6.5*size, "#000000", 2);
}

function beispiel_volladdierer(){
    let can = document.getElementById("beispiel_volladdierer");
    can.width = can.clientWidth;
    can.height = can.clientWidth*7/17;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    let size = can.width/17;

    rect(ctxt, 3*size, 3*size, 3*size, 3*size, "#DDDDDD", "#000000", 2);
    rect(ctxt, 7*size, 1*size, 3*size, 3*size, "#DDDDDD", "#000000", 2);
    rect(ctxt, 11*size, 3*size, 3*size, 3*size, "#DDDDDD", "#000000", 2);
    
    text(ctxt, "HA", 4.5*size, 4.5*size, can.width/15);
    text(ctxt, "HA", 8.5*size, 2.5*size, can.width/15);
    text(ctxt, "≥1", 12.5*size, 4.5*size, can.width/15);

    text(ctxt, "A", 1.5*size, 1.5*size, can.width/15);
    text(ctxt, "B", 1.5*size, 3.5*size, can.width/15);
    text(ctxt, "C", 1.5*size, 5.5*size, can.width/15);
    text(ctxt, "S", 16*size, 1.5*size, can.width/15);
    text(ctxt, "C", 16*size, 4.5*size, can.width/15);

    line(ctxt, 2*size, 1.5*size, 7*size, 1.5*size, "#000000", 2);
    line(ctxt, 2*size, 3.5*size, 3*size, 3.5*size, "#000000", 2);
    line(ctxt, 2*size, 5.5*size, 3*size, 5.5*size, "#000000", 2);

    line(ctxt, 6*size, 3.5*size, 7*size, 3.5*size, "#000000", 2);
    line(ctxt, 6*size, 5.5*size, 11*size, 5.5*size, "#000000", 2);

    line(ctxt, 10*size, 1.5*size, 15*size, 1.5*size, "#000000", 2);
    line(ctxt, 10*size, 3.5*size, 11*size, 3.5*size, "#000000", 2);

    line(ctxt, 14*size, 4.5*size, 15*size, 4.5*size, "#000000", 2);
}
