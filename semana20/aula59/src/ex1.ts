//*a. Crie uma interface para representar os personagens*
//*b. Crie uma função `validateCharacter` que valide as informações de um personagem (devolvendo `true` se for válida ou `false` caso contrário). Nenhuma das propriedades pode ser vazia. Em relação a vida, defesa e força, elas só podem possuir valores maiores que 0.*


export interface Character {
    name:string, 
    life: number,
    defense: number,
    strength: number

}


export function validateCharacter(character: Character): boolean {

    if( !character.name || !character.life || !character.defense || !character.strength ) {
        return false
    }

    if(character.life <= 0 || character.strength <= 0 || character.defense <= 0) {
        return false
    }

    return true
}