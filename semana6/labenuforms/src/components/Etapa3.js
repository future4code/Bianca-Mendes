import React from "react"

class Etapa3 extends React.Component{
    state = {
        valorInputGradIn: "",
        
}

onChangeInputGradIn = (event) => {
    this.setState({
        valorInputGradIn: event.target.value,
        valorInputGradIn: ""
    })
}


render () {

    return (
        <div>
        <h2>ETAPA3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
        <ol>
          <li>
            <label>Por que você não terminou um curso de graduação?</label>
            <input
            value= {this.state.valorInputGradIn}
            onChange= {this.state.onChangeInputGradIn}
            />
          </li>
          <li>
            <label>Você fez algum curso complementar?</label>
            <select>
              <option value= {"nenhum"}>Nenhum</option>
              <option value= {"curso-tecnico"}>Curso técnico</option>
              <option value= {"curso-de-ingles"}>Curso de inglês</option>
            </select>
          </li>
        </ol>
    </div>
    )
}

}
export default Etapa3;