import express, { Request, Response } from "express"
import { selectAllUsers, filterUserByName, filterUserByType, orderByNameOrType, getUsersLimit, getUsersAllFunctionalities } from "../data/queries"
import { Users } from "../type/user"



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
       const { 
       orderByColumn = "id",
       orderByAscOrDesc ="ASC"
      } = req.query

      //o orderByColumn recebe id por default ou name ou type, digitado no query
      if(!["id", "name", "type"].includes(orderByColumn as string)) {
         res.statusCode = 404
         throw new Error("Valores válidos para 'orderByColumn' são 'name' e 'type'")
     }
     
      const userByNameType = await orderByNameOrType(orderByColumn as string,
         (orderByAscOrDesc as string).toUpperCase())


      // não ta funcionando!
      // if(!userByNameType){
      //       errorCode = 422;
      //       throw new Error("Por favor, digite um valor para pesquisa")
      // }

     res.status(200).send(userByNameType)
      
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}


// ----- puxar todos os usuários com limite e paginação -----
export const getAllUsersLimitPage = async(req: Request,res: Response): Promise<void> =>{
   try {
      
      const {page = '1'} = req.query
      const pageNumber:number = Number(page)

      const resultsPerPage: number = 5 //5 resultados por página
      const offset: number = resultsPerPage * (pageNumber - 1)

      if (!pageNumber) {
         res.statusCode = 422
         throw new Error(`"page" deve ser um número positivo`)
      }

      const users = await getUsersLimit(resultsPerPage, offset)

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


// ----- todos os itens pedidos ao mesmo tempo -----
export const getUsersAllUsersandFuncionalities = async(req: Request,res: Response): Promise<void> =>{
   try {
      //filtrar por nome
      const {
         name,
         orderByColumn = "name",
         orderByAscOrDesc ="DESC",
         page = "1"
      } = req.query as unknown as Users

      //filtrar por tipo
      const type = req.params.type as string

      //limite e paginação
        const pageNumber:number = Number(page)
  
        const resultsPerPage: number = 5 //5 resultados por página
        const offset: number = resultsPerPage * (pageNumber - 1)
  
      const users = await getUsersAllFunctionalities(name, type, orderByColumn as string,
         (orderByAscOrDesc as string).toUpperCase(), resultsPerPage, offset)

      //validação ordenação
       if(!["name", "type"].includes(orderByColumn as string)) {
         res.statusCode = 422
         throw new Error("Valores válidos para 'orderByColumn' são 'name' e 'type'")
      }
       if(!["ASC", "DESC"].includes(orderByAscOrDesc as string)) {
         res.statusCode = 422
         throw new Error("Valores válidos para 'orderByAscOrDesc' são 'ASC' e 'DESC'")
      }

       //validação número página
       if (!pageNumber) {
         res.status(200).send(users("1"))
      } 

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

