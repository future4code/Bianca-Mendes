import axios from "axios"
import { urlBase } from "../constants/urlBase"
import { goToFeed } from "../routes/coordinator"


export const login = (body, history) => {
    
    axios.post(`${urlBase}/login`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        goToFeed(history)
    }).catch((err) => {console.log(err)})
} 

export const registration = (body, history) => {
    axios.post(`${urlBase}/signup`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        alert("Cadastro efetuado com sucesso!")
        goToFeed(history)
    }).catch((err) => {
        alert("Erro ao tentar cadastrar. Tente novamente.")
        console.log(err)})
}

