import { user_roles } from "./user";

export type AuthenticationData = {
    id: string
    role: user_roles
}