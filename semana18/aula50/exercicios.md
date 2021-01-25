# Introdução a Autenticação | Aula 50

### Exercício 01

a) Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?
" Strings podem mesclar letras e números, dessa forma a validação fica mais segura" 

b) A partir de hoje vamos tentar isolar, ao máximo, as nossas lógicas dentro de funções. Isso vai deixar nosso código mais organizado e aumentar a facilidade da manutenção e refatoração. Dado isso, crie uma função para gerar um id. 
" Função criada dentro da pasta Utils"

~~~TypeScript
 export function generateId(): string  {
 return v4()
} 
~~~

### Exercício 02

a) Explique o código acima com as suas palavras.
"O código mostra uma função query builder que fará a conexão com o banco de dados. Essa função serve para a criação de um usuário a partir de três parâmetros: id, email e senha. Esses dados serão incluidos na tabela determinada na penultima linha da função. Essa tabela esta conectada com um tipo(primeira linha da tabela). 
A conexão com o banco de dados esta sendo realizada na segunda const do código."

b) Comece criando a tabela de usuários. Coloque a query que você utilizou no arquivo de respostas.
"Função com a query criada dentro da pasta migrations - arquivo: createTable.ts:
 query: "

 ~~~TypeScript
 CREATE TABLE Users(
            id VARCHAR(20) PRIMARY KEY NOT NULL, 
            email VARCHAR(60)  UNIQUE NOT NULL, 
            password VARCHAR(60) NOT NULL
            ) 
~~~

c) Pela mesma justificativa do exercício anterior, crie uma função para ser responsável pela criação de usuários no banco.
"Função criada dentro da pasta model - arquivo modelUser.ts:"

~~~TypeScript
export const insertUser = async (id: string, email: string, password: string): Promise<any> => {
    try {
        await dataBase
            .insert({
                id,
                email,
                password
            })
            .into("Users");
    } catch (error) {
        throw new Error(error.sqlMessage || error.message);
    }
}
~~~


### Exercício 03

a) O que a linha as string faz? Por que precisamos usar ela ali?
" O 'as string' garante que o que será retornado será uma string. Ele é necessário pois o arquivo .env pode devolver uma 'string' ou 'undefined'."

b) Agora, crie a função que gere o token. Além disso, crie um type  para representar o input dessa função.
"Função criada dentro da pasta 'utils' - arquivo: authenticator.ts"

~~~TypeScript
export function generateToken(input: AuthenticationData): string {
    const token = jwt.sign(
        {id: input.id}, 
        process.env.JWT_KEY as string,
        { expiresIn: process.env.JWT_EXPIRE_TIME as string || "id" } 
        )

        return token 
}

export type AuthenticationData = {
    id: string
}
~~~


### Exercício 04

a) Crie o endpoint que realize isso, com as funções que você implementou anteriormente.
b) Altere o seu endpoint para ele não aceitar um email vazio ou que não possua um "@".
c) Altere o seu endpoint para ele só aceitar uma senha com 6 caracteres ou mais.
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

        const { email, password } = req.body

        const id: string = generateId()

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
            password
            )

        const token =  generateToken({id})

        res.status(200).send({token: "token gerado pelo jwt"})

    } catch (error) {
        res.status(400).send({ message: error.message })
        console.log(error.sqlMessage || error.message)
    }
}
~~~


### Exercício 05

a) Crie uma função que retorne as informações de um usuário a partir do email.
"Função criada dentro da pasta 'model' - arquivo: modelUser.ts"

~~~TypeScript
export const userByEmail = async (email: string): Promise<any> => {

    try {
        const result = await dataBase
            .select("*")
            .from("Users")
            .where({ email });
            
            return result[0]

    } catch (error) {
        throw new Error(error.sqlMessage || error.message);
    }
}
~~~


### Exercício 06

a) Crie o endpoint que realize isso, com as funções que você implementou anteriormente.
b) Altere o seu endpoint para ele não aceitar um email vazio ou que não possua um "@".
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
        
        if(user.password !== input.password) {
            errorCode = 401
            throw new Error("Senha incorreta")
        }

        const token = generateToken(user.id)

        res.status(200).send({token})

    } catch (error) {
        res.status(400).send({ message: error.message })
        console.log(error.sqlMessage || error.message)
    }
}

export type loginInput = {
    email: string,
    password: string
}
~~~


### Exercício 07

a) O que a linha as any faz? Por que precisamos usá-la ali?
"O 'as any' garante que algo será retornado, mas não determinado o que será retornado".

b) Crie uma função que realize a mesma funcionalidade da função acima.
"Função criada dentro da pasta 'utils' - arquivo: authenticator.ts"
~~~TypeScript
export function getTokenData(token: string): AuthenticationData{
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any
    const result = {  
        id: payload.id
    }
    return result
}
~~~


### Exercício 08

a) Comece criando uma função no data que retorne o usuário a partir do id.
"Função criada dentro da pasta 'model' - arquivo: modelUser.ts"

~~~TypeScript
export const userById = async (id: string): Promise<any> => {

    try {
        const result = await dataBase
            .select("*")
            .from("Users")
            .where({ id })
            
            return result[0]

    } catch (error) {
        throw new Error(error.sqlMessage || error.message);
    }
}
~~~

b) Crie o endpoint com as especificações passadas.
"Função criada dentro da pasta 'controller' - arquivo: userControoler.ts"

~~~TypeScript
export const getUserById = async (req: Request, res: Response): Promise<any> => {

    try {

       const token: string = req.headers.authorization!

       const verifiedToken: AuthenticationData = getTokenData(token)

       if(!verifiedToken) {
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


