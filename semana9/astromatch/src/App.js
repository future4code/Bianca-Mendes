import React from 'react'
import './App.css';
import styled from "styled-components"
import Home from './components/Home/Home';

const AppContainer = styled.div`
 display: flex;
 justify-content: center;
 flex-direction: column;
 align-items: center;
`

function App() {
  return (
    <AppContainer>
        <Home/>
    </AppContainer>
  )
}

export default App
