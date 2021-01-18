import express, { Request, Response } from "express"
import { selectAllUsers, filterUserByName, filterUserByType, orderByNameOrType } from "../data/queries"
import { user } from "../type/user"



// ----- puxar todos os usuários -----
export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
    try {
       const users = await selectAllUsers()
 
       if(!users){
          res.statusCode = 404
          throw new Error("No recipes found")
       }
 
       res.status(200).send(users)
       
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }


 // ----- filtrar por nome -----
 export const getUserByName = async(req: Request,res: Response): Promise<void> =>{
   
   let errorCode: number = 400

   try {
      
      const name = req.query.name as string

      if(!name.length){
         res.statusCode = 422
         throw new Error("Por favor, informe um nome para pesquisar")
      }

       const userByName = await filterUserByName(name)

      if(!userByName.length){
         errorCode = 422;
         throw new Error("Usuário não encontrado")
     }

      res.status(200).send(userByName)
      
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}


// -----filtrar por tipo -----
 export const getUserByType = async(req: Request,res: Response): Promise<void> =>{
   
   let errorCode: number = 400

   try {
      
      const type = req.params.type as string

      // if(!type.length){
      //    res.statusCode = 422
      //    throw new Error("Por favor, informe um tipo para pesquisar")
      // }

      const userByType = await filterUserByType(type)

      if(!userByType.length){
         errorCode = 422;
         throw new Error(`Tipo ${type} não encontrado`)
     }

      res.status(200).send(userByType)
      
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}


// ----- ordenação por nome ou tipo -----
export const getUserByNameOrType = async(req: Request,res: Response): Promise<void> =>{
   
   let errorCode: number = 400

   try {
      
      const { name, typeUser } = req.query as user
      const userByNameType = await orderByNameOrType(name, typeUser)

      if(!name.length){
         res.statusCode = 422
         throw new Error("Por favor, informe um nome para pesquisar")
      }

      if(!userByNameType.length){
         errorCode = 422;
         throw new Error("Usuário não encontrado")
     }

      res.status(200).send(userByNameType)
      
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}

