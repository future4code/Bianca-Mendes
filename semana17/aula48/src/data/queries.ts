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
export async function orderByNameOrType(name: string, typeUser: string):Promise<any> {

    const result = await connection.raw(`
        SELECT *
        FROM aula48_exercicio
        WHERE name LIKE "${name}%"
        ORDER BY "%${typeUser}%"
    `)

    return result[0]
}