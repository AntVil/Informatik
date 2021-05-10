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
        beispiel_registermaschine();
    }
}

function beispiel_registermaschine(){
    let can = document.getElementById("beispiel_registermaschine");
    can.width = can.clientWidth;
    can.height = can.clientWidth/5;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    let k = 5;
    let size = can.height * 4/5;
    rect(ctxt, can.width/(2*k) - size/2, (can.height - size)/2, (k+1) * size, size, "#FFCC00", "#FFDD00", 2, can.width/30);
    for(let i=0;i<k;i++){
        rect(ctxt, (i / k) * can.width + can.width/(2*k) - size/2, (can.height - size)/2, size, size, "#FF9900", "#FFAA00", 2, can.width/30);
        if(i != k-1){
            text(ctxt, i, (i / k) * can.width + can.width/(2*k), can.height/2, can.width/12, "#555555");
        }else{
            text(ctxt, "...", (i / k) * can.width + can.width/(2*k), can.height/2, can.width/12, "#555555");
        }
    }
}