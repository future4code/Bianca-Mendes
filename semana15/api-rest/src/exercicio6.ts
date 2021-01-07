//-------------------- EXERCICIO 6 --------------------
import express, { Request, Response } from 'express'
import cors from 'cors'
import { user, users } from "./users"

const app = express()

app.use(express.json())
app.use(cors())

app.patch("/user/:id", (req: Request, res: Response) => {

    let errorCode: number = 400

    try{

        const upDateUserAgain: {id: number, name: string} = {
            name: req.body.name,
            id: Number(req.params.id)
        }

        if(!upDateUserAgain.name){
            errorCode = 422
            throw new Error("Nome invalido. Preencha corretamente")
        }
        
        if(isNaN(Number(upDateUserAgain.id))) { //validação pra ter certeza que é numero
            errorCode = 422
            throw new Error("id invalido")
        }

        const myUserIndex = users.findIndex((u: user) => u.id === Number(upDateUserAgain.id)) //pega o indice pra fazer a alteração, e pega o indice através do id 

        if(myUserIndex === -1){ //-1 é o erro da findIndex
            errorCode = 404
            throw new Error("Usuário não encontrado")
        }

        users[myUserIndex].name = upDateUserAgain.name
        res.status(200).send({message: "Atualizado com sucesso!"})

    } catch(error) {
        res.status(errorCode).send({message: error.message })
    }
}) 

const server = app.listen(3003, () => {
    if (server) {
       console.log("Server is running in http://localhost:3003")
    } else {
       console.error("Failure upon starting server.")
    }
  })