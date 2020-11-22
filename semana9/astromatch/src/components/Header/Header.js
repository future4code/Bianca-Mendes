import React from 'react'
import {HeaderContainer, Title, HeartImg} from "./styles"
import heart from "../../img/heart.png"

function Header() {
    return (
      <HeaderContainer>
        <Title>ASTRO</Title>
        <HeartImg src={heart}/>
        <Title>MATCH</Title>
      </HeaderContainer>
    )
  }
  
  export default Header
  