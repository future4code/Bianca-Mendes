import {useHistory, useParams} from "react-router-dom"
import React, { useState, useEffect } from "react"
import axios from "axios"
import { baseUrl } from "../../constants/url"
import {useProtectedPage} from "../../hooks/useProtectedPage"


const TripsAnalytcsPage = () => {
 const history = useHistory()
 const [trip,setTrip] = useState([])
 const pathParams = useParams()
 const id = pathParams.id

 useProtectedPage()

 useEffect(() => {
    getTripDetail();
  }, []);

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
        setTrip(res.data.trip);
        
      })
      .catch((err) => {
        console.log(err);
      });
  };
    const goToTripsManagerPage = () => {
        history.push("/managerarea")
    }

        return (
    <div>
        <div>analisar viagens</div>
        <div>{trip.name}</div>
        <div>{trip.planet}</div>
        <button onClick={goToTripsManagerPage}>VOLTAR</button>
    </div>
  )
}

export default TripsAnalytcsPage