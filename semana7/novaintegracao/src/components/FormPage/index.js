import React from "react"
import axios from "axios"
import {InputForm} from "./styles"

export default class FormPage extends React.Component {
    state = {
        nameValue: "",
        emailValue: ""
    }


createUser = () => {
    const body = {
        name: this.state.nameValue,
        email: this.state.emailValue
    }

    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
      headers: {
        Authorization: "bianca-mendes-dumont"
      }
    }).then ((response) => {
      this.setState({nameValue: "", emailValue: ""})
      alert("Usuario salvo com sucesso!")
      console.log("createuser")
    }).catch ((error) => {
      alert("Erro ao salvar usuário, tente novamente")
      console.log("erro salvar usuario")
    })
  }


onChangeNameValue = (event) => {
    this.setState({
        nameValue: event.target.value
    })
}

onChangeEmailValue = (event) => {
    this.setState({
        emailValue: event.target.value
    })
}

  render () {
    return (
      <div>
        <h2> PÁGINA DE CADASTRO</h2>
        <InputForm
        placeholder= "Digite seu nome"
        value = {this.state.nameValue}
        onChange= {this.onChangeNameValue}
        />
        <InputForm
        placeholder= "Digite seu email"
        value = {this.state.emailValue}
        onChange= {this.onChangeEmailValue}
        />
        <button onClick={this.createUser}>Salvar</button>
      </div>



    ) //fechamento return 
  } //fechamento render
} //fechamento class
