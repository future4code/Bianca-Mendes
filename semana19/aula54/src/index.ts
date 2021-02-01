import express from 'express'
import cors from 'cors'
import { AddressInfo } from "net"
import { deleteUser, getAllUsers, login, signup } from './controller/userController'


const app = express()
app.use(express.json())
app.use(cors())



app.put('/signup', signup)
app.post('/login', login)
app.get('/all', getAllUsers)
app.delete('/:id', deleteUser)

const server = app.listen(process.env.PORT || 5000, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
})
