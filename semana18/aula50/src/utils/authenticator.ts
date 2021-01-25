import * as jwt from 'jsonwebtoken'


export function generateToken(input: AuthenticationData): string {
    const token = jwt.sign(
        {id: input.id}, 
        process.env.JWT_KEY as string,
        { expiresIn: process.env.JWT_EXPIRE_TIME as string || "id" } 
        )

        return token 
}

export type AuthenticationData = {
    id: string
}