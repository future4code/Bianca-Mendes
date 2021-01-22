import express, { Request, Response, Router } from "express"
import { insertUser, getUserById, updateUserById, insertTask, getTaskById } from "../data/query"

const router: Router = express.Router()
router.use(express.json())


// ----- criar usuário -----
router.put("/createUser", async (req: Request, res: Response) => {
    let errorCode: number = 400

    try{
        //validação: nenhum campo pode ficar em branco
        if(!req.body.name || !req.body.nickname || !req.body.email){
            errorCode = 422;
            throw new Error("Por favor, preencha todos os campos corretamente.")
        }
    
        await insertUser( 
            req.body.name,
            req.body.nickname,
            req.body.email)
        
        res.status(200).send("Usuário criado com sucesso!") 

    } catch(error) {
        res.status(errorCode).send(error.sqlMessage || error.message)
    }
})


// ----- pegar usuário pelo id -----
router.get("/user/:id", async (req: Request, res: Response) => {
    let errorCode: number = 400

    try{
        const userId = req.params.id

        //validação: preencher ID corretamente (considerando mínimo 13 digitos, por causa do Date.now())
        if(userId.length < 13){
            errorCode = 422;
            throw new Error("Por favor, informe um id para pesquisa")
        }


        const result = await getUserById(userId) //result para pegar as infos do id informado

        //validação: caso o resultado não retorna nenhuma informação
        if(!result){
            errorCode = 422;
            throw new Error("Usuário não encontrado")
        }
        
        res.status(200).send(result) 

    } catch(error) {
        res.status(errorCode).send(error.sqlMessage || error.message)
    }
})


// ----- editar usuário -----
router.post("/editUser/:id", async (req: Request, res: Response) => {
    let errorCode: number = 400

    try{
        //validação: nenhum campo pode ficar em branco
        if(!req.body.name || !req.body.nickname){
            errorCode = 422;
            throw new Error("Por favor, preencha todos os campos corretamente.")
        }
    
        const userId = req.params.id

        //validação: preencher ID corretamente (considerando mínimo 13 digitos, por causa do Date.now())
        if(userId.length < 13){
            errorCode = 422;
            throw new Error("Por favor, informe um id válido para pesquisa")
        }

        await updateUserById( 
            req.params.id,
            req.body.name,
            req.body.nickname
        )
        
        res.status(200).send("Usuário atualizado com sucesso") 

    } catch(error) {
        res.status(errorCode).send(error.sqlMessage || error.message)
    }
})


// ----- criar tarefa -----
router.put("/createTask", async (req: Request, res: Response) => {
    let errorCode: number = 400

    try{
        const { title, description, limitDate, creatorUserId } = req.body;

        const [day, month, year] = limitDate.split("/")

        const formatLimitDate: Date = new Date(`${year}-${month}-${day}`)
      
        //validação: nenhum campo pode ficar em branco
        if(!title || !description || !formatLimitDate || !creatorUserId ){
            errorCode = 422;
            throw new Error("Por favor, preencha todos os campos corretamente.")
        }
    
        await insertTask( 
            title,
            description,
            formatLimitDate,
            creatorUserId)
        
        res.status(200).send("Tarefa criada com sucesso!") 

    } catch(error) {
        res.status(errorCode).send(error.sqlMessage || error.message)
    }
})


// ----- pegar tarefa pelo id -----
router.get("/task/:id", async (req: Request, res: Response) => {
    let errorCode: number = 400

    try{
        const taskId = req.params.id

        //validação: preencher ID corretamente (considerando mínimo 13 digitos, por causa do Date.now())
        if(taskId.length < 13){
            errorCode = 422;
            throw new Error("Por favor, informe um id para pesquisa")
        }

        const result = await getTaskById(taskId) //result para pegar as infos do id informado

        //validação: caso o resultado não retorna nenhuma informação
        if(!result){
            errorCode = 422;
            throw new Error("Tarefa não encontrado")
        }
        
        res.status(200).send(result) 

    } catch(error) {
        res.status(errorCode).send(error.sqlMessage || error.message)
    }
})


export default router

