import React, { useState } from "react"
import { useForm } from "../../hooks/useForm"
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
import FormControl from '@material-ui/core/FormControl';
import { login } from "../../services/user"

export default function LoginPage () {   
    const [showPassword, setShowPassword] = useState(false)
    const history = useHistory()
    const {form, onChange} = useForm({email: "", password:""})

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

    const handleSubmission = (event) => {
        event.preventDefault()
        login(form, history)
    }

    return(
        <div>
            <Title>Login</Title>
            <LoginContainer>
        
                 <FormContainer onSubmit={handleSubmission}>
                 
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

