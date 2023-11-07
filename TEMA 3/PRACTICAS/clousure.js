
const a = "Hola";
function global() {
    const b = "Qué";
    function local() {
        const c = "tal?";
        return a + b + c;
    }
    return local;
}
console.log(global());
console.log(global()());
const clousure = global();
console.log(clousure());

const miContador = (function () {
    let _contador = 0;
    function incrementar() {
        return ++_contador;
    }
    function decrementar() {
        return --_contador;
    }
    function valor() {
        return _contador;
    }
    return {
        incrementar,
        decrementar,
        valor
    }
})();
console.log(miContador);
console.log(miContador.valor());
console.log(miContador.incrementar());
console.log(miContador.valor());
console.log(miContador.incrementar());
console.log(miContador.valor());

