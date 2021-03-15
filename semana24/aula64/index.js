// --------------- EXERCICIO 01 ---------------
// Considere que a gente só possa fazer três operações com string: adicionar um caractere a ele, remover um caractere dele ou substituir um caractere por outro. Dizemos que uma string é 'one edit' de outra se ela for o resultado da original a partir de UMA SÓ dessas operações. Escreva um método que determine se uma string é  'one edit' de outra.
// `"banan"` é 'one edit' de `"banana"` (remoção de um caracter)
// `"bananak"` é 'one edit' de `"banana"` (adição de um caracter)
// `"panana"` é 'one edit' de `"banana"` (troca de um caracter)
// `"bananaaa"` **não** é 'one edit' de `"banana"` (adição de dois caracteres)
function isOneEdit(stringA, stringB) {
    //pra adicionar somente uma letra no B, se adicionar mais de uma, não é one edit
    if (Math.abs(stringB.length - stringA.length) > 1)
        return false;
    //retirar uma letra do B
    if (stringA.length > stringB.length)
        return stringA.includes(stringB);
    //adicionar uma letra no B
    if (stringB.length > stringA.length)
        return stringB.includes(stringA);
    //alterar a última letra
    let caracter = 0;
    for (let i = 0; i < stringA.length; i++) {
        if (stringA[i] !== stringB[i]) {
            caracter = +1;
        }
    }
    if (caracter === 1) {
        return true;
    }
    else {
        false;
    }
}
console.log(isOneEdit("banana", "banan"));
