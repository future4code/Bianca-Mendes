import dataBase from "../config/dataBase";
import { recipe } from "../types/recipe";


export const insertRecipe = async (recipe_cookenu: recipe ): Promise<any> => {

    try {
        await dataBase
            .insert(recipe_cookenu)
            .into("recipes")

    } catch (error) {
        throw new Error(error.sqlMessage || error.message);
    }
}