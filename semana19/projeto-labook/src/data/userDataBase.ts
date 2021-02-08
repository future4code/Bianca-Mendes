import { toUserModel, user } from "../business/entities/user";
import { BaseDataBase } from "./model/BaseDataBase";


export class UserDataBase extends BaseDataBase {

    tableName = "labook_users"

    async insertUser (user_labook: user ) {

        try {
            await this.connection
                .insert(user_labook)
                .into(this.tableName)
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async selectUserByEmail (email: string ): Promise<user>  {

            try {
                const result: any = await this.connection
                    .select("*")
                    .into(this.tableName)
                    .where({email})
                
                return toUserModel(result[0])        
                
        
            } catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        }
}

