//para adicionar usuário
export type user = {
    name: string,
    cpf: string,
    dateOfBirth?: Date,
    balance: number,
    bankStatement: transactions[]
}

//pra adicionar informações do extrato
export type transactions = {
    value: number,
    date: number,
    description?: string 
}

//array contas
export let accounts: user[] = [
    {
      name: "Amora",
      cpf: "12345678911",
      // dateOfBirth: 1998-12-21,
      balance: 1000,
      bankStatement: [
          {
            value: 200,
            date: 1610124445801
          }
      ]
    },
    {
        name: "Clara",
        cpf: "12345678958",
        // dateOfBirth: 28/11/1998,
        balance: 4000,
        bankStatement: [
            {
              value: 800,
              date: 1610124445801
            }
        ]
      }
]
    
