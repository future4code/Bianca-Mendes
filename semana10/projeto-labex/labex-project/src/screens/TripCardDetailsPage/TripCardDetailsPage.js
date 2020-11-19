import React, { useState } from "react";
import {useHistory, useParams} from "react-router-dom"
import {useRequestData} from "../../hooks/useRequestData"
import { baseUrl } from "../../constants/url"


const TripCardDetailsPage = (props) => {
 //const [form, setForm] = useState("")
 const history =  useHistory()
//  const pathParams = useParams()
//  const id = pathParams.id

    const goToFormPage = (id) => {
        history.push(`/alltrips/details/applicationform/${id}`)
    }

    // const getTrips = useRequestData(`${baseUrl}trips`,undefined)

        return (
            <div>
                <div>{props.image}</div> 
                <p>{props.name}</p>
                <p>{props.description}</p>
                <p>{props.duration}</p>
                <p>{props.planet}</p>
                <p>{props.date}</p>

                {/* {getTrips && getTrips.trips.map((item) => {  
                return (
                    <button onClick={() => goToFormPage(item.id)}>
                      INSCREVA-SE
                    </button>
                )
            })} */}
                <button onClick={ () => goToFormPage(props.id)}>INSCREVA-SE</button>
                <button onClick={props.close}>VOLTAR</button>
      
            </div>
      
    
  )
}

export default TripCardDetailsPage