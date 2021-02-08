export enum user_roles {
    APPRENTICE  = 'APPRENTICE',
    CHEF = 'CHEF'
}

export type user = {
    id: string,
    name: string, 
    email: string, 
    password: string, 
    role: user_roles 
}

export type profileUser = {
    id: string,
    name: string,
    email: string
}

