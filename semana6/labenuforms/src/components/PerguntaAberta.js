import React from "react"

class PerguntaAberta extends React.Component {
    state = {                //tudo que vai mudar qndo a pagina for renderizada
        valorInputNome: "",
        valorInputIdade: "",
        valorInputEmail: "",
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

  render () {

    return (
    <div>
      <div Classname = "perguntaEtapa1"> 
      <p>{this.props.pergunta}</p>
      <input
          value= {this.state.valorInputNome}
          onChange= {this.state.onChangeInputNome}
          />
        
          <input
          value= {this.state.valorInpuIdade}
          onChange= {this.state.onChangeInputIdade}
          />
        
          
          <input
          value= {this.state.valorInputEmail}
          onChange= {this.state.onChangeInputEmail}
          />
        </div> 


    
        
        
    
    </div>

    ) //final return
  } //final render

} // final classe

export default PerguntaAberta