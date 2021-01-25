import express from 'express';


const router = express.Router();

//Controller
import { createUser, getUserByEmail } from '../controller/userController';

//Rotas para createStudent, createTeacher, createMission
router.post("/signup", createUser);
router.post("/login", getUserByEmail);


export default router;