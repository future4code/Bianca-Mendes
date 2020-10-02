/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
 


//INCOMPLETO E CHEIO DE ERROS


console.log("Bem-vindo ao jogo de Blackjack!")

 //PARA INICIAR UMA NOVA JOGADA
 if(confirm("Quer iniciar uma nova rodada?")) {

//PARA SORTEAR AS CARTAS

//SORTEIO CARTA1 - USUARIO
const carta = comprarCarta()
const cartaUsuario1 = carta.texto
const valorCartaUsuario1 = carta.valor

//SORTEIO CARTA2 - USUARIO
const carta2 = comprarCarta()
const cartaUsuario2 = carta2.texto
const valorCartaUsuario2 = carta2.valor

//SORTEIO CARTA 1 - COMPUTADOR
const carta3 = comprarCarta()
const cartaComputador1 = carta3.texto
const valorCartaComputador1 = carta3.valor

//SORTEIO CARTA 2 - COMPUTADOR
const carta4 = comprarCarta()
const cartaComputador2 = carta4.texto
const valorCartaComputador2 = carta4.valor


//CASO CAIA CARTA "A"
   if ((cartaUsuario1 && cartaUsuario2) || (cartaComputador1 && cartaComputador2) === "A") {
     console.log(carta, carta2, carta3, carta4) 
   }

//PARA PUXAR AS DUAS PRIMEIRAS CARTAS PARA UM ARRAY
 arrayUsuario = []
 arrayComputador = []

 arrayUsuario.push(cartaUsuario1, cartaUsuario2)
 arrayComputador.push(cartaComputador1, cartaComputador2)


 //MENSAGEM PROMPT CONFIRM
   if (confirm(`Suas cartas são ${arrayUsuario}. A carta revelada do computador é ${arrayComputador[0]} \n Deseja comprar mais uma carta?`)) {}

   
   const compraCartaNova = comprarCarta()
   const novaCompraUsuario = compraCartaNova.texto
   const valorNovaCompraUsuario = compraCartaNova.valor

   arrayUsuario.push(novaCompraUsuario)

   const somaCartas = valorCartaUsuario1 + valorCartaUsuario2 + valorNovaCompraUsuario

      while (somaCartas < 21) {
         console.log(novaCompraUsuario)
         arrayUsuario.push(novaCompraUsuario)
         i++
      }


   if (confirm(`Suas cartas são ${cartaUsuario1} ${cartaUsuario2} ${novaCompraUsuario}.Sua pontuação é ${somaCartas}. A carta revelada do computador é ${cartaComputador1} ${cartaComputador2} \n Deseja comprar mais uma carta?`)) {}
   

   


   if (somaCartasComputador > somaCartas) {
      console.log("O computador ganhou!")
}  else if (somaCartasComputador < somaCartas) {
      console.log("O usuário ganhou!")
}  else {
      console.log("Empate!")
} }

 else {
   console.log("O jogo acabou")
}

