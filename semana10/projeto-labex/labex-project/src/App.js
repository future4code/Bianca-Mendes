import './App.css'
import Router from './router/Router'
import styled from "styled-components"

const Container = styled.div`
width: 100%;
height: 40em;
background-color: #264653;
`    


export default function App() {
  return (
    <Container>
        <Router/>
    </Container>
  )
}


