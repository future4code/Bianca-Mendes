import dataBase from "../config/dataBase"

const createTable = async (): Promise<void> => {

    try {

        await dataBase.raw(`
            CREATE TABLE Users(
            id VARCHAR(255) PRIMARY KEY NOT NULL, 
            email VARCHAR(60)  UNIQUE NOT NULL, 
            password VARCHAR(60) NOT NULL,
            role ENUM('NORMAL', 'ADMIN') DEFAULT 'NORMAL'
        );
        `)

        await dataBase.raw(`
            CREATE TABLE AddressUsers(
            id VARCHAR(255) PRIMARY KEY NOT NULL, 
            street VARCHAR(255) NOT NULL, 
            number INT NOT NULL,
            complement VARCHAR(60) NULL,
            neighborhood VARCHAR (60) NOT NULL,
            city VARCHAR (60) NOT NULL,
            state VARCHAR(2) NOT NULL,
            user_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (user_id) REFERENCES Users(id)
        );
        `)


        console.log("tables created successfully")

        dataBase.destroy()

    } catch (error) {
        throw new Error(error.sqlMessage || error.message)
    }

}
createTable()