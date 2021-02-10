import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserDatabase } from "../data/UserDatabase";
import { UserRole } from "../model/User";
import { HashGenerator } from "../services/hashGenerator";
import { IdGenerator } from "../services/idGenerator";
import { TokenGenerator } from "../services/tokenGenerator";

const userBusiness = new UserBusiness(
   new IdGenerator(),
   new HashGenerator(),
   new TokenGenerator(),
   new UserDatabase()
)

export class UserController {

   public async signup(req: Request, res: Response) {
      try {
         const { name, role, email, password } = req.body
         const result = await userBusiness.signup(
            name,
            email,
            password,
            role
         );
         res.status(200).send(result);
      } catch (error) {
         const { statusCode, message } = error
         res.status(statusCode || 400).send({ message });
      }
   }

   public async login(req: Request, res: Response) {
      try {
         const { email, password } = req.body
         const result = await userBusiness.login(email, password);
         res.status(200).send(result);
      } catch (error) {
         const { statusCode, message } = error
         res.status(statusCode || 400).send({ message });
      }
   }

   public async getUserById(req: Request, res: Response) {
      try{
         const { id } = req.params

         const result = await userBusiness.getUserById(id)

         res.status(200).send(result)
      } catch(error) {
         const { statusCode, message } = error
         res.status(statusCode || 400).send({ message })
      }
   }

   public async getAllUsers(req: Request, res: Response) {
      try{
         const token: string = req.headers.authorization!

         const result = await userBusiness.getAllUsers(token)

         res.status(200).send(result)
      } catch(error) {
         const { statusCode, message } = error
         res.status(statusCode || 400).send({ message })
      }
   }


}


export default new UserController()