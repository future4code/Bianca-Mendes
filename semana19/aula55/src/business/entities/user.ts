import { task } from "./task"

export enum USER_ROLES {
   NORMAL = 'NORMAL',
   ADMIN = 'ADMIN'
}

export type authenticationData = {
   id: string,
   role: USER_ROLES
}

export type user = {
   id: string,
   name: string,
   nickname: string,
   email: string,
   password: string,
   role: USER_ROLES
}


//pode substituir  o DTO por export type Omit <user, "id">
//o omit pega o type que vc quer e tira a chave que não precisa
// use utility types
export type signupInputDTO = {
   name: string,
   nickname: string,
   email: string,
   password: string,
   role: string
}

