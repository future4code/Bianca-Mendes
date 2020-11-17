import React from "react"
import {useHistory} from "react-router-dom"

const HomePage = () => {
    const history = useHistory()

    const goToLoginPage = () => {
        history.push("/login")
    }

    const goToTripsPage = () => {
        history.push("/alltrips")
    }

    return(
        <div>
            <div>teste</div>
            <button onClick={goToLoginPage}>LOGIN</button>
            <button onClick={goToTripsPage}>VER VIAGENS</button>
        </div>
    )
}

export default HomePage