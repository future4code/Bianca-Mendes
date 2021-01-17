import connection from "./connection"

//criando tabela  - criar usuário
const createTableTodoListUser = async (): Promise<void> => {

    try {
        await connection.raw(`
            CREATE TABLE TodoListUser (
                id VARCHAR(255) PRIMARY KEY, 
                name VARCHAR(255) NULL, 
                nickname VARCHAR(255) UNIQUE NOT NULL, 
                email VARCHAR(255) UNIQUE NOT NULL
            )
        `);
        console.log("Tabela ToDoListUser criada com sucesso!")
        

    } catch(error) {
        throw new Error(error.sqlMessage || error.message)
    }
};


//criando tabela  - criar tarefa
 const createTableTodoListTask = async (): Promise<void> => {

    try {
        await connection.raw(`
            CREATE TABLE TodoListTask (
                id VARCHAR(255) PRIMARY KEY, 
                title VARCHAR(255) NOT NULL, 
                description TEXT NOT NULL, 
                status VARCHAR(255) NOT NULL DEFAULT "to_do",
                limit_date DATE NOT NULL,
                creator_user_id VARCHAR(255) NOT NULL,
                FOREIGN KEY (creator_user_id) REFERENCES TodoListUser(id)
            )
        `);
        console.log("Tabela ToDoListTask criada com sucesso!")
        
        
    } catch(error) {
        throw new Error(error.sqlMessage || error.message)
    }
};

//criando tabela  - junção entre tarefa e usuário
 const createTableTodoListResponsibleUserTaskRelation = async (): Promise<void> => {

    try {
        await connection.raw(`
            CREATE TABLE TodoListResponsibleUserTaskRelation (
                task_id VARCHAR(255),
                responsible_user_id VARCHAR(255),
                FOREIGN KEY (task_id) REFERENCES TodoListTask(id),
                FOREIGN KEY (responsible_user_id) REFERENCES TodoListUser(id)
            )
        `);
        console.log("Tabela TodoListResponsibleUserTaskRelation criada com sucesso!")
        
            
    } catch(error) {
        throw new Error(error.sqlMessage || error.message)
    }
};
createTableTodoListUser()
createTableTodoListTask()
createTableTodoListResponsibleUserTaskRelation()





