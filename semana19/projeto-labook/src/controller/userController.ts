import { Request, Response } from "express";
import { businessLogin, businessSignup } from "../business/userBusiness";


export const signup = async (req: Request, res: Response) => {
    
    try {

      const { name, email, password } = req.body
 
      const token = await businessSignup(name, email, password)
        
       res.status(201).send({ message: "Success!", token })
 
    } catch (error) {
       res.statusCode = 400
       let message = error.sqlMessage || error.message
 
       res.send({ message })
    }
}
 
export const login =  async (req: Request, res: Response) => {

    try {
        
       const { email, password } = req.body
 
       const token = await businessLogin(email, password)
          
       res.status(200).send({ message: "Success!", token })
 
    } catch (error) {
       let message = error.sqlMessage || error.message
       res.statusCode = 400
 
       res.send({ message })
    }
}