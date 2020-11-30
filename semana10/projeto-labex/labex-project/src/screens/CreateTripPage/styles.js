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

export const ContainerCreateTrip = styled.div`  
 display: flex;
 flex-direction: column;
 align-items: center;
 `      

 export const Input = styled.input`  
 width: 250px;
 margin:5px; 
 display: block;
 height:20px;
 border-radius: 5px;
 `  

export const InputDescription = styled.input`
 width: 250px;
 margin:5px; 
 height:100px;
 display: block;
 border-radius: 5px;
 `   

export const PlanetSelect = styled.select`
 width: 250px;
 height:20px;
 border-radius: 5px;
`       

export const CreateTripButton = styled.button ` 
 outline: none;
 margin-top: 10px;
 margin-right: 5px;
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

export const BackButton = styled.button`
 outline: none;
 margin-top: 10px;
 margin-left: 5px;
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
