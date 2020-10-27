import React from "react";
import styled from "styled-components"
import axios from "axios"

export default class App extends React.Component {
  state = {
    users: [],
    inputNameValue: "",
    inputEmailValue: ""
  }

  onChangeInputName = (event) => {
    this.setState({inputNameValue: event.target.value})
  }

  onChangeInputEmail = (event) => {
    this.setState({inputEmailValue: event.target.value})
  }

  componentDidMount = () => {
    this.getUsers()
  }

  createUser = () => {
    const body = {
      name: this.state.inputNameValue,
      email: this.state.inputEmailValue
    }

    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
      headers: {
        Authorization: "bianca-mendes-dumont"
      }
    }).then ((response) => {
      this.setState({inputNameValue: "", inputEmailValue: ""})
      this.getUsers()
      alert("Usuario salvo com sucesso!")
      console.log("createuser")
    }).catch ((error) => {
      alert("Erro ao salvar usuário")
      console.log("erro salvar usuario")
    })
  }

  getUsers = () => {
    axios.get ("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
      hearders: {
        Authorization: "bianca-mendes-dumont"
      }
    }).then((response) => {
      this.setState({users: response.data})
      console.log(response)
    }).catch((error) => {
      console.log("algo errado não esta certo")
    })
  }

 

  
  
render () {
    const usersList  = this.state.users.map((user) => {
      return <p key={user.id}>{user.name}</p>
    })

      return (
        <div>
          <input
          placeholder= "Digite seu nome"
          onChange= {this.onChangeInputName}/>
          <input
          placeholder= "Digite seu email"
          onChange= {this.onChangeInputEmail}/>
          <button onClick= {this.createUser}>Salvar</button>
          <button>Ir para página de lista</button>

          {usersList}
        </div>
      ) //fechamento return
} //fechamento render

} //fechamento App
  


/*
passos da forma que criei o projeto:

1.criei os dois inputs e botões para adicionar/mudar pagina
2. adicionei o state com array de dados, nome, email vazios
3. criação OnChange pra tornar os inputs funcionais
4. criação função onClick - salvar com axios
5. criação função getUsers pra puxar todos os usuarios cadastrados

*/