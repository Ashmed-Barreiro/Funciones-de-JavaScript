//función para comprobar si todos los elementos de la lista son string debe recibir una array con datos, debuelve true si todos son de tipo string
function todosString(myStrings) {
    let falseTrue = myStrings.every(element => typeof element === 'string')
    console.log(falseTrue)
    return falseTrue
}
/*
Función que recibe un array y que comprueba que todos los elementos de una array son pares. 
Si es que sí devuelve true en caso contrario false.*/

function todosPares(numbers) {
    let pares = numbers.every(element => element % 2 == 0)
    console.log(pares)
    return pares
}
/*
Función que recibe un array y que comprueba si al menos un elemento del array tiene una longitud mayor que n.
 Si es que sí devuelve true en caso 
*/
function mayorQueN(myStrings, n) {
    let mayorQue = myStrings.some(element => element.length > n)
    console.log(mayorQue)
    return mayorQue
}
/*
 Función que recibe un array y que comprueba si al menos un número es par.
  Si es que sí devuelve true en caso contrario false.
 */
function numeroPAr(numbers) {
    let numerosPar2 = numbers.some(element => element % 2 == 0)
    console.log(numerosPar2)
    return numerosPar2
}

/*
Función que recibe un array y que devuelve un nuevo array con la longitud de cada string que hay dentro del array.
*/

function transformarArray(myStrings) {
    const nuevaArray = myStrings.map(palabra => palabra.length)
    console.log(nuevaArray)
    return nuevaArray
}

/*Función que recibe un array y un número y que devuelve todos los elementos del array multiplicado por dicho número pasado por  parámetro.
 */
function multiplicarLosNumeros(numbers, mult) {
    const numerosMultiplicados = numbers.map(numero => numero * mult)
    return numerosMultiplicados
}

/*Función que recibe un array y que devuelve un nuevo array con solo los elementos que empiezan por X.
 */
function elementosZ(myStrings, x) {
    var arrayStrings = myStrings.filter(string => typeof string === "string")
    var nuevoA = arrayStrings.filter(palabra => palabra.toLowerCase().startsWith(x))
    return nuevoA
}

/*Función que recibe un array y que devuelve un nuevo array con solo los elementos que sean múltiplos de n.
 */
function multiplos5(numbers, n) {
    const multiplos = numbers.filter(number => number % n == 0)
    return multiplos
}

/*Función que recibe un array y que devuelve el primer elemento cuyo tamaño sea superior o igual a n. 
*/
function tamañoElemento(myStrings, n) {
    const filtradoString = myStrings.filter(string => typeof string === "string")
    const filtradoTamaño = filtradoString.find(string => string.length >= n)
    return filtradoTamaño
}

/*Función que recibe un array y que devuelve el último elemento que empieza por X.
 */
function ultimoElemento(myStrings, x) {
    const filtradoString = myStrings.filter(string => typeof string === "string")
    const filtradoUltimo = filtradoString.reverse()
    return filtradoUltimo.find(ultimo => ultimo.toLowerCase().startsWith(x))
}

/* Función que recibe un array y que devuelve la posición del primer elemento que empieza por X
 */
function primeraPocicion(myStrings, x) {
    const filtradoString = myStrings.filter(s => typeof s === "string")
    const filtradoPrimero = filtradoString.find(a => a.toLowerCase().startsWith(x))
    return filtradoPrimero
}

/*Función que recibe un array y que devuelve el último elemento par
*/
function ultimoPar(numbers) {
    const numberReverse = numbers.reverse()
    const ultimoPar = numberReverse.find(n => n % 2 == 0)
    return ultimoPar
}

/*
*Función que recibe un array y que devuelve la suma de todos sus elementos. 
 */
function sumaArray(numbers) {
    let total = 0
    let sumaTotal = numbers.reduce((total, numero) => total += numero)
    return sumaTotal
}

/*Función que recibe un array y que devuelve la resta del primer elemento menos el segundo y así sucesivamente.
 */
function restaArray(numbers) {
    let resta = numbers.reduce((total, numero) => total -= numero)
    return resta
}

/*Función que recibe un array y que devuelve la resta del último elemento menos el penúltimo y así sucesivamente
 */
function restaReverse(numbers) {
    let rev = numbers.reverse()
    let resta = rev.reduce((total, numero) => total -= numero)
    return resta
}
/**
 * Función que añade cosas al dom
 * @param {"Hace referrencia al id del elemento html donde quieres ponerlo"} id 
 * @param {"Es la función o lo que quieras que se añada al dom"} resultado 
 */

function añadirAlDom(id, resultado) {
    const container = document.getElementById(id);
    let p = document.createElement('p');
    container.appendChild(p);
    p.textContent = resultado;
    p.setAttribute('class', 'result');
}
/**
 * Función que añade cosas al dom pero de Árgar
 * @param {"Hace referrencia al id del elemento html donde quieres ponerlo"} id 
 * @param {"Es la función o lo que quieras que se añada al dom"} resultado 
 */
function añadirAlDom(id, resultado) {
    let elemento = document.getElementById(id);
    if (!elemento) {
        console.error(`No se encontró un elemento con id="${id}"`);
        return;
    }
    elemento.innerHTML = `${resultado}`;
}

function comprobarStrings(array) {
    return array.every(element => typeof element === 'string');
}

function comprobarPares(array) {
    if (array.length % 2 === 0) {
        return true
    } else {
        return false
    }
}

function comprobarLongitud(array) {
    if (array.length > 2) {
        return true;
    } else {
        return false;
    }
}

function comprobarNumPar(array) {
    return array.some(element => element % 2 === 0);
}

function devolverNuevoArray(array) {
    return array.map(function (string) {
        if (typeof string === 'string') {
            return string.length;
        } else {
            return null;
        }

    });
}

function multiplicarArray(array, multiplicador) {
    return array.map(num => (typeof num === 'number' ? num * multiplicador : num));
}

function filtrarPorZ(array) {
    return array.filter(element => typeof element === 'string' && element.startsWith('Z'));
}

function filtrarMultiplosDe5(array) {
    return array.filter(num => typeof num === 'number' && num % 5 === 0);
}

function buscarPrimeroConTamanio5(array) {
    return array.find(element => typeof element === 'string' && element.length >= 5);
}

function buscarUltimoQueEmpiezaPorP(array) {
    return array.reverse().find(element => typeof element === 'string' && element.startsWith('P'));
}

function posicionPrimerElementoPorT(array) {
    return array.find(el => typeof el === 'string' && el.startsWith('T'));
}

function buscarUltimoPar(array) {
    return array.reverse().find(num => typeof num === 'number' && num % 2 === 0);
}

function sumarArray(array) {
    return array.reduce((total, num) => total + num, 0);
}

function restarArray(array) {
    return array.reduce((total, num) => total - num);
}

function restaDesdeUltimo(array) {
    return array.slice().reverse().reduce((acc, num) => (typeof num === 'number' ? acc - num : acc), 0);
}

function filtrarMayores(arr, limite) {
    return arr.filter(num => num > limite);
}

function ordenarPorPropiedad(arr, propiedad) {
    return arr.sort((a, b) => a[propiedad] > b[propiedad] ? 1 : -1);
}

function sumaArray(arr) {
    return arr.reduce((acum, num) => acum + num, 0);
}

function contarOcurrencias(arr) {
    let mapa = new Map();
    arr.forEach(el => mapa.set(el, (mapa.get(el) || 0) + 1));
    return mapa;
}

function eliminarDuplicados(arr) {
    return [...new Set(arr)];
}

function objetoAJson(obj) {
    return JSON.stringify(obj);
}

function jsonAObjeto(json) {
    return JSON.parse(json);
}

function tienePropiedad(obj, prop) {
    return obj.hasOwnProperty(prop);
}

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    get descripcion() {
        return `${this.nombre} tiene ${this.edad} años`;
    }

    set cambiarNombre(nuevoNombre) {
        this.nombre = nuevoNombre;
    }
}

class Estudiante extends Persona {
    constructor(nombre, edad, curso) {
        super(nombre, edad);
        this.curso = curso;
    }

    info() {
        return `${this.nombre} está en el curso ${this.curso}`;
    }
}

function elementoMasFrecuente(arr) {
    let mapa = new Map();
    arr.forEach(el => mapa.set(el, (mapa.get(el) || 0) + 1));
    return [...mapa.entries()].reduce((a, b) => b[1] > a[1] ? b : a)[0];
}

function valoresUnicos(arr, propiedad) {
    return [...new Set(arr.map(obj => obj[propiedad]))];
}

function dividirArray(arr, tamaño) {
    let resultado = [];
    for (let i = 0; i < arr.length; i += tamaño) {
        resultado.push(arr.slice(i, i + tamaño));
    }
    return resultado;
}

function fusionarObjetos(obj1, obj2) {
    return { ...obj2, ...obj1 };
}

function objetoAArray(obj) {
    return Object.entries(obj);
}

function contarPalabras(texto) {
    let mapa = new Map();
    texto.split(" ").forEach(palabra => {
        palabra = palabra.toLowerCase();
        mapa.set(palabra, (mapa.get(palabra) || 0) + 1);
    });
    return mapa;
}

function setAArrayOrdenado(set) {
    return [...set].sort();
}

class Utilidades {
    static generarNumeroAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

const saldoPrivado = Symbol("saldo");

class CuentaBancaria {
    constructor(saldo) {
        this[saldoPrivado] = saldo;
    }

    getSaldo() {
        return this[saldoPrivado];
    }
}

function reemplazarDuplicados(arr) {
    let seen = new Set();
    return arr.map(el => seen.has(el) ? "X" : (seen.add(el), el));
}

const agruparPor = (arr, propiedad) => {
    return arr.reduce((acc, obj) => {
        let key = obj[propiedad];
        if (!acc[key]) acc[key] = [];
        acc[key].push(obj);
        return acc;
    }, {});
};

const aplanarArray = arr => arr.flat(Infinity);

/**
 * Función que crea un tablero de 10x10
 */
function tablero() {
    let tablero = document.getElementById("tablero")
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            let celda = document.createElement("div")
            celda.classList.add("celda")
            celda.id = "celda " + i + "-" + j
            celda.textContent = " "
            tablero.appendChild(celda)
        }
    }
}

/**
 * Matriz de elementos false tiene 10 posiciones donde sus hijos son nulls o vacios y luego con el map devuelve otra array de 10 posiciones false
 */
let ocupado = Array(10).fill(null).map(() => Array(10).fill(false));

function creartecladoNumerico() {

    let teclado = document.getElementById("contenedor")

    let cantidadDeTeclas = 9
    for (let i = 1; i <= cantidadDeTeclas; i++) {
        let tecla = document.createElement("div")
        tecla.textContent = `${i}`
        teclado.appendChild(tecla)
        tecla.classList.add("tecla")
        tecla.style.backgroundColor = "green"
    }
}