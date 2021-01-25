import express from 'express';


const router = express.Router();

//Controller
import { createUser, getUserByEmail, getUserById } from '../controller/userController';

//Rotas
router.post("/signup", createUser);
router.post("/login", getUserByEmail);
router.get("/user/profile", getUserById);


export default router;