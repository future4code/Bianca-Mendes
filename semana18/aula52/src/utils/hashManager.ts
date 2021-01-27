import * as bcrypt from "bcryptjs"
import dotenv from "dotenv"
dotenv.config()

//gerar hash
export function generateHash(plainText: string): string {
    const cost: number = Number(process.env.BCRYPT_COST) 
    const salt: string =  bcrypt.genSaltSync(cost) 
    const cypherText: string =  bcrypt.hashSync(plainText, salt) 

    return cypherText
}

//confere se a tentativa do usuario é a mesma salva no banco
export function compare(
    plaintext: string, 
    cypherText: string 
): boolean {
    return bcrypt.compareSync(plaintext, cypherText)
}