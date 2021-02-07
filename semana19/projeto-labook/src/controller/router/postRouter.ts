import express from "express"
import { PostController } from "../postController"


export const postRouter = express.Router()

const postController: PostController = new PostController()
postRouter.post('/create', postController.createPost) 
postRouter.get('/:id', postController.getPostById )       