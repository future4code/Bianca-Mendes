import React from "react"
import {useHistory} from "react-router-dom"
import {useRequestData} from "../../hooks/useRequestData"
import {baseUrl} from "../../constants/url"
import {Title, TripDetailsContainer, TripsList, CreateTripButton, BackButton} from "./styles"


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
    <TripDetailsContainer>
        <Title>LISTA DE VIAGENS</Title>
            {getTrips && getTrips.trips.map((item) => {  
                return (
                    <TripsList onClick={() => detailsCandidates(item.id)}>
                      {item.name}
                    </TripsList>
                )
            })}     

        <CreateTripButton onClick={goToCreatePage}>CRIAR VIAGENS</CreateTripButton>
        <BackButton onClick={goToAllTrips}>SAIR</BackButton>
    </TripDetailsContainer>
  )
}

export default TripsManagerHomePage