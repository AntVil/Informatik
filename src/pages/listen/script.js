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
        beispiel_liste();
        beispiel_doppel_liste();
        beispiel_stack();
        beispiel_queue();
    }
}


function beispiel_liste(){
    let can = document.getElementById("beispiel_liste");
    can.width = can.clientWidth;
    can.height = can.clientWidth/5;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    let size = can.height/10;

    rect(ctxt, size, size, (can.height - 2*size) * 1.5, can.height - 2*size, "#00AAFF", "#00000000", 1, can.width/30);
    rect(ctxt, size, size, can.height - 2*size, can.height - 2*size, "#FFAA00", "#00000000", 1, can.width/30);

    rect(ctxt, size + (can.height - 2*size) * 2, size, (can.height - 2*size) * 1.5, can.height - 2*size, "#00AAFF", "#00000000", 1, can.width/30);
    rect(ctxt, size + (can.height - 2*size) * 2, size, can.height - 2*size, can.height - 2*size, "#FFAA00", "#00000000", 1, can.width/30);
    
    rect(ctxt, size + (can.height - 2*size) * 4, size, (can.height - 2*size) * 1.5, can.height - 2*size, "#00AAFF", "#00000000", 1, can.width/30);
    rect(ctxt, size + (can.height - 2*size) * 4, size, can.height - 2*size, can.height - 2*size, "#FFAA00", "#00000000", 1, can.width/30);
    

    line(ctxt, (can.height - 2*size) * 1.5 * 4/5 + size, can.height/2, size + (can.height - 2*size) * 2, can.height/2, "#7777AA", 2, 0, can.width/50);
    line(ctxt, size + (can.height - 2*size) * 2 + (can.height - 2*size) * 1.5 * 4/5, can.height/2, size + (can.height - 2*size) * 4, can.height/2, "#7777AA", 2, 0, can.width/50);
    line(ctxt, size + (can.height - 2*size) * 4 + (can.height - 2*size) * 1.5 * 4/5, can.height/2, size + (can.height - 2*size) * 6, can.height/2, "#7777AA", 2, 0, can.width/50);
}

function beispiel_doppel_liste(){
    let can = document.getElementById("beispiel_doppel_liste");
    can.width = can.clientWidth;
    can.height = can.clientWidth/5;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    let size = can.height/10;

    rect(ctxt, size + (can.height - 2*size)*0.5, size, (can.height - 2*size) * 2, can.height - 2*size, "#00AAFF", "#00000000", 1, can.width/30);
    rect(ctxt, size + (can.height - 2*size)*0.5 + (can.height - 2*size)/2, size, can.height - 2*size, can.height - 2*size, "#FFAA00", "#00000000", 1, can.width/30);

    rect(ctxt, size + (can.height - 2*size)*0.5 + (can.height - 2*size)*2.5, size, (can.height - 2*size) * 2, can.height - 2*size, "#00AAFF", "#00000000", 1, can.width/30);
    rect(ctxt, size + (can.height - 2*size)*0.5 + (can.height - 2*size)*2.5 + (can.height - 2*size)/2, size, can.height - 2*size, can.height - 2*size, "#FFAA00", "#00000000", 1, can.width/30);

    line(ctxt, size + (can.height - 2*size)*0.75, can.height*2/3, size, can.height*2/3, "#7777AA", 2, 0, can.width/50);

    line(ctxt, size + (can.height - 2*size)*0.5 + (can.height - 2*size)*1.75, can.height/3, size + (can.height - 2*size)*0.5 + (can.height - 2*size)*2.5, can.height/3, "#7777AA", 2, 0, can.width/50);
    line(ctxt, size + (can.height - 2*size)*0.5 + (can.height - 2*size)*2.75, can.height*2/3, size + (can.height - 2*size)*0.5 + (can.height - 2*size)*2, can.height*2/3, "#7777AA", 2, 0, can.width/50);

    line(ctxt, size + (can.height - 2*size)*0.5 + (can.height - 2*size)*4.25, can.height/3, size + (can.height - 2*size)*0.5 + (can.height - 2*size)*5, can.height/3, "#7777AA", 2, 0, can.width/50);
}

function beispiel_stack(){
    let can = document.getElementById("beispiel_stack");
    can.width = can.clientWidth;
    can.height = can.clientWidth*2/3;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    let size = can.height/18;

    let elementWidth = (can.width - 6*size) / 3;

    rect(ctxt, size, size, elementWidth, 2*size, "#FFAA00", "#00000000", 1, can.width/60);
    rect(ctxt, 5*size + 2*elementWidth, size, elementWidth, 2*size, "#FFAA00", "#00000000", 1, can.width/60);
    
    rect(ctxt, 2*size + elementWidth, 4*size, elementWidth + 2*size, 13*size, "#AA00FF", "#00000000", 1, can.width/60);
    rect(ctxt, 3*size + elementWidth, 5*size, elementWidth, 2*size, "#FFAA00", "#00000000", 1, can.width/60);
    rect(ctxt, 3*size + elementWidth, 8*size, elementWidth, 2*size, "#FFAA00", "#00000000", 1, can.width/60);
    rect(ctxt, 3*size + elementWidth, 11*size, elementWidth, 2*size, "#FFAA00", "#00000000", 1, can.width/60);

    text(ctxt, "Stack", can.width/2, 15 * size, size * 2, "#FF00AA");

    text(ctxt, "push", can.width/6, can.height/4, size * 2, "#FF00AA");
    text(ctxt, "pop", can.width*5/6, can.height/4, size * 2, "#FF00AA");

    line(ctxt, size + elementWidth, size*2, can.width/3 + elementWidth/2, size * 4, "#7777AA", 2, 0, can.width/50);
    line(ctxt, can.width*2/3 - elementWidth/2, size * 4, 5*size + 2*elementWidth, size*2, "#7777AA", 2, 0, can.width/50);
}

function beispiel_queue(){
    let can = document.getElementById("beispiel_queue");
    can.width = can.clientWidth;
    can.height = can.clientWidth*2/3;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    let size = can.width/17;

    rect(ctxt, 2*size, 3.5*size, size, 4*size, "#FFAA00", "#00000000", 1, can.width/60);
    rect(ctxt, 14*size, 3.5*size, size, 4*size, "#FFAA00", "#00000000", 1, can.width/60);

    rect(ctxt, 5*size, size, 7*size, 7*size, "#AA00FF", "#00000000", 1, can.width/60);
    rect(ctxt, 6*size, 3.5*size, size, 4*size, "#FFAA00", "#00000000", 1, can.width/60);
    rect(ctxt, 8*size, 3.5*size, size, 4*size, "#FFAA00", "#00000000", 1, can.width/60);
    rect(ctxt, 10*size, 3.5*size, size, 4*size, "#FFAA00", "#00000000", 1, can.width/60);


    text(ctxt, "Queue", can.width/2, 2*size, size * 1.25, "#FF00AA");
    text(ctxt, "enqueue", can.width/6, can.height/4, size * 1, "#FF00AA");
    text(ctxt, "dequeue", can.width*5/6, can.height/4, size * 1, "#FF00AA");

    line(ctxt, 3*size, size*5.5, size*5, size*5.5, "#7777AA", 2, 0, can.width/50);
    line(ctxt, 12*size, size*5.5, size*14, size*5.5, "#7777AA", 2, 0, can.width/50);
}
