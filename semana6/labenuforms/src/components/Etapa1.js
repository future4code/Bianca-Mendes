import React from "react"
import PerguntaAberta from "./PerguntaAberta"

class Etapa1 extends React.Component {
    /*
state = {                //tudo que vai mudar qndo a pagina for renderizada
        valorInputNome: "",
        valorInputIdade: "",
        valorInputEmail: ""
}

onChangeInputNome = (event) => {
    this.setState({
      valorInputNome: event.target.value,
      valorInputNome: ""
    })
  }

  onChangeInputIdade = (event) => {
    this.setState({
      valorInputIdade: event.target.value,
      valorInputIdade: ""
    })
  }

  onChangeInputEmail = (event) => {
    this.setState({
      valorInputEmail: event.target.value,
      valorInputEmail:""
      })
  }
*/

  render () {
  
    return (

<div>
      <h2>ETAPA 1 - DADOS GERAIS</h2>
      <PerguntaAberta pergunta={"1. Qual o seu nome?"} /> 
      <PerguntaAberta pergunta={"2. Qual sua idade?"} />
      <PerguntaAberta pergunta={"3. Qual seu email?"} />
        
        
        
      
    </div>


    )
  }

}

export default Etapa1;




/*
<div>
      <h2>ETAPA 1 - DADOS GERAIS</h2>
      <ol>
        <li>
          <label>Qual seu nome?</label>
          <input
          value= {this.state.valorInputNome}
          onChange= {this.state.onChangeInputNome}
          />
        </li>
        <li>
          <label>Qual sua idade?</label>
          <input
          value= {this.state.valorInpuIdade}
          onChange= {this.state.onChangeInputIdade}
          />
        </li>
        <li>
          <label>Qual seu email?</label>
          <input
          value= {this.state.valorInputEmail}
          onChange= {this.state.onChangeInputEmail}
          />
        </li>
        <li>
          <label>Qual a sua escolaridade?</label>
          <select>
            <option value= {"medio-incompleto"}>Ensino Médio Incompleto</option>
            <option value= {"medio-completo"}>Ensino Médio Completo</option>
            <option value= {"superior-incompleto"}>Ensino Superior Incompleto</option>
            <option value= {"superior-completo"}>Ensino Superior Completo</option>
          </select>
        </li>
      </ol>
      
    </div>
    */