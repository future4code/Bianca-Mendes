import styled from "styled-components"

export const Title = styled.h3`
font-family: 'Open Sans Condensed', sans-serif;
font-weight: 700;
font-size: x-large;
font-style: italic;
color: white;
margin: 10px; 
text-align: center;
`

export const NameProfile = styled.h4`
font-family: 'Open Sans Condensed', sans-serif;
font-weight: 300;
font-size: x-large;
color: white;
margin-left: 10px;
cursor:pointer;
`

export const ImgProfile = styled.img`
width: 60px;
height: 60px;
border-radius: 50px;
padding: 5px;
`

export const MatchDetails = styled.div`
display: flex;
align-items: center;
`

export const ButtonContainer = styled.div`
position: fixed;
bottom:0;
display: flex;
flex-direction: row;
justify-content: center;
cursor: pointer;
padding:20px 0; 
margin-left: 9em;
`

export const BackButton = styled.img`
width: 40px;
height:40px;
margin-right:5px;
`

export const ClearButton = styled.img`
width: 40px;
height:40px;
margin-left:5px;
`

export const MatchMessage = styled.p`
font-family: 'Open Sans Condensed', sans-serif;
font-weight: 700;
font-size: xx-large;
font-style: italic;
color: white;
margin: 10px; 
text-align: center;
margin-top: 6em;
`