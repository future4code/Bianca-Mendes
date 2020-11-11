import logo from './logo.svg';
import './App.css';
import styled from "styled-components"
import ChooseProfile from './components/ChooseProfile/ChooseProfile';

const AppContainer = styled.div `
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`


function App() {
  return (
    <AppContainer>
      <ChooseProfile/>
    </AppContainer>
  );
}

export default App;
