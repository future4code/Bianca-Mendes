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

//Crie um objeto para representar seu filme favorito. Ele deve ter as seguintes propriedades: título, ano, diretor e atores/atrizes (lista com pelo menos 2 atores/atrizes). Imprima na tela a seguinte string, baseada nos valores do objeto:
//Venha assistir ao filme NOME DO FILME, de ANO, dirigido por DIRETOR e estrelado por ATOR 1, ATRIZ 2, ATOR n. A lista de atores/atrizes deve ser impressa inteira, independente do tamanho da lista.
/*
const filmeFavorito = (objeto) => {
    let infosFilme = {
        titulo: "LaLaLand",
        ano: 2017,
        diretor: "Damien Chazelle",
        atores: ["Ryan Gosling", "Emma Stone", "John Legend", "Rosemarie DeWitt"]
    }
    console.log(`Venha assistir ${infosFilme.titulo}, de ${infosFilme.ano}, dirigido por ${infosFilme.diretor} e estrelado por ${infosFilme.atores}.`)
}
filmeFavorito()
//EU PRECISO DE PARAMENTRO NESSE DAQUI???
*/

//4. 

//Crie um objeto que represente uma pessoa qualquer, com as propriedades de nome, idade, email e endereco. Crie uma função chamada anonimizarPessoa, que deverá retornar um novo objeto com as mesmas propriedades, mas com a string ANÔNIMO no lugar do nome. O objeto original deve ser mantido com o nome da pessoa.
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