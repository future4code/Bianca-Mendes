import { insertUser, selectAllUsers, selectDeleteUserById, selectUserBy, selectUserByEmail } from "../data/userDataBase";
import { authenticationData, user, USER_ROLES } from "./entities/user";
import { generateToken, getTokenData } from "./services/authenticator";
import { comparePassword, generateHash } from "./services/hashManager";
import { generateId } from "./services/idGenerator";

export const businessSignup = async (
    name: string, 
    email: string,
    password: string,
    role: USER_ROLES
) => {
        let errorCode = 400

    if (
        !name ||
        !email ||
        !password
     ) {
        throw new Error('Preencha os campos obrigatórios: "name", "email" e "password". Campo opcional: "role". ')
    }

    if(!email.includes("@")) {
        errorCode = 405
        throw new Error("Please insert a valid email")
    }

    if(password.length < 6) {
        errorCode = 411
        throw new Error("Enter a password with at least 06 characters")
    }

    const id: string = generateId()
    
    const cypherPassword = await generateHash(password)

    const newUser: user = {
        id,
        name,
        email,
        password: cypherPassword, 
        role: role || 'NORMAL'
    }
    await insertUser(newUser)

    const token: string = generateToken({id, role})

    return token 

}


export const businessLogin = async (email: string, password: string) => {

        let errorCode = 400

    if (!email || !password) {
        throw new Error('Preencha os campos obrigatórios: "name", "email" e "password". Campo opcional: "role". ')
    }

    if(!email.includes("@")) {
        errorCode = 405
        throw new Error("Por favor, insira um email válido")
    }

    const user: user = await selectUserByEmail(email)

    //essa verificação esta no userDataBase
    // if (!user) {
    //    throw new Error("Usuário não encontrado ou senha incorreta")
    // }
 
    const passwordIsCorrect: boolean = await comparePassword(password, user.password)
 
    if (!passwordIsCorrect) {
       throw new Error("Usuário não encontrado ou senha incorreta")
    }
 
    const acessToken: string = generateToken({
        id: user.id, 
        role: user.role
    })

    return acessToken 
}


export const businessAllUsers = async (token: string) => {

    if(!token) {
        throw new Error("Unauthorized. Please enter a token.")  
    }

    const verifiedToken: authenticationData = getTokenData(token)

    if(!verifiedToken){
        throw new Error("Unauthorized. Verification error")
    }

    const allUsers: user = await selectAllUsers()

        if (!allUsers) {
            throw new Error("Nada encontrado")

         }
    
    return allUsers
}


export const businessDeleteUser = async (id: string, token: string) => {

    if(!token) {
        throw new Error("Não autorizado. Por favor, digite um token valido")  
    }

    const verifiedToken: authenticationData = getTokenData(token)

    if(verifiedToken.role !== USER_ROLES.ADMIN){
        throw new Error("Não autorizado. Apenas administradores podem deletar usuários")
    }

    return await selectDeleteUserById(id)
}