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
        beispiel_arithmetische_folge();
        beispiel_geometrische_folge();
        beispiel_arithmetische_reihe();
        beispiel_geometrische_reihe();
    }
}

function beispiel_arithmetische_folge(){
    let can = document.getElementById("beispiel_arithmetische_folge");
    can.width = can.clientWidth;
    can.height = can.clientWidth;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    line(ctxt, can.width/5, can.height*2/3, can.width*4/5, can.height*2/3, "#000000FF", 2, 0, can.width/30);
    line(ctxt, can.width/5, can.height*4/5, can.width/5, can.height/5, "#000000FF", 2, 0, can.width/30);
    let points = 10;
    for(let i=0;i<points;i++){
        let x = can.width/5 + can.width*3/5 * (i/points);
        let y = can.height*3/5 - 0.3 * can.height * i / points
        line(ctxt, x, can.height*2/3, x, y, "#FF9900FF")
        circle(ctxt, x, y, can.width/60, "#FF9900FF", "#00000000");
    }
}

function beispiel_geometrische_folge(){
    let can = document.getElementById("beispiel_geometrische_folge");
    can.width = can.clientWidth;
    can.height = can.clientWidth;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    line(ctxt, can.width/5, can.height*2/3, can.width*4/5, can.height*2/3, "#000000FF", 2, 0, can.width/30);
    line(ctxt, can.width/5, can.height*4/5, can.width/5, can.height/5, "#000000FF", 2, 0, can.width/30);
    let points = 10;
    for(let i=0;i<points;i++){
        let x = can.width/5 + can.width*3/5 * (i/points);
        let y = can.height*2/3 - can.height * Math.pow(0.666, i+3);
        line(ctxt, x, can.height*2/3, x, y, "#AA00AAFF")
        circle(ctxt, x, y, can.width/60, "#AA00AAFF", "#00000000");
    }
}

function beispiel_arithmetische_reihe(){
    let can = document.getElementById("beispiel_arithmetische_reihe");
    can.width = can.clientWidth;
    can.height = can.clientWidth;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    line(ctxt, can.width/5, can.height*2/3, can.width*4/5, can.height*2/3, "#000000FF", 2, 0, can.width/30);
    line(ctxt, can.width/5, can.height*4/5, can.width/5, can.height/5, "#000000FF", 2, 0, can.width/30);
    let points = 10;
    let s = 0;
    for(let i=0;i<points;i++){
        let x = can.width/5 + can.width*3/5 * (i/points);
        let y = can.height*2/3 - s;
        line(ctxt, x, can.height*2/3, x, y, "#995500FF")
        circle(ctxt, x, y, can.width/60, "#995500FF", "#00000000");

        s += can.height * i / 80;
    }
}

function beispiel_geometrische_reihe(){
    let can = document.getElementById("beispiel_geometrische_reihe");
    can.width = can.clientWidth;
    can.height = can.clientWidth;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    line(ctxt, can.width/5, can.height*2/3, can.width*4/5, can.height*2/3, "#000000FF", 2, 0, can.width/30);
    line(ctxt, can.width/5, can.height*4/5, can.width/5, can.height/5, "#000000FF", 2, 0, can.width/30);
    let points = 10;
    for(let i=0;i<points;i++){
        let x = can.width/5 + can.width*3/5 * (i/points);
        let y = can.height*2/3 - can.width/10 * (Math.pow(0.7, i) - 1) / (0.7 - 1);
        line(ctxt, x, can.height*2/3, x, y, "#00AAAAFF")
        circle(ctxt, x, y, can.width/60, "#006666FF", "#00000000");
    }
}
