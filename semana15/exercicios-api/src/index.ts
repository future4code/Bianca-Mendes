import express, { Request, Response } from "express"
import cors from "cors"
import {countries, country} from "./countries"

const app = express()

app.use(express.json())
app.use(cors())

//api para puxar todos os países
app.get('/countries/all', (req: Request, res: Response) => {

    const result = countries.map(country => ({
        id: country.id,
        name: country.name
    }))
    
    if (result.length) {
        res.status(200).send(result)
        } else {
        res.status(404).send("Not found")
        }
        })
     
//api para puxar por nome, capital, continente
app.get('/countries/search', (req: Request, res: Response) => {

    if(!req.query.name && !req.query.capital && !req.query.continent) {
        res.status(404).send("Nenhum parâmetro foi encontrado")
    } else {
        let result: country[] = countries
            
        if (req.query.name) {
            result = result.filter(
               country => country.name.includes(req.query.name as string)
            )
        }
         
        if (req.query.capital) {
            result = result.filter(
               country => country.capital.toLowerCase().includes(req.query.capital as string)
            )
        }
         
        if (req.query.continent) {
            result = result.filter(
               country => country.continent.includes(req.query.continent as string)
            )
        }
    
        if (result.length) {
            res.status(200).send(result)
            } else {
            res.status(404).send("Not found")
        }
    }
 })

//api para criar país
app.post("/countries/create", (req: Request, res: Response) => {

    const newCountry: country = {
        id: Date.now(),
        name: req.body.name,
        capital: req.body.capital,
        continent: req.body.continent
    }

    let errorCode: number = 400
    let result: country[] = countries
    result = result.filter(
        country => country.name.includes(req.body.name as string))
    try { //tenta executar o que esta dentro dele, sele quebrar, vai pro catch
 
        if(!req.headers.authorization || req.headers.authorization.length < 10 ){ 
           errorCode = 401
           throw new Error() 
        }

        if(req.body.name === result) {
            errorCode = 401
            throw new Error("Este nome já existe") 
        }
  
        countries.push(newCountry)
        //deu tudo certo
        res.status(200).send({message:"Sucess!", country: newCountry})
        
     } catch (error) {  //trata a exceção, mostra um novo erro
        //deu tudo errado
        console.log(error)
        res.status(errorCode).end()
     }
})

//api para alterar nome do país/capital
app.put('/countries/edit/:id', (req: Request, res: Response) => {
//puxa a posição do pais dentro do array, e puxa o id dele, pq nesse caso a posição no array é a mesma do id
    const result = countries.findIndex(
        country => country.id === Number(req.params.id)
    )
    //usa a posição do array pra alterar o nome e a capital
    countries[result].name = req.body.name;
    countries[result].capital = req.body.capital
    
    if(result) {
        res.status(200).send(req.body)
    } else {
        res.status(404).send("Not found")
    }
     
})    

//api para puxar as infos de um determinado país
app.get('/countries/:id', (req: Request, res: Response) => {

    const result:  country | undefined = countries.find(
        country => country.id === Number(req.params.id)
     )
            
    if (result) {
        res.status(200).send(result)
        } else {
        res.status(404).send("Not found")
        }
    })

// api para deletar um país
app.delete("/countries/:id", (req:Request, res:Response)=>{
    let errorCode: number = 400
    const password: string = req.headers.authorization as string
    password.length >= 10
    //inicio de um sonho
    try { //tenta executar o que esta dentro dele, sele quebrar, vai pro catch
 
       if(!password){ //autorização errada ou vazia
          errorCode = 401
          throw new Error() //throw é tipo um return do erro, sempre que encontra um erro para a execução do código e envia pra uma parte de erro
       }
 
       const countryIndex: number = countries.findIndex(
          (country) => country.id === Number(req.params.id)
       )
 
          if(countryIndex === -1){ //país não encontrado
             errorCode = 404
             throw new Error()
          }
 
       countries.splice(countryIndex, 1)
    //deu tudo certo
       res.status(200).end("Apagado com sucesso")
    } catch (error) {  //trata a exceção, mostra um novo erro
       //deu tudo errado
       console.log(error)
       res.status(errorCode).end()
    }
 })


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})
