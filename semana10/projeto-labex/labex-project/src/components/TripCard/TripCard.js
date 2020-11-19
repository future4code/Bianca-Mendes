import { useState } from "react"
import {CardContainer, CardImage, CardText } from "./styles"
import TripCardDetailsPage from "../../screens/TripCardDetailsPage/TripCardDetailsPage"

const ShowCard = (props) => {
 
 const [seeDetails, setSeeDetails] = useState(false)
 const [id, setId] = useState("")

   
    
    const closeDetails = () => {
        setSeeDetails(false)
    }
        
        return (
            <div>
            {seeDetails ? <TripCardDetailsPage 
                image={props.image}
                name={props.name}
                close={closeDetails}
                description={props.description}
                duration={props.duration}
                planet={props.planet}
                date={props.date}
                id={props.id}
                /> : null }

            <CardContainer>
                <CardImage>{props.image}</CardImage> 
                <CardText>{props.name}</CardText>
                <button onClick={() => {setSeeDetails(true, setId)}} >DETALHES</button>
            </CardContainer>
            </div>
  )
}

export default ShowCard;