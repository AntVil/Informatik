function line(ctxt, x1, y1, x2, y2, arrow_size_start=0, arrow__size_end=0, radius=0, lineWidth=1, dashed=false, stroke="#000000FF", opacity=1){
    ctxt.strokeStyle = stroke;
    ctxt.lineWidth = lineWidth;
    ctxt.globalAlpha = opacity;
    if(dashed){
        ctxt.setLineDash([5, 5]);
    }else{
        ctxt.setLineDash([]);
    }
    ctxt.beginPath();
    ctxt.moveTo(x1, y1);
    let angle = Math.asin((x2 - x1) / Math.hypot(x1-x2, y1-y2));
    ctxt.bezierCurveTo(x1, y1, (x1+x2)/2 + radius * Math.cos(angle), (y1+y2)/2 + radius * Math.sin(angle), x2, y2);
    ctxt.stroke();
}

function rect(ctxt, x, y, width, height, radius=0, lineWidth=1, dashed=false, fill="#00000077", stroke="#000000FF", opacity=1){
    ctxt.fillStyle = fill;
    ctxt.strokeStyle = stroke;
    ctxt.lineWidth = lineWidth;
    ctxt.globalAlpha = opacity;
    if(dashed){
        ctxt.setLineDash([5, 5]);
    }else{
        ctxt.setLineDash([]);
    }
    ctxt.beginPath();
    ctxt.moveTo(x + width/2, y);
    ctxt.arcTo(x + width, y, x + width, y + height, radius);
    ctxt.arcTo(x + width, y + height, x, y + height, radius);
    ctxt.arcTo(x, y + height, x, y, radius);
    ctxt.arcTo(x, y, x + width, y, radius);
    ctxt.closePath();
    ctxt.fill();
    ctxt.stroke();
}

function circle(ctxt, x, y, radius, lineWidth=1, dashed=false, fill="#00000077", stroke="#000000FF", opacity=1){
    ctxt.fillStyle = fill;
    ctxt.strokeStyle = stroke;
    ctxt.lineWidth = lineWidth;
    ctxt.globalAlpha = opacity;
    if(dashed){
        ctxt.setLineDash([5, 5]);
    }else{
        ctxt.setLineDash([]);
    }
    ctxt.beginPath();
    ctxt.arc(x, y, radius, 0, 2*Math.PI);
    ctxt.closePath();
    ctxt.fill();
    ctxt.stroke();
}

function text(ctxt, text, x, y, align="center", textBaseline="middle", font=12, fill="#00000077", opacity=1){
    ctxt.fillStyle = fill;
    ctxt.globalAlpha = opacity;
    ctxt.font = font + "px Arial";
    ctxt.textAlign = align;
    ctxt.textBaseline = textBaseline;
    ctxt.fillText(text, x, y);
}
