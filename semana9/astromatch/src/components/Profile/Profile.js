import React from 'react'
import styled from "styled-components"

const Profile  = (props) => {
    
    return (
        <div>
            <img src={props.photo} alt={props.name}/>
            <h3>{props.name},{props.age}</h3>
            <p>{props.bio}</p>

        </div>
    ) 
//esses props estão puxando as infos recebidas na função profile

}

export default Profile