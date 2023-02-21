const Mousetrap = require("mousetrap");

// Get the Current and Result fields from the DOM;
var actual = document.getElementById("actual");
var resultado = document.getElementById("resultado");
var logHtml = document.getElementById("log");
const log = [];

// Add click event listeners to all buttons;
document.getElementById("botonUno").addEventListener("click", clickUno);
document.getElementById("botonDos").addEventListener("click", clickDos);
document.getElementById("botonTres").addEventListener("click", clickTres);
document.getElementById("botonCuatro").addEventListener("click", clickCuatro);
document.getElementById("botonCinco").addEventListener("click", clickCinco);
document.getElementById("botonSeis").addEventListener("click", clickSeis);
document.getElementById("botonSiete").addEventListener("click", clickSiete);
document.getElementById("botonOcho").addEventListener("click", clickOcho);
document.getElementById("botonNueve").addEventListener("click", clickNueve);
document.getElementById("botonCero").addEventListener("click", clickCero);
document.getElementById("suma").addEventListener("click", clickSuma);
document.getElementById("resta").addEventListener("click", clickResta);
document.getElementById("mult").addEventListener("click", clickMult);
document.getElementById("div").addEventListener("click", clickDiv);
document.getElementById("botonReset").addEventListener("click", clickReset);
document.getElementById("botonDelete").addEventListener("click", clickDelete);

// Bind the keystrokes to the handler functions;
Mousetrap.bind("1", clickUno);
Mousetrap.bind("2", clickDos);
Mousetrap.bind("3", clickTres);
Mousetrap.bind("4", clickCuatro);
Mousetrap.bind("5", clickCinco);
Mousetrap.bind("6", clickSeis);
Mousetrap.bind("7", clickSiete);
Mousetrap.bind("8", clickOcho);
Mousetrap.bind("9", clickNueve);
Mousetrap.bind("0", clickCero);
Mousetrap.bind("+", clickSuma);
Mousetrap.bind("-", clickResta);
Mousetrap.bind("*", clickMult);
Mousetrap.bind("/", clickDiv);
Mousetrap.bind("backspace", clickDelete);
Mousetrap.bind("esc", clickReset);

// Declare all handler functiones (what happens when buttons are clicked);
function clickUno() {
    handleNumberClick(1);
}
function clickDos() {
    handleNumberClick(2);
}
function clickTres() {
    handleNumberClick(3);
}
function clickCuatro() {
    handleNumberClick(4);
}
function clickCinco() {
    handleNumberClick(5);
}
function clickSeis() {
    handleNumberClick(6);
}
function clickSiete() {
    handleNumberClick(7);
}
function clickOcho() {
    handleNumberClick(8);
}
function clickNueve() {
    handleNumberClick(9);
}
function clickCero() {
    handleNumberClick(0);
}


// Opperation functions
function clickSuma() {
    let valorActual = parseInt(actual.innerHTML);
    let valorResultado = parseInt(resultado.innerHTML);
    resultado.innerHTML = valorActual + valorResultado;
    log.push(`${valorResultado} + ${valorActual} = ${resultado.innerHTML}`);
    actual.innerHTML = "0";
    updateLog();
}
function clickResta() {
    let valorActual = parseInt(actual.innerHTML);
    let valorResultado = parseInt(resultado.innerHTML);
    resultado.innerHTML = valorResultado - valorActual;
    log.push(`${valorResultado} - ${valorActual} = ${resultado.innerHTML}`);
    actual.innerHTML = "0";
    updateLog();
}
function clickDiv() {
    let valorActual = parseInt(actual.innerHTML);
    let valorResultado = parseInt(resultado.innerHTML);
    if (valorActual === 0) {
        alert("¡No se puede dividir por 0!");
    } else {
        resultado.innerHTML = valorResultado / valorActual;
        log.push(`${valorResultado} ÷ ${valorActual} = ${resultado.innerHTML}`);
        actual.innerHTML = "0";
        updateLog();

    }
}
function clickMult() {
    let valorActual = parseInt(actual.innerHTML);
    let valorResultado = parseInt(resultado.innerHTML);
    resultado.innerHTML = valorActual * valorResultado;
    log.push(`${valorResultado} × ${valorActual} = ${resultado.innerHTML}`);
    actual.innerHTML = "0";
    updateLog();
}

function clickDelete() {
    let string = actual.innerHTML;
    if (string.length === 1) {
        actual.innerHTML = "0";
    } else {
        actual.innerHTML = string.slice(0, string.length-1);
    }
}

function clickReset() {
    resultado.innerHTML = "0";
    actual.innerHTML = "0";
}

// Function to handle when a number is clicked.
// Take the number clicked as an imput; if the Current is "0", set it equal to the input number; otherwise, just append the input number;
function handleNumberClick(inputNumber) {
    if (actual.innerHTML === "0") {
        actual.innerHTML = inputNumber.toString();
    } else {
        actual.innerHTML += inputNumber.toString();
    }
}

function updateLog( number1, opperation, number2, result) {
    logHtml.insertAdjacentHTML("beforeend", `<p>${log[log.length-1]}</p>`)
}