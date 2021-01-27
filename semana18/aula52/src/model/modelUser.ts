import dataBase from "../config/dataBase"
import { roles } from "../types/types";

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
export const insertAdress = async (id: string, street: string, number: number, complement: string, neighborhood: string, city: string, state: string, user_id: string): Promise<any> => {

    try {
        await dataBase
            .insert({
                id,
                street,
                number, 
                complement,
                neighborhood,
                city,
                state,
                user_id
            })
            .into("AddressUsers");

    } catch (error) {
        throw new Error(error.sqlMessage || error.message);
    }
}
