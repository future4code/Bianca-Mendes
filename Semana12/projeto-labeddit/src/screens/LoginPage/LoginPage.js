import React, { useEffect } from "react"
import axios from "axios"
import { useForm } from "../../hooks/useForm"
import { urlBase } from "./../../constants/urlBase"
import { useHistory } from "react-router-dom"
import { goToRegistration } from "./../../routes/coordinator"
import { TextField, Button } from "@material-ui/core"
import { LoginContainer, FormContainer, Title } from "./styled"

const LoginPage = () => {
    
    const history = useHistory()
    const {form, onChange} = useForm({email: "", password:""})

    useEffect(() => {
        const token = localStorage.getItem("token")
    
        if (token) {
          history.push("/feed")
        } 
        
    }, [history]) 

    const handleInput = (event) => {
        const {value, name} = event.target
        onChange(value, name)
    }
    
    const login = (event) => {
        event.preventDefault()

        const body ={
            email: form.email,
            password: form.password
        }

        axios.post(`${urlBase}/login`, body)
        .then((res) => {
            console.log("entrar")
            localStorage.setItem("token", res.data.token)
            history.push("/feed")
            console.log("entrou")
        }).catch((err) => {console.log(err)})
    }

    return(
        <div>
            <Title>Login</Title>
            <LoginContainer>
        
                 <FormContainer onSubmit={login}>
                    <TextField
                    variant="outlined"
                    size="small"
                    label="E-mail"
                    value={form.email}
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    onChange={handleInput}
                    required
                    />
                    <TextField
                    variant="outlined"
                    size="small"
                    label="Senha"
                    value={form.password}
                    type="password"
                    name="password"
                    placeholder="Senha"
                    onChange={handleInput}
                    required/>
                    <Button variant="outlined" color="primary" type="submit">ENTRAR</Button>
                 </FormContainer>
                 <Button variant="outlined" color="primary" onClick={() => {goToRegistration(history)}}>CADASTRE-SE</Button>
            </LoginContainer>
        </div>
    )
}

export default LoginPage