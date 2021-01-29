import express from 'express'


const router = express.Router()


//Controller
 import { createUser } from '../controller/createUser'
 import { getUserById } from '../controller/getUserById'
 import { getUserProfile } from '../controller/getUserProfile'
 import { login } from '../controller/login'
 import { createRecipe } from '../controller/createRecipe'
 import { getRecipeById } from '../controller/getRecipeById'
 import { getFollowUser } from '../controller/getFollowUser'

//Rotas
 router.post("/signup", createUser)
 router.post("/login", login)
 router.get("/user/profile", getUserById)
 router.get("/user/:id", getUserProfile)
 router.post("/user/follow", getFollowUser)

 router.post("/recipe", createRecipe)
 router.get("/recipe/:id", getRecipeById)


export default router