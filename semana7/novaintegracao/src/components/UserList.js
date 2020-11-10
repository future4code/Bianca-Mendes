import React from 'react'
import axios from 'axios'
import styled from "styled-components"







const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const axiosAuth = {
    headers: {
        Authorization: "bianca-mendes-dumont"
    }
}
const Xdelete = styled.span`
color: red;
font-weight: bold;
margin-left: 08px;
cursor: pointer;
`
const Parag = styled.p`
cursor: pointer;
`
class Objeto {

    constructor (name, id, email) {
    this.name= name
    this.id= id
    this.email= email

    }
    
}

export default class UserList extends React.Component {
    state = {
        users: [],
        userDetail: [],
        seeDetails: false
        
    }
componentDidMount = () => {
    this.getUsers()
}
    
getUsers = () => {
    axios.get (url, axiosAuth) 
        .then((response) => {
          this.setState({users: response.data})
          console.log(response)
        }).catch((error) => {
          console.log("algo errado não esta certo")
        })
}

deleteUser = (userId) => {
    const confirmDel = window.confirm("Tem certeza que deseja excluir o usuário?") ? 
    axios.delete (`${url}/${userId}`, axiosAuth)
    .then((response) => {
        alert ("Usuário excluido com sucesso!")
        this.getUsers() //pra atualizar a lista assim que excluir, sem f5
    }).catch ((error) => {
        alert ("Erro ao excluir o usuário, tente novamente")
        console.log(error.message)
    }) : 0

}

UserDetails = (userId) => {

   userId = '52ef992d-bb2d-46b0-9ed8-ab941354707d'
    axios.get (`${url}/${userId}`, axiosAuth) 
        .then((response) => {
            this.setState({userDetail: Object.values(response.data), seeDetails: true})
            console.log(response)
        }).catch((error) => {
            console.log("erro detalhe usuario")
        })
    }

botao = () => {
    this.setState({
        seeDetails: false
    })
}

  render () {
    
 
     return (
      <div>
          <h2>LISTA USUÁRIOS CADASTRADOS</h2>
        {!this.state.seeDetails ? this.state.users.map((user) => {
        return <Parag  key={user.id}>
            
            <div onClick= {() => this.UserDetails(user.id)} key={user.id}> {user.name}</div>
            <Xdelete onClick= {() => this.deleteUser(user.id)}>X</Xdelete> 
            </Parag> //usa a arrow function pra não excluir todos os usuarios de uma vez
    }) : <h1>{this.state.userDetail[0]} - {this.state.userDetail[1]} - {this.state.userDetail[2]}</h1>
      
}


<button onClick = {this.botao}>OI</button>
        

        
                
        
      </div>



    ) //fechamento return 
  } //fechamento render
} //fechamento class
