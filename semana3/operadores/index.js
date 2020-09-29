// INTERPRETAÇÃO DE CÓDIGO

//1.
/*
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)
//console: a. false

resultado = bool1 && bool2 && bool3
console.log("b. ", resultado)
//console: b. false

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)
//console.log: c. true

console.log("e. ", typeof resultado)
//console.log: e. boolean
*/

//2.
/*
let array
console.log('a. ', array)
//console: a. undefined

array = null
console.log('b. ', array)
//console: b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
//console: c. 11

let i = 0
console.log('d. ', array[i])
//console: d. 3


array[i+1] = 19
console.log('e. ', array)
//console: e. 3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13, 19 

const valor = array[i+6]
console.log('f. ', valor)
//console: f. 9
*/


// ESCRITA DE CÓDIGO
//1.
/*
let idade = prompt("Qual sua idade?")
let idadeMelhorAmigo = prompt("Qual idade do seu melhor amigo?")

idadeNum = Number(idade) //pra transformar a string em number
idadeMelhorAmigoNum = Number(idadeMelhorAmigo) //pra transformar a string em number

console.log(idadeNum, idadeMelhorAmigoNum)

let perguntaIdadeMaior = "Sua idade é maior do que a do seu melhor amigo?"
let respostaIdadeMaior = idadeNum > idadeMelhorAmigoNum
console.log(perguntaIdadeMaior, "Resposta: ", respostaIdadeMaior)

let diferenca = idadeMelhorAmigoNum - idadeNum
console.log("A diferença de idade é de: ", diferenca, " anos")
*/

//2.
/*
let perguntaNumero = prompt("Digite um número par")

perguntaNumero = Number(perguntaNumero)

console.log(perguntaNumero)
//console.log(typeof perguntaNumero) //pra ter certeza que transformou em numero

console.log(perguntaNumero%2)

// c./d. os números pares sempre dão resto 0, os números impares sempre dão resto 1
*/

//3.
/*
let listaDeTarefas = []
let tarefa1 = prompt("Digite tres tarefa que precise realizar hoje")
let tarefa2 = prompt("Digite uma tarefa que precise realizar hoje")
let tarefa3 = prompt("Digite uma tarefa que precise realizar hoje")

listaDeTarefas.push(tarefa1, tarefa2, tarefa3)
console.log(listaDeTarefas)

let tarefaRealizada  = prompt("Digite o indice da tarefa que já realizou")
//não precisa dar console, pq ai só ia aparecer o valor digitado pelo usuário e não a ação necessária

listaDeTarefas.splice(tarefaRealizada, 1)
console.log(listaDeTarefas)
*/


//4.
/*
let nome = prompt("Qual seu nome?")
let email = prompt("Qual seu email?")
console.log(`O email ${email} foi cadastrado com sucesso. Seja bem vindo(a) ${nome}!`)
*/

//DESAFIOS
/*
//1A

let fEmK = (( 77 - 32)*5)/9 + 273.15
console.log(fEmK +  "K")

//B
let cEmF = (80)*(9/5) + 32
console.log(cEmF + "ºF")

//C
let cEmF1 = (30)*(9/5) + 32
console.log(cEmF1 + "ºF")

let fEmK1 = ((cEmF1 - 32)*5)/9 + 273.15
console.log(fEmK1 + "K")

//D
let inserirTemperatura = prompt("Insira temperatura °C desejada")
inserirTemperatura = Number(inserirTemperatura) //SEMPRE TRANSFORMAR EM NUMERO!!!
let cEmF2 = (inserirTemperatura)*(9/5) + 32
console.log(cEmF2 + "ºF") //valor °C digitado pelo usuário convertido em °F

let fEmK2 = ((cEmF2 - 32)*5)/9 + 273.15
console.log(fEmK2 + "K") //valor °F anterior convertido em K

let cEmK = (inserirTemperatura) + 273.15
console.log(cEmK + "K")
*/

//2A.
/*
let consumoKwH = prompt("Qual quantidade de kWhs consumida?")
let valor = consumoKwH * 0.05
console.log(`R$: ${valor}`)

//B.

let desconto = prompt('Qual quantidade de desconto?')
let valorDesconto = valor * (1 - desconto/100) 
console.log(valorDesconto)
*/

//3A.
/*
let libraEmQuilograma = 20*0.4535
console.log("20lb equivalem a ",libraEmQuilograma,"kg") //1lb = 0.45kg

//B.
let oncaEmQuilograma = 10.5*0.0283
console.log("10.5oz equivalem a ",oncaEmQuilograma,"kg") //1oz = 0.0283kg

//C.
let milhaEmMetro = 100*1609.34
console.log("100mi equivalem a ",milhaEmMetro,"m") //1mi = 1609m

//D.
let pesEmMetro = 50*1609.34
console.log("50ft equivalem a ",pesEmMetro,"m") //1ft = 0.3048

//E.
let galaoEmLitro = 103.56*3.79
console.log("103.56gal equivalem a ",galaoEmLitro,"l") //1gal = 3.79lm

//F.
let xicaraEmLitro = 450*0.25
console.log("450xic equivalem a ",xicaraEmLitro,"l") //1xic = 0.25l

//G.
let ValorEmOnca = prompt("Digite valor em onça")
console.log(`${ValorEmOnca}oz equivale a ${ValorEmOnca * 0.0283} kg`)
*/