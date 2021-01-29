import { Response, Request } from "express"
import { selectUserById } from "../model/selectUserById"
import { AuthenticationData } from "../types/authenticatorData"
import { user } from "../types/user"
import { getTokenData } from "../utils/authenticator"

export const getUserById = async (req: Request, res: Response) => {

    try{
        const token: string = req.headers.authorization!

        const verifiedToken: AuthenticationData = getTokenData(token)

        const userCookenu: user = await selectUserById(verifiedToken.id)

        res.status(200).send({
            id: userCookenu.id, 
            name: userCookenu.name,
            email: userCookenu.email
        })

    } catch(error) {
        res.status(400).send({ message: error.message })
        console.log(error.sqlMessage || error.message)
    }
}