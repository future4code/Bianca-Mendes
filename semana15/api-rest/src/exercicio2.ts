//-------------------- EXERCICIO 2 --------------------
import express, { Request, Response } from 'express'
import cors from 'cors'
import { user, users } from "./users"

const app = express()

app.use(express.json())
app.use(cors())

//endpoint para buscar usuários que tenham o mesmo type
app.get('/user', (req: Request, res: Response) => {

    let errorCode: number = 400

    try{
        const type: string = (req.query.type as string).toUpperCase() 

        if(type !== "ADMIN" && type !== "NORMAL"){
            errorCode = 422
            throw new Error("Por favor, preencha o type corretamente")
        }

        const searchType = users.filter( user => user.type.toUpperCase() === req.query.type) //ou só === type(pq ja tem a const dele na linha 17)
       
        if(!searchType){
            errorCode = 404
            throw new Error("Type não encontrado")
        }

        const result = searchType 
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

  //a)parametro passado por query
  //b)delimitando as possibilidades do usuário, definindo no user(arquivo:users.ts) e depois no if dentro do try