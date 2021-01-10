import express, { Request, Response, Router } from "express"
import { accounts, user } from "../accountDataBase"
import cors from "cors"
const router: Router = express.Router()
router.use(express.json())
router.use(cors())

//puxar todas as contas
router.get("/users", (req: Request, res: Response) => {
    let errorCode: number = 400
    
    try {
        if (!accounts.length) {
            errorCode = 404
            throw new Error("Nenhuma conta encontrada")
        }
        res.status(200).send(accounts)
    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})

//da pra validar tirando o let errorCode, e dentro no if colocar res.statusCode = 404, ai tira o status do catch

//criar nova conta
router.post("/create", (req: Request, res: Response) => {
    let errorCode: number = 400
   
    try {
        // ----- para criar usuário -----
        const {name, cpf, dateBirth } = req.body //desestruturando o body pra ter acesso a essas chaves. O date é recebido como string no body
        //ATENÇÃO: no postman tem que escrever dateBirth! pq é como esta acima, já o postman que devolverá dateOfBirth
    
        const [day, month, year] = dateBirth.split("/") //separar a data de nascimento nas barras 01/01/2001, tbm desestrutura já falando qual é a primeira, segunda, terceira posição no array de retorno

        const dateOfBirth: Date = new Date(`${year}-${month}-${day}`)
        //variavel com o mesmo nome da chave pra ele entender que é só puxar essa const
    
        const newUser: user = {
        name, //quando a chave é igual ao valor, pode deixar só uma vez
        cpf,
        dateOfBirth,
        balance: 0,
        bankStatement: []
        }

        // ----- para validar idade -----
        const ageInMilisseconds: number = new Date().getTime() - dateOfBirth.getTime()//timestamp do dia ou Date.now()

        const ageInYears: number = ageInMilisseconds /1000 /60 /60 /24 /365 // /1000 (passa pra segundos) /60 (passa pra minutos) /60 (passa pra hora) / 24 (passa pra dia) /365 (passa pra anos)

        // ----- para validar cpf -----
        const result: user | undefined = accounts.find(
        user => user.cpf === req.body.cpf
        )

        if(result) {
            errorCode = 401
            throw new Error("CPF já existe")
        }

        if(ageInYears < 18) {
            errorCode = 406
            throw new Error("Idade deve ser maior que 18 anos")
        }

        accounts.push(newUser)

        res.status(200).send({message:"Sucesso! Usuário adicionado", user:newUser})

    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})

//verificar saldo a partir do nome e cpf
router.get("/balance",  (req: Request, res: Response) => {

    let errorCode: number = 400

        try {
            
            const result: user | undefined = accounts.find(
                (user) => (user.cpf === req.query.cpf) && (user.name === req.query.name)
            )

            if(!result) {
                errorCode = 422
                throw new Error("Dados inválidos")
            }
            res.status(200).send({"Saldo em conta corrente": result.balance}) //o result entra no account e puxa o valor de balance

        } catch(error) {
            res.status(errorCode).send(error.message)
        }
    
    
} )


//adicionar saldo
router.put("/addbalance/:cpf", (req: Request, res: Response) => {

    let errorCode: number = 400

    try{

    const upDateUser: { name: string, cpf: string, balance: number} = {
        name: req.body.name,
        cpf: req.params.cpf,
        balance: req.body.balance
    }

    const checkName: user | undefined = accounts.find(
        (user) => user.name === upDateUser.name
    )

    //----- para validar nome -----
    if(!checkName){
        errorCode = 422
        throw new Error("Nome invalido. Preencha corretamente")
    }
    //da pra validar o nome assim, ou colocando && u.name === upDateUser.name após a validação do cpf


    // ----- para validar cpf -----
    const myUserIndex = accounts.findIndex((u: user) => (u.cpf === upDateUser.cpf)  ) //pega o indice pra fazer a alteração, e pega o indice através do cpf

    if(myUserIndex === -1){ //-1 é o erro da findIndex
        errorCode = 404
        throw new Error("Usuário não encontrado")
    }

    accounts[myUserIndex].balance = upDateUser.balance
    res.status(200).send({message: "Saldo atualizado com sucesso!", upDateUser})

} catch(error) {
    res.status(errorCode).send({message: error.message })
}


} )
export default router