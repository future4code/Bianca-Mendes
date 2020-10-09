//------------------------- EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO--------------------------------

//o que faz, como faz, o que será impresso

//1. A função converte um valor de dolar para real. A constante cotação, recebe através do usuário a cotação do dia, e a função recebe como parametro o valor a ser convertido. O return dentro da função fará a conta necessária pra conversão, e assim que o console.log for chamado, o que será impresso é o valor do return. Resultado: console.log(meuDinheiro) -> R$500 (usando 5.00 de cotação).

//2. A função retorna um valor conforme o tipo de investimento, para isso utiliza a condicional switch(dentro da função), que como paramentro recebe o tipo de investimento e em cada case recebe cada tipo de investimento disponível. Dentro de cada case tbm está a formula responsável pela conta do novo valor (após o investimento) dentro de uma let(definina dentro do escopo da função). A função retorna o valor da let do case escolhido. Após a função têm duas constantes, cada uma puxando a função com valores de parametros diferentes. Resultado: console1: 165, console2: undefined pois não tem "Tesouro Direto" nos cases disponíveis.