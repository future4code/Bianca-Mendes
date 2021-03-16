// --------------- EXERCICIO 01 ---------------
// Considere que a gente só possa fazer três operações com string: adicionar um caractere a ele, remover um caractere dele ou substituir um caractere por outro. Dizemos que uma string é 'one edit' de outra se ela for o resultado da original a partir de UMA SÓ dessas operações. Escreva um método que determine se uma string é  'one edit' de outra.

// function isOneEdit (stringA: string, stringB: string): boolean {

//     //pra adicionar somente uma letra no B, se adicionar mais de uma, não é one edit
//     if(Math.abs(stringB.length - stringA.length) > 1) return false

//     //retirar uma letra do B
//     if(stringA.length > stringB.length) return stringA.includes(stringB)

//     //adicionar uma letra no B
//     if(stringB.length > stringA.length) return stringB.includes(stringA)

//     //alterar a última letra
//     let caracter: number = 0 //numero de letras diferentes
//     for(let i=0; i < stringA.length; i++) {
//         if(stringA[i] !== stringB[i]){
//             caracter =+ 1
//         } 
//     }
    
//             if(caracter === 1) {
//                 return true 
//             } else {
//                 false
//             }


// }
// console.log(isOneEdit("banana", "banan"))

// --------------- EXERCICIO 02 ---------------
// Implemente um método que performe uma compressão de string usando a contagem dos caracteres repetidos em sequência. Caso o resultado final tamanho maior do que a string inicial, seu programa deve retornar a string inicial

// Para o input `aabbb` o resultado deve ser `a2b3`

// Para o input `aabcccccaaa` o resultado deve ser `a2b1c5a3`

// Para o input `accurate` o resultado deve ser `accurate` (já que inicialmente o código retornaria `a1c2u1r1a1t1e1` que possui o tamanho maior do que `accurate`)

// Para o input `escola` o resultado deve ser `escola` (já que inicialmente o código retornaria `e1s1c1o1l1a1` que possui o tamanho maior do que `escola`)

// Para o input `accuraaaaaaaaaate`, o resultado deve ser `a1c2u1r1a10t1e1`

interface HashCountCharacters { // index signature ou indexação de propriedades
    [index: string]: number
}

const letterCounter = (input: string): any => {
    let hashInput: HashCountCharacters = {}
       
    //se o caractere for unico adiciona uma vez no {}, se for repetido,só aumenta o numero
    for (let char of input) {
        if (hashInput[char]) {
            hashInput[char] += 1
        } else {
            hashInput[char] = 1
        }
    }

    if (hashInput.length > input.length) {
        return input
    }
    console.log(hashInput, "hash")
    console.log(input, "input")
}

console.log(letterCounter('amora'))