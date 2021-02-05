import { post } from "../business/entities/post";
import { connection } from "./model/connection";


export const insertPost = async (post_labook: post ) => {

    try {
        await connection
            .insert(post_labook)
            .into("labook_posts")

    } catch (error) {
        throw new Error(error.sqlMessage || error.message);
    }
}

export const selectPostById = async (id: string ): Promise<post> => {

    try {
        const result: any = await connection
            .select("*")
            .into("labook_posts")
            .where({id})

        return result  

    } catch (error) {
        throw new Error(error.sqlMessage || error.message);
    }
}