import React from 'react'
import {CardDetails, Wrapper, CloseButton, NameProfile, BioProfile} from "./styles"

const  Details = (props) => {

    return(
        <Wrapper>
             <CardDetails>
                <NameProfile>{props.name}, {props.age}</NameProfile>
                <br/>
                <BioProfile>{props.bio}</BioProfile>
                <br/>
                <CloseButton onClick={props.close}>fechar</CloseButton>
             </CardDetails>
        </Wrapper>
    )
}

export default Details

