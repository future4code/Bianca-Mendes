import React from "react"
import axios from "axios"
import styled from "styled-components"






const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const axiosAuth = {
    headers: {
        Authorization: "bianca-mendes-dumont"
    }
}

export default class UserList extends React.Component {
    state = {
        users: []
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





  render () {
    const renderList = this.state.users.map((user) => {
        return <p key={user.id}>
            {user.name}
            
            <span onClick= {() => this.deleteUser(user.id)}>X</span> 
            
            </p> //usa a arrow function pra não excluir todos os usuarios de uma vez
    }) 

    

    return (
      <div>
        {renderList}
        
      </div>



    ) //fechamento return 
  } //fechamento render
} //fechamento class
