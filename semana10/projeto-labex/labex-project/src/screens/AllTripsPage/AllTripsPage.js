import React, { useState, useEffect} from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"
import TripCard from "../../components/TripCard/TripCard"
import { baseUrl } from "../../constants/url"
import { useRequestData } from "../../hooks/useRequestData"
import { BackButton, ScreenContainer } from "./styles"

const AllTripsPage = () => {
 const history = useHistory()
 const [image, setImage] = useState({})
 
//rota pra voltar pra página inicial    
    const goToHomePage = () => {
        history.push("/")
    }

//requisição de todas as viagens para a API
    const getTrips = useRequestData(`${baseUrl}trips`,undefined)
//o [] é considerado um valor verdadeiro mesmo vazio ou antes de receber o response da api, entao no  curto circuito vai estar sempre verdadeiro e mesmo vazio ele vai fazer o map, por isso da erro, ele tenta achar propriedades num array vazio   


    const getImage = () => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=ekMISx6KRcOVRt7hULqpxMp0PcU8V3MIbEC2jG27")
        .then((response)=> {
            setImage(response.data)
        })
    }

    useEffect(() => {
        getImage()
      }, [])

    return (
      <div>
        <ScreenContainer>
            {getTrips && getTrips.trips.map((item, i) => {   //curto-circuito pra ele usar apenas a parte vdd da constante getTrips
                return (
                <div>
                    <TripCard
                    key={item.id}
                    id={item.id}
                   // image={<img src={`https://picsum.photos/200/200/?a=${i}`} alt={"foto aleatoria"} />}
                    name={item.name}
                    description={item.description}
                    duration={item.durationInDays}
                    planet={item.planet}
                    date={item.date}
                    />
                </div>
                )
            })} 


           <div>
                    <TripCard 
                    image={<img src={image.url} alt={"nasa"}/> } 
                    />
            </div>    
                
        </ScreenContainer>
        <BackButton onClick={goToHomePage}>VOLTAR</BackButton>
      </div>
    )
}

export default AllTripsPage