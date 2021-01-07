//-------------------- EXERCICIO 7 --------------------
import express, { Request, Response } from 'express'
import cors from 'cors'
import { user, users } from "./users"

const app = express()

app.use(express.json())
app.use(cors())

app.delete("/user/:id", (req:Request, res:Response)=>{
    let errorCode: number = 400
    
    //inicio de um sonho
    try {

        const userIndex: number = users.findIndex(
          (user) => user.id === Number(req.params.id)
       )

          if(userIndex === -1){ //usuário não encontrado
             errorCode = 404
             throw new Error()
          }

       users.splice(userIndex, 1)
    //deu tudo certo
       res.status(200).end("Usuário apagado com sucesso")
    } catch (error) { 
       //deu tudo errado
       console.log(error)
       res.status(errorCode).send(res.status(errorCode).send({message: error.message }))
    }
 })

 const server = app.listen(3003, () => {
    if (server) {
       console.log("Server is running in http://localhost:3003")
    } else {
       console.error("Failure upon starting server.")
    }
  })