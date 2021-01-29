import dataBase from "../config/dataBase";

const populateTables = async (): Promise<void> => {
    try {
        await dataBase.raw(`
        INSERT INTO cookenu_users(id, name, email, password, role)
        VALUES   
            ('1', 'Ana', 'ana@email.com', '753951', 'APPRENTICE'),
            ('2', 'Maria', 'maria@email.com', '731982', 'CHEF');
        `);
        
        
        await dataBase.raw(`
        INSERT INTO recipes(id, title, ingredients, instructions, user_id)
        VALUES   
            ('1', 'Como fazer gelo', 'agua', 'despeje a agua numa forma de gelo, leve para o congelador', '1');
        `);
        
        console.log("data inserted into the tables successfully!")
        dataBase.destroy()

    } catch (error) {
        dataBase.destroy()
        throw new Error(error.sqlMessage || error.message)
    }
}
populateTables()