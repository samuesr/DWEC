document.addEventListener('DOMContentLoaded',iniciar,false);
function iniciar() {
    clean(document.body);
    let enlc=document.getElementsByTagName('a');
    let enlc_long= enlc.length;
    for (let i = 0; i < enlc_long-1; i++) {
        enlc[i].addEventListener('click',cambiar); 
    }
}
function cambiar() {
    let este= this.textContent;
    let siguiente= this.parentNode.parentNode.nextSibling;
    let text_sig=siguiente.textContent;
    siguiente.firstChild.firstChild.textContent=este;
    this.textContent=text_sig;
}
function clean(node) {
    for (var n = 0; n < node.childNodes.length; n++) {
        var child = node.childNodes[n];
        if
            (
            child.nodeType === 8
            ||
            (child.nodeType === 3 && !/\S/.test(child.nodeValue))
        ) {
            node.removeChild(child);
            n--;
        }
        else if (child.nodeType === 1) {
            clean(child);
        }
    }
}