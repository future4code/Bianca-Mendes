import { post, toPostModel } from "../business/entities/post";
import { BaseDataBase } from "./model/BaseDataBase";

export class PostDataBase extends BaseDataBase {

    async insertPost(post_labook: post) {

        try {
            await this.connection
                .insert({
                    id: post_labook.id,
                    photo: post_labook.photo,
                    description: post_labook.description,
                    type: post_labook. type,
                    author_id:post_labook.authorId,
                    created_at: post_labook.createdAt.toISOString().substring(0, 10)
                })
                .into("labook_posts")
    
        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    
    async selectPostById (id: string ): Promise<post> {

        try {
            const result: any = await this.connection
                .select("*")
                .into("labook_posts")
                .where({id})

        return toPostModel(result[0])  

        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}



