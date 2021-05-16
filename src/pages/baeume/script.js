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
        beispiel_baum();
        beispiel_preorder();
        beispiel_inorder();
        beispiel_postorder();
        beispiel_array_1();
        beispiel_array_2();
        beispiel_rotation();
        beispiel_balanciert();
        beispiel_doppelrotation();
    }
}

function beispiel_baum(){
    let can = document.getElementById("beispiel_baum");
    can.width = can.clientWidth;
    can.height = can.clientWidth*3/4;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    let size = can.width / 25;

    rect(ctxt, size, 1*size, can.width - 2*size, 5*size, "#AA00FF", "#00000000", 0, can.width/60);
    rect(ctxt, size, 7*size, can.width - 2*size, 5*size, "#AA00FF", "#00000000", 0, can.width/60);
    rect(ctxt, size, 13*size, can.width - 2*size, 5*size, "#AA00FF", "#00000000", 0, can.width/60);

    rect(ctxt, 6*size, 2*size, 2*size, 3*size, "#00AAFF", "#00000000", 0, can.width/60);
    rect(ctxt, 6*size, 2*size, 2*size, 2*size, "#FFAA00", "#00000000", 0, can.width/60);

    rect(ctxt, 2*size, 8*size, 2*size, 3*size, "#00AAFF", "#00000000", 0, can.width/60);
    rect(ctxt, 2*size, 8*size, 2*size, 2*size, "#FFAA00", "#00000000", 0, can.width/60);

    rect(ctxt, 6*size, 8*size, 2*size, 3*size, "#00AAFF", "#00000000", 0, can.width/60);
    rect(ctxt, 6*size, 8*size, 2*size, 2*size, "#FFAA00", "#00000000", 0, can.width/60);

    rect(ctxt, 10*size, 8*size, 2*size, 3*size, "#00AAFF", "#00000000", 0, can.width/60);
    rect(ctxt, 10*size, 8*size, 2*size, 2*size, "#FFAA00", "#00000000", 0, can.width/60);

    rect(ctxt, 8*size, 14*size, 2*size, 3*size, "#00AAFF", "#00000000", 0, can.width/60);
    rect(ctxt, 8*size, 14*size, 2*size, 2*size, "#FFAA00", "#00000000", 0, can.width/60);

    rect(ctxt, 12*size, 14*size, 2*size, 3*size, "#00AAFF", "#00000000", 0, can.width/60);
    rect(ctxt, 12*size, 14*size, 2*size, 2*size, "#FFAA00", "#00000000", 0, can.width/60);

    line(ctxt, 7*size, 4.5*size, 7*size, 8*size, "#7777AAFF", 2, 0, can.width/50);
    line(ctxt, 7*size, 4.5*size, 3*size, 8*size, "#7777AAFF", 2, 0, can.width/50);
    line(ctxt, 7*size, 4.5*size, 11*size, 8*size, "#7777AAFF", 2, 0, can.width/50);

    line(ctxt, 11*size, 10.5*size, 9*size, 14*size, "#7777AAFF", 2, 0, can.width/50);
    line(ctxt, 11*size, 10.5*size, 13*size, 14*size, "#7777AAFF", 2, 0, can.width/50);

    text(ctxt, "Ebene 0", 15*size, 3.5*size, 2*size, "#FF00AA", "left");
    text(ctxt, "Ebene 1", 15*size, 9.5*size, 2*size, "#FF00AA", "left");
    text(ctxt, "Ebene 2", 15*size, 15.5*size, 2*size, "#FF00AA", "left");
}

function beispiel_preorder(){
    let can = document.getElementById("beispiel_preorder");
    can.width = can.clientWidth;
    can.height = can.clientWidth*16/30;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    let size = can.width / 30;
    
    circle(ctxt, can.width*1/2, 3*size, 2*size, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*1/4, 8*size, 2*size, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*3/4, 8*size, 2*size, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*1/8, 13*size, 2*size, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*3/8, 13*size, 2*size, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*5/8, 13*size, 2*size, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*7/8, 13*size, 2*size, "#00CCFFFF", "#00FFFFFF");

    text(ctxt, "0", can.width*1/2, 3*size, 2*size);
    text(ctxt, "1", can.width*1/4, 8*size, 2*size);
    text(ctxt, "4", can.width*3/4, 8*size, 2*size);
    text(ctxt, "2", can.width*1/8, 13*size, 2*size);
    text(ctxt, "3", can.width*3/8, 13*size, 2*size);
    text(ctxt, "5", can.width*5/8, 13*size, 2*size);
    text(ctxt, "6", can.width*7/8, 13*size, 2*size);
    
    line(ctxt, can.width*1/2 + 2*size * Math.cos(Math.PI*3/4), 3*size + 2*size * Math.sin(Math.PI*3/4), can.width*1/4 - 2*size * Math.cos(Math.PI*3/4), 8*size - 2*size * Math.sin(Math.PI*3/4), "#7777AAFF", 2, 0, can.width/50);
    line(ctxt, can.width*1/2 - 2*size * Math.cos(Math.PI*3/4), 3*size + 2*size * Math.sin(Math.PI*3/4), can.width*3/4 + 2*size * Math.cos(Math.PI*3/4), 8*size - 2*size * Math.sin(Math.PI*3/4), "#7777AAFF", 2, 0, can.width/50);

    line(ctxt, can.width*1/4 + 2*size * Math.cos(Math.PI*3/4), 8*size + 2*size * Math.sin(Math.PI*3/4), can.width*1/8, 13*size - 2*size, "#7777AAFF", 2, 0, can.width/50);
    line(ctxt, can.width*1/4 - 2*size * Math.cos(Math.PI*3/4), 8*size + 2*size * Math.sin(Math.PI*3/4), can.width*3/8, 13*size - 2*size, "#7777AAFF", 2, 0, can.width/50);

    line(ctxt, can.width*3/4 + 2*size * Math.cos(Math.PI*3/4), 8*size + 2*size * Math.sin(Math.PI*3/4), can.width*5/8, 13*size - 2*size, "#7777AAFF", 2, 0, can.width/50);
    line(ctxt, can.width*3/4 - 2*size * Math.cos(Math.PI*3/4), 8*size + 2*size * Math.sin(Math.PI*3/4), can.width*7/8, 13*size - 2*size, "#7777AAFF", 2, 0, can.width/50);
}

function beispiel_inorder(){
    let can = document.getElementById("beispiel_inorder");
    can.width = can.clientWidth;
    can.height = can.clientWidth*16/30;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    let size = can.width / 30;
    
    circle(ctxt, can.width*1/2, 3*size, 2*size, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*1/4, 8*size, 2*size, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*3/4, 8*size, 2*size, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*1/8, 13*size, 2*size, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*3/8, 13*size, 2*size, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*5/8, 13*size, 2*size, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*7/8, 13*size, 2*size, "#00CCFFFF", "#00FFFFFF");

    text(ctxt, "3", can.width*1/2, 3*size, 2*size);
    text(ctxt, "1", can.width*1/4, 8*size, 2*size);
    text(ctxt, "5", can.width*3/4, 8*size, 2*size);
    text(ctxt, "0", can.width*1/8, 13*size, 2*size);
    text(ctxt, "2", can.width*3/8, 13*size, 2*size);
    text(ctxt, "4", can.width*5/8, 13*size, 2*size);
    text(ctxt, "6", can.width*7/8, 13*size, 2*size);
    
    line(ctxt, can.width*1/2 + 2*size * Math.cos(Math.PI*3/4), 3*size + 2*size * Math.sin(Math.PI*3/4), can.width*1/4 - 2*size * Math.cos(Math.PI*3/4), 8*size - 2*size * Math.sin(Math.PI*3/4), "#7777AAFF", 2, 0, can.width/50);
    line(ctxt, can.width*1/2 - 2*size * Math.cos(Math.PI*3/4), 3*size + 2*size * Math.sin(Math.PI*3/4), can.width*3/4 + 2*size * Math.cos(Math.PI*3/4), 8*size - 2*size * Math.sin(Math.PI*3/4), "#7777AAFF", 2, 0, can.width/50);

    line(ctxt, can.width*1/4 + 2*size * Math.cos(Math.PI*3/4), 8*size + 2*size * Math.sin(Math.PI*3/4), can.width*1/8, 13*size - 2*size, "#7777AAFF", 2, 0, can.width/50);
    line(ctxt, can.width*1/4 - 2*size * Math.cos(Math.PI*3/4), 8*size + 2*size * Math.sin(Math.PI*3/4), can.width*3/8, 13*size - 2*size, "#7777AAFF", 2, 0, can.width/50);

    line(ctxt, can.width*3/4 + 2*size * Math.cos(Math.PI*3/4), 8*size + 2*size * Math.sin(Math.PI*3/4), can.width*5/8, 13*size - 2*size, "#7777AAFF", 2, 0, can.width/50);
    line(ctxt, can.width*3/4 - 2*size * Math.cos(Math.PI*3/4), 8*size + 2*size * Math.sin(Math.PI*3/4), can.width*7/8, 13*size - 2*size, "#7777AAFF", 2, 0, can.width/50);
}

function beispiel_postorder(){
    let can = document.getElementById("beispiel_postorder");
    can.width = can.clientWidth;
    can.height = can.clientWidth*16/30;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    let size = can.width / 30;
    
    circle(ctxt, can.width*1/2, 3*size, 2*size, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*1/4, 8*size, 2*size, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*3/4, 8*size, 2*size, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*1/8, 13*size, 2*size, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*3/8, 13*size, 2*size, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*5/8, 13*size, 2*size, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*7/8, 13*size, 2*size, "#00CCFFFF", "#00FFFFFF");

    text(ctxt, "6", can.width*1/2, 3*size, 2*size);
    text(ctxt, "2", can.width*1/4, 8*size, 2*size);
    text(ctxt, "5", can.width*3/4, 8*size, 2*size);
    text(ctxt, "0", can.width*1/8, 13*size, 2*size);
    text(ctxt, "1", can.width*3/8, 13*size, 2*size);
    text(ctxt, "3", can.width*5/8, 13*size, 2*size);
    text(ctxt, "4", can.width*7/8, 13*size, 2*size);
    
    line(ctxt, can.width*1/2 + 2*size * Math.cos(Math.PI*3/4), 3*size + 2*size * Math.sin(Math.PI*3/4), can.width*1/4 - 2*size * Math.cos(Math.PI*3/4), 8*size - 2*size * Math.sin(Math.PI*3/4), "#7777AAFF", 2, 0, can.width/50);
    line(ctxt, can.width*1/2 - 2*size * Math.cos(Math.PI*3/4), 3*size + 2*size * Math.sin(Math.PI*3/4), can.width*3/4 + 2*size * Math.cos(Math.PI*3/4), 8*size - 2*size * Math.sin(Math.PI*3/4), "#7777AAFF", 2, 0, can.width/50);

    line(ctxt, can.width*1/4 + 2*size * Math.cos(Math.PI*3/4), 8*size + 2*size * Math.sin(Math.PI*3/4), can.width*1/8, 13*size - 2*size, "#7777AAFF", 2, 0, can.width/50);
    line(ctxt, can.width*1/4 - 2*size * Math.cos(Math.PI*3/4), 8*size + 2*size * Math.sin(Math.PI*3/4), can.width*3/8, 13*size - 2*size, "#7777AAFF", 2, 0, can.width/50);

    line(ctxt, can.width*3/4 + 2*size * Math.cos(Math.PI*3/4), 8*size + 2*size * Math.sin(Math.PI*3/4), can.width*5/8, 13*size - 2*size, "#7777AAFF", 2, 0, can.width/50);
    line(ctxt, can.width*3/4 - 2*size * Math.cos(Math.PI*3/4), 8*size + 2*size * Math.sin(Math.PI*3/4), can.width*7/8, 13*size - 2*size, "#7777AAFF", 2, 0, can.width/50);
}

function beispiel_array_1(){
    let can = document.getElementById("beispiel_array_1");
    can.width = can.clientWidth;
    can.height = can.clientWidth*16/30;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    let size = can.width / 30;

    rect(ctxt, size, 0.75*size, can.width - 2*size, 4.5*size, "#AA00FF", "#00000000", 0, can.width/30);
    rect(ctxt, size, 5.75*size, can.width - 2*size, 4.5*size, "#AA00FF", "#00000000", 0, can.width/30);
    rect(ctxt, size, 10.75*size, can.width - 2*size, 4.5*size, "#AA00FF", "#00000000", 0, can.width/30);
    
    circle(ctxt, can.width*1/2, 3*size, 2*size, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*1/4, 8*size, 2*size, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*3/4, 8*size, 2*size, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*1/8, 13*size, 2*size, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*3/8, 13*size, 2*size, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*5/8, 13*size, 2*size, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*7/8, 13*size, 2*size, "#00CCFFFF", "#00FFFFFF");

    text(ctxt, "0", can.width*1/2, 3*size, 2*size);
    text(ctxt, "1", can.width*1/4, 8*size, 2*size);
    text(ctxt, "2", can.width*3/4, 8*size, 2*size);
    text(ctxt, "-", can.width*1/8, 13*size, 2*size);
    text(ctxt, "-", can.width*3/8, 13*size, 2*size);
    text(ctxt, "5", can.width*5/8, 13*size, 2*size);
    text(ctxt, "6", can.width*7/8, 13*size, 2*size);
    
    line(ctxt, can.width*1/2 + 2*size * Math.cos(Math.PI*3/4), 3*size + 2*size * Math.sin(Math.PI*3/4), can.width*1/4 - 2*size * Math.cos(Math.PI*3/4), 8*size - 2*size * Math.sin(Math.PI*3/4), "#7777AAFF", 2, 0, can.width/50);
    line(ctxt, can.width*1/2 - 2*size * Math.cos(Math.PI*3/4), 3*size + 2*size * Math.sin(Math.PI*3/4), can.width*3/4 + 2*size * Math.cos(Math.PI*3/4), 8*size - 2*size * Math.sin(Math.PI*3/4), "#7777AAFF", 2, 0, can.width/50);

    line(ctxt, can.width*1/4 + 2*size * Math.cos(Math.PI*3/4), 8*size + 2*size * Math.sin(Math.PI*3/4), can.width*1/8, 13*size - 2*size, "#7777AAFF", 2, 0, can.width/50, 0, true);
    line(ctxt, can.width*1/4 - 2*size * Math.cos(Math.PI*3/4), 8*size + 2*size * Math.sin(Math.PI*3/4), can.width*3/8, 13*size - 2*size, "#7777AAFF", 2, 0, can.width/50, 0, true);

    line(ctxt, can.width*3/4 + 2*size * Math.cos(Math.PI*3/4), 8*size + 2*size * Math.sin(Math.PI*3/4), can.width*5/8, 13*size - 2*size, "#7777AAFF", 2, 0, can.width/50);
    line(ctxt, can.width*3/4 - 2*size * Math.cos(Math.PI*3/4), 8*size + 2*size * Math.sin(Math.PI*3/4), can.width*7/8, 13*size - 2*size, "#7777AAFF", 2, 0, can.width/50);
}

function beispiel_array_2(){
    let can = document.getElementById("beispiel_array_2");
    can.width = can.clientWidth;
    can.height = can.clientWidth/7;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    let k = 7;
    let size = can.height * 4/5;
    rect(ctxt, can.width/(2*k) - size/2, (can.height - size)/2, (k+1) * size, size, "#0099FF", "#00CCFF", 2, can.width/30);
    for(let i=0;i<k;i++){
        rect(ctxt, (i / k) * can.width + can.width/(2*k) - size/2, (can.height - size)/2, size, size, "#FF9900", "#FFCC00", 2, can.width/30);
        if(i != 3 && i != 4){
            text(ctxt, i, (i / k) * can.width + can.width/(2*k), can.height/2, can.width/12, "#555555");
        }else{
            text(ctxt, "-", (i / k) * can.width + can.width/(2*k), can.height/2, can.width/12, "#555555");
        }
    }
}

function beispiel_rotation(){
    let can = document.getElementById("beispiel_rotation");
    can.width = can.clientWidth;
    can.height = can.clientWidth*16/30;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    let size = can.width / 30;
    
    circle(ctxt, can.width*1/2, 3*size, 2*size, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*3/4, 8*size, 2*size, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*7/8, 13*size, 2*size, "#00CCFFFF", "#00FFFFFF");

    text(ctxt, "a", can.width*1/2, 3*size, 2*size);
    text(ctxt, "b", can.width*3/4, 8*size, 2*size);
    text(ctxt, "c", can.width*7/8, 13*size, 2*size);
    
    line(ctxt, can.width*1/2 - 2*size * Math.cos(Math.PI*3/4), 3*size + 2*size * Math.sin(Math.PI*3/4), can.width*3/4 + 2*size * Math.cos(Math.PI*3/4), 8*size - 2*size * Math.sin(Math.PI*3/4), "#7777AAFF", 2, 0, can.width/50);

    line(ctxt, can.width*3/4 - 2*size * Math.cos(Math.PI*3/4), 8*size + 2*size * Math.sin(Math.PI*3/4), can.width*7/8, 13*size - 2*size, "#7777AAFF", 2, 0, can.width/50);

    line(ctxt, can.width*7/8, 11*size, can.width*3/4 + 2*size, 8*size, "#FFAA00", 2, can.width/15, can.width/50, 0, true);
    line(ctxt, can.width*3/4, 6*size, can.width*1/2 + 2*size, 3*size, "#FFAA00", 2, can.width/15, can.width/50, 0, true);
    line(ctxt, can.width*1/2 - 2*size, 3*size, can.width*1/4, 6*size, "#FFAA00", 2, can.width/15, can.width/50, 0, true);
}

function beispiel_balanciert(){
    let can = document.getElementById("beispiel_balanciert");
    can.width = can.clientWidth;
    can.height = can.clientWidth*16/30;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    let size = can.width / 30;
    
    circle(ctxt, can.width*1/2, 3*size, 2*size, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*1/4, 8*size, 2*size, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*3/4, 8*size, 2*size, "#00CCFFFF", "#00FFFFFF");
    
    text(ctxt, "b", can.width*1/2, 3*size, 2*size);
    text(ctxt, "a", can.width*1/4, 8*size, 2*size);
    text(ctxt, "c", can.width*3/4, 8*size, 2*size);
    
    line(ctxt, can.width*1/2 + 2*size * Math.cos(Math.PI*3/4), 3*size + 2*size * Math.sin(Math.PI*3/4), can.width*1/4 - 2*size * Math.cos(Math.PI*3/4), 8*size - 2*size * Math.sin(Math.PI*3/4), "#7777AAFF", 2, 0, can.width/50);
    line(ctxt, can.width*1/2 - 2*size * Math.cos(Math.PI*3/4), 3*size + 2*size * Math.sin(Math.PI*3/4), can.width*3/4 + 2*size * Math.cos(Math.PI*3/4), 8*size - 2*size * Math.sin(Math.PI*3/4), "#7777AAFF", 2, 0, can.width/50);
}

function beispiel_doppelrotation(){
    let can = document.getElementById("beispiel_doppelrotation");
    can.width = can.clientWidth;
    can.height = can.clientWidth*16/30;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    let size = can.width / 30;
    
    circle(ctxt, can.width*1/2, 3*size, 2*size, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*3/4, 8*size, 2*size, "#00CCFFFF", "#00FFFFFF");
    circle(ctxt, can.width*5/8, 13*size, 2*size, "#00CCFFFF", "#00FFFFFF");
    
    text(ctxt, "a", can.width*1/2, 3*size, 2*size);
    text(ctxt, "c", can.width*3/4, 8*size, 2*size);
    text(ctxt, "b", can.width*5/8, 13*size, 2*size);
    
    line(ctxt, can.width*1/2 - 2*size * Math.cos(Math.PI*3/4), 3*size + 2*size * Math.sin(Math.PI*3/4), can.width*3/4 + 2*size * Math.cos(Math.PI*3/4), 8*size - 2*size * Math.sin(Math.PI*3/4), "#7777AAFF", 2, 0, can.width/50);

    line(ctxt, can.width*3/4 + 2*size * Math.cos(Math.PI*3/4), 8*size + 2*size * Math.sin(Math.PI*3/4), can.width*5/8, 13*size - 2*size, "#7777AAFF", 2, 0, can.width/50);

    line(ctxt, can.width*5/8, 11*size, can.width*1/2, 5*size, "#FFAA00", 2, 0, can.width/50, 0, true);
    line(ctxt, can.width*1/2 - 2*size, 3*size, can.width*1/4, 6*size, "#FFAA00", 2, can.width/15, can.width/50, 0, true);
}
