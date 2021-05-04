window.onload = function(){
    let equations = document.getElementsByClassName("equation");
    for(let i=0;i<equations.length;i++){
        katex.render(equations[i].innerText, equations[i], {
            throwOnError: false
        });
    }

    setup()
}

window.onresize = setup;


function setup(){
    beispiel_menge();
}


function beispiel_menge(){
    let can = document.getElementById("beispiel_menge");
    can.width = can.clientWidth;
    can.height = can.clientWidth;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    rect(ctxt, can.width/6, can.height/6, can.width/1.5, can.height/1.5, can.width/10, 1, false, "#FF9900FF", "#00000000", 0.5);
    circle(ctxt, can.width/3, can.height/3, can.width/15, 1, false, "#0099FFFF", "#00FFFFFF", 1);
    circle(ctxt, can.width*2/3, can.height/3, can.width/15, 1, false, "#0099FFFF", "#00FFFFFF", 1);
    circle(ctxt, can.width/3, can.height*2/3, can.width/15, 1, false, "#0099FFFF", "#00FFFFFF", 1);
    circle(ctxt, can.width*2/3, can.height*2/3, can.width/15, 1, false, "#0099FFFF", "#00FFFFFF", 1);
    text(ctxt, "a", can.width/3, can.height/3, "center", "middle", can.width/15, "#000000FF", 1);
    text(ctxt, "b", can.width*2/3, can.height/3, "center", "middle", can.width/15, "#000000FF", 1);
    text(ctxt, "c", can.width/3, can.height*2/3, "center", "middle", can.width/15, "#000000FF", 1);
    text(ctxt, "d", can.width*2/3, can.height*2/3, "center", "middle", can.width/15, "#000000FF", 1);
}
