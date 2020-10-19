import React from "react"

class Etapa1 extends React.Component {
state = {                //tudo que vai mudar qndo a pagina for renderizada
        valorInputNome: "",
        valorInputIdade: "",
        valorInputEmail: "",
        //valorInputEscolaridade: ""
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

/*
  onChangeInputEscolaridade = (event) => {
    this.setState({
      valorInputEscolaridade: event.target.valorInputEscolaridade
    })
  }
  */

  render () {
  /*
    let escolaridade

    switch(valorInputEscolaridade) {
      case 1:
        escolaridade = "Ensino médio incompleto"
        break;
      case 2:
        escolaridade = "Ensino médio completo"
        break;
      case 3:
        escolaridade = "Ensino superior incompleto"
        break;
      case 4:
        escolaridade = "Ensino superior completo"
        break
    }*/

    return (

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


    )
  }

}

export default Etapa1;