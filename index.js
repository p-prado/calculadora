const mousetrap = require("mousetrap");

mousetrap.bind("1", clickUno);
mousetrap.bind("2", clickDos);
mousetrap.bind("+", clickSuma);

const boton1 = document.getElementById("botonUno");
boton1.addEventListener("click", clickUno);
document.getElementById("botonDos").addEventListener("click", clickDos);

const actualElemento = document.getElementById("numeroActual");
const resultadoElemento = document.getElementById("resultado");
let resultado = 0;
let actual = ""


function clickUno(){
    actual += 1;
    actualElemento.innerHTML = actual;
}

function clickDos() {
    actual += 2;
    actualElemento.innerHTML = actual;
}

document.getElementById("suma").addEventListener("click", clickSuma);

function clickSuma() {
    if (actual!="") {
        resultado += parseInt(actual);
        actual = ""
        actualElemento.innerHTML = "0";
        resultadoElemento.innerHTML = resultado;
    }
}