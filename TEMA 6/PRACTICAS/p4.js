document.addEventListener('DOMContentLoaded', iniciar, false);
function iniciar() {
    clean(document.body);
    document.body.lastChild.addEventListener('click', anade);
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

function anade() {
    let un_li = document.createElement('li');
    un_li.textContent='contenido nuevo';
    document.querySelector('#lista').appendChild(un_li);
}