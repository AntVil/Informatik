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
        beispiel_rs_nor_latch();
        beispiel_taktgesteuertes_rs_flipflop();
        beispiel_taktgesteuertes_d_flipflop();
        beispiel_impulsglied();
        beispiel_einflankengesteuertes_rs_flipflop();
        beispiel_einflankengesteuertes_d_flipflop();
        beispiel_einflankengesteuertes_jk_flipflop();
        beispiel_zweiflankengesteuertes_jk_flipflop();
    }
}

function beispiel_rs_nor_latch(){
    let can = document.getElementById("beispiel_rs_nor_latch");
    can.width = can.clientWidth;
    can.height = can.clientWidth*9/12;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    let size= can.width/12;

    rect(ctxt, 4*size, 1*size, 3*size, 3*size, "#DDDDDD", "#000000", 2);
    rect(ctxt, 4*size, 5*size, 3*size, 3*size, "#DDDDDD", "#000000", 2);
    circle(ctxt, 7.5*size, 2.5*size, size/2, "#DDDDDD", "#000000", 2);
    circle(ctxt, 7.5*size, 6.5*size, size/2, "#DDDDDD", "#000000", 2);

    text(ctxt, "≥1", 5.5*size, 2.5*size, can.width/10);
    text(ctxt, "≥1", 5.5*size, 6.5*size, can.width/10);

    text(ctxt, "R", 1.5*size, 2*size, can.width/10);
    text(ctxt, "S", 1.5*size, 7*size, can.width/10);

    text(ctxt, "Q", 10.5*size, 2.5*size, can.width/10);
    text(ctxt, "¬Q", 10.5*size, 6.5*size, can.width/10);

    line(ctxt, 2*size, 2*size, 4*size, 2*size, "#000000", 2);
    line(ctxt, 2*size, 3*size, 4*size, 3*size, "#000000", 2);
    line(ctxt, 3*size, 6*size, 4*size, 6*size, "#000000", 2);
    line(ctxt, 2*size, 7*size, 4*size, 7*size, "#000000", 2);

    line(ctxt, 2*size, 3*size, 2*size, 4.7*size, "#000000", 2);
    line(ctxt, 2*size, 4.7*size, 9*size, 4.7*size,"#000000", 2);
    
    line(ctxt, 3*size, 6*size, 3*size, 4.3*size, "#000000", 2);
    line(ctxt, 3*size, 4.3*size, 9*size, 4.3*size, "#000000", 2);

    line(ctxt, 8*size, 2.5*size, 10*size, 2.5*size, "#000000", 2);
    line(ctxt, 8*size, 6.5*size, 10*size, 6.5*size, "#000000", 2);

    line(ctxt, 9*size, 4.3*size, 9*size, 2.5*size, "#000000", 2);
    line(ctxt, 9*size, 4.7*size, 9*size, 6.5*size, "#000000", 2);

    circle(ctxt, 9*size, 2.5*size, 4, "#000000");
    circle(ctxt, 9*size, 6.5*size, 4, "#000000");
}

function beispiel_taktgesteuertes_rs_flipflop(){
    let can = document.getElementById("beispiel_taktgesteuertes_rs_flipflop");
    can.width = can.clientWidth;
    can.height = can.clientWidth*8/14;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    let size = can.width/14;

    rect(ctxt, 4*size, 1*size, 3*size, 3*size, "#DDDDDD", "#000000", 2);
    rect(ctxt, 4*size, 4*size, 3*size, 3*size, "#DDDDDD", "#000000", 2);
    rect(ctxt, 8*size, 2.5*size, 3*size, 3*size, "#DDDDDD", "#000000", 2);

    text(ctxt, "&", 5.5*size, 2.5*size, can.width/10);
    text(ctxt, "&", 5.5*size, 5.5*size, can.width/10);

    text(ctxt, "R", 8.7*size, 3.3*size, can.width/10);
    text(ctxt, "S", 8.7*size, 4.7*size, can.width/10);
    text(ctxt, "Q", 10.3*size, 3.3*size, can.width/10);
    text(ctxt, "¬Q", 10*size, 4.7*size, can.width/10);

    text(ctxt, "R", 1.5*size, 2*size, can.width/10);
    text(ctxt, "T", 1.5*size, 4*size, can.width/10);
    text(ctxt, "S", 1.5*size, 6*size, can.width/10);

    text(ctxt, "Q", 12.5*size, 3*size, can.width/10);
    text(ctxt, "¬Q", 12.5*size, 5*size, can.width/10);

    line(ctxt, 2*size, 2*size, 4*size, 2*size, "#000000", 2);
    line(ctxt, 2*size, 6*size, 4*size, 6*size, "#000000", 2);

    line(ctxt, 2*size, 4*size, 3*size, 4*size, "#000000", 2);

    line(ctxt, 3*size, 3*size, 3*size, 5*size, "#000000", 2);

    line(ctxt, 3*size, 3*size, 4*size, 3*size, "#000000", 2);
    line(ctxt, 3*size, 5*size, 4*size, 5*size, "#000000", 2);

    line(ctxt, 7*size, 2.5*size, 8*size, 3*size, "#000000", 2);
    line(ctxt, 7*size, 5.5*size, 8*size, 5*size, "#000000", 2);

    line(ctxt, 11*size, 3*size, 12*size, 3*size, "#000000", 2);
    line(ctxt, 11*size, 5*size, 12*size, 5*size, "#000000", 2);

    circle(ctxt, 3*size, 4*size, 4, "#000000");
}

function beispiel_taktgesteuertes_d_flipflop(){
    let can = document.getElementById("beispiel_taktgesteuertes_d_flipflop");
    can.width = can.clientWidth;
    can.height = can.clientWidth*6/10;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    let size = can.width/10;

    rect(ctxt, 4*size, 1*size, 3*size, 4*size, "#DDDDDD", "#000000", 2);

    text(ctxt, "R", 4.5*size, 1.6*size, can.width/10);
    text(ctxt, "T", 4.5*size, 3*size, can.width/10);
    text(ctxt, "S", 4.5*size, 4.5*size, can.width/10);
    text(ctxt, "Q", 6.3*size, 2*size, can.width/10);
    text(ctxt, "¬Q", 6*size, 4*size, can.width/10);

    text(ctxt, "D", 1.5*size, 1.5*size, can.width/10);
    text(ctxt, "T", 1.5*size, 3*size, can.width/10);

    text(ctxt, "Q", 8.5*size, 2*size, can.width/10);
    text(ctxt, "¬Q", 8.5*size, 4*size, can.width/10);

    line(ctxt, 2*size, 1.5*size, 4*size, 1.5*size, "#000000", 2);
    line(ctxt, 2*size, 3*size, 4*size, 3*size, "#000000", 2);

    line(ctxt, 3*size, 1.5*size, 3*size, 4.5*size, "#000000", 2);
    line(ctxt, 3*size, 4.5*size, 4*size, 4.5*size, "#000000", 2);

    line(ctxt, 7*size, 2*size, 8*size, 2*size, "#000000", 2);
    line(ctxt, 7*size, 4*size, 8*size, 4*size, "#000000", 2);

    circle(ctxt, 3*size, 1.5*size, 4, "#000000");
}

function beispiel_impulsglied(){
    let can = document.getElementById("beispiel_impulsglied");
    can.width = can.clientWidth;
    can.height = can.clientWidth*6/15;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    let size = can.width/15;

    rect(ctxt, 4*size, 2*size, 3*size, 3*size, "#DDDDDD", "#000000", 2);
    rect(ctxt, 9*size, 1*size, 3*size, 3*size, "#DDDDDD", "#000000", 2);
    circle(ctxt, 7.5*size, 3.5*size, size/2, "#DDDDDD", "#000000", 2);

    text(ctxt, "1", 5.5*size, 3.5*size, can.width/10);
    text(ctxt, "&", 10.5*size, 2.5*size, can.width/10);

    text(ctxt, "T", 1.5*size, 4.5*size, can.width/10);
    text(ctxt, "F", 13.5*size, 2.5*size, can.width/10);

    line(ctxt, 2*size, 4.5*size, 4*size, 4.5*size, "#000000", 2);

    line(ctxt, 3*size, 4.5*size, 3*size, 1.5*size, "#000000", 2);
    line(ctxt, 3*size, 1.5*size, 9*size, 1.5*size, "#000000", 2);
    
    line(ctxt, 8*size, 3.5*size, 9*size, 3.5*size, "#000000", 2);

    line(ctxt, 12*size, 2.5*size, 13*size, 2.5*size, "#000000", 2);

    circle(ctxt, 3*size, 4.5*size, 4, "#000000");
}

function beispiel_einflankengesteuertes_rs_flipflop(){
    let can = document.getElementById("beispiel_einflankengesteuertes_rs_flipflop");
    can.width = can.clientWidth;
    can.height = can.clientWidth*8/14;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    let size = can.width/14;

    rect(ctxt, 4*size, 1*size, 3*size, 3*size, "#DDDDDD", "#000000", 2);
    rect(ctxt, 4*size, 4*size, 3*size, 3*size, "#DDDDDD", "#000000", 2);
    rect(ctxt, 8*size, 2.5*size, 3*size, 3*size, "#DDDDDD", "#000000", 2);

    text(ctxt, "&", 5.5*size, 2.5*size, can.width/10);
    text(ctxt, "&", 5.5*size, 5.5*size, can.width/10);

    text(ctxt, "R", 8.7*size, 3.3*size, can.width/10);
    text(ctxt, "S", 8.7*size, 4.7*size, can.width/10);
    text(ctxt, "Q", 10.3*size, 3.3*size, can.width/10);
    text(ctxt, "¬Q", 10*size, 4.7*size, can.width/10);

    text(ctxt, "R", 1.5*size, 2*size, can.width/10);
    text(ctxt, "T", 1.5*size, 4*size, can.width/10);
    text(ctxt, "S", 1.5*size, 6*size, can.width/10);

    text(ctxt, "Q", 12.5*size, 3*size, can.width/10);
    text(ctxt, "¬Q", 12.5*size, 5*size, can.width/10);

    line(ctxt, 2*size, 2*size, 4*size, 2*size, "#000000", 2);
    line(ctxt, 2*size, 6*size, 4*size, 6*size, "#000000", 2);

    line(ctxt, 2*size, 4*size, 3*size, 4*size, "#000000", 2);

    line(ctxt, 3*size, 3*size, 3*size, 5*size, "#000000", 2);

    line(ctxt, 3*size, 3*size, 4*size, 3*size, "#000000", 2);
    line(ctxt, 3*size, 5*size, 4*size, 5*size, "#000000", 2);

    line(ctxt, 7*size, 2.5*size, 8*size, 3*size, "#000000", 2);
    line(ctxt, 7*size, 5.5*size, 8*size, 5*size, "#000000", 2);

    line(ctxt, 11*size, 3*size, 12*size, 3*size, "#000000", 2);
    line(ctxt, 11*size, 5*size, 12*size, 5*size, "#000000", 2);

    circle(ctxt, 3*size, 4*size, 4, "#000000");

    line(ctxt, 4*size, 2.75*size, 4.5*size, 3*size, "#000000", 2);
    line(ctxt, 4*size, 3.25*size, 4.5*size, 3*size, "#000000", 2);

    line(ctxt, 4*size, 4.75*size, 4.5*size, 5*size, "#000000", 2);
    line(ctxt, 4*size, 5.25*size, 4.5*size, 5*size, "#000000", 2);
}

function beispiel_einflankengesteuertes_d_flipflop(){
    let can = document.getElementById("beispiel_einflankengesteuertes_d_flipflop");
    can.width = can.clientWidth;
    can.height = can.clientWidth*6/10;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    let size = can.width/10;

    rect(ctxt, 4*size, 1*size, 3*size, 4*size, "#DDDDDD", "#000000", 2);

    text(ctxt, "R", 4.5*size, 1.6*size, can.width/10);
    text(ctxt, "T", 4.75*size, 3*size, can.width/10);
    text(ctxt, "S", 4.5*size, 4.5*size, can.width/10);
    text(ctxt, "Q", 6.3*size, 2*size, can.width/10);
    text(ctxt, "¬Q", 6*size, 4*size, can.width/10);

    text(ctxt, "D", 1.5*size, 1.5*size, can.width/10);
    text(ctxt, "T", 1.5*size, 3*size, can.width/10);

    text(ctxt, "Q", 8.5*size, 2*size, can.width/10);
    text(ctxt, "¬Q", 8.5*size, 4*size, can.width/10);

    line(ctxt, 2*size, 1.5*size, 4*size, 1.5*size, "#000000", 2);
    line(ctxt, 2*size, 3*size, 4*size, 3*size, "#000000", 2);

    line(ctxt, 3*size, 1.5*size, 3*size, 4.5*size, "#000000", 2);
    line(ctxt, 3*size, 4.5*size, 4*size, 4.5*size, "#000000", 2);

    line(ctxt, 7*size, 2*size, 8*size, 2*size, "#000000", 2);
    line(ctxt, 7*size, 4*size, 8*size, 4*size, "#000000", 2);

    circle(ctxt, 3*size, 1.5*size, 4, "#000000");

    line(ctxt, 4*size, 2.75*size, 4.5*size, 3*size, "#000000", 2);
    line(ctxt, 4*size, 3.25*size, 4.5*size, 3*size, "#000000", 2);
}

function beispiel_einflankengesteuertes_jk_flipflop(){
    let can = document.getElementById("beispiel_einflankengesteuertes_jk_flipflop");
    can.width = can.clientWidth;
    can.height = can.clientWidth*12/15;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    let size = can.width/15;

    rect(ctxt, 4*size, 2*size, 3*size, 3*size, "#DDDDDD", "#000000", 2);
    rect(ctxt, 4*size, 7*size, 3*size, 3*size, "#DDDDDD", "#000000", 2);
    rect(ctxt, 8*size, 4*size, 3*size, 4*size, "#DDDDDD", "#000000", 2);

    text(ctxt, "&", 5.5*size, 3.5*size, can.width/12);
    text(ctxt, "&", 5.5*size, 8.5*size, can.width/12);
    
    text(ctxt, "R", 8.5*size, 4.6*size, can.width/12);
    text(ctxt, "T", 8.75*size, 6*size, can.width/12);
    text(ctxt, "S", 8.5*size, 7.5*size, can.width/12);
    text(ctxt, "Q", 10.3*size, 5*size, can.width/12);
    text(ctxt, "¬Q", 10*size, 7*size, can.width/12);

    text(ctxt, "J", 1.5*size, 4*size, can.width/12);
    text(ctxt, "T", 1.5*size, 6*size, can.width/12);
    text(ctxt, "K", 1.5*size, 8*size, can.width/12);
    text(ctxt, "Q", 13.5*size, 5*size, can.width/12);
    text(ctxt, "¬Q", 13.5*size, 7*size, can.width/12);

    line(ctxt, 2*size, 4*size, 4*size, 4*size, "#000000", 2);
    line(ctxt, 2*size, 8*size, 4*size, 8*size, "#000000", 2);

    line(ctxt, 2*size, 6*size, 8*size, 6*size, "#000000", 2);

    line(ctxt, 7*size, 3.5*size, 8*size, 4.5*size, "#000000", 2);
    line(ctxt, 7*size, 8.5*size, 8*size, 7.5*size, "#000000", 2);

    line(ctxt, 11*size, 5*size, 13*size, 5*size, "#000000", 2);
    line(ctxt, 11*size, 7*size, 13*size, 7*size, "#000000", 2);

    line(ctxt, 12*size, 7*size, 12*size, 1*size, "#000000", 2);
    line(ctxt, 11.5*size, 5*size, 11.5*size, 11*size, "#000000", 2);

    line(ctxt, 12*size, 1*size, 3*size, 1*size, "#000000", 2);
    line(ctxt, 11.5*size, 11*size, 3*size, 11*size, "#000000", 2);

    line(ctxt, 3*size, 1*size, 3*size, 3*size, "#000000", 2);
    line(ctxt, 3*size, 11*size, 3*size, 9*size, "#000000", 2);

    line(ctxt, 3*size, 3*size, 4*size, 3*size, "#000000", 2);
    line(ctxt, 3*size, 9*size, 4*size, 9*size, "#000000", 2);

    line(ctxt, 8*size, 5.75*size, 8.4*size, 6*size, "#000000", 2);
    line(ctxt, 8*size, 6.25*size, 8.4*size, 6*size, "#000000", 2);
}

function beispiel_zweiflankengesteuertes_jk_flipflop(){
    let can = document.getElementById("beispiel_zweiflankengesteuertes_jk_flipflop");
    can.width = can.clientWidth;
    can.height = can.clientWidth*7/16;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    let size = can.width/16;

    rect(ctxt, 4*size, 1*size, 3*size, 4*size, "#DDDDDD", "#000000", 2);
    text(ctxt, "R", 4.5*size, 1.6*size, can.width/12);
    text(ctxt, "T", 4.75*size, 3*size, can.width/12);
    text(ctxt, "S", 4.5*size, 4.5*size, can.width/12);
    text(ctxt, "Q", 6.3*size, 2*size, can.width/12);
    text(ctxt, "¬Q", 6*size, 4*size, can.width/12);

    rect(ctxt, 10*size, 1*size, 3*size, 4*size, "#DDDDDD", "#000000", 2);
    text(ctxt, "R", 10.5*size, 1.6*size, can.width/12);
    text(ctxt, "T", 10.75*size, 3*size, can.width/12);
    text(ctxt, "S", 10.5*size, 4.5*size, can.width/12);
    text(ctxt, "Q", 12.3*size, 2*size, can.width/12);
    text(ctxt, "¬Q", 12*size, 4*size, can.width/12);

    circle(ctxt, 9.5*size, 3*size, size/2, "#DDDDDD", "#000000", 2);

    text(ctxt, "J", 1.5*size, 1.5*size, can.width/12);
    text(ctxt, "T", 1.5*size, 3*size, can.width/12);
    text(ctxt, "K", 1.5*size, 4.5*size, can.width/12);
    text(ctxt, "Q", 14.5*size, 1.75*size, can.width/12);
    text(ctxt, "¬Q", 14.5*size, 4.25*size, can.width/12);

    line(ctxt, 2*size, 1.5*size, 4*size, 1.5*size, "#000000", 2);
    line(ctxt, 2*size, 3*size, 4*size, 3*size, "#000000", 2);
    line(ctxt, 2*size, 4.5*size, 4*size, 4.5*size, "#000000", 2);

    line(ctxt, 7*size, 1.5*size, 10*size, 1.5*size, "#000000", 2);
    line(ctxt, 8*size, 3*size, 9*size, 3*size, "#000000", 2);
    line(ctxt, 7*size, 4.5*size, 10*size, 4.5*size, "#000000", 2);

    line(ctxt, 3*size, 3*size, 3*size, 6*size, "#000000", 2);
    line(ctxt, 3*size, 6*size, 8*size, 6*size, "#000000", 2);
    line(ctxt, 8*size, 6*size, 8*size, 3*size, "#000000", 2);

    line(ctxt, 13*size, 1.75*size, 14*size, 1.75*size, "#000000", 2);
    line(ctxt, 13*size, 4.25*size, 14*size, 4.25*size, "#000000", 2);

    circle(ctxt, 3*size, 3*size, 4, "#000000");

    line(ctxt, 4*size, 2.75*size, 4.4*size, 3*size, "#000000", 2);
    line(ctxt, 4*size, 3.25*size, 4.4*size, 3*size, "#000000", 2);

    line(ctxt, 10*size, 2.75*size, 10.4*size, 3*size, "#000000", 2);
    line(ctxt, 10*size, 3.25*size, 10.4*size, 3*size, "#000000", 2);
}
