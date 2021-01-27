export enum roles {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export type address = {
    street: string,
    neighborhood: string,
    city: string,
    state: string
}

export type uAddress = {
    id: string, 
    street: string,
    number: number,
    complement: string,
    neighborhood: string,
    city: string,
    state: string,
    user_id: string
}