import dataBase from "./data/dataBase"

const createTable = async (): Promise<void> => {

    try {

        await dataBase.raw(`
        CREATE TABLE User_Arq(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            role ENUM("NORMAL", "ADMIN") DEFAULT "NORMAL"
            )
        `)

        console.log("tables created successfully")

        dataBase.destroy()

    } catch (error) {
        throw new Error(error.sqlMessage || error.message)
    }

}
createTable()