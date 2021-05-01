window.onload = function(){
    let elements = document.getElementsByClassName("equation");
    for(let i=0;i<elements.length;i++){
        katex.render(elements[i].innerText, elements[i], {
            throwOnError: false
        });
    }
}
