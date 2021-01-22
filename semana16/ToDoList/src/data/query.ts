import connection from "../connection"

// ----- criar usuário -----
export const insertUser = async (name: string, nickname: string, email:string): Promise<any> => {

  try {
    await connection
    .insert({
        id: Date.now(),
        name,
        nickname,
        email
    }).into("TodoListUser")
    
      
 } catch (error) {
    console.log(error.sqlMessage || error.message);
 }
}


// ----- pegar usuário pelo id -----
export const getUserById = async (id: string): Promise<any> => {

   try {
      const user = await connection
     .select("id","nickname")
     .from ("TodoListUser")
     .where("id", id)
     
     return user[0] //funciona sem o [0] 
       
  } catch (error) {
     console.log(error.sqlMessage || error.message);
  }
}


// ----- atualizar usuário pelo id -----
export const updateUserById = async (id: string, name: string, nickname: string): Promise<any> => {

   try {
      await connection
     .update({name,nickname}) //colocar entre chaves, caso contrário não atualiza. Fora das chaves funciona como parametro e não como propriedade que precisa ser atualizada
     .from ("TodoListUser")
     .where("id", id)
     
           
  } catch (error) {
     console.log(error.sqlMessage || error.message);
  }
}


// ----- criar tarefa -----
export const insertTask = async (
   title: string,
   description: string,
   limitDate:Date, 
   creatorUserId: string
   ): Promise<any> => {

   try {
     await connection
     .insert({
         id: Date.now(),
         title,
         description,
         limit_date: limitDate, //igual ta na tabela : passado como parametro
         creator_user_id: creatorUserId
     }).into("TodoListTask")
     
       
  } catch (error) {
     console.log(error.sqlMessage || error.message);
  }
 }


 // ----- pegar tarefa pelo id -----
export const getTaskById = async (id: string): Promise<any> => {

   try {
      const task = await connection
     .select("*")
     .from ("TodoListTask")
     .where("id", id)
     
     return task
       
  } catch (error) {
     console.log(error.sqlMessage || error.message);
  }
}

