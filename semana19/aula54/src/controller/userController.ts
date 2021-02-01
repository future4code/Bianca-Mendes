import { Request, Response } from "express"
import { allUsers } from "../business/entities/user"
import { businessAllUsers, businessLogin, businessSignup } from "../business/userBusiness"
import dataBase from "../data/dataBase"

export const signup = async (req: Request, res: Response) => {

    try{
        const {name, email, password, role} = req.body 

        const token = await businessSignup(
            name,
            email,
            password,
            role
        )
        
        res
        .status(201)
        .send({
           message: "Usuário criado!",
           token 
        })

    }catch(error) {
        if(error.message.includes("Data truncated for column 'role' at row 1")) {
            res.send("Role deve ser 'NORMAL' ou 'ADMIN'")
        }

        res.status(400).send({ message: error.message })
        console.log(error.sqlMessage || error.message)
    }

}


export const login = async (req: Request, res: Response) => {

    try{
        const {email, password} = req.body 

        const acessToken = await businessLogin(
            email,
            password
        )
        
        res
        .status(201)
        .send({
           message: "Logado com sucesso!",
           acessToken 
        })

    }catch(error) {
        res.status(400).send({ message: error.message })
        console.log(error.sqlMessage || error.message)
    }

}


export const getAllUsers = async (req: Request, res: Response) => {

    try{
        const token: string = req.headers.authorization!

        let getUsers = await businessAllUsers(token)

        res.status(200).send(getUsers)
    }
    catch(error) {
        res.status(400).send({ message: error.message })
        console.log(error.sqlMessage || error.message)
    }
    
}