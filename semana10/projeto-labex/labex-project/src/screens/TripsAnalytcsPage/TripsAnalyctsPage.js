import React from "react"
import {useHistory} from "react-router-dom"

const TripsAnalytcsPage = () => {
    const history = useHistory()

    const goToTripsManagerPage = () => {
        history.push("/managerarea")
    }

        return (
    <div>
        <div>analisar viagens</div>
        <button onClick={goToTripsManagerPage} >VOLTAR</button>
    </div>
  )
}

export default TripsAnalytcsPage