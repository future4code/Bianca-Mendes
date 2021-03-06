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
/*
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
*/


//2.
/*
let ola = function() {  
    return (alert("Hello Future4"))
}

const hello = ola()
console.log(hello)
*/


//---------------------------------- EXERCICIOS DE OBJETOS --------------------------------------

//1. Os arrays são responsáveis por criar listas de strings ou numeros.Dentro de um array consegue-se ordenar dados lado a lado, separados por virgulas. Pode-se utilizar o array para agrupar um determinado numero de dados, facilitando chamar/alterar esses dados posteriormente. Objetos são estruturas que permitem guardar dados mais complexos, as informações são estruturadas dentro de propriedades, e cada propriedade é dividida entre chave(nome da informação)-valor(informação), possibilita alterar dados de forma mais especifica e assim como o array pode ser chamado/alterado posteriormente a sua criação.


//2.
/*
const criarRetangulo = (lado1, lado2) => {
    let dadosRetangulo = {
        largura: lado1,
        altura: lado2, 
        perimetro: (2 * (lado1 + lado2)),
        area: (lado1 * lado2)
    }
   console.log(dadosRetangulo)
}

criarRetangulo(5, 10)
*/


//3. 
/*
const filmeFavorito = () => {
    let infosFilme = {
        titulo: "LaLaLand",
        ano: 2017,
        diretor: "Damien Chazelle",
        atores: ["Ryan Gosling", "Emma Stone", "John Legend", "Rosemarie DeWitt"]
    }
    console.log(`Venha assistir ${infosFilme.titulo}, de ${infosFilme.ano}, dirigido por ${infosFilme.diretor} e estrelado por ${infosFilme.atores}.`)
}
filmeFavorito()
*/


//4.
/*
const informacoesPessoais = {
    nome: "Dory",
    idade: 20,  
    email: "dory@qualmesmomeuemail.com",
    endereco: "P Sherman 42 Wallaby Way"
}

function anonimizarPessoa () {
    let novoCadastro = {
        ...informacoesPessoais,
        nome: "Anônimo"
    }
    console.log(novoCadastro)
}

anonimizarPessoa()
*/


//------------------------------ EXERCICIOS DE FUNÇÕES DE ARRAY ---------------------------------

//1a.
/*
const pessoas =[
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]

const adultos = pessoas.filter((pessoa, index, Array) => {
    if (pessoa.idade >= 20) {
        return true
    }
        return false
    
})
console.log(adultos)
*/


//1b.
/*
const pessoas =[
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]

const criancas = pessoas.filter((pessoa, index, Array) => {
    if (pessoa.idade < 20) {
        return true
    }
        return false
    
})
console.log(criancas)
*/


//2a.
/*
const arrayNumbs = [1, 2, 3, 4, 5, 6]

const multiplicarArray = arrayNumbs.map((numero, index, array) => {
            return numero * 2
})
console.log(multiplicarArray)    
*/    


//2b.
/*
const arrayNumbs = [1, 2, 3, 4, 5, 6]

const triplicarArray = arrayNumbs.map((numero, index, array) => {
            return String(numero * 3)
})
console.log(triplicarArray)
*/


//2c.
/*
const arrayNumbs = [1, 2, 3, 4, 5, 6]

const parImparArray = arrayNumbs.map((numero) => {
        let paridadeNumero
            if(numero % 2 === 0) {
                paridadeNumero = "par"
            } else {
                paridadeNumero = "impar"
            }
            return (`${String(numero)} é ${paridadeNumero}`)
})
console.log(parImparArray)
*/


//3a.
/*
const pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]

const permissaoMontanhaRussa = pessoas.filter((pessoa, index, array) => {
    if((pessoa.idade > 14) && (pessoa.idade < 60) && (pessoa.altura > 1.5)) {
        return true
    }
    return false
})

console.log(permissaoMontanhaRussa)
*/


//3b.
/*
const pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]

const naoPermitidoMontanhaRussa = pessoas.filter((pessoa, index, array) => {
    if((pessoa.idade < 14) || (pessoa.idade > 60) || (pessoa.altura < 1.5)) {
        return true
    }
    return false
})

console.log(naoPermitidoMontanhaRussa)
*/


//4.
/*
const consultas = [
	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

const emailConsultas = consultas.map((pessoa, index, array) => {
    //para definir palavras (Sr/Sra - lembra-la/lembra-lo)

    let genero
    if(genero === "feminino") {
        genero = "Sra"
    } else {
        genero = "Sr"
    }

    let lembrarConsulta
    if(genero === "feminino") {
        lembrarConsulta = "lembra-la"
    } else {
        lembrarConsulta = "lembra-lo"
    }

    // para definir qual email enviar

    if(pessoa.cancelada === true) {
        return ( `Olá, ${genero} ${pessoa.nome}. Infelizmente, sua consulta marcada
        para o dia ${pessoa.dataDaConsulta} foi cancelada. Se quiser, pode entrar em 
        contato conosco para remarcá-la.`)
    }
    return (`Olá, ${genero} ${pessoa.nome}. Estamos enviando esta mensagem para
    ${lembrarConsulta} da sua consulta no dia ${pessoa.dataDaConsulta}.
     Por favor, acuse o recebimento deste e-mail.`)
})

console.log(emailConsultas)
*/


//5.

const contas = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]

contas.forEach((cliente, index, array) => {
    let soma = 0
    for (let compra of cliente.compras) {
        soma += compra
    }
    
    cliente.saldoTotal -= soma
    
})

console.log(contas)