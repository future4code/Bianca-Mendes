// --------------- EXERCICIO 01 ---------------
// Considere que a gente só possa fazer três operações com string: adicionar um caractere a ele, remover um caractere dele ou substituir um caractere por outro. Dizemos que uma string é 'one edit' de outra se ela for o resultado da original a partir de UMA SÓ dessas operações. Escreva um método que determine se uma string é  'one edit' de outra.
const letterCounter = (input) => {
    let hashInput = {};
    //se o caractere for unico adiciona uma vez no {}, se for repetido,só aumenta o numero
    for (let char of input) {
        if (hashInput[char]) {
            hashInput[char] += 1;
        }
        else {
            hashInput[char] = 1;
        }
    }
    if (hashInput.length > input.length) {
        return input;
    }
    console.log(hashInput, "hash");
    console.log(input, "input");
};
console.log(letterCounter('amora'));
