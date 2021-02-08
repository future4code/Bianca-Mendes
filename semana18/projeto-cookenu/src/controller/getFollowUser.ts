import { Response, Request } from "express"
import { selectUserProfile } from "../model/selectUserProfile"
import { AuthenticationData } from "../types/authenticatorData"
import { getTokenData } from "../utils/authenticator"

export const getFollowUser = async (req: Request, res: Response) => {

    try{
        const token: string = req.headers.authorization!
       
        if(!token) {
            throw new Error("Unauthorized. Please enter a token.")  
        }

        const verifiedToken: AuthenticationData = getTokenData(token)

        if(!verifiedToken){
            throw new Error("Unauthorized. Check the token")
        }

        const userToFollowId = await selectUserProfile(req.body.id)

        if (!userToFollowId) {
            throw new Error("User not found")
        }

        res.status(200).send({message: "Followed successfully"})

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
