import dayjs from "dayjs"
import { Response, Request } from "express"
import { selectRecipeById } from "../model/selectRecipeById"
import { selectUserProfile } from "../model/selectUserProfile"
import { AuthenticationData } from "../types/authenticatorData"
import { recipe } from "../types/recipe"
import { getTokenData } from "../utils/authenticator"

export const getRecipeById = async (req: Request, res: Response) => {

    try{
        const token: string = req.headers.authorization!
       
        if(!token) {
            throw new Error("Unauthorized. Please enter a token.")  
        }

        const verifiedToken: AuthenticationData = getTokenData(token)

        
        if(!verifiedToken){
            throw new Error("Unauthorized. Check the token")
        }

        const searchRecipe: recipe = await selectRecipeById(req.params.id)
        
        if (!searchRecipe) {
            throw new Error("Recipe not found")
        }
        
              
        res.status(200).send({
            id: searchRecipe.id,
            title: searchRecipe.title,
            instructions: searchRecipe.instructions,
            ingredients: searchRecipe.ingredients,
            user_id: searchRecipe.user_id,
            create_date: dayjs(searchRecipe.create_date).format("DD/MM/YYYY")
        })

    } catch(error) {
        if( 
           error.message === "invalid signature" || 
           error.message === "jwt expired") {
            res.send("Invalid token")
        }

        res.status(400).send({ message: error.message })
        console.log(error.sqlMessage || error.message)
    }
}