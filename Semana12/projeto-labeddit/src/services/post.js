import axios from "axios"
import { urlBase } from "../constants/urlBase"

const axiosAuth = {
    headers: {
        Authorization: localStorage.getItem("token")
    }
}

export const createPost = (body) => {
    axios.post(`${urlBase}/posts`, body, axiosAuth)
    .then((res) => {
        alert("Deu certo")
        console.log("postou")
        
    }).catch((err) => {
        console.log(err, "erro")
        alert("Erro, tente novamente.")})
}
