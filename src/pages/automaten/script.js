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
        beispiel_automat();
    }
}

function beispiel_automat(){
    let can = document.getElementById("beispiel_automat");
    can.width = can.clientWidth;
    can.height = can.clientWidth;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    
    circle(ctxt, can.width/3 - can.width/6, can.height/2, can.width/15, "#00CCFFFF", "#00FFFFFF");
    
    circle(ctxt, can.width*4/5 - can.width/6, can.height/5, can.width/15, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*4/5 - can.width/6, can.height*4/5, can.width/15, "#00CCFFFF", "#00FFFFFF");
    
    text(ctxt, "a", can.width/3 - can.width/6, can.height/2, can.width/15);
    text(ctxt, "b", can.width*4/5 - can.width/6, can.height/5, can.width/15);
    text(ctxt, "c", can.width*4/5 - can.width/6, can.height*4/5, can.width/15);
    
    line(ctxt, can.width*7.75/10 - can.width/6, can.height/5 - can.width/15, can.width*8.25/10 - can.width/6, can.height/5 - can.width/15, "#7777AAFF", 2, -can.width/6, can.width/50);
    line(ctxt, can.width*7.75/10 - can.width/6, can.height*4/5 + can.width/15, can.width*8.25/10 - can.width/6, can.height*4/5 + can.width/15, "#7777AAFF", 2, can.width/6, can.width/50);
    
    line(ctxt, can.width/5 - can.width/6, can.height/2, can.width/3 - can.width/15 - can.width/6, can.height/2, "#7777AAFF", 2, 0, can.width/50);

    line(ctxt, can.width/3 - can.width/6, can.height/2 - can.width/15, can.width*4/5 - can.width/15 - can.width/6, can.height/5, "#7777AAFF", 2, -can.width/6, can.width/50);
    line(ctxt, can.width/3 - can.width/6, can.height/2 + can.width/15, can.width*4/5 - can.width/15 - can.width/6, can.height*4/5, "#7777AAFF", 2, can.width/6, can.width/50);

    line(ctxt, can.width*4/5 + Math.cos(Math.PI/4) * can.width/15 - can.width/6, can.height/5 + Math.sin(Math.PI/4) * can.width/15, can.width*4/5 + Math.cos(Math.PI/4) * can.width/15 - can.width/6, can.height*4/5 - Math.cos(Math.PI/4) * can.width/15, "#7777AAFF", 2, -can.width/10, can.width/50);
    line(ctxt, can.width*4/5 - Math.cos(Math.PI/4) * can.width/15 - can.width/6, can.height*4/5 - Math.cos(Math.PI/4) * can.width/15, can.width*4/5 - Math.cos(Math.PI/4) * can.width/15 - can.width/6, can.height/5 + Math.sin(Math.PI/4) * can.width/15, "#7777AAFF", 2, -can.width/10, can.width/50);

    text(ctxt, "1,0/1", can.width/3 - can.width/6, can.height/5, can.width/15);
    text(ctxt, "0,1/0", can.width/3 - can.width/6, can.height*4/5, can.width/15);
    text(ctxt, "1,0/1", can.width*3/5 - can.width/6, can.height/2, can.width/15);
    text(ctxt, "0,1/0", can.width - can.width/6, can.height/2, can.width/15);

    text(ctxt, "0,1/0", can.width - can.width/4, can.height/9, can.width/15);
    text(ctxt, "0,1/0", can.width - can.width/4, can.height*8/9, can.width/15);
}
