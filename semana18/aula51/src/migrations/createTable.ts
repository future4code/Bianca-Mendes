import dataBase from "../config/dataBase"

const createTable = async (): Promise<void> => {

    try {

        await dataBase.raw(`
            CREATE TABLE Users(
            id VARCHAR(255) PRIMARY KEY NOT NULL, 
            email VARCHAR(60)  UNIQUE NOT NULL, 
            password VARCHAR(60) NOT NULL,
            role ENUM('NORMAL', 'ADMIN') DEFAULT 'NORMAL'
        )
        `)

        console.log("tables created successfully")

        dataBase.destroy()

    } catch (error) {
        throw new Error(error.sqlMessage || error.message)
    }

}
createTable()