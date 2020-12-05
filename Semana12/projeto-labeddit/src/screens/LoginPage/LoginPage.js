import React, { useEffect, useState } from "react"
import axios from "axios"
import { useForm } from "../../hooks/useForm"
import { urlBase } from "./../../constants/urlBase"
import { useHistory } from "react-router-dom"
import { goToRegistration } from "./../../routes/coordinator"
import {TextField, Button }  from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput'
import Visibility from "@material-ui/icons/Visibility"
import VisibilityOff from "@material-ui/icons/VisibilityOff"
import { LoginContainer, FormContainer, Title } from "./styled"
import InputLabel from '@material-ui/core/InputLabel';
import clsx from 'clsx';
import FormControl from '@material-ui/core/FormControl';
//import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//     margin: {
//       margin: theme.spacing(1),
//     },
    
    
//   }))
 
export default function LoginPage () {   
    //const classes = useStyles()
    const [showPassword, setShowPassword] = useState(false)
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
    
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault()
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
                    <FormControl variant="outlined" required="true" >
                     <InputLabel htmlFor="outlined-adornment-password" margin="dense" >Senha</InputLabel>
                    <OutlinedInput
                    id="outlined-adornment-password"
                    margin="dense"
                    label="Senha "
                    value={form.password}
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Senha"
                    onChange={handleInput}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="teste"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end" 
                            >
                            {showPassword ? <Visibility/> : <VisibilityOff />}
                           </IconButton>
                        </InputAdornment>
                      }
                      
                   />
                  </FormControl>
                    <Button variant="outlined" color="primary" type="submit">ENTRAR</Button>
                 </FormContainer>
                 <Button variant="outlined" color="primary" onClick={() => {goToRegistration(history)}}>CADASTRE-SE</Button>
            </LoginContainer>
        </div>
    )
}

