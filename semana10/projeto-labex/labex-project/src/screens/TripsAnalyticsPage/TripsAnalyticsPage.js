import axios from "axios"
import React, { useState, useEffect } from "react"
import {useHistory, useParams} from "react-router-dom"
import {baseUrl} from "../../constants/url"


const TripsAnalyticsPage = () => {
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

   const decideCandidate = (candidateId) => {
     
      const body = {
        approve: true
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
       // alert("Candidato aceito")
        //getTripDetail()
        console.log("yeeey")
    }).catch(error => {
       // alert("Candidato recusado.")
        console.log(error, "ruuuuuim!")
    } )
   }

   const aprovedCandidate = (candidateId) => {
     decideCandidate(true, candidateId)
   }

   const rejectedCandidate = (candidateId) => {
    decideCandidate(false, candidateId)
  }
    const goToTripsManagerPage = () => {
        history.push("/managerarea")
    }

        return (
    <div>
        <div>analisar viagens</div>
        <p>{trip.name}</p>
        <p>{trip.planet}</p>
        <p>{trip.description}</p>
        {trip.candidates && trip.candidates.map((candidate) => {
          return (<div>
            <p>{candidate.id}</p>
            <p>{candidate.name}</p>
            <p>{candidate.applicationText}</p>
            <p>{candidate.profession}</p>
            <p>{candidate.age}</p>
            <p>{candidate.country}</p>
            <button onClick={aprovedCandidate}>ACEITAR</button>
            <button onClick={rejectedCandidate}>REJEITAR</button>
            {/* <button onClick={() => {decideCandidate(true, candidate.id)}}>ACEITAR CANDIDATO</button>
            <button onClick={() => {decideCandidate(false, candidate.id)}}>RECUSAR CANDIDATO</button> */}
            </div>
          )
        })}
        
        
           
                          
            
        
       
        <button onClick={goToTripsManagerPage}>VOLTAR</button>
    </div>
  )
}

export default TripsAnalyticsPage