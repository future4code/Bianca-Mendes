import styled from "styled-components"

export const PhotoBox = styled.div`
justify-content: center;
border-radius: 10px;
align-items: center;
margin: auto;
width: 98%;
height: 400px;//85%
background: url(${(props)=>props.photoUrl}) center center/cover;
display: flex;
align-items: flex-end;
box-shadow: 0 2px 10px 0 rgba(136, 136, 136, 0.77);
`

export const NameProfile = styled.h3`
font-family: 'Open Sans Condensed', sans-serif;
font-weight: 700;
font-size: x-large;
color: white;
padding-left:5px;
justify-content: center;
margin: 0;
`

export const BioProfile = styled.p`
font-family: 'Open Sans Condensed', sans-serif;
font-weight: 300;
font-size: x-large;
color: white;
padding-left:5px;
margin: 0;
margin-bottom: 5px;
`

export const BoxDescription = styled.div`
 background-color:rgba(0, 0, 0, 30%);  //30% de opacidade
 opacity: 100%; 
 border-radius: 0 0 10px 10px;
`

export const ButtonChoose = styled.img`
width: 80px;
height: 80px;
`

export const ButtonsContainer = styled.div`
cursor: pointer;
display: flex;
flex-direction: row;
justify-content: space-evenly;
margin-top:20px; 
`

export const ButtonClear = styled.img`
width: 40px;
height:40px;
margin-left: 5px;
`

export const ButtonsFooter = styled.div`
cursor: pointer;
display: flex;
flex-direction: row;
justify-content: center;
padding:20px 0; 
`

export const ButtonMatch = styled.img`
width: 50px;
height:40px;
margin-right: 5px;
` 
