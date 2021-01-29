import dataBase from "../config/dataBase";
import { profileUser } from "../types/user";

export const selectUserProfile = async (id: string): Promise<profileUser> => {

    try {
        const result = await dataBase
            .select("id", "name", "email")
            .into("cookenu_users")
            .where({id})

        return result[0]   

    } catch (error) {
        throw new Error(error.sqlMessage || error.message);
    }
}