import { Response, Request } from "express"
import { insertRecipe } from "../model/insertRecipe"
import { AuthenticationData } from "../types/authenticatorData"
import { recipe } from "../types/recipe"
import { getTokenData } from "../utils/authenticator"
import { generateId } from "../utils/idGenerator"
import dayjs from 'dayjs'

export const createRecipe = async (req: Request, res: Response): Promise<any> => {
    
    try {
        let errorCode: number = 400

        const token: string = req.headers.authorization!
       
        if(!token) {
            errorCode = 401
            throw new Error("Unauthorized. Please enter a token.")  
        }

        const verifiedToken: AuthenticationData = getTokenData(token)

        if(!verifiedToken){
            throw new Error("Unauthorized. Check the token")
        }

        const { title, ingredients, instructions, user_id } = req.body
        
        //validações
        const keys = Object.keys(req.body)

        for (const key of keys) {
            if (req.body[key] == "")
                return res.send("Please fill in all fields!")
        }

        const id: string = generateId()

        const newRecipe: recipe = {
            id,
            title,
            ingredients,
            instructions,
            user_id,
            create_date:  dayjs().format('YYYY-MM-DD')
        }
         
        await insertRecipe(newRecipe)

        const viewRecipe = {
            title,
            ingredients,
            instructions
        }

        res.status(200).send({"recipe successfully created: ": viewRecipe })
    
    } catch (error) {
        res.status(400).send({ message: error.message })
        console.log(error.sqlMessage || error.message)
    }
}
