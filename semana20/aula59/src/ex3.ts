// *a. Implemente a função de tal forma que ela utilize a função de validação diretamente na implementação*


import { Character, validateCharacter } from "./ex1";


// export function performAttack(attacker: Character, defender: Character ) {

//     if(!validateCharacter(attacker) || !validateCharacter(defender)) {
//         return "Invalid Character"
//     }

//     if(attacker.strength > defender.defense) {
//         defender.life =   attacker.strength - defender.defense 
//     }
// }


// *b. Implemente a função utilizando inversão de dependências*
export const performAttack = (attacker: Character, defender: Character, 
    validator: (input: Character) => boolean ) => {

    if(!validator(attacker) || !validator(defender)) {
        return "Invalid Character"
    }

    if(attacker.strength > defender.defense) {
        defender.life =   attacker.strength - defender.defense 
    }
}


// *c. Explique, com as suas palavras, as diferenças entre as duas implementações*
 // A implementação de função utilizando inversão de dependências tem como objetivo passar a função externa como parametro, dessa forma não é necessário depender desta função externa para conseguir realizar os testes. Já na função sem inversão é necessário primeiro validar a função externa, para a partir dos resultados desta, validar a função principal, transformando o teste unitário em teste de integração.

