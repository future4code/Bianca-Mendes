import axios from "axios"
import React, { useState, useEffect } from "react"
import {useHistory, useParams} from "react-router-dom"
import {baseUrl} from "../../constants/url"
import {Title, TripName, TripDetails, ContainerDetails, DetailsContainer, CandidateDetails, CandidateDetail,  ApproveButton, RejectButton, BackButton, ApprovedContainer, TitleApproved, NameCandidate} from "./styles"


const TripsAnalyticsPage = (props) => {
 const history = useHistory()
 const [trip,setTrip] = useState({})
 const pathParams = useParams()
 const id = pathParams.id
 

  useEffect(() => {
    getTripDetail()
  }, [])

 const getTripDetail = () => {
    axios
      .get(
        `${baseUrl}trip/${id}`,
        {
          headers: {
            auth: localStorage.getItem("token")
          }
        }
      )
      .then((res) => {
        setTrip(res.data.trip)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const decideCandidate = (approved,candidateId) => {
    
      //setApproved(!approved)

      const body = {
        approve: approved
      }
    axios
      .put(`${baseUrl}trips/${id}/candidates/${candidateId}/decide`, body, 
      {
        headers: {
          auth: localStorage.getItem("token")
        }
      }
      )
      .then(() => {
        //setApproved(response.data)
        getTripDetail()
        console.log("yeeey")
    }).catch(error => {
        console.log(error, "ruuuuuim!")
    } )
   }

   
    const goToTripsManagerPage = () => {
        history.push("/managerarea")
    }

    return (
    <DetailsContainer>
        <Title>DETALHES VIAGEM</Title>
        <TripName>{trip.name}</TripName>
        <ContainerDetails>
        <TripDetails>Descrição: {trip.description}</TripDetails>
        <TripDetails>Planeta: {trip.planet}</TripDetails>
        <TripDetails>Duração: {trip.durationInDays} dias</TripDetails>
        <TripDetails>Data: {trip.date}</TripDetails>
        </ContainerDetails>
        <ApprovedContainer>
          <TitleApproved>Aprovados</TitleApproved>
          {trip.approved && trip.approved.map((candidate) => {
            return ( <NameCandidate>
              {candidate.name}
              </NameCandidate>
            )
          })}
        </ApprovedContainer>
        {trip.candidates && trip.candidates.map((candidate) => {
           return (
           <CandidateDetails key={candidate.id}>
              <CandidateDetail>Nome: {candidate.name}</CandidateDetail>
              <CandidateDetail>Texto inscrição: {candidate.applicationText}</CandidateDetail>
              <CandidateDetail>Profissão: {candidate.profession}</CandidateDetail>
              <CandidateDetail>Idade: {candidate.age}</CandidateDetail>
              <CandidateDetail>País: {candidate.country}</CandidateDetail>
              <ApproveButton onClick={() => {decideCandidate(true, candidate.id)}}>ACEITAR</ApproveButton>
              <RejectButton  onClick={ () => {decideCandidate(false, candidate.id)}}>REJEITAR</RejectButton>
           </CandidateDetails>
          )
        })}
        
        
           
                          
            
        
       
        <BackButton onClick={goToTripsManagerPage}>VOLTAR</BackButton>
    </DetailsContainer>
  )
}

export default TripsAnalyticsPage