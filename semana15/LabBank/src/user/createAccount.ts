import express, { Request, Response } from "express"
import cors from "cors"
import { accounts, user } from "../accountDataBase"


const app = express()

app.use(express.json())
app.use(cors())

app.post("/create",(req: Request, res: Response) => {

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
    
    try{
        if(result) {
            errorCode = 401
            throw new Error("Cpf already exists. Please check again")
        }

        accounts.push(newUser)
        res.status(200).send({message:"Sucess! User added", user: newUser})

     } catch (error) {  
        res.status(errorCode).send(error.message)
     }
} )

export default app
