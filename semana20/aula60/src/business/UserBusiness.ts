import { CustomError } from "../errors/CustomError";
import { User, stringToUserRole, UserRole } from "../model/User";
import { UserDatabase } from "../data/UserDatabase";
import { HashGenerator } from "../services/hashGenerator";
import { IdGenerator } from "../services/idGenerator";
import { TokenGenerator } from "../services/tokenGenerator";

export class UserBusiness {

   constructor(
      private idGenerator: IdGenerator,
      private hashGenerator: HashGenerator,
      private tokenGenerator: TokenGenerator,
      private userDataBase: UserDatabase
   ) {}

   public async signup(
      name: string,
      email: string,
      password: string,
      role: string
   ) {
      try {
         if (!name || !email || !password || !role) {
            throw new CustomError(422, "Missing input");
         }

         if (email.indexOf("@") === -1) {
            throw new CustomError(422, "Invalid email");
         }

         if (password.length < 6) {
            throw new CustomError(422, "Invalid password");
         }

         const id = this.idGenerator.generate();

         const cypherPassword = await this.hashGenerator.hash(password);

         await this.userDataBase.createUser(
            new User(id, name, email, cypherPassword, stringToUserRole(role))
         );

         const accessToken = this.tokenGenerator.generate({
            id,
            role,
         });
         return { accessToken };
      } catch (error) {
         if (error.message.includes("email")) {
            throw new CustomError(409, "Email already in use")
         }

         throw new CustomError(error.statusCode, error.message)
      }

   }

   public async login(email: string, password: string) {

      try {
         if (!email || !password) {
            throw new CustomError(422, "Missing input");
         }

         const user = await this.userDataBase.getUserByEmail(email);

         if (!user) {
            throw new CustomError(401, "Invalid credentials");
         }

         const isPasswordCorrect = await this.hashGenerator.compareHash(
            password,
            user.getPassword()
         );

         if (!isPasswordCorrect) {
            throw new CustomError(401, "Invalid credentials");
         }

         const accessToken = this.tokenGenerator.generate({
            id: user.getId(),
            role: user.getRole(),
         });

         return { accessToken };
      } catch (error) {
         throw new CustomError(error.statusCode, error.message)
      }
   }

   public async getUserById(id: string) {
      try{

         const user = await this.userDataBase.getUserById(id) 

         if(!user) {
            throw new CustomError(404, "User not found")
         }

         return { 
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            role: user.getRole()
         }

      } catch(error) {
         throw new CustomError(error.statusCode, error.message)
      }
   }

   public async getAllUsers(token: string) {
      
      try{
         const tokenUser = this.tokenGenerator.verify(token)

         if(stringToUserRole(tokenUser.role) !== UserRole.ADMIN ) {
            throw new CustomError(401, "Unauthorized")
         }
         const allUsers = await this.userDataBase.getAllUsers()

         return {allUsers}

      }catch (error) {
         throw new CustomError(error.statusCode, error.message)
      }
   }
}


