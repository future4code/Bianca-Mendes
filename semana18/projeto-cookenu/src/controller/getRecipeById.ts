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

        //esse daqui é pra se der ruim e por algum motivo ele não verificar???como isso aconteceria!!!!
        if(!verifiedToken){
            throw new Error("Unauthorized. Check the token")
        }

        const recipe: recipe = await selectRecipeById(req.params.id)

                
        if (!recipe) {
            throw new Error("Recipe not found")
        }
        
        res.status(200).send({
            id: recipe.id,
            title: recipe.title,
            instructions: recipe.instructions,
            ingredients: recipe.ingredients,
            create_date: new Date(recipe.create_date).toLocaleDateString()
         })
        // res.status(200).send(recipe)

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