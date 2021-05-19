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
        beispiel_ableitung();
    }
}

function beispiel_ableitung(){
    let can = document.getElementById("beispiel_ableitung");
    can.width = can.clientWidth;
    can.height = can.clientWidth;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    let size = can.width * 3/5 / 7;
    line(ctxt, can.width/5, can.height/2, can.width*4/5, can.height/2, "#000000FF", 2, 0, can.width/30);
    line(ctxt, can.width/2, can.height*4/5, can.width/2, can.height/5, "#000000FF", 2, 0, can.width/30);


    let x1 = -3;
    let y1 = 1 - Math.pow(-3, 2)/2 + Math.pow(-3, 3)/16 + Math.pow(-3, 4)/16;
    let x2 = -3;
    let y2 = 1 - Math.pow(-3, 2)/2 + Math.pow(-3, 3)/16 + Math.pow(-3, 4)/16;

    for(let i=-3;i<3;i+=0.1){
        x1 = x2;
        y1 = y2;
        x2 = i;
        y2 = 1 - Math.pow(i, 2)/2 + Math.pow(i, 3)/16 + Math.pow(i, 4)/16;
        line(ctxt, x1 * can.width/5/2 + can.width/2, -y1 * can.height/5/2 + can.height/2, x2 * can.width/5/2 + can.width/2, -y2 * can.height/5/2 + can.height/2, "#FFAA00", 2);
    }


    x1 = -3;
    y1 = 3 + 3 * Math.pow(-3, 2)/16 + Math.pow(-3, 3)/6;
    x2 = -3;
    y2 = 3 + 3 * Math.pow(-3, 2)/16 + Math.pow(-3, 3)/6;

    for(let i=-3;i<3;i+=0.1){
        x1 = x2;
        y1 = y2;
        x2 = i;
        y2 = -i + 3 * Math.pow(i, 2)/16 + Math.pow(i, 3)/6;
        line(ctxt, x1 * can.width/5/2 + can.width/2, -y1 * can.height/5/2 + can.height/2, x2 * can.width/5/2 + can.width/2, -y2 * can.height/5/2 + can.height/2, "#00AAFF", 2);
    }
}

/*

\begin{tikzpicture}
    \draw[very thin, color=gray] (-3cm, -2cm) grid (3cm, 3cm);
    
    \draw[->] (0cm, -2cm) -- (0cm, 3cm);
    \draw[->] (-3cm, 0cm) -- (3cm, 0cm);
    
    \draw [orange, domain=-3:3, smooth] plot (\x, {1 - (\x * \x)/2 + (\x * \x * \x)/16 + (\x * \x * \x * \x)/24});
            
    \draw [cyan, domain=-3:2.95883, smooth] plot (\x, {-\x + 3 * (\x * \x)/16 + (\x * \x * \x)/6});
\end{tikzpicture}

*/