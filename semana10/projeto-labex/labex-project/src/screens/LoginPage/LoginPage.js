import axios from "axios"
import React, { useState, useEffect } from "react"
import {useHistory} from "react-router-dom"
import {baseUrl} from "../../constants/url"
import {Login, Input, ButtonSignIn, ButtonBack} from "./styles"
import {useForm} from "../../hooks/useForm"

export function LoginPage() {
 const history = useHistory()
 const {form, onChange} = useForm({email: "", password: ""})
 //const [email, setEmail] = useState("")
 //const [password, setPassword] = useState("")

    const goToHomePage = () => {
        history.push("/")
    }

    // const handleEmail = (e) => {
    //     setEmail(e.target.value)
    // }

    // const handlePassword = (e) => {
    //     setPassword(e.target.value)
    // }

    const handleInput = (event) => {
      const {value, name} = event.target
      onChange(value, name)
    }

    useEffect(() => {
        const token = localStorage.getItem("token")
    
        if (token) {
          history.push("/managerarea")
        } 
        
    }, [history])

//requisição para entrar área privada
    const goToTripsManagerPage = (event) => {
       
      event.preventDefault();

          const body = {
              email: form.email,
              password: form.password
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
              <form onSubmit={goToTripsManagerPage}>
              <Input
                value={form.email}
                type="email"
                name="email"
                placeholder="E-mail"
                onChange={handleInput}
                required
              />
              <Input
                value={form.password}
                type="password"
                name="password"
                placeholder="Senha"
                onChange={handleInput}
                required
              />
              <ButtonSignIn>ENTRAR</ButtonSignIn>
              <ButtonBack onClick={goToHomePage}>VOLTAR</ButtonBack> 
              </form> 
            </div>
  )
}

export default LoginPage