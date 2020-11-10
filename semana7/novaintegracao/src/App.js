import React from "react"
import styled from "styled-components"
import FormPage from "./components/FormPage"
import UserList from "./components/UserList"


const AppContainer = styled.div `
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

`
export default class App extends React.Component {
  state = {
    formPage: true
  }

  changePage = () => {
    this.setState({formPage: !this.state.formPage})
  }

  

  render () {

      
      const currentPage = this.state.formPage ? <FormPage/> : <UserList/>

      
    return (
      <AppContainer>
        {currentPage}
        <button onClick= {this.changePage}>Ir para Lista</button>
      </AppContainer>



    ) //fechamento return 
  } //fechamento render
} //fechamento class
