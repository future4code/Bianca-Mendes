import connection from "../connection"


// ----- puxar todos os usuários -----
export async function selectAllUsers():Promise<any> {

    

    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio;
    `)
 
    return result[0]
}


// ----- filtrar por nome -----
export async function filterUserByName(name: string):Promise<any> {

    const result = await connection.raw(`
        SELECT *
        FROM aula48_exercicio
        WHERE name LIKE "%${name}%"
    `)
      
 
    return result[0]
}


// ----- filtrar por tipo -----
export async function filterUserByType(type: string):Promise<any> {

    const result = await connection.raw(`
        SELECT *
        FROM aula48_exercicio
        WHERE type LIKE "%${type}%"
    `)

    return result[0]
}


// ----- ordenação por nome ou tipo -----
export async function orderByNameOrType(orderByColumn: string, orderByAscOrDesc: string):Promise<any> {

    const result = await connection.raw(`
        SELECT *
        FROM aula48_exercicio
        ORDER BY ${orderByColumn} ${orderByAscOrDesc}
    `)

    return result[0]
}


// ----- mostrando apenas cinco resultados por vez -----
export async function getUsersLimit (resultsPerPage:number, offset: number  ):Promise<any> {

    const result = await connection.raw(`
        SELECT *
        FROM aula48_exercicio
        LIMIT ${resultsPerPage}
        OFFSET ${offset}
    `)

    return result[0]
}

// ----- todos os itens pedidos ao mesmo tempo -----
export async function getUsersAllFunctionalities (
    name: string, 
    type: string,
    orderByColumn: string,
    orderByAscOrDesc: string, 
    resultsPerPage:number,
    offset: number 
    ):Promise<any> {

    const result = await connection.raw(`
        SELECT *
        FROM aula48_exercicio
        WHERE name, type LIKE "%${name}%" ${type}
        ORDER BY ${orderByColumn} ${orderByAscOrDesc}
        LIMIT ${resultsPerPage}
        OFFSET ${offset}
    `)

    return result[0]
}