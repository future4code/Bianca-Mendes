import React from "react"
import {useHistory} from "react-router-dom"
import {ButtonSignIn, Container, ButtonTrips} from "./styles"
const HomePage = () => {
    const history = useHistory()

    const goToLoginPage = () => {
        history.push("/login")
    }

    const goToTripsPage = () => {
        history.push("/alltrips")
    }

    return(
        <Container>
            <ButtonSignIn onClick={goToLoginPage}>LOGIN</ButtonSignIn>
            <ButtonTrips onClick={goToTripsPage}>VER VIAGENS</ButtonTrips>
        </Container>
    )
}

export default HomePage