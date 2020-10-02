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

const somaCartas = valorCartaUsuario1 + valorCartaUsuario2

//SORTEIO CARTA 1 - COMPUTADOR
const carta3 = comprarCarta()
const cartaComputador1 = carta3.texto
const valorCartaComputador1 = carta3.valor

//SORTEIO CARTA 2 - COMPUTADOR
const carta4 = comprarCarta()
const cartaComputador2 = carta4.texto
const valorCartaComputador2 = carta4.valor

const somaCartasComputador = valorCartaComputador1 + valorCartaComputador2


console.log(`Usuário - cartas ${cartaUsuario1} ${cartaUsuario2} - pontuação ${somaCartas}`)
console.log(`Computador - cartas ${cartaComputador1} ${cartaComputador2} - pontuação ${somaCartasComputador}`)

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
