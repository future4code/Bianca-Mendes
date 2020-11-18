import React, { useState, useEffect } from "react"
import {useHistory} from "react-router-dom"
import {baseUrl} from "../../constants/url"
import axios from "axios"

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
              <div>login</div>
              <input
                value={email}
                type="email"
                onChange={handleEmail}
              />
              <input
                value={password}
                type="password"
                onChange={handlePassword}
              />
              <button onClick={goToTripsManagerPage}>ENTRAR</button>
              <button onClick={goToHomePage}>VOLTAR</button>  
            </div>
  )
}

export default LoginPage