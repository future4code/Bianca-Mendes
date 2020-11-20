import styled, { withTheme } from "styled-components"

export const FormContainer = styled.div`
display: flex;
flex-direction:column;
align-items: center;
`    

export const Input = styled.input`
width: 250px;
margin:5px;
height: 20px;
justify-content: center;
border-radius: 5px;
`    

export const Select = styled.select` 
width: 250px;
margin:5px;
height: 20px;
border-radius: 5px;
` 

export const Title = styled.h2`   
color: white;
font-weight: 400;
padding-top: 150px;
padding-bottom: 20px;
text-align: center;
`     

export const SendButton = styled.button`
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

export const BackButton = styled.button`
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
 justify-content: center;
 margin-top: 20px;
 `      

export const InputDescription = styled.input`
 width: 250px;
 height:100px;
 border-radius: 5px;
 `      
