import { Request, Response } from "express";
import { LoginInput, SignUpInput } from "../business/entities/user";
import { UserBusiness } from "../business/userBusiness";

const userBusiness: UserBusiness = new UserBusiness()


export class UserController {

   async signup (req: Request, res: Response) {

      try {
         
         const input: SignUpInput = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
         }

         
         const token = await userBusiness.signup(input)
           
          res.status(201).send({ message: "Success!", token })
    
       } catch (error) {
          res.statusCode = 400
          let message = error.sqlMessage || error.message
    
          res.send({ message })
       }
   }

   async login (req: Request, res: Response) {

      try {
         const input: LoginInput = {
            email: req.body.email,
            password: req.body.password
         }

         const token = await userBusiness.login(input)
            
         res.status(200).send({ message: "Success!", token })
   
      } catch (error) {
         let message = error.sqlMessage || error.message
         res.statusCode = 400
   
         res.send({ message })
      }
  }
}

