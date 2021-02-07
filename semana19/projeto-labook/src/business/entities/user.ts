export type authenticationData = {
    id: string
}
 
export type user = {
    id: string,
    name: string,
    email: string,
    password: string
}

//criando um DTO pra moldar os dados que serão recebidos
export interface SignUpInput {
    name: string, 
    email: string,
    password: string
}

export interface LoginInput {
    email: string,
    password: string
}

export function toUserModel(obj: any): user {
    return obj && {
        id: obj.id, 
        email: obj.email, 
        name: obj.name, 
        password: obj.password
    }
}
