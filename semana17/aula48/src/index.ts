import express, { Express } from "express"
import { AddressInfo } from "net";
import { getAllUsers, getUserByName, getUserByType, getUserByNameOrType, getAllUsersLimitPage, getUsersAllUsersandFuncionalities } from "./endpoints/endpoints"
import cors from "cors"

const app: Express = express()
app.use(express.json()) 
app.use(cors())

app.get("/", getAllUsers)
app.get("/search", getUserByName)
app.get("/search/:type", getUserByType)
app.get("/order", getUserByNameOrType)
app.get("/page", getAllUsersLimitPage)
app.get("/all/:type", getUsersAllUsersandFuncionalities)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
 }) 

