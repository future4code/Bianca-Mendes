//-------------------- EXERCICIO 3 --------------------
import express, { Request, Response } from 'express'
import cors from 'cors'
import { user, users } from "./users"

const app = express()

app.use(express.json())
app.use(cors())

app.get("/user/search", (req: Request, res: Response) => {

    let errorCode: number = 400

    try{
        let findUser: user[] = users
        const name: string = (req.query.name as string).toLowerCase() 

        if(!name){
            errorCode = 422
            throw new Error("Nome inválido, preencha corretamente")
        }

        findUser = findUser.filter( user => user.name.toLowerCase().includes(name))

        if(!findUser){
            errorCode = 404
            throw new Error("Usuário não encontrado")
        }

        const result = findUser 
        res.status(200).send(result)
    } catch(error){
        res.status(errorCode).send(error.message) 
    }
})

const server = app.listen(3003, () => {
    if (server) {
       console.log("Server is running in http://localhost:3003")
    } else {
       console.error("Failure upon starting server.")
    }
  })
  //a) tipo get
  //b) if(!findUser)