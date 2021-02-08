import { UserDataBase } from "../data/UserDataBase"
import { LoginInput, SignUpInput, user } from "./entities/user"
import { HashManager } from "./sevices/HashManager"
import { IdGenerator } from "./sevices/IdGenerator"
import { TokenManager } from "./sevices/TokenManager"

////instancia pra chamar o método dentro da classe
const hashManager: HashManager = new HashManager()
const userDataBase: UserDataBase = new UserDataBase()
const idGenerator: IdGenerator = new IdGenerator()
const generateToken: TokenManager = new TokenManager()

export class UserBusiness {

    async signup (input: SignUpInput): Promise<string> {

        try{

            if (!input.name || !input.email || !input.password) {
                throw new Error('"name", "email" and "password" must be provided')
            }
            
            const id: string = idGenerator.generateId()
                    
            const cypherPassword = await hashManager.generateHash(input.password)
        
            const newUser: user = {
                id,
                name: input.name,
                email: input.email,
                password: cypherPassword 
            }
        
            await  userDataBase.insertUser(newUser)
        
            const token: string = generateToken.generateToken({id})
        
            return token 


        } catch (error) {
            throw new Error(error.message)
        }
    }

    async login  (input: LoginInput): Promise<string> {

        try {
            if (!input.email || !input.password) {
                throw new Error('"email" and "password" must be provided')
            }
        
            const user : user = await userDataBase.selectUserByEmail(input.email)
        
            if (!user) {
                throw new Error("Invalid credentials")
            }
        
            const passwordIsCorrect: boolean = await hashManager.compareHash(input.password, user.password)
        
            if (!passwordIsCorrect) {
                throw new Error( "Invalid credentials")
            }
        
            const token: string = generateToken.generateToken({
                id: user.id
            })
        
            return token 

        } catch (error) {
            throw new Error(error.message)
        }
    }
}