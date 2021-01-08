import express, { Express } from "express"
import { AddressInfo } from "net";
import account from "./routes/accountRouter"
const app: Express = express();


app.use("/account", account); //>>>aqui ta puxando por rota 


// //=================== Servidor ===================
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});




// import express from "express"
// import cors from "cors"

// const app = express()

// app.use(express.json())
// app.use(cors())


// const server = app.listen(3003, () => {
//     if (server) {
//        console.log("Server is running in http://localhost:3003")
//     } else {
//        console.error("Failure upon starting server.")
//     }
// })


