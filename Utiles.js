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