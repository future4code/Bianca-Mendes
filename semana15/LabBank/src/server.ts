import express from "express"
import routes from "./routes/routes"

const app = express()


app.use("/test",routes)

const server = app.listen(5000, () => {
    if (server) {
        console.log("Server is running in http://localhost:5000")
     } else {
        console.error("Failure upon starting server.")
     }
})