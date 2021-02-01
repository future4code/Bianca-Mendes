import * as jwt from 'jsonwebtoken'
import { roles } from '../types/types'

//geração token
export function generateToken(input: AuthenticationData): string {
    const token = jwt.sign(
        input, 
        process.env.JWT_KEY as string,
        { expiresIn: process.env.JWT_EXPIRE_TIME as string || "1d" } 
        )

        return token 
}

//validação token
export function getTokenData(token: string): AuthenticationData{
    const {id, role} = jwt.verify(token, process.env.JWT_KEY!) as AuthenticationData
    //outra forma de fazer
    //const payload = jwt.verify(token, process.env.JWT_KEY!) as AuthenticationData
    // const result = {   
    //     id: payload.id,
    //     role: payload.role 
    // }
    return {id, role}
}

export type AuthenticationData = {
    id: string
    role: roles //enum
}