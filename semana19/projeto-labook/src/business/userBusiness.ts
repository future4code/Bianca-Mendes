import { compare } from "bcryptjs"
import { insertUser, selectUserByEmail } from "../data/userDataBase"
import { user } from "./entities/user"
import { generateToken } from "./sevices/authenticator"
import { hash } from "./sevices/hashManager"
import { generateId } from "./sevices/idGenerator"


export const businessSignup = async (
    name: string,
    email: string,
    password:string
) => {
    
    let message = "Success!"
    if (!name || !email || !password) {
        // res.statusCode = 406
        message = '"name", "email" and "password" must be provided'
        throw new Error(message)
    }

    const id: string = generateId()

    const cypherPassword = await hash(password)

    const newUser: user = {
        id,
        name,
        email,
        password: cypherPassword 
    }

    await insertUser(newUser)

    const token: string = generateToken({id})

    return token 
}

export const businessLogin = async (email: string, password:string) => {

    let message = "Success!"

    if (!email || !password) {
        //res.statusCode = 406
        message = '"email" and "password" must be provided'
        throw new Error(message)
    }

    const user : user = await selectUserByEmail(email)

    if (!user) {
        //res.statusCode = 401
        message = "Invalid credentials"
        throw new Error(message)
    }

    const passwordIsCorrect: boolean = await compare(password, user.password)

    if (!passwordIsCorrect) {
        //res.statusCode = 401
        message = "Invalid credentials"
        throw new Error(message)
    }

    const token: string = generateToken({
        id: user.id
    })

    return token 
}
