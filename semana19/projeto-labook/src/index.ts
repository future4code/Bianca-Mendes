/**************************** IMPORTS ******************************/
import express, { Express } from "express"
import cors from "cors"
import { userRouter } from "./controller/router/userRouter"
import { postRouter } from "./controller/router/postRouter"


/**************************** CONFIG ******************************/
const app: Express = express()
app.use(express.json())
app.use(cors())

app.use('/users', userRouter)
app.use('/posts', postRouter)

/**************************** SERVER INIT ******************************/

app.listen(3003, () => {
   console.log("Server running on port 3003")
})