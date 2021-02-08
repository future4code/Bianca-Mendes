import * as jwt from "jsonwebtoken"
import { authenticationData } from "../entities/user"


export class TokenManager {

   generateToken(payload: authenticationData): string {
      return jwt.sign(payload, process.env.JWT_KEY as string,
         {
            expiresIn: process.env.JWT_EXPIRES_IN
         }
      )
  }
   
  getTokenData(token: string): authenticationData {
      const result: any = jwt.verify(
         token,
         process.env.JWT_KEY as string
      )
   
      return { id: result.id }
  }
}
