import * as jwt from 'jsonwebtoken'

//geração token
export function generateToken(input: AuthenticationData): string {
    const token = jwt.sign(
        {id: input.id}, 
        process.env.JWT_KEY as string,
        { expiresIn: process.env.JWT_EXPIRE_TIME as string || "1d" } 
        )

        return token 
}


//validação token
export function getTokenData(token: string): AuthenticationData{
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any
    const result = {   //dessa forma da pra puxar a informação exata que deseja do AuthenticationData
        id: payload.id
    }
    return result
}

export type AuthenticationData = {
    id: string
}