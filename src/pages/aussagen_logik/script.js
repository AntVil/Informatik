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
        beispiel_syntaxbaum();
        beispiel_kv_diagramm();
    }
}

function beispiel_syntaxbaum(){
    let can = document.getElementById("beispiel_syntaxbaum");
    can.width = can.clientWidth;
    can.height = can.clientWidth;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    let size= can.width/30;

    rect(ctxt, 1 * size, 1 * size, can.width - 1 * 2 * size, can.height - 1 * 2 * size, "#AA00FF", "#00000000", 0, size);
    rect(ctxt, 2 * size, can.height * 7/10, can.width - 2 * 2 * size, can.height * 3/10 - 1 * 2 * size, "#FFAA00", "#00000000", 0, size);
    rect(ctxt, 2 * size, can.height * 5/10, can.width / 2 - 2 * 2 * size, can.height * 5/10 - 1 * 2 * size, "#FFAA00", "#00000000", 0, size);
    
    rect(ctxt, can.width/2 - 3 * size, can.height * 6/10 + size, 3 * size, 3 * size, "#FFAA00", "#00000000", 0, size);
    rect(ctxt, can.width/2 - 2 * size, can.height * 6/10, 3 * size, 3 * size, "#AA00FF", "#00000000", 0, size);

    circle(ctxt, can.width/2, can.height/5, can.width/15, "#CC00FF", "#FFAAFF");
    text(ctxt, "¬", can.width/2, can.height/5, can.width/15);
    
    circle(ctxt, can.width/2, can.height*2/5, can.width/15, "#CC00FF", "#FFAAFF");
    text(ctxt, "∧", can.width/2, can.height*2/5, can.width/15);
    
    circle(ctxt, can.width/4, can.height*3/5, can.width/15, "#FFCC00FF", "#FFFF00FF");
    text(ctxt, "A", can.width/4, can.height*3/5, can.width/15);
    
    circle(ctxt, can.width*3/4, can.height*3/5, can.width/15, "#CC00FF", "#FFAAFF");
    text(ctxt, "¬", can.width*3/4, can.height*3/5, can.width/15);
    
    circle(ctxt, can.width*3/4, can.height*4/5, can.width/15, "#FFCC00FF", "#FFFF00FF");
    text(ctxt, "B", can.width*3/4, can.height*4/5, can.width/15);
    

    line(ctxt, can.width/2, can.height/5 + can.width/15, can.width/2, can.height*2/5 - can.width/15, "#7777AAFF", 2, 0, can.width/50);
    line(ctxt, can.width/2 - Math.cos(Math.PI/5) * can.width/15, can.height*2/5 + Math.sin(Math.PI/5) * can.width/15, can.width/4 + Math.cos(Math.PI/5) * can.width/15, can.height*3/5 - Math.sin(Math.PI/5) * can.width/15, "#7777AAFF", 2, 0, can.width/50);
    line(ctxt, can.width/2 + Math.cos(Math.PI/5) * can.width/15, can.height*2/5 + Math.sin(Math.PI/5) * can.width/15, can.width*3/4 - Math.cos(Math.PI/5) * can.width/15, can.height*3/5 - Math.sin(Math.PI/5) * can.width/15, "#7777AAFF", 2, 0, can.width/50);
    line(ctxt, can.width*3/4, can.height*3/5 + can.width/15, can.width*3/4, can.height*4/5 - can.width/15, "#7777AAFF", 2, 0, can.width/50);

    text(ctxt, "Formeln", can.width/4, can.height/5, can.width/15, "#FFFFFF");
    text(ctxt, "Atome", can.width*2/4, can.height*4/5, can.width/15, "#FFFFFF");
}

function beispiel_kv_diagramm(){
    let can = document.getElementById("beispiel_kv_diagramm");
    can.width = can.clientWidth;
    can.height = can.clientWidth;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    let size= can.width/30;
    
    rect(ctxt, 1 * size, 1 * size, can.width - 1 * 2 * size, can.height - 1 * 2 * size, "#333333", "#00000000", 0, size);


    rect(ctxt, (can.width - 2 * size)*4/12 + 1.5*size, (can.height - 2 * size)*2/12 + 1.5*size, (can.width - 2 * size)*4/12 - size, (can.height - 2 * size)*4/12 - size, "#00000000", "#FF00AAAA", size/2, size);
    
    rect(ctxt, (can.width - 2 * size)*2/12 + 1.5*size, (can.height - 2 * size)*4/12 + 1.5*size, (can.width - 2 * size)*4/12 - size, (can.height - 2 * size)*4/12 - size, "#00000000", "#AAFF00AA", size/2, size);
    
    rect(ctxt, (can.width - 2 * size)*2/12 + 1.5*size, (can.height - 2 * size)*6/12 + 1.5*size, (can.width - 2 * size)*4/12 - size, (can.height - 2 * size)*4/12 - size, "#00000000", "#777777AA", size/2, size);
    
    rect(ctxt, (can.width - 2 * size)*6/12 + 1.5*size, (can.height - 2 * size)*6/12 + 1.5*size, (can.width - 2 * size)*4/12 - size, (can.height - 2 * size)*4/12 - size, "#00000000", "#00FFAAAA", size/2, size);
    
    rect(ctxt, (can.width - 2 * size)*8/12 + 1.5*size, (can.height - 2 * size)*2/12 + 1.5*size, (can.width - 2 * size)*2/12 - size, (can.height - 2 * size)*8/12 - size, "#00000000", "#AA00FFAA", size/2, size);
    
    rect(ctxt, (can.width - 2 * size)*0/12 + 1.5*size, (can.height - 2 * size)*2/12 + 1.5*size, (can.width - 2 * size)*4/12 - size, (can.height - 2 * size)*2/12 - size, "#00000000", "#00AAFFAA", size/2, size);
    rect(ctxt, (can.width - 2 * size)*8/12 + 1.5*size, (can.height - 2 * size)*2/12 + 1.5*size, (can.width - 2 * size)*4/12 - size, (can.height - 2 * size)*2/12 - size, "#00000000", "#00AAFFAA", size/2, size);

    rect(ctxt, (can.width - 2 * size)*0/12 + 1*size, (can.height - 2 * size)*2/12 + 1*size, (can.width - 1 * 2 * size)/6, (can.height - 1 * 2 * size)/6, "#333333", "#00000000");
    rect(ctxt, (can.width - 2 * size)*10/12 + 1*size, (can.height - 2 * size)*2/12 + 1*size, (can.width - 1 * 2 * size)/6, (can.height - 1 * 2 * size)/6, "#333333", "#00000000");
    
    for(let i=1;i<6;i++){
        line(ctxt, size, (can.width - 2 * size)*i/6 + size, can.height - size, (can.width - 2 * size)*i/6 + size);
        line(ctxt, (can.height - 2 * size)*i/6 + size, size, (can.height - 2 * size)*i/6 + size, can.height - size);
    }

    //text(ctxt, "A", (can.width - 2 * size)*1/12 + size, (can.height - 2 * size)*1/12 + size, can.width/15, "#FFAA00");
    text(ctxt, "A", (can.width - 2 * size)*3/12 + size, (can.height - 2 * size)*1/12 + size, can.width/15, "#FFAA00");
    text(ctxt, "A", (can.width - 2 * size)*5/12 + size, (can.height - 2 * size)*1/12 + size, can.width/15, "#FFAA00");
    text(ctxt, "¬A", (can.width - 2 * size)*7/12 + size, (can.height - 2 * size)*1/12 + size, can.width/15, "#FFAA00");
    text(ctxt, "¬A", (can.width - 2 * size)*9/12 + size, (can.height - 2 * size)*1/12 + size, can.width/15, "#FFAA00");
    //text(ctxt, "A", (can.width - 2 * size)*11/12 + size, (can.height - 2 * size)*1/12 + size, can.width/15, "#FFAA00");

    text(ctxt, "B", (can.width - 2 * size)*1/12 + size, (can.height - 2 * size)*3/12 + size, can.width/15, "#FFAA00");
    text(ctxt, "W", (can.width - 2 * size)*3/12 + size, (can.height - 2 * size)*3/12 + size, can.width/15, "#00FF00");
    text(ctxt, "F", (can.width - 2 * size)*5/12 + size, (can.height - 2 * size)*3/12 + size, can.width/15, "#FF0000");
    text(ctxt, "F", (can.width - 2 * size)*7/12 + size, (can.height - 2 * size)*3/12 + size, can.width/15, "#FF0000");
    text(ctxt, "W", (can.width - 2 * size)*9/12 + size, (can.height - 2 * size)*3/12 + size, can.width/15, "#00FF00");
    text(ctxt, "D", (can.width - 2 * size)*11/12 + size, (can.height - 2 * size)*3/12 + size, can.width/15, "#FFAA00");
    
    text(ctxt, "B", (can.width - 2 * size)*1/12 + size, (can.height - 2 * size)*5/12 + size, can.width/15, "#FFAA00");
    text(ctxt, "F", (can.width - 2 * size)*3/12 + size, (can.height - 2 * size)*5/12 + size, can.width/15, "#FF0000");
    text(ctxt, "F", (can.width - 2 * size)*5/12 + size, (can.height - 2 * size)*5/12 + size, can.width/15, "#FF0000");
    text(ctxt, "F", (can.width - 2 * size)*7/12 + size, (can.height - 2 * size)*5/12 + size, can.width/15, "#FF0000");
    text(ctxt, "W", (can.width - 2 * size)*9/12 + size, (can.height - 2 * size)*5/12 + size, can.width/15, "#00FF00");
    text(ctxt, "¬D", (can.width - 2 * size)*11/12 + size, (can.height - 2 * size)*5/12 + size, can.width/15, "#FFAA00");

    text(ctxt, "¬B", (can.width - 2 * size)*1/12 + size, (can.height - 2 * size)*7/12 + size, can.width/15, "#FFAA00");
    text(ctxt, "F", (can.width - 2 * size)*3/12 + size, (can.height - 2 * size)*7/12 + size, can.width/15, "#FF0000");
    text(ctxt, "F", (can.width - 2 * size)*5/12 + size, (can.height - 2 * size)*7/12 + size, can.width/15, "#FF0000");
    text(ctxt, "W", (can.width - 2 * size)*7/12 + size, (can.height - 2 * size)*7/12 + size, can.width/15, "#00FF00");
    text(ctxt, "W", (can.width - 2 * size)*9/12 + size, (can.height - 2 * size)*7/12 + size, can.width/15, "#00FF00");
    text(ctxt, "¬D", (can.width - 2 * size)*11/12 + size, (can.height - 2 * size)*7/12 + size, can.width/15, "#FFAA00");

    text(ctxt, "¬B", (can.width - 2 * size)*1/12 + size, (can.height - 2 * size)*9/12 + size, can.width/15, "#FFAA00");
    text(ctxt, "F", (can.width - 2 * size)*3/12 + size, (can.height - 2 * size)*9/12 + size, can.width/15, "#FF0000");
    text(ctxt, "F", (can.width - 2 * size)*5/12 + size, (can.height - 2 * size)*9/12 + size, can.width/15, "#FF0000");
    text(ctxt, "W", (can.width - 2 * size)*7/12 + size, (can.height - 2 * size)*9/12 + size, can.width/15, "#00FF00");
    text(ctxt, "W", (can.width - 2 * size)*9/12 + size, (can.height - 2 * size)*9/12 + size, can.width/15, "#00FF00");
    text(ctxt, "D", (can.width - 2 * size)*11/12 + size, (can.height - 2 * size)*9/12 + size, can.width/15, "#FFAA00");

    text(ctxt, "C", (can.width - 2 * size)*3/12 + size, (can.height - 2 * size)*11/12 + size, can.width/15, "#FFAA00");
    text(ctxt, "¬C", (can.width - 2 * size)*5/12 + size, (can.height - 2 * size)*11/12 + size, can.width/15, "#FFAA00");
    text(ctxt, "¬C", (can.width - 2 * size)*7/12 + size, (can.height - 2 * size)*11/12 + size, can.width/15, "#FFAA00");
    text(ctxt, "C", (can.width - 2 * size)*9/12 + size, (can.height - 2 * size)*11/12 + size, can.width/15, "#FFAA00");    
}
