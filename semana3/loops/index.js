// EXERCICIOS INTERPRETAÇÃO DE CÓDIGOS

//1. O código está fazendo um laço de repetição a partir do for. O valor impresso no console será 10.

//2A. Será impresso no console todos os números maiores de 8: 19, 21, 23, 25, 27, 30.
//2B.Não, pois para acessaar os indices seria nescessário criar uma nova variável


// EXERCICIOS DE ESCRITA DE CÓDIGOS 

//3A. 
/*
let arrayOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

for (let numero of arrayOriginal) {
    console.log(numero)
}
*/
//B.
/*
let arrayOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

for (let numero of arrayOriginal) {
    console.log(numero/10)
}
*/

//C.
/*
let arrayOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
let arrayPar = []

for (let numero of arrayOriginal) {
    if (numero % 2 === 0) {arrayPar.push(numero)}
}

console.log(arrayPar)
*/
//D.
/*
let arrayOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
const arrayString = []
let texto = ""
let i = [0]

for (let numero of arrayOriginal) {
texto = " O elemento do index " + i + " é " + numero 
arrayString.push(texto)
i++
}
console.log(arrayString)
*/

//E.
/*
let arrayOriginal = [20,40,50,60,70,80,90]
let valorMaximo = arrayOriginal[0]
let valorMinimo = arrayOriginal[0]

for (let numero of arrayOriginal) {
    if (valorMaximo < numero) {
        valorMaximo = numero
    }  else if (valorMinimo > numero) {
        valorMinimo = numero
    }
}
console.log(`O maior numero é ${valorMaximo} e o menor numero é ${valorMinimo}`)
*/





