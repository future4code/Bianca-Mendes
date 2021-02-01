import dataBase from "../config/dataBase"
import { completeAddress, roles } from "../types/types";

//criar usuário
export const insertUser = async (id: string, email: string, password: string, role: roles): Promise<any> => {

    try {
        await dataBase
            .insert({
                id,
                email,
                password, 
                role
            })
            .into("Users");

    } catch (error) {
        throw new Error(error.sqlMessage || error.message);
    }
}


//pegar usuário pelo email
export const userByEmail = async (email: string): Promise<any> => {

    try {
        const result = await dataBase
            .select("*")
            .from("Users")
            .where({ email });
            
            return result[0]

    } catch (error) {
        throw new Error(error.sqlMessage || error.message);
    }
}


//pegar usuário pelo id
export const userById = async (id: string): Promise<any> => {

    try {
        const result = await dataBase
            .select("*")
            .from("Users")
            .where({ id })
            
            return result[0]

    } catch (error) {
        throw new Error(error.sqlMessage || error.message);
    }
}


//deletar usuário
export const deleteUser = async (id: string): Promise<any> => {

    try {
        await dataBase
            .delete("*")
            .from("Users")
            .where({ id });
            
    } catch (error) {
        throw new Error(error.sqlMessage || error.message);
    }
}


//cadastrar endereço
export const insertAdress = async (newUserAdress: completeAddress): Promise<any> => {

    try {
        await dataBase
            .insert(newUserAdress)
            .into("AddressUsers");

    } catch (error) {
        throw new Error(error.sqlMessage || error.message);
    }
}
