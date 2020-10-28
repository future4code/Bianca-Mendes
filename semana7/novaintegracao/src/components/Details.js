import React from "react"
import axios from "axios"
import styled from "styled-components"



const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const axiosAuth = {
    headers: {
        Authorization: "bianca-mendes-dumont"
    }
}

export default class Details extends React.Component {
    state = {
        users: [],
    }



UserDetails = (userId) => {
    axios.get (`${url}/${userId}`, axiosAuth) 
        .then((response) => {
            this.setState({users: response.data})
            console.log(response)
        }).catch((error) => {
            console.log("erro detalhe usuario")
        })
    }
    render () {

        const details = this.state.users.map((user) => {
            return <p key={user.id}>
                {user.name} {user.email}
                </p>
        })

        return (
            {details}
        )
    }
}