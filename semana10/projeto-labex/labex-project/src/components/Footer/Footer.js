import React from "react"
import instagram from "../../assets/instagram.svg"
import {SocialMidia, Logo, FooterContainer, Email} from "./styles"

const Footer = () => {
    return(
        <FooterContainer>
            <SocialMidia>
               <a href="https://www.instagram.com/" target="_blank">
                  <Logo src={instagram}  alt="Logotipo instagram" />
               </a>
               <a href="https://facebook.com/" target="_blank">
                  <Logo
                    src="https://www.flaticon.com/svg/static/icons/svg/179/179319.svg"
                    alt="Logotipo Facebook"
                />
               </a>
               <a href="https://twitter.com/login?lang=pt" target="_blank">
                  <Logo
                    src="https://www.flaticon.com/svg/static/icons/svg/179/179342.svg"
                    alt="Logotipo Twitter"
                />
               </a>
            </SocialMidia>
            
            <Email>atendimento@labex.com.br</Email>
       </FooterContainer>
    )
}

export default Footer