import express from "express"
import allAccounts from "../user/account"
import createAccount from "../user/createAccount"

const routes = express.Router()


routes.get("/users", allAccounts )
routes.post("/users/create", allAccounts )

export default routes
