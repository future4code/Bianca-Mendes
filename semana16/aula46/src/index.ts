import express, { Express, Request, Response } from "express";
import cors from "cors";
import knex from "knex";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { constants } from "buffer";


/**************************************************************/

const app: Express = express();
app.use(express.json());
app.use(cors())
dotenv.config();

/**************************************************************/

const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
   },
});

/**************************************************************/

app.get('/', testEndpoint)

async function testEndpoint(req: Request, res: Response): Promise<void> {
   try {
      const result = await connection.raw(`
       SELECT * FROM Actor
     `)

      res.status(200).send(result)
   } catch (error) {
      res.status(400).send(error.message)
   }
}

//EXERCICIO 1 LETRA A.
// const getActorById = async (id: string): Promise<any> => {
//    const result = await connection.raw(`
//      SELECT * FROM Actor 
//      WHERE id = '${id}'
//    `)
//     console.log(result[0][0])
//     return result[0][0]
//  }

//  getActorById("001");

// //LETRA B
// const getActorByName = async (name: string): Promise<any> => {
//    const result = await connection.raw(`
//      SELECT * FROM Actor 
//      WHERE name LIKE '%${name}%'
//    `)
//    console.log(result[0][0])
//    return result[0][0]
// }

// app.get("/name", async (req: Request, res: Response) => {

//    try {
//       const name: string = req.query.name as string;
//       const myActor = await getActorByName(name);
//       res.status(200).send({ actor: myActor })

//    } catch (error) {
//       console.log(error.sqlMessage || error.message);
//       res.send(error.message);
//    }

// })


//LETRA C
// const getActorGender = async (gender: string): Promise<any> => {
//    const result = await connection.raw(`
//       SELECT COUNT(*) as count 
//       FROM Actor
//       WHERE gender = "${gender}"
//    `)
//    console.log(result[0][0])
//    return result[0][0]
// }

// app.get("/:gender", async (req: Request, res: Response) => {

//    try {
//       const gender: string = req.params.gender;
//       const myGender = await getActorGender(gender);
//       res.status(200).send({ gender: myGender })

//    } catch (error) {
//       console.log(error.sqlMessage || error.message);
//       res.send(error.message);
//    }

// })

//EXERCICIO 2 A ===================== BUILDER =====================
const updateSalary = async (id: string, salary: number,): Promise<any> => {

   const newSalary = Number(salary)

   try{

      await connection("Actor")
      .update({
         salary: newSalary,
      })
      .where("id", id);
      console.log("salário alterado")

   } catch (error) {
      throw new Error(error.sqlMessage || error.message);
   }
   
 };

 app.put("/updateSalary", async (req: Request, res:Response) => {
    
   try {

      const id = req.body.id 
      const salary = req.body.salary
      
      await updateSalary(id, salary);

      res.status(200).send("Salário atualizado")

   } catch(error) {
      res.status(400).end
   }
 })


//=========================== PORTA ==================================================

const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});