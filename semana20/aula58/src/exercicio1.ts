// a.Crie uma interface para representar o usuário

interface User {
    name: string, 
    balance: number
}


// b.Implemente a função

function performPurchase(user: User, value: number): User | undefined {
    if(user.balance >= value) {
         return {
            ...user,
        balance: user.balance - value
        }
    } else undefined
}