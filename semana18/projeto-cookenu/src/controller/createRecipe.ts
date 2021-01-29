import { Response, Request } from "express"
import { insertRecipe } from "../model/insertRecipe"
import { AuthenticationData } from "../types/authenticatorData"
import { recipe } from "../types/recipe"
import { getTokenData } from "../utils/authenticator"
import { generateId } from "../utils/idGenerator"

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

         //const date = new Date(create_date).toLocaleDateString()

      const date = new Date();
      const day = date.getDate();           
      const month = date.getMonth() + 1;    
      const year = date.getFullYear();
      const create_date: string = year + '/' + month + '/' + day
        
        const newRecipe: recipe = {
            id,
            title,
            ingredients,
            instructions,
            user_id,
            create_date
        }
         console.log(create_date)
        // const [day, month, year] = create_date.split("/")

        // const formatDate: Date = new Date(`${year}-${month}-${day}`)

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
