import { Request, Response } from "express";
import { businessCreatePost, businessSelectPostById } from "../business/postBusiness";

export const createPost = async (req: Request, res: Response) => {
    try {
       let message = "Success!"
 
       const { photo, description, type } = req.body
 
       const token: string = req.headers.authorization as string
 
       await businessCreatePost(photo, description, type, token)

       res.status(201).send({ message })
 
    } catch (error) {
       let message = error.sqlMessage || error.message
       res.statusCode = 400
 
       res.send({ message })
    }
}
 
export const getPostById =  async (req: Request, res: Response) => {
    try {

       let message = "Success!"
 
       const { id } = req.params

       await businessSelectPostById(id)
        
        const result = {
            
        }

       
       res.status(200).send({ businessSelectPostById })
 
    } catch (error) {
       let message = error.sqlMessage || error.message
       res.statusCode = 400
       res.send({ message })
    }
}