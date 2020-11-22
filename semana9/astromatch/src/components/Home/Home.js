import React, { useState } from 'react'
import ChooseProfile from '../ChooseProfile/ChooseProfile'
import {HomeContainer, Title, TitleColor, HeartImg, HomePage, ButtonSignIn} from "./styles"
import heart from "../../img/heart.png"

export default function Home() {
 const [renderChooseProfile, setRenderChooseProfile] = useState(false)


 const seeChooseProfile = () => {
    setRenderChooseProfile(!renderChooseProfile)
 }

    return (
        <HomeContainer>
          {renderChooseProfile ?
            <ChooseProfile />
            : <HomePage>
                 <HeartImg src={heart} alt={"imagem coração"}/>
                 <Title>O<TitleColor>MELHOR LUGAR</TitleColor>PARA CONHECER<TitleColor>NOVAS PESSOAS</TitleColor> </Title>
                 <ButtonSignIn onClick={seeChooseProfile}>VEM COM A GENTE</ButtonSignIn>
              </HomePage>}
        </HomeContainer>
    )

}

