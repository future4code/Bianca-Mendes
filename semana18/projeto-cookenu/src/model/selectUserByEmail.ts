import dataBase from "../config/dataBase";

export const selectUserByEmail = async (email: string): Promise<any> => {

    try {
        const result = await dataBase
            .select("*")
            .into("cookenu_users")
            .where({email})

        return result[0]   

    } catch (error) {
        throw new Error(error.sqlMessage || error.message)
    }
}