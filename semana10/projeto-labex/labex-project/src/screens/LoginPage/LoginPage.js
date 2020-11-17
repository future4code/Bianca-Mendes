import React from "react"
import {useHistory} from "react-router-dom"

const LoginPage = () => {
    const history = useHistory()

    const goToHomePage = () => {
        history.push("/")
    }

    const goToTripsManagerPage = () => {
        history.push("managerarea")
    }
    return (
    <div>
        <div>login</div>
        <button onClick={goToTripsManagerPage}>ENTRAR</button>
        <button onClick={goToHomePage}>VOLTAR</button>
    </div>
  )
}

export default LoginPage