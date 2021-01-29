import { Response, Request } from "express"
import { insertUser } from "../model/insertUser"
import { user, user_roles } from "../types/user"
import { generateToken } from "../utils/authenticator"
import { generateHash } from "../utils/hashManager"
import { generateId } from "../utils/idGenerator"

export const createUser = async (req: Request, res: Response): Promise<any> => {
    
    try {

        let errorCode: number = 400

        const { name, email, password, role } = req.body
        
        //validações
        if (!name || !email || !password) {
            errorCode = 406;
            throw new Error('The necessary fields for registration are: name, email, password and role');
        };

        if(!email.includes("@")) {
            errorCode = 405
            throw new Error("Please insert a valid email")
        }

        if(password.length < 6) {
            errorCode = 411
            throw new Error("Enter a password with at least 06 characters")
        }
        
        const id: string = generateId()

        const cypherPassword: string = generateHash(password)

        const newUser: user = {
            id,
            name,
            email,
            password: cypherPassword, 
            role: role || 'APPRENTICE'
        }
        await insertUser(newUser)

        const token: string = generateToken({id, role})

        res.status(200).send({"user created successfully! Access Token: ": token})

    } catch (error) {
      
        if(error.message.includes("Data truncated for column 'role' at row 1")) {
            res.send("Role must be 'APPRENTICE' or 'CHEF'")
        }

        res.status(400).send({ message: error.message })
        console.log(error.sqlMessage || error.message)
    }
}

