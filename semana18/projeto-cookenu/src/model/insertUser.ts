import dataBase from "../config/dataBase";
import { user } from "../types/user";

export const insertUser = async (user_cookenu: user ): Promise<any> => {

    try {
        await dataBase
            .insert(user_cookenu)
            .into("cookenu_users")

    } catch (error) {
        throw new Error(error.sqlMessage || error.message);
    }
}