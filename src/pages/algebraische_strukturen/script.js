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
    can.height = can.clientWidth / 3.5;
    ctxt = can.getContext("2d");
    ctxt.clearRect(0, 0, can.width, can.height);
    let size = can.height / 30;

    rect(ctxt, 1*size, 1 * size, can.width - 1 * 2 * size, 27 * size, "#FF00AA", "#00000000", 0, size);
    
    rect(ctxt, 2*size, 2 * size, can.width - 2 * 2 * size, 19 * size, "#AAFF00", "#00000000", 0, size);
    rect(ctxt, 2*size, 2 * size, (can.width - 1 * 2 * size) / 2 + 1 * size, 25 * size, "#AAFF00", "#00000000", 0, size);
    
    rect(ctxt, 3*size, 3 * size, can.width - 3 * 2 * size, 14 * size, "#777777", "#00000000", 0, size);
    rect(ctxt, 3*size, 3 * size, (can.width - 1 * 2 * size) / 2 - 1 * size, 23 * size, "#777777", "#00000000", 0, size);

    rect(ctxt, can.width/2, 16 * size, 3 * size, 3 * size, "#777777", "#00000000", 0, size);
    rect(ctxt, can.width/2 + size, 17 * size, 3 * size, 3 * size, "#AAFF00", "#00000000", 0, size);

    rect(ctxt, can.width/2 + 1.5*size, 20 * size, 3 * size, 3 * size, "#AAFF00", "#00000000", 0, size);
    rect(ctxt, can.width/2 + 2*size, 21 * size, 4 * size, 3 * size, "#FF00AA", "#00000000", 0, size);
    

    rect(ctxt, 4*size, 4 * size, (can.width - 1 * 2 * size) / 2 - 3 * size, 21 * size, "#00FFAA", "#00000000", 0, size);
    rect(ctxt, 5*size, 5 * size, (can.width - 3 * 2 * size) / 2 - 3 * size, 16 * size, "#AA00FF", "#00000000", 0, size);
    rect(ctxt, 6*size, 6 * size, (can.width - 5 * 2 * size) / 2 - 3 * size, 11 * size, "#FFAA00", "#00000000", 0, size);
    rect(ctxt, 7*size, 7 * size, (can.width - 7 * 2 * size) / 2 - 3 * size, 6 * size, "#00AAFF", "#00000000", 0, size);

    rect(ctxt, can.width/2 + size, 7 * size, (can.width - 5 * 2 * size)/2, 6 * size, "#00AAFF", "#00000000", 0, size);
    


    text(ctxt, "Halbgruppe", 9*size, 9*size, size*2, "#FFFFFF", "left");

    text(ctxt, "Monoid", 9*size, 15*size, size*2, "#FFFFFF", "left");

    text(ctxt, "Gruppe", 9*size, 19*size, size*2, "#FFFFFF", "left");

    text(ctxt, "Kommutative Gruppe", 9*size, 23*size, size*2, "#FFFFFF", "left");



    text(ctxt, "⊕ Abgeschlossen", 1 / 4 * (can.width - 2 * 7 * size) + 9 * size, 9*size, size*2, "#FFFFFF", "left");
    text(ctxt, "⊕ Assoziativ", 1 / 4 * (can.width - 2 * 7 * size) + 9 * size, 11*size, size*2, "#FFFFFF", "left");

    text(ctxt, "⊕ Neutral Element", 1 / 4 * (can.width - 2 * 7 * size) + 9 * size, 15*size, size*2, "#FFFFFF", "left");
    
    text(ctxt, "⊕ Inverse Elemente", 1 / 4 * (can.width - 2 * 7 * size) + 9 * size, 19*size, size*2, "#FFFFFF", "left");

    text(ctxt, "⊕ Kommutativ", 1 / 4 * (can.width - 2 * 7 * size) + 9 * size, 23*size, size*2, "#FFFFFF", "left");


    
    text(ctxt, "⊙ Abgeschlossen", 2 / 4 * (can.width - 2 * 7 * size) + 10 * size, 9*size, size*2, "#FFFFFF", "left");
    text(ctxt, "⊙ Assoziativ", 2 / 4 * (can.width - 2 * 7 * size) + 10 * size, 11*size, size*2, "#FFFFFF", "left");

    text(ctxt, "⊕, ⊙ Distributiv", 2 / 4 * (can.width - 2 * 7 * size) + 10 * size, 15*size, size*2, "#FFFFFF", "left");

    text(ctxt, "⊙ Kommutativ", 2 / 4 * (can.width - 2 * 7 * size) + 10 * size, 19*size, size*2, "#FFFFFF", "left");

    text(ctxt, "⊙ Neutral Element", 2 / 4 * (can.width - 2 * 7 * size) + 10 * size, 23*size, size*2, "#FFFFFF", "left");

    text(ctxt, "⊙ Inverse Elemente", 2 / 4 * (can.width - 2 * 7 * size) + 10 * size, 25*size, size*2, "#FFFFFF", "left");

    

    text(ctxt, "Halbgruppe", 3 / 4 * (can.width - 2 * 7 * size) + 9 * size, 9*size, size*2, "#FFFFFF", "left");
    text(ctxt, "", 3 / 4 * (can.width - 2 * 7 * size) + 9 * size, 11*size, size*2, "#FFFFFF", "left");

    text(ctxt, "Ring", 3 / 4 * (can.width - 2 * 7 * size) + 9 * size, 15*size, size*2, "#FFFFFF", "left");

    text(ctxt, "Kommutativer Ring", 3 / 4 * (can.width - 2 * 7 * size) + 9 * size, 19*size, size*2, "#FFFFFF", "left");

    text(ctxt, "Körper", 3 / 4 * (can.width - 2 * 7 * size) + 9 * size, 23*size, size*2, "#FFFFFF", "left");
}