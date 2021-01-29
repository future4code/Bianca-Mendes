import { Response, Request } from "express"
import { loginInput, user } from "../types/user"
import {selectUserByEmail } from "../model/selectUserByEmail"
import { compareHash } from "../utils/hashManager"
import { generateToken } from "../utils/authenticator"


export const login = async (req: Request, res: Response): Promise<any> => {

    try{
        let errorCode: number = 400

        const input: loginInput = {
            email: req.body.email,
            password: req.body.password
        }


        //validações
        const keys = Object.keys(req.body)

        for (const key of keys) {
            if (req.body[key] == "")
                return res.send("Please fill in all fields!")
        }

        if(!(input.email).includes("@")) {
            errorCode = 406
            throw new Error("Please insert a valid email")
        }

        const userCookenu: user = await selectUserByEmail(input.email)
        console.log(userCookenu)        
        if(!userCookenu) {
            errorCode = 404
            throw new Error("User not found")
        }
        
        const passwordIsCorrect: boolean = compareHash(
            input.password, userCookenu.password
        )

        if(!passwordIsCorrect){
            throw new Error("Incorrect password");
        }

        const token: string = generateToken({id: userCookenu.id})

        res.status(200).send({"user successfully logged! Access Token: ": token})

    } catch(error){
        res.status(400).send({ message: error.message })
        console.log(error.sqlMessage || error.message)
    }
}