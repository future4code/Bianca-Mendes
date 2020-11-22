import React from 'react'
import { PhotoBox, NameProfile, BioProfile, BoxDescription, ButtonChoose, ButtonsContainer, ButtonClear, ButtonsFooter, ButtonMatch } from "./styles"
import fire from "../../img/fire.png"
import ice from "../../img/ice-cubes.png"
import garbage from "../../img/garbage.png"
import heartmatch from "../../img/heartmatch.png"

const Profile  = (props) => {
    
    return (
        <div>
            <PhotoBox photoUrl={props.photo} src={props.photo}>
            <BoxDescription>
                <NameProfile>{props.name},{props.age}</NameProfile>
                <BioProfile>{props.bio}</BioProfile>
            </BoxDescription>
            </PhotoBox>
            
            <ButtonsContainer>
                <ButtonChoose src={fire} onClick={props.choosePerson} />
                <ButtonChoose src={ice} onClick={props.dontChoosePerson} />
            </ButtonsContainer>

            <ButtonsFooter>
                <ButtonMatch src={heartmatch} onClick={props.allMatchs}/>
                <ButtonClear src={garbage} onClick={props.clearMatchs}/>
            </ButtonsFooter>
        </div>
    ) 
//esses props estão puxando as infos recebidas na função profile.
}

export default Profile