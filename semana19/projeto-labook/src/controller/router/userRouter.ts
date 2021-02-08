import express from "express"
import { UserController } from "../UserController"

export const userRouter = express.Router()

//pra chamar o método que esta dentro da classe
const userController = new UserController()

userRouter.post('/signup', userController.signup)
userRouter.post('/login', userController.login)
