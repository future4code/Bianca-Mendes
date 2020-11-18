import React from "react"
import {useHistory} from "react-router-dom"

const TripsManagerHomePage = () => {
    const history = useHistory()

    const goToCreatePage = () => {
        history.push("/managerarea/create")
    }

    const goToAnalytcsPage = () => {
        history.push("/managerarea/analytcs")
    }

    const goToAllTrips = () => {
        history.push("/alltrips")
    }
    return (
    <div>
        <div>lista de viagens</div>
        <button onClick={goToCreatePage}>CRIAR VIAGENS</button>
        <button onClick={goToAnalytcsPage}>ANALISAR PEDIDOS</button>
        <button onClick={goToAllTrips} >SAIR</button>
    </div>
  )
}

export default TripsManagerHomePage