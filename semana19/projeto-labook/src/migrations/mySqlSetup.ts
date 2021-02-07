import { BaseDataBase } from "../data/model/BaseDataBase"

export class MySqlSetup extends BaseDataBase {

  static createTables = async () => {

    try {
       await BaseDataBase.connection.raw(`
          CREATE TABLE labook_users(
             id VARCHAR(255) PRIMARY KEY,
             name VARCHAR(255) NOT NULL,
             email VARCHAR(255) UNIQUE NOT NULL,
             password VARCHAR(255) NOT NULL
          )
       `)
 
       await BaseDataBase.connection.raw(`
          CREATE TABLE labook_posts(
             id VARCHAR(255) PRIMARY KEY,
             photo VARCHAR(255) NOT NULL,
             description VARCHAR(255) NOT NULL,
             type ENUM("normal","event") DEFAULT "normal",
             created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
             author_id VARCHAR(255),
             FOREIGN KEY (author_id) REFERENCES labook_users (id)
          )
       `)
 
       console.log("MySql setup completed!")
    } catch (error) {
       console.log(error)
    } finally {
        BaseDataBase.connection.destroy()
    }
 }
}

MySqlSetup.createTables()