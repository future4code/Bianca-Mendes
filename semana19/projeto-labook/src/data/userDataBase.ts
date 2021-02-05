import { user } from "../business/entities/user";
import { connection } from "./model/connection";

export const insertUser = async (user_labook: user ) => {

    try {
        await connection
            .insert(user_labook)
            .into("labook_users")

    } catch (error) {
        throw new Error(error.sqlMessage || error.message);
    }
}

export const selectUserByEmail = async (email: string ): Promise<user> => {

    try {
        const result: any = await connection
            .select("*")
            .into("labook_users")
            .where({email})

        console.log(result, "result normal")    
        console.log(result[0], "result com 0")

        return result[0]

    } catch (error) {
        throw new Error(error.sqlMessage || error.message);
    }
}
