//-------------------- EXERCICIO 3 --------------------
import express, { Request, Response } from 'express'
import cors from 'cors'
import { user, users } from "./users"

const app = express()

app.use(express.json())
app.use(cors())


app.post("/user/create", (req: Request, res: Response) => {

    const newUser: user = {
        id: Date.now(),
        name: req.body.name,
        email: req.body.email,
        type: req.body.type,
        age: req.body.age
    }

    let errorCode: number = 400

    try { 

        users.push(newUser)
        //deu tudo certo
        res.status(200).send({message:"Sucess!", user: newUser})

     } catch (error) {  //trata a exceção, mostra um novo erro
        //deu tudo errado
        console.log(error)
        res.status(errorCode).end()
     }
})

const server = app.listen(3003, () => {
    if (server) {
       console.log("Server is running in http://localhost:3003")
    } else {
       console.error("Failure upon starting server.")
    }
  })