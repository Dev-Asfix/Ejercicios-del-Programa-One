// Calcular Factorial
function calcularFactorial(numero) {
    if (numero == 0 || numero == 1) {
        return 1;
    } else {
        return numero * calcularFactorial(numero - 1);
    }
}

// Lista de lenguajes de programación
let lenguajesDeProgramacion = ["JavaScript", "C", "C++", "Kotlin", "Python"];

function lenguajes() {
    let vari = "";
    for (let i = lenguajesDeProgramacion.length - 1; i >= 0; i--) {
        console.log(lenguajesDeProgramacion[i]);
        vari += lenguajesDeProgramacion[i];
        vari += " ";
    }
    console.log(vari);
}

// Lista de números
let numeroLista = [10, 20, 30, 40, 1];

function comparacion() {
    let mayor = numeroLista[0];
    let menor = numeroLista[0];
    for (let i = 1; i < numeroLista.length; i++) {
        if (numeroLista[i] > mayor) {
            mayor = numeroLista[i];
        }
        if (numeroLista[i] < menor) {
            menor = numeroLista[i];
        }
    }
    console.log(`El numero Mayor es : ${mayor}`);
    console.log(`El numero menor es : ${menor}`);
}

// Función para encontrar un número en la lista
function encontrar(n) {
    let numerito = numeroLista.indexOf(n);
    console.log(numerito);
}

// Función para sumar dos listas elemento por elemento
let nuevaLista = [10, 50, 50, 50, 55];

function unirDosListas() {
    let resulLis = 0;
    for (let i = 0; i < nuevaLista.length; i++) {
        resulLis = numeroLista[i] + nuevaLista[i];
        console.log(`${numeroLista[i]} + ${nuevaLista[i]} = ${resulLis}`);
    }
}

// Función para elevar al cuadrado los elementos de una lista
let ListNew = [];
let ListaN = [2, 4, 5];

function potencia(...n1) {
    let resultadoList = 0;
    ListNew.push(...n1);
    for (let i = 0; i < ListNew.length; i++) {
        resultadoList = ListNew[i] * ListNew[i];
        console.log(`${ListNew[i]} = ${resultadoList}`);
    }
}

// Combinar dos arrays en uno nuevo
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combinar = [...array1, ...array2];
console.log(combinar);

// Llamadas a las funciones
lenguajes();
comparacion();
sumaLista();
encontrar(20);
unirDosListas();
potencia(...ListaN);
