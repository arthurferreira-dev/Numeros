let resultados = document.querySelector('aside#resultados'); // Output dos resultados
let parse = document.getElementById('parse'); // Par ou ímpar
let pos = document.getElementById('pos');// Positivo, Negativo ou Zero
let intdec = document.getElementById('intdec'); // Inteiro ou Decimal
let absolute = document.getElementById('absolute'); // Valor Absoluto
let fatorial = document.getElementById('fatorial'); // Fatorial

/* input[type=number] */
var numberInput = document.getElementById('number');

function ParImpar() {
    var numberValue = numberInput.value;
    var number = Number(numberValue);
    if (number % 2 === 0) {
        parse.innerHTML = `O número ${number} é <strong>PAR</strong>`
    } else {
        parse.innerHTML = `O número ${number} é <strong>ÍMPAR</strong>`
    }
}

function Pos() {
    var numberValue = numberInput.value;
    var number = Number(numberValue);

    if (number > 0) {
        pos.innerHTML = `Seu número é <strong>POSITIVO</strong>`
    } else if (number < 0) {
        pos.innerHTML = `Seu número é <strong>NEGATIVO</strong>`
    } else if (number === 0) {
        pos.innerHTML = `Seu número é <strong>ZERO</strong>`
    }
}

function IntDec() {
    var numberValue = numberInput.value;
    var number = Number(numberValue);

    if (number % 1 === 0) {
        intdec.innerHTML = `Seu número é <strong>INTEIRO</strong>`
    } else {
        intdec.innerHTML = `Seu número é <strong>DECIMAL</strong>`
    }
}

function Absolute() {
    var numberValue = numberInput.value;
    var number = Number(numberValue);

    let x = Math.abs(number)
    absolute.innerHTML = `Seu número absoluto é <strong>${x}</strong>`
}

function Fatorial() {
    var numberValue = numberInput.value;
    var number = Number(numberValue);

    if (number < 0 || !Number.isInteger(number)) {
        fatorial.innerHTML = `O fatorial não funciona com <strong>números negativos</strong> ou <strong>decimais</strong>`;
        return;
    }

    let fat = 1;
    for (let i = 2; i <= number; i++) {
        fat *= i;
    }

    fatorial.innerHTML = `O fatorial de <strong>${number}</strong> é <strong>${fat}</strong>`
}

function ExtractDate() {
    var numberValue = numberInput.value;
    var number = Number(numberValue);
    ParImpar(number);
    Pos(number);
    IntDec(number);
    Absolute(number);
    Fatorial(number);
    resultados.style.display = 'block'
    numberInput.value = ''
}