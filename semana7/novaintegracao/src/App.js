import React from "react"
import styled from "styled-components"
import FormPage from "./components/FormPage"
import UserList from "./components/UserList"


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
      <div>
        {currentPage}
        <button onClick= {this.changePage}>Ir para Lista</button>
      </div>



    ) //fechamento return 
  } //fechamento render
} //fechamento class
