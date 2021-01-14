import knex from 'knex';
import Knex from 'knex';
import dotenv from 'dotenv';

dotenv.config()

const connection: Knex = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
})

//criando tabela 
export const createTableRating = async (): Promise<void> => {

    try {
        await connection.raw(`
            CREATE TABLE Rating (
            id VARCHAR(255) PRIMARY KEY,
            comment TEXT NOT NULL,
            rate FLOAT NOT NULL,
            movie_id VARCHAR(255),
            FOREIGN KEY (movie_id) REFERENCES Movie(id)
        )
        `)
    } catch(error) {
        throw new Error(error.sqlMessage || error.message)
    }
}

  

