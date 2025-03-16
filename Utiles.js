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
function mayorQueN(myStrings,n) {
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
function multiplicarLosNumeros(numbers,mult){
    const numerosMultiplicados = numbers.map(numero => numero * mult)
    return numerosMultiplicados
}

/*Función que recibe un array y que devuelve un nuevo array con solo los elementos que empiezan por X.
 */
function elementosZ(myStrings,x){
    var arrayStrings = myStrings.filter(string => typeof string === "string")
    var nuevoA = arrayStrings.filter(palabra => palabra.toLowerCase().startsWith(x))
    return nuevoA
}

/*Función que recibe un array y que devuelve un nuevo array con solo los elementos que sean múltiplos de n.
 */
function multiplos5(numbers,n){
    const multiplos = numbers.filter(number => number % n == 0)
    return multiplos
}

/*Función que recibe un array y que devuelve el primer elemento cuyo tamaño sea superior o igual a n. 
*/
function tamañoElemento(myStrings,n){
    const filtradoString = myStrings.filter(string => typeof string === "string")
    const filtradoTamaño = filtradoString.find(string => string.length>=n)
    return filtradoTamaño
}

/*Función que recibe un array y que devuelve el último elemento que empieza por X.
 */
function ultimoElemento(myStrings,x){
    const filtradoString = myStrings.filter(string => typeof string === "string")
    const filtradoUltimo = filtradoString.reverse()
    return filtradoUltimo.find(ultimo=>ultimo.toLowerCase().startsWith(x))
}

/* Función que recibe un array y que devuelve la posición del primer elemento que empieza por X
 */
function primeraPocicion(myStrings,x){
    const filtradoString = myStrings.filter(s => typeof s === "string")
    const filtradoPrimero = filtradoString.find(a => a.toLowerCase().startsWith(x))
    return filtradoPrimero
}

/*Función que recibe un array y que devuelve el último elemento par
*/
function ultimoPar(numbers){
    const numberReverse=numbers.reverse()
    const ultimoPar = numberReverse.find(n => n % 2 == 0 )
    return ultimoPar
}

/*
*Función que recibe un array y que devuelve la suma de todos sus elementos. 
 */
function sumaArray(numbers){
    let total=0
    let sumaTotal = numbers.reduce((total,numero) => total += numero)
    return sumaTotal
}

/*Función que recibe un array y que devuelve la resta del primer elemento menos el segundo y así sucesivamente.
 */
function restaArray(numbers){
    let resta = numbers.reduce((total,numero)=> total -= numero)
    return resta
}

/*Función que recibe un array y que devuelve la resta del último elemento menos el penúltimo y así sucesivamente
 */
function restaReverse(numbers){
    let rev = numbers.reverse()
    let resta = rev.reduce((total,numero) => total -= numero)
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
