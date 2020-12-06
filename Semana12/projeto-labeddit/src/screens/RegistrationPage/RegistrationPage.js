import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import {TextField, Button, InputAdornment, IconButton, OutlinedInput} from "@material-ui/core"
import Visibility from "@material-ui/icons/Visibility"
import VisibilityOff from "@material-ui/icons/VisibilityOff"
import {FormContainer, RegistrationContainer, Title} from "./styled"
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import { registration } from "../../services/user"

const RegistrationPage = () => {
    const [showPassword, setShowPassword] = useState(false)
    const history = useHistory()
    const {form, onChange} = useForm({email: "", password:"", username: ""})

    const handleInput = (event) => {
        const {value, name} = event.target
        onChange(value, name)
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }
    
    const handleSubmission = (event) => {
        event.preventDefault()
        registration(form, history)
    }

    return(
        <div>
            <Title>Faça seu cadastro</Title>
            <RegistrationContainer>
        
            <FormContainer onSubmit={handleSubmission}>
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
                <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password" margin="dense">Senha *</InputLabel>
                <OutlinedInput
                id="outlined-adornment-password"
                margin="dense"
                value={form.password}
                variant="outlined"
                label="Senha"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Senha"
                onChange={handleInput}
                required
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            onClick={handleClickShowPassword}
                            edge="end" 
                        >
                        {showPassword ? 
                       (<Visibility  />) : 
                       (<VisibilityOff />)}
                       </IconButton>
                    </InputAdornment>
                  }
                  />
                </FormControl>
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