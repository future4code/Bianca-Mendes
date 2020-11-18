import React from "react";
import {useHistory, useParams} from "react-router-dom"


const TripCardDetailsPage = (props) => {
 const history =  useHistory()
 const pathParams = useParams()
 const id = pathParams.id

    const goToFormPage = () => {
        history.push(`/alltrips/details/applicationform/${id}`)
    }

    

        return (
            <div>
                <p>teste</p> 
                <div>{props.image}</div> 
                <p>{props.name}</p>
                <p>{props.description}</p>
                <p>{props.duration}</p>
                <p>{props.planet}</p>
                <p>{props.date}</p>
                <button onClick={goToFormPage}>INSCREVA-SE</button>
                <button onClick={props.close}>VOLTAR</button>
      
            </div>
      
    
  )
}

export default TripCardDetailsPage