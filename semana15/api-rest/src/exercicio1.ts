//-------------------- EXERCICIO 1 --------------------
import express, { Request, Response } from 'express'
import cors from 'cors'
import { users } from "./users"

const app = express()

app.use(express.json())
app.use(cors())


//endpoint para buscar todos os usuários da lista
app.get('/user', (req: Request, res: Response) => {

    const result = users.map(user => ({
        name: user.name,
        email: user.email
    }))

    if (result) {
        res.status(200).send(result)
        } else {
        res.status(404).send("Not found")
        }
})

const server = app.listen(3003, () => {
    if (server) {
       console.log("Server is running in http://localhost:3003")
    } else {
       console.error("Failure upon starting server.")
    }
  })
//a) método get
//b) a entidade manipulada é o primeiro parametro do app.get