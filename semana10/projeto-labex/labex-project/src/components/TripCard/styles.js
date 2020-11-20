import styled from "styled-components"

export const CardContainer = styled.div`
 width: 200px;
 height: 300px;
 border: 1.5px #2a9d8f dashed;
 display: flex;
 flex-direction: column;
 align-items: center;
 cursor: pointer;
 margin: 12px;
 &:hover {
  border: 2px #2a9d8f solid;
  }
`

export const CardImage = styled.div`
`

export const CardText = styled.p`
 margin: 8px;
 text-align: center;
 color: white;
 font-size: large;
`

export const DetailsButton = styled.button`
 outline: none;
 cursor: pointer;
 background: transparent;
 font-size: 15px;
 border-radius: 40px;
 color: white;
 border: 2px solid white;
 padding: 0.10em 0.75em;
 transition: 0.5s all ease-out;
 &:hover {
   background-color: #2a9d8f;
   color: white;
}
`   

export const Title = styled.h3`
margin-bottom: 10px;
font-weight:400;
`         

export const ModalDetails = styled.p`
margin-bottom: 10px;
font-weight:400;
`   

export const CloseButton = styled.button`
 outline: none;  
 cursor: pointer;
 background: transparent;
 font-size: 15px;
 border-radius: 40px;
 color: white;
 border: 2px solid white;
 padding: 0.10em 0.75em;
 transition: 0.5s all ease-out;
 &:hover {
   background-color: #2a9d8f;
   color: white;
}
`  

export const SignUpButton = styled.button` 
 outline: none;
 margin-left: 10px;
 cursor: pointer;
 background: transparent;
 font-size: 15px;
 border-radius: 40px;
 color: white;
 border: 2px solid white;
 padding: 0.10em 0.75em;
 transition: 0.5s all ease-out;
 &:hover {
   background-color: #2a9d8f;
   color: white;
}
`

export const ButtonContainer = styled.div`
 display: flex;
 flex-direction: wrap;
`   