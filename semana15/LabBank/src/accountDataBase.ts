//para adicionar usuário
export type user = {
    name: string,
    cpf: string,
    dateOfBirth: number,
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
      dateOfBirth: 655527600000 ,
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
        dateOfBirth: 536983200000,
        balance: 4000,
        bankStatement: [
            {
              value: 800,
              date: 1610124445801
            }
        ]
      }
]
    
