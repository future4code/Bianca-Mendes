import { user } from "../business/entities/user";
import dataBase from "../data/dataBase"


export const insertUser = async (User: user): Promise<void> => {

    try {
        
        await dataBase
            .insert(User)
            .into("User_Arq");

    } catch (error) {
        throw new Error(error.sqlMessage || error.message)
    }
}

export const selectUserByEmail = async (email: string): Promise<any> => {

    try {
        const result = await dataBase
            .select("*")
            .into("User_Arq")
            .where({email})
        
        if(!result[0]){
			throw new Error("Usuário não encontrado");
		}
        return result[0]

    } catch (error) {
        throw new Error(error.sqlMessage || error.message)
    }
}

export const selectAllUsers = async (): Promise<any> => {

    try {
        const result = await dataBase
            .select("*")
            .into("User_Arq")
            
        
        return result

    } catch (error) {
        throw new Error(error.sqlMessage || error.message)
    }
}

export const selectDeleteUserById = async (id: string): Promise<any> => {
    
    try {
        
        await dataBase
            .delete()
            .from("User_Arq")
            .where({id})

    } catch (error) {
        throw new Error(error.sqlMessage || error.message)
    }
}

export const selectUserBy = async (name: string, value: string): Promise<any> => {

    try {
        const result = await dataBase
            .select("*")
            .into("User_Arq")
            .where(name , "=", `${value}`)
        
        if(!result[0]){
			throw new Error("Usuário não encontrado");
		}
        return result[0]

    } catch (error) {
        throw new Error(error.sqlMessage || error.message)
    }
}