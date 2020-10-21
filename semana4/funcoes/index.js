//EXERCICIOS INTERPRETAÇÃO CÓDIGOS

//1A. O primeiro console imprimirá 10, o segundo console imprimirá 05.

//B. Sem o console.log, não é possivel imprimir o return, por isso, não seria impresso nada.


//2A.Seria impresso: "Darvas, Caio"

//B.Seria impresso: "Amanda, Caio"


//3. A função busca em um array quais são os numeros pares, multiplica o numero par encontrado por ele mesmo e depois o adiciona num array novo.Pode-se trocar o nome da função de método para encontrarParidade 


//EXERCÍCIOS ESCRITA DE CÓDIGO

//4A.
/*
function sobreMim() {
    return "Meu nome é Bianca, tenho 29 anos, moro em Mauá e sou estudante"
}

const resultadoSobreMim = sobreMim()
console.log(resultadoSobreMim)
*/

//B.
/*
let sobreMim = (nome, idade, cidade, estudante) => {
    if (estudante === true) {
        estudante = "sou estudante"
    } else {estudante = "não sou estudante"}

    return (`Meu nome é ${nome}, tenho ${idade} anos, moro em ${cidade}, ${estudante}`) 

}
let imprimirSobreMim = sobreMim("Bianca", 29, "Mauá", true)
console.log(imprimirSobreMim)
*/


//5A.
/*
let somarNumeros = (a, b) => {
    const soma = a + b
    return soma
}

const resultadoSoma = somarNumeros(10,5)
console.log(resultadoSoma)
*/

//B.
/*
let somarNumeros = (a, b) => {
    if (a >= b) {
        return true
    } else { return false}
}

const resultadoBoolean = somarNumeros(1,5)
console.log(resultadoBoolean)
*/

//C.
/*
let fraseString = (mensagem) => {
    for (let i = 0; i < 10; i++ ) {
        console.log(mensagem)
    }
}

const resultado = fraseString("eu sou uma string irritante")
console.log(resultado)
*/

//6A.
/*
const arrayNum = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

let arrayDeNumeros = (array) => {
    for (let i = 0; i < array.length; i++ ) 
      {}

    return array.length
}

let tamanhoDoArray = arrayDeNumeros(arrayNum)
console.log(tamanhoDoArray) 
*/

//B.
/*
let numeroParImpar = (a) => {
    if (a%2 === 0) {
        return true
    } else { return false}
}

const numeroPar = numeroParImpar(7)
console.log(numeroPar)
*/

//C.
/*
const arrayNum = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

let qntNumerosPares = (array) => {
    let arrayPar = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            arrayPar.push(array[i]) 
        }
    }
    return arrayPar.length
}

let novoArray = qntNumerosPares(arrayNum)
console.log(novoArray)
*/

//D.
/*
const arrayNum = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

let numeroParImpar = (a) => {
    if (a%2 === 0) {
        return true
    } else {return false}
}

let qntNumerosPares = (array) => {
    let arrayPar = []
    for (let i = 0; i < array.length; i++) {
        if (numeroParImpar(array[i])) {
            arrayPar.push(array[i])  
        }
    }
    return arrayPar.length
}

let novoArray = qntNumerosPares(arrayNum)
console.log(novoArray)
*/