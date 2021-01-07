//-------------------- EXERCICIO 1 --------------------
//a)Crie uma variável minhaString do tipo string e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?

// let minhaString: string = 7
// o Typescript não aceita o número, pois a variavél foi declarada como uma string

//b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. Como podemos fazer para que essa variável também aceite strings?

//let meuNumero: number | string = 1
//para a variável também aceitar string, utiliza-se a union type, dessa forma passa a aceitar numero e string

//c/d/e) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades: nome, idade, corFavorita. Como você faria para garantir que o objeto só tenha as propriedades descritas acima? Faça a tipagem do objeto para que ele só aceite os valores acima.   Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um tipo Pessoa para garantir que todos os objetos tenham os mesmos campos.    Modifique o tipo de objeto para que possamos apenas escolher entre as cores do arco-íris. Utilize um enum para isso.

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: CorArcoIris
}

enum CorArcoIris {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    INDIGO = "Indigo",
    VIOLETA = "Violeta"
}
//para garantir que todas as propriedades sejam utilizadas e que só aceite os valores determinados, nenhuma das propriedades pode ser opcional

//d) 

const amora: pessoa = {
    nome: "Amora",
    idade: 1,
    corFavorita: CorArcoIris.LARANJA
}

const tiara: pessoa = {
    nome: "Tiara",
    idade: 2,
    corFavorita: CorArcoIris.INDIGO
}

console.log(amora.idade)