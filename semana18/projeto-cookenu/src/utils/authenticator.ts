import * as jwt from 'jsonwebtoken'
import { AuthenticationData } from '../types/authenticatorData'

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
export function getTokenData(token: string): AuthenticationData {
    const { id } = jwt.verify(token, process.env.JWT_KEY!) as AuthenticationData
    return { id }
}

