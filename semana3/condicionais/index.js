// EXERCICIOS INTERPRETAÇÃO DE CÓDIGO

//1. O código utiliza a condicional if/else para testar se o número digitado pelo usuário é par ou impar. Caso o número digitado seja par a mensagem impressa no console é "Passou no teste", caso o número digitado seja impar, a mensagem impressa no console é "Não passou no teste". Dentro desse tipo de condicional, o parametro verdadeiro fica guardado no if, e caso o que foi solicitado(na variável fora da condicional) não seja verdadeiro(se comparado ao parametro do if, é lido a mensagem guardada no else.

//2A. O código mostra a condicional switch case, que otimiza o processo do if/else quando se tem muitas informações para serem comparadas.
//2B. A mensagem impressa no console será: "O preço da fruta Maçã é R$2.25".
//2C. A mensagem impressa no console será: "O preço da fruta Pêra é R$5", o switch pegaria o valor errado sem o break.

//3A. A variável da primeira linha está pedindo um numero para o usuário através de um prompt e já esta trasnformando a string de resposta do usuário em numero.
//3B. Numero 10: Esse numero passou no teste" Numero -10: apareceça um erro, pois não tem uma condicional para caso o parametro não seja atendido.
//3C. Sim, a variavel let não será lida, pois esta dentro do escopo e o console.log que esta chamando esta variavel esta fora.


//EXERCICIOS ESCRITA DE CÓDIGO
//4.
/*
const idade = Number(prompt("Qual sua idade?"))

if (idade > 18) {
    console.log("Você pode dirigir")
} else {
    console.log ("Você não pode dirigir")
}
*/

//5.
/*
const peridoAula = prompt("Qual período do dia você estuda? Digite M (matutino) V (vespertino) N (noturno)").toUpperCase()

if (peridoAula === "M") {
    console.log("Bom dia!")
} else if (peridoAula === "V") {
    console.log("Boa tarde!")
} else if (peridoAula === "N") {
    console.log("Boa noite!")
} else {
    console.log("Digite um valor válido. M para matutino, V para vespertino, N para noturno")
}
*/

//6.
/*
const peridoAula = prompt("Qual período do dia você estuda? Digite M (matutino) V (vespertino) N (noturno)").toUpperCase()

switch (peridoAula) {
    case "M":
        console.log("Bom dia!")
        break
    case "V":
        console.log("Boa tarde!")
        break
    case "N":
        console.log("Boa noite!")
        break
    default:
        console.log("Digite um valor válido. M para matutino, V para vespertino, N para noturno")
        break
}
*/

//7.
/*
const generoFilme = prompt("Qual genero do filme vão assistir?").toLowerCase()
const valorIngresso = prompt("Qual valor do ingresso?")

if (generoFilme === "fantasia" && valorIngresso < 15) {
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(")
}
*/

//DESAFIOS

//1.
/*
const generoFilme = prompt("Qual genero do filme vão assistir?").toLowerCase()
const valorIngresso = prompt("Qual valor do ingresso?")

if (generoFilme === "fantasia" && valorIngresso < 15) {
    let snack = prompt("Qual snack você quer comprar?")
    console.log("Bom filme com", snack)
    
} else {
    console.log("Escolha outro filme :(")
}
 */

 //2. INCOMPLETO

 const nomeCompleto = prompt("Digite seu nome completo:")
 let tipoDeJogo = prompt("Escolha o tipo do jogo:'IN' internacional ou 'DO' domestico").toUpperCase()
 let etapaDoJogo = prompt("EScolha a etapa do jogo: 'SF' para semi final,'DT' para decisão terceiro lugar e 'FI' para final ").toUpperCase()
let categoria = Number(prompt("Escolha entre as categorias 1, 2, 3 ou 4"))
let qntIngresso = Number(prompt("Digite a quantidade de ingressos que deseja"))
let valorIngresso
let valorTotal


switch (tipoDeJogo) {
    case "IN":
        tipoDeJogo = "Internacional"
        break
    case "DO":
        tipoDeJogo = "Nacional"
        break
    default:
        tipoDeJogo = "digite um valor válido"
}

switch (etapaDoJogo) {
    case "SF":
        etapaDoJogo = "Semi-final"
        break
    case "DT":
        etapadoJogo = "Decisão do terceiro lugar"
        break
    case "FI":
        etapadoJogo = "Final"
        break
    default:
        etapaDoJogo = "Digite um valor válido"
        break
}

if (etapaDoJogo === "SF") {
    switch (categoria) {
        case 1:
            valorIngresso = 1.320
            break

        case 2:
            valorIngresso = 880
            break

        case 3: 
            valorIngresso = 550
            break

        case 4:
            valorIngresso = 220
            break

    }

} else if (etapaDoJogo === "DT") {
    switch (categoria) {
        case 1:
            valorIngresso = 660
            break
    
        case 2:
            valorIngresso = 440
            break
    
        case 3: 
            valorIngresso = 330
            break
    
        case 4:
            valorIngresso = 170
            break

    }

} else if (etapaDoJogo === "FI") {
    switch (categoria) {
        case 1:
            valorIngresso = 1980
            break
        
        case 2:
            valorIngresso = 1320
            break
        
        case 3: 
            valorIngresso = 880
            break
        
        case 4:
            valorIngresso = 330
            break 

    }

} else  {
            valorIngresso = "teste"
        }

     
       
if (tipoDeJogo === "DO") {
    valorIngresso
} else {
    valorIngresso*4.10
}


console.log(" ---- Dados da Compra ----")
console.log(`Nome do cliente: ${nomeCompleto}`)
console.log(`Tipo do jogo: ${tipoDeJogo}`)
console.log(`Etapa do Jogo: ${etapaDoJogo}`)
console.log(`Categoria: ${categoria}`)
console.log(`Quantidade de ingressos: ${qntIngresso}`)
console.log("---- Valores ----")
console.log(`Valor do ingresso: ${valorIngresso}`)







