import express from 'express'
import cors from 'cors'
import { taskRouter } from './controller/router/taskRouter'
import { userRouter } from './controller/router/userRouter'

const app = express()
app.use(express.json())
app.use(cors())

app.use('/user', userRouter)
app.use('/task', taskRouter)


app.listen(3003, () => {
   console.log('Servidor rodando na porta 3003')
})

//EXERCICIO 04
// a) Precisamos criar outra modelagem aqui?
// b) Precisamos gerar alguma outra alteração no nosso código?

//Resposta: 
// a/b Não é preciso criar outra modelagem, pois já está modelado conforme o banco de dados, as funções já recebem o type user