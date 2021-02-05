import { insertPost, selectPostById } from "../data/postDataBase";
import { post, POST_TYPES } from "./entities/post";
import { authenticationData } from "./entities/user";
import { getTokenData } from "./sevices/authenticator";
import { generateId } from "./sevices/idGenerator";


export const businessCreatePost = async (
    photo: string,
    description: string,
    type: POST_TYPES,
    token: string
) => {

    let message = "Success!"

    if (!photo || !description || !type) {
        // res.statusCode = 406
        message = '"photo", "description" and "type" must be provided'
        throw new Error(message)
    }

    if(!token) {
        //errorCode = 401
        throw new Error("Unauthorized. Please enter a token.")  
    }

    const tokenData: authenticationData = getTokenData(token)

    const id: string = generateId()

    const author_id = tokenData.id

    const newPost: post = {
        id,
        photo,
        description,
        type,
        created_at: new Date(),
        author_id
    }

    await insertPost(newPost)

    return tokenData
}

export const businessSelectPostById = async (id: string) => {

    let message = "Success!"

    const post : post = await selectPostById(id)

    if (!post) {
              message = "Post not found"
              throw new Error(message)
    }

    return post       
}




