// ------------------- EXERCÍCIO 01 --------------------
// Escreva uma função recursiva que:
// a. Receba um número e imprima todos os inteiros de 0 até esse número no console em ordem crescente
// const printIntegerNumbers = (number: number)=> {
//     if(number >= 0) {
//         printIntegerNumbers(number - 1)
//         console.log(number)
//     }
// }
// printIntegerNumbers(6)
// b. Receba um número e imprima todos os inteiros desse número até 0 em ordem decrescente
// const printInvertIntegerNumbers = (number: number)=> {
//     if(number >= 0) {
//         console.log(number)
//         printInvertIntegerNumbers(number - 1)
//     }
// }
// printInvertIntegerNumbers(6)
// ------------------- EXERCÍCIO 02 --------------------
// Escreva uma função recursiva que calcule a soma dos números inteiros de 0 a n
// const sumNumber = (number:number, initial: number = 0): number => {
//     if(number === 0) { return initial }
//     return sumNumber(number - 1, initial + number) 
// }
// console.log(sumNumber(3))
// ------------------- EXERCÍCIO 03 --------------------
// Transforme a função desenvolvida no Exercício 2 em iterativa (ou seja, não use recursividade).
// const sumNumber = (number: number) => {
//     let initial = 0
//     for(let i=0; i <= number; i++) {
//         initial += i
//     }
//     console.log(initial)
// }
// sumNumber(4)
// ------------------- EXERCÍCIO 04 --------------------
// Escreva uma função recursiva que consiga imprimir todos os elementos de um array
var printArray = function (array, num) {
    if (num === void 0) { num = array.length - 1; }
    if (num >= 0) {
        printArray(array, num - 1);
        console.log(array);
    }
};
var arr = [1, 2, 3];
printArray(arr);
