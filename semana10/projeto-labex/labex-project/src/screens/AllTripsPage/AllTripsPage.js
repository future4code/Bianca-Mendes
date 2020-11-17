import React from "react"
import {useHistory} from "react-router-dom"

const AllTripsPage = () => {
 const history = useHistory()
 

    const goToHomePage = () => {
        history.push("/")
    }

    const goToFormPage = () => {
        history.push("/alltrips/applicationform")
    }
    return (
    <div>
        <div>lista de viagens</div>
        <button onClick={goToHomePage}>VOLTAR</button>
        <button onClick={goToFormPage}>INCREVA-SE</button>
    </div>
  )
}

export default AllTripsPage