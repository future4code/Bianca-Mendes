import express, { Request, Response, Router } from "express"
import { accounts, user } from "../accountDataBase"
import cors from "cors"
const router: Router = express.Router()
router.use(express.json())
router.use(cors())


router.get("/users", (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        if (!accounts) {
            errorCode = 404
            throw new Error("Não encontrado =(")
        }
        res.status(200).send(accounts)
    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})


router.post("/create", (req: Request, res: Response) => {
    let errorCode: number = 400
    const newUser: user = {
        name: req.body.name,
        cpf: req.body.cpf,
        dateOfBirth: req.body.dateOfBirth,
        balance: 0,
        bankStatement: []
    }
    const result: user | undefined = accounts.find(
        user => user.cpf === req.body.cpf
    )
    try {
        if(result) {
            errorCode = 401
            throw new Error("CPF já existe")
        }
        accounts.push(newUser)
        res.status(200).send({message:"Sucesso! Usuário adicionado", user:newUser})
    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})

router.get("users/balance",  (req: Request, res: Response) => {

    let errorCode = 400

        try {
            
            const result: user | undefined = accounts.find(
                (user) => (user.name === req.query.name) && (user.cpf === req.query.cpf)
            )

            if(!result) {
                errorCode = 422
                throw new Error("ruim")
            }
            res.status(200).send({"balance":result.balance})

        } catch(error) {
            res.status(errorCode).send(error.message)
        }
    
    
} )

export default router