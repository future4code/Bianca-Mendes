import { Request, Response } from "express";
import { createPostInput, getPostById, getPostByIdOutput, post } from "../business/entities/post";
import { PostBusiness } from "../business/postBusiness";




export class PostController {

    async createPost (req: Request, res: Response) {

        try {
           let message = "Success!"
            
           const token: string = req.headers.authorization as string

           const input: createPostInput = {
               photo: req.body.photo,
               description: req.body.description,
               type: req.body.type , 
               token
            }

            await new PostBusiness().createPost(input)
    
           res.status(201).send({ message })
     
        } catch (error) {
           let message = error.sqlMessage || error.message
           res.statusCode = 400
     
           res.send({ message })
        }
    }


    async getPostById (req: Request, res: Response) {
        try {

            let message = "Success!"
 
            const input: getPostById = {
                id: req.params.id
            }

            const post: post =  await new PostBusiness().selectPostById(input)
            
            const output: getPostByIdOutput = {
                photo: post.photo,
                description: post.description,
                type: post.type,
                createdAt: post.createdAt

            }
            res.status(200).send({message, output})
 
            } catch (error) {
            let message = error.sqlMessage || error.message
            res.statusCode = 400
            res.send({ message })
            }
    }
}




 
