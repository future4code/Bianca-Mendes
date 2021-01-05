// ---------------EXERCÍCIO 01---------------
/*
 a)  Como fazemos para acessar os parâmetros passados na linha de comando para o Node?
Para acessar os parâmetros utilizamos o process.argv, nele colocamos qual a posição do parâmetro. Já no terminal chamamos node nome-do-arquivo argumento ou npm nome-do-script argumento
*/

/*
b)  Crie um programa que receba seu nome e sua idade.
    const name = process.argv[2]
    const age = process.argv[3]

    console.log(`Olá ${name}! Você tem ${Number(age)} anos.`)
*/


// c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.
    const chalk = require('chalk');
    const name = process.argv[2]
    const age = process.argv[3]
    const agePlusSeven = Number(age) + 7

    console.log(chalk.blue(`Olá ${name}! Você tem ${age} anos. Em sete anos você terá ${agePlusSeven}`))


