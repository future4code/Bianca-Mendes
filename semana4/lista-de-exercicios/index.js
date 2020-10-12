//------------------------- EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO -------------------------------

//1. A função converte um valor de dolar para real. A constante cotação, recebe através do usuário a cotação do dia, e a função recebe como parametro o valor a ser convertido. O return dentro da função fará a conta necessária pra conversão, e assim que o console.log for chamado, o que será impresso é o valor do return. Resultado: console.log(meuDinheiro) -> R$500 (usando 5.00 de cotação).

//2. A função retorna um valor conforme o tipo de investimento, para isso utiliza a condicional switch(dentro da função), que como paramentro recebe o tipo de investimento e em cada case recebe cada tipo de investimento disponível. Dentro de cada case tbm está a formula responsável pela conta do novo valor (após o investimento) dentro de uma let(definina dentro do escopo da função). A função retorna o valor da let do case escolhido. Após a função têm duas constantes, cada uma puxando a função com valores de parametros diferentes. Resultado: console1: 165, console2: undefined pois não tem "Tesouro Direto" nos cases disponíveis.

//3. O código mostra um array com numeros, e outros dois arrays vazios. Logo depois aparece o laço for...of. O laço será responsável por ler todos os elementos do array cheio. Dentro do laço a condicional if irá separar os numeros pares e coloca-los dentro do primeiro array vazio, para isso utilizará a ferramenta push; já os outros numeros serão enviados para o segundo array vazio, também utilizando a ferramenta push.O primeiro console irá imprimir a quantidade total de elementos do array principal, o segundo console imprimirá o array de numeros pares e o terceiro console imprimirá os numeros restantes. Resultado: console1: 14, console2: 6, console3: 8.

//4. Na primeira linha desse código tem um array atribuido para uma constante. Logo abaixo, duas variáveis let. Depois um laço for...of que tem como parametro o array. Dentro do laço a condicional if tem como parametro: elemento do array < primeira let(infinito), caso seja positivo, o valor da let será igual o valor do elemento do array. Depois de sair dessa if, o mesmo elemento entra num segundo if, que tem como parametro( elemento do array > segunda let(0)), caso seja positivo, o valor da segunda let será igual o valor do elemento do array. Após o fechamento do laço for, existe dois consoles, cada um referente a uma let do inicio. Resultado: o primeiro console irá imprimir: -10, o segundo console irá imprimir 1590.


//--------------------------- EXERCICIOS DE LÓGICA DE PROGRAMAÇÃO -------------------------------

//1.As três maneiras de se percorrer/iterar uma lista são: while. for, for...of. 
//Exemplo:
/*
const cores = ["preto", "azul", "amarelo", "roxo", "vermelho"]

function arrayCores(array) {
for (let cor of cores) {
    console.log(cor)
}
}
arrayCores(cores)
*/


//2.

//a. booleano1 && booleano2 && !booleano4 - Resposta: false
//b. (booleano1 && booleano2) || !booleano3 - Resposta: false
//c. (booleano2 || booleano3) && (booleano4 || booleano1) - Resposta: true
//d. !(booleano2 && booleano3) || !(booleano1 && booleano3) - Resposta: false
//e. !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3) - Resposta: true


//3. O código não funcionará pois a condição de continuação esta incorreta. Segue código corrigido:
/*
const quantidadeDeNumerosPares =  (numero) => {
    let i = 0
 
    while(i < numero) {
        console.log(i*2)
        i++
    }
}
quantidadeDeNumerosPares(12)
*/


//4.
/*
let tipoDeTriangulo = (lado1, lado2, lado3) => {
    if (lado1 === lado2 && lado2 === lado3) {
       console.log("Triângulo equilatero")
    } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
        console.log("Triângulo Isósceles")
    } else if (lado1 !== lado2 !== lado3) {
        console.log("Triângulo Escaleno")
    }
}

tipoDeTriangulo(2, 2, 2)
tipoDeTriangulo(2, 2, 3)
tipoDeTriangulo(1, 2, 3)
*/


//5.
/*
const comparadorDeNumeros = (numero1, numero2) => {
    
    //para encontrar o maior numero
    
    if (numero1 > numero2) {
       console.log(`O maior numero é ${numero1}`)
    } else { 
        console.log(`O maior numero é ${numero2}`)
    }

    // para descobrir se numero1 é divisivel por numero2
    
    if (numero1 % numero2 === 0) {
        console.log(`${numero1} é divisivel por ${numero2}`)
    } else { 
        console.log(`${numero1} não é divisivel por ${numero2}`)
    }

    // para descobrir se numero2 é divisivel por numero1
    
    if (numero2 % numero1 ===0) {
        console.log(`${numero2} é divisivel por ${numero1}`)
    } else { 
        console.log(`${numero2} não é divisivel por ${numero1}`)
    }

    // para encontrar a diferença entre eles
    
    let diferençaEntre1e2 = Math.max(numero1,numero2) - Math.min(numero1,numero2)
    console.log(`A diferença entre eles é ${diferençaEntre1e2}`)

}

comparadorDeNumeros(5, 6)
*/


//---------------------------------- EXERCICIOS DE FUNÇÕES --------------------------------------

//1.

const arrayDeNumeros = [ 0, 1, 2, 3, 5, 8, 13, 21]

//para encontrar o primeiro maior numero

let maiorNumero = (array) => {
    let primeiroMaiorNumero = 0

    for(let numero of arrayDeNumeros) {
        if (numero > primeiroMaiorNumero) {
            (primeiroMaiorNumero = numero)
        }
    }
    //console.log(primeiroMaiorNumero)

//para encontrar o segundo maior numero

    let segundoMaiorNumero = 0

    for(let numero of arrayDeNumeros) {
        if (numero > segundoMaiorNumero && numero !== primeiroMaiorNumero) {
            segundoMaiorNumero = numero
        }
    }
    console.log(segundoMaiorNumero)
}

maiorNumero(arrayDeNumeros)

//para encontrar o primeiro menor numero

let menorNumero = (array) => {
    let primeiroMenorNumero = Infinity

    for(let numero of arrayDeNumeros) {
        if (numero < primeiroMenorNumero) {
            (primeiroMenorNumero = numero)
        }
    }
    //console.log(primeiroMenorNumero)

//para encontrar o segundo menor numero

    let segundoMenorNumero = Infinity

    for(let numero of arrayDeNumeros) {
        if (numero < segundoMenorNumero && numero !== primeiroMenorNumero) {
            segundoMenorNumero = numero
        }
    }
    console.log(segundoMenorNumero)
}

menorNumero(arrayDeNumeros)




