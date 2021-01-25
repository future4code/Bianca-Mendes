import dataBase from "../config/dataBase"

//criar usuário
export const insertUser = async (id: string, email: string, password: string): Promise<any> => {

    try {
        await dataBase
            .insert({
                id,
                email,
                password
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

