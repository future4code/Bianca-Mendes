import { Response, Request } from "express"
import { JsonWebTokenError } from "jsonwebtoken"
import { insertUser, userByEmail, userById, deleteUser } from "../model/modelUser"
import { roles } from "../types/types"
import { AuthenticationData, generateToken, getTokenData } from "../utils/authenticator"
import { compare, generateHash } from "../utils/hashManager"
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

        const { email, password, role } = req.body

        //verificação role
        if(req.body.role !== roles.ADMIN && req.body.role !== roles.NORMAL) {
            throw new Error ("Role deve ser 'NORMAL' ou 'ADMIN'")
        }
        //geração id
        const id: string = generateId()

        //senha criptografada
        const cypherPassword: string = generateHash(req.body.password)

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
            cypherPassword,
            role
            )

        const token =  generateToken({id, role: req.body.role})//coloca o role aqui, pq no authenticator pede ele tbm

        res.status(200).send({token})

    } catch (error) {
        res.status(400).send({ message: error.message })
        console.log(error.sqlMessage || error.message)
    }
}

//puxar usuário pelo email(login)
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
        
        //pra verificar se a senha é igual ao do bd
        const passwordIsCorrect: boolean = compare(
            input.password, user.password
        )

        if(!passwordIsCorrect){
            throw new Error("Senha incorreta");
        }

        const token = generateToken({
            id: user.id,
            role: user.role
            })

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

       //não precisa do if pra verificação, se der ruim, já entra direto no catch e lá tem uma verificação
       const verifiedToken: AuthenticationData = getTokenData(token)

       const user = await userById(verifiedToken.id)

       res.status(200).send({id: user.id, email: user.email, role: user.role})

    } catch (error) {
        if(error.message.includes("jwt malformed")) {
            res.send("Token invalido")
        }
        res.status(400).send({ message: error.message })
        console.log(error.sqlMessage || error.message)
    }
}


//deletar usuário
export const deleteUserById = async (req: Request, res: Response): Promise<any> => {

    try {

       const token: string = req.headers.authorization!

       const verifiedToken: AuthenticationData = getTokenData(token)

       if(verifiedToken.role !== roles.ADMIN) {
        throw new Error("Não autorizado")  
       }

       const id = req.params.id

        await deleteUser(id)

       res.status(200).send({ message: "Usuário deletado com sucesso!" })

    } catch (error) {
        res.status(400).send({ message: error.message })
        console.log(error.sqlMessage || error.message)
    }
}

