export enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
}
 
export type post = {
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    createdAt: Date,
    authorId: string 
}

export interface createPostInput {
    photo: string, 
    description: string,
    type: POST_TYPES,
    token: string
}


export interface getPostById {
    id: string
}

export interface getPostByIdOutput {
    photo: string,
    description: string,
    type: POST_TYPES,
    createdAt: Date
}

export function toPostModel (obj: any) : post {
    return obj && {
        id: obj.id,
        photo: obj.photo,
        description: obj.description,
        type: obj.type,
        createdAt: obj.created_at,
        authorId: obj.author_id 
    }
}


