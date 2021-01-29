import dataBase from "../config/dataBase";

export const selectUserById = async (id: string): Promise<any> => {

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