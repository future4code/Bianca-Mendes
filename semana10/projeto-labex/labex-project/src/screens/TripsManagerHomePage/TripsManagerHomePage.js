import React, {useState} from "react"
import {useHistory, useParams} from "react-router-dom"
import {useRequestData} from "../../hooks/useRequestData"
import { baseUrl } from "../../constants/url"


const TripsManagerHomePage = () => {
 const history = useHistory()
 
    const getTrips = useRequestData(`${baseUrl}trips`,undefined)

    const detailsCandidates = (id) => {
        history.push(`/managerarea/analytics/${id}`)
       
    }

    const goToCreatePage = () => {
        history.push("/managerarea/create")
    }

    const goToAllTrips = () => {
        history.push("/alltrips")
    }
    return (
    <div>
        <div>lista de viagens</div>
        {getTrips && getTrips.trips.map((item) => {  
                return (
                    <p onClick={() => detailsCandidates(item.id)}>
                      {item.name}
                    </p>
                )
            })}     

        <button onClick={goToCreatePage}>CRIAR VIAGENS</button>
        <button onClick={goToAllTrips} >SAIR</button>
    </div>
  )
}

export default TripsManagerHomePage