import styled from "styled-components"

export const CardDetails = styled.div`
 position: absolute;
 width: 350px;
 height: 160px;
 display: flex;
 align-self: center;
 flex-direction: column;
 align-items: center; 
 background-color: palevioletred;
 border-radius: 10px;
 top: 200px;
`

export const Wrapper = styled.div`
 position: fixed;
 width: 84em;
 height: 100em;
 flex-direction: column;
 top: 0;
 left: 0;
 background-color: transparent;
 box-sizing: border-box;
 display: flex;
`

export const CloseButton = styled.button`
 cursor: pointer;
 background: transparent;
 font-size: 16px;
 border-radius: 3px;
 color: black;
 border: 2px solid black;
 padding: 0.10em 1em;
 transition: 0.5s all ease-out;
 &:hover {
   background-color: black;
   color: white;
}
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
 font-size: large;
 color: white;
 margin-left: 10px;
`
