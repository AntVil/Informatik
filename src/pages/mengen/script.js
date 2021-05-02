let graphics = [];

window.onload = function(){
    let equations = document.getElementsByClassName("equation");
    for(let i=0;i<equations.length;i++){
        katex.render(equations[i].innerText, equations[i], {
            throwOnError: false
        });
    }

    graphics = document.getElementsByClassName("graphic");
    for(let i=0;i<graphics.length;i++){
        canrt.render(graphics[i].innerText, canrt[i], {

        });
    }
    canrt.loop();
}
