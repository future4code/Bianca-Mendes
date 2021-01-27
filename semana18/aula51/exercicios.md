# Criptografia e User Roles | Aula 51

### Exercício 01

a) O que são os round e salt? Que valores são recomendados para o round? Que valor você usou? Por quê?
"*Round* é o tempo que o processo irá demorar para responder, o valor recomendado para se utilizar é o maior que o equipamento que irá rodar a aplicação suporta, não deixando a aplicação lenta para o usuário, utilizei o Round 12 por ser o padrão na maioria das libs. Já *Salt* é a geração da string aleatória, que vem após o *Round*." 

b) Instale o bcryptjs no seu projeto e comece criando a função generateHash(), que será responsável por criptografar uma string usando o bcryptjs.  
"Função criada dentro da pasta Utils - arquivo: hashManager.ts"
~~~TypeScript
export function generateHash(plainText: string): string {
    const cost: number = Number(process.env.BCRYPT_COST) 
    const salt: string =  bcrypt.genSaltSync(cost) 
    const cypherText: string =  bcrypt.hashSync(plainText, salt) 

    return cypherText
}
~~~

c) Agora, crie a função que verifique se uma string é correspondente a um hash, use a função compare do bcryptjs.
"Função criada dentro da pasta utils - arquivo: hashManager.ts"
~~~TypeScript
export function compare(
    plaintext: string, 
    cypherText: string 
): boolean {
    return bcrypt.compareSync(plaintext, cypherText)
}
~~~


### Exercício 02

a) Para realizar os testes corretamente, qual deles você deve modificar primeiro? O cadastro ou o login? Justifique.
"Primeiro é necessário alterar o código de cadastro, para que o banco não salve a senha pura e sim a versão criptografada, para depois alterar o código de login que irá comparar a senha criptografada salva no banco de dados com a senha criptografada que o usuário esta digitando"

b) Faça a alteração do primeiro endpoint
"Função criada dentro da pasta controller - arquivo: userController.ts"
 ~~~TypeScript
 export const createUser = async (req: Request, res: Response): Promise<any> => {

    try {

        //validação: nenhum campo vazio
        const keys = Object.keys(req.body)

        for (const key of keys) {
            if (req.body[key] == "")
                return res.send("Por gentileza preencha todos os campos!")
        }

        const { email, password } = req.body

        //geração id
        const id: string = generateId()

        //senha criptografada
        const cypherPassword: string = generateHash(req.body.password)

        //validação: email
        if(!email.includes("@")) {
            throw new Error("Por gentileza, insira um email válido")
        }

        //validação: senha 
        if(password.length < 5) {
            throw new Error("Insira uma senha com no mínimo 06 caracteres")
        }

        await insertUser(
            id,
            email,
            cypherPassword
            )

        const token =  generateToken({id})

        res.status(200).send({token})

    } catch (error) {
        res.status(400).send({ message: error.message })
        console.log(error.sqlMessage || error.message)
    }
}
~~~

c) Faça a alteração do segundo endpoint
"Função criada dentro da pasta controller - arquivo userController.ts"
~~~TypeScript
export const getUserByEmail = async (req: Request, res: Response): Promise<any> => {
    let errorCode = 400
    try {
        
        const input: loginInput = {
            email: req.body.email,
            password: req.body.password
        }

        //validação: nenhum campo vazio
        const keys = Object.keys(req.body)

        for (const key of keys) {
            if (req.body[key] == "")
                return res.send("Por gentileza preencha todos os campos!")
        }

        //validação: email
        if(!(input.email).includes("@")) {
            errorCode = 406
            throw new Error("Por gentileza, insira um email válido")
        }

        const user = await userByEmail(input.email)

        if(!user) {
            errorCode = 404
            throw new Error("Usuário não encontrado")
        }
        
        //pra verificar se a senha é igual ao do bd
        const passwordIsCorrect: boolean = compare(
            input.password, user.password
        )

        if(!passwordIsCorrect){
            throw new Error("Senha incorreta");
        }

        const token = generateToken(user.id)

        res.status(200).send({token})

    } catch (error) {
        res.status(400).send({ message: error.message })
        console.log(error.sqlMessage || error.message)
    }
}
~~~

d) No exercício de ontem, nós criamos o endpoint `user/profile`. Também temos que modificar esse endpoint devido à adição da criptografia? Justifique.
"Não, pois esse endpoint apenas verifica se o token salvo é o mesmo que foi inserido no headers, caso seja o mesmo, ele devolve o id."


### Exercício 03

a) Altere a sua tabela de usuários para ela possuir uma coluna role. Considere que pode assumir os valores normal  e admin. Coloque normal como valor padrão.
"Função criada dentro da pasta 'migrations' - arquivo: createTable.ts"
~~~TypeScript
    CREATE TABLE Users(
            id VARCHAR(255) PRIMARY KEY NOT NULL, 
            email VARCHAR(60)  UNIQUE NOT NULL, 
            password VARCHAR(60) NOT NULL,
            role ENUM('NORMAL', 'ADMIN') DEFAULT 'NORMAL'
        )
~~~

b) Altere o type AuthenticationData e a função getData() para representarem esse novo tipo no token.
"Função criada dentro da pasta 'utils' - arquivo: authenticator.ts e pasta 'types' - arquivo: types.ts"
~~~TypeScript
export function getTokenData(token: string): AuthenticationData{
    const payload = jwt.verify(token, process.env.JWT_KEY!) as AuthenticationData
    const result = {   //dessa forma da pra puxar a informação exata que deseja do AuthenticationData
        id: payload.id,
        role: payload.role
    }
    return result
}

export type AuthenticationData = {
    id: string
    role: roles //enum
}

export enum roles {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}
~~~

c) Altere o cadastro para receber o tipo do usuário e criar o token com essa informação.
"Função criada dentro da pasta 'controller' - arquivo: userController.ts"
~~~TypeScript
export const createUser = async (req: Request, res: Response): Promise<any> => {
    try {

        //validação: nenhum campo vazio
        const keys = Object.keys(req.body)

        for (const key of keys) {
            if (req.body[key] == "")
                return res.send("Por gentileza preencha todos os campos!")
        }

        const { email, password, role } = req.body

        //verificação role
        if(req.body.role !== roles.ADMIN && req.body.role !== roles.NORMAL) {
            throw new Error ("Role deve ser 'NORMAL' ou 'ADMIN' ")
        }
        //geração id
        const id: string = generateId()

        //senha criptografada
        const cypherPassword: string = generateHash(req.body.password)

        //validação: email
        if(!email.includes("@")) {
            throw new Error("Por gentileza, insira um email válido")
        }

        //validação: senha 
        if(password.length < 5) {
            throw new Error("Insira uma senha com no mínimo 06 caracteres")
        }

        await insertUser(
            id,
            email,
            cypherPassword,
            role
            )

        const token =  generateToken({id, role: req.body.role})

        res.status(200).send({token})

    } catch (error) {
        res.status(400).send({ message: error.message })
        console.log(error.sqlMessage || error.message)
    }
}
~~~

d) Altere o login para criar o token com o role do usuário
"Função criada dentro da pasta 'controller' - arquivo: userController.ts"
~~~TypeScript
export const getUserByEmail = async (req: Request, res: Response): Promise<any> => {
    let errorCode = 400
    try {
        
        const input: loginInput = {
            email: req.body.email,
            password: req.body.password
        }

        //validação: nenhum campo vazio
        const keys = Object.keys(req.body)

        for (const key of keys) {
            if (req.body[key] == "")
                return res.send("Por gentileza preencha todos os campos!")
        }

        //validação: email
        if(!(input.email).includes("@")) {
            errorCode = 406
            throw new Error("Por gentileza, insira um email válido")
        }

        const user = await userByEmail(input.email)

        if(!user) {
            errorCode = 404
            throw new Error("Usuário não encontrado")
        }
        
        //pra verificar se a senha é igual ao do bd
        const passwordIsCorrect: boolean = compare(
            input.password, user.password
        )

        if(!passwordIsCorrect){
            throw new Error("Senha incorreta");
        }

        const token = generateToken({
            id: user.id,
            role: user.role
            })

        res.status(200).send({token})

    } catch (error) {
        res.status(400).send({ message: error.message })
        console.log(error.sqlMessage || error.message)
    }
}
~~~


### Exercício 04

a)Altere o endpoint para que retorne um erro de Unauthorized para os usuários que "não sejam normais" e tentem acessar esse endpoint.
"Função criada dentro da pasta 'controller' - arquivo: userController.ts"

~~~TypeScript
export const getUserById = async (req: Request, res: Response): Promise<any> => {

    try {

       const token: string = req.headers.authorization!

       const verifiedToken: AuthenticationData = getTokenData(token)

       if(verifiedToken.role !== roles.NORMAL) {
        throw new Error("Não autorizado")  
       }

       const user = await userById(verifiedToken.id)

       res.status(200).send({id: user.id, email: user.email})

    } catch (error) {
        res.status(400).send({ message: error.message })
        console.log(error.sqlMessage || error.message)
    }
}
~~~


### Exercício 05

a) Implemente o endpoint que realizará a deleção de um usuário.
"Função criada dentro da pasta 'model' - arquivo: modelUser.ts e pasta 'controller' - arquivo: userController.ts"
~~~TypeScript
export const deleteUser = async (id: string): Promise<any> => {

    try {
        await dataBase
            .delete("*")
            .from("Users")
            .where({ id });
            
    } catch (error) {
        throw new Error(error.sqlMessage || error.message);
    }
}

export const deleteUserById = async (req: Request, res: Response): Promise<any> => {

    try {

       const token: string = req.headers.authorization!

       const verifiedToken: AuthenticationData = getTokenData(token)

       if(verifiedToken.role !== roles.ADMIN) {
        throw new Error("Não autorizado")  
       }

       const id = req.params.id

        await deleteUser(id)

       res.status(200).send({ message: "Usuário deletado com sucesso!" })

    } catch (error) {
        res.status(400).send({ message: error.message })
        console.log(error.sqlMessage || error.message)
    }
}
~~~


### Exercício 06

a) Implemente o endpoint que retorne as informações (id e email) de um usuário a partir do seu id.
"Função criada dentro da pasta 'controller' - arquivo: userController.ts"
~~~TypeScript
export const getUserById = async (req: Request, res: Response): Promise<any> => {

    try {

       const token: string = req.headers.authorization!

       //não precisa do if pra verificação, se der ruim, já entra direto no catch e lá tem uma verificação
       const verifiedToken: AuthenticationData = getTokenData(token)

       const user = await userById(verifiedToken.id)

       res.status(200).send({id: user.id, email: user.email, role: user.role})

    } catch (error) {
        if(error.message.includes("jwt malformed")) {
            res.send("Token invalido")
        }
        res.status(400).send({ message: error.message })
        console.log(error.sqlMessage || error.message)
    }
}
~~~