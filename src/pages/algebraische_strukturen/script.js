let loaded = false;

window.onload = function () {
    loaded = true;

    let equations = document.getElementsByClassName("equation");
    for (let i = 0; i < equations.length; i++) {
        katex.render(equations[i].innerText, equations[i], {
            throwOnError: false
        });
    }

    setup();
}

window.onresize = setup();

function setup() {
    if (loaded) {
        beispiel_algebraische_struktur();
    }
}

function beispiel_algebraische_struktur() {
    let can = document.getElementById("beispiel_algebraische_struktur");
    can.width = can.clientWidth;
    can.height = can.clientWidth / 3;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    let size = can.height / 30;

    rect(ctxt, 1*size, 1 * size, can.width - 1 * 2 * size, can.height - 1 * 2 * size, "#00000000", "#000000FF", 0, size);
    rect(ctxt, 2*size, 2 * size, can.width - 2 * 2 * size, can.height - 2 * 2 * size, "#00000000", "#000000FF", 0, size);
    rect(ctxt, 3*size, 3 * size, can.width - 3 * 2 * size, can.height - 3 * 2 * size, "#00000000", "#000000FF", 0, size);
    rect(ctxt, 4*size, 4 * size, can.width - 4 * 2 * size, can.height - 4 * 2 * size, "#00000000", "#000000FF", 0, size);
    rect(ctxt, 5*size, 5 * size, can.width - 5 * 2 * size, can.height - 5 * 2 * size, "#00000000", "#000000FF", 0, size);
    rect(ctxt, 6*size, 6 * size, can.width - 6 * 2 * size, can.height - 6 * 2 * size, "#00000000", "#000000FF", 0, size);
    rect(ctxt, 7*size, 7 * size, can.width - 7 * 2 * size, can.height - 7 * 2 * size, "#00000000", "#000000FF", 0, size);
    
    text(ctxt, "a", 9*size, 9*size, size*2, "#FFFFFF");
    text(ctxt, "a", 9*size, 11*size, size*2, "#FFFFFF");

    text(ctxt, "a", 9*size, 15*size, size*2, "#FFFFFF");

    text(ctxt, "a", 9*size, 19*size, size*2, "#FFFFFF");

    text(ctxt, "a", 9*size, 23*size, size*2, "#FFFFFF");

    text(ctxt, "a", 9*size, 25*size, size*2, "#FFFFFF");
}