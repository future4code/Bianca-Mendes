import { Response, Request } from "express"
import { insertUser, userByEmail, userById } from "../model/modelUser"
import { AuthenticationData, generateToken, getTokenData } from "../utils/authenticator"
import { generateId } from "../utils/idGenerator"

//criar usuário
export const createUser = async (req: Request, res: Response): Promise<any> => {

    try {

        //validação: nenhum campo vazio
        const keys = Object.keys(req.body)

        for (const key of keys) {
            if (req.body[key] == "")
                return res.send("Por gentileza preencha todos os campos!")
        }

        const { email, password } = req.body

        const id: string = generateId()

        //validação: email
        if(!email.includes("@")) {
            throw new Error("Por gentileza, insira um email válido")
        }

        //validação: senha 
        if(password.length < 5) {
            throw new Error("Insira uma senha com no mínimo 06 caracteres")
        }

        await insertUser(
            id,
            email,
            password
            )

        const token =  generateToken({id})

        res.status(200).send({token: "token gerado pelo jwt"})

    } catch (error) {
        res.status(400).send({ message: error.message })
        console.log(error.sqlMessage || error.message)
    }
}

//puxar usuário pelo email
export const getUserByEmail = async (req: Request, res: Response): Promise<any> => {
    let errorCode = 400
    try {
        
        const input: loginInput = {
            email: req.body.email,
            password: req.body.password
        }

        //validação: nenhum campo vazio
        const keys = Object.keys(req.body)

        for (const key of keys) {
            if (req.body[key] == "")
                return res.send("Por gentileza preencha todos os campos!")
        }

        //validação: email
        if(!(input.email).includes("@")) {
            errorCode = 406
            throw new Error("Por gentileza, insira um email válido")
        }

        const user = await userByEmail(input.email)

        if(!user) {
            errorCode = 404
            throw new Error("Usuário não encontrado")
        }
        
        if(user.password !== input.password) {
            errorCode = 401
            throw new Error("Senha incorreta")
        }

        const token = generateToken(user.id)

        res.status(200).send({token})

    } catch (error) {
        res.status(400).send({ message: error.message })
        console.log(error.sqlMessage || error.message)
    }
}


export type loginInput = {
    email: string,
    password: string
}

//puxar usuário pelo id
export const getUserById = async (req: Request, res: Response): Promise<any> => {

    try {

       const token: string = req.headers.authorization!

       const verifiedToken: AuthenticationData = getTokenData(token)

       if(!verifiedToken) {
        throw new Error("Não autorizado")  
       }

       const user = await userById(verifiedToken.id)

       res.status(200).send({id: user.id, email: user.email})

    } catch (error) {
        res.status(400).send({ message: error.message })
        console.log(error.sqlMessage || error.message)
    }
}

