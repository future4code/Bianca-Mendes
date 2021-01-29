import express from 'express'

const router = express.Router()


//Controller
 import { createUser } from '../controller/createUser'
 import { getUserById } from '../controller/getUserById'
 import { getUserProfile } from '../controller/getUserProfile'
 import { login } from '../controller/login'

//Rotas
 router.post("/signup", createUser)
 router.post("/login", login)
 router.get("/user/profile", getUserById)
 router.get("/user/:id", getUserProfile)


export default router