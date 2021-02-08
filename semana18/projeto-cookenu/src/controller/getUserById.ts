import { Response, Request } from "express"
import { selectUserById } from "../model/selectUserById"
import { AuthenticationData } from "../types/authenticatorData"
import { user } from "../types/user"
import { getTokenData } from "../utils/authenticator"

export const getUserById = async (req: Request, res: Response) => {

    try{
        let errorCode = 400 

        const token: string = req.headers.authorization!

        if(!token) {
            errorCode = 401
            throw new Error("Unauthorized. Please enter a token.")  
        }

        const verifiedToken: AuthenticationData = getTokenData(token)

        const userCookenu: user = await selectUserById(verifiedToken.id)

        res.status(200).send({
            id: userCookenu.id, 
            name: userCookenu.name,
            email: userCookenu.email
        })

    } catch(error) {
        if( 
            error.message === "invalid signature" || 
            error.message === "jwt expired") {
             res.send("Invalid token")
         }
 
        res.status(400).send({ message: error.message })
        console.log(error.sqlMessage || error.message)
    }
}