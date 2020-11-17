import React from "react"
import {useHistory} from "react-router-dom"

const CreateTripPage = () => {
    const history = useHistory()

    const goToTripsManagerPage = () => {
        history.push("/managerarea")
    }

        return (
    <div>
        <div>criar viagens</div>
        <button>CRIAR VIAGENS</button>
        <button onClick={goToTripsManagerPage} >VOLTAR</button>
    </div>
  )
}

export default CreateTripPage