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
        beispiel_lineare_abbildung();

        requestAnimationFrame(loop);
    }
}

function loop(){
    beispiel_lineare_abbildung();

    requestAnimationFrame(loop);
}

let t = 0;
function beispiel_lineare_abbildung(){
    let can = document.getElementById("beispiel_lineare_abbildung");
    can.width = can.clientWidth;
    can.height = can.clientWidth;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    let size = can.width * 3/5 / 7;
    line(ctxt, can.width/5, can.height/2, can.width*4/5, can.height/2, "#000000FF", 2, 0, can.width/30);
    line(ctxt, can.width/2, can.height*4/5, can.width/2, can.height/5, "#000000FF", 2, 0, can.width/30);

    t -= 0.01;
    if (t < -Math.PI/2){
        t = 0;
    }

    x = size * Math.cos(t) + 2*size * Math.sin(t)
    y = -size * Math.sin(t) + 2*size * Math.cos(t)

    line(ctxt, can.width/2, can.height/2, can.width/2 + x, can.height/2 - y, "#FFAA00", 2, 0, can.width/45);
}
