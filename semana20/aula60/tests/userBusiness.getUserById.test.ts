import { UserBusiness } from "../src/business/UserBusiness"
import { stringToUserRole, User } from "../src/model/User"
import { HashGenerator } from "../src/services/hashGenerator"
import { IdGenerator } from "../src/services/idGenerator"
import { TokenGenerator } from "../src/services/tokenGenerator"

describe("Testing getUserByI Business", () => {
    
    const idGenerator = {generate: jest.fn(() => "devolve o que eu quero")} as IdGenerator 
    
    const hashGenerator = {hash: jest.fn(async () => "senha cripto"), compareHash: jest.fn()} as HashGenerator 

    const userDatabase = {getUserById: jest.fn(() => undefined )} as any 

    const tokenGenerator = {generate: jest.fn(() => "token"), verify: jest.fn()} as TokenGenerator

     const userBusiness: UserBusiness = new UserBusiness(idGenerator, hashGenerator, tokenGenerator, userDatabase )



    test("should return user not found", async () => {
        expect.assertions(2)

        try{
            const userDatabase = {getUserById: jest.fn((id: string) => undefined )} as any

            const userBusiness: UserBusiness = new UserBusiness(idGenerator, hashGenerator, tokenGenerator, userDatabase )

            await userBusiness.getUserById("senha errada")
        } catch (error) {
            expect(error.statusCode).toBe(404)
            expect(error.message).toBe("User not found")
        }
    })


    test("should return user", async () => {
        expect.assertions(2)

            //mock da saída
            const mock = new User (
                "mockId",
                "name",
                "email@email.com",
                "password",
                stringToUserRole("NORMAL")
            )
                
            const userDatabase = {getUserById: jest.fn((id: string) => mock )} as any

            const userBusiness: UserBusiness = new UserBusiness(idGenerator, hashGenerator, tokenGenerator, userDatabase )

            const user = await userBusiness.getUserById("id")

            expect(user).toEqual({
                id: "mockId",
                name: "name",
                email: "email@email.com",
                role: "NORMAL"
            })
            expect(userDatabase.getUserById).toHaveBeenCalledWith("id")
       
    })
})

