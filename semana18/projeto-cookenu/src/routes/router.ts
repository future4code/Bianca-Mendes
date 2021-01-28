import express from 'express'

const router = express.Router()


//Controller
 import { createUser } from '../controller/createUser'

//Rotas
 router.post("/signup", createUser)


export default router