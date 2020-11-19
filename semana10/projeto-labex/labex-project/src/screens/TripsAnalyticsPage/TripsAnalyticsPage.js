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
        console.log(setTrip, "teste")
        setTrip(res.data.trip)
      })
      .catch((err) => {
        console.log(err)
      })
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
            <p>{candidate.name}</p>
            <p>{candidate.applicationText}</p>
            <p>{candidate.profession}</p>
            <p>{candidate.age}</p>
            <p>{candidate.country}</p>
            </div>
          )
        })}
        
        
           
                          
            
        
        <button onClick={goToTripsManagerPage}>VOLTAR</button>
    </div>
  )
}

export default TripsAnalyticsPage