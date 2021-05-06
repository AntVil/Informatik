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
        beispiel_menge();
        beispiel_vereinigung();
        beispiel_schnitt();
        beispiel_differenz();
        beispiel_komplement();
    }
}


function beispiel_menge(){
    let can = document.getElementById("beispiel_menge");
    can.width = can.clientWidth;
    can.height = can.clientWidth;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    rect(ctxt, can.width/6, can.height/6, can.width/1.5, can.height/1.5, "#0099FFFF", "#00000000", 1, can.width/10);
    circle(ctxt, can.width/3, can.height/3, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*2/3, can.height/3, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width/3, can.height*2/3, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*2/3, can.height*2/3, can.width/15, "#00CCFFFF", "#00FFFFFF");
    text(ctxt, "a", can.width/3, can.height/3, can.width/15);
    text(ctxt, "b", can.width*2/3, can.height/3, can.width/15);
    text(ctxt, "c", can.width/3, can.height*2/3, can.width/15);
    text(ctxt, "d", can.width*2/3, can.height*2/3, can.width/15);
}


function beispiel_vereinigung(){
    let can = document.getElementById("beispiel_vereinigung");
    can.width = can.clientWidth;
    can.height = can.clientWidth;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    rect(ctxt, can.width/7, can.height/7, can.width*5/7, can.height*5/7, "#AAAAAAFF", "#00000000", 1, can.width/10);
    rect(ctxt, can.width/7, can.height*2.5/7, can.width*3.5/7, can.height*3.5/7, "#FF990099", "#00000000", 1, can.width/10);
    rect(ctxt, can.width*2.5/7, can.height/7, can.width*3.5/7, can.height*3.5/7, "#FF990099", "#00000000", 1, can.width/10);
    circle(ctxt, can.width/4, can.height/4, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width/2, can.height/4, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*3/4, can.height/4, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width/4, can.height/2, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width/2, can.height/2, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*3/4, can.height/2, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width/4, can.height*3/4, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width/2, can.height*3/4, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*3/4, can.height*3/4, can.width/15, "#00CCFFFF", "#00FFFFFF");
    text(ctxt, "a", can.width/4, can.height/4, can.width/15);
    text(ctxt, "b", can.width/2, can.height/4, can.width/15);
    text(ctxt, "c", can.width*3/4, can.height/4, can.width/15);
    text(ctxt, "d", can.width/4, can.height/2, can.width/15);
    text(ctxt, "e", can.width/2, can.height/2, can.width/15);
    text(ctxt, "f", can.width*3/4, can.height/2, can.width/15);
    text(ctxt, "g", can.width/4, can.height*3/4, can.width/15);
    text(ctxt, "h", can.width/2, can.height*3/4, can.width/15);
    text(ctxt, "i", can.width*3/4, can.height*3/4, can.width/15);
}

function beispiel_schnitt(){
    let can = document.getElementById("beispiel_schnitt");
    can.width = can.clientWidth;
    can.height = can.clientWidth;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    rect(ctxt, can.width/7, can.height/7, can.width*5/7, can.height*5/7, "#AAAAAAFF", "#00000000", 1, can.width/10);
    rect(ctxt, can.width/7, can.height*2.5/7, can.width*3.5/7, can.height*3.5/7, "#999999FF", "#00000000", 1, can.width/10);
    rect(ctxt, can.width*2.5/7, can.height/7, can.width*3.5/7, can.height*3.5/7, "#999999FF", "#00000000", 1, can.width/10);
    rect(ctxt, can.width*2.5/7, can.height*2.5/7, can.width*2/7, can.height*2/7, "#AA00AAFF", "#00000000", 1, can.width/10);
    rect(ctxt, can.width*2.5/7, can.height*2.5/7, can.width*1/7, can.height*1/7, "#AA00AAFF", "#00000000");
    rect(ctxt, can.width*3.5/7, can.height*3.5/7, can.width*1/7, can.height*1/7, "#AA00AAFF", "#00000000");
    circle(ctxt, can.width/4, can.height/4, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width/2, can.height/4, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*3/4, can.height/4, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width/4, can.height/2, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width/2, can.height/2, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*3/4, can.height/2, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width/4, can.height*3/4, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width/2, can.height*3/4, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*3/4, can.height*3/4, can.width/15, "#00CCFFFF", "#00FFFFFF");
    text(ctxt, "a", can.width/4, can.height/4, can.width/15);
    text(ctxt, "b", can.width/2, can.height/4, can.width/15);
    text(ctxt, "c", can.width*3/4, can.height/4, can.width/15);
    text(ctxt, "d", can.width/4, can.height/2, can.width/15);
    text(ctxt, "e", can.width/2, can.height/2, can.width/15);
    text(ctxt, "f", can.width*3/4, can.height/2, can.width/15);
    text(ctxt, "g", can.width/4, can.height*3/4, can.width/15);
    text(ctxt, "h", can.width/2, can.height*3/4, can.width/15);
    text(ctxt, "i", can.width*3/4, can.height*3/4, can.width/15);
}

function beispiel_differenz(){
    let can = document.getElementById("beispiel_differenz");
    can.width = can.clientWidth;
    can.height = can.clientWidth;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    rect(ctxt, can.width/7, can.height/7, can.width*5/7, can.height*5/7, "#AAAAAAFF", "#00000000", 1, can.width/10);
    rect(ctxt, can.width/7, can.height*2.5/7, can.width*3.5/7, can.height*3.5/7, "#00FF0099", "#00000000", 1, can.width/10);
    rect(ctxt, can.width*2.5/7, can.height/7, can.width*3.5/7, can.height*3.5/7, "#999999FF", "#00000000", 1, can.width/10);
    rect(ctxt, can.width*2.5/7, can.height*2.5/7, can.width*2/7, can.height*2/7, "#888888FF", "#00000000", 1, can.width/10);
    rect(ctxt, can.width*2.5/7, can.height*2.5/7, can.width*1/7, can.height*1/7, "#888888FF", "#00000000");
    rect(ctxt, can.width*3.5/7, can.height*3.5/7, can.width*1/7, can.height*1/7, "#888888FF", "#00000000");
    circle(ctxt, can.width/4, can.height/4, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width/2, can.height/4, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*3/4, can.height/4, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width/4, can.height/2, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width/2, can.height/2, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*3/4, can.height/2, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width/4, can.height*3/4, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width/2, can.height*3/4, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*3/4, can.height*3/4, can.width/15, "#00CCFFFF", "#00FFFFFF");
    text(ctxt, "a", can.width/4, can.height/4, can.width/15);
    text(ctxt, "b", can.width/2, can.height/4, can.width/15);
    text(ctxt, "c", can.width*3/4, can.height/4, can.width/15);
    text(ctxt, "d", can.width/4, can.height/2, can.width/15);
    text(ctxt, "e", can.width/2, can.height/2, can.width/15);
    text(ctxt, "f", can.width*3/4, can.height/2, can.width/15);
    text(ctxt, "g", can.width/4, can.height*3/4, can.width/15);
    text(ctxt, "h", can.width/2, can.height*3/4, can.width/15);
    text(ctxt, "i", can.width*3/4, can.height*3/4, can.width/15);
}

function beispiel_komplement(){
    let can = document.getElementById("beispiel_komplement");
    can.width = can.clientWidth;
    can.height = can.clientWidth;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    rect(ctxt, can.width/7, can.height/7, can.width*5/7, can.height*5/7, "#FF999999", "#00000000", 1, can.width/10);
    rect(ctxt, can.width/7, can.height*2.5/7, can.width*3.5/7, can.height*3.5/7, "#999999FF", "#00000000", 1, can.width/10);
    rect(ctxt, can.width*2.5/7, can.height*2.5/7, can.width*2/7, can.height*2/7, "#888888FF", "#00000000", 1, can.width/10);
    rect(ctxt, can.width*2.5/7, can.height*2.5/7, can.width*1/7, can.height*1/7, "#888888FF", "#00000000");
    rect(ctxt, can.width*3.5/7, can.height*3.5/7, can.width*1/7, can.height*1/7, "#888888FF", "#00000000");
    circle(ctxt, can.width/4, can.height/4, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width/2, can.height/4, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*3/4, can.height/4, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width/4, can.height/2, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width/2, can.height/2, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*3/4, can.height/2, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width/4, can.height*3/4, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width/2, can.height*3/4, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*3/4, can.height*3/4, can.width/15, "#00CCFFFF", "#00FFFFFF");
    text(ctxt, "a", can.width/4, can.height/4, can.width/15);
    text(ctxt, "b", can.width/2, can.height/4, can.width/15);
    text(ctxt, "c", can.width*3/4, can.height/4, can.width/15);
    text(ctxt, "d", can.width/4, can.height/2, can.width/15);
    text(ctxt, "e", can.width/2, can.height/2, can.width/15);
    text(ctxt, "f", can.width*3/4, can.height/2, can.width/15);
    text(ctxt, "g", can.width/4, can.height*3/4, can.width/15);
    text(ctxt, "h", can.width/2, can.height*3/4, can.width/15);
    text(ctxt, "i", can.width*3/4, can.height*3/4, can.width/15);
}