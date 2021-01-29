import dataBase from "../config/dataBase"

const createTables = async (): Promise<void> => {

    try {

        await dataBase.raw(`
            CREATE TABLE cookenu_users (
            id VARCHAR(255) PRIMARY KEY NOT NULL,
            name VARCHAR(60) NOT NULL, 
            email VARCHAR(60)  UNIQUE NOT NULL, 
            password VARCHAR(60) NOT NULL,
            role ENUM('APPRENTICE','CHEF') DEFAULT 'APPRENTICE'
        )
        `)

        await dataBase.raw(`
            CREATE TABLE recipes (
            id VARCHAR(255) PRIMARY KEY NOT NULL,
            title VARCHAR(60) NOT NULL, 
            ingredients VARCHAR(255) NOT NULL, 
            instructions TEXT NOT NULL,
            creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
            user_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (user_id) REFERENCES cookenu_users(id)
        )
        `)

        console.log("tables created successfully")
        dataBase.destroy()

    } catch (error) {
        dataBase.destroy()
        throw new Error(error.sqlMessage || error.message)
        
    }
}
createTables()