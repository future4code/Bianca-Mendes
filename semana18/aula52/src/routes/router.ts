import express from 'express';


const router = express.Router();

//Controller
import { createUser, deleteUserById, getUserAdress, getUserByEmail, getUserById } from '../controller/userController';

//Rotas
router.post("/signup", createUser);
router.post("/login", getUserByEmail);
router.get("/user", getUserById);
router.delete("/user/:id", deleteUserById);
router.get("/address/:cep", getUserAdress);


export default router;