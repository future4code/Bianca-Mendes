import { PostDataBase } from "../data/postDataBase";
import { createPostInput, getPostById, post } from "./entities/post";
import { authenticationData } from "./entities/user";
import {  TokenManager } from "./sevices/TokenManager";
import { IdGenerator } from "./sevices/IdGenerator";

const tokenManager: TokenManager = new TokenManager()
const idGenerator: IdGenerator = new IdGenerator()

export class PostBusiness {

    async createPost (input: createPostInput) {

        try {
                if (!input.photo || !input.description || !input.type) {
                    throw new Error('"photo", "description" and "type" must be provided')
                }
            
                if(!input.token) {
                    throw new Error("Unauthorized. Please enter a token.")  
                }
            
                const tokenData: authenticationData = tokenManager.getTokenData(input.token)
            
                const id: string = idGenerator.generateId()
            
                const newPost: post = {
                    id,
                    photo: input.photo,
                    description: input.description,
                    type: input.type,
                    createdAt: new Date(),
                    authorId: tokenData.id
                }
            
                await new PostDataBase().insertPost(newPost)
            
                return tokenData

            }catch(error) {
                throw new Error (error.message)
            }
    }

    
    async selectPostById (input: getPostById) {

        try {
            const post : post = await new PostDataBase().selectPostById(input.id)

        if (!post) {
            throw new Error("Post not found")
        }

        return post

        }catch (error) {
            throw new Error(error.message)
        }
    }
}









