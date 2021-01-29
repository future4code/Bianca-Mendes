import dataBase from "../config/dataBase";

export const selectRecipeById = async (id: string): Promise<any> => {

    try {
        const result = await dataBase
            .select("*")
            .into("recipes")
            .where({id})

        return result[0]   

    } catch (error) {
        throw new Error(error.sqlMessage || error.message);
    }
}