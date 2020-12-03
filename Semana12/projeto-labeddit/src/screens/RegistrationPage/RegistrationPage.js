import React, { useEffect } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { urlBase } from "../../constants/urlBase"
import {TextField, Button} from "@material-ui/core"
import {FormContainer, RegistrationContainer, Title} from "./styled"

const RegistrationPage = () => {
    const history = useHistory()
    const {form, onChange} = useForm({email: "", password:"", username: ""})

    const handleInput = (event) => {
        const {value, name} = event.target
        onChange(value, name)
    }
    
    useEffect(() => {
        const token = localStorage.getItem("token")
    
        if (token) {
          history.push("/feed")
        } 
        
    }, [history]) 

    const registration = (event) => {
        event.preventDefault()

        const body = {
            email: form.email,
            password: form.password,
            username: form.username
        }

        axios.post(`${urlBase}/signup`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            alert("Cadastro efetuado com sucesso!")
            history.push("/feed")
        }).catch((err) => {
            alert("Erro ao tentar cadastrar. Tente novamente.")
            console.log(err)})
    }

    return(
        <div>
            <Title>Faça seu cadastro</Title>
            <RegistrationContainer>
        
            <FormContainer onSubmit={registration}>
                <TextField
                value={form.email}
                variant="outlined"
                size="small"
                label="E-mail"
                type="email"
                name="email"
                placeholder="E-mail"
                onChange={handleInput}
                required
                />
                <TextField
                value={form.password}
                variant="outlined"
                size="small"
                label="Senha"
                type="password"
                name="password"
                placeholder="Senha"
                onChange={handleInput}
                required/>
                <TextField
                value={form.username}
                variant="outlined"
                size="small"
                label="Usuário"
                type="text"
                name="username"
                placeholder="Usuário"
                onChange={handleInput}
                required/>
                <Button  variant="outlined" color="primary" type="submit">ENTRAR</Button>
        </FormContainer>

        </RegistrationContainer>
    </div>
        
    )
}

export default RegistrationPage