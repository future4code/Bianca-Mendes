import React from "react"

class Etapa2 extends React.Component {
    state = {
        valorInputCurso: "",
        valorInputUnidade: ""
}

onChangeInputCurso = (event) => {
    this.setState({
        valorInputCurso: event.target.value,
        valorInputCurso: ""
    })
}

onChangeInputUnidade = (event) => {
    this.setState({
        valorInputUnidade: event.target.value,
        valorInputUnidade: ""    
    })
}

render () {

    return (
    <div>
        <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
        <ol>
          <li>
            <label>Qual curso?</label>
            <input
            value= {this.state.valorInputCurso}
            onChange= {this.state.onChangeInputCurso}
            />
          </li>
          <li>
            <label>Qual a unidade de ensino?</label>
            <input
            value= {this.state.valorInputUnidade}
            onChange= {this.state.onChangeInputUnidade}
            />
          </li>
        </ol>
    </div>
        )
}

}

export default Etapa2;


/*
<div>
<h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
<ol>
  <li>
    <label>Qual curso?</label>
    <input
    value= {this.state.valorInputCurso}
    onChange= {this.state.onChangeInputCurso}
    />
  </li>
  <li>
    <label>Qual a unidade de ensino?</label>
    <input
    value= {this.state.valorInputUnidade}
    onChange= {this.state.onChangeInputUnidade}
    />
  </li>
</ol>
</div>
*/