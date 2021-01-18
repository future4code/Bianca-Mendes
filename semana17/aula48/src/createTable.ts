import connection from "./connection"

//criando tabela  
const createTable = async (): Promise<void> => {

    try {
        await connection.raw(`
            CREATE TABLE aula48_exercicio(
                id INT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                type VARCHAR(255) NOT NULL
            )
        `);

        console.log("Tabela aula48_exercicio criada com sucesso!")

        connection.destroy()

    } catch(error) {
        throw new Error(error.sqlMessage || error.message)
    }
}

createTable()

