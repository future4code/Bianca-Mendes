import styled from "styled-components"

export const HomeContainer = styled.div `
 border: 1px solid gray;
 width: 400px;
 height:100vh;
 border-radius: 10px;
 background-color: #212122;
 margin: 0;
 padding: 0;
`

export const Title = styled.h1` 
 color: white;
 font-family: 'Open Sans Condensed', sans-serif;
 text-align: center;
` 

export const TitleColor = styled.h3`
 color: #ff3980;
`

export const HeartImg = styled.img`
 width: 120px;
 height: 120px;
 align-self: center;
 margin-top: 20vh;
`

export const HomePage = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
`

export const ButtonSignIn = styled.button`
 cursor: pointer;
 background: transparent;
 font-size: 16px;
 border-radius: 3px;
 color: palevioletred;
 border: 2px solid palevioletred;
 margin:  20px 95px;//0 6em;
 padding: 0.25em 1em;
 transition: 0.5s all ease-out;
 &:hover {
   background-color: palevioletred;
   color: white;
}
`    