function line(ctxt, x1, y1, x2, y2, stroke="#000000FF", lineWidth=1, radius=0, arrow_size_end=0, arrow_size_start=0, dashed=false, opacity=1){
    ctxt.strokeStyle = stroke;
    ctxt.lineWidth = lineWidth;
    ctxt.globalAlpha = opacity;
    if(dashed){
        ctxt.setLineDash([2, 2]);
    }else{
        ctxt.setLineDash([]);
    }
    ctxt.beginPath();
    ctxt.moveTo(x1, y1);
    let angle = Math.asin((x2 - x1) / Math.hypot(x1-x2, y1-y2));
    if(y2-y1 > 0){
        angle = Math.PI - angle;
    }
    let middleX = (x1+x2)/2 + radius * Math.cos(angle);
    let middleY = (y1+y2)/2 + radius * Math.sin(angle);
    ctxt.bezierCurveTo(x1, y1, middleX, middleY, x2, y2);
    ctxt.stroke();
    if(arrow_size_end > 0){
        angle = Math.asin((middleX - x2) / Math.hypot(middleX-x2, middleY-y2));
        if(y2-middleY < 0){
            angle = Math.PI - angle;
        }
        ctxt.setLineDash([]);
        ctxt.beginPath();
        ctxt.moveTo(x2, y2);
        ctxt.lineTo(x2 - arrow_size_end * Math.cos(angle + Math.PI*3/4), y2 - arrow_size_end * Math.sin(angle + Math.PI*3/4));
        ctxt.moveTo(x2, y2);
        ctxt.lineTo(x2 - arrow_size_end * Math.cos(angle + Math.PI/4), y2 - arrow_size_end * Math.sin(angle + Math.PI/4));
        ctxt.stroke();
    }
    if(arrow_size_start > 0){
        angle = Math.asin((middleX - x1) / Math.hypot(middleX-x1, middleY-y1));
        if(y1-middleY < 0){
            angle = Math.PI - angle;
        }
        ctxt.setLineDash([]);
        ctxt.beginPath();
        ctxt.moveTo(x1, y1);
        ctxt.lineTo(x1 + arrow_size_start * Math.cos(angle - Math.PI/4), y1 + arrow_size_start * Math.sin(angle - Math.PI/4));
        ctxt.moveTo(x1, y1);
        ctxt.lineTo(x1 + arrow_size_start * Math.cos(angle - Math.PI*3/4), y1 + arrow_size_start * Math.sin(angle - Math.PI*3/4));
        ctxt.stroke();
    }
}

function rect(ctxt, x, y, width, height, fill="#00000000", stroke="#000000FF", lineWidth=1, radius=0, dashed=false, opacity=1){
    ctxt.fillStyle = fill;
    ctxt.strokeStyle = stroke;
    ctxt.lineWidth = lineWidth;
    ctxt.globalAlpha = opacity;
    if(dashed){
        ctxt.setLineDash([2, 2]);
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

function circle(ctxt, x, y, radius, fill="#00000000", stroke="#000000FF", lineWidth=1, dashed=false, opacity=1){
    ctxt.fillStyle = fill;
    ctxt.strokeStyle = stroke;
    ctxt.lineWidth = lineWidth;
    ctxt.globalAlpha = opacity;
    if(dashed){
        ctxt.setLineDash([2, 2]);
    }else{
        ctxt.setLineDash([]);
    }
    ctxt.beginPath();
    ctxt.arc(x, y, radius, 0, 2*Math.PI);
    ctxt.closePath();
    ctxt.fill();
    ctxt.stroke();
}

function text(ctxt, text, x, y, font=12, fill="#000000FF", align="center", textBaseline="middle", opacity=1){
    ctxt.fillStyle = fill;
    ctxt.globalAlpha = opacity;
    ctxt.font = font + "px Arial";
    ctxt.textAlign = align;
    ctxt.textBaseline = textBaseline;
    ctxt.fillText(text, x, y);
}
