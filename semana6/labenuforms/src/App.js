import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from "styled-components"
import Etapa1 from "./components/Etapa1"
import Etapa2 from "./components/Etapa2"
import Etapa3 from "./components/Etapa3"
import Final from "./components/Final"


class App extends React.Component {
  state = {                
    etapa: 1
  }

  onClickProximaEtapa = () => {
    this.setState({etapa:this.state.etapa + 1})

  }

  
  render () {

    const trocaPagina = () => {
      switch (this.state.etapa) {
        case 1:
          return <Etapa1/>
        case 2:
          return <Etapa2/>
        case 3:
          return <Etapa3/>
        case 4:
          return <Final/>
      }


    }

    return (

      <div>
      
        {trocaPagina()}
      
    {this.state.etapa !== 4 && <button onClick = {this.onClickProximaEtapa}>Próxima etapa</button> }
      
     
    </div>
    )
    //explicação botão: se a etapa 4 for diferente de 4, imprime o botão




  } //final render
   
} //final classe

export default App;


