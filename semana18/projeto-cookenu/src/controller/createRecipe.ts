import { Response, Request } from "express"

export const createRecipe = async (req: Request, res: Response): Promise<any> => {
    
    try {

          

    } catch (error) {
      
    
        res.status(400).send({ message: error.message })
        console.log(error.sqlMessage || error.message)
    }
}
