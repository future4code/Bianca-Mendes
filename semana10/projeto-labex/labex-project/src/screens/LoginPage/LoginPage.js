import React, { useState, useEffect } from "react"
import {useHistory} from "react-router-dom"
import {baseUrl} from "../../constants/url"
import axios from "axios"
import {Login, Input, ButtonSignIn, ButtonBack} from "./styles"

export function LoginPage() {
 const history = useHistory()
 const [email, setEmail] = useState("")
 const [password, setPassword] = useState("")

    const goToHomePage = () => {
        history.push("/")
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    useEffect(() => {
        const token = localStorage.getItem("token")
    
        if (token) {
          history.push("/managerarea")
        } 
        
    }, [history])

//requisição para entrar área privada
    const goToTripsManagerPage = () => {
          const body = {
              email: email,
              password: password
          }

          axios.post(`${baseUrl}login`, body)
          .then((res) => {
            localStorage.setItem("token", res.data.token)
            history.push("/managerarea")
          })
          .catch((err) => {
              console.log(err)
          })
    }

        return (
            <div>
              <Login>LOGIN</Login>
              <Input
                value={email}
                type="email"
                placeholder="E-mail"
                onChange={handleEmail}
              />
              <Input
                value={password}
                type="password"
                placeholder="Senha"
                onChange={handlePassword}
              />
              <ButtonSignIn onClick={goToTripsManagerPage}>ENTRAR</ButtonSignIn>
              <ButtonBack onClick={goToHomePage}>VOLTAR</ButtonBack>  
            </div>
  )
}

export default LoginPage