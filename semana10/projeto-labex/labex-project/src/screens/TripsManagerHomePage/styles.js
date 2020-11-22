import styled from "styled-components"

export const Title = styled.h2`
 color: white;
 font-weight: 400;
 font-size: 40px;
 justify-content: center;
 justify-self: center;
 align-items: center;
 padding: 20px;
`     

export const TripDetailsContainer = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 justify-self: center;
 align-items: center;
`      

export const TripsList = styled.p`
 color: white;
 font-size: 30px;
 margin:5px;
 cursor: pointer;
 &:hover {
   background-color: #2a9d8f;
   color: white;
   border-radius: 10px;
  }
`

export const CreateTripButton = styled.button`
 outline: none;
 cursor: pointer;
 background: transparent;
 font-size: 15px;
 border-radius: 40px;
 color: white;
 border: 2px solid white;
 margin:  20px;
 padding: 0.25em 1em;
 transition: 0.5s all ease-out;
 &:hover {
   background-color: #2a9d8f;
   color: white;
  }
`

export const BackButton = styled.button` 
 outline: none;
 cursor: pointer;
 background: transparent;
 font-size: 15px;
 border-radius: 40px;
 color: white;
 border: 2px solid white;
 padding: 0.25em 1em;
 transition: 0.5s all ease-out;
 &:hover {
   background-color: #2a9d8f;
   color: white;
  }
`      