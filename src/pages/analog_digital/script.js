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
        beispiel_analog();
        beispiel_digital();
    }
}

function beispiel_analog(){
    let can = document.getElementById("beispiel_analog");
    can.width = can.clientWidth;
    can.height = can.clientWidth/2;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);

    line(ctxt, can.width/5, can.height/2, can.width*4/5, can.height/2, "#000000FF", 2, 0, can.width/30);
    line(ctxt, can.width/5, can.height*4/5, can.width/5, can.height/5, "#000000FF", 2, 0, can.width/30);


    let x1 = 0;
    let y1 = Math.sin((x1 * 180) / 180 * Math.PI) + Math.sin((x1 * 100) / 180 * Math.PI);
    let x2 = 0;
    let y2 = Math.sin((x2 * 180) / 180 * Math.PI) + Math.sin((x2 * 100) / 180 * Math.PI);

    for(let i=0;i<6;i+=0.1){
        x1 = x2;
        y1 = y2;
        x2 = i;
        y2 = Math.sin((x2 * 180) / 180 * Math.PI) + Math.sin((x2 * 100) / 180 * Math.PI);
        line(ctxt, x1 * can.width/5/2 + can.width/5, -y1 * can.height/5/2 + can.height/2, x2 * can.width/5/2 + can.width/5, -y2 * can.height/5/2 + can.height/2, "#FFAA00", 2);
    }
}

function beispiel_digital(){
    let can = document.getElementById("beispiel_digital");
    can.width = can.clientWidth;
    can.height = can.clientWidth/2;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);

    line(ctxt, can.width/5, can.height/2, can.width*4/5, can.height/2, "#000000FF", 2, 0, can.width/30);
    line(ctxt, can.width/5, can.height*4/5, can.width/5, can.height/5, "#000000FF", 2, 0, can.width/30);

    for(let i=0;i<6;i+=0.25){
        x = i;
        y = Math.round(Math.sin((x * 180) / 180 * Math.PI) + Math.sin((x * 100) / 180 * Math.PI));
        line(ctxt, x * can.width/5/2 + can.width/5, can.height/2, x * can.width/5/2 + can.width/5, -y * can.height/5/2 + can.height/2, "#00AAFF", 2);
        circle(ctxt, x * can.width/5/2 + can.width/5, -y * can.height/5/2 + can.height/2, can.width/120, "#00AAFF", "#00000000")
    }
}
