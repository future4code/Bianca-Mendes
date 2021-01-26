import express from 'express';


const router = express.Router();

//Controller
import { createUser, deleteUserById, getUserByEmail, getUserById } from '../controller/userController';

//Rotas
router.post("/signup", createUser);
router.post("/login", getUserByEmail);
router.get("/user", getUserById);
router.delete("/user/:id", deleteUserById);


export default router;